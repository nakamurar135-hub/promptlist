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
  title: '【初心者向け】AIが「現実世界」の困りごとを解決！最新トレンド『フィジカルAI』超入門',
  description: '2026年最新トレンド「フィジカルAI」について初心者向けに解説。ロボットや家電とAIが合体し、家事や仕事を直接手伝ってくれる未来の生活と、新しい時代のプロンプトの考え方をわかりやすくお伝えします。',
  keywords: 'フィジカルAI, ロボット, AI, プロンプト, 初心者, スマート家電, NVIDIA',
  openGraph: {
    title: '【初心者向け】AIが「現実世界」の困りごとを解決！最新トレンド『フィジカルAI』超入門',
    description: 'ロボットや家電とAIが合体し、家事や仕事を直接手伝ってくれる未来の生活と、新しい時代のプロンプトの考え方をわかりやすくお伝えします。',
    type: 'article',
    images: ['/images/og-image-physical-ai.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '【初心者向け】AIが「現実世界」の困りごとを解決！最新トレンド『フィジカルAI』超入門',
    description: '2026年最新トレンド「フィジカルAI」について初心者向けに解説。',
    images: ['/images/og-image-physical-ai.png'],
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
  { id: "introduction", text: "「画面の中」から「リビング」へ", level: 2 as const },
  { id: "japan-advantage", text: "「日本の得意分野」とAIの融合", level: 2 as const },
  { id: "physical-prompt", text: "未来の「物理プロンプト」の考え方", level: 2 as const },
  { id: "prompt-1", text: "プロンプト例1：曖昧な指示を具体化する", level: 3 as const },
  { id: "prompt-2", text: "プロンプト例2：周囲の状況（コンテキスト）を伝える", level: 3 as const },
  { id: "prompt-3", text: "プロンプト例3：失敗しても安心な共生型の指示", level: 3 as const },
  { id: "prompt-4", text: "プロンプト例4：複数ロボットの連携指示", level: 3 as const },
  { id: "summary", text: "まとめ：フィジカルAIと暮らす未来", level: 2 as const },
]

const prompts = {
  prompt1: `【AI搭載のお片付けロボットへの指示】
床にある【おもちゃ】を拾って【青いおもちゃ箱】に入れてください。その後、テーブルの上を【除菌シート】で拭いてください。`,
  response1: `■ お片付けロボットの応答
「承知いたしました。床の【おもちゃ】を【青いおもちゃ箱】に収納し、その後テーブルを【除菌シート】で拭きます。作業を開始します。」
（ロボットが物理的に移動し、指示通りに作業を実行）`,

  prompt2: `【AI搭載の掃除ロボットへの指示】
今、【赤ちゃん】が【寝室】で寝ているので、その部屋には入らず、他の部屋を【静音モード】で掃除してください。`,
  response2: `■ 掃除ロボットの応答
「状況を理解しました。【寝室】への立ち入りを避け、他の部屋を【静音モード】で清掃します。赤ちゃんの睡眠を妨げないよう注意して作業を行います。」`,

  prompt3: `【AI搭載の配膳ロボットへの指示】
この【書類】を【会議室A】にいる【山田さん】に届けてください。もし山田さんが見つからない場合は、どこに置けばいいか私に聞いてください。`,
  response3: `■ 配膳ロボットの応答
「【会議室A】に到着しましたが、【山田さん】がいらっしゃいません。この【書類】は会議室の机の上に置いておいてよろしいでしょうか？それとも持ち帰りましょうか？」`,

  prompt4: `【スマート家電とロボットの連携指示】
これから【映画】を見るので、【リビングの照明】を暗くして、【エアコン】を快適な温度に設定し、【配膳ロボット】で【ポップコーンと飲み物】を運んできてください。`,
  response4: `■ ホームAIシステムの応答
「映画鑑賞の準備を始めます。【リビングの照明】をシアターモード（暗め）に変更し、【エアコン】を25度に設定しました。現在、【配膳ロボット】がキッチンから【ポップコーンと飲み物】をお持ちしています。」`,
}

const relatedArticles = [
  {
    title: "AIエージェントで業務自動化！自律型ワークフロー構築プロンプト術",
    description: "単なるチャットから自律的に動くAIエージェントへ。複数のタスクを連携させて自動完結させる構築方法を解説。",
    href: "/articles/ai-agent-workflow",
  },
  {
    title: "面倒な指示はAIに覚えさせよう！ChatGPT「Skills」超入門",
    description: "毎回同じようなプロンプトを打ち込む手間から解放される、ChatGPTの「Skills」機能の初心者向け解説ガイド。",
    href: "/articles/chatgpt-skills-beginner",
  },
]

export default function PhysicalAIBeginnerGuidePage() {
  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title="【初心者向け】AIが「現実世界」の困りごとを解決！最新トレンド『フィジカルAI』超入門"
          eyecatchSrc="/images/og-image-physical-ai.png"
          createdAt="2026年7月19日"
          updatedAt="2026年7月19日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「画面の中」から「リビング」へ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              これまで、AIといえばスマートフォンやパソコンの「画面の中」にあるものでした。しかし、2026年7月現在、「フィジカルAI」という言葉が大きな注目を集めています。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              フィジカルAIとは、AIがロボットや家電といった「物理的な体」を持つことです。これにより、AIは私たちの質問に答えるだけでなく、実際に部屋を片付けたり、荷物を運んだりといった「現実世界の作業」を直接手伝ってくれるようになります。
            </p>
          </section>

          <section id="japan-advantage" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「日本の得意分野」とAIの融合
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年7月、NVIDIAのジェンスン・フアンCEOの来日や国内大手企業の協業発表があり、日本のロボット技術と最新AIの融合が本格的に始動しました。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              日本は古くから「ものづくり」や「ロボット工学」を得意としてきました。この強みに最先端のAI頭脳が組み合わさることで、細やかな気配りができる世界で最も進んだ「おもてなしAI」が誕生する可能性が期待されています。
            </p>
          </section>

          <section id="physical-prompt" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              未来の「物理プロンプト」の考え方
            </h2>
            <p className="text-[#333333] leading-relaxed mb-8">
              AIが物理的な体を持つようになると、私たちがAIに出す「指示（プロンプト）」の方法も変わってきます。これからの時代に必要な「物理プロンプト」の考え方と具体例を見ていきましょう。
            </p>

            <div id="prompt-1" className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                プロンプト例1：曖昧な指示を具体化する
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                単に「部屋をきれいにして」と伝えるのではなく、物理的な動きを意識して具体的に指示することが重要です。
              </p>
              
              <PromptInfoCard type="usecase" title="こんな時に便利">
                <p>部屋が散らかっていて、特定のものだけを片付けてほしい時。</p>
              </PromptInfoCard>
              
              <PromptInfoCard type="tips" title="プロンプトのコツ">
                <p>「何を」「どこに」「どうする」という物理的なアクションを明確に伝えます。</p>
              </PromptInfoCard>
              
              <PromptBlock prompt={prompts.prompt1} />
              
              <PromptInfoCard type="response" title="期待される動作">
                <p>ロボットが指示された対象物を正確に認識し、指定された場所に移動させます。</p>
              </PromptInfoCard>
              
              <ResponseExample response={prompts.response1} />
            </div>

            <div id="prompt-2" className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                プロンプト例2：周囲の状況（コンテキスト）を伝える
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                現実世界では、その場の状況に合わせて柔軟に対応する必要があります。AIに周囲の環境を伝えることで、より適切な行動を引き出せます。
              </p>
              
              <PromptInfoCard type="usecase" title="こんな時に便利">
                <p>家族が寝ている時や、オンライン会議中で静かにしてほしい時。</p>
              </PromptInfoCard>
              
              <PromptInfoCard type="tips" title="プロンプトのコツ">
                <p>「今、どのような状況か」という背景情報（コンテキスト）を先に伝えます。</p>
              </PromptInfoCard>
              
              <PromptBlock prompt={prompts.prompt2} />
              
              <PromptInfoCard type="response" title="期待される動作">
                <p>AIが状況を理解し、その状況に適したモード（この場合は静音モード）を自動で選択して行動します。</p>
              </PromptInfoCard>
              
              <ResponseExample response={prompts.response2} />
            </div>

            <div id="prompt-3" className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                プロンプト例3：失敗しても安心な共生型の指示
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                現実世界では予期せぬトラブルがつきものです。AIが判断に迷った時に人間に確認を求めるよう指示しておくことで、失敗を防ぐことができます。
              </p>
              
              <PromptInfoCard type="usecase" title="こんな時に便利">
                <p>人に物を届けるなど、相手の状況によって結果が変わる作業を頼む時。</p>
              </PromptInfoCard>
              
              <PromptInfoCard type="tips" title="プロンプトのコツ">
                <p>「もし〇〇だったら、どうするか」という条件分岐や、「わからなければ聞いて」という指示を含めます。</p>
              </PromptInfoCard>
              
              <PromptBlock prompt={prompts.prompt3} />
              
              <PromptInfoCard type="response" title="期待される動作">
                <p>AIが自己判断で間違った行動をとることを避け、人間に確認を求めてきます。</p>
              </PromptInfoCard>
              
              <ResponseExample response={prompts.response3} />
            </div>

            <div id="prompt-4" className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                プロンプト例4：複数ロボットの連携指示
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                フィジカルAIの真骨頂は、複数の機器が連携して動くことです。一つの指示で複数の機器を同時に動かすことができます。
              </p>
              
              <PromptInfoCard type="usecase" title="こんな時に便利">
                <p>帰宅時や映画鑑賞時など、部屋の環境を一気に変えたい時。</p>
              </PromptInfoCard>
              
              <PromptInfoCard type="tips" title="プロンプトのコツ">
                <p>「目的（映画を見る）」を伝えた上で、各機器に期待する動作を列挙します。</p>
              </PromptInfoCard>
              
              <PromptBlock prompt={prompts.prompt4} />
              
              <PromptInfoCard type="response" title="期待される動作">
                <p>ホームAIがオーケストレーターとして働き、照明、エアコン、ロボットなど複数の機器に適切な指示を出して連携させます。</p>
              </PromptInfoCard>
              
              <ResponseExample response={prompts.response4} />
            </div>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ：フィジカルAIと暮らす未来
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              フィジカルAIの登場により、AIは私たちの生活空間に直接入り込み、物理的なサポートをしてくれるようになります。
            </p>
            <p className="text-[#333333] leading-relaxed">
              これからの時代は、画面の中のAIに文章を書かせるだけでなく、現実世界のロボットに「どう動いてほしいか」を的確に伝える「物理プロンプト」のスキルが重要になってくるでしょう。まずは身近なスマート家電への指示出しから、未来の生活の練習を始めてみてはいかがでしょうか。
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
