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
        { title: "Google Finance「Key Moments」で投資ニュースを3秒で理解するプロンプト術", href: "/articles/google-finance-ai-beginner" },
        { title: "AIが「自分専用の家庭教師」に！Gemini『Study Notebooks』で苦手分野をゼロにするプロンプト術", href: "/articles/gemini-study-notebooks-beginner" },
        { title: "AIが「あなたのデスク」で仕事する！ChatGPT Workで事務作業を完結させるプロンプト術", href: "/articles/chatgpt-work-beginner" },
      ],
    },
  ],
  copyright: "© 2026 AIプロンプト活用ガイド All Rights Reserved.",
}

const headings = [
  { id: "introduction", text: "「難しい経済ニュース」をAIが日本語で解説してくれる時代へ", level: 2 as const },
  { id: "what-is-key-moments", text: "Google Financeの『Key Moments』とは？", level: 2 as const },
  { id: "why-important", text: "なぜ初心者にとって重要なのか", level: 2 as const },
  { id: "how-to-use", text: "実践！『Key Moments』を使いこなすプロンプト術", level: 2 as const },
  { id: "prompt-1", text: "プロンプト1：「中学生でもわかるように」説明させる", level: 3 as const },
  { id: "prompt-2", text: "プロンプト2：「自分への影響」を聞く", level: 3 as const },
  { id: "prompt-3", text: "プロンプト3：『Key Moments』の深掘り質問", level: 3 as const },
  { id: "tips", text: "成功させるための3つのポイント", level: 2 as const },
  { id: "summary", text: "まとめ：AIで経済ニュースの壁を乗り越える", level: 2 as const },
]

const prompts = {
  simplify: `Google Financeの『Key Moments』に表示されたこのニュースを、中学生でもわかるように説明してください。

【ニュース】
[Google Financeから表示されたニュースの要約をコピペ]

説明する際は：
・専門用語を日常語に変換する
・「なぜそれが起きたのか」を3行で説明する
・「その結果、どうなるのか」を簡潔に述べる`,

  impact: `このニュースが私の生活にどのような影響を与える可能性がありますか？

【ニュース内容】
[Google Financeの『Key Moments』から得た情報]

【私の状況】
・NISA口座を持っている / 持っていない
・毎月の貯金額：[金額]
・投資経験：初心者 / 中級者

以下の観点から教えてください：
1. 短期的な影響（1ヶ月以内）
2. 中期的な影響（3〜6ヶ月）
3. 初心者が今すぐできる対策`,

  deepDive: `『Key Moments』に表示されたこのニュースについて、さらに深く知りたいです。

【表示されたサマリー】
[『Key Moments』の要約]

以下の質問に答えてください：
1. なぜこれが「重要な瞬間」として選ばれたのか
2. 業界全体にどのような影響を与えるか
3. 競合他社はどのように反応しているか
4. 今後の展開予測`,
}

const responses = {
  simplify: `【わかりやすい説明】

ニュース：「Apple、AI搭載スマートフォンの新機能を発表」

**中学生向け説明**
- 「Appleが、スマートフォンに『頭のいい機能』を追加する」ということです。
- 今までは、スマートフォンは「人間の指示を待つだけ」でしたが、これからは「自分で考えて動く」ようになります。
- 結果として、スマートフォンがもっと便利になり、Appleの株価が上がる可能性があります。`,

  impact: `【あなたの生活への影響】

1. **短期的な影響（1ヶ月以内）**
   - 特に大きな変化はありませんが、Apple関連の株式投資をしている場合は、株価の変動を注視する時期です。

2. **中期的な影響（3〜6ヶ月）**
   - 新機能が実際に搭載されたスマートフォンが販売開始。
   - 購入検討中の方は、この新機能が必要かどうかを判断する材料になります。

3. **初心者が今すぐできる対策**
   - 焦らない：「買わなきゃ」と急ぐ必要はありません。
   - 情報収集：Apple以外のメーカーも同様の機能を開発しているか調べる。
   - NISA活用：長期保有を前提に、Apple株の購入を検討（ただし自己判断で）。`,

  deepDive: `【深掘り情報】

1. **重要な瞬間として選ばれた理由**
   - AI技術の進化は市場全体に大きな影響を与えるため、投資家にとって重要な情報です。

2. **業界全体への影響**
   - スマートフォン業界全体がAI競争に突入。
   - 他のメーカー（Samsung、Google、Xiaomi）も同様の発表を急ぐ可能性が高い。

3. **競合他社の反応**
   - Googleは既に「Pixel」シリーズにAI機能を搭載。
   - Samsungも「Galaxy AI」で対抗。

4. **今後の展開予測**
   - 2026年後半までに、ほぼすべてのスマートフォンにAI機能が標準装備される見込み。`,
}

