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
      name: "最新AIトレンド",
      articles: [
        { title: "AIが「考えてから動く」！Gemma 4の『エージェント機能』活用術", href: "/articles/gemma-agent-beginner" },
        { title: "Gemini「パーソナル インテリジェンス」で自分専用のAIアシスタントを作る", href: "/articles/gemini-personal-intelligence" },
      ],
    },
  ],
  copyright: "© 2026 AIプロンプト活用ガイド All Rights Reserved.",
}

// 目次データ
const headings = [
  { id: "introduction", text: "AIが「自分で考えて動く」時代の到来", level: 2 as const },
  { id: "what-is-gemma4-agent", text: "Gemma 4の「エージェント機能」とは？", level: 2 as const },
  { id: "why-it-helps-beginners", text: "初心者にこそ「エージェント」がおすすめな理由", level: 2 as const },
  { id: "how-to-use", text: "使い方は簡単！目的を伝えるだけ", level: 2 as const },
  { id: "prompt-examples", text: "一発で頼み事が通じるプロンプト例", level: 2 as const },
  { id: "permission-and-safety", text: "AIからの「確認」への答え方と安全性", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "news-sources", text: "ニュースソース", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "AIエージェントで業務を自動化！「自律型ワークフロー」構築プロンプト術",
    description: "中級者向けに、複数のAIエージェントを組み合わせて複雑な業務を自動化する方法を解説",
    href: "/articles/ai-agent-workflow",
  },
  {
    title: "Gemini「パーソナル インテリジェンス」で自分専用のAIアシスタントを作る",
    description: "Googleの個人データ連携機能を活用して、より自分に最適化されたAI体験を得る方法を紹介",
    href: "/articles/gemini-personal-intelligence",
  },
]

