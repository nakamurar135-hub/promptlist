"use client"

import React from "react"
import { useSEO } from "@/hooks/useSEO"
import { useOGP } from "@/hooks/useOGP"
import { useStructuredData } from "@/hooks/useStructuredData"
import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import ArticleContent from "@/components/article/ArticleContent"
import TableOfContents from "@/components/article/TableOfContents"
import PromptBlock from "@/components/article/PromptBlock"
import PromptInfoCard from "@/components/article/PromptInfoCard"
import RelatedArticles from "@/components/cta/RelatedArticles"

export default function OpenAICodexMobilePage() {
  const title = "【中級者向け】場所を選ばずAI開発！OpenAI『Codex Mobile』でスマホからコード生成・デバッグするプロンプト術"
  const description = "2026年5月14日に発表されたOpenAIの新機能「Codex Mobile」の活用ガイド。スマホやタブレットから音声やチャットで高度なプログラミング、既存コードの修正、デバッグを可能にするプロンプト術を解説します。"
  const keywords = "OpenAI, Codex Mobile, プログラミング, スマホ開発, デバッグ, プロンプト, AIエンジニア, モバイルコーディング, コード生成, AI活用"
  const datePublished = "2026-05-15T00:00:00Z"

  useSEO({ title, description, keywords })
  useOGP({
    title,
    description,
    type: "article",
    image: "/images/codex-mobile-eyecatch.jpg",
    url: typeof window !== "undefined" ? window.location.href : "",
  })
  useStructuredData({
    title,
    description,
    author: "Manus",
    datePublished,
    dateModified: datePublished,
  })

  const tocItems = [
    { id: "what-is-codex-mobile", title: "Codex Mobileとは？" },
    { id: "voice-coding", title: "音声でのコード生成" },
    { id: "github-debugging", title: "GitHub連携でのデバッグ" },
    { id: "prompt-examples", title: "中級者向けプロンプト例" },
    { id: "summary", title: "まとめ" },
  ]

  const relatedArticles = [
    {
      title: "AIがあなたの「作業員」に！ChatGPTの新アプリ『Codex』で面倒なファイル整理を丸投げするプロンプト術",
      href: "/articles/chatgpt-codex-beginner",
    },
    {
      title: "【中級者向け】GPT-5.5「Thinking」で実現する「自律型多段階ワークフロー」構築術",
      href: "/articles/gpt5-5-thinking-workflow",
    },
    {
      title: "クリエイティブ作業を「指示」で自動化！Adobe Firefly AI Assistant活用ガイド",
      href: "/articles/adobe-firefly-assistant",
    },
  ]

  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 py-8">
        <ArticleHeader
          title={title}
          date="2026.05.15"
          category="プログラミング"
          tag="中級者向け"
        />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-1">
            <TableOfContents items={tocItems} />
          </div>
          <div className="lg:col-span-3">
            <section id="what-is-codex-mobile" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                Codex Mobileとは？
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                2026年5月14日、OpenAIは「Work with Codex from anywhere」として、モバイル端末向けに最適化された新しいCodexインターフェース<strong>『Codex Mobile』</strong>を発表しました。
              </p>
              <p className="text-[#333333] leading-relaxed mb-4">
                これまで高度なプログラミング作業にはPCが不可欠でしたが、Codex Mobileの登場により、外出先でもスマホやタブレットから音声やチャットを通じて、コード生成、既存コードの修正、デバッグが可能になります。モバイル環境に特化したUIと、軽量・高速な新モデルが搭載されています。
              </p>
              <PromptInfoCard type="info" title="主な特徴">
                <ul className="list-disc list-inside">
                  <li>モバイル専用の軽量・高速なAIモデル</li>
                  <li>音声入力を活用した自然なコーディング体験</li>
                  <li>GitHubリポジトリとのシームレスな連携</li>
                  <li>スマホ上でのリアルタイムプレビュー機能</li>
                </ul>
              </PromptInfoCard>
            </section>

            <section id="voice-coding" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                音声でのコード生成
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Codex Mobileの最大の特徴は、高度な音声認識によるコーディングです。キーボード入力が難しい移動中でも、「〇〇するReactコンポーネントを作って」と話すだけで、AIがコードを生成し、その場でプレビューまで実行してくれます。
              </p>
              <PromptBlock
                title="音声でコンポーネント作成を依頼する"
                prompt="ダークモード対応のログインフォームを作って。メールアドレスとパスワードの入力欄、そして『ログイン』ボタンを配置して。バリデーションチェックも忘れずに。"
              />
            </section>

            <section id="github-debugging" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                GitHub連携でのデバッグ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                GitHubと連携させることで、プルリクエストのコードを読み込み、スマホ上で修正案を提案させることができます。軽微なバグ修正であれば、PCを開かずにその場でコミットまで完了できます。
              </p>
              <PromptInfoCard type="tips" title="デバッグのコツ">
                エラーメッセージをそのまま読み込ませるか、問題のある関数を指定して「エッジケースでの挙動を確認して」と指示するのが効果的です。
              </PromptInfoCard>
            </section>

            <section id="prompt-examples" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                中級者向けプロンプト例
              </h2>
              <p className="mb-4">Codex Mobileを最大限に活用するための、具体的で高度なプロンプト例です。</p>
              <PromptBlock
                title="バグの特定と修正・プッシュ"
                prompt="この関数のエッジケースでのバグを特定して、修正したコードをGitHubのブランチにプッシュして。特にnullが渡された時の挙動を修正してほしい。"
              />
              <PromptBlock
                title="APIルートの雛形生成"
                prompt="Next.jsのAPIルートで、Stripeの決済成功イベントを受け取るハンドラーの雛形を生成して。署名の検証も含めて実装して。"
              />
              <PromptBlock
                title="CSSからTailwindへの変換"
                prompt="このCSSファイルをTailwind CSSのクラスに書き換えて。特にモバイルでのレスポンシブ対応を重点的に最適化して。"
              />
            </section>

            <section id="summary" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                まとめ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                OpenAIの『Codex Mobile』は、エンジニアの働き方を大きく変える可能性を秘めています。「開発＝PCの前に座る」という常識が崩れ、いつでもどこでもアイディアを形にできる時代が到来しました。
              </p>
              <p className="text-[#333333] leading-relaxed mb-4">
                特に中級者以上の開発者にとって、移動時間や隙間時間を利用したデバッグや雛形作成は、生産性を飛躍的に向上させる武器になります。
              </p>
              <p className="text-[#333333] leading-relaxed">
                まずは、手元のスマホから「AIとの共同開発」を始めてみませんか？
              </p>
            </section>

            <section id="related" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                関連記事
              </h2>
              <RelatedArticles articles={relatedArticles} />
            </section>
          </div>
        </div>
      </article>
    </PageLayout>
  )
}
