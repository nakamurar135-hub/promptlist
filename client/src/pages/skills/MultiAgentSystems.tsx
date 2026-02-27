import PageLayout from "@/components/layout/PageLayout";
import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleContent from "@/components/article/ArticleContent";
import PromptBlock from "@/components/article/PromptBlock";
import PromptInfoCard from "@/components/article/PromptInfoCard";
import TableOfContents from "@/components/article/TableOfContents";
import PremiumGate from "@/components/article/PremiumGate";
import RelatedArticles from "@/components/article/RelatedArticles";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";

const tocItems = [
  { id: "what-is-mas", label: "マルチエージェントシステムとは" },
  { id: "design-patterns", label: "設計パターン" },
  { id: "inter-agent-comm", label: "エージェント間通信" },
  { id: "frameworks", label: "実装フレームワーク比較" },
  { id: "practical-example-premium", label: "実践例（プレミアム）" },
];

const relatedArticles = [
  {
    title: "AIエージェント入門",
    href: "/skills/ai-agent-basics",
    description: "AIエージェントの基礎概念を学びます。",
  },
  {
    title: "タスク自動化の基礎",
    href: "/skills/task-automation",
    description: "AIエージェントを使った自動化の実践的な手法を学びます。",
  },
];

export default function MultiAgentSystems() {
  useSEO({
    title: "マルチエージェントシステム｜複数のAIを連携させる",
    description: "複数のAIエージェントが協調するシステムの設計と実装を学びます。AutoGen、LangGraph、エージェント間通信など、上級者向けの実装パターンを解説します。",
    keywords: "マルチエージェント,AIエージェント,AutoGen,LangGraph,連携,上級,システム設計,実装,協調",
  });
  useOGP({
    title: "マルチエージェントシステム：複数のAIを連携させる",
    description: "複数のAIエージェントが協調して複雑なタスクを解決するシステムの設計と実装を学びます。",
    type: "article",
  });

  const { isAuthenticated } = useAuth();
  const { data: subscription } = trpc.subscription.getMySubscription.useQuery(undefined, {
    enabled: isAuthenticated,
  });
  const isPremium = !!(subscription?.plan === "premium" && subscription?.isActive);

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* パンくずリスト */}
        <div className="flex items-center gap-2 text-sm text-[#666666] mb-6">
          <Link href="/skills" className="flex items-center gap-1 text-[#5B9BD5] hover:text-[#4A8BC4]">
            <ArrowLeft className="w-3.5 h-3.5" />
            スキルガイド一覧
          </Link>
          <span>/</span>
          <span>マルチエージェントシステム</span>
        </div>

        <ArticleHeader
          title="マルチエージェントシステム：複数のAIを連携させる"
          description="複数のAIエージェントが協調して複雑なタスクを解決するシステムの設計と実装を学びます。AutoGenやLangGraphなどのフレームワークも紹介します。"
          category="マルチエージェント"
          categoryColor="#FF9800"
          publishedAt="2026年2月25日"
          readingTime="約20分"
        />

        <TableOfContents items={tocItems} />

        <ArticleContent>
          <section id="what-is-mas">
            <h2>マルチエージェントシステムとは</h2>
            <p>マルチエージェントシステム（MAS）とは、<strong>それぞれ異なる役割やスキルを持つ複数のAIエージェントが、互いに協力・対話しながら共通の目標を達成する仕組み</strong>です。</p>
            <p>1つの強力なAIに全てを任せるのではなく、専門特化した小さなAIを組み合わせることで、より複雑で大規模なタスクを高い精度で解決できるようになります。</p>

            <PromptInfoCard type="response" title="シングルエージェントとの違い">
              <div className="space-y-2">
                <div>
                  <strong>シングルエージェント</strong>：1つのAIが全てのツールを使い、全ての判断を行う。複雑なタスクでは指示が肥大化し、精度が落ちやすい。
                </div>
                <div>
                  <strong>マルチエージェント</strong>：役割分担（例：リサーチャー、ライター、校閲者）を行い、エージェント同士がレビューし合うことで品質を高める。
                </div>
              </div>
            </PromptInfoCard>
          </section>

          <section id="design-patterns">
            <h2>設計パターン</h2>
            <p>マルチエージェントシステムを構築する際、エージェント間の関係性をどのように定義するかが重要です。代表的なパターンを紹介します。</p>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold">1. 階層型（Manager Pattern）</h3>
                <p>マネージャーエージェントが全体のタスクを管理し、適切なワーカーエージェントに仕事を割り振る形式です。</p>
              </div>
              <div>
                <h3 className="font-bold">2. 逐次型（Sequential/Pipeline Pattern）</h3>
                <p>エージェントAの出力がエージェントBの入力になる、リレー形式のワークフローです。</p>
              </div>
              <div>
                <h3 className="font-bold">3. 協調型（Joint Collaboration）</h3>
                <p>共通の議論スペース（共有メモリ）を持ち、複数のエージェントが自由に意見を出し合って結論を導く形式です。</p>
              </div>
            </div>

            <PromptBlock title="エージェントの役割定義プロンプト">{`以下のプロジェクトを完遂するために必要なマルチエージェントチームの構成を提案してください。

# プロジェクト内容
【例：最新のAIニュースを収集し、技術的な正確性を検証した上で、一般向けに分かりやすいブログ記事を作成し、多言語展開する】

# 出力形式
1. 必要なエージェントのリスト（名前と役割）
2. 各エージェントに与える具体的な専門スキル
3. エージェント間の連携フロー（誰が誰に何を渡すか）`}</PromptBlock>
          </section>

          <section id="inter-agent-comm">
            <h2>エージェント間通信</h2>
            <p>エージェント同士がどのように情報をやり取りするかは、システムのパフォーマンスに直結します。</p>
            <p>構造化されたデータ（JSON）で受け渡しをするのか、自然言語による対話を通じて合意形成を行うのか、タスクの性質に応じて選択します。</p>

            <PromptInfoCard type="tips" title="効果的な対話の設計">
              <ul className="space-y-1 list-disc list-inside">
                <li><strong>フィードバックループ</strong>：校閲エージェントがライターエージェントに修正を依頼するサイクルを設ける。</li>
                <li><strong>コンテキストの共有</strong>：全ての参加エージェントが現在の進捗状況を把握できるようにする。</li>
                <li><strong>終了条件の明確化</strong>：いつ議論を終えて最終回答を出すかの基準を設定する。</li>
              </ul>
            </PromptInfoCard>
          </section>

          <section id="frameworks">
            <h2>実装フレームワーク比較</h2>
            <p>マルチエージェントシステムを効率的に開発するための主要なフレームワークを紹介します。</p>

            <table className="w-full text-sm border-collapse border border-[#E5E7EB] my-4">
              <thead>
                <tr className="bg-[#F9FAFB]">
                  <th className="border border-[#E5E7EB] p-2 text-left">フレームワーク</th>
                  <th className="border border-[#E5E7EB] p-2 text-left">特徴</th>
                  <th className="border border-[#E5E7EB] p-2 text-left">適した用途</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#E5E7EB] p-2 font-bold">AutoGen (Microsoft)</td>
                  <td className="border border-[#E5E7EB] p-2">対話型エージェントの構築に強い。コード実行能力が高い。</td>
                  <td className="border border-[#E5E7EB] p-2">複雑な対話、コード生成タスク</td>
                </tr>
                <tr>
                  <td className="border border-[#E5E7EB] p-2 font-bold">LangGraph (LangChain)</td>
                  <td className="border border-[#E5E7EB] p-2">グラフ構造で状態管理を行う。制御性が非常に高い。</td>
                  <td className="border border-[#E5E7EB] p-2">厳密なワークフロー制御が必要な場合</td>
                </tr>
                <tr>
                  <td className="border border-[#E5E7EB] p-2 font-bold">CrewAI</td>
                  <td className="border border-[#E5E7EB] p-2">役割ベースのエージェント設計が直感的。</td>
                  <td className="border border-[#E5E7EB] p-2">実務的なチーム協力タスク</td>
                </tr>
              </tbody>
            </table>
          </section>

          <PremiumGate
            isPremium={isPremium}
            preview={
              <section id="practical-example-premium">
                <h2>実践例：自律的なソフトウェア開発チーム</h2>
                <p>複数のエージェントを組み合わせて、要件定義からコーディング、テストまでを行う「仮想開発チーム」を構築する具体的な方法を解説します。</p>
              </section>
            }
          >
            <section id="practical-example-premium">
              <h2>実践例：自律的なソフトウェア開発チーム</h2>
              <p>複数のエージェントを組み合わせて、要件定義からコーディング、テストまでを行う「仮想開発チーム」を構築する具体的な方法を解説します。</p>

              <PromptBlock title="マルチエージェント連携のシステムプロンプト">{`あなたは「プロダクトマネージャー」エージェントです。
以下の手順で「開発者」エージェントと「テスター」エージェントを指揮してください。

1. ユーザーの要望を分析し、詳細な仕様書を作成する
2. 開発者に仕様書を渡し、実装コードの作成を依頼する
3. 開発者のコードをテスターに渡し、バグの有無を確認させる
4. テスターから修正案が出た場合は、開発者に再修正を依頼する
5. 全てが完了したら、最終的な成果物をユーザーに提供する

# ユーザーの要望
【ここに作りたいアプリや機能の内容を入力】`}</PromptBlock>

              <PromptInfoCard type="tips" title="上級者向けのポイント">
                <p>マルチエージェントシステムでは、エージェント同士が「褒め合い」になってしまい、批判的な検証が行われなくなる現象（Echo Chamber）に注意が必要です。あえて「批判者（Critic）」の役割を持つエージェントを加え、厳しいレビューを行わせることで品質が向上します。</p>
              </PromptInfoCard>
            </section>
          </PremiumGate>

          <RelatedArticles articles={relatedArticles} />
        </ArticleContent>
      </div>
    </PageLayout>
  );
}
