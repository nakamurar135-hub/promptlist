import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// DB関数をモック
vi.mock("./db", () => ({
  getSubscriptionByUserId: vi.fn().mockResolvedValue(null),
  isUserPremium: vi.fn().mockResolvedValue(false),
  getUserById: vi.fn().mockResolvedValue({
    id: 1,
    openId: "test-user",
    name: "Test User",
    email: "test@example.com",
    stripeCustomerId: null,
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
    loginMethod: "manus",
  }),
  updateUserStripeCustomerId: vi.fn().mockResolvedValue(undefined),
  upsertSubscription: vi.fn().mockResolvedValue(undefined),
  deactivateSubscription: vi.fn().mockResolvedValue(undefined),
  getUserByStripeCustomerId: vi.fn().mockResolvedValue(null),
  getSubscriptionByStripeId: vi.fn().mockResolvedValue(null),
}));

function createAuthContext(): TrpcContext {
  return {
    user: {
      id: 1,
      openId: "test-user",
      email: "test@example.com",
      name: "Test User",
      loginMethod: "manus",
      role: "user",
      stripeCustomerId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: {
      protocol: "https",
      headers: { origin: "https://promptlist.jp" },
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("stripe.getSubscription", () => {
  it("未登録ユーザーはfreeプランを返す", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);
    const result = await caller.stripe.getSubscription();
    expect(result.isPremium).toBe(false);
    expect(result.plan).toBe("free");
  });
});

describe("subscription.checkPremium", () => {
  it("未登録ユーザーはisPremium=falseを返す", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);
    const result = await caller.subscription.checkPremium();
    expect(result.isPremium).toBe(false);
  });
});

describe("stripe.createCheckoutSession", () => {
  it("STRIPE_SECRET_KEYが未設定の場合はエラーを返す", async () => {
    const originalKey = process.env.STRIPE_SECRET_KEY;
    delete process.env.STRIPE_SECRET_KEY;

    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.stripe.createCheckoutSession({ priceId: "price_test_123" })
    ).rejects.toThrow();

    process.env.STRIPE_SECRET_KEY = originalKey;
  });
});

describe("stripe.createPortalSession", () => {
  it("stripeCustomerIdが未設定の場合はBAD_REQUESTエラーを返す", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.stripe.createPortalSession()).rejects.toMatchObject({
      code: "BAD_REQUEST",
    });
  });
});
