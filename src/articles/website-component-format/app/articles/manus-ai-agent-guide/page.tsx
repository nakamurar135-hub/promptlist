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

export default function ManusAiAgentGuidePage() {
  const title = "【中級者向け】AIが自律的にタスクを完遂！次世代AIエージェント『Manus』活用ガイド"
  const description = "Manusは、ユーザーの指示を受けて自律的にブラウザ操作やプログラミングを行い、複雑なタスクを完了させる次世代AIエージェントです。中級者向けの高度な活用術を解説します。"
  const keywords = "Manus, AIエージェント, 自律型AI, 業務自動化, プロンプトエンジニアリング, 2026年最新AI"
  const publishedDate = "2026-06-26T00:00:00Z"
  const modifiedDate = "2026-06-26T00:00:00Z"
  const url = "https://promptlist.jp/articles/manus-ai-agent-guide"
  const image = "https://promptlist.jp/images/manus-eyecatch.jpg"

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
    { id: "manus-whatis", title: "Manusとは？" },
    { id: "basic-usage", title: "基本的な使い方" },
    { id: "advanced-usage", title: "中級者向け活用術" },
    { id: "prompt-tips", title: "成功するプロンプトの共通点" },
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
      title: "【中級者向け】リサーチ時間を9割削減！Perplexity Proの『Research Agent』で深掘り調査を自動化するプロンプト術",
      href: "/articles/perplexity-pro-advanced",
    },
  ]

  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ArticleHeader
          title={title}
          category="中級者向け"
          date="2026.06.26"
          tags={["Manus", "AIエージェント", "自動化"]}
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <section id="overview" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                概要
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Manusは、ユーザーの指示を受けて自律的にブラウザ操作やプログラミングを行い、複雑なタスクを完了させる次世代AIエージェントです。本記事では、中級者向けにManusの高度な活用術と、効率的なプロンプト構成について解説します。
              </p>
            </section>

            <section id="manus-whatis" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                Manusとは？：自律型AIエージェントの衝撃
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Manusは、単なるチャットボットではありません。ユーザーの「目的」を理解し、それを達成するために必要な「手段」を自ら考え、実行する自律型AIエージェントです。ブラウザを操作して情報を集め、コードを書いてデータを分析し、必要に応じてファイルを生成・アップロードする能力を持っています。
              </p>
            </section>

            <section id="basic-usage" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                基本的な使い方：ブラウザ操作とコード実行の融合
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Manusの真価は、ウェブ上の情報収集とローカル環境での処理をシームレスに行える点にあります。
              </p>
              <ArticleContent
                content={[
                  "URLを指定して、その内容を要約・分析させる",
                  "特定のトピックについてウェブ検索を行い、複数のソースから情報を統合する",
                  "Pythonなどのコードを実行して、複雑な計算やデータ可視化を行う",
                ]}
              />
            </section>

            <section id="advanced-usage" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                中級者向け活用術：複雑なリサーチとレポート作成の自動化
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                中級者レベルでは、Manusに「ワークフロー全体」を任せることが可能です。例えば、「競合他社の最新情報を調査し、それをスプレッドシートにまとめ、最終的な分析レポートをPDFで出力する」といった一連の作業を1つの指示で完結させることができます。
              </p>
            </section>

            <section id="prompt-tips" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                成功するプロンプトの共通点：ゴール設定と制約事項の明確化
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Manusに期待通りの成果を出させるためには、以下の要素をプロンプトに含めることが重要です。
              </p>
              <PromptBlock
                title="効果的なプロンプトの構成例"
                prompt="[ゴール]: 〇〇についての調査レポートを作成して。[形式]: Markdown形式、図解を含むこと。[制約]: 信頼できるソースのみを使用し、直近1ヶ月以内の情報を優先して。[出力先]: /home/ubuntu/reports/ ディレクトリに保存して。"
              />
            </section>

            <section id="summary" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                まとめ：AIエージェントと共に働く未来
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Manusのような自律型AIエージェントを使いこなすことは、これからの知的生産において不可欠なスキルとなります。指示の出し方を工夫し、AIを「優秀な部下」として導くことで、個人の生産性は飛躍的に向上するでしょう。
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
