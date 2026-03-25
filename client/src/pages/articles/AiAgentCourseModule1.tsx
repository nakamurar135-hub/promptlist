import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";
import { useStructuredData } from "@/hooks/useStructuredData";
import PageLayout from "@/components/layout/PageLayout";
import ArticleHeader from "@/components/article/ArticleHeader";
import { Code, Terminal, FileText, Lock } from "lucide-react";

export default function AiAgentCourseModule1() {
  useSEO({
    title: "Gitと始めるAIエージェント開発環境構築｜AIプロンプト活用ガイド",
    description:
      "Gitでのバージョン管理を前提とした、AIエージェントのローカル開発環境構築とプロジェクトの初期設定方法を学ぶ。Python仮想環境、OpenAI・LangChainライブラリ、環境変数の安全な管理まで、実践的なハンズオンガイド。",
    keywords:
      "AIエージェント,開発環境,Git,Python,仮想環境,LangChain,OpenAI,環境変数",
  });

  useOGP({
    title: "Gitと始めるAIエージェント開発環境構築｜AIプロンプト活用ガイド",
    description:
      "Gitでのバージョン管理を前提とした、AIエージェントのローカル開発環境構築とプロジェクトの初期設定方法を学ぶ。",
    type: "article",
  });

  useStructuredData({
    title: "Gitと始めるAIエージェント開発環境構築｜AIプロンプト活用ガイド",
    description:
      "Gitでのバージョン管理を前提とした、AIエージェントのローカル開発環境構築とプロジェクトの初期設定方法を学ぶ。",
    datePublished: new Date().toISOString(),
    author: "AIプロンプト活用ガイド",
  });

  return (
    <PageLayout>
      <ArticleHeader
        title="Gitと始めるAIエージェント開発環境構築"
        category="中級者向けコース"
        categoryColor="#7C3AED"
        description="Gitでのバージョン管理を前提とした、AIエージェントのローカル開発環境構築とプロジェクトの初期設定方法を学ぶ。"
        publishedAt="2025年1月1日"
        readingTime="絀15分"
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose dark:prose-invert max-w-none">
          {/* はじめに */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              はじめに
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              このコースへようこそ。本講座は、Gitの基本知識を持つ開発者を対象に、AIエージェントの開発からデプロイ、運用までを体系的に学ぶためのプレミアム講座です。
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              第1回となる本記事では、AIエージェント開発に必要なローカル開発環境をセットアップします。Pythonの仮想環境、必要なライブラリ、そしてGitを使ったバージョン管理の基本を、実践的に学んでいきましょう。
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6 rounded">
              <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-2">
                本講座のゴール
              </h3>
              <ul className="text-blue-800 dark:text-blue-300 space-y-1 text-sm">
                <li>
                  ✓ AIエージェント開発に必要な環境をセットアップできる
                </li>
                <li>✓ Gitを使ったバージョン管理の基本を理解できる</li>
                <li>✓ 最初のAIエージェントプログラムを実行できる</li>
              </ul>
            </div>
          </section>

          {/* ローカル開発環境のセットアップ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ローカル開発環境のセットアップ
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3 flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              Pythonのインストール確認
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              まず、Pythonがインストールされているか確認しましょう。ターミナルで以下のコマンドを実行してください。
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
              <code>$ python --version</code>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Python 3.8以上がインストールされていることを確認してください。もしインストールされていない場合は、公式ウェブサイトからダウンロードしてください。
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3 flex items-center gap-2 mt-8">
              <Code className="w-5 h-5" />
              仮想環境の構築と有効化
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Pythonの仮想環境を使うことで、プロジェクトごとに独立した環境を構築できます。これにより、ライブラリのバージョン競合を避けることができます。
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
              <code className="block mb-2">
                # プロジェクトディレクトリを作成
              </code>
              <code className="block mb-4">$ mkdir ai-agent-project && cd ai-agent-project</code>
              <code className="block mb-2">
                # 仮想環境を作成
              </code>
              <code className="block mb-4">$ python -m venv .venv</code>
              <code className="block mb-2">
                # 仮想環境を有効化（macOS/Linux）
              </code>
              <code className="block mb-4">$ source .venv/bin/activate</code>
              <code className="block mb-2">
                # 仮想環境を有効化（Windows）
              </code>
              <code className="block">$ .venv\Scripts\activate</code>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3 flex items-center gap-2 mt-8">
              <FileText className="w-5 h-5" />
              必要なライブラリのインストール
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              仮想環境が有効化されたら、AIエージェント開発に必要なライブラリをインストールします。
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
              <code>$ pip install openai langchain python-dotenv</code>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              各ライブラリの役割：
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              <li>
                <strong>openai</strong>：OpenAI APIを使用するための公式ライブラリ
              </li>
              <li>
                <strong>langchain</strong>：LLMアプリケーション開発のフレームワーク
              </li>
              <li>
                <strong>python-dotenv</strong>：環境変数を.envファイルから読み込む
              </li>
            </ul>
          </section>

          {/* プロジェクトの初期化とGit管理 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              プロジェクトの初期化とGit管理
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Gitを使ったバージョン管理を開始しましょう。これにより、コードの変更履歴を追跡し、チーム開発を効率化できます。
            </p>

            <div className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
              <code className="block mb-2">
                # Gitリポジトリを初期化
              </code>
              <code className="block mb-4">$ git init</code>
              <code className="block mb-2">
                # 基本的なファイル構成を作成
              </code>
              <code className="block mb-4">$ touch main.py requirements.txt .gitignore</code>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              次に、requirements.txtにインストール済みのライブラリを記録します。
            </p>

            <div className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
              <code>$ pip freeze {'>'} requirements.txt</code>
            </div>
          </section>

          {/* APIキーと環境変数の安全な管理 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Lock className="w-6 h-6" />
              APIキーと環境変数の安全な管理
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              OpenAI APIキーなどの機密情報は、絶対にコードに直接埋め込んではいけません。.envファイルを使って安全に管理しましょう。
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-6 rounded">
              <h3 className="font-bold text-red-900 dark:text-red-200 mb-2">
                ⚠️ 重要な注意
              </h3>
              <p className="text-red-800 dark:text-red-300 text-sm">
                APIキーをGitリポジトリにコミットしてはいけません。.gitignoreファイルで.envを除外することが必須です。
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3 mt-8">
              .envファイルの作成
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              プロジェクトルートに.envファイルを作成し、APIキーを保存します。
            </p>

            <div className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
              <code className="block">OPENAI_API_KEY=your_api_key_here</code>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3 mt-8">
              .gitignoreの設定
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              .gitignoreファイルに.envを追加して、Gitがこのファイルを追跡しないようにします。
            </p>

            <div className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
              <code className="block mb-2"># Environment variables</code>
              <code className="block mb-2">.env</code>
              <code className="block mb-2">.env.local</code>
              <code className="block mb-2"></code>
              <code className="block mb-2"># Python</code>
              <code className="block mb-2">__pycache__/</code>
              <code className="block mb-2">*.py[cod]</code>
              <code className="block mb-2">*$py.class</code>
              <code className="block mb-2"></code>
              <code className="block mb-2"># Virtual environment</code>
              <code className="block">.venv/</code>
            </div>
          </section>

          {/* Hello, AI Agent! */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Hello, AI Agent!：最初のプログラム
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              それでは、最初のAIエージェントプログラムを作成しましょう。main.pyファイルに以下のコードを記述します。
            </p>

            <div className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
              <code className="block mb-2">
                from openai import OpenAI
              </code>
              <code className="block mb-2">from dotenv import load_dotenv</code>
              <code className="block mb-2">import os</code>
              <code className="block mb-4"></code>
              <code className="block mb-2">
                # .envファイルから環境変数を読み込む
              </code>
              <code className="block mb-4">load_dotenv()</code>
              <code className="block mb-4"></code>
              <code className="block mb-2">
                # OpenAI APIクライアントを初期化
              </code>
              <code className="block mb-4">
                client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
              </code>
              <code className="block mb-4"></code>
              <code className="block mb-2">
                # ChatGPT APIを呼び出し
              </code>
              <code className="block mb-2">response = client.chat.completions.create(</code>
              <code className="block mb-2">    model="gpt-4",</code>
              <code className="block mb-2">    messages=[</code>
              <code className="block mb-2">
                        {'{'}role: "system", content: "You are a helpful AI agent."{'}'},
              </code>
              <code className="block mb-2">
                        {'{'}role: "user", content: "Hello, AI Agent!"{'}'}
              </code>
              <code className="block mb-2">    ]</code>
              <code className="block mb-4">)</code>
              <code className="block mb-4"></code>
              <code className="block">
                print(response.choices[0].message.content)
              </code>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              プログラムを実行してみましょう。
            </p>

            <div className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
              <code>$ python main.py</code>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              ChatGPTからの応答が表示されれば、セットアップは成功です！
            </p>
          </section>

          {/* 最初のコミット */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              最初のコミット
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              それでは、作成したファイルをGitにコミットしましょう。
            </p>

            <div className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
              <code className="block mb-2">
                # ファイルをステージングエリアに追加
              </code>
              <code className="block mb-4">$ git add main.py requirements.txt .gitignore</code>
              <code className="block mb-2">
                # コミットを作成
              </code>
              <code className="block">
                $ git commit -m "feat: Initialize AI agent project with OpenAI API"
              </code>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              コミットメッセージは、変更内容を簡潔に説明することが重要です。これにより、後で変更履歴を追跡しやすくなります。
            </p>
          </section>

          {/* まとめ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              まとめと次回予告
            </h2>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6 rounded">
              <h3 className="font-bold text-green-900 dark:text-green-200 mb-2">
                ✓ 本記事で学んだこと
              </h3>
              <ul className="text-green-800 dark:text-green-300 space-y-1 text-sm">
                <li>✓ Python仮想環境のセットアップ方法</li>
                <li>✓ OpenAI・LangChainなどのライブラリのインストール</li>
                <li>✓ Gitを使ったバージョン管理の基本</li>
                <li>✓ 環境変数を使った機密情報の安全な管理</li>
                <li>✓ 最初のAIエージェントプログラムの実行</li>
              </ul>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              次回の第2回では、AIエージェントの思考・行動サイクル「ReAct」フレームワークを実装します。Web検索やファイル操作などのツールを連携させ、自律的にタスクを遂行するエージェントを構築していきます。
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              開発環境の準備ができたら、次のステップに進む準備は完了です。楽しいAIエージェント開発の旅を始めましょう！
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
