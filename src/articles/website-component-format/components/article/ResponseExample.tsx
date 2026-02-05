interface ResponseExampleProps {
  response: string
  title?: string
}

export default function ResponseExample({ response, title = "回答例" }: ResponseExampleProps) {
  return (
    <div className="my-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-bold text-[#333333]">{title}</span>
      </div>
      <div className="bg-[#F3F4F6] rounded-lg p-4 border-l-4 border-[#5B9BD5]">
        <pre className="whitespace-pre-wrap text-sm text-[#333333] font-mono leading-relaxed">
          {response}
        </pre>
      </div>
    </div>
  )
}
