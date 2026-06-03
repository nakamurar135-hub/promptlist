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

export default function TrumpAiExecutiveOrderPage() {
  const title = "【中級者向け】AI開発に激震！トランプ大統領の新AI大統領令と「事前審査」への対応プロンプト術"
  const description = "2026年6月2日（米国時間）、トランプ大統領は最先端AIの開発企業に対し、一般公開前の30日前に政府へ情報提供し、安全性を評価させる大統領令に署名しました。この規制強化により、AIエージェントの開発や活用にどのような影響が出るのか。そして、規制環境下で安全かつ効率的にAIを運用するためのプロンプト術を解説します。"
  const keywords = "AI規制, トランプ大統領, 大統領令, 事前審査, AIエージェント, コンプライアンス, プロンプト術, 2026年最新AI"
  const publishedDate = "2026-06-03T00:00:00Z"
  const modifiedDate = "2026-06-03T00:00:00Z"
  const url = "https://promptlist.jp/articles/trump-ai-executive-order"
  const image = "https://promptlist.jp/images/trump-ai-executive-order-eyecatch.jpg" // 仮の画像パス

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
    { id: "target", title: "ターゲット" },
    { id: "new-executive-order", title: "新大統領令の衝撃" },
    { id: "impact-on-ai-development", title: "AI開発への影響" },
    { id: "compliance-prompt", title: "コンプライアンス・プロンプト" },
    { id: "agent-safety-design", title: "エージェントの安全設計" },
    { id: "prompt-examples", title: "プロンプト例" },
    { id: "references", title: "参考文献" },
  ]

  const relatedArticles = [
    {
      title: "【中級者向け】WindowsをAIエージェントが操作する！Build 2026発表の『Agentic AI for Windows』とMCP活用ガイド",
      href: "/articles/agentic-ai-windows",
    },
    {
      title: "【中級者向け】AIエージェントの「暴走」を防ぐ！Anthropicが公開した『エージェント封じ込め（Containment）』技術の活用術",
      href: "/articles/anthropic-containment",
    },
    {
      title: "【中級者向け】最先端AIの光と影！Anthropicの最新モデル『Claude Mythos』セキュリティ活用ガイド",
      href: "/articles/claude-mythos-security",
    },
  ]

  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ArticleHeader
          title={title}
          category="中級者向け"
          date="2026.06.03"
          tags={["AI規制", "トランプ大統領", "AIエージェント"]}
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <section id="overview" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                概要
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                2026年6月2日（米国時間）、トランプ大統領は最先端AIの開発企業に対し、一般公開前の30日前に政府へ情報提供し、安全性を評価させる大統領令に署名しました。この規制強化により、AIエージェントの開発や活用にどのような影響が出るのか。そして、規制環境下で安全かつ効率的にAIを運用するためのプロンプト術を解説します。
              </p>
            </section>

            <section id="target" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                ターゲット
              </h2>
              <ArticleContent
                content={[
                  "最新のAI規制動向を把握し、ビジネスへの影響を最小限に抑えたい開発者・マネージャー",
                  "AIエージェントの「安全性」や「コンプライアンス」を重視する法人ユーザー",
                  "変化の激しいAI業界で、常に最新情報をキャッチアップしたい中級ユーザー",
                ]}
              />
            </section>

            <section id="new-executive-order" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                新大統領令の衝撃
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                トランプ大統領が署名した新大統領令は、最先端AIの開発企業に対し、一般公開の30日前に政府への情報提供と安全性評価を義務付けるものです。これは、AIの急速な進化に伴う潜在的なリスクへの懸念が高まっていることを示しています。当初90日とされていた提出期限が30日に短縮されたことは、政府がAIの安全性確保を喫緊の課題と捉えていることの表れと言えるでしょう。
              </p>
            </section>

            <section id="impact-on-ai-development" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                AI開発への影響
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                この大統領令は、AI開発サイクルに大きな影響を与える可能性があります。企業は、開発の初期段階から安全性とコンプライアンスを考慮した設計を求められ、透明性の確保がこれまで以上に重要になります。特に、自律的に動作するAIエージェントにおいては、その意思決定プロセスや挙動の予測可能性が厳しく問われることになります。
              </p>
            </section>

            <section id="compliance-prompt" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                コンプライアンス・プロンプト
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                AIが規制に抵触しないよう、開発者はAIに自律的なチェック機能を組み込む必要があります。以下に示すプロンプトは、AIエージェントが政府のガイドラインや安全性基準を遵守しているかを自己評価させるための指示方法です。
              </p>
              <PromptBlock
                title="AIエージェントのシステムプロンプトレビュー"
                prompt="このAIエージェントのシステムプロンプトを、2026年6月施行の最新AI大統領令の安全性基準に照らしてレビューして。特に『自律的な意思決定の透明性』に関する懸念点があれば指摘して"
              />
            </section>

            <section id="agent-safety-design" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                エージェントの安全設計
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                AIエージェントの「暴走」を防ぎ、政府のガイドラインに沿った挙動を保証するためには、設計段階からの安全対策が不可欠です。以下のプロンプトは、AIが潜在的なリスクを特定し、緩和策を講じるための自己分析を促すものです。
              </p>
              <PromptBlock
                title="安全評価レポートのドラフト作成"
                prompt="新製品のAI機能を公開する前に、政府に提出する安全評価レポートのドラフトを作成して。モデルのトレーニングデータ、潜在的なリスク、およびそれらに対する緩和策を構造化してまとめて"
              />
              <PromptBlock
                title="有害な挙動の監視フィルタリング条件定義"
                prompt="AIエージェントの実行ログを分析し、政府が定義する『有害な挙動』の兆候がないかリアルタイムで監視するためのフィルタリング条件を定義して"
              />
            </section>

            <section id="references" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                参考文献
              </h2>
              <ArticleContent
                content={[
                  "[ミュトスに動かされたトランプ氏 AI規制めぐりジレンマの大統領令](https://www.asahi.com/articles/ASV6264BNV62UHBI02WM.html) (2026/06/03)",
                  "[トランプ政権 最先端AIの開発企業が一般公開前に情報提供 大統領令で安全確認できる仕組み整備へ](https://www.fnn.jp/articles/-/1054477) (2026/06/03)",
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
