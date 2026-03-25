import PageLayout from "@/components/layout/PageLayout";
import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleContent from "@/components/article/ArticleContent";
import TableOfContents from "@/components/article/TableOfContents";
import PromptBlock from "@/components/article/PromptBlock";
import PromptInfoCard from "@/components/article/PromptInfoCard";
import ResponseExample from "@/components/article/ResponseExample";
import AffiliateBox from "@/components/article/AffiliateBox";
import RelatedArticles from "@/components/article/RelatedArticles";
import { AlertTriangle } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";
import { useStructuredData } from "@/hooks/useStructuredData";

const tocItems = [
  { id: "intro", label: "ChatGPTでアイデア出し、もう行き詰まらない！" },
  { id: "prompts", label: "アイデア出しに使えるプロンプト4選" },
  { id: "prompt1", label: "プロンプト1：ブレインストーミング型アイデア出し", level: 3 as const },
  { id: "prompt2", label: "プロンプト2：SWOT分析型アイデア出し", level: 3 as const },
  { id: "prompt3", label: "プロンプト3：SCAMPER法型アイデア出し", level: 3 as const },
  { id: "prompt4", label: "プロンプト4：6W2H型アイデア出し", level: 3 as const },
  { id: "tips", label: "プロンプトをさらに活用するコツ" },
  { id: "notice", label: "ChatGPT利用時の注意点" },
  { id: "summary", label: "まとめ" },
];

const relatedArticles = [
  {
    title: "ChatGPTでSNS投稿文を作成するプロンプト4選｜コピペで使える実践例",
    href: "/articles/chatgpt-sns-post-prompt",
    description: "新商品紹介、イベント告知、顧客の声、Q&A形式まで、コピペで使える実践的なプロンプト集です。",
  },
  {
    title: "ChatGPTで議事録を作成するプロンプト4選｜コピペで使える実践例",
    href: "/articles/chatgpt-meeting-minutes",
    description: "会議メモから自動で議事録を生成。要点整理、フォーマル形式、アクションアイテム抽出まで対応。",
  },
  {
    title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集",
    href: "/articles/chatgpt-question-template",
    description: "ChatGPTを使いこなすための基本的な質問テクニックを解説。初めての方はまずこちらから。",
  },
];

