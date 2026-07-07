
"use client"

import { PageLayout } from "@/components/layout/PageLayout"
import { ArticleHeader } from "@/components/article/ArticleHeader"
import { ArticleContent } from "@/components/article/ArticleContent"
import { TableOfContents } from "@/components/article/TableOfContents"
import { PromptBlock } from "@/components/article/PromptBlock"
import { PromptInfoCard } from "@/components/article/PromptInfoCard"
import { RelatedArticles } from "@/components/cta/RelatedArticles"
import { useSEO } from "@/hooks/useSEO"
import { useOGP } from "@/hooks/useOGP"
import { useStructuredData } from "@/hooks/useStructuredData"

export default function ClaudeScienceGuidePage() {
  const title = "【中級者向け】AIを「研究室」に変える！Anthropicの科学特化型AIワークベンチ『Claude Science』導入ガイド"
  const description = "Anthropicが発表した科学研究・エンジニアリングに特化したデスクトップアプリ「Claude Science」の導入から高度な活用までを解説。60以上の科学データベース、HPC連携、再現可能なコード実行環境を備えたAI作業環境です。"
  const keywords = "Claude Science, Anthropic, AI, 科学研究, エンジニアリング, HPC, 再現性, AIワークベンチ, 中級者, 2026年最新AI"
  const publishedDate = "2026-07-07T00:00:00Z"
  const modifiedDate = "2026-07-07T00:00:00Z"
  const url = "https://promptlist.jp/articles/claude-science-guide"
  const image = "https://promptlist.jp/images/claude-science-eyecatch.jpg"

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
    { id: "overview", title: "「話すAI」から「作業するAI」へ: Claude Scienceが提供する研究特化型UIの正体" },
    { id: "setup", title: "研究環境のセットアップ" },
    { id: "reproducibility", title: "再現性を担保する「Artifacts 3.0」" },
    { id: "examples", title: "実践：データ解析から論文執筆まで" },
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
          date="2026.07.07"
          tags={["Claude Science", "Anthropic", "AI", "科学研究", "HPC"]}
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <section id="overview" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                「話すAI」から「作業するAI」へ: Claude Scienceが提供する研究特化型UIの正体
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                2026年6月30日、Anthropicは科学研究・エンジニアリングに特化したデスクトップアプリ「Claude Science」を発表しました。これは従来のチャットインターフェースとは一線を画し、60以上の科学データベース、HPC（スパコン）連携、再現可能なコード実行環境を備えた「AI作業環境」です。プロフェッショナルな研究開発を加速させるため、この強力なツールの導入から高度な活用までを解説します。
              </p>
              <PromptInfoCard
                title="Claude Scienceの主な特徴"
                items={[
                  "研究特化型UI: 従来のチャットインターフェースとは異なる、科学研究に最適化されたUI",
                  "60以上の科学データベース連携: UniProt, PDB, ChEMBLなど、主要な科学データベースにアクセス可能",
                  "HPC（スパコン）連携: 大規模な計算リソースをAI経由で効率的に利用",
                  "再現可能なコード実行環境: コード、実行環境、対話履歴をセットで保存する「Artifacts 3.0」",
                  "Reviewer Agent: 引用や数値の自動検証により、回答の信頼性を担保",
                ]}
              />
            </section>

            <section id="setup" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                研究環境のセットアップ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Claude Scienceを最大限に活用するためには、適切な研究環境のセットアップが不可欠です。ここでは、主要な科学データベースとのコネクタ設定と、HPCやクラウド計算リソースとの連携手順について解説します。
              </p>
              <h3 className="text-lg font-semibold text-[#333333] mt-6 mb-3">60以上の科学データベース（UniProt, PDB, ChEMBL等）とのコネクタ設定</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                Claude Scienceは、生命科学、化学、物理学など多岐にわたる分野のデータベースと連携可能です。各データベースのAPIキーや認証情報を設定することで、AIが直接データを取得・解析できるようになります。これにより、手動でのデータ収集の手間を省き、研究効率を大幅に向上させることができます。
              </p>
              <h3 className="text-lg font-semibold text-[#333333] mt-6 mb-3">HPC（Slurm）やクラウド計算リソース（Modal）との連携手順</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                大規模な計算やシミュレーションが必要な場合、Claude ScienceはHPC（例えばSlurm）やクラウド計算リソース（例えばModal）と連携し、AIがこれらのリソースを自動的に利用して計算を実行します。連携設定は、各リソースの認証情報とエンドポイントを指定するだけで完了し、AIが最適な計算環境を判断してタスクを処理します。
              </p>
            </section>

            <section id="reproducibility" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                再現性を担保する「Artifacts 3.0」
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                科学研究において、結果の再現性は極めて重要です。Claude Scienceの「Artifacts 3.0」は、この再現性を強力にサポートする機能です。AIが行った全ての作業（コード、実行環境、対話履歴）をセットで保存し、いつでもその過程を追跡・再現できるようにします。
              </p>
              <h3 className="text-lg font-semibold text-[#333333] mt-6 mb-3">コード、実行環境、対話履歴をセットで保存する「Provenance（由来）」管理</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                Provenance管理機能により、AIがどのようなコードを実行し、どのバージョンのライブラリを使用し、どのような対話を経て結果に至ったのかが全て記録されます。これにより、研究の透明性が高まり、共同研究者との情報共有もスムーズになります。
              </p>
              <h3 className="text-lg font-semibold text-[#333333] mt-6 mb-3">背景で動作する「Reviewer Agent」による引用・数値の自動検証</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                Claude Scienceには、AIが生成したレポートや論文中の引用、数値の正確性を自動で検証する「Reviewer Agent」が搭載されています。このエージェントは、AIが参照したデータベースや文献と照合し、誤りや矛盾がないかをチェックします。これにより、研究成果の信頼性が向上し、ヒューマンエラーのリスクを低減できます。
              </p>
            </section>

            <section id="examples" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                実践：データ解析から論文執筆まで
              </h2>
              <h3 className="text-lg font-semibold text-[#333333] mt-6 mb-3">実験データの自動プロットと、プロンプトによるグラフの反復修正</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                Claude Scienceは、実験データを読み込ませるだけで、自動的に適切なグラフを生成します。さらに、「このグラフのX軸のラベルを〇〇に変更して」「このデータポイントを強調表示して」といった自然言語での指示により、グラフをインタラクティブに修正できます。これにより、データ可視化にかかる時間を大幅に短縮し、分析に集中できます。
              </p>
              <h3 className="text-lg font-semibold text-[#333333] mt-6 mb-3">解析結果に基づいたMarkdown/LaTeX形式の草稿作成ワークフロー</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                データ解析が完了したら、その結果に基づいて論文の草稿を自動で作成させることができます。「解析結果を基に、〇〇に関する論文の序論と考察をMarkdown形式で作成せよ」といったプロンプトにより、AIが関連する文献を引用しつつ、論理的な文章を生成します。LaTeX形式での出力も可能で、研究者は内容の推敲に注力できます。
              </p>
            </section>

            <section id="summary" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                まとめ: 2026年、AIは「思考のパートナー」から「実行のインフラ」へ進化する
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                AnthropicのClaude Scienceは、AIを単なる情報処理ツールではなく、科学研究とエンジニアリングのための強力な「実行のインフラ」へと進化させます。高度なデータベース連携、HPC活用、そして再現性を担保する機能により、研究者はデータ解析から論文執筆までの一連のワークフローをAIと協調して進めることができます。2026年、AIは私たちの思考をサポートするだけでなく、具体的な研究活動を加速させる不可欠な存在となるでしょう。
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
