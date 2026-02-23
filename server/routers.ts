import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { getSubscriptionByUserId, isUserPremium, upsertSubscription } from "./db";

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
    /**
     * 現在ログイン中のユーザーのサブスクリプション情報を取得する
     */
    getMySubscription: protectedProcedure.query(async ({ ctx }) => {
      const sub = await getSubscriptionByUserId(ctx.user.id);
      return sub ?? null;
    }),

    /**
     * 現在ログイン中のユーザーがプレミアム会員かどうかを確認する
     */
    checkPremium: protectedProcedure.query(async ({ ctx }) => {
      const premium = await isUserPremium(ctx.user.id);
      return { isPremium: premium };
    }),

    /**
     * 管理者がユーザーをプレミアム会員に昇格させる（テスト用）
     * 本番では決済サービスのWebhookから呼び出す
     */
    activatePremium: protectedProcedure.mutation(async ({ ctx }) => {
      // 自分自身のサブスクリプションを有効化（デモ用）
      await upsertSubscription({
        userId: ctx.user.id,
        plan: "premium",
        isActive: true,
        startedAt: new Date(),
        expiresAt: null,
      });
      return { success: true };
    }),
  }),
});

export type AppRouter = typeof appRouter;
