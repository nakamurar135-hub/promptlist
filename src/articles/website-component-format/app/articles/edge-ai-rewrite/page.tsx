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
        { title: "【初心者向け】「あのサイト、何だっけ？」をAIが解決！Chromeの『AI履歴検索』活用術", href: "/articles/chrome-ai-history-search" },
        { title: "【初心者向け】メールもSNSも「右クリック」で完成！Edgeの『AI書き換え』プロンプト術", href: "/articles/edge-ai-rewrite" },
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
  { id: "introduction", text: "「書く」から「選ぶ」へ！Edgeブラウザが「AIライター」になる2026年の新常識", level: 2 as const },
  { id: "how-to-use", text: "コピペ不要！右クリックから「AI書き換え」を呼び出す", level: 2 as const },
  { id: "magic-buttons", text: "初心者がすぐ使える！3つの「魔法のボタン」", level: 2 as const },
  { id: "polite", text: "「丁寧にする」ボタン", level: 3 as const },
  { id: "shorten", text: "「短くする」ボタン", level: 3 as const },
  { id: "enthusiasm", text: "「熱意を込める」ボタン", level: 3 as const },
  { id: "free-instruction", text: "もっとこだわりたい人のための「自由指示」", level: 2 as const },
  { id: "no-mistakes", text: "「間違い」を恐れなくていい：AIが下書きを作ってくれるから、自分は「選ぶだけ」でOK", level: 2 as const },
  { id: "news-source", text: "ニュースソース", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "【初心者向け】「あのサイト、何だっけ？」をAIが解決！Chromeの『AI履歴検索』活用術",
    description: "2026年のChrome新機能「AI履歴検索」を徹底解説。曖昧な記憶（プロンプト）で目的のページを即座に見つける方法を紹介します。",
    href: "/articles/chrome-ai-history-search",
  },
  {
    title: "プロンプトは「書く」から「話す」へ！ChatGPT「高度な音声モード」活用術",
    description: "キーボード入力が苦手な初心者でも大丈夫！AIと自然に会話しながら理想の回答を引き出す方法を解説。",
    href: "/articles/chatgpt-voice-beginner",
  },
]

