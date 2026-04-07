import type { Metadata } from 'next'
import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import TableOfContents from "@/components/article/TableOfContents"
import PromptBlock from "@/components/article/PromptBlock"
import RelatedArticles from "@/components/cta/RelatedArticles"
import { useSEO } from "@/hooks/useSEO"
import { useOGP } from "@/hooks/useOGP"
import { useStructuredData } from "@/hooks/useStructuredData"

export const metadata: Metadata = {
  title: '面倒な指示はAIに覚えさせよう！ChatGPT「Skills」超入門',
  description: '毎回同じようなプロンプトを打ち込む手間から解放される、ChatGPTの「Skills」機能の初心者向け解説ガイド。よく使う指示を「スキル」として登録し、一言で呼び出す方法を、PCに標準搭載されているChatGPTでの具体的な設定手順とともに紹介します。',
  keywords: 'ChatGPT, Skills, プロンプト, 自動化, 初心者, AI活用, 効率化, 命令セット',
  openGraph: {
    title: '面倒な指示はAIに覚えさせよう！ChatGPT「Skills」超入門',
    description: '毎回同じようなプロンプトを打ち込む手間から解放される、ChatGPTの「Skills」機能の初心者向け解説ガイド。よく使う指示を「スキル」として登録し、一言で呼び出す方法を、PCに標準搭載されているChatGPTでの具体的な設定手順とともに紹介します。',
    type: 'article',
    images: ['/images/og-image-chatgpt-skills.png'], // 後で作成するOGP画像
  },
  twitter: {
    card: 'summary_large_image',
    title: '面倒な指示はAIに覚えさせよう！ChatGPT「Skills」超入門',
    description: '毎回同じようなプロンプトを打ち込む手間から解放される、ChatGPTの「Skills」機能の初心者向け解説ガイド。よく使う指示を「スキル」として登録し、一言で呼び出す方法を、PCに標準搭載されているChatGPTでの具体的な設定手順とともに紹介します。',
    images: ['/images/og-image-chatgpt-skills.png'], // 後で作成するOGP画像
  },
}

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
      name: "基礎・入門",
      articles: [
        { title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集", href: "/articles/beginner-template" },
        { title: "プロンプトは「書く」から「話す」へ！ChatGPT「高度な音声モード」活用術", href: "/articles/chatgpt-voice-beginner" },
        { title: "面倒な指示はAIに覚えさせよう！ChatGPT「Skills」超入門", href: "/articles/chatgpt-skills-beginner" },
      ],
    },
    {
      name: "ビジネス文書",
      articles: [
        { title: "会議議事録をChatGPTで自動作成するプロンプト4選", href: "/articles/chatgpt-meeting-minutes" },
        { title: "Excelの「わからない」をAIに丸投げ！Copilot Excelエージェント超入門", href: "/articles/excel-copilot-agent" },
      ],
    },
  ],
  copyright: "© 2026 AIプロンプト活用ガイド All Rights Reserved.",
}

// 目次データ
const headings = [
  { id: "overview", text: "概要", level: 2 as const },
  { id: "target", text: "ターゲット", level: 2 as const },
  { id: "what-is-skills", text: "「Skills」とは？", level: 2 as const },
  { id: "skill-examples", text: "具体的なスキル登録例", level: 2 as const },
  { id: "reply-formal", text: "`reply_formal`: 丁寧なビジネスメールの返信を作成するスキル", level: 3 as const },
  { id: "summarize-jp", text: "`summarize_jp`: 日本語の文章を3行で要約するスキル", level: 3 as const },
  { id: "translate-en", text: "`translate_en`: 受け取った文章を自然な英語に翻訳するスキル", level: 3 as const },
  { id: "usage-tips", text: "使い方のコツ", level: 2 as const },
  { id: "beginner-benefits", text: "初心者のメリット", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "references", text: "参考文献", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集",
    description: "効果的なプロンプトの書き方を基礎から解説",
    href: "/articles/beginner-template",
  },
  {
    title: "プロンプトは「書く」から「話す」へ！ChatGPT「高度な音声モード」活用術",
    description: "キーボード入力が苦手な初心者でも大丈夫！ChatGPTの「高度な音声モード」を使い、AIと自然に会話しながら理想の回答を引き出す方法を分かりやすく解説します。",
    href: "/articles/chatgpt-voice-beginner",
  },
]

