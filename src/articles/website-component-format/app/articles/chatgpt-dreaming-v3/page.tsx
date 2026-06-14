import type { Metadata } from 'next'
import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import TableOfContents from "@/components/article/TableOfContents"
import PromptBlock from "@/components/article/PromptBlock"
import ResponseExample from "@/components/article/ResponseExample"
import PromptInfoCard from "@/components/article/PromptInfoCard"
import RelatedArticles from "@/components/cta/RelatedArticles"

export const metadata: Metadata = {
  title: 'AIがあなたの「専属秘書」に！ChatGPTの新記憶システム『Dreaming V3』活用ガイド',
  description: '2026年最新のChatGPT記憶システム「Dreaming V3」活用法。自分の癖や仕事をAIに教え込み、自分専用のカスタマイズAIに育てるプロンプト術を初心者向けに解説します。',
  keywords: 'ChatGPT, Dreaming V3, AI記憶システム, プロンプト術, 初心者ガイド, AIカスタマイズ, 業務効率化',
  openGraph: {
    title: 'AIがあなたの「専属秘書」に！ChatGPTの新記憶システム『Dreaming V3』活用ガイド',
    description: 'ChatGPTの最新記憶システム「Dreaming V3」で、AIを自分専用の専属秘書に育てる方法。',
    type: 'article',
    images: ['/images/og-image-nano-banana-2.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIがあなたの「専属秘書」に！ChatGPTの新記憶システム『Dreaming V3』活用ガイド',
    description: '2026年最新のChatGPT活用術。Dreaming V3でAIを自分専用にカスタマイズ。',
    images: ['/images/og-image-nano-banana-2.png'],
  },
}

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
      name: "最新AI活用",
      articles: [
        { title: "ChatGPT Dreaming V3活用ガイド", href: "/articles/chatgpt-dreaming-v3" },
        { title: "AIエージェントで業務自動化", href: "/articles/ai-agent-workflow" },
        { title: "ChatGPT「高度な音声モード」活用術", href: "/articles/chatgpt-voice-beginner" },
      ],
    },
  ],
  copyright: "© 2026 AIプロンプト活用ガイド All Rights Reserved.",
}

const headings = [
  { id: "introduction", text: "「教える」から「覚える」へ：Dreaming V3とは？", level: 2 as const },
  { id: "how-it-works", text: "Dreaming V3が変えるAIとの付き合い方", level: 2 as const },
  { id: "magic-phrase", text: "魔法の合言葉「これを覚えておいて」", level: 2 as const },
  { id: "use-cases", text: "活用シーン：自分専用のAIに育てる実例", level: 2 as const },
  { id: "privacy", text: "忘れてほしい時の対処法：プライバシー管理", level: 2 as const },
  { id: "summary", text: "まとめ：AIをあなたの最強のパートナーに", level: 2 as const },
]

const prompts = {
  writingStyle: `これから送るメールの文章を分析して、私の書き方の特徴を『Dreaming V3』に記憶させて。
次からはそのスタイルで下書きして。

【分析対象のメール】
[ここに自分の書いたメール本文を貼り付け]`,

  familyInfo: `私の家族構成とアレルギー情報を覚えておいて。今後の献立提案に反映させて。

【家族情報】
・夫：辛いものが苦手
・長女（5歳）：卵アレルギー
・私：パクチーが苦手`,

  response: `■ Dreaming V3 記憶完了

【記憶した内容】
1. **文章スタイルの特徴**:
   - 結論から述べる「PREP法」を好む
   - 語尾は「〜です」「〜ます」で統一
   - 適度に箇条書きを使用し、視認性を高める

2. **パーソナル情報**:
   - 家族構成と食事の制限（卵アレルギー、辛味・パクチーの回避）

【今後の動作】
次回以降、メールの下書き依頼や献立の相談を受けた際、これらの情報を前提条件として自動的に適用します。`,
}

const relatedArticles = [
  {
    title: "面倒な指示はAIに覚えさせよう！ChatGPT「Skills」超入門",
    description: "自分専用のAIスキルを作成して業務を効率化する方法",
    href: "/articles/chatgpt-skills-beginner",
  },
  {
    title: "プロンプト不要？感覚でAIを操る「Vibe Working」入門",
    description: "2026年の新しい働き方、バイブ・ワーキングについて解説",
    href: "/articles/vibe-working-beginner",
  },
]

