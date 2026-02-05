import React from "react"

interface ArticleContentProps {
  children: React.ReactNode
}

export default function ArticleContent({ children }: ArticleContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      {children}
    </div>
  )
}
