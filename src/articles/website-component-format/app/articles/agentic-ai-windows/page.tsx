import { PageLayout } from "@/components/layout/PageLayout"
import { ArticleHeader } from "@/components/article/ArticleHeader"
import { ArticleContent } from "@/components/article/ArticleContent"
import { TableOfContents } from "@/components/article/TableOfContents"
import { PromptBlock } from "@/components/article/PromptBlock"
import { RelatedArticles } from "@/components/cta/RelatedArticles"
import { useSEO } from "@/hooks/useSEO"
import { useOGP } from "@/hooks/useOGP"
import { useStructuredData } from "@/hooks/useStructuredData"

export default function AgenticAiWindowsPage() {
  const title = "【中級者向け】WindowsをAIエージェントが操作する！Build 2026発表の『Agentic AI for Windows』とMCP活用ガイド"
  const description = "2026年5月末に開催されたMicrosoft Build 2026にて発表された『Agentic AI for Windows』とModel Context Protocol (MCP) を活用し、Windows環境でAIエージェントを最大限に使いこなすための中級者向けガイドを解説します。"
  const keywords = "Agentic AI for Windows, MCP, AIエージェント, Windows, Build 2026, 業務自動化, プロンプト術"
  const publishedDate = "2026-06-01T00:00:00Z"
  const modifiedDate = "2026-06-01T00:00:00Z"
  const url = "https://promptlist.jp/articles/agentic-ai-windows"
  const image = "https://promptlist.jp/images/agentic-ai-windows-eyecatch.jpg"

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
    { id: "agentic-ai-for-windows", title: "Agentic AI for Windowsの正体" },
    { id: "mcp-utilization", title: "MCP（Model Context Protocol）の活用" },
    { id: "autonomous-workflow", title: "自律型ワークフローの構築" },
    { id: "security-governance", title: "セキュリティとガバナンス" },
    { id: "prompt-examples", title: "プロンプト例" },
    { id: "related-articles", title: "関連記事" },
  ]

  const relatedArticles = [
    {
      title: "【中級者向け】AIが自律的にタスクを完遂！次世代AIエージェント『Manus』活用ガイド",
      href: "/articles/manus-autonomous-agent",
    },
    {
      title: "【中級者向け】AIエージェントで業務を自動化！「自律型ワークフロー」構築プロンプト術",
      href: "/articles/ai-agent-workflow",
    },
    {
      title: "【初心者向け】画面上の「これ」をAIが即解決！Windows 11の新機能『Click to Do』活用プロンプト術",
      href: "/articles/windows-click-to-do-beginner",
    },
  ]

  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ArticleHeader
          title={title}
          category="中級者向け"
          date="2026.06.01"
          tags={["Windows", "AIエージェント", "MCP", "自動化"]}
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <section id="overview" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                概要
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                2026年5月末に開催されたMicrosoft Build 2026にて、Windows OSとAIエージェントの融合が決定的なものとなりました。新機能『Agentic AI for Windows』は、AIが単なるチャット相手ではなく、OSレベルでアプリ操作やファイル管理を自律的に行うためのフレームワークです。本記事では、Model Context Protocol (MCP) を活用して、Windows固有の環境でAIエージェントを最大限に使いこなすための中級者向けガイドを解説します。
              </p>
            </section>

            <section id="target" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                ターゲット
              </h2>
              <ArticleContent
                content={[
                  "Windows環境での業務効率化を極めたい中級ユーザー",
                  "AIエージェントを自作、または高度にカスタマイズしたい開発者",
                  "最新のMicrosoft Build 2026の技術を実務に取り入れたいビジネスパーソン",
                ]}
              />
            </section>

            <section id="article-points" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                記事のポイント
              </h2>
              <ArticleContent
                content={[
                  "Agentic AI for Windowsの正体: OSのAPIと直接対話するAIエージェントの仕組みと、従来のRPAとの違い。",
                  "MCP（Model Context Protocol）の活用: ローカルファイルや特定のWindowsアプリのコンテキストをAIに正しく伝えるための設定術。",
                  "自律型ワークフローの構築: 「特定のメールを受信したら、関連するExcelを開き、データを抽出してPowerPoint資料を更新する」といった複雑なタスクの自動化。",
                  "セキュリティとガバナンス: AIにOS操作を許可する際のリスク管理と、権限設定のベストプラクティス。",
                ]}
              />
            </section>

            <section id="agentic-ai-for-windows" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                Agentic AI for Windowsの正体
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                『Agentic AI for Windows』は、AIがWindows OSのAPIと直接対話することで、アプリケーションの起動、ファイル操作、設定変更など、OSレベルでの広範な操作を自律的に実行できるフレームワークです。従来のRPA（Robotic Process Automation）が事前に定義されたシナリオを忠実に実行するのに対し、Agentic AIはユーザーの意図を解釈し、状況に応じて最適な操作を自律的に判断・実行する点で大きく異なります。これにより、より複雑で動的なタスクの自動化が可能になります。
              </p>
            </section>

            <section id="mcp-utilization" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                MCP（Model Context Protocol）の活用
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Model Context Protocol (MCP) は、AIエージェントがWindows環境のコンテキストを正確に理解し、利用するための鍵となります。MCPを適切に設定することで、AIはローカルファイルの内容、特定のアプリケーションの状態、ユーザーの操作履歴などをリアルタイムで取得・分析し、より精度の高い判断を下すことができます。例えば、特定のフォルダ内のドキュメント群をAIに認識させ、それらを基にした資料作成を指示する際に、MCPが重要な役割を果たします。
              </p>
            </section>

            <section id="autonomous-workflow" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                自律型ワークフローの構築
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Agentic AI for WindowsとMCPを組み合わせることで、以下のような複雑な自律型ワークフローを構築できます。
              </p>
              <ArticleContent
                content={[
                  "特定のキーワードを含むメールを受信したら、関連するExcelファイルを開き、最新データを抽出してPowerPoint資料の該当箇所を自動更新する。",
                  "顧客管理システムから特定の条件に合致する顧客リストを抽出し、その顧客にパーソナライズされたメールを自動生成・送信する。",
                  "Webサイトのアクセスログを定期的に分析し、異常を検知した際に自動でレポートを作成し、担当者に通知する。",
                ]}
              />
              <p className="text-[#333333] leading-relaxed mb-4 mt-4">
                これらのワークフローは、AIが状況を判断し、必要なツール（Excel, PowerPoint, Outlook, Webブラウザなど）を自律的に操作することで実現されます。
              </p>
            </section>

            <section id="security-governance" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                セキュリティとガバナンス
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                AIにOS操作を許可する際には、セキュリティとガバナンスが極めて重要になります。以下の点に留意し、ベストプラクティスを適用することが不可欠です。
              </p>
              <ArticleContent
                content={[
                  "**最小権限の原則**: AIエージェントには、タスク遂行に必要な最小限の権限のみを付与する。",
                  "**サンドボックス環境**: 重要なシステムやデータから隔離されたサンドボックス環境でAIエージェントを動作させる。",
                  "**操作ログの監視**: AIエージェントのすべての操作を詳細にログに記録し、異常な挙動がないかリアルタイムで監視する。",
                  "**承認ワークフロー**: 機密性の高い操作や外部システムへのアクセスには、人間の承認を必須とするワークフローを導入する。",
                ]}
              />
            </section>

            <section id="prompt-examples" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                プロンプト例
              </h2>
              <PromptBlock
                title="データ抽出と資料作成の自動化"
                prompt="WindowsのMCPサーバーを介して、デスクトップ上の『2026年度予算』フォルダ内にあるすべてのPDFから数値を抽出し、指定のExcelシートに集計して。完了後、変化率をグラフ化してデスクトップに保存して。"
              />
              <PromptBlock
                title="コード生成とシステム監視エージェントの作成"
                prompt="現在開いているVisual Studio Codeのプロジェクト構造を解析し、Windows APIを利用したファイル監視エージェントのスケルトンコードを生成して。MCP経由でシステムのイベントログも参照できるようにして。"
              />
              <PromptBlock
                title="画像ファイルの自動整理とメタデータ付与"
                prompt="エクスプローラーで選択している複数の画像ファイルに対して、ファイル名から内容を推測して適切なタグをメタデータに書き込み、月別のフォルダに自動で振り分けて。"
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
