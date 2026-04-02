import type { Metadata } from 'next'
import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import TableOfContents from "@/components/article/TableOfContents"
import PromptBlock from "@/components/article/PromptBlock"
import ResponseExample from "@/components/article/ResponseExample"
import PromptInfoCard from "@/components/article/PromptInfoCard"
import AffiliateBox from "@/components/cta/AffiliateBox"
import RelatedArticles from "@/components/cta/RelatedArticles"
import { useSEO } from "@/hooks/useSEO"
import { useOGP } from "@/hooks/useOGP"
import { useStructuredData } from "@/hooks/useStructuredData"

export const metadata: Metadata = {
  title: 'Excelの「わからない」をAIに丸投げ！Copilot Excelエージェント超入門',
  description: 'Microsoft 365 CopilotのExcelエージェントを活用した初心者向けガイド。数式や関数の知識がゼロでも、日本語で指示を出すだけでデータの集計・分析・グラフ作成までをAIが代行。Excel作業の自動化を体験。',
  keywords: 'Excel, Copilot, AI, エージェント, 自動化, データ分析, 初心者, Microsoft 365',
  openGraph: {
    title: 'Excelの「わからない」をAIに丸投げ！Copilot Excelエージェント超入門',
    description: 'Microsoft 365 CopilotのExcelエージェントを活用した初心者向けガイド。数式や関数の知識がゼロでも、日本語で指示を出すだけでデータの集計・分析・グラフ作成までをAIが代行。',
    type: 'article',
    images: ['/images/og-image-excel-copilot.png'], // 後で作成するOGP画像
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Excelの「わからない」をAIに丸投げ！Copilot Excelエージェント超入門',
    description: 'Microsoft 365 CopilotのExcelエージェントを活用した初心者向けガイド。数式や関数の知識がゼロでも、日本語で指示を出すだけでデータの集計・分析・グラフ作成までをAIが代行。',
    images: ['/images/og-image-excel-copilot.png'], // 後で作成するOGP画像
  },
}

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
      name: "ビジネス文書",
      articles: [
        { title: "ChatGPTでそのまま使えるビジネスメール例文プロンプト10選", href: "/articles/business-email" },
        { title: "ChatGPTで敬語文章を自動生成するプロンプト", href: "/articles/keigo" },
        { title: "会議議事録をChatGPTで自動作成するプロンプト", href: "/articles/chatgpt-meeting-minutes" },
        { title: "クレーム返信をChatGPTで作るプロンプト", href: "/articles/claim-response" },
        { title: "営業メールを3分で作るChatGPTプロンプト", href: "/articles/sales-email" },
      ],
    },
    {
      name: "日常・カジュアル文書",
      articles: [
        { title: "ChatGPTでLINE返信を作るプロンプト", href: "/articles/line-reply" },
        { title: "ChatGPTで説明が苦手な人向け文章作成プロンプト", href: "/articles/explanation" },
      ],
    },
    {
      name: "基礎・入門",
      articles: [
        { title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集", href: "/articles/beginner-template" },
      ],
    },
    {
      name: "キャリア",
      articles: [
        { title: "ChatGPTで志望動機を書くプロンプト", href: "/articles/motivation-letter" },
      ],
    },
    {
      name: "コンテンツ作成",
      articles: [
        { title: "ブログ記事をAIに書かせる日本語プロンプト", href: "/articles/blog-writing" },
      ],
    },
  ],
  copyright: "© 2026 AIプロンプト活用ガイド All Rights Reserved.",
}

