
import type { Metadata } from 'next'
import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import TableOfContents from "@/components/article/TableOfContents"
import PromptBlock from "@/components/article/PromptBlock"
import ResponseExample from "@/components/article/ResponseExample"
import PromptInfoCard from "@/components/article/PromptInfoCard"
import AffiliateBox from "@/components/cta/AffiliateBox"
import RelatedArticles from "@/components/cta/RelatedArticles"
import { useSEO } from "@/hooks/useSEO"
import { useOGP } from "@/hooks/useOGP"
import { useStructuredData } from "@/hooks/useStructuredData"
'use client'

export const metadata: Metadata = {
  title: '【初心者向け】「ググる」の終焉？Geminiの新機能『Deep Research』でプロ級の調査レポートを自動生成するプロンプト術',
  description: 'Google Geminiの最新機能「Deep Research」を活用し、初心者でも簡単にプロ級の調査レポートを自動生成するプロンプト術を解説。ネット検索の常識を変えるAIリサーチの極意を掴みましょう。',
  keywords: 'Gemini, Deep Research, AI, プロンプト, 調査レポート, 自動生成, 初心者, Google, AI活用, リサーチ',
  openGraph: {
    title: '【初心者向け】「ググる」の終焉？Geminiの新機能『Deep Research』でプロ級の調査レポートを自動生成するプロンプト術',
    description: 'Google Geminiの最新機能「Deep Research」を活用し、初心者でも簡単にプロ級の調査レポートを自動生成するプロンプト術を解説。',
    type: 'article',
    images: ['/images/og-image-gemini-deep-research.png'], // 仮のOGP画像
  },
  twitter: {
    card: 'summary_large_image',
    title: '【初心者向け】「ググる」の終焉？Geminiの新機能『Deep Research』でプロ級の調査レポートを自動生成するプロンプト術',
    description: 'Google Geminiの最新機能「Deep Research」を活用し、初心者でも簡単にプロ級の調査レポートを自動生成するプロンプト術を解説。',
    images: ['/images/og-image-gemini-deep-research.png'], // 仮のOGP画像
  },
}

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
      name: "最新AI活用",
      articles: [
        { title: "AIエージェントで業務自動化！自律型ワークフロー構築プロンプト術", href: "/articles/ai-agent-workflow" },
        { title: "ChatGPT「高度な音声モード」活用術", href: "/articles/chatgpt-voice-beginner" },
        { title: "Vibe Working（バイブ・ワーキング）入門", href: "/articles/vibe-working-beginner" },
      ],
    },
  ],
  copyright: "© 2026 AIプロンプト活用ガイド All Rights Reserved.",
}

const headings = [
  { id: "introduction", text: "「ググる」の常識を変える、Gemini Deep Researchとは？", level: 2 as const },
  { id: "why-deep-research", text: "なぜ今、Deep Researchが必要なのか？", level: 2 as const },
  { id: "prompt-template", text: "初心者が失敗しない「丸投げ」プロンプトの型", level: 2 as const },
  { id: "use-cases", text: "活用シーン別の具体例", level: 2 as const },
  { id: "accuracy-tips", text: "情報の正確性を見極めるコツ", level: 2 as const },
  { id: "conclusion", text: "まとめ：AIリサーチで「調べる」を最適化する", level: 2 as const },
]

