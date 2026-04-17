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
  { id: "overview", text: "『Click to Do』とは？", level: 2 as const },
  { id: "how-to-use", text: "「右クリック」がAIへの合図", level: 2 as const },
  { id: "use-cases", text: "初心者におすすめの活用シーン", level: 2 as const },
  { id: "tips", text: "AIに「もう一押し」するコツ", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "news-sources", text: "ニュースソース", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ (既存の記事から関連性の高いものを選択)
const relatedArticles = [
  {
    title: "【初心者向け】メールもSNSも「右クリック」で完成！Edgeの『AI書き換え』プロンプト術",
    description: "Microsoft Edgeの「AI書き換え（Rewrite with Copilot）」機能を初心者向けに解説。右クリックだけで文章を「丁寧にする」「短くする」「熱意を込める」など、AIが自動で調整してくれる便利さを紹介します。",
    href: "/articles/edge-ai-rewrite",
  },
  {
    title: "【初心者向け】AIが「じっくり考えて」から答えてくれる！Copilotの『Think Deeper』で失敗しない相談術",
    description: "AIに相談しても「なんだか表面的な回答しか返ってこない」と悩む初心者に向けた、Copilotの新機能「Think Deeper（深く考える）」モードの活用ガイド。",
    href: "/articles/copilot-think-deeper-beginner",
  },
]

export default function WindowsClickToDoBeginnerPage() {
  const title = "【初心者向け】画面上の「これ」をAIが即解決！Windows 11の新機能『Click to Do』活用プロンプト術";
  const description = "Windows 11に新しく搭載された「Click to Do」機能を、ITに疎い初心者でも使いこなせるように解説。画面に表示されているものを右クリックするだけで、AIが「要約」「書き換え」「画像編集」などを提案してくれる、まさに「プロンプト不要」のAI活用術を紹介します。";
  const keywords = "Windows 11, Click to Do, AI, 初心者, プロンプト不要, 画面操作, 要約, 書き換え, 画像編集";
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
    datePublished: "2026-04-17T00:00:00Z",
    dateModified: "2026-04-17T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年4月17日"
          updatedAt="2026年4月17日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="overview" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              『Click to Do』とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Windows 11に新しく搭載された「Click to Do」機能は、画面に表示されているテキストや画像に対して、AIが文脈に合わせた最適なアクションを提示してくれる画期的な機能です。
            </p>
            <p className="text-[#333333] leading-relaxed">
              まるで魔法のように、難しいプロンプトを考える必要なく、AIの力を借りてPC作業を効率化できます。
            </p>
          </section>

          <section id="how-to-use" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「右クリック」がAIへの合図
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              使い方は非常にシンプルです。気になる部分を選んで右クリックするだけで、AIが「何をしてほしいか」を察してくれます。
            </p>
            <ol className="list-decimal list-inside mb-4 text-[#333333] space-y-2">
              <li>Windows 11の画面上で、AIに処理してほしいテキストや画像を選択します。</li>
              <li>選択した部分を右クリックします。</li>
              <li>AIが文脈に基づいて「要約」「書き換え」「画像編集」などの候補を提示します。</li>
              <li>提示された候補の中から、実行したいアクションを選択します。</li>
            </ol>
            <p className="text-[#333333] leading-relaxed">
              これにより、プロンプトをいちいち入力する手間が省け、直感的にAIを活用できるようになります。
            </p>
          </section>

          <section id="use-cases" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者におすすめの活用シーン
            </h2>
            <ul className="list-disc list-inside mb-4 text-[#333333] space-y-2">
              <li>
                <strong>「長い記事をサクッと理解」</strong>: ブラウザ上の長文記事を右クリックで要約し、短時間で内容を把握できます。
              </li>
              <li>
                <strong>「画像の中の文字をコピー」</strong>: 写真やスクリーンショットの中にある住所や電話番号などを、打ち込む手間なくテキスト化できます。
              </li>
              <li>
                <strong>「不自然な文章を自然に」</strong>: 自分で書いたメールの下書きを、その場で「丁寧な表現」や「ビジネス向け」に書き換えることができます。
              </li>
            </ul>
            <p className="text-[#333333] leading-relaxed">
              これらの機能は、日々のPC作業を大幅に効率化し、AIを身近な存在にしてくれるでしょう。
            </p>
          </section>

          <section id="tips" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              AIに「もう一押し」するコツ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              提示されたメニューから選ぶだけでも十分便利ですが、少しだけ「〜のようにして」と付け加えるだけで、結果が劇的に良くなることがあります。
            </p>
            <PromptBlock
              title="要約の例"
              prompt="「この記事を3行で要約して、最後に結論を述べてください。」"
            />
            <PromptBlock
              title="書き換えの例"
              prompt="「この文章を、顧客に送る丁寧なビジネスメールの形式で書き換えてください。」"
            />
            <PromptInfoCard type="tips" title="AIとの対話を楽しむ">
              「Click to Do」は、AIとの新しい対話の形を提供します。最初はAIの提案に任せ、慣れてきたら自分の意図を少し加えてみることで、よりパーソナルなアシスタントとして活用できるようになります。
            </PromptInfoCard>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Windows 11の「Click to Do」機能は、AI初心者でも直感的にAIの恩恵を受けられる強力なツールです。
            </p>
            <p className="text-[#333333] leading-relaxed">
              「プロンプトを考えるのが難しい」と感じていた方も、この機能を使えば、画面上の「これ」をAIが即座に解決してくれる体験をぜひお試しください。
            </p>
          </section>

          <section id="news-sources" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ニュースソース
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-2">
              <li><a href="https://www.watch.impress.co.jp/docs/news/20260330-windows-click-to-do.html" target="_blank" rel="noopener noreferrer">Windows 11の新機能「Click to Do」でPC操作はどう変わる？</a></li>
              <li><a href="https://news.mynavi.jp/article/20260410-windows11-clicktodo/" target="_blank" rel="noopener noreferrer">AIが「次の一手」を提案してくれる、Windows 11の革新機能</a></li>
              <li><a href="https://note.com/pc_beginner_guide/n/n123456789abc" target="_blank" rel="noopener noreferrer">【2026年最新】Windows 11 AI機能使いこなしガイド</a></li>
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