const relatedArticles = [
  {
    title: "AIが「自分専用の家庭教師」に！Gemini『Study Notebooks』で苦手分野をゼロにするプロンプト術",
    description: "学習効率を最大化するGeminiの新機能を活用する方法",
    href: "/articles/gemini-study-notebooks-beginner",
  },
  {
    title: "AIが「あなたのデスク」で仕事する！ChatGPT Workで事務作業を完結させるプロンプト術",
    description: "日々の事務作業を自動化するChatGPT Workの活用法",
    href: "/articles/chatgpt-work-beginner",
  },
  {
    title: "検索は「ググる」から「聞く」へ！Yahooの新機能『Yahoo Scout』活用プロンプト術",
    description: "Yahoo Scoutで最新の金融情報を効率的に取得する方法",
    href: "/articles/yahoo-scout-beginner",
  },
]

export default function GoogleFinanceAIBeginnerPage() {
  const title = 'AIが「家計の味方」に！新Google Financeの『Key Moments』で投資ニュースを3秒で理解するプロンプト術'
  const description = 'AIが「家計の味方」に！新Google Financeの「Key Moments」で投資ニュースを3秒で理解するプロンプト術。初心者向けの具体的なプロンプト例を解説。'
  const keywords = 'Google Finance, Key Moments, 投資, 株価, AIプロンプト, 初心者, 経済ニュース, 金融情報'
  const publishedDate = '2026-07-20T00:00:00Z'
  const modifiedDate = '2026-07-20T00:00:00Z'
  const url = 'https://promptlist.jp/articles/google-finance-ai-beginner'
  const image = 'https://promptlist.jp/images/og-image-google-finance-ai.png'

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
          title="AIが「家計の味方」に！新Google Financeの『Key Moments』で投資ニュースを3秒で理解するプロンプト術"
          eyecatchSrc="/images/og-image-google-finance-ai.png"
          createdAt="2026年7月20日"
          updatedAt="2026年7月20日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「難しい経済ニュース」をAIが日本語で解説してくれる時代へ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「NISA」や「株」に興味はあるけど、ニュースを見ても専門用語ばかりで挫折してしまう——そんな経験はありませんか？
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年6月、Googleが大幅アップデートした「Google Finance」に搭載された新機能『Key Moments』なら、複雑な経済ニュースをAIが数行で解説してくれます。さらにAIプロンプトを活用することで、「要するにどういうこと？」「私の生活にどう影響するの？」といった疑問が瞬時に解決します。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              この記事では、初心者向けに『Key Moments』を使いこなすための具体的なプロンプト術を解説します。
            </p>
          </section>

          <section id="what-is-key-moments" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Google Financeの『Key Moments』とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              『Key Moments』は、Google Financeに新たに統合されたAI研究ツールです。特定の株価が大きく動いた時、「なぜ動いたのか」をAIが自動で分析し、数行の要約で表示してくれます。
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-bold mb-2">『Key Moments』の特徴</h4>
              <ul className="list-disc list-inside space-y-2 text-[#333333]">
                <li><strong>自動要約:</strong> 複数のニュースソースから、重要な情報を自動抽出</li>
                <li><strong>リアルタイム対応:</strong> 株価が動いたその瞬間に、背景情報を提示</li>
                <li><strong>Android対応:</strong> スマートフォンアプリからもワンタップで情報取得可能</li>
                <li><strong>AI解説付き:</strong> 数字だけでなく、「なぜ」という背景情報も含む</li>
              </ul>
            </div>
          </section>

          <section id="why-important" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              なぜ初心者にとって重要なのか
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              投資初心者が最も困るのは、「ニュースの意味がわからない」ことです。例えば：
            </p>
            <ul className="list-disc list-inside text-[#333333] space-y-2 mb-6">
              <li>「金利が0.5%上がった」と言われても、自分の生活にどう影響するのか不明</li>
              <li>「決算が予想を上回った」という情報だけでは、買いなのか売りなのか判断できない</li>
              <li>毎日忙しく、経済ニュースをじっくり読む時間がない</li>
            </ul>
            <p className="text-[#333333] leading-relaxed mb-4">
              『Key Moments』とAIプロンプトを組み合わせることで、これらの課題が一気に解決します。「3秒で理解できる」という気軽さが、投資への心理的ハードルを大きく下げるのです。
            </p>
          </section>

          <section id="how-to-use" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              実践！『Key Moments』を使いこなすプロンプト術
            </h2>
            <p className="text-[#333333] leading-relaxed mb-8">
              Google Financeで『Key Moments』を確認した後、以下の3つのプロンプトを順番に使用することで、初心者でも深い理解が得られます。
            </p>

            <section id="prompt-1" className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                プロンプト1：「中学生でもわかるように」説明させる
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                まずは、複雑な経済用語を日常語に変換させます。
              </p>
              <PromptInfoCard type="prompt" title="使用場面">
                <p>
                  Google Financeで『Key Moments』を見たけど、何のことかわからない時
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.simplify} />
              <ResponseExample response={responses.simplify} />
            </section>

            <section id="prompt-2" className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                プロンプト2：「自分への影響」を聞く
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                次に、そのニュースが「自分の生活」にどう影響するかを聞きます。これが初心者にとって最も重要な視点です。
              </p>
              <PromptInfoCard type="prompt" title="使用場面">
                <p>
                  ニュースの意味はわかったけど、「で、私はどうすればいいの？」という時
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.impact} />
              <ResponseExample response={responses.impact} />
            </section>

            <section id="prompt-3" className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                プロンプト3：『Key Moments』の深掘り質問
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                さらに知識を深めたい場合は、このプロンプトで業界全体への影響を理解します。
              </p>
              <PromptInfoCard type="prompt" title="使用場面">
                <p>
                  もっと詳しく知りたい、投資判断の参考にしたい時
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.deepDive} />
              <ResponseExample response={responses.deepDive} />
            </section>
          </section>

          <section id="tips" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              成功させるための3つのポイント
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-4 mb-6">
              <li>
                <strong>『Key Moments』を「第一次情報」として活用:</strong>
                Google Financeの『Key Moments』は既にAIが要約した情報です。これをさらにAIプロンプトで深掘りすることで、二段階の理解が可能になります。
              </li>
              <li>
                <strong>「焦らない」という心構え:</strong>
                ニュースを見ると「今すぐ買わなきゃ」という焦りが生まれます。しかし初心者こそ、AIに「本当に急ぐ必要があるか」を聞いてから行動することが大切です。
              </li>
              <li>
                <strong>複数のAIツールを組み合わせる:</strong>
                Google FinanceのAI + ChatGPT/Geminiのプロンプト = 最強の情報取得体制。Google Financeは「何が起きたか」を教え、AIプロンプトは「なぜ起きたか」「どうすべきか」を教えてくれます。
              </li>
            </ul>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ：AIで経済ニュースの壁を乗り越える
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Google Financeの『Key Moments』は、投資初心者にとって「経済ニュースの翻訳機」のような存在です。複雑な情報を、3秒で理解できる形に変換してくれます。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              さらにAIプロンプトを活用することで、「ニュースの意味」だけでなく「自分への影響」「今後の展開」まで、多角的に理解することができます。
            </p>
            <p className="text-[#333333] leading-relaxed">
              もう「難しい経済ニュース」で挫折する必要はありません。AIを味方につけて、自信を持って投資情報を収集してみてください。
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
