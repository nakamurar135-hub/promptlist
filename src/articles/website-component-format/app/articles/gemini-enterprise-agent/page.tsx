
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
  { id: "overview", text: "Vertex AIから「エージェント・スタック」へ: Googleが描くAIエージェントの未来像", level: 2 as const },
  { id: "platform-core", text: "プラットフォームの3大核", level: 2 as const },
  { id: "connectors", text: "Connectors: Google Workspaceや外部SaaSとのデータ連携術", level: 3 as const },
  { id: "action-engine", text: "Action Engine: 言葉を「実行」に変えるツールの紐付け方", level: 3 as const },
  { id: "guardrails", text: "Guardrails: 企業利用に不可欠なセキュリティとガバナンスの設定", level: 3 as const },
  { id: "ai-employee-design", text: "「AI社員」の設計図を作る", level: 2 as const },
  { id: "task-decomposition", text: "業務を「タスク」に分解し、エージェントに役割（ロール）を与える", level: 3 as const },
  { id: "prompt-criteria", text: "プロンプトで「判断基準」と「例外処理」を覚えさせるコツ", level: 3 as const },
  { id: "workflow-examples", text: "実例: メール返信から在庫調整まで: 複数ツールを跨ぐワークフローの構築例", level: 2 as const },
  { id: "summary", text: "まとめ: 2026年後半、ビジネスは「エージェントを使いこなす組織」が制する", level: 2 as const },
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
    title: "【中級者向け】チームのAI活用を加速！Anthropicの新機能『Claude Tag』による共同作業プロンプト術",
    description: "Anthropicの新機能「Claude Tag」を活用し、チームでプロンプトやドキュメントを整理・共有し、AI活用を加速させる中級者向けガイド。",
    href: "/articles/claude-tag-workflow",
  },
];

