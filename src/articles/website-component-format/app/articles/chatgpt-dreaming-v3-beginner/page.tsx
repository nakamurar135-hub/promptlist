"use client"

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
  { id: "introduction", text: "毎回同じ情報を伝えなくてもいい！『Dreaming V3』とは？", level: 2 as const },
  { id: "why-it-helps-beginners", text: "『Dreaming V3』が初心者にこそおすすめな理由", level: 2 as const },
  { id: "how-it-works", text: "AIが「あなたのこと」を覚えて、賢く応答する仕組み", level: 2 as const },
  { id: "prompt-examples", text: "今すぐ使えるプロンプト活用例", level: 2 as const },
  { id: "memory-management", text: "記憶の確認・修正・削除方法", level: 2 as const },
  { id: "news-sources", text: "ニュースソース", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "【初心者向け】もうプロンプトを打ち直さない！Chromeの『Skills』でAIを「自分専用」に育てる術",
    description: "ChromeのSkills機能を使ってAIをカスタマイズ。一度設定すれば、毎回同じ指示を繰り返す必要がなくなります",
    href: "/articles/chrome-gemini-skills",
  },
  {
    title: "【初心者向け】ChatGPT初心者向け完全活用ガイド",
    description: "ChatGPTの基本的な使い方から応用テクニックまで、初心者向けの完全ガイド。Dreaming V3と組み合わせてさらに便利に",
    href: "/articles/chatgpt-beginner-guide",
  },
]

