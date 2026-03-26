import { Calendar, Clock, Tag } from "lucide-react";

interface ArticleHeaderProps {
  title: string;
  description: string;
  category: string;
  categoryColor?: string;
  publishedAt: string;
  readingTime?: string;
}

export default function ArticleHeader({
  title,
  description,
  category,
  categoryColor = "#5B9BD5",
  publishedAt,
  readingTime = "約5分",
}: ArticleHeaderProps) {
  return (
    <div className="mb-8">
      {/* カテゴリバッジ */}
      <div className="mb-3">
        <span
          className="inline-flex items-center gap-1 text-xs font-bold text-white px-3 py-1 rounded-full"
          style={{ backgroundColor: categoryColor }}
        >
          <Tag className="w-3 h-3" />
          {category}
        </span>
      </div>

      {/* タイトル */}
      <h1 id="article-title" className="text-2xl md:text-3xl font-bold text-[#333333] leading-tight mb-4">
        {title}
      </h1>

      {/* 説明 */}
      <p className="text-[#666666] leading-relaxed mb-4">{description}</p>

      {/* メタ情報 */}
      <div className="flex items-center gap-4 text-xs text-[#666666]">
        <span className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5" />
          {publishedAt}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {readingTime}
        </span>
      </div>
    </div>
  );
}
