# スキルガイドページ作成プロンプト

以下のプロンプトを別セッションで使用して、残り3つのスキルガイドページを作成してください。

## ページ1: タスク自動化の基礎

```
以下の仕様に従って、/home/ubuntu/promptlist/client/src/pages/skills/TaskAutomation.tsx を作成してください。

**ページ情報：**
- ファイル名: TaskAutomation.tsx
- ルート: /skills/task-automation
- タイトル: タスク自動化の基礎：AIに複数ステップの作業を任せる
- 説明: AIエージェントを使って繰り返し作業を自動化する実践的な手法を学びます。ワークフロー設計から実装まで、具体的な事例を交えて解説します。
- レベル: 中級
- 読了時間: 約12分
- 無料: true
- カテゴリ: タスク自動化

**SEO設定（useSEOフックで設定）:**
- title: "タスク自動化の基礎｜AIに複数ステップの作業を任せる" (36文字)
- description: "AIエージェントを使った自動化の実践的な手法を学びます。ワークフロー設計から実装、エラーハンドリングまで、具体的な事例を交えて解説します。" (92文字)
- keywords: "タスク自動化,AIエージェント,ワークフロー,自動化,実践,中級,基礎,効率化,実装" (9語)

**コンテンツ構成：**
1. 目次（TableOfContents）
   - タスク自動化とは
   - ワークフロー設計の基礎
   - 条件分岐と繰り返し処理
   - エラーハンドリング
   - 実践例

2. 記事ヘッダー（ArticleHeader）
   - 上記のタイトル・説明を使用
   - カテゴリ: "タスク自動化"
   - 公開日: 2026年2月25日
   - 読了時間: 約12分

3. 記事本文（ArticleContent）
   - 各セクションに詳細な説明を追加
   - PromptBlock で実践的なプロンプト例を3-4個含める
   - PromptInfoCard で重要なポイントをハイライト

4. 関連記事（RelatedArticles）
   - AIエージェント入門へのリンク
   - プロンプトエンジニアリング実践へのリンク

**参考実装:**
- AiAgentBasics.tsx と PromptEngineering.tsx を参考に、同じ構造・スタイルで実装してください
- useSEO フックを必ずインポートして、コンポーネント内で呼び出してください
- PageLayout でラップしてください
```

## ページ2: マルチエージェントシステム

```
以下の仕様に従って、/home/ubuntu/promptlist/client/src/pages/skills/MultiAgentSystems.tsx を作成してください。

**ページ情報：**
- ファイル名: MultiAgentSystems.tsx
- ルート: /skills/multi-agent-systems
- タイトル: マルチエージェントシステム：複数のAIを連携させる
- 説明: 複数のAIエージェントが協調して複雑なタスクを解決するシステムの設計と実装を学びます。AutoGenやLangGraphなどのフレームワークも紹介します。
- レベル: 上級
- 読了時間: 約20分
- 無料: false（プレミアム）
- カテゴリ: マルチエージェント

**SEO設定（useSEOフックで設定）:**
- title: "マルチエージェントシステム｜複数のAIを連携させる" (35文字)
- description: "複数のAIエージェントが協調するシステムの設計と実装を学びます。AutoGen、LangGraph、エージェント間通信など、上級者向けの実装パターンを解説します。" (92文字)
- keywords: "マルチエージェント,AIエージェント,AutoGen,LangGraph,連携,上級,システム設計,実装,協調" (9語)

**コンテンツ構成：**
1. 目次（TableOfContents）
   - マルチエージェントシステムとは
   - 設計パターン
   - エージェント間通信
   - 実装フレームワーク比較
   - 実践例（プレミアム）

2. 記事ヘッダー（ArticleHeader）
   - 上記のタイトル・説明を使用
   - カテゴリ: "マルチエージェント"
   - 公開日: 2026年2月25日
   - 読了時間: 約20分

3. 記事本文（ArticleContent）
   - 各セクションに詳細な説明を追加
   - PromptBlock で実践的なプロンプト例を3-4個含める
   - PremiumGate で一部コンテンツをプレミアム限定にする
   - PromptInfoCard で重要なポイントをハイライト

4. 関連記事（RelatedArticles）
   - AIエージェント入門へのリンク
   - タスク自動化の基礎へのリンク

**参考実装:**
- PromptEngineering.tsx を参考に、PremiumGate を含めて実装してください
- useSEO フックを必ずインポートして、コンポーネント内で呼び出してください
- PageLayout でラップしてください
```

