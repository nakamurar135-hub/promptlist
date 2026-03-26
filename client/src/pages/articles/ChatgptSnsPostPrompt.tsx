
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
  { id: "intro", label: "ChatGPTでSNS投稿文作成、もう悩まない！" },
  { id: "about-chatgpt", label: "ChatGPTとは？初心者向けにわかりやすく解説" },
  { id: "prompts", label: "SNS投稿文作成に使えるプロンプト4選" },
  { id: "prompt1", label: "プロンプト1：新商品・サービス紹介投稿", level: 3 as const },
  { id: "prompt2", label: "プロンプト2：イベント告知投稿", level: 3 as const },
  { id: "prompt3", label: "プロンプト3：顧客の声・体験談紹介投稿", level: 3 as const },
  { id: "prompt4", label: "プロンプト4：Q&A形式の役立つ情報投稿", level: 3 as const },
  { id: "tips", label: "プロンプトをさらに活用するコツ" },
  { id: "notice", label: "ChatGPT利用時の注意点" },
  { id: "summary", label: "まとめ" },
];

const relatedArticles = [
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
  {
    title: "ChatGPTでそのまま使えるビジネスメール例文プロンプト10選",
    href: "/articles/chatgpt-business-email",
    description: "お礼・依頼・謝罪など、ビジネスシーンで使えるメール文面をAIが自動生成。",
  },
];

