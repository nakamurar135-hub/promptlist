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
  { id: "intro", label: "構造化出力が変える、AI活用の未来" },
  { id: "why-structured", label: "なぜ構造化出力が必要なのか" },
  { id: "schema-basics", label: "JSON Schemaの基本" },
  { id: "schema-types", label: "基本的なスキーマタイプ", level: 3 as const },
  { id: "schema-validation", label: "バリデーションルールの定義", level: 3 as const },
  { id: "implementation", label: "主要モデルの実装比較" },
  { id: "openai-impl", label: "OpenAI（GPT-4.1）での実装", level: 3 as const },
  { id: "google-impl", label: "Google Gemini での実装", level: 3 as const },
  { id: "anthropic-impl", label: "Anthropic Claude での実装", level: 3 as const },
  { id: "prompt-engineering", label: "プロンプトエンジニアリングとの組み合わせ" },
  { id: "practical-example", label: "実践例：カスタマーレビュー感情分析" },
  { id: "best-practices", label: "構造化出力のベストプラクティス" },
  { id: "troubleshooting", label: "よくある問題と解決策" },
  { id: "summary", label: "まとめ" },
];

const relatedArticles = [
  {
    title: "エージェント型AI（Agentic AI）構築ガイド",
    href: "/articles/agentic-ai-workflow-guide",
    description: "構造化出力はAgentic AIの精度向上に必須。自動ワークフロー構築に活用できます。",
  },
  {
    title: "ChatGPT初心者向け完全活用ガイド",
    href: "/articles/chatgpt-beginner-guide",
    description: "ChatGPTの基本から応用まで。構造化出力の基礎知識を習得できます。",
  },
  {
    title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集",
    href: "/articles/chatgpt-question-template",
    description: "効果的なプロンプト作成方法。構造化出力の指示に活用できます。",
  },
];