const prompts = {
  deepResearch: `以下の目的と条件に基づいて、プロ級の調査レポートを生成してください。

【目的】
{{目的：例：3万円以下で最もコストパフォーマンスの高い炊飯器の比較調査}}

【比較項目】
{{比較項目：例：メーカー、価格帯、機能、消費電力、ユーザーレビュー}}

【出力形式】
{{出力形式：例：Markdown形式の比較表と要約、または箇条書きで詳細情報}}

【その他指示】
・複数の信頼できる情報源から情報を収集し、出典を明記してください。
・初心者にも分かりやすい言葉で説明してください。
・結論として、最も推奨される選択肢とその理由を述べてください。`,

  responseExample: `## 3万円以下で最もコストパフォーマンスの高い炊飯器の比較調査レポート

### 目的
3万円以下の価格帯で、機能性、省エネ性能、ユーザー評価のバランスが取れたコストパフォーマンスの高い炊飯器を特定する。

### 調査概要
Google GeminiのDeep Research機能を用いて、主要メーカーの炊飯器（3万円以下）について、以下の比較項目に基づき調査を実施しました。

### 比較表
| メーカー | モデル名 | 価格帯 | 機能（例） | 消費電力 | ユーザーレビュー（評価点/5点） |
|---|---|---|---|---|---|
| A社 | モデルX | 25,000円 | 圧力IH、少量炊き | 1200W | 4.5 | 
| B社 | モデルY | 28,000円 | IH、早炊き | 1100W | 4.2 | 
| C社 | モデルZ | 22,000円 | マイコン、保温 | 1000W | 3.9 | 

### 各モデルの詳細

#### A社 モデルX
- **特徴**: 圧力IH方式により、もちもちとした食感のご飯が炊ける。少量炊き機能も充実しており、一人暮らしや少人数世帯に最適。
- **ユーザー評価**: 「ご飯が美味しい」「手入れがしやすい」といった高評価が多い。
- **出典**: [A社公式サイト](https://example.com/a-company), [家電レビューサイト1](https://example.com/review1)

#### B社 モデルY
- **特徴**: IH方式で均一な加熱が可能。忙しい朝に便利な早炊き機能が人気。
- **ユーザー評価**: 「操作が簡単」「デザインが良い」といった声が目立つ。
- **出典**: [B社公式サイト](https://example.com/b-company), [家電レビューサイト2](https://example.com/review2)

#### C社 モデルZ
- **特徴**: マイコン方式で手頃な価格が魅力。シンプルな機能で、基本的な炊飯機能を求めるユーザー向け。
- **ユーザー評価**: 「価格が安い」「十分な機能」という意見がある一方、「炊き上がりにムラがある」という声も。
- **出典**: [C社公式サイト](https://example.com/c-company), [家電レビューサイト3](https://example.com/review3)

### 結論と推奨

今回の調査では、**A社 モデルX**が最もコストパフォーマンスに優れていると判断されます。圧力IHによる炊飯品質の高さと、少量炊きなどの便利な機能が充実しており、価格も3万円以下に収まっています。ユーザーレビューでも高い評価を得ており、幅広いユーザーにおすすめできる製品です。

### 出典
[1] A社公式サイト: [https://example.com/a-company](https://example.com/a-company)
[2] 家電レビューサイト1: [https://example.com/review1](https://example.com/review1)
[3] B社公式サイト: [https://example.com/b-company](https://example.com/b-company)
[4] 家電レビューサイト2: [https://example.com/review2](https://example.com/review2)
[5] C社公式サイト: [https://example.com/c-company](https://example.com/c-company)
[6] 家電レビューサイト3: [https://example.com/review3](https://example.com/review3)
`,
}

const relatedArticles = [
  {
    title: "【初心者向け】AIが「じっくり考えて」から答えてくれる！Copilotの『Think Deeper』で失敗しない相談術",
    description: "CopilotのThink Deeper機能で、AIがより深く思考し、質の高い回答を導き出すプロンプト術を解説。",
    href: "/articles/copilot-think-deeper-beginner",
  },
  {
    title: "【初心者向け】Google ドライブが賢くなった！新機能『AI概要（AI Overviews）』で大量のファイルから答えを即座に見つけるプロンプト術",
    description: "Google ドライブのAI概要機能で、大量のドキュメントから必要な情報を素早く見つけるプロンプト術を紹介。",
    href: "/articles/google-drive-ai-overview",
  },
]

