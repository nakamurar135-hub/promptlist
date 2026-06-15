
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
  { id: "introduction", text: "言葉が「動く図解」に！Geminiの『シミュレーター生成』プロンプト術", level: 2 as const },
  { id: "what-is-simulator-generation", text: "Geminiの「シミュレーター生成」とは？", level: 2 as const },
  { id: "tips-for-beginners", text: "初心者でも簡単！シミュレーター生成プロンプトのコツ", level: 2 as const },
  { id: "prompt-examples", text: "今日から使える！シミュレーター生成プロンプトの具体例", level: 2 as const },
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
    title: "【初心者向け】スマートスピーカーが「話の通じる家族」に！Gemini for Homeの『意図を汲み取る』プロンプト術",
    description: "Gemini for Homeでスマートスピーカーがより賢く、自然な対話が可能に",
    href: "/articles/gemini-for-home-beginner",
  },
]

export default function GeminiDynamicVisualizerPage() {
  const title = "【初心者向け】言葉が「動く図解」に！Geminiの『シミュレーター生成』プロンプト術";
  const description = "Google Geminiの新機能「動的コンテンツ回答」を活用し、言葉では理解しにくい複雑な仕組みを、触って動かせるシミュレーターとして出力させるガイド。初心者でも直感的に操作できるシミュレーターを生成するプロンプト術を解説します。";
  const keywords = "Gemini, シミュレーター生成, プロンプト術, 初心者, AI, 動的コンテンツ回答, 活用ガイド, Google";
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
    image: "/images/og-image-gemini-dynamic-visualizer.png",
    url,
  });

  useStructuredData({
    title,
    description,
    author: "AIプロンプト活用ガイド",
    datePublished: "2026-04-14T00:00:00Z",
    dateModified: "2026-04-14T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年4月14日"
          updatedAt="2026年4月14日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              言葉が「動く図解」に！Geminiの『シミュレーター生成』プロンプト術
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「言葉だけではどうもピンとこない」「もっと直感的に理解したい」
              そんな風に感じたことはありませんか？
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              Google Geminiの最新機能「動的コンテンツ回答」を使えば、複雑な概念や仕組みも、まるで目の前で動いているかのように「触って」理解できるようになります。今回は、この画期的な「シミュレーター生成」機能を活用するためのプロンプト術を、初心者の方にも分かりやすく解説します。
            </p>
          </section>

          <section id="what-is-simulator-generation" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Geminiの「シミュレーター生成」とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Geminiの「シミュレーター生成」は、テキストベースの指示から、ユーザーが操作できるインタラクティブなシミュレーションを生成する機能です。例えば、以下のような場面で威力を発揮します。
            </p>
            <ul className="list-disc list-inside mb-4 text-[#333333]">
              <li>**科学の実験**: 物理法則や化学反応を視覚的に体験する。</li>
              <li>**経済モデル**: 政策変更が市場に与える影響をシミュレートする。</li>
              <li>**プログラミング**: コードの実行フローやデータ構造の変化を追う。</li>
            </ul>
            <p className="text-[#333333] leading-relaxed mb-4">
              これにより、単なる説明を読むよりもはるかに深く、そして楽しく学習を進めることができます。
            </p>
            <PromptInfoCard type="info" title="ニュースソース">
              「Gemini」アプリが動的コンテンツ回答に対応、触って理解できるシミュレーターも生成 - <a href="https://forest.watch.impress.co.jp/docs/news/2100669.html" target="_blank" rel="noopener noreferrer">窓の杜</a>
            </PromptInfoCard>
          </section>

          <section id="tips-for-beginners" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者でも簡単！シミュレーター生成プロンプトのコツ
            </h2>
            <p className="mb-4 text-[#333333]">
              シミュレーターを効果的に生成するためのプロンプトには、いくつかのポイントがあります。これらを意識するだけで、Geminiはあなたの期待に応える「動く図解」を作り出してくれます。
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>**「見せて」「視覚化して」というキーワードを盛り込む**: 具体的な動作を促す言葉を使うことで、Geminiはシミュレーションの生成を優先します。</li>
              <li>**「シミュレーターを作って」と直接依頼する**: 目的を明確に伝えることで、より的確な結果が得られます。</li>
              <li>**初心者でも直感的に操作できる要素をリクエスト**: スライダーやボタンなど、インタラクティブな要素の追加を依頼することで、使いやすいシミュレーターになります。</li>
            </ul>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md::text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              今日から使える！シミュレーター生成プロンプトの具体例
            </h2>
            <p className="mb-4 text-[#333333]">
              具体的なプロンプト例を見ていきましょう。これらの例を参考に、あなたの知りたいことをシミュレーターで体験してみてください。
            </p>
            
            <PromptBlock
              title="【物理の法則を学ぶ】"
              prompt="「斜面を転がるボールの運動をシミュレーターで表示して。斜面の角度とボールの質量をスライダーで変更できるようにしてほしい。」"
            />
            
            <PromptBlock
              title="【経済の仕組みを理解する】"
              prompt="「需要と供給のバランスが価格にどう影響するか、インタラクティブなグラフでシミュレートして。需要と供給の曲線を動かせるようにして。」"
            />
            
            <PromptBlock
              title="【プログラミングの概念を視覚化】"
              prompt="「クイックソートのアルゴリズムの動作を視覚的にシミュレートして。ステップごとに配列の変化がわかるように表示してほしい。」"
            />
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Google Geminiの「シミュレーター生成」機能は、学習や理解のプロセスを根本から変える可能性を秘めています。言葉だけでは伝わりにくい複雑な情報も、動的なシミュレーションを通じて直感的に把握できるようになります。
            </p>
            <p className="text-[#333333] leading-relaxed">
              ぜひ、今回ご紹介したプロンプト術を活用して、あなた自身の「動く図解」をGeminiに生成させてみてください。きっと、新しい発見と深い理解が得られるはずです。
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
