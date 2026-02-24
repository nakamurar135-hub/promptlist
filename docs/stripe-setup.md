# Stripe決済連携セットアップガイド

## 概要

promptlistプロジェクトのStripe決済連携（月額¥500サブスクリプション）のセットアップ手順です。

---

## 1. Stripeダッシュボードでの準備

### 1-1. 商品・価格の作成

1. [Stripeダッシュボード](https://dashboard.stripe.com) にログイン
2. **「商品カタログ」→「商品を追加」** をクリック
3. 以下の設定で商品を作成：
   - 商品名：`promptlist プレミアムプラン`
   - 価格：`¥500/月`（定期支払い・月次）
   - 通貨：`JPY`
4. 作成後、**価格ID（`price_xxx`）** をコピーして環境変数 `STRIPE_PRICE_ID` に設定

### 1-2. Webhookエンドポイントの登録

1. **「開発者」→「Webhook」→「エンドポイントを追加」** をクリック
2. エンドポイントURL：`https://your-domain.com/api/stripe/webhook`
3. 受信するイベントを選択：
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
4. 作成後、**署名シークレット（`whsec_xxx`）** をコピーして環境変数 `STRIPE_WEBHOOK_SECRET` に設定

### 1-3. Customer Portalの設定

1. **「設定」→「Billing」→「Customer portal」** を開く
2. 以下を有効化：
   - サブスクリプションのキャンセル
   - 支払い方法の更新
3. **「保存」** をクリック

---

## 2. 環境変数の設定

`.env` ファイルに以下を追加：

```env
# Stripe
STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxx   # 本番キー（テスト時は sk_test_xxx）
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxx  # Webhookの署名シークレット
STRIPE_PRICE_ID=price_xxxxxxxxxxxx        # 月額¥500の価格ID
```

---

## 3. DBマイグレーションの実行

```bash
# subscriptionsテーブルにStripeカラムを追加
pnpm drizzle-kit migrate
```

または手動でSQLを実行：

```sql
ALTER TABLE `subscriptions`
  ADD COLUMN `stripeCustomerId` varchar(255),
  ADD COLUMN `stripeSubscriptionId` varchar(255),
  ADD UNIQUE INDEX `subscriptions_userId_unique` (`userId`);
```

---

## 4. 実装の概要

### バックエンド

| ファイル | 役割 |
|---|---|
| `server/stripe.ts` | Stripeクライアント・Checkout/Portal Session作成・Webhook処理 |
| `server/routers.ts` | tRPCルーター（`createCheckoutSession`・`createPortalSession`） |
| `server/_core/index.ts` | `/api/stripe/webhook` エンドポイント（raw body対応） |
| `server/db.ts` | Stripe関連のDB操作関数 |
| `drizzle/schema.ts` | `stripeCustomerId`・`stripeSubscriptionId` カラム追加 |

### フロントエンド

| ファイル | 役割 |
|---|---|
| `client/src/pages/account/Upgrade.tsx` | プラン比較・Stripe Checkoutへの接続・成功/キャンセルバナー |
| `client/src/pages/account/Account.tsx` | マイページ（サブスクリプション状態・次回請求日・解約ボタン） |
| `client/src/components/layout/Header.tsx` | プレミアムバッジ・アップグレードボタン |

---

## 5. 決済フロー

```
ユーザー
  ↓ 「プレミアムにアップグレード」ボタンをクリック
tRPC: subscription.createCheckoutSession
  ↓ Stripe Checkout Session を作成
Stripe Checkoutページ（stripe.com）
  ↓ 決済完了
/account/upgrade?success=true にリダイレクト
  ↓ 同時に Webhook: customer.subscription.created を受信
/api/stripe/webhook → handleStripeWebhook
  ↓ subscriptionsテーブルを plan=premium, isActive=true に更新
```

---

## 6. ローカルでのWebhookテスト

[Stripe CLI](https://stripe.com/docs/stripe-cli) を使用：

```bash
# Stripe CLIをインストール
brew install stripe/stripe-cli/stripe

# ログイン
stripe login

# ローカルサーバーにWebhookを転送
stripe listen --forward-to localhost:3000/api/stripe/webhook

# テストイベントを送信
stripe trigger customer.subscription.created
```

---

## 7. テストカード番号

| カード番号 | 用途 |
|---|---|
| `4242 4242 4242 4242` | 決済成功 |
| `4000 0000 0000 9995` | 決済失敗 |
| `4000 0025 0000 3155` | 3Dセキュア認証が必要 |

有効期限：任意の未来の日付、CVC：任意の3桁
