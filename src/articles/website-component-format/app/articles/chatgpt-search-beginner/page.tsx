
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
  { id: "what-is-chatgpt-search", text: "「ChatGPT Search」とは？", level: 2 as const },
  { id: "common-mistakes", text: "初心者がやりがちな「もったいない」聞き方", level: 2 as const },
  { id: "prompt-examples", text: "コピペで使える検索プロンプト例", level: 2 as const },
  { id: "how-to-use-properly", text: "「ググる」との使い分け", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "プロンプトは「書く」から「話す」へ！ChatGPT「高度な音声モード」活用術",
    description: "キーボード入力が苦手な初心者でも大丈夫！ChatGPTの「高度な音声モード」を使い、AIと自然に会話しながら理想の回答を引き出す方法を分かりやすく解説します。",
    href: "/articles/chatgpt-voice-beginner",
  },
  {
    title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集",
    description: "効果的なプロンプトの書き方を基礎から解説",
    href: "/articles/beginner-template",
  },
]

export default function ChatGPTVoiceBeginnerPage() {
  const title = "ググるより速い！ChatGPTの「検索機能（Search）」で最新情報を引き出すプロンプト術";
  const description = "「AIは古い情報しか持っていない」という初心者の思い込みを覆す、ChatGPTの最新「検索機能（Search）」の活用ガイド。検索エンジンで複数のサイトを見比べる手間を省き、AIに「今、この瞬間」の情報を正しく調べさせるためのコツを、PC標準のChatGPT利用シーンに合わせて解説します。";
  const keywords = "ChatGPT, 検索機能, Search, プロンプト, 最新情報, 初心者, AI活用, Google検索";
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
    image: "/images/og-image-search-mode.png", // 仮のOGP画像
    url,
  });

  useStructuredData({
    title,
    description,
    author: "AIプロンプト活用ガイド",
    datePublished: "2026-04-05T00:00:00Z", // 本日の日付に設定
    dateModified: "2026-04-05T00:00:00Z", // 本日の日付に設定
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg" // 仮のアイキャッチ画像
          createdAt="2026年4月5日"
          updatedAt="2026年4月5日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="what-is-chatgpt-search" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「ChatGPT Search」とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「AIは古い情報しか持っていない」という初心者の思い込みを覆す、ChatGPTの最新「検索機能（Search）」の活用ガイドです。
              この機能は、従来のAIの弱点だった「最新情報」を、AIが自らインターネットを検索して回答するものです。出典（ソース）が明示されるため、情報の信頼性も確認しやすいのが特徴です。
            </p>
          </section>

          <section id="common-mistakes" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者がやりがちな「もったいない」聞き方
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「今のニュースを教えて」といった漠然とした問いかけでは、ChatGPTの検索機能が十分に活用されません。
              検索を起動させるためには、より具体的なキーワードや質問の仕方が重要です。
            </p>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              コピペで使える検索プロンプト例
            </h2>
            <p className="mb-4">マイクボタンを押して、こんな風に話しかけてみてください。</p>
            
            <PromptBlock
              title="今日の天気と外出時の持ち物を確認する時"
              prompt="「今日の東京の天気を調べて、午後の外出に傘が必要か教えて」"
            />
            
            <PromptBlock
              title="新製品の評判を調べる時"
              prompt="「新しく発売されたiPhoneの評判を、複数のレビューサイトからまとめて」"
            />
            
            <PromptBlock
              title="イベント情報を探す時"
              prompt="「今週末に都内で開催される、初心者向けのAI勉強会を3つ探して」"
            />
          </section>

          <section id="how-to-use-properly" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「ググる」との使い分け
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              自分でサイトを探したい時はGoogle、答えをパッと知りたい時はChatGPT Search、という賢い使い分けを提案します。
              目的に応じてツールを使い分けることで、情報収集の効率が格段に向上します。
            </p>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              ChatGPTの検索機能は、AIが古い情報しか持っていないという誤解を解消し、最新情報を効率的に収集するための強力なツールです。
              適切なプロンプトを用いることで、検索エンジンで複数のサイトを巡る手間を省き、必要な情報を素早く手に入れることができます。
            </p>
            <p className="text-[#333333] leading-relaxed">
              ぜひこのガイドを参考に、ChatGPTの検索機能を活用して、情報収集の新しいスタイルを体験してみてください。
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
