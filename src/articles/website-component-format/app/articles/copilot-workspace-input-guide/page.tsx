
"use client"

import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import TableOfContents from "@/components/article/TableOfContents"
import PromptBlock from "@/components/article/PromptBlock"
import RelatedArticles from "@/components/cta/RelatedArticles"
import { ArticleContent } from "@/components/article/ArticleContent"
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
  { id: "target-users", text: "ターゲットユーザー", level: 2 as const },
  { id: "article-points", text: "この記事のポイント", level: 2 as const },
  { id: "write-to-choose", text: "「書く」から「選ぶ」へ", level: 3 as const },
  { id: "progressive-disclosure", text: "段階的開示（Progressive Disclosure）", level: 3 as const },
  { id: "app-integration", text: "アプリとの一体感", level: 3 as const },
  { id: "prompt-examples", text: "実践プロンプト例", level: 2 as const },
  { id: "news-source", text: "ニュースソース", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "【初心者向け】回答の一部を「選んで質問」！Copilotの新機能でピンポイントに解決するプロンプト術",
    description: "Copilotの新しい選択式質問機能で、より効率的に情報を引き出す方法を解説。",
    href: "/articles/copilot-select-ask",
  },
  {
    title: "【初心者向け】AIが「じっくり考えて」から答えてくれる！Copilotの『Think Deeper』で失敗しない相談術",
    description: "CopilotのThink Deeper機能で、AIがより深く思考し、質の高い回答を生成するプロンプト術。",
    href: "/articles/copilot-think-deeper-beginner",
  },
  {
    title: "【初心者向け】メール作成の「悩み」をAIに丸投げ！Copilot in Outlookで『下書き』から卒業する術",
    description: "Outlook Copilotを活用して、メール作成の効率を劇的に向上させる方法を解説。",
    href: "/articles/copilot-outlook-email-draft",
  },
]

export default function CopilotWorkspaceInputGuidePage() {
  const title = "【初心者向け】もうプロンプトで迷わない！Microsoft 365 Copilotの『進化する入力ボックス』活用術"
  const description = "2026年6月に刷新された「Microsoft 365 Copilot」の新機能、ワークスペース型入力ボックス（Task-Adaptive Workspace）の初心者向け活用ガイド。作業内容に合わせて入力欄自体が変化し、必要なツールを提案してくれる新しいCopilotの使い方を解説します。"
  const keywords = "Microsoft 365 Copilot, Copilot, ワークスペース型入力ボックス, Task-Adaptive Workspace, プロンプト, 初心者, AI, 活用術, Microsoft Build 2026"
  const publishedDate = "2026-06-24T00:00:00Z"
  const modifiedDate = "2026-06-24T00:00:00Z"
  const url = "https://promptlist.jp/articles/copilot-workspace-input-guide"
  const image = "https://promptlist.jp/images/copilot-workspace-input-eyecatch.jpg" // 仮の画像URL

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
          createdAt="2026.06.24"
          updatedAt="2026.06.24"
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <section id="overview" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                概要
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                2026年6月に刷新された「Microsoft 365 Copilot」の新機能、ワークスペース型入力ボックス（Task-Adaptive Workspace）の初心者向け活用ガイドです。これまでの「何を入力すればいいかわからない」という悩みを解決するため、作業内容に合わせて入力欄自体が変化し、必要なツールを提案してくれる新しいCopilotの使い方を解説します。
              </p>
            </section>

            <section id="target-users" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                ターゲットユーザー
              </h2>
              <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4">
                <li>Copilotの入力欄を前にして、何を書けばいいか手が止まってしまう初心者の方。</li>
                <li>「プロンプト」という言葉に難しさを感じ、結局使わずじまいになっている方。</li>
                <li>WordやExcelでの作業を、もっと直感的にAIに手伝ってほしいと考えている方。</li>
              </ul>
            </section>

            <section id="article-points" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                この記事のポイント
              </h2>
              <h3 id="write-to-choose" className="text-lg md:text-xl font-bold text-[#333333] mb-3 mt-6">
                1. 「書く」から「選ぶ」へ
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                入力ボックスが「今あなたがやりたいこと」を察して、ボタンや選択肢を表示してくれるため、文字を打つ手間が激減します。
              </p>
              <h3 id="progressive-disclosure" className="text-lg md:text-xl font-bold text-[#333333] mb-3 mt-6">
                2. 段階的開示（Progressive Disclosure）
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                最初はシンプル、使い始めると必要な機能が次々出てくる設計で、初心者でも迷わず操作可能です。
              </p>
              <h3 id="app-integration" className="text-lg md:text-xl font-bold text-[#333333] mb-3 mt-6">
                3. アプリとの一体感
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                WordやExcelの画面右下に常に「相談相手」がいる状態で、迷った瞬間にすぐ助けを求められます。
              </p>
            </section>

            <section id="prompt-examples" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                実践プロンプト例
              </h2>
              <PromptBlock
                title="資料の要約"
                prompt="Wordで長い文書を開いたときに出現する「この文書を3つのポイントでまとめて」ボタンを押すだけ。"
              />
              <PromptBlock
                title="メールのトーン変更"
                prompt="Outlookで下書きを書いた際に出てくる「もっと丁寧にする」「短くする」といった提案メニューから選ぶだけ。"
              />
              <PromptBlock
                title="データからのグラフ作成"
                prompt="Excelで表を選択した際に出現する「おすすめのグラフを作成」ボタンをクリック。"
              />
            </section>

            <section id="news-source" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                ニュースソース
              </h2>
              <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4">
                <li><a href="https://forest.watch.impress.co.jp/docs/news/2113914.html" target="_blank" rel="noopener noreferrer">「Microsoft 365 Copilot」アプリが大刷新 ～状況に応じて必要なものを、応答速度も向上</a> (2026/06/03)</li>
                <li><a href="https://prota-p.com/event_ms_build_2026/" target="_blank" rel="noopener noreferrer">Microsoft Build 2026基調講演まとめ：AI時代にC#/.NETエンジニアが押さえたい注目ポイント</a> (2026/06/08)</li>
              </ul>
            </section>

            <section id="summary" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                まとめ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Microsoft 365 Copilotの進化する入力ボックスは、プロンプトに不慣れな初心者にとって強力な味方となります。「書く」から「選ぶ」への変化、段階的開示、そしてアプリとの一体感により、AIとの協業がより直感的でスムーズになりました。この新しいCopilotを活用することで、日々の業務効率を大幅に向上させ、AIの恩恵を最大限に享受できるでしょう。
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
