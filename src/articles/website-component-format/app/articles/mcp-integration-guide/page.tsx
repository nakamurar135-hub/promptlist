
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

export default function McpIntegrationGuidePage() {
  const title = "【中級者向け】AIと1000以上のアプリを直結！最新「MCP（Model Context Protocol）」連携による自律型ワークフロー構築ガイド"
  const description = "2026年6月下旬、Jiteraやソフトバンク（AGENTIC STAR）などが相次いで発表した「MCP（Model Context Protocol）」連携機能を活用し、AIエージェントを実務に完全統合するためのガイドです。これまで手動で行っていた「AIの回答をコピペして他ツールに貼り付ける」作業をゼロにする、中級者必須の連携術を解説します。"
  const keywords = "MCP, Model Context Protocol, AIエージェント, 自律型ワークフロー, 業務自動化, Jitera, AGENTIC STAR, Claude Code, SaaS連携, プロンプト術"
  const publishedDate = "2026-06-27T00:00:00Z"
  const modifiedDate = "2026-06-27T00:00:00Z"
  const url = "https://promptlist.jp/articles/mcp-integration-guide"
  const image = "https://promptlist.jp/images/mcp-integration-guide-eyecatch.jpg"

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
    { id: "mcp-changes-ai-hands-and-feet", title: "MCPが変えるAIの「手足」" },
    { id: "mcp-integration-settings", title: "実戦！MCP連携設定" },
    { id: "context-integration-power", title: "「コンテキスト統合」の威力" },
    { id: "security-and-permission-management", title: "セキュリティと権限管理" },
    { id: "prompt-examples", title: "プロンプト例" },
    { id: "related-articles", title: "関連記事" },
  ]

  const relatedArticles = [
    {
      title: "【中級者向け】WindowsをAIエージェントが操作する！Build 2026発表の『Agentic AI for Windows』とMCP活用ガイド",
      href: "/articles/agentic-ai-windows",
    },
    {
      title: "【中級者向け】自分専用のAIツールをノーコードで！Claude Opus 4.7 & Claude Builder 活用ガイド",
      href: "/articles/claude-opus-47-builder",
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
          date="2026.06.27"
          tags={["MCP", "AIエージェント", "自動化", "SaaS連携"]}
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <section id="overview" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                概要
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                2026年6月下旬、Jiteraやソフトバンク（AGENTIC STAR）などが相次いで発表した「MCP（Model Context Protocol）」連携機能を活用し、AIエージェントを実務に完全統合するためのガイドです。これまで手動で行っていた「AIの回答をコピペして他ツールに貼り付ける」作業をゼロにする、中級者必須の連携術を解説します。
              </p>
            </section>

            <section id="target" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                ターゲット
              </h2>
              <ArticleContent
                content={[
                  "複数のSaaS（Notion, Slack, Canva, GitHub等）を横断して業務を行っている中級ユーザー",
                  "AIエージェントに「情報の読み取り」だけでなく「他ツールの操作」まで任せたい人",
                  "自社専用のAI連携環境を構築したい情シス・開発担当者",
                ]}
              />
            </section>

            <section id="article-points" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                記事のポイント
              </h2>
              <ArticleContent
                content={[
                  "**MCPが変えるAIの「手足」**: プロトコル統一により、なぜ1000以上のツールと即座に繋がるようになったのか。",
                  "**実戦！MCP連携設定**: JiteraやAGENTIC STAR、Claude Codeを用いた外部ツール（Canva, Google Workspace等）との接続手順。",
                  "**「コンテキスト統合」の威力**: AIが各ツールの最新データを参照しながら、最適な判断・実行を行うための指示設計。",
                  "**セキュリティと権限管理**: 外部ツールをAIに操作させる際の安全なトークン管理とアクセス制限の考え方。",
                ]}
              />
            </section>

            <section id="mcp-changes-ai-hands-and-feet" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                MCPが変えるAIの「手足」
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Model Context Protocol (MCP) は、AIエージェントが単なる情報処理ツールから、実世界のアプリケーションを操作する「手足」へと進化させる画期的な技術です。これまでAIが生成した情報を手動でコピー＆ペーストして別のツールに貼り付ける必要がありましたが、MCPの登場により、AIは1000以上のSaaSアプリケーションと直接連携し、自律的に操作できるようになりました。これにより、AIはユーザーの指示を解釈し、必要なツールを判断して実行する、真の自律型ワークフローが実現されます。
              </p>
            </section>

            <section id="mcp-integration-settings" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                実戦！MCP連携設定
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                MCP連携は、各プラットフォームが提供する設定を通じて行われます。例えば、JiteraやAGENTIC STAR、Claude CodeといったAIプラットフォームでは、外部ツールのAPIキーやOAuth認証情報を安全に登録することで、連携が可能になります。具体的な手順は各プラットフォームのドキュメントを参照する必要がありますが、基本的な考え方は、AIエージェントがアクセスを許可されたツールに対して、ユーザーの代理として操作を行うための「鍵」を渡すことにあります。これにより、Canvaでのデザイン作成、Google Workspaceでのドキュメント編集、Notionでのタスク管理など、多岐にわたる操作をAIに任せることができます。
              </p>
            </section>

            <section id="context-integration-power" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                「コンテキスト統合」の威力
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                MCPの最大の利点は、AIが複数のツールの「コンテキスト」を統合的に理解し、利用できる点にあります。例えば、「Slackで共有された新商品の特徴」をAIが読み取り、その情報に基づいて「CanvaでInstagram投稿用のバナー」を作成し、さらに「Google Driveのブランドアセット」からロゴを自動で適用するといった一連の作業が可能です。AIは各ツールの最新データをリアルタイムで参照し、ユーザーの意図に沿った最適な判断と実行を行うため、指示の精度と効率が飛躍的に向上します。
              </p>
            </section>

            <section id="security-and-permission-management" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                セキュリティと権限管理
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                AIに外部ツールを操作させる際、セキュリティと権限管理は最も重要な考慮事項です。AIエージェントには、タスク遂行に必要な最小限の権限のみを付与する「最小権限の原則」を徹底する必要があります。また、APIトークンや認証情報は厳重に管理し、アクセスログを常に監視することで、不正な操作や情報漏洩のリスクを最小限に抑えることができます。機密性の高い操作については、人間の承認を必要とするワークフローを導入するなど、多層的なセキュリティ対策が不可欠です。
              </p>
            </section>

            <section id="prompt-examples" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                プロンプト例
              </h2>
              <PromptBlock
                title="Instagram投稿用バナー作成"
                prompt="@Canva を使って、昨日Slackで共有した新商品の特徴をまとめたInstagram投稿用のバナー案を3つ作成して。ロゴはGoogle Driveの『BrandAssets』フォルダから参照して。"
              />
              <PromptBlock
                title="遅延タスクの状況確認と報告"
                prompt="Notionのプロジェクト管理DBから遅延しているタスクを抽出して、担当者にSlackで状況確認のメッセージを送って。返信が来たら要約して報告して。"
              />
            </section>

            <section id="related-articles" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                関連記事
              </h2>
              <RelatedArticles articles={relatedArticles} />
            </section>

            <section id="references" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                参考文献
              </h2>
              <ul className="list-disc pl-5 text-[#333333] leading-relaxed">
                <li><a href="https://prtimes.jp/main/html/rd/p/000000075.000110428.html" target="_blank" rel="noopener noreferrer">Jitera、1000以上の外部ツールとAIがシームレスに繋がる「MCP連携機能」をリリース</a> (2026/06/25)</li>
                <li><a href="https://www.softbank.jp/business/news/2026/0622-01" target="_blank" rel="noopener noreferrer">「AGENTIC STAR」が「Canva」とのMCP連携に対応</a> (2026/06/22)</li>
              </ul>
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
