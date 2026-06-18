
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
  { id: "ai-digital-gatekeeper", text: "AIが「デジタルの門番」に", level: 3 as const },
  { id: "easy-setup", text: "「おまかせ設定」で完了", level: 3 as const },
  { id: "dialogue-to-understand", text: "対話で状況を知る", level: 3 as const },
  { id: "guide-not-prohibit", text: "「禁止」ではなく「導く」", level: 3 as const },
  { id: "prompt-examples", text: "プロンプト例", level: 2 as const },
  { id: "differentiation", text: "既存ネタとの差別化", level: 2 as const },
  { id: "news-source", text: "ニュースソース", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "【初心者向け】iPhoneが「画面の中」を理解する！Siri AIの『これ、何？』活用プロンプト術",
    description: "Siri AIの画面認識機能で、iPhoneの操作がより直感的になる活用術を解説。",
    href: "/articles/siri-ai-onscreen-awareness",
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

export default function AppleIntelligenceParentalControlPage() {
  const title = "【初心者向け】子供のスマホ利用をAIが見守る！Apple Intelligenceの『安心ペアレンタルコントロール』活用術"
  const description = "2026年6月のWWDC26で発表された、Apple Intelligenceを活用した新しいペアレンタルコントロール機能のガイド。AIが子供のデバイス利用状況を分析し、年齢に不適切なコンテンツを自動でブロックしたり、健康的な利用時間を提案したりします。"
  const keywords = "Apple Intelligence, ペアレンタルコントロール, AI, スマホ, 子供, 安全, WWDC26, 初心者, ガイド"
  const publishedDate = "2026-06-18T00:00:00Z"
  const modifiedDate = "2026-06-18T00:00:00Z"
  const url = "https://promptlist.jp/articles/apple-intelligence-parental-control"
  const image = "https://promptlist.jp/images/apple-intelligence-parental-control-eyecatch.jpg" // 仮の画像URL

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
                2026年6月のWWDC26で発表された、Apple Intelligenceを活用した新しいペアレンタルコントロール機能のガイドです。AIが子供のデバイス利用状況を分析し、年齢に不適切なコンテンツを自動でブロックしたり、健康的な利用時間を提案したりします。「子供にスマホを持たせるのが不安」「設定が難しくて使いこなせない」という保護者向けに、AIに「見守り」を任せる簡単な方法を解説します。
              </p>
            </section>

            <section id="target" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                ターゲット
              </h2>
              <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4">
                <li>小中学生の子供を持つ、ITに詳しくない保護者。</li>
                <li>子供のスマホの安全設定（ペアレンタルコントロール）をしたいが、メニューが複雑で挫折した経験がある人。</li>
                <li>AIを「便利な道具」としてだけでなく、「家族を守るサポーター」として使いたい人。</li>
              </ul>
            </section>

            <section id="article-points" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                記事のポイント
              </h2>
              <h3 id="ai-digital-gatekeeper" className="text-lg md:text-xl font-bold text-[#333333] mb-3 mt-6">
                1. AIが「デジタルの門番」に
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                Apple Intelligenceが子供の見るコンテンツをどう判断し、守ってくれるのかを解説します。AIが不適切なコンテンツを自動で検知・ブロックし、保護者の負担を軽減します。
              </p>
              <h3 id="easy-setup" className="text-lg md:text-xl font-bold text-[#333333] mb-3 mt-6">
                2. 「おまかせ設定」で完了
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                AIが年齢に合わせて推奨設定を提案してくれるため、難しい知識が不要な点を強調します。数タップで最適な設定が完了し、すぐに安全なスマホ利用環境を構築できます。
              </p>
              <h3 id="dialogue-to-understand" className="text-lg md:text-xl font-bold text-[#333333] mb-3 mt-6">
                3. 対話で状況を知る
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                保護者がSiriに「子供のスマホ利用状況はどう？」と聞くだけで、分かりやすい要約をもらえる新体験を提供します。レポートを読み込む手間なく、手軽に状況を把握できます。
              </p>
              <h3 id="guide-not-prohibit" className="text-lg md:text-xl font-bold text-[#333333] mb-3 mt-6">
                4. 「禁止」ではなく「導く」
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                AIが健康的な利用時間を提案し、親子でルールを作るための「相談役」になる活用法を紹介します。一方的な制限ではなく、子供の成長をサポートする形で利用を促します。
              </p>
            </section>

            <section id="prompt-examples" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                プロンプト例
              </h2>
              <PromptBlock
                title="12歳向けの安全設定"
                prompt="子供のiPhoneに、12歳向けの安全設定を適用して"
              />
              <PromptBlock
                title="アプリ利用状況の確認"
                prompt="先週、子供がどのアプリを一番使っていたか、簡単に教えて"
              />
              <PromptBlock
                title="夜間のアプリ制限"
                prompt="夜21時以降は、勉強と連絡以外のアプリを使えないように設定して"
              />
            </section>

            <section id="differentiation" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                既存ネタとの差別化
              </h2>
              <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4">
                <li>他のAppleネタ（Siri AIや通知整理）はユーザー自身の利便性向上。本記事は「家族（子供）の安全管理」という全く異なる切り口です。</li>
                <li>既存の「ペアレンタルコントロール」記事は手動設定の解説が多いですが、本記事は「AIによる自動化・要約」に特化しています。</li>
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
                Apple Intelligenceの『安心ペアレンタルコントロール』は、AIが子供のスマホ利用を賢く見守り、保護者の負担を大幅に軽減する画期的な機能です。難しい設定はAIに任せ、保護者はSiriとの対話を通じて状況を把握し、子供の健全なデジタルライフをサポートできます。AIを「家族を守るサポーター」として活用し、安心と安全を手に入れましょう。
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
