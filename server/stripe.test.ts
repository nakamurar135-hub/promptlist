/**
 * Stripe 決済サービスのテスト
 * - createCheckoutSession: Checkout Session URL を返す
 * - createPortalSession: Customer Portal URL を返す
 * - handleStripeWebhook: Webhook イベントを処理する
 */
import { describe, expect, it, vi, beforeEach } from "vitest";

// Stripe SDK をモック
vi.mock("stripe", () => {
  const mockCheckoutCreate = vi.fn();
  const mockPortalCreate = vi.fn();
  const mockCustomerCreate = vi.fn();
  const mockSubscriptionRetrieve = vi.fn();
  const mockWebhooksConstructEvent = vi.fn();

  const MockStripe = vi.fn().mockImplementation(() => ({
    checkout: { sessions: { create: mockCheckoutCreate } },
    billingPortal: { sessions: { create: mockPortalCreate } },
    customers: { create: mockCustomerCreate },
    subscriptions: { retrieve: mockSubscriptionRetrieve },
    webhooks: { constructEvent: mockWebhooksConstructEvent },
  }));

  return { default: MockStripe };
});

// DB 関数をモック
vi.mock("./db", () => ({
  getSubscriptionByUserId: vi.fn(),
  getUserByStripeCustomerId: vi.fn(),
  upsertSubscription: vi.fn(),
  updateUserStripeCustomerId: vi.fn(),
  upsertUser: vi.fn(),
  getUserByOpenId: vi.fn(),
  isUserPremium: vi.fn(),
}));

// ENV をモック
vi.mock("./_core/env", () => ({
  ENV: {
    stripeSecretKey: "sk_test_mock",
    stripeWebhookSecret: "whsec_mock",
    stripePriceId: "price_mock_123",
  },
}));

import Stripe from "stripe";
import {
  getSubscriptionByUserId,
  getUserByStripeCustomerId,
  upsertSubscription,
  updateUserStripeCustomerId,
} from "./db";
import {
  createCheckoutSession,
  createPortalSession,
  handleStripeWebhook,
} from "./stripe";

// Stripe インスタンスのモック関数を取得するヘルパー
function getStripeMocks() {
  const instance = vi.mocked(Stripe).mock.results[0]?.value ?? new (vi.mocked(Stripe))("sk_test_mock", { apiVersion: "2026-01-28.clover" });
  return instance as {
    checkout: { sessions: { create: ReturnType<typeof vi.fn> } };
    billingPortal: { sessions: { create: ReturnType<typeof vi.fn> } };
    customers: { create: ReturnType<typeof vi.fn> };
    subscriptions: { retrieve: ReturnType<typeof vi.fn> };
    webhooks: { constructEvent: ReturnType<typeof vi.fn> };
  };
}

