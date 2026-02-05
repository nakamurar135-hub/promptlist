interface ArticleLink {
  title: string
  href: string
}

interface Category {
  name: string
  articles: ArticleLink[]
}

interface FooterProps {
  categories: Category[]
  copyright: string
}

export default function Footer({ categories, copyright }: FooterProps) {
  return (
    <footer className="bg-[#5B9BD5] text-[#FFFFFF] mt-12">
      {/* Category Links */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4 border-b border-[#FFFFFF]/30 pb-2">
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.articles.slice(0, 5).map((article, articleIndex) => (
                  <li key={articleIndex}>
                    <a
                      href={article.href}
                      className="text-sm hover:opacity-80 transition-opacity line-clamp-2"
                    >
                      {article.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#FFFFFF]/30">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm">
          {copyright}
        </div>
      </div>
    </footer>
  )
}
