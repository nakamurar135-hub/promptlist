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
        { title: "プロンプト不要？感覚でAIを操る「Vibe Working」入門", href: "/articles/vibe-working-beginner" },
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
  { id: "introduction", text: "「プロンプト疲れ」していませんか？", level: 2 as const },
  { id: "what-is-vibe-working", text: "「Vibe Working（バイブ・ワーキング）」とは？", level: 2 as const },
  { id: "why-vibe-works", text: "なぜ「バイブス」で動かすと上手くいくのか", level: 2 as const },
  { id: "vibe-prompt-examples", text: "今日から使える！バイブス系プロンプトの具体例", level: 2 as const },
  { id: "agent-mode-tips", text: "エージェントモードで「逆質問」を活用する", level: 2 as const },
  { id: "sixty-percent-rule", text: "「60点の会話を3回」が最速の近道", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "プロンプトは「書く」から「話す」へ！ChatGPT「高度な音声モード」活用術",
    description: "キーボード入力が苦手な初心者でも大丈夫！ChatGPTの「高度な音声モード」を使い、AIと自然に会話しながら理想の回答を引き出す方法を分かりやすく解説します。",
    href: "/articles/chatgpt-voice-beginner",
  },
  {
    title: "ググるより速い！ChatGPTの「検索機能（Search）」で最新情報を引き出すプロンプト術",
    description: "「AIは古い情報しか持っていない」という思い込みを覆す、ChatGPT検索機能の活用ガイド。",
    href: "/articles/chatgpt-search-beginner",
  },
]

