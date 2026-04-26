"use client"

import { PageLayout } from "@/components/layout/PageLayout"
import { ArticleHeader } from "@/components/article/ArticleHeader"
import { TableOfContents } from "@/components/article/TableOfContents"
import { PromptBlock } from "@/components/article/PromptBlock"
import { PromptInfoCard } from "@/components/article/PromptInfoCard"
import { RelatedArticles } from "@/components/cta/RelatedArticles"
import { useSEO } from "@/hooks/useSEO"
import { useOGP } from "@/hooks/useOGP"
import { useStructuredData } from "@/hooks/useStructuredData"

export default function PowerPointExplainerPage() {
  const headerProps = {
    siteTitle: "AIプロンプト活用ガイド",
    navItems: [
      { label: "ホーム", href: "/" },
      { label: "初心者向け", href: "/#beginner" },
      { label: "中級者向け", href: "/#intermediate" },
    ],
  }

  const footerProps = {
    siteTitle: "AIプロンプト活用ガイド",
    copyright: "© 2026 AIプロンプト活用ガイド. All rights reserved.",
  }

  const headings = [
    { id: "intro", text: "PowerPointの新機能「Explainer」とは？", level: 2 as const },
    { id: "beginner-benefit", text: "なぜ初心者に「Explainer」が必要なのか", level: 2 as const },
    { id: "how-to-use", text: "使い方は簡単！3つのステップ", level: 2 as const },
    { id: "prompt-examples", text: "目的別に活用するプロンプト例", level: 2 as const },
    { id: "usage-tips", text: "より効果的に使うためのコツ", level: 2 as const },
    { id: "summary", text: "まとめ", level: 2 as const },
    { id: "news-sources", text: "ニュースソース", level: 2 as const },
  ]

  const relatedArticles = [
    {
      title: "【初心者向け】AIが「じっくり考えて」から答えてくれる！Copilotの『Think Deeper』で失敗しない相談術",
      description: "Copilotの新機能「Think Deeper」を使い、AIに深く考えさせてから回答を得るためのプロンプト術を解説します。",
      href: "/articles/copilot-think-deeper-beginner",
    },
    {
      title: "【初心者向け】画面上の「これ」をAIが即解決！Windows 11の新機能『Click to Do』活用プロンプト術",
      description: "Windows 11の新機能「Click to Do」を使い、画面上のテキストや画像をAIに即座に処理させる方法を紹介します。",
      href: "/articles/windows-click-to-do-beginner",
    },
    {
      title: "【初心者向け】回答の一部を「選んで質問」！Copilotの新機能でピンポイントに解決するプロンプト術",
      description: "Copilotの回答の特定部分を選択して追加質問ができる新機能を活用し、効率的に疑問を解消するコツを伝授します。",
      href: "/articles/copilot-select-ask",
    },
  ]

  // SEO設定
  const seoData = {
    title: "【初心者向け】PowerPointの新機能『Explainer』活用プロンプト術 | AIプロンプト活用ガイド",
    description: "PowerPointの「Explainer」機能を使い、スライド内の専門用語や複雑な図表をAIにわかりやすく解説してもらうためのプロンプトガイド。IT初心者でも会議資料の理解度を劇的に高められます。",
    keywords: "PowerPoint,Explainer,Copilot,AI,プロンプト,初心者,プレゼン資料,解説,ビジネス",
    url: "https://promptlist.com/articles/powerpoint-explainer",
    datePublished: "2026-04-26T00:00:00Z",
    dateModified: "2026-04-26T00:00:00Z",
  }

  useSEO({
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
  })

  useOGP({
    title: seoData.title,
    description: seoData.description,
    type: "article",
    url: seoData.url,
  })

  useStructuredData({
    title: seoData.title,
    description: seoData.description,
    datePublished: seoData.datePublished,
    dateModified: seoData.dateModified,
    url: seoData.url,
  })

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ArticleHeader
          title="【初心者向け】プレゼン資料の「わからない」を即解決！PowerPointの新機能『Explainer』活用プロンプト術"
          createdAt="2026.04.26"
          eyecatchSrc="/placeholder.jpg"
        />

        <div className="mt-8">
          <TableOfContents headings={headings} />
        </div>

        <div className="mt-12 prose prose-blue max-w-none">
          <section id="intro" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              PowerPointの新機能「Explainer」とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年4月、MicrosoftはPowerPointに画期的な新機能**「Explainer（エクスプレイナー）」**を追加しました。これは、スライド内に登場する難しい言葉や複雑なグラフを、AI（Copilot）がその場で噛み砕いて解説してくれる機能です。
            </p>
            <p className="text-[#333333] leading-relaxed">
              これまでは、資料を読んでいてわからない単語があれば、一旦ブラウザを開いて検索する必要がありました。しかし「Explainer」を使えば、PowerPointの画面から離れることなく、まるでお抱えの家庭教師に聞くような感覚で、瞬時に疑問を解消できるようになります。
            </p>
          </section>

          <section id="beginner-benefit" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              なぜ初心者に「Explainer」が必要なのか
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              特にITやAIに詳しくない初心者の方にとって、ビジネス資料は「専門用語の壁」になりがちです。
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <ul className="list-disc list-inside space-y-2 text-[#333333]">
                <li><strong>検索の手間がゼロ</strong>：単語をコピーしてググる必要がありません。</li>
                <li><strong>文脈を汲み取った解説</strong>：単なる辞書的な意味ではなく「この資料の中でどういう意味か」を教えてくれます。</li>
                <li><strong>聞きづらいことも聞ける</strong>：会議中に「今の言葉、どういう意味ですか？」と聞きづらい場面でも、こっそりAIに確認できます。</li>
              </ul>
            </div>
          </section>

          <section id="how-to-use" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              使い方は簡単！3つのステップ
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B9BD5] text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">わからない箇所を選択</h3>
                  <p className="text-sm">スライド上の単語、文章、またはグラフや図形をマウスでドラッグして選択します。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B9BD5] text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">「Explainer」ボタンをクリック</h3>
                  <p className="text-sm">選択した箇所に表示される小さな「Explainer」アイコン、または右クリックメニューから「Explainerで解説」を選びます。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B9BD5] text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">解説を確認・深掘り</h3>
                  <p className="text-sm">サイドパネルに解説が表示されます。さらに詳しく知りたい場合は、追加で質問することも可能です。</p>
                </div>
              </div>
            </div>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              目的別に活用するプロンプト例
            </h2>
            <p className="mb-4">Explainerのサイドパネルで、さらにこんな風に指示（プロンプト）を入力すると、より自分に合った解説が得られます。</p>
            
            <PromptBlock
              title="「これ何？」プロンプト"
              prompt="「この専門用語を、中学生でもわかるように、日常的な例え話を使って説明して」"
            />
            
            <PromptBlock
              title="「背景教えて」プロンプト"
              prompt="「この用語がこのスライド（この業界）で使われている背景を教えて。なぜ今、これが重要視されているの？」"
            />
            
            <PromptBlock
              title="「要するに？」プロンプト"
              prompt="「この複雑な図表が言いたいことを、箇条書き3行で、一番重要なポイントがわかるように要約して」"
            />
          </section>

          <section id="usage-tips" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              より効果的に使うためのコツ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              AIを「ただの辞書」として使うのではなく、「優秀なアシスタント」として活用するためのポイントです。
            </p>
            <PromptInfoCard type="tips" title="活用のアドバイス">
              <ul className="list-disc list-inside space-y-2">
                <li>**「自分の立場」を伝える**: 「私は新入社員なので、業界の常識も含めて教えて」のように伝えると、解説のレベルが調整されます。</li>
                <li>**「反対意見」を聞いてみる**: 「このグラフの主張に対して、考えられる懸念点や反論を2つ挙げて」と聞くと、資料をより多角的に理解できます。</li>
                <li>**「次のアクション」を相談する**: 「この内容を上司に報告する際、一番強調すべき数字はどこ？」と相談するのも有効です。</li>
              </ul>
            </PromptInfoCard>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              PowerPointの「Explainer」は、資料の読み込み時間を大幅に短縮し、理解の質を高めてくれる強力なツールです。
            </p>
            <p className="text-[#333333] leading-relaxed">
              「わからない」をそのままにせず、その場でAIに聞いて解決する習慣をつけることで、日々の業務効率は劇的に向上します。ぜひ、次回の資料確認から「Explainer」を相棒にしてみてください。
            </p>
          </section>

          <section id="news-sources" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ニュースソース
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-2">
              <li><a href="https://blogs.microsoft.com/blog/2026/04/24/introducing-powerpoint-explainer-ai-powered-slide-intelligence/" target="_blank" rel="noopener noreferrer">Introducing PowerPoint Explainer: AI-powered slide intelligence | Microsoft Blog</a></li>
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