export default function ChatgptIdeationPrompt() {
  useSEO({
    title: "ChatGPTでアイデア出しをするプロンプト4選｜企画・発想を加速する実践例",
    description: "ChatGPTでアイデア出しをするプロンプトを4つご紹介。ブレインストーミング、SWOT分析、SCAMPER法、6W2Hなど、企画・発想を加速する実践的なプロンプト集です。",
    keywords: "ChatGPT,アイデア出し,プロンプト,ブレインストーミング,SWOT分析,企画,AI,自動生成",
  });
  useOGP({
    title: "ChatGPTでアイデア出しをするプロンプト4選｜企画・発想を加速する実践例",
    description: "ChatGPTでアイデア出しをするプロンプトを4つご紹介。ブレインストーミング、SWOT分析、SCAMPER法、6W2Hなど、企画・発想を加速する実践的なプロンプト集です。",
    type: "article",
  });
  useStructuredData({
    title: "ChatGPTでアイデア出しをするプロンプト",
    description: "企画・発想を加速するためのアイデア出しプロンプト集。ブレインストーミングからSWOT分析まで。",
  });

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <ArticleHeader
          title="ChatGPTでアイデア出しをするプロンプト4選｜企画・発想を加速する実践例"
          description="ChatGPTでアイデア出しをするプロンプトを4つご紹介。ブレインストーミング、SWOT分析、SCAMPER法、6W2Hなど、企画・発想を加速する実践的なプロンプト集です。"
          category="コンテンツ作成"
          categoryColor="#FF9800"
          publishedAt="2026年3月5日"
          readingTime="約10分"
        />

        <TableOfContents items={tocItems} />

        <ArticleContent>
          {/* 導入セクション */}
          <section id="intro">
            <h2>ChatGPTでアイデア出し、もう行き詰まらない！</h2>
            <p>「新しい企画が思いつかない…」「もっと斬新なアイデアが欲しい…」「一人で考えても発想が広がらない…」</p>
            <p>そんな悩みをお持ちの皆さんに向けて、この記事ではChatGPTを使ってアイデア出しを効率的に行うための実践的なプロンプトを4つご紹介します。</p>
            <p>コピペするだけで使えるので、初心者の方でも安心です。</p>
          </section>

          {/* プロンプト解説セクション */}
          <section id="prompts">
            <h2>アイデア出しに使えるプロンプト4選</h2>
            <p>ここからは、実際にアイデア出しで使えるプロンプトを4つご紹介します。用途に合わせてお使いください。</p>

            {/* プロンプト1 */}
            <div id="prompt1">
              <h3>プロンプト1：ブレインストーミング型アイデア出し</h3>

              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                指定したテーマに対して、多角的な視点から大量のアイデアが生成されます。ユニークな視点や、自分では思いつかないような発想も期待できます。
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                新商品開発、新規事業企画、イベント企画、コンテンツ制作など、とにかく多くのアイデアが欲しいときに最適です。発想の幅を広げ、思考の停滞を打破したい場合に活用できます。
              </PromptInfoCard>

              <PromptBlock title="プロンプト">{`あなたは創造的なアイデアマンです。以下のテーマについて、ブレインストーミング形式で可能な限り多くのアイデアを提案してください。

【テーマ】
【ターゲット層】
【目的】
【制約条件（任意）】

【出力形式】
・箇条書きで20個以上のアイデアを提案
・各アイデアは簡潔に説明
・ユニークな視点や実現可能性の低いアイデアも歓迎
`}</PromptBlock>

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>テーマを具体的にすることで、AIがより的確なアイデアを生成しやすくなります。</li>
                  <li>ターゲット層や目的、制約条件を明確にすることで、アイデアの方向性を絞り込むことができます。</li>
                  <li>実現可能性にとらわれず、まずは多くのアイデアを出すことを重視しましょう。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト2 */}
            <div id="prompt2">
              <h3>プロンプト2：SWOT分析型アイデア出し</h3>

              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                指定したテーマの強み（Strength）、弱み（Weakness）、機会（Opportunity）、脅威（Threat）を分析し、それに基づいたアイデアが生成されます。論理的かつ戦略的なアイデア出しに役立ちます。
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                事業戦略の立案、マーケティング戦略の策定、競合分析、課題解決など、現状分析を踏まえた上で具体的な施策を考えたいときに最適です。アイデアの根拠を明確にしたい場合に活用できます。
              </PromptInfoCard>

              <PromptBlock title="プロンプト">{`あなたは戦略コンサルタントです。以下のテーマについてSWOT分析を行い、それぞれの項目から導き出されるアイデアを提案してください。

【テーマ】
【分析対象（例：自社、競合、新商品）】

【出力形式】
・SWOT分析の結果（箇条書き）
・各SWOT項目から導き出されるアイデア（3つ以上）
・アイデアは具体的な行動レベルで記述
`}</PromptBlock>

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>SWOT分析を行うことで、アイデアの根拠が明確になり、説得力が増します。</li>
                  <li>各SWOT項目からアイデアを導き出すことで、網羅的かつ戦略的なアイデア出しが可能です。</li>
                  <li>アイデアは具体的な行動レベルで記述することで、実行に移しやすくなります。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト3 */}
            <div id="prompt3">
              <h3>プロンプト3：SCAMPER法型アイデア出し</h3>

              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                既存の製品、サービス、アイデアなどをSCAMPER（Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse）の7つの視点から再構築し、新しいアイデアを生成します。既存のものをベースに、発想を広げたいときに有効です。
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                既存の商品やサービスのリニューアル、改善、新しい用途の発見、コスト削減、業務効率化など、既存のものを起点に新しい価値を生み出したいときに最適です。マンネリ化を打破し、斬新な視点を取り入れたい場合に活用できます。
              </PromptInfoCard>

              <PromptBlock title="プロンプト">{`あなたはイノベーションコンサルタントです。以下の製品/サービス/アイデアをSCAMPER法を用いて分析し、新しいアイデアを提案してください。

【対象】
【目的】

【出力形式】
・SCAMPERの各項目（Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse）ごとに3つ以上のアイデアを提案
・各アイデアは簡潔に説明
`}</PromptBlock>

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>SCAMPER法は既存のものを起点にするため、ゼロからのアイデア出しより実現可能性が高いアイデアが生成されやすいです。</li>
                  <li>各視点から複数のアイデアを導き出すことで、多角的な改善案を検討できます。</li>
                  <li>既存の商品やサービスの改善だけでなく、新しい用途の発見にも活用できます。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト4 */}
            <div id="prompt4">
              <h3>プロンプト4：6W2H型アイデア出し</h3>

              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                6W2H（Why, Who, When, Where, What, Which, How, How much）の8つの視点から、課題や施策を多角的に分析し、具体的なアイデアが生成されます。網羅的で実行可能なアイデアが期待できます。
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                プロジェクト企画、マーケティング施策の立案、課題解決、ビジネス戦略の策定など、多角的な視点から施策を検討したいときに最適です。実行計画に落とし込みやすいアイデアが必要な場合に活用できます。
              </PromptInfoCard>

              <PromptBlock title="プロンプト">{`あなたはビジネスプランナーです。以下のテーマについて、6W2Hの視点から詳細なアイデアを提案してください。

【テーマ】
【背景・課題】

【出力形式】
・Why（なぜ）：目的・理由
・Who（誰が）：実行者・対象者
・When（いつ）：実施時期
・Where（どこで）：実施場所
・What（何を）：実施内容
・Which（どちらを）：選択肢と判断基準
・How（どうやって）：実施方法
・How much（いくら）：予算・リソース
`}</PromptBlock>

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>6W2Hを使うことで、施策の全体像を俯瞰でき、抜け漏れのない計画が立てやすくなります。</li>
                  <li>各項目を明確にすることで、実行段階での混乱や誤解を防ぐことができます。</li>
                  <li>チームメンバー間での認識統一にも役立ちます。</li>
                </ul>
              </PromptInfoCard>
            </div>
          </section>

          {/* コツセクション */}
          <section id="tips">
            <h2>プロンプトをさらに活用するコツ</h2>
            <ul className="space-y-3 list-disc list-inside">
              <li><strong>具体的な情報を入力する：</strong>テーマ、ターゲット、目的、制約条件など、具体的な情報を入力することで、AIがより的確なアイデアを生成します。</li>
              <li><strong>複数のプロンプトを組み合わせる：</strong>1つのテーマに対して、複数のプロンプトを試してみることで、より多角的なアイデアが得られます。</li>
              <li><strong>AIの回答を起点に、さらに掘り下げる：</strong>AIが生成したアイデアを起点に、「このアイデアをさらに改善するには？」と追加の質問をすることで、より洗練されたアイデアが得られます。</li>
              <li><strong>チームで検討する：</strong>AIが生成したアイデアをチームで検討し、実現可能性や効果を評価することが重要です。</li>
            </ul>
          </section>

          {/* 注意点セクション */}
          <section id="notice">
            <h2>ChatGPT利用時の注意点</h2>
            <div className="flex gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg dark:bg-yellow-900/20 dark:border-yellow-800">
              <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5 dark:text-yellow-500" />
              <div>
                <p className="font-semibold text-yellow-900 dark:text-yellow-200">注意が必要な点</p>
                <ul className="mt-2 space-y-2 text-sm text-yellow-800 dark:text-yellow-300 list-disc list-inside">
                  <li>ChatGPTが生成したアイデアは、必ずしも実現可能とは限りません。実行前に十分な検討が必要です。</li>
                  <li>機密情報や個人情報をChatGPTに入力しないようにしてください。</li>
                  <li>ChatGPTの回答は学習データに基づいているため、最新の情報が反映されていない場合があります。</li>
                  <li>著作権や特許に関わるアイデアについては、法的なアドバイスを求めることをお勧めします。</li>
                </ul>
              </div>
            </div>
          </section>

          {/* まとめセクション */}
          <section id="summary">
            <h2>まとめ</h2>
            <p>ChatGPTを使ったアイデア出しは、短時間で多くのアイデアを生成できる強力なツールです。ブレインストーミング、SWOT分析、SCAMPER法、6W2Hなど、様々なアプローチを試してみることで、より質の高いアイデアが得られます。</p>
            <p>ぜひこの記事で紹介したプロンプトを使って、ChatGPTでのアイデア出しを実践してみてください。新しい発想や施策が生まれるかもしれません。</p>
          </section>
        </ArticleContent>

        <AffiliateBox
          title="ChatGPT Plusでアイデア出しをもっと強力に"
          description="ChatGPT Plusにアップグレードすることで、GPT-4oの高度な分析力を活用したアイデア出しが可能になります。ブレインストーミングから市場分析まで、より質の高いアイデアを短時間で生成できます。"
          buttonText="ChatGPT Plusを試す"
          buttonHref="https://chat.openai.com"
        />
        <RelatedArticles articles={relatedArticles} />
      </div>
    </PageLayout>
  );
}
