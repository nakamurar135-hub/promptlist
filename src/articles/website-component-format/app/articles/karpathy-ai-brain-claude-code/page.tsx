import type { Metadata } from 'next'
import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import TableOfContents from "@/components/article/TableOfContents"
import PromptBlock from "@/components/article/PromptBlock"
import ResponseExample from "@/components/article/ResponseExample"
import PromptInfoCard from "@/components/article/PromptInfoCard"
import AffiliateBox from "@/components/cta/AffiliateBox"
import RelatedArticles from "@/components/cta/RelatedArticles"
import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";
import { useStructuredData } from "@/hooks/useStructuredData";

export const metadata: Metadata = {
  title: 'Karpathy流「AI外部脳」を最速構築！Claude Codeで自分専用のナレッジWikiを自動生成する導入ガイド',
  description: '元OpenAIのAndrej Karpathy氏が提唱する「AI外部脳」の概念を、最新のAIコーディングツール「Claude Code」を用いて構築する手法を解説。散らばったメモや資料をAIに読み込ませるだけで、構造化されたWikiを自動生成し、いつでも出典付きで対話できる環境を整えます。',
  keywords: 'Karpathy, AI外部脳, AI Brain, Claude Code, ナレッジWiki, 自動生成, RAG, 検索拡張生成, ローカルAI, 知識管理, AI活用, 中級者向け',
  openGraph: {
    title: 'Karpathy流「AI外部脳」を最速構築！Claude Codeで自分専用のナレッジWikiを自動生成する導入ガイド',
    description: 'Andrej Karpathy氏の「AI外部脳」をClaude Codeで実現。散らばった情報をAIが整理し、自分専用のナレッジWikiを自動生成する導入ガイド。',
    type: 'article',
    images: ['/images/og-image-karpathy-ai-brain.png'], // Placeholder, needs to be created
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karpathy流「AI外部脳」を最速構築！Claude Codeで自分専用のナレッジWikiを自動生成する導入ガイド',
    description: 'Andrej Karpathy氏の「AI外部脳」をClaude Codeで実現。散らばった情報をAIが整理し、自分専用のナレッジWikiを自動生成する導入ガイド。',
    images: ['/images/og-image-karpathy-ai-brain.png'], // Placeholder, needs to be created
  },
}

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
      name: "最新AI活用",
      articles: [
        { title: "AIエージェントで業務自動化！自律型ワークフロー構築プロンプト術", href: "/articles/ai-agent-workflow" },
        { title: "ChatGPT「高度な音声モード」活用術", href: "/articles/chatgpt-voice-beginner" },
        { title: "Vibe Working（バイブ・ワーキング）入門", href: "/articles/vibe-working-beginner" },
      ],
    },
  ],
  copyright: "© 2026 AIプロンプト活用ガイド All Rights Reserved.",
}