export default function ChatGPTSkillsBeginnerPage() {
  const title = "面倒な指示はAIに覚えさせよう！ChatGPT「Skills」超入門";
  const description = "毎回同じようなプロンプトを打ち込む手間から解放される、ChatGPTの「Skills」機能の初心者向け解説ガイド。よく使う指示を「スキル」として登録し、一言で呼び出す方法を、PCに標準搭載されているChatGPTでの具体的な設定手順とともに紹介します。";
  const keywords = "ChatGPT, Skills, プロンプト, 自動化, 初心者, AI活用, 効率化, 命令セット";
  const url = typeof window !== 'undefined' ? window.location.href : "https://promptlist.jp/articles/chatgpt-skills-beginner";

  useSEO({
    title: `${title} | AIプロンプト活用ガイド`,
    description,
    keywords,
  });

  useOGP({
    title,
    description,
    type: "article",
    image: "https://promptlist.jp/images/og-image-chatgpt-skills.png", // 後で作成するOGP画像
    url,
  });

  useStructuredData({
    title,
    description,
    author: "AIプロンプト活用ガイド",
    datePublished: "2026-04-07T00:00:00Z", // 本日の日付に設定
    dateModified: "2026-04-07T00:00:00Z", // 本日の日付に設定
    image: "https://promptlist.jp/images/og-image-chatgpt-skills.png",
    url,
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/chatgpt-skills-eyecatch.jpg" // 後で作成するアイキャッチ画像
          createdAt="2026年4月7日"
          updatedAt="2026年4月7日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="overview" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              概要
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              毎回同じようなプロンプトを打ち込む手間から解放される、ChatGPTの「Skills」機能の初心者向け解説ガイドです。
              よく使う指示を「スキル」として登録し、一言で呼び出す方法を、PCに標準搭載されているChatGPTでの具体的な設定手順とともに紹介します。
            </p>
          </section>

          <section id="target" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ターゲット
            </h2>
            <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4">
              <li>ChatGPTで、メールの返信や文章の要約など、決まった作業を何度も行っている人</li>
              <li>プロンプトを毎回考えるのが面倒だと感じている初心者</li>
            </ul>
          </section>

          <section id="what-is-skills" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「Skills」とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「Skills」とは、あなた専用の「命令セット」を作成できる機能です。例えば「いつもの丁寧な言葉遣いで返信を作って」と頼むだけで、事前に登録した詳細な指示（スキル）をAIが実行してくれます。
              これにより、毎回長いプロンプトを入力する手間が省け、より効率的にChatGPTを活用できるようになります。
            </p>
          </section>

          <section id="skill-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              具体的なスキル登録例
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              以下に、すぐに使える具体的なスキル登録例を3つ紹介します。
            </p>
            <h3 id="reply-formal" className="text-lg md:text-xl font-bold text-[#333333] mb-3 pb-1 border-b border-[#5B9BD5]">
              `reply_formal`: 丁寧なビジネスメールの返信を作成するスキル
            </h3>
            <PromptBlock
              prompt={`あなたはプロのビジネスパーソンです。以下のメールに対して、丁寧な言葉遣いで返信を作成してください。件名：Re: [元の件名]、本文：[返信内容]、結び：[署名]の形式でお願いします。`}
            />
            <h3 id="summarize-jp" className="text-lg md:text-xl font-bold text-[#333333] mb-3 pb-1 border-b border-[#5B9BD5]">
              `summarize_jp`: 日本語の文章を3行で要約するスキル
            </h3>
            <PromptBlock
              prompt={`以下の日本語の文章を読み、重要なポイントを3行で簡潔に要約してください。`}
            />
            <h3 id="translate-en" className="text-lg md:text-xl font-bold text-[#333333] mb-3 pb-1 border-b border-[#5B9BD5]">
              `translate_en`: 受け取った文章を自然な英語に翻訳するスキル
            </h3>
            <PromptBlock
              prompt={`以下の日本語の文章を、ビジネスシーンで通用する自然な英語に翻訳してください。`}
            />
          </section>

          <section id="usage-tips" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              使い方のコツ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              長いプロンプトを分割してスキル化し、それらを組み合わせることで、より複雑な作業も簡単に指示できるようになります。
              例えば、「`summarize_jp`で要約した後、`translate_en`で英語に翻訳して」といった形で、複数のスキルを連続して使用することも可能です。
            </p>
          </section>

          <section id="beginner-benefits" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者のメリット
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「プロンプトを覚える」のではなく「AIに覚えさせる」という発想の転換を促し、AI活用のハードルを大きく下げます。
              これにより、AI初心者でも複雑な指示を簡単に実行できるようになり、AIを日常業務にスムーズに取り入れることが可能になります。
            </p>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              ChatGPTの「Skills」機能は、プロンプト入力の手間を削減し、AI活用をより身近にする強力なツールです。
              本記事で紹介したスキル登録例や使い方のコツを参考に、あなたも今日から「AIに覚えさせる」新しいAI活用法を始めてみましょう。
            </p>
          </section>

          <section id="references" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              参考文献
            </h2>
            <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4">
              <li><a href="https://www.youtube.com/watch?v=bygTQRWkJ18" target="_blank" rel="noopener noreferrer">2026年のAI活用は「プロンプト」から「Skills」が主流に！</a></li>
              <li><a href="https://comman.co.jp/column/chatgpt-skills" target="_blank" rel="noopener noreferrer">ChatGPT Skillsとは？できることと活用法を解説</a></li>
            </ul>
          </section>
        </div>
      </article>
    </PageLayout>
  )
}
