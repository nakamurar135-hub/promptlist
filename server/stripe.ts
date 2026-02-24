/**
 * Stripe決済サービス
 * - Checkout Session の作成（月額サブスクリプション）
 * - Customer Portal Session の作成（解約・プラン変更）
 * - Webhook イベントの処理
 *
 * Stripe SDK v20 (API version: 2026-01-28.clover) に対応
 */
import Stripe from "stripe";
import { ENV } from "./_core/env";
import {
  getSubscriptionByUserId,
  getUserByStripeCustomerId,
  upsertSubscription,
  updateUserStripeCustomerId,
} from "./db";

/** Stripeクライアントのシングルトン */
let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    if (!ENV.stripeSecretKey) {
      throw new Error("STRIPE_SECRET_KEY is not set");
    }
    _stripe = new Stripe(ENV.stripeSecretKey, {
      apiVersion: "2026-01-28.clover",
    });
  }
  return _stripe;
}

/**
 * Stripe Checkout Session を作成する
 * - 既存の Stripe Customer があれば再利用する
 * - 成功後は /account/upgrade?success=true へリダイレクト
 */
export async function createCheckoutSession(params: {
  userId: number;
  userEmail: string | null | undefined;
  origin: string;
}): Promise<string> {
  const stripe = getStripe();
  const { userId, userEmail, origin } = params;

  // 既存サブスクリプションから stripeCustomerId を取得
  const existingSub = await getSubscriptionByUserId(userId);
  let customerId: string | undefined = existingSub?.stripeCustomerId ?? undefined;

  // Customer が存在しない場合は作成
  if (!customerId) {
    const customer = await stripe.customers.create({
      email: userEmail ?? undefined,
      metadata: { userId: String(userId) },
    });
    customerId = customer.id;
    // DB に保存
    await updateUserStripeCustomerId(userId, customerId);
  }

  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    payment_method_types: ["card"],
    line_items: [
      {
        price: ENV.stripePriceId,
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: `${origin}/account/upgrade?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/account/upgrade?canceled=true`,
    locale: "ja",
    subscription_data: {
      metadata: { userId: String(userId) },
    },
  });

  if (!session.url) {
    throw new Error("Stripe Checkout Session URL が取得できませんでした");
  }
  return session.url;
}

/**
 * Stripe Customer Portal Session を作成する（解約・プラン変更用）
 */
export async function createPortalSession(params: {
  userId: number;
  origin: string;
}): Promise<string> {
  const stripe = getStripe();
  const { userId, origin } = params;

  const existingSub = await getSubscriptionByUserId(userId);
  const customerId = existingSub?.stripeCustomerId;
  if (!customerId) {
    throw new Error("Stripe Customer が見つかりません");
  }

  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${origin}/account`,
  });

  return session.url;
}

/**
 * Stripe Webhook イベントを処理する
 */
export async function handleStripeWebhook(
  rawBody: Buffer,
  signature: string
): Promise<void> {
  const stripe = getStripe();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      ENV.stripeWebhookSecret
    );
  } catch (err) {
    throw new Error(`Webhook 署名検証エラー: ${(err as Error).message}`);
  }

  switch (event.type) {
    // ===== サブスクリプション作成・更新 =====
    case "customer.subscription.created":
    case "customer.subscription.updated": {
      const subscription = event.data.object as Stripe.Subscription;
      await handleSubscriptionUpsert(subscription);
      break;
    }

    // ===== サブスクリプション削除（解約） =====
    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      await handleSubscriptionDeleted(subscription);
      break;
    }

    // ===== 支払い成功（念のため） =====
    case "invoice.payment_succeeded": {
      const invoice = event.data.object as Stripe.Invoice;
      // Stripe v20: invoice.parent.subscription_details.subscription でサブスクリプションIDを取得
      const subscriptionId = getSubscriptionIdFromInvoice(invoice);
      if (subscriptionId) {
        const subscription = await stripe.subscriptions.retrieve(subscriptionId);
        await handleSubscriptionUpsert(subscription);
      }
      break;
    }

    // ===== 支払い失敗 =====
    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      const subscriptionId = getSubscriptionIdFromInvoice(invoice);
      if (subscriptionId) {
        const subscription = await stripe.subscriptions.retrieve(subscriptionId);
        // 支払い失敗時はプレミアムを無効化
        const userId = getUserIdFromSubscription(subscription);
        if (userId) {
          await upsertSubscription({
            userId,
            plan: "free",
            isActive: false,
            startedAt: new Date(),
            expiresAt: null,
            stripeCustomerId: subscription.customer as string,
            stripeSubscriptionId: subscription.id,
          });
        }
      }
      break;
    }

    default:
      // 未処理のイベントは無視
      break;
  }
}

// ===== 内部ヘルパー =====

/**
 * Invoice から Subscription ID を取得する（Stripe v20 API 対応）
 * Stripe v20 では invoice.parent.subscription_details.subscription に移動
 */
function getSubscriptionIdFromInvoice(invoice: Stripe.Invoice): string | null {
  const parent = invoice.parent as
    | { type: string; subscription_details?: { subscription?: string | Stripe.Subscription } }
    | null;
  if (!parent) return null;
  if (parent.type !== "subscription_details") return null;
  const sub = parent.subscription_details?.subscription;
  if (!sub) return null;
  return typeof sub === "string" ? sub : sub.id;
}

function getUserIdFromSubscription(
  subscription: Stripe.Subscription
): number | null {
  const userIdStr = subscription.metadata?.userId;
  if (!userIdStr) return null;
  const userId = parseInt(userIdStr, 10);
  return isNaN(userId) ? null : userId;
}

async function handleSubscriptionUpsert(
  subscription: Stripe.Subscription
): Promise<void> {
  const customerId = subscription.customer as string;
  const isActive =
    subscription.status === "active" || subscription.status === "trialing";

  // メタデータからユーザーIDを取得
  let userId = getUserIdFromSubscription(subscription);

  // メタデータにない場合は Customer から検索
  if (!userId) {
    const user = await getUserByStripeCustomerId(customerId);
    if (!user) {
      console.warn(
        `[Stripe Webhook] userId が見つかりません: customerId=${customerId}`
      );
      return;
    }
    userId = user.userId;
  }

  // Stripe v20: cancel_at（次回キャンセル予定日）または ended_at を expiresAt として保存
  // current_period_end は v20 では billing_cycle_anchor に変更されたため cancel_at を使用
  const cancelAt = subscription.cancel_at;
  const expiresAt = cancelAt ? new Date(cancelAt * 1000) : null;

  await upsertSubscription({
    userId,
    plan: isActive ? "premium" : "free",
    isActive,
    startedAt: new Date(subscription.start_date * 1000),
    expiresAt,
    stripeCustomerId: customerId,
    stripeSubscriptionId: subscription.id,
  });
}

async function handleSubscriptionDeleted(
  subscription: Stripe.Subscription
): Promise<void> {
  const customerId = subscription.customer as string;
  let userId = getUserIdFromSubscription(subscription);

  if (!userId) {
    const user = await getUserByStripeCustomerId(customerId);
    if (!user) {
      console.warn(
        `[Stripe Webhook] userId が見つかりません（削除）: customerId=${customerId}`
      );
      return;
    }
    userId = user.userId;
  }

  await upsertSubscription({
    userId,
    plan: "free",
    isActive: false,
    startedAt: new Date(),
    expiresAt: new Date(), // 即時失効
    stripeCustomerId: customerId,
    stripeSubscriptionId: subscription.id,
  });
}
