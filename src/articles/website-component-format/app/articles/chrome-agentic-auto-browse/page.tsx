import { PageLayout } from "@/components/layout/PageLayout"
import { ArticleHeader } from "@/components/article/ArticleHeader"
import { ArticleContent } from "@/components/article/ArticleContent"
import { TableOfContents } from "@/components/article/TableOfContents"
import { PromptBlock } from "@/components/article/PromptBlock"
import { RelatedArticles } from "@/components/cta/RelatedArticles"
import { useSEO } from "@/hooks/useSEO"
import { useOGP } from "@/hooks/useOGP"
import { useStructuredData } from "@/hooks/useStructuredData"

export default function ChromeAgenticAutoBrowsePage() {
  const title = "【中級者向け】ブラウザが「勝手に操作」する時代へ！Chromeの新機能『Agentic Auto-browse』導入ガイド"
  const description = "2026年6月中旬、GoogleはChromeブラウザに革新的な「Agentic Auto-browse（エージェント型自動ブラウジング）」機能を順次ロールアウトすることを発表しました。これは単なる検索の要約ではなく、ユーザーの指示に基づいてAIがブラウザ内のボタン操作やフォーム入力、複数サイトを跨いだ予約・決済などを自律的に代行する機能です。本記事では、この「自律型ブラウザ」を使いこなし、日常のWebタスクを完全に自動化するための中級者向け活用術を解説します。"
  const keywords = "Chrome, Agentic Auto-browse, エージェント型自動ブラウジング, AI, ブラウザ自動化, プロンプト術, Google, 中級者向け, 2026年最新AI"
  const publishedDate = "2026-06-17T00:00:00Z"
  const modifiedDate = "2026-06-17T00:00:00Z"
  const url = "https://promptlist.jp/articles/chrome-agentic-auto-browse"
  const image = "https://promptlist.jp/images/chrome-auto-browse-eyecatch.jpg"

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
    { id: "auto-browse-mechanism", title: "Auto-browseの仕組みと「エージェント体験」" },
    { id: "goal-oriented-prompt", title: "「ゴール指定型」プロンプトの書き方" },
    { id: "personal-intelligence-integration", title: "Personal Intelligenceとの連携" },
    { id: "security-and-control", title: "セキュリティとコントロール" },
    { id: "prompt-examples", title: "プロンプト例" },
    { id: "summary", title: "まとめ" },
  ]

  const relatedArticles = [
    {
      title: "【初心者向け】もう「クリック」すら不要？ブラウザ操作AI『Copelf』でルーチンワークを自動化するプロンプト術",
      href: "/articles/copelf-browser-automation",
    },
    {
      title: "【中級者向け】AIが自律的にタスクを完遂！次世代AIエージェント『Manus』活用ガイド",
      href: "/articles/manus-autonomous-agent",
    },
    {
      title: "【初心者向け】もうプロンプトを打ち直さない！Chromeの『Skills』でAIを「自分専用」に育てる術",
      href: "/articles/chrome-gemini-skills",
    },
  ]

  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ArticleHeader
          title={title}
          category="中級者向け"
          date="2026.06.17"
          tags={["Chrome", "AIエージェント", "自動化", "ブラウザ"]}
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <section id="overview" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                概要
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                2026年6月中旬、GoogleはChromeブラウザに革新的な「Agentic Auto-browse（エージェント型自動ブラウジング）」機能を順次ロールアウトすることを発表しました。これは単なる検索の要約ではなく、ユーザーの指示に基づいてAIがブラウザ内のボタン操作やフォーム入力、複数サイトを跨いだ予約・決済などを自律的に代行する機能です。本記事では、この「自律型ブラウザ」を使いこなし、日常のWebタスクを完全に自動化するための中級者向け活用術を解説します。
              </p>
            </section>

            <section id="auto-browse-mechanism" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                Auto-browseの仕組みと「エージェント体験」
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                従来のオートフィル機能とは異なり、Agentic Auto-browseはAIがWebページのDOM（Document Object Model）要素を深く理解し、ユーザーの意図に基づいて自律的に操作を実行します。例えば、特定のボタンをクリックしたり、フォームに情報を入力したり、複数のページを横断して情報を収集・比較したりすることが可能です。これにより、ユーザーは「何をしたいか」というゴールを指示するだけで、AIが最適な手順を判断し、実行する「エージェント体験」が実現します。
              </p>
            </section>

            <section id="goal-oriented-prompt" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                「ゴール指定型」プロンプトの書き方
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Agentic Auto-browseを最大限に活用するためには、AIに具体的な「ゴール」を明確に伝えるプロンプトが重要です。単に「予約して」と指示するのではなく、「条件に合う最安のプランを選んで、確認画面まで進めて」のように、AIに判断を委ねる部分と、最終的なアクションを明確に指示するコツを掴むことが成功の鍵となります。
              </p>
              <ArticleContent
                content={[
                  "具体的な最終成果物や達成したい状態を定義する（例: 「予約を完了させて」「比較表をスプレッドシート形式で作成して」）",
                  "制約条件や優先順位を明確にする（例: 「予算15,000円以内」「東京駅から徒歩5分以内」「最新の価格情報」）",
                  "AIに判断を委ねる部分と、最終的な確認ステップを指示する（例: 「最安プランを選んで」「確認画面で待機」）",
                ]}
              />
            </section>

            <section id="personal-intelligence-integration" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                Personal Intelligenceとの連携
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Agentic Auto-browseは、GoogleのPersonal Intelligenceと深く連携します。これにより、GmailやGoogleカレンダー、Googleドライブなどの個人データに基づいて、ユーザーの予定や好み、過去の行動履歴を反映したパーソナライズされた自動化が可能になります。例えば、カレンダーの空き時間に合わせて最適な予約日時を提案したり、過去の購入履歴から好みの商品を優先的に探したりと、よりユーザーに寄り添ったブラウザ操作を実現します。
              </p>
            </section>

            <section id="security-and-control" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                セキュリティとコントロール
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                AIが自律的にブラウザを操作することに対し、セキュリティやプライバシーに関する懸念が生じるのは当然です。Googleは、意図しない操作を防ぐための「確認ステップ」の設定や、機密情報を扱う際のプロンプトの注意点など、ユーザーが常にコントロールできる仕組みを提供しています。例えば、決済や個人情報入力の前に必ずユーザーの承認を求める設定や、特定のサイトでの自動操作を制限する機能などが含まれます。ユーザーはこれらの設定を適切に管理することで、安全にAgentic Auto-browseを利用できます。
              </p>
            </section>

            <section id="prompt-examples" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                プロンプト例
              </h2>
              <PromptBlock
                title="出張ホテルの予約"
                prompt="来週の出張用に、東京駅から徒歩5分以内のホテルを予算15,000円以内で探して。Googleカレンダーの予定と被らない時間帯で、禁煙室を1泊予約（確認画面で待機）して"
              />
              <PromptBlock
                title="競合製品の価格調査とスプレッドシート化"
                prompt="競合他社3社の製品価格ページを巡回し、最新の価格表をスプレッドシート形式でまとめてサイドパネルに表示して。変化があった項目はハイライトして"
              />
              <PromptBlock
                title="ニュース記事の要約とメール下書き作成"
                prompt="このニュース記事の内容を要約し、要約文をGmailの下書きとして作成して。宛先はプロジェクトメンバー全員に設定して"
              />
            </section>

            <section id="summary" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                まとめ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                ChromeのAgentic Auto-browseは、ブラウザ操作の概念を根本から変える可能性を秘めています。AIがユーザーの意図を汲み取り、自律的にWebタスクを遂行することで、私たちは日常のルーチンワークから解放され、より創造的で戦略的な業務に集中できるようになります。本記事で紹介した活用術を参考に、ぜひこの革新的な機能を使いこなし、あなたのデジタルライフを次のレベルへと引き上げてください。
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
