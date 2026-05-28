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

export default function GoogleMultimodalSearchAgentPage() {
  const title = "【中級者向け】目に見えるものすべてが検索対象に！Google『マルチモーダル検索エージェント』活用ガイド"
  const description = "2026年5月28日、Googleが発表したマルチモーダル検索エージェント。テキストだけでなく動画やリアルの視覚情報をリアルタイムで解析し、実行まで繋げる最新機能の活用術を解説します。"
  const keywords = "Google, マルチモーダル検索, 検索エージェント, 視覚AI, プロンプト術, 業務自動化, 2026年最新AI"
  const publishedDate = "2026-05-28T00:00:00Z"
  const modifiedDate = "2026-05-28T00:00:00Z"
  const url = "https://promptlist.jp/articles/google-multimodal-search-agent"
  const image = "https://promptlist.jp/images/google-multimodal-search-agent-eyecatch.jpg"

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
    { id: "multimodal-revolution", title: "マルチモーダル検索の真価" },
    { id: "context-understanding", title: "コンテキストの自動補完" },
    { id: "visual-prompt-techniques", title: "視覚指示型プロンプト" },
    { id: "privacy-security", title: "プライバシーとセキュリティ" },
    { id: "prompt-examples", title: "実践的なプロンプト例" },
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
          tags={["Google", "マルチモーダル検索", "AIエージェント", "自動化"]}
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

            <section id="multimodal-revolution" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                マルチモーダル検索の真価
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                これまでの検索は「テキストを入力」→「結果を見る」という一方向的なプロセスでした。マルチモーダル検索エージェントは、この概念を根本から変えます。スマートフォンのカメラやウェアラブルデバイスから送られてくる「リアルタイム映像」を、AIが常に分析し、必要に応じて自動的にアクションを起こすようになるのです。
              </p>
              <ArticleContent
                content={[
                  "静止画認識から「動画解析」へ：複数フレームの変化を追跡し、より正確な理解を実現",
                  "リアルタイム処理：遅延なく、その場で判断・実行できる速度を実現",
                  "複数入力の統合：カメラ映像＋音声＋テキスト指示を同時に処理",
                ]}
              />
            </section>

            <section id="context-understanding" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                コンテキストの自動補完
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                マルチモーダル検索エージェントの最大の利点は、ユーザーが言葉にしなくても「周囲の状況」をAIが自動的に読み取ることです。例えば、冷蔵庫の中身を映しながら「夕食を作りたい」と言えば、AIは自動的に「現在の時刻」「季節」「栄養バランス」「調理時間」などを考慮に入れて、最適なレシピを提案します。
              </p>
              <ArticleContent
                content={[
                  "時間・場所の自動検出：GPS、時刻データから「今、ここで何ができるか」を判断",
                  "ユーザープロファイルの活用：過去の検索履歴や購入履歴から個人の嗜好を理解",
                  "環境情報の統合：天気、交通情報、イベント情報など、外部データとの連携",
                ]}
              />
            </section>

            <section id="visual-prompt-techniques" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                視覚指示型プロンプト
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                マルチモーダル検索エージェントを使いこなす鍵は、「見せて指示する」という新しいプロンプト方法にあります。従来のテキスト入力ではなく、カメラ映像やスクリーンショットを起点に、具体的なアクションを指示することで、より正確で迅速な結果を得られます。
              </p>
              <ArticleContent
                content={[
                  "対象物を明確に映す：カメラの焦点を対象物に合わせ、周囲の情報も含める",
                  "複数角度からの撮影：必要に応じて、異なる角度から対象物を映して、より詳細な情報を提供",
                  "指示は「結果」を中心に：手順ではなく「最終的に何をしてほしいか」を明確に伝える",
                ]}
              />
            </section>

            <section id="privacy-security" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                プライバシーとセキュリティ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                視覚情報をエージェントに渡すことで、個人情報が漏洩するリスクが高まります。安全に利用するためには、適切な設定とリテラシーが必要です。
              </p>
              <ArticleContent
                content={[
                  "プライベートモード：家族の顔や個人情報が映らないよう、事前にマスキング設定を行う",
                  "データ保持ポリシー：Googleがどの程度の期間、映像データを保持するかを確認し、必要に応じて自動削除を設定",
                  "権限管理：マルチモーダル検索エージェントが、どのアプリやサービスと連携できるかを制限",
                ]}
              />
            </section>

            <section id="prompt-examples" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                実践的なプロンプト例
              </h2>
              <PromptBlock
                title="家電の修理ガイド作成"
                prompt="（壊れた家電にカメラを向けて）この型番を特定して、故障原因として考えられるものを3つ挙げて。修理に必要な工具セットが手元にないなら、最短で届くものをピックアップして"
              />
              <PromptBlock
                title="冷蔵庫の中身から夕食レシピ提案"
                prompt="（冷蔵庫の中身を映しながら）これらの材料で、15分で作れる低糖質な夕食レシピを提案して。足りない調味料があれば、買い物リストに追加しておいて"
              />
              <PromptBlock
                title="イベント情報の自動検索と予約"
                prompt="（街中の看板を見せて）このイベントのチケット予約サイトを探して、私のカレンダーの空き時間と照らし合わせて最適な時間を提案して"
              />
            </section>

            <section id="summary" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                まとめ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Google「マルチモーダル検索エージェント」は、検索の概念を「情報を探す」から「AIに任せる」へと大きくシフトさせます。スマートフォンのカメラを向けるだけで、複雑なタスクが完遂される時代が到来しました。プライバシーに配慮しながら、この新しい技術を使いこなすことで、日常生活の効率は飛躍的に向上するでしょう。まずは、身近な課題からマルチモーダル検索エージェントに任せてみることで、その可能性を実感してみてください。
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
