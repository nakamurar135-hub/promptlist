
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
  { id: "introduction", text: "もう「コピペ」で悩まない！Geminiの『ファイル直接生成』とは？", level: 2 as const },
  { id: "why-it-helps-beginners", text: "Geminiのファイル直接生成が初心者にこそおすすめな理由", level: 2 as const },
  { id: "how-it-works", text: "「貼り付け」からの卒業！ファイル形式指定の魔法", level: 2 as const },
  { id: "prompt-examples", text: "今すぐ使えるプロンプト活用例", level: 2 as const },
  { id: "news-sources", text: "ニュースソース", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "【初心者向け】スマートスピーカーが「話の通じる家族」に！Gemini for Homeの『意図を汲み取る』プロンプト術",
    description: "Gemini for Homeでスマートスピーカーがより賢く、家族の一員のように自然な会話ができるようになる活用術を紹介",
    href: "/articles/gemini-for-home-beginner",
  },
  {
    title: "【初心者向け】もうプロンプトを打ち直さない！Chromeの『Skills』でAIを「自分専用」に育てる術",
    description: "ChromeのGemini Skillsを使って、AIを自分専用にカスタマイズし、プロンプト入力の手間を省く方法を解説",
    href: "/articles/chrome-gemini-skills",
  },
]

export default function GeminiFileGenerationPage() {
  const title = "【初心者向け】もう「コピペ」で悩まない！Geminiの『ファイル直接生成』で資料を即ダウンロードするプロンプト術";
  const description = "2026年4月29日にGoogleが発表したGeminiの新機能「チャットからの直接ファイル生成・ダウンロード」を活用したガイド。AIが作った文章をわざわざWordやメモ帳に貼り付ける手間を省き、プロンプト一つで「完成品」のファイルを手に入れる、PC操作に不慣れな初心者向けの時短術を提案します。";
  const keywords = "Gemini, ファイル直接生成, ダウンロード, プロンプト術, 初心者, 時短, 業務効率化, AI活用, Google";
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
    image: "/images/placeholder.jpg", // 適切なアイキャッチ画像を設定してください
    url,
  });

  useStructuredData({
    title,
    description,
    author: "AIプロンプト活用ガイド",
    datePublished: "2026-04-30T00:00:00Z",
    dateModified: "2026-04-30T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg" // 適切なアイキャッチ画像を設定してください
          createdAt="2026年4月30日"
          updatedAt="2026年4月30日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              もう「コピペ」で悩まない！Geminiの『ファイル直接生成』とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「AIが生成した文章をWordに貼り付けて、体裁を整えるのが面倒...」<br />
              「議事録をAIに作ってもらったけど、どうやってファイルとして保存すればいいの？」
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              そんな風に感じたことはありませんか？これまでは、AIが生成したテキストを別のアプリケーションにコピー＆ペーストし、手動でファイル形式を整えるのが一般的でした。
            </p>
            <p className="text-[#333333] leading-relaxed">
              しかし、2026年4月29日にGoogleが発表したGeminiの新機能**『ファイル直接生成・ダウンロード』**は、この常識を覆します。プロンプト一つで、AIが「完成品」のファイルを直接生成し、ダウンロードまで可能にする画期的な機能です。この記事では、PC操作に不慣れな初心者でもすぐに活用できる、この時短術を徹底解説します。
            </p>
          </section>

          <section id="why-it-helps-beginners" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Geminiのファイル直接生成が初心者にこそおすすめな理由
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「AIは便利そうだけど、使いこなすのが難しそう...」と感じる初心者の方にこそ、この機能はおすすめです。
            </p>
            <PromptInfoCard type="tips" title="PC操作のハードルを劇的に下げる">
              Geminiのファイル直接生成は、AIが作った文章をファイルとして保存する際の手間を大幅に削減します。具体的には、以下の操作が不要になります。
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>チャット画面からテキストを範囲選択してコピーする</li>
                <li>Wordやメモ帳などの別のアプリケーションを起動する</li>
                <li>コピーしたテキストを貼り付ける</li>
                <li>ファイル形式を指定して保存する</li>
              </ul>
              これらの手間がなくなることで、PCの基本操作に苦手意識がある方でも、AIの恩恵を最大限に享受できるようになります。
            </PromptInfoCard>
          </section>

          <section id="how-it-works" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「貼り付け」からの卒業！ファイル形式指定の魔法
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              この機能の最大の魅力は、プロンプトに「どのような形式のファイルが欲しいか」を付け加えるだけで、AIが自動で対応してくれる点です。
            </p>
            <ul className="list-disc list-inside mb-4 text-[#333333]">
              <li>**「Word形式で」**: 企画書やレポートなど、後から編集が必要なドキュメントに最適です。</li>
              <li>**「PDFで保存して」**: 議事録や契約書など、改変されたくない資料の共有に便利です。</li>
              <li>**「スプレッドシート形式で」**: データ集計やリスト作成など、表計算ソフトでの作業が必要な場合に役立ちます。</li>
            </ul>
            <p className="text-[#333333] leading-relaxed">
              さらに、PCだけでなくスマートフォンアプリからも直接ファイルを生成・共有できるため、場所を選ばずに業務効率を向上させることが可能です。
            </p>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              今すぐ使えるプロンプト活用例
            </h2>
            <p className="mb-4">Geminiにファイル直接生成を依頼する際の具体的なプロンプト例です。コピペして、あなたの業務に役立ててください。</p>
            
            <PromptBlock
              title="会議メモをWordファイルで生成"
              prompt="「今の打ち合わせメモを整理して、そのまま提出できる『Wordファイル』として作成してダウンロードさせて」"
            />
            
            <PromptBlock
              title="旅行計画をPDFファイルで出力"
              prompt="「この旅行計画を、家族に見せやすい『PDFファイル』にまとめて出力して」"
            />

            <PromptBlock
              title="市場調査データをスプレッドシートで生成"
              prompt="「最新のAIツールの市場調査結果を、主要ツール名、機能、価格、競合優位性の項目で整理し、『スプレッドシート形式』で作成してダウンロードさせて」"
            />
          </section>

          <section id="news-sources" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ニュースソース
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-2">
              <li><a href="https://x.com/masahirochaen/status/2049522492197519784" target="_blank" rel="noopener noreferrer">【Geminiアプリ ファイル生成機能 要約】 Googleが2026年4月29日、Geminiアプリでチャットから直接ファイルを生成・ダウンロードできる機能を発表</a></li>
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
