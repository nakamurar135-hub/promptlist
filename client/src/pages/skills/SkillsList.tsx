import { Link } from "wouter";
import PageLayout from "@/components/layout/PageLayout";
import { Crown, CheckCircle, ArrowRight, Zap, BookOpen, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getLoginUrl } from "@/const";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";

const skillGuides = [
  {
    slug: "ai-agent-basics",
    title: "AIエージェント入門：自律的に動くAIの仕組みを理解する",
    description: "AIエージェントとは何か、どのように動作するのかを基礎から解説します。ツール呼び出し、メモリ、計画立案など、エージェントの核心的な概念を学びます。",
    level: "中級",
    readingTime: "約10分",
    isFree: true,
    topics: ["AIエージェントの定義", "ツール呼び出しの仕組み", "ReActフレームワーク"],
  },
  {
    slug: "task-automation",
    title: "タスク自動化の基礎：AIに複数ステップの作業を任せる",
    description: "AIエージェントを使って繰り返し作業を自動化する実践的な手法を学びます。ワークフロー設計から実装まで、具体的な事例を交えて解説します。",
    level: "中級",
    readingTime: "約12分",
    isFree: true,
    topics: ["ワークフロー設計の基礎", "条件分岐と繰り返し処理", "エラーハンドリング"],
  },
  {
    slug: "prompt-engineering",
    title: "プロンプトエンジニアリング実践：AIの性能を最大化する技術",
    description: "Chain-of-ThoughtやFew-shotなど、AIの出力品質を劇的に向上させる高度なテクニックを習得します。実務で即使える実践的な内容です。",
    level: "中級〜上級",
    readingTime: "約15分",
    isFree: false,
    topics: ["Chain-of-Thought プロンプティング", "Few-shot学習の活用", "プロンプトの評価と改善"],
  },
  {
    slug: "multi-agent-systems",
    title: "マルチエージェントシステム：複数のAIを連携させる",
    description: "複数のAIエージェントが協調して複雑なタスクを解決するシステムの設計と実装を学びます。AutoGenやLangGraphなどのフレームワークも紹介します。",
    level: "上級",
    readingTime: "約20分",
    isFree: false,
    topics: ["マルチエージェントの設計パターン", "エージェント間通信", "実装フレームワーク比較"],
  },
  {
    slug: "rag-implementation",
    title: "RAG実装ガイド：AIに最新情報を参照させる",
    description: "Retrieval-Augmented Generation（RAG）の仕組みと実装方法を解説します。自社データをAIに活用させる実践的なアーキテクチャを学びます。",
    level: "上級",
    readingTime: "約18分",
    isFree: false,
    topics: ["RAGの基本アーキテクチャ", "ベクトルデータベースの選定", "チャンキング戦略"],
  },
];

export default function SkillsList() {
  useSEO({
    title: "AIエージェントスキルガイド｜中級者向け実践ガイド",
    description: "AIエージェントとタスク自動化の実践スキルを体系的に習得。プロンプトエンジニアリング、マルチエージェント、RAG実装など、中級者向けの充実したスキルガイド。",
    keywords: "AIエージェント,スキルガイド,プロンプトエンジニアリング,タスク自動化,中級者,AIスキル,実践,ガイド,中級",
  });
  useOGP({
    title: "AIエージェントスキルガイド｜中級者向け実践ガイド",
    description: "AIエージェントとタスク自動化の実践スキルを体系的に習得。プロンプトエンジニアリング、マルチエージェント、RAG実装など、中級者向けの充実したスキルガイド。",
    type: "website",
  });

  const { isAuthenticated } = useAuth();
  const { data: user } = trpc.auth.me.useQuery();
  const { data: subscription } = trpc.subscription.getMySubscription.useQuery(undefined, {
    enabled: isAuthenticated,
  });
  const isPremium = subscription?.plan === "premium" && subscription?.isActive;

  return (
    <PageLayout>
      {/* ヘッダー */}
      <section className="bg-gradient-to-br from-[#333333] to-[#555555] text-white py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-[#FF9800]" />
            <span className="text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
              中級者向けコンテンツ
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            AIエージェントスキルガイド
          </h1>
          <p className="text-sm md:text-base opacity-80 mb-6">
            AIを自律的に動かす実践スキルを、体系的に習得しましょう。
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <BookOpen className="w-4 h-4" />
              <span>全5ガイド</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <CheckCircle className="w-4 h-4 text-[#4CAF50]" />
              <span>無料2本 + プレミアム3本</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Target className="w-4 h-4 text-[#FF9800]" />
              <span>中級〜上級者向け</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* プレミアム訴求（未会員・無料会員向け） */}
        {!isPremium && (
          <div className="bg-[#FFF8E6] border-2 border-[#FF9800] rounded-xl p-6 mb-10">
            <div className="flex items-start gap-3">
              <Crown className="w-6 h-6 text-[#FF9800] flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="font-bold text-[#E68900] mb-2">プレミアム会員で全ガイドを読み放題</h2>
                <p className="text-sm text-[#333333] leading-relaxed mb-4">
                  プレミアム会員になると、プロンプトエンジニアリング・マルチエージェント・RAGなど、
                  実践的な上級ガイドすべてにアクセスできます。
                </p>
                <div className="flex flex-wrap gap-3">
                  {isAuthenticated ? (
                    <Link href="/account/upgrade">
                      <Button className="bg-[#FF9800] hover:bg-[#E68900] text-white font-bold">
                        <Crown className="w-4 h-4 mr-2" />
                        プレミアムにアップグレード
                      </Button>
                    </Link>
                  ) : (
                    <>
                      <a href={getLoginUrl()}>
                        <Button className="bg-[#FF9800] hover:bg-[#E68900] text-white font-bold">
                          <Crown className="w-4 h-4 mr-2" />
                          会員登録（無料）
                        </Button>
                      </a>
                      <a href={getLoginUrl()}>
                        <Button variant="outline" className="border-[#5B9BD5] text-[#5B9BD5]">
                          ログイン
                        </Button>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* スキルガイド一覧 */}
        <div className="space-y-5">
          {skillGuides.map((guide, index) => (
            <Link
              key={guide.slug}
              href={`/skills/${guide.slug}`}
              className="block bg-white border border-[#E5E7EB] rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="flex flex-col sm:flex-row">
                {/* 番号 */}
                <div
                  className="sm:w-16 flex items-center justify-center py-4 sm:py-0 text-2xl font-bold"
                  style={{ backgroundColor: guide.isFree ? "#EBF5FF" : "#FFF8E6", color: guide.isFree ? "#5B9BD5" : "#FF9800" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* コンテンツ */}
                <div className="flex-1 p-5">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-[#666666] bg-[#F3F4F6] px-2 py-0.5 rounded">
                      {guide.level}
                    </span>
                    <span className="text-xs text-[#666666]">{guide.readingTime}</span>
                    {guide.isFree ? (
                      <span className="inline-flex items-center gap-1 bg-[#4CAF50] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        <CheckCircle className="w-3 h-3" /> 無料
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 bg-[#FF9800] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        <Crown className="w-3 h-3" /> プレミアム
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-[#333333] mb-2 leading-snug group-hover:text-[#5B9BD5] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed mb-3">{guide.description}</p>

                  {/* トピック */}
                  <div className="flex flex-wrap gap-2">
                    {guide.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-xs text-[#5B9BD5] bg-[#EBF5FF] px-2 py-0.5 rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 矢印 */}
                <div className="hidden sm:flex items-center pr-5">
                  <ArrowRight className="w-5 h-5 text-[#5B9BD5] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </PageLayout>
  );
}
