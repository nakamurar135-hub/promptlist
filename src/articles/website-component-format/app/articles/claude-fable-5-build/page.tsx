"use client"

import { PageLayout } from "@/components/layout/PageLayout"
import { ArticleHeader } from "@/components/article/ArticleHeader"
import { ArticleContent } from "@/components/article/ArticleContent"
import { TableOfContents } from "@/components/article/TableOfContents"
import { PromptBlock } from "@/components/article/PromptBlock"
import { RelatedArticles } from "@/components/cta/RelatedArticles"
import { useSEO } from "@/hooks/useSEO"
import { useOGP } from "@/hooks/useOGP"
import { useStructuredData } from "@/hooks/useStructuredData"

export default function ClaudeFable5BuildPage() {
  const title = "【中級者向け】開発がさらに加速！Claude Fable 5とClaude Codeで実現する「自律型開発」プロンプト術"
  const description = "2026年6月13日発表のClaude Fable 5は、開発に特化した次世代モデル。Claude Codeとの連携により、コード生成からテスト実行、デプロイまでを自律的に完遂するプロンプト術を解説します。"
  const keywords = "Claude Fable 5, Claude Code, AI開発, 自動化, プロンプト術, コード生成, テスト自動化, エージェント開発"
  const publishedDate = "2026-06-13T00:00:00Z"
  const modifiedDate = "2026-06-13T00:00:00Z"
  const url = "https://promptlist.jp/articles/claude-fable-5-build"
  const image = "https://promptlist.jp/images/claude-fable-5-eyecatch.jpg"

  // SEO最適化
  useSEO({ title, description, keywords })
  useOGP({ title, description, type: "article", image, url })
  useStructuredData({
    title,
    description,
    datePublished: publishedDate,
    dateModified: modifiedDate,
    image,
    url,
  })

  const tocItems = [
    { id: "overview", text: "概要", level: 2 as const },
    { id: "fable5-evolution", text: "Claude Fable 5の進化点", level: 2 as const },
    { id: "claude-code-integration", text: "Claude Codeとの高度な連携", level: 2 as const },
    { id: "goal-driven-prompt", text: "「要件定義型」プロンプト", level: 2 as const },
    { id: "autonomous-testing", text: "自律型テストとデバッグ", level: 2 as const },
    { id: "practical-examples", text: "実践的なプロンプト例", level: 2 as const },
    { id: "summary", text: "まとめ", level: 2 as const },
  ]

  const relatedArticles = [
    {
      title: "【中級者向け】ついに登場！Anthropicの次世代モデル『Claude 4 Preview』活用プロンプト術",
      href: "/articles/claude-4-preview-guide",
    },
    {
      title: "【中級者向け】AIが自律的にタスクを完遂！次世代AIエージェント『Manus』活用ガイド",
      href: "/articles/manus-autonomous-agent",
    },
    {
      title: "【中級者向け】自分専用のAIツールをノーコードで！Claude Opus 4.7 & Claude Builder 活用ガイド",
      href: "/articles/claude-opus-47-builder",
    },
  ]

  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/claude-fable-5-eyecatch.jpg"
          createdAt="2026.06.13"
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <section id="overview" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                概要
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                2026年6月13日、Anthropicは開発に特化した次世代モデル「Claude Fable 5」を発表しました。これまでのClaude 4を凌駕するコード生成能力と、進化した「Claude Code」ツールとの連携により、指示ひとつでバグ修正から新機能のデプロイまでを自律的に完遂することが可能になりました。本記事では、Claude Fable 5を使いこなし、開発効率を極限まで高めるための実践的なプロンプト術を解説します。
              </p>
            </section>

            <section id="fable5-evolution" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                Claude Fable 5の進化点
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Claude Fable 5は、開発者の生産性を劇的に向上させるための複数の革新を備えています。
              </p>
              <ArticleContent
                content={[
                  "開発特化型推論: Python、JavaScript、Go、Rust など複数の言語でのコード生成精度が大幅に向上",
                  "コンテキスト理解の深化: プロジェクト全体のアーキテクチャを理解し、一貫性のあるコード修正が可能",
                  "エラーハンドリング: 実行時エラーを自動で検出し、修正案を提案する「自己修正」機能",
                  "テスト生成: ユニットテスト、統合テストを自動で生成し、カバレッジを最大化",
                ]}
              />
            </section>

            <section id="claude-code-integration" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                Claude Codeとの高度な連携
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Claude Fable 5とClaude Codeの連携により、開発プロセス全体が自動化されます。
              </p>
              <ArticleContent
                content={[
                  "ターミナル統合: npm install、git commit、テスト実行などのコマンドを自律的に実行",
                  "ファイル操作: 複数のファイルを同時に編集し、プロジェクト全体の一貫性を保証",
                  "エラー検出と修正: ビルドエラーやテスト失敗を自動で検出し、修正コードを生成",
                  "デプロイメント: 修正完了後、自動的にプルリクエストを作成し、デプロイ準備を整える",
                ]}
              />
            </section>

            <section id="goal-driven-prompt" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                「要件定義型」プロンプト
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Claude Fable 5を最大限に活用するには、細かなコード指示ではなく、実装したい「機能」や「修正内容」をゴールとして伝えることが重要です。
              </p>
              <p className="text-[#333333] leading-relaxed mb-4">
                例えば、「このボタンの色を青に変えて」という指示ではなく、「ユーザーが確認ボタンをクリックしたときに、フォーム検証を実行し、エラーがあれば赤いメッセージを表示、成功したらAPIに送信して」というように、全体の要件を伝えることで、AIが最適なコード設計を自動で判断します。
              </p>
            </section>

            <section id="autonomous-testing" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                自律型テストとデバッグ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Claude Fable 5の最大の特徴は、テストを自動で生成し、エラーを自ら修正する能力です。
              </p>
              <p className="text-[#333333] leading-relaxed mb-4">
                開発者が新機能を実装するよう指示すると、Claude Fable 5は以下のサイクルを自動で繰り返します：
              </p>
              <ArticleContent
                content={[
                  "コード生成: 要件に基づいてコードを生成",
                  "テスト作成: ユニットテストと統合テストを自動で生成",
                  "テスト実行: 生成したテストを実行し、失敗箇所を特定",
                  "自己修正: テスト失敗の原因を分析し、コードを修正",
                  "検証: 修正後、再度テストを実行して成功を確認",
                ]}
              />
            </section>

            <section id="practical-examples" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                実践的なプロンプト例
              </h2>
              <PromptBlock
                title="認証機能の拡張"
                prompt="既存の認証システムにパスキー認証を追加して。フロントエンド（React）とバックエンド（Node.js）の両方を修正し、テストが通ることを確認してからプルリクエストを作成して"
              />
              <PromptBlock
                title="セキュリティ脆弱性の自動修正"
                prompt="このプロジェクト全体のコードベースをスキャンし、最新のセキュリティ基準に照らして脆弱性を特定して。発見した箇所を自動で修正し、修正理由をドキュメントとして出力して"
              />
              <PromptBlock
                title="新しいダッシュボード画面の実装"
                prompt="新しいダッシュボード画面を作成して。指定のAPIからデータを取得し、インタラクティブなグラフを表示するコンポーネントを実装して。レスポンシブ対応も忘れずに。テストが通ることを確認してから完了して"
              />
            </section>

            <section id="summary" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                まとめ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Claude Fable 5とClaude Codeの組み合わせは、開発プロセスの大部分を自動化し、開発者が本当に重要な設計思想やビジネスロジックに集中できる環境を実現します。本記事で紹介したプロンプト術を活用し、この最新のAI開発ツールの力をあなたのプロジェクトに最大限に取り入れてみてください。
              </p>
            </section>


          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>
        </div>

        <RelatedArticles articles={relatedArticles} />
      </article>
    </PageLayout>
  )
}
