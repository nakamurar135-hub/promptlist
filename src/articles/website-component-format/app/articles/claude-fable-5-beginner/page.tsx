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
  { id: "overview", text: "概要", level: 2 as const },
  { id: "target", text: "ターゲットユーザー", level: 2 as const },
  { id: "key-features", text: "Claude Fable 5の画期的な機能", level: 2 as const },
  { id: "agent-function", text: "「聞き上手」から「やり遂げ上手」へ：自律型エージェント機能", level: 3 as const },
  { id: "self-correction", text: "エラーを自分で直す驚きの能力：自己修正メカニズム", level: 3 as const },
  { id: "veteran-feeling", text: "「研修生」ではなく「ベテラン」に頼む感覚", level: 3 as const },
  { id: "prompt-examples", text: "初心者が「丸投げ」するための実践プロンプト例", level: 2 as const },
  { id: "prompt-example-1", text: "プロンプト例1：家計管理をAIに丸投げ", level: 3 as const },
  { id: "prompt-example-2", text: "プロンプト例2：イベント企画をAIに丸投げ", level: 3 as const },
  { id: "prompt-example-3", text: "プロンプト例3：書類作成をAIに丸投げ", level: 3 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "references", text: "参考文献", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "【中級者向け】開発がさらに加速！Claude Fable 5とClaude Codeで実現する「自律型開発」プロンプト術",
    description: "Claude Fable 5とClaude Codeを組み合わせた自律型開発のプロンプト術。",
    href: "/articles/claude-fable-5-build",
  },
  {
    title: "【初心者向け】「失敗しても自分で直す」AIが登場！Claude Fable 5に『仕事を丸投げ』する魔法のプロンプト術",
    description: "Claude Fable 5の自己修正能力を活用し、AIに仕事を丸投げするプロンプト術。",
    href: "/articles/claude-fable-5-beginner",
  },
  {
    title: "【中級者向け】AIエージェントの「暴走」を防ぐ！Anthropicが公開した『エージェント封じ込め（Containment）』技術の活用術",
    description: "Anthropicのエージェント封じ込め技術を活用し、AIエージェントの安全な運用を実現する方法。",
    href: "/articles/anthropic-containment",
  },
]

