import { useEffect } from "react";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";

interface PremiumRouteProps {
  component: React.ComponentType;
}

/**
 * プレミアム会員専用ルートガード
 * - 未ログイン → ログインページにリダイレクト
 * - ログイン済み・非プレミアム → /account/upgrade にリダイレクト
 * - プレミアム会員 → コンテンツを表示
 */
export default function PremiumRoute({ component: Component }: PremiumRouteProps) {
  const [, setLocation] = useLocation();
  const { user, loading: authLoading } = useAuth();

  const { data: subscriptionData, isLoading: subLoading } =
    trpc.subscription.checkPremium.useQuery(undefined, {
      enabled: !!user,
      retry: false,
    });

  useEffect(() => {
    if (authLoading || subLoading) return;

    // 未ログインの場合はログインページへ
    if (!user) {
      window.location.href = getLoginUrl();
      return;
    }

    // ログイン済みだがプレミアム会員でない場合はアップグレードページへ
    if (subscriptionData && !subscriptionData.isPremium) {
      setLocation("/account/upgrade");
    }
  }, [authLoading, subLoading, user, subscriptionData, setLocation]);

  // ローディング中
  if (authLoading || subLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground text-sm">コンテンツを確認中...</p>
        </div>
      </div>
    );
  }

  // 未ログインまたは非プレミアム（リダイレクト処理中）
  if (!user || (subscriptionData && !subscriptionData.isPremium)) {
    return null;
  }

  // プレミアム会員のみコンテンツを表示
  return <Component />;
}
