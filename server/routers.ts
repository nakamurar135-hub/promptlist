import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { getSubscriptionByUserId, isUserPremium } from "./db";
import { stripeRouter } from "./routers/stripe";

export const appRouter = router({
  system: systemRouter,

  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  subscription: router({
    /** 現在ログイン中のユーザーのサブスクリプション情報を取得する */
    getMySubscription: protectedProcedure.query(async ({ ctx }) => {
      const sub = await getSubscriptionByUserId(ctx.user.id);
      return sub ?? null;
    }),

    /** 現在ログイン中のユーザーがプレミアム会員かどうかを確認する */
    checkPremium: protectedProcedure.query(async ({ ctx }) => {
      const premium = await isUserPremium(ctx.user.id);
      return { isPremium: premium };
    }),
  }),

  /** Stripe決済関連 */
  stripe: stripeRouter,
});

export type AppRouter = typeof appRouter;