export default function ChatGPTDreamingV3BeginnerPage() {
  const title = "【初心者向け】AIがあなたのことを覚えてくれる！ChatGPTの『Dreaming V3』で賢い相棒を育てるプロンプト術"
  const description = "2026年6月4日に発表されたChatGPTの記憶機能『Dreaming V3』を活用したガイド。ユーザーの好みや過去の会話を自動で学習し、毎回同じ情報を伝えなくてもAIが賢く応答してくれます。初心者向けの設定方法とプロンプト例を徹底解説。"
  const keywords = "ChatGPT, Dreaming V3, 記憶機能, パーソナライズ, プロンプト術, 初心者, AI活用, 秘書, 相棒"
  const url = typeof window !== 'undefined' ? window.location.href : ""

  useSEO({
    title: `${title} | AIプロンプト活用ガイド`,
    description,
    keywords,
  })

  useOGP({
    title,
    description,
    type: "article",
    image: "/images/placeholder.jpg",
    url,
  })

  useStructuredData({
    title,
    description,
    author: "AIプロンプト活用ガイド",
    datePublished: "2026-06-08T00:00:00Z",
    dateModified: "2026-06-08T00:00:00Z",
  })

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年6月8日"
          updatedAt="2026年6月8日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              毎回同じ情報を伝えなくてもいい！『Dreaming V3』とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「ChatGPTに相談するたびに、自分の職業や趣味を説明するのが面倒...」<br />
              「毎回『私はマーケティング担当です』と言わなきゃいけないの...？」<br />
              「前の会話の内容を覚えていてほしい...」
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              こんな経験はありませんか？これまでは、ChatGPTと会話するたびに、自分の背景情報や好みを何度も伝える必要がありました。
            </p>
            <p className="text-[#333333] leading-relaxed">
              しかし、2026年6月4日にOpenAIが発表したChatGPTの新機能**『Dreaming V3』**は、この常識を変えます。この記憶機能は、ユーザーの好みや過去の会話の文脈を自動で学習し、応答をパーソナライズしてくれるのです。つまり、AIが「あなただけの賢い相棒」のように進化するということ。この記事では、PC操作に不慣れな初心者でもすぐに活用できる、この革新的な機能を徹底解説します。
            </p>
          </section>

          <section id="why-it-helps-beginners" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              『Dreaming V3』が初心者にこそおすすめな理由
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「AIは便利そうだけど、使いこなすのが難しそう...」と感じる初心者の方にこそ、この機能はおすすめです。
            </p>
            <PromptInfoCard type="tips" title="「説明→質問→説明→質問」の繰り返しが不要に">
              従来の方法では、ChatGPTと会話するたびに以下の手順が必要でした。
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>「私はマーケティング担当です」と自己紹介する</li>
                <li>「ターゲットは20代女性です」と説明する</li>
                <li>「〇〇について相談したい」と質問する</li>
                <li>別の質問をするたびに、また同じ説明を繰り返す</li>
              </ul>
              『Dreaming V3』を使えば、これらの説明がすべて不要になります。一度「私はマーケティング担当で、ターゲット層は20代女性です」と伝えれば、AIがこの情報を記憶し、その後の会話ではこの情報を前提に応答してくれるのです。
            </PromptInfoCard>
          </section>

          <section id="how-it-works" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              AIが「あなたのこと」を覚えて、賢く応答する仕組み
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              『Dreaming V3』の最大の魅力は、**複雑な設定が不要**という点です。自然な日本語で「覚えておいてほしいこと」を伝えるだけで、AIがそれを学習してくれます。
            </p>
            <ul className="list-disc list-inside mb-4 text-[#333333]">
              <li>**「好みの情報」**: 「私はコーヒーが好きで、特にブラックコーヒーを毎日飲みます」と伝えれば、その後のコーヒーに関する質問では、この好みを前提に答えてくれます。</li>
              <li>**「職業・役割」**: 「私の仕事はマーケティング担当で、ターゲット層は20代女性です」と伝えれば、マーケティング関連の相談では、この背景を踏まえたアドバイスをくれます。</li>
              <li>**「計画・予定」**: 「来週、シンガポールへ旅行に行く予定です」と伝えれば、旅行に関する質問では、シンガポール旅行を前提に提案してくれます。</li>
            </ul>
            <p className="text-[#333333] leading-relaxed">
              つまり、AIが「あなたの文脈」を理解するため、毎回説明を繰り返す必要がないのです。
            </p>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              今すぐ使えるプロンプト活用例
            </h2>
            <p className="mb-4">『Dreaming V3』で記憶させるための具体的な指示例です。コピペして、あなたのChatGPTに教えてください。</p>
            
            <PromptBlock
              title="個人の好みを記憶させる"
              prompt="「私はコーヒーが好きで、特にブラックコーヒーを毎日飲みます。この情報を覚えておいてください。」"
            />
            
            <PromptBlock
              title="職業・役割を記憶させる"
              prompt="「私の仕事はマーケティング担当で、ターゲット層は20代女性です。今後の提案はこの情報を考慮してください。」"
            />

            <PromptBlock
              title="計画・予定を記憶させる"
              prompt="「来週、シンガポールへ旅行に行く予定です。おすすめの観光スポットや食事について教えてください。」"
            />

            <PromptBlock
              title="情報の変更を記憶させる"
              prompt="「以前話した旅行の件ですが、シンガポールではなくハワイに変更になりました。この変更を記憶しておいてください。」"
            />
          </section>

          <section id="memory-management" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              記憶の確認・修正・削除方法
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              『Dreaming V3』は便利ですが、AIが記憶している内容を確認・修正・削除できることが重要です。
            </p>
            <PromptInfoCard type="tips" title="記憶内容を確認する">
              「私について、あなたが覚えていることを教えてください」と聞くだけで、AIが記憶している内容をリストアップしてくれます。
            </PromptInfoCard>
            <PromptInfoCard type="tips" title="記憶内容を修正する">
              「以前『20代女性がターゲット』と言いましたが、実は30代女性がターゲットに変わりました。この情報を更新してください」と伝えれば、AIが記憶を更新してくれます。
            </PromptInfoCard>
            <PromptInfoCard type="warning" title="記憶内容を削除する">
              「『シンガポール旅行』に関する情報は、もう忘れてください」と伝えれば、AIがその情報を削除します。プライバシーに関わる情報や、もう不要な情報は、積極的に削除することをおすすめします。
            </PromptInfoCard>
            <p className="text-[#333333] leading-relaxed mt-4">
              ただし、AIが記憶している内容が常に正確とは限りません。定期的に確認し、必要に応じて修正・削除することで、より正確で信頼性の高い相棒に育てることができます。
            </p>
          </section>

          <section id="news-sources" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ニュースソース
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-2">
              <li><a href="https://openai.com/blog/" target="_blank" rel="noopener noreferrer">OpenAI Blog - ChatGPT『Dreaming V3』発表（2026年6月4日）</a></li>
              <li><a href="https://help.openai.com/" target="_blank" rel="noopener noreferrer">OpenAI ヘルプセンター - Dreaming V3機能ガイド</a></li>
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
