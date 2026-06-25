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
        { title: "【初心者向け】「あのサイト、何だっけ？」をAIが解決！Chromeの『AI履歴検索』活用術", href: "/articles/chrome-ai-history-search" },
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
  { id: "overview", text: "検索結果が「動く図解」に変わる", level: 2 as const },
  { id: "target-audience", text: "こんな人に読んでほしい", level: 2 as const },
  { id: "what-is-generative-ui", text: "ジェネレーティブUIって何？", level: 2 as const },
  { id: "key-points", text: "ジェネレーティブUIの3つのポイント", level: 2 as const },
  { id: "prompt-examples", text: "初心者が今日から使えるプロンプト例", level: 2 as const },
  { id: "use-cases", text: "こんなシーンで活躍する", level: 2 as const },
  { id: "news-sources", text: "ニュースソース", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "【初心者向け】言葉が「動く図解」に！Geminiの『シミュレーター生成』プロンプト術",
    description: "AIが複雑な仕組みを視覚的・動的に解説する「シミュレーター生成」機能で、難しい概念も一目瞭然。",
    href: "/articles/gemini-dynamic-visualizer",
  },
  {
    title: "【初心者向け】Google ドライブが賢くなった！新機能『AI概要（AI Overviews）』で大量のファイルから答えを即座に見つけるプロンプト術",
    description: "複数のドキュメントから必要な情報をAIが自動抽出。ファイル管理がぐっと楽になります。",
    href: "/articles/google-drive-ai-overview",
  },
  {
    title: "【初心者向け】検索ボックスが「相談窓口」に！Googleの新しい『AI検索窓』でやりたいことを伝えるプロンプト術",
    description: "キーワード検索から会話型検索へ。Google検索の新しい使い方を完全ガイド。",
    href: "/articles/google-search-box-beginner",
  },
]

