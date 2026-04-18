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
  { id: "introduction", text: "「AIの回答が薄い」と感じたら試すべき新機能", level: 2 as const },
  { id: "what-is-think-deeper", text: "「Think Deeper（深く考える）」モードとは？", level: 2 as const },
  { id: "why-it-works", text: "なぜ「急がせない」だけで回答が良くなるのか", level: 2 as const },
  { id: "use-cases", text: "初心者が「深い回答」をもらうための相談例", level: 2 as const },
  { id: "peek-into-process", text: "AIの「思考のプロセス」を覗いてみよう", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "news-sources", text: "ニュースソース", level: 2 as const },
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
    title: "プロンプトは「書く」から「話す」へ！ChatGPT「高度な音声モード」活用術",
    description: "AIと自然に会話しながら理想の回答を引き出す方法",
    href: "/articles/chatgpt-voice-beginner",
  },
]

export default function CopilotThinkDeeperBeginnerPage() {
  const title = "AIが「じっくり考えて」から答えてくれる！Copilotの『Think Deeper』活用術";
  const description = "AIに相談しても表面的な回答しか返ってこない...。そんな悩みを解決するCopilotの新機能「Think Deeper」モードを徹底解説。AIが回答前に「論理的に考える」ことで、驚くほど質の高いアドバイスを引き出すコツを紹介します。";
  const keywords = "Copilot, Think Deeper, 深く考える, AI活用, 初心者, プロンプト, 悩み相談, Microsoft AI";
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
    image: "/images/og-image-think-deeper.png",
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
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「AIの回答が薄い」と感じたら試すべき新機能
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「AIに悩み事を相談してみたけれど、なんだか当たり障りのない答えしか返ってこない...」
              「もっと具体的に考えてほしいのに、表面的なアドバイスで終わってしまう」
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              そんな経験はありませんか？実は、これまでのAIは「速く答えること」を優先するように設計されていました。しかし、複雑な悩みや難しい計画には、AIにも「じっくり考える時間」が必要です。
            </p>
            <p className="text-[#333333] leading-relaxed">
              そこで登場したのが、Microsoft Copilotの新機能**「Think Deeper（深く考える）」**モードです。この記事では、初心者でも一言でAIから深い回答を引き出せる、この新機能の使い方とコツを解説します。
            </p>
          </section>

          <section id="what-is-think-deeper" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「Think Deeper（深く考える）」モードとは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「Think Deeper」は、AIが回答を出す前に「自問自答」を行い、論理的な思考ステップを挟むための特別なモードです。
            </p>
            <ul className="list-disc list-inside mb-4 text-[#333333]">
              <li>**論理的思考の強化**: 複雑な問題に対して、矛盾がないか、もっと良い案がないかをAI自身が検証します。</li>
              <li>**多角的な視点**: 一つの答えに飛びつかず、複数の可能性を検討してから回答をまとめます。</li>
              <li>**正確性の向上**: 難しい問いに対しても、思考を深めることで誤情報の少ない、根拠のある回答を導き出します。</li>
            </ul>
          </section>

          <section id="why-it-works" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              なぜ「急がせない」だけで回答が良くなるのか
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              これまでのAIは、私たちが質問を投げた瞬間に、次に続く「もっともらしい言葉」を予測して出力していました。これは非常に高速ですが、時には「考えなし」の回答になってしまう原因でもありました。
            </p>
            <PromptInfoCard type="tips" title="「急がば回れ」のAI活用">
              Think Deeperをオンにすると、AIは回答を書き始める前に、内部で「思考の連鎖」を組み立てます。人間に例えるなら、「思いついたことをすぐ口にする」のではなく、「一度頭の中で整理してから話す」状態になるのです。この「ため」があるからこそ、初心者でも短いプロンプトで質の高い回答が得られます。
            </PromptInfoCard>
          </section>

          <section id="use-cases" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者が「深い回答」をもらうための相談例
            </h2>
            <p className="mb-4">Think Deeperモードをオンにして、こんな風に相談してみてください。プロンプトを細かく作り込まなくても、AIが勝手に深掘りしてくれます。</p>
            
            <PromptBlock
              title="人生やキャリアの相談"
              prompt="「最近仕事でやる気が出ないんだけど、どうしたらいいかな？私の性格（真面目だけど疲れやすい）を考慮して、深く洞察してみて」"
            />
            
            <PromptBlock
              title="根拠のある買い物アドバイス"
              prompt="「5万円以内で、初心者に最適なカメラを選んで。将来的に動画も撮りたい場合、どの選択肢が一番後悔しないか、理由を3つ深掘りして教えて」"
            />
            
            <PromptBlock
              title="難しいニュースの解釈"
              prompt="「このニュースの意味が難しくて分からない。単なる要約じゃなくて、なぜこれが社会にとって重要なのか、中学生でも分かるように背景から深く解説して」"
            />
          </section>

          <section id="peek-into-process" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              AIの「思考のプロセス」を覗いてみよう
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Think Deeperモードの面白い点は、AIが回答を作成する際に「今、何を考えているか」が表示されることです。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              「〇〇の視点から検討中...」「××の矛盾をチェックしています...」といった思考の断片を見ることで、私たち人間側も「あ、そういう考え方があるのか！」と気づかされることが多々あります。
            </p>
            <p className="text-[#333333] leading-relaxed">
              単に答えをもらうだけでなく、**「AIと一緒に考えるプロセス」**を体験できるのが、この機能の真の魅力と言えるでしょう。
            </p>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Copilotの「Think Deeper」は、プロンプトを完璧に書く自信がない初心者にこそ使ってほしい機能です。
              AIを「即答マシン」としてではなく、「思慮深いパートナー」として扱うことで、あなたの悩みや疑問はより鮮やかに解決へと向かいます。
            </p>
            <p className="text-[#333333] leading-relaxed">
              「AIに任せても大した答えが返ってこない」と諦めていた方は、ぜひ今日から「深く考えさせる」習慣を始めてみてください。
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
