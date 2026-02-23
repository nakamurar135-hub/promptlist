import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// DB関数をモック
vi.mock("./db", () => ({
  getSubscriptionByUserId: vi.fn(),
  isUserPremium: vi.fn(),
  upsertSubscription: vi.fn(),
  upsertUser: vi.fn(),
  getUserByOpenId: vi.fn(),
}));

import { getSubscriptionByUserId, isUserPremium, upsertSubscription } from "./db";

function createAuthContext(userId = 1): TrpcContext {
  return {
    user: {
      id: userId,
      openId: "test-user-openid",
      email: "test@example.com",
      name: "テストユーザー",
      loginMethod: "manus",
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: vi.fn() } as unknown as TrpcContext["res"],
  };
}

describe("subscription.getMySubscription", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("サブスクリプションが存在する場合はそれを返す", async () => {
    const mockSub = {
      id: 1,
      userId: 1,
      plan: "premium" as const,
      isActive: true,
      startedAt: new Date(),
      expiresAt: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    vi.mocked(getSubscriptionByUserId).mockResolvedValue(mockSub);

    const caller = appRouter.createCaller(createAuthContext());
    const result = await caller.subscription.getMySubscription();

    expect(result).toEqual(mockSub);
    expect(getSubscriptionByUserId).toHaveBeenCalledWith(1);
  });

  it("サブスクリプションが存在しない場合はnullを返す", async () => {
    vi.mocked(getSubscriptionByUserId).mockResolvedValue(undefined);

    const caller = appRouter.createCaller(createAuthContext());
    const result = await caller.subscription.getMySubscription();

    expect(result).toBeNull();
  });
});

describe("subscription.checkPremium", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("プレミアム会員の場合はisPremium: trueを返す", async () => {
    vi.mocked(isUserPremium).mockResolvedValue(true);

    const caller = appRouter.createCaller(createAuthContext());
    const result = await caller.subscription.checkPremium();

    expect(result).toEqual({ isPremium: true });
  });

  it("無料会員の場合はisPremium: falseを返す", async () => {
    vi.mocked(isUserPremium).mockResolvedValue(false);

    const caller = appRouter.createCaller(createAuthContext());
    const result = await caller.subscription.checkPremium();

    expect(result).toEqual({ isPremium: false });
  });
});

describe("subscription.getMySubscription", () => {
  it("未登録ユーザーはnullを返す", async () => {
    const caller = appRouter.createCaller(createAuthContext());
    const result = await caller.subscription.getMySubscription();
    expect(result).toBeNull();
  });
});