export default function GoogleGenerativeUISimulationsPage() {
  const title = "【初心者向け】言葉が「動くマニュアル」に変身！Google検索の『ジェネレーティブUI』活用プロンプト術"
  const description = "2026年6月、Google I/Oで発表されたジェネレーティブUIは、検索結果を「文字と静止画」から「インタラクティブな図解・シミュレーション」へ進化させます。複雑な仕組みや手順を、AIが自分専用の動く図解で説明してくれる新体験を初心者向けに解説。"
  const keywords = "Google, ジェネレーティブUI, 検索, シミュレーション, 図解, プロンプト, 初心者, 2026年最新AI"
  const url = typeof window !== 'undefined' ? window.location.href : "https://promptlist.jp/articles/google-generative-ui-simulations"
  const image = "/images/placeholder.jpg"

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
    datePublished: "2026-06-25T00:00:00Z",
    dateModified: "2026-06-25T00:00:00Z",
    image,
    url,
  })

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年6月25日"
          updatedAt="2026年6月25日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="overview" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              検索結果が「動く図解」に変わる
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年6月、Google I/Oで発表された「ジェネレーティブUI（生成型ユーザーインターフェース）」は、Google検索の検索結果を根本から変えようとしています。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              これまでの検索結果は「テキストと静止画」でした。しかし、ジェネレーティブUIは、あなたの質問に対してAIが「その場でカスタムレイアウトを生成」し、インタラクティブな画像、表、グラフ、さらには動的なシミュレーションを組み合わせた「自分専用の図解」を作り出します。
            </p>
            <p className="text-[#333333] leading-relaxed">
              「機械式腕時計の仕組みって何？」と検索すれば、文字説明ではなく、歯車が動く様子を見ながら理解できる。「宇宙物理学の概念」を知りたければ、AIが視覚的・動的に解説してくれる。そんな未来がもう始まっています。
            </p>
          </section>

          <section id="target-audience" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              こんな人に読んでほしい
            </h2>
            <ul className="list-disc list-inside mb-4 text-[#333333] space-y-2">
              <li>ネット検索で「文字ばかり」で理解が進まないと感じている人</li>
              <li>「どうやって動くの？」という素朴な疑問を、AIに図解させたい人</li>
              <li>複雑な手順や仕組みを、アニメーションのような動的な説明で学びたい人</li>
              <li>PCのCopilotやChatGPTは難しいが、Google検索なら使い慣れているというIT初心者</li>
            </ul>
          </section>

          <section id="what-is-generative-ui" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ジェネレーティブUIって何？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              ジェネレーティブUI（生成型ユーザーインターフェース）とは、AIが「その場で」ユーザーの質問に合わせたカスタムレイアウトを生成する技術です。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              従来の検索結果は「決まったテンプレート」でした。でも、ジェネレーティブUIは違います。あなたの質問を理解したAIが、その質問に最適な「図解」「シミュレーション」「表」「グラフ」を組み合わせて、その場で新しいレイアウトを作り出すのです。
            </p>
            <p className="text-[#333333] leading-relaxed">
              つまり、「検索結果」ではなく、「あなた専用のインタラクティブなマニュアル」がその場で生成されるということ。これが、ジェネレーティブUIの本質です。
            </p>
          </section>

          <section id="key-points" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ジェネレーティブUIの3つのポイント
            </h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#333333] mb-3">1. 「見せて」と言うだけで図解が生成される</h3>
              <p className="text-[#333333] leading-relaxed">
                「仕組みを見せて」「断面図で説明して」「ステップバイステップで動かして」といった動詞を使うだけで、AIが自動的に視覚的な説明を生成します。文字で説明を読む必要がなくなるのです。
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#333333] mb-3">2. 初心者向けの視点で自動調整される</h3>
              <p className="text-[#333333] leading-relaxed">
                「初心者にも分かるように」と指定すれば、AIが難しい用語を避け、シンプルな図解を生成します。あなたのレベルに合わせた説明が自動で作られるのです。
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#333333] mb-3">3. 複雑な仕組みも「段階的に」理解できる</h3>
              <p className="text-[#333333] leading-relaxed">
                「アニメーションのように段階的に説明して」と指定することで、複雑な現象を「ステップ1→ステップ2→ステップ3」と順を追って視覚的に理解できます。
              </p>
            </div>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者が今日から使えるプロンプト例
            </h2>
            <p className="mb-4">
              難しく考える必要はありません。「見せて」「動かして」「説明して」といった動詞と、「初心者向け」という指定を組み合わせるだけで、AIが最適な図解を生成してくれます。
            </p>
            
            <PromptBlock
              title="仕組みの理解"
              prompt="スマートフォンのカメラが写真を撮る仕組みを、初心者にも分かるように動く図解で見せて。光がどう入ってきて、どうやってデータになるのか、段階的に説明して"
            />
            
            <PromptBlock
              title="手順の学習"
              prompt="パンを焼くときに、生地がどう膨らむのかを、アニメーションのように段階的に見せて。初心者向けで、難しい用語は使わないで"
            />
            
            <PromptBlock
              title="複雑な概念の理解"
              prompt="地球が自転・公転する仕組みを、太陽系全体の図で見せて。月の満ち欠けがなぜ起こるのかも、シミュレーションで動かして説明して"
            />

            <PromptBlock
              title="医学・科学の理解"
              prompt="人間の血液循環の仕組みを、心臓からの流れを追いながら、色分けされた図解で見せて。酸素がどう運ばれるのか、初心者にも分かるように説明して"
            />
          </section>

          <section id="use-cases" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              こんなシーンで活躍する
            </h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-bold text-[#333333] mb-2">📚 学習・勉強</h3>
              <p className="text-[#333333] leading-relaxed">
                学校の授業で習う「仕組み」や「現象」を、ジェネレーティブUIで動く図解として学べば、教科書を読むだけより格段に理解が深まります。
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bold text-[#333333] mb-2">🔧 DIY・ものづくり</h3>
              <p className="text-[#333333] leading-relaxed">
                家具の組み立てや機械の修理方法を検索すれば、AIが「この部品がこう動く」という動く図解を生成。説明書より分かりやすいかもしれません。
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bold text-[#333333] mb-2">🍳 料理・調理</h3>
              <p className="text-[#333333] leading-relaxed">
                「このソースの乳化の仕組みを見せて」と検索すれば、油と水がどう混ざるのかを視覚的に理解できます。料理の「なぜ？」が解ける。
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bold text-[#333333] mb-2">🏥 健康・医学</h3>
              <p className="text-[#333333] leading-relaxed">
                体の仕組みや病気の原因を検索すれば、医学的に正確でありながら、初心者にも分かる動く図解が生成されます。
              </p>
            </div>
          </section>

          <section id="news-sources" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ニュースソース
            </h2>
            <ul className="list-disc list-inside mb-4 text-[#333333] space-y-2">
              <li><a href="https://blog.google/products-and-platforms/products/search/search-io-2026/" target="_blank" rel="noopener noreferrer">A new era for AI Search - Google Blog</a> (2026/05/19)</li>
              <li><a href="https://techcrunch.com/2026/05/19/google-search-reimagined-gemini/" target="_blank" rel="noopener noreferrer">Google I/O 2026: Search reimagined with Gemini 3.5 Flash</a></li>
              <li><a href="https://www.itmedia.co.jp/news/articles/2605/20/google-search-update.html" target="_blank" rel="noopener noreferrer">Googleの検索窓が25年ぶりに進化、AIが質問の意図を先読み</a></li>
            </ul>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Google検索の「ジェネレーティブUI」は、検索という行為を根本から変える可能性を秘めています。これまで「文字を読んで理解する」という当たり前が、「動く図解を見て理解する」へと進化するのです。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              複雑な仕組みや手順も、AIが「あなた専用の図解」を生成してくれるので、難しい概念も一目瞭然。まずは、あなたが「なぜ？」と思ったことを、「〇〇の仕組みを見せて」と検索してみてください。
            </p>
            <p className="text-[#333333] leading-relaxed">
              きっと、検索の新しい世界が開けるはずです。
            </p>
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
