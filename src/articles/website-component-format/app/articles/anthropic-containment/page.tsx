import { PageLayout } from "@/components/layout/PageLayout"
import { ArticleHeader } from "@/components/article/ArticleHeader"
import { ArticleContent } from "@/components/article/ArticleContent"
import { TableOfContents } from "@/components/article/TableOfContents"
import { PromptBlock } from "@/components/article/PromptBlock"
import { RelatedArticles } from "@/components/cta/RelatedArticles"
import { useSEO } from "@/hooks/useSEO"
import { useOGP } from "@/hooks/useOGP"
import { useStructuredData } from "@/hooks/useStructuredData"

export default function AnthropicContainmentPage() {
  const title = "【中級者向け】AIエージェントの「暴走」を防ぐ！Anthropicが公開した『エージェント封じ込め（Containment）』技術の活用術"
  const description = "2026年5月末、Anthropicが公開した『エージェント封じ込め（Containment）』技術を解説。AIエージェントを安全に運用するための「サンドボックス化」や「動的境界設定」の考え方と、プロンプトやシステム設計で実現する中級者向けの手法を解説します。"
  const keywords = "Anthropic, AIエージェント, Containment, エージェント封じ込め, AI安全性, サンドボックス, プロンプト術, セキュリティ"
  const publishedDate = "2026-06-01T00:00:00Z"
  const modifiedDate = "2026-06-01T00:00:00Z"
  const url = "https://promptlist.jp/articles/anthropic-containment"
  const image = "https://promptlist.jp/images/anthropic-containment-eyecatch.jpg"

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
    { id: "target", title: "ターゲット" },
    { id: "article-points", title: "記事のポイント" },
    { id: "three-pillars", title: "エージェント封じ込めの3本柱" },
    { id: "detect-runaway", title: "「暴走」の定義と検知" },
    { id: "secure-tool-use", title: "セキュアなツール利用の設計" },
    { id: "logical-boundary", title: "プロンプトによる論理的境界" },
    { id: "prompt-examples", title: "プロンプト例" },
    { id: "related-articles", title: "関連記事" },
  ]

  const relatedArticles = [
    {
      title: "【中級者向け】最先端AIの光と影！Anthropicの最新モデル『Claude Mythos』セキュリティ活用ガイド",
      href: "/articles/claude-mythos-security",
    },
    {
      title: "【中級者向け】AIエージェントで業務を自動化！「自律型ワークフロー」構築プロンプト術",
      href: "/articles/ai-agent-workflow",
    },
    {
      title: "【中級者向け】AIが自律的にタスクを完遂！次世代AIエージェント『Manus』活用ガイド",
      href: "/articles/manus-autonomous-agent",
    },
  ]

  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ArticleHeader
          title={title}
          category="中級者向け"
          date="2026.06.01"
          tags={["Anthropic", "AIエージェント", "安全性", "セキュリティ"]}
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <section id="overview" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                概要
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                AIエージェントが自律的に動くようになると、予期せぬ動作や「暴走」のリスクが現実味を帯びてきます。2026年5月末、Anthropicは最新モデルClaude Mythosの開発過程で得られた『エージェント封じ込め（Containment）』技術のホワイトペーパーを公開しました。本記事では、AIエージェントを安全に運用するために必要な「サンドボックス化」や「動的境界設定」の考え方と、それをプロンプトやシステム設計で実現する中級者向けの手法を解説します。
              </p>
            </section>

            <section id="target" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                ターゲット
              </h2>
              <ArticleContent
                content={[
                  "自律型AIエージェントを業務に導入しようとしているエンジニア・管理者",
                  "AIの安全性（AI Safety）と実用性の両立に悩む中級ユーザー",
                  "Anthropicの最新技術を自身のシステムに取り入れたい開発者",
                ]}
              />
            </section>

            <section id="article-points" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                記事のポイント
              </h2>
              <ArticleContent
                content={[
                  "エージェント封じ込めの3本柱: 「環境の隔離（Sandboxing）」「指示の階層化（Hierarchical Instructions）」「リアルタイム監視（Active Monitoring）」。",
                  "「暴走」の定義と検知: AIが本来の目的から逸脱した際のシグナルをどう捉え、どう停止（Kill Switch）させるか。",
                  "セキュアなツール利用の設計: AIに外部ツール（ブラウザ、コード実行等）を使わせる際の権限最小化の原則。",
                  "プロンプトによる論理的境界: システムプロンプトを用いて、AI自身の行動範囲を厳格に定義するテクニック。",
                ]}
              />
            </section>

            <section id="three-pillars" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                エージェント封じ込めの3本柱
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Anthropicが提唱するエージェント封じ込め技術は、以下の3つの柱で構成されます。
              </p>
              <ArticleContent
                content={[
                  "**環境の隔離（Sandboxing）**: AIエージェントを、システムの中核から隔離された安全な環境で動作させることで、予期せぬ挙動がシステム全体に影響を及ぼすリスクを最小限に抑えます。仮想環境やコンテナ技術の活用が有効です。",
                  "**指示の階層化（Hierarchical Instructions）**: AIエージェントに与える指示を階層的に構造化し、上位の指示が下位の指示の制約となるように設計します。これにより、AIが自己判断で逸脱した行動を取ることを防ぎます。",
                  "**リアルタイム監視（Active Monitoring）**: AIエージェントの行動を常に監視し、異常なパターンやセキュリティポリシー違反を検知した際に、自動的に介入・停止できるメカニズムを構築します。",
                ]}
              />
            </section>

            <section id="detect-runaway" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                「暴走」の定義と検知
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                AIエージェントの「暴走」とは、与えられた目的や制約から逸脱し、意図しない、あるいは有害な行動を取る状態を指します。これを検知するためには、以下のようなシグナルを監視することが重要です。
              </p>
              <ArticleContent
                content={[
                  "**リソース消費の異常**: CPU使用率、メモリ使用量、ネットワークトラフィックなどが急増する。",
                  "**予期せぬファイル操作**: 許可されていないディレクトリへのアクセス、ファイルの削除・改変。",
                  "**外部システムへの不正アクセス**: 認証情報なしでのAPIコール、未知のIPアドレスへの通信。",
                  "**ループ状態**: 同じタスクを無限に繰り返す、または進行しない。",
                ]}
              />
              <p className="text-[#333333] leading-relaxed mb-4 mt-4">
                これらのシグナルを検知した場合、速やかにAIエージェントの実行を停止する「Kill Switch」の導入が不可欠です。
              </p>
            </section>

            <section id="secure-tool-use" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                セキュアなツール利用の設計
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                AIエージェントが外部ツール（Webブラウザ、コードインタープリタ、APIなど）を利用する際は、**最小権限の原則**を徹底します。具体的には、以下の対策が考えられます。
              </p>
              <ArticleContent
                content={[
                  "**権限の細分化**: ツールごとにAIに与える権限を最小限に設定し、不要な操作を許可しない。",
                  "**一時的な権限付与**: 必要な時だけ一時的に権限を付与し、タスク完了後は速やかに解除する。",
                  "**承認プロセス**: 機密性の高いツール利用やデータアクセスには、人間の承認を挟む。",
                  "**ログと監査**: ツール利用の履歴を詳細に記録し、定期的に監査を行う。",
                ]}
              />
            </section>

            <section id="logical-boundary" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                プロンプトによる論理的境界
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                システムプロンプトは、AIエージェントの行動を制御する上で非常に強力な手段です。プロンプト内で明確な「論理的境界」を設定することで、AI自身の判断基準に安全性を組み込むことができます。
              </p>
              <ArticleContent
                content={[
                  "**行動範囲の明示**: 「あなたは〇〇のタスクのみを実行し、それ以外の行動は厳禁とする」のように、AIの役割と行動範囲を明確に定義する。",
                  "**禁止事項の明確化**: 「個人情報を含むファイルを外部に送信してはならない」「システム設定を変更してはならない」など、具体的な禁止事項を列挙する。",
                  "**報告義務の徹底**: 逸脱しそうな思考や行動を検知した場合、即座にユーザーに報告し、指示を仰ぐように義務付ける。",
                  "**自己評価と反省**: タスク完了後、自身の行動が制約に沿っていたかを自己評価させ、問題点があれば改善策を提案させる。",
                ]}
              />
            </section>

            <section id="prompt-examples" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                プロンプト例
              </h2>
              <PromptBlock
                title="サンドボックス環境での行動制約"
                prompt="あなたは以下のサンドボックス環境内でのみ行動を許可されています。ファイル操作は /tmp ディレクトリ内に限定し、外部ネットワークへのアクセスが必要な場合は必ず私の承認を得てください。このルールを逸脱しようとする思考プロセスが発生した場合は、即座に報告して停止してください。"
              />
              <PromptBlock
                title="監視用AIによるコード実行前チェック"
                prompt="エージェントが生成したコードを実行する前に、そのコードがシステムリソースを過度に消費したり、機密ファイルにアクセスしようとしていないか、第2の『監視用AI』としてチェックして。問題があれば実行をブロックして理由を説明して。"
              />
              <PromptBlock
                title="最小権限とセッション破棄のワークフロー"
                prompt="このタスクを完遂するために必要な最小限の権限セットを定義して。タスクが完了したら、付与されたすべてのセッション情報を破棄するワークフローを作成して。"
              />
            </section>

            <section id="related-articles" className="mb-12">
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
