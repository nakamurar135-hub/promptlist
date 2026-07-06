
import type { Metadata } from 'next'
import { useSEO } from "@/hooks/useSEO"
import { useOGP } from "@/hooks/useOGP"
import { useStructuredData } from "@/hooks/useStructuredData"
import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import TableOfContents from "@/components/article/TableOfContents"
import PromptBlock from "@/components/article/PromptBlock"
import ResponseExample from "@/components/article/ResponseExample"
import PromptInfoCard from "@/components/article/PromptInfoCard"
import AffiliateBox from "@/components/cta/AffiliateBox"
import RelatedArticles from "@/components/cta/RelatedArticles"

export const metadata: Metadata = {
  title: 'SlackにAIが「同僚」としてやってきた！新機能『Claude Tag』で仕事の「聞き忘れ」をゼロにするプロンプト術',
  description: '2026年6月23日にAnthropicが発表した新機能『Claude Tag』は、Slack上でAIのClaudeをチームメンバーとして招待し、チャット感覚でAIを活用できる画期的な機能です。ブラウザとチャットを行き来する手間をなくし、チームの会話要約やタスク整理をAIに任せる方法を解説します。',
  keywords: 'Claude Tag, Slack, AI, Anthropic, プロンプト, 業務効率化, チャットAI, AI活用, 初心者, チームコラボレーション',
  openGraph: {
    title: 'SlackにAIが「同僚」としてやってきた！新機能『Claude Tag』で仕事の「聞き忘れ」をゼロにするプロンプト術',
    description: 'Slack上でAIのClaudeをチームメンバーとして招待し、チャット感覚でAIを活用できる新機能『Claude Tag』の活用術。会話要約やタスク整理をAIに任せる方法を解説。',
    type: 'article',
    images: ['/images/og-image-claude-tag-slack.png'], // 仮の画像パス
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SlackにAIが「同僚」としてやってきた！新機能『Claude Tag』で仕事の「聞き忘れ」をゼロにするプロンプト術',
    description: 'Slack上でAIのClaudeをチームメンバーとして招待し、チャット感覚でAIを活用できる新機能『Claude Tag』の活用術。',
    images: ['/images/og-image-claude-tag-slack.png'], // 仮の画像パス
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
  { id: "intro", text: "AIは「ツール」から「同僚」へ: Slackで使える『Claude Tag』とは？", level: 2 as const },
  { id: "basic-usage", text: "まずは「呼んでみる」だけ: メンション機能の基本的な使い方", level: 2 as const },
  { id: "beginner-prompts", text: "初心者が今日から使える「丸投げ」プロンプト", level: 2 as const },
  { id: "listening-tips", text: "「聞き方」のコツ: 背景情報を教えなくても「その場のログ」を読んでくれるメリット", level: 2 as const },
  { id: "summary", text: "まとめ: 2026年は「AIに話しかける」のが当たり前のオフィススキルになる", level: 2 as const },
]

const prompts = {
  summarize: `これまでの会話を3行でまとめてください。`,
  tasks: `この議論で決まったタスクを箇条書きにして、担当者と期限も併記してください。`,
}

const relatedArticles = [
  {
    title: "【中級者向け】チームのAI活用を加速！Anthropicの新機能『Claude Tag』による共同作業プロンプト術",
    description: "Claude Tagのより高度な活用方法とチームでの共同作業におけるメリットを解説。",
    href: "/articles/claude-tag-workflow",
  },
  {
    title: "【初心者向け】もうプロンプトで迷わない！Microsoft 365 Copilotの『進化する入力ボックス』活用術",
    description: "AIとの対話における入力のコツと、より自然なコミュニケーションを実現する方法。",
    href: "/articles/copilot-workspace-input-guide",
  },
]

export default function ClaudeTagSlackBeginnerPage() {
  useSEO({
    title: 'SlackにAIが「同僚」としてやってきた！Claude Tag活用術',
    description: 'Slack上でAIのClaudeをチームメンバーとして招待できる新機能『Claude Tag』の活用術。会話要約やタスク整理をAIに任せる方法を初心者向けに解説。',
    keywords: 'Claude Tag, Slack, AI, Anthropic, プロンプト, 業務効率化, チャットAI, AI活用, 初心者'
  })

  useOGP({
    title: 'SlackにAIが「同僚」としてやってきた！新機能『Claude Tag』で仕事の「聞き忘れ」をゼロにするプロンプト術',
    description: 'Slack上でAIのClaudeをチームメンバーとして招待できる新機能『Claude Tag』の活用術。会話要約やタスク整理をAIに任せる方法を解説。',
    type: 'article',
    image: '/images/og-image-claude-tag-slack.png',
    url: typeof window !== 'undefined' ? window.location.href : ''
  })

  useStructuredData({
    title: 'SlackにAIが「同僚」としてやってきた！新機能『Claude Tag』で仕事の「聞き忘れ」をゼロにするプロンプト術',
    description: 'Slack上でAIのClaudeをチームメンバーとして招待できる新機能『Claude Tag』の活用術。会話要約やタスク整理をAIに任せる方法を初心者向けに解説。',
    author: 'Manus AI',
    datePublished: '2026-07-03T00:00:00Z',
    dateModified: '2026-07-03T00:00:00Z',
    image: '/images/og-image-claude-tag-slack.png',
    url: typeof window !== 'undefined' ? window.location.href : ''
  })

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title="SlackにAIが「同僚」としてやってきた！新機能『Claude Tag』で仕事の「聞き忘れ」をゼロにするプロンプト術"
          eyecatchSrc="/images/og-image-claude-tag-slack.png" // 仮の画像パス
          createdAt="2026年7月3日"
          updatedAt="2026年7月3日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="intro" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              AIは「ツール」から「同僚」へ: Slackで使える『Claude Tag』とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年6月23日、AnthropicはビジネスチャットツールのSlack上でAIのClaudeを「チームメンバーの一員」として招待できる新機能『Claude Tag』を発表しました。これまでのAIは、ブラウザを開いて質問しに行く「ツール」としての役割が主でしたが、『Claude Tag』の登場により、AIがまるで同僚のように会話に参加し、その場の流れを汲み取った回答をリアルタイムで提供してくれるようになりました。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              この機能は、ITに詳しくない方でもチャット感覚でAIを使いこなすための大きな一歩となります。本記事では、『Claude Tag』の基本的な使い方から、日々の業務で役立つ具体的なプロンプト術までを初心者向けに解説します。
            </p>
          </section>

          <section id="basic-usage" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まずは「呼んでみる」だけ: メンション機能の基本的な使い方
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              『Claude Tag』の使い方は非常にシンプルです。Slackのチャンネルやダイレクトメッセージで、他のチームメンバーにメンションするのと同じように「@Claude」と入力し、続けて質問や依頼を書き込むだけです。Claudeは、その会話の文脈を理解し、適切な情報を提供したり、タスクを実行したりします。
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-bold mb-2">メンション機能のポイント</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>「@Claude」と入力してAIを呼び出す</li>
                <li>質問や依頼は自然な言葉でOK</li>
                <li>会話の履歴を自動で参照し、文脈を理解する</li>
              </ul>
            </div>
            <p className="text-[#333333] leading-relaxed mb-4">
              これにより、わざわざ別のツールに切り替える手間が省け、思考の流れを中断することなくAIのサポートを受けられるようになります。
            </p>
          </section>

          <section id="beginner-prompts" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者が今日から使える「丸投げ」プロンプト
            </h2>
            <p className="text-[#333333] leading-relaxed mb-8">
              ここでは、『Claude Tag』を最大限に活用するための、初心者向けの具体的なプロンプト例をいくつか紹介します。これらのプロンプトを参考に、日々の業務でAIに「丸投げ」できるタスクを見つけてみましょう。
            </p>

            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                会話の要約
              </h3>
              <PromptInfoCard type="response" title="期待される動作">
                <p>
                  長くなったスレッドやチャンネルの会話内容を、簡潔に3行でまとめてくれます。会議の議事録作成や、途中参加者が状況を素早く把握するのに役立ちます。
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.summarize} />
              <ResponseExample response={`@Claude これまでの会話を3行でまとめてください。

**Claudeの応答例:**
1. 新製品のローンチ戦略について議論が行われました。
2. ターゲット顧客層とマーケティングチャネルの選定が主な議題でした。
3. 次回会議までに各チームが提案を持ち寄ることになりました。`}
              />
            </div>

            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                タスクの整理
              </h3>
              <PromptInfoCard type="response" title="期待される動作">
                <p>
                  議論の中から決定されたタスクを抽出し、箇条書きで整理してくれます。担当者や期限が明記されている場合は、それらも併記してくれます。
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.tasks} />
              <ResponseExample response={`@Claude この議論で決まったタスクを箇条書きにして、担当者と期限も併記してください。

**Claudeの応答例:**
- 新製品のプロモーション資料作成（担当: 田中、期限: 7月10日）
- SNS広告のクリエイティブ案作成（担当: 佐藤、期限: 7月15日）
- 競合分析レポートの最終化（担当: 鈴木、期限: 7月8日）`}
              />
            </div>
          </section>

          <section id="listening-tips" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「聞き方」のコツ: 背景情報を教えなくても「その場のログ」を読んでくれるメリット
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              『Claude Tag』の最大のメリットの一つは、ユーザーが明示的に背景情報を与えなくても、その場の会話履歴（ログ）を自動的に読み込んで文脈を理解してくれる点です。これにより、AIに質問する際に「これは〇〇の件で、以前話した△△についてなんだけど…」といった前置きが不要になります。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              例えば、あるプロジェクトの進捗について議論している最中に「@Claude、このプロジェクトの次のステップは何？」と尋ねれば、Claudeはこれまでの会話からプロジェクト名や現状を把握し、適切な回答を生成します。これは、AIが単なる質問応答システムではなく、「同僚」としてチームの状況を常に把握しているかのように振る舞うことを意味します。
            </p>
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h4 className="font-bold mb-2">効果的な「聞き方」</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>会話の流れの中で、簡潔に質問する</li>
                <li>過去の会話内容を改めて説明する必要はない</li>
                <li>AIが文脈を理解していることを前提に、知りたいことを直接尋ねる</li>
              </ul>
            </div>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ: 2026年は「AIに話しかける」のが当たり前のオフィススキルになる
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              『Claude Tag』のような機能の登場は、AIが私たちの働き方に深く統合されていく未来を示しています。2026年には、AIに話しかけ、そのサポートを受けながら業務を進めることが、ごく当たり前のオフィススキルとなるでしょう。特にSlackのようなコミュニケーションツールの中でAIが「同僚」として機能することで、チーム全体の生産性は飛躍的に向上する可能性があります。
            </p>
            <p className="text-[#333333] leading-relaxed">
              まずは今日から「@Claude」とメンションして、AIとの新しい働き方を体験してみてはいかがでしょうか。きっと、あなたの仕事の「聞き忘れ」や「やり忘れ」をゼロにし、よりスムーズなチームコラボレーションを実現してくれるはずです。
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