describe("createCheckoutSession", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("既存の stripeCustomerId がある場合は Customer を再利用して URL を返す", async () => {
    vi.mocked(getSubscriptionByUserId).mockResolvedValue({
      id: 1,
      userId: 1,
      plan: "premium",
      isActive: true,
      startedAt: new Date(),
      expiresAt: null,
      stripeCustomerId: "cus_existing",
      stripeSubscriptionId: "sub_existing",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const mocks = getStripeMocks();
    mocks.checkout.sessions.create.mockResolvedValue({ url: "https://checkout.stripe.com/pay/cs_test_123" });

    const url = await createCheckoutSession({
      userId: 1,
      userEmail: "user@example.com",
      origin: "https://example.com",
    });

    expect(url).toBe("https://checkout.stripe.com/pay/cs_test_123");
    expect(mocks.customers.create).not.toHaveBeenCalled();
    expect(mocks.checkout.sessions.create).toHaveBeenCalledWith(
      expect.objectContaining({
        customer: "cus_existing",
        mode: "subscription",
        allow_promotion_codes: true,
        locale: "ja",
        client_reference_id: "1",
      })
    );
  });

  it("stripeCustomerId がない場合は新規 Customer を作成する", async () => {
    vi.mocked(getSubscriptionByUserId).mockResolvedValue(undefined);
    vi.mocked(updateUserStripeCustomerId).mockResolvedValue(undefined);

    const mocks = getStripeMocks();
    mocks.customers.create.mockResolvedValue({ id: "cus_new" });
    mocks.checkout.sessions.create.mockResolvedValue({ url: "https://checkout.stripe.com/pay/cs_test_new" });

    const url = await createCheckoutSession({
      userId: 2,
      userEmail: "new@example.com",
      origin: "https://example.com",
    });

    expect(url).toBe("https://checkout.stripe.com/pay/cs_test_new");
    expect(mocks.customers.create).toHaveBeenCalledWith({
      email: "new@example.com",
      metadata: { userId: "2" },
    });
    expect(updateUserStripeCustomerId).toHaveBeenCalledWith(2, "cus_new");
  });

  it("Checkout Session URL が null の場合はエラーをスローする", async () => {
    vi.mocked(getSubscriptionByUserId).mockResolvedValue({
      id: 1,
      userId: 1,
      plan: "free",
      isActive: false,
      startedAt: new Date(),
      expiresAt: null,
      stripeCustomerId: "cus_existing",
      stripeSubscriptionId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const mocks = getStripeMocks();
    mocks.checkout.sessions.create.mockResolvedValue({ url: null });

    await expect(
      createCheckoutSession({ userId: 1, userEmail: "user@example.com", origin: "https://example.com" })
    ).rejects.toThrow("Stripe Checkout Session URL が取得できませんでした");
  });
});

describe("createPortalSession", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("Customer Portal URL を返す", async () => {
    vi.mocked(getSubscriptionByUserId).mockResolvedValue({
      id: 1,
      userId: 1,
      plan: "premium",
      isActive: true,
      startedAt: new Date(),
      expiresAt: null,
      stripeCustomerId: "cus_portal",
      stripeSubscriptionId: "sub_portal",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const mocks = getStripeMocks();
    mocks.billingPortal.sessions.create.mockResolvedValue({ url: "https://billing.stripe.com/session/bps_test" });

    const url = await createPortalSession({ userId: 1, origin: "https://example.com" });

    expect(url).toBe("https://billing.stripe.com/session/bps_test");
    expect(mocks.billingPortal.sessions.create).toHaveBeenCalledWith({
      customer: "cus_portal",
      return_url: "https://example.com/account",
    });
  });

  it("stripeCustomerId がない場合はエラーをスローする", async () => {
    vi.mocked(getSubscriptionByUserId).mockResolvedValue(undefined);

    await expect(
      createPortalSession({ userId: 99, origin: "https://example.com" })
    ).rejects.toThrow("Stripe Customer が見つかりません");
  });
});

describe("handleStripeWebhook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("テストイベント（evt_test_ 始まり）は処理をスキップして正常終了する", async () => {
    const mocks = getStripeMocks();
    mocks.webhooks.constructEvent.mockReturnValue({
      id: "evt_test_abc123",
      type: "customer.subscription.created",
      data: { object: {} },
    });

    await expect(
      handleStripeWebhook(Buffer.from("{}"), "sig_test")
    ).resolves.toBeUndefined();

    // upsertSubscription は呼ばれないはず
    expect(upsertSubscription).not.toHaveBeenCalled();
  });

  it("Webhook 署名検証失敗時はエラーをスローする", async () => {
    const mocks = getStripeMocks();
    mocks.webhooks.constructEvent.mockImplementation(() => {
      throw new Error("No signatures found matching the expected signature for payload");
    });

    await expect(
      handleStripeWebhook(Buffer.from("{}"), "invalid_sig")
    ).rejects.toThrow("Webhook 署名検証エラー");
  });

  it("customer.subscription.created イベントでサブスクリプションを upsert する", async () => {
    const mockSubscription = {
      id: "sub_created",
      customer: "cus_test",
      status: "active",
      start_date: Math.floor(Date.now() / 1000),
      cancel_at: null,
      metadata: { userId: "1" },
    };

    const mocks = getStripeMocks();
    mocks.webhooks.constructEvent.mockReturnValue({
      id: "evt_live_created",
      type: "customer.subscription.created",
      data: { object: mockSubscription },
    });
    vi.mocked(upsertSubscription).mockResolvedValue(undefined);

    await handleStripeWebhook(Buffer.from("{}"), "sig_valid");

    expect(upsertSubscription).toHaveBeenCalledWith(
      expect.objectContaining({
        userId: 1,
        plan: "premium",
        isActive: true,
        stripeCustomerId: "cus_test",
        stripeSubscriptionId: "sub_created",
      })
    );
  });

  it("customer.subscription.deleted イベントでサブスクリプションを無効化する", async () => {
    const mockSubscription = {
      id: "sub_deleted",
      customer: "cus_test",
      status: "canceled",
      start_date: Math.floor(Date.now() / 1000),
      cancel_at: null,
      metadata: { userId: "1" },
    };

    const mocks = getStripeMocks();
    mocks.webhooks.constructEvent.mockReturnValue({
      id: "evt_live_deleted",
      type: "customer.subscription.deleted",
      data: { object: mockSubscription },
    });
    vi.mocked(upsertSubscription).mockResolvedValue(undefined);

    await handleStripeWebhook(Buffer.from("{}"), "sig_valid");

    expect(upsertSubscription).toHaveBeenCalledWith(
      expect.objectContaining({
        userId: 1,
        plan: "free",
        isActive: false,
        stripeCustomerId: "cus_test",
        stripeSubscriptionId: "sub_deleted",
      })
    );
  });

  it("checkout.session.completed イベントで client_reference_id からユーザーIDを取得する", async () => {
    const mockSession = {
      id: "cs_live_completed",
      mode: "subscription",
      subscription: "sub_from_checkout",
      client_reference_id: "42",
      metadata: {},
    };

    const mockSubscription = {
      id: "sub_from_checkout",
      customer: "cus_checkout",
      status: "active",
      start_date: Math.floor(Date.now() / 1000),
      cancel_at: null,
      metadata: {},
    };

    const mocks = getStripeMocks();
    mocks.webhooks.constructEvent.mockReturnValue({
      id: "evt_live_checkout",
      type: "checkout.session.completed",
      data: { object: mockSession },
    });
    mocks.subscriptions.retrieve.mockResolvedValue(mockSubscription);
    vi.mocked(upsertSubscription).mockResolvedValue(undefined);

    await handleStripeWebhook(Buffer.from("{}"), "sig_valid");

    expect(mocks.subscriptions.retrieve).toHaveBeenCalledWith("sub_from_checkout");
    expect(upsertSubscription).toHaveBeenCalledWith(
      expect.objectContaining({
        userId: 42,
        plan: "premium",
        isActive: true,
      })
    );
  });
});
