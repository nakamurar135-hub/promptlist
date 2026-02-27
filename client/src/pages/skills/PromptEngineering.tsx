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
  { id: "overview", label: "プロンプトエンジニアリングとは" },
  { id: "few-shot", label: "Few-shot プロンプティング" },
  { id: "cot", label: "Chain-of-Thought プロンプティング（プレミアム）" },
  { id: "advanced", label: "高度なテクニック（プレミアム）" },
];

const relatedArticles = [
  {
    title: "AIエージェント入門",
    href: "/skills/ai-agent-basics",
    description: "AIエージェントの基礎概念を学びます。",
  },
  {
    title: "マルチエージェントシステム（プレミアム）",
    href: "/skills/multi-agent-systems",
    description: "複数のAIを連携させる高度な手法。",
  },
];

export default function PromptEngineering() {
  useSEO({
    title: "プロンプトエンジニアリング実践｜AIの性能を最大化する",
    description: "Chain-of-ThoughtやFew-shotなど、AIの出力品質を勇敷に向上させる高度なテクニックを習会します。実務で即使える実践的な内容です。",
    keywords: "プロンプトエンジニアリング,Chain-of-Thought,Few-shot,高度,テクニック,AI,性能,最大化,実践",
  });
  useOGP({
    title: "プロンプトエンジニアリング実践：AIの性能を最大化する技術",
    description: "Chain-of-ThoughtやFew-shotなど、AIの出力品質を劇的に向上させる高度なテクニックを習得します。",
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
          <span>プロンプトエンジニアリング実践</span>
        </div>

        <ArticleHeader
          title="プロンプトエンジニアリング実践：AIの性能を最大化する技術"
          description="Chain-of-ThoughtやFew-shotなど、AIの出力品質を劇的に向上させる高度なテクニックを習得します。実務で即使える実践的な内容です。"
          category="プレミアムガイド"
          categoryColor="#FF9800"
          publishedAt="2026年2月23日"
          readingTime="約15分"
        />

        <TableOfContents items={tocItems} />

        <ArticleContent>
          {/* 無料部分：概要とFew-shot */}
          <section id="overview">
            <h2>プロンプトエンジニアリングとは</h2>
            <p>プロンプトエンジニアリングとは、<strong>AIに与える指示（プロンプト）を最適化することで、AIの出力品質を向上させる技術</strong>です。</p>
            <p>同じ質問でも、プロンプトの書き方次第でAIの回答の質は大きく変わります。適切なプロンプト設計により、AIの能力を最大限に引き出すことができます。</p>

            <PromptInfoCard type="usecase" title="プロンプトエンジニアリングが重要な理由">
              <ul className="space-y-1 list-disc list-inside">
                <li>同じモデルでも、プロンプト次第で出力品質が10倍以上変わることがある</li>
                <li>高価なモデルへの切り替えなしに、低コストで性能向上が可能</li>
                <li>ビジネス用途では、一貫性のある高品質な出力が不可欠</li>
              </ul>
            </PromptInfoCard>
          </section>

          <section id="few-shot">
            <h2>Few-shot プロンプティング</h2>
            <p>Few-shotプロンプティングとは、<strong>AIに例示を与えることで、期待する出力形式や品質を学習させる手法</strong>です。</p>
            <p>「こういう入力にはこういう出力をして欲しい」という例を2〜5個示すだけで、AIの出力が劇的に改善されます。</p>

            <PromptBlock title="Few-shotプロンプトの例">{`以下の例に倣って、商品レビューをポジティブ・ネガティブ・中立に分類してください。

【例1】
レビュー：「とても使いやすく、毎日愛用しています！」
分類：ポジティブ

【例2】
レビュー：「品質が悪く、すぐに壊れました。返品します。」
分類：ネガティブ

【例3】
レビュー：「普通です。特に良くも悪くもありません。」
分類：中立

---
分類するレビュー：
「デザインは好きですが、値段が少し高いと感じました。」`}</PromptBlock>

            <PromptInfoCard type="tips" title="Few-shotのポイント">
              <ul className="space-y-1 list-disc list-inside">
                <li>例は2〜5個が最適（多すぎると逆効果になることも）</li>
                <li>例はできるだけ多様なケースをカバーする</li>
                <li>例の形式を統一することが重要</li>
              </ul>
            </PromptInfoCard>
          </section>

          {/* 有料ゲート：Chain-of-Thoughtと高度なテクニック */}
          <PremiumGate
            isPremium={isPremium}
            preview={
              <section id="cot">
                <h2>Chain-of-Thought プロンプティング</h2>
                <p>Chain-of-Thought（CoT）プロンプティングは、<strong>AIに「考える過程」を明示させることで、複雑な推論タスクの精度を大幅に向上させる手法</strong>です。</p>
                <p>Googleの研究で発見されたこの手法は、数学の問題解決や論理的推論において特に効果的です。</p>
              </section>
            }
          >
            <section id="cot">
              <h2>Chain-of-Thought プロンプティング</h2>
              <p>Chain-of-Thought（CoT）プロンプティングは、<strong>AIに「考える過程」を明示させることで、複雑な推論タスクの精度を大幅に向上させる手法</strong>です。</p>
              <p>Googleの研究で発見されたこの手法は、数学の問題解決や論理的推論において特に効果的です。</p>

              <PromptBlock title="Chain-of-Thoughtプロンプトの例">{`以下の問題を、ステップバイステップで考えながら解いてください。

問題：
Aさんは1時間に15個のりんごを収穫できます。
Bさんは1時間に20個のりんごを収穫できます。
2人で3時間作業した場合、合計何個のりんごが収穫できますか？

考え方：
まず各人が3時間で収穫できる数を計算し、
次に2人の合計を求めてください。`}</PromptBlock>

              <PromptInfoCard type="tips" title="CoTが効果的な場面">
                <ul className="space-y-1 list-disc list-inside">
                  <li>数学的な計算や論理的推論が必要なタスク</li>
                  <li>複数のステップを経て答えを導く問題</li>
                  <li>AIが誤った答えを出しやすい複雑なシナリオ</li>
                </ul>
              </PromptInfoCard>
            </section>

            <section id="advanced">
              <h2>高度なテクニック</h2>

              <h3>1. Self-Consistency（自己整合性）</h3>
              <p>同じ問題に対して複数の推論パスを生成し、最も多く選ばれた答えを採用する手法です。単一の推論よりも精度が向上します。</p>

              <PromptBlock title="Self-Consistencyプロンプト">{`以下の問題を3つの異なるアプローチで解いてください。
それぞれのアプローチで答えを出した後、最も確実な答えを選んでください。

問題：【問題を入力】

アプローチ1：
アプローチ2：
アプローチ3：

最終的な答えと選んだ理由：`}</PromptBlock>

              <h3>2. Tree of Thoughts（思考の木）</h3>
              <p>問題解決の過程を木構造として探索し、最適な解法を見つける手法です。複雑な計画立案タスクに特に効果的です。</p>

              <PromptBlock title="Tree of Thoughtsプロンプト">{`以下のタスクを達成するための計画を、木構造で考えてください。

タスク：【タスクを入力】

手順：
1. まず3つの異なるアプローチを考える
2. 各アプローチの長所・短所を評価する
3. 最も有望なアプローチを選択し、詳細な手順を展開する
4. 各ステップで問題が発生した場合の代替案も考える`}</PromptBlock>

              <PromptInfoCard type="tips" title="高度なテクニックの使い分け">
                <div className="space-y-2">
                  <div><strong>Few-shot</strong>：出力形式を統一したいとき</div>
                  <div><strong>CoT</strong>：論理的な推論が必要なとき</div>
                  <div><strong>Self-Consistency</strong>：精度を最大化したいとき</div>
                  <div><strong>Tree of Thoughts</strong>：複雑な計画立案が必要なとき</div>
                </div>
              </PromptInfoCard>
            </section>
          </PremiumGate>

          <RelatedArticles articles={relatedArticles} />
        </ArticleContent>
      </div>
    </PageLayout>
  );
}
