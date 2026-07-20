import { useSEO } from "@/hooks/useSEO"
import { useOGP } from "@/hooks/useOGP"
import { useStructuredData } from "@/hooks/useStructuredData"
import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import TableOfContents from "@/components/article/TableOfContents"
import PromptBlock from "@/components/article/PromptBlock"
import ResponseExample from "@/components/article/ResponseExample"
import PromptInfoCard from "@/components/article/PromptInfoCard"
import AffiliateBox from "@/components/cta/AffiliateBox"
import RelatedArticles from "@/components/cta/RelatedArticles"



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
        { title: "AIが「自分専用の家庭教師」に！Gemini『Study Notebooks』で苦手分野をゼロにするプロンプト術", href: "/articles/gemini-study-notebooks-beginner" },
        { title: "AIが「家計の味方」に！新Google Financeの『Key Moments』で投資ニュースを3秒で理解するプロンプト術", href: "/articles/google-finance-ai-beginner" },
        { title: "AIが「あなたのデスク」で仕事する！ChatGPT Workで事務作業を完結させるプロンプト術", href: "/articles/chatgpt-work-beginner" },
      ],
    },
  ],
  copyright: "© 2026 AIプロンプト活用ガイド All Rights Reserved.",
}

const headings = [
  { id: "introduction", text: "「AIに教わる」から「AIと一緒に学ぶ」へ", level: 2 as const },
  { id: "what-is-study-notebooks", text: "Gemini『Study Notebooks』とは？", level: 2 as const },
  { id: "why-different", text: "従来の学習方法との違い", level: 2 as const },
  { id: "how-to-use", text: "実践！『Study Notebooks』を使いこなすプロンプト術", level: 2 as const },
  { id: "prompt-1", text: "プロンプト1：診断クイズで弱点を見つける", level: 3 as const },
  { id: "prompt-2", text: "プロンプト2：たとえ話で難しい概念を理解する", level: 3 as const },
  { id: "prompt-3", text: "プロンプト3：今日の目標をAIと決める", level: 3 as const },
  { id: "mental-support", text: "「褒められ方」「励ましてもらい方」のプロンプト", level: 2 as const },
  { id: "tips", text: "成功させるための3つのポイント", level: 2 as const },
  { id: "summary", text: "まとめ：AIと一緒に学ぶ時代へ", level: 2 as const },
]

const prompts = {
  diagnosis: `Gemini『Study Notebooks』を使って、私が理解できていない部分を診断してください。

【学習テーマ】
[勉強している科目・分野を入力。例：「高校数学・二次関数」]

【現在の状況】
・学習期間：[例：2週間]
・参考資料：[例：教科書、YouTubeなど]
・困っていること：[具体的な悩みを記入]

以下の形式で、私が理解できていない部分をあぶり出すクイズを5問出してください：
1. 基本概念の理解度を測る問題
2. 計算スキルを測る問題
3. 応用力を測る問題
4. よくある間違いを引き出す問題
5. 実生活への応用を測る問題

各問題の後に、「この問題が解けない場合、どこを復習すべきか」も教えてください。`,

  metaphor: `難しい概念を「たとえ話」で説明してください。

【難しい概念】
[理解したい概念を入力。例：「相対性理論」「マイクロサービス」など]

【現在の理解度】
初心者 / 中級者

説明する際は：
・日常生活で誰もが知っている事例に例える
・「なぜそのたとえが成り立つのか」を3行で説明する
・「このたとえの限界」も正直に述べる

例えば、「相対性理論」なら「電車の中でボールを投げる」という例が考えられます。`,

  dailyGoal: `今日の学習目標を、AIと一緒に決めてください。

【現在の状況】
・学習テーマ：[科目・分野]
・今日の勉強時間：[例：1時間]
・最終目標：[例：「3週間後に資格試験に合格する」]
・今日の気分：やる気満々 / 普通 / 疲れている

以下の形式で、無理のない今日の目標を提案してください：
1. 「30分で達成できる小目標」
2. 「その後の30分で達成できる小目標」
3. 「各目標の達成度を測る簡単なテスト」
4. 「もし時間が余ったら」のボーナス課題

目標は具体的で、測定可能で、達成可能なものにしてください。`,

  encouragement: `今の私の学習を励ましてください。

【現在の状況】
・学習テーマ：[科目・分野]
・学習期間：[例：「3ヶ月」]
・ここまでの成果：[例：「基本概念は理解できた」]
・今の気持ち：[例：「応用問題が難しくて挫けそう」]

以下の観点から励ましてください：
1. 「ここまで頑張った自分」を褒める
2. 「今感じている困難」は学習の証だと伝える
3. 「次のステップ」への道筋を示す
4. 「1週間後の自分」がどう成長しているか想像させる`,
}

