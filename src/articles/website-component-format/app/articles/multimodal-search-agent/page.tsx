"use client"

import { PageLayout } from "@/components/layout/PageLayout"
import { ArticleHeader } from "@/components/article/ArticleHeader"
import { ArticleContent } from "@/components/article/ArticleContent"
import { TableOfContents } from "@/components/article/TableOfContents"
import { PromptBlock } from "@/components/article/PromptBlock"
import { RelatedArticles } from "@/components/cta/RelatedArticles"
import { useSEO } from "@/hooks/useSEO"
import { useOGP } from "@/hooks/useOGP"
import { useStructuredData } from "@/hooks/useStructuredData"

export default function MultimodalSearchAgentPage() {
  const title = "【中級者向け】目に見えるものすべてが検索対象に！Google『マルチモーダル検索エージェント』活用ガイド"
  const description = "2026年5月28日、Googleが公開した『マルチモーダル検索エージェント』を使いこなし、カメラ映像やスクリーンショットから複雑なタスクを自動完遂するプロンプト術を解説します。"
  const keywords = "Google, マルチモーダル検索, 検索エージェント, Gemini, ビジュアル検索, AI活用, プロンプト術, 2026年最新AI"
  const publishedDate = "2026-05-28T00:00:00Z"
  const modifiedDate = "2026-05-28T00:00:00Z"
  const url = "https://promptlist.jp/articles/multimodal-search-agent"
  const image = "https://promptlist.jp/images/multimodal-search-agent-eyecatch.jpg"

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
    { id: "overview", title: "概要" },
    { id: "multimodal-evolution", title: "マルチモーダル検索の進化" },
    { id: "visual-to-action", title: "視覚情報から実行へ" },
    { id: "context-auto-completion", title: "コンテキストの自動補完" },
    { id: "prompt-techniques", title: "視覚指示型プロンプト術" },
    { id: "privacy-security", title: "プライバシーとセキュリティ" },
    { id: "practical-examples", title: "実践的なプロンプト例" },
    { id: "use-cases", title: "活用シーン別ガイド" },
    { id: "summary", title: "まとめ" },
  ]

  const relatedArticles = [
    {
      title: "【中級者向け】検索は「調べる」から「任せる」へ！Googleの新機能『検索エージェント』活用プロンプト術",
      href: "/articles/google-search-agent",
    },
    {
      title: "【中級者向け】AIが自律的にタスクを完遂！次世代AIエージェント『Manus』活用ガイド",
      href: "/articles/manus-autonomous-agent",
    },
    {
      title: "【中級者向け】動画・音声・コードを同時解析！Google Gemini 2.0 Proの『マルチモーダル推論』活用プロンプト術",
      href: "/articles/gemini-2-pro-multimodal",
    },
  ]

  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ArticleHeader
          title={title}
          category="中級者向け"
          date="2026.05.28"
          tags={["Google", "マルチモーダル検索", "検索エージェント", "Gemini"]}
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <section id="overview" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                概要
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                2026年5月28日、Googleは「検索エージェント」の次なる進化として、テキストだけでなく動画やリアルの視覚情報をリアルタイムで解析し、実行まで繋げる「マルチモーダル検索エージェント」の一般公開を開始しました。カメラを向けるだけで「これの修理方法を調べて、必要な部品をAmazonでカートに入れて」といった複雑なタスクを完遂できるようになります。本記事では、この最新機能を使いこなし、日常のあらゆる課題を視覚的に解決するためのプロンプト術を解説します。
              </p>
            </section>

            <section id="multimodal-evolution" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                マルチモーダル検索の進化
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                従来の検索エージェントは、テキストクエリに基づいて情報を取得し、ユーザーに提示するという単一のモーダル（情報形式）に依存していました。しかし、マルチモーダル検索エージェントは、以下の複数の入力形式を同時に処理できます。
              </p>
              <ArticleContent
                content={[
                  "静止画像: スマートフォンのカメラで撮影した写真から、物体認識、テキスト抽出、シーン理解を実行",
                  "動画フレーム: リアルタイムビデオから複数フレームを解析し、時系列の変化を捉える",
                  "スクリーンショット: ウェブページやアプリの画面情報を読み込み、その内容に基づいた検索を実行",
                  "テキスト: 従来通りのテキストクエリも併用可能",
                ]}
              />
              <p className="text-[#333333] leading-relaxed mt-4">
                これらを組み合わせることで、「言葉では説明しづらい問題」をAIに直感的に伝えることが可能になりました。
              </p>
            </section>

            <section id="visual-to-action" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                視覚情報から実行へ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                マルチモーダル検索エージェントの最大の特徴は、「見たもの」から「実行」までを一気通貫で行える点です。従来は、検索結果を見つけた後、ユーザーが手動でその情報を活用していました。しかし、新しいエージェントは、検索結果に基づいて自動的にアクションを実行します。
              </p>
              <ArticleContent
                content={[
                  "商品の型番を認識 → 最安値を検索 → Amazonのカートに追加",
                  "レシピの写真を見る → 材料を抽出 → 近所のスーパーで在庫確認 → 配送手配",
                  "壊れた家電を撮影 → 故障原因を推測 → 修理ガイドを検索 → 必要な工具をリスト化",
                ]}
              />
            </section>

            <section id="context-auto-completion" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                コンテキストの自動補完
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                マルチモーダル検索エージェントは、ユーザーが明示的に指示しなくても、周囲の状況を読み取り、適切なコンテキストを自動補完します。
              </p>
              <ArticleContent
                content={[
                  "位置情報: カメラが捉えた風景から現在地を推測し、近所の情報を優先表示",
                  "時間帯: 朝・昼・夜などの時間帯を認識し、その時間に適した提案を実行",
                  "ユーザーの過去の行動: 以前検索した内容や購入履歴から、関連性の高い情報を優先",
                  "デバイスの状態: バッテリー残量、ネットワーク速度などを考慮した最適な処理",
                ]}
              />
            </section>

            <section id="prompt-techniques" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                視覚指示型プロンプト術
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                マルチモーダル検索エージェントを使いこなすには、従来のテキストプロンプトとは異なる「視覚指示型プロンプト」の技法が必要です。
              </p>
              <ArticleContent
                content={[
                  "明確な対象物: 「これ」「ここ」など、カメラが捉えた具体的な対象を指す",
                  "複数ステップの指示: 「調べて → 比較して → 購入して」のように、連続したアクションを指定",
                  "制約条件の明示: 「予算5万円以内」「配送は明日まで」など、実行時の条件を明確に",
                  "期待される成果物: 「リスト形式で」「表にして」など、出力形式を指定",
                ]}
              />
            </section>

            <section id="privacy-security" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                プライバシーとセキュリティ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                視覚情報をエージェントに渡す際には、プライバシーとセキュリティに注意が必要です。
              </p>
              <ArticleContent
                content={[
                  "個人情報の除外: 撮影前に、住所や名前などの個人情報が映らないようにする",
                  "金融情報の保護: クレジットカード番号や銀行口座情報が映らないようにする",
                  "プライベート空間の撮影: 自宅内の撮影は、必要な部分のみに限定する",
                  "ローカル処理の活用: 可能な限り、デバイス上で処理を完結させる設定を選択",
                ]}
              />
            </section>

            <section id="practical-examples" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                実践的なプロンプト例
              </h2>
              <PromptBlock
                title="家電修理ガイド作成"
                prompt="（壊れた家電にカメラを向けて）この型番を特定して、故障原因として考えられるものを3つ挙げて。修理に必要な工具セットが手元にないなら、最短で届くものをピックアップして"
              />
              <PromptBlock
                title="冷蔵庫の中身から夕食提案"
                prompt="（冷蔵庫の中身を映しながら）これらの材料で、15分で作れる低糖質な夕食レシピを提案して。足りない調味料があれば、買い物リストに追加しておいて"
              />
              <PromptBlock
                title="イベント予約の自動化"
                prompt="（街中の看板を見せて）このイベントのチケット予約サイトを探して、私のカレンダーの空き時間と照らし合わせて最適な時間を提案して"
              />
              <PromptBlock
                title="商品比較と購入"
                prompt="（スマートフォンで商品の箱を撮影して）この商品の型番から、他社の同等品を3つ見つけて、価格と機能を比較表にして。一番コスパが良いものを、Amazonのカートに入れておいて"
              />
            </section>

            <section id="use-cases" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                活用シーン別ガイド
              </h2>
              
              <h3 className="text-lg font-bold text-[#333333] mb-3 mt-6">ショッピング・購買</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                店頭で見かけた商品をカメラで撮影し、「この商品の最安値を探して、ポイント還元率を考慮した最適な購入先を教えて」と指示すれば、エージェントが自動的に複数のサイトを比較し、最適な購入先を提案します。
              </p>

              <h3 className="text-lg font-bold text-[#333333] mb-3 mt-6">料理・栄養管理</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                冷蔵庫の中身や、食べたい料理の写真を撮影し、「これらで作れるヘルシーなレシピを3つ提案して、栄養成分表も付けて」と指示すれば、AIが栄養バランスを考慮したレシピを提案します。
              </p>

              <h3 className="text-lg font-bold text-[#333333] mb-3 mt-6">旅行・観光</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                観光地の看板や建物を撮影し、「このスポットの営業時間、入場料、周辺のホテルを調べて、今夜の宿泊予約を進めて」と指示すれば、エージェントが一連の予約を自動化します。
              </p>

              <h3 className="text-lg font-bold text-[#333333] mb-3 mt-6">家事・メンテナンス</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                壊れた家電や家具の写真を撮影し、「修理方法を調べて、必要な部品や工具をリスト化して、最速で届く業者を3つ見つけて」と指示すれば、修理の全プロセスがサポートされます。
              </p>

              <h3 className="text-lg font-bold text-[#333333] mb-3 mt-6">ビジネス・事務作業</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                会議資料やホワイトボードの写真を撮影し、「この内容をMarkdown形式でまとめて、関連する業界ニュースを3件追加して、Slackに投稿して」と指示すれば、事務作業が自動化されます。
              </p>
            </section>

            <section id="summary" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                まとめ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Google「マルチモーダル検索エージェント」は、AIとの対話方式を根本から変える技術です。テキストで説明しづらい「目の前の問題」をカメラで示すだけで、AIが自動的に解決策を見つけ、実行してくれる世界が現実になりました。
              </p>
              <p className="text-[#333333] leading-relaxed mb-4">
                この技術を使いこなすポイントは、以下の3つです。
              </p>
              <ArticleContent
                content={[
                  "視覚情報を活用する: テキストだけでなく、カメラやスクリーンショットを積極的に活用",
                  "複数ステップを指示する: 「調べて → 比較して → 購入して」のように、連続したアクションを明確に指定",
                  "制約条件を明示する: 予算、時間、品質など、実行時の条件を具体的に伝える",
                ]}
              />
              <p className="text-[#333333] leading-relaxed mt-4">
                日常のあらゆる場面で、このマルチモーダル検索エージェントを活用することで、あなたの生産性は飛躍的に向上するでしょう。まずは、身近なシーンから試してみてください。
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
              <TableOfContents items={tocItems} />
            </div>
          </aside>
        </div>
      </article>
    </PageLayout>
  )
}
