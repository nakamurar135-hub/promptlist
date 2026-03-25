import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Crown, CheckCircle, ArrowRight, Zap, AlertCircle, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { getLoginUrl } from "@/const";
import { Link, useSearch } from "wouter";

const freeFeatures = [
  "初心者向けプロンプト記事（全記事）",
  "AIエージェント入門ガイド",
  "タスク自動化の基礎ガイド",
];

const premiumFeatures = [
  "無料プランのすべての機能",
  "プロンプトエンジニアリング実践ガイド",
  "マルチエージェントシステムガイド",
  "RAG実装ガイド",
  "今後追加される上級ガイド（すべて）",
];

export default function Upgrade() {
  const { isAuthenticated, user } = useAuth();
  const utils = trpc.useUtils();
  const search = useSearch();
  const params = new URLSearchParams(search);
  const isSuccess = params.get("success") === "true";
  const isCanceled = params.get("canceled") === "true";

  const { data: subscription, isLoading } = trpc.subscription.getMySubscription.useQuery(undefined, {
    enabled: isAuthenticated,
  });
  const isPremium = !!(subscription?.plan === "premium" && subscription?.isActive);

  // 決済成功時にサブスクリプション情報を更新
  const utils2 = trpc.useUtils();
  React.useEffect(() => {
    if (isSuccess) {
      // Webhookが処理される前に少し待ってからキャッシュを無効化
      const timer = setTimeout(() => {
        utils2.subscription.getMySubscription.invalidate();
        utils2.subscription.checkPremium.invalidate();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]); // eslint-disable-line react-hooks/exhaustive-deps

  // Stripe Checkout Session を作成してリダイレクト
  const checkoutMutation = trpc.subscription.createCheckoutSession.useMutation({
    onSuccess: ({ url }) => {
      toast.info("Stripeの決済ページへ移動します...");
      window.open(url, "_blank");
    },
    onError: (err) => {
      toast.error(`エラーが発生しました: ${err.message}`);
    },
  });

  // Stripe Customer Portal（解約・変更）
  const portalMutation = trpc.subscription.createPortalSession.useMutation({
    onSuccess: ({ url }) => {
      toast.info("Stripeポータルへ移動します...");
      window.open(url, "_blank");
    },
    onError: (err) => {
      toast.error(`ポータルエラー: ${err.message}`);
    },
  });

  // デモ用: activatePremium（Stripeなしで即時プレミアム化）
  const activateMutation = trpc.subscription.activatePremium.useMutation({
    onSuccess: () => {
      toast.success("プレミアム会員になりました！全ガイドが読み放題です。");
      utils.subscription.getMySubscription.invalidate();
      utils.subscription.checkPremium.invalidate();
    },
    onError: () => {
      toast.error("エラーが発生しました。もう一度お試しください。");
    },
  });

  const handleUpgrade = () => {
    checkoutMutation.mutate();
  };

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* 決済完了バナー */}
        {isSuccess && (
          <div className="mb-8 bg-green-50 border border-green-200 rounded-xl p-5 flex items-start gap-3">
            <PartyPopper className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-green-800">プレミアム会員へのアップグレードが完了しました！</p>
              <p className="text-sm text-green-700 mt-1">すべてのプレミアムコンテンツにアクセスできるようになりました。</p>
            </div>
          </div>
        )}

        {/* キャンセルバナー */}
        {isCanceled && (
          <div className="mb-8 bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-800">決済がキャンセルされました</p>
              <p className="text-sm text-amber-700 mt-1">いつでもアップグレードできます。ご不明な点はお気軽にお問い合わせください。</p>
            </div>
          </div>
        )}

        {/* ヘッダー */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FFF8E6] text-[#FF9800] px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Crown className="w-4 h-4" />
            プレミアムプラン
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#333333] mb-3">
            AIスキルを本格的に習得する
          </h1>
          <p className="text-[#666666] leading-relaxed">
            プレミアム会員になると、中級〜上級者向けの実践的なAIエージェントスキルガイドすべてにアクセスできます。
          </p>
        </div>

        {/* 現在のステータス */}
        {isAuthenticated && (
          <div className="bg-[#F5F9FC] border border-[#E5E7EB] rounded-xl p-5 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#5B9BD5] flex items-center justify-center text-white font-bold text-sm">
                {user?.name?.charAt(0) ?? "U"}
              </div>
              <div>
                <p className="font-bold text-[#333333]">{user?.name ?? "ユーザー"}</p>
                <p className="text-sm text-[#666666]">
                  現在のプラン：
                  {isLoading ? (
                    <span className="text-[#999999] ml-1">読み込み中...</span>
                  ) : isPremium ? (
                    <span className="text-[#FF9800] font-bold ml-1">プレミアム会員</span>
                  ) : (
                    <span className="text-[#666666] ml-1">無料会員</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* プラン比較 */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* 無料プラン */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-6">
            <div className="mb-4">
              <h2 className="text-lg font-bold text-[#333333] mb-1">無料プラン</h2>
              <p className="text-3xl font-bold text-[#333333]">¥0<span className="text-sm font-normal text-[#666666]">/月</span></p>
            </div>
            <ul className="space-y-2 mb-6">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-[#333333]">
                  <CheckCircle className="w-4 h-4 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            {!isAuthenticated && (
              <a href={getLoginUrl()}>
                <Button variant="outline" className="w-full border-[#5B9BD5] text-[#5B9BD5]">
                  無料で始める
                </Button>
              </a>
            )}
            {isAuthenticated && !isPremium && (
              <Button variant="outline" className="w-full border-[#E5E7EB] text-[#666666]" disabled>
                現在のプラン
              </Button>
            )}
          </div>

          {/* プレミアムプラン */}
          <div className="bg-gradient-to-br from-[#333333] to-[#555555] rounded-xl p-6 text-white relative overflow-hidden">
            <div className="absolute top-3 right-3 bg-[#FF9800] text-white text-xs font-bold px-2 py-0.5 rounded-full">
              おすすめ
            </div>
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <Crown className="w-5 h-5 text-[#FF9800]" />
                <h2 className="text-lg font-bold">プレミアムプラン</h2>
              </div>
              <p className="text-3xl font-bold">¥500<span className="text-sm font-normal opacity-70">/月</span></p>
              <p className="text-xs opacity-60 mt-1">税込・いつでも解約可能</p>
            </div>
            <ul className="space-y-2 mb-6">
              {premiumFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#FF9800] flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>

            {!isAuthenticated && (
              <a href={getLoginUrl()}>
                <Button className="w-full bg-[#FF9800] hover:bg-[#E68900] text-white font-bold">
                  <Crown className="w-4 h-4 mr-2" />
                  会員登録してアップグレード
                </Button>
              </a>
            )}
            {isAuthenticated && !isPremium && (
              <div className="space-y-2">
                <Button
                  className="w-full bg-[#FF9800] hover:bg-[#E68900] text-white font-bold"
                  onClick={handleUpgrade}
                  disabled={checkoutMutation.isPending}
                >
                  {checkoutMutation.isPending ? (
                    <span className="flex items-center gap-2">
                      <Zap className="w-4 h-4 animate-spin" />
                      Stripeへ移動中...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Crown className="w-4 h-4" />
                      プレミアムにアップグレード（¥500/月）
                    </span>
                  )}
                </Button>
                {/* デモ用ボタン（Stripeキー未設定時のフォールバック） */}
                <Button
                  variant="ghost"
                  className="w-full text-white/60 hover:text-white hover:bg-white/10 text-xs"
                  onClick={() => activateMutation.mutate()}
                  disabled={activateMutation.isPending}
                >
                  デモ用：決済なしでプレミアムを試す
                </Button>
              </div>
            )}
            {isPremium && (
              <div className="space-y-2">
                <Button className="w-full bg-[#4CAF50] hover:bg-[#43A047] text-white font-bold" disabled>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  プレミアム会員です
                </Button>
                <Button
                  variant="ghost"
                  className="w-full text-white/60 hover:text-white hover:bg-white/10 text-xs"
                  onClick={() => portalMutation.mutate()}
                  disabled={portalMutation.isPending}
                >
                  {portalMutation.isPending ? "移動中..." : "解約・支払い方法の変更（Stripeポータル）"}
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* プレミアムコンテンツ一覧 */}
        <div className="bg-[#F5F9FC] rounded-xl p-6 mb-8">
          <h2 className="font-bold text-[#333333] mb-4 flex items-center gap-2">
            <Crown className="w-5 h-5 text-[#FF9800]" />
            プレミアム限定ガイド一覧
          </h2>
          <div className="space-y-3">
            {[
              { title: "プロンプトエンジニアリング実践", href: "/skills/prompt-engineering", desc: "Chain-of-Thought、Self-Consistencyなど高度なテクニック" },
              { title: "マルチエージェントシステム", href: "/skills/multi-agent-systems", desc: "複数のAIを連携させる設計パターン" },
              { title: "RAG実装ガイド", href: "/skills/rag-implementation", desc: "自社データをAIに活用させるアーキテクチャ" },
              { title: "AIエージェント開発マスターコース（全4回）", href: "/premium", desc: "環境構築から本番運用まで、実践的なAIエージェント開発を学ぶ" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 bg-white border border-[#E5E7EB] rounded-lg p-4 hover:shadow-sm transition-shadow group"
              >
                <Crown className="w-4 h-4 text-[#FF9800] flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-bold text-sm text-[#333333] group-hover:text-[#5B9BD5] transition-colors">{item.title}</p>
                  <p className="text-xs text-[#666666]">{item.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#5B9BD5] group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>

        <p className="text-xs text-center text-[#999999]">
          ※ 決済はStripeの安全な決済システムを使用しています。クレジットカード情報は当サイトに保存されません。
        </p>
      </div>
    </PageLayout>
  );
}
