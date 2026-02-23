import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface RelatedArticle {
  title: string;
  href: string;
  description?: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <div className="my-10">
      <h3 className="text-base font-bold text-[#333333] mb-4 pb-2 border-b border-[#E5E7EB]">
        関連記事
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="block bg-[#F5F9FC] hover:bg-[#EBF5FF] border border-[#E5E7EB] rounded-lg p-4 transition-colors group"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-sm font-bold text-[#5B9BD5] group-hover:text-[#4A8BC4] leading-snug mb-1">
                  {article.title}
                </p>
                {article.description && (
                  <p className="text-xs text-[#666666] leading-relaxed">{article.description}</p>
                )}
              </div>
              <ArrowRight className="w-4 h-4 text-[#5B9BD5] flex-shrink-0 mt-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
