
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
  { id: "introduction", text: "もう「コピペ」で悩まない！Claudeの『ファイル直接生成』とは？", level: 2 as const },
  { id: "target-audience", text: "こんな方におすすめ！Claudeのファイル直接生成", level: 2 as const },
  { id: "key-points", text: "Claudeファイル直接生成の3つのポイント", level: 2 as const },
  { id: "prompt-examples", text: "今すぐ使えるプロンプト活用例", level: 2 as const },
  { id: "news-sources", text: "ニュースソース", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ (仮)
const relatedArticles = [
  {
    title: "【初心者向け】もう「コピペ」で悩まない！Geminiの『ファイル直接生成』で資料を即ダウンロードするプロンプト術",
    description: "Geminiのファイル直接生成機能で、AIが作った資料をすぐにダウンロードする方法を解説。",
    href: "/articles/gemini-file-generation",
  },
  {
    title: "【初心者向け】AIがあなたの代わりに「予約」まで完了！最新AIエージェント『Agent i』のおでかけプロンプト術",
    description: "AIエージェントAgent iを活用して、予約などのタスクを自動化するプロンプト術を紹介。",
    href: "/articles/agent-i-travel",
  },
]

export default function ClaudeFileExportPage() {
  const title = "【初心者向け】Word・Excelもそのまま出力！Claudeの『コピペ不要』な書類作成プロンプト術";
  const description = "2026年5月の最新アップデートにより、AI「Claude（クロード）」がWordやExcel、PowerPoint形式のファイルを直接作成・出力できるようになった機能を活用したガイド。AIが作った文章をコピーして別のソフトに貼り付け、フォントを整えるといった「地味に面倒な作業」をゼロにする、ITに疎い初心者向けの究極の時短術を提案します。";
  const keywords = "Claude, ファイル出力, Word, Excel, PowerPoint, コピペ不要, 書類作成, プロンプト術, 初心者, 時短, 業務効率化, AI活用";
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
    datePublished: "2026-05-03T00:00:00Z",
    dateModified: "2026-05-03T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg" // 適切なアイキャッチ画像を設定してください
          createdAt="2026年5月3日"
          updatedAt="2026年5月3日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              もう「コピペ」で悩まない！Claudeの『ファイル直接生成』とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「AIが生成した文章をWordに貼り付けて、体裁を整えるのが面倒...」<br />
              「議事録をAIに作ってもらったけど、どうやってファイルとして保存すればいいの？」
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              そんな風に感じたことはありませんか？これまでは、AIが生成したテキストを別のアプリケーションにコピー＆ペーストし、手動でファイル形式を整えるのが一般的でした。
            </p>
            <p className="text-[#333333] leading-relaxed">
              しかし、2026年5月の最新アップデートにより、AI「Claude（クロード）」がWordやExcel、PowerPoint形式のファイルを直接作成・出力できるようになったことで、この常識は覆されました。プロンプト一つで、AIが「完成品」のファイルを直接作成・出力し、ダウンロードまで可能にする画期的な機能です。この記事では、ITに疎い初心者でもすぐに活用できる、この究極の時短術を徹底解説します。
            </p>
          </section>

          <section id="target-audience" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              こんな方におすすめ！Claudeのファイル直接生成
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-3 mb-6">
              <li>AIで文章は作れるが、その後のWordやExcelへの整形作業に時間がかかっている人</li>
              <li>PCの操作（コピペや書式設定）が苦手で、AIに全部任せたい初心者</li>
              <li>学級通信や地域の案内、簡単な集計表などをサクッと作りたい人</li>
            </ul>
          </section>

          <section id="key-points" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Claudeファイル直接生成の3つのポイント
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-3 mb-6">
              <li>
                <strong>「貼り付け・整形」の手間をゼロに</strong>: Claudeなら、指示の最後に「Word形式で出して」と書くだけで、そのまま印刷できるレベルのファイルが手に入ります。
              </li>
              <li>
                <strong>ひな形活用の凄さ</strong>: 自分がいつも使っているWordファイルを先に読み込ませることで、そのデザインを崩さずに内容だけを埋めてもらう「プロ並み」の活用法を紹介します。
              </li>
              <li>
                <strong>Excelも一瞬</strong>: 「行事予定表をExcelで作って」の一言で、色分けされた見やすい表が完成する驚きを体験できます。
              </li>
            </ul>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              今すぐ使えるプロンプト活用例
            </h2>
            <p className="mb-4">Claudeにファイル直接生成を依頼する際の具体的なプロンプト例です。コピペして、あなたの業務に役立ててください。</p>
            
            <PromptBlock
              title="学級通信をWordファイルで生成"
              prompt="「学級通信を作りたいです。添付のWordひな形のデザインに合わせて、運動会の思い出を400字程度で書き込み、Wordファイルとして出力してください」"
            />
            
            <PromptBlock
              title="来月の当番表をExcelファイルで生成"
              prompt="「来月の当番表をExcelで作ってください。1列目は日付、2列目は名前、3列目は備考にして、1行目には色をつけて見やすくしてください」"
            />
          </section>

          <section id="news-sources" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ニュースソース
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-2">
              <li><a href="https://news.yahoo.co.jp/articles/efa980e3e7f942320c54c9dbcbd5cb075f3d93d3" target="_blank" rel="noopener noreferrer">Word・Excelもそのまま出力、「Claude」でコピペ時間を短縮（こどもとIT） - Yahoo!ニュース</a></li>
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
