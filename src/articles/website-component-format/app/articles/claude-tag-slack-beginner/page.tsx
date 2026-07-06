import type { Metadata } from 'next'
import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import TableOfContents from "@/components/article/TableOfContents"
import PromptBlock from "@/components/article/PromptBlock"
import PromptInfoCard from "@/components/article/PromptInfoCard"
import ResponseExample from "@/components/article/ResponseExample"
import AffiliateBox from "@/components/cta/AffiliateBox"
import RelatedArticles from "@/components/cta/RelatedArticles"

export const metadata: Metadata = {
  title: '【初心者向け】SlackにAIが「同僚」としてやってきた！新機能『Claude Tag』プロンプト術',
  description: 'Slack上でAIのClaudeを「チームメンバーの一員」として招待できる新機能『Claude Tag』の初心者向け解説ガイド。メンションするだけで会話の流れを汲み取ってくれるAIの活用法と、今日から使える丸投げプロンプトを紹介します。',
  keywords: 'Claude Tag, Slack, AI, 初心者, プロンプト, 業務効率化, Anthropic',
  openGraph: {
    title: '【初心者向け】SlackにAIが「同僚」としてやってきた！新機能『Claude Tag』プロンプト術',
    description: 'Slack上でAIのClaudeを「チームメンバーの一員」として招待できる新機能『Claude Tag』の初心者向け解説ガイド。メンションするだけで会話の流れを汲み取ってくれるAIの活用法を紹介。',
    type: 'article',
    images: ['/images/og-image-claude-tag-slack.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '【初心者向け】SlackにAIが「同僚」としてやってきた！新機能『Claude Tag』プロンプト術',
    description: 'Slack上でAIのClaudeを「チームメンバーの一員」として招待できる新機能『Claude Tag』の初心者向け解説ガイド。',
    images: ['/images/og-image-claude-tag-slack.png'],
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
  { id: "introduction", text: "AIは「ツール」から「同僚」へ：Slackで使える『Claude Tag』とは？", level: 2 as const },
  { id: "how-to-use", text: "まずは「呼んでみる」だけ：メンション機能の基本的な使い方", level: 2 as const },
  { id: "prompts", text: "初心者が今日から使える「丸投げ」プロンプト4選", level: 2 as const },
  { id: "prompt-1", text: "1. 議論の要約プロンプト", level: 3 as const },
  { id: "prompt-2", text: "2. タスク整理プロンプト", level: 3 as const },
  { id: "prompt-3", text: "3. アイデア出しプロンプト", level: 3 as const },
  { id: "prompt-4", text: "4. トーン調整プロンプト", level: 3 as const },
  { id: "tips", text: "「聞き方」のコツ：背景情報を教えなくても「その場のログ」を読んでくれるメリット", level: 2 as const },
  { id: "summary", text: "まとめ：2026年は「AIに話しかける」のが当たり前のオフィススキルになる", level: 2 as const },
]

const prompts = {
  summary: `@Claude これまでの会話を3行でまとめて、現在の結論を教えてください。`,
  summaryResponse: `これまでの会話の要約です：
1. 次期プロジェクトのキックオフ日程は、7月15日に決定しました。
2. 会場はA会議室を第一候補とし、予約状況を確認中です。
3. アジェンダの作成は【担当者名】さんが今週末までに担当することになりました。

現在の結論としては、日程は確定しており、会場予約とアジェンダ作成の完了を待っている状態です。`,
  
  task: `@Claude この議論で決まったタスクを箇条書きにして、それぞれの担当者と期限を整理してください。`,
  taskResponse: `承知いたしました。議論から抽出したタスク一覧は以下の通りです：

- [ ] A会議室の予約確認（担当：佐藤さん、期限：本日中）
- [ ] キックオフ用アジェンダの作成（担当：鈴木さん、期限：7月10日）
- [ ] 参加者へのカレンダー招待送信（担当：未定、期限：7月12日）

※カレンダー招待の担当者が決まっていないようです。どなたが担当されますか？`,

  idea: `@Claude 【プロジェクト名を入力】のネーミング案を、これまでの会話の雰囲気に合わせて3つ提案して。`,
  ideaResponse: `これまでの会話の「革新的で親しみやすい」という雰囲気を踏まえ、【新サービス】のネーミング案を3つ提案します：

1. **NexConnect（ネクスコネクト）**：次世代のつながりを表現しつつ、響きがシャープです。
2. **和みリンク**：親しみやすさを前面に押し出し、誰でも使いやすい印象を与えます。
3. **CollaboCore（コラボコア）**：チームの核となるツールとしての力強さを持たせました。

いかがでしょうか？方向性を教えていただければ、さらにブラッシュアップいたします。`,

  tone: `@Claude 私が上に書いた【取引先名を入力】宛てのメッセージを、もう少し丁寧なビジネスメールのトーンに修正して。`,
  toneResponse: `ご提示いただいたメッセージを、より丁寧なビジネスメールのトーンに修正いたしました。

---
【株式会社〇〇】
【ご担当者名】様

いつも大変お世話になっております。
【自社名】の【自分の名前】でございます。

先日はお忙しい中、お打ち合わせのお時間をいただき、誠にありがとうございました。
さて、ご依頼いただいておりました【資料名】について、添付にてお送りいたします。

ご査収のほど、よろしくお願い申し上げます。
ご不明な点がございましたら、お気軽にお申し付けください。

引き続き、よろしくお願いいたします。
---

こちらでよろしいでしょうか？必要に応じて微調整をお願いいたします。`,
}

const relatedArticles = [
  {
    title: "AIエージェントで業務自動化！自律型ワークフロー構築プロンプト術",
    description: "単なるチャットから自律的に動くAIエージェントへ。複数のタスクを連携させて自動完結させる構築方法を解説します。",
    href: "/articles/ai-agent-workflow",
  },
  {
    title: "面倒な指示はAIに覚えさせよう！ChatGPT「Skills」超入門",
    description: "毎回同じようなプロンプトを打ち込む手間から解放される、ChatGPTの「Skills」機能の初心者向け解説ガイドです。",
    href: "/articles/chatgpt-skills-beginner",
  },
]

export default function ClaudeTagSlackBeginnerPage() {
  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title="【初心者向け】SlackにAIが「同僚」としてやってきた！新機能『Claude Tag』プロンプト術"
          eyecatchSrc="/images/og-image-claude-tag-slack.png"
          createdAt="2026年7月6日"
          updatedAt="2026年7月6日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              AIは「ツール」から「同僚」へ：Slackで使える『Claude Tag』とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年6月23日、Anthropicは新機能『Claude Tag』を発表しました。これは、ビジネスチャットツールのSlack上で、AIのClaudeを「チームメンバーの一員」として招待できる画期的な機能です。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              これまではブラウザを開いてAIに質問しに行く必要がありましたが、これからはSlackの会話の中で「@Claude」とメンションするだけで、その場の流れを汲み取った回答をくれます。ITに詳しくない人でも、チャット感覚でAIを使いこなすことができるようになりました。
            </p>
          </section>

          <section id="how-to-use" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まずは「呼んでみる」だけ：メンション機能の基本的な使い方
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              使い方は非常にシンプルです。Slackのチャンネルやダイレクトメッセージで、同僚に話しかけるのと同じように <code>@Claude</code> と入力してメッセージを送信するだけです。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              ブラウザとチャットを行き来するのが面倒で、AI活用が長続きしなかった人にとって、このシームレスな体験は大きなメリットとなります。
            </p>
          </section>

          <section id="prompts" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者が今日から使える「丸投げ」プロンプト4選
            </h2>
            <p className="text-[#333333] leading-relaxed mb-8">
              Claude Tagの強みは、会話の文脈を理解している点です。ここでは、詳細な指示を出さなくても「丸投げ」で使える便利なプロンプトを4つ紹介します。
            </p>

            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 id="prompt-1" className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                1. 議論の要約プロンプト
              </h3>
              <PromptInfoCard type="usecase" title="こんな時におすすめ">
                <p>長引いた議論の内容をサクッと把握したい時や、途中から会話に参加した時。</p>
              </PromptInfoCard>
              <PromptInfoCard type="tips" title="使い方のコツ">
                <p>「3行で」など分量を指定すると、より簡潔で分かりやすい要約が得られます。</p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.summary} />
              <PromptInfoCard type="response" title="期待される回答">
                <p>これまでの会話ログを分析し、主要なポイントと現在の結論を整理して返信してくれます。</p>
              </PromptInfoCard>
              <ResponseExample response={prompts.summaryResponse} />
            </div>

            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 id="prompt-2" className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                2. タスク整理プロンプト
              </h3>
              <PromptInfoCard type="usecase" title="こんな時におすすめ">
                <p>ミーティング後のネクストアクションを確認したい時や、誰が何をいつまでにやるのか曖昧な時。</p>
              </PromptInfoCard>
              <PromptInfoCard type="tips" title="使い方のコツ">
                <p>「担当者と期限を整理して」と明記することで、アクションプランとしてそのまま使えるリストになります。</p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.task} />
              <PromptInfoCard type="response" title="期待される回答">
                <p>会話の中からタスクを抽出し、チェックボックス形式で整理してくれます。抜け漏れがあれば指摘してくれることもあります。</p>
              </PromptInfoCard>
              <ResponseExample response={prompts.taskResponse} />
            </div>

            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 id="prompt-3" className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                3. アイデア出しプロンプト
              </h3>
              <PromptInfoCard type="usecase" title="こんな時におすすめ">
                <p>企画のネーミングや新しい施策のアイデアに行き詰まった時。</p>
              </PromptInfoCard>
              <PromptInfoCard type="tips" title="使い方のコツ">
                <p>「これまでの会話の雰囲気に合わせて」と指示することで、的外れな提案を防ぐことができます。</p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.idea} />
              <PromptInfoCard type="response" title="期待される回答">
                <p>プロジェクトの目的やチームの雰囲気を考慮した、複数のアイデア案を提示してくれます。</p>
              </PromptInfoCard>
              <ResponseExample response={prompts.ideaResponse} />
            </div>

            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 id="prompt-4" className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                4. トーン調整プロンプト
              </h3>
              <PromptInfoCard type="usecase" title="こんな時におすすめ">
                <p>社内向けに書いたラフな文章を、そのまま社外向け（取引先など）に送りたい時。</p>
              </PromptInfoCard>
              <PromptInfoCard type="tips" title="使い方のコツ">
                <p>自分が書いたメッセージの直後にメンションして指示するだけで、AIが意図を汲み取って書き直してくれます。</p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.tone} />
              <PromptInfoCard type="response" title="期待される回答">
                <p>指定した相手に適した、丁寧なビジネスメールのフォーマットに変換された文章が出力されます。</p>
              </PromptInfoCard>
              <ResponseExample response={prompts.toneResponse} />
            </div>
          </section>

          <section id="tips" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「聞き方」のコツ：背景情報を教えなくても「その場のログ」を読んでくれるメリット
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              従来のブラウザ版AIでは、質問する前に「私たちは〇〇というプロジェクトをしていて…」といった前提条件（コンテキスト）を入力する必要がありました。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              しかし、Slack上のClaude Tagは、そのチャンネルやスレッドの過去のやり取りを自動的に読み込んでくれます。そのため、人間同士の会話に割り込むような自然な形で「これ、どう思う？」と聞くだけで、的確な回答が得られるのが最大のメリットです。
            </p>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ：2026年は「AIに話しかける」のが当たり前のオフィススキルになる
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              『Claude Tag』の登場により、AIは単なる「便利なツール」から、いつでも相談できる「優秀な同僚」へと進化しました。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              まずは「これまでの会話をまとめて」といった簡単な指示から始めてみましょう。Slackの中でAIと日常的にコミュニケーションを取ることが、2026年の新しいオフィススキルとなっていきます。
            </p>
          </section>

          <AffiliateBox
            title="チームの生産性をさらに高めたい方へ"
            description="AIを活用した業務効率化について、より深く学びたい方はこちらの資料もおすすめです。"
            buttonText="最新のAI活用事例を見る"
            buttonHref="/articles"
            features={[
              "初心者でもわかるAI導入ステップ",
              "業界別の具体的な活用プロンプト",
              "最新のAIツール比較と選び方"
            ]}
          />

          <section id="related">
            <RelatedArticles articles={relatedArticles} />
          </section>
        </div>
      </article>
    </PageLayout>
  )
}
