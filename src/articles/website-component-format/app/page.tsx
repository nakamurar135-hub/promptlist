import Link from "next/link"
import PageLayout from "@/components/layout/PageLayout"
import { CheckCircle, AlertTriangle } from "lucide-react"

// 共通設定
const headerProps = {
  logoSrc: "/images/logo.png",
  siteName: "AIプロンプト活用ガイド",
  navItems: [
    { label: "ホーム", href: "/" },
    { label: "記事一覧", href: "#categories" },
    { label: "利用規約", href: "#terms" },
  ],
}

const footerProps = {
  categories: [
    {
      name: "ビジネス文書",
      articles: [
        { title: "ビジネスメール作成", href: "/articles/business-email" },
        { title: "議事録作成", href: "/articles/chatgpt-meeting-minutes" },
        { title: "敬語文章生成", href: "/articles/keigo" },
        { title: "クレーム返信", href: "/articles/claim-response" },
        { title: "営業メール", href: "/articles/sales-email" },
      ],
    },
    {
      name: "基礎・入門",
      articles: [
        { title: "質問テンプレート集", href: "/articles/beginner-template" },
        { title: "高度な音声モード活用術", href: "/articles/chatgpt-voice-beginner" },
        { title: "ChatGPT検索機能活用術", href: "/articles/chatgpt-search-beginner" },
        { title: "Vibe Working入門", href: "/articles/vibe-working-beginner" },
        { title: "Chrome AI履歴検索活用術", href: "/articles/chrome-ai-history-search" },
        { title: "Siri Gemini活用術", href: "/articles/siri-gemini-beginner" },
      ],
    },
    {
      name: "キャリア",
      articles: [
        { title: "志望動機作成", href: "/articles/motivation-letter" },
      ],
    },
    {
      name: "コンテンツ作成",
      articles: [
        { title: "ブログ記事作成", href: "/articles/blog-writing" },
      ],
    },
    {
      name: "日常・カジュアル",
      articles: [
        { title: "LINE返信", href: "/articles/line-reply" },
        { title: "説明文作成", href: "/articles/explanation" },
      ],
    },
  ],
  copyright: "© 2026 AIプロンプト活用ガイド All Rights Reserved.",
}

// カテゴリ別記事データ
const categoryArticles = [
  {
    category: "基礎・入門",
    categoryColor: "bg-[#4CAF50]",
    title: "【初心者向け】「あのサイト、何だっけ？」をAIが解決！Chromeの『AI履歴検索』活用術",
    description: "2026年のChrome新機能「AI履歴検索」を徹底解説。正確なサイト名を忘れても「赤い靴のサイト」といった曖昧な記憶（プロンプト）で目的のページを即座に見つける方法を紹介します。",
    href: "/articles/chrome-ai-history-search",
  },
  {
    category: "ビジネス文書",
    categoryColor: "bg-[#5B9BD5]",
    title: "ChatGPTで議事録を作成するプロンプト4選",
    description: "会議メモから自動で議事録を生成。要点整理、フォーマル形式、アクションアイテム抽出まで対応。",
    href: "/articles/chatgpt-meeting-minutes",
  },
  {
    category: "基礎・入門",
    categoryColor: "bg-[#4CAF50]",
    title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集",
    description: "ChatGPTを使いこなすための基本的な質問テクニックを解説。初めての方はまずこちらから。",
    href: "/articles/beginner-template",
  },
  {
    category: "基礎・入門",
    categoryColor: "bg-[#4CAF50]",
    title: "プロンプトは「話す」から「話す」へ！ChatGPT「高度な音声モード」活用術",
    description: "キーボード入力が苦手な初心者でも大丈夫！ChatGPTの「高度な音声モード」を使い、AIと自然に会話しながら理想の回答を引き出す方法を解説。",
    href: "/articles/chatgpt-voice-beginner",
  },
  {
    category: "基礎・入門",
    categoryColor: "bg-[#4CAF50]",
    title: "ググるより速い！ChatGPTの「検索機能（Search）」で最新情報を引き出すプロンプト術",
    description: "「AIは古い情報しか持っていない」という初心者の思い込みを覆す、ChatGPTの最新「検索機能（Search）」の活用ガイド。検索エンジンで複数のサイトを見比べる手間を省き、AIに「今、この瞬間」の情報を正しく調べさせるためのコツを、PC標準のChatGPT利用シーンに合わせて解説します。",
    href: "/articles/chatgpt-search-beginner",
  },
  {
    category: "基礎・入門",
    categoryColor: "bg-[#4CAF50]",
    title: "プロンプト不要？感覚でAIを操る「Vibe Working（バイブ・ワーキング）」入門",
    description: "「完璧なプロンプトを書かなければ」というプレッシャーから解放されましょう。隣の同僚に話しかけるような「適当な指示（バイブス）」でAIを動かす2026年の新常識「Vibe Working」を解説します。",
    href: "/articles/vibe-working-beginner",
  },
  {
    category: "基礎・入門",
    categoryColor: "bg-[#4CAF50]",
    title: "【初心者向け】iPhoneのSiriが賢くなった！Google Gemini搭載で「頼み事」が通じるプロンプト術",
    description: "2026年、AppleとGoogleの提携により進化したSiriの初心者向け活用ガイド。Geminiの搭載で、複雑な意図を汲み取った「頼み事」ができるようになった新しいSiriの使いこなし術を解説します。",
    href: "/articles/siri-gemini-beginner",
  },
]

