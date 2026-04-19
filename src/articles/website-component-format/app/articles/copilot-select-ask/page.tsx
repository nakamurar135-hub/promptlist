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
  { id: "introduction", text: "「AIの回答が長すぎて読めない」を解決！", level: 2 as const },
  { id: "what-is-select-ask", text: "「選んで質問（Ask Copilot）」機能とは？", level: 2 as const },
  { id: "why-it-helps-beginners", text: "初心者にこそ「部分選択」がおすすめな理由", level: 2 as const },
  { id: "how-to-use", text: "使い方は簡単！3つのステップ", level: 2 as const },
  { id: "prompt-examples", text: "ピンポイントで解決するプロンプト例", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "news-sources", text: "ニュースソース", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "AIが「じっくり考えて」から答えてくれる！Copilotの『Think Deeper』活用術",
    description: "AIに回答前に「論理的に考える」ことで、驚くほど質の高いアドバイスを引き出すコツを紹介",
    href: "/articles/copilot-think-deeper-beginner",
  },
  {
    title: "画面上の「これ」をAIが即解決！Windows 11の新機能『Click to Do』活用プロンプト術",
    description: "画面内のテキストや画像を認識して、次にやりたいことをAIが提案してくれる新機能を解説",
    href: "/articles/windows-click-to-do-beginner",
  },
]

export default function CopilotSelectAskPage() {
  const title = "回答の一部を「選んで質問」！Copilotの新機能でピンポイントに解決するプロンプト術";
  const description = "Copilotの回答が長すぎてどこを見ればいいかわからない...。そんな悩みを解決する新機能「テキスト選択（Ask Copilot）」を徹底解説。気になる部分だけを深掘りして、AIとの対話をスムーズにするコツを紹介します。";
  const keywords = "Copilot, テキスト選択, Ask Copilot, AI活用, 初心者, プロンプト, 効率化, Microsoft 365";
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
    datePublished: "2026-04-19T00:00:00Z",
    dateModified: "2026-04-19T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年4月19日"
          updatedAt="2026年4月19日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「AIの回答が長すぎて読めない」を解決！
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「AIに質問してみたけれど、返ってきた回答が長文すぎてどこを読めばいいかわからない...」
              「回答の中の、この一文だけもっと詳しく知りたいんだけど、どう聞けばいいの？」
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              そんな経験はありませんか？AIは親切にたくさん教えてくれますが、時にはその情報量が多すぎて、初心者を困惑させてしまうことがあります。
            </p>
            <p className="text-[#333333] leading-relaxed">
              そこで活用したいのが、Microsoft Copilotの新機能**「テキスト選択（Ask Copilot）」**です。この記事では、回答の「ここだけ」をピンポイントで深掘りし、AIとの対話を劇的にスムーズにする方法を解説します。
            </p>
          </section>

          <section id="what-is-select-ask" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「選んで質問（Ask Copilot）」機能とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「選んで質問」は、Copilotが返してきた回答の中から、特定の単語や文章をマウスでなぞって選択し、その部分だけに焦点を当てて追加の質問ができる機能です。
            </p>
            <ul className="list-disc list-inside mb-4 text-[#333333]">
              <li>**ピンポイントな深掘り**: 回答全体ではなく、気になる一部分だけを対象にできます。</li>
              <li>**文脈の維持**: AIは「どの部分についての質問か」を正確に理解したまま、回答を続けてくれます。</li>
              <li>**手間の削減**: 「さっきの回答の〇〇という部分について教えて」と説明するプロンプトを打つ必要がありません。</li>
            </ul>
          </section>

          <section id="why-it-helps-beginners" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者にこそ「部分選択」がおすすめな理由
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              AIを使い始めたばかりの頃は、どんなプロンプトを書けばいいか迷うものです。この機能を使うと、難しい指示を考えなくても、直感的にAIを操れるようになります。
            </p>
            <PromptInfoCard type="tips" title="「ここだけ」で会話が弾む">
              長文の回答から重要なキーワードを「選ぶ」だけで、AIはあなたの関心を察知します。プロンプトを「書く」ストレスから解放され、AIとの会話がより自然なものに変わります。
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
                  <h3 className="font-bold text-lg mb-1">テキストを選択する</h3>
                  <p className="text-sm">Copilotの回答の中で、詳しく知りたい部分をマウスでドラッグして選択します。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B9BD5] text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">「Ask Copilot」をクリック</h3>
                  <p className="text-sm">選択した範囲のすぐ上に表示される小さなメニューから「Ask Copilot」ボタンを押します。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B9BD5] text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">短い指示を送る</h3>
                  <p className="text-sm">入力欄に「もっと詳しく」や「具体例は？」と短く打ち込むだけで、その部分に特化した回答が返ってきます。</p>
                </div>
              </div>
            </div>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ピンポイントで解決するプロンプト例
            </h2>
            <p className="mb-4">テキストを選択した状態で、こんな風に短く聞いてみてください。</p>
            
            <PromptBlock
              title="難しい用語を選択した時"
              prompt="「これ、中学生でもわかるように、もっと簡単に説明して」"
            />
            
            <PromptBlock
              title="手順の一部を選択した時"
              prompt="「このステップの具体的な操作方法を、箇条書きで教えて」"
            />
            
            <PromptBlock
              title="メリット・デメリットを選択した時"
              prompt="「具体的にどんな場面で役立つの？実例を1つ挙げてみて」"
            />
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Copilotの「テキスト選択（Ask Copilot）」は、AIの回答を「読む」だけでなく「操る」ための強力なツールです。
              回答のすべてを理解しようと頑張る必要はありません。気になる部分だけを「選んで質問」することで、あなたの知りたいことに最短距離でたどり着けます。
            </p>
            <p className="text-[#333333] leading-relaxed">
              「AIの回答が長くて苦手...」と感じていた方は、ぜひ今日から「選んで深掘り」する新しいAI体験を始めてみてください。
            </p>
          </section>

          <section id="news-sources" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ニュースソース
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-2">
              <li><a href="https://blogs.windows.com/japan/2026/03/16/whats-new-in-microsoft-365-copilot-february-2026/" target="_blank" rel="noopener noreferrer">Microsoft 365 Copilot の新機能 | 2026 年 2 月</a></li>
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
