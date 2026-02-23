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

const tocItems = [
  { id: "intro", label: "ビジネスメール作成、時間がかかっていませんか？" },
  { id: "prompts", label: "そのまま使えるビジネスメールプロンプト10選" },
  { id: "prompt1", label: "1. お礼メール", level: 3 as const },
  { id: "prompt2", label: "2. 依頼メール", level: 3 as const },
  { id: "prompt3", label: "3. 謝罪メール", level: 3 as const },
  { id: "prompt4", label: "4. 確認・問い合わせメール", level: 3 as const },
  { id: "prompt5", label: "5. 日程調整メール", level: 3 as const },
  { id: "prompt6", label: "6. 断りメール", level: 3 as const },
  { id: "prompt7", label: "7. 報告・連絡メール", level: 3 as const },
  { id: "prompt8", label: "8. 提案・売り込みメール", level: 3 as const },
  { id: "prompt9", label: "9. フォローアップメール", level: 3 as const },
  { id: "prompt10", label: "10. 社内通知・アナウンスメール", level: 3 as const },
  { id: "tips", label: "メール品質をさらに高めるコツ" },
  { id: "notice", label: "ChatGPT利用時の注意点" },
  { id: "summary", label: "まとめ" },
];

const relatedArticles = [
  {
    title: "ChatGPTで議事録を作成するプロンプト4選",
    href: "/articles/chatgpt-meeting-minutes",
    description: "会議メモから自動で議事録を生成。コピペで使える実践的なプロンプト集。",
  },
  {
    title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集",
    href: "/articles/chatgpt-question-template",
    description: "ChatGPTを使いこなすための基本的な質問テクニックを解説。",
  },
  {
    title: "ChatGPTでLINE返信を作るプロンプト",
    href: "/articles/chatgpt-line-reply",
    description: "返信に悩むLINEメッセージへの対応をAIがサポート。",
  },
];

