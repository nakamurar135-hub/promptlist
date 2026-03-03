"use client";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Bot, Crown, Moon, Sun } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { useTheme } from "@/contexts/ThemeContext";

const navItems = [
  { label: "ホーム", href: "/" },
  { label: "初心者向けプロンプト", href: "/prompts" },
  { label: "AIエージェントスキル", href: "/skills" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const { user, isAuthenticated, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const { data: subscription } = trpc.subscription.getMySubscription.useQuery(undefined, {
    enabled: isAuthenticated,
  });
  const isPremium = !!(subscription?.plan === "premium" && subscription?.isActive);

  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50 dark:bg-[#1A2332] dark:text-[#E8E8E0]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* ロゴ */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary-foreground no-underline">
            <Bot className="w-6 h-6" />
            <span className="hidden sm:inline">AIプロンプト活用ガイド</span>
            <span className="sm:hidden">AIプロンプト</span>
          </Link>

          {/* テーマ切り替えボタン */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-white/20 transition-colors dark:hover:bg-white/10"
            aria-label="テーマ切り替え"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-primary-foreground" />
            ) : (
              <Moon className="w-5 h-5 text-primary-foreground" />
            )}
          </button>

          {/* デスクトップナビ */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-opacity hover:opacity-80 ${
                  location === item.href ? "opacity-100 underline underline-offset-4" : "opacity-90"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 認証ボタン */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                {!isPremium && (
                  <Link href="/account/upgrade" className="flex items-center gap-1 bg-accent hover:bg-accent/90 text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full transition-colors dark:bg-[#FFB84D] dark:hover:bg-[#FFA500] dark:text-[#0F1419]">
                    <Crown className="w-3 h-3" />
                    アップグレード
                  </Link>
                )}
                {isPremium && (
                  <span className="flex items-center gap-1 bg-accent/10 text-accent text-xs font-bold px-3 py-1.5 rounded-full dark:bg-accent/20 dark:text-[#FFB84D]">
                    <Crown className="w-3 h-3" />
                    プレミアム
                  </span>
                )}
                <Link href="/account" className="text-sm opacity-90 hover:opacity-100">
                  {user?.name ?? "マイページ"}
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => logout()}
                  className="text-primary bg-primary-foreground border-primary-foreground hover:bg-primary-foreground/90 text-xs dark:text-[#0F1419] dark:bg-[#E8E8E0] dark:border-[#E8E8E0]"
                >
                  ログアウト
                </Button>
              </div>
            ) : (
              <a href={getLoginUrl()}>
                <Button
                  size="sm"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground border-0 text-xs font-bold dark:bg-[#FFB84D] dark:hover:bg-[#FFA500] dark:text-[#0F1419]"
                >
                  ログイン / 会员登録
                </Button>
              </a>
            )}
          </div>

          {/* モバイルハンバーガー */}
          <button
            className="md:hidden p-2 rounded"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {menuOpen && (
        <div className="md:hidden bg-primary dark:bg-[#1A2332] border-t border-white/20 dark:border-white/10">
          <nav className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-primary-foreground opacity-90 hover:opacity-100 py-1"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/20 dark:border-white/10">
              <button
                onClick={toggleTheme}
                className="w-full flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/20 dark:hover:bg-white/10 transition-colors text-primary-foreground text-sm mb-2"
                aria-label="テーマ切り替え"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="w-4 h-4" />
                    <span>ライトモード</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4" />
                    <span>ダークモード</span>
                  </>
                )}
              </button>
            </div>
            <div className="pt-2 border-t border-white/20 dark:border-white/10">
              {isAuthenticated ? (
                <div className="flex flex-col gap-2">
                  <Link
                    href="/account"
                    className="text-sm text-primary-foreground opacity-90"
                    onClick={() => setMenuOpen(false)}
                  >
                    マイページ（{user?.name}）
                  </Link>
                  <button
                    onClick={() => { logout(); setMenuOpen(false); }}
                    className="text-sm text-primary-foreground opacity-80 text-left"
                  >
                    ログアウト
                  </button>
                </div>
              ) : (
                <a href={getLoginUrl()} className="block">
                  <Button
                    size="sm"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground border-0 font-bold dark:bg-[#FFB84D] dark:hover:bg-[#FFA500] dark:text-[#0F1419]"
                    onClick={() => setMenuOpen(false)}
                  >
                    ログイン / 会员登録
                  </Button>
                </a>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