export default function ChatgptSnsPostPrompt() {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <ArticleHeader
          title="ChatGPTでSNS投稿文を作成するプロンプト4選｜コピペで使える実践例"
          description="ChatGPTでSNS投稿文を作成するプロンプトを4つご紹介。新商品紹介、イベント告知、顧客の声、Q&A形式まで、コピペで使える実践的なプロンプト集です。"
          category="コンテンツ作成"
          categoryColor="#FF9800"
          publishedAt="2026年3月5日"
          readingTime="約8分"
        />

        <TableOfContents items={tocItems} />

        <ArticleContent>
          {/* 導入セクション */}
          <section id="intro">
            <h2>ChatGPTでSNS投稿文作成、もう悩まない！</h2>
            <p>「SNSの投稿文を考えるのが苦手…」「毎日投稿したいけどネタが尽きる…」「もっと魅力的な投稿でフォロワーを増やしたい！」</p>
            <p>そんな悩みをお持ちの皆さんに向けて、この記事ではSNS投稿文作成に使える実践的なプロンプトを4つご紹介します。</p>
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
            <h2>SNS投稿文作成に使えるプロンプト4選</h2>
            <p>ここからは、実際にSNS投稿文作成で使えるプロンプトを4つご紹介します。用途に合わせてお使いください。</p>

            {/* プロンプト1 */}
            <div id="prompt1">
              <h3>プロンプト1：新商品・サービス紹介投稿</h3>

              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                新商品やサービスの魅力を効果的に伝えるSNS投稿文が生成されます。ターゲット層に響く言葉遣いや絵文字、ハッシュタグが自動で提案されます。
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                新商品や新サービスのリリース時、イベント告知、キャンペーン情報の発信など、注目を集めたいときに最適です。魅力的な投稿で、より多くのユーザーに情報を届けたい場合に活用できます。
              </PromptInfoCard>

              <PromptBlock title="プロンプト">{`あなたはプロのSNSマーケターです。以下の新商品/サービスについて、SNS（X/Instagram）で告知するための投稿文を作成してください。

【商品/サービス名】
【商品の特徴/メリット】
【ターゲット層】
【投稿の目的（例：認知度向上、購入促進、イベント参加）】
【含めたいキーワードやハッシュタグ】

【出力形式】
・ターゲット層に響く魅力的な投稿文（絵文字も活用）
・関連性の高いハッシュタグを5つ提案
・投稿文の文字数は140字以内（X向け）と300字以内（Instagram向け）の2パターン
`}</PromptBlock>

              <ResponseExample title="ChatGPTの回答例">{`【X向け】
🎉新登場！忙しいあなたのための時短美容液「ルミナスドロップ」✨
洗顔後これ一本で、化粧水・乳液・美容液の役割を果たすオールインワン！忙しい朝も疲れた夜も、これ一つでうるツヤ肌へ💖
#ルミナスドロップ #時短美容 #オールインワン美容液 #新商品 #スキンケア

【Instagram向け】
【新商品のお知らせ】
毎日頑張るあなたへ、特別な輝きを✨
ついに、時短と高品質を両立したオールインワン美容液「ルミナスドロップ」が誕生しました！

洗顔後、これ一本で化粧水、乳液、美容液のステップが完了。忙しい朝も、疲れて帰った夜も、あなたのスキンケアを強力にサポートします。

天然由来成分を贅沢に配合し、肌の奥*まで潤いを届け、内側から輝くようなツヤ肌へ導きます。ベタつかないのにしっかり潤うテクスチャーで、季節を問わず快適にお使いいただけます。

今なら発売記念キャンペーン実施中！詳しくはプロフィール欄のURLをチェックしてくださいね。

*角質層まで

#ルミナスドロップ #時短美容 #オールインワン美容液 #新商品 #スキンケア #美容液 #コスメ好きさんと繋がりたい #美肌ケア #忙しいママを応援
`}</ResponseExample>

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>ターゲット層を明確にすることで、より響く言葉遣いや表現が生成されます。</li>
                  <li>投稿の目的を具体的に指示することで、AIがそれに沿った内容を考案します。</li>
                  <li>XとInstagramで文字数制限や表現の傾向が異なるため、2パターンで出力させることで使い分けが容易になります。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト2 */}
            <div id="prompt2">
              <h3>プロンプト2：イベント告知投稿</h3>

              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                イベントの開催日時、場所、内容、参加方法などを分かりやすくまとめた告知投稿文が生成されます。参加を促す魅力的なキャッチコピーも提案されます。
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                ウェビナー、ワークショップ、展示会、オンライン交流会など、参加型イベントの告知に活用できます。イベントの魅力を最大限に伝え、参加者を増やしたい場合に役立ちます。
              </PromptInfoCard>

              <PromptBlock title="プロンプト">{`あなたはイベントプランナーです。以下のイベントについて、SNS（Facebook/X）で告知するための投稿文を作成してください。

【イベント名】
【開催日時】
【開催場所（オンライン/オフライン）】
【イベント内容の概要】
【参加対象者】
【参加費用】
【申し込み方法/URL】
【含めたいキーワードやハッシュタグ】

【出力形式】
・イベントの魅力を伝えるキャッチーな投稿文
・必要な情報が網羅されていること
・参加を促すCTA（Call To Action）を含める
・ハッシュタグを3つ提案
`}</PromptBlock>

              <ResponseExample title="ChatGPTの回答例">{`【Facebook向け】
✨無料ウェビナー開催！「AI時代のキャリア戦略」✨

「AIの進化で自分の仕事はどうなるの？」
「これからの時代に求められるスキルって？」

そんな疑問をお持ちのビジネスパーソン必見！

AIが急速に進化する現代において、私たちはどのようにキャリアを築いていけば良いのでしょうか？本ウェビナーでは、AI時代のキャリアを生き抜くための具体的な戦略と、今から身につけるべきスキルについて、専門家が徹底解説します。

📅開催日時：2026年3月20日(金) 19:00〜20:30
💻開催場所：オンライン（Zoom）
👤参加対象：AI時代のキャリアに不安を感じるビジネスパーソン、スキルアップを目指したい方
💰参加費用：無料

この機会に、あなたのキャリアの未来を一緒に考えませんか？

▼詳細・お申し込みはこちらから！
[https://example.com/webinar-ai-career]

#AIキャリア戦略 #ウェビナー #無料イベント #スキルアップ

【X向け】
【無料ウェビナー開催！】AI時代のキャリア戦略、どう描く？
3/20(金) 19:00〜、オンラインで専門家が徹底解説！
これからの時代に求められるスキル、不安を解消するヒントが満載です。
参加無料！今すぐチェック！
▼詳細・お申し込み
[https://example.com/webinar-ai-career]
#AIキャリア #キャリア戦略 #無料ウェビナー
`}</ResponseExample>

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>イベントの「魅力」を具体的に伝えることで、参加意欲を高めることができます。</li>
                  <li>開催日時、場所、参加費用、申し込み方法などの必須情報を漏れなく含めるよう指示しましょう。</li>
                  <li>CTA（Call To Action）を明確にすることで、ユーザーの次の行動を促します。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト3 */}
            <div id="prompt3">
              <h3>プロンプト3：顧客の声・体験談紹介投稿</h3>

              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                顧客からの感謝の声や商品・サービスの体験談を魅力的に紹介するSNS投稿文が生成されます。共感を呼び、信頼性を高める内容になります。
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                商品やサービスの信頼性を高めたいとき、ユーザーのリアルな声を届けたいときに活用できます。特に、購入を迷っている潜在顧客に対して、後押しとなる情報を提供したい場合に有効です。
              </PromptInfoCard>

              <PromptBlock title="プロンプト">{`あなたは顧客の声を魅力的に伝えるSNS担当者です。以下の顧客の声/体験談を元に、SNS（Instagram/Facebook）で紹介する投稿文を作成してください。

【顧客の声/体験談】
【紹介したい商品/サービス名】
【ターゲット層】
【投稿の目的（例：信頼性向上、購入促進）】
【含めたいキーワードやハッシュタグ】

【出力形式】
・顧客のリアルな声が伝わる投稿文
・共感を呼ぶストーリー性
・商品/サービスのメリットが自然に伝わること
・関連性の高いハッシュタグを5つ提案
`}</PromptBlock>

              <ResponseExample title="ChatGPTの回答例">{`【Instagram向け】
お客様の声をご紹介✨

先日、当社のオンライン英会話サービス「SpeakUp」をご利用いただいたA様から、嬉しいお声をいただきました！

「仕事で英語を使う機会が増え、自信を持って話せるようになりたいと思っていました。SpeakUpのマンツーマンレッスンは、私のレベルに合わせて丁寧に指導してくださり、苦手だった発音も驚くほど改善！今では海外のクライアントともスムーズにコミュニケーションが取れるようになりました。本当に感謝しています！」

A様、素敵な体験談をありがとうございます！

SpeakUpでは、一人ひとりの目標に合わせたパーソナルレッスンを提供しています。あなたも「話せる喜び」を体験しませんか？

▼無料体験レッスンはこちらから
[プロフィールURL]

#SpeakUp #オンライン英会話 #お客様の声 #英会話学習 #英語の勉強 #ビジネス英語 #スキルアップ #自信をつけたい

【Facebook向け】
【お客様の声】「自信を持って話せるように！」オンライン英会話SpeakUpのA様

「仕事で英語を使う機会が増え、自信を持って話せるようになりたいと思っていました。SpeakUpのマンツーマンレッスンは、私のレベルに合わせて丁寧に指導してくださり、苦手だった発音も驚くほど改善！今では海外のクライアントともスムーズにコミュニケーションが取れるようになりました。本当に感謝しています！」

オンライン英会話「SpeakUp」をご利用いただいたA様から、大変嬉しいお声を頂戴いたしました。

SpeakUpでは、経験豊富な講師陣があなたの英語学習を徹底サポート。ビジネス英会話から日常会話まで、幅広いニーズに対応しています。

「英語を話せるようになりたい」というあなたの想いを、私たちが全力で応援します。

▼まずは無料体験レッスンをお試しください！
[https://example.com/speakup]

#オンライン英会話 #SpeakUp #英会話レッスン #お客様の声 #英語学習 #ビジネススキル
`}</ResponseExample>

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>顧客の声をそのまま引用し、その声から得られる商品/サービスのメリットを強調しましょう。</li>
                  <li>ストーリー性を持たせることで、読者の共感を呼びやすくなります。</li>
                  <li>ターゲット層が抱える課題と、商品/サービスがその課題をどう解決したかを結びつけると効果的です。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト4 */}
            <div id="prompt4">
              <h3>プロンプト4：Q&A形式の役立つ情報投稿</h3>

              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                よくある質問（FAQ）に対する回答を、分かりやすく簡潔にまとめたSNS投稿文が生成されます。ユーザーの疑問を解消し、エンゲージメントを高める内容になります。
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                商品やサービスに関する疑問、業界のトレンド、役立つ豆知識など、ユーザーが知りたい情報をQ&A形式で提供したいときに活用できます。フォロワーからの質問に答える形で、インタラクティブなコンテンツを作成する際にも有効です。
              </PromptInfoCard>

              <PromptBlock title="プロンプト">{`あなたは専門知識を持つSNSインフルエンサーです。以下の質問と回答を元に、SNS（Instagram/X）で役立つ情報として投稿文を作成してください。

【質問】
【回答】
【関連する商品/サービス（任意）】
【ターゲット層】
【投稿の目的（例：情報提供、エンゲージメント向上）】
【含めたいキーワードやハッシュタグ】

【出力形式】
・Q&A形式で分かりやすい投稿文
・専門知識を簡潔に、平易な言葉で説明
・ユーザーが行動したくなるようなヒントやアドバイスを含める
・関連性の高いハッシュタグを3つ提案
`}</PromptBlock>

              <ResponseExample title="ChatGPTの回答例">{`【Instagram向け】
💡知ってた？コーヒーを飲むベストな時間☕️

「朝起きてすぐの一杯が日課！」という方も多いですよね。
でも実は、コーヒーを飲むのに最適な時間があるんです！

【質問】コーヒーを飲むベストな時間っていつ？
【回答】
コルチゾールというストレスホルモンが分泌されにくい時間帯がおすすめです。
具体的には、**午前9時半〜11時半**、**午後1時半〜5時**が理想的と言われています。

朝起きてすぐはコルチゾール値が高いので、この時間にコーヒーを飲むと、カフェインの効果を感じにくかったり、かえってストレスを感じやすくなることも。

ぜひ、コーヒーを飲む時間を少しずらして、カフェインの効果を最大限に引き出してみてくださいね！

#コーヒー豆知識 #カフェイン #健康習慣 #コーヒー好き #ライフハック #集中力アップ

【X向け】
【意外と知らない？】コーヒーを飲むベストな時間☕️
朝起きてすぐの一杯、実はもったいないかも？！

✅ベストな時間：午前9時半〜11時半、午後1時半〜5時

コルチゾール値が低い時間に飲むと、カフェイン効果を最大限に感じられます✨
今日から試してみては？
#コーヒー #カフェイン #ライフハック
`}</ResponseExample>

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>質問と回答を明確にすることで、ユーザーは知りたい情報を素早く見つけられます。</li>
                  <li>専門用語は避け、平易な言葉で説明することで、幅広い層のユーザーに理解してもらえます。</li>
                  <li>投稿の最後に具体的な行動を促すヒントやアドバイスを加えることで、ユーザーのエンゲージメントを高めます。</li>
                </ul>
              </PromptInfoCard>
            </div>
          </section>

          {/* 活用のコツセクション */}
          <section id="tips">
            <h2>プロンプトをさらに活用するコツ</h2>
            <p>紹介したプロンプトの効果をさらに高めるためのコツをご紹介します。</p>
            <ul>
              <li><strong>具体的に指示する</strong>: ターゲット層、目的、含めたいキーワードなどを具体的に指示することで、より精度の高い投稿文が生成されます。</li>
              <li><strong>出力形式を明確にする</strong>: 「絵文字を使って」「ハッシュタグを5つ提案」など、出力してほしい形式を明確に伝えることで、期待通りの結果が得られます。</li>
              <li><strong>複数回試す</strong>: 一度で完璧な投稿文が生成されなくても、何度かプロンプトを調整して試すことで、より良い結果に近づけます。</li>
            </ul>
            <p>ChatGPT Plus（有料版）を利用すれば、より長い投稿文の作成や、複雑な指示にも対応できるGPT-4モデルが利用可能です。SNS運用を本格的に行いたい方は、ぜひ検討してみてください。</p>
          </section>

          {/* CTA */}
          <AffiliateBox
            title="ChatGPT Plusでさらに高精度なSNS投稿文作成を"
            description="月額20ドルでGPT-4が使い放題。より複雑な指示や長文の投稿文作成も正確に行えます。"
            buttonText="ChatGPT Plusを試してみる"
            buttonHref="https://chat.openai.com/auth/login"
            features={[
              "GPT-4モデルが使い放題",
              "混雑時も優先アクセス",
              "新機能への早期アクセス",
              "より長い文章の入力・出力に対応",
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
                <li className="flex gap-2"><span>•</span>AIの回答は完璧ではありません。生成された投稿文は必ず内容を確認し、必要に応じて修正してください。</li>
                <li className="flex gap-2"><span>•</span>企業やブランドの公式SNS投稿として使用する場合は、特に慎重に内容をチェックしましょう。</li>
                <li className="flex gap-2"><span>•</span>機密情報や個人情報を含む内容を入力する際は、会社のセキュリティポリシーを確認してください。</li>
                <li className="flex gap-2"><span>•</span>生成された投稿文の最終的な責任は利用者にあります。</li>
              </ul>
            </div>
          </section>

          {/* まとめ */}
          <section id="summary">
            <h2>まとめ</h2>
            <p>この記事では、ChatGPTでSNS投稿文を作成するための4つのプロンプトをご紹介しました。</p>
            <ul>
              <li><strong>新商品・サービス紹介投稿</strong>: 新しい情報の発信に</li>
              <li><strong>イベント告知投稿</strong>: 参加型イベントの集客に</li>
              <li><strong>顧客の声・体験談紹介投稿</strong>: 信頼性向上に</li>
              <li><strong>Q&A形式の役立つ情報投稿</strong>: エンゲージメント向上に</li>
            </ul>
            <p>どのプロンプトもコピペするだけですぐに使えます。SNS運用に悩んでいる方は、ぜひ今日からChatGPTを活用して、魅力的な投稿を作成してみてください。</p>
          </section>

          <RelatedArticles articles={relatedArticles} />
        </ArticleContent>
      </div>
    </PageLayout>
  );
}
