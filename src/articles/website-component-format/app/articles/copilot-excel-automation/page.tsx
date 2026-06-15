
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
  { id: "introduction", text: "Excel作業をAIに「丸投げ」！Copilotの新機能で業務を自動化", level: 2 as const },
  { id: "what-is-end-to-end-automation", text: "「エンドツーエンド業務自動化」とは？", level: 2 as const },
  { id: "why-it-helps-beginners", text: "初心者にこそ「おまかせプロンプト」がおすすめな理由", level: 2 as const },
  { id: "how-to-use", text: "使い方は簡単！3つのステップ", level: 2 as const },
  { id: "prompt-examples", text: "業務を自動化するプロンプト例", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "news-sources", text: "ニュースソース", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "Excelの「わからない」をAIに丸投げ！Copilot Excelエージェント超入門",
    description: "Excelの関数やグラフ作成に苦手意識がある初心者向けに、Copilotを活用したデータ分析・レポート作成術を解説。",
    href: "/articles/excel-copilot-agent",
  },
  {
    title: "AIが「じっくり考えて」から答えてくれる！Copilotの『Think Deeper』で失敗しない相談術",
    description: "Copilotの『Think Deeper』機能を使って、AIに回答前に「論理的に考える」ことで、質の高いアドバイスを引き出す方法を紹介。",
    href: "/articles/copilot-think-deeper-beginner",
  },
]

