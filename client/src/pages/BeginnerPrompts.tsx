import PageLayout from "@/components/layout/PageLayout";
import { ChevronRight, BookOpen, Zap } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";

// 初心者向けプロンプト集データ
const beginnerPrompts = [
  {
    href: "/articles/gpt54-agent-mode-guide",
    category: "ChatGPT活用",
    categoryColor: "#10a37f",
    title: "GPT-5.4「おまかせモード」活用術｜プロンプト不要のAIエージェント体験",
    description: "2026年3月公開のChatGPT最新版「GPT-5.4」に搭載された「おまかせモード」を解説。プロンプト作成が苦手な初心者でも、一言で複雑なタスクを完了させる方法を紹介します。",
  },
  {
    href: "/articles/ai-agent-beginner-guide",
    category: "AI活用",
    categoryColor: "#4CAF50",
    title: "「AIに任せる」の第一歩！AIエージェント超入門 - 2026年のAIは「自分で考えて動く」",
    description: "2026年、AIは「答える」から「実行する」フェーズへ。初心者が面倒な作業をAIに丸投げするためのコツを分かりやすく解説します。",
  },
  {
    href: "/articles/copilot-think-deeper-guide",
    category: "AI活用",
    categoryColor: "#00A4EF",
    title: "Copilot「Think Deeper」モード初心者ガイド｜無料で高品質な長文生成",
    description: "2026年3月登場のCopilot新機能「Think Deeper」の使い方を完全解説。15～20分かけて深く考えるモードで、A4 30ページ超の資料も作成可能。初心者向けの実践的なプロンプト例も紹介します。",
  },
  {
    href: "/articles/claude-mythos-advanced-guide",
    category: "AI活用",
    categoryColor: "#9C27B0",
    title: "異次元の推論能力！Claude Mythos「思考プロセス」活用ガイド｜中級者向け",
    description: "2026年6月発表のClaude Mythosは、従来のLLMを凌駕する推論能力を持つAIです。複雑な論理パズル、大規模コード分析、戦略策定を実現するプロンプト術を解説します。",
  },
  {
    href: "/articles/ai-master-key-prompt-guide",
    category: "AI活用",
    categoryColor: "#FF5722",
    title: "【初心者必見】AIに「使い方」を教わる最強のマスターキー・プロンプト",
    description: "AIを使い始めたばかりの初心者が直面する「何を聞けばいいかわからない」という壁を打破するためのガイド。AI自身に初心者が陥りやすいミスと、日常生活での具体的な活用例を教わる「マスターキー・プロンプト」を紹介します。",
  },
  {
    href: "/articles/agentic-ai-workflow-guide",
    category: "AI活用",
    categoryColor: "#2196F3",
    title: "エージェント型AI（Agentic AI）構築ガイド｜マルチステップ・ワークフロー実装",
    description: "2026年最新トレンド「Agentic AI」を活用し、AIが自ら計画・判断・実行するワークフロー構築方法を解説。業務自動化から複雑なタスク実行まで。",
  },
  {
    href: "/articles/llm-structured-output-guide",
    category: "AI開発",
    categoryColor: "#FF6F00",
    title: "LLM構造化出力（Structured Output）実践ガイド｜JSONで確実に受け取る技術",
    description: "2026年最新LLM（GPT-5.4、Gemini 3.1 Pro）の構造化出力機能を使いこなし、AIの回答をプログラマブルに制御する実践手法を解説。",
  },
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
  {
    href: "/articles/chatgpt-canvas-beginner",
    category: "AI活用",
    categoryColor: "#4CAF50",
    title: "AIと「一緒に作る」新体験！ChatGPTの『Canvas』活用術",
    description: "ChatGPTの新機能「Canvas」を初心者向けに解説。AIと直接編集しながら資料を完成させる、新しい共同作業の形を紹介します。",
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
            <span className="text-sm">全21記事・完全無料</span>
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