const responses = {
  diagnosis: `【診断クイズ結果】

テーマ：高校数学・二次関数

【問題1】基本概念の理解度
「y = (x-2)² + 3 のグラフの頂点の座標は？」
→ 解けない場合：「平方完成」の復習が必要です。

【問題2】計算スキル
「y = x² - 4x + 3 を平方完成しなさい」
→ 解けない場合：「展開と因数分解」の基礎に戻りましょう。

【問題3】応用力
「二次関数 y = x² - 4x + 3 の最小値は？」
→ 解けない場合：「頂点の意味」を理解する必要があります。

【問題4】よくある間違い
「y = -(x-1)² + 4 の最大値は？」
→ 負の係数の影響を見落としやすいポイントです。

【問題5】実生活への応用
「ボールを投げた時の高さが y = -5t² + 20t で表される場合、最大の高さは？」
→ 物理との連携が必要です。

【診断結果】
あなたは「基本概念は理解しているが、応用問題で計算ミスが多い」タイプです。`,

  metaphor: `【たとえ話で理解する「相対性理論」】

**たとえ：電車の中でボールを投げる**

- あなたが電車の中でボールを前に投げます。
- 電車の中にいる人には、ボールが時速10km で飛んでいるように見えます。
- でも、駅のホームにいる人には、「電車の速度 + ボールの速度」で見えます。

**相対性理論の本質**
「速さは、見る人の立場によって変わる」ということです。光も同じ。どこから見ても光の速さは変わらない、という驚くべき事実が相対性理論の核です。

**このたとえの限界**
実際には、光の速さは「どこから見ても同じ」という点が、ボールの例とは異なります。これが相対性理論が「常識を覆す」理由です。`,

  dailyGoal: `【今日の学習プラン】

学習テーマ：高校数学・二次関数
勉強時間：1時間
気分：普通

**前半30分：基本の定着**
- 目標：「平方完成を5問、ノーミスで解く」
- テスト：「y = x² - 6x + 5 を平方完成しなさい」が解けるか

**後半30分：応用問題に挑戦**
- 目標：「二次関数の最大値・最小値を3問解く」
- テスト：「y = -(x-2)² + 4 の最大値は？」が正解するか

**ボーナス課題（時間が余ったら）**
- 「二次関数のグラフを3つ描いて、頂点を正確に示す」

このプランなら、1時間で「確実に成長」を感じられます。`,

  encouragement: `【あなたへのメッセージ】

**1. ここまで頑張った自分を褒める**
3ヶ月間、毎日コツコツと学習を続けてきたあなたは、既に「学習習慣」を身につけています。これは、試験合格よりも価値のあるスキルです。

**2. 「応用問題が難しい」のは成長の証**
基本概念が理解できたからこそ、応用問題の難しさが見えるようになりました。これは「視点が上がった」ことを意味します。

**3. 次のステップへの道筋**
応用問題は「基本を組み合わせる」ゲームです。今、あなたが解けない問題も、1週間後には「あ、これ基本の組み合わせだ」と気づくようになります。

**4. 1週間後のあなた**
1週間後、あなたは「応用問題も怖くない」という自信を持っているでしょう。そして、その自信が次の難しい単元への挑戦へと繋がります。`,
}

const relatedArticles = [
  {
    title: "AIが「家計の味方」に！新Google Financeの『Key Moments』で投資ニュースを3秒で理解するプロンプト術",
    description: "経済ニュースを効率的に理解するAI活用法",
    href: "/articles/google-finance-ai-beginner",
  },
  {
    title: "AIが「あなたのデスク」で仕事する！ChatGPT Workで事務作業を完結させるプロンプト術",
    description: "日々の事務作業を自動化する方法",
    href: "/articles/chatgpt-work-beginner",
  },
  {
    title: "もう「プロンプト」で悩まない！最新AIの『プロンプト自動生成』で100点の回答を引き出す術",
    description: "効果的なプロンプトを自動生成する技法",
    href: "/articles/ai-prompt-generator-beginner-new",
  },
]

