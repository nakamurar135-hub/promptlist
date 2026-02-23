import PageLayout from "@/components/layout/PageLayout";
import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleContent from "@/components/article/ArticleContent";
import PromptBlock from "@/components/article/PromptBlock";
import PromptInfoCard from "@/components/article/PromptInfoCard";
import TableOfContents from "@/components/article/TableOfContents";
import RelatedArticles from "@/components/article/RelatedArticles";
import { Link } from "wouter";
import { ArrowLeft, Crown } from "lucide-react";

const tocItems = [
  { id: "what-is-agent", label: "AIエージェントとは何か" },
  { id: "how-it-works", label: "AIエージェントの動作原理" },
  { id: "react-framework", label: "ReActフレームワーク" },
  { id: "practical-example", label: "実践：エージェントへの指示の出し方" },
  { id: "next-steps", label: "次のステップ" },
];

const relatedArticles = [
  {
    title: "タスク自動化の基礎：AIに複数ステップの作業を任せる",
    href: "/skills/task-automation",
    description: "AIエージェントを使った自動化の実践的な手法を学びます。",
  },
  {
    title: "プロンプトエンジニアリング実践（プレミアム）",
    href: "/skills/prompt-engineering",
    description: "AIの性能を最大化する高度なテクニック。",
  },
];

export default function AiAgentBasics() {
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
          <span>AIエージェント入門</span>
        </div>

        <ArticleHeader
          title="AIエージェント入門：自律的に動くAIの仕組みを理解する"
          description="AIエージェントとは何か、どのように動作するのかを基礎から解説します。ツール呼び出し、メモリ、計画立案など、エージェントの核心的な概念を学びます。"
          category="AIエージェント"
          categoryColor="#333333"
          publishedAt="2026年2月23日"
          readingTime="約10分"
        />

        <TableOfContents items={tocItems} />

        <ArticleContent>
          <section id="what-is-agent">
            <h2>AIエージェントとは何か</h2>
            <p>AIエージェントとは、<strong>目標を与えられると自律的に計画を立て、ツールを使いながらタスクを完遂するAIシステム</strong>のことです。</p>
            <p>通常のChatGPTのような会話型AIは、質問に答えるだけです。一方、AIエージェントは「旅行の計画を立てて、ホテルを検索して、カレンダーに登録して」といった複数ステップのタスクを、人間が介在しなくても自動で実行できます。</p>

            <PromptInfoCard type="response" title="通常のAIとエージェントの違い">
              <div className="space-y-2">
                <div>
                  <strong>通常のAI（ChatGPT等）</strong>：質問→回答の1往復。ツールは使えない。
                </div>
                <div>
                  <strong>AIエージェント</strong>：目標→計画→ツール実行→結果確認→次のアクション、という自律的なループ。
                </div>
              </div>
            </PromptInfoCard>
          </section>

          <section id="how-it-works">
            <h2>AIエージェントの動作原理</h2>
            <p>AIエージェントは主に以下の3つのコンポーネントで構成されています。</p>
            <ul>
              <li><strong>LLM（大規模言語モデル）</strong>：エージェントの「頭脳」。状況を理解し、次の行動を決定します。</li>
              <li><strong>ツール</strong>：エージェントが使える「手足」。Web検索、コード実行、ファイル操作などが含まれます。</li>
              <li><strong>メモリ</strong>：過去の行動と結果を記憶し、文脈を維持します。</li>
            </ul>

            <PromptInfoCard type="usecase" title="エージェントが使えるツールの例">
              <ul className="space-y-1 list-disc list-inside">
                <li>Web検索（最新情報の取得）</li>
                <li>コード実行（計算、データ処理）</li>
                <li>ファイル読み書き（ドキュメント作成）</li>
                <li>APIコール（外部サービスとの連携）</li>
                <li>ブラウザ操作（Webサイトの操作）</li>
              </ul>
            </PromptInfoCard>
          </section>

          <section id="react-framework">
            <h2>ReActフレームワーク</h2>
            <p>現在最も広く使われているエージェントの動作パターンが<strong>ReAct（Reasoning + Acting）</strong>です。</p>
            <p>ReActでは、エージェントは「思考→行動→観察」のサイクルを繰り返しながらタスクを進めます。</p>

            <PromptInfoCard type="tips" title="ReActのサイクル">
              <ol className="space-y-2 list-decimal list-inside">
                <li><strong>Thought（思考）</strong>：「次に何をすべきか？」を考える</li>
                <li><strong>Action（行動）</strong>：ツールを呼び出す（例：Web検索）</li>
                <li><strong>Observation（観察）</strong>：ツールの結果を確認する</li>
                <li>目標が達成されるまで1〜3を繰り返す</li>
              </ol>
            </PromptInfoCard>
          </section>

          <section id="practical-example">
            <h2>実践：エージェントへの指示の出し方</h2>
            <p>AIエージェントに指示を出す際は、<strong>目標を明確に</strong>伝えることが重要です。以下のプロンプトテンプレートを参考にしてください。</p>

            <PromptBlock title="エージェント指示プロンプトの基本テンプレート">{`# タスク
【達成したいゴールを1文で記述】

# 制約条件
・【守るべきルールや制限を列挙】
・【使用可能なツールや情報源を指定】

# 出力形式
【最終的な成果物の形式を指定】

# 補足情報
【エージェントが参考にすべき背景情報】`}</PromptBlock>

            <PromptInfoCard type="tips" title="良い指示のポイント">
              <ul className="space-y-1 list-disc list-inside">
                <li>ゴールは「何を達成したいか」を具体的に書く</li>
                <li>制約条件で「やってはいけないこと」を明示する</li>
                <li>出力形式を指定することで、使いやすい結果が得られる</li>
                <li>曖昧な表現を避け、測定可能な基準を設ける</li>
              </ul>
            </PromptInfoCard>
          </section>

          <section id="next-steps">
            <h2>次のステップ</h2>
            <p>AIエージェントの基本概念を理解できたら、次は実際に自動化を試してみましょう。次のガイドでは、具体的なタスク自動化の実装方法を解説します。</p>

            <div className="bg-[#F5F9FC] border border-[#E5E7EB] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#333333] mb-3">学習ロードマップ</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#5B9BD5] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <span className="text-sm text-[#5B9BD5] font-bold">AIエージェント入門（現在のガイド）</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#5B9BD5] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <Link href="/skills/task-automation" className="text-sm text-[#5B9BD5] hover:underline">タスク自動化の基礎（無料）</Link>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#FF9800] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <Link href="/skills/prompt-engineering" className="text-sm flex items-center gap-1">
                    <Crown className="w-3.5 h-3.5 text-[#FF9800]" />
                    <span className="text-[#FF9800]">プロンプトエンジニアリング実践（プレミアム）</span>
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#FF9800] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">4</span>
                  <Link href="/skills/multi-agent-systems" className="text-sm flex items-center gap-1">
                    <Crown className="w-3.5 h-3.5 text-[#FF9800]" />
                    <span className="text-[#FF9800]">マルチエージェントシステム（プレミアム）</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <RelatedArticles articles={relatedArticles} />
        </ArticleContent>
      </div>
    </PageLayout>
  );
}