// 目次データ
const headings = [
  { id: "overview", text: "概要", level: 2 as const },
  { id: "target", text: "ターゲット", level: 2 as const },
  { id: "excel-agent-impact", text: "1. 関数を覚える時代は終わった？2026年最新「Excelエージェント」の衝撃", level: 2 as const },
  { id: "natural-language-operation", text: "2. 「やりたいこと」を言葉にするだけ：AIがExcel作業を代行", level: 2 as const },
  { id: "specific-instructions", text: "具体的な指示例", level: 3 as const },
  { id: "magic-prompts", text: "3. 初心者が今日から使える3つの魔法のプロンプト", level: 2 as const },
  { id: "prompt-organize", text: "【整理】「この表を読みやすく整理して」", level: 3 as const },
  { id: "prompt-analyze", text: "【分析】「このデータから読み取れる特徴を3つ教えて」", level: 3 as const },
  { id: "prompt-create", text: "【作成】「この数字を元に、会議用の棒グラフを作って」", level: 3 as const },
  { id: "copilot-edit-button", text: "4. 「Copilotで編集」ボタンを忘れずに：AI活用を始める準備", level: 2 as const },
  { id: "ai-human-collaboration", text: "5. AIと一緒に作る安心感：AIが作った数式を人間が確認する「共同作業」の進め方", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "references", text: "参考文献", level: 2 as const },
]

// プロンプトデータ (この記事ではPromptBlockは使用しないため空)
const prompts = {}

// 関連記事データ
const relatedArticles = [
  {
    title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集",
    description: "効果的なプロンプトの書き方を基礎から解説",
    href: "/articles/beginner-template",
  },
  {
    title: "ChatGPT最新版「GPT-5.4」の『おまかせモード』活用術",
    description: "GPT-5.4の新機能「おまかせモード」でAIを最大限に活用する方法",
    href: "/articles/gpt54-agent-mode-guide",
  },
  {
    title: "LLM構造化出力（Structured Output）実践ガイド",
    description: "LLMから構造化された出力を得るための実践的なガイド",
    href: "/articles/llm-structured-output-guide",
  },
]

