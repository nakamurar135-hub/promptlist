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
  { id: "introduction", text: "「会議の動画、全部見る時間がない...」を解決！", level: 2 as const },
  { id: "what-is-video-summary", text: "Copilot「動画要約」機能とは？", level: 2 as const },
  { id: "why-it-helps-beginners", text: "初心者にこそ「動画の自動編集」がおすすめな理由", level: 2 as const },
  { id: "how-to-use", text: "使い方は簡単！3つのステップ", level: 2 as const },
  { id: "prompt-examples", text: "目的別に活用するプロンプト例", level: 2 as const },
  { id: "text-vs-video", text: "テキスト要約と動画要約の使い分けコツ", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "news-sources", text: "ニュースソース", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "AIが「じっくり考えて」から答えてくれる！Copilotの『Think Deeper』活用術",
    description: "AIに回答前に「論理的に考える」ことで、驚くほど質の高いアドバイスを引き出すコツを紹介",
    href: "/articles/copilot-think-deeper-beginner",
  },
  {
    title: "回答の一部を「選んで質問」！Copilotの新機能でピンポイントに解決するプロンプト術",
    description: "Copilotの回答から気になる部分だけを選択して、ピンポイントで深掘りする方法を解説",
    href: "/articles/copilot-select-ask",
  },
]

