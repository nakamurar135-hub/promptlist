
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
  { id: "what-is-agent-mode", text: "「おまかせモード」とは？", level: 2 as const },
  { id: "why-revolutionary", text: "なぜ革新的なのか？", level: 2 as const },
  { id: "common-mistakes", text: "初心者がやりがちな「もったいない」使い方", level: 2 as const },
  { id: "prompt-examples", text: "コピペで使える「おまかせモード」プロンプト例", level: 2 as const },
  { id: "tips-for-success", text: "失敗しないコツ", level: 2 as const },
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
    title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集",
    description: "効果的なプロンプトの書き方を基礎から解説",
    href: "/articles/beginner-template",
  },
]

export default function ChatGPTAutoModePage() {
  const title = "もう「指示」すら考えなくていい？ChatGPT最新機能『おまかせモード』で面倒な作業を丸投げするプロンプト術";
  const description = "ChatGPT最新版GPT-5.5の「おまかせモード」を活用し、複雑なプロンプトを考えることなく、目的を伝えるだけでAIに一連の作業を自走させる方法を初心者向けに解説します。";
  const keywords = "ChatGPT, おまかせモード, Agent Mode, プロンプト, GPT-5.5, 初心者, AI活用, 自動化";
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
    image: "/images/og-image-auto-mode.png",
    url,
  });

  useStructuredData({
    title,
    description,
    author: "AIプロンプト活用ガイド",
    datePublished: "2026-05-02T00:00:00Z",
    dateModified: "2026-05-02T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年5月2日"
          updatedAt="2026年5月2日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="what-is-agent-mode" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「おまかせモード」とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              ChatGPT最新版GPT-5.5で導入された「おまかせモード（Agent Mode）」は、従来のプロンプト入力の概念を大きく変える革新的な機能です。
              これまでは「〜をやって」「〜を作成して」といった細かい指示を、ユーザーが一つ一つ考えて入力する必要がありました。
              しかし「おまかせモード」では、単に「〜を完了させて」というゴールを伝えるだけで、AIが自分で手順を考えて実行してくれます。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              例えば「来週の家族旅行の計画を立てて」と伝えれば、AIは自動的に「目的地の検索」「宿泊施設の確認」「交通手段の検討」「予約リストの作成」といった一連の作業を自走させるのです。
            </p>
          </section>

          <section id="why-revolutionary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              なぜ革新的なのか？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「おまかせモード」が革新的な理由は、AIの「自律性」を初心者でも簡単に活用できるようにしたからです。
            </p>
            <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4 space-y-2">
              <li><strong>プロンプト作成の負担が消える</strong>：「どう指示すればいいか」という悩みから完全に解放されます。</li>
              <li><strong>複雑な作業も一発で完結</strong>：複数のステップが必要な作業も、AIが自分で分解して実行します。</li>
              <li><strong>途中で質問してくれる</strong>：不足している情報があれば、AIが自分から「〜について教えてください」と聞き返してくれます。</li>
              <li><strong>思考プロセスが見える</strong>：AIが「今〜を考えています」と進捗を示してくれるので、迷子にならない。</li>
            </ul>
          </section>

          <section id="common-mistakes" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者がやりがちな「もったいない」使い方
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「おまかせモード」は非常に便利ですが、使い方を間違えると十分な力を発揮できません。
            </p>
            <PromptInfoCard
              title="❌ やってはいけない使い方"
              content="「これをやって」と一言だけ伝える。AIが何をすればいいか判断できず、的外れな結果になることがあります。"
            />
            <PromptInfoCard
              title="✅ 正しい使い方"
              content="「〜という目的で、〜を完成させてほしい。背景として〜という状況があります」と、ゴールと背景を伝える。AIがより正確に判断できます。"
            />
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              コピペで使える「おまかせモード」プロンプト例
            </h2>
            <p className="mb-4">以下のプロンプトをそのままコピーして、ChatGPTの「おまかせモード」で試してみてください。</p>
            
            <PromptBlock
              title="家族旅行の計画を丸投げしたい時"
              prompt="「おまかせモードでお願い。来週の土日で、家族4人（大人2人、子ども2人）で家族旅行の計画を立ててほしい。予算は1人あたり3万円程度、移動は車で、温泉地が希望です。必要な予約リストと、持ち物チェックリストまで作っておいてください」"
            />
            
            <PromptBlock
              title="資料の要点をSNS投稿にしてほしい時"
              prompt="「おまかせモードでお願い。この資料を読んで、重要そうなポイントを3つ選んで、それぞれについてSNS投稿用の文章を3パターンずつ作ってください。投稿は初心者向けで、分かりやすく、親しみやすいトーンでお願いします」"
            />
            
            <PromptBlock
              title="複雑な業務フローを自動化したい時"
              prompt="「おまかせモードでお願い。毎月末に、営業チームから売上データを集めて、部門別・地域別に集計して、前月比の増減を計算して、経営層向けのレポートにまとめてください。グラフも入れてください」"
            />
            
            <PromptBlock
              title="新しいスキルを学びたい時"
              prompt="「おまかせモードでお願い。Pythonの基礎を学びたいです。初心者向けの学習ロードマップを作ってください。各ステップで実際に手を動かすサンプルコードも用意してください」"
            />
          </section>

          <section id="tips-for-success" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              失敗しないコツ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「おまかせモード」を最大限に活用するための5つのコツを紹介します。
            </p>
            
            <div className="bg-[#F0F7FF] border-l-4 border-[#5B9BD5] p-4 mb-4">
              <h3 className="font-bold text-[#333333] mb-2">1. ゴールを明確に伝える</h3>
              <p className="text-[#333333] leading-relaxed">
                「〜を完成させてほしい」と、最終的な成果物を具体的に伝えることが重要です。
                漠然とした依頼よりも、「レポート形式で」「表にまとめて」といった形式を指定すると、より正確な結果が得られます。
              </p>
            </div>

            <div className="bg-[#F0F7FF] border-l-4 border-[#5B9BD5] p-4 mb-4">
              <h3 className="font-bold text-[#333333] mb-2">2. 背景情報を添えて</h3>
              <p className="text-[#333333] leading-relaxed">
                「なぜそれが必要なのか」という背景を伝えると、AIがより適切な判断ができます。
                例えば「初心者向けに」「経営層向けに」といった対象者を指定することで、内容のレベルが自動調整されます。
              </p>
            </div>

            <div className="bg-[#F0F7FF] border-l-4 border-[#5B9BD5] p-4 mb-4">
              <h3 className="font-bold text-[#333333] mb-2">3. 思考プロセスを確認しながら進める</h3>
              <p className="text-[#333333] leading-relaxed">
                AIが「今〜を考えています」と進捗を示してくれたら、それを確認しながら進めましょう。
                「ここまでの進め方でいいですか？」と聞き返してくれたら、修正指示を出すことで、より正確な結果に近づきます。
              </p>
            </div>

            <div className="bg-[#F0F7FF] border-l-4 border-[#5B9BD5] p-4 mb-4">
              <h3 className="font-bold text-[#333333] mb-2">4. 制約条件を忘れずに</h3>
              <p className="text-[#333333] leading-relaxed">
                予算、時間、リソースなどの制約がある場合は、必ず伝えてください。
                「予算は1人あたり3万円」「1時間以内に」といった制約を指定することで、現実的な提案が得られます。
              </p>
            </div>

            <div className="bg-[#F0F7FF] border-l-4 border-[#5B9BD5] p-4 mb-4">
              <h3 className="font-bold text-[#333333] mb-2">5. 途中で質問されたら丁寧に答える</h3>
              <p className="text-[#333333] leading-relaxed">
                AIが「〜について教えてください」と聞き返してきたら、できるだけ詳しく答えましょう。
                この対話を通じて、AIがより正確に理解し、最終的な成果物の質が大きく向上します。
              </p>
            </div>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              ChatGPT「おまかせモード」は、プロンプト作成の負担を完全に取り除き、AIの自律性を初心者でも簡単に活用できる革新的な機能です。
              「指示」から「目的」へと思考をシフトさせることで、複雑な作業も一発で完結させることができます。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              最初は「本当にうまくいくのか」と不安かもしれませんが、ゴールと背景を明確に伝え、途中で質問されたら丁寧に答えることで、
              AIは驚くほど正確に仕事をこなしてくれます。
            </p>
            <p className="text-[#333333] leading-relaxed">
              ぜひこのガイドを参考に、ChatGPT「おまかせモード」を試してみてください。
              「プロンプトを完璧に書かなければならない」というプレッシャーから解放され、AIとの新しい付き合い方が見えてくるはずです。
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
