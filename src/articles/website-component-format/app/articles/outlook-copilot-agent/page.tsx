
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
      name: "ビジネス効率化",
      articles: [
        { title: "Excelの「面倒な作業」をAIが自動完結！Copilotの『エンドツーエンド業務自動化』プロンプト術", href: "/articles/copilot-excel-automation" },
        { title: "回答の一部を「選んで質問」！Copilotの新機能でピンポイントに解決するプロンプト術", href: "/articles/copilot-select-ask" },
      ],
    },
  ],
  copyright: "© 2026 AIプロンプト活用ガイド All Rights Reserved.",
}

// 目次データ
const headings = [
  { id: "introduction", text: "メールの山にさようなら！Outlookの『Copilotエージェント』とは？", level: 2 as const },
  { id: "why-it-helps-beginners", text: "Outlook Copilotエージェントが初心者にこそおすすめな理由", level: 2 as const },
  { id: "how-it-works", text: "「読む」から「整理」へ！AI秘書への頼み方", level: 2 as const },
  { id: "prompt-examples", text: "今すぐ使えるプロンプト活用例", level: 2 as const },
  { id: "news-sources", text: "ニュースソース", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "【初心者向け】AIが「じっくり考えて」から答えてくれる！Copilotの『Think Deeper』で失敗しない相談術",
    description: "CopilotのThink Deeper機能を使って、AIに深く思考させてより質の高い回答を引き出す方法を解説",
    href: "/articles/copilot-think-deeper-beginner",
  },
  {
    title: "【初心者向け】Copilotがさらに進化！最新AI「GPT-5.5 Thinking」と「ChatGPT Images 2.0」で変わる相談・画像生成術",
    description: "Copilotの最新機能であるGPT-5.5 ThinkingとChatGPT Images 2.0を活用した、より高度な相談と画像生成のプロンプト術を紹介",
    href: "/articles/copilot-gpt55-images2",
  },
]

export default function OutlookCopilotAgentPage() {
  const title = "【初心者向け】メールの山にさようなら！Outlookの『Copilotエージェント』でAIに秘書を任せるプロンプト術";
  const description = "2026年4月27日にマイクロソフトが発表した、Outlook内のCopilotによる「新しいエージェント体験」を活用したガイド。これまでの「文章作成」だけでなく、メールの内容を読み取って予定を整理したり、返信が必要なものを自動で仕分けたりする、ITに詳しくない人でも使える「AI秘書」への頼み方を解説します。";
  const keywords = "Outlook, Copilot, エージェント, AI秘書, メール整理, 予定管理, 返信自動提案, 初心者, プロンプト術, 業務効率化";
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
    image: "/images/placeholder.jpg", // 適切なアイキャッチ画像を設定してください
    url,
  });

  useStructuredData({
    title,
    description,
    author: "AIプロンプト活用ガイド",
    datePublished: "2026-04-30T00:00:00Z",
    dateModified: "2026-04-30T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg" // 適切なアイキャッチ画像を設定してください
          createdAt="2026年4月30日"
          updatedAt="2026年4月30日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              メールの山にさようなら！Outlookの『Copilotエージェント』とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「毎日大量に届くメールに埋もれて、大事な連絡を見落としがち...」<br />
              「返信の文章を考えるのが億劫で、ついつい後回しにしてしまう...」
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              そんな悩みを抱えているビジネスパーソンは少なくないでしょう。これまでのAIは、メールの文章作成をサポートするものが主流でした。
            </p>
            <p className="text-[#333333] leading-relaxed">
              しかし、2026年4月27日にマイクロソフトが発表したOutlook内のCopilotによる**「新しいエージェント体験」**は、メールとの付き合い方を根本から変えます。単なる文章作成支援に留まらず、メールの内容を理解し、自動で整理・仕分け、さらには予定調整までこなす「AI秘書」として機能するのです。この記事では、ITに詳しくない初心者でもすぐに活用できる、この画期的なAI秘書への頼み方を徹底解説します。
            </p>
          </section>

          <section id="why-it-helps-beginners" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Outlook Copilotエージェントが初心者にこそおすすめな理由
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「AIは便利そうだけど、設定が難しそう...」「使いこなすには専門知識が必要なのでは？」と感じる初心者の方にこそ、この機能はおすすめです。
            </p>
            <PromptInfoCard type="tips" title="「おまかせ」でメール業務を効率化">
              Outlook Copilotエージェントは、複雑な設定やプロンプトの知識がなくても、自然な言葉で指示するだけでメール業務を効率化できます。具体的には、以下の手間が大幅に削減されます。
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>大量のメールの中から重要なものを選別する</li>
                <li>返信が必要なメールの内容を理解し、適切な返信文を考える</li>
                <li>メールの内容に基づいて会議の予定を調整し、カレンダーに登録する</li>
                <li>未読メールや返信漏れがないか定期的にチェックする</li>
              </ul>
              これらの手間がなくなることで、メール業務に費やす時間を大幅に削減し、より重要な業務に集中できるようになります。
            </PromptInfoCard>
          </section>

          <section id="how-it-works" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「読む」から「整理」へ！AI秘書への頼み方
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              この機能の最大の魅力は、AIが単にメールの内容を「読む」だけでなく、その内容を理解し、適切な「整理」や「行動」を提案・実行してくれる点です。まるで優秀な秘書に指示を出すように、自然な言葉でAIに依頼できます。
            </p>
            <ul className="list-disc list-inside mb-4 text-[#333333]">
              <li>**メールの要約と優先順位付け**: 「今日届いたメールの中で、私が今日中に返事をしないといけないものを3つ選んで、要約して教えて」のように、重要なメールを瞬時に把握できます。</li>
              <li>**カレンダーとの連携**: 「このメールの打ち合わせ、空いている時間に予定を入れておいて」と頼むだけで、AIがあなたのカレンダーを確認し、最適な日時を提案・登録してくれます。</li>
              <li>**返信の自動提案**: 過去のやり取りや文脈を考慮し、「このメールに返信の下書きを作成して」と指示するだけで、あなたらしい自然な返信文をAIが作成してくれます。</li>
            </ul>
            <p className="text-[#333333] leading-relaxed">
              これらの機能により、メール処理にかかる時間と精神的負担を大幅に軽減し、より生産的な仕事に集中できるようになります。
            </p>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              今すぐ使えるプロンプト活用例
            </h2>
            <p className="mb-4">Outlook Copilotエージェントにメール業務を依頼する際の具体的なプロンプト例です。コピペして、あなたのAI秘書を今日から活用しましょう。</p>
            
            <PromptBlock
              title="重要メールの選別と要約"
              prompt="「今日届いたメールの中で、私が今日中に返事をしないといけないものを3つ選んで、要約して教えて」"
            />
            
            <PromptBlock
              title="会議の予定調整と返信の下書き"
              prompt="「このメールにある懇親会の候補日から、私のカレンダーが空いている時間を探して返信の下書きを作って」"
            />

            <PromptBlock
              title="特定テーマのメール整理"
              prompt="「『プロジェクトX』に関する未読メールをすべて見つけて、重要度が高い順にリストアップし、それぞれのメールの要点を3行でまとめて」"
            />
          </section>

          <section id="news-sources" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ニュースソース
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-2">
              <li><a href="https://news.yahoo.co.jp/articles/568213e58b06b63cc1d7620bf5587c80c29a0e03" target="_blank" rel="noopener noreferrer">OutlookのCopilot、ついにAI秘書化…？メールも予定も整理してくれる「エージェント体験」が発表（2026年4月27日）</a></li>
            </ul>
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
