import type { Metadata } from 'next'
import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import TableOfContents from "@/components/article/TableOfContents"
import PromptBlock from "@/components/article/PromptBlock"
import ResponseExample from "@/components/article/ResponseExample"
import PromptInfoCard from "@/components/article/PromptInfoCard"
import AffiliateBox from "@/components/cta/AffiliateBox"
import RelatedArticles from "@/components/cta/RelatedArticles"
import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";
import { useStructuredData } from "@/hooks/useStructuredData";

export const metadata: Metadata = {
  title: '【中級者向け】OpenAI「GPT-5.6」3兄弟（Sol/Terra/Luna）を徹底比較！用途別の最適モデル選択とコスト削減ガイド',
  description: 'OpenAIから正式リリースされた「GPT-5.6」ファミリーの3つのモデル（Sol, Terra, Luna）について、それぞれの特性、得意分野、ベンチマーク結果を比較し、業務内容に応じてどのモデルを選択すべきかを解説する中級者向けガイド。',
  keywords: 'GPT-5.6, OpenAI, Sol, Terra, Luna, AIモデル比較, コスト削減, AI導入, プロンプトエンジニアリング, 中級者向け',
  openGraph: {
    title: '【中級者向け】OpenAI「GPT-5.6」3兄弟（Sol/Terra/Luna）を徹底比較！用途別の最適モデル選択とコスト削減ガイド',
    description: 'OpenAIから正式リリースされた「GPT-5.6」ファミリーの3つのモデル（Sol, Terra, Luna）について、それぞれの特性、得意分野、ベンチマーク結果を比較し、業務内容に応じてどのモデルを選択すべきかを解説する中級者向けガイド。',
    type: 'article',
    images: ['/images/og-image-gpt56-comparison.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '【中級者向け】OpenAI「GPT-5.6」3兄弟（Sol/Terra/Luna）を徹底比較！用途別の最適モデル選択とコスト削減ガイド',
    description: 'OpenAIから正式リリースされた「GPT-5.6」ファミリーの3つのモデル（Sol, Terra, Luna）について、それぞれの特性、得意分野、ベンチマーク結果を比較し、業務内容に応じてどのモデルを選択すべきかを解説する中級者向けガイド。',
    images: ['/images/og-image-gpt56-comparison.png'],
  },
}

const headerProps = {
  logoSrc: "/images/logo.png",
  siteName: "AIプロンプト活用ガイド",
  navItems: [
    { label: "ホーム", href: "/" },
    { label: "記事一覧", href: "/articles" },
    { label: "プライバシーポリシー", href: "/privacy" },
  ],
}

const footerProps = {
  categories: [
    {
      name: "最新AI活用",
      articles: [
        { title: "AIエージェントで業務自動化！自律型ワークフロー構築プロンプト術", href: "/articles/ai-agent-workflow" },
        { title: "ChatGPT「高度な音声モード」活用術", href: "/articles/chatgpt-voice-beginner" },
        { title: "Vibe Working（バイブ・ワーキング）入門", href: "/articles/vibe-working-beginner" },
      ],
    },
  ],
  copyright: "© 2026 AIプロンプト活用ガイド All Rights Reserved.",
}

const headings = [
  { id: "overview", text: "概要", level: 2 as const },
  { id: "target", text: "ターゲット", level: 2 as const },
  { id: "benefits", text: "導入のメリット", level: 2 as const },
  { id: "comparison", text: "モデル特性比較", level: 2 as const },
  { id: "sol", text: "Sol: 最上位モデル", level: 3 as const },
  { id: "terra", text: "Terra: バランスモデル", level: 3 as const },
  { id: "luna", text: "Luna: 軽量高速モデル", level: 3 as const },
  { id: "benchmarks", text: "ベンチマークと実例", level: 2 as const },
  { id: "cost-optimization", text: "コスト最適化戦略", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
]

const relatedArticles = [
  {
    title: "1枚の写真から販促セットを自動生成！最新AI「GPT-5.6 Sol」によるマルチステップ・クリエイティブ活用ガイド",
    description: "GPT-5.6 Solの強力な推論能力を活用したクリエイティブ制作の具体例。",
    href: "/articles/gpt56-sol-multistep-creative",
  },
  {
    title: "AI「価格戦争」勃発！Meta vs OpenAIの最新モデルを使い分け、エージェント実行コストを最小化する導入ガイド",
    description: "複数モデルを組み合わせてコストを最適化する高度なテクニック。",
    href: "/articles/ai-price-war-agent-optimization",
  },
]

export default function GPT56ModelsComparisonPage() {
  useSEO({
    title: "【中級者向け】OpenAI「GPT-5.6」3兄弟（Sol/Terra/Luna）を徹底比較！用途別の最適モデル選択とコスト削減ガイド",
    description: "OpenAIから正式リリースされた「GPT-5.6」ファミリーの3つのモデル（Sol, Terra, Luna）について、それぞれの特性、得意分野、ベンチマーク結果を比較し、業務内容に応じてどのモデルを選択すべきかを解説する中級者向けガイド。",
    keywords: "GPT-5.6, OpenAI, Sol, Terra, Luna, AIモデル比較, コスト削減, AI導入, プロンプトエンジニアリング, 中級者向け",
  });

  useOGP({
    title: "【中級者向け】OpenAI「GPT-5.6」3兄弟（Sol/Terra/Luna）を徹底比較！用途別の最適モデル選択とコスト削減ガイド",
    description: "OpenAIから正式リリースされた「GPT-5.6」ファミリーの3つのモデル（Sol, Terra, Luna）について、それぞれの特性、得意分野、ベンチマーク結果を比較し、業務内容に応じてどのモデルを選択すべきかを解説する中級者向けガイド。",
    type: "article",
    image: "https://example.com/images/og-image-gpt56-comparison.png",
    url: "https://example.com/articles/gpt56-models-comparison",
  });

  useStructuredData({
    headline: "【中級者向け】OpenAI「GPT-5.6」3兄弟（Sol/Terra/Luna）を徹底比較！用途別の最適モデル選択とコスト削減ガイド",
    description: "OpenAIから正式リリースされた「GPT-5.6」ファミリーの3つのモデル（Sol, Terra, Luna）について、それぞれの特性、得意分野、ベンチマーク結果を比較し、業務内容に応じてどのモデルを選択すべきかを解説する中級者向けガイド。",
    author: {
      "@type": "Person",
      name: "Manus AI"
    },
    publisher: {
      "@type": "Organization",
      name: "AIプロンプト活用ガイド",
      logo: {
        "@type": "ImageObject",
        url: "https://example.com/images/logo.png"
      }
    },
    image: [
      "https://example.com/images/og-image-gpt56-comparison.png"
    ],
    datePublished: "2026-07-22T00:00:00Z",
    dateModified: "2026-07-22T00:00:00Z"
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title="【中級者向け】OpenAI「GPT-5.6」3兄弟（Sol/Terra/Luna）を徹底比較！用途別の最適モデル選択とコスト削減ガイド"
          eyecatchSrc="/images/og-image-gpt56-comparison.png"
          createdAt="2026年7月22日"
          updatedAt="2026年7月22日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="overview" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              概要
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              OpenAIから正式リリースされた「GPT-5.6」ファミリーの3つのモデル（Sol, Terra, Luna）について、それぞれの特性、得意分野、ベンチマーク結果を比較し、業務内容に応じてどのモデルを選択すべきかを解説する中級者向けガイドです。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年7月、OpenAIはGPT-5.6シリーズとして、用途に応じた3つのモデルを一斉に展開しました。これまでの単一モデルへの依存から脱却し、タスクの複雑度や要求される応答速度、予算に合わせて最適なモデルを選択することが、AI活用の新たなスタンダードとなっています。
            </p>
          </section>

          <section id="target" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ターゲット
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-2 mb-4">
              <li>AI導入を進めている企業の開発者・プロジェクトマネージャー</li>
              <li>APIコストの最適化を図りたい中級ユーザー</li>
              <li>最新モデルの性能差を具体的に把握したいAI活用推進者</li>
            </ul>
          </section>

          <section id="benefits" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              導入のメリット
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-2 mb-4">
              <li><strong>コストの大幅削減</strong>: 不要な高コストモデルの使用を避け、APIコストを30-50%削減できます。</li>
              <li><strong>パフォーマンスの向上</strong>: タスクに最適なモデルを選ぶことで、AIエージェントの応答速度（レイテンシ）を劇的に改善できます。</li>
              <li><strong>品質の安定化</strong>: 複雑な推論が必要な場面で適切なモデルを割り当てることで、出力の精度と信頼性が向上します。</li>
            </ul>
          </section>

          <section id="comparison" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              モデル特性比較
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              GPT-5.6ファミリーは、用途に合わせて以下の3つのモデルで構成されています。
            </p>

            <section id="sol" className="mb-8">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-3">
                Sol: 最上位モデル
              </h3>
              <p className="text-[#333333] leading-relaxed mb-2">
                <strong>特徴:</strong> 複雑な推論、クリエイティブ制作、長文コンテキスト処理に特化したフラッグシップモデル。
              </p>
              <p className="text-[#333333] leading-relaxed mb-2">
                <strong>得意分野:</strong> 高度な論理的思考が求められるプログラミング、複雑なデータ分析、長編小説の執筆、マルチステップの自律型エージェントの頭脳。
              </p>
              <p className="text-[#333333] leading-relaxed">
                <strong>コスト感:</strong> 高（Terraの約3倍）
              </p>
            </section>

            <section id="terra" className="mb-8">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-3">
                Terra: バランスモデル
              </h3>
              <p className="text-[#333333] leading-relaxed mb-2">
                <strong>特徴:</strong> 速度と精度の両立を目指した、最も汎用性の高い標準モデル。
              </p>
              <p className="text-[#333333] leading-relaxed mb-2">
                <strong>得意分野:</strong> 日常的なコーディング支援、構造化データの抽出、一般的な文章の要約や翻訳、カスタマーサポートの自動応答。
              </p>
              <p className="text-[#333333] leading-relaxed">
                <strong>コスト感:</strong> 中（標準的）
              </p>
            </section>

            <section id="luna" className="mb-8">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-3">
                Luna: 軽量高速モデル
              </h3>
              <p className="text-[#333333] leading-relaxed mb-2">
                <strong>特徴:</strong> エージェントのリアルタイム応答や、単純なタスクの大量処理に特化した超高速モデル。
              </p>
              <p className="text-[#333333] leading-relaxed mb-2">
                <strong>得意分野:</strong> リアルタイムの音声対話、ログの監視と異常検知、単純な分類タスク、ルーティング（他のモデルへの振り分け）。
              </p>
              <p className="text-[#333333] leading-relaxed">
                <strong>コスト感:</strong> 低（Terraの約1/5）
              </p>
            </section>
          </section>

          <section id="benchmarks" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ベンチマークと実例
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              各モデルが得意とするタスクのスコア比較（相対値）は以下の通りです。
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">タスク種類</th>
                    <th className="py-2 px-4 border-b text-center">Sol</th>
                    <th className="py-2 px-4 border-b text-center">Terra</th>
                    <th className="py-2 px-4 border-b text-center">Luna</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">複雑な数学・論理推論</td>
                    <td className="py-2 px-4 border-b text-center font-bold text-blue-600">◎ (98%)</td>
                    <td className="py-2 px-4 border-b text-center">○ (85%)</td>
                    <td className="py-2 px-4 border-b text-center">△ (60%)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">高度なコーディング</td>
                    <td className="py-2 px-4 border-b text-center font-bold text-blue-600">◎ (95%)</td>
                    <td className="py-2 px-4 border-b text-center">○ (88%)</td>
                    <td className="py-2 px-4 border-b text-center">△ (65%)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">一般的な要約・翻訳</td>
                    <td className="py-2 px-4 border-b text-center">○ (99%)</td>
                    <td className="py-2 px-4 border-b text-center font-bold text-blue-600">◎ (98%)</td>
                    <td className="py-2 px-4 border-b text-center">○ (90%)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">リアルタイム応答（速度）</td>
                    <td className="py-2 px-4 border-b text-center">△ (遅い)</td>
                    <td className="py-2 px-4 border-b text-center">○ (普通)</td>
                    <td className="py-2 px-4 border-b text-center font-bold text-blue-600">◎ (最速)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="cost-optimization" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              コスト最適化戦略
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              すべてのタスクをSolで処理するのはコストの無駄です。タスクの複雑度に応じてモデルを自動で切り替える「モデル・ルーティング」の実装が推奨されます。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              例えば、ユーザーからの入力内容をまず軽量なLunaで判定し、単純な質問であればそのままLunaが回答。複雑な推論が必要な場合はTerraやSolに処理を引き継ぐ、といった多段構成（カスケード）を組むことで、コストとパフォーマンスの最適解を得ることができます。
            </p>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年後半のAI活用においては、「適材適所」の考え方が不可欠です。GPT-5.6のSol、Terra、Lunaの特性を正しく理解し、業務プロセスに適切に組み込むことで、AIのポテンシャルを最大限に引き出しつつ、運用コストを劇的に削減することが可能になります。
            </p>
          </section>

          <section id="related">
            <RelatedArticles articles={relatedArticles} />
          </section>
        </div>
      </article>
    </PageLayout>
  )
}
