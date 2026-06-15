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
  { id: "introduction", text: "「AIの回答が違う」をボタン一つで解決！", level: 2 as const },
  { id: "what-is-retry", text: "Copilotの新UI「再試行ボタン」とは？", level: 2 as const },
  { id: "why-it-helps-beginners", text: "初心者にこそ「聞き直し」がおすすめな理由", level: 2 as const },
  { id: "how-to-use", text: "使い方は簡単！3つのステップ", level: 2 as const },
  { id: "prompt-examples", text: "聞き直しを成功させるプロンプト例", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "news-sources", text: "ニュースソース", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "回答の一部を「選んで質問」！Copilotの新機能でピンポイントに解決するプロンプト術",
    description: "Copilotの回答から気になる部分だけを選択して、さらに深掘りする方法を解説",
    href: "/articles/copilot-select-ask",
  },
  {
    title: "AIが「じっくり考えて」から答えてくれる！Copilotの『Think Deeper』活用術",
    description: "AIに回答前に「論理的に考える」ことで、驚くほど質の高いアドバイスを引き出すコツを紹介",
    href: "/articles/copilot-think-deeper-beginner",
  },
]

export default function CopilotUIRetryPage() {
  const title = "AIの回答に「もう一回！」が言いやすく。Copilotの最新UIと『聞き直し』で正解にたどり着くプロンプト術";
  const description = "2026年5月のアップデートで、Windows 11のCopilotの画面構成が刷新され、AIの回答に対して「別の言い方で」「もっと短く」といった再試行がボタン一つで簡単に行えるようになりました。初心者が一度の質問で諦めず、AIを上手に『育てて』理想の回答を引き出すための『聞き直し』プロンプト術を解説します。";
  const keywords = "Copilot, 再試行, 聞き直し, UI刷新, AI活用, 初心者, プロンプト, 効率化, Windows 11";
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
    datePublished: "2026-05-25T00:00:00Z",
    dateModified: "2026-05-25T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年5月25日"
          updatedAt="2026年5月25日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「AIの回答が違う」をボタン一つで解決！
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「AIに質問してみたけれど、返ってきた回答が期待と違う...」
              「もう一度、別の視点から答えてほしいんだけど、どうしよう...」
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              そんな経験はありませんか？AIは完璧ではなく、時には期待と異なる回答をすることもあります。でも大丈夫。AIに「もう一回！」と言い直すことで、より良い回答を引き出すことができるのです。
            </p>
            <p className="text-[#333333] leading-relaxed">
              2026年5月のアップデートで、Windows 11に備え付けの「Microsoft Copilot」の画面構成（UI）が刷新されました。これにより、AIの回答に対して「別の言い方で」「もっと短く」といった再試行（Retry）がボタン一つで簡単に行えるようになったのです。本記事では、初心者が一度の質問で諦めず、AIを上手に「育てて」理想の回答を引き出すための『聞き直し』プロンプト術を解説します。
            </p>
          </section>

          <section id="what-is-retry" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Copilotの新UI「再試行ボタン」とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「再試行ボタン」は、Copilotが返してきた回答の下に新設されたボタンで、プロンプトを打ち直すことなく「別の視点から」「別の形式で」の回答を促せるようになった機能です。
            </p>
            <ul className="list-disc list-inside mb-4 text-[#333333]">
              <li>**プロンプト不要**: 新しく質問を打ち込む必要がありません。ボタンをクリックするだけで再度考え直してくれます。</li>
              <li>**文脈の維持**: AIは前の会話を踏まえたまま、新しい視点から回答を生成します。</li>
              <li>**複数の視点**: 「別の言い方で」「もっと短く」「初心者向けに」など、複数の再試行オプションが用意されています。</li>
            </ul>
          </section>

          <section id="why-it-helps-beginners" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者にこそ「聞き直し」がおすすめな理由
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              AIを使い始めたばかりの方は、「一度変な答えが返ってくると、もうAIは使えない」と諦めてしまうことがあります。でも実は、AIに「聞き直す」ことは全く恥ずかしくなく、むしろ上手にAIを使いこなすための重要なスキルなのです。
            </p>
            <PromptInfoCard type="tips" title="「聞き直し」は恥ずかしくない">
              AIは何度聞き直しても嫌な顔をしません。むしろ、あなたが何度も聞き直してくれることで、より正確にあなたの要望を理解するようになります。初心者が陥りがちな「遠慮」をなくし、遠慮なく「もう一回！」と言ってみてください。
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
                  <h3 className="font-bold text-lg mb-1">Copilotに質問する</h3>
                  <p className="text-sm">いつも通り、Copilotに質問を送ります。「〇〇について教えて」という簡単な質問でかまいません。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B9BD5] text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">回答を確認する</h3>
                  <p className="text-sm">Copilotの回答が返ってきたら、その下を見てください。「別の言い方で」「もっと短く」などの再試行ボタンが表示されています。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B9BD5] text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">ボタンをクリック＆短い指示を追加</h3>
                  <p className="text-sm">目的のボタンをクリックし、必要に応じて「小学生でも分かるように」といった短い指示を追加するだけで、新しい視点からの回答が返ってきます。</p>
                </div>
              </div>
            </div>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              聞き直しを成功させるプロンプト例
            </h2>
            <p className="mb-4">再試行ボタンをクリックした後、こんな風に短く追加指示を送ってみてください。</p>
            
            <PromptBlock
              title="回答が難しすぎる時"
              prompt="「今の説明、ちょっと難しいから『小学生でも分かる言葉』で、もう一度説明し直して」"
            />
            
            <PromptBlock
              title="回答が長すぎる時"
              prompt="「長すぎるから、大事なポイント3つだけに絞って、箇条書きで出し直して」"
            />
            
            <PromptBlock
              title="ビジネス用に変更したい時"
              prompt="「内容はいいけど、上司に送るメールにしたいから『もっと丁寧な敬語』に変えて」"
            />
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Copilotの「再試行ボタン」と「聞き直し」機能は、AIとの対話をより自然で効果的にするための強力なツールです。
              一度の質問で完璧な回答を期待する必要はありません。「別の言い方で」「もっと短く」と何度も聞き直すことで、あなたの要望にぴったり合った回答にたどり着けます。
            </p>
            <p className="text-[#333333] leading-relaxed">
              「AIの回答が期待と違う...」と感じていた方は、ぜひ今日から「聞き直す」新しいAI体験を始めてみてください。AIはあなたの聞き直しを待っています。
            </p>
          </section>

          <section id="news-sources" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ニュースソース
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-2">
              <li><a href="https://learn.microsoft.com/ja-jp/microsoft-365/copilot/release-notes" target="_blank" rel="noopener noreferrer">Microsoft 365 Copilotのリリース ノート - Microsoft Learn</a></li>
              <li><a href="https://note.com/maruking777/n/na6db3eea5edc" target="_blank" rel="noopener noreferrer">ChatGPTのGPT-5.5神アプデをAI初心者でもフル活用する方法 - note</a></li>
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
