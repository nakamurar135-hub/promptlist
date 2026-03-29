import PageLayout from "@/components/layout/PageLayout";
import { ChevronRight, BookOpen, Zap } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";

// 初心者向けプロンプト集データ
const beginnerPrompts = [
  {
    href: "/articles/google-nano-banana-2-image-gen-guide",
    category: "AI活用",
    categoryColor: "#FF5722",
    title: "Google Nano Banana 2 画像生成プロンプトガイド｜無料AIで理想の画像を",
    description: "Googleの最新無料AI「Nano Banana 2」を使って、高品質な画像を生成するためのプロンプトガイド。初心者でも簡単に使える魔法のテンプレートとコツを解説。",
  },

  {
    href: "/articles/chatgpt-meeting-minutes",
    category: "ビジネス文書",
    categoryColor: "#5B9BD5",
    title: "ChatGPTで議事録を作成するプロンプト4選",
    description: "会議メモから自動で議事録を生成。要点整理、フォーマル形式、アクションアイテム抽出まで対応。",
  },
  {
    href: "/articles/chatgpt-beginner-guide",
    category: "基礎・入門",
    categoryColor: "#4CAF50",
    title: "ChatGPT初心者向け完全活用ガイド｜「何を聞けばいい？」を解決する黄金テンプレート",
    description: "2026年最新のChatGPT活用術を解説。コピペで使える「黄金テンプレート」と仕事・日常での具体例を紹介。",
  },
  {
    href: "/articles/chatgpt-question-template",
    category: "基礎・入門",
    categoryColor: "#4CAF50",
    title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集",
    description: "ChatGPTを使いこなすための基本的な質問テクニックを解説。初めての方はまずこちらから。",
  },
  {
    href: "/articles/chatgpt-business-email",
    category: "ビジネス文書",
    categoryColor: "#5B9BD5",
    title: "ChatGPTでそのまま使えるビジネスメール例文プロンプト10選",
    description: "お礼・依頼・謝罪など、ビジネスシーンで使えるメール文面をAIが自動生成。",
  },
  {
    href: "/articles/chatgpt-job-motivation",
    category: "キャリア",
    categoryColor: "#9C27B0",
    title: "ChatGPTで志望動機を書くプロンプト",
    description: "転職・就職活動で使える志望動機の作成をサポート。あなたの経験を効果的にアピール。",
  },
  {
    href: "/articles/chatgpt-blog-writing",
    category: "コンテンツ作成",
    categoryColor: "#FF9800",
    title: "ブログ記事をAIに書かせる日本語プロンプト",
    description: "ブログやSNS投稿のための文章作成をAIがサポート。構成から本文まで一貫して作成。",
  },
  {
    href: "/articles/chatgpt-line-reply",
    category: "日常・カジュアル",
    categoryColor: "#E91E63",
    title: "ChatGPTでLINE返信を作るプロンプト",
    description: "返信に悩むLINEメッセージへの対応をAIがサポート。カジュアルからフォーマルまで対応。",
  },
  {
    href: "/articles/chatgpt-ideation-prompt",
    category: "コンテンツ作成",
    categoryColor: "#FF9800",
    title: "ChatGPTでアイデア出しをするプロンプト4選",
    description: "ブレインストーミング、SWOT分析、SCAMPER法、6W2Hなど、企画・発想を加速する実践的なプロンプト集です。",
  },
  {
    href: "/articles/chatgpt-menu-planning-prompt",
    category: "日常・カジュアル",
    categoryColor: "#E91E63",
    title: "ChatGPTで献立を考えるプロンプト4選",
    description: "食材指定、栄養バランス重視、イベント・シーン別、冷蔵庫の余り物活用など、栄養バランス・時短を両立する実践的なプロンプト集です。",
  },
  {
    href: "/articles/chatgpt-sns-post-prompt",
    category: "コンテンツ作成",
    categoryColor: "#FF9800",
    title: "ChatGPTでSNS投稿文を作成するプロンプト4選",
    description: "新商品紹介、イベント告知、顧客の声、Q&A形式まで、コピペで使える実践的なプロンプト集です。",
  },
  {
    href: "/articles/chatgpt-summarize-prompt",
    category: "ビジネス文書",
    categoryColor: "#5B9BD5",
    title: "ChatGPTで要約文を作成するプロンプト4選",
    description: "長文読解・情報整理を効率化。記事、論文、会議録など、様々なテキストから要点を抽出。",
  },
  {
    href: "/articles/chatgpt-translation-prompt",
    category: "ビジネス文書",
    categoryColor: "#5B9BD5",
    title: "ChatGPTで翻訳をするプロンプト4選",
    description: "言語指定、目的・文脈指定、専門用語・固有名詞対応、複数言語一括翻訳など、ビジネス・学習で役立つ実践的なプロンプト集です。",
  },
];

export default function BeginnerPrompts() {
  useSEO({
    title: "初心者向けプロンプト集｜AIプロンプト活用ガイド",
    description: "ChatGPTをはじめとするAIツールで、すぐに使える初心者向けプロンプト集。ビジネスメール、議事録、ブログ作成など、実践的なテンプレートを完全無料で提供。",
    keywords: "ChatGPT,プロンプト,初心者向け,テンプレート,ビジネスメール,議事録,無料",
  });
  useOGP({
    title: "初心者向けプロンプト集｜AIプロンプト活用ガイド",
    description: "ChatGPTをはじめとするAIツールで、すぐに使える初心者向けプロンプト集。ビジネスメール、議事録、ブログ作成など、実践的なテンプレートを完全無料で提供。",
    type: "website",
  });

  return (
    <PageLayout>
      {/* ヘッダーセクション */}
      <section className="bg-gradient-to-r from-[#5B9BD5] to-[#4A8BC4] text-white py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6" />
            <span className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full">
              完全無料・コピペで使える
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            初心者向けプロンプト集
          </h1>
          <p className="text-lg text-white/90 mb-6">
            ChatGPTやその他のAIツールで、すぐに使える実践的なプロンプトテンプレート。初心者向けから中級者向けコースまで、段階的に学習できます。
          </p>
          <div className="flex items-center gap-2 text-white/80">
            <Zap className="w-4 h-4" />
            <span className="text-sm">全16記事・完全無料</span>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        {/* 記事グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {beginnerPrompts.map((prompt, index) => (
            <a
              key={index}
              href={prompt.href}
              className="group block p-6 bg-white dark:bg-slate-900 rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: prompt.categoryColor }}
                >
                  {prompt.category}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {prompt.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {prompt.description}
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-semibold">
                詳しく見る
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* プレミアムコース案内 */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 p-8 rounded-lg border border-purple-200 dark:border-purple-800">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                <span className="text-xl">👑</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2">プレミアム会員向けコース</h3>
              <p className="text-muted-foreground mb-4">
                AIエージェント開発の実践的なスキルを習得できる、4つのモジュールから構成された中級者向けコース。環境構築から本番運用まで、実務で必要な知識をすべてカバーしています。
              </p>
              <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 font-semibold">
                <span>プレミアム会員のみ閲覧可能</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
