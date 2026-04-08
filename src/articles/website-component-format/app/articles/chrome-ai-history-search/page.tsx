"use client";

import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import TableOfContents from "@/components/article/TableOfContents"
import PromptBlock from "@/components/article/PromptBlock"
import PromptInfoCard from "@/components/article/PromptInfoCard"
import RelatedArticles from "@/components/cta/RelatedArticles"
import { useSEO } from "@/hooks/useSEO"
import { useOGP } from "@/hooks/useOGP"
import { useStructuredData } from "@/hooks/useStructuredData"

// 共通設定
const headerProps = {
  logoSrc: "/images/logo.png",
  siteName: "AIプロンプト活用ガイド",
  navItems: [
    { label: "ホーム", href: "/" },
    { label: "記事一覧", href: "/articles" },
    { label: "プライバシーポリシー", href: "/privacy" },
  ],
}

const footerProps = {
  categories: [
    {
      name: "基礎・入門",
      articles: [
        { title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集", href: "/articles/beginner-template" },
        { title: "プロンプトは「書く」から「話す」へ！ChatGPT「高度な音声モード」活用術", href: "/articles/chatgpt-voice-beginner" },
        { title: "【初心者向け】「あのサイト、何だっけ？」をAIが解決！Chromeの『AI履歴検索』活用術", href: "/articles/chrome-ai-history-search" },
      ],
    },
    {
      name: "ビジネス文書",
      articles: [
        { title: "会議議事録をChatGPTで自動作成するプロンプト4選", href: "/articles/chatgpt-meeting-minutes" },
        { title: "Excelの「わからない」をAIに丸投げ！Copilot Excelエージェント超入門", href: "/articles/excel-copilot-agent" },
      ],
    },
  ],
  copyright: "© 2026 AIプロンプト活用ガイド All Rights Reserved.",
}

// 目次データ
const headings = [
  { id: "introduction", text: "「URL」も「タイトル」も覚えなくていい！", level: 2 as const },
  { id: "how-to-use", text: "話し言葉で探せる「AI履歴検索」の使い方", level: 2 as const },
  { id: "prompt-examples", text: "初心者でも見つかる！魔法の検索キーワード（プロンプト）例", level: 2 as const },
  { id: "privacy", text: "プライバシーも安心：自分のPC内で完結する仕組み", level: 2 as const },
  { id: "new-habit", text: "「ググる」前に「履歴に聞く」新習慣", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "プロンプトは「書く」から「話す」へ！ChatGPT「高度な音声モード」活用術",
    description: "キーボード入力が苦手な初心者でも大丈夫！AIと自然に会話しながら理想の回答を引き出す方法を解説。",
    href: "/articles/chatgpt-voice-beginner",
  },
  {
    title: "ググるより速い！ChatGPTの「検索機能（Search）」で最新情報を引き出すプロンプト術",
    description: "従来の検索エンジンとは違う、AIによる情報収集の新しいスタンダードを身につけましょう。",
    href: "/articles/chatgpt-search-beginner",
  },
]

export default function ChromeAIHistorySearchPage() {
  const title = "【初心者向け】「あのサイト、何だっけ？」をAIが解決！Chromeの『AI履歴検索』活用術";
  const description = "2026年のChrome新機能「AI履歴検索」を徹底解説。正確なサイト名を忘れても「赤い靴のサイト」といった曖昧な記憶（プロンプト）で目的のページを即座に見つける方法を紹介します。";
  const keywords = "Chrome, AI履歴検索, プロンプト, 初心者, ブラウザ活用, Google, 履歴検索";
  const url = typeof window !== 'undefined' ? window.location.href : "";

  useSEO({
    title: `${title} | AIプロンプト活用ガイド`,
    description,
    keywords,
  });

  useOGP({
    title,
    description,
    type: "article",
    image: "/images/placeholder.jpg", // 適切なアイキャッチ画像があれば差し替え
    url,
  });

  useStructuredData({
    title,
    description,
    author: "AIプロンプト活用ガイド",
    datePublished: "2026-04-08T00:00:00Z",
    dateModified: "2026-04-08T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年4月8日"
          updatedAt="2026年4月8日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「URL」も「タイトル」も覚えなくていい！
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「昨日見たあの素敵な靴のサイト、どこだっけ？」「先週調べた保険の比較ページが見つからない...」
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              そんな経験、誰にでもあるはずです。これまではブラウザの「履歴」から、ずらりと並んだ英語のタイトルやURLを必死に探すしかありませんでした。
            </p>
            <p className="text-[#333333] leading-relaxed">
              しかし2026年、Google Chromeに搭載された**「AI履歴検索（History Search with AI）」**が、その悩みを過去のものにしました。正確な名前を覚えていなくても、あなたの「曖昧な記憶」を言葉にするだけで、AIが目的のページを見つけ出してくれます。
            </p>
          </section>

          <section id="how-to-use" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              話し言葉で探せる「AI履歴検索」の使い方
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              使い方は驚くほど簡単です。特別な設定は不要で、いつもの検索と同じ感覚で使えます。
            </p>
            <ol className="list-decimal list-inside mb-4 text-[#333333] space-y-2">
              <li>Chromeのアドレスバー、または履歴画面（Ctrl+H）を開きます。</li>
              <li>検索窓に、友達に話しかけるような言葉を入力します。</li>
              <li>AIが内容を解析し、最も関連性の高いページを上位に表示します。</li>
            </ol>
            <p className="text-[#333333] leading-relaxed">
              例えば、「昨日見たパスタのレシピ」と打つだけで、数ある履歴の中からそのページを特定してくれるのです。
            </p>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者でも見つかる！魔法の検索キーワード（プロンプト）例
            </h2>
            <p className="mb-4">
              AI履歴検索のコツは、難しく考えずに**「見た時の状況や特徴」**をそのまま入れることです。
            </p>
            
            <PromptBlock
              title="視覚的な特徴で探す"
              prompt="「赤い靴がトップページに載っていた、ファッションの通販サイト」"
            />
            
            <PromptBlock
              title="時期とトピックで探す"
              prompt="「先週調べた、格安SIMの比較記事」"
            />
            
            <PromptBlock
              title="自分の感想や目的で探す"
              prompt="「すごく感動した、動物の保護活動についての動画ページ」"
            />
          </section>

          <section id="privacy" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              プライバシーも安心：自分のPC内で完結する仕組み
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「自分の履歴をAIに見られるのは怖い」と感じる方もいるかもしれません。しかし、Googleはこの機能に強力なプライバシー保護を組み込んでいます。
            </p>
            <PromptInfoCard type="tips" title="オンデバイス処理">
              AI履歴検索の解析は、基本的にあなたのパソコン内（オンデバイス）で行われます。履歴の内容が外部のサーバーに送信されて学習に使われることはありません。また、シークレットモードでの閲覧履歴は検索対象から自動的に除外されます。
            </PromptInfoCard>
          </section>

          <section id="new-habit" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「ググる」前に「履歴に聞く」新習慣
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              これまでは、一度見たサイトをもう一度見たい時、またGoogleで検索し直す（ググる）のが一般的でした。しかし、これからは**「履歴に聞く」**方が圧倒的に速い場合があります。
            </p>
            <ul className="list-disc list-inside mb-4 text-[#333333]">
              <li>同じキーワードで検索し直す手間が省ける</li>
              <li>広告に邪魔されず、自分が一度認めた情報にすぐアクセスできる</li>
              <li>「お気に入り登録」を忘れても安心という心の余裕が生まれる</li>
            </ul>
            <p className="text-[#333333] leading-relaxed">
              この小さな習慣の変化が、あなたのデジタルライフを劇的に快適にしてくれるはずです。
            </p>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              ChromeのAI履歴検索は、難しい「プロンプト」の知識がなくても、日常の言葉で便利さを実感できる最高の機能です。
            </p>
            <p className="text-[#333333] leading-relaxed">
              「あのサイト、何だっけ？」と思ったら、まずは今の気持ちをそのまま検索窓に打ち込んでみてください。AIがあなたの頼もしい記憶のパートナーになってくれるでしょう。
            </p>
          </section>

          <section id="related" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              関連記事
            </h2>
            <RelatedArticles articles={relatedArticles} />
          </section>
        </div>
      </article>
    </PageLayout>
  )
}
