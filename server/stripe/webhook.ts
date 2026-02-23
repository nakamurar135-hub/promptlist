import type { Express, Request, Response } from "express";
import express from "express";
import Stripe from "stripe";
import {
  getUserByStripeCustomerId,
  getUserById,
  updateUserStripeCustomerId,
  upsertSubscription,
  deactivateSubscription,
  getSubscriptionByStripeId,
} from "../db";

function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
  return new Stripe(key, { apiVersion: "2026-01-28.clover" });
}

export function registerStripeWebhook(app: Express): void {
  // Webhookエンドポイントはexpress.json()より前にexpress.rawで登録する必要がある
  app.post(
    "/api/stripe/webhook",
    express.raw({ type: "application/json" }),
    async (req: Request, res: Response) => {
      const stripe = getStripe();
      const sig = req.headers["stripe-signature"] as string;
      const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

      let event: Stripe.Event;

      try {
        if (!webhookSecret) {
          console.warn("[Webhook] STRIPE_WEBHOOK_SECRET not set, skipping verification");
          event = JSON.parse(req.body.toString()) as Stripe.Event;
        } else {
          event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
        }
      } catch (err) {
        console.error("[Webhook] Signature verification failed:", err);
        return res.status(400).json({ error: "Webhook signature verification failed" });
      }

      console.log(`[Webhook] Received event: ${event.type} (${event.id})`);

      // テストイベントの検証応答
      if (event.id.startsWith("evt_test_")) {
        console.log("[Webhook] Test event detected, returning verification response");
        return res.json({ verified: true });
      }

      try {
        switch (event.type) {
          case "checkout.session.completed": {
            const session = event.data.object as Stripe.Checkout.Session;
            await handleCheckoutCompleted(session);
            break;
          }
          case "customer.subscription.updated": {
            const subscription = event.data.object as Stripe.Subscription;
            await handleSubscriptionUpdated(subscription);
            break;
          }
          case "customer.subscription.deleted": {
            const subscription = event.data.object as Stripe.Subscription;
            await handleSubscriptionDeleted(subscription);
            break;
          }
          case "invoice.payment_failed": {
            const invoice = event.data.object as Stripe.Invoice;
            console.log(`[Webhook] Payment failed for customer: ${invoice.customer}`);
            break;
          }
          default:
            console.log(`[Webhook] Unhandled event type: ${event.type}`);
        }

        res.json({ received: true });
      } catch (err) {
        console.error(`[Webhook] Error processing event ${event.type}:`, err);
        res.status(500).json({ error: "Webhook processing failed" });
      }
    }
  );
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session): Promise<void> {
  const userId = session.metadata?.user_id ? parseInt(session.metadata.user_id) : null;
  const stripeCustomerId = session.customer as string | null;

  if (!userId) {
    console.error("[Webhook] checkout.session.completed: user_id not found in metadata");
    return;
  }

  // stripeCustomerIdをユーザーに紐付ける
  if (stripeCustomerId) {
    await updateUserStripeCustomerId(userId, stripeCustomerId);
  }

  // サブスクリプションモードの場合
  if (session.mode === "subscription" && session.subscription) {
    const stripe = getStripe();
    const stripeSubscription = await stripe.subscriptions.retrieve(session.subscription as string);
    const priceId = stripeSubscription.items.data[0]?.price.id ?? null;
    // Stripe v20: cancel_at または trial_end を期限として使用
    const periodEnd = stripeSubscription.cancel_at
      ? new Date(stripeSubscription.cancel_at * 1000)
      : null;

    await upsertSubscription({
      userId,
      plan: "premium",
      isActive: true,
      stripeSubscriptionId: stripeSubscription.id,
      stripePriceId: priceId,
      startedAt: new Date(),
      expiresAt: periodEnd,
    });

    console.log(`[Webhook] Premium activated for user ${userId} (sub: ${stripeSubscription.id})`);
  }
}

async function handleSubscriptionUpdated(stripeSubscription: Stripe.Subscription): Promise<void> {
  const customerId = stripeSubscription.customer as string;
  const user = await getUserByStripeCustomerId(customerId);
  if (!user) {
    console.warn(`[Webhook] subscription.updated: user not found for customer ${customerId}`);
    return;
  }

  const isActive = stripeSubscription.status === "active" || stripeSubscription.status === "trialing";
  const priceId = stripeSubscription.items.data[0]?.price.id ?? null;
  const periodEnd = stripeSubscription.cancel_at
    ? new Date(stripeSubscription.cancel_at * 1000)
    : null;

  await upsertSubscription({
    userId: user.id,
    plan: isActive ? "premium" : "free",
    isActive,
    stripeSubscriptionId: stripeSubscription.id,
    stripePriceId: priceId,
    startedAt: new Date(),
    expiresAt: periodEnd,
  });

  console.log(`[Webhook] Subscription updated for user ${user.id}: status=${stripeSubscription.status}`);
}

async function handleSubscriptionDeleted(stripeSubscription: Stripe.Subscription): Promise<void> {
  const customerId = stripeSubscription.customer as string;
  const user = await getUserByStripeCustomerId(customerId);
  if (!user) {
    console.warn(`[Webhook] subscription.deleted: user not found for customer ${customerId}`);
    return;
  }

  await deactivateSubscription(user.id);
  console.log(`[Webhook] Subscription cancelled for user ${user.id}`);
}