export default function EdgeAIRewriteArticlePage() {
  const title = "【初心者向け】メールもSNSも「右クリック」で完成！Edgeの『AI書き換え』プロンプト術";
  const description = "Microsoft Edgeの「AI書き換え（Rewrite with Copilot）」機能を初心者向けに解説。右クリックだけで文章を「丁寧にする」「短くする」「熱意を込める」など、AIが自動で調整してくれる便利さを紹介します。";
  const keywords = "Microsoft Edge, AI書き換え, Copilot, プロンプト, 初心者, メール, SNS, 文章作成, AI活用";
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
    datePublished: "2026-04-11T00:00:00Z",
    dateModified: "2026-04-11T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年4月11日"
          updatedAt="2026年4月11日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「書く」から「選ぶ」へ！Edgeブラウザが「AIライター」になる2026年の新常識
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年、Microsoft Edgeは単なるウェブブラウザではなく、あなたの強力な「AIライター」へと進化しました。特に注目すべきは、文章作成のプロセスを根本から変える「AI書き換え（Rewrite with Copilot）」機能です。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              これまでの文章作成は、ゼロから言葉を紡ぎ出す「書く」作業が中心でした。しかし、EdgeのAI書き換え機能を使えば、あなたが書いた下書きを元に、AIが様々な表現を提案してくれるようになります。まるで優秀な編集者が隣にいるかのように、あなたはAIが提示する選択肢の中から最適なものを選ぶだけで、プロフェッショナルな文章を完成させることができるのです。
            </p>
            <p className="text-[#333333] leading-relaxed">
              この新常識は、特にビジネスメールやSNS投稿など、日々のコミュニケーションで文章作成に時間を取られている方にとって、まさに革命的な変化をもたらします。もう言葉選びに悩む必要はありません。AIがあなたのアイデアを形にする手助けをしてくれるでしょう。
            </p>
          </section>

          <section id="how-to-use" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              コピペ不要！右クリックから「AI書き換え」を呼び出す
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              EdgeのAI書き換え機能の最大の魅力は、その手軽さにあります。特別なツールを起動したり、別のアプリケーションに文章をコピー＆ペーストしたりする必要は一切ありません。普段使っているブラウザの入力欄で、いつものように文章を書くだけで準備は完了です。
            </p>
            <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-3 pb-1 border-b border-[#5B9BD5]">
              使い方はたったの2ステップ
            </h3>
            <ol className="list-decimal list-inside mb-4 text-[#333333] space-y-2">
              <li>Chromeのアドレスバー、または履歴画面（Ctrl+H）を開きます。</li>
              <li>検索窓に、友達に話しかけるような言葉を入力します。</li>
              <li>AIが内容を解析し、最も関連性の高いページを上位に表示します。</li>
            </ol>
            <p className="text-[#333333] leading-relaxed">
              このシームレスな連携により、あなたの思考の流れを中断することなく、AIの力を借りて文章を洗練させることが可能になります。まさに「書く」と「直す」が一体となった、次世代の文章作成体験です。
            </p>
          </section>

          <section id="magic-buttons" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者がすぐ使える！3つの「魔法のボタン」
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              AI書き換え機能には、初心者でも迷わず使えるように、よく利用される表現パターンをまとめた「魔法のボタン」が用意されています。これらのボタンをクリックするだけで、AIがあなたの文章を瞬時に調整してくれます。
            </p>

            <section id="polite" className="mb-8">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-3 pb-1 border-b border-[#5B9BD5]">
                1. 「丁寧にする」ボタン
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                ビジネスメールや目上の人への連絡など、より丁寧な言葉遣いが求められる場面で活躍します。カジュアルな表現を自動的に敬語に変換し、フォーマルな印象の文章に仕上げてくれます。
              </p>
              <PromptBlock
                title="使用例"
                prompt="「この件、よろしく！」→「この件につきまして、何卒よろしくお願い申し上げます。」\n「資料、見といてください」→「資料をご確認いただけますと幸いです。」"
              />
            </section>

            <section id="shorten" className="mb-8">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-3 pb-1 border-b border-[#5B9BD5]">
                2. 「短くする」ボタン
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                SNS投稿やチャットなど、文字数制限がある場合や、要点を簡潔に伝えたい場合に便利です。冗長な表現を削ぎ落とし、伝えたいメッセージを明確にしてくれます。
              </p>
              <PromptBlock
                title="使用例"
                prompt="「先日お話ししたプロジェクトの件ですが、進捗状況についてご報告させていただきます。」→「プロジェクトの進捗をご報告します。」\n「この商品は、最新の技術を搭載しており、お客様の生活をより豊かにするものです。」→「最新技術搭載で、生活を豊かにする商品です。」"
              />
            </section>

            <section id="enthusiasm" className="mb-8">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-3 pb-1 border-b border-[#5B9BD5]">
                3. 「熱意を込める」ボタン
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                お礼のメッセージ、応援の言葉、イベントの告知など、感情を込めて伝えたい時に効果的です。文章に活気と情熱を加え、読み手の心に響く表現にしてくれます。
              </p>
              <PromptBlock
                title="使用例"
                prompt="「ご参加ありがとうございました。」→「この度は、ご多忙の中、ご参加いただき誠にありがとうございました！皆様のおかげで素晴らしい会となりました。」\n「新製品を発売します。」→「ついに、皆様待望の新製品が発売されます！ぜひこの機会にお試しください！」"
              />
            </section>

            <p className="text-[#333333] leading-relaxed">
              これらの「魔法のボタン」を使いこなすことで、あなたは文章作成の時間を大幅に短縮し、より効果的なコミュニケーションを実現できるでしょう。
            </p>
          </section>

          <section id="free-instruction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              もっとこだわりたい人のための「自由指示」
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              3つの「魔法のボタン」だけでも十分に便利ですが、AI書き換え機能はさらに高度なカスタマイズにも対応しています。特定のニュアンスを加えたい、特定のスタイルで書きたいといった要望がある場合は、「自由指示」を活用しましょう。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              「自由指示」とは、AIに対して具体的なプロンプト（指示）を直接入力する機能です。例えば、以下のような指示が可能です。
            </p>
            <ul className="list-disc list-inside mb-4 text-[#333333]">
              <li>「関西弁にして」</li>
              <li>「もっと親しみやすく」</li>
              <li>「3行でまとめて」</li>
              <li>「ビジネスメール風に」</li>
              <li>「ユーモアを加えて」</li>
            </ul>
            <p className="text-[#333333] leading-relaxed">
              これらの指示をAIに与えることで、あなたの意図に沿った、よりパーソナルな文章を生成させることができます。プロンプトのコツは、具体的に、かつ簡潔に指示を出すことです。何度か試してみて、AIがあなたの意図を最もよく理解してくれる表現を見つけてみましょう。
            </p>
          </section>

          <section id="no-mistakes" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「間違い」を恐れなくていい：AIが下書きを作ってくれるから、自分は「選ぶだけ」でOK
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              文章作成において、多くの人が抱える悩みの一つが「間違えたらどうしよう」という不安です。特に、完璧主義な方ほど、最初の草稿を書き始めるまでに時間がかかってしまう傾向があります。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              しかし、EdgeのAI書き換え機能があれば、もうその心配はいりません。AIはあなたの書いた「下書き」を元に、様々な選択肢を提案してくれます。つまり、あなたは完璧な文章を「書く」必要はなく、AIが用意した選択肢の中から「選ぶ」だけで良いのです。
            </p>
            <p className="text-[#333333] leading-relaxed">
              この「選ぶだけ」というマインドセットは、文章作成のハードルを劇的に下げてくれます。まずは気軽に自分の言葉で文章を書いてみましょう。多少の誤字脱字や表現の拙さは、AIが修正・改善してくれます。AIを信頼し、あなたのクリエイティブなアイデアを自由に表現してください。AIは、あなたの文章作成の強力なパートナーとなるでしょう。
            </p>
          </section>

          <section id="news-source" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ニュースソース
            </h2>
            <ul className="list-disc list-inside mb-4 text-[#333333]">
              <li><a href="https://blogs.windows.com/windowsexperience/2026/02/rewrite-with-copilot-edge/" target="_blank" rel="noopener noreferrer">Rewrite with Copilot in Microsoft Edge: A New Way to Write on the Web</a> (2026/02)</li>
              <li><a href="https://www.windowscentral.com/software-apps/microsoft-edge-ai-rewrite-stable-rollout" target="_blank" rel="noopener noreferrer">Edge browser's AI Rewrite feature hits stable channel with more controls</a> (2025/09)</li>
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
