"use client";

import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import TableOfContents from "@/components/article/TableOfContents"
import PromptBlock from "@/components/article/PromptBlock"
import PromptInfoCard from "@/components/article/PromptInfoCard"
import RelatedArticles from "@/components/cta/RelatedArticles"
import { useSEO } from "@/hooks/useSEO"
import { useOGP } from "@/hooks/useOGP"
import { useStructuredData } from "@/hooks/useStructuredData"

// 共通設定
const headerProps = {
  logoSrc: "/images/logo.png",
  siteName: "AIプロンプト活用ガイド",
  navItems: [
    { label: "ホーム", href: "/" },
    { label: "記事一覧", href: "/articles" },
    { label: "プライバシーポリシー", href: "/privacy" },
  ],
}

const footerProps = {
  categories: [
    {
      name: "基礎・入門",
      articles: [
        { title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集", href: "/articles/beginner-template" },
        { title: "プロンプトは「書く」から「話す」へ！ChatGPT「高度な音声モード」活用術", href: "/articles/chatgpt-voice-beginner" },
      ],
    },
    {
      name: "ビジネス文書",
      articles: [
        { title: "会議議事録をChatGPTで自動作成するプロンプト4選", href: "/articles/chatgpt-meeting-minutes" },
        { title: "Excelの「わからない」をAIに丸投げ！Copilot Excelエージェント超入門", href: "/articles/excel-copilot-agent" },
      ],
    },
  ],
  copyright: "© 2026 AIプロンプト活用ガイド All Rights Reserved.",
}

// 目次データ
const headings = [
  { id: "what-is-gemini-2-pro", text: "Gemini 2.0 Proのマルチモーダル推論とは？", level: 2 as const },
  { id: "multimodal-reasoning", text: "動画・音声・コードを同時解析する仕組み", level: 2 as const },
  { id: "business-applications", text: "ビジネスと開発での活用シーン", level: 2 as const },
  { id: "prompt-examples", text: "実践的なプロンプト例", level: 2 as const },
  { id: "advanced-techniques", text: "中級者向け応用テクニック", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "リサーチ時間を9割削減！Perplexity Proの『Research Agent』で深掘り調査を自動化するプロンプト術",
    description: "複数の情報源をクロスチェックし、矛盾点を自動検出するPerplexity Proの最新機能を活用したリサーチ効率化の方法。",
    href: "/articles/perplexity-pro-advanced",
  },
  {
    title: "場所を選ばずAI開発！OpenAI『Codex Mobile』でスマホからコード生成・デバッグするプロンプト術",
    description: "モバイル環境でのコード生成とデバッグを実現するOpenAI Codex Mobileの活用ガイド。",
    href: "/articles/openai-codex-mobile",
  },
  {
    title: "金融実務をAIが代行！Anthropicの最新『金融特化型エージェント』活用プロンプト術",
    description: "金融業務の自動化を実現するAnthropicの金融特化型エージェントの導入ガイド。",
    href: "/articles/anthropic-financial-agents",
  },
]

export default function Gemini2ProMultimodalPage() {
  const title = "【中級者向け】動画・音声・コードを同時解析！Google Gemini 2.0 Proのマルチモーダル推論活用ガイド";
  const description = "2026年5月16日に発表されたGoogle Gemini 2.0 Proの革新的なマルチモーダル推論機能を詳解。動画、音声、ソースコードを同時に処理し、相関関係を推論する高度な活用方法をプロンプト例を交えて紹介します。";
  const keywords = "Gemini 2.0 Pro, Google, マルチモーダル, 推論, AI, プロンプト, 中級者, 動画解析, 音声解析, コード解析, 2026年最新";
  const url = typeof window !== 'undefined' ? window.location.href : "";

  useSEO({
    title: `${title} | AIプロンプト活用ガイド`,
    description,
    keywords,
  });

  useOGP({
    title,
    description,
    type: "article",
    image: "/images/placeholder.jpg",
    url,
  });

  useStructuredData({
    title,
    description,
    author: "AIプロンプト活用ガイド",
    datePublished: "2026-05-17T00:00:00Z",
    dateModified: "2026-05-17T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年5月17日"
          updatedAt="2026年5月17日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="what-is-gemini-2-pro" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Gemini 2.0 Proのマルチモーダル推論とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Googleが2026年5月16日に発表した「Gemini 2.0 Pro」は、業界初となる<strong>真のマルチモーダル推論</strong>機能を搭載しています。
              これまでのマルチモーダルAIは、画像・テキスト・音声をそれぞれ独立して処理していましたが、Gemini 2.0 Proは異なるメディア間の<strong>相関関係を高度に推論する</strong>ことができます。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              1000万トークンのコンテキストウィンドウを活用することで、以下のような複雑な解析が可能になります。
            </p>
            <ul className="list-disc list-inside text-[#333333] mb-4 space-y-2">
              <li>動画内のUI操作と、ソースコード内の該当実装の対応関係を特定</li>
              <li>プレゼン音声の発言内容と、スライド資料の数値の矛盾を自動検出</li>
              <li>複数のドキュメント、動画、コードを統合して、システム全体の改善提案を生成</li>
            </ul>
          </section>

          <section id="multimodal-reasoning" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              動画・音声・コードを同時解析する仕組み
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Gemini 2.0 Proのマルチモーダル推論は、以下の3つの層で機能します。
            </p>
            
            <h3 className="text-lg font-semibold text-[#333333] mt-6 mb-3">1. メディア統合レイヤー</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              動画、音声、テキスト、コードなど、複数のメディアを統一されたベクトル空間に変換します。
              これにより、「この動画の操作」と「このコードの実装」が同じ概念を指していることを理解できるようになります。
            </p>

            <h3 className="text-lg font-semibold text-[#333333] mt-6 mb-3">2. 時系列推論レイヤー</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              動画内のタイムスタンプと、会議音声の発言時刻を対応させて、「この瞬間に何が起きたのか」を多角的に理解します。
              例えば、「15秒時点でボタンをクリック」という動画の情報と、「15秒時点でのコード実行ログ」を結びつけることができます。
            </p>

            <h3 className="text-lg font-semibold text-[#333333] mt-6 mb-3">3. 矛盾検出・推論レイヤー</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              複数のメディア間で異なる情報が存在する場合、その矛盾を特定し、原因を推論します。
              「ドキュメントではこう書いてあるが、実装はこうなっている」という不整合を自動で見つけ出すことができます。
            </p>
          </section>

          <section id="business-applications" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ビジネスと開発での活用シーン
            </h2>
            
            <h3 className="text-lg font-semibold text-[#333333] mt-6 mb-3">開発チーム向け：バグ検出と修正提案</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              デモ動画でアプリの不具合を確認し、それに対応するコード箇所を自動で特定。
              修正案まで提示してくれるため、デバッグ時間を大幅に短縮できます。
            </p>

            <h3 className="text-lg font-semibold text-[#333333] mt-6 mb-3">営業・企画向け：資料の整合性チェック</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              プレゼン動画、音声記録、企画書を同時に分析し、「口頭では5%成長と言ったが、資料では10%」といった矛盾を自動検出。
              信頼性の高い資料作成をサポートします。
            </p>

            <h3 className="text-lg font-semibold text-[#333333] mt-6 mb-3">QA・ドキュメント管理向け：ドキュメント更新の自動提案</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              チュートリアル動画と最新のAPIドキュメントを比較し、「この部分は古い情報」と特定。
              自動で更新案を生成してくれるため、ドキュメント管理の負担が軽減されます。
            </p>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              実践的なプロンプト例
            </h2>

            <PromptBlock
              title="動画 × コードの解析"
              prompt="添付したアプリの操作動画（app-demo.mp4）を見て、以下の情報を分析してください：\n1. 動画内で問題が発生している箇所（タイムスタンプ付き）\n2. リポジトリ内のどのReactコンポーネントが原因か推論\n3. 修正に必要なコード変更を具体的に提示\n\n参考資料：\n- リポジトリ構造: src/components/\n- 最新のAPIドキュメント: docs/api.md"
            />

            <PromptBlock
              title="音声 × 資料の照合"
              prompt="会議の録音データ（meeting.wav）と投影されたスライド資料（presentation.pdf）を比較してください：\n1. 発言内容と資料の矛盾点をすべて抽出\n2. 各矛盾点について、正確な情報はどちらか判定\n3. 資料の修正案を提示\n4. 次回の会議で確認すべき項目をリストアップ"
            />

            <PromptBlock
              title="複数メディア統合分析"
              prompt="以下の3つのファイルを統合分析してください：\n1. YouTubeのチュートリアル動画（video.mp4）\n2. 最新のAPIリファレンス（api-reference.md）\n3. 現在の実装コード（implementation.ts）\n\n分析内容：\n- 動画内で使用されている古いAPI呼び出しをすべて特定\n- 最新APIへの移行方法を提示\n- 実装コードの更新スクリプトを生成"
            />

            <PromptInfoCard
              title="マルチモーダル推論を最大限に活用するコツ"
              items={[
                "複数のメディアを同時に提供することで、推論精度が大幅に向上します",
                "タイムスタンプやセクション番号を明記すると、対応関係の特定がスムーズになります",
                "「矛盾を探して」「改善案を提示して」と明確な指示を含めることが重要です",
                "1000万トークンのコンテキストを活用して、大規模なコードベースも一度に分析できます",
              ]}
            />
          </section>

          <section id="advanced-techniques" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              中級者向け応用テクニック
            </h2>

            <h3 className="text-lg font-semibold text-[#333333] mt-6 mb-3">1. 段階的推論の活用</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              複雑な分析が必要な場合、「まず動画を解析」「次にコードを解析」「最後に矛盾を検出」と段階的に指示することで、より正確な結果が得られます。
            </p>

            <h3 className="text-lg font-semibold text-[#333333] mt-6 mb-3">2. コンテキスト最適化</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              1000万トークンは膨大ですが、不要な情報を除外することで、推論の精度と速度が向上します。
              「このファイルは参考情報のみ」と明記することで、AIが優先度を判断できるようになります。
            </p>

            <h3 className="text-lg font-semibold text-[#333333] mt-6 mb-3">3. 出力形式の指定</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              「JSON形式で」「Markdown表で」「実行可能なスクリプトとして」など、出力形式を明確に指定することで、
              結果をそのまま他のツールやワークフローに組み込むことができます。
            </p>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Google Gemini 2.0 Proのマルチモーダル推論機能は、単なる「複数のメディアを処理できるAI」ではなく、
              <strong>異なるメディア間の関係性を深く理解し、矛盾を検出し、改善提案を生成できる</strong>という点で革新的です。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              開発、営業、QA、ドキュメント管理など、あらゆる職種で業務効率化の可能性があります。
              まずは「動画 × コード」の組み合わせから試してみることをお勧めします。
              その後、音声やドキュメントを加えることで、さらに高度な分析が可能になるでしょう。
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
