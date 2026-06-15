
"use client";

import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import TableOfContents from "@/components/article/TableOfContents"
import PromptBlock from "@/components/article/PromptBlock"
import PromptInfoCard from "@/components/article/PromptInfoCard"
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
  { id: "introduction", text: "スマートスピーカーが「話の通じる家族」に！Gemini for Homeの『意図を汲み取る』プロンプト術", level: 2 as const },
  { id: "what-is-gemini-for-home", text: "Gemini for Homeとは？", level: 2 as const },
  { id: "tips-for-beginners", text: "初心者でも簡単！Gemini for Home活用のコツ", level: 2 as const },
  { id: "prompt-examples", text: "今日から使える！Gemini for Homeプロンプトの具体例", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "【初心者向け】iPhoneのSiriが賢くなった！Google Gemini搭載で「頼み事」が通じるプロンプト術",
    description: "Google Gemini搭載で進化したSiriの初心者向け活用ガイド",
    href: "/articles/siri-gemini-beginner",
  },
  {
    title: "【初心者向け】言葉が「動く図解」に！Geminiの『シミュレーター生成』プロンプト術",
    description: "Google Geminiの新機能「動的コンテンツ回答」を活用し、複雑な仕組みをシミュレーターとして出力させるガイド",
    href: "/articles/gemini-dynamic-visualizer",
  },
]

export default function GeminiForHomeBeginnerPage() {
  const title = "【初心者向け】スマートスピーカーが「話の通じる家族」に！Gemini for Homeの『意図を汲み取る』プロンプト術";
  const description = "Google Home/NestデバイスがGemini搭載にアップグレード！従来の「決まった命令」ではなく「自然な話し言葉」で家電操作や生活管理を行うための初心者向けプロンプト術を解説します。";
  const keywords = "Gemini for Home, Google Home, スマートスピーカー, プロンプト術, 初心者, AI, 家電操作, 生活管理";
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
    image: "/images/og-image-gemini-for-home-beginner.png",
    url,
  });

  useStructuredData({
    title,
    description,
    author: "AIプロンプト活用ガイド",
    datePublished: "2026-04-15T00:00:00Z",
    dateModified: "2026-04-15T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年4月15日"
          updatedAt="2026年4月15日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              スマートスピーカーが「話の通じる家族」に！Gemini for Homeの『意図を汲み取る』プロンプト術
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「OK Google、電気を消して」と命令するだけの日々はもう終わりです。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              Google HomeやNestデバイスがGemini搭載にアップグレードされたことで、スマートスピーカーは単なる「リモコン」から、あなたの意図を汲み取ってくれる「賢いパートナー」へと進化しました。今回は、自然な会話で家を快適にするためのプロンプト術をご紹介します。
            </p>
          </section>

          <section id="what-is-gemini-for-home" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Gemini for Homeとは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Gemini for Homeは、Googleの最新AI「Gemini」をスマートホーム体験に統合した新しい仕組みです。従来のスマートスピーカーとの最大の違いは、「文脈の理解」と「柔軟な対応力」にあります。
            </p>
            <ul className="list-disc list-inside mb-4 text-[#333333]">
              <li>**曖昧な指示の理解**: 正確なデバイス名でなくても、状況から判断して操作します。</li>
              <li>**複雑なリクエストへの対応**: 複数の操作を一度に、あるいは条件付きで依頼できます。</li>
              <li>**対話による解決**: トラブルや疑問に対して、会話を通じて解決策を提案します。</li>
            </ul>
            <PromptInfoCard type="info" title="ニュースソース">
              Gemini for Home の早期アクセスを開始：AI でご自宅をより便利に - <a href="https://blog.google/intl/ja-jp/products/devices-services/gemini-for-home/" target="_blank" rel="noopener noreferrer">Google Japan Blog</a>
            </PromptInfoCard>
          </section>

          <section id="tips-for-beginners" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者でも簡単！Gemini for Home活用のコツ
            </h2>
            <p className="mb-4 text-[#333333]">
              Geminiを使いこなすために、特別な「呪文」を覚える必要はありません。以下の3つのポイントを意識して、普段通りに話しかけてみてください。
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>**「〜以外」や「〜だけ」を活用する**: 従来のシステムが苦手だった例外処理も、Geminiならスムーズに理解します。</li>
              <li>**曖昧な記憶をそのまま伝える**: 曲名や映画名が思い出せなくても、その内容や特徴を説明すればGeminiが特定してくれます。</li>
              <li>**困りごとを相談する**: 「使い方がわからない」「動かない」といったトラブルも、対話を通じて解決をサポートしてくれます。</li>
            </ul>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              今日から使える！Gemini for Homeプロンプトの具体例
            </h2>
            <p className="mb-4 text-[#333333]">
              日常のシーンで役立つ具体的なプロンプト例をご紹介します。
            </p>
            
            <PromptBlock
              title="【柔軟な家電操作】"
              prompt="「リビングの電気、ソファの横にあるやつ以外全部消して。あと、寝室のエアコンを24度に設定しておいて。」"
            />
            
            <PromptBlock
              title="【曖昧なエンタメ検索】"
              prompt="「あの、宇宙人が地球に来て自転車で空を飛ぶ有名な映画の曲をかけて。」"
            />
            
            <PromptBlock
              title="【家庭内のトラブル解決】"
              prompt="「食洗機から変な音がして止まっちゃったんだけど、どうすればいいかな？エラーコードはE3って出てる。」"
            />
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Gemini for Homeの登場により、スマートスピーカーはもはや「命令を聞く機械」ではなく、私たちの生活を理解し、寄り添ってくれる「家族の一員」のような存在になりました。
            </p>
            <p className="text-[#333333] leading-relaxed">
              ぜひ、今回ご紹介したプロンプトを参考に、あなたの言葉でGeminiに話しかけてみてください。きっと、これまで以上に快適でスマートな生活が始まるはずです。
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
