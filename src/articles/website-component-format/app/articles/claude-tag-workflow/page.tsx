
"use client";

import PageLayout from "@/components/layout/PageLayout";
import ArticleHeader from "@/components/article/ArticleHeader";
import TableOfContents from "@/components/article/TableOfContents";
import PromptBlock from "@/components/article/PromptBlock";
import PromptInfoCard from "@/components/article/PromptInfoCard";
import RelatedArticles from "@/components/cta/RelatedArticles";
import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";
import { useStructuredData } from "@/hooks/useStructuredData";

// 共通設定
const headerProps = {
  logoSrc: "/images/logo.png",
  siteName: "AIプロンプト活用ガイド",
  navItems: [
    { label: "ホーム", href: "/" },
    { label: "記事一覧", href: "/articles" },
    { label: "プライバシーポリシー", href: "/privacy" },
  ],
};

const footerProps = {
  categories: [
    {
      name: "最新AI活用",
      articles: [
        { title: "AIエージェントで業務自動化！自律型ワークフロー構築プロンプト術", href: "/articles/ai-agent-workflow" },
        { title: "GPT-5.5「Thinking」で実現する「自律型多段階ワークフロー」構築術", href: "/articles/gpt5-5-thinking-workflow" },
        { title: "Vibe Working（バイブ・ワーキング）入門", href: "/articles/vibe-working-beginner" },
      ],
    },
  ],
  copyright: "© 2026 AIプロンプト活用ガイド All Rights Reserved.",
};

