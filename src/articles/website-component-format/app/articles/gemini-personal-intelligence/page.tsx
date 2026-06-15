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
      name: "Google AI活用",
      articles: [
        { title: "もうプロンプトを打ち直さない！Chromeの『Skills』でAIを「自分専用」に育てる術", href: "/articles/chrome-gemini-skills" },
        { title: "言葉が「動く図解」に！Geminiの『シミュレーター生成』プロンプト術", href: "/articles/gemini-dynamic-visualizer" },
      ],
    },
  ],
  copyright: "© 2026 AIプロンプト活用ガイド All Rights Reserved.",
}

// 目次データ
const headings = [
  { id: "introduction", text: "「AIに自分のことを分かってほしい」が叶う時代へ", level: 2 as const },
  { id: "what-is-personal-intelligence", text: "Gemini「パーソナル インテリジェンス」とは？", level: 2 as const },
  { id: "why-it-helps-beginners", text: "初心者にこそ「個人データ連携」がおすすめな理由", level: 2 as const },
  { id: "how-to-setup", text: "セットアップは簡単！3つのステップ", level: 2 as const },
  { id: "prompt-examples", text: "自分専用のAIを引き出すプロンプト例", level: 2 as const },
  { id: "privacy-safety", text: "個人情報は大丈夫？プライバシーと安全性", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "news-sources", text: "ニュースソース", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "もうプロンプトを打ち直さない！Chromeの『Skills』でAIを「自分専用」に育てる術",
    description: "Chromeの新機能『Skills』を使って、AIに自分の好みや業務を覚えさせるコツを紹介",
    href: "/articles/chrome-gemini-skills",
  },
  {
    title: "アプリ間移動をゼロに！Geminiの『@メンション』でGoogle Workspaceを1つの画面で操る術",
    description: "Geminiの『@メンション』機能でGmailやカレンダーなどを統合的に操作する方法を解説",
    href: "/articles/gemini-mention-google-workspace",
  },
]

