import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleContent from "@/components/article/ArticleContent";
import TableOfContents from "@/components/article/TableOfContents";
import PromptBlock from "@/components/article/PromptBlock";
import PromptInfoCard from "@/components/article/PromptInfoCard";
import ResponseExample from "@/components/article/ResponseExample";
import AffiliateBox from "@/components/cta/AffiliateBox";
import RelatedArticles from "@/components/cta/RelatedArticles";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "ChatGPTで献立を考えるプロンプト4選｜栄養バランス・時短を両立",
  description: "ChatGPTで献立を考えるプロンプトを4つご紹介。食材指定、栄養バランス重視、イベント・シーン別、冷蔵庫の余り物活用など、栄養バランス・時短を両立する実践的なプロンプト集です。",
  openGraph: {
    title: "ChatGPTで献立を考えるプロンプト4選｜栄養バランス・時短を両立",
    description: "ChatGPTで献立を考えるプロンプトを4つご紹介。食材指定、栄養バランス重視、イベント・シーン別、冷蔵庫の余り物活用など、栄養バランス・時短を両立する実践的なプロンプト集です。",
    images: ["/images/chatgpt-menu-planning-prompt-eyecatch.png"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPTで献立を考えるプロンプト4選｜栄養バランス・時短を両立",
    description: "ChatGPTで献立を考えるプロンプトを4つご紹介。食材指定、栄養バランス重視、イベント・シーン別、冷蔵庫の余り物活用など、栄養バランス・時短を両立する実践的なプロンプト集です。",
    images: ["/images/chatgpt-menu-planning-prompt-eyecatch.png"],
  },
};

const tocItems = [
  { id: "intro", label: "ChatGPTで献立作成、もう悩まない！" },
  { id: "about-chatgpt", label: "ChatGPTとは？初心者向けにわかりやすく解説" },
  { id: "prompts", label: "献立作成に使えるプロンプト4選" },
  { id: "prompt1", label: "プロンプト1：食材指定型献立作成", level: 3 as const },
  { id: "prompt2", label: "プロンプト2：栄養バランス重視型献立作成", level: 3 as const },
  { id: "prompt3", label: "プロンプト3：イベント・シーン別献立作成", level: 3 as const },
  { id: "prompt4", label: "プロンプト4：冷蔵庫の余り物活用型献立作成", level: 3 as const },
  { id: "tips", label: "プロンプトをさらに活用するコツ" },
  { id: "notice", label: "ChatGPT利用時の注意点" },
  { id: "summary", label: "まとめ" },
];

const relatedArticles = [
  {
    title: "ChatGPTで翻訳をするプロンプト4選｜ビジネス・学習で役立つ実践例",
    href: "/articles/chatgpt-translation-prompt",
    description: "言語指定、目的・文脈指定、専門用語・固有名詞対応、複数言語一括翻訳など、ビジネス・学習で役立つ実践的なプロンプト集です。",
  },
  {
    title: "ChatGPTで要約文を作成するプロンプト4選｜長文読解・情報整理を効率化",
    href: "/articles/chatgpt-summarize-prompt",
    description: "文字数指定、目的・視点指定、箇条書き・表形式、専門家視点など、長文読解・情報整理を効率化する実践的なプロンプト集です。",
  },
  {
    title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集",
    href: "/articles/chatgpt-question-template",
    description: "ChatGPTを使いこなすための基本的な質問テクニックを解説。初めての方はまずこちらから。",
  },
];

