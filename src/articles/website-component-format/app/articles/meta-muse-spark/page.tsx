import type { Metadata } from 'next'
import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import TableOfContents from "@/components/article/TableOfContents"
import PromptBlock from "@/components/article/PromptBlock"
import PromptInfoCard from "@/components/article/PromptInfoCard"
import ResponseExample from "@/components/article/ResponseExample"
import AffiliateBox from "@/components/cta/AffiliateBox"
import RelatedArticles from "@/components/cta/RelatedArticles"

export const metadata: Metadata = {
  title: '【初心者向け】Metaの最新AI『Muse Spark』で実現！「指示ひとつ」でマルチメディアを自在に操るプロンプト術',
  description: 'Metaが新たに発表したフラッグシップAIモデル『Muse Spark』。画像・動画・音声・テキストを一つのモデルでシームレスに処理できる圧倒的な「マルチモーダル性能」と、複雑なタスクを自律的にこなす「エージェント機能」を活用するための初心者向けプロンプト術を解説します。',
  keywords: 'Meta, Muse Spark, AIエージェント, マルチモーダル, プロンプト, 初心者, 動画生成, 自動化',
  openGraph: {
    title: '【初心者向け】Metaの最新AI『Muse Spark』で実現！「指示ひとつ」でマルチメディアを自在に操るプロンプト術',
    description: 'Metaが新たに発表したフラッグシップAIモデル『Muse Spark』。画像・動画・音声・テキストを一つのモデルでシームレスに処理できる圧倒的な「マルチモーダル性能」と、複雑なタスクを自律的にこなす「エージェント機能」を活用するための初心者向けプロンプト術を解説します。',
    type: 'article',
    images: ['/images/og-image-meta-muse-spark.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '【初心者向け】Metaの最新AI『Muse Spark』で実現！「指示ひとつ」でマルチメディアを自在に操るプロンプト術',
    description: 'Metaの最新AI『Muse Spark』を活用してマルチメディアを自在に操るプロンプト術を解説。',
    images: ['/images/og-image-meta-muse-spark.png'],
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
  { id: "overview", text: "概要", level: 2 as const },
  { id: "what-is-muse-spark", text: "Muse Sparkで何が変わるのか？", level: 2 as const },
  { id: "prompt-examples", text: "今日から使える！Muse Spark活用プロンプト例", level: 2 as const },
  { id: "prompt-1", text: "1. 動画からSNS投稿セットを自動生成", level: 3 as const },
  { id: "prompt-2", text: "2. 複雑なスケジュール管理と手配", level: 3 as const },
  { id: "prompt-3", text: "3. パーソナライズされた学習アシスタント", level: 3 as const },
  { id: "prompt-4", text: "4. アイデアから企画書・プレゼン資料への一気通貫", level: 3 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
]

const prompts = {
  prompt1: `この【動画の長さや内容】の動画を分析して、Instagramのリール用のキャプションを3パターン作成してください。さらに、動画のテンポに合う音楽のジャンルと、目を引くハッシュタグも5つ提案してください。`,
  response1: `動画の分析が完了しました。

【提案するキャプション3パターン】
1. 「休日のリフレッシュに最適！🍃 お気に入りのカフェでのんびりタイム☕️ #カフェ巡り #週末の過ごし方」
2. 「見ているだけで癒される…✨ 自然の音と美味しいコーヒーで最高の休日を。 #癒し動画 #リラックス」
3. 「隠れ家カフェ見つけました🤫 落ち着いた空間でリフレッシュしませんか？ #おすすめスポット #休日」

【おすすめの音楽ジャンル】
・Lo-Fi Hip Hop（動画のゆったりとしたテンポに合います）
・アコースティックギターのインストゥルメンタル

【目を引くハッシュタグ5選】
#週末の過ごし方 #リラックスタイム #おすすめスポット #癒し動画 #カフェ巡り`,

  prompt2: `【出発日】から【日数】日間、【目的地】に出張に行きます。予算【予算金額】以内で【希望の条件】のホテルを探して候補を3つ出してください。決まったら、その周辺でおすすめのランチスポットもリストアップしてください。`,
  response2: `5月15日からの福岡出張ですね。博多駅近くで予算3万円以内のホテル候補を3つピックアップしました。

【ホテル候補】
1. ホテルA（博多駅徒歩3分、1泊8,500円）- 大浴場あり
2. ホテルB（博多駅徒歩5分、1泊9,000円）- 朝食バイキングが人気
3. ホテルC（博多駅直結、1泊12,000円）- アクセス抜群

ホテルA周辺のおすすめランチスポットはこちらです。

【おすすめランチスポット】
・博多ラーメン〇〇（濃厚豚骨ラーメン）
・もつ鍋△△（ランチ限定もつ鍋定食）
・海鮮食堂××（新鮮なゴマサバ定食）`,

  prompt3: `この【ファイル名】の内容を、【ターゲット読者】でもわかるように図解を交えて解説してください。最後に、理解度を確認するためのクイズを3問作成してください。`,
  response3: `PDF資料「最新AI技術動向」の内容を、中学2年生向けに解説します。

【解説】
AI（人工知能）は、人間の脳のように学習し、考えることができるコンピュータのプログラムです。最近のAIは、文章を書いたり、絵を描いたりすることがとても得意になりました。

（ここにAIの仕組みを説明する簡単な図解が生成されます）

【確認クイズ】
Q1. AIとは何の略ですか？
Q2. 最近のAIが得意なことは何ですか？
Q3. AIはどのようにして賢くなりますか？`,

  prompt4: `【企画のテーマ】についての新しいアイデアを3つ出してください。その中で最も面白そうなものを一つ選び、具体的な企画書（背景、目的、ターゲット、スケジュール）を作成し、最後にプレゼン用のスライド構成（5枚）を提案してください。`,
  response4: `「社内コミュニケーション活性化」についてのアイデアを3つ提案します。

1. バーチャルコーヒーブレイク（ランダムな社員同士の15分オンライン雑談）
2. スキルシェア・ワークショップ（社員が趣味や特技を教え合う月1回のイベント）
3. サンクスカード・アプリ導入（感謝の気持ちをポイント化して贈り合う）

最も面白そうな「スキルシェア・ワークショップ」の企画書を作成します。

【企画書：スキルシェア・ワークショップ】
・背景：リモートワーク増加による部署間の交流減少
・目的：社員同士の相互理解を深め、コミュニケーションを活性化する
・ターゲット：全社員
・スケジュール：来月より毎月第3金曜日の夕方に開催

【プレゼン用スライド構成（5枚）】
1. タイトルと提案の背景
2. 課題：部署間コミュニケーションの不足
3. 解決策：スキルシェア・ワークショップの提案
4. 実施内容と期待される効果
5. 今後のスケジュールと必要なリソース`,
}

const relatedArticles = [
  {
    title: "AIエージェントで業務自動化！自律型ワークフロー構築プロンプト術",
    description: "単なるチャットから自律的に動くAIエージェントへ。複数のタスクを連携させて自動完結させる構築方法を解説します。",
    href: "/articles/ai-agent-workflow",
  },
  {
    title: "面倒な指示はAIに覚えさせよう！ChatGPT「Skills」超入門",
    description: "毎回同じようなプロンプトを打ち込む手間から解放される、ChatGPTの「Skills」機能の初心者向け解説ガイドです。",
    href: "/articles/chatgpt-skills-beginner",
  },
]

export default function MetaMuseSparkPage() {
  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title="【初心者向け】Metaの最新AI『Muse Spark』で実現！「指示ひとつ」でマルチメディアを自在に操るプロンプト術"
          eyecatchSrc="/images/og-image-meta-muse-spark.png"
          createdAt="2026年5月9日"
          updatedAt="2026年5月9日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="overview" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              概要
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Metaが新たに発表したフラッグシップAIモデル『Muse Spark』。これまでのLlamaシリーズとは一線を画す、Meta独自の非公開（クローズド）モデルとして登場しました。最大の特徴は、画像・動画・音声・テキストを一つのモデルでシームレスに処理できる圧倒的な「マルチモーダル性能」と、複雑なタスクを自律的にこなす「エージェント機能」です。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              本記事では、初心者の方でも今日から使える、Muse Sparkの能力を最大限に引き出すための具体的なプロンプト術を解説します。
            </p>
          </section>

          <section id="what-is-muse-spark" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Muse Sparkで何が変わるのか？
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-3 mb-6">
              <li>
                <strong>「見る・聞く・書く」が同時に可能:</strong>
                動画の内容を理解しながら、その雰囲気に合わせたBGMを生成し、解説テキストを添えるといった作業が一度の指示で完結します。
              </li>
              <li>
                <strong>圧倒的な低コスト・高精度:</strong>
                従来のLlama 4と比較しても、より少ない計算リソースで、より精度の高い回答が得られるよう設計されています。
              </li>
              <li>
                <strong>自律的なタスク実行:</strong>
                「来週の旅行の計画を立てて、ホテルを予約し、現地の天気に合わせたパッキングリストを作って」といった、複数のステップが必要な指示も一気にこなします。
              </li>
            </ul>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              今日から使える！Muse Spark活用プロンプト例
            </h2>
            <p className="text-[#333333] leading-relaxed mb-8">
              Muse Sparkのマルチモーダル性能とエージェント機能を活かした、実践的なプロンプトを4つ紹介します。
            </p>

            <div id="prompt-1" className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                1. 動画からSNS投稿セットを自動生成
              </h3>
              <PromptInfoCard type="usecase" title="活用シーン">
                <p>
                  撮影した動画をSNSに投稿する際、キャプションやハッシュタグ、BGMの選定を一度に行いたい場合。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="tips" title="プロンプトのコツ">
                <p>
                  動画の長さや内容を具体的に指定し、必要なアウトプット（キャプション数、ハッシュタグ数など）を明確に伝えます。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="response" title="期待される動作">
                <p>
                  動画の内容を分析し、指定された条件に合ったキャプション、音楽ジャンル、ハッシュタグを提案します。
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.prompt1} />
              <ResponseExample response={prompts.response1} />
            </div>

            <div id="prompt-2" className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                2. 複雑なスケジュール管理と手配
              </h3>
              <PromptInfoCard type="usecase" title="活用シーン">
                <p>
                  出張や旅行の計画において、ホテル探しから周辺情報の収集までを一括で依頼したい場合。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="tips" title="プロンプトのコツ">
                <p>
                  日程、目的地、予算、希望条件などの変数を明確にし、次のアクション（ランチスポットのリストアップ）も指示に含めます。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="response" title="期待される動作">
                <p>
                  条件に合うホテル候補を提示し、さらにその周辺のランチスポットも合わせて提案します。
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.prompt2} />
              <ResponseExample response={prompts.response2} />
            </div>

            <div id="prompt-3" className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                3. パーソナライズされた学習アシスタント
              </h3>
              <PromptInfoCard type="usecase" title="活用シーン">
                <p>
                  難しい資料を特定のターゲット（例：中学生）向けにわかりやすく解説し、理解度を確認したい場合。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="tips" title="プロンプトのコツ">
                <p>
                  対象となるファイルやテキストを指定し、ターゲット読者のレベルに合わせて解説のトーンを調整させます。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="response" title="期待される動作">
                <p>
                  資料の内容を平易な言葉で解説し、図解の生成（または提案）と確認クイズを作成します。
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.prompt3} />
              <ResponseExample response={prompts.response3} />
            </div>

            <div id="prompt-4" className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                4. アイデアから企画書・プレゼン資料への一気通貫
              </h3>
              <PromptInfoCard type="usecase" title="活用シーン">
                <p>
                  新しい企画のアイデア出しから、具体的な企画書の作成、さらにプレゼン用のスライド構成までを一気に進めたい場合。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="tips" title="プロンプトのコツ">
                <p>
                  アイデア出し、選択、企画書作成、スライド構成という複数のステップを1つのプロンプトにまとめます。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="response" title="期待される動作">
                <p>
                  アイデアを提案し、その中から1つを選んで企画書を作成し、最後にスライドの構成案を提示します。
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.prompt4} />
              <ResponseExample response={prompts.response4} />
            </div>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Metaの『Muse Spark』は、AIを単なる「相談相手」から、実務をこなす「実行パートナー」へと進化させました。画像、動画、音声、テキストを横断的に処理できる能力と、自律的にタスクを遂行するエージェント機能を組み合わせることで、私たちの作業効率は飛躍的に向上します。
            </p>
            <p className="text-[#333333] leading-relaxed">
              まずは身近なルーチンワークや、これまで複数のツールを使い分けていた作業から、Muse Sparkに「丸投げ」してみることから始めてみましょう。
            </p>
          </section>

          <AffiliateBox />

          <section id="related">
            <RelatedArticles articles={relatedArticles} />
          </section>
        </div>
      </article>
    </PageLayout>
  )
}
