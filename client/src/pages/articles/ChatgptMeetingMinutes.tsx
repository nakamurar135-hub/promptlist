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
  { id: "intro", label: "会議の議事録作成、面倒ではありませんか？" },
  { id: "prompts", label: "議事録作成に使えるプロンプト4選" },
  { id: "prompt1", label: "プロンプト1：基本的な議事録作成", level: 3 as const },
  { id: "prompt2", label: "プロンプト2：要点整理型議事録", level: 3 as const },
  { id: "prompt3", label: "プロンプト3：ビジネス向けフォーマル議事録", level: 3 as const },
  { id: "prompt4", label: "プロンプト4：アクションアイテム抽出", level: 3 as const },
  { id: "tips", label: "プロンプトをさらに活用するコツ" },
  { id: "notice", label: "ChatGPT利用時の注意点" },
  { id: "summary", label: "まとめ" },
];

const relatedArticles = [
  {
    title: "ChatGPTでそのまま使えるビジネスメール例文プロンプト10選",
    href: "/articles/chatgpt-business-email",
    description: "お礼・依頼・謝罪など、ビジネスシーンで使えるメール文面をAIが自動生成。",
  },
  {
    title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集",
    href: "/articles/chatgpt-question-template",
    description: "ChatGPTを使いこなすための基本的な質問テクニックを解説。",
  },
  {
    title: "ChatGPTで志望動機を書くプロンプト",
    href: "/articles/chatgpt-job-motivation",
    description: "転職・就職活動で使える志望動機の作成をサポート。",
  },
];

