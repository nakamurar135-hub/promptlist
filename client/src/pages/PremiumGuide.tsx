import PageLayout from "@/components/layout/PageLayout";
import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Lock, BookOpen, Zap } from "lucide-react";

interface PremiumArticle {
  href: string;
  title: string;
  description: string;
  module: number;
}

const premiumArticles: PremiumArticle[] = [
  {
    href: "/articles/ai-agent-course-module-1",
    title: "Gitと始めるAIエージェント開発環境構築",
    description: "Gitでのバージョン管理を前提とした、AIエージェントのローカル開発環境構築とプロジェクトの初期設定方法を学ぶ。",
    module: 1,
  },
  {
    href: "/articles/ai-agent-course-module-2",
    title: "ReActフレームワークで実践的なAIエージェント構築",
    description: "思考・行動・観察のループを実装し、複雑なタスクを自動化するAIエージェントの開発方法を学びます。",
    module: 2,
  },
  {
    href: "/articles/ai-agent-course-module-3",
    title: "マルチエージェントシステムの設計と実装",
    description: "複数のAIエージェントを連携させるマルチエージェントシステムの設計方法。エージェント間の通信、タスク分配、結果の統合方法を学びます。",
    module: 3,
  },
  {
    href: "/articles/ai-agent-course-module-4",
    title: "本番環境へのデプロイとCI/CD構築",
    description: "AIエージェントを本番環境にデプロイする方法とCI/CDパイプラインの構築。Docker、Kubernetes、GitHub Actionsを使用した自動化デプロイメント。",
    module: 4,
  },
];

export default function PremiumGuide() {
  const { user } = useAuth();

  useSEO({
    title: "プレミアム会員向けコース｜AIプロンプト活用ガイド",
    description: "AIエージェント開発の実践的なスキルを習得できる、4つのモジュールから構成された中級者向けコース。環境構築から本番運用まで。",
    keywords: "AIエージェント,中級者向け,プレミアム,コース,開発環境,CI/CD",
  });

  useOGP({
    title: "プレミアム会員向けコース｜AIプロンプト活用ガイド",
    description: "AIエージェント開発の実践的なスキルを習得できる、4つのモジュールから構成された中級者向けコース。環境構築から本番運用まで。",
    type: "website",
  });

  const { data: subscriptionData } = trpc.subscription.checkPremium.useQuery(undefined, {
    enabled: !!user,
    retry: false,
  });
  const isPremium = subscriptionData?.isPremium ?? false;

  return (
    <PageLayout>
      {/* ヘッダーセクション */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Crown className="w-6 h-6" />
            <span className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full">
              プレミアム会員向け
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            AIエージェント開発マスターコース
          </h1>
          <p className="text-lg text-white/90 mb-6">
            環境構築から本番運用まで、AIエージェント開発に必要なすべてのスキルを習得できる、4つのモジュールから構成された実践的なコース。
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-white/80">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm">4つのモジュール</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Zap className="w-4 h-4" />
              <span className="text-sm">実践的なコンテンツ</span>
            </div>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        {!isPremium && (
          <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-4">
              <Lock className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">
                  プレミアム会員のみ閲覧可能
                </h3>
                <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-4">
                  このコースはプレミアム会員向けの限定コンテンツです。プレミアムプランにアップグレードして、AIエージェント開発の実践的なスキルを習得しましょう。
                </p>
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
                  プレミアムプランを確認
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* コースモジュール */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {premiumArticles.map((article, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                  モジュール {article.module}
                </Badge>
                {isPremium && (
                  <span className="text-xs font-bold text-green-600 dark:text-green-400">
                    ✓ アクセス可能
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold mb-2">{article.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {article.description}
              </p>
              {isPremium ? (
                <a
                  href={article.href}
                  className="inline-flex items-center justify-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors"
                >
                  コースを開始
                </a>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center justify-center px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg font-semibold cursor-not-allowed"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  ロック中
                </button>
              )}
            </Card>
          ))}
        </div>

        {/* コース概要 */}
        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-lg border border-border mb-12">
          <h2 className="text-2xl font-bold mb-6">コース概要</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">対象者</h3>
              <p className="text-muted-foreground">
                ChatGPTなどのAIツールの基本的な使い方を理解している、中級者向けのコースです。Pythonの基本知識があると、より効果的に学習できます。
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">学習時間</h3>
              <p className="text-muted-foreground">
                各モジュールは約1〜2時間で完了できるように設計されています。全4モジュールで約4〜8時間の学習時間を想定しています。
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">習得スキル</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>AIエージェント開発の基本概念と実装方法</li>
                <li>LangChainフレームワークの使用方法</li>
                <li>ReActフレームワークの実装</li>
                <li>マルチエージェントシステムの設計</li>
                <li>本番環境へのデプロイメント</li>
                <li>CI/CDパイプラインの構築</li>
              </ul>
            </div>
          </div>
        </div>

        {/* プレミアムプランの特典 */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 p-8 rounded-lg border border-purple-200 dark:border-purple-800">
          <h2 className="text-2xl font-bold mb-6">プレミアムプランの特典</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-purple-600 text-white">
                  <BookOpen className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-1">全コース閲覧可能</h3>
                <p className="text-sm text-muted-foreground">
                  すべてのプレミアムコンテンツにアクセスできます。
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-purple-600 text-white">
                  <Zap className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-1">定期更新</h3>
                <p className="text-sm text-muted-foreground">
                  最新の技術トレンドに合わせてコンテンツを更新します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
