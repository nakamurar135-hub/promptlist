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

export default function ManusWebDevGuidePage() {
  const title = "【中級者向け】AIエージェントと作る！Manusを活用した「爆速Webサイト構築」実践ガイド"
  const description = "Manusを活用したWeb開発の全プロセスを解説。要件定義からコンポーネント生成、SEO・OGP最適化、デプロイまで、AIエージェントで爆速サイト構築を実現するプロンプト術とワークフローを紹介します。"
  const keywords = "Manus, Web開発, AIエージェント, Next.js, Tailwind CSS, SEO最適化, OGP, 自動化, プロンプトエンジニアリング, React"
  const publishedDate = "2026-06-29T00:00:00Z"
  const modifiedDate = "2026-06-29T00:00:00Z"
  const url = "https://promptlist.jp/articles/manus-web-dev-guide"
  const image = "https://promptlist.jp/images/manus-web-dev-eyecatch.jpg"

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
    { id: "manus-whatis", title: "Manusとは？" },
    { id: "workflow", title: "活用ステップ" },
    { id: "requirement", title: "要件定義の対話" },
    { id: "component", title: "コンポーネント生成" },
    { id: "seo-ogp", title: "SEO・OGP最適化" },
    { id: "deploy", title: "デプロイと検証" },
    { id: "summary", title: "まとめ" },
  ]

  const relatedArticles = [
    {
      title: "【中級者向け】AIが自律的にタスクを完遂！次世代AIエージェント『Manus』活用ガイド",
      href: "/articles/manus-autonomous-agent",
    },
    {
      title: "【中級者向け】AIが自律的にタスクを完遂！OpenAIの最新エージェント『Operator』による業務自動化プロンプト術",
      href: "/articles/openai-operator-automation",
    },
    {
      title: "【中級者向け】リサーチ時間を9割削減！Perplexity Proの『Research Agent』で深掘り調査を自動化するプロンプト術",
      href: "/articles/perplexity-pro-advanced",
    },
  ]

  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ArticleHeader
          title={title}
          category="中級者向け"
          date="2026.06.29"
          tags={["Manus", "Web開発", "AIエージェント", "自動化"]}
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <section id="overview" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                概要
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                AIエージェント『Manus』のWeb開発機能を最大限に引き出し、設計からデプロイまでを最短で完結させるための実践的なプロンプト術とワークフローを解説します。本ガイドは、Web開発の基礎知識があり、AIを使って効率化したい中級者、およびアイディアを素早く形にしたいプロダクトマネージャーやデザイナーを対象としています。
              </p>
            </section>

            <section id="manus-whatis" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                Manusとは？Web開発を加速するAIエージェント
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Manusは、単なるコード生成ツールではありません。ユーザーの指示を理解し、自律的にWebブラウザを操作して情報を収集したり、プログラミング環境でコードを生成・実行・デバッグしたりすることで、Webサイト構築の全工程をサポートするAIエージェントです。これにより、開発者はより本質的な課題解決に集中し、生産性を飛躍的に向上させることができます。
              </p>
            </section>

            <section id="workflow" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                活用ステップ：ManusによるWebサイト構築ワークフロー
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Webサイト構築をManusで効率化するには、体系的なアプローチが必要です。以下の4つのステップに従うことで、アイディアから公開まで、スムーズに進めることができます。
              </p>
            </section>

            <section id="requirement" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                1. 要件定義の対話：アイディアを具体化する
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Webサイト構築の最初のステップは、明確な要件定義です。Manusは、対話を通じてユーザーの漠然としたアイディアを具体的な機能やデザイン要件に落とし込むことができます。技術スタックの選定から、主要な機能、ターゲットユーザー、デザインの方向性まで、多岐にわたる質問に答えることで、プロジェクトの全体像を明確にします。
              </p>
              <PromptBlock
                title="要件定義のプロンプト例"
                prompt="Next.jsとTailwind CSSを使用して、モダンなポートフォリオサイトを作成してください。以下の機能を備えている必要があります：1. ダークモード対応、2. レスポンシブデザイン、3. GitHub Actionsによる自動デプロイ設定の提案。また、SEO最適化のためのメタタグ設定もコードに含めてください。"
              />
            </section>

            <section id="component" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                2. コンポーネント生成：UIを効率的に構築する
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                要件定義が固まったら、次はUIコンポーネントの生成です。Manusは、個別のUIパーツ（ナビゲーションバー、ヒーローセクション、フッター、フォームなど）を指示に基づいて生成できます。これにより、デザインシステムの一貫性を保ちつつ、開発時間を大幅に短縮することが可能です。
              </p>
              <ArticleContent
                content={[
                  "ナビゲーションバーやヘッダーコンポーネントの生成",
                  "ヒーローセクション、フィーチャーセクション等のランディングページ要素",
                  "フォーム、ボタン、カードなどの再利用可能なUIコンポーネント",
                  "レスポンシブデザイン対応のレイアウトコンポーネント",
                ]}
              />
              <PromptBlock
                title="コンポーネント生成のプロンプト例"
                prompt="Next.jsとTailwind CSSを使用して、ダークモードに対応したレスポンシブなナビゲーションバーコンポーネントを作成してください。ロゴ、主要なナビゲーションリンク（Home, About, Projects, Contact）、およびダークモード切り替えボタンを含めてください。"
              />
            </section>

            <section id="seo-ogp" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                3. SEO・OGP最適化：検索エンジンとSNSでの露出を高める
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Webサイトの公開において、SEO（検索エンジン最適化）とOGP（Open Graph Protocol）は不可欠です。Manusは、SEO最適化のためのメタタグ（タイトル、ディスクリプション、キーワード）や、SNSでの表示を最適化するOGPタグを自動生成するスキルを持っています。これにより、検索エンジンでの視認性を高め、SNSでの共有時に魅力的なプレビューが表示されるようになります。
              </p>
              <ArticleContent
                content={[
                  "メタタグの自動生成（title、description、keywords）",
                  "OGPタグの設定（og:title、og:description、og:image、og:url）",
                  "構造化データ（JSON-LD）の実装",
                  "ページ別のSEO最適化メタデータの一括生成",
                ]}
              />
              <PromptBlock
                title="SEO・OGP最適化のプロンプト例"
                prompt="作成したポートフォリオサイトのトップページに対して、以下の情報に基づきSEOメタタグとOGPタグを生成してください。タイトル: 『[あなたの名前] | ポートフォリオサイト』、ディスクリプション: 『[あなたの名前]の最新プロジェクトとスキルを紹介するポートフォリオサイトです。Web開発、AI、デザインに関する実績をご覧ください。』、キーワード: 『ポートフォリオ, Web開発, AI, React, Next.js, Tailwind CSS』"
              />
            </section>

            <section id="deploy" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                4. デプロイと検証：公開と継続的な改善
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                最終ステップは、生成されたコードのデプロイと検証です。Manusは、GitHub ActionsなどのCI/CDパイプラインの構築を提案し、自動デプロイプロセスを支援できます。また、デプロイ後の動作確認や、パフォーマンス最適化のための改善提案も行います。これにより、開発から公開、そして継続的な改善までの一連のワークフローをスムーズに進めることができます。
              </p>
              <ArticleContent
                content={[
                  "GitHub Actionsによる自動デプロイパイプラインの構築",
                  "Vercel、Netlify等のホスティングサービスへの自動デプロイ設定",
                  "ビルドとデプロイのログ監視とSlack通知の設定",
                  "パフォーマンス測定とLighthouseスコアの自動チェック",
                ]}
              />
              <PromptBlock
                title="デプロイ自動化のプロンプト例"
                prompt="Next.jsで構築されたポートフォリオサイトをVercelにデプロイするためのGitHub Actionsワークフローを提案してください。プルリクエストがマージされた際に自動でデプロイが実行されるように設定し、ビルドとデプロイのログをSlackに通知する機能を含めてください。"
              />
            </section>

            <section id="summary" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                まとめ：ManusでWeb開発の未来を切り拓く
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                ManusのようなAIエージェントを活用することで、Web開発のプロセスは劇的に変化します。アイディアの具現化から、効率的なコンポーネント開発、SEO最適化、そしてデプロイまで、開発者はより創造的で戦略的な業務に集中できるようになります。Manusを「優秀な開発アシスタント」として使いこなし、あなたのWeb開発を次のレベルへと引き上げましょう。
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
