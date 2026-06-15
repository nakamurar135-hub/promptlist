
"use client";

import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import TableOfContents from "@/components/article/TableOfContents"
import PromptBlock from "@/components/article/PromptBlock"
import RelatedArticles from "@/components/cta/RelatedArticles"
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
      name: "基礎・入門",
      articles: [
        { title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集", href: "/articles/beginner-template" },
        { title: "プロンプトは「書く」から「話す」へ！ChatGPT「高度な音声モード」活用術", href: "/articles/chatgpt-voice-beginner" },
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
  { id: "yahoo-scout-intro", text: "Yahoo!が「アンサーエンジン」に進化！", level: 2 as const },
  { id: "natural-language-merit", text: "「単語」で探すのはもう古い？「話し言葉」で聞くメリット", level: 2 as const },
  { id: "prompt-examples", text: "初心者でも今日から使える！Yahoo Scout専用プロンプト例", level: 2 as const },
  { id: "yahoo-account-safety", text: "「Yahoo!のアカウント」だけで始められる安心感", level: 2 as const },
  { id: "summary", text: "まとめ：AIは「便利な道具」", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "ググるより速い！ChatGPTの「検索機能（Search）」で最新情報を引き出すプロンプト術",
    description: "「AIは古い情報しか持っていない」という初心者の思い込みを覆す、ChatGPTの最新「検索機能（Search）」の活用ガイド。",
    href: "/articles/chatgpt-search-beginner",
  },
  {
    title: "【初心者向け】「あのサイト、何だっけ？」をAIが解決！Chromeの『AI履歴検索』活用プロンプト術",
    description: "Chromeの新しいAI履歴検索機能を使って、過去に見たサイトを瞬時に見つけ出す方法を解説します。",
    href: "/articles/chrome-ai-history-search",
  },
]

export default function YahooScoutBeginnerPage() {
  const title = "【初心者向け】検索は「ググる」から「聞く」へ！Yahooの新機能『Yahoo Scout』活用プロンプト術";
  const description = "2026年3月に登場したYahoo!の次世代AIアンサーエンジン「Yahoo Scout」の初心者向けガイド。従来のキーワード検索から、AIへの問いかけ（プロンプト）へと検索体験をアップデートし、日常生活をより便利にする活用法を解説します。";
  const keywords = "Yahoo Scout, ヤフースカウト, Yahoo検索, AIアンサーエンジン, プロンプト, 初心者, AI活用, 検索のコツ";
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
    image: "/images/og-image-yahoo-scout.png", // 仮のOGP画像
    url,
  });

  useStructuredData({
    title,
    description,
    author: "AIプロンプト活用ガイド",
    datePublished: "2026-04-09T00:00:00Z",
    dateModified: "2026-04-09T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年4月9日"
          updatedAt="2026年4月9日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="yahoo-scout-intro" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Yahoo!が「アンサーエンジン」に進化！
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年3月、創業30周年を迎えたYahoo! JAPANは、従来の検索エンジンを大幅にアップデートした次世代AIアンサーエンジン「Yahoo Scout」を公開しました。
              これまでの検索は、知りたいことに関連する「単語」を並べて、出てきたサイトを自分で読み解く必要がありました。しかし、Yahoo Scoutは、あなたが知りたいことに対してAIが直接「答え」を生成して教えてくれる、まさに「聞けば答えてくれる」ツールへと進化しています。
            </p>
          </section>

          <section id="natural-language-merit" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「単語」で探すのはもう古い？「話し言葉」で聞くメリット
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              従来の検索とYahoo Scoutの最大の違いは、人間と話すような「話し言葉」がそのまま使える点です。
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>具体的に聞ける</strong>: 「明日の天気」と調べる代わりに、「明日の午後に横浜でテニスをする予定だけど、雨は降りそう？」と聞けば、AIがピンポイントで判断してくれます。</li>
              <li><strong>まとめる手間が省ける</strong>: 複数のサイトを見比べる必要はありません。AIが信頼できる情報を集め、分かりやすく1つにまとめて提示してくれます。</li>
            </ul>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者でも今日から使える！Yahoo Scout専用プロンプト例
            </h2>
            <p className="mb-4 text-[#333333]">Yahoo Scoutの力を引き出すには、AIへの「頼み方（プロンプト）」がコツです。以下の例をコピーして使ってみてください。</p>
            
            <PromptBlock
              title="【お買い物・生活】"
              prompt="「予算5,000円以内で、銀座周辺で買える、還暦のお祝いにぴったりのプレゼントを3つ提案して」"
            />
            
            <PromptBlock
              title="【メール整理】"
              prompt="「昨日届いた『Yahoo!ショッピング』からのメールの内容を、3行で分かりやすく教えて」"
            />
            
            <PromptBlock
              title="【ニュース・流行】"
              prompt="「最近話題の『生成AI』について、背景を全く知らない私にもわかるように、中学生向けの言葉で説明して」"
            />
          </section>

          <section id="yahoo-account-safety" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「Yahoo!のアカウント」だけで始められる安心感
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              新しいアプリをインストールしたり、難しい設定をしたりする必要はありません。いつものYahoo! JAPANの検索窓や、Yahoo!メールの画面からそのまま使い始めることができます。日本人に馴染み深いYahoo!だからこそ、プライバシーへの配慮も万全で、安心してAIを活用できるのが大きな魅力です。
            </p>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ：AIは「便利な道具」
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              AIは完璧ではありませんが、あなたの生活を劇的に便利にする「物知りな助手」です。
              まずは「近所の物知りな人にちょっと聞いてみる」くらいの軽い気持ちで、Yahoo Scoutに話しかけてみてください。あなたの毎日が、少しだけスマートに、そして楽になるはずです。
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
