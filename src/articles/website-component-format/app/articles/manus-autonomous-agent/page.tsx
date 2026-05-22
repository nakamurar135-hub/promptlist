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

export default function ManusAutonomousAgentPage() {
  const title = "【中級者向け】AIが自律的にタスクを完遂！次世代AIエージェント『Manus』活用ガイド"
  const description = "2026年5月22日、AIエージェントの進化は新たなステージに到達しました。自律型AIエージェント「Manus」を最大限に活用し、業務を自動化するためのプロンプト術を解説します。"
  const keywords = "Manus, AIエージェント, 自律型AI, プロンプト術, 業務自動化, 2026年最新AI"
  const publishedDate = "2026-05-22T00:00:00Z"
  const modifiedDate = "2026-05-22T00:00:00Z"
  const url = "https://promptlist.jp/articles/manus-autonomous-agent"
  const image = "https://promptlist.jp/images/manus-eyecatch.jpg"

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
    { id: "manus-autonomy", title: "Manusの自律性" },
    { id: "goal-oriented-prompt", title: "「目的達成型」プロンプト" },
    { id: "multi-tool-integration", title: "マルチツール連携" },
    { id: "continuous-improvement", title: "継続的な改善" },
    { id: "prompt-examples", title: "実践的なプロンプト例" },
    { id: "summary", title: "まとめ" },
  ]

  const relatedArticles = [
    {
      title: "【中級者向け】AIが自律的にタスクを完遂！OpenAIの最新エージェント『Operator』による業務自動化プロンプト術",
      href: "/articles/openai-operator-automation",
    },
    {
      title: "【中級者向け】リサーチ時間を9割削減！Perplexity Proの『Research Agent』で深掘り調査を自動化するプロンプト術",
      href: "/articles/perplexity-pro-advanced",
    },
    {
      title: "【初心者向け】AIに「仕事を丸投げ」！Microsoft Copilot Coworkで『おまかせ業務委任』プロンプト術",
      href: "/articles/copilot-cowork-beginner",
    },
  ]

  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ArticleHeader
          title={title}
          category="中級者向け"
          date="2026.05.22"
          tags={["Manus", "AIエージェント", "自動化"]}
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <section id="overview" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                概要
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                2026年5月22日、AIエージェントの進化は新たなステージに到達しました。単なる対話型AIを超え、ブラウザ操作、コード実行、外部ツール連携を自律的に行い、ユーザーの複雑な依頼を完遂する「Manus」が登場しました。本記事では、Manusを最大限に活用し、情報収集から資料作成、デプロイまでを一気通貫で自動化するプロンプト術を解説します。
              </p>
            </section>

            <section id="manus-autonomy" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                Manusの自律性
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Manusの最大の特徴は、その「自律性」にあります。従来のAIが「一問一答」形式だったのに対し、Manusは指示を受けた後、自ら思考（Think）、計画（Plan）、実行（Execute）、検証（Verify）のサイクルを繰り返します。これにより、ユーザーが細かな手順を指示しなくても、最終的なゴールに向けて自律的に動くことが可能になりました。
              </p>
            </section>

            <section id="goal-oriented-prompt" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                「目的達成型」プロンプト
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Manusを使いこなす鍵は、手順ではなく「達成したいゴール」を明確に伝える「目的達成型」のプロンプトにあります。
              </p>
              <ArticleContent
                content={[
                  "具体的な最終成果物を定義する（例: 「比較表をMarkdown形式で作成して」）",
                  "制約条件を明示する（例: 「予算5万円以内」「最新5件のニュース」）",
                  "実行後のアクションを指定する（例: 「GitHubにプッシュして」「メールで送信して」）",
                ]}
              />
            </section>

            <section id="multi-tool-integration" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                マルチツール連携
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Manusは、ブラウザでの情報収集、シェルでのコマンド実行、ファイルシステムの操作など、複数のツールをシームレスに使い分けます。例えば、「最新のトレンドを調査し、それに基づいたコードを書き、テストを実行してデプロイする」といった、人間が行っていた一連の作業をManus一台で完結させることができます。
              </p>
            </section>

            <section id="continuous-improvement" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                継続的な改善
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Manusは実行過程をユーザーに可視化します。もし途中で期待と異なる動きをしていた場合は、リアルタイムでフィードバックを与えることで、即座に軌道修正が可能です。この「人間とAIの協調」が、より確実な成果を生み出すポイントとなります。
              </p>
            </section>

            <section id="prompt-examples" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                実践的なプロンプト例
              </h2>
              <PromptBlock
                title="競合調査とリポジトリ反映"
                prompt="競合他社の最新ニュースを5件調査し、その内容をまとめた比較表をMarkdown形式で作成して。その後、指定のGitHubリポジトリのdocsディレクトリにプッシュして"
              />
              <PromptBlock
                title="SEO記事制作と画像配置"
                prompt="「AIエージェントの未来」に関連するトレンド記事を抽出し、SEO最適化されたブログ記事のドラフトを3本作成して。それぞれの記事に合う画像を生成して配置して"
              />
              <PromptBlock
                title="コード修正とテスト自動化"
                prompt="既存のReactプロジェクトのログイン画面にバリデーション機能を追加し、テストを実行してエラーがないか確認して。問題なければnew-featureブランチにプッシュして"
              />
            </section>

            <section id="summary" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                まとめ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                次世代AIエージェント「Manus」は、私たちの働き方を根本から変える可能性を秘めています。自律的な思考とマルチツールの活用により、人間は「何をすべきか」という大局的な判断に集中し、実務の多くをAIに委ねることができるようになります。まずは、日常のルーチンワークからManusに任せてみることで、その圧倒的な生産性を実感してみてください。
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