export default function ChatgptMenuPlanningPrompt() {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <ArticleHeader
          title="ChatGPTで献立を考えるプロンプト4選｜栄養バランス・時短を両立"
          description="ChatGPTで献立を考えるプロンプトを4つご紹介。食材指定、栄養バランス重視、イベント・シーン別、冷蔵庫の余り物活用など、栄養バランス・時短を両立する実践的なプロンプト集です。"
          category="献立作成"
          categoryColor="#FFC107"
          publishedAt="2026年3月5日"
          readingTime="約10分"
        />

        <TableOfContents items={tocItems} />

        <ArticleContent>
          {/* 導入セクション */}
          <section id="intro">
            <h2>ChatGPTで献立作成、もう悩まない！</h2>
            <p>「毎日の献立を考えるのが大変…」「栄養バランスが偏りがち…」「冷蔵庫の余り物で何か作りたいけど、アイデアが浮かばない…」</p>
            <p>日々の食事の準備は、多くの人にとって時間と労力を要するタスクです。特に、栄養バランスを考慮しつつ、家族の好みや食材の在庫状況に合わせて献立を考えるのは一苦労。この記事では、ChatGPTを使って効率的に献立を作成するための実践的なプロンプトを4つご紹介します。</p>
            <p>コピペするだけで使えるので、初心者の方でも安心です。</p>
          </section>

          {/* ChatGPT基礎説明 */}
          <section id="about-chatgpt">
            <h2>ChatGPTとは？初心者向けにわかりやすく解説</h2>
            <p>ChatGPTは、OpenAIが開発したAIチャットサービスです。質問を入力するだけで、自然な日本語で回答を得ることができます。テキスト生成、翻訳、要約など、様々なタスクをこなすことができます。</p>
            <p>基本機能は無料で利用できますが、より高度な機能や高速な応答を求める方には、月額20ドルのChatGPT Plus（有料版）がおすすめです。ChatGPT Plusでは、最新のGPT-4モデルが利用でき、より複雑な指示にも対応できます。</p>
          </section>

          {/* プロンプト解説セクション */}
          <section id="prompts">
            <h2>献立作成に使えるプロンプト4選</h2>
            <p>ここからは、実際に献立作成で使えるプロンプトを4つご紹介します。用途に合わせてお使いください。</p>

            {/* プロンプト1 */}
            <div id="prompt1">
              <h3>プロンプト1：食材指定型献立作成</h3>

              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                指定した食材を使い切る形で、栄養バランスの取れた献立を提案してくれます。冷蔵庫の余り物を有効活用したいときに便利です。
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                冷蔵庫に余っている食材を消費したいとき、特定の食材をメインにした料理を考えたいとき、食品ロスを減らしたいときに最適です。買い物に行く前に、手持ちの食材で何が作れるか知りたい場合にも役立ちます。
              </PromptInfoCard>

              <PromptBlock title="プロンプト">{`以下の食材を使って、栄養バランスの取れた〇日分の献立を提案してください。

【食材リスト】
- 〇〇
- 〇〇

【その他条件（任意）】
- 〇〇（例：調理時間30分以内、和食中心、子供向けなど）

【出力形式】
- 日ごとの献立（主菜、副菜、汁物など）
- 各料理の簡単な説明
`}</PromptBlock>

              <ResponseExample title="ChatGPTの回答例">{`以下の食材を使って、栄養バランスの取れた3日分の献立を提案してください。

【食材リスト】
- 鶏もも肉
- 卵
- キャベツ
- 玉ねぎ
- 人参
- 豆腐
- きのこ（しめじ、えのき）
- ミニトマト

【その他条件】
- 調理時間45分以内
- 和食と洋食をバランス良く

【出力形式】
- 日ごとの献立（主菜、副菜、汁物など）
- 各料理の簡単な説明
`}</ResponseExample>

              <ResponseExample title="ChatGPTの回答">
                <h3>1日目：和風献立</h3>
                <ul>
                  <li><strong>主菜</strong>: 鶏肉とキャベツの味噌炒め
                    <ul>
                      <li>鶏もも肉とキャベツ、人参を味噌ベースの甘辛いタレで炒めたご飯が進む一品。</li>
                    </ul>
                  </li>
                  <li><strong>副菜</strong>: 豆腐とワカメの和え物
                    <ul>
                      <li>茹でたワカメと豆腐をポン酢で和えたさっぱりとした小鉢。</li>
                    </ul>
                  </li>
                  <li><strong>汁物</strong>: 玉ねぎと卵のお味噌汁
                    <ul>
                      <li>出汁の効いたお味噌汁に、とろとろの卵と玉ねぎを加えた優しい味わい。</li>
                    </ul>
                  </li>
                </ul>
                <h3>2日目：洋風献立</h3>
                <ul>
                  <li><strong>主菜</strong>: 鶏肉のトマト煮込み
                    <ul>
                      <li>鶏もも肉と玉ねぎ、人参をトマト缶で煮込んだ、洋風のメイン料理。ご飯にもパンにも合います。</li>
                    </ul>
                  </li>
                  <li><strong>副菜</strong>: きのこのソテー
                    <ul>
                      <li>しめじとえのきをバターで炒め、塩胡椒で味を調えたシンプルな一品。</li>
                    </ul>
                  </li>
                  <li><strong>サラダ</strong>: ミニトマトとレタスのサラダ
                    <ul>
                      <li>ミニトマトとレタスをシンプルに盛り付け、お好みのドレッシングで。</li>
                    </ul>
                  </li>
                </ul>
                <h3>3日目：中華風献立</h3>
                <ul>
                  <li><strong>主菜</strong>: 豆腐と鶏ひき肉の麻婆豆腐
                    <ul>
                      <li>鶏もも肉をひき肉にして、豆腐と一緒にピリ辛の麻婆豆腐に。ご飯が止まらない美味しさ。</li>
                    </ul>
                  </li>
                  <li><strong>副菜</strong>: キャベツと人参の中華風和え物
                    <ul>
                      <li>茹でたキャベツと人参を中華ドレッシングで和えた箸休めにぴったりな一品。</li>
                    </ul>
                  </li>
                  <li><strong>汁物</strong>: 卵とワカメの中華スープ
                    <ul>
                      <li>鶏ガラスープベースに卵とワカメを加えた、あっさりとした中華スープ。</li>
                    </ul>
                  </li>
                </ul>
              </ResponseExample>

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>食材リストを具体的に提示することで、AIがそれらを効率的に使い切る献立を提案しやすくなります。</li>
                  <li>調理時間や料理のジャンルなど、追加の条件を明確にすることで、よりニーズに合った献立が得られます。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト2 */}
            <div id="prompt2">
              <h3>プロンプト2：栄養バランス重視型献立作成</h3>

              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                指定した栄養素（例：高タンパク、低糖質、ビタミン豊富など）や、カロリー制限を考慮した献立を提案してくれます。健康志向の方や、ダイエット中の方に最適です。
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                健康管理、ダイエット、筋力アップ、アレルギー対応など、特定の栄養バランスを意識した食事を摂りたいときに最適です。専門的な知識がなくても、AIが栄養面を考慮した献立を提案してくれるため、手軽に健康的な食生活を送ることができます。
              </PromptInfoCard>

              <PromptBlock title="プロンプト">{`〇〇（目的：例：ダイエット、筋力アップ、健康維持）のための、〇日分の献立を提案してください。

【考慮してほしい栄養素/条件】
- 〇〇（例：高タンパク質、低糖質、野菜多め、アレルギー食材など）

【その他条件（任意）】
- 〇〇（例：調理時間30分以内、和食中心、家族向けなど）

【出力形式】
- 日ごとの献立（主菜、副菜、汁物など）
- 各料理の簡単な説明
- 栄養素に関する簡単なコメント
`}</PromptBlock>

              <ResponseExample title="ChatGPTの回答例">{`ダイエットのための、3日分の献立を提案してください。

【考慮してほしい栄養素/条件】
- 高タンパク質、低糖質、野菜多め

【その他条件】
- 調理時間45分以内
- 飽きないように和洋中をバランス良く

【出力形式】
- 日ごとの献立（主菜、副菜、汁物など）
- 各料理の簡単な説明
- 栄養素に関する簡単なコメント
`}</ResponseExample>

              <ResponseExample title="ChatGPTの回答">
                <h3>1日目：高タンパク和風献立</h3>
                <ul>
                  <li><strong>主菜</strong>: 鶏むね肉のグリル 柚子胡椒風味
                    <ul>
                      <li>低脂肪高タンパクな鶏むね肉を香ばしく焼き上げ、柚子胡椒でさっぱりと。レモンを添えて。</li>
                    </ul>
                  </li>
                  <li><strong>副菜</strong>: ほうれん草とキノコのおひたし
                    <ul>
                      <li>ビタミン・ミネラル豊富なほうれん草と食物繊維が豊富なキノコを、出汁で和えたヘルシーな一品。</li>
                    </ul>
                  </li>
                  <li><strong>汁物</strong>: 豆腐とわかめのお味噌汁
                    <ul>
                      <li>植物性タンパク質が摂れる豆腐と、ミネラル豊富なわかめを使った定番のお味噌汁。</li>
                    </ul>
                  </li>
                  <li><strong>コメント</strong>: 鶏むね肉でしっかりタンパク質を摂取しつつ、野菜と海藻でビタミン・ミネラル・食物繊維を補給。低糖質で満足感のある献立です。</li>
                </ul>
                <h3>2日目：低糖質洋風献立</h3>
                <ul>
                  <li><strong>主菜</strong>: サーモンのハーブ焼き
                    <ul>
                      <li>良質な脂質（DHA・EPA）が豊富なサーモンを、ハーブとオリーブオイルでシンプルに焼き上げました。</li>
                    </ul>
                  </li>
                  <li><strong>副菜</strong>: ブロッコリーとカリフラワーの温野菜サラダ
                    <ul>
                      <li>食物繊維とビタミンCが豊富なブロッコリーとカリフラワーを蒸し、少量のドレッシングで。</li>
                    </ul>
                  </li>
                  <li><strong>スープ</strong>: 具だくさんミネストローネ（糖質オフ）
                    <ul>
                      <li>トマトベースに玉ねぎ、セロリ、キャベツなど野菜をたっぷり入れた、糖質を抑えたミネストローネ。</li>
                    </ul>
                  </li>
                  <li><strong>コメント</strong>: サーモンでオメガ3脂肪酸を摂取し、豊富な野菜でビタミン・食物繊維を確保。糖質を抑えつつ、彩り豊かで満足度の高い献立です。</li>
                </ul>
                <h3>3日目：野菜たっぷり中華風献立</h3>
                <ul>
                  <li><strong>主菜</strong>: 豚ヒレ肉とピーマンのチンジャオロース風
                    <ul>
                      <li>低脂肪な豚ヒレ肉とピーマン、たけのこをオイスターソースベースで炒めました。ご飯なしでも満足できる味付けです。</li>
                    </ul>
                  </li>
                  <li><strong>副菜</strong>: もやしとキュウリの中華風ナムル
                    <ul>
                      <li>シャキシャキとしたもやしとキュウリを、ごま油と鶏ガラスープの素で和えたさっぱりナムル。</li>
                    </ul>
                  </li>
                  <li><strong>スープ</strong>: 卵とトマトのふんわり中華スープ
                    <ul>
                      <li>鶏ガラスープに卵とトマトを加えた、優しい酸味ととろみが特徴のスープ。</li>
                    </ul>
                  </li>
                  <li><strong>コメント</strong>: 豚ヒレ肉でタンパク質を補給し、ピーマンやもやしで食物繊維を豊富に摂取。中華風の味付けで、低糖質でも飽きずに楽しめます。</li>
                </ul>
              </ResponseExample>

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>ダイエットや筋力アップなど、献立作成の目的を明確にすることで、AIがその目的に沿った栄養バランスを考慮してくれます。</li>
                  <li>考慮してほしい栄養素や避けるべき食材を具体的に指示することで、よりパーソナライズされた献立が得られます。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト3 */}
            <div id="prompt3">
              <h3>プロンプト3：イベント・シーン別献立作成</h3>

              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                パーティー、ピクニック、お弁当、クリスマスなど、特定のイベントやシーンに合わせた献立を提案してくれます。見た目の華やかさや、持ち運びやすさ、準備の手軽さなども考慮されます。
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                誕生日パーティー、クリスマスディナー、運動会のお弁当、友人とのピクニックなど、特別な日の食事や、普段とは異なるシーンでの食事を計画したいときに最適です。メニュー考案の手間を省き、イベント準備をスムーズに進めたい場合に活用できます。
              </PromptInfoCard>

              <PromptBlock title="プロンプト">{`〇〇（イベント/シーン：例：クリスマスディナー、運動会のお弁当、友人との宅飲み）に合わせた献立を提案してください。

【参加人数】
【その他条件（任意）】
- 〇〇（例：子供も食べやすい、見栄え重視、持ち運びやすい、アレルギー対応など）

【出力形式】
- 献立（メイン、サイド、デザートなど）
- 各料理の簡単な説明
- 準備のポイントやコツ
`}</PromptBlock>

              <ResponseExample title="ChatGPTの回答例">{`友人との宅飲みに合わせた献立を提案してください。

【参加人数】4人
【その他条件】
- 手軽に作れるもの
- 取り分けやすいもの
- お酒に合うもの

【出力形式】
- 献立（メイン、サイド、デザートなど）
- 各料理の簡単な説明
- 準備のポイントやコツ
`}</ResponseExample>

              <ResponseExample title="ChatGPTの回答">
                <h3>友人との宅飲み献立（4人分）</h3>
                <ul>
                  <li><strong>メイン</strong>: 鶏肉のハーブグリル
                    <ul>
                      <li>鶏もも肉をハーブとニンニクでマリネし、オーブンで焼くだけ。香ばしくてお酒が進みます。</li>
                    </ul>
                  </li>
                  <li><strong>サイド1</strong>: アボカドとエビの生春巻き
                    <ul>
                      <li>ライスペーパーでアボカド、エビ、野菜を巻いたヘルシーで見た目も華やかな一品。スイートチリソースで。</li>
                    </ul>
                  </li>
                  <li><strong>サイド2</strong>: カマンベールチーズのアヒージョ
                    <ul>
                      <li>カマンベールチーズを丸ごと使った贅沢なアヒージョ。バゲットを添えて。</li>
                    </ul>
                  </li>
                  <li><strong>サイド3</strong>: きのこのマリネ
                    <ul>
                      <li>数種類のきのこをオリーブオイルとレモン、ハーブでマリネ。作り置きも可能です。</li>
                    </ul>
                  </li>
                  <li><strong>デザート</strong>: フルーツ盛り合わせ
                    <ul>
                      <li>季節のフルーツをカットして盛り付けるだけ。食後の口直しにぴったり。</li>
                    </ul>
                  </li>
                </ul>
                <h3>準備のポイントとコツ</h3>
                <ol>
                  <li><strong>作り置きを活用</strong>: きのこのマリネは前日に作っておくと味が馴染んで美味しく、当日の手間が省けます。</li>
                  <li><strong>オーブンを有効活用</strong>: 鶏肉のグリルはオーブン任せでOK。焼いている間に他の料理に取り掛かれます。</li>
                  <li><strong>市販品も上手に利用</strong>: 生春巻きのソースや、アヒージョの具材の一部は市販品を活用すると時短になります。</li>
                  <li><strong>取り分けやすさ</strong>: 大皿料理は避け、各自で取りやすいように工夫しましょう。生春巻きやアヒージョは取り分けやすいです。</li>
                  <li><strong>飲み物との相性</strong>: ビール、ワイン、サワーなど、どんなお酒にも合うように、味付けは濃すぎず、さっぱりとしたものも用意しましょう。</li>
                </ol>
              </ResponseExample>

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>イベントやシーンを具体的に指定することで、AIがその状況に合わせた料理のアイデアを提案してくれます。</li>
                  <li>参加人数や、子供の有無、アレルギー対応など、詳細な条件を加えることで、より実用的な献立が得られます。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト4 */}
            <div id="prompt4">
              <h3>プロンプト4：冷蔵庫の余り物活用型献立作成</h3>

              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                冷蔵庫にある食材のリストを伝えることで、それらを組み合わせて作れる料理のアイデアと献立を提案してくれます。食品ロス削減にも貢献します。
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                「冷蔵庫にこれとこれがあるけど、何作ろう…」と悩んだときに最適です。買い物に行く手間を省き、手持ちの食材を無駄なく使い切りたい場合に活用できます。新しい料理の発見にも繋がります。
              </PromptInfoCard>

              <PromptBlock title="プロンプト">{`冷蔵庫にある以下の食材を使って、〇日分の献立を提案してください。

【冷蔵庫にある食材リスト】
- 〇〇
- 〇〇

【その他条件（任意）】
- 〇〇（例：調理時間30分以内、和食中心、節約レシピなど）

【出力形式】
- 日ごとの献立（主菜、副菜、汁物など）
- 各料理の簡単な説明
`}</PromptBlock>

              <ResponseExample title="ChatGPTの回答例">{`冷蔵庫にある以下の食材を使って、2日分の献立を提案してください。

【冷蔵庫にある食材リスト】
- 豚バラ肉（200g）
- 大根（1/2本）
- 油揚げ（2枚）
- 小松菜（1束）
- 卵（3個）
- ご飯

【その他条件】
- 節約レシピ
- 調理時間30分以内

【出力形式】
- 日ごとの献立（主菜、副菜、汁物など）
- 各料理の簡単な説明
`}</ResponseExample>

              <ResponseExample title="ChatGPTの回答">
                <h3>1日目：節約和風献立</h3>
                <ul>
                  <li><strong>主菜</strong>: 豚バラ大根
                    <ul>
                      <li>豚バラ肉と大根を甘辛く煮込んだ、ご飯が進む定番おかず。大根は下茹でなしでOK。</li>
                    </ul>
                  </li>
                  <li><strong>副菜</strong>: 小松菜のおひたし
                    <ul>
                      <li>茹でた小松菜を出汁醤油で和えるだけ。彩りも良く、栄養満点。</li>
                    </ul>
                  </li>
                  <li><strong>汁物</strong>: 油揚げと卵のお味噌汁
                    <ul>
                      <li>油揚げのコクと卵の優しい甘みが美味しいお味噌汁。余った卵を使い切ります。</li>
                    </ul>
                  </li>
                </ul>
                <h3>2日目：簡単中華風献立</h3>
                <ul>
                  <li><strong>主菜</strong>: 豚バラと小松菜の卵炒め
                    <ul>
                      <li>豚バラ肉と小松菜、溶き卵を中華風の味付けで炒めるだけ。ご飯に乗せても美味しい。</li>
                    </ul>
                  </li>
                  <li><strong>副菜</strong>: 大根と油揚げの煮物
                    <ul>
                      <li>前日の残りの大根と油揚げを、少し甘めの煮物に。もう一品欲しいときに便利。</li>
                    </ul>
                  </li>
                  <li><strong>ご飯</strong>: 卵かけご飯
                    <ul>
                      <li>残りの卵1個で、シンプルながらも美味しい卵かけご飯。お好みで醤油を。</li>
                    </ul>
                  </li>
                </ul>
              </ResponseExample>

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>冷蔵庫にある食材を具体的にリストアップすることで、AIがそれらを効率的に組み合わせた献立を提案してくれます。</li>
                  <li>節約や時短など、追加の条件を明確にすることで、より実用的なレシピが得られます。</li>
                </ul>
              </PromptInfoCard>
            </div>
          </section>

          {/* 活用のコツセクション */}
          <section id="tips">
            <h2>プロンプトをさらに活用するコツ</h2>
            <p>紹介したプロンプトの効果をさらに高めるためのコツをご紹介します。</p>
            <ul>
              <li><strong>具体的な情報を与える</strong>: 家族の人数、好み、アレルギー、調理器具の有無など、詳細な情報を与えることで、よりパーソナライズされた献立が得られます。</li>
              <li><strong>レシピサイトと連携する</strong>: ChatGPTが提案した献立を元に、具体的なレシピはレシピサイトで検索すると、よりスムーズに調理を進められます。</li>
              <li><strong>栄養計算ツールと組み合わせる</strong>: 栄養バランス重視の献立を作成する際は、栄養計算ツールと組み合わせることで、より正確な栄養管理が可能です。</li>
            </ul>
            <p>ChatGPT Plus（有料版）を利用すれば、より複雑な条件や、長期間の献立作成にも対応できます。GPT-4モデルは、より高度な思考力と創造性を持ち合わせているため、質の高い献立を効率的に生み出すことができます。</p>
          </section>

          {/* CTA */}
          <AffiliateBox
            title="ChatGPT Plusでさらに高精度な献立作成を"
            description="月額20ドルでGPT-4が使い放題。より複雑な条件や、長期間の献立作成も、正確かつ効率的に行えます。"
            buttonText="ChatGPT Plusを試してみる"
            buttonHref="https://chat.openai.com/auth/login"
            features={[
              "GPT-4モデルが使い放題",
              "混雑時も優先アクセス",
              "新機能への早期アクセス",
              "より複雑な条件の献立作成に対応",
            ]}
          />

          {/* 注意事項 */}
          <section id="notice">
            <h2>ChatGPT利用時の注意点</h2>
            <div className="bg-[#FFF8E6] border border-[#FF9800] rounded-lg p-5 my-4">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-[#FF9800]" />
                <span className="font-bold text-sm text-[#333333]">ご利用前にご確認ください</span>
              </div>
              <ul className="space-y-2 text-sm text-[#333333]">
                <li className="flex gap-2"><span>•</span>AIの回答は完璧ではありません。生成された献立は必ず内容を確認し、必要に応じて修正してください。</li>
                <li className="flex gap-2"><span>•</span>特に、アレルギー対応や厳密な栄養管理が必要な場合は、専門家のアドバイスを仰ぎましょう。</li>
                <li className="flex gap-2"><span>•</span>機密情報や個人情報を含む内容を入力する際は、会社のセキュリティポリシーを確認してください。</li>
                <li className="flex gap-2"><span>•</span>生成された献立の最終的な責任は利用者にあります。</li>
              </ul>
            </div>
          </section>

          {/* まとめ */}
          <section id="summary">
            <h2>まとめ</h2>
            <p>この記事では、ChatGPTで献立を作成するための4つのプロンプトをご紹介しました。</p>
            <ul>
              <li><strong>食材指定型献立作成</strong>: 冷蔵庫の余り物を有効活用したいときに</li>
              <li><strong>栄養バランス重視型献立作成</strong>: 健康管理やダイエットなど、特定の栄養バランスを意識したいときに</li>
              <li><strong>イベント・シーン別献立作成</strong>: 誕生日パーティーや運動会など、特別な日の食事を計画したいときに</li>
              <li><strong>冷蔵庫の余り物活用型献立作成</strong>: 手持ちの食材を無駄なく使い切りたいときに</li>
            </ul>
            <p>どのプロンプトもコピペするだけですぐに使えます。毎日の献立作成に行き詰まった際は、ぜひ今日からChatGPTを活用して、栄養バランスの取れた美味しい食事を楽しみましょう。</p>
          </section>

          <RelatedArticles articles={relatedArticles} />
        </ArticleContent>
      </div>
    </PageLayout>
  );
}
