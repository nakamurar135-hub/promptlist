
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

export default function ChatGPTHelthBeginnerPage() {
  const title = "【初心者向け】AIがあなたの健康相談パートナーに！『ChatGPT Health』活用プロンプト術"
  const description = "OpenAIが発表した健康管理に特化した新機能「ChatGPT Health」の活用術を解説。Apple Health連携、パーソナライズされたアドバイス、専門用語の解説など、初心者が健康管理にAIを役立てるためのポイントを紹介します。"
  const keywords = "ChatGPT Health, AI, 健康管理, プロンプト術, 初心者, Apple Health, 睡眠, 心拍数, 検査結果, 処方箋"
  const publishedDate = "2026-06-05T00:00:00Z"
  const modifiedDate = "2026-06-05T00:00:00Z"
  const url = "https://promptlist.jp/articles/chatgpt-health-beginner"
  const image = "https://promptlist.jp/images/chatgpt-health-eyecatch.jpg" // 仮の画像URL

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
    { id: "overview", title: "ニュースの概要" },
    { id: "target-audience", title: "ターゲット層" },
    { id: "article-points", title: "記事のポイント" },
    { id: "prompt-examples", title: "想定プロンプト例" },
  ]

  const relatedArticles = [
    // 関連記事は必要に応じて追加
  ]

  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ArticleHeader
          title={title}
          category="初心者向け"
          date="2026.06.05"
          tags={["ChatGPT", "AI", "健康管理"]}
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <section id="overview" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                ニュースの概要
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                OpenAIが、健康管理に特化した新機能「ChatGPT Health」を米国で発表しました。Apple Healthなどのデバイスと連携し、歩数や睡眠、心拍数などのデータを基にパーソナライズされたアドバイスを提供します。また、検査結果や処方箋の読み込みも可能で、専門用語をわかりやすく解説してくれます。
              </p>
            </section>

            <section id="target-audience" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                ターゲット層
              </h2>
              <ArticleContent
                content={[
                  "ITやAIに疎く、ChatGPTを「たまに使う検索ツール」程度に思っている人",
                  "自身の健康管理に関心があるが、数値や専門用語が難しくて放置している人",
                  "スマホの健康管理アプリのデータを持て余している人",
                ]}
              />
            </section>

            <section id="article-points" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                記事のポイント
              </h2>
              <ArticleContent
                content={[
                  "**「聞くだけ」で健康データがわかる**: 複雑なグラフを見なくても、「昨日の睡眠はどうだった？」と聞くだけで要約してくれる手軽さを強調。",
                  "**専門用語の「翻訳」**: 病院でもらった検査結果の難しい言葉を、AIが「中学生でもわかる言葉」に噛み砕いてくれる安心感を提示。",
                  "**プライバシーへの配慮**: 健康データがAIの学習に使われない設定など、初心者が不安に思うセキュリティ面もフォロー。",
                ]}
              />
            </section>

            <section id="prompt-examples" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                想定プロンプト例
              </h2>
              <PromptBlock
                title="睡眠の質に関するアドバイス"
                prompt="Apple Healthの昨日の睡眠データを読み取って、私の睡眠の質についてアドバイスして。特に、もっと深く眠るために今日からできる簡単な工夫を3つ教えて。"
              />
              <PromptBlock
                title="血液検査結果の解説"
                prompt="血液検査の結果にある『HbA1c』って何？私のような運動不足の40代にとって、この数値が何を意味するのか、わかりやすく教えて。"
              />
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
