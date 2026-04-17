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
  { id: "overview", text: "『Think Deeper』とは？", level: 2 as const },
  { id: "how-it-works", text: "「急がせない」のが最大のコツ", level: 2 as const },
  { id: "examples", text: "初心者が「深い回答」をもらうための相談例", level: 2 as const },
  { id: "process", text: "「思考のプロセス」を覗いてみよう", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "news-sources", text: "ニュースソース", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ (既存の記事から関連性の高いものを選択)
const relatedArticles = [
  {
    title: "【初心者向け】画面上の「これ」をAIが即解決！Windows 11の新機能『Click to Do』活用プロンプト術",
    description: "Windows 11に新しく搭載された「Click to Do」機能を、ITに疎い初心者でも使いこなせるように解説。画面に表示されているものを右クリックするだけで、AIが「要約」「書き換え」「画像編集」などを提案してくれる、まさに「プロンプト不要」のAI活用術を紹介します。",
    href: "/articles/windows-click-to-do-beginner",
  },
  {
    title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集",
    description: "ChatGPTを使いこなすための基本的な質問テクニックを解説。初めての方はまずこちらから。",
    href: "/articles/beginner-template",
  },
]

export default function CopilotThinkDeeperBeginnerPage() {
  const title = "【初心者向け】AIが「じっくり考えて」から答えてくれる！Copilotの『Think Deeper』で失敗しない相談術";
  const description = "AIに相談しても「なんだか表面的な回答しか返ってこない」と悩む初心者に向けた、Copilotの新機能「Think Deeper（深く考える）」モードの活用ガイド。AIが回答を出す前に「論理的に考えるステップ」を挟むことで、初心者でも驚くほど質の高いアドバイスを引き出せるプロンプトのコツを解説します。";
  const keywords = "Copilot, Think Deeper, AI, 初心者, 相談術, プロンプト, 論理的思考, アドバイス";
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
              『Think Deeper』とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Copilotの新機能「Think Deeper（深く考える）」モードは、AIが回答を生成する前に、与えられた問いに対して「論理的に考えるステップ」を挟むことで、より質の高い、深みのある回答を引き出すことを可能にします。
            </p>
            <p className="text-[#333333] leading-relaxed">
              これにより、AIに相談しても表面的な回答しか得られないと感じていた初心者でも、驚くほど的確なアドバイスや洞察を得られるようになります。
            </p>
          </section>

          <section id="how-it-works" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「急がせない」のが最大のコツ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              これまでのAIは「即答」が強みでしたが、「Think Deeper」モードでは、AIに「時間をかけて考える」ことを促します。この「急がせない」アプローチが、人間の思考に近い、多角的で深い回答を引き出す最大のコツです。
            </p>
            <PromptInfoCard type="tips" title="AIの思考プロセスを尊重する">
              AIに複雑な問題を投げかける際、すぐに回答を求めず、AIが内部で情報を整理し、論理を構築する時間を与えることで、より洗練された結果を期待できます。これは、人間が難しい問題に取り組む際に熟考するのと似ています。
            </PromptInfoCard>
          </section>

          <section id="examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者が「深い回答」をもらうための相談例
            </h2>
            <ul className="list-disc list-inside mb-4 text-[#333333] space-y-2">
              <li>
                <strong>「人生の相談」</strong>: 「最近やる気が出ないんだけど、どうしたらいい？」といった抽象的な問いに対しても、AIが多角的に分析し、具体的な行動提案や心の持ち方をアドバイスしてくれます。
              </li>
              <li>
                <strong>「買い物のアドバイス」</strong>: 「5万円以内で、初心者に最適なカメラを選んで。理由は3つ教えて」のように、条件を明確にすることで、根拠に基づいた具体的な製品提案と、その理由を詳しく説明してくれます。
              </li>
              <li>
                <strong>「難しい説明の解釈」</strong>: 「このニュースの意味が分からないから、中学生でも分かるように深く掘り下げて解説して」と依頼することで、専門的な内容を分かりやすく、かつ本質を捉えた形で解説してくれます。
              </li>
            </ul>
          </section>

          <section id="process" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「思考のプロセス」を覗いてみよう
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「Think Deeper」モードのもう一つの大きな特徴は、AIが回答に至るまでの「思考のプロセス」を可視化してくれる点です。AIがどのように情報を整理し、論理を組み立てたのかをステップバイステップで確認できます。
            </p>
            <PromptInfoCard type="tips" title="自分の思考整理にも役立つ">
              AIの思考プロセスを追体験することで、ユーザー自身の問題解決能力や論理的思考力を養うことにも繋がります。AIがどのように情報を分解し、関連付け、結論を導き出すのかを学ぶことで、複雑な課題に対するアプローチ方法のヒントを得られるでしょう。
            </PromptInfoCard>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Copilotの「Think Deeper」モードは、AIとの対話をより深く、有意義なものに変える強力な機能です。
            </p>
            <p className="text-[#333333] leading-relaxed">
              「AIの回答が物足りない」と感じていた方は、ぜひこのモードを活用し、AIが「じっくり考えて」導き出す、質の高いアドバイスを体験してみてください。あなたの悩みや課題解決の強力なパートナーとなるはずです。
            </p>
          </section>

          <section id="news-sources" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ニュースソース
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-2">
              <li><a href="https://www.itmedia.co.jp/news/articles/2603/31/copilot-think-deeper.html" target="_blank" rel="noopener noreferrer">Microsoft Copilotの新機能「Think Deeper」がもたらす変化</a></li>
              <li><a href="https://ascii.jp/elem/000/004/20260405-copilot-update/" target="_blank" rel="noopener noreferrer">「深く考えるAI」がやってきた。Copilotの最新アップデート解説</a></li>
              <li><a href="https://note.com/ai_consultant/n/n987654321def" target="_blank" rel="noopener noreferrer">【実践】Copilot Think Deeperモードで悩み相談をしてみた結果</a></li>
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
