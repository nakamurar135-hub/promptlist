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
  { id: "notification-fatigue", text: "「通知疲れ」がAIで解決する時代へ", level: 2 as const },
  { id: "apple-intelligence-overview", text: "Apple Intelligence『優先度自動仕分け』とは？", level: 2 as const },
  { id: "how-it-works", text: "AIが「重要」と「不要」を自動判定する仕組み", level: 2 as const },
  { id: "setup-guide", text: "今すぐ始める！設定方法と初期設定のコツ", level: 2 as const },
  { id: "prompt-examples", text: "Siriに伝えるプロンプト例", level: 2 as const },
  { id: "advanced-tips", text: "さらに快適にするテクニック", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "iPhoneのSiriが賢くなった！Google Gemini搭載で「頼み事」が通じるプロンプト術",
    description: "Apple IntelligenceとGeminiの連携により、iPhoneの操作がどう変わるのか。iOSユーザー向けの活用ガイドです。",
    href: "/articles/siri-gemini-beginner",
  },
  {
    title: "【初心者向け】Androidスマホがもっと賢く！新機能『Gemini Intelligence』活用プロンプト術",
    description: "Androidの新機能「Gemini Intelligence」で、スマホ画面を理解し、アプリを跨いで自動操作する方法を解説。",
    href: "/articles/android-gemini-intelligence",
  },
  {
    title: "【初心者向け】AIが「じっくり考えて」から答えてくれる！Copilotの『Think Deeper』で失敗しない相談術",
    description: "AIが深く考えてから回答する新機能で、より正確で信頼性の高い答えを引き出すプロンプト術を紹介。",
    href: "/articles/copilot-think-deeper-beginner",
  },
]

