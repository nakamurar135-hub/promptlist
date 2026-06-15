
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
  { id: "overview", text: "検索ボックスが「相談窓口」に変わる", level: 2 as const },
  { id: "target-audience", text: "こんな人に読んでほしい", level: 2 as const },
  { id: "key-points", text: "新しいAI検索窓のポイント", level: 2 as const },
  { id: "prompt-examples", text: "初心者が今日から使えるプロンプト例", level: 2 as const },
  { id: "re-ask", text: "「聞き直し」が怖くない！会話で絞り込む検索体験", level: 2 as const },
  { id: "news-sources", text: "ニュースソース", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "【初心者向け】「あのサイト、何だっけ？」をAIが解決！Chromeの『AI履歴検索』活用術",
    description: "正確なサイト名を忘れても「赤い靴のサイト」といった曖昧な記憶（プロンプト）で目的のページを即座に見つける方法を紹介します。",
    href: "/articles/chrome-ai-history-search",
  },
  {
    title: "【初心者向け】検索は「ググる」から「聞く」へ！Yahooの新機能『Yahoo Scout』活用プロンプト術",
    description: "従来の検索エンジンとは違う、AIによる情報収集の新しいスタンダードを身につけましょう。",
    href: "/articles/yahoo-scout-beginner",
  },
]

export default function GoogleSearchBoxBeginnerPage() {
  const title = "【初心者向け】検索ボックスが「相談窓口」に！Googleの新しい『AI検索窓』でやりたいことを伝えるプロンプト術";
  const description = "2026年6月にGoogleが発表した、25年ぶりとなる検索ボックスの大幅刷新をテーマにした初心者向けガイド。「キーワードを入力して検索結果のリンクをクリックする」というこれまでの当たり前が、「やりたいことを文章で伝えるとAIが解決してくれる」体験へとどう変わるのかを解説します。";
  const keywords = "Google, AI検索窓, プロンプト, 初心者, 検索術, AI活用, 2026年最新AI";
  const url = typeof window !== 'undefined' ? window.location.href : "https://promptlist.jp/articles/google-search-box-beginner";
  const image = "/images/placeholder.jpg"; // 適切なアイキャッチ画像があれば差し替え

  useSEO({
    title: `${title} | AIプロンプト活用ガイド`,
    description,
    keywords,
  });

  useOGP({
    title,
    description,
    type: "article",
    image,
    url,
  });

  useStructuredData({
    title,
    description,
    author: "AIプロンプト活用ガイド",
    datePublished: "2026-06-15T00:00:00Z",
    dateModified: "2026-06-15T00:00:00Z",
    image,
    url,
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年6月15日"
          updatedAt="2026年6月15日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="overview" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              検索ボックスが「相談窓口」に変わる
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年6月、Googleは検索ボックスを25年ぶりに大幅に刷新しました。これまでの「キーワードを入力して検索結果のリンクをクリックする」という当たり前が、「やりたいことを文章で伝えるとAIが解決してくれる」体験へと大きく変わります。
            </p>
            <p className="text-[#333333] leading-relaxed">
              PCに備え付けのCopilotやChatGPTすら「難しい」と感じている方でも、いつものGoogle検索がどう便利になったのかを分かりやすく解説します。
            </p>
          </section>

          <section id="target-audience" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              こんな人に読んでほしい
            </h2>
            <ul className="list-disc list-inside mb-4 text-[#333333] space-y-2">
              <li>ネット検索は「単語を並べる（例：東京　天気）」だけで、文章でAIに頼むのが苦手な人</li>
              <li>検索結果のサイトをいくつも見比べるのが面倒で、答えをパッと知りたい人</li>
              <li>AIという言葉に構えてしまうが、Googleなら使い慣れているというIT初心者</li>
            </ul>
          </section>

          <section id="key-points" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              新しいAI検索窓のポイント
            </h2>
            <ul className="list-disc list-inside mb-4 text-[#333333] space-y-2">
              <li>**「単語」から「相談」へ**: 新しい検索窓は文章を打ち込みやすく広がり、AIが「何を聞きたいか」を先回りして提案してくれる機能を解説。</li>
              <li>**「これ」で検索できる**: 文字だけでなく、開いているタブやファイル、動画を検索窓に入れるだけでAIが内容を理解して答えてくれる手軽さを紹介。</li>
            </ul>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者が今日から使えるプロンプト例
            </h2>
            <p className="mb-4">
              難しく考える必要はありません。まるで友達に話しかけるように、やりたいことをそのまま検索窓に打ち込んでみましょう。
            </p>
            
            <PromptBlock
              title="買い物相談"
              prompt="「今のトレンドを取り入れた、50代女性に似合う夏服のコーディネートを提案して。予算は2万円以内で」"
            />
            
            <PromptBlock
              title="生活の知恵"
              prompt="「この動画（料理動画）で使っている調味料の代用品を、冷蔵庫にありそうなもので教えて」"
            />
            
            <PromptBlock
              title="旅行計画"
              prompt="「金曜の夜に大人6人で食事ができる、個室のあるカラオケ店を新宿で探して。予算は一人4000円」"
            />
          </section>

          <section id="re-ask" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「聞き直し」が怖くない！会話で絞り込む検索体験
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              一度で完璧な答えが出なくても心配はいりません。AIの回答に対して「もっと安くして」「別の場所で」と会話するように追加で質問することで、あなたの求める情報に絞り込むことができます。まるで優秀な店員さんと話しているような感覚で、納得のいく答えを見つけられるでしょう。
            </p>
          </section>

          <section id="news-sources" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ニュースソース
            </h2>
            <ul className="list-disc list-inside mb-4 text-[#333333] space-y-2">
              <li><a href="https://blog.google/products-and-platforms/products/search/search-io-2026/" target="_blank" rel="noopener noreferrer">A new era for AI Search - Google Blog</a> (2026/05/19)</li>
              <li><a href="https://techcrunch.com/2026/05/19/google-search-reimagined-gemini/" target="_blank" rel="noopener noreferrer">Google I/O 2026: Search reimagined with Gemini 3.5 Flash</a></li>
              <li><a href="https://www.itmedia.co.jp/news/articles/2605/20/google-search-update.html" target="_blank" rel="noopener noreferrer">Googleの検索窓が25年ぶりに進化、AIが質問の意図を先読み</a></li>
            </ul>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Googleの新しいAI検索窓は、検索の概念を根本から変える可能性を秘めています。キーワードの羅列ではなく、あなたの「やりたいこと」を自然な言葉で伝えるだけで、AIが最適な答えを導き出してくれます。
            </p>
            <p className="text-[#333333] leading-relaxed">
              難しく考えず、まずは今日のランチの相談から始めてみませんか？きっと、あなたのデジタルライフがより豊かになるはずです。
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
  );
}
