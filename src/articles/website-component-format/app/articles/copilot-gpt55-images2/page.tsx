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

export default function CopilotGPT55Images2Page() {
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
    { id: "intro", text: "Copilotがさらに進化！最新AIモデルの導入", level: 2 as const },
    { id: "gpt55-thinking", text: "GPT-5.5 Thinking：AIが「考えてから答える」", level: 2 as const },
    { id: "images2", text: "ChatGPT Images 2.0：画像生成がより高品質に", level: 2 as const },
    { id: "work-iq", text: "Work IQ連携：業務データ背景の「丸投げ」プロンプト", level: 2 as const },
    { id: "prompt-examples", text: "今すぐ使えるプロンプト例", level: 2 as const },
    { id: "usage-tips", text: "初心者向け活用のコツ", level: 2 as const },
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
      title: "【初心者向け】Excelの「面倒な作業」をAIが自動完結！Copilotの『エンドツーエンド業務自動化』プロンプト術",
      description: "Excelのデータ処理をCopilotで自動化し、複雑な集計や分析を効率化する方法を紹介します。",
      href: "/articles/copilot-excel-automation",
    },
  ]

  // SEO設定
  const seoData = {
    title: "【初心者向け】Copilot進化！GPT-5.5 ThinkingとChatGPT Images 2.0活用術 | AIプロンプト活用ガイド",
    description: "Microsoft 365 Copilotに導入された最新AIモデル「GPT-5.5 Thinking」と「ChatGPT Images 2.0」を徹底解説。初心者がより正確な回答を得たり、高品質な画像を生成したりするための具体的なプロンプト例を紹介します。",
    keywords: "Copilot,GPT-5.5,Thinking,ChatGPT Images 2.0,AI,プロンプト,初心者,画像生成,業務効率化",
    url: "https://promptlist.com/articles/copilot-gpt55-images2",
    datePublished: "2026-04-28T00:00:00Z",
    dateModified: "2026-04-28T00:00:00Z",
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
          title="【初心者向け】Copilotがさらに進化！最新AI「GPT-5.5 Thinking」と「ChatGPT Images 2.0」で変わる相談・画像生成術"
          createdAt="2026.04.28"
          eyecatchSrc="/placeholder.jpg"
        />

        <div className="mt-8">
          <TableOfContents headings={headings} />
        </div>

        <div className="mt-12 prose prose-blue max-w-none">
          <section id="intro" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Copilotがさらに進化！最新AIモデルの導入
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年4月28日、Microsoft 365 Copilotに待望のアップデートが実施されました。今回の進化の目玉は、最新の思考型モデル**「GPT-5.5 Thinking」**と、表現力が飛躍的に向上した**「ChatGPT Images 2.0」**の導入です。
            </p>
            <p className="text-[#333333] leading-relaxed">
              これまでのAIは「即座に答える」ことが得意でしたが、新しいCopilotは「じっくり考えてから答える」ことが可能になりました。これにより、初心者が陥りがちな「漠然とした質問」に対しても、AIが自ら不足情報を補い、驚くほど的確な回答を返してくれるようになります。
            </p>
          </section>

          <section id="gpt55-thinking" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              GPT-5.5 Thinking：AIが「考えてから答える」
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「GPT-5.5 Thinking」モードを有効にすると、AIは回答を出力する前に内部で「思考プロセス」を走らせます。
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <ul className="list-disc list-inside space-y-2 text-[#333333]">
                <li><strong>深い分析</strong>：複雑なビジネス課題や、複数の条件が絡む相談に強くなりました。</li>
                <li><strong>自己修正</strong>：回答を出す前にAI自身が論理的なミスがないかチェックします。</li>
                <li><strong>丁寧な解説</strong>：結論だけでなく「なぜその結論に至ったか」のプロセスも提示してくれます。</li>
              </ul>
            </div>
          </section>

          <section id="images2" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ChatGPT Images 2.0：画像生成がより高品質に
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              PowerPointのスライド作成や資料の挿絵に欠かせない画像生成機能も「ChatGPT Images 2.0」へと刷新されました。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              特筆すべきは、文字の描画精度の向上と、スタイルの「一貫性」です。一度生成した画像と同じタッチで別の画像を生成することが容易になり、資料全体のデザインを統一しやすくなりました。
            </p>
          </section>

          <section id="work-iq" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Work IQ連携：業務データ背景の「丸投げ」プロンプト
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              新しいCopilotは「Work IQ」を通じて、あなたが普段使っているWord、Excel、Outlookなどのデータとより深く連携します。
            </p>
            <p className="text-[#333333] leading-relaxed">
              これにより、「あのプロジェクトの進捗をまとめて」といった、以前なら詳細な説明が必要だった指示も、AIが背景データを自ら参照して処理してくれるようになります。
            </p>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              今すぐ使えるプロンプト例
            </h2>
            <p className="mb-4">新機能を最大限に引き出すためのプロンプト例です。コピーして試してみてください。</p>
            
            <PromptBlock
              title="「GPT-5.5 Thinking」での深い分析"
              prompt="「GPT-5.5 Thinking」を有効にして、「今月の売上報告書を作成するために、関連するExcelデータから主要なトピックを3つ挙げて、それぞれの分析理由もじっくり考えて教えて」"
            />
            
            <PromptBlock
              title="「ChatGPT Images 2.0」での画像生成"
              prompt="「ChatGPT Images 2.0」で、「スライドの背景に使う、清潔感のあるオフィスのイラストを、青色を基調とした優しいタッチで作成して」"
            />
          </section>

          <section id="usage-tips" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者向け活用のコツ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              最新機能を使いこなすためのちょっとしたアドバイスです。
            </p>
            <PromptInfoCard type="tips" title="活用のポイント">
              <ul className="list-disc list-inside space-y-2">
                <li>**「思考を促す」キーワードを入れる**: 「ステップバイステップで考えて」「多角的な視点から検討して」と添えるだけで、Thinkingモデルの真価が発揮されます。</li>
                <li>**画像生成は「修正」を活用する**: 生成された画像に対して「もっと明るくして」「右側に人を追加して」と対話形式で修正を繰り返すのが、Images 2.0の賢い使い方です。</li>
                <li>**データの場所を明示する**: 「デスクトップにある『予算案.xlsx』を元にして」のように、Work IQが参照しやすいようファイル名を具体的に伝えると精度が上がります。</li>
              </ul>
            </PromptInfoCard>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              今回のアップデートにより、Copilotは「速いAI」から「賢いパートナー」へと進化しました。
            </p>
            <p className="text-[#333333] leading-relaxed">
              「GPT-5.5 Thinking」と「ChatGPT Images 2.0」を使いこなすことで、資料作成や意思決定の質が一段階上がります。まずは簡単な相談から、新しいAIの「思考」を体験してみてください。
            </p>
          </section>

          <section id="news-sources" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ニュースソース
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-2">
              <li><a href="https://forest.watch.impress.co.jp/docs/news/2105127.html" target="_blank" rel="noopener noreferrer">「Microsoft 365 Copilot」に「GPT‑5.5 Thinking」「ChatGPT Images 2.0」が導入 - 窓の杜</a></li>
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