export default function CopilotExcelAutomationPage() {
  const title = "【初心者向け】Excelの「面倒な作業」をAIが自動完結！Copilotの『エンドツーエンド業務自動化』プロンプト術";
  const description = "Excelでデータの掃除からグラフ作成、分析レポートまでを、たった一言の指示でAIが最後までやり遂げてくれる新機能「エンドツーエンド自動化」を活用した初心者向けガイド。";
  const keywords = "Copilot, Excel, 自動化, エンドツーエンド, AI活用, 初心者, プロンプト, 効率化, Microsoft 365";
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
    image: "/images/placeholder.jpg",
    url,
  });

  useStructuredData({
    title,
    description,
    author: "AIプロンプト活用ガイド",
    datePublished: "2026-04-20T00:00:00Z",
    dateModified: "2026-04-20T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年4月20日"
          updatedAt="2026年4月20日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Excel作業をAIに「丸投げ」！Copilotの新機能で業務を自動化
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「Excelのデータ整理、グラフ作成、分析レポート作成...。これらの作業、もっと簡単にできないかな？」
              「AIに任せたいけど、どこから手をつけていいか分からない」
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              そんな悩みを抱えるビジネスパーソンに朗報です。Microsoft Copilotの最新機能「エンドツーエンド業務自動化」を活用すれば、たった一言の指示で、Excelの複雑な作業をAIが最初から最後まで自動で完結してくれます。
            </p>
            <p className="text-[#333333] leading-relaxed">
              この記事では、ITやAIに不慣れな初心者の方でも、この強力な機能を最大限に活用し、Excel作業の時間を劇的に短縮するためのプロンプト術を詳しく解説します。
            </p>
          </section>

          <section id="what-is-end-to-end-automation" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「エンドツーエンド業務自動化」とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「エンドツーエンド業務自動化」とは、Excelにおける一連の作業プロセス（データのインポート、クリーニング、分析、グラフ作成、レポート生成など）を、AIがユーザーの指示に基づいて自動的に実行する機能です。従来のAIアシスタントが単一のタスクを支援するのに対し、この機能は複数のタスクを連携させ、最終的な成果物まで一貫して生成します。
            </p>
            <ul className="list-disc list-inside mb-4 text-[#333333]">
              <li>**一気通貫の自動化**: データの準備から最終レポートまで、AIが全ての工程を処理します。</li>
              <li>**自然言語での指示**: 複雑な関数やマクロの知識は不要。普段の言葉でAIに依頼できます。</li>
              <li>**作業時間の劇的な短縮**: 手作業で行っていた多くの時間をAIが代行し、生産性を向上させます。</li>
            </ul>
          </section>

          <section id="why-it-helps-beginners" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者にこそ「おまかせプロンプト」がおすすめな理由
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Excelの操作に不慣れな方や、AIの活用に抵抗がある方にとって、「エンドツーエンド業務自動化」は非常に強力な味方となります。なぜなら、難しい操作を覚える必要がなく、AIに「おまかせ」するだけでプロレベルの成果が得られるからです。
            </p>
            <PromptInfoCard type="tips" title="AIに「丸投げ」で成功体験を！">
              「データの整理をして、売上の傾向をグラフにして、最後に今後の予測をまとめて」といった、複数のステップを一度に依頼する「おまかせプロンプト」は、AI活用へのハードルを大きく下げます。AIが期待通りの結果を出してくれる成功体験は、さらなるAI活用へのモチベーションにつながるでしょう。
            </PromptInfoCard>
          </section>

          <section id="how-to-use" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              使い方は簡単！3つのステップ
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B9BD5] text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Copilotを起動し、指示を出す</h3>
                  <p className="text-sm">Excel内でCopilotを起動し、実行したい一連の作業を自然言語で具体的に指示します。「〇〇のデータを整理して、△△のグラフを作成し、□□の分析レポートを生成して」のように、複数のタスクをまとめて依頼しましょう。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B9BD5] text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">AIの提案を確認・承認する</h3>
                  <p className="text-sm">Copilotは指示内容を解釈し、実行するステップを提案してくれます。内容を確認し、問題なければ「はい、進めて」のように承認の指示を出します。必要に応じて、途中で修正や追加の指示を出すことも可能です。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B9BD5] text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">最終結果を確認・活用する</h3>
                  <p className="text-sm">AIが自動で作業を完了させ、データ整理済みのシート、グラフ、分析レポートなどを生成します。生成された結果が意図通りかを確認し、必要であれば微調整を加えて業務に活用しましょう。</p>
                </div>
              </div>
            </div>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              業務を自動化するプロンプト例
            </h2>
            <p className="mb-4">具体的な業務シーンで使えるプロンプト例を紹介します。</p>
            
            <PromptBlock
              title="売上データの分析とレポート作成"
              prompt="この売上データ（シート名：SalesData）から、地域別の売上傾向を分析し、月ごとの推移がわかる折れ線グラフを作成してください。最後に、来期の売上予測と改善策をまとめたレポートを生成してください。"
            />
            
            <PromptBlock
              title="顧客リストのクリーニングとセグメンテーション"
              prompt="この顧客リスト（シート名：CustomerList）から重複データを削除し、住所の表記ゆれを修正してください。その後、購入履歴に基づいて顧客を「優良顧客」「一般顧客」「休眠顧客」の3つにセグメント分けし、それぞれの顧客層に合わせたマーケティング戦略の提案を箇条書きでまとめてください。"
            />
            
            <PromptBlock
              title="プロジェクト進捗管理と課題抽出"
              prompt="このプロジェクト進捗データ（シート名：ProjectStatus）から、遅延しているタスクを特定し、その原因と影響範囲を分析してください。ガントチャート形式で全体の進捗状況を可視化し、主要な課題と解決策をまとめたサマリーを作成してください。"
            />
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Microsoft Copilotの「エンドツーエンド業務自動化」は、Excel作業の常識を覆す画期的な機能です。データの整理から分析、レポート作成まで、AIに「おまかせ」することで、あなたはより戦略的な業務に集中できるようになります。
            </p>
            <p className="text-[#333333] leading-relaxed">
              「Excelは苦手」「AIは難しそう」と感じていた方も、ぜひこの記事で紹介したプロンプト術を参考に、Copilotによる業務自動化を体験してみてください。きっと、あなたの仕事の進め方が大きく変わるはずです。
            </p>
          </section>

          <section id="news-sources" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ニュースソース
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-2">
              <li><a href="https://www.kishioka-design.net/entry/2026/04/12/103132" target="_blank" rel="noopener noreferrer">AIは『エージェント』へ。2026年4月、世界を動かしたITニュース10選</a></li>
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