export default function ChatGPTDreamingV3Page() {
  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title="AIがあなたの「専属秘書」に！ChatGPTの新記憶システム『Dreaming V3』活用プロンプト術"
          eyecatchSrc="/images/og-image-nano-banana-2.png"
          createdAt="2026年6月14日"
          updatedAt="2026年6月14日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「教える」から「覚える」へ：Dreaming V3とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年6月4日、OpenAIはChatGPTの最新記憶システム「Dreaming V3」を発表しました。これまでも「Memory」という機能はありましたが、今回のアップデートでその精度は劇的に向上し、ユーザーの好みや過去の文脈を82.8%という高い精度で保持できるようになりました。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              「毎回同じ説明をするのが面倒……」と感じている方にこそ、このDreaming V3は魔法のようなツールになります。
            </p>
          </section>

          <section id="how-it-works" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Dreaming V3が変えるAIとの付き合い方
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              従来のAIは、新しいチャットを始めるたびに「私はこういう者です」「こういう形式で書いてください」と説明し直す必要がありました。しかし、Dreaming V3を搭載したChatGPTは、一度教えたことを「知識」として定着させます。
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-bold mb-2">Dreaming V3の凄さ</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>長期記憶の安定性:</strong> 数週間前の会話内容も正確に反映</li>
                <li><strong>文脈の自動抽出:</strong> 明示的に言わなくても、会話からユーザーの好みを推測して記憶</li>
                <li><strong>マルチデバイス同期:</strong> PCで教えたことをスマホのChatGPTも共有</li>
              </ul>
            </div>
          </section>

          <section id="magic-phrase" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              魔法の合言葉「これを覚えておいて」
            </h2>
            <p className="text-[#333333] leading-relaxed mb-8">
              Dreaming V3に確実に情報を覚えさせるには、プロンプトに「覚えておいて」というキーワードを含めるのが最も効果的です。
            </p>

            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                文章スタイルを覚えさせるプロンプト
              </h3>
              <PromptInfoCard type="response" title="期待される動作">
                <p>
                  AIが過去のメールを分析し、あなたの独特な言い回しや構成の癖を抽出して記憶します。
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.writingStyle} />
            </div>

            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                生活情報を覚えさせるプロンプト
              </h3>
              <PromptBlock prompt={prompts.familyInfo} />
              <ResponseExample response={prompts.response} />
            </div>
          </section>

          <section id="use-cases" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              活用シーン：自分専用のAIに育てる実例
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Dreaming V3は、ビジネスからプライベートまであらゆるシーンで活躍します。
            </p>
            <ul className="list-disc list-inside text-[#333333] space-y-3 mb-6">
              <li><strong>仕事の専門用語:</strong> 自社独自のプロジェクト名や用語を教え、資料作成をスムーズに。</li>
              <li><strong>スケジュールの癖:</strong> 「火曜日の午後は会議を入れない」といった習慣を考慮した提案。</li>
              <li><strong>趣味の好み:</strong> 「コーヒーは浅煎りが好き」「SF映画は苦手」などの嗜好を反映したレコメンド。</li>
            </ul>
          </section>

          <section id="privacy" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              忘れてほしい時の対処法：プライバシー管理
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              AIに覚えさせすぎた、あるいは間違った情報を覚えてしまった場合も安心です。以下のプロンプトで記憶を消去できます。
            </p>
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <p className="font-mono text-sm">「Dreaming V3から〇〇の記憶を消して」</p>
              <p className="font-mono text-sm">「今の発言は忘れて」</p>
            </div>
            <p className="text-[#333333] leading-relaxed">
              設定画面からも記憶の一覧を確認し、個別に削除することが可能です。プライバシーを守りながら、賢くAIを育てましょう。
            </p>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ：AIをあなたの最強のパートナーに
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Dreaming V3の登場により、ChatGPTは単なる「便利な道具」から、あなたのことを深く理解する「専属秘書」へと進化しました。
            </p>
            <p className="text-[#333333] leading-relaxed">
              まずは一つ、あなたの「こだわり」をChatGPTに教えてみてください。その瞬間から、AIとの新しい関係が始まります。
            </p>
          </section>

          <section id="related">
            <RelatedArticles articles={relatedArticles} />
          </section>
        </div>
      </article>
    </PageLayout>
  )
}