export default function ChatgptMeetingMinutes() {
  useSEO({
    title: "ChatGPTで議事録を作成するプロンプト4選｜コピペで使える実践例",
    description: "ChatGPTで議事録を作成するプロンプト4つをご紹介。会議メモからの自動生成、要点整理、フォーマル形式、アクションアイテム抽出まで、コピペで使える実践的なプロンプト集です。",
    keywords: "ChatGPT,議事録,プロンプト,会議記録,ビジネス文書,AI,自動生成,会議、議事録作成,ビジネス効率化",
  });
  useOGP({
    title: "ChatGPTで議事録を作成するプロンプト4選｜コピペで使える実践例",
    description: "ChatGPTで議事録を作成するプロンプト4つをご紹介。会議メモからの自動生成、要点整理、フォーマル形式、アクションアイテム抽出まで、コピペで使える実践的なプロンプト集です。",
    type: "article",
  });

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <ArticleHeader
          title="ChatGPTで議事録を作成するプロンプト4選｜コピペで使える実践例"
          description="ChatGPTで議事録を作成するプロンプトを4つご紹介。会議メモからの自動生成、要点整理、フォーマル形式、アクションアイテム抽出まで、コピペで使える実践的なプロンプト集です。"
          category="ビジネス文書"
          categoryColor="#5B9BD5"
          publishedAt="2026年2月4日"
          readingTime="約7分"
        />

        <TableOfContents items={tocItems} />

        <ArticleContent>
          {/* 導入セクション */}
          <section id="intro">
            <h2>会議の議事録作成、面倒ではありませんか？</h2>
            <p>「会議が終わった後の議事録作成が面倒...」「会議中にメモを取りながら話を聞くのが大変...」「議事録を書いても、結局何が決まったのかわかりにくい...」</p>
            <p>そんな悩みをお持ちの皆さんに向けて、この記事ではChatGPTを使って議事録を効率的に作成するためのプロンプトを4つご紹介します。</p>
            <p>会議中に取ったメモや音声文字起こしをChatGPTに入力するだけで、整理された議事録が自動で生成されます。コピペするだけで使えるので、ChatGPTを初めて使う方でも安心して試していただけます。</p>
            <p>議事録作成にかかる時間を大幅に短縮して、本来の業務に集中できる時間を増やしましょう。</p>
          </section>

          {/* プロンプト解説セクション */}
          <section id="prompts">
            <h2>議事録作成に使えるプロンプト4選</h2>
            <p>ここからは、実際に議事録作成で使えるプロンプトを4つご紹介します。用途に合わせてお使いください。</p>

            {/* プロンプト1 */}
            <div id="prompt1">
              <h3>プロンプト1：基本的な議事録作成</h3>

              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                会議のメモや発言記録から、日時・参加者・議題・内容・結論が整理された標準的な議事録が生成されます。そのまま社内共有できる形式で出力されます。
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                定例会議やチームミーティングなど、一般的な社内会議の議事録を作成したいときに最適です。会議中に取ったメモをそのまま入力するだけで使えます。
              </PromptInfoCard>

              <PromptBlock title="プロンプト">{`以下の会議メモから議事録を作成してください。

【出力形式】
・会議名
・日時
・参加者
・議題
・議事内容（箇条書きで要点を整理）
・決定事項
・次回予定

【会議メモ】
【ここに会議メモを入力】`}</PromptBlock>

              <ResponseExample title="ChatGPTの回答例">{`■ 議事録

【会議名】
第3回 新商品開発プロジェクト会議
【日時】
2026年2月4日（火）14:00〜15:30
【参加者】
山田部長、佐藤課長、田中、鈴木、高橋（計5名）
【議題】
1. 新商品のコンセプト確認
2. 発売スケジュールの検討
3. 予算配分について
【議事内容】
■ 新商品のコンセプト確認
・ターゲット層は30〜40代の働く女性に決定
・「時短」と「高品質」を両立させるコンセプトで進める
・競合との差別化ポイントは価格帯（中価格帯）
■ 発売スケジュールの検討
・6月の発売を目標とする
・4月末までに試作品完成予定
・5月にモニター調査を実施
■ 予算配分について
・開発費：500万円
・マーケティング費：300万円
・予備費：100万円
【決定事項】
・コンセプトは「忙しい毎日に、確かな品質を」で確定
・発売日は6月15日（月）を目標とする
・次回会議までに各担当者が詳細スケジュールを作成
【次回予定】
2026年2月18日（火）14:00〜 同会議室にて`}</ResponseExample>

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>会議メモは完璧な文章でなくても大丈夫です。箇条書きやメモ書きでも、ChatGPTが整理してくれます。</li>
                  <li>参加者名や日時がメモに含まれていれば、自動で適切な場所に配置されます。</li>
                  <li>出力形式は会社のフォーマットに合わせて自由にカスタマイズできます。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト2 */}
            <div id="prompt2">
              <h3>プロンプト2：要点整理型議事録</h3>

              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                会議の内容から「決定事項」「ToDo（誰が何をいつまでに）」「議論中の課題」「次回持ち越し事項」が明確に分類された議事録が生成されます。
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                プロジェクト会議や進捗会議など、タスクの割り振りや期限管理が重要な会議に最適です。会議後すぐにメンバーがアクションを起こせる形式で出力されます。
              </PromptInfoCard>

              <PromptBlock title="プロンプト">{`以下の会議メモから、要点を整理した議事録を作成してください。

【出力形式】
1. 決定事項（箇条書き）
2. ToDo一覧（担当者・タスク内容・期限を表形式で）
3. 議論中の課題（まだ結論が出ていない事項）
4. 次回持ち越し事項

【会議メモ】
【ここに会議メモを入力】`}</PromptBlock>

              <ResponseExample title="ChatGPTの回答例">{`■ 要点整理議事録（2026/2/4 マーケティング戦略会議）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. 決定事項
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
・SNS広告の予算を月50万円から80万円に増額
・Instagram運用を週3回投稿から毎日投稿に変更
・インフルエンサー施策は4月から開始
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. ToDo一覧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
| 担当者 | タスク内容                      | 期限  |
|--------|--------------------------------|-------|
| 田中   | SNS広告の新クリエイティブ案作成  | 2/10  |
| 鈴木   | Instagram投稿スケジュール表作成  | 2/7   |
| 佐藤   | インフルエンサー候補リスト作成   | 2/14  |
| 高橋   | 予算増額の稟議書作成             | 2/6   |
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. 議論中の課題
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
・TikTok参入の是非（若年層へのリーチは期待できるが、
  ブランドイメージとの整合性を検討中）
・広告代理店の変更について（現行契約は6月まで）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. 次回持ち越し事項
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
・TikTok参入の最終判断（競合調査結果を踏まえて判断）
・Q3のキャンペーン企画案の検討`}</ResponseExample>

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>ToDo一覧は表形式で出力されるため、そのままタスク管理ツールに転記しやすくなっています。</li>
                  <li>「議論中の課題」と「決定事項」を分けることで、何が確定して何が未決かが明確になります。</li>
                  <li>期限が会議メモに明記されていない場合は、「要確認」と表示されます。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト3 */}
            <div id="prompt3">
              <h3>プロンプト3：ビジネス向けフォーマル議事録</h3>

              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                社外への提出や役員報告にも使える、正式なビジネス文書形式の議事録が生成されます。敬語表現や文書番号なども含めた形式で出力されます。
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                取締役会、株主総会、顧客との打ち合わせなど、公式な記録として残す必要がある会議に最適です。後から参照されることを想定した丁寧な文体で作成されます。
              </PromptInfoCard>

              <PromptBlock title="プロンプト">{`以下の会議メモから、正式なビジネス文書形式の議事録を作成してください。

【条件】
・敬語を使用した丁寧な文体
・文書番号を付与
・発言者を明記（「〇〇氏より」の形式）
・承認欄を含める

【会議メモ】
【ここに会議メモを入力】`}</PromptBlock>

              <ResponseExample title="ChatGPTの回答例">{`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
議 事 録
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
文書番号：MTG-2026-0204-001

1. 会議名称
   第12回 経営戦略会議

2. 開催日時
   2026年2月4日（火）10:00〜12:00

3. 開催場所
   本社5階 大会議室

4. 出席者
   代表取締役社長 山田太郎
   取締役営業本部長 佐藤一郎
   取締役管理本部長 田中花子

5. 議事内容
   （1）2025年度第3四半期業績報告
   山田社長より、売上高は前年同期比108%と堅調に推移している旨、
   ご報告がございました。

   （2）2026年度事業計画について
   佐藤取締役より、来期の重点施策として海外展開の加速を
   ご提案いただき、全会一致で承認されました。

6. 決定事項
   ・2026年度は東南アジア市場への本格参入を決定
   ・第1四半期中に現地法人設立の検討を開始

7. 承認欄
   作成者：__________ 確認者：__________ 承認者：__________`}</ResponseExample>

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>「発言者を明記」の指示により、誰が何を発言したかが記録されます。</li>
                  <li>承認欄を含めることで、正式な文書として保管・管理しやすくなります。</li>
                  <li>文書番号の形式はプロンプトで指定することもできます。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト4 */}
            <div id="prompt4">
              <h3>プロンプト4：アクションアイテム抽出</h3>

              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                会議の内容から「誰が」「何を」「いつまでに」行うべきかというアクションアイテムだけを抽出したリストが生成されます。優先度も判定されます。
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                会議後すぐにタスクを割り振りたいとき、または長時間の会議からアクションだけを素早く把握したいときに最適です。タスク管理ツールへの転記にも便利です。
              </PromptInfoCard>

              <PromptBlock title="プロンプト">{`以下の会議メモから、アクションアイテム（やるべきタスク）だけを抽出してください。

【出力形式】
・優先度（高/中/低）
・担当者
・タスク内容
・期限
・備考（依存関係や注意点があれば）

優先度は以下の基準で判定：
高：期限が1週間以内、または他のタスクの前提となるもの
中：期限が2週間以内
低：期限が2週間以上先、または期限の指定なし

【会議メモ】
【ここに会議メモを入力】`}</PromptBlock>

              <ResponseExample title="ChatGPTの回答例">{`■ アクションアイテム一覧（Webサイトリニューアル会議 2026/2/4）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【優先度：高】
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▼ 担当：山本
  タスク：現行サイトのアクセス解析レポート作成
  期限：2/7（金）
  備考：デザイン検討の前提資料となるため最優先

▼ 担当：佐々木
  タスク：競合5社のサイト調査・比較表作成
  期限：2/7（金）
  備考：要件定義MTGまでに完了必須
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【優先度：中】
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▼ 担当：田村
  タスク：新サイトのワイヤーフレーム初稿作成
  期限：2/14（金）
  備考：アクセス解析レポートを参考に作成

▼ 担当：小林
  タスク：制作会社3社への見積依頼
  期限：2/12（水）
  備考：予算500万円以内で依頼
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【サマリー】
総タスク数：5件（高:2件、中:2件、低:1件）
直近の期限：2/7（金）- 山本、佐々木
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`}</ResponseExample>

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>優先度の判定基準はプロンプト内で指定しているため、会社の基準に合わせて変更できます。</li>
                  <li>備考欄にタスク間の依存関係を記載することで、どの順番で着手すべきかがわかります。</li>
                  <li>サマリーで全体のタスク量と直近の期限が一目でわかるようになっています。</li>
                </ul>
              </PromptInfoCard>
            </div>
          </section>

          {/* 活用のコツセクション */}
          <section id="tips">
            <h2>プロンプトをさらに活用するコツ</h2>
            <p>紹介したプロンプトの効果をさらに高めるためのコツをご紹介します。</p>
            <ul>
              <li><strong>会議メモは具体的に</strong>：発言者名、具体的な数字、日付などをメモに含めると、より正確な議事録が生成されます。</li>
              <li><strong>音声文字起こしとの組み合わせ</strong>：スマホの録音アプリや文字起こしサービスと組み合わせると、メモを取る手間も省けます。</li>
              <li><strong>出力形式のカスタマイズ</strong>：プロンプトの「出力形式」部分を会社の議事録テンプレートに合わせて変更すると、より使いやすくなります。</li>
            </ul>
          </section>

          {/* CTA */}
          <AffiliateBox
            title="ChatGPT Plusでさらに高精度な議事録作成を"
            description="月額20ドルでGPT-4が使い放題。より長い会議メモの処理や、専門用語が多い会議の議事録作成も正確に行えます。"
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
                <li className="flex gap-2"><span>•</span>AIの回答は完璧ではありません。生成された議事録は必ず内容を確認し、必要に応じて修正してください。</li>
                <li className="flex gap-2"><span>•</span>重要な会議や公式文書として使用する場合は、特に慎重に内容をチェックしましょう。</li>
                <li className="flex gap-2"><span>•</span>機密情報や個人情報を含む会議内容を入力する際は、会社のセキュリティポリシーを確認してください。</li>
                <li className="flex gap-2"><span>•</span>生成された議事録の最終的な責任は利用者にあります。</li>
              </ul>
            </div>
          </section>

          {/* まとめ */}
          <section id="summary">
            <h2>まとめ</h2>
            <p>この記事では、ChatGPTで議事録を作成するための4つのプロンプトをご紹介しました。</p>
            <ul>
              <li><strong>基本的な議事録作成</strong>：一般的な社内会議向け</li>
              <li><strong>要点整理型議事録</strong>：決定事項とToDoを明確にしたいとき</li>
              <li><strong>ビジネス向けフォーマル議事録</strong>：公式文書として残したいとき</li>
              <li><strong>アクションアイテム抽出</strong>：タスク管理に活用したいとき</li>
            </ul>
            <p>どのプロンプトもコピペするだけですぐに使えます。ChatGPTを初めて使う方でも、今日から議事録作成の効率化を始められます。ぜひお試しください。</p>
          </section>

          <RelatedArticles articles={relatedArticles} />
        </ArticleContent>
      </div>
    </PageLayout>
  );
}
