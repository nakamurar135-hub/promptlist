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
  { id: "introduction", text: "Excelの「ググってコピペ」から解放される！『Fill with Gemini』とは？", level: 2 as const },
  { id: "why-it-helps-beginners", text: "『Fill with Gemini』が初心者にこそおすすめな理由", level: 2 as const },
  { id: "how-it-works", text: "ヘッダーを書くだけでAIが「文脈を読んで」埋めてくれる仕組み", level: 2 as const },
  { id: "prompt-examples", text: "今すぐ使えるプロンプト活用例", level: 2 as const },
  { id: "verification-tips", text: "AIが埋めた内容を確認する際のコツ", level: 2 as const },
  { id: "news-sources", text: "ニュースソース", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "【初心者向け】もう「コピペ」で悩まない！Geminiの『ファイル直接生成』で資料を即ダウンロードするプロンプト術",
    description: "Geminiの新機能でAIが作った文章をそのままファイルとしてダウンロード。Word、PDF、スプレッドシート形式での出力が可能",
    href: "/articles/gemini-file-generation",
  },
  {
    title: "【初心者向け】Excelの「面倒な作業」をAIが自動完結！Copilotの『エンドツーエンド業務自動化』プロンプト術",
    description: "Copilotを使ってExcelの複雑な作業を自動化。データ分析から資料作成まで、AIに任せるプロンプト術を解説",
    href: "/articles/copilot-excel-automation",
  },
]