export default function GemmaAgentBeginnerPage() {
  const title = "AIが「考えてから動く」！Gemma 4の『エージェント機能』で頼み事が1回で通じるプロンプト術";
  const description = "Googleの最新AI「Gemma 4」に搭載されたエージェント機能を初心者向けに解説。細かい手順を指示しなくても、目的を伝えるだけでAIが自ら考えて実行してくれる新しいプロンプト術を紹介します。";
  const keywords = "Gemma 4, エージェント機能, Google AI, 初心者, プロンプト, AI活用, 自動化, 自律型AI";
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
    datePublished: "2026-04-22T00:00:00Z",
    dateModified: "2026-04-22T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年4月22日"
          updatedAt="2026年4月22日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              AIが「自分で考えて動く」時代の到来
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「AIに指示を出しても、一回で思い通りの答えが返ってこない...」
              「細かい手順を説明するのが面倒で、結局自分でやったほうが早い」
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              AIを使い始めたばかりの頃、そんな風に感じたことはありませんか？これまでのAIは、私たちが指示した通りのことしかできませんでした。
            </p>
            <p className="text-[#333333] leading-relaxed">
              しかし、Googleが2026年4月に発表した最新モデル**「Gemma 4」**は違います。新しく搭載された**「エージェント機能」**により、AIが自ら「何をすべきか」を考え、ステップに分解して実行してくれるようになりました。この記事では、初心者でも「一発で頼み事が通じる」ようになる、新しいプロンプトのコツを解説します。
            </p>
          </section>

          <section id="what-is-gemma4-agent" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Gemma 4の「エージェント機能」とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「エージェント機能」とは、AIが単なる「話し相手」ではなく、あなたの代わりに「仕事を進める担当者（エージェント）」として動く機能のことです。
            </p>
            <ul className="list-disc list-inside mb-4 text-[#333333]">
              <li>**タスクの分解**: 複雑な依頼を、AIが自分で小さなステップに分けます。</li>
              <li>**自律的な実行**: 分解したステップを、順番にAIが実行していきます。</li>
              <li>**ツールの活用**: 必要に応じて、検索や計算、ファイル作成などのツールをAIが使いこなします。</li>
              <li>**状況判断**: 途中で問題が起きても、AIが自分で判断して修正を試みます。</li>
            </ul>
          </section>

          <section id="why-it-helps-beginners" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者にこそ「エージェント」がおすすめな理由
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              これまでは、AIから良い回答を引き出すために「プロンプトエンジニアリング」という難しい技術が必要だと言われてきました。しかし、エージェント機能はこの常識を覆します。
            </p>
            <PromptInfoCard type="tips" title="「書き方」より「目的」が重要に">
              「まずAをして、次にBをして、最後にCをまとめて」と細かく書く必要はありません。「目的はDです。そのために必要なことをやってください」と伝えるだけで、AIが最適な手順を組み立ててくれます。初心者にとって、これほど心強い味方はありません。
            </PromptInfoCard>
          </section>

          <section id="how-to-use" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              使い方は簡単！目的を伝えるだけ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Gemma 4でエージェント機能を活用する際は、以下の3つのポイントを意識して話しかけてみてください。
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B9BD5] text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">最終的な「ゴール」を明確にする</h3>
                  <p className="text-sm">「何を作りたいか」「何を解決したいか」という結果を伝えます。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B9BD5] text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">「エージェントとして動いて」と添える</h3>
                  <p className="text-sm">「エージェントとして、必要な手順を考えて実行してください」と一言添えるだけで、AIの動作モードが切り替わります。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B9BD5] text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">AIからの質問に答える</h3>
                  <p className="text-sm">AIが手順を進める中で「この情報が足りません」や「このツールを使ってもいいですか？」と聞いてくることがあります。それに答えるだけで、タスクが完了します。</p>
                </div>
              </div>
            </div>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              一発で頼み事が通じるプロンプト例
            </h2>
            <p className="mb-4">Gemma 4のエージェント機能を呼び出すための、具体的でシンプルなプロンプト例です。</p>
            
            <PromptBlock
              title="旅行の計画を丸投げする"
              prompt="「来週末に京都へ1泊2日の旅行に行きたいです。エージェントとして、私の好みに合った観光ルートを作成し、予算の概算も出してください。まずは私の好みについていくつか質問してください。」"
            />
            
            <PromptBlock
              title="複雑な調べ物を任せる"
              prompt="「最新のAIエージェントのトレンドについて、主要な5つのサービスを比較したレポートを作成してください。エージェントとして、ネット検索を活用し、信頼できるソースから情報を集めてまとめてください。」"
            />
            
            <PromptBlock
              title="仕事の段取りを組んでもらう"
              prompt="「新商品の発表イベントを1ヶ月後に開催します。エージェントとして、今からやるべきことをリストアップし、スケジュール表を作成してください。足りない情報があれば聞いてください。」"
            />
          </section>

          <section id="permission-and-safety" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              AIからの「確認」への答え方と安全性
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              エージェント機能を使っていると、AIが「外部サイトにアクセスしてもよろしいですか？」や「このファイルを編集しますか？」といった確認を求めてくることがあります。
            </p>
            <PromptInfoCard type="response" title="初心者でも安心な許可の出し方">
              <p className="mb-2">基本的には、AIが提案した内容に納得できれば「はい、お願いします」と答えるだけでOKです。もし不安な場合は、以下のように聞いてみてください。</p>
              <ul className="list-disc list-inside space-y-1">
                <li>「それを実行すると、どんなリスクがありますか？」</li>
                <li>「他の方法はありますか？」</li>
                <li>「一度、下書きを見せてください」</li>
              </ul>
            </PromptInfoCard>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Gemma 4の「エージェント機能」は、AIプロンプトの常識を劇的に変える画期的な進化です。
              「どう書くか」に悩む時間はもう終わり、これからは「何をしたいか」を伝えるだけで、AIがあなたの有能なアシスタントとして動いてくれます。
            </p>
            <p className="text-[#333333] leading-relaxed">
              「AIは難しい」と感じていた初心者の方こそ、ぜひこのGemma 4の新しい力を体感してみてください。あなたの言葉が、そのまま形になる驚きが待っています。
            </p>
          </section>

          <section id="news-sources" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ニュースソース
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-2">
              <li><a href="https://blog.google/technology/developers/gemma-4-announcement/" target="_blank" rel="noopener noreferrer">Google Developers Blog - Introducing Gemma 4</a></li>
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
