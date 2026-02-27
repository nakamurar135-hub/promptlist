import PageLayout from "@/components/layout/PageLayout";
import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleContent from "@/components/article/ArticleContent";
import PromptBlock from "@/components/article/PromptBlock";
import PromptInfoCard from "@/components/article/PromptInfoCard";
import ResponseExample from "@/components/article/ResponseExample";
import TableOfContents from "@/components/article/TableOfContents";
import AffiliateBox from "@/components/article/AffiliateBox";
import RelatedArticles from "@/components/article/RelatedArticles";
import { AlertTriangle } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";

const tocItems = [
  { id: "intro", label: "LINEの返信、悩んでいませんか？" },
  { id: "prompts", label: "ChatGPTでLINE返信を作るプロンプト集" },
  { id: "prompt1", label: "プロンプト1：友人・知人へのカジュアルな返信", level: 3 as const },
  { id: "prompt2", label: "プロンプト2：目上の方・上司へのフォーマルな返信", level: 3 as const },
  { id: "prompt3", label: "プロンプト3：断りの返信", level: 3 as const },
  { id: "prompt4", label: "プロンプト4：相談・悩みへの返信", level: 3 as const },
  { id: "prompt5", label: "プロンプト5：グループLINEへの返信", level: 3 as const },
  { id: "tips", label: "LINE返信をさらに自然にするコツ" },
  { id: "notice", label: "ChatGPT利用時の注意点" },
  { id: "summary", label: "まとめ" },
];

const relatedArticles = [
  {
    title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集",
    href: "/articles/chatgpt-question-template",
    description: "ChatGPTを使いこなすための基本的な質問テクニックを解説。",
  },
  {
    title: "ChatGPTでそのまま使えるビジネスメール例文プロンプト10選",
    href: "/articles/chatgpt-business-email",
    description: "お礼・依頼・謝罪など、ビジネスシーンで使えるメール文面をAIが自動生成。",
  },
  {
    title: "ChatGPTで志望動機を書くプロンプト",
    href: "/articles/chatgpt-job-motivation",
    description: "転職・就職活動で使える志望動機の作成をサポート。",
  },
];

