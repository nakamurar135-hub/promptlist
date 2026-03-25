import { Bot } from "lucide-react";
import React from "react";

interface ResponseExampleProps {
  title?: string;
  children: React.ReactNode;
}

export default function ResponseExample({ title = "ChatGPTの回答例", children }: ResponseExampleProps) {
  const isString = typeof children === "string";

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-[#E5E7EB]">
      <div className="flex items-center gap-2 bg-[#F5F9FC] border-b border-[#E5E7EB] px-4 py-2">
        <Bot className="w-4 h-4 text-[#5B9BD5]" />
        <span className="text-sm font-bold text-[#333333]">{title}</span>
      </div>
      <div className="bg-white p-4">
        {isString ? (
          <pre className="text-sm text-[#333333] leading-relaxed whitespace-pre-wrap font-sans">
            {children}
          </pre>
        ) : (
          <div className="text-sm text-[#333333] leading-relaxed">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