export default function ChatgptBusinessEmail() {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <ArticleHeader
          title="ChatGPTでそのまま使えるビジネスメール例文プロンプト10選"
          description="お礼・依頼・謝罪・日程調整など、ビジネスシーンで頻繁に使うメール文面をChatGPTで自動生成するプロンプトを10種類ご紹介します。コピペして使えるので、メール作成の時間を大幅に短縮できます。"
          category="ビジネス文書"
          categoryColor="#5B9BD5"
          publishedAt="2026年2月6日"
          readingTime="約8分"
        />
        <TableOfContents items={tocItems} />
        <ArticleContent>
          {/* 導入セクション */}
          <section id="intro">
            <h2>ビジネスメール作成、時間がかかっていませんか？</h2>
            <p>「お礼メールの書き方がわからない...」「謝罪メールの言葉選びが難しい...」「毎回同じようなメールを書くのが面倒...」</p>
            <p>ビジネスメールは、内容は単純でも適切な敬語や言い回しを考えるのに意外と時間がかかるものです。</p>
            <p>この記事では、ChatGPTを使ってビジネスメールを素早く作成するためのプロンプトを10種類ご紹介します。【】内を書き換えるだけで使えるので、今日からメール作成の時間を大幅に短縮できます。</p>
          </section>

          {/* プロンプト集セクション */}
          <section id="prompts">
            <h2>そのまま使えるビジネスメールプロンプト10選</h2>
            <p>それでは、シーン別にプロンプトをご紹介します。【】内の部分をご自身の状況に合わせて書き換えてお使いください。</p>

            {/* プロンプト1 */}
            <div id="prompt1">
              <h3>1. お礼メール</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                件名から本文まで、丁寧な敬語で書かれたお礼メールが生成されます。感謝の気持ちと今後の関係継続への意欲が自然な形で盛り込まれます。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                商談後のお礼、資料を送ってもらったお礼、面接後のお礼など、感謝を伝えるメールが必要なあらゆる場面で使えます。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`以下の状況に合わせたお礼メールを作成してください。

【送り先】：【相手の名前・会社名・役職】
【お礼の理由】：【何に対するお礼か】
【特に感謝したいこと】：【具体的に印象に残ったことや役立ったこと】
【今後の展開】：【次のアクションや関係継続の意向があれば】

丁寧なビジネス敬語で、件名と本文をセットで作成してください。`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例">{`件名：先日のご面談のお礼

株式会社〇〇
営業部 山田太郎様

いつもお世話になっております。
株式会社△△の鈴木と申します。

先日はご多忙の中、貴重なお時間をいただきありがとうございました。

ご説明いただいた新サービスの内容、特に導入後のサポート体制について詳しくご説明いただき、大変参考になりました。弊社の課題解決に向けて、前向きに検討を進めてまいります。

改めて詳細なお見積りをいただけますと幸いです。引き続きよろしくお願いいたします。

株式会社△△
営業部 鈴木一郎
TEL：03-XXXX-XXXX`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>「特に感謝したいこと」を具体的に書くと、定型文っぽくない温かみのあるメールになります。</li>
                  <li>「今後の展開」を含めることで、次のアクションにつながるメールが作れます。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト2 */}
            <div id="prompt2">
              <h3>2. 依頼メール</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                依頼内容が明確で、相手が承諾しやすい丁寧な依頼メールが生成されます。期限や条件も自然な形で盛り込まれます。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                資料の送付依頼、作業のお願い、情報提供の依頼など、相手に何かをお願いするメールが必要なときに使えます。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`以下の状況に合わせた依頼メールを作成してください。

【送り先】：【相手の名前・会社名・役職】
【依頼内容】：【何をお願いしたいか、具体的に】
【依頼の背景・理由】：【なぜお願いするのか】
【期限】：【いつまでに対応してほしいか】
【お礼・配慮】：【相手への感謝や負担への配慮があれば】

丁寧なビジネス敬語で、件名と本文をセットで作成してください。`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例">{`件名：【ご依頼】製品カタログのご送付のお願い

株式会社〇〇
営業部 田中様

いつもお世話になっております。
株式会社△△の佐藤でございます。

先日のご説明会では、貴社の新製品について大変興味深いお話をいただきありがとうございました。

つきましては、社内での検討を進めるにあたり、製品カタログと価格表をご送付いただけますでしょうか。

お手数をおかけして大変恐縮ですが、今月末までにいただけますと大変助かります。

ご多忙の中、誠に恐れ入りますが、何卒よろしくお願いいたします。

株式会社△△
佐藤花子`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>依頼の背景・理由を明示することで、相手が承諾しやすくなります。</li>
                  <li>期限は「〇月〇日まで」と具体的に指定するとより明確なメールになります。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト3 */}
            <div id="prompt3">
              <h3>3. 謝罪メール</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                誠実さが伝わる謝罪メールが生成されます。言い訳をせず、再発防止策も含めた信頼回復につながる文面が作成されます。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                ミスや遅延が発生したとき、相手に迷惑をかけてしまったとき、約束を守れなかったときなど、謝罪が必要な場面で使えます。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`以下の状況に合わせた謝罪メールを作成してください。

【送り先】：【相手の名前・会社名・役職】
【謝罪の理由】：【何についての謝罪か、具体的に】
【相手への影響・迷惑】：【相手にどんな迷惑をかけたか】
【再発防止策】：【今後どのように対応するか】
【今後の対応】：【補償や代替案があれば】

誠実で丁寧なビジネス敬語で、件名と本文をセットで作成してください。言い訳はせず、真摯な謝罪の姿勢を示してください。`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例">{`件名：【お詫び】納品遅延についてのご報告

株式会社〇〇
購買部 鈴木様

平素より大変お世話になっております。
株式会社△△の山田でございます。

この度は、ご注文いただいた商品の納品が予定日より3日遅延してしまいましたこと、誠に申し訳ございませんでした。

ご迷惑をおかけしたことを深くお詫び申し上げます。

今回の遅延は、製造工程における部品調達の遅れが原因でございました。今後は在庫管理の見直しと、複数サプライヤーとの取引を強化することで、再発防止に努めてまいります。

なお、今回の遅延に伴うご不便に対しまして、次回ご注文時に5%の割引をご提供させていただきます。

改めて深くお詫び申し上げますとともに、今後ともご愛顧のほどよろしくお願いいたします。

株式会社△△
営業部 山田太郎`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>「言い訳はせず」と指示することで、誠実な謝罪文が生成されます。</li>
                  <li>再発防止策を含めることで、単なる謝罪ではなく信頼回復につながるメールになります。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト4 */}
            <div id="prompt4">
              <h3>4. 確認・問い合わせメール</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                確認したい事項が明確に整理された問い合わせメールが生成されます。相手が回答しやすいよう、質問が箇条書きで整理されます。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                契約内容の確認、仕様の問い合わせ、手続きの確認など、相手に質問・確認が必要なときに使えます。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`以下の状況に合わせた確認・問い合わせメールを作成してください。

【送り先】：【相手の名前・会社名・役職】
【確認・問い合わせの背景】：【なぜ確認が必要か】
【確認したい事項】：【質問事項を箇条書きで記載】
【希望する回答期限】：【いつまでに回答が欲しいか】

丁寧なビジネス敬語で、件名と本文をセットで作成してください。質問事項は番号を振って整理してください。`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例">{`件名：【ご確認】契約内容についてのお問い合わせ

株式会社〇〇
契約管理部 佐々木様

いつもお世話になっております。
株式会社△△の中村でございます。

先日ご送付いただきました契約書について、以下の点を確認させていただきたく、ご連絡いたしました。

ご確認いただきたい事項：
1. 第3条の「納品期限」について、祝日が含まれる場合の取り扱いはいかがでしょうか。
2. 第7条の「保証期間」は、納品日から起算してよろしいでしょうか。
3. 追加発注が生じた場合の単価は、本契約書の単価が適用されますでしょうか。

お手数をおかけして恐縮ですが、今週中にご回答いただけますと大変助かります。

何卒よろしくお願いいたします。

株式会社△△
中村美咲`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>質問事項を番号付きで整理することで、相手が回答しやすくなります。</li>
                  <li>回答期限を明示することで、対応の優先度を相手に伝えられます。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト5 */}
            <div id="prompt5">
              <h3>5. 日程調整メール</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                複数の候補日時を提示した日程調整メールが生成されます。相手が選択しやすいよう、候補が見やすく整理されます。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                打ち合わせ・商談・面接などの日程を調整するメールが必要なときに使えます。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`以下の状況に合わせた日程調整メールを作成してください。

【送り先】：【相手の名前・会社名・役職】
【打ち合わせの目的】：【何のための打ち合わせか】
【候補日時】：【3〜4つの候補日時を記載】
【所要時間】：【打ち合わせの予定時間】
【場所・形式】：【対面/オンライン、場所があれば記載】

丁寧なビジネス敬語で、件名と本文をセットで作成してください。`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例">{`件名：【日程調整のお願い】新規プロジェクトのご相談について

株式会社〇〇
企画部 高橋様

いつもお世話になっております。
株式会社△△の木村でございます。

先日ご相談いたしました新規プロジェクトについて、詳しくお話しさせていただきたく、打ち合わせのお時間をいただけますでしょうか。

つきましては、以下の日程でご都合のよろしい日時をお知らせいただけますと幸いです。

【候補日時】（所要時間：約1時間）
① 3月5日（水）14:00〜15:00
② 3月6日（木）10:00〜11:00
③ 3月7日（金）15:00〜16:00
④ 3月10日（月）13:00〜14:00

なお、オンライン（Zoom）での実施を想定しておりますが、ご希望があれば貴社にお伺いすることも可能です。

ご多忙の中、誠に恐れ入りますが、ご確認のほどよろしくお願いいたします。

株式会社△△
木村誠`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>候補日時は3〜4つ提示することで、相手が選択しやすくなります。</li>
                  <li>所要時間を明示することで、相手がスケジュールを確保しやすくなります。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト6 */}
            <div id="prompt6">
              <h3>6. 断りメール</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                相手を傷つけず、関係を維持しながら丁寧に断るメールが生成されます。断る理由と今後の関係への配慮が自然に盛り込まれます。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                提案の断り、依頼の辞退、招待の断りなど、相手の申し出を丁寧に断る必要があるときに使えます。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`以下の状況に合わせた断りメールを作成してください。

【送り先】：【相手の名前・会社名・役職】
【断る内容】：【何を断るのか】
【断る理由】：【なぜ断るのか（差し障りない範囲で）】
【今後の関係】：【今後も関係を続けたい場合はその旨を記載】

相手への敬意を保ちながら、丁寧に断るビジネスメールを件名と本文をセットで作成してください。`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例">{`件名：【ご回答】ご提案についてのご連絡

株式会社〇〇
営業部 渡辺様

いつもお世話になっております。
株式会社△△の松本でございます。

先日は弊社のためにご丁寧なご提案をいただき、誠にありがとうございました。

社内で慎重に検討いたしましたが、今回は予算の都合上、ご提案いただいたサービスの導入を見送らせていただくことになりました。

せっかくお時間をいただいたにもかかわらず、ご期待に沿えず大変申し訳ございません。

今後また機会がございましたら、改めてご相談させていただきたいと思っております。引き続きよろしくお願いいたします。

株式会社△△
松本恵子`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>断る理由は「予算の都合」「社内方針」など、具体的すぎない表現が適切です。</li>
                  <li>「今後また機会があれば」という一文を加えることで、関係を維持できます。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト7 */}
            <div id="prompt7">
              <h3>7. 報告・連絡メール</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                要点が整理された報告・連絡メールが生成されます。5W1Hが明確で、相手が状況を素早く把握できる構成になります。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                業務の進捗報告、トラブルの報告、決定事項の連絡など、情報を正確に伝えるメールが必要なときに使えます。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`以下の状況に合わせた報告・連絡メールを作成してください。

【送り先】：【相手の名前・役職】
【報告・連絡の内容】：【何を伝えるか】
【現状・経緯】：【現在の状況や背景】
【今後の対応・予定】：【これからどうするか】
【相手に求めるアクション】：【相手に何かしてほしいことがあれば】

簡潔で要点が伝わるビジネスメールを件名と本文をセットで作成してください。`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例">{`件名：【報告】〇〇プロジェクト進捗状況のご報告

営業部長 田中様

お疲れ様でございます。営業2課の伊藤です。

〇〇プロジェクトの進捗についてご報告いたします。

【現状】
・設計フェーズ：完了（予定通り）
・開発フェーズ：進捗率70%（予定比+5%）
・テストフェーズ：来週より開始予定

【課題】
外部APIの仕様変更により、一部機能の修正が必要となりました。
現在、開発チームで対応中です。

【今後の予定】
・3月15日：開発完了
・3月20日：テスト完了
・3月25日：リリース（予定通り）

現時点では全体スケジュールへの影響はございませんが、引き続き状況を注視してまいります。

以上、ご報告いたします。`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>「現状・課題・今後の予定」の3段構成で書くと、相手が状況を把握しやすくなります。</li>
                  <li>数字や日付を具体的に入れることで、信頼性の高い報告メールになります。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト8 */}
            <div id="prompt8">
              <h3>8. 提案・売り込みメール</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                相手のメリットを中心に据えた、読んでもらいやすい提案メールが生成されます。押しつけがましくなく、次のアクションへの誘導も含まれます。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                新規顧客への初回アプローチ、既存顧客への新サービス提案、パートナーシップの打診など、ビジネス提案が必要なときに使えます。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`以下の状況に合わせた提案メールを作成してください。

【送り先】：【相手の名前・会社名・役職】
【提案内容】：【何を提案するか】
【相手のメリット】：【相手にとってどんな良いことがあるか】
【実績・根拠】：【信頼性を示すデータや事例があれば】
【次のアクション】：【打ち合わせ依頼など、相手に求めること】

相手目線で、押しつけがましくない提案メールを件名と本文をセットで作成してください。`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例">{`件名：【ご提案】業務効率化ツール導入のご案内

株式会社〇〇
総務部長 小川様

はじめてご連絡いたします。
株式会社△△の営業担当、加藤と申します。

貴社の採用情報を拝見し、業務効率化に積極的に取り組まれていることを知り、ご連絡いたしました。

弊社では、書類管理・承認フローを自動化するクラウドサービス「EfficientFlow」を提供しております。

【導入企業の実績】
・書類処理時間：平均40%削減
・ペーパーレス化：導入企業の95%が達成
・月額費用：1ユーザーあたり500円〜

同業他社様での導入事例もございますので、ご興味がおありでしたら、30分ほどオンラインでご説明させていただけますでしょうか。

ご多忙のところ恐れ入りますが、ご検討いただけますと幸いです。

株式会社△△
加藤健太`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>具体的な数字（40%削減など）を入れることで、説得力が増します。</li>
                  <li>「30分ほど」と時間を明示することで、相手が承諾しやすくなります。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト9 */}
            <div id="prompt9">
              <h3>9. フォローアップメール</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                前回のやり取りを踏まえた自然なフォローアップメールが生成されます。催促感を出さずに、次のステップへ進めるための文面が作成されます。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                提案後の返答待ち、見積もり送付後の確認、面接後のフォローなど、前回のやり取りの続きを促すメールが必要なときに使えます。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`以下の状況に合わせたフォローアップメールを作成してください。

【送り先】：【相手の名前・会社名・役職】
【前回のやり取り】：【いつ、何について連絡したか】
【フォローの目的】：【何を確認・促したいか】
【相手への配慮】：【催促にならないよう、どんな配慮をするか】

催促感を出さず、自然な形でフォローするメールを件名と本文をセットで作成してください。`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例">{`件名：【ご確認】先日お送りした提案書について

株式会社〇〇
購買部 山本様

いつもお世話になっております。
株式会社△△の橋本でございます。

先週お送りいたしました提案書について、ご確認いただけましたでしょうか。

ご多忙の中、大変恐れ入りますが、ご検討状況をお聞かせいただけますと幸いです。

もし追加の情報が必要でしたり、ご不明な点がございましたりする場合は、お気軽にご連絡ください。喜んで対応いたします。

引き続きよろしくお願いいたします。

株式会社△△
橋本直子`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>「ご多忙の中」という一言で、相手への配慮を示せます。</li>
                  <li>「追加情報が必要であれば」と添えることで、サポートの姿勢を示せます。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト10 */}
            <div id="prompt10">
              <h3>10. 社内通知・アナウンスメール</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                全社員に伝わりやすい、簡潔でわかりやすい社内通知メールが生成されます。重要事項が箇条書きで整理され、読み飛ばされにくい構成になります。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                システムメンテナンスの告知、社内イベントの案内、規則変更のお知らせなど、社内向けの通知・アナウンスが必要なときに使えます。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`以下の状況に合わせた社内通知メールを作成してください。

【通知内容】：【何を知らせるか】
【対象者】：【全社員/特定部署など】
【重要な情報】：【日時・場所・変更点など、必ず伝えるべき事項】
【必要なアクション】：【受信者に何かしてほしいことがあれば】
【問い合わせ先】：【質問がある場合の連絡先】

簡潔でわかりやすい社内通知メールを件名と本文をセットで作成してください。`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例">{`件名：【重要】社内システムメンテナンスのお知らせ（3月15日）

社員各位

情報システム部からお知らせいたします。

以下の日程で社内システムのメンテナンスを実施いたします。

【メンテナンス日時】
日時：2026年3月15日（土）9:00〜17:00
対象：社内グループウェア・メールシステム

【影響範囲】
・社内メールの送受信が一時的に利用不可となります
・グループウェアへのアクセスができなくなります

【お願い事項】
・3月14日（金）17:00までに重要なメールの送受信を完了してください
・緊急の連絡は各部署の緊急連絡先（内線〇〇〇〇）をご利用ください

ご不便をおかけしますが、ご協力のほどよろしくお願いいたします。

情報システム部 担当：〇〇（内線：XXXX）`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>件名に【重要】や日付を入れることで、見落とされにくくなります。</li>
                  <li>「お願い事項」を明確にすることで、受信者が何をすべきかがすぐにわかります。</li>
                </ul>
              </PromptInfoCard>
            </div>
          </section>

          {/* 活用のコツセクション */}
          <section id="tips">
            <h2>メール品質をさらに高めるコツ</h2>
            <p>プロンプトを使いこなしたら、以下のコツも試してみてください。</p>
            <ul>
              <li><strong>生成後は必ず確認・修正する</strong>：AIが生成したメールは、送信前に必ず内容を確認し、固有名詞や数字が正しいかチェックしましょう。</li>
              <li><strong>トーンを調整する</strong>：「もう少し丁寧に」「もっと簡潔に」と追加指示を出すことで、文体を調整できます。</li>
              <li><strong>自社の定型文と組み合わせる</strong>：会社の署名や定型的な挨拶文は、生成後に追加・修正することで、より自然なメールになります。</li>
            </ul>
          </section>

          {/* CTA */}
          <AffiliateBox
            title="ChatGPT Plusでさらに高品質なメールを"
            description="月額20ドルでGPT-4が使い放題。より複雑なビジネスシーンのメールや、長文の処理も高精度に行えます。"
            buttonText="ChatGPT Plusを試してみる"
            buttonHref="https://chat.openai.com/auth/login"
            features={[
              "GPT-4モデルが使い放題",
              "より自然で高品質な文章生成",
              "長文メールの処理も対応",
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
                <li className="flex gap-2"><span>•</span>生成されたメールは必ず内容を確認してから送信してください。固有名詞や数字の誤りに特に注意が必要です。</li>
                <li className="flex gap-2"><span>•</span>個人情報や機密情報をChatGPTに入力しないようにしてください。</li>
                <li className="flex gap-2"><span>•</span>重要なビジネス文書の場合は、上長や関係者に確認してから送信することをおすすめします。</li>
                <li className="flex gap-2"><span>•</span>AIが生成した文章の最終的な責任は利用者にあります。</li>
              </ul>
            </div>
          </section>

          {/* まとめ */}
          <section id="summary">
            <h2>まとめ</h2>
            <p>この記事では、ChatGPTを使ったビジネスメール作成プロンプトを10種類ご紹介しました。</p>
            <ul>
              <li><strong>お礼・依頼・謝罪</strong>：基本的なビジネスコミュニケーション</li>
              <li><strong>確認・日程調整・断り</strong>：やり取りを円滑に進めるメール</li>
              <li><strong>報告・提案・フォロー・通知</strong>：業務を効率的に進めるメール</li>
            </ul>
            <p>どのプロンプトも【】内を書き換えるだけで使えます。まずは一番よく使うメールの種類から試してみてください。慣れてくると、自分なりのカスタマイズも楽しめるようになります。</p>
          </section>

          <RelatedArticles articles={relatedArticles} />
        </ArticleContent>
      </div>
    </PageLayout>
  );
}