export default function LlmStructuredOutputGuide() {
  useSEO({
    title: "LLM構造化出力（Structured Output）実践ガイド｜JSONで確実に受け取る技術",
    description: "2026年最新LLM（GPT-5.4、Gemini 3.1 Pro）の構造化出力機能を使いこなし、AIの回答をプログラマブルに制御する実践手法を解説。",
    keywords: "構造化出力,Structured Output,JSON Schema,LLM,GPT-4.1,Gemini,Claude,プロンプト,AI自動化,API連携",
  });
  useOGP({
    title: "LLM構造化出力（Structured Output）実践ガイド｜JSONで確実に受け取る技術",
    description: "2026年最新LLM（GPT-5.4、Gemini 3.1 Pro）の構造化出力機能を使いこなし、AIの回答をプログラマブルに制御する実践手法を解説。",
    type: "article",
  });
  useStructuredData({
    title: "LLM構造化出力（Structured Output）実践ガイド｜JSONで確実に受け取る技術",
    description: "2026年最新LLM（GPT-5.4、Gemini 3.1 Pro）の構造化出力機能を使いこなし、AIの回答をプログラマブルに制御する実践手法を解説。",
    author: "Manus AI",
    datePublished: "2026-03-28T00:00:00Z",
    dateModified: "2026-03-28T00:00:00Z"
  });

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <ArticleHeader
          title="LLM構造化出力（Structured Output）実践ガイド｜JSONで確実に受け取る技術"
          description="2026年最新LLM（GPT-5.4、Gemini 3.1 Pro）の構造化出力機能を使いこなし、AIの回答をプログラマブルに制御する実践手法を解説。"
          category="AI開発"
          categoryColor="#FF6F00"
          publishedAt="2026年3月28日"
          readingTime="約18分"
        />

        <TableOfContents items={tocItems} />

        <ArticleContent>
          {/* 導入セクション */}
          <section id="intro">
            <h2>構造化出力が変える、AI活用の未来</h2>
            <p>2026年3月、主要なLLM（GPT-5.4、Gemini 3.1 Pro、Claude 3.5 Sonnet）が一斉に「構造化出力（Structured Output）」機能を標準化しました。これは、AIの回答を確実にJSON形式で受け取ることができる革新的な機能です。</p>
            <p>従来のAI活用では、AIの自由記述の回答をパースして、プログラムで処理する必要がありました。しかし構造化出力により、AIが最初からプログラマブルなデータ形式で回答するようになりました。</p>
            <p>本ガイドでは、構造化出力の仕組みを理解し、実際にビジネスアプリケーションに組み込むための実践的な方法をお伝えします。</p>
          </section>

          {/* なぜ構造化出力が必要か */}
          <section id="why-structured">
            <h2>なぜ構造化出力が必要なのか</h2>
            
            <h3>従来の課題：自由記述の限界</h3>
            <p>従来のAIは、自由記述のテキストを返していました。例えば、「顧客レビューの感情分析」をAIに依頼すると、以下のような回答が返ってきます：</p>

            <ResponseExample title="従来の自由記述回答の例">
{`このレビューは非常にポジティブです。顧客は製品の品質に満足しており、特に耐久性と使いやすさを高く評価しています。ただし、価格に関しては若干高いという懸念が示されています。全体的には、このレビューは好意的で、推奨スコアは8/10程度だと考えられます。`}
            </ResponseExample>

            <p>このテキストをプログラムで処理するには、自然言語処理で「感情」「スコア」などを抽出する必要があります。これは複雑で、エラーが発生しやすいプロセスです。</p>

            <h3>構造化出力の利点</h3>
            <p>構造化出力を使用すれば、AIが最初からJSON形式で回答します：</p>

            <ResponseExample title="構造化出力の例">
{`{
  "sentiment": "positive",
  "score": 8,
  "strengths": ["品質", "耐久性", "使いやすさ"],
  "weaknesses": ["価格"],
  "recommendation": true,
  "confidence": 0.95
}`}
            </ResponseExample>

            <p>このJSON形式なら、プログラムで直接処理できます。パースエラーの心配もなく、確実にデータを取得できるのです。</p>

            <div className="flex gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg dark:bg-blue-900/20 dark:border-blue-800 my-6">
              <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5 dark:text-blue-400" />
              <div>
                <p className="font-semibold text-blue-900 dark:text-blue-200">構造化出力の本質</p>
                <p className="text-sm text-blue-800 dark:text-blue-300 mt-1">
                  構造化出力は「AIの不確実性を制御する」ための技術です。AIが返すデータの形式を事前に定義することで、後続のプログラム処理の信頼性を大幅に向上させます。
                </p>
              </div>
            </div>
          </section>

          {/* JSON Schemaの基本 */}
          <section id="schema-basics">
            <h2>JSON Schemaの基本</h2>
            <p>構造化出力を実装するには、JSON Schemaを理解する必要があります。JSON Schemaは、JSONデータの構造と制約を定義するための標準形式です。</p>

            <div id="schema-types">
              <h3>基本的なスキーマタイプ</h3>
              
              <h4>1. オブジェクト型（object）</h4>
              <p>複数のプロパティを持つデータ構造：</p>
              <PromptBlock title="オブジェクト型の例">{`{
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "age": { "type": "integer" },
    "email": { "type": "string", "format": "email" }
  },
  "required": ["name", "age"]
}`}</PromptBlock>

              <h4>2. 配列型（array）</h4>
              <p>複数の要素を持つリスト：</p>
              <PromptBlock title="配列型の例">{`{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "id": { "type": "integer" },
      "title": { "type": "string" }
    }
  },
  "minItems": 1,
  "maxItems": 10
}`}</PromptBlock>

              <h4>3. 列挙型（enum）</h4>
              <p>事前に定義された値のいずれかを選択：</p>
              <PromptBlock title="列挙型の例">{`{
  "type": "string",
  "enum": ["positive", "neutral", "negative"],
  "description": "感情分析の結果"
}`}</PromptBlock>

              <h4>4. 数値型（number/integer）</h4>
              <p>数値データ：</p>
              <PromptBlock title="数値型の例">{`{
  "type": "number",
  "minimum": 0,
  "maximum": 100,
  "description": "信頼度スコア（0-100）"
}`}</PromptBlock>
            </div>

            <div id="schema-validation">
              <h3>バリデーションルールの定義</h3>
              <p>JSON Schemaでは、データの制約を細かく定義できます：</p>

              <table className="w-full border-collapse my-4">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">キーワード</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">説明</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>minLength</code></td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">文字列の最小長</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>"minLength": 5</code></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>maxLength</code></td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">文字列の最大長</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>"maxLength": 100</code></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>pattern</code></td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">正規表現パターン</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>"pattern": "^[0-9]{3}-[0-9]{4}$"</code></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>minimum</code></td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">数値の最小値</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>"minimum": 0</code></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>maximum</code></td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">数値の最大値</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>"maximum": 100</code></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>required</code></td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">必須プロパティ</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code>"required": ["id", "name"]</code></td>
                  </tr>
                </tbody>
              </table>

              <PromptBlock title="バリデーションルール付きスキーマの例">{`{
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "format": "email",
      "minLength": 5,
      "maxLength": 100
    },
    "age": {
      "type": "integer",
      "minimum": 18,
      "maximum": 120
    },
    "phone": {
      "type": "string",
      "pattern": "^[0-9]{3}-[0-9]{4}-[0-9]{4}$"
    }
  },
  "required": ["email", "age"]
}`}</PromptBlock>
            </div>
          </section>

          {/* 実装比較 */}
          <section id="implementation">
            <h2>主要モデルの実装比較</h2>
            <p>2026年3月時点で、主要なLLMプロバイダーが構造化出力機能を提供しています。各社の実装方法を比較しましょう。</p>

            <div id="openai-impl">
              <h3>OpenAI（GPT-4.1）での実装</h3>
              <p>OpenAIは「JSON Mode」と「Structured Outputs」の2つの方法を提供しています。より厳密な制御には「Structured Outputs」を使用します。</p>

              <PromptBlock title="OpenAI Structured Outputs の例">{`import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await client.beta.chat.completions.create({
  model: "gpt-4-turbo",
  messages: [
    {
      role: "user",
      content: "このレビューの感情を分析してください：『素晴らしい製品です！』",
    },
  ],
  response_format: {
    type: "json_schema",
    json_schema: {
      name: "sentiment_analysis",
      schema: {
        type: "object",
        properties: {
          sentiment: {
            type: "string",
            enum: ["positive", "neutral", "negative"],
          },
          score: {
            type: "integer",
            minimum: 0,
            maximum: 10,
          },
          confidence: {
            type: "number",
            minimum: 0,
            maximum: 1,
          },
        },
        required: ["sentiment", "score", "confidence"],
      },
    },
  },
});

console.log(response.choices[0].message.content);`}</PromptBlock>
            </div>

            <div id="google-impl">
              <h3>Google Gemini での実装</h3>
              <p>Google Geminiは「response_schema」パラメータを使用して構造化出力を指定します。</p>

              <PromptBlock title="Google Gemini での実装例">{`import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

const schema = {
  description: "感情分析結果",
  type: "object",
  properties: {
    sentiment: {
      type: "string",
      enum: ["positive", "neutral", "negative"],
      description: "感情分類",
    },
    score: {
      type: "integer",
      description: "スコア（0-10）",
      minimum: 0,
      maximum: 10,
    },
    confidence: {
      type: "number",
      description: "信頼度",
      minimum: 0,
      maximum: 1,
    },
  },
  required: ["sentiment", "score", "confidence"],
};

const response = await model.generateContent({
  contents: [
    {
      role: "user",
      parts: [
        {
          text: "このレビューの感情を分析してください：『素晴らしい製品です！』",
        },
      ],
    },
  ],
  generationConfig: {
    responseMimeType: "application/json",
    responseSchema: schema,
  },
});

console.log(response.response.text());`}</PromptBlock>
            </div>

            <div id="anthropic-impl">
              <h3>Anthropic Claude での実装</h3>
              <p>Claudeは「tool_use」機能を活用して構造化出力を実現します。</p>

              <PromptBlock title="Anthropic Claude での実装例">{`import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const response = await client.messages.create({
  model: "claude-3-5-sonnet-20241022",
  max_tokens: 1024,
  tools: [
    {
      name: "analyze_sentiment",
      description: "レビューの感情を分析する",
      input_schema: {
        type: "object",
        properties: {
          sentiment: {
            type: "string",
            enum: ["positive", "neutral", "negative"],
            description: "感情分類",
          },
          score: {
            type: "integer",
            description: "スコア（0-10）",
            minimum: 0,
            maximum: 10,
          },
          confidence: {
            type: "number",
            description: "信頼度",
            minimum: 0,
            maximum: 1,
          },
        },
        required: ["sentiment", "score", "confidence"],
      },
    },
  ],
  messages: [
    {
      role: "user",
      content: "このレビューの感情を分析してください：『素晴らしい製品です！』",
    },
  ],
});

console.log(response.content);`}</PromptBlock>
            </div>
          </section>

          {/* プロンプトエンジニアリング */}
          <section id="prompt-engineering">
            <h2>プロンプトエンジニアリングとの組み合わせ</h2>
            <p>構造化出力の精度を高めるには、適切なプロンプトエンジニアリングが重要です。スキーマだけでなく、指示文も工夫しましょう。</p>

            <h3>効果的なプロンプトの要素</h3>
            <ol className="space-y-3 list-decimal list-inside">
              <li><strong>タスク定義：</strong>何をすべきかを明確に定義</li>
              <li><strong>入力形式：</strong>入力データの形式を説明</li>
              <li><strong>出力形式：</strong>期待される出力形式をスキーマで示す</li>
              <li><strong>例示：</strong>具体的な入出力例を提示</li>
              <li><strong>制約条件：</strong>守るべきルールを明記</li>
            </ol>

            <PromptBlock title="効果的なプロンプト例">{`あなたは感情分析の専門家です。以下のカスタマーレビューを分析し、感情、スコア、信頼度を返してください。

【タスク】
カスタマーレビューの感情を分析する

【入力形式】
テキスト形式のカスタマーレビュー

【出力形式】
以下のJSON形式で返してください：
{
  "sentiment": "positive" | "neutral" | "negative",
  "score": 0-10の整数,
  "confidence": 0-1の小数
}

【分析ルール】
- sentimentは、レビュー全体の感情を判定してください
- scoreは、満足度を0-10で評価してください（0=非常に不満、10=非常に満足）
- confidenceは、判定の確信度を0-1で示してください（0=確信なし、1=完全に確信）

【例】
入力：「この製品は最高です。品質も良く、価格も手頃です。」
出力：
{
  "sentiment": "positive",
  "score": 9,
  "confidence": 0.95
}`}</PromptBlock>
          </section>

          {/* 実践例 */}
          <section id="practical-example">
            <h2>実践例：カスタマーレビュー感情分析</h2>
            <p>ここでは、構造化出力を使用した実践的なアプリケーションを紹介します。</p>

            <h3>シナリオ</h3>
            <p>ECサイトに毎日数百件のカスタマーレビューが投稿されます。これらを自動的に感情分析し、ポジティブ・ニュートラル・ネガティブに分類して、ダッシュボードに表示する必要があります。</p>

            <PromptBlock title="実装例（Python + OpenAI）">{`import json
import openai

def analyze_reviews(reviews: list[str]) -> list[dict]:
    """
    複数のレビューを感情分析する
    """
    results = []
    
    for review in reviews:
        response = openai.ChatCompletion.create(
            model="gpt-4-turbo",
            messages=[
                {
                    "role": "user",
                    "content": f"以下のレビューを分析してください：\n{review}"
                }
            ],
            response_format={
                "type": "json_schema",
                "json_schema": {
                    "name": "sentiment_analysis",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "sentiment": {
                                "type": "string",
                                "enum": ["positive", "neutral", "negative"]
                            },
                            "score": {
                                "type": "integer",
                                "minimum": 0,
                                "maximum": 10
                            },
                            "key_points": {
                                "type": "array",
                                "items": {"type": "string"},
                                "maxItems": 5
                            },
                            "confidence": {
                                "type": "number",
                                "minimum": 0,
                                "maximum": 1
                            }
                        },
                        "required": ["sentiment", "score", "confidence"]
                    }
                }
            }
        )
        
        # 構造化出力を直接パース
        result = json.loads(response.choices[0].message.content)
        result["original_review"] = review
        results.append(result)
    
    return results

# 使用例
reviews = [
    "素晴らしい製品です。品質も良く、配送も早かった。",
    "まあまあです。特に良くもなく、悪くもありません。",
    "最悪です。すぐに壊れました。"
]

results = analyze_reviews(reviews)

# ダッシュボード用に集計
positive_count = sum(1 for r in results if r["sentiment"] == "positive")
neutral_count = sum(1 for r in results if r["sentiment"] == "neutral")
negative_count = sum(1 for r in results if r["sentiment"] == "negative")
average_score = sum(r["score"] for r in results) / len(results)

print(f"ポジティブ: {positive_count}")
print(f"ニュートラル: {neutral_count}")
print(f"ネガティブ: {negative_count}")
print(f"平均スコア: {average_score:.1f}")`}</PromptBlock>

            <h3>期待される成果</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>全レビューが確実にJSON形式で解析される</li>
              <li>パースエラーがほぼ発生しない</li>
              <li>ダッシュボードに自動的に集計結果が反映される</li>
              <li>処理時間が予測可能になる</li>
            </ul>
          </section>

          {/* ベストプラクティス */}
          <section id="best-practices">
            <h2>構造化出力のベストプラクティス</h2>

            <h3>1. スキーマ設計の原則</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>シンプルに：</strong>必要最小限のプロパティのみを定義</li>
              <li><strong>明確に：</strong>各プロパティの説明を詳しく記述</li>
              <li><strong>制約を設定：</strong>値の範囲や形式を明確に定義</li>
              <li><strong>必須フィールドを明示：</strong>必ず必要なフィールドを「required」で指定</li>
            </ul>

            <h3>2. プロンプト最適化</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>具体的な例を提示：</strong>入出力例を複数提示することで、AIの理解が深まる</li>
              <li><strong>ステップバイステップ指示：</strong>複雑なタスクは段階的に指示</li>
              <li><strong>制約条件を明記：</strong>「〇〇の場合は△△」という条件分岐を明確に</li>
            </ul>

            <h3>3. エラーハンドリング</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>バリデーション：</strong>AIの出力を必ずバリデーションする</li>
              <li><strong>リトライロジック：</strong>失敗時は再度リクエストを送信</li>
              <li><strong>ログ記録：</strong>エラーケースをログに記録して分析</li>
            </ul>

            <h3>4. パフォーマンス最適化</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>バッチ処理：</strong>複数のリクエストを効率的に処理</li>
              <li><strong>キャッシング：</strong>同じ入力に対する結果をキャッシュ</li>
              <li><strong>非同期処理：</strong>複数のリクエストを並列実行</li>
            </ul>
          </section>

          {/* トラブルシューティング */}
          <section id="troubleshooting">
            <h2>よくある問題と解決策</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">問題1：AIが指定されたスキーマに従わない</h3>
                <p><strong>原因：</strong>プロンプトが不明確、またはスキーマが複雑すぎる</p>
                <p><strong>解決策：</strong>プロンプトに具体的な例を追加し、スキーマをシンプルに簡略化</p>
              </div>

              <div>
                <h3 className="font-semibold">問題2：必須フィールドが空になっている</h3>
                <p><strong>原因：</strong>AIが判定できない、またはスキーマの定義が曖昧</p>
                <p><strong>解決策：</strong>「判定できない場合はnullではなく、デフォルト値を返してください」と指示</p>
              </div>

              <div>
                <h3 className="font-semibold">問題3：配列の要素数が不安定</h3>
                <p><strong>原因：</strong>minItems/maxItemsの制約が不明確</p>
                <p><strong>解決策：</strong>スキーマで「最小〇個、最大△個」と明確に指定</p>
              </div>

              <div>
                <h3 className="font-semibold">問題4：レスポンスが遅い</h3>
                <p><strong>原因：</strong>スキーマが複雑、またはプロンプトが長い</p>
                <p><strong>解決策：</strong>スキーマを簡略化し、プロンプトを短縮。バッチ処理を導入</p>
              </div>
            </div>
          </section>

          {/* 注意点セクション */}
          <section id="notice">
            <h2>構造化出力利用時の注意点</h2>
            <div className="flex gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg dark:bg-yellow-900/20 dark:border-yellow-800">
              <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5 dark:text-yellow-500" />
              <div>
                <p className="font-semibold text-yellow-900 dark:text-yellow-200">重要な注意点</p>
                <ul className="mt-2 space-y-2 text-sm text-yellow-800 dark:text-yellow-300 list-disc list-inside">
                  <li>構造化出力は形式の正確性を保証しますが、内容の正確性は保証しません。出力データは必ず検証してください。</li>
                  <li>スキーマの制約が厳しすぎると、AIが出力できず、エラーが発生します。バランスを取ることが重要です。</li>
                  <li>機密情報や個人情報をAIに入力しないようにしてください。</li>
                  <li>構造化出力機能は、モデルやプロバイダーによって実装が異なります。本番環境では十分なテストが必要です。</li>
                </ul>
              </div>
            </div>
          </section>

          {/* まとめセクション */}
          <section id="summary">
            <h2>まとめ</h2>
            <p>構造化出力は、AI活用の信頼性と効率性を大幅に向上させる革新的な技術です。2026年のLLM標準化により、すべての主要モデルで利用可能になりました。</p>
            <p>本ガイドで紹介した「JSON Schemaの基本」「各プロバイダーの実装方法」「プロンプトエンジニアリング」を理解することで、あなたのビジネスアプリケーションに構造化出力を組み込むことができます。</p>
            <p>構造化出力を活用することで、AIの不確実性を制御し、信頼性の高い自動化システムを構築できます。ぜひ、実際のプロジェクトで試してみてください。</p>
          </section>
        </ArticleContent>

        <AffiliateBox
          title="ChatGPT PlusでLLM構造化出力をマスター"
          description="ChatGPT Plusにアップグレードすることで、GPT-4oの構造化出力機能を活用した高度なAPI連携が可能になります。複雑なデータ処理から自動化ワークフロー構築まで、より高度なアプリケーション開発ができます。"
          buttonText="ChatGPT Plusを試す"
          buttonHref="https://chat.openai.com"
        />
        <RelatedArticles articles={relatedArticles} />
      </div>
    </PageLayout>
  );
}
