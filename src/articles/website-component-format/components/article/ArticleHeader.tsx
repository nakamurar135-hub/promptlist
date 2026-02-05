import Image from "next/image"

interface ArticleHeaderProps {
  title: string
  eyecatchSrc: string
  createdAt: string
  updatedAt?: string
}

export default function ArticleHeader({
  title,
  eyecatchSrc,
  createdAt,
  updatedAt,
}: ArticleHeaderProps) {
  return (
    <header className="mb-8">
      <h1 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4 text-balance">
        {title}
      </h1>

      <div className="flex items-center gap-4 text-sm text-[#666666] mb-6">
        <time>作成日: {createdAt}</time>
        {updatedAt && <time>更新日: {updatedAt}</time>}
      </div>

      {eyecatchSrc && (
        <div className="rounded-lg overflow-hidden bg-[#F5F9FC]">
          <Image
            src={eyecatchSrc || "/placeholder.svg"}
            alt={title}
            width={800}
            height={450}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      )}
    </header>
  )
}
