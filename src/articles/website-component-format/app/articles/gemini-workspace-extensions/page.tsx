import type { Metadata } from 'next'
import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import TableOfContents from "@/components/article/TableOfContents"
import PromptBlock from "@/components/article/PromptBlock"
import ResponseExample from "@/components/article/ResponseExample"
import PromptInfoCard from "@/components/article/PromptInfoCard"
import RelatedArticles from "@/components/cta/RelatedArticles"

export const metadata: Metadata = {
  title: 'タブの切り替えはもう不要！Geminiの『Google Workspace拡張機能』でメールも予定も一括操作術',
  description: 'Google Geminiの「Google Workspace拡張機能」活用ガイド。Gmail、Googleドライブ、Googleカレンダーと連携し、AIに依頼するだけでメール要約や予定調整を完結。初心者向けにGoogleサービスを一括操作する快感を伝えます。',
  keywords: 'Gemini, Google Workspace拡張機能, メール, 予定, 一括操作, 初心者向け, AI活用, Googleサービス, 業務効率化',
  openGraph: {
    title: 'タブの切り替えはもう不要！Geminiの『Google Workspace拡張機能』でメールも予定も一括操作術',
    description: 'GeminiのGoogle Workspace拡張機能で、Gmail、カレンダー、ドライブを一括操作。AIに依頼するだけで業務を効率化する活用術。',
    type: 'article',
    images: ['/images/og-image-nano-banana-2.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'タブの切り替えはもう不要！Geminiの『Google Workspace拡張機能』でメールも予定も一括操作術',
    description: 'GeminiとGoogle Workspace連携で、メールも予定もAIが一括操作。初心者向け活用ガイド。',
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
        { title: "Gemini Google Workspace拡張機能活用術", href: "/articles/gemini-workspace-extensions" },
        { title: "AIエージェントで業務自動化", href: "/articles/ai-agent-workflow" },
        { title: "ChatGPT「高度な音声モード」活用術", href: "/articles/chatgpt-voice-beginner" },
      ],
    },
  ],
  copyright: "© 2026 AIプロンプト活用ガイド All Rights Reserved.",
}

const headings = [
  { id: "introduction", text: "タブの切り替えはもう不要！GeminiのGoogle Workspace拡張機能とは？", level: 2 as const },
  { id: "easy-setup", text: "Geminiが「司令塔」になる：拡張機能をオンにするだけの簡単ステップ", level: 2 as const },
  { id: "email-management", text: "「あのメール」を秒で見つける：大量の受信トレイから特定の情報を抽出するプロンプト", level: 2 as const },
  { id: "calendar-drive-integration", text: "カレンダーとドライブの連携：会議の予定確認から資料探しまで", level: 2 as const },
  { id: "privacy-safety", text: "プライバシーと安全性：自分のデータはどう扱われる？", level: 2 as const },
  { id: "summary", text: "まとめ：Googleサービスを一元管理する新しい働き方", level: 2 as const },
]

const prompts = {
  summarizeEmail: `あなたはGoogle GeminiのGoogle Workspace拡張機能です。以下のプロンプトを実行してください。

@Gmail 〇〇さんから届いた最新の打ち合わせ依頼メールの内容を3行でまとめて`,

  scheduleMeeting: `あなたはGoogle GeminiのGoogle Workspace拡張機能です。以下のプロンプトを実行してください。

@Google カレンダー 来週の月曜日で1時間空いている時間を教えて。そこに『資料作成』の予定を入れて`,

  responseExample: `■ Geminiによるメール要約

〇〇さんからの最新の打ち合わせ依頼メールは、以下の3点に要約されます。
1. 新規プロジェクト「X」に関する定例会議の開催提案
2. 候補日時：来週水曜日10:00〜11:00、または金曜日14:00〜15:00
3. 事前準備として、プロジェクトXの現状資料を確認しておくこと

■ Geminiによる予定追加

来週月曜日の14:00〜15:00に空き時間があります。この時間に「資料作成」の予定を追加しました。`,
}

const relatedArticles = [
  {
    title: "AIエージェントで業務自動化！自律型ワークフロー構築プロンプト術",
    description: "2026年の最新AI活用術。自律的に動くAIエージェントで業務を自動化する方法。",
    href: "/articles/ai-agent-workflow",
  },
  {
    title: "ChatGPT「高度な音声モード」活用術",
    description: "プロンプトは「書く」から「話す」へ！ChatGPT「高度な音声モード」活用術",
    href: "/articles/chatgpt-voice-beginner",
  },
]