export default function ClaudeFable5BeginnerPage() {
  const title = "【初心者向け】「失敗しても自分で直す」AIが登場！Claude Fable 5に『仕事を丸投げ』する魔法のプロンプト術";
  const description = "Claude Fable 5の自己修正能力を活用し、AIに仕事を丸投げするプロンプト術を解説。初心者でも安心してAIに業務を任せ、生産性を向上させる方法を紹介します。";
  const keywords = "Claude Fable 5,AIエージェント,自己修正,プロンプト術,初心者,業務自動化,丸投げ,Anthropic";
  const imageUrl = `${window.location.origin}/og-image-claude-fable-5-beginner.png`; // 記事に合わせたOGP画像を準備
  const articleUrl = `${window.location.origin}/articles/claude-fable-5-beginner`;
  const publishedDate = "2026-06-15T00:00:00Z";
  const modifiedDate = "2026-06-19T00:00:00Z";

  useSEO({
    title,
    description,
    keywords,
  });

  useOGP({
    title,
    description,
    type: "article",
    image: imageUrl,
    url: articleUrl,
  });

  useStructuredData({
    title,
    description,
    author: "AIプロンプト活用ガイド",
    datePublished: publishedDate,
    dateModified: modifiedDate,
    image: imageUrl,
    url: articleUrl,
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <ArticleHeader
        title={title}
        description={description}
        datePublished="2026年6月15日"
        dateModified="2026年6月19日"
        author="AIプロンプト活用ガイド"
        category="AIエージェント"
        tags={["Claude Fable 5", "AIエージェント", "自己修正", "プロンプト術", "初心者"]}
      />
      <TableOfContents headings={headings} />
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-lg mx-auto">
          <section id="overview" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              概要
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年6月にAnthropic社から発表された最新AI「Claude Fable 5」は、これまでのAIの常識を覆す「自己修正能力」を備えています。従来のAIがエラーに直面すると人間の介入が必要だったのに対し、Fable 5は自ら問題を認識し、解決策を試行錯誤しながらタスクを最後まで完遂します。本記事では、ITに不慣れな初心者でもFable 5を最大限に活用し、日常業務をAIに「丸投げ」して生産性を劇的に向上させるための実践的なプロンプト術を解説します。
            </p>
          </section>

          <section id="target" className="mb-12">
            <h2 className="text-xl md::text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ターゲットユーザー
            </h2>
            <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4">
              <li>ChatGPTなどのAIツールを使ってみたものの、期待通りの結果が得られず「結局、自分で修正する手間がかかる」と感じている方。</li>
              <li>複雑なプロンプト作成に時間をかけたくない、大まかな指示でAIに仕事を任せたい方。</li>
              <li>事務作業、資料作成、情報収集など、時間のかかるルーティンワークをAIに任せて、より創造的な業務に集中したい方。</li>
            </ul>
          </section>

          <section id="key-features" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Claude Fable 5の画期的な機能
            </h2>
            <h3 id="agent-function" className="text-lg font-semibold text-[#333333] mt-6 mb-3">1. 「聞き上手」から「やり遂げ上手」へ：自律型エージェント機能</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              Claude Fable 5は、単にユーザーの質問に答えるだけでなく、指示されたタスクを自律的に計画し、実行し、完了させる「エージェント機能」が大幅に強化されました。これは、AIが単なるツールではなく、まるで有能な秘書のように「言われたことを最後までやり遂げる」存在に進化したことを意味します。
            </p>
            <h3 id="self-correction" className="text-lg font-semibold text-[#333333] mt-6 mb-3">2. エラーを自分で直す驚きの能力：自己修正メカニズム</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              Fable 5の最大の特徴は、タスク実行中に発生したエラーを自ら検知し、修正する能力です。例えば、データ処理中にフォーマットエラーが発生した場合、Fable 5はエラーメッセージを解析し、適切なデータ変換を試みるなど、人間が介入せずとも問題を解決しようとします。これにより、「AIに任せたら途中で止まってしまった」というストレスから解放されます。
            </p>
            <h3 id="veteran-feeling" className="text-lg font-semibold text-[#333333] mt-6 mb-3">3. 「研修生」ではなく「ベテラン」に頼む感覚</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              これまでのAIは、まるで新入社員のように細かな指示が必要で、時にはユーザーが「AIの研修係」になってしまうこともありました。しかし、Fable 5は経験豊富なベテラン社員のように、大まかな指示でも意図を汲み取り、自律的に判断してタスクを遂行します。ユーザーは「あとはよろしく」と安心して仕事を任せられるようになります。
            </p>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者が「丸投げ」するための実践プロンプト例
            </h2>
            <PromptBlock
              title="家計管理をAIに丸投げ"
              prompt="この1ヶ月のレシート写真10枚（添付）から、食費と日用品費を分けてExcelファイルを作って。合計金額も出してね。ファイル名は『2026年6月家計簿』にして、ダウンロードできるようにしてほしい。"
            />
            <PromptBlock
              title="イベント企画をAIに丸投げ"
              prompt="町内会の夏祭りのチラシを作りたい。開催日は2026年8月15日、場所は〇〇公園。子供が喜びそうな、明るく楽しいデザイン案を3パターン提案して。同時に、イベントに必要な備品リスト（例：テント、模擬店材料、景品など）もまとめてほしい。"
            />
            <PromptBlock
              title="書類作成をAIに丸投げ"
              prompt="この長い市役所のお知らせ（添付ファイル）を読んで、私（〇〇市在住、子育て世帯）に関係がある『手続き』と『期限』だけを3行で教えて。"
            />
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Claude Fable 5は、AIとの協業を新たなレベルへと引き上げる画期的なツールです。自己修正能力と自律型エージェント機能により、ユーザーはAIに「仕事を丸投げ」するという、これまでにない体験を得ることができます。細かい指示出しの煩わしさから解放され、より本質的な業務に集中することで、あなたの生産性は飛躍的に向上するでしょう。ぜひ、Fable 5の「魔法のプロンプト術」を試して、AIとの新しい働き方を体験してください。
            </p>
          </section>

          <section id="references" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              参考文献
            </h2>
            <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4">
              <li><a href="https://metagri-labo.com/ai-guide/claude-fable-5-farmer-guide/" target="_blank" rel="noopener noreferrer">Claude史上最高性能「Claude Fable 5」を農家目線で検証</a> (2026/06/09)</li>
              <li><a href="https://www.theverge.com/2026/06/09/claude-fable-5-release/" target="_blank" rel="noopener noreferrer">Anthropic introduces Claude Fable 5: The first AI that fixes its own mistakes</a></li>
              <li><a href="https://ascii.jp/elem/000/004/20260610-claude-fable5/" target="_blank" rel="noopener noreferrer">「仕事を完遂するAI」Claude Fable 5発表、Proプランで先行公開</a></li>
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
  );
}
