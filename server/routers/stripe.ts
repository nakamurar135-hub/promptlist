import { TRPCError } from "@trpc/server";
import Stripe from "stripe";
import { z } from "zod";
import {
  getSubscriptionByUserId,
  getUserById,
  isUserPremium,
  updateUserStripeCustomerId,
} from "../db";
import { protectedProcedure, router } from "../_core/trpc";

function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Stripe is not configured" });
  return new Stripe(key, { apiVersion: "2026-01-28.clover" });
}

/** Stripeの顧客IDを取得または作成する */
async function getOrCreateStripeCustomer(userId: number, email: string | null | undefined, name: string | null | undefined): Promise<string> {
  const stripe = getStripe();
  const user = await getUserById(userId);

  if (user?.stripeCustomerId) {
    return user.stripeCustomerId;
  }

  const customer = await stripe.customers.create({
    email: email ?? undefined,
    name: name ?? undefined,
    metadata: { user_id: userId.toString() },
  });

  await updateUserStripeCustomerId(userId, customer.id);
  return customer.id;
}

export const stripeRouter = router({
  /** 現在のサブスクリプション状態を取得する */
  getSubscription: protectedProcedure.query(async ({ ctx }) => {
    const sub = await getSubscriptionByUserId(ctx.user.id);
    const isPremium = await isUserPremium(ctx.user.id);
    return {
      isPremium,
      plan: sub?.plan ?? "free",
      isActive: sub?.isActive ?? false,
      expiresAt: sub?.expiresAt ?? null,
      stripeSubscriptionId: sub?.stripeSubscriptionId ?? null,
    };
  }),

  /** Stripe Checkout Sessionを作成してURLを返す */
  createCheckoutSession: protectedProcedure
    .input(z.object({ priceId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const stripe = getStripe();
      const origin = ctx.req.headers.origin as string ?? "http://localhost:3000";

      const customerId = await getOrCreateStripeCustomer(
        ctx.user.id,
        ctx.user.email,
        ctx.user.name
      );

      const session = await stripe.checkout.sessions.create({
        customer: customerId,
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [{ price: input.priceId, quantity: 1 }],
        success_url: `${origin}/account?checkout=success`,
        cancel_url: `${origin}/account/upgrade?checkout=cancel`,
        allow_promotion_codes: true,
        client_reference_id: ctx.user.id.toString(),
        customer_email: customerId ? undefined : (ctx.user.email ?? undefined),
        metadata: {
          user_id: ctx.user.id.toString(),
          customer_email: ctx.user.email ?? "",
          customer_name: ctx.user.name ?? "",
        },
      });

      if (!session.url) {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to create checkout session" });
      }

      return { url: session.url };
    }),

  /** Stripe Customer Portalを作成してURLを返す（解約・プラン変更） */
  createPortalSession: protectedProcedure.mutation(async ({ ctx }) => {
    const stripe = getStripe();
    const origin = ctx.req.headers.origin as string ?? "http://localhost:3000";
    const user = await getUserById(ctx.user.id);

    if (!user?.stripeCustomerId) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Stripeの顧客情報が見つかりません。まずプレミアムプランに登録してください。",
      });
    }

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: user.stripeCustomerId,
      return_url: `${origin}/account`,
    });

    return { url: portalSession.url };
  }),
});
