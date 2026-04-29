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
  { id: "introduction", text: "もう「クリック」すら不要？ブラウザ操作AI『Copelf』登場", level: 2 as const },
  { id: "what-is-copelf", text: "プロンプト不要で自動化できる「Copelf」とは？", level: 2 as const },
  { id: "why-it-helps-beginners", text: "初心者にこそ『Copelf』がおすすめな理由", level: 2 as const },
  { id: "how-to-use", text: "「録画」して「指示」するだけ！3つのステップ", level: 2 as const },
  { id: "prompt-examples", text: "今すぐ使えるプロンプト活用例", level: 2 as const },
  { id: "safety-tips", text: "安全に自動化するためのコツ", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "news-sources", text: "ニュースソース", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "【初心者向け】画面上の「これ」をAIが即解決！Windows 11の新機能『Click to Do』活用術",
    description: "画面内の要素を右クリックするだけでAIが処理を提案してくれる「Click to Do」の活用方法を解説",
    href: "/articles/windows-click-to-do-beginner",
  },
  {
    title: "【初心者向け】Excelの「面倒な作業」をAIが自動完結！Copilotの『エンドツーエンド業務自動化』プロンプト術",
    description: "Excelのデータ処理をCopilotで自動化し、複雑な集計や分析を効率化する方法を紹介",
    href: "/articles/copilot-excel-automation",
  },
]