export default function GeminiWorkspaceExtensionsPage() {
  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title="タブの切り替えはもう不要！Geminiの『Google Workspace拡張機能』でメールも予定も一括操作術"
          eyecatchSrc="/images/og-image-nano-banana-2.png"
          createdAt="2026年6月14日"
          updatedAt="2026年6月14日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              タブの切り替えはもう不要！GeminiのGoogle Workspace拡張機能とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              仕事やプライベートでGoogleのサービス（Gmail、Googleドライブ、Googleカレンダーなど）を頻繁に利用している方にとって、複数のタブを行き来する作業は日常茶飯事でしょう。しかし、2026年最新版のGoogle Gemini「Google Workspace拡張機能」を使えば、その手間は過去のものとなります。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              このガイドでは、GeminiとGoogle Workspaceを連携させ、AIに「あのメールの内容を要約して」「来週の予定を空けて」と頼むだけで、すべての操作を完結させる方法を初心者向けに解説します。PCに備え付けのAIしか知らない層に向けて、Googleのサービスを「一つの画面」で操る快感をお届けします。
            </p>
          </section>

          <section id="easy-setup" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Geminiが「司令塔」になる：拡張機能をオンにするだけの簡単ステップ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Google Workspace拡張機能の導入は非常に簡単です。Geminiの設定画面から、数クリックでGmail、Googleドライブ、Googleカレンダーへのアクセスを許可するだけで、GeminiがあなたのGoogleサービス全体の「司令塔」となります。
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-bold mb-2">設定手順</h4>
              <ol className="list-decimal list-inside space-y-2">
                <li>Geminiを開き、設定アイコンをクリック</li>
                <li>「拡張機能」タブを選択</li>
                <li>「Google Workspace」の項目をオンにする</li>
                <li>アクセス許可を求められたら「許可」を選択</li>
              </ol>
            </div>
          </section>

          <section id="email-management" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「あのメール」を秒で見つける：大量の受信トレイから特定の情報を抽出するプロンプト
            </h2>
            <p className="text-[#333333] leading-relaxed mb-8">
              膨大なメールの中から必要な情報を見つけ出すのは一苦労です。GeminiのGoogle Workspace拡張機能を使えば、自然言語でAIに指示するだけで、瞬時に目的のメールを特定し、内容を要約させることができます。
            </p>

            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                メール要約プロンプト
              </h3>
              <PromptInfoCard type="response" title="期待される動作">
                <p>
                  指定した送信者からの最新メールを検索し、その内容を簡潔に要約してくれます。
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.summarizeEmail} />
              <ResponseExample response={prompts.responseExample} />
            </div>
          </section>

          <section id="calendar-drive-integration" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              カレンダーとドライブの連携：会議の予定確認から資料探しまで
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Geminiは、カレンダーの空き状況確認や予定の追加、さらには関連するGoogleドライブの資料検索までを一連の流れで実行できます。これにより、会議の準備やタスク管理が劇的に効率化されます。
            </p>
            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                予定調整＆資料検索プロンプト
              </h3>
              <PromptInfoCard type="response" title="期待される動作">
                <p>
                  カレンダーの空き時間を確認し、新しい予定を追加。さらに、その予定に関連するドライブ内の資料を検索してくれます。
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.scheduleMeeting} />
            </div>
          </section>

          <section id="privacy-safety" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              プライバシーと安全性：自分のデータはどう扱われる？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              AIに個人情報や機密情報へのアクセスを許可することに不安を感じる方もいるでしょう。Google GeminiのGoogle Workspace拡張機能は、Googleの厳重なセキュリティ基準に基づいて設計されています。
            </p>
            <ul className="list-disc list-inside text-[#333333] space-y-3 mb-6">
              <li><strong>データは安全に保護:</strong> あなたのデータはGoogleのインフラで保護され、不正アクセスから守られます。</li>
              <li><strong>明示的な許可:</strong> 拡張機能がアクセスできる範囲は、あなたが明示的に許可した範囲のみです。</li>
              <li><strong>いつでもオフにできる:</strong> 不要になった場合は、いつでも拡張機能をオフにしたり、アクセス許可を取り消したりできます。</li>
            </ul>
            <p className="text-[#333333] leading-relaxed">
              安心してGeminiをあなたの「AIアシスタント」として活用してください。
            </p>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ：Googleサービスを一元管理する新しい働き方
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Google GeminiのGoogle Workspace拡張機能は、私たちの働き方を根本から変える可能性を秘めています。複数のアプリケーションを行き来する手間をなくし、AIにタスクを一元的に任せることで、より本質的な業務に集中できるようになります。
            </p>
            <p className="text-[#333333] leading-relaxed">
              ぜひ今日からGeminiのGoogle Workspace拡張機能を活用し、あなたのデジタルワークフローを最適化してみてください。
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
