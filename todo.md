# Promptlist TODO

## フェーズ1: 基盤構築
- [x] DBスキーマ設計（users + subscriptions テーブル）
- [x] pnpm db:push でマイグレーション実行
- [x] グローバルCSSのカラーパレット設定（#5B9BD5 / #FF9800）
- [x] Noto Sans JP フォント設定

## フェーズ2: 共通コンポーネント移植
- [x] Header コンポーネント（ロゴ・ナビ・認証ボタン）
- [x] Footer コンポーネント
- [x] PageLayout コンポーネント
- [x] PromptBlock コンポーネント（コピーボタン付き）
- [x] PromptInfoCard コンポーネント（response / usecase / tips）
- [x] ResponseExample コンポーネント
- [x] ArticleHeader コンポーネント
- [x] ArticleContent コンポーネント
- [x] TableOfContents コンポーネント
- [x] AffiliateBox コンポーネント
- [x] RelatedArticles コンポーネント
- [x] PremiumGate コンポーネント（有料コンテンツゲート）

## フェーズ3: ページ実装
- [x] トップページ（ヒーロー・初心者セクション・中級者セクション）
- [x] 記事カード一覧
- [x] 議事録作成記事ページ（/articles/chatgpt-meeting-minutes）
- [x] スキルガイド一覧ページ（/skills）
- [x] AIエージェント入門ガイド（無料・/skills/ai-agent-basics）
- [x] プロンプトエンジニアリング実践ガイド（有料・/skills/prompt-engineering）
- [x] tRPC subscription ルーター（getMySubscription / checkPremium / activatePremium）
- [x] アップグレードページ（/account/upgrade）
- [x] App.tsx ルーティング登録

## フェーズ4: テスト・品質
- [x] subscription.test.ts（Vitest）
- [x] auth.logout.test.ts（既存・通過確認）

## 今後の追加予定
- [ ] タスク自動化の基礎ガイド（/skills/task-automation）
- [ ] マルチエージェントシステムガイド（/skills/multi-agent-systems）
- [ ] RAG実装ガイド（/skills/rag-implementation）
- [ ] Stripe決済連携（本番プレミアム課金）
- [ ] マイページ（/account）
- [ ] ビジネスメール記事など初心者向け記事の追加
- [ ] promptlist.jpカスタムドメイン設定

## SEO改善
- [x] /articles/chatgpt-question-template: document.titleを30〜60文字に設定
- [x] /articles/chatgpt-question-template: meta descriptionを50〜160文字で設定
- [x] /articles/chatgpt-question-template: meta keywordsを設定
