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
  { id: "introduction", text: "AIが勝手に仕事を終わらせる？GPT-5.5の衝撃", level: 2 as const },
  { id: "autonomous-mode", text: "GPT-5.5の「自律実行モード」とは？", level: 2 as const },
  { id: "prompt-tips", text: "「丸投げ」を成功させる指示のコツ", level: 2 as const },
  { id: "practice-example", text: "実践：競合調査から資料構成までを1回で完結", level: 2 as const },
  { id: "important-notes", text: "注意点：実行プロセスの確認と最終チェック", level: 2 as const },
  { id: "summary", text: "まとめ：AIを「作業員」から「パートナー」へ", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// プロンプトデータ
const prompts = {
  autonomous: `あなたはGPT-5.5の「自律実行モード」を使いこなす、業務自動化のエキスパートです。
以下の目標を達成するために、必要なステップを自ら判断し、ブラウジングやツールを駆使して完結させてください。

【目標】
2026年4月時点の最新の「AIエージェント」トレンドを調査し、主要プレイヤー3社の特徴を比較した上で、新規事業のアイデアを3つ提案してください。

【制約条件】
・各ステップの実行前に「これから〇〇を行います」と宣言してください。
・得られた情報はソースURLと共に記録してください。
・最終的に、そのまま企画書に使えるMarkdown形式で出力してください。

まずは、実行に向けた全体方針を提示してください。`,
  response: `■ GPT-5.5 自律実行モード：開始
【方針】最新トレンドの把握、競合分析、アイデア創出の3段階で進めます。

1. **最新トレンド調査**: 2026年4月のテックニュースをブラウジングし、現在のAIエージェントの定義と市場動向を特定します。
2. **競合比較**: 特定した主要3社（例：OpenAI, Anthropic, Google）の最新機能を詳細に調査し、比較表を作成します。
3. **事業提案**: 調査結果から見えた「市場の隙間」を埋める新規事業案を策定します。

【実行】
ステップ1「最新トレンド調査」を開始します。最新のニュースサイトへアクセスします...`,
}

// 関連記事データ
const relatedArticles = [
  {
    title: "GPT-5.5「Thinking」で実現する「自律型多段階ワークフロー」構築術",
    description: "AIが自ら計画を立て、複雑な多段階タスクを完結させる方法",
    href: "/articles/gpt5-5-thinking-workflow",
  },
  {
    title: "AIエージェントで業務自動化！自律型ワークフロー構築プロンプト術",
    description: "自律的に動くAIエージェントで業務を自動化する基礎知識",
    href: "/articles/ai-agent-workflow",
  },
]

export default function GPT55AutonomousTasksPage() {
  const title = "GPT-5.5の『自律実行モード』活用プロンプト術｜AIが勝手に仕事を終わらせる？";
  const description = "2026年4月に登場したGPT-5.5の目玉機能「自律実行モード」を徹底解説。ユーザーの指示一つで、AIが自ら判断・実行・完結させるためのプロンプトの書き方と、業務自動化の実践例を紹介します。";
  const keywords = "GPT-5.5, 自律実行モード, AIエージェント, OpenAI, 業務自動化, プロンプトエンジニアリング, 最新AIトレンド";
  const url = typeof window !== 'undefined' ? window.location.href : "";

  // SEO最適化
  useSEO({
    title: title,
    description: description,
    keywords: keywords,
  });

  // OGP設定
  useOGP({
    title: title,
    description: description,
    type: "article",
    image: "/images/gpt5-5-autonomous-eyecatch.jpg",
    url: url,
  });

  // 構造化データ設定
  useStructuredData({
    title: title,
    description: description,
    author: "AIプロンプト活用ガイド",
    datePublished: "2026-04-25T00:00:00Z",
    dateModified: "2026-04-25T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ArticleHeader
          title={title}
          date="2026.04.25"
          category="最新AI活用"
          tag="中級者向け"
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
          <div className="min-w-0">
            <TableOfContents headings={headings} />

            <section id="introduction" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                AIが勝手に仕事を終わらせる？GPT-5.5の衝撃
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                2026年4月23日、OpenAIは最新モデル<strong>「GPT-5.5」</strong>を発表しました。多くの進化点がある中で、最も実務にインパクトを与えるのが<strong>「自律実行モード（Autonomous Mode）」</strong>です。
              </p>
              <p className="text-[#333333] leading-relaxed">
                これまでのAIは、一問一答形式で指示を待つ「作業員」でした。しかしGPT-5.5は、ゴールを伝えるだけで「どうやって進めるか」を自ら考え、ブラウジングや計算、コード実行を繰り返して完結させる「パートナー」へと進化したのです。
              </p>
            </section>

            <section id="autonomous-mode" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                GPT-5.5の「自律実行モード」とは？
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                自律実行モードは、単に長い文章を書く機能ではありません。AIが内部で以下の<strong>「自律ループ」</strong>を回す仕組みです。
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ul className="list-disc list-inside space-y-2 text-[#333333]">
                  <li><strong>状況把握</strong>：指示の意図と、現在の状況（最新情報など）を照合する</li>
                  <li><strong>意思決定</strong>：次に何をすべきか（検索、分析、執筆など）を選択する</li>
                  <li><strong>アクション</strong>：実際にツールを使って実行する</li>
                  <li><strong>結果評価</strong>：得られた結果がゴールに近づいているか自己評価する</li>
                </ul>
              </div>
              <p className="text-[#333333] leading-relaxed">
                このループにより、従来なら「検索して」「要約して」「比較して」と3回に分けていた指示が、1回のプロンプトで完結します。
              </p>
            </section>

            <section id="prompt-tips" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                「丸投げ」を成功させる指示のコツ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                AIに自律的に動いてもらうためには、これまでのプロンプトとは少し異なる「伝え方」が必要です。
              </p>
              <PromptInfoCard type="tips" title="成功のための3つの要素">
                <ol className="list-decimal list-inside space-y-2">
                  <li><strong>明確なゴール（定義）</strong>：何をもって「完了」とするかを具体的に伝えます。</li>
                  <li><strong>権限の付与</strong>：「自ら判断して実行してよい」と明示的に伝えます。</li>
                  <li><strong>途中経過の報告義務</strong>：AIが暴走しないよう、ステップごとに何を考えているか出力させます。</li>
                </ol>
              </PromptInfoCard>
            </section>

            <section id="practice-example" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                実践：競合調査から資料構成までを1回で完結
              </h2>
              <p className="mb-8">実際に自律実行モードを起動するためのプロンプト例を見てみましょう。</p>
              <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
                <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                  自律実行起動プロンプト
                </h3>
                <PromptBlock prompt={prompts.autonomous} />
                <ResponseExample response={prompts.response} />
              </div>
              <p className="text-[#333333] leading-relaxed">
                このように、AIが「今から何をしようとしているか」を宣言しながら進むため、ユーザーは安心して「丸投げ」することができます。
              </p>
            </section>

            <section id="important-notes" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                注意点：実行プロセスの確認と最終チェック
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                非常に強力な自律実行モードですが、以下の点には注意が必要です。
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-400 pl-4 py-2">
                  <p className="font-bold text-[#333333]">「ハルシネーション（嘘）」の検証</p>
                  <p className="text-sm text-gray-600">自律的に情報を収集する過程で、誤った情報を信じ込んでしまう可能性があります。必ずソースURLを確認しましょう。</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4 py-2">
                  <p className="font-bold text-[#333333]">「思考の停止」への介入</p>
                  <p className="text-sm text-gray-600">AIがループに陥ったり、途中で止まったりした場合は、「ステップNから再開して」と指示を出して軌道修正してください。</p>
                </div>
              </div>
            </section>

            <section id="summary" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                まとめ：AIを「作業員」から「パートナー」へ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                GPT-5.5の自律実行モードは、私たちがAIに費やしていた「指示の細分化」という手間を大幅に削減してくれます。
              </p>
              <p className="text-[#333333] leading-relaxed">
                これからの時代、重要なのは「AIに何をさせるか」という**目的設計能力**です。AIを単なる道具としてではなく、共にプロジェクトを進める優秀なパートナーとして迎え入れ、あなたの創造性を最大化させていきましょう。
              </p>
            </section>

            <section id="related" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                関連記事
              </h2>
              <RelatedArticles articles={relatedArticles} />
            </section>
          </div>
        </div>
      </article>
    </PageLayout>
  )
}
