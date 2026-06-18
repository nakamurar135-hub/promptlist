
"use client"

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
  { id: "overview", text: "概要", level: 2 as const },
  { id: "target", text: "ターゲット", level: 2 as const },
  { id: "article-points", text: "記事のポイント", level: 2 as const },
  { id: "onscreen-awareness", text: "「説明」はいらない！画面を見せれば伝わる新時代", level: 3 as const },
  { id: "magic-phrase", text: "魔法のフレーズは「これ」と「あれ」", level: 3 as const },
  { id: "use-cases", text: "活用シーン：スマホ操作の「面倒くさい」をゼロに", level: 3 as const },
  { id: "privacy", text: "プライバシーへの配慮", level: 3 as const },
  { id: "prompt-examples", text: "プロンプト例", level: 2 as const },
  { id: "differentiation", text: "既存ネタとの差別化", level: 2 as const },
  { id: "news-source", text: "ニュースソース", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "【初心者向け】子供のスマホ利用をAIが見守る！Apple Intelligenceの『安心ペアレンタルコントロール』活用術",
    description: "Apple Intelligenceを活用した新しいペアレンタルコントロール機能で、子供の安全を守る方法を解説。",
    href: "/articles/apple-intelligence-parental-control",
  },
  {
    title: "【初心者向け】スマホの「通知疲れ」をAIが解決！Apple Intelligence『優先度自動仕分け』活用ガイド",
    description: "Apple Intelligenceの『優先度自動仕分け』機能を使い、重要な通知だけを選別する方法を解説。",
    href: "/articles/apple-intelligence-priority-notifications",
  },
  {
    title: "【初心者向け】iPhoneのSiriが賢くなった！Google Gemini搭載で「頼み事」が通じるプロンプト術",
    description: "Apple IntelligenceとGeminiの連携により、iPhoneの操作がどう変わるのか。iOSユーザー向けの活用ガイドです。",
    href: "/articles/siri-gemini-beginner",
  },
]

