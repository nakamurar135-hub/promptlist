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

export default function AiAgentCourseModule2() {
  useSEO({
    title: "ReActフレームワークで実践的なAIエージェント構築｜AIプロンプト活用ガイド",
    description: "ReActフレームワークを使用した実践的なAIエージェント構築方法。思考・行動・観察のループを実装し、複雑なタスクを自動化するエージェントの開発方法を学びます。",
    keywords: "ReAct,AIエージェント,LangChain,自動化,中級者向け",
  });

  useOGP({
    title: "ReActフレームワークで実践的なAIエージェント構築｜AIプロンプト活用ガイド",
    description: "ReActフレームワークを使用した実践的なAIエージェント構築方法。思考・行動・観察のループを実装し、複雑なタスクを自動化するエージェントの開発方法を学びます。",
    type: "article",
  });

  useStructuredData({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ReActフレームワークで実践的なAIエージェント構築",
    description: "ReActフレームワークを使用した実践的なAIエージェント構築方法。思考・行動・観察のループを実装し、複雑なタスクを自動化するエージェントの開発方法を学びます。",
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
          <h1 className="text-4xl font-bold mb-4">ReActフレームワークで実践的なAIエージェント構築</h1>
          <p className="text-lg text-muted-foreground mb-4">
            第2回：思考・行動・観察のループを実装したAIエージェント開発
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
              第1回で環境構築を完了した皆さんに向けて、このモジュールではReActフレームワークを使用した実践的なAIエージェント構築方法を学びます。ReActは「Reasoning + Acting」の略で、LLMが思考・行動・観察を繰り返すことで、複雑なタスクを自動化するフレームワークです。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">ReActフレームワークの基本概念</h2>
            <p>
              ReActフレームワークは以下の3つのステップを繰り返します：
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>思考（Thought）</strong>：現在の状況を分析し、次に何をすべきかを考える</li>
              <li><strong>行動（Action）</strong>：思考に基づいて、利用可能なツールを使用してアクションを実行する</li>
              <li><strong>観察（Observation）</strong>：アクションの結果を観察し、次のステップに活かす</li>
            </ul>
            <p>
              このループにより、LLMは単純な質問応答ではなく、複数のステップを必要とする複雑なタスクを自動化できます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">LangChainでのReAct実装</h2>
            <p>
              LangChainは、ReActフレームワークを簡単に実装するためのツールを提供しています。以下は基本的な実装例です：
            </p>
            <ResponseExample title="ReActエージェントの基本実装">
{`from langchain.agents import initialize_agent, Tool
from langchain.agents import AgentType
from langchain.llms import OpenAI

# ツールの定義
tools = [
    Tool(
        name="Calculator",
        func=lambda x: str(eval(x)),
        description="数学計算を実行する"
    ),
    Tool(
        name="Search",
        func=search_function,
        description="ウェブ検索を実行する"
    )
]

# エージェントの初期化
agent = initialize_agent(
    tools,
    OpenAI(temperature=0),
    agent=AgentType.REACT_DOCSTRING,
    verbose=True
)

# エージェントの実行
result = agent.run("2024年の日本のGDPは？")
print(result)`}
            </ResponseExample>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">カスタムツールの作成</h2>
            <p>
              エージェントの力を最大限に引き出すには、タスクに特化したカスタムツールを作成することが重要です。以下は、データベースクエリツールの例です：
            </p>
            <ResponseExample title="カスタムツールの実装例">
{`from langchain.tools import Tool
from typing import Any

def query_database(query: str) -> str:
    """
    データベースにクエリを実行し、結果を返す
    """
    try:
        # データベース接続とクエリ実行
        connection = create_db_connection()
        result = connection.execute(query)
        return str(result.fetchall())
    except Exception as e:
        return f"エラー: {str(e)}"

# ツールの登録
db_tool = Tool(
    name="DatabaseQuery",
    func=query_database,
    description="SQLクエリを実行してデータベースから情報を取得する。入力はSQLクエリ文字列。"
)

# エージェントに追加
tools.append(db_tool)`}
            </ResponseExample>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">エージェントのメモリ管理</h2>
            <p>
              複雑なタスクを実行する場合、エージェントが過去のステップを記憶していることが重要です。LangChainはメモリ管理機能を提供しています：
            </p>
            <ResponseExample title="メモリ付きエージェントの実装">
{`from langchain.memory import ConversationBufferMemory

# メモリの初期化
memory = ConversationBufferMemory(memory_key="chat_history")

# メモリ付きエージェントの作成
agent = initialize_agent(
    tools,
    OpenAI(temperature=0),
    agent=AgentType.CONVERSATIONAL_REACT_DESCRIPTION,
    memory=memory,
    verbose=True
)

# 複数のステップを含むタスク実行
result = agent.run("昨日のデータと今日のデータを比較して、増減を教えて")`}
            </ResponseExample>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">エラーハンドリングとデバッグ</h2>
            <p>
              本番環境でのエージェント運用には、適切なエラーハンドリングが必須です。以下のベストプラクティスを参考にしてください：
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>ツール実行時のタイムアウト設定</li>
              <li>入力値の検証とサニタイズ</li>
              <li>エージェントの最大ステップ数制限</li>
              <li>詳細なログ記録</li>
              <li>フォールバック戦略の実装</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">実践的なユースケース</h2>
            <p>
              ReActフレームワークは以下のようなユースケースに適しています：
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>複数のAPI呼び出しが必要なタスク自動化</li>
              <li>データ分析と意思決定</li>
              <li>カスタマーサポートの自動化</li>
              <li>研究・調査タスクの自動化</li>
              <li>複雑なワークフローの自動実行</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">次のステップ</h2>
            <p>
              このモジュールで学んだReActフレームワークの基礎を踏まえ、次のモジュール（第3回）では、複数のエージェントを連携させるマルチエージェントシステムの設計と実装について学びます。
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
