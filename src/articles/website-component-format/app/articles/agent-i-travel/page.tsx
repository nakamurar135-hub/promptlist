import type { Metadata } from 'next'
import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import TableOfContents from "@/components/article/TableOfContents"
import PromptBlock from "@/components/article/PromptBlock"
import ResponseExample from "@/components/article/ResponseExample"
import PromptInfoCard from "@/components/article/PromptInfoCard"
import AffiliateBox from "@/components/cta/AffiliateBox"
import RelatedArticles from "@/components/cta/RelatedArticles"

export const metadata: Metadata = {
  title: '【初心者向け】AIがあなたの代わりに「予約」まで完了！最新AIエージェント『Agent i』のおでかけプロンプト術',
  description: '2026年5月提供開始の統合AIエージェント「Agent i」の目玉機能「おでかけ」機能を先取り解説。AIと会話するだけで旅行やレストランの予約が完結する未来の活用術を紹介します。',
  keywords: 'Agent i, AIエージェント, 予約自動化, 初心者向け, プロンプト, おでかけ',
  openGraph: {
    title: '【初心者向け】AIがあなたの代わりに「予約」まで完了！最新AIエージェント『Agent i』のおでかけプロンプト術',
    description: '2026年5月提供開始の統合AIエージェント「Agent i」の目玉機能「おでかけ」機能を先取り解説。AIと会話するだけで旅行やレストランの予約が完結する未来の活用術を紹介します。',
    type: 'article',
    images: ['/images/og-image-nano-banana-2.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '【初心者向け】AIがあなたの代わりに「予約」まで完了！最新AIエージェント『Agent i』のおでかけプロンプト術',
    description: '2026年5月提供開始の統合AIエージェント「Agent i」の目玉機能「おでかけ」機能を先取り解説。AIと会話するだけで旅行やレストランの予約が完結する未来の活用術を紹介します。',
    images: ['/images/og-image-nano-banana-2.png'],
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
  { id: "overview", text: "「調べる」から「やる」へ進化するAI", level: 2 as const },
  { id: "target", text: "こんな方におすすめ", level: 2 as const },
  { id: "features", text: "「Agent i」のここがすごい！", level: 2 as const },
  { id: "prompt-1", text: "実践プロンプト1：レストラン予約", level: 2 as const },
  { id: "prompt-2", text: "実践プロンプト2：旅行プランの作成と予約", level: 2 as const },
  { id: "prompt-3", text: "実践プロンプト3：スケジュール調整と予約の連携", level: 2 as const },
  { id: "prompt-4", text: "実践プロンプト4：予約のキャンセルと変更", level: 2 as const },
  { id: "safety", text: "初心者も安心の「確認モード」", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
]

const prompts = {
  restaurant: `来週の【希望の曜日や日付を入力】に、【希望の場所を入力】で美味しい【希望の料理ジャンルを入力】を食べたいです。予算は1人【希望の予算を入力】円以内で、空いているお店を3つ探して。気に入ったらそのまま予約までお願いね。`,
  restaurantResponse: `承知いたしました。来週の土曜日に横浜で、予算1人5,000円以内のイタリアンレストランを3つピックアップしました。

1. **トラットリア・ヨコハマ** (評価: 4.5/5) - 海が見えるテラス席あり。現在19:00に空席があります。
2. **ピッツェリア・マーレ** (評価: 4.3/5) - 本格薪窯ピザが人気。現在18:30に空席があります。
3. **リストランテ・ルナ** (評価: 4.4/5) - 落ち着いた雰囲気の個室あり。現在19:30に空席があります。

どのお店がよろしいでしょうか？お店を選んでいただければ、そのまま予約手続きを進めます。`,

  travel: `家族【人数を入力】人で【希望の旅行先を入力】旅行に行きたい。予算は全体で【希望の予算を入力】円以内で、日程は【希望の日程を入力】を予定しています。飛行機とホテルをセットで一番安いプランを探して、予約の準備ができたら教えて。`,
  travelResponse: `家族4人での北海道旅行ですね。予算20万円以内、8月10日〜12日の2泊3日で、最もお得なフライトとホテルのセットプランをお探ししました。

**【提案プラン】**
- **フライト:** 往路 8/10 09:00 羽田発 → 10:30 新千歳着 / 復路 8/12 18:00 新千歳発 → 19:40 羽田着 (LCC利用)
- **ホテル:** 札幌駅直結「ホテル・サッポロ・セントラル」 ファミリールーム 2泊 (朝食付き)
- **合計金額:** 約175,000円（予算内）

こちらのプランで予約の準備を進めてよろしいでしょうか？よろしければ「予約する」とお知らせください。最終確認画面をご案内します。`,

  schedule: `今週末の【希望の曜日を入力】に、【同行者の名前を入力】と映画を見に行きます。映画館の予約をして、その後近くのカフェも予約して。スケジュールが決まったら、カレンダーにも登録しておいて。`,
  scheduleResponse: `今週末の日曜日に、佐藤さんと映画とカフェですね。承知いたしました。

**【スケジュール案】**
- **13:00 - 15:00:** 映画「【映画タイトル】」鑑賞（〇〇シネマズ、ペアシート予約完了）
- **15:15 - 17:00:** カフェ「カフェ・ド・〇〇」でティータイム（窓際席予約完了）

両方の予約手続きが完了し、Googleカレンダーにも「映画＆カフェ（佐藤さんと）」として登録いたしました。予約完了メールもフォルダに整理してあります。`,

  cancel: `【予約したサービス名を入力】の予約をキャンセルして。代わりに、【変更後の希望日時を入力】で同じ条件で予約し直して。`,
  cancelResponse: `承知いたしました。トラットリア・ヨコハマの来週土曜日の予約をキャンセルし、代わりに再来週の土曜日19:00で同じ条件（2名、予算5,000円以内）で予約を取り直しました。

キャンセル完了通知と、新しい予約の確認通知がメールに届いておりますので、ご確認ください。カレンダーの予定も自動的に更新しておきました。`,
}

const relatedArticles = [
  {
    title: "AIエージェントで業務自動化！自律型ワークフロー構築プロンプト術",
    description: "単なるチャットから自律的に動くAIエージェントへ。複数のタスクを連携させて自動完結させる方法。",
    href: "/articles/ai-agent-workflow",
  },
  {
    title: "ChatGPT「高度な音声モード」活用術",
    description: "まるで人間と話しているような自然な会話ができるChatGPTの音声機能の使い方。",
    href: "/articles/chatgpt-voice-beginner",
  },
]

export default function AgentITravelPage() {
  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title="【初心者向け】AIがあなたの代わりに「予約」まで完了！最新AIエージェント『Agent i』のおでかけプロンプト術"
          eyecatchSrc="/images/og-image-nano-banana-2.png"
          createdAt="2026年5月3日"
          updatedAt="2026年5月3日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="overview" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「調べる」から「やる」へ進化するAI
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年5月20日から提供が開始される統合AIエージェント「Agent i」。この最新AIの目玉機能が、旅行やレストランの手配を自動で行う「おでかけ」機能です。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              これまでのAIは「おすすめのレストランを教えて」と聞くと候補を教えてくれる「調べる」までのサポートでしたが、Agent iは「予約までしておいて」の一言で、実際の予約手続きまでを代行します。PCやスマホでの複雑な予約サイトの操作が苦手な方でも、AIと会話するだけで計画が完結する未来の活用術を紹介します。
            </p>
          </section>

          <section id="target" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              こんな方におすすめ
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-3 mb-6">
              <li>ネットでの宿泊予約やレストラン予約の操作が難しくて、いつも家族に頼んでいる人</li>
              <li>複数のサイトを見比べて安いプランを探すのが面倒だと感じている初心者</li>
              <li>「〇〇に行きたい」という曖昧な要望を、具体的なスケジュールに変えたい人</li>
            </ul>
          </section>

          <section id="features" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「Agent i」のここがすごい！
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <ul className="list-disc list-inside space-y-4 text-[#333333]">
                <li>
                  <strong>「調べる」から「やる」へ:</strong>
                  検索してURLをクリックして……という手間をAIが肩代わり。「予約までしておいて」の一言で完結します。
                </li>
                <li>
                  <strong>複数の機能を一括操作:</strong>
                  カレンダーへの登録、地図でのルート確認、予約確認メールの整理をAIが裏側で自動連携してくれます。
                </li>
                <li>
                  <strong>安心の「確認モード」:</strong>
                  勝手に予約されるのが怖い初心者向けに、「最終確認のボタンを押すだけ」にする安全な使い方も可能です。
                </li>
              </ul>
            </div>
          </section>

          <section id="prompt-1" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              実践プロンプト1：レストラン予約
            </h2>
            <p className="text-[#333333] leading-relaxed mb-8">
              条件を伝えて候補を出してもらい、そのまま予約に進むプロンプトです。
            </p>

            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <PromptInfoCard type="usecase" title="利用シーン">
                <p>週末のディナーやランチのお店を探して予約したいとき。</p>
              </PromptInfoCard>
              <PromptInfoCard type="tips" title="使い方のコツ">
                <p>予算や人数、希望のジャンルを具体的に伝えると、より好みに合ったお店を提案してくれます。</p>
              </PromptInfoCard>
              <PromptInfoCard type="response" title="期待される動作">
                <p>AIが条件に合うお店を提案し、選んだお店の予約手続きを代行します。</p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.restaurant} />
              <ResponseExample response={prompts.restaurantResponse} />
            </div>
          </section>

          <section id="prompt-2" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              実践プロンプト2：旅行プランの作成と予約
            </h2>
            <p className="text-[#333333] leading-relaxed mb-8">
              飛行機とホテルをセットで探し、最適なプランを予約するプロンプトです。
            </p>

            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <PromptInfoCard type="usecase" title="利用シーン">
                <p>家族旅行や出張の計画を立てて、交通機関と宿泊先をまとめて予約したいとき。</p>
              </PromptInfoCard>
              <PromptInfoCard type="tips" title="使い方のコツ">
                <p>「一番安いプラン」や「駅近のホテル」など、優先したい条件を伝えるとスムーズです。</p>
              </PromptInfoCard>
              <PromptInfoCard type="response" title="期待される動作">
                <p>AIが複数のサイトを比較して最適なプランを提示し、予約の準備を整えます。</p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.travel} />
              <ResponseExample response={prompts.travelResponse} />
            </div>
          </section>

          <section id="prompt-3" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              実践プロンプト3：スケジュール調整と予約の連携
            </h2>
            <p className="text-[#333333] leading-relaxed mb-8">
              複数の予定を組み合わせて予約し、カレンダーにも自動で登録するプロンプトです。
            </p>

            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <PromptInfoCard type="usecase" title="利用シーン">
                <p>映画の後に食事に行くなど、複数の予定を連続して入れたいとき。</p>
              </PromptInfoCard>
              <PromptInfoCard type="tips" title="使い方のコツ">
                <p>「カレンダーにも登録して」と一言添えるだけで、スケジュール管理まで自動化できます。</p>
              </PromptInfoCard>
              <PromptInfoCard type="response" title="期待される動作">
                <p>AIが複数の予約を完了させ、Googleカレンダーなどのアプリに予定を追加します。</p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.schedule} />
              <ResponseExample response={prompts.scheduleResponse} />
            </div>
          </section>

          <section id="prompt-4" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              実践プロンプト4：予約のキャンセルと変更
            </h2>
            <p className="text-[#333333] leading-relaxed mb-8">
              急な予定変更の際にも、AIに頼めばキャンセルと再予約を同時に行ってくれます。
            </p>

            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <PromptInfoCard type="usecase" title="利用シーン">
                <p>予定が変更になり、予約をキャンセルして別の日程で取り直したいとき。</p>
              </PromptInfoCard>
              <PromptInfoCard type="tips" title="使い方のコツ">
                <p>キャンセルと再予約を同時に指示することで、手間を大幅に省けます。</p>
              </PromptInfoCard>
              <PromptInfoCard type="response" title="期待される動作">
                <p>AIが既存の予約をキャンセルし、新しい条件で予約を取り直します。</p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.cancel} />
              <ResponseExample response={prompts.cancelResponse} />
            </div>
          </section>

          <section id="safety" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者も安心の「確認モード」
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              AIに勝手に予約や決済をされるのが不安な方のために、Agent iには「確認モード」が搭載されています。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              このモードをオンにしておけば、AIは予約の直前まで準備を進め、最後に「この内容で予約を確定してよろしいですか？」と確認画面を表示してくれます。ユーザーは内容を確認して「確定」ボタンを押すだけなので、安心して利用できます。
            </p>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Agent iの登場により、AIは単なる「相談相手」から「頼れる秘書」へと進化しました。面倒な予約作業はAIに任せて、より豊かな時間を楽しみましょう。
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
