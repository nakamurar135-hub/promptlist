"use client";

import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import TableOfContents from "@/components/article/TableOfContents"
import PromptBlock from "@/components/article/PromptBlock"
import PromptInfoCard from "@/components/article/PromptInfoCard"
import RelatedArticles from "@/components/cta/RelatedArticles"
import ResponseExample from "@/components/article/ResponseExample"
import { useSEO } from "@/hooks/useSEO"
import { useOGP } from "@/hooks/useOGP"
import { useStructuredData } from "@/hooks/useStructuredData"

// 共通設定
const headerProps = {
  logoSrc: "/images/logo.png",
  siteName: "AIプロンプト活用ガイド",
  navItems: [
    { label: "ホーム", href: "/" },
    { label: "記事一覧", href: "/articles" },
    { label: "プライバシーポリシー", href: "/privacy" },
  ],
}

const footerProps = {
  categories: [
    {
      name: "ドキュメント作成・編集",
      articles: [
        { title: "AIと「一緒に作る」新体験！ChatGPTの『Canvas』で文章・資料作成を10倍楽にするプロンプト術", href: "/articles/chatgpt-canvas-beginner" },
        { title: "ChatGPT Canvasで実現する「自律型ドキュメント作成」ワークフロー", href: "/articles/chatgpt-canvas-advanced" },
      ],
    },
    {
      name: "複雑なタスク自動化",
      articles: [
        { title: "GPT-5.5「Thinking」で実現する「自律型多段階ワークフロー」構築術", href: "/articles/gpt5-5-thinking-workflow" },
        { title: "AIエージェントで業務自動化！自律型ワークフロー構築プロンプト術", href: "/articles/ai-agent-workflow" },
      ],
    },
  ],
  copyright: "© 2026 AIプロンプト活用ガイド All Rights Reserved.",
}