export default function ChatgptLineReply() {
  useSEO({
    title: "ChatGPTでLINE返信を作るプロンプト｜カジュアルからフォーマルまで対応",
    description: "返信に悉むLINEメッセージへの対応をChatGPTがサポート。友人へのカジュアルな返信から、上司へのフォーマルな返信、断りの文面まで、コピペで使えるプロンプト5選をご紹介します。",
    keywords: "ChatGPT,LINE返信,プロンプト,SNS,断り方,上司への返信,カジュアル,フォーマル,AI,日常会話",
  });
  useOGP({
    title: "ChatGPTでLINE返信を作るプロンプト",
    description: "返信に悩むLINEメッセージへの対応をAIがサポート。カジュアルからフォーマルまで対応。",
    type: "article",
  });

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <ArticleHeader
          title="ChatGPTでLINE返信を作るプロンプト｜カジュアルからフォーマルまで対応"
          description="返信に悩むLINEメッセージへの対応をChatGPTがサポートします。友人へのカジュアルな返信から、上司へのフォーマルな返信、断りの文面まで、コピペで使えるプロンプト5選をご紹介します。"
          category="日常・カジュアル"
          categoryColor="#E91E63"
          publishedAt="2026年2月9日"
          readingTime="約6分"
        />
        <TableOfContents items={tocItems} />
        <ArticleContent>
          {/* 導入セクション */}
          <section id="intro">
            <h2>LINEの返信、悩んでいませんか？</h2>
            <p>「なんて返せばいいかわからなくて、既読スルーしてしまった...」「断りたいけど、角が立たない言い方がわからない...」「目上の方からのLINEに、どう返せば失礼にならないか迷う...」</p>
            <p>LINEは気軽なコミュニケーションツールですが、相手や状況によっては返信の言葉選びに悩むことも多いですよね。</p>
            <p>この記事では、ChatGPTを使ってLINEの返信文を素早く作成するためのプロンプトを5種類ご紹介します。相手との関係性やシーンに合わせた返信文が、コピペするだけで作れます。</p>
          </section>

          {/* プロンプト集セクション */}
          <section id="prompts">
            <h2>ChatGPTでLINE返信を作るプロンプト集</h2>
            <p>それでは、シーン別にプロンプトをご紹介します。【】内の部分をご自身の状況に合わせて書き換えてお使いください。</p>

            {/* プロンプト1 */}
            <div id="prompt1">
              <h3>プロンプト1：友人・知人へのカジュアルな返信</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                自然でフレンドリーなLINE返信文が生成されます。絵文字の使い方や、会話が続くような一言も含まれます。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                友人からの誘い、久しぶりの連絡、日常的なやり取りなど、カジュアルな返信が必要なときに使えます。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`友人・知人へのカジュアルなLINE返信文を作成してください。

【受け取ったメッセージ】：
【ここに相手からのLINEメッセージを貼り付ける】

【返信の方向性】：【承諾/断り/相談/雑談など】
【伝えたいこと】：【返信で伝えたいことを箇条書きで】
【関係性】：【親友/友人/知人/同僚など】

条件：
・カジュアルで自然な文体
・絵文字を適度に使用（使いすぎない）
・会話が続くような一言を含める
・2〜3パターン作成してください`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例（週末の飲み会の誘いへの返信）">{`【パターン1：参加できる場合】
いいね！行く行く😊
何時から？場所はどこ？

【パターン2：参加できるか微妙な場合】
楽しそう！行きたいな〜
ちょっと予定確認してみる！
明日までに返事してもいい？😅

【パターン3：参加できない場合】
誘ってくれてありがとう！
その日はちょっと先約があって...😢
また次回ぜひ誘って！`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>「2〜3パターン作成」と指示することで、状況に合わせて選べます。</li>
                  <li>「会話が続くような一言を含める」と指示することで、やり取りが自然に続きます。</li>
                  <li>生成された文章は、自分らしい言葉に少し修正してから送りましょう。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト2 */}
            <div id="prompt2">
              <h3>プロンプト2：目上の方・上司へのフォーマルな返信</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                丁寧な敬語で書かれた、失礼のないLINE返信文が生成されます。LINEらしいコンパクトさを保ちながら、礼儀正しい文面が作成されます。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                上司・先輩・取引先など、目上の方からのLINEへの返信が必要なときに使えます。ビジネスシーンでのLINEにも対応しています。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`目上の方・上司へのフォーマルなLINE返信文を作成してください。

【受け取ったメッセージ】：
【ここに相手からのLINEメッセージを貼り付ける】

【返信の方向性】：【承諾/確認/お礼/報告など】
【伝えたいこと】：【返信で伝えたいことを箇条書きで】
【相手との関係】：【直属の上司/先輩/取引先/目上の知人など】

条件：
・丁寧な敬語を使用
・LINEらしいコンパクトさを保つ（長すぎない）
・絵文字は使わない
・2パターン作成してください（簡潔版と丁寧版）`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例（上司からの食事の誘いへの返信）">{`【簡潔版】
ありがとうございます。
ぜひよろしくお願いいたします。
日程はご都合に合わせます。

【丁寧版】
お誘いいただきありがとうございます。
ぜひご一緒させていただきたいと思います。
日程はご都合のよい日をお知らせいただけますと幸いです。
よろしくお願いいたします。`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>LINEはメールより短い文章が適切です。「コンパクトさを保つ」と指示しましょう。</li>
                  <li>「簡潔版と丁寧版」の2パターンを生成することで、状況に合わせて選べます。</li>
                  <li>絵文字は目上の方へのLINEでは使わない方が無難です。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト3 */}
            <div id="prompt3">
              <h3>プロンプト3：断りの返信</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                相手を傷つけず、関係を維持しながら丁寧に断るLINE返信文が生成されます。断る理由の伝え方と、今後の関係への配慮が自然に盛り込まれます。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                誘いを断りたいとき、頼まれごとを断りたいとき、角が立たない断り方を考えたいときに使えます。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`断りのLINE返信文を作成してください。

【受け取ったメッセージ（断りたい内容）】：
【ここに相手からのLINEメッセージを貼り付ける】

【断る理由（本音）】：【実際の断る理由】
【相手との関係】：【友人/上司/知人など】
【今後の関係】：【今後も良い関係を続けたいかどうか】

条件：
・相手を傷つけない言い方
・理由は具体的すぎず、自然な表現で
・今後の関係への配慮を含める
・相手の立場に合わせた文体（カジュアル/フォーマル）
・2パターン作成してください`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例（友人からの飲み会の誘いを断る場合）">{`【パターン1：シンプルに断る】
誘ってくれてありがとう！
その日はちょっと都合が悪くて...😢
また次回ぜひ！

【パターン2：理由を少し説明する】
誘ってくれてありがとう！
その日は先約があって参加できないんだ...
ごめんね！また別の機会に誘って😊`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>断る理由は「都合が悪くて」「先約があって」など、詳細を言わない方が自然です。</li>
                  <li>「また次回ぜひ」という一言で、関係を維持する意思を示せます。</li>
                  <li>断った後に代替案（「別の日はどう？」など）を提示すると、より丁寧な印象になります。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト4 */}
            <div id="prompt4">
              <h3>プロンプト4：相談・悩みへの返信</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                相手の気持ちに寄り添った、共感を示す返信文が生成されます。アドバイスを押しつけず、相手が話しやすい雰囲気を作る文面が作成されます。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                友人から悩みを打ち明けられたとき、相談を受けたとき、励ましの言葉をかけたいときに使えます。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`相談・悩みへの共感的なLINE返信文を作成してください。

【相手の悩み・相談内容】：
【ここに相手からのLINEメッセージを貼り付ける】

【相手との関係】：【親友/友人/知人など】
【返信の方向性】：【共感・傾聴/アドバイス/励まし/一緒に考えるなど】
【自分にできること】：【直接会う/電話する/話を聞くなど、できることがあれば】

条件：
・相手の気持ちに寄り添った文体
・アドバイスを押しつけない
・相手が話しやすい雰囲気を作る
・必要であれば、さらに話を聞く姿勢を示す`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例（仕事の悩みを打ち明けられた場合）">{`それは大変だったね...
話してくれてありがとう😢

仕事のこと、すごく辛そうで心配してたよ。
もし良かったら、もう少し詳しく聞かせてくれる？

一人で抱え込まないでね。
いつでも話聞くよ💙`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>「話してくれてありがとう」という一言で、相手が打ち明けてくれたことへの感謝を示せます。</li>
                  <li>「もう少し詳しく聞かせてくれる？」と続けることで、相手が話しやすくなります。</li>
                  <li>すぐにアドバイスをするより、まず共感・傾聴の姿勢を示すことが大切です。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト5 */}
            <div id="prompt5">
              <h3>プロンプト5：グループLINEへの返信</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                グループ全体に向けた、適切なトーンの返信文が生成されます。グループの雰囲気を壊さず、全員に伝わりやすい文面が作成されます。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                友人グループ・職場グループ・地域コミュニティなど、グループLINEへの返信が必要なときに使えます。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`グループLINEへの返信文を作成してください。

【グループの種類・メンバー】：【友人グループ/職場グループ/地域コミュニティなど】
【グループでのやり取りの内容】：
【ここにグループLINEのやり取りを貼り付ける】

【返信の目的】：【参加表明/意見表明/情報共有/お礼など】
【伝えたいこと】：【返信で伝えたいことを箇条書きで】
【グループの雰囲気】：【カジュアル/フォーマル/ビジネスなど】

条件：
・グループ全体に向けた文体
・グループの雰囲気に合わせたトーン
・簡潔でわかりやすい文章`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例（友人グループの旅行計画への返信）">{`みんなありがとう！
私も参加したい！✈️

日程は〇月〇日〜〇日で大丈夫です。
宿は温泉宿がいいな〜笑

詳細決まったら教えて！楽しみにしてる😊`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>グループLINEでは「みんなへ」という意識で書くと、全員に伝わりやすくなります。</li>
                  <li>自分の意見や希望を明確に伝えることで、グループの議論が進みやすくなります。</li>
                  <li>職場グループの場合は、絵文字を控えめにするなど、グループの雰囲気に合わせましょう。</li>
                </ul>
              </PromptInfoCard>
            </div>
          </section>

          {/* 活用のコツセクション */}
          <section id="tips">
            <h2>LINE返信をさらに自然にするコツ</h2>
            <p>ChatGPTで生成したLINE返信をさらに自然にするためのコツをご紹介します。</p>
            <ul>
              <li><strong>自分らしい言葉に直す</strong>：AIが生成した文章は、自分がいつも使う言い回しに少し修正することで、より自然な返信になります。</li>
              <li><strong>相手のメッセージをそのまま入力する</strong>：相手からのメッセージをそのまま入力することで、文脈に合った返信が生成されます。</li>
              <li><strong>複数のパターンから選ぶ</strong>：「3パターン作成してください」と指示することで、状況に合ったものを選べます。</li>
              <li><strong>送信前に読み返す</strong>：生成された文章を送信前に必ず読み返し、自分の気持ちと合っているか確認しましょう。</li>
            </ul>
          </section>

          {/* CTA */}
          <AffiliateBox
            title="ChatGPT Plusでさらに自然な返信を"
            description="月額20ドルでGPT-4が使い放題。より文脈を理解した、自然なLINE返信文が生成できます。"
            buttonText="ChatGPT Plusを試してみる"
            buttonHref="https://chat.openai.com/auth/login"
            features={[
              "GPT-4モデルが使い放題",
              "より文脈を理解した自然な文章生成",
              "複雑な状況にも対応",
              "混雑時も優先アクセス",
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
                <li className="flex gap-2"><span>•</span>相手のLINEメッセージをChatGPTに入力する際は、個人情報（氏名・住所・電話番号など）を含めないようにしてください。</li>
                <li className="flex gap-2"><span>•</span>AIが生成した返信はあくまで「参考」です。自分の気持ちと合っているか確認してから送信してください。</li>
                <li className="flex gap-2"><span>•</span>相手との関係性や状況によっては、AIの提案が適切でない場合があります。最終的な判断は自分で行いましょう。</li>
                <li className="flex gap-2"><span>•</span>第三者のプライバシーに関わる内容をChatGPTに入力することは避けてください。</li>
              </ul>
            </div>
          </section>

          {/* まとめ */}
          <section id="summary">
            <h2>まとめ</h2>
            <p>この記事では、ChatGPTを使ってLINE返信を作成するためのプロンプトを5種類ご紹介しました。</p>
            <ul>
              <li><strong>友人・知人へのカジュアルな返信</strong>：自然でフレンドリーな文面</li>
              <li><strong>目上の方・上司へのフォーマルな返信</strong>：丁寧な敬語で失礼のない文面</li>
              <li><strong>断りの返信</strong>：相手を傷つけずに断る文面</li>
              <li><strong>相談・悩みへの返信</strong>：共感を示す寄り添った文面</li>
              <li><strong>グループLINEへの返信</strong>：全員に伝わりやすい文面</li>
            </ul>
            <p>LINEの返信に悩んだときは、ぜひChatGPTを活用してみてください。ただし、生成された文章はあくまで「参考」として、自分の言葉に直してから送ることをおすすめします。</p>
          </section>

          <RelatedArticles articles={relatedArticles} />
        </ArticleContent>
      </div>
    </PageLayout>
  );
}
