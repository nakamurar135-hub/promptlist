import { Link } from "wouter";
import PageLayout from "@/components/layout/PageLayout";
import {
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Crown,
  BookOpen,
  Zap,
  Bot,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getLoginUrl } from "@/const";
import { useAuth } from "@/_core/hooks/useAuth";
import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";
import SearchBar from "@/components/SearchBar";

// 初心者向け記事データ
const beginnerArticles = [
  {
    href: "/articles/chatgpt-meeting-minutes",
    category: "ビジネス文書",
    categoryColor: "#5B9BD5",
    title: "ChatGPTで議事録を作成するプロンプト4選",
    description: "会議メモから自動で議事録を生成。要点整理、フォーマル形式、アクションアイテム抽出まで対応。",
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
    href: "/articles/chatgpt-sns-post-prompt",
    category: "コンテンツ作成",
    categoryColor: "#FF9800",
    title: "ChatGPTでSNS投稿文を作成するプロンプト4選",
    description: "新商品紹介、イベント告知、顧客の声、Q&A形式まで、コピペで使える実践的なプロンプト集です。",
  },
  {
    href: "/articles/chatgpt-ideation-prompt",
    category: "企画・発想",
    categoryColor: "#4CAF50",
    title: "ChatGPTでアイデア出しをするプロンプト4選",
    description: "ブレインストーミング、SWOT分析、SCAMPER法、6W2Hなど、企画・発想を加速する実践的なプロンプト集です。",
  },
  {
    href: "/articles/chatgpt-summarize-prompt",
    category: "情報整理",
    categoryColor: "#00BCD4",
    title: "ChatGPTで要約文を作成するプロンプト4選",
    description: "文字数指定、目的・視点指定、箇条書き・表形式、専門家視点など、長文読解・情報整理を効率化する実践的なプロンプト集です。",
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
    description: "AIと直接編集しながら資料を完成させる、ChatGPTの新機能「Canvas」の初心者向け活用ガイド。",
  },
  {
    href: "/articles/chatgpt-menu-planning-prompt",
    category: "献立作成",
    categoryColor: "#FFC107",
    title: "ChatGPTで献立を考えるプロンプト4選",
    description: "食材指定、栄養バランス重視、イベント・シーン別、冷蔵庫の余り物活用など、栄養バランス・時短を両立する実践的なプロンプト集です。",
  },
  {
    href: "/articles/copilot-gpt55-images2",
    category: "AI活用",
    categoryColor: "#00A4EF",
    title: "【初心者向け】Copilot進化！GPT-5.5 ThinkingとChatGPT Images 2.0活用術",
    description: "Microsoft 365 Copilotに導入された最新AIモデルを活用して、より正確な回答と高品質な画像生成を実現するプロンプト術。",
  },
  {
    href: "/articles/copelf-browser-automation",
    category: "AI活用",
    categoryColor: "#4CAF50",
    title: "【初心者向け】もう「クリック」すら不要？ブラウザ操作AI『Copelf』でルーチンワークを自動化するプロンプト術",
    description: "2026年4月に登場したブラウザ操作AI「Copelf」を使って、繰り返しのウェブ作業を自動化する方法を解説。",
  },
  {
    href: "/articles/gemini-file-generation",
    category: "AI活用",
    categoryColor: "#4285F4",
    title: "【初心者向け】もう「コピペ」で悩まない！Geminiの『ファイル直接生成』で資料を即ダウンロードするプロンプト術",
    description: "Geminiの新機能「ファイル直接生成」でプロンプト一つでWordやPDFファイルを直接生成・ダウンロードする時短術。",
  },
  {
    href: "/articles/outlook-copilot-agent",
    category: "ビジネス効率化",
    categoryColor: "#00A4EF",
    title: "【初心者向け】メールの山にさようなら！Outlookの『Copilotエージェント』でAIに秘書を任せるプロンプト術",
    description: "Outlook内のCopilotエージェントでメールの整理・返信下書き・予定調整をAIに任せる方法を解説。",
  },
  {
    href: "/articles/genspark-office-integration",
    category: "ビジネス効率化",
    categoryColor: "#FF9800",
    title: "【初心者向け】パワポやExcelにAIが常駐！『Genspark Workspace 4.0』で資料作成を「AI社員」に任せるプロンプト術",
    description: "Genspark Workspace 4.0でOfficeソフトの画面内でAIと対話しながら資料を完成させる「AI共作」術。",
  },
];