// 目次データ
const headings = [
  { id: "introduction", text: "Canvasは「共同編集」から「自律型作成」へ進化", level: 2 as const },
  { id: "what-is-canvas-advanced", text: "ChatGPT Canvasの高度な活用とは？", level: 2 as const },
  { id: "structural-outline-expansion", text: "テクニック1：構造化アウトラインからの自動展開", level: 2 as const },
  { id: "multi-perspective-review", text: "テクニック2：多角的レビュープロンプト", level: 2 as const },
  { id: "version-management", text: "テクニック3：バージョン管理と差分修正", level: 2 as const },
  { id: "practical-examples", text: "実践例：複雑なドキュメント作成ワークフロー", level: 2 as const },
  { id: "tips-for-mastery", text: "Canvasを使いこなすための黄金ルール", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// プロンプトデータ
const prompts = {
  structuralOutline: `【ドキュメント構造化プロンプト】
以下のテーマについて、Canvas上で構造化ドキュメントを作成してください。
テーマ：「2026年のAI活用トレンド」
要件：
・セクション1：市場概況（300字）
・セクション2：主要3つのトレンド（各200字）
・セクション3：企業への影響（400字）
・セクション4：今後の展望（200字）

まずは、各セクションの見出しと1-2行の概要をCanvasに表示してください。その後、私の指示に基づいて各セクションを肉付けしていきます。`,

  multiPerspectiveReview: `【多角的レビュープロンプト】
Canvas上の「AIエージェント導入ガイド」について、以下の3つの視点から推敲してください。
1. 法務部の視点：コンプライアンスリスクの記載は十分か？
2. マーケティング部の視点：顧客への訴求ポイントは明確か？
3. エンジニアリング部の視点：技術的な正確性は保たれているか？

各視点での指摘を、Canvas上で【法務】【マーケティング】【エンジニアリング】のセクションに分けて表示してください。`,

  versionManagement: `【バージョン管理プロンプト】
Canvas上の「製品紹介資料」について、以下のステップで段階的に改善してください。
ステップ1：現在のドキュメントを「v1.0（初稿）」として保存
ステップ2：営業チームの意見を反映した「v1.1（営業版）」を作成
ステップ3：顧客フィードバックを反映した「v2.0（最終版）」を作成

各バージョン間の変更点を「【変更履歴】」セクションに記録してください。`,

  responseExample: `【Canvas上での構造化ドキュメント作成の流れ】

## 2026年のAI活用トレンド

### セクション1：市場概況
[概要を表示中...]

### セクション2：主要3つのトレンド
1. **自律型エージェントの普及**
2. **マルチモーダルAIの進化**
3. **エッジAIの実装加速**

### セクション3：企業への影響
[詳細を入力待機中...]

### セクション4：今後の展望
[展望を入力待機中...]

---
**次のステップ**：「セクション1の市場概況について、具体的な市場規模データを追加してください」という指示を待機中...`,
}

// 関連記事データ
const relatedArticles = [
  {
    title: "AIと「一緒に作る」新体験！ChatGPTの『Canvas』で文章・資料作成を10倍楽にするプロンプト術",
    description: "ChatGPT Canvasの基礎から実践的な使い方まで、初心者向けに解説",
    href: "/articles/chatgpt-canvas-beginner",
  },
  {
    title: "GPT-5.5「Thinking」で実現する「自律型多段階ワークフロー」構築術",
    description: "AIが自ら計画を立て、複雑なタスクを完結させる方法",
    href: "/articles/gpt5-5-thinking-workflow",
  },
  {
    title: "AIエージェントで業務自動化！自律型ワークフロー構築プロンプト術",
    description: "複雑な業務プロセスをAIに任せる実践的なテクニック",
    href: "/articles/ai-agent-workflow",
  },
]

export default function ChatGPTCanvasAdvancedPage() {
  const title = "ChatGPT Canvasで実現する「自律型ドキュメント作成」ワークフロー";
  const description = "ChatGPT Canvasの高度な活用法を解説。構造化アウトラインからの自動展開、多角的レビュー、バージョン管理など、複雑なドキュメント作成を効率化するプロンプト術を紹介します。";
  const keywords = "ChatGPT, Canvas, ドキュメント作成, ワークフロー, 中級者, プロンプト, 自動化, 業務効率化, AI活用";
  const url = typeof window !== 'undefined' ? window.location.href : "";

  useSEO({
    title: `${title} | AIプロンプト活用ガイド`,
    description,
    keywords,
  });

  useOGP({
    title,
    description,
    type: "article",
    image: "/images/placeholder.jpg",
    url,
  });

  useStructuredData({
    title,
    description,
    author: "AIプロンプト活用ガイド",
    datePublished: "2026-05-05T00:00:00Z",
    dateModified: "2026-05-05T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年5月5日"
          updatedAt="2026年5月5日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Canvasは「共同編集」から「自律型作成」へ進化
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              ChatGPT Canvasは、初心者向けには「AIと一緒に文章を作る便利ツール」として認識されていますが、中級者以上が使うと、その真価は**「複雑なドキュメント作成の全工程を自動化するワークフロー基盤」**として機能します。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              従来のChatGPTでは、長いドキュメント作成時に以下の課題がありました：
            </p>
            <ul className="list-disc list-inside mb-4 text-[#333333]">
              <li>テキストが長くなると、前のセクションの内容が忘れられる</li>
              <li>修正指示が複雑になると、AIが混乱する</li>
              <li>複数の視点からの推敲が手作業になる</li>
            </ul>
            <p className="text-[#333333] leading-relaxed">
              Canvasはこれらの課題を解決し、**構造化されたドキュメント作成プロセス全体をAIと共同で進める**ことを可能にします。
            </p>
          </section>

          <section id="what-is-canvas-advanced" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ChatGPT Canvasの高度な活用とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Canvasの高度な活用は、以下の3つのテクニックを組み合わせることで実現します：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-bold mb-2">1. 構造化アウトライン</h3>
                <p className="text-sm">セクション単位で段階的に肉付けする</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-bold mb-2">2. 多角的レビュー</h3>
                <p className="text-sm">複数の視点から推敲を自動化する</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-bold mb-2">3. バージョン管理</h3>
                <p className="text-sm">段階的な改善を履歴として保持する</p>
              </div>
            </div>
          </section>

          <section id="structural-outline-expansion" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              テクニック1：構造化アウトラインからの自動展開
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              複雑なドキュメント作成では、最初に「全体構造」を決めることが重要です。Canvasを使えば、この構造化プロセスを効率的に進められます。
            </p>
            <PromptBlock
              title="構造化ドキュメント作成プロンプト"
              prompt={prompts.structuralOutline}
            />
            <PromptInfoCard type="tips" title="このテクニックのメリット">
              最初に全体の「骨組み」をCanvasに表示させることで、AIとユーザーが同じ構造を共有できます。その後、「セクション2を詳しく書いて」という指示が正確に伝わり、AIも「どこまで書くべきか」を理解しやすくなります。
            </PromptInfoCard>
          </section>

          <section id="multi-perspective-review" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              テクニック2：多角的レビュープロンプト
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              ドキュメントの品質を高めるには、複数の視点からの推敲が欠かせません。Canvasなら、これを一度のプロンプトで実現できます。
            </p>
            <PromptBlock
              title="多角的レビュープロンプト"
              prompt={prompts.multiPerspectiveReview}
            />
            <PromptInfoCard type="tips" title="複数の「ペルソナ」を同時に活用">
              「法務の視点で」「マーケティングの視点で」といった指示により、AIは異なる専門分野の観点から同じドキュメントを評価します。これにより、一人のレビュアーでは見落とす問題を発見できます。
            </PromptInfoCard>
          </section>

          <section id="version-management" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              テクニック3：バージョン管理と差分修正
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              ドキュメント作成は「一度で完成」ではなく、段階的な改善プロセスです。Canvasでは、この改善の履歴を明確に管理できます。
            </p>
            <PromptBlock
              title="バージョン管理プロンプト"
              prompt={prompts.versionManagement}
            />
            <PromptInfoCard type="tips" title="変更履歴の記録が重要">
              各バージョン間の「何が変わったか」を明記することで、後で「v1.0に戻して」という指示も正確に伝わります。また、ステークホルダーに対して「どのような改善を加えたか」を説明する際にも役立ちます。
            </PromptInfoCard>
          </section>

          <section id="practical-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              実践例：複雑なドキュメント作成ワークフロー
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              以下は、実際のビジネスシーンで活用できる、複合的なワークフロー例です。
            </p>
            
            <div className="mb-8 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                実践例1：市場分析レポートの作成
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                「2026年のAI市場分析」というテーマで、以下のステップを自動化できます：
              </p>
              <ol className="list-decimal list-inside space-y-2 text-[#333333] mb-4">
                <li>市場規模、成長率などの統計データを集約したセクションを作成</li>
                <li>主要プレイヤー3社の比較表をCanvas上に生成</li>
                <li>営業部門の視点で「営業資料として使えるか」を検証</li>
                <li>経営層の視点で「経営判断に必要な情報が揃っているか」を検証</li>
                <li>最終版として、エグゼクティブサマリーを追加</li>
              </ol>
              <p className="text-[#333333] leading-relaxed">
                これらの全工程をCanvasで進めることで、複数のツールを行き来する手間が削減され、ドキュメントの一貫性も保たれます。
              </p>
            </div>

            <div className="mb-8 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                実践例2：技術仕様書の共同作成
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                エンジニアリングチームが技術仕様書を作成する際、Canvasは以下のように活用できます：
              </p>
              <ol className="list-decimal list-inside space-y-2 text-[#333333] mb-4">
                <li>プロダクトマネージャーが「要件」をCanvasに記入</li>
                <li>AIが「技術仕様」の初稿を自動生成</li>
                <li>セキュリティチームの視点で「セキュリティ要件」を追加</li>
                <li>パフォーマンスチームの視点で「パフォーマンス基準」を追加</li>
                <li>最終的に、開発チームが実装可能な仕様書として完成</li>
              </ol>
              <p className="text-[#333333] leading-relaxed">
                このプロセスにより、要件の漏れを防ぎ、チーム間の認識ズレを最小化できます。
              </p>
            </div>
          </section>

          <section id="tips-for-mastery" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Canvasを使いこなすための黄金ルール
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Canvasの高度な活用を実現するための、実践的なコツを紹介します。
            </p>
            
            <PromptInfoCard type="tips" title="ルール1：最初に「全体構造」を決める">
              長いドキュメントを作成する際は、必ず最初に「セクション数」「各セクションの文字数」「出力形式」を明確にしてください。AIはこの「制約条件」があると、より正確に動作します。
            </PromptInfoCard>

            <PromptInfoCard type="tips" title="ルール2：修正指示は「部分的」に">
              全体を修正するのではなく、「セクション3だけ修正して」「第2段落の表現を変えて」と部分指定することで、他の部分が意図せず変わることを防げます。
            </PromptInfoCard>

            <PromptInfoCard type="tips" title="ルール3：「視点切り替え」を活用">
              同じドキュメントを「営業の視点」「技術の視点」「顧客の視点」など、複数の角度から評価させることで、より洗練されたドキュメントに仕上がります。
            </PromptInfoCard>

            <PromptInfoCard type="tips" title="ルール4：バージョンは明示的に管理">
              「v1.0」「v1.1」「v2.0」というように、明確にバージョンを区別することで、後で「どのバージョンに戻すか」という指示が正確に伝わります。
            </PromptInfoCard>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              ChatGPT Canvasは、単なる「テキスト編集ツール」ではなく、**複雑なドキュメント作成プロセス全体を構造化・自動化するワークフロー基盤**です。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              構造化アウトラインから始まり、多角的レビューを経て、段階的に改善していくというプロセスは、従来は複数のツールと多くの手作業を必要としていました。Canvasを使えば、これらすべてを一つの画面で効率的に進められます。
            </p>
            <p className="text-[#333333] leading-relaxed">
              中級者以上のユーザーは、ぜひこれらのテクニックを組み合わせ、自分たちのドキュメント作成ワークフローを大幅に効率化してください。AIとの協働が、単なる「質問と回答」から「プロジェクト共同実行」へと進化する体験ができるはずです。
            </p>
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
  )
}
