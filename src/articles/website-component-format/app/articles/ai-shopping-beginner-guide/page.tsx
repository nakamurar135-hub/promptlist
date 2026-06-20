"use client"

import { PageLayout } from "@/components/layout/PageLayout"
import { ArticleHeader } from "@/components/article/ArticleHeader"
import { ArticleContent } from "@/components/article/ArticleContent"
import { TableOfContents } from "@/components/article/TableOfContents"
import { PromptBlock } from "@/components/article/PromptBlock"
import { RelatedArticles } from "@/components/cta/RelatedArticles"
import { useSEO } from "@/hooks/useSEO"
import { useOGP } from "@/hooks/useOGP"
import { useStructuredData } from "@/hooks/useStructuredData"

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
        { title: "【初心者向け】「あのサイト、何だっけ？」をAIが解決！Chromeの『AI履歴検索』活用術", href: "/articles/chrome-ai-history-search" },
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
  { id: "intro", text: "もうお店を探さない！AIショッピング術", level: 2 as const },
  { id: "impact", text: "「探す」から「買う」へ：AIショッピングの衝撃", level: 2 as const },
  { id: "prompt-examples", text: "初心者が今日から使えるプロンプト例", level: 2 as const },
  { id: "outdoor", text: "キャンプ用品をAIに選んでもらう", level: 3 as const },
  { id: "gift", text: "センスの良い贈り物をAIに相談", level: 3 as const },
  { id: "fashion", text: "手持ちの服に合うアイテムを提案", level: 3 as const },
  { id: "tips", text: "AIショッピングを最大限に活用するコツ", level: 2 as const },
  { id: "precautions", text: "安心して利用するための注意点", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "【初心者向け】検索ボックスが「相談窓口」に！Googleの新しい『AI検索窓』でやりたいことを伝えるプロンプト術",
    description: "2026年6月にGoogleが発表した、25年ぶりとなる検索ボックスの大幅刷新をテーマにした初心者向けガイド。",
    href: "/articles/google-search-box-beginner",
  },
  {
    title: "【初心者向け】AIがあなたの「秘書」になる！Microsoft Scoutで会議準備・スケジュール調整を自動化するプロンプト術",
    description: "AIエージェントによる日常業務の自動化について、初心者向けに分かりやすく解説します。",
    href: "/articles/microsoft-scout-beginner",
  },
]