export default function GeminiEnterpriseAgentPage() {
  const title = "【中級者向け】Googleが放つ究極の自動化！『Gemini Enterprise Agent Platform』導入・活用ガイド";
  const description = "Google Cloud Next '26で発表された「Gemini Enterprise Agent Platform」の導入・活用ガイド。企業内のデータやSaaSと連携し、自律的に業務を遂行するAIエージェントの構築方法を解説。";
  const keywords = "Google, Gemini Enterprise Agent Platform, Vertex AI, AIエージェント, 業務自動化, ノーコード, ローコード, Google Workspace, SaaS連携, セキュリティ";
  const url = typeof window !== 'undefined' ? window.location.href : "";
  const publishedDate = "2026-07-03T00:00:00Z";
  const modifiedDate = "2026-07-03T00:00:00Z";
  const eyecatchSrc = "/images/gemini-enterprise-agent-eyecatch.jpg"; // 仮のアイキャッチ画像

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
              Vertex AIから「エージェント・スタック」へ: Googleが描くAIエージェントの未来像
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Googleは2026年7月2日のGoogle Cloud Next '26にて、Vertex AIを包括する「Gemini Enterprise Agent Platform」を発表しました。これは、企業内のあらゆるデータやSaaSと連携し、自律的に業務を遂行する「エージェント」をノーコード・ローコードで構築できるプラットフォームです。単なるチャットボットを超え、実務に深く食い込む「AI社員」を設計・運用するための中級者向け導入ガイドを最速で届けます。
            </p>
          </section>

          <section id="platform-core" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              プラットフォームの3大核
            </h2>
            <h3 id="connectors" className="text-lg font-semibold text-[#333333] mt-6 mb-3">Connectors: Google Workspaceや外部SaaSとのデータ連携術</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              Gemini Enterprise Agent Platformの「Connectors」は、Google Workspace（Drive, Gmail, Calendarなど）の各種サービスはもちろん、Salesforce, SAP, Workdayといった主要な外部SaaSアプリケーションとのシームレスなデータ連携を可能にします。これにより、企業内のあらゆる情報源からエージェントが必要なデータを取得し、活用できるようになります。
            </p>
            <h3 id="action-engine" className="text-lg font-semibold text-[#333333] mt-6 mb-3">Action Engine: 言葉を「実行」に変えるツールの紐付け方</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              「Action Engine」は、自然言語による指示を具体的なアクションに変換し、連携されたツールを実行する核となる機能です。例えば、「来週の会議室を予約して」という指示に対して、Google CalendarのAPIを呼び出して空き状況を確認し、予約を完了させるといった一連の動作を自動で行います。ノーコード・ローコードでツールとアクションを紐付けられるため、専門知識がなくても高度な自動化を実現できます。
            </p>
            <h3 id="guardrails" className="text-lg font-semibold text-[#333333] mt-6 mb-3">Guardrails: 企業利用に不可欠なセキュリティとガバナンスの設定</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              企業でAIエージェントを導入する上で最も重要なのが、セキュリティとガバナンスです。「Guardrails」機能は、エージェントのアクセス権限管理、データ利用ポリシーの適用、機密情報の保護、そして不適切なコンテンツ生成の防止など、企業利用に不可欠な安全対策を包括的に提供します。これにより、安心してAIエージェントを業務に組み込むことが可能です。
            </p>
          </section>

          <section id="ai-employee-design" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「AI社員」の設計図を作る
            </h2>
            <h3 id="task-decomposition" className="text-lg font-semibold text-[#333333] mt-6 mb-3">業務を「タスク」に分解し、エージェントに役割（ロール）を与える</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              AIエージェントを効果的に活用するためには、まず自動化したい業務を具体的な「タスク」に分解し、それぞれのエージェントに明確な「役割（ロール）」を与えることが重要です。例えば、「顧客対応エージェント」「データ分析エージェント」「スケジュール管理エージェント」のように、専門性を持たせることで、エージェントの精度と効率が向上します。
            </p>
            <h3 id="prompt-criteria" className="text-lg font-semibold text-[#333333] mt-6 mb-3">プロンプトで「判断基準」と「例外処理」を覚えさせるコツ</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              エージェントに自律的な判断をさせるためには、プロンプトに「判断基準」と「例外処理」を明確に記述することが不可欠です。例えば、「顧客からの問い合わせには24時間以内に返信するが、緊急度が高い場合は即座に担当者にエスカレーションする」といった具体的なルールを教え込むことで、エージェントはより人間に近い判断を下せるようになります。
            </p>
          </section>

          <section id="workflow-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              実例: メール返信から在庫調整まで: 複数ツールを跨ぐワークフローの構築例
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Gemini Enterprise Agent Platformを使えば、以下のような複雑なワークフローも容易に構築できます。
            </p>
            <PromptInfoCard
              title="ワークフロー例: 顧客からの注文変更リクエスト対応"
              items={[
                "顧客からのメール（Gmail）を受信し、注文変更リクエストを認識",
                "注文番号を基にCRMシステム（Salesforce）から顧客情報と注文履歴を取得",
                "在庫管理システム（SAP）で変更後の商品の在庫を確認",
                "在庫があれば注文を更新し、顧客に自動返信メールを送信（Gmail）",
                "在庫がなければ、担当者にSlackで通知し、顧客には在庫状況を説明するメールを送信（Gmail）",
              ]}
            />
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ: 2026年後半、ビジネスは「エージェントを使いこなす組織」が制する
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Googleの「Gemini Enterprise Agent Platform」は、企業におけるAI活用のあり方を根本から変革する可能性を秘めています。単なるツールとしてのAIではなく、「AI社員」として業務に深く組み込むことで、生産性の劇的な向上と新たなビジネス価値の創出が期待できます。2026年後半、このプラットフォームをいち早く導入し、エージェントを使いこなす組織が、競争優位性を確立するでしょう。
            </p>
          </section>

          <section id="news-source" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ニュースソース
            </h2>
            <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4">
              <li><a href="https://www.hpcwire.com/aiwire/2026/07/02/cornell-study-examines-trade-offs-between-ai-and-risk-indices-in-heat-response-planning/" target="_blank" rel="noopener noreferrer">Google Unveils Gemini Enterprise Agent Platform at Google Cloud Next 2026 (HPCwire, 2026/07/02)</a></li>
              <li><a href="https://www.linkedin.com/pulse/ai-news-highlights-from-25th-june-2026-ai-insiders-news-qqwdf" target="_blank" rel="noopener noreferrer">Gemini Enterprise Agent Platform: Expanding Vertex AI into Full Agent Stack (LinkedIn AI Insiders, 2026/07/02)</a></li>
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
