import PageLayout from "@/components/layout/PageLayout";
import { Crown, CheckCircle, Calendar, CreditCard, LogOut, ArrowRight, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Link } from "wouter";

function formatDate(date: Date | string | null | undefined): string {
  if (!date) return "—";
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" });
}

export default function Account() {
  const { isAuthenticated, user } = useAuth();
  const utils = trpc.useUtils();

  const { data: subscription, isLoading } = trpc.subscription.getMySubscription.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  const isPremium = !!(subscription?.plan === "premium" && subscription?.isActive);

  // Stripe Customer Portal（解約・プラン変更）
  const portalMutation = trpc.subscription.createPortalSession.useMutation({
    onSuccess: ({ url }) => {
      window.location.href = url;
    },
    onError: (err) => {
      toast.error(`エラーが発生しました: ${err.message}`);
    },
  });

  if (!isAuthenticated) {
    return (
      <PageLayout>
        <div className="max-w-xl mx-auto px-4 py-16 text-center">
          <div className="w-16 h-16 rounded-full bg-[#F0F4F8] flex items-center justify-center mx-auto mb-4">
            <LogOut className="w-8 h-8 text-[#5B9BD5]" />
          </div>
          <h1 className="text-xl font-bold text-[#333333] mb-3">ログインが必要です</h1>
          <p className="text-[#666666] mb-6">マイページを表示するにはログインしてください。</p>
          <a href="/api/oauth/login">
            <Button className="bg-[#5B9BD5] hover:bg-[#4A8AC4] text-white">
              ログイン
            </Button>
          </a>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-[#333333] mb-8">マイページ</h1>

        {/* プロフィール */}
        <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 mb-6">
          <h2 className="text-sm font-bold text-[#666666] uppercase tracking-wide mb-4">プロフィール</h2>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#5B9BD5] flex items-center justify-center text-white font-bold text-xl">
              {user?.name?.charAt(0) ?? "U"}
            </div>
            <div>
              <p className="font-bold text-[#333333] text-lg">{user?.name ?? "ユーザー"}</p>
              {user?.email && (
                <p className="text-sm text-[#666666]">{user.email}</p>
              )}
            </div>
          </div>
        </div>

        {/* サブスクリプション状態 */}
        <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 mb-6">
          <h2 className="text-sm font-bold text-[#666666] uppercase tracking-wide mb-4">サブスクリプション</h2>

          {isLoading ? (
            <div className="animate-pulse space-y-3">
              <div className="h-4 bg-[#F0F4F8] rounded w-1/2" />
              <div className="h-4 bg-[#F0F4F8] rounded w-1/3" />
            </div>
          ) : isPremium ? (
            <div>
              {/* プレミアム会員の表示 */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#FFF8E6] flex items-center justify-center">
                  <Crown className="w-5 h-5 text-[#FF9800]" />
                </div>
                <div>
                  <p className="font-bold text-[#333333]">プレミアム会員</p>
                  <p className="text-sm text-[#666666]">すべてのコンテンツにアクセスできます</p>
                </div>
                <div className="ml-auto">
                  <span className="bg-[#FFF8E6] text-[#FF9800] text-xs font-bold px-3 py-1 rounded-full">有効</span>
                </div>
              </div>

              <div className="space-y-3 border-t border-[#F0F4F8] pt-4">
                {/* 開始日 */}
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="w-4 h-4 text-[#5B9BD5] flex-shrink-0" />
                  <span className="text-[#666666]">開始日：</span>
                  <span className="font-medium text-[#333333]">{formatDate(subscription?.startedAt)}</span>
                </div>

                {/* 次回請求日 */}
                {subscription?.expiresAt && (
                  <div className="flex items-center gap-3 text-sm">
                    <CreditCard className="w-4 h-4 text-[#5B9BD5] flex-shrink-0" />
                    <span className="text-[#666666]">次回請求日：</span>
                    <span className="font-medium text-[#333333]">{formatDate(subscription.expiresAt)}</span>
                  </div>
                )}

                {/* Stripe ID（デバッグ用、本番では非表示にしてもよい） */}
                {subscription?.stripeSubscriptionId && (
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#4CAF50] flex-shrink-0" />
                    <span className="text-[#666666]">サブスクリプションID：</span>
                    <span className="font-mono text-xs text-[#999999]">{subscription.stripeSubscriptionId}</span>
                  </div>
                )}
              </div>

              {/* 解約・変更ボタン */}
              <div className="mt-5 pt-4 border-t border-[#F0F4F8]">
                {subscription?.stripeCustomerId ? (
                  <div>
                    <Button
                      variant="outline"
                      className="border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300"
                      onClick={() => portalMutation.mutate()}
                      disabled={portalMutation.isPending}
                    >
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      {portalMutation.isPending ? "移動中..." : "解約・プラン変更（Stripeポータル）"}
                    </Button>
                    <p className="text-xs text-[#999999] mt-2">
                      Stripeの安全なポータルページで解約・支払い方法の変更ができます。
                    </p>
                  </div>
                ) : (
                  <p className="text-xs text-[#999999]">
                    ※ デモ用プレミアムのため、Stripeポータルは利用できません。
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div>
              {/* 無料会員の表示 */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#F0F4F8] flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-[#5B9BD5]" />
                </div>
                <div>
                  <p className="font-bold text-[#333333]">無料プラン</p>
                  <p className="text-sm text-[#666666]">初心者向けコンテンツが利用できます</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#F5F9FC] to-[#FFF8E6] rounded-lg p-4 flex items-center gap-4">
                <Crown className="w-8 h-8 text-[#FF9800] flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-bold text-[#333333] text-sm">プレミアムにアップグレード</p>
                  <p className="text-xs text-[#666666]">月額¥500で全ガイドが読み放題</p>
                </div>
                <Link href="/account/upgrade">
                  <Button size="sm" className="bg-[#FF9800] hover:bg-[#E68900] text-white font-bold flex-shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* アクセス可能なコンテンツ */}
        <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 mb-6">
          <h2 className="text-sm font-bold text-[#666666] uppercase tracking-wide mb-4">
            アクセス可能なコンテンツ
          </h2>
          <div className="space-y-2">
            {[
              { title: "初心者向けプロンプト記事", href: "/articles/chatgpt-meeting-minutes", free: true },
              { title: "AIエージェント入門ガイド", href: "/skills/ai-agent-basics", free: true },
              { title: "プロンプトエンジニアリング実践", href: "/skills/prompt-engineering", free: false },
              { title: "マルチエージェントシステム", href: "/skills/multi-agent-systems", free: false },
              { title: "RAG実装ガイド", href: "/skills/rag-implementation", free: false },
            ].map((item) => {
              const accessible = item.free || isPremium;
              return (
                <div
                  key={item.href}
                  className={`flex items-center gap-3 rounded-lg p-3 ${accessible ? "bg-[#F5F9FC]" : "bg-[#F9F9F9] opacity-60"}`}
                >
                  {item.free ? (
                    <CheckCircle className="w-4 h-4 text-[#4CAF50] flex-shrink-0" />
                  ) : (
                    <Crown className="w-4 h-4 text-[#FF9800] flex-shrink-0" />
                  )}
                  <span className="text-sm text-[#333333] flex-1">{item.title}</span>
                  {accessible ? (
                    <Link href={item.href}>
                      <span className="text-xs text-[#5B9BD5] font-medium hover:underline">読む →</span>
                    </Link>
                  ) : (
                    <span className="text-xs text-[#999999]">プレミアム限定</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ログアウト */}
        <div className="text-center">
          <a href="/api/oauth/logout">
            <Button variant="ghost" className="text-[#999999] hover:text-[#666666]">
              <LogOut className="w-4 h-4 mr-2" />
              ログアウト
            </Button>
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
