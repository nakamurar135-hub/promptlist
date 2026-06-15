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
        { title: "【初心者向け】もうプロンプトを打ち直さない！Chromeの『Skills』活用術", href: "/articles/chrome-gemini-skills" },
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
  { id: "introduction", text: "毎回同じことを入力していませんか？", level: 2 as const },
  { id: "what-is-skills", text: "Chromeの『Skills』機能とは？", level: 2 as const },
  { id: "how-to-use", text: "使い方は簡単！「/（スラッシュ）」を打つだけ", level: 2 as const },
  { id: "recommended-skills", text: "初心者におすすめ！保存すべき3つのスキル例", level: 2 as const },
  { id: "tips", text: "「自分専用AI」に育てるコツ", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "【初心者向け】「あのサイト、何だっけ？」をAIが解決！Chromeの『AI履歴検索』活用術",
    description: "曖昧な記憶でも目的のページが見つかる！Chromeの新機能「AI履歴検索」の使い方を詳しく解説。",
    href: "/articles/chrome-ai-history-search",
  },
  {
    title: "プロンプト不要？感覚でAIを操る「Vibe Working（バイブ・ワーキング）」入門",
    description: "難しいプロンプトを考えなくても、AIと「ノリ」で仕事を進める新しい働き方を提案します。",
    href: "/articles/vibe-working-beginner",
  },
]

export default function ChromeGeminiSkillsPage() {
  const title = "【初心者向け】もうプロンプトを打ち直さない！Chromeの『Skills』でAIを「自分専用」に育てる術";
  const description = "「毎回同じ指示を入力するのが面倒」という悩みを解決！Google Chromeの新機能『Skills』を使って、よく使うプロンプトを保存・瞬時に呼び出す方法を解説します。";
  const keywords = "Chrome, Gemini, Skills, プロンプト, 初心者, 効率化, 自分専用AI, AI活用";
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
    image: "/images/placeholder.jpg",
    url,
  });

  useStructuredData({
    title,
    description,
    author: "AIプロンプト活用ガイド",
    datePublished: "2026-04-16T00:00:00Z",
    dateModified: "2026-04-16T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年4月16日"
          updatedAt="2026年4月16日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              毎回同じことを入力していませんか？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「この文章を3つのポイントで要約して」「このメールを丁寧な返信にして」……。AIを使っていると、同じような指示を何度も入力していることに気づくはずです。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              プロンプトをメモ帳に保存してコピペしている方も多いかもしれませんが、それすらも少し手間に感じてしまいますよね。
            </p>
            <p className="text-[#333333] leading-relaxed">
              そんな「プロンプト入力の面倒」を解消してくれるのが、Google Chromeの新機能**『Skills（スキル）』**です。
            </p>
          </section>

          <section id="what-is-skills" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Chromeの『Skills』機能とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              『Skills』は、ChromeのサイドパネルにあるGeminiに、自分のお気に入りの指示（プロンプト）を名前をつけて保存できる機能です。
            </p>
            <p className="text-[#333333] leading-relaxed">
              一度保存してしまえば、長いプロンプトを打ち直す必要はありません。あなたの指示をAIが「特技（スキル）」として記憶してくれるようなイメージです。
            </p>
          </section>

          <section id="how-to-use" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              使い方は簡単！「/（スラッシュ）」を打つだけ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              使い方は驚くほどシンプルです。
            </p>
            <ol className="list-decimal list-inside mb-4 text-[#333333] space-y-2">
              <li>ChromeのサイドパネルからGeminiを開きます。</li>
              <li>チャット欄に「/（スラッシュ）」を入力します。</li>
              <li>保存されているスキルがリストアップされるので、使いたいものを選びます。</li>
            </ol>
            <p className="text-[#333333] leading-relaxed">
              これだけで、あらかじめ登録しておいた複雑な指示が瞬時に呼び出されます。
            </p>
          </section>

          <section id="recommended-skills" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者におすすめ！保存すべき3つのスキル例
            </h2>
            <p className="mb-4">
              まずは以下の3つを登録してみるのがおすすめです。これだけで日常のブラウジングが劇的に楽になります。
            </p>
            
            <PromptBlock
              title="「要約して」スキル"
              prompt="今開いているページの内容を、重要な3つのポイントで短くまとめてください。"
            />
            
            <PromptBlock
              title="「メール下書き」スキル"
              prompt="このページの内容を参考にして、取引先への丁寧な報告メールの下書きを作成してください。"
            />
            
            <PromptBlock
              title="「優しく解説」スキル"
              prompt="このページにある難しい用語を、ITに詳しくない人にも分かるように専門用語抜きで説明してください。"
            />
          </section>

          <section id="tips" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「自分専用AI」に育てるコツ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              『Skills』を使いこなす最大のコツは、**「一度うまくいったプロンプトをその場で保存する」**習慣をつけることです。
            </p>
            <PromptInfoCard type="tips" title="習慣化のメリット">
              「あ、この回答いいな」と思った時の指示を保存しておくだけで、AIはどんどんあなたの好みを理解した「自分専用の秘書」へと成長していきます。最初は数個のスキルから始めて、徐々に増やしていきましょう。
            </PromptInfoCard>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Chromeの『Skills』は、プロンプトのコピペから私たちを解放してくれる待望の機能です。
            </p>
            <p className="text-[#333333] leading-relaxed">
              「/」一つでAIを操る快感を、ぜひ体験してみてください。AIがもっと身近で、もっと頼もしい存在になるはずです。
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