export default function VibeWorkingBeginnerPage() {
  const title = "プロンプト不要？感覚でAIを操る「Vibe Working（バイブ・ワーキング）」入門";
  const description = "「完璧なプロンプトを書かなければ」というプレッシャーから解放されましょう。2026年の新常識「Vibe Working」を使えば、隣の同僚に話しかけるような「適当な指示（バイブス）」でAIを動かせます。初心者向けに具体的なプロンプト例と活用コツを解説します。";
  const keywords = "Vibe Working, バイブ・ワーキング, プロンプト, Copilot, ChatGPT, AI初心者, エージェント, 使い方, 入門, AI活用";
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
    image: "/images/og-image-vibe-working.png",
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
              「プロンプト疲れ」していませんか？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「AIを使いたいけれど、どんな文章を書けばいいのか分からない」「ネットでプロンプトの書き方を調べたら、難しそうで結局諦めてしまった」——そんな経験はありませんか？
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              実は、2026年現在のAIは、もはや「完璧な命令文」を必要としていません。むしろ、<strong>ざっくりとした「バイブス（雰囲気）」で指示を出す方が、AIとのやりとりがスムーズに進む</strong>ことが多いのです。
            </p>
            <p className="text-[#333333] leading-relaxed">
              この記事では、そんな新しいAI活用スタイル「Vibe Working（バイブ・ワーキング）」の考え方と、今日から実践できる具体的なプロンプト例を紹介します。
            </p>
          </section>

          <section id="what-is-vibe-working" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「Vibe Working（バイブ・ワーキング）」とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「Vibe Working」とは、完璧な命令文（プロンプト）を書こうとするのではなく、<strong>今の状況や気分・ニュアンスをAIに共有して「いい感じにして」と頼むスタイル</strong>のことです。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              従来のプロンプト術では「役割を与え、背景を説明し、出力形式を指定する」といった構造的な書き方が推奨されていました。しかし、最新のAIモデルは文脈理解能力が大幅に向上しており、曖昧な指示でも意図を汲み取って動いてくれます。
            </p>
            <PromptInfoCard type="tips" title="「Vibe Working」の核心">
              AIを「命令を実行するロボット」ではなく、「状況を共有できる賢い同僚」として扱うことが、Vibe Workingの本質です。完璧な指示を考える時間を、AIとの対話に使いましょう。
            </PromptInfoCard>
          </section>

          <section id="why-vibe-works" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              なぜ「バイブス」で動かすと上手くいくのか
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              最新のCopilotやChatGPTは「エージェント機能」を搭載しており、曖昧な指示を受けた際に<strong>AIが自ら不明点を質問してくれる</strong>ようになっています。つまり、あなたが「なんか固い感じがするから柔らかくして」と言えば、AIは「どのくらい柔らかくしますか？」「読者は誰ですか？」と逆に聞いてくれるのです。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-bold mb-2">1. 考える時間が減る</h3>
                <p className="text-sm">完璧な文章を考えるより、思ったことをそのまま伝える方が速く動けます。</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-bold mb-2">2. AIが補完してくれる</h3>
                <p className="text-sm">足りない情報はAIが質問してくれるので、最初から全部説明しなくて大丈夫です。</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-bold mb-2">3. 心理的ハードルが下がる</h3>
                <p className="text-sm">「正しいプロンプト」を探す必要がないので、気軽に使い始められます。</p>
              </div>
            </div>
          </section>

          <section id="vibe-prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              今日から使える！バイブス系プロンプトの具体例
            </h2>
            <p className="mb-4">
              以下のプロンプトは、どれも「完璧な指示」ではありません。しかし、最新のAIはこれだけで十分に意図を汲み取り、適切な回答を返してくれます。
            </p>

            <PromptBlock
              title="資料のトーンを変えたい時"
              prompt="この資料、なんか固いから柔らかくして"
            />

            <PromptBlock
              title="Excelの問題を見つけてほしい時"
              prompt="このExcel、パッと見てヤバいところ教えて"
            />

            <PromptBlock
              title="メールの返信に困った時"
              prompt="このメール、なんか角が立たないように断る感じで返信文を書いて"
            />

            <PromptBlock
              title="アイデアが欲しい時"
              prompt="新しいプロジェクトの名前、なんかかっこいいやつ考えて。テーマはAIと人の協働"
            />
          </section>

          <section id="agent-mode-tips" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              エージェントモードで「逆質問」を活用する
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              CopilotやChatGPTの「エージェント機能」を使うと、AIが自分から「次は何をすればいい？」と聞いてくれるようになります。この<strong>「逆質問」を活用する</strong>のが、Vibe Workingをさらに効果的にするコツです。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              たとえば、指示の最後に「もっといい答えを出すために、何か聞きたいことがあれば質問して」と一言添えるだけで、AIがあなたの意図を深掘りしてくれます。
            </p>

            <PromptBlock
              title="逆質問を促すひと言"
              prompt="この企画書、なんか説得力が足りない気がする。直してほしいんだけど、もっといい提案ができるなら何か聞いておきたいことがあれば質問して"
            />

            <PromptInfoCard type="tips" title="逆質問の活用ポイント">
              AIに質問させることで、あなた自身も「何が足りなかったのか」に気づくことができます。これはプロンプトの書き方を学ぶ最も自然な方法でもあります。
            </PromptInfoCard>
          </section>

          <section id="sixty-percent-rule" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「60点の会話を3回」が最速の近道
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Vibe Workingで最も大切な考え方が、<strong>「100点のプロンプトを1回で書こうとするより、60点の会話を3回繰り返す方が速くて楽」</strong>というものです。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              最初の指示が曖昧でも、AIの返答を見て「もうちょっとこうして」「この部分だけ変えて」と修正を重ねれば、最終的には理想の結果に近づけます。完璧な一発回答を目指すより、対話を通じて答えを育てていく感覚が重要です。
            </p>
            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200 mb-4">
              <h3 className="font-bold text-amber-800 mb-3">60点ルールの実践例</h3>
              <ol className="list-decimal list-inside space-y-2 text-[#333333]">
                <li><strong>1回目：</strong>「この報告書、なんか読みにくい。直して」</li>
                <li><strong>2回目：</strong>「いい感じだけど、もう少し箇条書きを増やして」</li>
                <li><strong>3回目：</strong>「完璧！最後に要点を3行でまとめて」</li>
              </ol>
            </div>
            <p className="text-[#333333] leading-relaxed">
              このように、最初から完璧を求めず、段階的に改善していくことで、プロンプトを考える負担を大幅に減らすことができます。
            </p>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「Vibe Working」は、AIを使うための心理的ハードルを大きく下げてくれる考え方です。完璧なプロンプトを書こうとするのをやめて、まずは「なんか固い」「ちょっとヤバい」といった感覚的な言葉でAIに話しかけてみましょう。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              最新のCopilotやChatGPTは、あなたのバイブスを読み取って動いてくれます。そして、足りない情報があれば逆に質問してくれます。
            </p>
            <p className="text-[#333333] leading-relaxed">
              今日から、AIを「命令する相手」ではなく「一緒に考えてくれる同僚」として使ってみてください。それが、2026年のAI活用の新しいスタンダードです。
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
