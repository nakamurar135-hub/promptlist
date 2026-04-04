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
  { id: "introduction", text: "プロンプトは「書く」から「話す」時代へ", level: 2 as const },
  { id: "what-is-advanced-voice", text: "「高度な音声モード」とは？", level: 2 as const },
  { id: "why-voice-is-better", text: "初心者にこそ「音声」が向いている3つの理由", level: 2 as const },
  { id: "voice-prompt-examples", text: "今日から使える！音声プロンプトの具体例", level: 2 as const },
  { id: "tips-for-success", text: "「聞き上手なAI」を育てる会話のコツ", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集",
    description: "効果的なプロンプトの書き方を基礎から解説",
    href: "/articles/beginner-template",
  },
  {
    title: "会議議事録をChatGPTで自動作成するプロンプト4選【コピペOK】",
    description: "ChatGPTを使って会議の議事録を効率的に作成する方法を解説",
    href: "/articles/chatgpt-meeting-minutes",
  },
]

export default function ChatGPTVoiceBeginnerPage() {
  const title = "プロンプトは「書く」から「話す」へ！ChatGPT「高度な音声モード」活用術";
  const description = "キーボード入力が苦手な初心者でも大丈夫！ChatGPTの「高度な音声モード」を使い、AIと自然に会話しながら理想の回答を引き出す方法を分かりやすく解説します。";
  const keywords = "ChatGPT, 高度な音声モード, 音声入力, プロンプト, 初心者, AI会話, スマホ活用";
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
    image: "/images/og-image-voice-mode.png",
    url,
  });

  useStructuredData({
    title,
    description,
    author: "AIプロンプト活用ガイド",
    datePublished: "2026-04-04T00:00:00Z",
    dateModified: "2026-04-04T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年4月4日"
          updatedAt="2026年4月4日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              プロンプトは「書く」から「話す」時代へ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「AIを使ってみたいけれど、キーボードで長い文章を打つのが面倒...」
              「どんなプロンプトを書けばいいのか分からなくて、結局使わなくなってしまった」
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              そんな悩みを持つ初心者の皆さんに朗報です。最新のChatGPTでは、文字を入力することなく、**「話すだけ」**でAIを自在に操れるようになっています。
            </p>
            <p className="text-[#333333] leading-relaxed">
              この記事では、OpenAIが提供する最新機能「高度な音声モード（Advanced Voice Mode）」を活用し、まるでお喋りするようにAIと協力してタスクをこなす方法を解説します。
            </p>
          </section>

          <section id="what-is-advanced-voice" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「高度な音声モード」とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「高度な音声モード」は、文字入力なしでAIとリアルタイムに会話ができる機能です。これまでの音声入力とは異なり、以下の特徴があります。
            </p>
            <ul className="list-disc list-inside mb-4 text-[#333333]">
              <li>**超低遅延**: 人間と話しているのと同じスピードで返答が返ってきます。</li>
              <li>**割り込みOK**: AIが話している途中で「あ、やっぱりこうして！」と口を挟むことができます。</li>
              <li>**感情の理解**: 声のトーンや速さから、あなたの意図をより深く汲み取ってくれます。</li>
            </ul>
          </section>

          <section id="why-voice-is-better" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者にこそ「音声」が向いている3つの理由
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-bold mb-2">1. 思考を止めない</h3>
                <p className="text-sm">文章を整える必要がないので、思いついたことをそのまま口に出せます。</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-bold mb-2">2. 修正が簡単</h3>
                <p className="text-sm">「今のなしで」「もうちょっと優しく」といった曖昧な指示も通じます。</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-bold mb-2">3. 心理的ハードルが低い</h3>
                <p className="text-sm">プロンプトの「正解」を探す必要がなく、単なる「相談」から始められます。</p>
              </div>
            </div>
          </section>

          <section id="voice-prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              今日から使える！音声プロンプトの具体例
            </h2>
            <p className="mb-4">マイクボタンを押して、こんな風に話しかけてみてください。</p>
            
            <PromptBlock
              title="仕事の相談をする時"
              prompt="「明日の会議の議題を、一緒に考えてほしいんだけど。テーマは新プロジェクトのキックオフで、時間は1時間。何から話せばいいかな？」"
            />
            
            <PromptBlock
              title="文章のトーンを変えたい時"
              prompt="「さっき作ったメール、やっぱりちょっと固すぎる気がする。もっと親しみやすい感じに直してくれる？絵文字も少し入れてみて」"
            />
            
            <PromptBlock
              title="難しいことを理解したい時"
              prompt="「今の説明、ちょっと難しかったかも。小学生にも分かるように、例え話を使ってゆっくり説明し直してくれる？」"
            />
          </section>

          <section id="tips-for-success" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「聞き上手なAI」を育てる会話のコツ
            </h2>
            <p className="mb-4">
              AIに完璧な答えを求めすぎず、**「AIに質問させる」**のが上達の近道です。
            </p>
            <PromptInfoCard type="tips" title="逆質問の活用">
              「今の情報だけで足りるかな？もっといい答えを出すために、僕に聞いておきたいことがあったら質問して」と一言添えてみましょう。AIがあなたの意図を深掘りしてくれます。
            </PromptInfoCard>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              ChatGPTの「高度な音声モード」は、AIをより身近な存在に変えてくれます。
              プロンプトを「書く」のが大変だと感じていた方は、ぜひ今日からスマホを手に取って、AIに話しかけてみてください。
            </p>
            <p className="text-[#333333] leading-relaxed">
              完璧な文章を目指すのではなく、まずは「会話」を楽しむこと。それがAI時代を楽しく生き抜くための第一歩です。
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
