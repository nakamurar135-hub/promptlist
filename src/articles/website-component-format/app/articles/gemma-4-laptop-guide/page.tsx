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

export default function Gemma4LaptopGuidePage() {
  const title = "【中級者向け】ノートPCで爆速動作！Googleの最新オープンモデル『Gemma 4』活用ガイド"
  const description = "2026年6月4日、Googleは一般的なノートPCでも動作可能なほど効率化された最新のオープンAIモデル『Gemma 4』を発表しました。ネイティブマルチモーダル対応で、テキスト・音声・画像を低遅延で処理。ローカル環境でAIエージェントを構築するためのプロンプト術と活用法を徹底解説します。"
  const keywords = "Gemma 4, Google, ローカルLLM, AIエージェント, マルチモーダル, ノートPC, プロンプト術, 2026年最新AI"
  const publishedDate = "2026-06-04T00:00:00Z"
  const modifiedDate = "2026-06-04T00:00:00Z"
  const url = "https://promptlist.jp/articles/gemma-4-laptop-guide"
  const image = "https://promptlist.jp/images/gemma-4-laptop-guide-eyecatch.jpg"

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

  const headerProps = {
    logoSrc: "/logo.svg",
    siteName: "PromptList",
    navItems: [
      { label: "ホーム", href: "/" },
      { label: "プロンプト集", href: "/prompts" },
      { label: "AIニュース", href: "/news" },
    ],
  }

  const footerProps = {
    categories: [
      {
        name: "プロンプト",
        articles: [
          { title: "初心者向け", href: "/prompts/beginner" },
          { title: "中級者向け", href: "/prompts/intermediate" },
        ],
      },
    ],
    copyright: "© 2026 PromptList",
  }

  const tocItems = [
    { id: "overview", title: "概要" },
    { id: "features", title: "Gemma 4の主な特徴" },
    { id: "laptop-ai-agent", title: "ノートPCでのAIエージェント構築" },
    { id: "multimodal-prompts", title: "マルチモーダル活用プロンプト例" },
    { id: "local-safety", title: "ローカル環境の安全性と利点" },
    { id: "references", title: "参考文献" },
  ]

  const relatedArticles = [
    {
      title: "【中級者向け】AI開発に激震！トランプ大統領の新AI大統領令と「事前審査」への対応プロンプト術",
      description: "2026年6月に発表された最新のAI規制に関する解説記事です。",
      href: "/articles/trump-ai-executive-order",
    },
    {
      title: "【中級者向け】WindowsをAIエージェントが操作する！Build 2026発表の『Agentic AI for Windows』とMCP活用ガイド",
      description: "Windows環境でのAIエージェント活用に関するガイドです。",
      href: "/articles/agentic-ai-windows",
    },
  ]

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          category="AIニュース・活用ガイド"
          date="2026.06.04"
          tags={["Gemma 4", "Google", "ローカルAI", "マルチモーダル"]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12 mt-8">
          <div>
            <section id="overview" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                概要
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Googleは2026年6月4日、同社のオープンモデルシリーズの最新版となる**『Gemma 4』**を発表しました。今回のアップデートで最も注目すべき点は、**「一般的なコンシューマー向けノートPCでネイティブに動作する」**ほど極限まで最適化されたモデルが含まれていることです。
              </p>
              <p className="text-[#333333] leading-relaxed">
                従来のローカルLLMは、動作に高性能なGPUや膨大なメモリを必要としていましたが、Gemma 4は独自のアーキテクチャにより、メモリ消費を大幅に抑制しつつ、テキスト・音声・画像を統合的に処理するマルチモーダル機能を備えています。
              </p>
            </section>

            <section id="features" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                Gemma 4の主な特徴
              </h2>
              <ArticleContent
                content={[
                  "**ノートPC最適化**: メモリ消費を抑え、一般的なビジネス用ノートPCでも低遅延で推論が可能。",
                  "**ネイティブマルチモーダル**: 専用のエンコーダーを介さず、テキスト、オーディオ、画像を直接処理できる新アプローチを採用。",
                  "**低遅延・高効率**: モバイルやエッジデバイスでの実行を想定し、推論スピードが飛躍的に向上。",
                  "**オープンライセンス**: 開発者が自由にカスタマイズし、ローカル環境で独自のAIエージェントを構築可能。",
                ]}
              />
            </section>

            <section id="laptop-ai-agent" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                ノートPCでのAIエージェント構築
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Gemma 4の登場により、クラウドに依存しない**「プライベートAIエージェント」**の構築が現実的になりました。機密性の高い社内資料や個人のカレンダー情報を、インターネットに送信することなくAIに解析させることが可能です。
              </p>
              <p className="text-[#333333] leading-relaxed">
                特に, Googleが同時に発表したAIアプリ「Dreambeans」のように、個人のカレンダーイベントや行動データに基づいたパーソナライズされた洞察を、ローカルで安全に生成できるようになります。
              </p>
            </section>

            <section id="multimodal-prompts" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                マルチモーダル活用プロンプト例
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Gemma 4のマルチモーダル機能を最大限に引き出すためのプロンプト例を紹介します。
              </p>
              <PromptBlock
                title="音声会議ログとスライド画像の同時解析"
                prompt="[音声データ]と[会議資料のスクリーンショット]を解析して。音声で話されている内容と、スライドの図解に矛盾がないかチェックし、修正が必要なポイントをリストアップして。"
              />
              <PromptBlock
                title="ローカル環境でのカレンダー連携エージェント"
                prompt="私の[カレンダーデータ]を読み取って。今日の予定の間にある30分の空き時間で、昨日撮った[ホワイトボードの写真]の内容を元に、プロジェクトのタスクリストを更新しておいて。"
              />
            </section>

            <section id="local-safety" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                ローカル環境の安全性と利点
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                トランプ大統領による最新のAI大統領令など、AIの安全性と規制が強化される中で、ローカル実行可能なGemma 4は**「コンプライアンスの観点」**からも非常に強力な選択肢となります。
              </p>
              <ArticleContent
                content={[
                  "**データプライバシー**: 全ての処理がデバイス内で完結するため、外部へのデータ流出リスクが皆無。",
                  "**オフライン動作**: インターネット環境がない場所でも、AIアシスタントを利用可能。",
                  "**コスト削減**: クラウドAPIの利用料金を気にせず、無限に推論を実行できる。",
                  "**規制への適応**: 政府の監視や事前審査の対象となりやすいクラウドAIに対し、ローカル開発は自由度が高い。",
                ]}
              />
            </section>

            <section id="references" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                参考文献
              </h2>
              <ArticleContent
                content={[
                  "[Google's new Gemma 4 open AI model is sized for your laptop](https://arstechnica.com/) (2026/06/04)",
                  "[2026年6月4日 今朝のAIニュースまとめ｜こたぽん](https://note.com/cotapon/n/nf53f5fd79faf) (2026/06/04)",
                ]}
              />
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
