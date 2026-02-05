"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

interface CopyButtonProps {
  text: string
}

export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("コピーに失敗しました", err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="px-3 py-1.5 text-xs bg-[#5B9BD5] text-[#FFFFFF] rounded-lg hover:bg-[#4A8BC4] transition-colors flex items-center gap-1.5"
    >
      {copied ? (
        <>
          <Check size={14} />
          コピー完了!
        </>
      ) : (
        <>
          <Copy size={14} />
          コピー
        </>
      )}
    </button>
  )
}