// 目次データ
const headings = [
  { id: "overview", text: "「個人のAI」から「チームのAI」へ: Claude Tagが解決する共有の壁", level: 2 as const },
  { id: "strategic-tagging", text: "タグ付けの戦略的設計", level: 2 as const },
  { id: "team-workflow", text: "チームの知恵を結集するワークフロー", level: 2 as const },
  { id: "context-switch-zero", text: "コンテキスト・スイッチをゼロに", level: 2 as const },
  { id: "summary", text: "まとめ: 2026年のAI活用は「共有と整理」が勝敗を分ける", level: 2 as const },
  { id: "news-source", text: "ニュースソース", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
];

// 関連記事データ (仮)
const relatedArticles = [
  {
    title: "【中級者向け】AIが自律的にタスクを完遂！次世代AIエージェント『Manus』活用ガイド",
    description: "Manusは、ユーザーの指示を受けて自律的にブラウザ操作やプログラミングを行い、複雑なタスクを完了させる次世代AIエージェントです。",
    href: "/articles/manus-ai-agent-guide",
  },
  {
    title: "【中級者向け】Googleが放つ究極の自動化！『Gemini Enterprise Agent Platform』導入・活用ガイド",
    description: "Google Cloud Next '26で発表されたGemini Enterprise Agent Platformの導入・活用ガイド。",
    href: "/articles/gemini-enterprise-agent",
  },
];

export default function ClaudeTagWorkflowPage() {
  const title = "【中級者向け】チームのAI活用を加速！Anthropicの新機能『Claude Tag』による共同作業プロンプト術";
  const description = "Anthropicの新機能「Claude Tag」を活用し、チームでプロンプトやドキュメントを整理・共有し、AI活用を加速させる中級者向けガイド。";
  const keywords = "Anthropic, Claude Tag, AI活用, チームコラボレーション, プロンプト術, 共同作業, AIエージェント";
  const url = typeof window !== 'undefined' ? window.location.href : "";
  const publishedDate = "2026-07-03T00:00:00Z";
  const modifiedDate = "2026-07-03T00:00:00Z";
  const eyecatchSrc = "/images/claude-tag-eyecatch.jpg"; // 仮のアイキャッチ画像

  useSEO({
    title: `${title} | AIプロンプト活用ガイド`,
    description,
    keywords,
  });

  useOGP({
    title,
    description,
    type: "article",
    image: eyecatchSrc,
    url,
  });

  useStructuredData({
    title,
    description,
    author: "AIプロンプト活用ガイド",
    datePublished: publishedDate,
    dateModified: modifiedDate,
    image: eyecatchSrc,
    url,
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc={eyecatchSrc}
          createdAt="2026年7月3日"
          updatedAt="2026年7月3日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="overview" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「個人のAI」から「チームのAI」へ: Claude Tagが解決する共有の壁
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年6月23日、AnthropicはチームでClaudeを活用するための新機能「Claude Tag」を発表しました。これは、特定のプロジェクトやトピックに関連するプロンプト、ドキュメント、やり取りを「タグ」で整理・共有できる機能です。個人での利用を超え、チーム全体で「最強のプロンプト」や「共通の文脈」を資産化し、業務フローを効率化する中級者向けの実践手法を解説します。
            </p>
          </section>

          <section id="strategic-tagging" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              タグ付けの戦略的設計
            </h2>
            <h3 className="text-lg font-semibold text-[#333333] mt-6 mb-3">プロジェクト別、職能別、フェーズ別での分類法</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              Claude Tagを最大限に活用するためには、戦略的なタグ設計が不可欠です。例えば、<code>#ProjectX</code>、<code>#Marketing</code>、<code>#Phase1</code>のように、プロジェクト、職能、フェーズで分類することで、必要な情報に素早くアクセスできます。これにより、チームメンバーは各自の役割やタスクに応じた関連情報を効率的に見つけ出すことが可能になります。
            </p>
            <h3 className="text-lg font-semibold text-[#333333] mt-6 mb-3">「共通の参照ドキュメント」をタグで紐付けるメリット</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              チームで頻繁に参照するガイドライン、FAQ、最新の市場データなどのドキュメントを特定のタグ（例: <code>#Reference</code>）で紐付けておくことで、常に最新かつ正確な情報をチーム全体で共有できます。これにより、情報のサイロ化を防ぎ、意思決定の質を向上させることができます。
            </p>
          </section>

          <section id="team-workflow" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              チームの知恵を結集するワークフロー
            </h2>
            <h3 className="text-lg font-semibold text-[#333333] mt-6 mb-3">成功したプロンプトに「#BestPractice」タグを付けて資産化</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              個々のメンバーが発見した効果的なプロンプトは、<code>#BestPractice</code>タグを付けて共有することで、チーム全体の資産となります。これにより、新メンバーのオンボーディングが加速し、チーム全体のプロンプトエンジニアリングスキルが向上します。
            </p>
            <h3 className="text-lg font-semibold text-[#333333] mt-6 mb-3">フィードバックをタグ経由で集約し、プロンプトを継続的に改善する</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              プロンプトに対するフィードバックもタグ（例: <code>#Feedback</code>）で管理することで、改善サイクルを効率化できます。特定のプロンプトに対する複数のフィードバックを一覧で確認し、議論を経て最適な形にブラッシュアップすることが可能です。
            </p>
          </section>

          <section id="context-switch-zero" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              コンテキスト・スイッチをゼロに: タグを切り替えるだけで瞬時に「プロジェクト専用AI」に変身
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              複数のプロジェクトを並行して進める際、AIとの対話においても文脈の切り替え（コンテキスト・スイッチ）は大きな負担となります。Claude Tagを使用すれば、プロジェクトごとのタグを切り替えるだけで、Claudeがそのプロジェクトに特化した知識や過去のやり取りを瞬時に参照できるようになります。これにより、常に最適な文脈でAIと対話でき、思考の中断を最小限に抑えることができます。
            </p>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md::text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ: 2026年のAI活用は「共有と整理」が勝敗を分ける
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              AnthropicのClaude Tagは、個人の生産性向上に留まらず、チーム全体のAI活用を次のレベルへと引き上げる強力なツールです。優れたプロンプトや重要な情報を「共有」し、効率的に「整理」することで、チームはより迅速に、より質の高い成果を生み出すことができるでしょう。2026年後半、AIを使いこなす組織は、この「共有と整理」の仕組みをいかに構築できるかにかかっています。
            </p>
          </section>

          <section id="news-source" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ニュースソース
            </h2>
            <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4">
              <li><a href="https://www.anthropic.com/news" target="_blank" rel="noopener noreferrer">Introducing Claude Tag (Anthropic News, 2026/06/23)</a></li>
              <li><a href="https://releasebot.io/updates/anthropic" target="_blank" rel="noopener noreferrer">Claude Tag: A new way for teams to work with Claude (Releasebot, 2026/06/23)</a></li>
            </ul>
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
  );
}
