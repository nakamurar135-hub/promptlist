import PageLayout from "@/components/layout/PageLayout";
import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleContent from "@/components/article/ArticleContent";
import TableOfContents from "@/components/article/TableOfContents";
import PromptBlock from "@/components/article/PromptBlock";
import PromptInfoCard from "@/components/article/PromptInfoCard";
import ResponseExample from "@/components/article/ResponseExample";
import AffiliateBox from "@/components/article/AffiliateBox";
import RelatedArticles from "@/components/article/RelatedArticles";
import { AlertTriangle, Lightbulb } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";
import { useStructuredData } from "@/hooks/useStructuredData";

const tocItems = [
  { id: "intro", label: "Agentic AIとは：デジタル同僚の時代へ" },
  { id: "what-is-agentic", label: "Agentic AIの定義と従来型AIとの違い" },
  { id: "key-concepts", label: "Agentic AI構築の3つの重要概念" },
  { id: "planning", label: "プランニング能力の引き出し方", level: 3 as const },
  { id: "tool-calling", label: "ツール利用（Function Calling）の実践", level: 3 as const },
  { id: "multi-agent", label: "マルチエージェント連携の基礎", level: 3 as const },
  { id: "workflow-design", label: "実践的なワークフロー設計" },
  { id: "case-study", label: "ケーススタディ：競合調査からマーケティング企画まで" },
  { id: "best-practices", label: "Agentic AI実装のベストプラクティス" },
  { id: "challenges", label: "よくある課題と対策" },
  { id: "summary", label: "まとめ" },
];

const relatedArticles = [
  {
    title: "LLM構造化出力（Structured Output）実践ガイド",
    href: "/articles/llm-structured-output-guide",
    description: "AIの回答をJSONで確実に受け取るための技術。Agentic AIの精度向上に必須です。",
  },
  {
    title: "ChatGPT初心者向け完全活用ガイド",
    href: "/articles/chatgpt-beginner-guide",
    description: "ChatGPTの基本から応用まで。Agentic AI構築の基礎知識を習得できます。",
  },
  {
    title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集",
    href: "/articles/chatgpt-question-template",
    description: "効果的なプロンプト作成方法。Agentic AIのプランニング指示に活用できます。",
  },
];

