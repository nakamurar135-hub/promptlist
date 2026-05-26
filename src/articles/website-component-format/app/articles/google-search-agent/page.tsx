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

export default function GoogleSearchAgentPage() {
  const title = "【中級者向け】検索は「調べる」から「任せる」へ！Googleの新機能『検索エージェント』活用プロンプト術"
  const description = "2026年5月26日、Googleは検索の概念を根本から変える「検索エージェント」の投入を発表しました。自律型AIエージェントによる購入代行や予定調整を可能にするプロンプト術を解説します。"
  const keywords = "Google検索, 検索エージェント, AIエージェント, プロンプト術, 業務自動化, 2026年最新AI, ジェネレーティブUI"
  const publishedDate = "2026-05-26T00:00:00Z"
  const modifiedDate = "2026-05-26T00:00:00Z"
  const url = "https://promptlist.jp/articles/google-search-agent"
  const image = "https://promptlist.jp/images/google-search-agent-eyecatch.jpg"

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
    { id: "impact", title: "検索エージェントの衝撃" },
    { id: "generative-ui", title: "ジェネレーティブUIの活用" },
    { id: "agent-prompt", title: "エージェント指示型プロンプト" },
    { id: "seo-future", title: "SEOの未来" },
    { id: "prompt-examples", title: "実践的なプロンプト例" },
    { id: "summary", title: "まとめ" },
  ]

  const relatedArticles = [
    {
      title: "【中級者向け】AIが自律的にタスクを完遂！次世代AIエージェント『Manus』活用ガイド",
      href: "/articles/manus-autonomous-agent",
    },
    {
      title: "【中級者向け】AIが自律的にタスクを完遂！OpenAIの最新エージェント『Operator』による業務自動化プロンプト術",
      href: "/articles/openai-operator-automation",
    },
    {
      title: "【初心者向け】検索は「ググる」から「聞く」へ！Yahooの新機能『Yahoo Scout』活用プロンプト術",
      href: "/articles/yahoo-scout-beginner",
    },
  ]

  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ArticleHeader
          title={title}
          category="中級者向け"
          date="2026.05.26"
          tags={["Google", "AIエージェント", "検索"]}
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <section id="overview" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                概要
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                2026年5月26日、Googleは検索の概念を根本から変える「検索エージェント」の投入を発表しました。これまでの検索が「情報を探す」ためのものだったのに対し、新しい検索は「エージェントが自律的に動く」ための入り口となります。本記事では、今夏投入される情報エージェントを先取りし、購入代行や予定調整をAIに任せるための「エージェント指示型プロンプト」の極意を解説します。
              </p>
            </section>

            <section id="impact" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                検索エージェントの衝撃
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Googleが宣言した「検索エージェントの時代」は、私たちが毎日触れるインターネットの入り口を劇的に変えます。24時間バックグラウンドで動く情報エージェントは、ユーザーの代わりにチケットを監視したり、複雑な予定を調整したりといった、これまで人間がブラウザを行き来して行っていた作業を自律的にこなします。
              </p>
            </section>

            <section id="generative-ui" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                ジェネレーティブUIの活用
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                検索結果はもはや「リンクのリスト」や「文章による回答」に留まりません。新機能「ジェネレーティブUI」により、検索結果そのものが、そのまま操作可能な予約フォームや比較ツールとして生成されます。これにより、情報の確認から実行までをシームレスに行うことが可能になります。
              </p>
            </section>

            <section id="agent-prompt" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                エージェント指示型プロンプト
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                検索エージェントを使いこなすには、従来のキーワード検索とは異なる「指示型」のプロンプトが必要です。
              </p>
              <ArticleContent
                content={[
                  "期待する「最終結果」を定義する（例: 「最適な1つを仮予約して」）",
                  "エージェントに与える「権限」を明示する（例: 「メールで通知してから実行して」）",
                  "判断基準となる「制約条件」を具体化する（例: 「予算2万円以内」「駅から徒歩5分」）",
                ]}
              />
            </section>

            <section id="seo-future" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                SEOの未来
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                企業のマーケティング戦略も転換を迫られます。これまでは「検索結果の上位に表示されること」がゴールでしたが、これからは「AIエージェントの回答の中に、信頼できる出典として引用されること」が新しいゴールになります。情報の構造化と信頼性の担保が、これまで以上に重要になります。
              </p>
            </section>

            <section id="prompt-examples" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                実践的なプロンプト例
              </h2>
              <PromptBlock
                title="出張手配の自動化"
                prompt="来週の出張に合わせて、都内の予算2万円以内のホテルを3つピックアップし、空き状況を確認しておいて。最適な1つが見つかったら仮予約まで進めて"
              />
              <PromptBlock
                title="価格監視と購入準備"
                prompt="特定の商品の価格を毎日チェックし、過去1ヶ月の最安値を下回ったら即座に通知して。そのまま購入ページへのリンクも準備して"
              />
              <PromptBlock
                title="競合調査とドキュメント作成"
                prompt="競合他社の新製品発表を監視し、情報が出たら即座に主要スペックを既存製品と比較した表を作成してGoogleドキュメントに保存して"
              />
            </section>

            <section id="summary" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                まとめ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Googleの検索エージェントは、私たちの「調べ物」の時間を大幅に削減し、より価値のある意思決定に集中させてくれるツールです。まずは日常の小さなお願いからエージェントに任せてみることで、新しい時代のインターネット活用術を身につけていきましょう。
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
