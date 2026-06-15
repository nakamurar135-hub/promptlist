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
  { id: "what-is-gemini-intelligence", text: "「Gemini Intelligence」とは？", level: 2 as const },
  { id: "visual-understanding", text: "「画面を見ながら」相談できる驚きの進化", level: 2 as const },
  { id: "cross-app-automation", text: "アプリを跨いだ自動操作で手間をゼロに", level: 2 as const },
  { id: "prompt-examples", text: "今日から使える！初心者向けプロンプト例", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "iPhoneのSiriが賢くなった！Google Gemini搭載で「頼み事」が通じるプロンプト術",
    description: "Apple IntelligenceとGeminiの連携により、iPhoneの操作がどう変わるのか。iOSユーザー向けの活用ガイドです。",
    href: "/articles/siri-gemini-beginner",
  },
  {
    title: "画面上の「これ」をAIが即解決！Windows 11の新機能『Click to Do』活用プロンプト術",
    description: "PC画面上の情報をAIが認識して操作を提案。PC版のGemini Intelligenceとも言えるClick to Doの活用術を解説。",
    href: "/articles/windows-click-to-do-beginner",
  },
  {
    title: "AIがあなたの代わりに「予約」まで完了！最新AIエージェント『Agent i』のおでかけプロンプト術",
    description: "自律型AIエージェントによる予約代行の実践ガイド。スマホ操作の自動化をさらに一歩進める方法を紹介。",
    href: "/articles/agent-i-travel",
  },
]

export default function AndroidGeminiIntelligencePage() {
  const title = "【初心者向け】Androidスマホがもっと賢く！新機能『Gemini Intelligence』活用プロンプト術";
  const description = "2026年5月14日に発表されたAndroidの新機能「Gemini Intelligence」の活用ガイド。画面上の内容を理解し、アプリを跨いで操作を自動化する次世代AIアシスタントを、初心者でも使いこなせるプロンプト例と共に詳しく解説します。";
  const keywords = "Android, Gemini Intelligence, Google, AIアシスタント, プロンプト, 初心者, スマホ活用, 自動化, 2026年最新";
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
    datePublished: "2026-05-14T00:00:00Z",
    dateModified: "2026-05-14T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年5月14日"
          updatedAt="2026年5月14日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="what-is-gemini-intelligence" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「Gemini Intelligence」とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Googleが2026年5月14日に発表した「Gemini Intelligence」は、Android OSの深層に統合された次世代のAIアシスタントです。
              従来の「Google アシスタント」が主に声による検索やタイマー設定を行っていたのに対し、Gemini Intelligenceは<strong>「スマホの中で何が起きているか」を理解し、自ら動く</strong>ことができます。
            </p>
            <p className="text-[#333333] leading-relaxed">
              これにより、ユーザーはアプリごとの操作方法を覚える必要がなくなり、「やりたいこと」をAIに伝えるだけで、スマホが魔法のように望みを叶えてくれるようになります。
            </p>
          </section>

          <section id="visual-understanding" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「画面を見ながら」相談できる驚きの進化
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Gemini Intelligenceの最大の特徴は、その高度な「視覚理解」にあります。
              例えば、インスタグラムで美味しそうなレストランの投稿を見ている時、AIに「ここに行きたい」と伝えるだけで、AIは画面上の画像やテキストから店名を特定し、現在地からのルートや営業時間を即座に提示します。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              これまでのように「店名をコピーして地図アプリを開き、ペーストして検索する」という手間は一切不要。
              <strong>「画面上のこれについて教えて」</strong>という直感的な相談が、あらゆるアプリで可能になりました。
            </p>
          </section>

          <section id="cross-app-automation" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              アプリを跨いだ自動操作で手間をゼロに
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              もう一つの革新は、複数のアプリを跨いだ「自動実行」です。
              Gemini Intelligenceは、OSレベルの権限を持つことで、ユーザーの代わりにアプリを操作できます。
            </p>
            <ul className="list-disc list-inside text-[#333333] mb-4 space-y-2">
              <li>LINEで届いた飲み会の詳細を読み取り、カレンダーに予定を登録する</li>
              <li>メールで送られてきた領収書のPDFを、Googleドライブの指定フォルダに保存する</li>
              <li>YouTubeで見つけた旅行先の情報を、Keepのメモにまとめる</li>
            </ul>
            <p className="text-[#333333] leading-relaxed">
              これらの「ちょっとした、でも面倒な作業」をAIに丸投げできるのが、Gemini Intelligenceの真骨頂です。
            </p>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              今日から使える！初心者向けプロンプト例
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Gemini Intelligenceを使いこなすためのプロンプトは、驚くほどシンプルで構いません。
              状況に合わせて、以下のフレーズを試してみてください。
            </p>

            <PromptBlock
              title="画面上の情報を活用したい時"
              prompt="画面に表示されているこのレストラン、来週の土曜19時に2人で予約できるか確認して。空いてたら予約画面まで進めておいて。"
            />

            <PromptBlock
              title="コミュニケーションを整理したい時"
              prompt="このLINEのやり取りを要約して。決まったことと、私がやるべきタスクをToDoリストに追加しておいて。"
            />

            <PromptBlock
              title="スマホの設定を最適化したい時"
              prompt="最近バッテリーの減りが早い気がする。今の私の使い勝手を損なわない範囲で、設定を自動で最適化して。"
            />

            <PromptInfoCard
              title="使いこなしのコツ"
              items={[
                "「この画面の〜」と指示に含めると精度が上がります",
                "複数のアプリ名（カレンダーとLINEなど）を具体的に出すとスムーズです",
                "「〜までやっておいて」とゴールを伝えると、自動操作が働きやすくなります",
              ]}
            />
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Androidの「Gemini Intelligence」は、単なる検索ツールを超え、私たちの「スマホ操作のパートナー」へと進化しました。
              画面を理解し、アプリを操るこの機能は、特にスマホ操作に不慣れな初心者にとって、これまでにない利便性をもたらします。
            </p>
            <p className="text-[#333333] leading-relaxed">
              まずは「画面を見ながら相談する」ことから始めてみてください。
              AIがあなたの意図を汲み取り、スマホがより身近で便利な道具に変わる瞬間を体験できるはずです。
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