export default function ExcelCopilotAgentGuidePage() {
  // SEO最適化
  useSEO({
    title: 'ExcelのAI自動化！Copilotエージェント超入門ガイド',
    description: 'Microsoft 365 CopilotのExcelエージェントを活用した初心者向けガイド。数式や関数の知識がゼロでも、日本語で指示を出すだけでデータの集計・分析・グラフ作成までをAIが代行。',
    keywords: 'Excel, Copilot, AI, エージェント, 自動化, データ分析, 初心者, Microsoft 365, プロンプト'
  });

  // OGP最適化
  useOGP({
    title: 'ExcelのAI自動化！Copilotエージェント超入門ガイド',
    description: 'Microsoft 365 CopilotのExcelエージェントを活用した初心者向けガイド。数式や関数の知識がゼロでも、日本語で指示を出すだけでデータの集計・分析・グラフ作成までをAIが代行。',
    type: 'article',
    image: 'https://promptlist.jp/images/og-image-excel-copilot.png',
    url: 'https://promptlist.jp/articles/excel-copilot-agent'
  });

  // 構造化データ（Article スキーマ）
  useStructuredData({
    title: 'ExcelのAI自動化！Copilotエージェント超入門ガイド',
    description: 'Microsoft 365 CopilotのExcelエージェントを活用した初心者向けガイド。数式や関数の知識がゼロでも、日本語で指示を出すだけでデータの集計・分析・グラフ作成までをAIが代行。',
    author: 'AIプロンプト活用ガイド',
    datePublished: '2026-04-02T00:00:00Z',
    dateModified: '2026-04-02T00:00:00Z',
    image: 'https://promptlist.jp/images/og-image-excel-copilot.png',
    url: 'https://promptlist.jp/articles/excel-copilot-agent'
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title="Excelの「わからない」をAIに丸投げ！Copilot Excelエージェント超入門"
          eyecatchSrc="/images/excel-copilot-eyecatch.jpg" // 後で作成するアイキャッチ画像
          createdAt="2026年4月2日"
          updatedAt="2026年4月2日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          {/* 概要 */}
          <section id="overview" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              概要
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年3月に発表された「Microsoft 365 Copilot Wave 3」の目玉機能の一つ、Excelエージェントを活用した初心者向けガイドです。数式や関数の知識がゼロでも、日本語で「やりたいこと」を伝えるだけで、データの集計・分析・グラフ作成までをAIが代行してくれる「Excel作業の自動化」体験を解説します。
            </p>
          </section>

          {/* ターゲット */}
          <section id="target" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ターゲット
            </h2>
            <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4">
              <li>仕事でExcelを使うが、VLOOKUPやピボットテーブルと聞いただけで頭が痛くなる初心者</li>
              <li>PCに備え付けのCopilotは知っているが、Excelの中でどう使えばいいか分からない層</li>
              <li>「このデータをいい感じにまとめて」という曖昧な指示を形にしたい事務職・営業職</li>
            </ul>
          </section>

          {/* 1. 関数を覚える時代は終わった？2026年最新「Excelエージェント」の衝撃 */}
          <section id="excel-agent-impact" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              1. 関数を覚える時代は終わった？2026年最新「Excelエージェント」の衝撃
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Microsoft 365 Copilot Wave 3で登場したExcelエージェントは、Excelの操作を劇的に変える可能性を秘めています。従来のExcelでは、データの集計や分析にはVLOOKUP関数やピボットテーブルなどの専門知識が必要でした。しかし、Excelエージェントを使えば、自然言語で指示を出すだけで、AIが自動的に適切な関数や操作を判断し、実行してくれます。これにより、Excelの知識がない初心者でも、高度なデータ分析やレポート作成が可能になります。
            </p>
          </section>

          {/* 2. 「やりたいこと」を言葉にするだけ：AIがExcel作業を代行 */}
          <section id="natural-language-operation" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              2. 「やりたいこと」を言葉にするだけ：AIがExcel作業を代行
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Excelエージェントの最大の魅力は、ユーザーが「やりたいこと」を日本語で伝えるだけで、AIがその意図を理解し、Excel上で実行してくれる点です。例えば、「売上を月別に集計してグラフにして」と指示すれば、AIが自動的に月別集計を行い、適切なグラフを作成します。また、「3月の中で、1万円以上の注文だけ抽出して」といった複雑な条件指定も、自然言語で問題なく処理できます。
            </p>
            <h3 id="specific-instructions" className="text-lg md:text-xl font-bold text-[#333333] mb-3 pb-1 border-b border-[#5B9BD5]">
              具体的な指示例
            </h3>
            <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4">
              <li>「この表から、各商品の売上合計を計算して」</li>
              <li>「顧客別の購入履歴を分析し、リピート率の高い顧客を特定して」</li>
              <li>「前年同月比の売上推移を折れ線グラフで表示して」</li>
            </ul>
          </section>

          {/* 3. 初心者が今日から使える3つの魔法のプロンプト */}
          <section id="magic-prompts" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              3. 初心者が今日から使える3つの魔法のプロンプト
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Excelエージェントを使いこなすための、初心者でもすぐに試せる3つのプロンプトを紹介します。
            </p>

            <h3 id="prompt-organize" className="text-lg md:text-xl font-bold text-[#333333] mb-3 pb-1 border-b border-[#5B9BD5]">
              【整理】「この表を読みやすく整理して」
            </h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              乱雑なデータも、この一言で瞬時に見やすい形に整えられます。例えば、列幅の調整、重複データの削除、データの並べ替えなどをAIが自動で行います。
            </p>
            <PromptBlock
              prompt={`この売上データを読みやすく整理してください。具体的には、列幅を自動調整し、重複する顧客名を削除して、売上金額が高い順に並べ替えてください。`}
            />

            <h3 id="prompt-analyze" className="text-lg md:text-xl font-bold text-[#333333] mb-3 pb-1 border-b border-[#5B9BD5]">
              【分析】「このデータから読み取れる特徴を3つ教えて」
            </h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              データの中に隠された傾向やパターンをAIが分析し、要点をまとめてくれます。これにより、データ分析の専門知識がなくても、ビジネス上のインサイトを得ることができます。
            </p>
            <PromptBlock
              prompt={`この顧客データから、購買行動に関する特徴を3つ教えてください。例えば、最も購入頻度の高い顧客層、人気の商品カテゴリ、購入時間帯の傾向などです。`}
            />

            <h3 id="prompt-create" className="text-lg md:text-xl font-bold text-[#333333] mb-3 pb-1 border-b border-[#5B9BD5]">
              【作成】「この数字を元に、会議用の棒グラフを作って」
            </h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              会議資料などで必要となるグラフ作成も、AIに任せることができます。データの種類や目的に応じて、最適なグラフ形式を提案し、自動で作成してくれます。
            </p>
            <PromptBlock
              prompt={`この四半期ごとの売上推移データを使って、会議で発表するための棒グラフを作成してください。グラフのタイトルは「四半期別売上推移」とし、各棒に売上金額のラベルを表示してください。`}
            />
          </section>

          {/* 4. 「Copilotで編集」ボタンを忘れずに：AI活用を始める準備 */}
          <section id="copilot-edit-button" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              4. 「Copilotで編集」ボタンを忘れずに：AI活用を始める準備
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Excelエージェントを有効にするには、Excelリボンに表示される「Copilotで編集」ボタンをクリックする必要があります。このボタンを押すことで、AIがExcelのデータにアクセスし、指示を受け付ける状態になります。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              また、AIに正確な指示を出すためには、データの準備も重要です。特に、データを「テーブル化」しておくことで、AIがデータの範囲を正確に認識し、より適切な処理を行うことができます。テーブル化は、データ範囲を選択し、「挿入」タブから「テーブル」を選択するだけで簡単に行えます。
            </p>
          </section>

          {/* 5. AIと一緒に作る安心感：AIが作った数式を人間が確認する「共同作業」の進め方 */}
          <section id="ai-human-collaboration" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              5. AIと一緒に作る安心感：AIが作った数式を人間が確認する「共同作業」の進め方
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Excelエージェントは非常に強力ですが、AIが生成した結果を鵜呑みにするのではなく、人間が最終確認を行う「共同作業」の意識が重要です。AIが提案した数式やグラフが、意図した通りに機能しているか、データに誤りがないかなどを確認することで、より信頼性の高い成果物を作成できます。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              AIはあくまでツールであり、最終的な判断は人間が行うべきです。AIの提案を参考にしつつ、自身の知識や経験を加えて調整することで、Excel作業の効率と品質を両立させることができます。
            </p>
          </section>

          {/* まとめ */}
          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Microsoft 365 CopilotのExcelエージェントは、Excelの専門知識がないユーザーでも、自然言語で指示を出すだけで高度なデータ集計、分析、グラフ作成を可能にする画期的な機能です。本記事で紹介した「整理」「分析」「作成」の3つの魔法のプロンプトを活用し、「Copilotで編集」ボタンを忘れずに押すことで、今日からExcel作業の効率を大幅に向上させることができます。AIとの共同作業を通じて、あなたのExcelスキルを次のレベルへと引き上げましょう。
            </p>
          </section>

          {/* 参考文献 */}
          <section id="references" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              参考文献
            </h2>
            <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4">
              <li><a href="https://xtech.nikkei.com/atcl/nxt/column/18/01787/032300217/" target="_blank" rel="noopener noreferrer">CopilotのExcelエージェントを使う、売上集計や分析用ブックを自動作成する</a> (2026/03/24)</li>
              <li><a href="https://forest.watch.impress.co.jp/docs/news/2097652.html" target="_blank" rel="noopener noreferrer">“答える”AIから“仕事をする”AIに ～Microsoft、「Copilot Cowork」を発表</a> (2026/03/30)</li>
              <li><a href="https://www.threads.com/@takuya_mentaexcel/post/DWWQNx4j0v3/" target="_blank" rel="noopener noreferrer">copilotのExcelエージェント：『Copilotで編集』を押して有効化するだけでデータ分析</a> (2026/03/26)</li>
            </ul>
          </section>

          <RelatedArticles articles={relatedArticles} />
        </div>
      </article>
    </PageLayout>
  )
}
