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

const tocItems = [
  { id: "what-is-rag", label: "RAGとは" },
  { id: "architecture", label: "RAGの基本アーキテクチャ" },
  { id: "vector-db", label: "ベクトルデータベースの選定" },
  { id: "chunking", label: "チャンキング戦略" },
  { id: "implementation-premium", label: "実装例（プレミアム）" },
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

export default function RagImplementation() {
  useSEO({
    title: "RAG実装ガイド｜AIに最新情報を参照させる",
    description: "Retrieval-Augmented Generation（RAG）の仕組みと実装方法を解説します。ベクトルDB、チャンキング戦略、ハイブリッド検索など、実践的な手法を学びます。",
    keywords: "RAG,検索拡張生成,ベクトルDB,チャンキング,実装,上級,AI,LLM,Pinecone",
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
          <span>RAG実装ガイド</span>
        </div>

        <ArticleHeader
          title="RAG実装ガイド：AIに最新情報を参照させる"
          description="Retrieval-Augmented Generation（RAG）の仕組みと実装方法を解説します。自社データをAIに活用させる実践的なアーキテクチャを学びます。"
          category="RAG"
          categoryColor="#FF9800"
          publishedAt="2026年2月25日"
          readingTime="約18分"
        />

        <TableOfContents items={tocItems} />

        <ArticleContent>
          <section id="what-is-rag">
            <h2>RAGとは</h2>
            <p>RAG（Retrieval-Augmented Generation：検索拡張生成）とは、<strong>AIが回答を生成する前に、外部の信頼できる情報源から関連情報を検索し、その情報をプロンプトに組み込む手法</strong>です。</p>
            <p>AIモデルの学習データに含まれていない最新情報や、企業内の非公開ドキュメントに基づいた正確な回答を得るために不可欠な技術です。</p>

            <PromptInfoCard type="response" title="RAGの主なメリット">
              <ul className="space-y-1 list-disc list-inside">
                <li><strong>ハルシネーション（嘘）の抑制</strong>：根拠となる情報を提示させることで、正確性が向上します。</li>
                <li><strong>情報の鮮度</strong>：モデルを再学習させることなく、最新情報を反映できます。</li>
                <li><strong>セキュリティ</strong>：機密情報をモデルの学習に使わずに、安全に活用できます。</li>
              </ul>
            </PromptInfoCard>
          </section>

          <section id="architecture">
            <h2>RAGの基本アーキテクチャ</h2>
            <p>一般的なRAGシステムは、以下の3つのプロセスで構成されます。</p>

            <div className="space-y-4 mt-4">
              <div className="bg-[#F9FAFB] p-4 rounded-lg border border-[#E5E7EB]">
                <h3 className="font-bold text-[#333333] mb-1">1. インジェクション（データ登録）</h3>
                <p className="text-sm">ドキュメントを適切なサイズに分割（チャンキング）し、ベクトル化してデータベースに保存します。</p>
              </div>
              <div className="bg-[#F9FAFB] p-4 rounded-lg border border-[#E5E7EB]">
                <h3 className="font-bold text-[#333333] mb-1">2. リトリーバル（検索）</h3>
                <p className="text-sm">ユーザーの質問に関連する情報を、ベクトルデータベースから検索・抽出します。</p>
              </div>
              <div className="bg-[#F9FAFB] p-4 rounded-lg border border-[#E5E7EB]">
                <h3 className="font-bold text-[#333333] mb-1">3. ジェネレーション（生成）</h3>
                <p className="text-sm">抽出した情報と元の質問を組み合わせ、AIに回答を生成させます。</p>
              </div>
            </div>
          </section>

          <section id="vector-db">
            <h2>ベクトルデータベースの選定</h2>
            <p>RAGの心臓部となるのがベクトルデータベースです。用途やデータ量に応じて適切なものを選択する必要があります。</p>

            <ul className="space-y-2 list-disc list-inside mt-4">
              <li><strong>Pinecone</strong>：フルマネージドでスケーラビリティに優れたSaaS。</li>
              <li><strong>Chroma</strong>：軽量でオープンソース。ローカル環境やプロトタイプ開発に最適。</li>
              <li><strong>Supabase (pgvector)</strong>：PostgreSQL上でベクトル検索を実現。既存のDBと統合しやすい。</li>
              <li><strong>Elasticsearch</strong>：大規模な全文検索とベクトル検索を組み合わせたハイブリッド検索が可能。</li>
            </ul>
          </section>

          <section id="chunking">
            <h2>チャンキング戦略</h2>
            <p>ドキュメントをどのように分割するか（チャンキング）は、検索精度に大きく影響します。単に文字数で区切るのではなく、<strong>意味のまとまりを維持すること</strong>が重要です。</p>

            <PromptInfoCard type="tips" title="代表的なチャンキング手法">
              <ul className="space-y-1 list-disc list-inside">
                <li><strong>固定長チャンキング</strong>：一定の文字数で分割（最もシンプル）。</li>
                <li><strong>再帰的文字分割</strong>：段落、改行、句点などの区切り文字を考慮して分割。</li>
                <li><strong>意味的チャンキング</strong>：文章の意味的な類似度に基づいて分割。</li>
              </ul>
            </PromptInfoCard>

            <PromptBlock title="チャンキング方針の策定プロンプト">{`以下のドキュメント形式に最適なチャンキング戦略を提案してください。

# ドキュメント形式
【例：社内の就業規則（PDF）、技術仕様書（Markdown）、顧客対応履歴（CSV）】

# 検討事項
・1チャンクあたりの適切な文字数
・前後のチャンクとのオーバーラップ（重複）率
・メタデータとして保持すべき情報（ページ番号、章タイトル等）`}</PromptBlock>
          </section>

          <PremiumGate
            isPremium={isPremium}
            preview={
              <section id="implementation-premium">
                <h2>実践例：高度なRAGの実装パターン</h2>
                <p>単純なRAGを超えて、精度を極限まで高めるための「ハイブリッド検索」や「リランク（再順位付け）」の実装方法を紹介します。</p>
              </section>
            }
          >
            <section id="implementation-premium">
              <h2>実践例：高度なRAGの実装パターン</h2>
              <p>単純なRAGを超えて、精度を極限まで高めるための「ハイブリッド検索」や「リランク（再順位付け）」の実装方法を紹介します。</p>

              <h3>1. ハイブリッド検索（Hybrid Search）</h3>
              <p>キーワードベースの検索（BM25）とベクトル検索を組み合わせることで、専門用語や固有名詞への対応力を高めます。</p>

              <h3>2. リランク（Reranking）</h3>
              <p>検索結果として抽出された上位のドキュメントを、より高性能なモデル（Reranker）で再度評価し、関連性の高い順に並べ替えます。</p>

              <PromptBlock title="RAG回答精度の評価プロンプト">{`RAGシステムの回答精度を評価するために、以下の「質問・回答・根拠ドキュメント」のセットを分析し、評価スコア（1-5）と改善案を提示してください。

# ユーザーの質問
【質問内容】

# システムの回答
【生成された回答】

# 参照したドキュメント
【検索結果として得られたテキスト】

# 評価基準
1. 忠実性（回答はドキュメントに基づいているか）
2. 関連性（回答は質問に直接答えているか）
3. 網羅性（必要な情報が不足していないか）`}</PromptBlock>

              <PromptInfoCard type="tips" title="上級者向けのポイント">
                <p>RAGの精度が上がらない原因の多くは、データの「質」にあります。不要なヘッダー・フッターの除去、表データのMarkdown変換など、前処理（クリーニング）に時間をかけることが、最も効率的な精度向上策となります。</p>
              </PromptInfoCard>
            </section>
          </PremiumGate>

          <RelatedArticles articles={relatedArticles} />
        </ArticleContent>
      </div>
    </PageLayout>
  );
}