export default function AppleIntelligencePriorityNotificationsPage() {
  const title = "【初心者向け】スマホの「通知疲れ」をAIが解決！Apple Intelligence『優先度自動仕分け』活用ガイド"
  const description = "iOS 26.4で進化したApple Intelligenceの『優先度自動仕分け』機能を使い、大量の通知から「今すぐ見るべきもの」だけをAIに選別させる方法を解説。初心者でも設定一つで生活の質が上がるガイドです。"
  const keywords = "Apple Intelligence, iPhone, 通知, iOS 26.4, プロンプト, 初心者, スマホ活用, AI, 2026年最新"
  const url = typeof window !== 'undefined' ? window.location.href : ""

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
    datePublished: "2026-05-23T00:00:00Z",
    dateModified: "2026-05-23T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年5月23日"
          updatedAt="2026年5月23日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="notification-fatigue" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「通知疲れ」がAIで解決する時代へ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              毎日100件以上の通知に埋もれて、大事なメッセージを見落とした経験はありませんか？
              LINEの「いいね」通知、SNSの更新情報、アプリの広告通知…これらが次々と画面に現れ、本当に重要な連絡が埋もれてしまう。
              そんな「通知疲れ」の悩みを、<strong>Apple Intelligenceが完全に解決</strong>します。
            </p>
            <p className="text-[#333333] leading-relaxed">
              iOS 26.4で進化した「優先度自動仕分け」機能は、AIがあなたの通知を自動で分類し、
              <strong>「今すぐ見るべきもの」だけをロック画面に表示</strong>してくれます。
              複雑な設定は一切不要。この記事では、初心者でも今日から使える、その活用方法を詳しく解説します。
            </p>
          </section>

          <section id="apple-intelligence-overview" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Apple Intelligence『優先度自動仕分け』とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Apple Intelligenceは、Appleが提供する<strong>オンデバイスAI</strong>です。
              つまり、あなたのiPhone内で完結し、プライバシーを保ちながらAIが動作します。
              この「優先度自動仕分け」機能は、その最新の応用例の一つです。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              従来のiPhoneでは、通知を「許可」か「ブロック」の二択で管理するしかありませんでした。
              しかし、Apple Intelligenceは<strong>「この通知は重要」「これは後で見ればいい」と、自動で判定</strong>します。
              その結果、ロック画面には「重要通知」セクションが生成され、そこに本当に大事な連絡だけが表示されるようになります。
            </p>
            <p className="text-[#333333] leading-relaxed">
              2026年5月時点で、この機能が日本語環境でも実用レベルに到達し、
              多くのiPhoneユーザーが恩恵を受け始めています。
            </p>
          </section>

          <section id="how-it-works" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              AIが「重要」と「不要」を自動判定する仕組み
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Apple Intelligenceの優先度判定は、以下の要素を総合的に分析します：
            </p>
            <ul className="list-disc list-inside text-[#333333] mb-4 space-y-2">
              <li><strong>送信者の重要度</strong>：家族や上司からの連絡は優先</li>
              <li><strong>通知の内容</strong>：「緊急」「重要」といったキーワードを検出</li>
              <li><strong>あなたの行動パターン</strong>：いつも確認する通知を学習</li>
              <li><strong>時間帯</strong>：夜間の通知は優先度を下げる傾向</li>
              <li><strong>アプリの種類</strong>：メールやメッセージアプリは優先、ゲームアプリは低優先</li>
            </ul>
            <p className="text-[#333333] leading-relaxed mb-4">
              これらの判定は<strong>すべてあなたのiPhone内で行われ、Appleのサーバーに送信されません</strong>。
              プライバシーを完全に保ったまま、AIの恩恵を受けられるのです。
            </p>
            <p className="text-[#333333] leading-relaxed">
              さらに素晴らしいのは、使い続けるほどAIが学習し、判定精度が上がっていくということ。
              最初は「え、これが重要？」と思うこともあるかもしれませんが、
              1週間も使えば、AIはあなたの「本当に大事な通知」を正確に見分けるようになります。
            </p>
          </section>

          <section id="setup-guide" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              今すぐ始める！設定方法と初期設定のコツ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Apple Intelligenceの優先度自動仕分けを有効にするのは、非常にシンプルです。
              以下の手順に従ってください。
            </p>
            
            <h3 className="text-lg font-bold text-[#333333] mb-3 mt-6">ステップ1：設定アプリを開く</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              iPhoneのホーム画面から「設定」アプリを開きます。
            </p>

            <h3 className="text-lg font-bold text-[#333333] mb-3 mt-6">ステップ2：通知設定に進む</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              「通知」→「通知のグループ化」に進み、「スマートグループ化」をオンにします。
              さらに下にスクロールして「優先度自動仕分け」という項目を探してください。
            </p>

            <h3 className="text-lg font-bold text-[#333333] mb-3 mt-6">ステップ3：優先度自動仕分けをオン</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              「優先度自動仕分け」をオンにします。これだけで完了です。
              すぐに効果が現れ始めます。
            </p>

            <PromptInfoCard
              title="初期設定のコツ"
              items={[
                "最初の3日間は、ロック画面で「重要」と判定された通知をチェックして、AIの判定が合っているか確認しましょう",
                "もし判定が間違っていたら、その通知を長押しして『重要度を下げる』を選択。AIが学習します",
                "逆に『これは重要なのに優先度が低い』と感じたら『重要度を上げる』を選択",
                "1週間ほど使い続けると、AIの精度が劇的に向上します"
              ]}
            />
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Siriに伝えるプロンプト例
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Apple Intelligenceの優先度仕分けは、Siriと組み合わせることで、さらに強力になります。
              以下のプロンプトを試してみてください。
            </p>

            <PromptBlock
              title="特定の人からの通知を常に優先"
              prompt="Siri、〇〇（家族や上司の名前）からの連絡は、いつも優先度を高くして。大事な連絡を見落としたくないから"
            />

            <PromptBlock
              title="仕事の時間帯に通知を整理"
              prompt="Siri、平日の9時から18時は、メールとメッセージアプリだけ優先度を高くして。SNSの通知は後回しでいい"
            />

            <PromptBlock
              title="夜間の通知を自動で低優先に"
              prompt="Siri、夜22時から朝7時までは、ゲームアプリとSNSの通知は全部優先度を下げて。寝る前に見たくない"
            />

            <PromptBlock
              title="通知要約機能を活用"
              prompt="Siri、LINEのグループチャットは1時間ごとに要約して、ロック画面に表示して。全部の通知は見たくない"
            />

            <PromptInfoCard
              title="プロンプト使用時のポイント"
              items={[
                "Siriに話しかける時は『Hey Siri』と言ってから、ゆっくりと指示を伝えてください",
                "複数の指示を一度に伝えると、Siriが混乱することがあります。1つずつ伝えるのがコツです",
                "「〇〇さんからの連絡」「仕事のメール」など、具体的な条件を伝えるほど、AIの判定精度が上がります",
                "設定後、実際の通知で試して、必要に応じて調整してください"
              ]}
            />
          </section>

          <section id="advanced-tips" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              さらに快適にするテクニック
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Apple Intelligenceの優先度仕分けを、さらに活用するテクニックを紹介します。
            </p>

            <h3 className="text-lg font-bold text-[#333333] mb-3 mt-6">テクニック1：集中モードと組み合わせる</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              iPhoneの「集中モード」と優先度仕分けを組み合わせると、さらに強力です。
              例えば、仕事中は「仕事モード」を有効にして、その間は仕事関連の通知だけを優先。
              休日は「プライベートモード」で、家族や友人からの連絡だけを優先、といった使い分けが可能になります。
            </p>

            <h3 className="text-lg font-bold text-[#333333] mb-3 mt-6">テクニック2：通知要約機能を活用</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              「通知要約」機能を有効にすると、複数の通知を1つにまとめて表示してくれます。
              例えば、LINEのグループチャットが10件来ても、「LINEから10件の通知」と1行で表示。
              重要な通知だけ詳細を見る、という使い方ができます。
            </p>

            <h3 className="text-lg font-bold text-[#333333] mb-3 mt-6">テクニック3：定期的にフィードバックを与える</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              AIは学習します。毎日、ロック画面の通知を見て「これは正しい」「これは間違い」とフィードバックを与えることで、
              AIの精度はどんどん上がっていきます。最初は手間に感じるかもしれませんが、1ヶ月も続けば、
              AIはあなたの「本当に大事な通知」を完璧に見分けるようになります。
            </p>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Apple Intelligenceの「優先度自動仕分け」は、スマートフォンユーザーにとって、
              <strong>最も身近で実用的なAI機能</strong>の一つです。
              複雑なプロンプトを覚える必要もなく、設定一つで、AIがあなたの通知を自動で整理してくれます。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              毎日100件以上の通知に埋もれていた人も、これからは「本当に大事な連絡」だけを、
              確実に見落とさずにキャッチできるようになります。
            </p>
            <p className="text-[#333333] leading-relaxed">
              今日から、ぜひこの機能を試してみてください。
              あなたのiPhoneが、より身近で、より便利な相棒に変わる瞬間を体験できるはずです。
            </p>
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
