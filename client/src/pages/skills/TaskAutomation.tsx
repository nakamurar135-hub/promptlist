import PageLayout from "@/components/layout/PageLayout";
import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleContent from "@/components/article/ArticleContent";
import PromptBlock from "@/components/article/PromptBlock";
import PromptInfoCard from "@/components/article/PromptInfoCard";
import TableOfContents from "@/components/article/TableOfContents";
import RelatedArticles from "@/components/article/RelatedArticles";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const tocItems = [
  { id: "what-is-automation", label: "タスク自動化とは" },
  { id: "workflow-design", label: "ワークフロー設計の基礎" },
  { id: "logic-processing", label: "条件分岐と繰り返し処理" },
  { id: "error-handling", label: "エラーハンドリング" },
  { id: "practical-examples", label: "実践例" },
];

const relatedArticles = [
  {
    title: "AIエージェント入門",
    href: "/skills/ai-agent-basics",
    description: "AIエージェントの基礎概念を学びます。",
  },
  {
    title: "プロンプトエンジニアリング実践（プレミアム）",
    href: "/skills/prompt-engineering",
    description: "AIの性能を最大化する高度なテクニック。",
  },
];

export default function TaskAutomation() {
  useSEO({
    title: "タスク自動化の基礎｜AIに複数ステップの作業を任せる",
    description: "AIエージェントを使った自動化の実践的な手法を学びます。ワークフロー設計から実装、エラーハンドリングまで、具体的な事例を交えて解説します。",
    keywords: "タスク自動化,AIエージェント,ワークフロー,自動化,実践,中級,基礎,効率化,実装",
  });

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
          <span>タスク自動化の基礎</span>
        </div>

        <ArticleHeader
          title="タスク自動化の基礎：AIに複数ステップの作業を任せる"
          description="AIエージェントを使って繰り返し作業を自動化する実践的な手法を学びます。ワークフロー設計から実装まで、具体的な事例を交えて解説します。"
          category="タスク自動化"
          categoryColor="#333333"
          publishedAt="2026年2月25日"
          readingTime="約12分"
        />

        <TableOfContents items={tocItems} />

        <ArticleContent>
          <section id="what-is-automation">
            <h2>タスク自動化とは</h2>
            <p>AIによるタスク自動化とは、人間が行っていた<strong>一連の定型作業や判断を、AIエージェントが自律的に実行する仕組み</strong>を構築することです。</p>
            <p>単一のプロンプトで完結するタスクとは異なり、自動化では複数のステップを組み合わせ、必要に応じて外部ツールやAPIを活用します。</p>

            <PromptInfoCard type="usecase" title="自動化のメリット">
              <ul className="space-y-1 list-disc list-inside">
                <li><strong>時間の節約</strong>：繰り返し作業から解放され、より創造的な仕事に集中できます。</li>
                <li><strong>ミスの削減</strong>：人間による入力ミスや見落としを防ぎ、一貫した品質を維持できます。</li>
                <li><strong>スケーラビリティ</strong>：24時間365日、大量のタスクを同時に処理することが可能になります。</li>
              </ul>
            </PromptInfoCard>
          </section>

          <section id="workflow-design">
            <h2>ワークフロー設計の基礎</h2>
            <p>効率的な自動化を実現するためには、まず<strong>「何を」「どの順番で」行うかというワークフロー</strong>を明確に設計する必要があります。</p>
            <p>複雑なタスクを小さなサブタスクに分解し、それぞれの入出力を定義することが成功の鍵となります。</p>

            <PromptBlock title="ワークフロー設計の指示プロンプト">{`以下の業務プロセスを、AIエージェントが実行可能なステップに分解し、ワークフローを設計してください。

# 業務プロセス
【例：毎朝届く問い合わせメールを確認し、内容を分類してスプレッドシートに転記し、担当者にSlackで通知する】

# 出力形式
1. 各ステップの概要
2. 各ステップで必要な入力データ
3. 各ステップの成果物（出力）
4. 使用すべきツールの提案`}</PromptBlock>
          </section>

          <section id="logic-processing">
            <h2>条件分岐と繰り返し処理</h2>
            <p>実用的な自動化には、状況に応じた<strong>「条件分岐」</strong>や、複数のデータに対して同じ処理を行う<strong>「繰り返し処理」</strong>が不可欠です。</p>
            <p>AIエージェントに「もし〜ならA、そうでなければB」という判断基準を与えることで、柔軟な自動化が可能になります。</p>

            <PromptBlock title="条件分岐のロジック構築プロンプト">{`以下のルールに基づいて、顧客からのフィードバックを処理する判断ロジックを作成してください。

# 分岐ルール
・緊急度が高い（苦情や不具合報告）：即座にカスタマーサポートチームへ通知
・ポジティブな意見：マーケティング用素材として保存し、お礼メールを送信
・機能要望：製品開発ロードマップ用リストに追加

# 処理フロー
1. 入力されたテキストの感情と内容を分析
2. 上記ルールに当てはめ、次のアクションを決定
3. 必要な情報を抽出して各ツールに渡す形式に整形`}</PromptBlock>
          </section>

          <section id="error-handling">
            <h2>エラーハンドリング</h2>
            <p>自動化システムにおいて、予期せぬエラーは必ず発生します。<strong>エラーが発生した際にどのように対処するか</strong>を事前に定義しておくことが重要です。</p>
            <p>AIエージェントに自己修復機能を持たせたり、人間による確認ステップ（Human-in-the-loop）を組み込んだりする手法があります。</p>

            <PromptInfoCard type="tips" title="信頼性を高めるエラー対策">
              <ul className="space-y-1 list-disc list-inside">
                <li><strong>リトライ処理</strong>：一時的なエラー（APIのタイムアウト等）に対し、自動で再試行する。</li>
                <li><strong>例外検知</strong>：AIの出力が期待する形式でない場合、修正を求める。</li>
                <li><strong>エスカレーション</strong>：判断に迷う場合や重大なエラー時は人間に通知する。</li>
              </ul>
            </PromptInfoCard>

            <PromptBlock title="エラー修正の指示プロンプト">{`以下のエラーログを分析し、原因を特定した上で、プログラムまたはプロンプトの修正案を提示してください。

# エラー内容
【ここにエラーメッセージや期待外れの出力を入力】

# 実行していたタスク
【自動化しようとしていた内容の概要】

# 出力
1. エラーの根本原因
2. 短期的な回避策
3. 再発防止のための修正プロンプト案`}</PromptBlock>
          </section>

          <section id="practical-examples">
            <h2>実践例</h2>
            <p>タスク自動化の具体的な活用シーンをいくつか紹介します。これらを参考に、自身の業務に合わせた自動化を検討してみましょう。</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="border border-[#E5E7EB] rounded-lg p-4 bg-white">
                <h3 className="font-bold text-[#333333] mb-2">コンテンツ作成の自動化</h3>
                <p className="text-sm text-[#666666]">
                  ブログ記事のトピック調査から、構成案作成、下書き執筆、アイキャッチ画像の生成までを一貫して自動化します。
                </p>
              </div>
              <div className="border border-[#E5E7EB] rounded-lg p-4 bg-white">
                <h3 className="font-bold text-[#333333] mb-2">データ収集・分析の自動化</h3>
                <p className="text-sm text-[#666666]">
                  競合他社のWebサイトから最新情報を定期的に取得し、要約レポートを作成して毎週月曜日にメール配信します。
                </p>
              </div>
            </div>

            <PromptBlock title="総合的な自動化ワークフロー作成プロンプト">{`あなたは優秀な自動化エンジニアです。以下の課題を解決するための、AIエージェントを活用した完全自動化システムを設計してください。

# 解決したい課題
【例：SNSの投稿に対するコメントを全てチェックし、返信が必要なものには下書きを作成し、不適切なものは通報・非表示にする作業を自動化したい】

# 満たすべき要件
・処理の透明性を確保するため、ログを記録すること
・週に一度、処理件数と内容のサマリーを報告すること
・コスト効率を考慮したモデル選定を行うこと`}</PromptBlock>
          </section>

          <RelatedArticles articles={relatedArticles} />
        </ArticleContent>
      </div>
    </PageLayout>
  );
}