export default function GeminiDeepResearchPage() {
  useSEO({
    title: '【初心者向け】Geminiの『Deep Research』でプロ級の調査レポートを自動生成',
    description: 'Google Geminiの最新機能「Deep Research」を活用し、初心者でも簡単にプロ級の調査レポートを自動生成するプロンプト術を解説。ネット検索の常識を変えるAIリサーチの極意を掴みましょう。',
    keywords: 'Gemini, Deep Research, AI, プロンプト, 調査レポート, 自動生成, 初心者, Google, AI活用, リサーチ, 情報収集, ネット検索'
  });

  useOGP({
    title: '【初心者向け】Geminiの『Deep Research』でプロ級の調査レポートを自動生成',
    description: 'Google Geminiの最新機能「Deep Research」を活用し、初心者でも簡単にプロ級の調査レポートを自動生成するプロンプト術を解説。',
    type: 'article',
    image: '/images/og-image-gemini-deep-research.png',
    url: typeof window !== 'undefined' ? window.location.href : 'https://example.com/articles/gemini-deep-research-beginner'
  });

  useStructuredData({
    title: '【初心者向け】「ググる」の終焉？Geminiの新機能『Deep Research』でプロ級の調査レポートを自動生成するプロンプト術',
    description: 'Google Geminiの最新機能「Deep Research」を活用し、初心者でも簡単にプロ級の調査レポートを自動生成するプロンプト術を解説。ネット検索の常識を変えるAIリサーチの極意を掴みましょう。',
    author: 'AIプロンプト活用ガイド',
    datePublished: '2026-07-10T00:00:00Z',
    dateModified: '2026-07-10T00:00:00Z',
    image: '/images/og-image-gemini-deep-research.png',
    url: typeof window !== 'undefined' ? window.location.href : 'https://example.com/articles/gemini-deep-research-beginner'
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title="【初心者向け】「ググる」の終焉？Geminiの新機能『Deep Research』でプロ級の調査レポートを自動生成するプロンプト術"
          eyecatchSrc="/images/og-image-gemini-deep-research.png"
          createdAt="2026年7月10日"
          updatedAt="2026年7月10日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「ググる」の常識を変える、Gemini Deep Researchとは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              インターネットで何かを調べるとき、私たちはこれまで検索エンジンにキーワードを入力し、表示された複数のウェブサイトを巡回し、必要な情報を取捨選択し、最終的に自分なりの結論を導き出すというプロセスを繰り返してきました。しかし、Google Geminiの最新機能<strong class="font-bold">「Deep Research」</strong>は、この「調べる」という行為そのものを根本から変えようとしています。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              Deep Researchは、たった一つの指示を与えるだけで、AIが複数の情報源を自律的に調査し、その結果を構造化されたレポートとして数分で生成します。まるで専属のリサーチアシスタントを雇ったかのように、正確で深い情報を手に入れることが可能になるのです。本記事では、ITに不慣れな初心者の方でも、この画期的な機能を最大限に活用し、プロ級の調査レポートを自動生成するためのプロンプト術を詳しく解説します。
            </p>
          </section>

          <section id="why-deep-research" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              なぜ今、Deep Researchが必要なのか？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              情報過多の現代において、信頼できる情報を効率的に見つけ出すことはますます困難になっています。従来の検索では、情報の真偽を見極めるための時間と労力が膨大にかかり、特に専門知識がない分野では、どの情報が正しいのか判断に迷うことも少なくありませんでした。Deep Researchは、この課題に対する強力な解決策を提供します。
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-bold mb-2">Deep Researchが解決する課題</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong class="font-bold">情報収集の効率化:</strong> 複数のサイトを巡回する手間を省き、短時間で網羅的な情報を取得。</li>
                <li><strong class="font-bold">情報の信頼性向上:</strong> AIが複数の情報源を比較検討し、客観的なレポートを生成。出典も明記されるため、情報の検証が容易。</li>
                <li><strong class="font-bold">専門知識の補完:</strong> 専門分野でなくても、AIが専門的な視点から情報を整理・分析し、深い洞察を提供。</li>
              </ul>
            </div>
            <p className="text-[#333333] leading-relaxed mb-4">
              これにより、私たちは「情報を探す」ことに時間を費やすのではなく、「情報を活用する」ことに集中できるようになります。旅行の計画、家電製品の比較検討、仕事での市場調査など、あらゆるシーンでその真価を発揮するでしょう。
            </p>
          </section>

          <section id="prompt-template" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者が失敗しない「丸投げ」プロンプトの型
            </h2>
            <p className="text-[#333333] leading-relaxed mb-8">
              Deep Researchを効果的に活用するための鍵は、AIに「何を」「どのように」調べてほしいかを明確に伝えるプロンプトです。ここでは、初心者でも簡単にプロ級のレポートを生成できる「丸投げ」プロンプトの型を紹介します。
            </p>

            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                Deep Research プロンプトテンプレート
              </h3>
              <PromptInfoCard type="response" title="期待される動作">
                <p>
                  AIが指定された目的、比較項目、出力形式に基づいて、複数の情報源から情報を収集・分析し、構造化された調査レポートを生成します。レポートには出典が明記され、初心者にも理解しやすい言葉で説明されます。
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.deepResearch} />
              <ResponseExample response={prompts.responseExample} />
            </div>
            <p className="text-[#333333] leading-relaxed mb-4">
              このテンプレートのポイントは、<strong class="font-bold">「目的」「比較項目」「出力形式」</strong>を具体的に指定することです。これにより、AIは調査の焦点を絞り、ユーザーが求める形式で情報を整理することができます。特に「その他指示」で「出典を明記する」と指示することで、情報の信頼性を高めることが可能です。
            </p>
          </section>

          <section id="use-cases" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              活用シーン別の具体例
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Deep Researchは、日常生活からビジネスまで、幅広いシーンで活用できます。具体的なプロンプト例とともに、その応用力を見ていきましょう。
            </p>

            <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
              例1：家電製品の比較検討
            </h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              「3万円以下で一番コスパの良い炊飯器を、5つのメーカーで比較して。価格、機能、消費電力、ユーザーレビューを比較項目とし、Markdown形式の比較表と要約を出力してください。」
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              このプロンプトにより、AIは指定された条件に合致する炊飯器を調査し、比較表と各モデルの詳細、推奨理由までをまとめてくれます。家電量販店で迷う時間が大幅に削減されるでしょう。
            </p>

            <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
              例2：旅行計画の立案
            </h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              「子連れで行く沖縄3泊4日の穴場スポットを、SNSの口コミも含めて調査して。移動手段、宿泊施設、おすすめのアクティビティ、食事処を提案し、各スポットの子供向け情報を詳細に含めてください。」
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              AIが家族構成や旅行期間を考慮し、SNSのリアルな口コミ情報まで含めて、パーソナライズされた旅行プランを提案します。ガイドブックを読み込む手間が省け、より充実した旅行計画が立てられます。
            </p>

            <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
              例3：仕事の市場調査
            </h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              「最新のAIツール市場における競合他社の動向を調査し、主要3社の製品特徴、価格戦略、ターゲット顧客、強み・弱みを比較レポートとしてまとめてください。出典を明記し、今後の市場トレンド予測も含めてください。」
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              ビジネスにおける市場調査も、Deep Researchを使えば迅速かつ網羅的に行えます。競合分析や新規事業の企画立案など、戦略的な意思決定を強力にサポートします。
            </p>
          </section>

          <section id="accuracy-tips" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              情報の正確性を見極めるコツ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              AIが生成するレポートは非常に便利ですが、その情報の正確性を最終的に判断するのは私たち人間です。Deep Researchが提示する情報をより信頼性の高いものとして活用するためのコツを解説します。
            </p>
            <ul className="list-disc list-inside text-[#333333] space-y-3 mb-6">
              <li>
                <strong class="font-bold">出典の確認:</strong>
                AIがレポート内で明記する出典URLを必ず確認しましょう。公式サイトや信頼できるニュースサイト、専門機関のレポートなど、一次情報に近い情報源が示されているかを確認することが重要です。
              </li>
              <li>
                <strong class="font-bold">複数の情報源との比較:</strong>
                AIが提示した情報だけでなく、可能であれば自身でもいくつかの情報源をチェックし、内容に大きな乖離がないかを確認することで、より客観的な判断ができます。
              </li>
              <li>
                <strong class="font-bold">最新性の確認:</strong>
                特に技術や市場動向に関する情報は陳腐化が早いため、レポート内の情報がいつ時点のものであるか、最新の情報が反映されているかを確認しましょう。
              </li>
              <li>
                <strong class="font-bold">批判的思考:</strong>
                AIは学習データに基づいて情報を生成するため、偏りや誤情報が含まれる可能性もゼロではありません。常に「本当にそうなのか？」という批判的な視点を持つことが大切です。
              </li>
            </ul>
            <p className="text-[#333333] leading-relaxed mb-4">
              Deep Researchは強力なツールですが、あくまで私たちのリサーチを「補助」するものです。AIと人間が協力することで、最も効率的かつ正確な情報収集が可能になります。
            </p>
          </section>

          <section id="conclusion" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ：AIリサーチで「調べる」を最適化する
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Google GeminiのDeep Researchは、これまでの「ググる」という行為を劇的に進化させる可能性を秘めています。初心者でも適切なプロンプトを用いることで、短時間で質の高い調査レポートを自動生成し、情報収集の常識を覆すことができるでしょう。
            </p>
            <p className="text-[#333333] leading-relaxed">
              「1問1答」のチャットから「全自動調査」へ。AIが自律的に情報を深掘りし、構造化された形で提供してくれる時代が到来しました。ぜひ、この新しいAIリサーチの力を活用し、あなたの情報収集プロセスを最適化してみてください。
            </p>
          </section>

          <section id="related">
            <RelatedArticles articles={relatedArticles} />
          </section>
        </div>
      </article>
    </PageLayout>
  )
}
