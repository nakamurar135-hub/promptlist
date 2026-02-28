import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";
import { useStructuredData } from "@/hooks/useStructuredData";

type Category = "all" | "question" | "meeting" | "email" | "line" | "blog" | "job";

interface PromptArticle {
  id: string;
  title: string;
  description: string;
  category: Exclude<Category, "all">;
  categoryLabel: string;
  path: string;
  icon: string;
}

const articles: PromptArticle[] = [
  {
    id: "question",
    title: "ChatGPTへの質問テンプレート集",
    description: "初心者でも失敗しないプロンプトの書き方5選。コピペで使える質問テンプレート。",
    category: "question",
    categoryLabel: "質問テンプレート",
    path: "/articles/chatgpt-question-template",
    icon: "💬",
  },
  {
    id: "meeting",
    title: "ChatGPTで議事録を効率的に作成する方法",
    description: "会議内容をテキストで入力するだけで、プロフェッショナルな議事録を自動生成。",
    category: "meeting",
    categoryLabel: "議事録作成",
    path: "/articles/chatgpt-meeting-minutes",
    icon: "📋",
  },
  {
    id: "email",
    title: "ChatGPTでビジネスメールを素早く作成",
    description: "件名、相手、要件を入力するだけで、丁寧で効果的なメールを生成。",
    category: "email",
    categoryLabel: "ビジネスメール",
    path: "/articles/chatgpt-business-email",
    icon: "📧",
  },
  {
    id: "line",
    title: "ChatGPTでLINEの返信を自動生成",
    description: "相手のメッセージに対して、自然で適切なLINE返信を素早く作成。",
    category: "line",
    categoryLabel: "LINE返信",
    path: "/articles/chatgpt-line-reply",
    icon: "💬",
  },
  {
    id: "blog",
    title: "ChatGPTでブログ記事を効率的に執筆",
    description: "ブログのテーマと要点を入力するだけで、読みやすく魅力的な記事を生成。",
    category: "blog",
    categoryLabel: "ブログ執筆",
    path: "/articles/chatgpt-blog-writing",
    icon: "✍️",
  },
  {
    id: "job",
    title: "ChatGPTで職務経歴書の志望動機を作成",
    description: "職務経歴と志望企業の情報から、説得力のある志望動機を生成。",
    category: "job",
    categoryLabel: "職務経歴書",
    path: "/articles/chatgpt-job-motivation",
    icon: "🎯",
  },
];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "すべて" },
  { value: "question", label: "質問テンプレート" },
  { value: "meeting", label: "議事録作成" },
  { value: "email", label: "ビジネスメール" },
  { value: "line", label: "LINE返信" },
  { value: "blog", label: "ブログ執筆" },
  { value: "job", label: "職務経歴書" },
];

export default function PromptGallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  useSEO({
    title: "初心者向けプロンプト一覧｜ChatGPT活用テンプレート集",
    description: "ChatGPTを使いこなすための初心者向けプロンプトテンプレート一覧。質問、議事録、メール、LINE、ブログ、職務経歴書など、すぐに使える6つのカテゴリ。",
    keywords: "ChatGPT,プロンプト,テンプレート,初心者,一覧,質問,議事録,メール,LINE,ブログ",
  });

  useOGP({
    title: "初心者向けプロンプト一覧｜ChatGPT活用テンプレート集",
    description: "ChatGPTを使いこなすための初心者向けプロンプトテンプレート一覧。質問、議事録、メール、LINE、ブログ、職務経歴書など、すぐに使える6つのカテゴリ。",
    type: "website",
    image: "https://example.com/prompt-gallery.png",
    url: window.location.href,
  });

  useStructuredData({
    title: "初心者向けプロンプト一覧｜ChatGPT活用テンプレート集",
    description: "ChatGPTを使いこなすための初心者向けプロンプトテンプレート一覧。質問、議事録、メール、LINE、ブログ、職務経歴書など、すぐに使える6つのカテゴリ。",
    author: "AIプロンプト活用ガイド",
    datePublished: "2026-02-28T00:00:00Z",
    dateModified: "2026-02-28T00:00:00Z",
  });

  const filteredArticles =
    selectedCategory === "all"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* ヘッダーセクション */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              初心者向けプロンプト一覧
            </h1>
            <p className="text-lg text-muted-foreground">
              ChatGPTを使いこなすための実践的なプロンプトテンプレートを、カテゴリ別にご紹介。
              すぐに使えるテンプレートで、業務効率化を実現しましょう。
            </p>
          </div>
        </div>
      </section>

      {/* カテゴリフィルター */}
      <section className="py-8 border-b bg-background sticky top-16 z-40">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                variant={selectedCategory === category.value ? "default" : "outline"}
                className="transition-all"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* プロンプト一覧 */}
      <section className="py-12 md:py-16">
        <div className="container">
          {filteredArticles.length > 0 ? (
            <>
              <p className="text-sm text-muted-foreground mb-8">
                {filteredArticles.length}件のプロンプトが見つかりました
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <Link key={article.id} href={article.path}>
                    <a className="group h-full">
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <span className="text-3xl">{article.icon}</span>
                            <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                              {article.categoryLabel}
                            </span>
                          </div>
                          <CardTitle className="group-hover:text-blue-600 transition-colors line-clamp-2">
                            {article.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="line-clamp-3">
                            {article.description}
                          </CardDescription>
                          <div className="mt-4 text-sm text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                            詳細を見る →
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                選択したカテゴリにはプロンプトがありません。
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">さらに詳しく学びたい方へ</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            AIの活用方法をもっと深く学びたい方は、スキルガイドをご覧ください。
            プロンプトエンジニアリングやAIエージェント、RAG実装など、実践的な知識が満載です。
          </p>
          <Link href="/skills">
            <a className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              スキルガイドを見る
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
