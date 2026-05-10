'use client'
import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import TableOfContents from "@/components/article/TableOfContents"
import PromptBlock from "@/components/article/PromptBlock"
import PromptInfoCard from "@/components/article/PromptInfoCard"
import RelatedArticles from "@/components/cta/RelatedArticles"
import { useSEO } from "@/hooks/useSEO"
import { useOGP } from "@/hooks/useOGP"
import { useStructuredData } from "@/hooks/useStructuredData"

export default function AiAgentProductivityPage() {
  // SEO最適化
  useSEO({
    title: "AIエージェントで「仕事の自動化」を加速！自律型ワークフロー構築プロンプト術｜中級者向け",
    description: "AIエージェントを活用した自律型ワークフローの構築方法と、業務効率を劇的に向上させる高度なプロンプト術を解説。",
    keywords: "AIエージェント,仕事自動化,自律型ワークフロー,プロンプト術,中級者,AI活用,業務効率化"
  });

  // OGP最適化
  useOGP({
    title: "AIエージェントで「仕事の自動化」を加速！自律型ワークフロー構築プロンプト術｜中級者向け",
    description: "AIエージェントを活用した自律型ワークフローの構築方法と、業務効率を劇的に向上させる高度なプロンプト術を解説。",
    type: "article",
    image: "https://example.com/ai-agent-productivity-og.png",
    url: typeof window !== 'undefined' ? window.location.href : ""
  });

  // 構造化データ
  useStructuredData({
    title: "AIエージェントで「仕事の自動化」を加速！自律型ワークフロー構築プロンプト術｜中級者向け",
    description: "AIエージェントを活用した自律型ワークフローの構築方法と、業務効率を劇的に向上させる高度なプロンプト術を解説。",
    author: "Promptlist",
    datePublished: "2026-05-10T00:00:00Z",
    dateModified: "2026-05-10T00:00:00Z"
  });

  const headings = [
    { id: "overview", level: 2, title: "概要" },
    { id: "three-pillars", level: 2, title: "自律型ワークフローの3つの柱" },
    { id: "practical-prompt", level: 2, title: "実践！自律型ワークフロー構築プロンプト" },
    { id: "summary", level: 2, title: "まとめ" }
  ]

  const relatedArticles = [
    {
      title: "AIエージェントで業務を自動化！「自律型ワークフロー」構築プロンプト術",
      href: "/articles/ai-agent-workflow",
      category: "中級者向け"
    },
    {
      title: "ChatGPT Canvasで実現する「自律型ドキュメント作成」ワークフロー",
      href: "/articles/chatgpt-canvas-advanced",
      category: "中級者向け"
    },
    {
      title: "GPT-5.5「Thinking」で実現する「自律型多段階ワークフロー」構築術",
      href: "/articles/gpt5-5-thinking-workflow",
      category: "中級者向け"
    }
  ]

  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 py-8">
        <ArticleHeader
          title="AIエージェントで「仕事の自動化」を加速！自律型ワークフロー構築プロンプト術"
          category="中級者向け"
          createdAt="2026年5月10日"
          updatedAt="2026年5月10日"
        />
        <TableOfContents headings={headings} />
        <div className="prose prose-lg max-w-none">
          <section id="overview" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              概要
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年のAI活用は、単なる「チャット」から「エージェント」へと完全に移行しました。AIエージェントは、一つの指示から複数のツールを使い分け、目的を達成するまで自律的に動作します。本記事では、中級者向けに、業務効率を劇的に向上させるための「自律型ワークフロー」の構築方法と、そのための高度なプロンプト術を解説します。
            </p>
          </section>

          <section id="three-pillars" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              自律型ワークフローの3つの柱
            </h2>
            <ul className="list-disc list-inside mb-6 text-[#333333] space-y-2">
              <li><strong>タスク分解能力</strong>: 複雑なゴールを、AIが実行可能な最小単位のタスクに分解させる。</li>
              <li><strong>ツール連携（Tool Use）</strong>: 検索、ファイル操作、コード実行などをAIに適切に選択させる。</li>
              <li><strong>自己修正ループ</strong>: 実行結果をAI自身に評価させ、必要に応じて再試行させる。</li>
            </ul>
          </section>

          <section id="practical-prompt" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              実践！自律型ワークフロー構築プロンプト
            </h2>
            <PromptBlock
              title="自律型ワークフロー構築プロンプト"
              prompt="「以下の目標を達成するための自律型ワークフローを構築してください。目標：競合他社3社の最新AI製品を調査し、比較表を作成した上で、自社製品の差別化ポイントを提案する。手順：1. Web検索で最新情報を収集する。2. 収集した情報を構造化データとして整理する。3. 比較分析を行い、レポートをMarkdown形式で出力する。制約：各ステップの結果を自己評価し、情報が不足している場合は再度検索を行ってください。」"
            />
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              AIを「ツール」として使う段階から、「エージェント」として組織に組み込む段階へ。このプロンプト術をマスターすることで、あなたの生産性は10倍以上に跳ね上がるはずです。
            </p>
          </section>

          <section id="related" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              関連記事
            </h2>
            <RelatedArticles articles={relatedArticles} />
          </section>
        </div>
      </article>
    </PageLayout>
  )
}
