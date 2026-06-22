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

export default function GoogleSearchAgentsBeginnerPage() {
  const title = "【初心者向け】もう「何度もググる」必要なし！Googleの新機能『Search Agents』で欲しい情報を自動で見張る術"
  const description = "Google I/O 2026で発表された『Search Agents』で、AIが24時間ネット上を監視。毎日の検索から解放される初心者向けプロンプト術を解説します。"
  const keywords = "Google Search Agents, 検索エージェント, AI検索, 自動監視, プロンプト術, 初心者向け, Google I/O 2026"
  const publishedDate = "2026-06-22T00:00:00Z"
  const modifiedDate = "2026-06-22T00:00:00Z"
  const url = "https://promptlist.jp/articles/google-search-agents-beginner"
  const image = "https://promptlist.jp/images/google-search-agents-eyecatch.jpg"

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
    { id: "what-is-search-agents", title: "『Search Agents』とは" },
    { id: "24hour-monitoring", title: "24時間365日の自動監視" },
    { id: "automatic-summarization", title: "AIが要約してくれる便利さ" },
    { id: "practical-examples", title: "初心者に身近な設定例" },
    { id: "prompt-examples", title: "実践的なプロンプト例" },
    { id: "summary", title: "まとめ" },
  ]

  const relatedArticles = [
    {
      title: "【初心者向け】検索ボックスが「相談窓口」に！Googleの新しい『AI検索窓』でやりたいことを伝えるプロンプト術",
      href: "/articles/google-search-box-beginner",
    },
    {
      title: "【中級者向け】検索は「調べる」から「任せる」へ！Googleの新機能『検索エージェント』活用プロンプト術",
      href: "/articles/google-search-agent",
    },
    {
      title: "【初心者向け】ググるより速い！ChatGPTの「検索機能（Search）」で最新情報を引き出すプロンプト術",
      href: "/articles/chatgpt-search-beginner",
    },
  ]

  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ArticleHeader
          title={title}
          category="初心者向け"
          date="2026.06.22"
          tags={["Google Search Agents", "検索エージェント", "AI検索"]}
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <section id="overview" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                概要
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                2026年5月のGoogle I/O 2026で発表された、Google検索の最新機能「Search Agents（情報エージェント）」。これまでは「新しい情報がないか、毎日自分で検索する」必要がありましたが、これからはAIエージェントに頼んでおくだけで、ネット上を24時間監視し、変化があったら要約して教えてくれます。本記事では、初心者が「欲しい情報の自動監視」という新しい体験を最大限に活用するプロンプト術を解説します。
              </p>
            </section>

            <section id="what-is-search-agents" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                『Search Agents』とは
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                『Search Agents』は、Google検索に新しく搭載されたAIエージェント機能です。従来の検索は「その瞬間の情報」を返すだけでしたが、Search Agentsは「継続的に情報を監視する」という新しい概念を実現しました。ユーザーが一度「監視対象」を指定すれば、AIエージェントが自動的にネット上（ブログ、SNS、ニュース）を見張り、変化があったときだけ通知してくれます。
              </p>
            </section>

            <section id="24hour-monitoring" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                24時間365日の自動監視
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Search Agentsの最大の魅力は、「寝ている間もAIが見張ってくれる」という点です。従来の検索では、欲しい情報を得るために自分で何度も検索する必要がありました。例えば、旅行の安いチケットを探している場合、毎日何度も検索して価格をチェックしなければなりませんでした。しかし、Search Agentsに「3万円以下のホテルを探して」と一度頼めば、あとはAIが自動的に監視し、条件に合う情報が出現したときだけ通知してくれるのです。
              </p>
            </section>

            <section id="automatic-summarization" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                AIが要約してくれる便利さ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Search Agentsが返すのは、単なる「検索結果のリスト」ではなく、AIが大事なところだけをまとめた「要約」です。これにより、ユーザーは大量の検索結果を自分で読む手間が省けます。例えば、「推しのアーティストのライブ情報」を監視している場合、新しい情報が出現したときに、Search Agentsは「いつ、どこで、いくらで」といった必要な情報だけを抽出して通知してくれます。
              </p>
              <ArticleContent
                content={[
                  "通知は要約形式で、大事な情報だけが記載される",
                  "複数の情報源から自動的に情報を集約",
                  "ユーザーが読むべき情報量が大幅に削減される",
                  "時間の節約と情報の正確性が両立する",
                ]}
              />
            </section>

            <section id="practical-examples" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                初心者に身近な設定例
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Search Agentsは、日常生活のあらゆる場面で活躍します。以下のような具体的な使い方が考えられます。
              </p>
              <ArticleContent
                content={[
                  "家電の底値チェック：欲しい家電が「〇万円以下」になったら通知",
                  "趣味のイベント情報：好きなアーティストのライブ情報が発表されたら通知",
                  "地域のお得情報：近所のレストランで「期間限定セール」が始まったら通知",
                  "求人情報：希望の職種・給与の求人が出現したら通知",
                  "旅行情報：行きたい目的地の「格安チケット」が出現したら通知",
                ]}
              />
            </section>

            <section id="prompt-examples" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                実践的なプロンプト例
              </h2>
              <PromptBlock
                title="旅行の格安チケット監視"
                prompt="新宿周辺で3万円以下のホテルに空きが出たら、すぐに教えて。毎日チェックしておいて。"
              />
              <PromptBlock
                title="推しのライブ情報監視"
                prompt="〇〇（好きなアーティスト）のライブ情報が発表されたら、内容をまとめて通知して。"
              />
              <PromptBlock
                title="新製品の予約開始監視"
                prompt="新型iPhoneの予約開始日が決まったら、どこで予約するのが一番お得か調べておいて。"
              />
              <PromptBlock
                title="家電の価格監視"
                prompt="〇〇というノートパソコンが10万円以下になったら教えて。毎日チェックしておいて。"
              />
              <PromptBlock
                title="地域のセール情報監視"
                prompt="渋谷周辺の洋服屋で「セール」が始まったら通知して。特に〇〇というブランドの情報が欲しい。"
              />
            </section>

            <section id="summary" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                まとめ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Google Search Agentsは、「検索」という行為を根本から変える革新的な機能です。従来は「自分で探す」ものだった検索が、これからは「AIに任せる」ものへと進化しました。初心者にとって、この機能を使いこなすことで、毎日の情報収集の手間を大幅に削減し、本当に大事な情報だけに集中することができるようになります。まずは、自分の日常生活で「毎日チェックしたいこと」をSearch Agentsに任せてみることで、その便利さを実感してみてください。
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