export default function GeminiFillBeginnerPage() {
  const title = "【初心者向け】Excelの空欄をAIが勝手に埋めてくる！？Googleスプレッドシートの『Fill with Gemini』活用術"
  const description = "2026年6月5日にGoogleが発表したGeminiの新機能「Fill with Gemini」を活用したガイド。Googleスプレッドシートで空欄のセルを自動で埋める、初心者向けの時短術を徹底解説。ヘッダーをしっかり書くだけでAIが文脈を読んで正確に入力してくれます。"
  const keywords = "Fill with Gemini, Googleスプレッドシート, Excel, AI自動入力, プロンプト術, 初心者, 業務効率化, 時短, Google Workspace"
  const url = typeof window !== 'undefined' ? window.location.href : ""

  useSEO({
    title: `${title} | AIプロンプト活用ガイド`,
    description,
    keywords,
  })

  useOGP({
    title,
    description,
    type: "article",
    image: "/images/placeholder.jpg",
    url,
  })

  useStructuredData({
    title,
    description,
    author: "AIプロンプト活用ガイド",
    datePublished: "2026-06-05T00:00:00Z",
    dateModified: "2026-06-05T00:00:00Z",
  })

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年6月5日"
          updatedAt="2026年6月5日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Excelの「ググってコピペ」から解放される！『Fill with Gemini』とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「顧客リストの住所欄が空いている...」<br />
              「商品マスターのURLが一部抜けている...」<br />
              「営業データの地域分類を埋めなきゃ...」
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              こんな経験はありませんか？これまでは、Excelやスプレッドシートの空欄を埋めるために、いちいちWebで検索してコピー＆ペーストするしかありませんでした。
            </p>
            <p className="text-[#333333] leading-relaxed">
              しかし、2026年6月5日にGoogleが発表したGeminiの新機能**『Fill with Gemini』**は、この常識を覆します。Googleスプレッドシートの空欄のセルに対して、AIが周囲の文脈やネット上の情報を基に、自動で中身を予測して入力してくれるのです。この記事では、PC操作に不慣れな初心者でもすぐに活用できる、この革新的な時短術を徹底解説します。
            </p>
          </section>

          <section id="why-it-helps-beginners" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              『Fill with Gemini』が初心者にこそおすすめな理由
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「AIは便利そうだけど、使いこなすのが難しそう...」と感じる初心者の方にこそ、この機能はおすすめです。
            </p>
            <PromptInfoCard type="tips" title="「検索→コピペ→貼り付け」の3ステップが1クリックに">
              従来の方法では、空欄を埋めるために以下の手順が必要でした。
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Googleで「〇〇 住所」と検索する</li>
                <li>検索結果から正しい情報を見つけてコピーする</li>
                <li>スプレッドシートに戻ってセルに貼り付ける</li>
                <li>複数の空欄がある場合、この作業を繰り返す</li>
              </ul>
              『Fill with Gemini』を使えば、これらの手順がすべて不要になります。AIが表のヘッダー（項目名）を理解し、周囲のデータから文脈を読み取り、自動で正確な情報を入力してくれるのです。
            </PromptInfoCard>
          </section>

          <section id="how-it-works" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ヘッダーを書くだけでAIが「文脈を読んで」埋めてくれる仕組み
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              『Fill with Gemini』の最大の魅力は、**複雑な指示が不要**という点です。表のヘッダー（項目名）をしっかり書いておくだけで、AIが自動で文脈を理解してくれます。
            </p>
            <ul className="list-disc list-inside mb-4 text-[#333333]">
              <li>**「会社名」「公式WebサイトURL」「本社所在地」**: これらのヘッダーを見ただけで、AIは「会社名から対応するURLと住所を調べて埋めればいい」と理解します。</li>
              <li>**「商品名」「主な特徴」「ターゲット層」**: ヘッダーと既に入力されている商品名から、AIが自動で商品の特徴やターゲット層を調査して入力します。</li>
              <li>**「顧客名」「業種」「売上規模」**: 顧客情報の一部が既に入力されている場合、AIがそこから業種や売上規模を推測して埋めてくれます。</li>
            </ul>
            <p className="text-[#333333] leading-relaxed">
              つまり、AIが「表全体の意味」を理解するため、初心者でも複雑なプロンプトを書く必要がないのです。
            </p>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              今すぐ使えるプロンプト活用例
            </h2>
            <p className="mb-4">『Fill with Gemini』を活用する際の具体的な指示例です。コピペして、あなたの業務に役立ててください。</p>
            
            <PromptBlock
              title="顧客リストの住所・URLを自動入力"
              prompt="「会社名から、それぞれの公式WebサイトのURLと本社の所在地を調べて、この空欄を埋めておいて。」"
            />
            
            <PromptBlock
              title="商品マスターの特徴・ターゲットを自動入力"
              prompt="「商品名から、その商品の主な特徴とターゲット層を30文字以内で要約して入力して。」"
            />

            <PromptBlock
              title="営業データの地域分類を自動入力"
              prompt="「顧客の住所から、その顧客が属する営業地域（北日本・東日本・中日本・西日本）を自動判定して埋めて。」"
            />

            <PromptBlock
              title="取引先マスターの業種・規模を自動入力"
              prompt="「取引先名から、その企業の業種と従業員規模（大企業・中堅企業・中小企業）を調査して入力して。」"
            />
          </section>

          <section id="verification-tips" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              AIが埋めた内容を確認する際のコツ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              『Fill with Gemini』は非常に便利ですが、AIが完璧に正確な情報を入力するとは限りません。特に以下のような場合は、最終的なチェックが重要です。
            </p>
            <PromptInfoCard type="warning" title="確認が必要な場合">
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>**古い情報**: 企業の本社所在地やWebサイトURLが変更されている可能性があります。</li>
                <li>**複数の候補**: 同じ名前の企業や商品が複数存在する場合、AIが別のものを選んでしまうことがあります。</li>
                <li>**特殊な表記**: 外国企業や新興企業など、AIの学習データに含まれていない情報の場合。</li>
              </ul>
            </PromptInfoCard>
            <p className="text-[#333333] leading-relaxed mt-4">
              ただし、大多数のケースでは『Fill with Gemini』が正確に情報を埋めてくれるため、手作業で1件ずつ調べるよりも圧倒的に効率的です。最終チェックは必須ですが、初期入力の手間が大幅に削減されることで、全体の作業時間は劇的に短縮されます。
            </p>
          </section>

          <section id="news-sources" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ニュースソース
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-2">
              <li><a href="https://workspace.google.com/blog/" target="_blank" rel="noopener noreferrer">Google Workspace Blog - Gemini新機能『Fill with Gemini』発表（2026年6月5日）</a></li>
              <li><a href="https://support.google.com/sheets/" target="_blank" rel="noopener noreferrer">Google スプレッドシート ヘルプセンター - Gemini統合機能ガイド</a></li>
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