export default function CopilotMeetingVideoSummaryPage() {
  const title = "Copilotで「会議の動画」を自動で短縮！要点だけを見る「動画要約」術";
  const description = "Microsoft 365 Copilotの新機能「動画要約」を使えば、長時間の会議録画をすべて見ることなく、重要なシーンだけをハイライトリールで確認できます。初心者向けに、セットアップから活用方法まで徹底解説。";
  const keywords = "Copilot, 動画要約, 会議録画, Microsoft 365, 初心者, プロンプト, 効率化, ビジネス";
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
    datePublished: "2026-04-21T00:00:00Z",
    dateModified: "2026-04-21T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年4月21日"
          updatedAt="2026年4月21日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「会議の動画、全部見る時間がない...」を解決！
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「オンライン会議の録画が溜まっているけど、1時間以上ある動画を全部見る時間がない...」
              「重要なシーンだけ確認したいのに、どこに重要な情報があるのか分からない」
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              そんな経験はありませんか？会議の議事録（テキスト）だけでは、実際の「現場の雰囲気」や「デモ画面」といった視覚情報が伝わらないことがあります。
            </p>
            <p className="text-[#333333] leading-relaxed">
              そこで活用したいのが、Microsoft 365 Copilotの新機能**「動画要約（ナレーション付きハイライトリール）」**です。この機能を使うと、長時間の会議録画から重要なシーンだけを自動抽出し、数分のハイライト動画に変換してくれます。この記事では、初心者でも簡単に使える活用方法を解説します。
            </p>
          </section>

          <section id="what-is-video-summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Copilot「動画要約」機能とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「動画要約」は、Copilotが会議の録画を自動で分析し、重要なシーンだけを抽出して、ナレーション付きのハイライトリール（短い動画クリップの組み合わせ）に変換する機能です。
            </p>
            <ul className="list-disc list-inside mb-4 text-[#333333]">
              <li>**自動抽出**: AIが「ここが重要」と判断したシーンを自動的にピックアップ</li>
              <li>**ナレーション付き**: 各シーンの意味が分かるように、AIが短いナレーションを追加</li>
              <li>**数分で完成**: 1時間の会議が、3〜5分のハイライト動画に短縮</li>
              <li>**Clipchampで再生**: Microsoftの動画編集ツール「Clipchamp」で、そのまま再生・編集可能</li>
            </ul>
          </section>

          <section id="why-it-helps-beginners" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者にこそ「動画の自動編集」がおすすめな理由
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              これまでの会議要約は、テキストベースのものが中心でした。しかし、動画という視覚情報には、テキストでは伝わらない重要な情報が含まれています。
            </p>
            <PromptInfoCard type="tips" title="「視覚情報」がAIで引き出される">
              デモ画面の操作方法、参加者の表情、ホワイトボードへの書き込みなど、テキストでは説明しにくい情報が、動画要約なら一目瞭然です。初心者でも、AIが自動で「重要な部分」を判断してくれるので、何を見るべきか迷う必要がありません。
            </PromptInfoCard>
          </section>

          <section id="how-to-use" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              使い方は簡単！3つのステップ
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B9BD5] text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">会議の動画ファイルをアップロード</h3>
                  <p className="text-sm">Microsoft 365 Copilotにアクセスし、会議の録画ファイル（MP4、WebMなど）をアップロードします。OneDriveに保存されている動画でも、直接リンクを指定できます。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B9BD5] text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">「動画要約」を選択</h3>
                  <p className="text-sm">Copilotのメニューから「動画要約」機能を選択し、「ハイライトリール生成」をクリック。AIが自動で分析を開始します。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B9BD5] text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">ハイライトリールを確認・編集</h3>
                  <p className="text-sm">生成されたハイライト動画がClipchampで開きます。ナレーション、カット、字幕の追加など、さらに編集することも可能です。</p>
                </div>
              </div>
            </div>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              目的別に活用するプロンプト例
            </h2>
            <p className="mb-4">Copilotに動画をアップロードした後、こんな風に指示してみてください。AIが目的に応じたハイライトリールを生成します。</p>
            
            <PromptBlock
              title="全体の重要シーンを抽出"
              prompt="「この会議で一番盛り上がったところを3分で見せて。決定事項と次のアクションが分かるように」"
            />
            
            <PromptBlock
              title="特定のテーマに絞り込み"
              prompt="「新しいシステムの操作説明をしているシーンをまとめて。操作の流れが理解できるように編集してほしい」"
            />
            
            <PromptBlock
              title="参加者別のハイライト"
              prompt="「営業チームの発表部分だけを抽出して。提案内容と質疑応答が含まれるようにしてほしい」"
            />

            <PromptBlock
              title="複数の会議から比較"
              prompt="「先週と今週の同じテーマの会議を比較して。変わった点と決定事項の違いが分かるように2つのハイライトを作成してほしい」"
            />
          </section>

          <section id="text-vs-video" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              テキスト要約と動画要約の使い分けコツ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Copilotには、テキスト形式の要約機能もあります。どちらを使うべきか、目的別に整理しました。
            </p>
            <PromptInfoCard type="response" title="使い分けのポイント">
              <ul className="list-disc list-inside space-y-2">
                <li>**テキスト要約がおすすめ**: 決定事項や次のアクションを素早く確認したい、メールで共有したい場合</li>
                <li>**動画要約がおすすめ**: デモ画面や複雑な操作手順を確認したい、参加できなかった人に「雰囲気」を伝えたい場合</li>
                <li>**両方使う**: 重要な会議では、テキスト要約で決定事項を確認した後、動画要約で詳細を確認するのが効果的</li>
              </ul>
            </PromptInfoCard>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Copilotの「動画要約」は、会議の録画を「見る」ことから「理解する」ことへと変えてくれる機能です。
              1時間の会議を3〜5分で把握できるため、時間の節約だけでなく、情報の正確な理解にも役立ちます。
            </p>
            <p className="text-[#333333] leading-relaxed">
              「会議の動画が溜まっている...」と感じていた方は、ぜひこの機能を試してみてください。
              あなたの仕事の効率が、劇的に変わるかもしれません。
            </p>
          </section>

          <section id="news-sources" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ニュースソース
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-2">
              <li><a href="https://blogs.windows.com/japan/2026/03/16/whats-new-in-microsoft-365-copilot-march-2026/" target="_blank" rel="noopener noreferrer">Microsoft 365 Copilot の新機能 | 2026 年 3 月</a></li>
              <li><a href="https://support.microsoft.com/ja-jp/office/copilot-video-summary" target="_blank" rel="noopener noreferrer">Microsoft サポート - Copilot 動画要約機能</a></li>
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