export default function SiriAiOnscreenAwarenessPage() {
  const title = "【初心者向け】iPhoneが「画面の中」を理解する！Siri AIの『これ、何？』活用プロンプト術"
  const description = "2026年6月のWWDC26で発表された次世代Apple Intelligenceの目玉機能「Siri AI」の画面認識（On-screen Awareness）にフォーカスしたガイド。新しいSiriは「今、画面に映っているもの」を理解し、説明不要の直感的な操作を可能にします。"
  const keywords = "Siri AI, Apple Intelligence, 画面認識, On-screen Awareness, iPhone, プロンプト, 初心者, WWDC26, 活用術"
  const publishedDate = "2026-06-18T00:00:00Z"
  const modifiedDate = "2026-06-18T00:00:00Z"
  const url = "https://promptlist.jp/articles/siri-ai-onscreen-awareness"
  const image = "https://promptlist.jp/images/siri-ai-onscreen-awareness-eyecatch.jpg" // 仮の画像URL

  // SEO最適化
  useSEO({
    title: `${title} | AIプロンプト活用ガイド`,
    description,
    keywords,
  })

  useOGP({
    title,
    description,
    type: "article",
    image,
    url,
  })

  useStructuredData({
    title,
    description,
    author: "AIプロンプト活用ガイド",
    datePublished: publishedDate,
    dateModified: modifiedDate,
    image,
    url,
  })

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ArticleHeader
          title={title}
          eyecatchSrc={image}
          createdAt="2026.06.18"
          updatedAt="2026.06.18"
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <section id="overview" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                概要
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                2026年6月のWWDC26で発表された次世代Apple Intelligenceの目玉機能「Siri AI」の画面認識（On-screen Awareness）にフォーカスしたガイドです。これまでのAIは「言葉で説明する」必要がありましたが、新しいSiriは「今、画面に映っているもの」を理解します。「このメールの返信を考えて」「この写真に写っている場所を教えて」といった、説明不要の直感的な頼み方をIT初心者に伝授します。
              </p>
            </section>

            <section id="target" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                ターゲット
              </h2>
              <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4">
                <li>iPhoneを使っているが、AIへの指示（プロンプト）をどう書けばいいか分からない初心者。</li>
                <li>ネットで見つけた情報や届いたメールに対して、どうアクションすればいいか迷うことが多い人。</li>
                <li>「プロンプト」という言葉を聞くだけで難しそうだと感じてしまう人。</li>
              </ul>
            </section>

            <section id="article-points" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                記事のポイント
              </h2>
              <h3 id="onscreen-awareness" className="text-lg md:text-xl font-bold text-[#333333] mb-3 mt-6">
                1. 「説明」はいらない！画面を見せれば伝わる新時代
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                Siri AIが「今、ユーザーが見ているもの」を共有しているメリットを解説します。言葉で状況を説明する手間が省け、よりスムーズなコミュニケーションが可能になります。
              </p>
              <h3 id="magic-phrase" className="text-lg md:text-xl font-bold text-[#333333] mb-3 mt-6">
                2. 魔法のフレーズは「これ」と「あれ」
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                代名詞だけで通じる、初心者にとって最もハードルの低いプロンプト術を紹介します。「これ」と指し示すだけでAIが意図を汲み取ってくれます。
              </p>
              <h3 id="use-cases" className="text-lg md:text-xl font-bold text-[#333333] mb-3 mt-6">
                3. 活用シーン：スマホ操作の「面倒くさい」をゼロに
              </h3>
              <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4">
                <li><strong>メールの返信</strong>：届いた招待状を見ながら「これの返信を書いて」</li>
                <li><strong>写真の整理</strong>：旅行の写真を見ながら「これと同じ場所で撮った写真を全部集めて」</li>
                <li><strong>情報収集</strong>：SNSで見つけた料理の写真を見ながら「これのレシピを調べて」</li>
              </ul>
              <h3 id="privacy" className="text-lg md:text-xl font-bold text-[#333333] mb-3 mt-6">
                4. プライバシーへの配慮
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                画面を見ているといっても、データは端末内で安全に処理される（オンデバイス処理）安心感を強調します。プライバシーを守りながら便利な機能を利用できます。
              </p>
            </section>

            <section id="prompt-examples" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                プロンプト例
              </h2>
              <PromptBlock
                title="メール画面での操作"
                prompt="（メール画面で）これの返信を、丁寧な言葉で下書きして"
              />
              <PromptBlock
                title="写真画面での操作"
                prompt="（写真画面で）この写真を、お母さんに送っておいて"
              />
              <PromptBlock
                title="ブラウザでの操作"
                prompt="（ブラウザでレストランを見て）ここに行くためのルートを調べて"
              />
            </section>

            <section id="differentiation" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                既存ネタとの差別化
              </h2>
              <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4">
                <li><code>siri-gemini-beginner</code>（Siri+Gemini）：こちらはGeminiの知識量による「賢い回答」が主眼。本記事は「画面認識」による「操作の簡略化」に特化しています。</li>
                <li><code>apple-intelligence-priority-notifications</code>：こちらは通知の自動整理（受動的）が主眼。本記事はユーザーからの能動的な「頼み事」が主眼です。</li>
              </ul>
            </section>

            <section id="news-source" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                ニュースソース
              </h2>
              <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4">
                <li><a href="https://www.apple.com/jp/newsroom/2026/06/apple-unveils-next-generation-of-apple-intelligence-siri-ai-and-more/" target="_blank" rel="noopener noreferrer">Apple、次世代のApple IntelligenceやSiri AIなどを発表</a> (2026/06/09)</li>
              </ul>
            </section>

            <section id="summary" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                まとめ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Siri AIの画面認識機能は、iPhone操作のあり方を根本から変える可能性を秘めています。言葉で説明することなく、画面を見せるだけでAIがユーザーの意図を理解し、複雑な操作を代行してくれます。IT初心者こそ、この「これ」「あれ」で通じる直感的なプロンプト術を活用し、スマホライフをより快適に、より楽しくしていきましょう。
              </p>
            </section>

            <section id="related" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                関連記事
              </h2>
              <RelatedArticles articles={relatedArticles} />
            </section>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents headings={headings} />
            </div>
          </aside>
        </div>
      </article>
    </PageLayout>
  )
}