const headings = [
  { id: "overview", text: "概要", level: 2 as const },
  { id: "target", text: "ターゲット", level: 2 as const },
  { id: "benefits", text: "導入のメリット", level: 2 as const },
  { id: "steps", text: "ステップ（導入ガイドの構成案）", level: 2 as const },
  { id: "step1", text: "1. 環境準備: Claude Codeのセットアップと対象ドキュメントの整理", level: 3 as const },
  { id: "step2", text: "2. インデックス作成: AIに資料をスキャンさせ、ディレクトリ構造を最適化", level: 3 as const },
  { id: "step3", text: "3. Wiki生成: `claude-code` を用いたMarkdown形式のナレッジベース自動出力", level: 3 as const },
  { id: "step4", text: "4. 対話と更新: 生成された外部脳を使い倒し、日々のメモを同期させるワークフロー", level: 3 as const },
  { id: "references", text: "参考ニュース", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
]

const relatedArticles = [
  {
    title: "AIエージェントで業務自動化！自律型ワークフロー構築プロンプト術",
    description: "2026年の最新AI活用術。単なるチャットから自律的に動くAIエージェントへ。",
    href: "/articles/ai-agent-workflow",
  },
  {
    title: "面倒な指示はAIに覚えさせよう！ChatGPT「Skills」超入門",
    description: "自分専用のAIスキルを作成して業務を効率化する方法",
    href: "/articles/chatgpt-skills-beginner",
  },
]

export default function KarpathyAIBrainClaudeCodePage() {
  useSEO({
    title: "Karpathy流「AI外部脳」を最速構築！Claude Codeで自分専用のナレッジWikiを自動生成する導入ガイド",
    description: "元OpenAIのAndrej Karpathy氏が提唱する「AI外部脳」の概念を、最新のAIコーディングツール「Claude Code」を用いて構築する手法を解説。散らばったメモや資料をAIに読み込ませるだけで、構造化されたWikiを自動生成し、いつでも出典付きで対話できる環境を整えます。",
    keywords: "Karpathy, AI外部脳, AI Brain, Claude Code, ナレッジWiki, 自動生成, RAG, 検索拡張生成, ローカルAI, 知識管理, AI活用, 中級者向け",
  });

  useOGP({
    title: "Karpathy流「AI外部脳」を最速構築！Claude Codeで自分専用のナレッジWikiを自動生成する導入ガイド",
    description: "Andrej Karpathy氏の「AI外部脳」をClaude Codeで実現。散らばった情報をAIが整理し、自分専用のナレッジWikiを自動生成する導入ガイド。",
    type: "article",
    image: "https://example.com/images/og-image-karpathy-ai-brain.png", // Placeholder, needs to be created
    url: "https://example.com/articles/karpathy-ai-brain-claude-code", // Placeholder, needs to be updated with actual URL
  });

  useStructuredData({
    headline: "Karpathy流「AI外部脳」を最速構築！Claude Codeで自分専用のナレッジWikiを自動生成する導入ガイド",
    description: "元OpenAIのAndrej Karpathy氏が提唱する「AI外部脳」の概念を、最新のAIコーディングツール「Claude Code」を用いて構築する手法を解説。散らばったメモや資料をAIに読み込ませるだけで、構造化されたWikiを自動生成し、いつでも出典付きで対話できる環境を整えます。",
    author: {
      "@type": "Person",
      name: "Manus AI"
    },
    publisher: {
      "@type": "Organization",
      name: "AIプロンプト活用ガイド",
      logo: {
        "@type": "ImageObject",
        url: "https://example.com/images/logo.png" // Placeholder
      }
    },
    image: [
      "https://example.com/images/og-image-karpathy-ai-brain.png" // Placeholder
    ],
    datePublished: "2026-07-21T00:00:00Z",
    dateModified: "2026-07-21T00:00:00Z"
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title="Karpathy流「AI外部脳」を最速構築！Claude Codeで自分専用のナレッジWikiを自動生成する導入ガイド"
          eyecatchSrc="/images/og-image-karpathy-ai-brain.png" // Placeholder, needs to be created
          createdAt="2026年7月21日"
          updatedAt="2026年7月21日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="overview" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              概要
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              元OpenAIのAndrej Karpathy氏が提唱する「AI外部脳（AI Brain）」の概念を、最新のAIコーディングツール「Claude Code」を用いて構築する手法を解説します。散らばったメモや資料をAIに読み込ませるだけで、構造化されたWikiを自動生成し、いつでも出典付きで対話できる環境を整えます。
            </p>
          </section>

          <section id="target" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ターゲット
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-2 mb-4">
              <li>自分の知識や資料をAIで効率的に管理したい中級者</li>
              <li>Claude Codeの基本的な使い方は知っているが、より高度な活用法を探している方</li>
              <li>RAG（検索拡張生成）の仕組みを自分のローカル環境で手軽に実現したい方</li>
            </ul>
          </section>

          <section id="benefits" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              導入のメリット
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-2 mb-4">
              <li><strong>情報の自動構造化</strong>: 乱雑なファイルをAIが整理し、リンク済みのWikiとして出力。</li>
              <li><strong>高精度な検索</strong>: 自分の過去の思考や資料に基づいた回答をAIから得られる。</li>
              <li><strong>プライバシーの確保</strong>: ローカル環境での処理を主軸に、安全に自分専用のAIを育てられる。</li>
            </ul>
          </section>

          <section id="steps" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ステップ（導入ガイドの構成案）
            </h2>
            <section id="step1" className="mb-8">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-3">
                1. 環境準備: Claude Codeのセットアップと対象ドキュメントの整理
              </h3>
              <p className="text-[#333333] leading-relaxed">
                Claude Codeのインストールと、AI外部脳として取り込みたいドキュメント（メモ、PDF、Webページなど）の収集・整理を行います。効率的なインデックス作成のため、ドキュメントはカテゴリごとにフォルダ分けするなど、ある程度の構造化が推奨されます。
              </p>
            </section>
            <section id="step2" className="mb-8">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-3">
                2. インデックス作成: AIに資料をスキャンさせ、ディレクトリ構造を最適化
              </h3>
              <p className="text-[#333333] leading-relaxed">
                Claude Codeの機能を用いて、整理したドキュメント群をAIにスキャンさせます。この際、AIはドキュメントの内容を解析し、関連性の高い情報を自動でリンク付けし、最適なディレクトリ構造やタグ付けを提案します。これにより、手動での整理の手間を大幅に削減できます。
              </p>
            </section>
            <section id="step3" className="mb-8">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-3">
                3. Wiki生成: `claude-code` を用いたMarkdown形式のナレッジベース自動出力
              </h3>
              <p className="text-[#333333] leading-relaxed">
                スキャンが完了したら、Claude Codeに指示を出し、構造化された情報をMarkdown形式のWikiとして自動生成させます。各ページには元のドキュメントへの参照が自動的に埋め込まれるため、情報の信頼性を保ちつつ、迅速な情報アクセスが可能になります。
              </p>
            </section>
            <section id="step4" className="mb-8">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-3">
                4. 対話と更新: 生成された外部脳を使い倒し、日々のメモを同期させるワークフロー
              </h3>
              <p className="text-[#333333] leading-relaxed">
                生成されたWikiは、Claude Codeの対話インターフェースを通じて質問したり、新しい情報を追加したりすることで、常に最新の状態に保つことができます。日々のメモや新しい学習内容をAI外部脳に同期させるワークフローを確立することで、知識の定着と活用を促進します。
              </p>
            </section>
          </section>

          <section id="references" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              参考ニュース
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-2 mb-4">
              <li>Karpathyの「AI外部脳」をClaude Codeで作る方法【2026年】 (2026年7月18日)</li>
            </ul>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Andrej Karpathy氏が提唱する「AI外部脳」の概念は、個人の知識管理に革命をもたらします。Claude Codeを活用することで、散在する情報をAIが自動で整理し、いつでも対話可能な自分専用のナレッジWikiを構築できます。これにより、情報の検索や活用にかかる時間を大幅に短縮し、より創造的な活動に集中できるようになるでしょう。ぜひ、このガイドを参考に、あなた自身のAI外部脳を構築してみてください。
            </p>
          </section>

          <section id="related">
            <RelatedArticles articles={relatedArticles} />
          </section>
        </div>
      </article>
    </PageLayout>
  )
}
