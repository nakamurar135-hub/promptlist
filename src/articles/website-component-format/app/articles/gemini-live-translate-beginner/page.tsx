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

export default function GeminiLiveTranslateBeginnerPage() {
  const title = "【初心者向け】スマホが「同時通訳者」に！Gemini 3.5 Live Translateで言葉の壁をなくすプロンプト術"
  const description = "2026年6月にGoogleが発表した最新の翻訳機能「Gemini 3.5 Live Translate」を、海外旅行や外国の方とのコミュニケーションに不安を感じている初心者向けに解説します。従来の翻訳アプリのような「交互にボタンを押す」手間は不要です。スマホを置いておくだけで、AIが自然な声でリアルタイムに会話を繋いでくれる、魔法のような体験を始めるためのコツを紹介します。"
  const keywords = "Gemini 3.5, Live Translate, 同時通訳, AI翻訳, 海外旅行, 初心者向け, プロンプト術, Google AI"
  const publishedDate = "2026-07-14T00:00:00Z"
  const modifiedDate = "2026-07-14T00:00:00Z"
  const url = "https://promptlist.jp/articles/gemini-live-translate-beginner"
  const image = "https://promptlist.jp/images/gemini-live-translate-beginner-eyecatch.jpg"

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
    { id: "concept", title: "1. 「ボタン操作」から「自然な会話」へ: Live Translateの凄さ" },
    { id: "noise", title: "2. 「聞き取れない」をAIがカバー: 騒音下でも安心の翻訳" },
    { id: "practice", title: "3. 初心者が使いこなすための「最初の一言」実践例" },
    { id: "emotion", title: "4. 「感情」も伝える翻訳術: プロンプトの添え方" },
    { id: "summary", title: "5. まとめ: 言葉の壁を超えて、もっと世界を身近に" },
  ]

  const relatedArticles = [
    {
      title: "【初心者向け】iPhoneのSiriが賢くなった！Google Gemini搭載で「頼み事」が通じるプロンプト術",
      href: "/articles/siri-gemini-beginner",
    },
    {
      title: "【初心者向け】Google Nano Banana 2 画像生成プロンプトガイド",
      href: "/articles/google-nano-banana-2-image-gen",
    },
    {
      title: "【初心者向け】言葉が「動く図解」に！Geminiの『シミュレーター生成』プロンプト術",
      href: "/articles/gemini-dynamic-visualizer",
    },
  ]

  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026.07.14"
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <ArticleContent>
              <section id="overview" className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                  概要
                </h2>
                <p className="text-[#333333] leading-relaxed mb-4">
                  海外旅行での食事や、街角での道案内。「言いたいことが伝わらない」「相手の言葉が聞き取れない」という不安は、多くの人が抱える悩みです。2026年6月にGoogleが発表した**「Gemini 3.5 Live Translate」**は、そんな言葉の壁を魔法のように消し去ってくれます。
                </p>
                <p className="text-[#333333] leading-relaxed mb-4">
                  これまでの翻訳アプリのように「ボタンを押して話し、またボタンを押して聞く」という不自然な間はもう必要ありません。スマホを置いておくだけで、AIが自然な会話のキャッチボールをサポートしてくれます。
                </p>
              </section>

              <section id="target" className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                  ターゲット
                </h2>
                <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4 space-y-2">
                  <li>海外旅行に行きたいが、言葉が通じないのが不安で一歩踏み出せない人</li>
                  <li>翻訳アプリを使ってみたが、操作が難しかったり、会話が途切れた経験がある人</li>
                  <li>接客業やボランティアなどで、外国の方とスムーズに話したいと考えている初心者</li>
                </ul>
              </section>

              <section id="concept" className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                  1. 「ボタン操作」から「自然な会話」へ: Live Translateの凄さ
                </h2>
                <p className="text-[#333333] leading-relaxed mb-4">
                  Live Translateの最大の特徴は、その**「リアルタイム性」**と**「自然さ」**です。70以上の言語を自動で判別し、話し手の声のトーンや感情まで再現しながら翻訳を行います。
                </p>
                <p className="text-[#333333] leading-relaxed mb-4">
                  相手が話し始めれば即座に翻訳が始まり、あなたが答えると流暢な相手の言語で再生されます。スマホを意識することなく、目の前の相手とのコミュニケーションに集中できるのが最大のメリットです。
                </p>
              </section>

              <section id="noise" className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                  2. 「聞き取れない」をAIがカバー: 騒音下でも安心の翻訳
                </h2>
                <p className="text-[#333333] leading-relaxed mb-4">
                  賑やかなカフェや風の強い屋外など、従来の翻訳アプリが苦手としていた環境でも、Gemini 3.5は驚異的な精度を発揮します。
                </p>
                <p className="text-[#333333] leading-relaxed mb-4 font-bold">
                  AIが周囲のノイズをカットし、会話の文脈（コンテキスト）から「何を言おうとしているか」を推測して翻訳を補完します。
                </p>
                <p className="text-[#333333] leading-relaxed mb-4">
                  多少の早口や方言、言い間違いがあっても、AIが柔軟に解釈してくれるため、初心者でも安心して会話を任せることができます。
                </p>
              </section>

              <section id="practice" className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                  3. 初心者が使いこなすための「最初の一言」実践例
                </h2>
                <p className="text-[#333333] leading-relaxed mb-4">
                  Live Translateを起動した際、AIに「どんな役割をしてほしいか」を伝えることで、翻訳の質が劇的に向上します。
                </p>

                <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-2 mt-6">
                  【レストランで】メニューの相談をする
                </h3>
                <PromptBlock
                  title="レストラン用プロンプト"
                  prompt="今から店員さんと注文の相談をするから、日本語と英語でリアルタイムに通訳して。アレルギーの確認もしたいから、丁寧で親しみやすい感じでお願い。"
                />

                <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-2 mt-6">
                  【道案内で】駅への行き方を聞く
                </h3>
                <PromptBlock
                  title="道案内用プロンプト"
                  prompt="この人に駅への行き方を聞きたい。私の言葉を相手の言語に、相手の言葉を日本語に、交互に訳して。場所の名前はゆっくり発音するように伝えて。"
                />
              </section>

              <section id="emotion" className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                  4. 「感情」も伝える翻訳術: プロンプトの添え方
                </h2>
                <p className="text-[#333333] leading-relaxed mb-4">
                  単なる言葉の置き換えではなく、あなたの「気持ち」をAIに代弁してもらいましょう。
                </p>
                <p className="text-[#333333] leading-relaxed mb-4">
                  プロンプトに**「とても感謝していることを伝えて」「少し困っているので助けてほしいニュアンスを含めて」**と付け加えるだけで、AIは翻訳される声のトーンや言葉選びを調整してくれます。これにより、言葉以上の温かいコミュニケーションが可能になります。
                </p>
              </section>

              <section id="summary" className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                  5. まとめ: 言葉の壁を超えて、もっと世界を身近に
                </h2>
                <p className="text-[#333333] leading-relaxed mb-4">
                  Gemini 3.5 Live Translateは、もはや単なる「ツール」ではなく、あなたの世界を広げる「相棒」です。言葉が通じないという理由で諦めていた場所に、勇気を持って一歩踏み出してみてください。
                </p>
                <p className="text-[#333333] leading-relaxed mb-4">
                  AIがあなたの声を届け、相手の想いを伝えてくれます。さあ、スマホを片手に、新しい出会いを探しに行きましょう！
                </p>
              </section>

              <section id="news-source" className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                  ニュースソース
                </h2>
                <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4">
                  <li><a href="https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-june-2026/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">The latest AI news we announced in June 2026 (Google Blog, 2026/07/01)</a></li>
                  <li><a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-live-3-5-translate/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Gemini 3.5 Live Translate: Real-time speech-to-speech translation (Google Blog, 2026/06/14)</a></li>
                </ul>
              </section>
            </ArticleContent>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
              <div className="mt-8">
                <RelatedArticles articles={relatedArticles} />
              </div>
            </div>
          </aside>
        </div>
      </article>
    </PageLayout>
  )
}