export default function CopelfBrowserAutomationPage() {
  const title = "【初心者向け】もう「クリック」すら不要？ブラウザ操作AI『Copelf』でルーチンワークを自動化するプロンプト術";
  const description = "2026年4月に登場した、プロンプト不要でブラウザ操作を自動化できるAI「Copelf（コペルフ）」。事務作業やデータ収集などの繰り返し作業を、AIに丸投げするための具体的なプロンプトと活用術を初心者向けに解説します。";
  const keywords = "Copelf, ブラウザ操作AI, 自動化, ルーチンワーク, 初心者, プロンプト, 業務効率化, RPA";
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
    datePublished: "2026-04-29T00:00:00Z",
    dateModified: "2026-04-29T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年4月29日"
          updatedAt="2026年4月29日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              もう「クリック」すら不要？ブラウザ操作AI『Copelf』登場
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「毎日同じWebサイトをチェックして、データをエクセルに貼り付けるのが面倒...」<br />
              「この入力作業、誰か代わりにやってくれないかな？」
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              そんな風に感じたことはありませんか？これまで、ブラウザの操作を自動化するには「RPA」や「マクロ」といった専門的な知識が必要でした。
            </p>
            <p className="text-[#333333] leading-relaxed">
              しかし、2026年4月にリリースされた**『Copelf（コペルフ）』**は、そんな常識を覆します。プロンプトすら不要で、あなたの操作を一度見せるだけで、AIが次からすべてのルーチンワークを代行してくれるのです。この記事では、初心者が今すぐ始められるCopelfの活用術を解説します。
            </p>
          </section>

          <section id="what-is-copelf" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              プロンプト不要で自動化できる「Copelf」とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Copelfは、ブラウザ上での「人間の動き」を学習し、それを自然言語（話し言葉）の指示と組み合わせて実行する次世代のブラウザ操作AIです。
            </p>
            <ul className="list-disc list-inside mb-4 text-[#333333]">
              <li>**「録画」で学習**: 複雑な指示を書く代わりに、一度だけ操作をAIに見せるだけでOK</li>
              <li>**自然言語での指示**: 録画した手順に対して「いつものやって」や「少し条件を変えて」と指示可能</li>
              <li>**マルチブラウザ対応**: ChromeやEdgeなど、主要なブラウザで動作</li>
              <li>**プロンプト要らず**: ゼロからプロンプトを組み立てる必要がなく、初心者でも挫折しません</li>
            </ul>
          </section>

          <section id="why-it-helps-beginners" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者にこそ『Copelf』がおすすめな理由
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「AIを使いこなすには、難しいプロンプトを書かなければならない」という思い込みはもう不要です。
            </p>
            <PromptInfoCard type="tips" title="「背中を見て覚えさせる」スタイル">
              Copelfの最大の特徴は、新入社員に仕事を教えるように「一度やって見せる」だけで良い点です。IT用語やプログラミングの知識がなくても、普段のブラウザ操作ができれば誰でも自動化の恩恵を受けられます。
            </PromptInfoCard>
          </section>

          <section id="how-to-use" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「録画」して「指示」するだけ！3つのステップ
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B9BD5] text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">操作を録画する</h3>
                  <p className="text-sm">Copelfを起動し、自動化したい作業（サイトを開く、検索する、コピーするなど）を一度だけ実際に行います。AIがその手順を記録します。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B9BD5] text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">指示を付け加える</h3>
                  <p className="text-sm">録画した手順に対して、「このデータをスプレッドシートに追記して」や「毎日9時に実行して」といった言葉の指示を添えます。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B9BD5] text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">実行と確認</h3>
                  <p className="text-sm">「実行」ボタンを押すと、AIがブラウザを自動で操作します。最初はゆっくり動作させて、正しく動いているか確認しましょう。</p>
                </div>
              </div>
            </div>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              今すぐ使えるプロンプト活用例
            </h2>
            <p className="mb-4">録画した手順と組み合わせて使う、便利なプロンプトの例です。コピーしてCopelfに伝えてみてください。</p>
            
            <PromptBlock
              title="データ収集と記録の自動化"
              prompt="「さっき録画した手順で、競合他社の新製品価格をチェックして、スプレッドシートの末尾に追記しておいて」"
            />
            
            <PromptBlock
              title="定期的な情報収集"
              prompt="「毎日朝9時に、このニュースサイトから『AI』に関する記事だけをピックアップしてSlackに送って」"
            />
            
            <PromptBlock
              title="フォーム入力の自動化"
              prompt="「このExcelリストにある名前と住所を、さっき録画した問い合わせフォームに一件ずつ入力して送信しておいて」"
            />
          </section>

          <section id="safety-tips" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              安全に自動化するためのコツ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              AIが勝手にブラウザを操作するのが不安な方へ、安心して使うためのポイントです。
            </p>
            <PromptInfoCard type="response" title="安心運用のポイント">
              <ul className="list-disc list-inside space-y-2">
                <li>**確認ステップを入れる**: プロンプトに「実行前に、何を操作するか箇条書きで教えて」と加えることで、予期せぬ操作を防げます。</li>
                <li>**最初は「閲覧のみ」で試す**: 入力や送信を伴わない、情報の読み取り作業から始めるとリスクが低く安心です。</li>
                <li>**パスワード管理**: パスワードの入力が必要なサイトでは、Copelfの安全な認証連携機能（Vault）を使用しましょう。</li>
              </ul>
            </PromptInfoCard>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Copelfは、私たちの「ブラウザでの過ごし方」を根本から変える可能性を秘めています。
              「AIに任せる」の第一歩は、あなたが今日行った「面倒な繰り返し作業」をAIに見せることから始まります。
            </p>
            <p className="text-[#333333] leading-relaxed">
              まずは一度、簡単なニュースチェックの録画から試してみてください。数分後には、AIがあなたの専属アシスタントとして動き始めているはずです。
            </p>
          </section>

          <section id="news-sources" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ニュースソース
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-2">
              <li><a href="https://atmarkit.itmedia.co.jp/ait/articles/2604/17/news061.html" target="_blank" rel="noopener noreferrer">「もうAIブラウザはいらない」 プロンプト要らずのブラウザ操作AI「Copelf」リリース - ＠IT</a></li>
              <li><a href="https://aifriends.jp/gemini-in-chrome-japan-launch-browser-ai-2026/" target="_blank" rel="noopener noreferrer">Copelf衝撃｜動画録画×プロンプト不要のブラウザAI - AIフレンズ</a></li>
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
