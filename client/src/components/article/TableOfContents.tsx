import { List } from "lucide-react";

interface TocItem {
  id: string;
  label: string;
  level?: 2 | 3;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <nav className="bg-[#F5F9FC] border border-[#E5E7EB] rounded-lg p-5 mb-8">
      <div className="flex items-center gap-2 mb-3">
        <List className="w-4 h-4 text-[#5B9BD5]" />
        <span className="text-sm font-bold text-[#333333]">目次</span>
      </div>
      <ol className="space-y-1.5">
        {items.map((item, idx) => (
          <li
            key={item.id}
            className={item.level === 3 ? "ml-4" : ""}
          >
            <a
              href={`#${item.id}`}
              className="text-sm text-[#5B9BD5] hover:text-[#4A8BC4] hover:underline transition-colors"
            >
              {item.level !== 3 && `${idx + 1}. `}{item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
