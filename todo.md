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
- [x] タスク自動化の基础ガイド（/skills/task-automation）
- [x] マルチエージェントシステムガイド（/skills/multi-agent-systems）
- [x] RAG実装ガイド（/skills/rag-implementation）
- [x] App.tsxに3ページのルートを追加
- [ ] Stripe決済連携（本番プレミアム課金）
- [ ] マイページ（/account）
- [ ] ビジネスメール記事など初心者向け記事の追加
- [ ] promptlist.jpカスタムドメイン設定

## SEO改善
- [x] /articles/chatgpt-question-template: document.titleを30〜60文字に設定
- [x] /articles/chatgpt-question-template: meta descriptionを50〜160文字で設定
- [x] /articles/chatgpt-question-template: meta keywordsを設定
- [x] /articles/chatgpt-meeting-minutes: useSEOフック適用（タイトル・description・keywords）
- [x] /articles/chatgpt-business-email: useSEOフック適用（タイトル・description・keywords）
- [x] /articles/chatgpt-line-reply: useSEOフック適用（タイトル・description・keywords）
- [x] /articles/chatgpt-blog-writing: useSEOフック適用（タイトル・description・keywords）
- [x] /articles/chatgpt-job-motivation: useSEOフック適用（タイトル・description・keywords）

## トップページ・スキルガイドのSEO改善
- [x] /: Home.tsxにuseSEOフック適用（タイトル・description・keywords）
- [x] /skills: SkillsList.tsxにuseSEOフック適用（タイトル・description・keywords）
- [x] /skills/ai-agent-basics: AiAgentBasics.tsxにuseSEOフック適用
- [x] /skills/prompt-engineering: PromptEngineering.tsxにuseSEOフック適用

## 法務・コンプライアンス
- [x] プライバシーポリシーページ（/privacy）を作成
- [x] 利用規約ページ（/terms）を作成（個人利用・商用利用OK、許可不要を明記）
- [x] App.tsxに2つのルートを追加

## OGP（Open Graph Protocol）実装
- [x] useOGPカスタムフックを作成（og:title、og:description、og:image、og:url）
- [x] useOGPのVitestテストを作成
- [x] 全15ページにuseOGPを適用

### 構造化データ（Schema.org）実装
- [x] useStructuredDataカスタムフックを作成（Article スキーマ）
- [x] useStructuredDataのVitestテストを作成
- [x] 全11ページ（記事6、スキルガイ5）にuseStructuredDataを適用

## 初心者向けプロンプト一覧ページ
- [x] PromptGallery.tsx を作成（/prompts）
  - カテゴリボタン（質問、議事録、メール、LINE、ブログ、職务経歴書）
  - カテゴリ絞り込み機能
  - カードグリッド表示（記事へのリンク）
  - useSEO、useOGP、useStructuredData を適用
- [x] App.tsx に /prompts ルートを追加
## ナビゲーション修正
- [x] Header.tsxの「初心者向けプロンプト」リンクを /prompts に 繋ぐ

## バグ修正
- [x] PromptGallery.tsxにヘッダーが表示されていない問題を修正
