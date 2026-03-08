import PageLayout from "@/components/layout/PageLayout";
import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";
import { useStructuredData } from "@/hooks/useStructuredData";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ResponseExampleProps {
  title: string;
  children: React.ReactNode;
}

const ResponseExample: React.FC<ResponseExampleProps> = ({ title, children }) => (
  <div className="bg-muted p-4 rounded-lg border border-border">
    <p className="font-semibold text-sm mb-2">{title}</p>
    <div className="text-sm text-muted-foreground whitespace-pre-wrap">{children}</div>
  </div>
);

export default function AiAgentCourseModule3() {
  useSEO({
    title: "マルチエージェントシステムの設計と実装｜AIプロンプト活用ガイド",
    description: "複数のAIエージェントを連携させるマルチエージェントシステムの設計方法。エージェント間の通信、タスク分配、結果の統合方法を学びます。",
    keywords: "マルチエージェント,AIエージェント,LangChain,システム設計,中級者向け",
  });

  useOGP({
    title: "マルチエージェントシステムの設計と実装｜AIプロンプト活用ガイド",
    description: "複数のAIエージェントを連携させるマルチエージェントシステムの設計方法。エージェント間の通信、タスク分配、結果の統合方法を学びます。",
    type: "article",
  });

  useStructuredData({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "マルチエージェントシステムの設計と実装",
    description: "複数のAIエージェントを連携させるマルチエージェントシステムの設計方法。エージェント間の通信、タスク分配、結果の統合方法を学びます。",
    datePublished: "2026-03-08",
    author: {
      "@type": "Organization",
      name: "AIプロンプト活用ガイド",
    },
  });

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            中級者向けコース
          </Badge>
          <h1 className="text-4xl font-bold mb-4">マルチエージェントシステムの設計と実装</h1>
          <p className="text-lg text-muted-foreground mb-4">
            第3回：複数のエージェントを連携させた高度なシステム構築
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span>公開日：2026年3月8日</span>
            <span>難易度：中級</span>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">このモジュールについて</h2>
            <p>
              第2回までで単一のエージェント開発を学びました。このモジュールでは、複数のエージェントを連携させるマルチエージェントシステムの設計と実装方法を学びます。マルチエージェントシステムにより、より複雑で高度なタスク自動化が可能になります。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">マルチエージェントシステムの利点</h2>
            <p>
              複数のエージェントを連携させることで、以下のような利点が得られます：
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>タスクの分割と並列処理による効率化</li>
              <li>専門化されたエージェントによる高精度な処理</li>
              <li>エラーハンドリングとフォールバック機能の強化</li>
              <li>スケーラビリティの向上</li>
              <li>複雑なワークフローの管理</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">マルチエージェントシステムのアーキテクチャ</h2>
            <p>
              マルチエージェントシステムは通常、以下のコンポーネントで構成されます：
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>マネージャーエージェント</strong>：タスクを分析し、他のエージェントに指示を出す</li>
              <li><strong>ワーカーエージェント</strong>：特定のタスクを実行する専門化されたエージェント</li>
              <li><strong>メッセージングシステム</strong>：エージェント間の通信を管理</li>
              <li><strong>共有メモリ</strong>：エージェント間でのデータ共有</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">LangChainでのマルチエージェント実装</h2>
            <p>
              LangChainを使用したマルチエージェントシステムの基本的な実装例を示します：
            </p>
            <ResponseExample title="マルチエージェントシステムの実装">
{`from langchain.agents import initialize_agent, Tool, AgentType
from langchain.llms import OpenAI
from langchain.memory import ConversationBufferMemory

# マネージャーエージェント用のツール定義
manager_tools = [
    Tool(
        name="TaskAnalyzer",
        func=analyze_task,
        description="タスクを分析し、必要なサブタスクに分割する"
    ),
    Tool(
        name="WorkerCoordinator",
        func=coordinate_workers,
        description="ワーカーエージェントにタスクを割り当てる"
    )
]

# ワーカーエージェント用のツール定義
worker_tools = [
    Tool(
        name="DataProcessor",
        func=process_data,
        description="データを処理する"
    ),
    Tool(
        name="APIClient",
        func=call_api,
        description="外部APIを呼び出す"
    )
]

# マネージャーエージェントの初期化
manager_agent = initialize_agent(
    manager_tools,
    OpenAI(temperature=0),
    agent=AgentType.REACT_DOCSTRING,
    verbose=True
)

# ワーカーエージェントの初期化
worker_agent = initialize_agent(
    worker_tools,
    OpenAI(temperature=0),
    agent=AgentType.REACT_DOCSTRING,
    verbose=True
)

# マルチエージェントシステムの実行
result = manager_agent.run("複数のデータソースから情報を取得して、統合レポートを作成してください")`}
            </ResponseExample>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">エージェント間の通信パターン</h2>
            <p>
              マルチエージェントシステムでは、エージェント間の通信方法が重要です。以下は一般的な通信パターンです：
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>順序実行</strong>：エージェントが順番に実行される</li>
              <li><strong>並列実行</strong>：複数のエージェントが同時に実行される</li>
              <li><strong>条件分岐</strong>：結果に基づいて異なるエージェントを実行</li>
              <li><strong>ループ処理</strong>：エージェントが結果を改善するまで繰り返す</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">共有メモリの管理</h2>
            <p>
              マルチエージェントシステムでは、エージェント間でのデータ共有が重要です。以下は共有メモリの実装例です：
            </p>
            <ResponseExample title="共有メモリの実装">
{`from langchain.memory import ConversationBufferMemory

# 共有メモリの作成
shared_memory = ConversationBufferMemory(
    memory_key="shared_context",
    return_messages=True
)

# メモリへのデータ追加
shared_memory.save_context(
    {"input": "初期データ"},
    {"output": "処理結果"}
)

# 複数のエージェントが同じメモリにアクセス
agent1_memory = shared_memory
agent2_memory = shared_memory

# エージェント間でのコンテキスト共有
context = shared_memory.load_memory_variables({})
print(context["shared_context"])`}
            </ResponseExample>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">エラーハンドリングと復旧戦略</h2>
            <p>
              マルチエージェントシステムでは、1つのエージェントの失敗がシステム全体に影響を与える可能性があります。以下のベストプラクティスを参考にしてください：
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>各エージェントの実行結果の検証</li>
              <li>失敗時のリトライロジック</li>
              <li>代替エージェントへのフェイルオーバー</li>
              <li>詳細なエラーログの記録</li>
              <li>システム全体の監視とアラート</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">実践的なユースケース</h2>
            <p>
              マルチエージェントシステムは以下のようなユースケースに適しています：
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>複雑なビジネスプロセスの自動化</li>
              <li>データパイプラインの構築</li>
              <li>カスタマーサポートの多段階処理</li>
              <li>研究・分析タスクの自動実行</li>
              <li>エンタープライズワークフローの自動化</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">次のステップ</h2>
            <p>
              このモジュールで学んだマルチエージェントシステムの設計を踏まえ、次のモジュール（第4回）では、本番環境へのデプロイとCI/CD構築について学びます。
            </p>
          </section>

          <section className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold mb-2">💡 プレミアム会員向け</h3>
            <p>
              このコースはプレミアム会員向けの限定コンテンツです。全4回のモジュールを通じて、AIエージェント開発の実践的なスキルを習得できます。
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
