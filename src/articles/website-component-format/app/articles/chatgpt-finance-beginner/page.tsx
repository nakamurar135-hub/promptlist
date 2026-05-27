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

export default function ChatGPTFinanceBeginnerPage() {
  const title = "【初心者向け】ChatGPT「個人財務・家計管理」機能活用ガイド"
  const description = "2026年5月、OpenAIが発表したChatGPTの個人財務機能。銀行口座やクレジットカード連携で、家計簿作成やサブスク見直しをAIに丸投げする方法を解説します。"
  const keywords = "ChatGPT, 個人財務, 家計管理, 家計簿, プロンプト術, 初心者, AI活用, 2026年最新"
  const publishedDate = "2026-05-27T00:00:00Z"
  const modifiedDate = "2026-05-27T00:00:00Z"
  const url = "https://promptlist.jp/articles/chatgpt-finance-beginner"
  const image = "https://promptlist.jp/images/chatgpt-finance-beginner-eyecatch.jpg"

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
    { id: "personal-finance-feature", title: "AIが「家計再生アドバイザー」に" },
    { id: "setup-guide", title: "家計管理モードの始め方" },
    { id: "expense-analysis", title: "無駄遣いをあぶり出すプロンプト" },
    { id: "savings-simulation", title: "貯金シミュレーション" },
    { id: "prompt-examples", title: "実践的なプロンプト例" },
    { id: "summary", title: "まとめ" },
  ]

  const relatedArticles = [
    {
      title: "【中級者向け】金融実務をAIが代行！Anthropicの最新『金融特化型エージェント』活用プロンプト術",
      href: "/articles/anthropic-financial-agents",
    },
    {
      title: "【初心者向け】AIがあなたの代わりに「予約」まで完了！最新AIエージェント『Agent i』のおでかけプロンプト術",
      href: "/articles/agent-i-travel",
    },
    {
      title: "【初心者向け】AI特有の「不自然な文章」を卒業！『ペルソナ抽出』であなたの言葉を再現する魔法のプロンプト術",
      href: "/articles/ai-persona-writing",
    },
  ]

  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ArticleHeader
          title={title}
          category="初心者向け"
          date="2026.05.27"
          tags={["ChatGPT", "家計管理", "プロンプト術"]}
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <section id="overview" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                概要
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                2026年5月、OpenAIが発表したChatGPTの「個人財務（Personal Finance）」機能は、家計管理の概念を根本から変えました。銀行口座やクレジットカードとの直接連携が可能になり、複雑な家計簿作成やサブスクリプション見直しをAIに丸投げできるようになったのです。本記事では、初心者向けに、この新機能を使って「三日坊主」の家計簿卒業、無駄遣いの発見、そして無理のない貯金計画を立てるための実践的なプロンプト術を解説します。
              </p>
            </section>

            <section id="personal-finance-feature" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                AIが「家計再生アドバイザー」に
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                これまでの家計簿アプリは、「自分で入力する」「自分で分析する」という手間がかかっていました。しかし、ChatGPTの個人財務機能は違います。銀行やカード会社の許可を得た上で、あなたの取引履歴をAIが自動で読み込み、その場で分析・提案を行うのです。つまり、AIがあなたの「家計再生アドバイザー」となり、24時間いつでも相談に乗ってくれる状態が実現しました。
              </p>
            </section>

            <section id="setup-guide" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                家計管理モードの始め方
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                ChatGPTの個人財務機能を使い始めるには、まず「家計管理モード」を有効にする必要があります。以下のステップで、安全に連携を進めることができます。
              </p>
              <ArticleContent
                content={[
                  "ChatGPTの設定画面から「Personal Finance」を選択",
                  "「銀行口座を連携する」をクリック（セキュリティ認証が行われます）",
                  "対応銀行を選択し、オンラインバンキングのID・パスワードを入力（ChatGPTのサーバーには保存されません）",
                  "クレジットカードも同様に連携（複数枚の登録が可能）",
                  "「今月の収支をまとめて」と一言入力すれば、自動で分析が始まります",
                ]}
              />
            </section>

            <section id="expense-analysis" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                無駄遣いをあぶり出すプロンプト
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                家計管理モードが有効になれば、あなたの消費パターンをAIが瞬時に分析します。ここで重要なのは、「何を聞くか」というプロンプトの工夫です。以下のようなプロンプトを使うことで、無駄遣いの「見える化」ができます。
              </p>
              <ArticleContent
                content={[
                  "「使っていないサブスクリプション（月額課金）を見つけて」→ 登録したまま忘れているサービスが一覧表示",
                  "「今月の食費の内訳を教えて。外食と自炊の比率は？」→ 食費削減の余地が明確に",
                  "「ここ3ヶ月で最も支出が多いカテゴリは何？」→ 傾向が見えて対策が立てやすく",
                  "「同じ店での買い物が多い。これって無駄かな？」→ AIが生活パターンから判断",
                ]}
              />
            </section>

            <section id="savings-simulation" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                貯金シミュレーション
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                「いつまでに、いくら貯めたい」という目標があっても、「月々いくら節約すればいいのか」が分からないと、行動に移しにくいものです。ChatGPTの個人財務機能なら、あなたの現在の支出パターンを基に、現実的な貯金プランを提案してくれます。
              </p>
              <ArticleContent
                content={[
                  "「3年後に100万円貯めるための月々の予算案を作って」→ 現実的な削減目標が自動計算",
                  "「今の支出で、月5万円節約するには何を減らすべき？」→ 優先順位付きの提案が得られる",
                  "「子どもの教育費に月2万円を充てたい。そのための家計見直し案は？」→ ライフプランに合わせた提案",
                  "「グラフと表で分かりやすく表示して」→ 専門用語を避けた、視覚的な説明が得られる",
                ]}
              />
            </section>

            <section id="prompt-examples" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                実践的なプロンプト例
              </h2>
              <PromptBlock
                title="家計簿の自動作成"
                prompt="今月の銀行口座とクレジットカードの取引から、カテゴリ別に支出をまとめて。食費、交通費、娯楽費、その他で分類して、グラフで表示して"
              />
              <PromptBlock
                title="サブスク見直し"
                prompt="使っていないサブスクリプションを見つけて。月額いくらで、いつから使っていないのかも教えて。解約手順も簡潔に説明して"
              />
              <PromptBlock
                title="貯金計画の立案"
                prompt="今の支出パターンを保ったまま、月々1万円多く貯金するための具体的な削減案を3つ提案して。それぞれの実行難易度も教えて"
              />
              <PromptBlock
                title="給与日前の家計診断"
                prompt="給与日まであと10日。今の残高で無理なく生活するための、1日の平均支出額の目安を教えて。食費と交通費に絞った節約案も出して"
              />
            </section>

            <section id="summary" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                まとめ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                ChatGPTの個人財務機能は、「家計管理は難しい」という先入観を打ち破るツールです。銀行連携さえ済ませば、複雑な計算や分析はすべてAIが担当。あなたは「何を質問するか」という戦略的な判断に集中できます。まずは「今月の収支をまとめて」という一言から始めて、AIとの家計管理の新しい時代を体験してみてください。
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
