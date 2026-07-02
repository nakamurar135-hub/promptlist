
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
  { id: "visual-cards-merit", text: "「文字だけ」から「見てわかる」へ", level: 2 as const },
  { id: "how-to-use", text: "一発でカードを引き出すコツ", level: 2 as const },
  { id: "practical-examples", text: "具体的な活用シーン", level: 2 as const },
  { id: "beginner-tips", text: "初心者が陥る「長文回答」を防ぐ方法", level: 2 as const },
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
    title: "【初心者向け】もうプロンプトで迷わない！Microsoft 365 Copilotの『進化する入力ボックス』活用術",
    description: "ワークスペース型入力ボックスで、作業内容に合わせた直感的なCopilot操作を実現。",
    href: "/articles/copilot-workspace-input-guide",
  },
]

export default function CopilotVisualCardsGuidePage() {
  const title = "【初心者向け】文字を読むのはもう終わり？Microsoft Copilotの『ビジュアルカード』で情報を一瞬で理解するプロンプト術"
  const description = "2026年6月末に強化されたMicrosoft Copilotのビジュアルカード機能。天気予報や株価、タスクなどを図解やボタン付きカードで表示し、初心者でも直感的に情報を把握できる新機能の活用ガイド。"
  const keywords = "Microsoft Copilot, ビジュアルカード, プロンプト, 初心者, AI, 活用術, 情報理解, 2026年"
  const publishedDate = "2026-07-02T00:00:00Z"
  const modifiedDate = "2026-07-02T00:00:00Z"
  const url = "https://promptlist.jp/articles/copilot-visual-cards"
  const image = "https://promptlist.jp/images/copilot-visual-cards-eyecatch.jpg" // 仮の画像URL

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
          createdAt="2026.07.02"
          updatedAt="2026.07.02"
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <section id="overview" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                概要
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                2026年6月末、Microsoft Copilotのチャット回答が進化し、天気予報や株価、Plannerのタスクなどを「リッチな視覚カード（ビジュアルカード）」で表示する機能が強化されました。本記事では、初心者向けに、文字が並ぶだけの回答ではなく、図解やボタン付きのカードで結果を受け取ることで、直感的に情報を把握し、次のアクション（予約やタスク追加）へ移る方法を解説します。
              </p>
            </section>

            <section id="target-users" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                ターゲットユーザー
              </h2>
              <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4">
                <li>AIの回答が長文だと読むのが面倒に感じる初心者の方。</li>
                <li>PCに標準搭載されているCopilotを、もっと「便利ツール」として使いこなしたい人。</li>
                <li>プロンプトをどう書けば「見やすい結果」が返ってくるか知りたい人。</li>
              </ul>
            </section>

            <section id="visual-cards-merit" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                「文字だけ」から「見てわかる」へ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                これまでのCopilotは、質問に対して長い文章で回答していました。しかし、ビジュアルカード機能により、情報が図表やボタン付きカードとして表示されるようになりました。例えば、「今週末の天気は？」と聞くと、テキストではなく、天気アイコン、気温、降水確率などが視覚的に整理されたカードで返ってきます。これにより、ITに詳しくない初心者でも、一瞬で情報を理解できるようになります。
              </p>
            </section>

            <section id="how-to-use" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                一発でカードを引き出すコツ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                ビジュアルカードを引き出すためには、プロンプトに「表にして」「カードで出して」「視覚的に表示して」といった指示を加えるだけで十分です。Copilotはこれらのキーワードを認識し、自動的に最適なカード形式で結果を返してくれます。
              </p>
              <ArticleContent
                content={[
                  "「〇〇を表にして」と指示すると、データが表形式のカードで表示される",
                  "「カードで出して」と指示すると、複数の情報がボタン付きカードで整理される",
                  "「視覚的に」と指示すると、グラフやチャートが自動生成される",
                ]}
              />
            </section>

            <section id="practical-examples" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                具体的な活用シーン
              </h2>
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-3 mt-6">
                シーン1：旅行計画の天気確認
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                「今週末の旅行先の天気を教えて」と聞くと、お天気カードで視覚的に把握できます。気温、降水確率、風速などが一目瞭然となり、持ち物の準備がスムーズになります。
              </p>
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-3 mt-6">
                シーン2：タスク管理の整理
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                「今日の予定とタスクを整理して」と指示すると、Plannerカードでそのまま操作できます。タスクの優先度、期限、ステータスがカード形式で表示され、直接ボタンをクリックして更新することも可能です。
              </p>
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-3 mt-6">
                シーン3：株価情報の確認
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                「〇〇株の株価をカードで表示して」と聞くと、株価、変動率、チャートがカード形式で返ってきます。複数銘柄の比較も、カード形式なら一目瞭然です。
              </p>
            </section>

            <section id="beginner-tips" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                初心者が陥る「長文回答」を防ぐ方法
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                時には、Copilotが長文で回答してしまうことがあります。これを防ぐための「引き算」のプロンプト術を紹介します。
              </p>
              <ArticleContent
                content={[
                  "「短く」「簡潔に」「ポイントだけ」といった制限を加える",
                  "「3行以内で」「5つの要点で」と具体的な形式を指定する",
                  "「わかりやすく」「初心者向けに」と対象者を明示する",
                  "「カードで」「表で」「箇条書きで」と出力形式を明確にする",
                ]}
              />
            </section>

            <section id="prompt-examples" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                実践プロンプト例
              </h2>
              <PromptBlock
                title="天気情報をカードで表示"
                prompt="東京の今週末の天気をカードで表示して。気温、降水確率、風速を含めて。"
              />
              <PromptBlock
                title="タスク一覧を視覚的に整理"
                prompt="今日のタスクを優先度別に表にして。完了、進行中、未着手の3つのカテゴリで分けて。"
              />
              <PromptBlock
                title="複数の情報を比較"
                prompt="iPhone 16、Google Pixel 9、Galaxy S25の3機種をスペック比較表で表示して。価格、カメラ、バッテリーを含めて。"
              />
              <PromptBlock
                title="グラフで可視化"
                prompt="過去3ヶ月の売上推移を折れ線グラフで表示して。月ごとの数値も表示してね。"
              />
            </section>

            <section id="news-source" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                ニュースソース
              </h2>
              <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4">
                <li><a href="https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--june-2026/4529572" target="_blank" rel="noopener noreferrer">What's New in Microsoft 365 Copilot | June 2026</a></li>
                <li><a href="https://reconn-ai.com/llm-changelog.php" target="_blank" rel="noopener noreferrer">LLM/AI Changelog — ChatGPT, Gemini, Perplexity & Copilot (2026/06/27)</a></li>
              </ul>
            </section>

            <section id="summary" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                まとめ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Microsoft Copilotのビジュアルカード機能は、AIとの対話をより直感的で効率的にします。「文字を読むのはもう終わり」という新しい時代へ、AIは「読むもの」から「見るもの」へと進化しました。プロンプトに「表にして」「カードで出して」といった指示を加えるだけで、複雑な情報も一瞬で理解できるようになります。この新機能を活用することで、初心者でもAIの恩恵を最大限に享受できるでしょう。
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