## ページ3: RAG実装ガイド

```
以下の仕様に従って、/home/ubuntu/promptlist/client/src/pages/skills/RagImplementation.tsx を作成してください。

**ページ情報：**
- ファイル名: RagImplementation.tsx
- ルート: /skills/rag-implementation
- タイトル: RAG実装ガイド：AIに最新情報を参照させる
- 説明: Retrieval-Augmented Generation（RAG）の仕組みと実装方法を解説します。自社データをAIに活用させる実践的なアーキテクチャを学びます。
- レベル: 上級
- 読了時間: 約18分
- 無料: false（プレミアム）
- カテゴリ: RAG

**SEO設定（useSEOフックで設定）:**
- title: "RAG実装ガイド｜AIに最新情報を参照させる" (32文字)
- description: "Retrieval-Augmented Generation（RAG）の仕組みと実装方法を解説します。ベクトルデータベース、チャンキング戦略など、実践的なアーキテクチャを学びます。" (92文字)
- keywords: "RAG,Retrieval-Augmented,実装,ベクトルデータベース,チャンキング,AI,上級,アーキテクチャ,実践" (9語)

**コンテンツ構成：**
1. 目次（TableOfContents）
   - RAGとは
   - RAGの基本アーキテクチャ
   - ベクトルデータベースの選定
   - チャンキング戦略
   - 実装例（プレミアム）

2. 記事ヘッダー（ArticleHeader）
   - 上記のタイトル・説明を使用
   - カテゴリ: "RAG"
   - 公開日: 2026年2月25日
   - 読了時間: 約18分

3. 記事本文（ArticleContent）
   - 各セクションに詳細な説明を追加
   - PromptBlock で実践的なプロンプト例を3-4個含める
   - PremiumGate で一部コンテンツをプレミアム限定にする
   - PromptInfoCard で重要なポイントをハイライト

4. 関連記事（RelatedArticles）
   - AIエージェント入門へのリンク
   - プロンプトエンジニアリング実践へのリンク

**参考実装:**
- PromptEngineering.tsx を参考に、PremiumGate を含めて実装してください
- useSEO フックを必ずインポートして、コンポーネント内で呼び出してください
- PageLayout でラップしてください
```

## App.tsxへのルート追加

以下のルートを App.tsx に追加してください：

```tsx
import TaskAutomation from "@/pages/skills/TaskAutomation";
import MultiAgentSystems from "@/pages/skills/MultiAgentSystems";
import RagImplementation from "@/pages/skills/RagImplementation";

// ルーティング設定に以下を追加
<Route path="/skills/task-automation" component={TaskAutomation} />
<Route path="/skills/multi-agent-systems" component={MultiAgentSystems} />
<Route path="/skills/rag-implementation" component={RagImplementation} />
```

## 実装後のタスク

1. ✅ 3つのスキルガイドページを作成
2. ✅ App.tsxにルートを追加
3. ✅ `pnpm test` でテストが全て通ることを確認
4. ✅ Githubにプッシュ
5. ✅ 別セッションで `webdev_save_checkpoint` を実行

---

## ダッシュボード確認情報

別セッションでダッシュボードを確認する場合は、以下の情報を使用してください：

**プロジェクト情報：**
- プロジェクト名: promptlist
- プロジェクトパス: /home/ubuntu/promptlist
- 最新バージョン: b289de60
- 開発サーバーURL: https://3000-iiibnxzkr08eyflnqk6i8-1a89bb72.sg1.manus.computer

**管理UI アクセス方法：**
1. Management UI の「Dashboard」パネルを開く
2. 以下の情報が確認できます：
   - サイト統計（UV/PV）
   - デプロイ状態
   - 最新チェックポイント
   - ドメイン設定
   - 支払い設定

**確認ポイント：**
- 現在のトラフィック（UV/PV）
- 過去のチェックポイント一覧
- ドメイン設定（promptlist.jp の設定状況）
- Stripe支払い設定の状態
