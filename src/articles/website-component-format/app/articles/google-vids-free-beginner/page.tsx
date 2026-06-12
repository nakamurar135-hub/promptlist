
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
      name: "ビジネス効率化",
      articles: [
        { title: "Excelの「面倒な作業」をAIが自動完結！Copilotの『エンドツーエンド業務自動化』プロンプト術", href: "/articles/copilot-excel-automation" },
        { title: "回答の一部を「選んで質問」！Copilotの新機能でピンポイントに解決するプロンプト術", href: "/articles/copilot-select-ask" },
      ],
    },
  ],
  copyright: "© 2026 AIプロンプト活用ガイド All Rights Reserved.",
}

// 目次データ
const headings = [
  { id: "overview", text: "概要: Google Vidsとは？", level: 2 as const },
  { id: "why-it-helps-beginners", text: "『Google Vids』が初心者にこそおすすめな理由", level: 2 as const },
  { id: "how-it-works", text: "センス不要！AIがプロ級動画を作る仕組み", level: 2 as const },
  { id: "prompt-examples", text: "今すぐ使えるプロンプト活用例", level: 2 as const },
  { id: "news-sources", text: "ニュースソース", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "【中級者向け】AI動画制作の極意！Google Flow & Veo 3.1で「一貫性のあるストーリー」を作るプロンプト術",
    description: "Google Flow & Veo 3.1を活用して、AI動画制作の極意と一貫性のあるストーリーを作るプロンプト術を解説します。",
    href: "/articles/google-flow-veo-advanced",
  },
  {
    title: "【初心者向け】AIがあなたのことを覚えてくれる！ChatGPTの『Dreaming V3』で賢い相棒を育てるプロンプト術",
    description: "ChatGPTの記憶機能『Dreaming V3』を活用して、AIを賢い相棒に育てるプロンプト術を紹介します。",
    href: "/articles/chatgpt-dreaming-v3-beginner",
  },
]

export default function GoogleVidsFreeBeginnerPage() {
  const title = "【初心者向け】センス不要！Google Vidsで「指示ひとつ」でプロ級の紹介動画を作るプロンプト術"
  const description = "Googleが2026年4月に発表した、誰でも無料で使えるAI動画制作ツール「Google Vids」の活用ガイドです。動画編集の経験が全くない初心者でも、ChatGPTに相談するように「こんな動画を作って」と伝えるだけで、BGM付きの動画を完成させる方法を解説します。"
  const keywords = "Google Vids, AI動画制作, 無料, 初心者, プロンプト術, 動画編集, BGM, Googleアカウント"
    const url = "https://promptlist.jp/articles/google-vids-free-beginner"

  useSEO({
    title: title,
    description,
    keywords,
  })

  useOGP({
    title,
    description,
    type: "article",
    image: "https://promptlist.jp/images/google-vids-eyecatch.jpg",
    url,
  })

  useStructuredData({
    title,
    description,
    author: "AIプロンプト活用ガイド",
    datePublished: "2026-06-10T00:00:00Z",
    dateModified: "2026-06-12T00:00:00Z",
  })

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="https://promptlist.jp/images/google-vids-eyecatch.jpg"
          createdAt="2026年6月10日"
          updatedAt="2026年6月12日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="overview" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              概要: Google Vidsとは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Googleが2026年4月に発表した「Google Vids」は、動画編集の経験が全くない初心者でも、プロ級の紹介動画を簡単に作成できるAI動画制作ツールです。
            </p>
            <p className="text-[#333333] leading-relaxed">
              高価なソフトや専門知識は一切不要。ChatGPTに相談するように「こんな動画を作って」と伝えるだけで、AIが最適な映像、BGM、ナレーションを選び、一本の動画として仕上げてくれます。この記事では、Google Vidsの基本的な使い方から、具体的なプロンプト例までを詳しく解説します。
            </p>
          </section>

          <section id="why-it-helps-beginners" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              『Google Vids』が初心者にこそおすすめな理由
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「動画編集は難しそう」「センスがないから無理」と感じる初心者の方にこそ、Google Vidsはおすすめです。
            </p>
            <PromptInfoCard type="tips" title="「無料」の衝撃">
              Googleアカウントがあれば、月10本まで無料で動画を作成できます。高価な動画編集ソフトや素材集を購入する必要がなく、気軽に動画制作を始められます。
            </PromptInfoCard>
            <PromptInfoCard type="tips" title="「雰囲気」を伝えるだけ">
              「元気な感じ」「落ち着いたプレゼン風」といった抽象的な言葉をAIが理解し、あなたのイメージに合った映像や音楽を自動で選んでくれます。センスや専門知識は一切不要です。
            </PromptInfoCard>
            <PromptInfoCard type="tips" title="修正もAIにお任せ">
              出来上がった動画に対しても、「もう少し明るい音楽に変えて」「このシーンのテキストを大きくして」といったプロンプトで簡単に微調整が可能です。AIがあなたの指示を理解し、動画を最適化してくれます。
            </PromptInfoCard>
          </section>

          <section id="how-it-works" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              センス不要！AIがプロ級動画を作る仕組み
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Google Vidsは、高度なAI技術を駆使して、あなたの指示から動画コンテンツを自動生成します。その仕組みは以下の通りです。
            </p>
            <ul className="list-disc list-inside mb-4 text-[#333333]">
              <li>**プロンプト解析**: あなたが入力した「こんな動画を作って」という指示をAIが詳細に解析し、動画のテーマ、目的、ターゲット層などを把握します。</li>
              <li>**素材選定**: Googleの膨大なライブラリから、テーマに合った高品質な映像クリップ、BGM、効果音、ナレーション素材を自動で選定します。</li>
              <li>**構成・編集**: 選定された素材を基に、AIが動画のストーリーボードを作成し、最適なタイミングで映像を切り替え、BGMを挿入し、ナレーションを合成します。</li>
              <li>**プレビュー・調整**: 完成した動画のプレビューを提示し、あなたのフィードバック（例：「もっと明るい雰囲気に」「この部分のBGMを変更」）に基づいて、AIが自動で調整を行います。</li>
            </ul>
            <p className="text-[#333333] leading-relaxed">
              この一連のプロセスをAIが自動で行うため、あなたは動画制作の専門知識がなくても、高品質な動画を短時間で手に入れることができます。
            </p>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              今すぐ使えるプロンプト活用例
            </h2>
            <p className="mb-4">Google Vidsを最大限に活用するための具体的なプロンプト例です。あなたの作りたい動画のイメージをAIに伝えてみましょう。</p>
            
            <PromptBlock
              title="新商品紹介動画"
              prompt="「新商品のカフェラテの紹介動画を作って。30秒くらいで、朝の爽やかな雰囲気の音楽と映像を選んで。」"
            />
            
            <PromptBlock
              title="イベント告知動画"
              prompt="「週末のバーベキューの案内動画を作りたい。楽しそうな雰囲気で、場所と時間のテキストを入れて作成して。」"
            />

            <PromptBlock
              title="自己紹介動画"
              prompt="「私の自己紹介動画を作って。落ち着いたBGMで、私の趣味（読書と旅行）が伝わるような映像を組み合わせて。」"
            />
          </section>

          <section id="news-sources" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ニュースソース
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-2">
              <li><a href="https://blog.google/products/workspace/google-vids-ai-video-creation/" target="_blank" rel="noopener noreferrer">Google Workspace Blog - Google Vids発表（2026年4月）</a></li>
              <li><a href="https://workspace.google.com/products/vids/" target="_blank" rel="noopener noreferrer">Google Vids 公式ページ</a></li>
            </ul>
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
