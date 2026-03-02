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
];

// 中級者向けスキルガイドデータ
const skillGuides = [
  {
    href: "/skills/ai-agent-basics",
    title: "AIエージェント入門：自律的に動くAIの仕組みを理解する",
    description: "AIエージェントとは何か、どのように動作するのかを基礎から解説します。",
    isFree: true,
    level: "中級",
  },
  {
    href: "/skills/task-automation",
    title: "タスク自動化の基礎：AIに複数ステップの作業を任せる",
    description: "AIエージェントを使って繰り返し作業を自動化する実践的な手法を学びます。",
    isFree: true,
    level: "中級",
  },
  {
    href: "/skills/prompt-engineering",
    title: "プロンプトエンジニアリング実践：AIの性能を最大化する技術",
    description: "Chain-of-ThoughtやFew-shotなど、AIの出力品質を劇的に向上させる高度なテクニック。",
    isFree: false,
    level: "中級〜上級",
  },
  {
    href: "/skills/multi-agent-systems",
    title: "マルチエージェントシステム：複数のAIを連携させる",
    description: "複数のAIエージェントが協調して複雑なタスクを解決するシステムの設計と実装。",
    isFree: false,
    level: "上級",
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
            <Link href="/skills" className="text-sm text-[#5B9BD5] hover:text-[#4A8BC4] flex items-center gap-1">
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
                  一部のスキルガイドはプレミアム会員のみ閲覧できます。プレミアム会員になると全コンテンツが読み放題になります。
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