export default function AiShoppingBeginnerGuidePage() {
  const title = "【初心者向け】もうお店を探さない！ChatGPT・Geminiで「欲しいもの」を直接買うAIショッピング術";
  const description = "2026年5月末に発表された、Shopifyと主要AI（ChatGPT, Gemini, Copilot）の直接連携機能をテーマにした初心者向けガイド。AIに「これが欲しい」と言うだけで、その場で商品を選んで購入まで進める新しい買い物の形を提案します。";
  const keywords = "AIショッピング, ChatGPT, Gemini, ネットショッピング, 初心者, 使い方, 2026, Shopify";
  const url = typeof window !== 'undefined' ? window.location.href : "https://promptlist.jp/articles/ai-shopping-beginner-guide";
  const image = "/images/ai-shopping-beginner-guide-eyecatch.png";

  // SEO最適化
  useSEO({
    title: `${title} | AIプロンプト活用ガイド`,
    description,
    keywords,
  });

  useOGP({
    title,
    description,
    type: "article",
    image,
    url,
  });

  useStructuredData({
    title,
    description,
    author: "AIプロンプト活用ガイド",
    datePublished: "2026-06-20T00:00:00Z",
    dateModified: "2026-06-20T00:00:00Z",
    image,
    url,
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ArticleHeader
          title={title}
          category="基礎・入門"
          date="2026.06.20"
          tags={["AIショッピング", "初心者", "2026最新"]}
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <section id="intro" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                もうお店を探さない！AIショッピング術
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                2026年5月末、ネットショッピングの常識が大きく変わりました。主要なAIアシスタントであるChatGPT、Gemini、Copilotが、世界最大のECプラットフォームであるShopifyと直接連携を開始したのです。
              </p>
              <p className="text-[#333333] leading-relaxed mb-4">
                これまでは、AIに「おすすめの商品は何？」と尋ねてから、自分で検索エンジンやECサイトを開いて商品を探し、比較検討するという二度手間が必要でした。しかし、この新しい連携機能により、AIに「これが欲しい」と伝えるだけで、AIが最適な商品を選び、その場で「購入」まで進めることが可能になりました。
              </p>
            </section>

            <section id="impact" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                「探す」から「買う」へ：AIショッピングの衝撃
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                AIに「50代の父への誕生日に、3000円くらいで実用的なもの」といった曖昧な要望を伝えるだけで、AIがShopify上の数百万の商品の中から最適な候補を絞り込み、チャット画面に商品カードとして提示します。
              </p>
              <p className="text-[#333333] leading-relaxed mb-4">
                これは単なる検索の進化ではなく、AIがユーザーの意図を深く理解し、購買行動までをサポートする「専属の買い物代行」へと進化したことを意味します。
              </p>
            </section>

            <section id="prompt-examples" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                初心者が今日から使えるプロンプト例
              </h2>
              
              <div id="outdoor" className="mb-8">
                <h3 className="text-lg font-bold text-[#333333] mb-3">キャンプ用品をAIに選んでもらう</h3>
                <PromptBlock
                  title="初心者向けキャンプ用品提案"
                  prompt={`あなたは優秀なアウトドア用品のコンシェルジュです。以下のゴールを達成するための最適な商品を提案し、購入までサポートしてください。

【ゴール】
今度キャンプに行くので、初心者でも設営が簡単なテントと、その他必要なキャンプ用品をいくつか提案してほしい。そのまま買えるものをお願いします。

【条件】
- 予算はテント含め5万円以内
- 家族3人（夫婦＋小学生の子供）で使えるもの
- 設営が簡単なドーム型テントを希望`}
                />
              </div>

              <div id="gift" className="mb-8">
                <h3 className="text-lg font-bold text-[#333333] mb-3">センスの良い贈り物をAIに相談</h3>
                <PromptBlock
                  title="妻へのプレゼント選び"
                  prompt={`あなたはプレゼント選びのプロフェッショナルです。以下の条件に合うプレゼントをいくつか提案してください。そのまま買えるものをお願いします。

【ゴール】
妻への誕生日プレゼントを探しています。

【条件】
- 予算1万円以内で、実用性がありつつもセンスの良いオーガニックのスキンケアセットを希望
- 妻は30代後半で、敏感肌`}
                />
              </div>

              <div id="fashion" className="mb-8">
                <h3 className="text-lg font-bold text-[#333333] mb-3">手持ちの服に合うアイテムを提案</h3>
                <PromptBlock
                  title="ファッションコーディネート提案"
                  prompt={`あなたはファッションスタイリストです。以下の条件に合うアイテムを提案してください。そのまま買えるものをお願いします。

【ゴール】
この前買った青いシャツに合う、ベージュのチノパンをいくつか表示してほしい。

【条件】
- 30代男性向け
- カジュアルすぎず、ビジネスシーンでも使えるようなデザイン
- 予算1万円前後`}
                />
              </div>
            </section>

            <section id="tips" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                AIショッピングを最大限に活用するコツ
              </h2>
              <ArticleContent
                content={[
                  "「ざっくりした要望」から始めて、AIに質問を重ねてもらう",
                  "予算、色、ブランド、用途など「条件」をできるだけ細かく伝える",
                  "複数の候補が出たら「違いは何か」をAIに比較してもらう",
                  "「なぜこれを選んだの？」と選定理由を尋ねて納得感を高める",
                ]}
              />
            </section>

            <section id="precautions" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                安心して利用するための注意点
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                AIショッピングは非常に便利ですが、購入ボタンを押す前に、商品の詳細、価格、送料、返品ポリシーなどを必ずご自身で確認しましょう。
              </p>
              <p className="text-[#333333] leading-relaxed mb-4">
                また、決済情報や配送先情報などの個人情報は、AIに直接入力せず、必ず連携先のShopify決済画面で入力するようにしてください。
              </p>
            </section>

            <section id="summary" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                まとめ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                2026年のAIショッピングは、私たちの買い物の仕方を根本から変える可能性を秘めています。AIが「探す」だけでなく「買う」までをサポートすることで、これまで煩わしかった商品検索や比較検討の手間から解放されます。まずは身近な買い物から、AIに相談してみませんか？
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
              <TableOfContents items={headings} />
            </div>
          </aside>
        </div>
      </article>
    </PageLayout>
  )
}