export default function AgenticAiWorkflowGuide() {
  useSEO({
    title: "エージェント型AI（Agentic AI）構築ガイド｜マルチステップ・ワークフロー実装",
    description: "2026年最新トレンド「Agentic AI」を活用し、AIが自ら計画・判断・実行するワークフロー構築方法を解説。業務自動化から複雑なタスク実行まで。",
    keywords: "Agentic AI,エージェント型AI,AI自動化,ワークフロー,Function Calling,マルチエージェント,プロンプト,AI活用,業務効率化,2026",
  });
  useOGP({
    title: "エージェント型AI（Agentic AI）構築ガイド｜マルチステップ・ワークフロー実装",
    description: "2026年最新トレンド「Agentic AI」を活用し、AIが自ら計画・判断・実行するワークフロー構築方法を解説。業務自動化から複雑なタスク実行まで。",
    type: "article",
  });
  useStructuredData({
    title: "エージェント型AI（Agentic AI）構築ガイド｜マルチステップ・ワークフロー実装",
    description: "2026年最新トレンド「Agentic AI」を活用し、AIが自ら計画・判断・実行するワークフロー構築方法を解説。業務自動化から複雑なタスク実行まで。",
    author: "Manus AI",
    datePublished: "2026-03-28T00:00:00Z",
    dateModified: "2026-03-28T00:00:00Z"
  });

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <ArticleHeader
          title="エージェント型AI（Agentic AI）構築ガイド｜マルチステップ・ワークフロー実装"
          description="2026年最新トレンド「Agentic AI」を活用し、AIが自ら計画・判断・実行するワークフロー構築方法を解説。業務自動化から複雑なタスク実行まで。"
          category="AI活用"
          categoryColor="#2196F3"
          publishedAt="2026年3月28日"
          readingTime="約15分"
        />

        <TableOfContents items={tocItems} />

        <ArticleContent>
          {/* 導入セクション */}
          <section id="intro">
            <h2>Agentic AIとは：デジタル同僚の時代へ</h2>
            <p>2026年3月、AI業界は大きなパラダイムシフトを迎えています。従来のChatGPTやClaudeは「質問に答える」受動的なAIでしたが、今、AIは「自ら計画を立て、判断し、行動する」能動的なエージェント（Agent）へと進化しています。</p>
            <p>これが「Agentic AI（エージェント型AI）」です。単なるチャットボットではなく、複数のステップを自動的に実行し、ツールを使い分け、目標達成までの全プロセスを自律的に進めるAIです。</p>
            <p>本ガイドでは、Agentic AIの仕組みを理解し、実際にワークフローを構築するための実践的な方法をお伝えします。</p>
          </section>

          {/* Agentic AIの定義 */}
          <section id="what-is-agentic">
            <h2>Agentic AIの定義と従来型AIとの違い</h2>
            <p>Agentic AIを理解するために、まず従来型のAIとの違いを整理しましょう。</p>
            
            <h3>従来型AI（Reactive AI）の特徴</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>受動的：</strong>ユーザーの質問に対して回答するのみ</li>
              <li><strong>単発処理：</strong>1つの質問に対して1つの回答を生成</li>
              <li><strong>ツール非依存：</strong>外部ツールを呼び出す能力がない</li>
              <li><strong>判断能力なし：</strong>回答の正確性や実行可能性を自ら判断しない</li>
            </ul>

            <h3>Agentic AI（Proactive AI）の特徴</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>能動的：</strong>目標を与えられると、自ら計画を立てて実行</li>
              <li><strong>マルチステップ処理：</strong>複数のステップを順序立てて実行</li>
              <li><strong>ツール活用：</strong>ブラウジング、データ分析、API連携など外部ツールを自由に使用</li>
              <li><strong>自己判断：</strong>回答の正確性を検証し、必要に応じて修正や再実行</li>
            </ul>

            <div className="flex gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg dark:bg-blue-900/20 dark:border-blue-800 my-6">
              <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5 dark:text-blue-400" />
              <div>
                <p className="font-semibold text-blue-900 dark:text-blue-200">Agentic AIの本質</p>
                <p className="text-sm text-blue-800 dark:text-blue-300 mt-1">
                  Agentic AIは「デジタル同僚」です。単なる情報提供者ではなく、あなたの指示を理解し、自ら考え、行動し、結果を報告する存在です。
                </p>
              </div>
            </div>
          </section>

          {/* 3つの重要概念 */}
          <section id="key-concepts">
            <h2>Agentic AI構築の3つの重要概念</h2>
            <p>Agentic AIを実装するには、3つの重要な概念を理解する必要があります。</p>

            <div id="planning">
              <h3>1. プランニング能力の引き出し方</h3>
              <p>Agentic AIの第一歩は「計画立案」です。AIに対して単に「〇〇をしてください」と指示するのではなく、「まず計画を立ててから実行してください」という指示が重要です。</p>
              
              <PromptBlock title="プランニング指示の例">{`あなたは優秀なプロジェクトマネージャーです。以下の目標を達成するための詳細な計画を立ててください。

【目標】
新商品のマーケティング戦略を立案する

【実行ステップ】
1. まず、現在の市場状況を調査する
2. 競合他社の戦略を分析する
3. ターゲット顧客を定義する
4. マーケティング施策を提案する
5. 実行スケジュールを作成する

各ステップについて、具体的なアクション、必要なリソース、期待される成果を記述してください。`}</PromptBlock>

              <PromptInfoCard type="tips" title="プランニング指示のコツ">
                <ul className="space-y-1 list-disc list-inside">
                  <li>「まず計画を立ててから実行する」と明示的に指示する</li>
                  <li>各ステップの目的と期待される成果を明確にする</li>
                  <li>実行順序が重要な場合は、その理由を説明する</li>
                  <li>AIに「判断基準」を与える（例：「重要度が高い順に」）</li>
                </ul>
              </PromptInfoCard>
            </div>

            <div id="tool-calling">
              <h3>2. ツール利用（Function Calling）の実践</h3>
              <p>Agentic AIの強力な特徴は、外部ツールを自由に使用できることです。これを「Function Calling」と呼びます。</p>
              
              <PromptInfoCard type="response" title="Function Callingで利用可能なツール">
                <ul className="space-y-1 list-disc list-inside">
                  <li><strong>ウェブブラウジング：</strong>最新情報の取得、ウェブサイト内容の確認</li>
                  <li><strong>データ分析：</strong>CSVファイルの分析、統計計算</li>
                  <li><strong>コード実行：</strong>Pythonコードの実行、計算処理</li>
                  <li><strong>API連携：</strong>外部サービスとの連携</li>
                  <li><strong>ファイル操作：</strong>ドキュメント作成、データ出力</li>
                </ul>
              </PromptInfoCard>

              <PromptBlock title="Function Calling指示の例">{`あなたはデータアナリストです。以下のタスクを実行してください。

【タスク】
過去3ヶ月の売上データを分析し、トレンドを把握する

【実行手順】
1. 売上データファイルを読み込む
2. 月別の売上推移をグラフ化する
3. 前月比の増減率を計算する
4. トレンドを分析し、原因を推測する
5. 来月の売上予測を提示する

必要に応じて、Pythonコードを実行してデータを処理してください。`}</PromptBlock>
            </div>

            <div id="multi-agent">
              <h3>3. マルチエージェント連携の基礎</h3>
              <p>複雑なタスクを効率的に実行するには、異なる役割を持つ複数のAIエージェントを連携させることが有効です。</p>
              
              <PromptInfoCard type="usecase" title="マルチエージェント活用シーン">
                <ul className="space-y-1 list-disc list-inside">
                  <li><strong>調査エージェント：</strong>市場調査、競合分析</li>
                  <li><strong>分析エージェント：</strong>データ分析、傾向把握</li>
                  <li><strong>企画エージェント：</strong>施策提案、戦略立案</li>
                  <li><strong>実行エージェント：</strong>計画の実行、進捗管理</li>
                </ul>
              </PromptInfoCard>

              <PromptBlock title="マルチエージェント指示の例">{`【エージェント1：調査担当】
市場の最新トレンドと競合他社の動向を調査してください。

【エージェント2：分析担当】
エージェント1の調査結果を分析し、機会と脅威を整理してください。

【エージェント3：企画担当】
エージェント2の分析結果に基づいて、新規事業の企画案を3つ提案してください。

【エージェント4：実行担当】
エージェント3の企画案の中から最も実現可能性が高いものを選定し、実行計画を作成してください。`}</PromptBlock>
            </div>
          </section>

          {/* ワークフロー設計 */}
          <section id="workflow-design">
            <h2>実践的なワークフロー設計</h2>
            <p>Agentic AIの実装には、適切なワークフロー設計が不可欠です。以下は一般的なワークフロー構造です。</p>

            <h3>基本的なワークフロー構造</h3>
            <ol className="space-y-3 list-decimal list-inside">
              <li><strong>入力フェーズ：</strong>ユーザーから目標やタスクを受け取る</li>
              <li><strong>計画フェーズ：</strong>AIが目標達成のための計画を立案する</li>
              <li><strong>実行フェーズ：</strong>計画に基づいて各ステップを実行する</li>
              <li><strong>検証フェーズ：</strong>実行結果が目標を満たしているか検証する</li>
              <li><strong>調整フェーズ：</strong>必要に応じて計画を修正し、再実行する</li>
              <li><strong>出力フェーズ：</strong>最終結果をユーザーに報告する</li>
            </ol>

            <PromptBlock title="ワークフロー実装の例">{`あなたは優秀なコンサルタントです。以下のワークフローに従って、顧客の課題を解決してください。

【ステップ1：課題の理解】
顧客の現状、目標、制約条件を整理してください。

【ステップ2：計画立案】
課題解決のための詳細な計画を立ててください。各ステップの目的、アクション、期待される成果を記述してください。

【ステップ3：実行】
計画に基づいて各ステップを実行してください。必要に応じて、外部ツールやデータを活用してください。

【ステップ4：検証】
実行結果が目標を満たしているか検証してください。不足している点があれば、修正案を提示してください。

【ステップ5：報告】
最終結果を、顧客が理解しやすい形式で報告してください。`}</PromptBlock>
          </section>

          {/* ケーススタディ */}
          <section id="case-study">
            <h2>ケーススタディ：競合調査からマーケティング企画まで</h2>
            <p>ここでは、Agentic AIを実際に活用した具体的なケースを紹介します。</p>

            <h3>シナリオ</h3>
            <p>あなたはスタートアップの経営者です。新商品を市場に投入する予定ですが、市場の状況、競合他社の戦略、ターゲット顧客のニーズを把握する必要があります。通常なら数日かかるこの調査を、Agentic AIで1時間で完了させます。</p>

            <PromptBlock title="Agentic AI指示">{`あなたは優秀なマーケティングコンサルタントです。以下の新商品に対して、包括的なマーケティング戦略を立案してください。

【新商品情報】
- 商品名：AI-powered プロジェクト管理ツール
- 特徴：AIが自動的にプロジェクトの進捗を管理し、リスク予測を行う
- ターゲット：中小企業のプロジェクトマネージャー

【実行手順】
1. 市場調査：プロジェクト管理ツール市場の規模、成長率、トレンドを調査
2. 競合分析：主要な競合製品（Asana、Monday.com、Jira等）の機能、価格、ユーザー評価を分析
3. ターゲット分析：ターゲット顧客のニーズ、課題、購買行動を分析
4. 差別化戦略：競合との差別化ポイントを明確にする
5. マーケティング施策：オンライン広告、PR、パートナーシップなど、具体的な施策を提案
6. 実行計画：各施策の実行スケジュール、予算、KPIを定義

各ステップで、ウェブ検索やデータ分析を活用してください。最終的に、実行可能なマーケティング計画書を作成してください。`}</PromptBlock>

            <h3>期待される成果</h3>
            <p>このAgentic AI指示により、以下のような成果が得られます：</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>市場規模と成長率の具体的なデータ</li>
              <li>競合製品の詳細な比較表</li>
              <li>ターゲット顧客のペルソナ定義</li>
              <li>実装可能なマーケティング施策リスト</li>
              <li>3ヶ月間の実行スケジュール</li>
              <li>各施策のKPI定義</li>
            </ul>
          </section>

          {/* ベストプラクティス */}
          <section id="best-practices">
            <h2>Agentic AI実装のベストプラクティス</h2>
            
            <h3>1. 明確な目標設定</h3>
            <p>Agentic AIを効果的に活用するには、目標を明確に定義することが重要です。曖昧な指示では、AIも曖昧な結果しか生成できません。</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>「〇〇について調べてください」ではなく「〇〇について、△△の観点から調べ、□□の形式で報告してください」と具体的に指示</li>
              <li>期限、予算、リソースなどの制約条件を明確にする</li>
              <li>成功の基準を定義する（KPI、評価指標）</li>
            </ul>

            <h3>2. 段階的な指示</h3>
            <p>複雑なタスクは、一度に指示するのではなく、段階的に指示することが効果的です。</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>大きなタスクを小さなサブタスクに分割</li>
              <li>各ステップの成果物を明確に定義</li>
              <li>前のステップの成果が次のステップの入力になるようにする</li>
            </ul>

            <h3>3. 検証と反復</h3>
            <p>Agentic AIの出力は常に正確とは限りません。検証と反復が重要です。</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>AIの出力を必ず人間が確認する</li>
              <li>不正確な部分があれば、AIに修正を指示</li>
              <li>複数回の反復を通じて、精度を高める</li>
            </ul>

            <h3>4. 適切なツール選択</h3>
            <p>Agentic AIの性能は、利用するLLMモデルに大きく依存します。</p>
            <ul className="space-y-1 list-disc list-inside">
              <li><strong>GPT-4.1以上：</strong>複雑な推論が必要なタスク</li>
              <li><strong>Gemini 3.1 Pro：</strong>マルチモーダル処理が必要なタスク</li>
              <li><strong>Claude 3.5 Sonnet：</strong>長文処理と正確性が重要なタスク</li>
            </ul>
          </section>

          {/* よくある課題 */}
          <section id="challenges">
            <h2>よくある課題と対策</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">課題1：AIが勝手に判断を変えてしまう</h3>
                <p><strong>対策：</strong>「以下の判断基準に従ってください」と明確な基準を提示。AIに判断基準を与えることで、一貫性のある実行が可能になります。</p>
              </div>

              <div>
                <h3 className="font-semibold">課題2：実行結果が期待と異なる</h3>
                <p><strong>対策：</strong>「期待される成果」を具体的に定義。テンプレートや例を提示することで、AIが正確に理解できます。</p>
              </div>

              <div>
                <h3 className="font-semibold">課題3：ツール利用がうまくいかない</h3>
                <p><strong>対策：</strong>「以下のツールを使用してください」と明示的に指示。AIに利用可能なツールを認識させることが重要です。</p>
              </div>

              <div>
                <h3 className="font-semibold">課題4：実行時間が長い</h3>
                <p><strong>対策：</strong>タスクを並列化可能なサブタスクに分割。複数のエージェントに同時実行させることで、総実行時間を短縮できます。</p>
              </div>
            </div>
          </section>

          {/* 注意点セクション */}
          <section id="notice">
            <h2>Agentic AI利用時の注意点</h2>
            <div className="flex gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg dark:bg-yellow-900/20 dark:border-yellow-800">
              <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5 dark:text-yellow-500" />
              <div>
                <p className="font-semibold text-yellow-900 dark:text-yellow-200">重要な注意点</p>
                <ul className="mt-2 space-y-2 text-sm text-yellow-800 dark:text-yellow-300 list-disc list-inside">
                  <li>Agentic AIが生成した情報は、必ず人間が検証してください。特に重要な意思決定には、複数の情報源で確認が必要です。</li>
                  <li>機密情報や個人情報をAIに入力しないようにしてください。</li>
                  <li>AIの自動実行は、予期しない結果をもたらす可能性があります。重要なアクションは事前に人間の承認を得てください。</li>
                  <li>著作権や法的責任に関わるタスクについては、法的アドバイスを求めることをお勧めします。</li>
                </ul>
              </div>
            </div>
          </section>

          {/* まとめセクション */}
          <section id="summary">
            <h2>まとめ</h2>
            <p>Agentic AIは、単なるチャットボットから「デジタル同僚」へのシフトを象徴しています。2026年のAI活用では、Agentic AIの理解と実装が競争力の源泉となるでしょう。</p>
            <p>本ガイドで紹介した「プランニング能力」「ツール利用」「マルチエージェント連携」の3つの概念を理解し、段階的に実装することで、あなたのビジネスにAgentic AIの力を取り入れることができます。</p>
            <p>まずは小さなタスクから始めて、Agentic AIの可能性を体験してみてください。その先には、新しいビジネス機会が広がっています。</p>
          </section>
        </ArticleContent>

        <AffiliateBox
          title="ChatGPT PlusでAgentic AI構築をもっと強力に"
          description="ChatGPT Plusにアップグレードすることで、GPT-4oの高度なプランニング能力とFunction Calling機能を活用したAgentic AI構築が可能になります。複雑なワークフロー自動化から市場調査まで、より高度なタスク実行ができます。"
          buttonText="ChatGPT Plusを試す"
          buttonHref="https://chat.openai.com"
        />
        <RelatedArticles articles={relatedArticles} />
      </div>
    </PageLayout>
  );
}
