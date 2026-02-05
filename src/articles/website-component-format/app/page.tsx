import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import TableOfContents from "@/components/article/TableOfContents"
import ArticleContent from "@/components/article/ArticleContent"

export default function MeetingMinutesArticlePage() {
  const headerProps = {
    logoSrc: "/images/logo.png",
    siteName: "ChatGPT活用情報局",
    navItems: [
      { label: "記事一覧", href: "/articles" },
      { label: "問い合わせ", href: "/contact" },
      { label: "プライバシーポリシー", href: "/privacy" },
    ],
  }

  const footerProps = {
    categories: [
      {
        name: "ビジネス文書",
        articles: [
          { title: "ChatGPTでそのまま使えるビジネスメール例文プロンプト10選", href: "/articles/business-email" },
          { title: "ChatGPTで敬語文章を自動生成するプロンプト", href: "/articles/keigo" },
          { title: "会議議事録をChatGPTで自動作成するプロンプト", href: "/articles/meeting-minutes" },
          { title: "クレーム返信をChatGPTで作るプロンプト", href: "/articles/claim-response" },
          { title: "営業メールを3分で作るChatGPTプロンプト", href: "/articles/sales-email" },
        ],
      },
      {
        name: "日常・カジュアル文書",
        articles: [
          { title: "ChatGPTでLINE返信を作るプロンプト", href: "/articles/line-reply" },
          { title: "ChatGPTで説明が苦手な人向け文章作成プロンプト", href: "/articles/explanation" },
          { title: "SNS投稿文をChatGPTで作成するプロンプト", href: "/articles/sns-post" },
          { title: "お礼メッセージをChatGPTで作るプロンプト", href: "/articles/thank-you" },
          { title: "招待状・案内文をChatGPTで作成するプロンプト", href: "/articles/invitation" },
        ],
      },
      {
        name: "基礎・入門",
        articles: [
          { title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集", href: "/articles/beginner-template" },
          { title: "ChatGPTの基本的な使い方ガイド", href: "/articles/basic-guide" },
          { title: "効果的なプロンプトの書き方入門", href: "/articles/prompt-basics" },
          { title: "ChatGPT無料版と有料版の違い", href: "/articles/free-vs-plus" },
          { title: "よくある失敗パターンと対策", href: "/articles/common-mistakes" },
        ],
      },
      {
        name: "キャリア",
        articles: [
          { title: "ChatGPTで志望動機を書くプロンプト", href: "/articles/motivation-letter" },
          { title: "職務経歴書をChatGPTで作成するプロンプト", href: "/articles/resume" },
          { title: "面接対策をChatGPTでするプロンプト", href: "/articles/interview" },
          { title: "自己PRをChatGPTで作成するプロンプト", href: "/articles/self-pr" },
          { title: "転職理由をChatGPTで整理するプロンプト", href: "/articles/career-change" },
        ],
      },
      {
        name: "コンテンツ作成",
        articles: [
          { title: "ブログ記事をAIに書かせる日本語プロンプト", href: "/articles/blog-writing" },
          { title: "YouTubeスクリプトをChatGPTで作成するプロンプト", href: "/articles/youtube-script" },
          { title: "商品説明文をChatGPTで作成するプロンプト", href: "/articles/product-description" },
          { title: "プレゼン資料の構成をChatGPTで作るプロンプト", href: "/articles/presentation" },
          { title: "企画書をChatGPTで作成するプロンプト", href: "/articles/proposal" },
        ],
      },
    ],
    copyright: "© 2026 ChatGPT活用情報局 All Rights Reserved.",
  }

  const articleData = {
    title: "会議議事録をChatGPTで自動作成するプロンプト4選【コピペOK】",
    eyecatchSrc: "/images/meeting-minutes-eyecatch.jpg",
    createdAt: "2026年2月4日",
    updatedAt: "2026年2月4日",
  }

  const headings = [
    { id: "introduction", text: "会議議事録の作成でこんな悩みはありませんか？", level: 2 as const },
    { id: "what-is-chatgpt", text: "ChatGPTとは？初心者向けにわかりやすく解説", level: 2 as const },
    { id: "prompts", text: "議事録作成に使えるChatGPTプロンプト4選", level: 2 as const },
    { id: "prompt-1", text: "プロンプト1：会議メモから議事録を自動生成", level: 3 as const },
    { id: "prompt-2", text: "プロンプト2：音声文字起こしから議事録を整理", level: 3 as const },
    { id: "prompt-3", text: "プロンプト3：アクションアイテム抽出", level: 3 as const },
    { id: "prompt-4", text: "プロンプト4：議事録の要約版を作成", level: 3 as const },
    { id: "tips", text: "プロンプトをさらに活用するコツ", level: 2 as const },
    { id: "cautions", text: "ChatGPT利用時の注意点", level: 2 as const },
    { id: "summary", text: "まとめ", level: 2 as const },
    { id: "cta", text: "ChatGPTをもっと活用したい方へ", level: 2 as const },
    { id: "related", text: "関連記事", level: 2 as const },
  ]

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={articleData.title}
          eyecatchSrc={articleData.eyecatchSrc}
          createdAt={articleData.createdAt}
          updatedAt={articleData.updatedAt}
        />
        <TableOfContents headings={headings} />
        <ArticleContent />
      </article>
    </PageLayout>
  )
}
