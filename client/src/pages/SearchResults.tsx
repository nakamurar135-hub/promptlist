import { useLocation } from "wouter";
import { useMemo } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { ChevronRight, BookOpen } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";
import SearchBar from "@/components/SearchBar";

// すべての記事データ
const allArticles = [
  {
    href: "/articles/chatgpt-meeting-minutes",
    category: "ビジネス文書",
    categoryColor: "#5B9BD5",
    title: "ChatGPTで議事録を作成するプロンプト4選",
    description: "会議メモから自動で議事録を生成。要点整理、フォーマル形式、アクションアイテム抽出まで対応。",
    keywords: ["議事録", "会議", "ChatGPT", "ビジネス"],
  },
  {
    href: "/articles/chatgpt-question-template",
    category: "基礎・入門",
    categoryColor: "#4CAF50",
    title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集",
    description: "ChatGPTを使いこなすための基本的な質問テクニックを解説。初めての方はまずこちらから。",
    keywords: ["質問", "テンプレート", "初心者", "ChatGPT"],
  },
  {
    href: "/articles/chatgpt-business-email",
    category: "ビジネス文書",
    categoryColor: "#5B9BD5",
    title: "ChatGPTでそのまま使えるビジネスメール例文プロンプト10選",
    description: "お礼・依頼・謝罪など、ビジネスシーンで使えるメール文面をAIが自動生成。",
    keywords: ["メール", "ビジネス", "例文", "ChatGPT"],
  },
  {
    href: "/articles/chatgpt-job-motivation",
    category: "キャリア",
    categoryColor: "#9C27B0",
    title: "ChatGPTで志望動機を書くプロンプト",
    description: "転職・就職活動で使える志望動機の作成をサポート。あなたの経験を効果的にアピール。",
    keywords: ["志望動機", "転職", "就職", "キャリア"],
  },
  {
    href: "/articles/chatgpt-blog-writing",
    category: "コンテンツ作成",
    categoryColor: "#FF9800",
    title: "ブログ記事をAIに書かせる日本語プロンプト",
    description: "ブログやSNS投稿のための文章作成をAIがサポート。構成から本文まで一貫して作成。",
    keywords: ["ブログ", "記事", "コンテンツ", "ChatGPT"],
  },
  {
    href: "/articles/chatgpt-line-reply",
    category: "日常・カジュアル",
    categoryColor: "#E91E63",
    title: "ChatGPTでLINE返信を作るプロンプト",
    description: "返信に悩むLINEメッセージへの対応をAIがサポート。カジュアルからフォーマルまで対応。",
    keywords: ["LINE", "返信", "日常", "ChatGPT"],
  },
  {
    href: "/articles/chatgpt-ideation-prompt",
    category: "コンテンツ作成",
    categoryColor: "#FF9800",
    title: "ChatGPTでアイデア出しをするプロンプト4選",
    description: "ブレインストーミング、SWOT分析、SCAMPER法、6W2Hなど、企画・発想を加速する実践的なプロンプト集です。",
    keywords: ["アイデア", "ブレインストーミング", "企画", "ChatGPT"],
  },
  {
    href: "/articles/chatgpt-menu-planning-prompt",
    category: "日常・カジュアル",
    categoryColor: "#E91E63",
    title: "ChatGPTで献立を考えるプロンプト4選",
    description: "食材指定、栄養バランス重視、イベント・シーン別、冷蔵庫の余り物活用など、栄養バランス・時短を両立する実践的なプロンプト集です。",
    keywords: ["献立", "料理", "栄養", "ChatGPT"],
  },
  {
    href: "/articles/chatgpt-sns-post-prompt",
    category: "コンテンツ作成",
    categoryColor: "#FF9800",
    title: "ChatGPTでSNS投稿文を作成するプロンプト4選",
    description: "新商品紹介、イベント告知、顧客の声、Q&A形式まで、コピペで使える実践的なプロンプト集です。",
    keywords: ["SNS", "投稿", "マーケティング", "ChatGPT"],
  },
  {
    href: "/articles/chatgpt-summarize-prompt",
    category: "ビジネス文書",
    categoryColor: "#5B9BD5",
    title: "ChatGPTで要約文を作成するプロンプト4選",
    description: "長文読解・情報整理を効率化。記事、論文、会議録など、様々なテキストから要点を抽出。",
    keywords: ["要約", "情報整理", "効率化", "ChatGPT"],
  },
  {
    href: "/articles/chatgpt-translation-prompt",
    category: "ビジネス文書",
    categoryColor: "#5B9BD5",
    title: "ChatGPTで翻訳をするプロンプト4選",
    description: "言語指定、目的・文脈指定、専門用語・固有名詞対応、複数言語一括翻訳など、ビジネス・学習で役立つ実践的なプロンプト集です。",
    keywords: ["翻訳", "言語", "ビジネス", "ChatGPT"],
  },
  {
    href: "/articles/claude-mythos-advanced-guide",
    category: "AI活用",
    categoryColor: "#9C27B0",
    title: "異次元の推論能力！Claude Mythos思考プロセス活用ガイド",
    description: "2026年6月発表のClaude Mythosは、従来のLLMを凌駕する推論能力を持つAIです。複雑な論理パズル、大規模コード分析、戦略策定を実現するプロンプト術を解説します。",
    keywords: ["Claude Mythos", "推論", "思考プロセス", "AI", "中級者"],
  },
];

export default function SearchResults() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(location.split("?")[1]);
  const query = searchParams.get("q") || "";

  const results = useMemo(() => {
    if (!query.trim()) return allArticles;

    const lowerQuery = query.toLowerCase();
    return allArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(lowerQuery) ||
        article.description.toLowerCase().includes(lowerQuery) ||
        article.category.toLowerCase().includes(lowerQuery) ||
        article.keywords.some((k) => k.toLowerCase().includes(lowerQuery))
    );
  }, [query]);

  useSEO({
    title: `「${query}」の検索結果｜AIプロンプト活用ガイド`,
    description: `「${query}」に関連するプロンプト集とスキルガイドを検索。ChatGPTなどのAIツールを効果的に活用するためのコンテンツが見つかります。`,
    keywords: `${query},プロンプト,ChatGPT,AI,検索`,
  });

  useOGP({
    title: `「${query}」の検索結果｜AIプロンプト活用ガイド`,
    description: `「${query}」に関連するプロンプト集とスキルガイドを検索。`,
    type: "website",
  });

  return (
    <PageLayout>
      {/* ヘッダーセクション */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-700 dark:to-blue-800 text-white py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6" />
            <span className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full">
              検索結果
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            「{query}」の検索結果
          </h1>
          <p className="text-base md:text-lg opacity-90">
            {results.length}件のコンテンツが見つかりました
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* 検索ボックス */}
        <div className="mb-12">
          <SearchBar placeholder="別の記事やスキルを検索..." />
        </div>

        {/* 検索結果 */}
        {results.length > 0 ? (
          <div className="space-y-4">
            {results.map((article) => (
              <a
                key={article.href}
                href={article.href}
                className="block p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-blue-500/20 transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: article.categoryColor }}
                      >
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {article.description}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0 mt-1" />
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              検索結果がありません
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              「{query}」に関連するコンテンツが見つかりませんでした。
            </p>
            <a
              href="/articles"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              すべてのプロンプト集を見る
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