export default function HomePage() {
  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-[#5B9BD5] to-[#4A8BC4] text-white py-16 px-4 -mx-4 md:-mx-8 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
            ChatGPTプロンプトを<br />コピペで今すぐ活用
          </h1>
          <p className="text-lg md:text-xl mb-4 opacity-95">
            ビジネスメール、議事録、敬語文章など<br className="hidden md:inline" />
            仕事で使える実践的なプロンプトを無料で提供しています。
          </p>
          <p className="text-base md:text-lg opacity-90">
            初心者の方でも、コピペするだけですぐに使えます。
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-[#5B9BD5] text-sm">
                &#10003;
              </div>
              <span>完全無料</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-[#5B9BD5] text-sm">
                &#10003;
              </div>
              <span>コピペで使える</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-[#5B9BD5] text-sm">
                &#10003;
              </div>
              <span>初心者向け解説付き</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto">
        {/* サイト紹介 */}
        <section id="about" className="bg-[#F5F9FC] rounded-xl p-6 md:p-8 mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4">
            当サイトについて
          </h2>
          <p className="text-[#333333] leading-relaxed mb-4">
            「AIプロンプト活用ガイド」は、ChatGPTをはじめとするAIツールを効果的に活用するためのプロンプト集サイトです。
          </p>
          <p className="text-[#333333] leading-relaxed mb-4">
            プロンプトとは、AIに指示を出すための文章のこと。適切なプロンプトを使うことで、AIからより良い回答を得ることができます。
          </p>
          <p className="text-[#333333] leading-relaxed mb-4">
            当サイトでは以下のようなプロンプトを紹介しています：
          </p>
          <ul className="list-disc list-inside text-[#333333] space-y-2 mb-4 ml-4">
            <li>ビジネスメール作成（お礼、依頼、謝罪など）</li>
            <li>議事録の自動作成</li>
            <li>敬語・ビジネス文章の添削</li>
            <li>クレーム対応文の作成</li>
            <li>営業メール・提案文の作成</li>
            <li>その他、日常で使える便利なプロンプト</li>
          </ul>
          <p className="text-[#333333] leading-relaxed">
            すべてのプロンプトは、そのままコピペして使えるように設計されています。AI初心者の方でも安心してご利用いただけます。
          </p>
        </section>

        {/* 利用規約 */}
        <section id="terms" className="bg-[#FFF8E6] border-2 border-[#FF9800] rounded-xl p-6 md:p-8 mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-[#E68900] mb-6">
            ご利用にあたって
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4 bg-white rounded-lg p-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-[#4CAF50]" />
              </div>
              <div>
                <h3 className="font-bold text-[#333333] mb-1">
                  プロンプトは完全無料でご利用いただけます
                </h3>
                <p className="text-[#666666] text-sm">
                  当サイトで紹介しているすべてのプロンプトは、個人・商用問わず無料でご利用いただけます。コピー、改変、再配布も自由です。
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-white rounded-lg p-4">
              <div className="flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-[#FF9800]" />
              </div>
              <div>
                <h3 className="font-bold text-[#333333] mb-1">
                  AIが生成した回答の内容については責任を負いかねます
                </h3>
                <p className="text-[#666666] text-sm">
                  プロンプトを使用してAIが生成した回答の正確性・適切性については、当サイトは一切の責任を負いません。重要な用途でご使用の際は、必ず内容をご確認ください。
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-white rounded-lg p-4">
              <div className="flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-[#FF9800]" />
              </div>
              <div>
                <h3 className="font-bold text-[#333333] mb-1">
                  機密情報の取り扱いにご注意ください
                </h3>
                <p className="text-[#666666] text-sm">
                  ChatGPTなどのAIサービスに機密情報や個人情報を入力する際は、各サービスの利用規約およびご所属組織のセキュリティポリシーをご確認ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* カテゴリ別おすすめ記事 */}
        <section id="categories" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-[#333333] text-center mb-2">
            カテゴリ別おすすめプロンプト
          </h2>
          <p className="text-[#666666] text-center mb-8">
            各カテゴリから厳選したプロンプト記事をご紹介します
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categoryArticles.map((article, index) => (
              <Link
                key={index}
                href={article.href}
                className="block bg-white border border-[#E5E7EB] rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className={`${article.categoryColor} text-white px-4 py-2 text-xs font-bold`}>
                  {article.category}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#333333] mb-3 leading-relaxed">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    {article.description}
                  </p>
                </div>
                <div className="px-5 pb-4 text-right text-[#5B9BD5] text-sm">
                  記事を読む &rarr;
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