export default function GeminiPersonalIntelligencePage() {
  const title = "Gemini「パーソナル インテリジェンス」で自分専用のAIアシスタントを作る";
  const description = "Google Geminiの新機能「パーソナル インテリジェンス」を活用し、GmailやGoogleフォト、検索履歴と連携して、あなた専用のAIアシスタントを作る方法を初心者向けに解説。個人情報の扱いも安心です。";
  const keywords = "Gemini, パーソナル インテリジェンス, Google AI, Gmail連携, 初心者, プロンプト, AI活用, 個人データ";
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
    datePublished: "2026-04-21T00:00:00Z",
    dateModified: "2026-04-21T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年4月21日"
          updatedAt="2026年4月21日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「AIに自分のことを分かってほしい」が叶う時代へ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「AIに質問しても、自分の状況を理解していないから、ズレた回答が返ってくる...」
              「毎回、自分の背景を説明してから質問するのは面倒だ」
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              そんな経験はありませんか？AIは便利ですが、あなたのメール、写真、検索履歴といった「個人の情報」を知らないため、時には的外れな提案をしてしまうことがあります。
            </p>
            <p className="text-[#333333] leading-relaxed">
              そこで活用したいのが、Google Geminiの新機能**「パーソナル インテリジェンス」**です。この機能を使うと、GmailやGoogleフォト、検索履歴と連携して、あなた専用のAIアシスタントが完成します。この記事では、初心者でも安心して使い始められるセットアップ方法と、プロンプトのコツを解説します。
            </p>
          </section>

          <section id="what-is-personal-intelligence" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Gemini「パーソナル インテリジェンス」とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「パーソナル インテリジェンス」は、2026年4月14日に日本でのベータ版提供が開始された、Google Geminiの新機能です。以下の3つのデータと連携することで、あなた専用のAIアシスタントが実現します。
            </p>
            <ul className="list-disc list-inside mb-4 text-[#333333]">
              <li>**Gmail**: あなたが受け取ったメールの内容や連絡先情報</li>
              <li>**Googleフォト**: あなたが撮影・保存した写真や動画</li>
              <li>**検索履歴**: あなたが何に関心を持っているかの情報</li>
            </ul>
            <p className="text-[#333333] leading-relaxed">
              これらのデータを活用することで、Geminiは「あなたの状況」を理解した上で、より的確で個人的な回答を提供できるようになります。
            </p>
          </section>

          <section id="why-it-helps-beginners" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者にこそ「個人データ連携」がおすすめな理由
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              AIを使い始めたばかりの頃は、「どうやってAIに自分の状況を説明すればいいか」という悩みが尽きません。パーソナル インテリジェンスを使うと、その手間が大幅に減ります。
            </p>
            <PromptInfoCard type="tips" title="「個人データ」がAIを賢くする">
              毎回「私は営業職で、顧客管理が課題です」と説明する必要はありません。Geminiが自動的にあなたのメールやカレンダーから「営業活動」を察知し、それに合わせた提案をしてくれるようになります。
            </PromptInfoCard>
          </section>

          <section id="how-to-setup" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              セットアップは簡単！3つのステップ
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B9BD5] text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Geminiの設定画面を開く</h3>
                  <p className="text-sm">Google Geminiにアクセスし、右上の「設定」アイコンをクリックします。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B9BD5] text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">「パーソナル インテリジェンス」を有効にする</h3>
                  <p className="text-sm">設定メニューから「パーソナル インテリジェンス」を探し、「有効にする」をクリック。Gmail、Googleフォト、検索履歴との連携を許可するかどうかを選択できます。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B9BD5] text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">連携するデータを選択する</h3>
                  <p className="text-sm">「Gmail」「Googleフォト」「検索履歴」のうち、Geminiに見せたいものにチェックを入れます。すべてを連携させる必要はありません。あなたが快適に感じるレベルで選択してください。</p>
                </div>
              </div>
            </div>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              自分専用のAIを引き出すプロンプト例
            </h2>
            <p className="mb-4">パーソナル インテリジェンスを有効にした後は、こんな風に聞いてみてください。Geminiがあなたの個人データを参考にして、より的確な回答をしてくれます。</p>
            
            <PromptBlock
              title="メール内容を前提とした質問"
              prompt="「先週届いたあのメールの内容を教えて。それについて、今週中にやるべきことは何？」"
            />
            
            <PromptBlock
              title="写真データを活用した質問"
              prompt="「去年の旅行の写真から、一番いい感じのやつを探して。その場所について、もっと詳しく教えて」"
            />
            
            <PromptBlock
              title="検索履歴を活用した提案"
              prompt="「最近、私が検索している内容から判断して、今月中にやった方がいいことってある？」"
            />

            <PromptBlock
              title="複合的な質問"
              prompt="「このメール（参照）と、最近の私の検索履歴から、次のプロジェクトで気をつけるべきポイントを3つ挙げて」"
            />
          </section>

          <section id="privacy-safety" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              個人情報は大丈夫？プライバシーと安全性
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「AIに個人データを見せるのは怖い...」と感じるのは自然なことです。ここで、Googleのプライバシー対策を確認しましょう。
            </p>
            <PromptInfoCard type="response" title="Googleのプライバシー保護">
              <ul className="list-disc list-inside space-y-2">
                <li>**オプトイン制**: パーソナル インテリジェンスは、あなたが明示的に有効にしない限り、個人データは共有されません。</li>
                <li>**選択的連携**: Gmail、Googleフォト、検索履歴のうち、見せたくないものは連携させないことができます。</li>
                <li>**暗号化通信**: すべてのデータは暗号化されて送受信されます。</li>
                <li>**削除可能**: いつでも連携を解除できます。</li>
              </ul>
            </PromptInfoCard>
            <p className="text-[#333333] leading-relaxed">
              ただし、完全に心配がなくなるわけではありません。Googleの利用規約をしっかり読んだ上で、自分が納得できるレベルで利用することをおすすめします。
            </p>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Gemini「パーソナル インテリジェンス」は、AIを「汎用ツール」から「あなた専用アシスタント」へと進化させる機能です。
              セットアップは簡単で、個人情報の扱いもGoogleが厳格に管理しています。
            </p>
            <p className="text-[#333333] leading-relaxed">
              「AIに自分のことを分かってほしい」と感じていた方は、ぜひこの機能を試してみてください。
              あなたの日常がもっとスムーズに、もっと効率的になる新しいAI体験が待っています。
            </p>
          </section>

          <section id="news-sources" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ニュースソース
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-2">
              <li><a href="https://blog.google/intl/ja_jp/products/gemini/personal-intelligence/" target="_blank" rel="noopener noreferrer">Google Gemini「パーソナル インテリジェンス」発表ページ</a></li>
              <li><a href="https://support.google.com/gemini/answer/13846620" target="_blank" rel="noopener noreferrer">Gemini ヘルプセンター - パーソナル インテリジェンス</a></li>
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
