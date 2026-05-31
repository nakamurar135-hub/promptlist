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
  { id: "claude-mythos-features", text: "Claude Mythosの特長", level: 2 as const },
  { id: "vulnerability-diagnosis", text: "AIによる脆弱性診断の自動化", level: 2 as const },
  { id: "defensive-prompting", text: "防御的プロンプティングの極意", level: 2 as const },
  { id: "ethical-guidelines", text: "倫理的ガイドラインと安全性", level: 2 as const },
  { id: "prompt-examples", text: "実践的なプロンプト例", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "ついに登場！Anthropicの次世代モデル『Claude 4 Preview』活用プロンプト術",
    description: "200万トークンのコンテキストウィンドウとArtifacts 2.0を搭載したClaude 4 Previewの活用ガイド。",
    href: "/articles/claude-4-preview-guide",
  },
  {
    title: "AIが自律的にタスクを完遂！次世代AIエージェント『Manus』活用ガイド",
    description: "自律型AIエージェント「Manus」を最大限に活用し、業務を自動化するためのプロンプト術を解説。",
    href: "/articles/manus-autonomous-agent",
  },
  {
    title: "AIエージェントで業務を自動化！「自律型ワークフロー」構築プロンプト術",
    description: "AIエージェントの自律性を活用して生産性を高めたい中級ユーザー向けのワークフロー構築ガイド。",
    href: "/articles/ai-agent-workflow",
  },
]

export default function ClaudeMythosSecurityPage() {
  const title = "【中級者向け】最先端AIの光と影！Anthropicの最新モデル『Claude Mythos』セキュリティ活用ガイド";
  const description = "2026年5月31日に発表されたAnthropicの最新モデル「Claude Mythos」の活用ガイド。セキュリティ分野に特化した推論能力を活かし、脆弱性診断や防御コード生成を自動化するプロンプト術を解説します。";
  const keywords = "Claude Mythos, Anthropic, セキュリティ, 脆弱性診断, プロンプト術, 中級者, AI倫理, サイバーセキュリティ, 2026年最新AI";
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
    datePublished: "2026-05-31T00:00:00Z",
    dateModified: "2026-05-31T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年5月31日"
          updatedAt="2026年5月31日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="claude-mythos-features" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Claude Mythosの特長
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年5月31日、Anthropicはセキュリティ特化型の推論エンジンを搭載した最新モデル「Claude Mythos」を公開しました。
              このモデルの最大の特徴は、コードの論理構造を深く理解し、潜在的な脆弱性を発見する能力が飛躍的に向上している点にあります。
            </p>
            <p className="text-[#333333] leading-relaxed">
              また、新機能「検証済み出力（Verified Output）」により、AIが生成したコードの安全性を自ら検証し、ハルシネーション（もっともらしい嘘）を極限まで抑えることが可能になりました。
            </p>
          </section>

          <section id="vulnerability-diagnosis" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              AIによる脆弱性診断の自動化
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Claude Mythosを活用することで、これまで専門家が数日かけて行っていた脆弱性診断を、数分で完了させることができます。
              大規模なリポジトリを一度に読み込み、OWASP Top 10などの標準的なセキュリティリスクを網羅的にチェックすることが可能です。
            </p>
            <ul className="list-disc list-inside text-[#333333] mb-4 space-y-2">
              <li>SQLインジェクションやクロスサイトスクリプティング（XSS）の検知</li>
              <li>依存ライブラリの既知の脆弱性（CVE）の特定</li>
              <li>認証・認可フローの論理的欠陥の指摘</li>
            </ul>
          </section>

          <section id="defensive-prompting" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              防御的プロンプティングの極意
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              高性能なAIをシステムに組み込む際、AI自身を攻撃から守る「防御的プロンプティング」が不可欠です。
              Claude Mythosは指示の堅牢性が高く、悪意のあるプロンプトインジェクションに対しても強い耐性を持っています。
            </p>
            <p className="text-[#333333] leading-relaxed">
              ユーザーからの入力を受け取る前に、AIに「この入力に攻撃の意図が含まれていないか」を一次検証させるレイヤーを設けることで、システム全体の安全性を底上げできます。
            </p>
          </section>

          <section id="ethical-guidelines" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              倫理的ガイドラインと安全性
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「Claude Mythos」のような強力なツールは、使い手によって「武器」にも「盾」にもなります。
              Anthropicは、このモデルの利用において厳格な倫理ガイドラインを設けており、悪用を防ぐためのガードレールが幾重にも設定されています。
            </p>
            <p className="text-[#333333] leading-relaxed">
              私たちは「責任あるAI（Responsible AI）」の原則に基づき、常に防御的な視点でこの技術を活用していく必要があります。
            </p>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              実践的なプロンプト例
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Claude Mythosの能力を引き出すための、中級者向けプロンプト例を紹介します。
            </p>

            <PromptBlock
              title="コードのセキュリティスキャン"
              prompt="以下のNode.jsサーバーコードをスキャンし、OWASP Top 10に該当する脆弱性がないかチェックして。発見された場合は、修正後のコードと修正理由をセキュリティ報告書形式で出力して。"
            />

            <PromptBlock
              title="WAFルールの生成"
              prompt="このWebアプリケーションの認証フローにおける潜在的なバイパス手法をシミュレートし、それを防ぐためのWAF（Web Application Firewall）ルールを生成して。"
            />

            <PromptBlock
              title="プロンプトインジェクション対策"
              prompt="AIモデルへのプロンプトインジェクション攻撃を検知・無効化するためのラッパー関数を作成して。特に入力値のサニタイズと意図の検証を重点的に行って。"
            />

            <PromptInfoCard
              type="tips"
              title="活用のヒント"
              children={
                <ul className="list-disc list-inside space-y-1">
                  <li>具体的なフレームワーク名（Express, Next.js等）を指定すると精度が向上します</li>
                  <li>「修正前」と「修正後」のコードを比較提示させることで、学習効果も高まります</li>
                  <li>機密情報の取り扱いには十分注意し、必要に応じてマスキングを行ってください</li>
                </ul>
              }
            />
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              最先端AI「Claude Mythos」は、サイバーセキュリティの在り方を劇的に変える可能性を秘めています。
              脆弱性の早期発見から堅牢なコードの自動生成まで、この技術を正しく理解し活用することで、私たちはより安全なデジタル社会を築くことができます。
            </p>
            <p className="text-[#333333] leading-relaxed">
              まずは身近なコードのチェックから始めて、AIと共に進化するセキュリティ対策を体感してみてください。
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
