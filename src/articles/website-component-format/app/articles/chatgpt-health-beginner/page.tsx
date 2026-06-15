
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

export default function ChatGPTHealthBeginnerPage() {
  const title = "【初心者向け】AIがあなたの健康相談パートナーに！『ChatGPT Health』活用プロンプト術"
  const description = "OpenAIが発表した『ChatGPT Health』を初心者向けに解説。Apple Healthとの連携、検査結果の解説、パーソナライズされた健康アドバイスを受け取るプロンプト術を紹介します。"
  const keywords = "ChatGPT Health, 健康管理, AI活用, プロンプト術, Apple Health, 初心者向け, 健康データ"
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
    { id: "overview", title: "概要" },
    { id: "what-is-chatgpt-health", title: "ChatGPT Healthとは" },
    { id: "key-features", title: "主な機能" },
    { id: "health-data-integration", title: "健康データの連携" },
    { id: "medical-record-interpretation", title: "医療記録の解釈" },
    { id: "personalized-advice", title: "パーソナライズされたアドバイス" },
    { id: "privacy-security", title: "プライバシーとセキュリティ" },
    { id: "prompt-examples", title: "実践的なプロンプト例" },
    { id: "summary", title: "まとめ" },
  ]

  const relatedArticles = [
    {
      title: "【初心者向け】AIがあなたの代わりに「予約」まで完了！最新AIエージェント『Agent i』のおでかけプロンプト術",
      href: "/articles/agent-i-travel",
    },
    {
      title: "【初心者向け】Excelの空欄をAIが勝手に埋めてくる！？Googleスプレッドシートの『Fill with Gemini』活用術",
      href: "/articles/gemini-fill-beginner",
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
          category="初心者向け"
          date="2026.06.05"
          tags={["ChatGPT", "AI", "健康管理"]}
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <section id="overview" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                概要
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                OpenAIが新たに発表した「ChatGPT Health」は、健康管理に特化した革新的な機能です。Apple Healthなどのデバイスと連携し、あなたの日々の健康データを分析。さらに、医療検査結果や処方箋も読み込み、わかりやすく解説してくれます。本記事では、ChatGPT Healthを初心者向けに解説し、実際に活用するためのプロンプト術をご紹介します。
              </p>
            </section>

            <section id="what-is-chatgpt-health" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                ChatGPT Healthとは
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                ChatGPT Healthは、OpenAIが米国で発表した健康管理機能です。従来のChatGPTの「何でも答えてくれるAI」という特徴に加え、あなたの健康データを理解し、より個人的で実用的なアドバイスを提供します。複雑な健康情報も、AIが「中学生でもわかる言葉」に翻訳してくれるため、健康管理に不安を感じている方こそ、その価値を実感できるツールです。
              </p>
            </section>

            <section id="key-features" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                主な機能
              </h2>
              <ArticleContent
                content={[
                  "**Apple Healthとの連携**: 歩数、睡眠時間、心拍数などのデータを自動的に読み込み",
                  "**医療記録の解釈**: 検査結果や処方箋の難しい専門用語をわかりやすく説明",
                  "**パーソナライズされたアドバイス**: あなたの年齢、運動習慣、既往歴に基づいた個別のアドバイス",
                  "**プライバシー保護**: 健康データはAIの学習に使用されない設定が可能",
                  "**リアルタイム質問**: 「昨日の睡眠はどうだった？」と日本語で気軽に質問可能",
                ]}
              />
            </section>

            <section id="health-data-integration" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                健康データの連携
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                ChatGPT Healthの最大の利点は、複雑なグラフを見なくても、AIに「聞くだけ」で健康状態が把握できることです。例えば、Apple Healthに記録された睡眠データを、ChatGPT Healthが自動的に分析。「昨日の睡眠時間は7時間でしたが、深い睡眠が少なかったようです」といった具合に、要点をまとめて教えてくれます。
              </p>
              <p className="text-[#333333] leading-relaxed mb-4">
                また、複数のデバイスから集約されたデータも統一的に管理できるため、スマートウォッチ、スマートスケール、血圧計など、異なるメーカーのデバイスを使っている方でも、一元的に健康管理が可能です。
              </p>
            </section>

            <section id="medical-record-interpretation" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                医療記録の解釈
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                病院でもらった検査結果には、「HbA1c」「LDLコレステロール」「クレアチニン」など、難しい専門用語が並びます。ChatGPT Healthは、これらの用語を自動的に「翻訳」してくれます。さらに、あなたの年齢や既往歴に基づいて、「この数値があなたにとって何を意味するのか」を説明してくれるため、医学知識がない方でも安心です。
              </p>
              <p className="text-[#333333] leading-relaxed mb-4">
                例えば、「HbA1c」という数値を見ても、多くの人は「何のこと？」と思うでしょう。しかし、ChatGPT Healthに「この検査結果にある『HbA1c』って何ですか？」と聞けば、「これは血糖値の平均を示す数値で、あなたのような40代の方は5.6以下が理想的です」といった具合に、わかりやすく説明してくれます。
              </p>
            </section>

            <section id="personalized-advice" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                パーソナライズされたアドバイス
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                ChatGPT Healthの真価は、単なる「情報提供」ではなく、「あなたに合わせたアドバイス」を提供することにあります。例えば、睡眠不足が検出された場合、一般的な「8時間寝ましょう」というアドバイスではなく、「あなたの仕事パターンと運動習慣から見ると、夜22時に就寝し、朝6時に起床するのが最適です。また、就寝1時間前にスマートフォンを避けることで、さらに睡眠の質が向上する可能性があります」といった、個別対応のアドバイスが得られます。
              </p>
            </section>

            <section id="privacy-security" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                プライバシーとセキュリティ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                健康データは非常にセンシティブな情報です。ChatGPT Healthでは、以下のセキュリティ対策が講じられています：
              </p>
              <ArticleContent
                content={[
                  "**データの非学習化**: デフォルト設定で、あなたの健康データはAIの学習には使用されません",
                  "**エンドツーエンド暗号化**: データ送受信時は暗号化され、第三者が傍受することはできません",
                  "**ユーザーコントロール**: いつでもデータ連携を解除したり、特定のデータのみ共有することが可能",
                  "**医療プライバシー法への準拠**: HIPAA（米国の医療プライバシー法）に準拠した設計",
                ]}
              />
            </section>

            <section id="prompt-examples" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                想定プロンプト例
              </h2>
              <PromptBlock
                title="睡眠データの分析と改善提案"
                prompt="Apple Healthの昨日の睡眠データを読み取って、私の睡眠の質についてアドバイスして。特に、もっと深く眠るために今日からできる簡単な工夫を3つ教えて。"
              />
              <PromptBlock
                title="医療検査結果の解説"
                prompt="血液検査の結果にある『HbA1c』って何？私のような運動不足の40代にとって、この数値が何を意味するのか、わかりやすく教えて。"
              />
              <PromptBlock
                title="複合的な健康管理アドバイス"
                prompt="この1週間の歩数、睡眠、心拍数のデータから、私の健康状態を総合的に評価して。特に改善すべき点と、続けるべき良い習慣を教えて。"
              />
              <PromptBlock
                title="処方箋の理解"
                prompt="医者からもらった処方箋に『メトホルミン500mg』と書いてあるけど、これは何の薬？どんな効果があるの？副作用は？わかりやすく説明して。"
              />
              <PromptBlock
                title="健康目標の設定"
                prompt="私は50代で、最近体重が増えてきた。健康診断で『要注意』と言われた。3ヶ月で健康を改善するために、毎日何をすべき？具体的なスケジュールを作ってくれる？"
              />
            </section>

            <section id="summary" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                まとめ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                ChatGPT Healthは、健康管理を「複雑で難しい」から「シンプルで楽しい」に変えるツールです。AIが複雑な健康データを分析し、わかりやすく説明してくれることで、初心者でも自分の健康状態を正確に把握できます。
              </p>
              <p className="text-[#333333] leading-relaxed mb-4">
                特に、「健康診断の結果が何を意味するのか不安」「毎日の健康管理が面倒」という方にとって、ChatGPT Healthは強い味方になるでしょう。まずは、Apple Healthのデータを連携させ、「昨日の睡眠はどうだった？」という簡単な質問から始めてみてください。AIが提供する個別のアドバイスが、あなたの健康管理の新しい第一歩になるはずです。
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
