import CopyButton from "@/components/common/CopyButton"

interface PromptBlockProps {
  prompt: string
  title?: string
}

export default function PromptBlock({ prompt, title = "プロンプト" }: PromptBlockProps) {
  return (
    <div className="my-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-bold text-[#333333]">{title}</span>
      </div>
      <div className="relative bg-[#F3F4F6] rounded-lg p-4">
        <pre className="whitespace-pre-wrap text-sm text-[#333333] font-mono pr-20 leading-relaxed">
          {prompt}
        </pre>
        <div className="absolute top-3 right-3">
          <CopyButton text={prompt} />
        </div>
      </div>
    </div>
  )
}
