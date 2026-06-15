"use client";

import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import TableOfContents from "@/components/article/TableOfContents"
import PromptBlock from "@/components/article/PromptBlock"
import PromptInfoCard from "@/components/article/PromptInfoCard"
import RelatedArticles from "@/components/cta/RelatedArticles"
import ResponseExample from "@/components/article/ResponseExample"
import { useSEO } from "@/hooks/useSEO"
import { useOGP } from "@/hooks/useOGP"
import { useStructuredData } from "@/hooks/useStructuredData"

// 共通設定
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
        { title: "GPT-5.5「Thinking」で実現する「自律型多段階ワークフロー」構築術", href: "/articles/gpt5-5-thinking-workflow" },
        { title: "Vibe Working（バイブ・ワーキング）入門", href: "/articles/vibe-working-beginner" },
      ],
    },
  ],
  copyright: "© 2026 AIプロンプト活用ガイド All Rights Reserved.",
}

// 目次データ
const headings = [
  { id: "introduction", text: "「一問一答」から「自律実行」へ：GPT-5.5の衝撃", level: 2 as const },
  { id: "what-is-thinking", text: "GPT-5.5「Thinking」とは？計画立案能力の進化", level: 2 as const },
  { id: "reading-plan", text: "「思考の計画」を読み解き、先回りして修正するコツ", level: 2 as const },
  { id: "workflow-practice", text: "実践：多段階ワークフローの構築例", level: 2 as const },
  { id: "market-research", text: "例1：市場調査からレポート作成までの一括指示", level: 3 as const },
  { id: "code-generation", text: "例2：仕様書からテスト完結までの開発自動化", level: 3 as const },
  { id: "direction-correction", text: "「方向修正」の黄金プロンプト：期待通りの成果へ導く介入術", level: 2 as const },
  { id: "summary", text: "まとめ：AIを「作業員」から「プロジェクトリーダー」へ", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// プロンプトデータ
const prompts = {
  workflow: `あなたはGPT-5.5の「Thinking」機能を最大限に活用する、自律型ワークフロー構築のエキスパートです。
以下の目標を達成するために、詳細な「思考の計画」を立て、ステップバイステップで実行してください。

【目標】
[例：2026年のAIエージェント市場の競合調査を行い、主要3社の強み・弱みを比較したMarkdown形式のレポートを作成してください]

【制約条件】
・各ステップの実行前に、必ず「計画の概要」を提示してください。
・各フェーズで自己検証を行い、矛盾があれば修正してください。
・最終成果物は、専門家がそのまま会議で使用できる品質を目指してください。

まずは、このワークフローの全体計画を提示してください。`,

  response: `■ GPT-5.5 Thinking 実行計画

【目標】2026年AIエージェント市場の競合調査とレポート作成

【思考プロセス（Thinking）】
1. **市場定義の明確化**: 2026年現在の「自律型エージェント」の定義を再確認し、調査対象となる主要3社（OpenAI, Anthropic, Google）の最新プロダクトを特定します。
2. **情報収集**: 各社の最新プレスリリース、技術仕様書、および信頼できるITニュースサイトから、機能・価格・エコシステムに関するデータを抽出します。
3. **比較分析**: 収集したデータを「自律性」「統合性」「コストパフォーマンス」の3軸でマトリックス分析します。
4. **ドラフト作成**: 分析結果に基づき、Markdown形式でレポートの初稿を作成します。
5. **自己検閲とブラッシュアップ**: レポートの内容に事実誤認がないか、最新の2026年4月時点の情報と整合しているかを確認し、最終調整を行います。

【ステータス】
ステップ1「市場定義の明確化」を開始します。対象プロダクト：GPT-5.5, Claude 4.5, Gemini 2.5...`,
}

// 関連記事データ
const relatedArticles = [
  {
    title: "AIエージェントで業務自動化！自律型ワークフロー構築プロンプト術",
    description: "自律的に動くAIエージェントで業務を自動化する基礎知識",
    href: "/articles/ai-agent-workflow",
  },
  {
    title: "AIが「じっくり考えて」から答えてくれる！Copilotの『Think Deeper』活用術",
    description: "AIに「思考の時間」を与えることで回答の質を高める方法",
    href: "/articles/copilot-think-deeper-beginner",
  },
]

export default function GPT55ThinkingWorkflowPage() {
  const title = "GPT-5.5「Thinking」で実現する「自律型多段階ワークフロー」構築術";
  const description = "OpenAIの最新モデルGPT-5.5の新機能「Thinking」を徹底解説。AIが自ら計画を立て、複雑な多段階タスクを完結させる「自律型ワークフロー」の構築方法と、プロンプトによる制御のコツを紹介します。";
  const keywords = "GPT-5.5, Thinking, 思考プロセス, 自律型AI, ワークフロー自動化, プロンプトエンジニアリング, OpenAI";
  const url = typeof window !== 'undefined' ? window.location.href : "";

  useSEO({
    title: `${title} | AIプロンプト活用ガイド`,
    description,
    keywords,
  });

  useOGP({
    title,
    description,
    type: "article",
    image: "/images/placeholder.jpg",
    url,
  });

  useStructuredData({
    title,
    description,
    author: "AIプロンプト活用ガイド",
    datePublished: "2026-04-24T00:00:00Z",
    dateModified: "2026-04-24T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年4月24日"
          updatedAt="2026年4月24日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「一問一答」から「自律実行」へ：GPT-5.5の衝撃
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年4月23日、OpenAIは待望の最新モデル「GPT-5.5」を発表しました。このモデルの最大の目玉は、回答の前にAIが自ら計画を立て、論理的な推論を重ねる新機能**「Thinking（シンキング）」**です。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              これまでのAIは、私たちの問いかけに対して即座に言葉を紡ぎ出す「チャット」が主流でした。しかしGPT-5.5は、複雑な指示を受けるとまず「どうすればその目標を達成できるか」という戦略を練り、複数の工程を自律的に処理します。
            </p>
            <p className="text-[#333333] leading-relaxed">
              この記事では、この「Thinking」機能を使いこなし、ビジネスや開発の現場で「自律型多段階ワークフロー」を構築するための実践的なテクニックを解説します。
            </p>
          </section>

          <section id="what-is-thinking" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              GPT-5.5「Thinking」とは？計画立案能力の進化
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              GPT-5.5の「Thinking」は、単に「ゆっくり考える」だけではありません。AIが内部で以下のプロセスを高速に実行する仕組みです。
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <ul className="list-disc list-inside space-y-2 text-[#333333]">
                <li><strong>タスクの分解</strong>：巨大な目標を、実行可能な小さなステップに切り分ける</li>
                <li><strong>ツールの選択</strong>：各ステップでブラウジング、Python実行、データ分析などのどれが最適か判断する</li>
                <li><strong>自己検証</strong>：前のステップの結果が正しいか、次のステップに進む前にチェックする</li>
              </ul>
            </div>
            <p className="text-[#333333] leading-relaxed">
              これにより、ユーザーは「Aをやって、次にBをやって、最後にCをまとめて」と細かく指示する必要がなくなり、「目標Xを達成して」と伝えるだけで、AIが最適なルートを自ら見つけ出すことが可能になりました。
            </p>
          </section>

          <section id="reading-plan" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「思考の計画」を読み解き、先回りして修正するコツ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              GPT-5.5が提示する「思考の計画」は、単なる進捗報告ではありません。これはユーザーが介入できる**「制御ポイント」**です。
            </p>
            <PromptInfoCard type="tips" title="計画段階での介入メリット">
              AIが実行に移る前に計画を提示させることで、間違った方向に進むのを防げます。「ステップ2の調査対象に〇〇社も追加して」「ステップ4の出力形式はPDFではなくMarkdownにして」といった修正を最初に行うことで、最終的な手戻りをゼロにできます。
            </PromptInfoCard>
          </section>

          <section id="workflow-practice" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              実践：多段階ワークフローの構築例
            </h2>
            <p className="mb-8">自律的なワークフローを起動するための、標準的なプロンプトとその応答例を見てみましょう。</p>

            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                自律ワークフロー起動プロンプト
              </h3>
              <PromptBlock prompt={prompts.workflow} />
              <ResponseExample response={prompts.response} />
            </div>

            <div id="market-research" className="mb-8">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                例1：市場調査からレポート作成までの一括指示
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                「最新の競合動向を調べて、比較表を作り、それを元にスライド構成案を考えて」という一連の流れを、GPT-5.5は一つの「Thinking」セッションで完結させます。各フェーズで得た知見を次のフェーズに自動で引き継ぐため、情報の欠落がありません。
              </p>
            </div>

            <div id="code-generation" className="mb-8">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                例2：仕様書からテスト完結までの開発自動化
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                エンジニアリングにおいては、仕様の理解→コード生成→テストコード作成→エラー修正のループをAIが自律的に回します。「Thinking」によって「なぜこのエラーが起きたか」を深く推論し、より堅牢なコードを生成します。
              </p>
            </div>
          </section>

          <section id="direction-correction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「方向修正」の黄金プロンプト：期待通りの成果へ導く介入術
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              AIが計画を立てた直後、あるいは実行中に「何か違うな」と感じた時に使える魔法のフレーズです。
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-yellow-400 pl-4 py-2">
                <p className="font-bold text-[#333333]">「その計画のステップNを、〇〇という視点で再構築して」</p>
                <p className="text-sm text-gray-600">AIの推論の前提を正し、より専門的な視点を持たせます。</p>
              </div>
              <div className="border-l-4 border-yellow-400 pl-4 py-2">
                <p className="font-bold text-[#333333]">「実行に移る前に、ステップMで想定されるリスクを3つ挙げて」</p>
                <p className="text-sm text-gray-600">AIに「批判的思考」を強制し、計画の精度を極限まで高めます。</p>
              </div>
            </div>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ：AIを「作業員」から「プロジェクトリーダー」へ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              GPT-5.5の「Thinking」機能は、AIとの付き合い方を根本から変えます。私たちはもはや、AIに「何を、どうやって」と細かく教える必要はありません。「何を達成したいか」というビジョンを伝え、AIが提示する「計画」を吟味・修正する**オーケストレーター**としての役割が求められています。
            </p>
            <p className="text-[#333333] leading-relaxed">
              まずは身近な複雑なタスクを、GPT-5.5に「丸投げ」することから始めてみてください。AIが自ら考え、動き出す驚きを体感できるはずです。
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
