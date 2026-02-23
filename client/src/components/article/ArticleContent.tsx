interface ArticleContentProps {
  children: React.ReactNode;
}

export default function ArticleContent({ children }: ArticleContentProps) {
  return (
    <div className="article-content max-w-3xl">
      {children}
    </div>
  );
}