export default function GeminiStudyNotebooksBeginnerPage() {
  const title = 'AIが「自分専用の家庭教師」に！Gemini『Study Notebooks』で苦手分野をゼロにするプロンプト術'
  const description = 'AIが「自分専用の家庭教師」に！Gemini『Study Notebooks』で苦手分野をゼロにするプロンプト術。資格試験・勉強に最適な活用法を初心者向けに解説。'
  const keywords = 'Gemini, Study Notebooks, 学習, 勉強, 資格試験, AIプロンプト, 家庭教師, 初心者'
  const publishedDate = '2026-07-20T00:00:00Z'
  const modifiedDate = '2026-07-20T00:00:00Z'
  const url = 'https://promptlist.jp/articles/gemini-study-notebooks-beginner'
  const image = 'https://promptlist.jp/images/og-image-gemini-study-notebooks.png'

  // SEO最適化
  useSEO({ title, description, keywords })
  useOGP({ title, description, type: 'article', image, url })
  useStructuredData({
    title,
    description,
    datePublished: publishedDate,
    dateModified: modifiedDate,
    image,
    url,
  })

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title="AIが「自分専用の家庭教師」に！Gemini『Study Notebooks』で苦手分野をゼロにするプロンプト術"
          eyecatchSrc="/images/og-image-gemini-study-notebooks.png"
          createdAt="2026年7月20日"
          updatedAt="2026年7月20日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「AIに教わる」から「AIと一緒に学ぶ」へ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              資格試験や仕事の勉強をしたいけど、「どこから手をつければいいか分からない」「分厚い参考書を買っても三日坊主で終わってしまう」——そんな経験はありませんか？
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年6月、GoogleがGeminiアプリ内に搭載した『Study Notebooks』なら、あなたの学習スタイルに合わせた「オーダーメイドの家庭教師」が実現します。ノートや資料をアップロードするだけで、AIが「あなたが理解できていない部分」をクイズ形式で診断し、個人の学習ペースに合わせたレッスンを作成してくれます。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              この記事では、『Study Notebooks』を最大限に活用するための具体的なプロンプト術を、初心者向けに解説します。
            </p>
          </section>

          <section id="what-is-study-notebooks" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Gemini『Study Notebooks』とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              『Study Notebooks』は、Geminiアプリに統合された学習支援機能です。あなたの学習資料をアップロードすると、AIが以下のことを自動で行います：
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-bold mb-2">『Study Notebooks』の機能</h4>
              <ul className="list-disc list-inside space-y-2 text-[#333333]">
                <li><strong>弱点診断:</strong> クイズ形式で、あなたが理解できていない部分を自動抽出</li>
                <li><strong>オーダーメイドレッスン:</strong> 診断結果に基づいて、あなただけの学習カリキュラムを作成</li>
                <li><strong>進捗管理ダッシュボード:</strong> 学習の進行状況を可視化し、モチベーション維持をサポート</li>
                <li><strong>個人の学習スタイル対応:</strong> 「視覚的学習者向け」「論理的学習者向け」など、学習スタイルに合わせたレッスン提供</li>
              </ul>
            </div>
          </section>

          <section id="why-different" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              従来の学習方法との違い
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-[#333333]">
                <thead>
                  <tr className="bg-[#E8F1F8]">
                    <th className="border border-[#5B9BD5] p-3 text-left">学習方法</th>
                    <th className="border border-[#5B9BD5] p-3 text-left">メリット</th>
                    <th className="border border-[#5B9BD5] p-3 text-left">デメリット</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#5B9BD5] p-3"><strong>参考書</strong></td>
                    <td className="border border-[#5B9BD5] p-3">体系的に学べる</td>
                    <td className="border border-[#5B9BD5] p-3">自分のペースで進められず、挫折しやすい</td>
                  </tr>
                  <tr className="bg-[#F9F9F9]">
                    <td className="border border-[#5B9BD5] p-3"><strong>塾・予備校</strong></td>
                    <td className="border border-[#5B9BD5] p-3">プロの指導が受けられる</td>
                    <td className="border border-[#5B9BD5] p-3">費用が高く、時間が固定される</td>
                  </tr>
                  <tr>
                    <td className="border border-[#5B9BD5] p-3"><strong>YouTube</strong></td>
                    <td className="border border-[#5B9BD5] p-3">無料で、好きな時間に学べる</td>
                    <td className="border border-[#5B9BD5] p-3">自分の弱点に合わせたカスタマイズができない</td>
                  </tr>
                  <tr className="bg-[#F9F9F9]">
                    <td className="border border-[#5B9BD5] p-3"><strong>Study Notebooks</strong></td>
                    <td className="border border-[#5B9BD5] p-3">個人に最適化された学習、進捗管理、低コスト</td>
                    <td className="border border-[#5B9BD5] p-3">AIの精度に依存</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[#333333] leading-relaxed">
              『Study Notebooks』は、「塾のような個別対応」と「YouTubeのような手軽さ」を両立させた、次世代の学習方法です。
            </p>
          </section>

          <section id="how-to-use" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              実践！『Study Notebooks』を使いこなすプロンプト術
            </h2>
            <p className="text-[#333333] leading-relaxed mb-8">
              『Study Notebooks』の効果を最大化するために、以下の3つのプロンプトを活用します。
            </p>

            <section id="prompt-1" className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                プロンプト1：診断クイズで弱点を見つける
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                学習を開始する前に、「自分が何を理解していないか」を把握することが重要です。
              </p>
              <PromptInfoCard type="prompt" title="使用場面">
                <p>
                  新しい学習テーマを始める時、または学習の進捗を確認したい時
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.diagnosis} />
              <ResponseExample response={responses.diagnosis} />
            </section>

            <section id="prompt-2" className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                プロンプト2：たとえ話で難しい概念を理解する
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                難しい概念は「たとえ話」で理解すると、記憶に残りやすくなります。
              </p>
              <PromptInfoCard type="prompt" title="使用場面">
                <p>
                  「この概念が理解できない」という時、または記憶を定着させたい時
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.metaphor} />
              <ResponseExample response={responses.metaphor} />
            </section>

            <section id="prompt-3" className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                プロンプト3：今日の目標をAIと決める
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                『Study Notebooks』のダッシュボード機能を活かすために、毎日の目標を明確に設定します。
              </p>
              <PromptInfoCard type="prompt" title="使用場面">
                <p>
                  毎日の学習を開始する時、または学習計画を立てたい時
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.dailyGoal} />
              <ResponseExample response={responses.dailyGoal} />
            </section>
          </section>

          <section id="mental-support" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「褒められ方」「励ましてもらい方」のプロンプト
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              学習で最も重要なのは「モチベーション維持」です。AIに「褒めてもらう」「励ましてもらう」ことで、心理的なハードルを下げることができます。
            </p>
            <div className="mb-8 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                励ましプロンプト
              </h3>
              <PromptInfoCard type="prompt" title="使用場面">
                <p>
                  「応用問題が難しくて挫けそう」「勉強が続かない」という時
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.encouragement} />
              <ResponseExample response={responses.encouragement} />
            </div>
          </section>

          <section id="tips" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              成功させるための3つのポイント
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-4 mb-6">
              <li>
                <strong>「AIに教わる」ではなく「AIと一緒に学ぶ」という心構え:</strong>
                『Study Notebooks』はあくまで「学習をサポートするツール」です。最終的な理解と記憶は、自分自身の努力によってのみ得られます。
              </li>
              <li>
                <strong>毎日、同じ時間に学習する習慣をつける:</strong>
                ダッシュボードで進捗を可視化することで、「毎日学習する」という習慣が形成されやすくなります。最初は15分でもいいので、継続することが重要です。
              </li>
              <li>
                <strong>「完璧を目指さない」という柔軟性:</strong>
                初心者が陥りやすい罠は「100%理解しないと先に進まない」という思考です。『Study Notebooks』は「80%理解したら次へ」というペースを推奨しています。
              </li>
            </ul>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ：AIと一緒に学ぶ時代へ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Gemini『Study Notebooks』は、「分厚い参考書で挫折する」「塾の費用が高い」「自分のペースで学べない」といった、従来の学習の課題をすべて解決します。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              手元のメモや写真をアップロードするだけで、自分だけの「魔法の参考書」ができ、AIが「褒めてくれる」「励ましてくれる」という、心理的なサポートも受けられます。
            </p>
            <p className="text-[#333333] leading-relaxed">
              もう「勉強が続かない」という悩みは不要です。AIを味方につけて、自分のペースで、楽しく学ぶ時代が到来しました。
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
