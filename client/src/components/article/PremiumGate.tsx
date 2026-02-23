import { Lock, Crown, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { Button } from "@/components/ui/button";

interface PremiumGateProps {
  /** ゲートより上に表示する無料プレビュー部分 */
  preview?: React.ReactNode;
  /** ゲートを通過した場合に表示するコンテンツ */
  children: React.ReactNode;
  /** ユーザーがプレミアム会員かどうか */
  isPremium: boolean;
}

const premiumFeatures = [
  "AIエージェントの実践的なスキルガイド全記事が読み放題",
  "新しいガイドが追加されても追加料金なし",
  "プロンプトテンプレートのダウンロード",
];

export default function PremiumGate({ preview, children, isPremium }: PremiumGateProps) {
  const { isAuthenticated } = useAuth();

  // プレミアム会員はそのまま表示
  if (isPremium) {
    return <>{children}</>;
  }

  return (
    <div>
      {/* 無料プレビュー */}
      {preview && (
        <div className="relative">
          {preview}
          {/* フェードアウト効果 */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </div>
      )}

      {/* ロックUI */}
      <div className="my-8 border-2 border-[#FF9800] rounded-xl overflow-hidden">
        {/* ヘッダー */}
        <div className="bg-[#FF9800] px-6 py-4 flex items-center gap-3">
          <Lock className="w-5 h-5 text-white" />
          <span className="text-white font-bold">この先はプレミアム会員限定コンテンツです</span>
        </div>

        {/* 本文 */}
        <div className="bg-[#FFF8E6] px-6 py-6">
          <div className="flex items-center gap-2 mb-3">
            <Crown className="w-5 h-5 text-[#FF9800]" />
            <h3 className="font-bold text-[#333333]">プレミアム会員になると</h3>
          </div>
          <ul className="space-y-2 mb-6">
            {premiumFeatures.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-[#333333]">
                <CheckCircle className="w-4 h-4 text-[#4CAF50] flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            {isAuthenticated ? (
              <Link href="/account/upgrade">
                <Button className="bg-[#FF9800] hover:bg-[#E68900] text-white font-bold px-6">
                  <Crown className="w-4 h-4 mr-2" />
                  プレミアム会員にアップグレード
                </Button>
              </Link>
            ) : (
              <>
                <a href={getLoginUrl()}>
                  <Button className="bg-[#FF9800] hover:bg-[#E68900] text-white font-bold px-6">
                    <Crown className="w-4 h-4 mr-2" />
                    会員登録してプレミアムを試す
                  </Button>
                </a>
                <a href={getLoginUrl()}>
                  <Button variant="outline" className="border-[#5B9BD5] text-[#5B9BD5] px-6">
                    ログイン
                  </Button>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
