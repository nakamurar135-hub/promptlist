import PageLayout from "@/components/layout/PageLayout";
import { Crown, CheckCircle, ExternalLink, LogOut, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Link, useLocation } from "wouter";
import { useEffect } from "react";
import { getLoginUrl } from "@/const";

export default function Account() {
  const { isAuthenticated, user, loading, logout } = useAuth();
  const [, navigate] = useLocation();
  const utils = trpc.useUtils();

  const { data: subscription, isLoading: subLoading } = trpc.subscription.getMySubscription.useQuery(undefined, {
    enabled: isAuthenticated,
  });
  const isPremium = !!(subscription?.plan === "premium" && subscription?.isActive);

  // Customer Portalを開く
  const portalMutation = trpc.stripe.createPortalSession.useMutation({
    onSuccess: ({ url }) => {
      toast.info("Stripeの管理ポータルに移動します...");
      window.open(url, "_blank");
    },
    onError: (err) => {
      toast.error(`エラーが発生しました: ${err.message}`);
    },
  });

  // 決済完了後のリダイレクト処理
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("checkout") === "success") {
      toast.success("🎉 プレミアム会員になりました！全ガイドが読み放題です。");
      utils.subscription.getMySubscription.invalidate();
      utils.subscription.checkPremium.invalidate();
      // URLパラメータをクリア
      window.history.replaceState({}, "", "/account");
    }
  }, []);

  if (loading) {
    return (
      <PageLayout>
        <div className="max-w-2xl mx-auto px-4 py-10 text-center text-[#666]">読み込み中...</div>
      </PageLayout>
    );
  }

  if (!isAuthenticated) {
    return (
      <PageLayout>
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <User className="w-12 h-12 text-[#5B9BD5] mx-auto mb-4" />
          <h1 className="text-xl font-bold text-[#333] mb-3">ログインが必要です</h1>
          <p className="text-[#666] mb-6">マイページを表示するにはログインしてください。</p>
          <a href={getLoginUrl()}>
            <Button className="bg-[#5B9BD5] hover:bg-[#4A8AC4] text-white">ログイン</Button>
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
          <h2 className="text-sm font-bold text-[#999] uppercase tracking-wide mb-4">プロフィール</h2>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#5B9BD5] flex items-center justify-center text-white font-bold text-xl">
              {user?.name?.charAt(0) ?? "U"}
            </div>
            <div>
              <p className="font-bold text-[#333333] text-lg">{user?.name ?? "ユーザー"}</p>
              {user?.email && <p className="text-sm text-[#666]">{user.email}</p>}
            </div>
          </div>
        </div>

        {/* サブスクリプション状態 */}
        <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 mb-6">
          <h2 className="text-sm font-bold text-[#999] uppercase tracking-wide mb-4">プラン</h2>
          {subLoading ? (
            <p className="text-[#999] text-sm">読み込み中...</p>
          ) : isPremium ? (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Crown className="w-5 h-5 text-[#FF9800]" />
                <span className="font-bold text-[#FF9800]">プレミアム会員</span>
              </div>
              {subscription?.expiresAt && (
                <p className="text-sm text-[#666] mb-4">
                  次回更新日: {new Date(subscription.expiresAt).toLocaleDateString("ja-JP")}
                </p>
              )}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#E5E7EB] text-[#666] flex items-center gap-1.5"
                  onClick={() => portalMutation.mutate()}
                  disabled={portalMutation.isPending}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  {portalMutation.isPending ? "移動中..." : "プラン管理・解約"}
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-[#666] text-sm mb-4">現在のプラン：<span className="font-bold text-[#333]">無料会員</span></p>
              <Link href="/account/upgrade">
                <Button className="bg-[#FF9800] hover:bg-[#E68900] text-white font-bold flex items-center gap-2">
                  <Crown className="w-4 h-4" />
                  プレミアムにアップグレード
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* プレミアムコンテンツへのリンク */}
        {isPremium && (
          <div className="bg-[#FFF8E6] border border-[#FFE0A0] rounded-xl p-6 mb-6">
            <h2 className="text-sm font-bold text-[#FF9800] mb-3 flex items-center gap-2">
              <Crown className="w-4 h-4" />
              プレミアム限定コンテンツ
            </h2>
            <div className="space-y-2">
              {[
                { title: "プロンプトエンジニアリング実践", href: "/skills/prompt-engineering" },
                { title: "マルチエージェントシステム", href: "/skills/multi-agent-systems" },
                { title: "RAG実装ガイド", href: "/skills/rag-implementation" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-[#333] hover:text-[#5B9BD5] transition-colors"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-[#FF9800]" />
                  {item.title}
                  <ArrowRight className="w-3 h-3 ml-auto" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ログアウト */}
        <div className="bg-white border border-[#E5E7EB] rounded-xl p-6">
          <h2 className="text-sm font-bold text-[#999] uppercase tracking-wide mb-4">アカウント操作</h2>
          <Button
            variant="outline"
            className="border-[#E5E7EB] text-[#666] flex items-center gap-2"
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            <LogOut className="w-4 h-4" />
            ログアウト
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}
