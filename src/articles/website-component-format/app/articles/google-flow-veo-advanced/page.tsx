"use client"

import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import TableOfContents from "@/components/article/TableOfContents"
import PromptBlock from "@/components/article/PromptBlock"
import PromptInfoCard from "@/components/article/PromptInfoCard"
import RelatedArticles from "@/components/cta/RelatedArticles"
import { useSEO } from "@/hooks/useSEO"
import { useOGP } from "@/hooks/useOGP"
import { useStructuredData } from "@/hooks/useStructuredData"

export default function GoogleFlowVeoAdvancedPage() {
  const title = "Google Flow & Veo 3.1活用ガイド｜AI動画の一貫性を保つプロンプト術"
  const description = "Googleの最新動画制作AI「Flow」と「Veo 3.1」を使い、キャラクターやスタイルの一貫性を保ちながらストーリー性のある動画を作る高度なプロンプトテクニックを解説します。"
  const keywords = "Google Flow, Veo 3.1, AI動画制作, プロンプト術, 動画生成AI, キャラクター一貫性, 中級者向け, AIクリエイティブ"
  const url = "https://promptlist.com/articles/google-flow-veo-advanced"
  const date = "2026-05-07T00:00:00Z"

  useSEO({ title, description, keywords })
  useOGP({
    title,
    description,
    type: "article",
    image: "/images/articles/google-flow-veo-advanced.png",
    url
  })
  useStructuredData({
    title,
    description,
    author: "Manus",
    datePublished: date,
    dateModified: date
  })

  const headings = [
    { id: "introduction", title: "AI動画制作の課題：一貫性をどう保つか" },
    { id: "ingredients", title: "Veo 3.1の「Ingredients（材料）」機能を使いこなす" },
    { id: "flow-layers", title: "Flowのレイヤー管理と演出の自動化" },
    { id: "seed-control", title: "Seed値とスタイル継承のテクニック" },
    { id: "prompt-examples", title: "実践！ストーリーを作る高度なプロンプト例" },
    { id: "summary", title: "まとめ：AI動画は「指示」から「構成」へ" }
  ]

  const relatedArticles = [
    {
      title: "エージェント型AI（Agentic AI）構築ガイド",
      href: "/articles/agentic-ai-workflow",
      category: "中級者向け"
    },
    {
      title: "ChatGPT Canvasで実現する「自律型ドキュメント作成」ワークフロー",
      href: "/articles/chatgpt-canvas-advanced",
      category: "中級者向け"
    }
  ]

  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 py-8">
        <ArticleHeader
          title="Google Flow & Veo 3.1活用ガイド｜AI動画の一貫性を保つプロンプト術"
          category="中級者向け"
          createdAt="2026年5月7日"
          updatedAt="2026年5月7日"
        />
        <TableOfContents headings={headings} />
        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              AI動画制作の課題：一貫性をどう保つか
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              AI動画生成の世界は、Googleの「Veo 3.1」と「Flow」の登場によって劇的な進化を遂げました。しかし、多くのクリエイターが直面するのが**「カットごとにキャラクターや背景が変わってしまう」**という一貫性の問題です。
            </p>
            <p className="text-[#333333] leading-relaxed">
              本記事では、単発の動画生成を超え、複数のカットを繋いで一つのストーリーを構築するための中級者向けテクニックを詳しく解説します。
            </p>
          </section>

          <section id="ingredients" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Veo 3.1の「Ingredients（材料）」機能を使いこなす
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Veo 3.1の最大の特徴は、画像や特定のスタイルを「材料（Ingredients）」として固定できる点にあります。
            </p>
            <ul className="list-disc list-inside mb-4 text-[#333333]">
              <li>**キャラクター固定**: 1枚のキャラクター設定画を材料として渡すことで、全カットで同一人物を登場させることが可能です。</li>
              <li>**スタイル継承**: 特定の色彩設計や照明設定を材料に含め、映像全体のトーンを統一します。</li>
            </ul>
            <PromptInfoCard type="tips" title="材料の準備">
              キャラクターを固定する場合、正面・横顔・背面の3面図を1枚の画像にまとめたものを「材料」としてアップロードすると、AIの理解度が飛躍的に向上します。
            </PromptInfoCard>
          </section>

          <section id="flow-layers" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Flowのレイヤー管理と演出の自動化
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Google Flowは、タイムライン形式で動画を編集できるプラットフォームです。プロンプトでレイヤー構造を意識した指示を出すことで、より映画的な演出が可能になります。
            </p>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-6">
              <h3 className="font-bold mb-2">Flowでのレイヤー指示例</h3>
              <p className="text-sm text-gray-600">
                「レイヤー1に背景の森を生成、レイヤー2に歩く少女を配置。レイヤー3に霧のエフェクトを重ね、徐々に不透明度を上げる演出を加えて。」
              </p>
            </div>
          </section>

          <section id="seed-control" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Seed値とスタイル継承のテクニック
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              偶然生まれた「最高の1カット」を無駄にしないために、Seed値の管理は必須です。
            </p>
            <p className="text-[#333333] leading-relaxed">
              特定のシーンのSeed値をプロンプトに含めることで、「同じカメラアングルで、キャラクターの動作だけを変える」といった精密な制御が可能になります。
            </p>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              実践！ストーリーを作る高度なプロンプト例
            </h2>
            <PromptBlock
              title="キャラクターと背景の連動"
              prompt="「Veo 3.1のIngredients機能を使用して、添付したキャラクター（青いジャケットの少女）を固定。彼女が図書館で古い本を見つけるシーンをFlowの第1セクションに生成して。シネマティックな照明と4K解像度、Seed: 12345を参照。」"
            />
            <PromptBlock
              title="感情と音の演出"
              prompt="「Flowのタイムライン上で、雨の音のSEとピアノのBGMを重ね、少女の驚いた表情のクローズアップを3秒間挿入して。一貫性を保つため、前のシーンのキャラクター素材とスタイルを継承すること。」"
            />
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ：AI動画は「指示」から「構成」へ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Google Flow & Veo 3.1の組み合わせは、AI動画制作を「偶然の産物」から「意図した作品」へと昇華させました。
            </p>
            <p className="text-[#333333] leading-relaxed">
              一貫性を保つための「材料」の活用と、Flowによる精密な「構成」。この2つをマスターすることで、あなたのクリエイティブは次のステージへと進むはずです。
            </p>
          </section>

          <section id="related" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              関連記事
            </h2>
            <RelatedArticles articles={relatedArticles} />
          </section>
        </div>
      </article>
    </PageLayout>
  )
}
