
'use client'

import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import ArticleContent from "@/components/article/ArticleContent"
import TableOfContents from "@/components/article/TableOfContents"
import PromptBlock from "@/components/article/PromptBlock"
import RelatedArticles from "@/components/cta/RelatedArticles"
import { useSEO } from "@/hooks/useSEO"
import { useOGP } from "@/hooks/useOGP"
import { useStructuredData } from "@/hooks/useStructuredData"

export default function AppleOpenAILawsuitChatGPTHomePage() {
  const title = "【中級者向け】AI業界に激震！Apple対OpenAIの提訴と、家庭へ浸透するChatGPT最新活用ガイド"
  const description = "2026年7月12日、AppleがOpenAIを提訴したニュースと、ChatGPTの家庭向け機能拡充について解説。AI開発における知財と人材の争奪戦、家庭用AIの進化、プライバシーとガバナンスの重要性を深掘りし、家庭でAIを使いこなすプロンプト術を紹介します。"
  const keywords = "Apple, OpenAI, 提訴, ChatGPT, 家庭用AI, プライバシー, ガバナンス, AIエージェント, スマートホーム, プロンプト術"
  const publishedDate = "2026-07-12T00:00:00Z"
  const modifiedDate = "2026-07-12T00:00:00Z"
  const url = "https://promptlist.jp/articles/apple-openai-lawsuit-chatgpt-home"
  const image = "https://promptlist.jp/images/apple-openai-lawsuit-chatgpt-home-eyecatch.jpg"

  // SEO最適化
  useSEO({ title, description, keywords })
  useOGP({ title, description, type: "article", image, url })
  useStructuredData({
    title,
    description,
    datePublished: publishedDate,
    dateModified: modifiedDate,
    image,
    url,
  })

  const tocItems = [
    { id: "overview", title: "1. ニュースの概要：2026年7月12日の衝撃" },
    { id: "importance", title: "2. なぜこれが重要なのか？" },
    { id: "chatgpt-home", title: "3. 【実践】家庭で使いこなすChatGPT最新プロンプト術" },
    { id: "privacy-governance", title: "4. プライバシーとガバナンス：企業と個人が守るべきこと" },
    { id: "summary", title: "5. まとめ：対立する巨人と、私たちの生活" },
  ]

  const relatedArticles = [
    {
      title: "【中級者向け】AIが自律的にタスクを完遂！次世代AIエージェント『Manus』活用ガイド",
      description: "AIエージェント『Manus』の活用ガイド。自律的なタスク完遂の仕組みと実践的なプロンプト術を解説。",
      href: "/articles/manus-autonomous-agent",
    },
    {
      title: "【初心者向け】AIが「じっくり考えて」から答えてくれる！Copilotの『Think Deeper』で失敗しない相談術",
      description: "Copilotの『Think Deeper』機能で、AIがより深く思考し、質の高い回答を生成する方法を解説。",
      href: "/articles/copilot-think-deeper-beginner",
    },
  ]

  return (
    <PageLayout
      headerProps={{
        logoSrc: "/logo.svg",
        siteName: "PromptList",
        navItems: [
          { label: "ホーム", href: "/" },
          { label: "記事一覧", href: "/articles" },
        ],
      }}
      footerProps={{
        categories: [
          { name: "AIエージェント", articles: [] },
          { name: "プロンプト術", articles: [] },
        ],
        copyright: "© 2026 PromptList All rights reserved.",
      }}
    >
      <ArticleHeader
        title={title}
        eyecatchSrc={image}
        createdAt={publishedDate}
        updatedAt={modifiedDate}
      />
      <article className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <ArticleContent>
              <section id="overview" className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                  1. ニュースの概要：2026年7月12日の衝撃
                </h2>
                <p className="text-[#333333] leading-relaxed mb-4">
                  2026年7月12日、テクノロジー業界を揺るがす大きなニュースが飛び込んできました。AppleがOpenAIを「トレードシークレット（営業秘密）の窃盗」で提訴したという報道です。AppleからOpenAIへ400名以上の従業員が移籍したことが背景にあるとされています。一方で、OpenAIはChatGPTの家庭向け機能を大幅に拡充することを発表しました。
                </p>
              </section>

              <section id="importance" className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                  2. なぜこれが重要なのか？
                </h2>
                <p className="text-[#333333] leading-relaxed mb-4">
                  このニュースは、AI開発における人材争奪戦の激化と、AIが個人のプライバシー領域である「家庭」にいかに深く入り込もうとしているかを象徴しています。
                </p>
                <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4">
                  <li>
                    <strong>知財と人材</strong>: 巨大テック企業間の法廷闘争は、今後のAI開発のスピードやオープン性に影響を与える可能性があります。
                  </li>
                  <li>
                    <strong>家庭用AIの進化</strong>: 単なるチャットボットから、スマートホームデバイスと連携し、家族のスケジュールや好みを把握する「家庭内エージェント」への進化が加速しています。
                  </li>
                </ul>
              </section>

              <section id="chatgpt-home" className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                  3. 【実践】家庭で使いこなすChatGPT最新プロンプト術
                </h2>
                <p className="text-[#333333] leading-relaxed mb-4">
                  OpenAIが発表した最新機能を活用し、家庭内での業務や家事を効率化する具体的なプロンプトを紹介します。
                </p>
                <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-2 mt-6">
                  ステップ1: スマートホーム連携による自動化
                </h3>
                <p className="text-[#333333] leading-relaxed mb-4">
                  ChatGPTの最新APIを活用し、照明や空調、家電と連携させることで、「声」や「チャット」だけで複雑な指示を実行できます。
                </p>
                <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-2 mt-6">
                  ステップ2: 家族専用エージェントの構築
                </h3>
                <p className="text-[#333333] leading-relaxed mb-4">
                  家族それぞれの好み（食事の制限、趣味、予定）をChatGPTに学習させ、パーソナライズされた提案を受ける方法を解説します。
                </p>
              </section>

              <section id="privacy-governance" className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                  4. プライバシーとガバナンス：企業と個人が守るべきこと
                </h2>
                <p className="text-[#333333] leading-relaxed mb-4">
                  Appleの提訴でも焦点となっている「データの取り扱い」は、個人レベルでも重要です。家庭内データをAIに渡す際の注意点と、最新のプライバシー保護設定（ロックモード等）の活用方法を伝えます。
                </p>
              </section>

              <section id="summary" className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                  5. まとめ：対立する巨人と、私たちの生活
                </h2>
                <p className="text-[#333333] leading-relaxed mb-4">
                  企業間の争いは激化していますが、技術の進化は止まりません。私たちは最新の動向を注視しつつ、プライバシーを守りながらAIの恩恵を最大限に享受する知恵を身につける必要があります。
                </p>
              </section>

              <section id="prompt-example" className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                  プロンプト例
                </h2>
                <PromptBlock
                  title="スマートホームエージェントプロンプト"
                  prompt="「我が家のスマートホームエージェントとして振る舞ってください。\n【家族構成】父、母、娘（5歳）\n【今日の予定】18時に夕食、19時にお風呂、20時に寝かしつけ。\n【指示】17時半になったら、キッチンの照明を明るくし、夕食の準備を促すメッセージを私のスマホに送ってください。また、娘の寝かしつけ用に、今日の天気に合わせた5分間の創作童話を20時に読み上げてください。」"
                />
              </section>

              <section id="news-source" className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                  ニュースソース
                </h2>
                <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4">
                  <li><a href="https://www.buildfastwithai.com/blogs/ai-news-today-july-12-2026" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Apple Sues OpenAI for Trade Secret Theft After Losing 400+ Employees (BuildFastWithAI, 2026/07/12)</a></li>
                  <li><a href="https://x.com/broken55/status/2076131256035881070" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">今日のAIニュース — 2026-07-12 Apple対OpenAIの訴訟 (X, 2026/07/12)</a></li>
                </ul>
              </section>

              <section id="related" className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                  関連記事
                </h2>
                <RelatedArticles articles={relatedArticles} />
              </section>
            </ArticleContent>
          </div>
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents headings={tocItems.map(item => ({ id: item.id, text: item.title, level: item.title.startsWith('ステップ') ? 3 : 2 }))} />
            </div>
          </aside>
        </div>
      </article>
    </PageLayout>
  )
}
