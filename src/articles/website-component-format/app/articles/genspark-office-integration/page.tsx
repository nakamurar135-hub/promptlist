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
  { id: "introduction", text: "パワポやExcelにAIが常駐！『Genspark Workspace 4.0』登場", level: 2 as const },
  { id: "what-is-genspark-4", text: "ブラウザ不要！Officeと一体化した「Genspark 4.0」とは？", level: 2 as const },
  { id: "why-it-helps-beginners", text: "初心者にこそ『Genspark Workspace』がおすすめな理由", level: 2 as const },
  { id: "how-to-use", text: "「画面内」で完結！AI社員への頼み方3つのステップ", level: 2 as const },
  { id: "prompt-examples", text: "今すぐ使えるプロンプト活用例", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "news-sources", text: "ニュースソース", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "【初心者向け】もう「コピペ」で悩まない！Geminiの『ファイル直接生成』で資料を即ダウンロードするプロンプト術",
    description: "Geminiの新機能を使って、プロンプト一つでWordやPDFファイルを直接生成・ダウンロードする方法を解説",
    href: "/articles/gemini-file-generation",
  },
  {
    title: "【初心者向け】Excelの「面倒な作業」をAIが自動完結！Copilotの『エンドツーエンド業務自動化』プロンプト術",
    description: "Excelのデータ処理をCopilotで自動化し、複雑な集計や分析を効率化する方法を紹介",
    href: "/articles/copilot-excel-automation",
  },
]

export default function GensparkOfficeIntegrationPage() {
  const title = "【初心者向け】パワポやExcelにAIが常駐！『Genspark Workspace 4.0』で資料作成を「AI社員」に任せるプロンプト術";
  const description = "2026年4月に登場した「Genspark Workspace 4.0」。PowerPointやExcelの画面内でAIと対話しながら資料を完成させる、初心者向けの「AI共作」術を解説。ブラウザとの行き来をゼロにする最新の仕事術を紹介します。";
  const keywords = "Genspark, Genspark Workspace 4.0, PowerPoint, Excel, AI活用, 資料作成, 初心者, プロンプト, 業務効率化";
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
    datePublished: "2026-05-01T00:00:00Z",
    dateModified: "2026-05-01T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年5月1日"
          updatedAt="2026年5月1日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              パワポやExcelにAIが常駐！『Genspark Workspace 4.0』登場
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「パワーポイントのスライドを作るのに何時間もかかってしまう...」<br />
              「エクセルの関数がわからなくて、いちいちブラウザで調べてコピペするのが面倒」
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              そんな資料作成の悩みを、AIが「画面の中から」解決してくれる時代が来ました。
            </p>
            <p className="text-[#333333] leading-relaxed">
              2026年4月にリリースされた**『Genspark Workspace 4.0』**は、Microsoft OfficeソフトにAIが直接入り込む「ネイティブ統合」を実現しました。もうブラウザを開き直す必要はありません。あなたの隣に座る「AI社員」に頼む感覚で、資料作成を爆速化させる方法を解説します。
            </p>
          </section>

          <section id="what-is-genspark-4" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ブラウザ不要！Officeと一体化した「Genspark 4.0」とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Genspark Workspace 4.0の最大の特徴は、新機能「Genspark Claw」によるOfficeソフトとの完全一体化です。
            </p>
            <ul className="list-disc list-inside mb-4 text-[#333333]">
              <li>**「画面内」で対話**: パワポやエクセルのサイドバーにAIが常駐。</li>
              <li>**資料の文脈を理解**: 今開いているスライドや表の内容をAIが自動で読み取ります。</li>
              <li>**直接実行**: 「スライドを追加して」と頼めば、AIが実際に新しいスライドを作成します。</li>
              <li>**マルチモーダル対応**: 図解の配置やグラフのデザインなど、視覚的な指示も通じます。</li>
            </ul>
          </section>

          <section id="why-it-helps-beginners" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者にこそ『Genspark Workspace』がおすすめな理由
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「AIへの指示の出し方がわからない」という初心者の方こそ、この「一体型」の恩恵を大きく受けられます。
            </p>
            <PromptInfoCard type="tips" title="「説明する手間」がゼロになる">
              従来のAIチャットでは、「こういう表があって、ここをこうしたい」と状況を説明するプロンプトを書く必要がありました。Genspark 4.0なら、AIが画面を共有している状態なので、「この表をグラフにして」といった短い指示だけで意図が伝わります。
            </PromptInfoCard>
          </section>

          <section id="how-to-use" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「画面内」で完結！AI社員への頼み方3つのステップ
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B9BD5] text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">サイドバーでGensparkを起動</h3>
                  <p className="text-sm">Officeソフト（パワポやエクセル）のメニューからGensparkアイコンをクリックして、サイドバーを表示させます。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B9BD5] text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">今の資料について指示を出す</h3>
                  <p className="text-sm">「このスライドを要約して」「このデータを分析して」など、今見ている画面に基づいた指示を入力します。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B9BD5] text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">AIの提案を反映・実行させる</h3>
                  <p className="text-sm">AIが作成した文章やグラフを確認し、「適用」ボタンを押すと資料に直接反映されます。</p>
                </div>
              </div>
            </div>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              今すぐ使えるプロンプト活用例
            </h2>
            <p className="mb-4">Officeソフトの中でAI社員に指示を出す際の、便利なプロンプト例です。</p>
            
            <PromptBlock
              title="PowerPoint：スライドの自動追加"
              prompt="「このスライドの内容をもとに、補足説明用のスライドをあと2枚追加して。画像も内容に適したものを選んで配置しておいて」"
            />
            
            <PromptBlock
              title="Excel：データ分析とグラフ作成"
              prompt="「この範囲のデータを使って、売上の推移がひと目でわかるグラフを作成して。その考察も横のセルに添えておいて」"
            />
            
            <PromptBlock
              title="Word：文章のブラッシュアップ"
              prompt="「この企画書の導入部分を、もっと取引先の担当者に刺さるような、説得力のある表現に書き換えて」"
            />
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Genspark Workspace 4.0は、AIを「別のツール」として使うのではなく、「いつもの道具」の一部として使う新しい体験を提供します。
            </p>
            <p className="text-[#333333] leading-relaxed">
              まずは、いつもの資料作成の途中でサイドバーを開いてみてください。あなたが言葉に詰まったとき、AI社員が即座に助け舟を出してくれるはずです。
            </p>
          </section>

          <section id="news-sources" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ニュースソース
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-2">
              <li><a href="https://note.com/komon_ai/n/n731afd238802" target="_blank" rel="noopener noreferrer">Genspark 4.0リリース：Microsoft Officeにネイティブプラグインとして統合 - note</a></li>
              <li><a href="https://hinakira.com/blog/genspark-ai-slide-creation/" target="_blank" rel="noopener noreferrer">【2026最新】Gensparkスライド作成の完全手順！AIで資料を自動生成する方法 - hinakira.com</a></li>
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
