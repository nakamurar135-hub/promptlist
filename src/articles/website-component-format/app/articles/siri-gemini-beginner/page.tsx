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
  { id: "siri-evolution", text: "「Siri、どうしたの？」2026年、iPhoneの頭脳がGoogle Geminiで進化した！", level: 2 as const },
  { id: "what-is-different", text: "これまでのSiriと何が違う？「意図」を読み取る力", level: 2 as const },
  { id: "prompt-examples", text: "初心者でも魔法が使える！Siriへの「賢い頼み方（プロンプト）」例", level: 2 as const },
  { id: "privacy-safety", text: "プライバシーも安心のApple品質", level: 2 as const },
  { id: "summary", text: "まとめ：「Hey Siri」は魔法の呪文", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "プロンプトは「書く」から「話す」へ！ChatGPT「高度な音声モード」活用術",
    description: "AIと自然に会話しながら理想の回答を引き出す方法を解説",
    href: "/articles/chatgpt-voice-beginner",
  },
  {
    title: "【初心者向け】検索は「ググる」から「聞く」へ！Yahooの新機能『Yahoo Scout』活用プロンプト術",
    description: "Yahoo!の次世代AIアンサーエンジン「Yahoo Scout」の初心者向けガイド",
    href: "/articles/yahoo-scout-beginner",
  },
]

export default function SiriGeminiBeginnerPage() {
  const title = "【初心者向け】iPhoneのSiriが賢くなった！Google Gemini搭載で「頼み事」が通じるプロンプト術";
  const description = "2026年、AppleとGoogleの提携により進化したSiriの初心者向け活用ガイド。Geminiの搭載で、これまでの単純な命令から、複雑な意図を汲み取った「頼み事」ができるようになった新しいSiriの使いこなし術を解説します。";
  const keywords = "iPhone, Siri, Google Gemini, AI, プロンプト, 初心者, Apple, 活用術, 音声操作";
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
    datePublished: "2026-04-10T00:00:00Z",
    dateModified: "2026-04-10T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年4月10日"
          updatedAt="2026年4月10日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="siri-evolution" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「Siri、どうしたの？」2026年、iPhoneの頭脳がGoogle Geminiで進化した！
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年1月、AppleとGoogleが電撃提携を発表しました。この提携により、iPhoneのパーソナルアシスタント「Siri」の基盤に、Googleの誇る高性能AI「Gemini」が採用されることになったのです。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              これまで「タイマーをセットして」「明日の天気は？」といった、決まったフレーズでの命令しか受け付けなかったSiriが、まるで人間のようにあなたの言葉の裏にある「意図」を汲み取ってくれるようになりました。
            </p>
          </section>

          <section id="what-is-different" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              これまでのSiriと何が違う？「意図」を読み取る力
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              新しいSiriの最大の特徴は、単なる命令の実行ではなく、文脈や理由まで理解した「頼み事」ができるようになった点です。
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>文脈の理解</strong>: 「10分後に起こして」ではなく、「10分後に、[予定] の準備をするのを忘れないように声をかけて」と、理由まで理解して最適な通知をしてくれます。</li>
              <li><strong>アプリを跨いだ連携</strong>: 「昨日届いたメールの内容を要約して、メモに保存しておいて」といった、複数のアプリを操作する複雑な指示も、声一つで完結します。</li>
            </ul>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者でも魔法が使える！Siriへの「賢い頼み方（プロンプト）」例
            </h2>
            <p className="mb-4 text-[#333333]">進化したSiriの力を引き出すには、少しだけ具体的に「頼み事」をするのがコツです。以下の例を参考に話しかけてみてください。</p>
            
            <PromptBlock
              title="【家事・料理】"
              prompt="「冷蔵庫に鶏肉とキャベツがあるんだけど、15分で作れる簡単な夕食を提案して」"
            />
            
            <PromptBlock
              title="【お出かけ】"
              prompt="「新宿駅に行く一番空いている時間を調べて、その時間にアラームをセットして」"
            />
            
            <PromptBlock
              title="【情報収集】"
              prompt="「昨日届いた山田さんからのメールの要点を、3行で教えて」"
            />
          </section>

          <section id="privacy-safety" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              プライバシーも安心のApple品質
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「GoogleのAIを使うなら、私のデータはどうなるの？」と不安に思う方もいるかもしれません。
            </p>
            <PromptInfoCard type="tips" title="Appleのプライバシー保護">
              Googleの高度な頭脳（Gemini）を活用しつつ、あなたの個人データや声のデータはAppleが厳重に守る仕組みになっています。AIが必要な情報だけを匿名化して処理するため、安心して使い続けることができます。
            </PromptInfoCard>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ：「Hey Siri」は魔法の呪文
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              AIはもはや、難しいプロンプトを書かなければならない特別なものではありません。
              あなたのポケットに入っているiPhoneに、話し相手を増やすような感覚で一言話しかけてみてください。
            </p>
            <p className="text-[#333333] leading-relaxed">
              「Hey Siri」と呼びかけるだけで、あなたの毎日が少しだけスマートに、そして楽しくなるはずです。
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
