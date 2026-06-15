import type { Metadata } from 'next'
import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import TableOfContents from "@/components/article/TableOfContents"
import PromptBlock from "@/components/article/PromptBlock"
import ResponseExample from "@/components/article/ResponseExample"
import PromptInfoCard from "@/components/article/PromptInfoCard"
import AffiliateBox from "@/components/cta/AffiliateBox"
import RelatedArticles from "@/components/cta/RelatedArticles"

export const metadata: Metadata = {
  title: 'AIエージェントで業務自動化！自律型ワークフロー構築プロンプト術',
  description: '2026年の最新AI活用術。単なるチャットから自律的に動くAIエージェントへ。複数のタスクを連携させて自動完結させる「エージェント型ワークフロー」の構築方法と実践プロンプトを解説します。',
  keywords: 'AIエージェント, ワークフロー, 自動化, プロンプト, 自律型AI, 業務効率化',
  openGraph: {
    title: 'AIエージェントで業務自動化！自律型ワークフロー構築プロンプト術',
    description: '単なるチャットから自律的に動くAIエージェントへ。複数のタスクを連携させて自動完結させる「エージェント型ワークフロー」の構築方法を解説。',
    type: 'article',
    images: ['/images/og-image-nano-banana-2.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIエージェントで業務自動化！自律型ワークフロー構築プロンプト術',
    description: '2026年の最新AI活用術。自律的に動くAIエージェントで業務を自動化する方法。',
    images: ['/images/og-image-nano-banana-2.png'],
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
  { id: "introduction", text: "「指示待ちAI」から「自律して動くAI」へ", level: 2 as const },
  { id: "concept", text: "エージェント型ワークフローとは？", level: 2 as const },
  { id: "planning-prompt", text: "実践！ワークフローを定義する「プランニング・プロンプト」", level: 2 as const },
  { id: "example-1", text: "応用例1：情報収集からレポート作成までの自動化", level: 3 as const },
  { id: "example-2", text: "応用例2：コード生成からテスト実行までの自動ループ", level: 3 as const },
  { id: "tips", text: "成功させるための3つのポイント", level: 2 as const },
  { id: "summary", text: "まとめ：2026年の標準的な働き方", level: 2 as const },
]

const prompts = {
  planning: `あなたは高度なAIオーケストレーターです。以下の目標を達成するために、自律的なワークフローを構築してください。

【目標】
[達成したい具体的な目標を入力]

【制約条件】
・利用可能なツール: [使用可能なツールやAPIをリストアップ]
・アウトプット形式: [最終成果物の形式]
・確認ポイント: 各ステップの完了時に自己評価を行い、必要に応じて修正してください。

【実行手順の定義】
1. 実行プランの作成
2. 各タスクの順次実行
3. 実行結果の統合と検証
4. 最終レポートの作成

まずは、この目標を達成するための詳細な実行プランを提示してください。`,

  response: `■ 自律型ワークフロー実行プラン

【目標】最新のAIエージェントに関する技術動向を調査し、社内向け比較レポートを作成する

【定義されたステップ】
1. **情報収集フェーズ**
   - arXivおよび主要技術ブログから「Agentic Workflow」「AI Orchestration」に関する最新論文・記事を5件抽出
   - 各ソースの要点を構造化データとして保存

2. **分析・比較フェーズ**
   - 抽出した情報を「機能」「コスト」「導入難易度」の3軸で比較
   - 現行システムとの親和性を評価

3. **検証フェーズ**
   - 生成された比較表に矛盾がないか、自己プロンプトによるクロスチェックを実施

4. **レポート生成フェーズ**
   - 経営層向けのサマリー（300文字）と、開発チーム向けの技術詳細を含むMarkdownレポートを出力

【現在のステータス】
ステップ1を開始します。調査対象のキーワードを最適化中...`,
}

const relatedArticles = [
  {
    title: "プロンプト不要？感覚でAIを操る「Vibe Working」入門",
    description: "2026年の新しい働き方、バイブ・ワーキングについて解説",
    href: "/articles/vibe-working-beginner",
  },
  {
    title: "面倒な指示はAIに覚えさせよう！ChatGPT「Skills」超入門",
    description: "自分専用のAIスキルを作成して業務を効率化する方法",
    href: "/articles/chatgpt-skills-beginner",
  },
]

export default function AIAgentWorkflowPage() {
  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title="AIエージェントで業務自動化！自律型ワークフロー構築プロンプト術"
          eyecatchSrc="/images/og-image-nano-banana-2.png"
          createdAt="2026年4月12日"
          updatedAt="2026年4月12日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「指示待ちAI」から「自律して動くAI」へ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年、AIの活用シーンは劇的な変化を遂げました。かつてのように人間が一つ一つのタスクに対してプロンプトを投げる時代は終わり、現在はAIが自ら考え、ツールを使い、目標を達成する「AIエージェント」の時代です。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              この記事では、複数のAIタスクをシームレスに連携させ、業務を自動で完結させる「エージェント型ワークフロー」の構築方法を解説します。
            </p>
          </section>

          <section id="concept" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              エージェント型ワークフローとは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              エージェント型ワークフロー（Agentic Workflow）とは、AIに「やり方」を細かく指示するのではなく、「ゴール」を与えて、その達成までのプロセス（プランニング、実行、修正）をAIに委ねる仕組みのことです。
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-bold mb-2">従来のチャットとの違い</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>従来:</strong> 人間が「Aをやって」「次にBをやって」と逐次指示</li>
                <li><strong>エージェント型:</strong> 人間が「目標はX」と伝え、AIがAとBを自分で判断して実行</li>
              </ul>
            </div>
          </section>

          <section id="planning-prompt" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              実践！ワークフローを定義する「プランニング・プロンプト」
            </h2>
            <p className="text-[#333333] leading-relaxed mb-8">
              自律的なワークフローを開始するための、核となるプロンプトを紹介します。
            </p>

            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                プランニング・プロンプト
              </h3>
              <PromptInfoCard type="response" title="期待される動作">
                <p>
                  AIが目標達成に必要なステップを分解し、それぞれのステップで使用するツールや検証方法を含む詳細な「実行プラン」を提示します。
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.planning} />
              <ResponseExample response={prompts.response} />
            </div>
          </section>

          <section id="example-1" className="mb-12">
            <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
              応用例1：情報収集からレポート作成までの自動化
            </h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              例えば、毎朝のニュース収集と要約をエージェントに任せることができます。AIは自らブラウザツールを使って最新情報を検索し、重要度を判定し、Slackなどの通知ツールへ投稿するまでを自動で行います。
            </p>
          </section>

          <section id="example-2" className="mb-12">
            <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
              応用例2：コード生成からテスト実行までの自動ループ
            </h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              開発業務では、AIがコードを書き、それをサンドボックス環境で実行し、エラーが出れば自ら修正して再度テストするという「自己修復ループ」を構築することが可能です。
            </p>
          </section>

          <section id="tips" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              成功させるための3つのポイント
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-3 mb-6">
              <li>
                <strong>明確なゴール設定:</strong>
                「いい感じにして」ではなく、「誰に向けた、どのような形式の成果物か」を具体的に定義します。
              </li>
              <li>
                <strong>フィードバックループの組み込み:</strong>
                各ステップの後に「自己検証」のフェーズを入れることで、エラーの蓄積を防ぎます。
              </li>
              <li>
                <strong>ツールの権限管理:</strong>
                AIにどの範囲まで操作を許可するか（読み取り専用か、書き込み可能か）を明確に伝えます。
              </li>
            </ul>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ：2026年の標準的な働き方
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              AIエージェントによるワークフローの構築は、もはや一部のエンジニアだけのものではありません。適切なプロンプトを通じてAIを「指揮」することで、誰でも高度な自動化の恩恵を受けることができます。
            </p>
            <p className="text-[#333333] leading-relaxed">
              まずは小さなルーチンワークから、AIエージェントに「プラン」を立てさせてみてはいかがでしょうか。
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
