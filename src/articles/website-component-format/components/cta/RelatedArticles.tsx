import { ArrowRight } from "lucide-react"

interface RelatedArticle {
  title: string
  description: string
  href: string
}

interface RelatedArticlesProps {
  articles: RelatedArticle[]
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-[#333333] mb-6 pb-2 border-b-2 border-[#5B9BD5]">
        関連記事
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.href}
            className={`
              block rounded-lg overflow-hidden bg-[#FFFFFF]
              border-2 transition-all
              ${
                index === 0
                  ? "border-[#FF9800] shadow-lg shadow-[#FF9800]/20"
                  : "border-[#E5E7EB] hover:border-[#5B9BD5] hover:shadow-md"
              }
            `}
          >
            <div className="p-4">
              <h3 className="font-bold text-[#333333] mb-2 line-clamp-2">{article.title}</h3>
              <p className="text-sm text-[#666666] line-clamp-2">{article.description}</p>
              <span className="inline-flex items-center gap-1 mt-3 text-sm text-[#5B9BD5] font-medium">
                記事を読む
                <ArrowRight size={14} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