// 中級者向けスキルガイドデータ
const skillGuides = [
  {
    href: "/articles/ai-agent-course-module-1",
    title: "Gitと始めるAIエージェント開発環境構築",
    description: "Gitでのバージョン管理を前提とした、AIエージェントの開発環境構築とプロジェクト初期設定を学びます。",
    isFree: false,
    level: "中級",
  },
  {
    href: "/articles/ai-agent-course-module-2",
    title: "ReActフレームワークで実践的なAIエージェント構築",
    description: "思考・行動・観察のループを実装し、複雑なタスクを自動化するAIエージェント開発を学びます。",
    isFree: false,
    level: "中級",
  },
  {
    href: "/articles/ai-agent-course-module-3",
    title: "マルチエージェントシステムの設計と実装",
    description: "複数のAIエージェントを連携させるシステムの設計方法とエージェント間通信を学びます。",
    isFree: false,
    level: "中級",
  },
  {
    href: "/articles/ai-agent-course-module-4",
    title: "本番環境へのデプロイとCI/CD構築",
    description: "AIエージェントを本番環境にデプロイし、Docker・Kubernetes・GitHub Actionsを使用した自動化を学びます。",
    isFree: false,
    level: "中級",
  },
];

export default function Home() {
  useSEO({
    title: "AIプロンプト活用ガイド｜ChatGPT完全ガイド",
    description: "ChatGPTをはじめとするAIツールを効果的に活用するためのプロンプト集・スキルガイドサイト。初心者向けから中級者向けまで、実践的なテンプレートと詳細な解説を提供します。",
    keywords: "ChatGPT,プロンプト,AI,プロンプトエンジニアリング,AIエージェント,初心者向け,スキルガイド,テンプレート,効率化,ビジネス",
  });
  useOGP({
    title: "AIプロンプト活用ガイド｜初心者から上級者まで段階的に学べる",
    description: "ChatGPTなどのAIツールを効果的に活用するためのプロンプト集・スキルガイド。初心者向けプロンプトから中級者向けスキルガイドまで、段階的に学べます。",
    type: "website",
  });

  const { isAuthenticated } = useAuth();

  return (
    <PageLayout>
      {/* ヒーローセクション */}
      <section className="bg-[#5B9BD5] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Bot className="w-8 h-8" />
            <span className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full">
              初心者から中級者まで段階的に学べる
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            AIプロンプト活用ガイド
          </h1>
          <p className="text-base md:text-lg opacity-90 mb-2">
            ビジネスメール、議事録、AIエージェントまで
          </p>
          <p className="text-sm opacity-80 mb-8">
            コピペで使えるプロンプト集から、AIエージェントの実践スキルまで一貫して学べます。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <CheckCircle className="w-4 h-4" />
              <span>初心者向けプロンプトは完全無料</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <BookOpen className="w-4 h-4" />
              <span>コピペですぐ使える</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Zap className="w-4 h-4" />
              <span>中級者向けスキルガイドも充実</span>
            </div>
          </div>
        </div>
      </section>

      {/* 検索セクション */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-12">
          <SearchBar placeholder="記事やスキルを検索..." />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">

        {/* サイト紹介 */}
        <section className="bg-[#F5F9FC] rounded-xl p-6 mb-12">
          <h2 className="text-lg md:text-xl font-bold text-[#333333] mb-4">このサイトについて</h2>
          <p className="text-[#333333] leading-relaxed mb-3">
            「AIプロンプト活用ガイド」は、ChatGPTをはじめとするAIツールを効果的に活用するためのプロンプト集・スキルガイドサイトです。
          </p>
          <p className="text-[#333333] leading-relaxed mb-3">
            <strong>初心者向け</strong>のプロンプト集はすべて無料でご利用いただけます。ビジネスメールや議事録など、仕事で即使えるプロンプトをコピペするだけで活用できます。
          </p>
          <p className="text-[#333333] leading-relaxed">
            <strong>中級者向け</strong>のAIエージェントスキルガイドでは、AIを自律的に動かす高度な活用法を学べます。一部のコンテンツはプレミアム会員限定です。
          </p>
        </section>

        {/* 利用規約 */}
        <section className="bg-[#FFF8E6] border-2 border-[#FF9800] rounded-xl p-6 mb-12">
          <h2 className="text-lg font-bold text-[#E68900] mb-4">ご利用にあたって</h2>
          <div className="space-y-3">
            <div className="flex gap-3 bg-white rounded-lg p-4">
              <CheckCircle className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-[#333333] text-sm mb-1">初心者向けプロンプトは完全無料でご利用いただけます</h3>
                <p className="text-[#666666] text-xs leading-relaxed">
                  当サイトで紹介している初心者向けプロンプトは、個人・商用問わず無料でご利用いただけます。コピー、改変、再配布も自由です。
                </p>
              </div>
            </div>
            <div className="flex gap-3 bg-white rounded-lg p-4">
              <AlertTriangle className="w-5 h-5 text-[#FF9800] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-[#333333] text-sm mb-1">AIが生成した回答の内容については責任を負いかねます</h3>
                <p className="text-[#666666] text-xs leading-relaxed">
                  プロンプトを使用してAIが生成した回答の正確性・適切性については、当サイトは一切の責任を負いません。重要な用途でご使用の際は、必ず内容をご確認ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 初心者向けプロンプト一覧 */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-1">
                初心者向けプロンプト集
              </h2>
              <p className="text-sm text-[#666666]">コピペですぐ使える・完全無料</p>
            </div>
            <Link href="/articles" className="text-sm text-[#5B9BD5] hover:text-[#4A8BC4] flex items-center gap-1">
              すべて見る <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {beginnerArticles.map((article) => (
              <Link
                key={article.href}
                href={`${article.href}#article-title`}
                className="block bg-white border border-[#E5E7EB] rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div
                  className="text-white px-4 py-2 text-xs font-bold"
                  style={{ backgroundColor: article.categoryColor }}
                >
                  {article.category}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#333333] mb-2 leading-snug group-hover:text-[#5B9BD5] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed">{article.description}</p>
                </div>
                <div className="px-5 pb-4 flex items-center gap-1 text-[#5B9BD5] text-xs font-medium">
                  記事を読む <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 中級者向けAIエージェントスキルガイド */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-1">
                中級者向けAIエージェントスキルガイド
              </h2>
              <p className="text-sm text-[#666666]">AIを自律的に動かす実践スキルを習得する</p>
            </div>
            <Link href="/premium" className="text-sm text-[#5B9BD5] hover:text-[#4A8BC4] flex items-center gap-1">
              すべて見る <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* プレミアム訴求バナー */}
          <div className="bg-gradient-to-r from-[#FF9800] to-[#E68900] rounded-xl p-5 mb-6 text-white">
            <div className="flex items-start gap-3">
              <Crown className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold mb-1">プレミアム会員限定コンテンツを含みます</p>
                <p className="text-sm opacity-90 mb-3">
                  すべてのスキルガイドはプレミアム会員のみ閲覧できます。プレミアム会員になると全コンテンツが読み放題になります。
                </p>
                {!isAuthenticated && (
                  <a href={getLoginUrl()}>
                    <Button size="sm" className="bg-white text-[#FF9800] hover:bg-white/90 font-bold border-0">
                      会員登録（無料）
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {skillGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="block bg-white border border-[#E5E7EB] rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-[#666666] bg-[#F3F4F6] px-2 py-0.5 rounded">
                      {guide.level}
                    </span>
                    {guide.isFree ? (
                      <span className="inline-flex items-center gap-1 bg-[#4CAF50] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        <CheckCircle className="w-3 h-3" /> 無料
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 bg-[#FF9800] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        <Crown className="w-3 h-3" /> プレミアム
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-[#333333] mb-2 leading-snug group-hover:text-[#5B9BD5] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed">{guide.description}</p>
                </div>
                <div className="px-5 pb-4 flex items-center gap-1 text-[#5B9BD5] text-xs font-medium">
                  {guide.isFree ? (
                    <>ガイドを読む <ArrowRight className="w-3.5 h-3.5" /></>
                  ) : (
                    <><Crown className="w-3.5 h-3.5 text-[#FF9800]" /> <span className="text-[#FF9800]">プレミアム限定</span></>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </PageLayout>
  );
}
