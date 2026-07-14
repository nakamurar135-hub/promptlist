"use client"

import { PageLayout } from "@/components/layout/PageLayout"
import { ArticleHeader } from "@/components/article/ArticleHeader"
import { ArticleContent } from "@/components/article/ArticleContent"
import { TableOfContents } from "@/components/article/TableOfContents"
import { PromptBlock } from "@/components/article/PromptBlock"
import { RelatedArticles } from "@/components/cta/RelatedArticles"
import { useSEO } from "@/hooks/useSEO"
import { useOGP } from "@/hooks/useOGP"
import { useStructuredData } from "@/hooks/useStructuredData"

export default function ChatgptWorkBeginnerPage() {
  const title = "【初心者向け】AIが「あなたのデスク」で仕事する！ChatGPT Workで事務作業を完結させるプロンプト術"
  const description = "2026年7月に発表されたOpenAIの最新ツール「ChatGPT Work」を、PC操作に不慣れな初心者向けに解説します。これまでのAIは「文章を作る」のが得意でしたが、ChatGPT Workは「あなたの代わりにファイルを操作し、アプリを動かす」ことが可能です。まるで隣に座っている優秀な事務員に頼むような感覚で、面倒な資料作成やデータ整理を終わらせる方法を紹介します。"
  const keywords = "ChatGPT Work, AIエージェント, 事務効率化, 初心者向け, プロンプト術, OpenAI, 業務自動化"
  const publishedDate = "2026-07-14T00:00:00Z"
  const modifiedDate = "2026-07-14T00:00:00Z"
  const url = "https://promptlist.jp/articles/chatgpt-work-beginner"
  const image = "https://promptlist.jp/images/chatgpt-work-beginner-eyecatch.jpg"

  // SEO最適化
  useSEO({ title, description, keywords })
  useOGP({ title, description, type: "article", image, url })
  useStructuredData({
    title,
    description,
    datePublished: publishedDate,
    dateModified: modifiedDate,
    image,
    url,
  })

  const tocItems = [
    { id: "overview", title: "概要" },
    { id: "target", title: "ターゲット" },
    { id: "concept", title: "1. 「チャット」から「ワーク」へ: ChatGPT Workとは？" },
    { id: "connection", title: "2. 「デスクの整理」を頼む感覚: アプリ連携のメリット" },
    { id: "practice", title: "3. 初心者が失敗しない「仕事の頼み方」実践例" },
    { id: "safety", title: "4. 「確認しながら進める」安心感と設定のコツ" },
    { id: "summary", title: "5. まとめ: AI事務員と歩む新しい働き方" },
  ]

  const relatedArticles = [
    {
      title: "【中級者向け】AIが自律的にタスクを完遂！次世代AIエージェント『Manus』活用ガイド",
      href: "/articles/manus-autonomous-agent",
    },
    {
      title: "【初心者向け】AIが「じっくり考えて」から答えてくれる！Copilotの『Think Deeper』で失敗しない相談術",
      href: "/articles/copilot-think-deeper-beginner",
    },
    {
      title: "【初心者向け】「AIに任せる」の第一歩！AIエージェント超入門 - 2026年のAIは「自分で考えて動く」",
      href: "/articles/ai-agent-beginner-guide",
    },
  ]

  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026.07.14"
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <ArticleContent>
              <section id="overview" className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                  概要
                </h2>
                <p className="text-[#333333] leading-relaxed mb-4">
                  2026年7月に発表されたOpenAIの最新ツール「ChatGPT Work」は、これまでのAIの常識を塗り替えました。これまでのAIは「文章を作る」「質問に答える」のが主な役割でしたが、ChatGPT Workは**「あなたの代わりにPCを操作し、実際の仕事（ワーク）を完結させる」**能力を持っています。
                </p>
                <p className="text-[#333333] leading-relaxed mb-4">
                  本記事では、PC操作に不慣れな初心者の方でも、まるで隣に座っている優秀な事務員に指示を出すような感覚で、面倒な資料作成やデータ整理をAIに任せる方法を分かりやすく解説します。
                </p>
              </section>

              <section id="target" className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                  ターゲット
                </h2>
                <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4 space-y-2">
                  <li>PCに最初から入っているCopilotやChatGPTを少し触ったことがある程度の初心者</li>
                  <li>「AIに文章を作ってもらっても、結局それをExcelやパワポに貼り付けるのが面倒」と感じている人</li>
                  <li>複数のファイル（PDFやメール、画像）をまとめる作業に時間がかかっている事務職や学生</li>
                </ul>
              </section>

              <section id="concept" className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                  1. 「チャット」から「ワーク」へ: ChatGPT Workとは？
                </h2>
                <p className="text-[#333333] leading-relaxed mb-4">
                  ChatGPT Workの最大の特徴は、AIが単なる「相談相手」から「実務の実行者」になったことです。従来のチャット形式では、AIが出力したテキストを人間がコピー＆ペーストして別のアプリに貼り付ける必要がありました。
                </p>
                <p className="text-[#333333] leading-relaxed mb-4 font-bold">
                  ChatGPT Workでは、AIが直接ファイルを作成したり、既存のファイルを編集したりできます。
                </p>
                <p className="text-[#333333] leading-relaxed mb-4">
                  例えば、「会議のメモから議事録のWordファイルを作って」と頼めば、AIがその場でファイルを作成し、ダウンロード可能な状態で提示してくれます。これが「チャット」から「ワーク（作業）」への進化です。
                </p>
              </section>

              <section id="connection" className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                  2. 「デスクの整理」を頼む感覚: アプリ連携のメリット
                </h2>
                <p className="text-[#333333] leading-relaxed mb-4">
                  ChatGPT Workは、Googleドライブ、Slack、Microsoft Teams、そしてあなたのPC内のフォルダとも連携できます。これにより、情報の「島」をつなぐ作業をAIに任せられるようになります。
                </p>
                <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4 space-y-2">
                  <li>**情報の集約**: 「Slackで流れた指示と、Googleドライブにある資料をまとめて」という指示が可能になります。</li>
                  <li>**検索の手間削減**: 「あの時メールで送られてきた請求書、どこだっけ？」と探す必要がなくなります。</li>
                  <li>**一貫性の維持**: 複数のツールをまたいでも、同じコンテキスト（文脈）で作業を継続できます。</li>
                </ul>
              </section>

              <section id="practice" className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                  3. 初心者が失敗しない「仕事の頼み方」実践例
                </h2>
                <p className="text-[#333333] leading-relaxed mb-4">
                  AIに仕事を頼むときは、「ゴール」と「ルール」をセットで伝えるのがコツです。
                </p>

                <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-2 mt-6">
                  【資料のまとめ】複数のPDFからスライドを作成
                </h3>
                <p className="text-[#333333] leading-relaxed mb-4">
                  バラバラの資料を一つのプレゼン資料にまとめるのは大変です。ChatGPT Workなら一瞬です。
                </p>
                <PromptBlock
                  title="資料まとめプロンプト"
                  prompt="このフォルダにある5つのPDFを読んで、重要なポイントを3枚のスライド（パワーポイント形式）にして。デザインは『シンプル』で、各スライドに図解を含めて作成してください。"
                />

                <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-2 mt-6">
                  【データ整理】画像の請求書をExcelにまとめる
                </h3>
                <p className="text-[#333333] leading-relaxed mb-4">
                  スマートフォンのカメラで撮った請求書の写真なども、AIなら正確に読み取って表にしてくれます。
                </p>
                <PromptBlock
                  title="データ整理プロンプト"
                  prompt="メールで届いた請求書の画像を全部読み取って、日付、会社名、金額をまとめたExcelシートを作って。最後に合計金額も計算して出しておいてね。"
                />
              </section>

              <section id="safety" className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                  4. 「確認しながら進める」安心感と設定のコツ
                </h2>
                <p className="text-[#333333] leading-relaxed mb-4">
                  「AIが勝手にファイルを書き換えてしまったらどうしよう」という不安があるかもしれません。ChatGPT Workには、重要な操作の前に必ず人間に確認を求める**「確認モード」**があります。
                </p>
                <p className="text-[#333333] leading-relaxed mb-4">
                  初心者のうちは、プロンプトの最後に**「作業を開始する前に、まず計画を教えて。私がOKを出してから実行してね」**と一言添えるだけで、安心して作業を任せられるようになります。
                </p>
              </section>

              <section id="summary" className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                  5. まとめ: AI事務員と歩む新しい働き方
                </h2>
                <p className="text-[#333333] leading-relaxed mb-4">
                  ChatGPT Workは、私たちがこれまで「手作業」だと思い込んでいた多くの事務作業を解放してくれます。大切なのは、AIを「魔法の道具」としてではなく、**「指示待ちの優秀な部下」**として扱うことです。
                </p>
                <p className="text-[#333333] leading-relaxed mb-4">
                  まずは小さな資料の整理から、AI事務員に仕事を任せてみませんか？あなたのデスクワークが、驚くほど軽やかになるはずです。
                </p>
              </section>

              <section id="news-source" className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                  ニュースソース
                </h2>
                <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4">
                  <li><a href="https://techcrunch.com/2026/07/09/openai-launches-its-new-family-of-models-with-gpt-5-6/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">OpenAI launches its new family of models with GPT-5.6 (TechCrunch, 2026/07/09)</a></li>
                  <li><a href="https://spacedaily.com/m-on-july-9-2026-openai-opened-its-most-powerful-system-yet-to-the-public-gpt-5-6-in-three-tiers-named-sol-terra-and-luna-alongside-an-agent-it-calls-chatgpt-work-built-to-carry/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GPT-5.6, in three tiers named Sol, Terra and Luna (SpaceDaily, 2026/07/10)</a></li>
                </ul>
              </section>
            </ArticleContent>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
              <div className="mt-8">
                <RelatedArticles articles={relatedArticles} />
              </div>
            </div>
          </aside>
        </div>
      </article>
    </PageLayout>
  )
}
