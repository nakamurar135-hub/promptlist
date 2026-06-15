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

export default function GennaiGovAIBeginnerPage() {
  const title = "【初心者向け】政府公式AI『源内（げんない）』超入門"
  const description = "2026年5月から全府省庁で実証が始まった日本政府の内製AI『源内』。複雑な行政文書の読み解きや申請書類作成をAIに任せるプロンプト術を解説します。"
  const keywords = "源内, 政府AI, 行政文書, プロンプト術, 初心者, 日本産AI, 2026年最新"
  const publishedDate = "2026-05-27T00:00:00Z"
  const modifiedDate = "2026-05-27T00:00:00Z"
  const url = "https://promptlist.jp/articles/gennai-gov-ai-beginner"
  const image = "https://promptlist.jp/images/gennai-gov-ai-beginner-eyecatch.jpg"

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
    { id: "what-is-gennai", title: "日本政府が作ったAI『源内』って何？" },
    { id: "reading-government-docs", title: "難しい公文書を読み解くプロンプト" },
    { id: "application-writing", title: "役所に提出する説明文の下書き" },
    { id: "three-rules", title: "『源内』に学ぶ、AIを賢く使うための3つのルール" },
    { id: "prompt-examples", title: "実践的なプロンプト例" },
    { id: "summary", title: "まとめ" },
  ]

  const relatedArticles = [
    {
      title: "【初心者向け】AIに「仕事を丸投げ」！Microsoft Copilot Coworkで『おまかせ業務委任』プロンプト術",
      href: "/articles/copilot-cowork-beginner",
    },
    {
      title: "【初心者向け】AI特有の「不自然な文章」を卒業！『ペルソナ抽出』であなたの言葉を再現する魔法のプロンプト術",
      href: "/articles/ai-persona-writing",
    },
    {
      title: "【中級者向け】検索は「調べる」から「任せる」へ！Googleの新機能『検索エージェント』活用プロンプト術",
      href: "/articles/google-search-agent",
    },
  ]

  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ArticleHeader
          title={title}
          category="初心者向け"
          date="2026.05.27"
          tags={["源内", "政府AI", "行政文書"]}
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <section id="overview" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                概要
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                2026年5月から全府省庁で大規模実証が始まった、日本政府の内製AI「源内（GENNAI）」。18万人の職員が使い始めたこのAIは、一般ユーザーも利用できるOSS版や公開プロンプトを通じて、複雑な行政文書の読み解きや公的な申請書類の下書き作成を「間違いなく」行うための強力なツールとなります。本記事では、初心者向けに、源内を活用して行政手続きの負担を減らし、正確な書類作成を実現するためのプロンプト術を解説します。
              </p>
            </section>

            <section id="what-is-gennai" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                日本政府が作ったAI『源内』って何？
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                源内は、デジタル庁が中心となって開発した、日本政府公式のAIです。海外のAIとは異なり、日本の法律や行政制度に深く最適化されており、「正確性」と「信頼性」を最優先に設計されています。2026年5月の実証開始時点で、18万人の政府職員が実際に業務で使用しており、その精度は日々向上しています。
              </p>
              <p className="text-[#333333] leading-relaxed mb-4">
                一般ユーザーにとって重要なのは、源内のOSS版（オープンソース版）が公開されており、政府が公式に「行政実務用プロンプト」を提供しているという点です。つまり、一般人でも「政府が推奨する使い方」に従うことで、より正確で信頼性の高い回答を得られるのです。
              </p>
            </section>

            <section id="reading-government-docs" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                難しい公文書を読み解くプロンプト
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                役所の書類は、独特の専門用語や複雑な条件が満載です。源内に「この書類を中学生でもわかる言葉で説明して」と指示することで、難しい内容を簡潔に理解できます。
              </p>
              <ArticleContent
                content={[
                  "「この助成金の要件を3つのポイントで教えて」→ 重要な条件が明確に整理される",
                  "「この法律の『ただし書き』の部分は、自分に当てはまるか判定して」→ 専門用語を避けた判定が得られる",
                  "「この書類に必要な添付書類は何？チェックリストで出して」→ 抜け漏れなく準備できる",
                  "「この条件と、別の書類の条件を比較して。矛盾していないか確認して」→ 複数書類の整合性が確認できる",
                ]}
              />
            </section>

            <section id="application-writing" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                役所に提出する説明文の下書き
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                政府が公開している「行政実務用プロンプト」を一般向けに応用することで、役所に提出する説明文を「間違いなく」作成できます。源内は、行政文書に必要な論理性と正確性を自動的に確保してくれるのです。
              </p>
              <ArticleContent
                content={[
                  "「この申請理由を、役所が理解しやすい形で書き直して。箇条書きで」→ 論理的で説得力のある文章が生成",
                  "「この説明に、根拠となる法律条項を引用して追加して」→ 信頼性が大幅に向上",
                  "「この文章に不足している情報はないか、チェックして」→ 抜け漏れが事前に発見できる",
                  "「役所の担当者が『なぜ？』と質問しそうな部分を先回りして説明を追加して」→ 却下リスクが低減",
                ]}
              />
            </section>

            <section id="three-rules" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                『源内』に学ぶ、AIを賢く使うための3つのルール
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                源内の開発チームが公式に推奨する「AIの使い方」には、3つの重要なルールがあります。これらを守ることで、AIの回答をより信頼できるものにできます。
              </p>
              <ArticleContent
                content={[
                  "【ルール1】根拠（エビデンス）を必ず確認させる：AIが提案した内容について、「これはどの法律に基づいているのか」「出典は何か」を必ず聞き直す。源内は根拠を明示する設計になっています。",
                  "【ルール2】セキュリティに配慮した情報入力：個人情報や機密情報を入力する際は、「この情報は安全に処理されるか」を事前に確認。政府AIだからこそ、情報管理が重要です。",
                  "【ルール3】『AIはあくまで下書き担当』という付き合い方：源内が作成した書類は、必ず人間が最終チェック。AIの提案を盲信せず、自分の判断を優先させることが大切です。",
                ]}
              />
            </section>

            <section id="prompt-examples" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                実践的なプロンプト例
              </h2>
              <PromptBlock
                title="助成金要件の理解"
                prompt="この助成金の要件を、中学生でもわかる言葉で3つのポイントにまとめて。自分が『個人事業主で年収500万円』の場合、対象になるか判定して"
              />
              <PromptBlock
                title="申請書類の準備"
                prompt="この申請に必要な添付書類をすべてリストアップして。それぞれの書類の入手方法も簡潔に説明して。チェックボックス付きで出して"
              />
              <PromptBlock
                title="説明文の作成"
                prompt="この申請理由を、役所が理解しやすい形で書き直して。論理的で、かつ簡潔に。その後、『根拠となる法律条項は何か』も教えて"
              />
              <PromptBlock
                title="書類の整合性確認"
                prompt="この申請書と別紙の条件を比較して。矛盾していないか、また不足している情報がないか確認して。問題があれば、修正案を提案して"
              />
            </section>

            <section id="summary" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                まとめ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                政府公式AI「源内」は、単なる便利ツールではなく、「正確性と信頼性」を最優先に設計された、日本人のための行政支援AIです。複雑な公文書の理解や申請書類作成の負担を大幅に減らしながら、「間違いのない」書類作成を実現できます。まずは「この書類を中学生でもわかる言葉で説明して」という一言から始めて、源内との付き合い方を学んでいきましょう。日本産のAIだからこそ実現できる、信頼性の高い行政支援の時代が、今ここに始まっています。
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
