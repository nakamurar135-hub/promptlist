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

## 記事ページレイアウト改善
- [x] セクションタイトルの文字サイズを大きくする（h2 → h1相当）
- [x] セクション間に区切り（hr）を挨む
- [x] セクションのpadding・marginを調整

### 記事避移修正
- [x] 全記事ページのタイトルid="article-title"アンカーを追加
- [x] 記事カードのリンク先を#article-titleで指定するように修正

## テーマ切り替え機能
- [x] useThemeカスタムフックを作成（ダークモード・ライトモード管理）
- [x] ThemeProviderコンテキストを実装
- [x] Header.tsxにテーマ切り替えボタンを追加（Moon/Sun アイコン）
- [x] localStorage にテーマ設定を永続化
- [x] useThemeのVitestテストを作成（5テスト全て通過）
- [x] 全ページでテーマ切り替えが正常に動作することを確認

## ダークモードカラースキーム最適化
- [x] index.cssにダークモード用のCSS変数を追加（背景・テキスト・ボーダー色）
- [x] Header.tsxのダークモード対応（背景色・テキスト色の調整）
- [x] Footer.tsxのダークモード対応
- [x] ページコンポーネント（Home、記事、スキルガイド）のダークモード対応
- [x] カード・ボタン・フォーム要素のダークモード対応
- [x] ブラウザでダークモード表示を確認（全ページで目に優しい配色か検証）

## Header表示修正
- [x] ライトモード時のプレミアム表記の背景色を実装前の色に戻す
- [x] ダークモード時のヘッダー「AIプロンプト活用ガイド」とアイコンを白色に変更

## テーマ切り替えボタン修正
- [x] ダークモード時の太陽マークを白色に修正

## 初心者向けプロンプト一覧ページ作成
- [x] BeginnerPrompts.tsxを作成
- [x] App.tsxに/articlesルートを追加
- [x] Home.tsxの「すべて見る＞」リンクを/articlesに設定（既に実装済み）

## ヘッダーリンク修正と不要ページ削除
- [x] Header.tsxの初心者向けプロンプトリンクを/articlesに変更
- [x] 元々のリンク先ページ（PromptGallery.tsx）を削除
- [x] App.tsxから削除したページのルートを削除

## 初心者用記事5件追加（add-beginner-promptsブランチマージ）
- [x] add-beginner-promptsブランチをマージ
- [x] 新しい記事ページを既存の記事と同じ形式で統一
- [x] BeginnerPrompts.tsxを新しい記事を含めて更新
- [x] App.tsxに新しい記事へのルートを追加

## ホームページ記事検索機能実装
- [x] SearchBar.tsxコンポーネントを作成
- [x] Home.tsxに検索機能を統合
- [x] 検索結果ページ（SearchResults.tsx）を作成
- [x] App.tsxに/searchルートを追加

## 中級者向けAIエージェント構築記事マージ（feature/ai-agent-courseブランチ）
- [x] feature/ai-agent-courseブランチをフェッチして内容を確認
- [x] 新しい記事ファイル（AiAgentCourseModule1.tsx）を既存の記事と同じ形式で作成
- [x] App.tsxに新しい記事へのルートを追加
- [x] BeginnerPrompts.tsxを更新して新しい記事を追加

## 中級者向けAIエージェント構築記事第2〜4回作成（プレミアムプラン対応）
- [x] 第2回「ReActフレームワークで実践的なAIエージェント構築」を作成
- [x] 第3回「マルチエージェントシステムの設計と実装」を作成
- [x] 第4回「本番環境へのデプロイとCI/CD構筑」を作成
- [x] App.tsxに3つの新しい記事へのルートを追加
- [x] BeginnerPrompts.tsxを更新して新しい記事を追加
- [x] PremiumGuide.tsxを作成してプレミアム記事を追加

## Git関連記事の配置修正
- [x] Git関連記事（AiAgentCourseModule1〜4）をBeginnerPrompts.tsxから削除
- [x] Home.tsxに中級者向けスキルガイドセクションを追加
- [x] Git関連記事へのリンクをホームの中級者向けセクションに配置

## プレミアムアクセス制御実装
- [ ] PremiumRouteガードコンポーネントを作成（未認証→ログイン、非プレミアム→アップグレードページにリダイレクト）
- [ ] App.tsxの中級者向けコース記事（Module1〜4）のルートをPremiumRouteでラップ
- [ ] 非プレミアム会員がアクセスした場合のリダイレクト動作を確認
