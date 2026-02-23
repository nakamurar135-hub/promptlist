import { Link } from "wouter";
import { Bot } from "lucide-react";

const footerCategories = [
  {
    name: "初心者向けプロンプト",
    links: [
      { label: "議事録作成", href: "/articles/chatgpt-meeting-minutes" },
      { label: "ビジネスメール作成", href: "/articles/chatgpt-business-email" },
      { label: "敬語文章生成", href: "/articles/chatgpt-keigo" },
      { label: "クレーム返信", href: "/articles/chatgpt-claim-reply" },
      { label: "営業メール", href: "/articles/chatgpt-sales-email" },
    ],
  },
  {
    name: "AIエージェントスキル",
    links: [
      { label: "AIエージェント入門", href: "/skills/ai-agent-basics" },
      { label: "タスク自動化の基礎", href: "/skills/task-automation" },
      { label: "プロンプトエンジニアリング", href: "/skills/prompt-engineering" },
    ],
  },
  {
    name: "サイト情報",
    links: [
      { label: "このサイトについて", href: "/about" },
      { label: "プライバシーポリシー", href: "/privacy" },
      { label: "利用規約", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {footerCategories.map((cat) => (
            <div key={cat.name}>
              <h3 className="text-sm font-bold text-[#5B9BD5] mb-3">{cat.name}</h3>
              <ul className="space-y-2">
                {cat.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-600 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[#5B9BD5]">
            <Bot className="w-5 h-5" />
            <span className="font-bold text-sm">AIプロンプト活用ガイド</span>
          </div>
          <p className="text-xs text-gray-400">
            &copy; 2026 AIプロンプト活用ガイド All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
