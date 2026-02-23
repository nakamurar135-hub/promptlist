"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface PromptBlockProps {
  title?: string;
  children: string;
}

export default function PromptBlock({ title = "プロンプト", children }: PromptBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const el = document.createElement("textarea");
      el.value = children;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-[#E5E7EB]">
      {/* ヘッダー */}
      <div className="flex items-center justify-between bg-[#5B9BD5] px-4 py-2">
        <span className="text-white text-sm font-bold">{title}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-white text-xs bg-white/20 hover:bg-white/30 transition-colors px-3 py-1 rounded"
          aria-label="プロンプトをコピー"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>コピー済み</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>コピー</span>
            </>
          )}
        </button>
      </div>
      {/* プロンプト本文 */}
      <pre className="bg-[#F3F4F6] p-4 text-sm text-[#333333] leading-relaxed whitespace-pre-wrap font-mono overflow-x-auto">
        {children}
      </pre>
    </div>
  );
}
