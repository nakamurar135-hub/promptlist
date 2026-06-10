
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
  { id: "overview", text: "概要: Microsoft Scoutとは？", level: 2 as const },
  { id: "why-it-helps-beginners", text: "『Microsoft Scout』が初心者にこそおすすめな理由", level: 2 as const },
  { id: "how-it-works", text: "AIが「あなたの秘書」になる仕組み", level: 2 as const },
  { id: "prompt-examples", text: "今すぐ使えるプロンプト活用例", level: 2 as const },
  { id: "news-sources", text: "ニュースソース", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "【初心者向け】メールの山にさようなら！Outlookの『Copilotエージェント』でAIに秘書を任せるプロンプト術",
    description: "Outlook Copilotエージェントを活用して、メールの管理や返信案作成をAIに任せる方法を解説します。",
    href: "/articles/outlook-copilot-agent",
  },
  {
    title: "【中級者向け】AIが自律的にタスクを完遂！OpenAIの最新エージェント『Operator』による業務自動化プロンプト術",
    description: "OpenAI Operatorを活用して、AIが自律的にタスクを完遂する業務自動化プロンプト術を紹介します。",
    href: "/articles/openai-operator-automation",
  },
]

export default function MicrosoftScoutBeginnerPage() {
  const title = "【初心者向け】AIがあなたの「秘書」になる！Microsoft Scoutで会議準備・スケジュール調整を自動化するプロンプト術"
  const description = "Microsoft Build 2026で発表された、個人向けAIエージェント「Microsoft Scout」の活用ガイドです。ITに疎い初心者でも、PCに備え付けのCopilotを通じて、AIに「会議の準備」や「スケジュールの調整」を丸投げする方法を解説します。"
  const keywords = "Microsoft Scout, AI秘書, 会議準備, スケジュール調整, 自動化, プロンプト術, 初心者, Copilot, Microsoft Build 2026"
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
    datePublished: "2026-06-10T00:00:00Z",
    dateModified: "2026-06-10T00:00:00Z",
  })

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年6月10日"
          updatedAt="2026年6月10日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="overview" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              概要: Microsoft Scoutとは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Microsoft Build 2026で発表された、個人向けAIエージェント「Microsoft Scout」は、あなたのPCに備え付けのCopilotを通じて、日々の業務を劇的に効率化する新機能です。
            </p>
            <p className="text-[#333333] leading-relaxed">
              ITに不慣れな初心者でも、まるで有能な秘書がいるかのように、AIに「会議の準備」や「スケジュールの調整」といった面倒なタスクを丸投げできるようになります。この記事では、Microsoft Scoutの基本的な使い方から、具体的なプロンプト例までを詳しく解説します。
            </p>
          </section>

          <section id="why-it-helps-beginners" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              『Microsoft Scout』が初心者にこそおすすめな理由
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「AIは便利そうだけど、使いこなすのが難しそう...」と感じる初心者の方にこそ、この機能はおすすめです。
            </p>
            <PromptInfoCard type="tips" title="「丸投げ」の実現">
              自分でカレンダーを確認したり、関連資料を探したりする手間はもう不要です。AIエージェントにタスクを任せることで、あなたはより重要な業務に集中できます。
            </PromptInfoCard>
            <PromptInfoCard type="tips" title="PC標準機能の延長">
              新しいアプリをインストールする必要はありません。いつものWindows、Teams、OutlookといったMicrosoft製品の中で、Copilotを通じてScoutの機能を利用できます。学習コストが低く、すぐに使い始められるのが魅力です。
            </PromptInfoCard>
            <PromptInfoCard type="tips" title="「AIに何を頼めばいいかわからない」を解決">
              「AIに何を頼めばいいかわからない」という初心者の方でも、具体的なプロンプト例を参考にすることで、AIの活用イメージを掴みやすくなります。
            </PromptInfoCard>
          </section>

          <section id="how-it-works" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              AIが「あなたの秘書」になる仕組み
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Microsoft Scoutは、Copilotと連携し、あなたの指示を解釈して複数のアプリケーションを横断してタスクを実行します。例えば、「明日の会議の準備をしておいて」という抽象的な指示でも、AIは以下のように動きます。
            </p>
            <ul className="list-disc list-inside mb-4 text-[#333333]">
              <li>**会議の特定**: OutlookやTeamsのカレンダーから、明日の会議情報を特定します。</li>
              <li>**関連資料の収集**: 会議のタイトルや参加者から、過去のメール、ドキュメント、チャット履歴などを検索し、関連性の高い情報を集めます。</li>
              <li>**情報の要約**: 収集した資料を基に、会議の目的、議題、参加者の役割などを要約します。</li>
              <li>**準備状況の報告**: 要約した情報をあなたに提示し、必要に応じて追加の指示を仰ぎます。</li>
            </ul>
            <p className="text-[#333333] leading-relaxed">
              このように、AIがあなたの意図を汲み取り、自律的に動くことで、あなたは煩雑な準備作業から解放されます。
            </p>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              今すぐ使えるプロンプト活用例
            </h2>
            <p className="mb-4">Microsoft Scoutを最大限に活用するための具体的なプロンプト例です。Copilotに話しかけるように使ってみましょう。</p>
            
            <PromptBlock
              title="会議準備を依頼する"
              prompt="「明日のA社との会議に向けて、これまでのメールのやり取りと関連資料をまとめて要約しておいて。」"
            />
            
            <PromptBlock
              title="スケジュール調整を依頼する"
              prompt="「来週の午後にBさんと30分打ち合わせしたいんだけど、お互い空いている時間を探して仮押さえしておいて。」"
            />

            <PromptBlock
              title="出張手配を依頼する"
              prompt="「来月の大阪出張の航空券とホテルを、いつもの条件で手配しておいて。候補をいくつか教えて。」"
            />
          </section>

          <section id="news-sources" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ニュースソース
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-2">
              <li><a href="https://news.microsoft.com/build-2026/" target="_blank" rel="noopener noreferrer">Microsoft Build 2026 Keynote - Microsoft Scout発表</a></li>
              <li><a href="https://www.microsoft.com/en-us/microsoft-copilot" target="_blank" rel="noopener noreferrer">Microsoft Copilot 公式ページ</a></li>
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
