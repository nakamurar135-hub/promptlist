/**
 * Stripeプロダクト・価格定義
 * テスト環境ではStripe Dashboardで作成した価格IDを使用します。
 * 本番環境では環境変数で上書きしてください。
 */

export const STRIPE_PRODUCTS = {
  premium: {
    name: "プレミアム会員",
    description: "中級者向けAIエージェントスキルガイドへの無制限アクセス",
    /** 月額 ¥980 - Stripe Dashboardで作成した価格ID */
    priceId: process.env.STRIPE_PREMIUM_PRICE_ID ?? "price_premium_monthly",
    amount: 980,
    currency: "jpy",
    interval: "month" as const,
  },
} as const;

export type ProductKey = keyof typeof STRIPE_PRODUCTS;
