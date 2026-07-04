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

export default function ClaudeTagWorkflowPage() {
  const title = "【中級者向け】チームのAI活用を加速！Anthropicの新機能『Claude Tag』による共同作業プロンプト術"
  const description = "2026年6月23日に発表されたAnthropicの新機能「Claude Tag」。チーム全体でプロンプトやドキュメントを共有・資産化し、業務フローを効率化するための実践的な活用ガイドです。"
  const keywords = "Claude Tag, Anthropic, AIチーム活用, プロンプト共有, 業務効率化, 2026年最新AI"
  const publishedDate = "2026-07-03T00:00:00Z"
  const modifiedDate = "2026-07-04T00:00:00Z"
  const url = "https://promptlist.jp/articles/claude-tag-workflow"
  const image = "https://promptlist.jp/images/claude-tag-eyecatch.jpg"

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
    { id: "overview", title: "概要" },
    { id: "team-ai", title: "「個人のAI」から「チームのAI」へ" },
    { id: "tag-strategy", title: "タグ付けの戦略的設計" },
    { id: "workflow", title: "チームの知恵を結集するワークフロー" },
    { id: "context-switch", title: "コンテキスト・スイッチをゼロに" },
    { id: "summary", title: "まとめ" },
  ]

  const relatedArticles = [
    {
      title: "【中級者向け】AIエージェントで業務を自動化！「自律型ワークフロー」構築プロンプト術",
      href: "/articles/ai-agent-workflow",
    },
    {
      title: "【中級者向け】AIと1000以上のアプリを直結！最新「MCP（Model Context Protocol）」連携ガイド",
      href: "/articles/mcp-integration-guide",
    },
    {
      title: "【中級者向け】AIが自律的にタスクを完遂！次世代AIエージェント『Manus』活用ガイド",
      href: "/articles/manus-autonomous-agent",
    },
  ]

  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ArticleHeader
          title={title}
          category="中級者向け"
          date="2026.07.03"
          tags={["Claude", "Anthropic", "チーム活用", "自動化"]}
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <section id="overview" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                概要
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                2026年6月23日、AnthropicはチームでClaudeを最大限に活用するための画期的な新機能「Claude Tag」を発表しました。これまで個人のチャット履歴に埋もれがちだった優れたプロンプトや重要なドキュメント、特定のトピックに関するやり取りを「タグ」によって体系的に整理し、チーム全体で共有できるようになります。本記事では、この機能を活用してチームの知恵を資産化し、業務効率を劇的に向上させるための中級者向け実践手法を詳しく解説します。
              </p>
            </section>

            <section id="team-ai" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                「個人のAI」から「チームのAI」へ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                多くの組織において、AI活用は依然として個人のスキルに依存しています。誰かが作成した「魔法のようなプロンプト」も、その人のチャット履歴の中に留まったままでは、チーム全体の生産性向上には繋がりません。Claude Tagはこの「共有の壁」を打破します。特定のプロジェクトやタスクに関連する情報をタグで紐付けることで、誰でも必要な時に、最適な文脈（コンテキスト）を引き出すことが可能になります。
              </p>
            </section>

            <section id="tag-strategy" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                タグ付けの戦略的設計
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                機能を効果的に使うためには、場当たり的なタグ付けではなく、戦略的な分類ルールが必要です。以下の3つの切り口での設計を推奨します。
              </p>
              <ArticleContent
                content={[
                  "プロジェクト別分類: 特定のクライアントやプロジェクト名（例: #Project-Alpha）で分類し、関連資料を即座に参照可能にする",
                  "職能・ロール別分類: マーケティング（#Marketing）、エンジニアリング（#Dev）など、専門領域ごとの定型プロンプトを管理する",
                  "フェーズ別分類: 企画（#Planning）、執筆（#Drafting）、校閲（#Review）など、業務の流れに沿ってタグを使い分ける",
                ]}
              />
              <p className="text-[#333333] leading-relaxed mt-4">
                特に、チーム共通の参照ドキュメント（ブランドガイドラインやコーディング規約など）を特定のタグに紐付けておくことで、Claudeが常に一貫性のある出力を生成するための「共通の文脈」として機能します。
              </p>
            </section>

            <section id="workflow" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                チームの知恵を結集するワークフロー
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                タグは単なる整理ツールではなく、継続的な改善のプラットフォームです。成功したプロンプトには「#BestPractice」タグを付与し、チームメンバーがそれを再利用・改良していく文化を醸成しましょう。
              </p>
              <PromptBlock
                title="ベストプラクティスの共有"
                prompt="このプロジェクトのロゴデザイン案を生成するための最適なプロンプトを #BestPractice タグに追加して。他のメンバーがこのタグを参照した際に、すぐに高品質な結果が得られるように、具体的な指示内容を整理して提示して。"
              />
            </section>

            <section id="context-switch" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                コンテキスト・スイッチをゼロに
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                中級者にとっての大きな課題は、複数のプロジェクトを並行する際の「頭の切り替え」です。Claude Tagを使用すれば、タグを切り替えるだけで、Claudeは瞬時にそのプロジェクト専用のAIへと変身します。過去の経緯や特定のルールをいちいち説明し直す必要はなく、作業効率は飛躍的に高まります。
              </p>
            </section>

            <section id="summary" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                まとめ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                2026年のAI活用において、個人の能力をチームの資産へと昇華させる「共有と整理」のスキルは、企業の競争力を左右する重要な要素となります。Claude Tagを使いこなし、属人化した知識をチームの知恵へと変えていくことで、次世代の自律型ワークフローを構築していきましょう。
              </p>
            </section>

            <section id="related" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                関連記事
              </h2>
              <RelatedArticles articles={relatedArticles} />
            </section>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>
        </div>
      </article>
    </PageLayout>
  )
}
