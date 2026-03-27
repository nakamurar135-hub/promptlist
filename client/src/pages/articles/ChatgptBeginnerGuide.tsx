import PageLayout from "@/components/layout/PageLayout";
import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleContent from "@/components/article/ArticleContent";
import PromptBlock from "@/components/article/PromptBlock";
import PromptInfoCard from "@/components/article/PromptInfoCard";
import ResponseExample from "@/components/article/ResponseExample";
import TableOfContents from "@/components/article/TableOfContents";
import AffiliateBox from "@/components/article/AffiliateBox";
import RelatedArticles from "@/components/article/RelatedArticles";
import { AlertTriangle, ShieldCheck, Lightbulb, Zap } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";
import { useStructuredData } from "@/hooks/useStructuredData";

const tocItems = [
  { id: "intro", label: "ChatGPTは「あなたの優秀な部下」" },
  { id: "template", label: "迷ったらこれ！「黄金テンプレート」の紹介" },
  { id: "usecase", label: "初心者が今日からできる3つの活用例" },
  { id: "usecase1", label: "1. メールの下書き作成・言い換え", level: 3 as const },
  { id: "usecase2", label: "2. 長い資料の「3行要約」", level: 3 as const },
  { id: "usecase3", label: "3. 家族旅行のプラン出し", level: 3 as const },
  { id: "safety", label: "安心して使うための「3つの約束」" },
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
    title: "ChatGPTで議事録を作成するプロンプト4選",
    href: "/articles/chatgpt-meeting-minutes",
    description: "会議メモから自動で議事録を生成。コピペで使える実践的なプロンプト集。",
  },
];

export default function ChatgptBeginnerGuide() {
  const title = "ChatGPT初心者向け完全活用ガイド｜「何を聞けばいい？」を解決する黄金テンプレート";
  const description = "2026年最新のChatGPT活用術を初心者向けに徹底解説。AIへの質問に迷う方へ、コピペで使える「黄金テンプレート」と仕事・日常で役立つ具体例を紹介します。安全に使うための注意点も網羅。";
  const keywords = "ChatGPT,初心者,使い方,プロンプト,テンプレート,AI活用,仕事効率化,2026年最新";

  useSEO({ title, description, keywords });
  useOGP({ title, description, type: "article" });
  useStructuredData({ title, description });

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <ArticleHeader
          title="ChatGPT初心者向け完全活用ガイド｜「何を聞けばいい？」を解決する黄金テンプレート"
          description="AIに何を聞けばいいか分からず「こんにちは」で終わっていませんか？この記事では、2026年最新のChatGPTを使いこなすためのコピペ用テンプレートと、今日から使える具体例を分かりやすく解説します。"
          category="基礎・入門"
          categoryColor="#4CAF50"
          publishedAt="2026年3月27日"
          readingTime="約8分"
        />

        <TableOfContents items={tocItems} />

        <ArticleContent>
          {/* 導入セクション */}
          <section id="intro">
            <h2>ChatGPTは「あなたの優秀な部下」</h2>
            <p>2026年、AI技術は飛躍的に進化し、ChatGPT（GPT-5シリーズ等）は単なるチャットボットから、私たちの意図を汲み取って動く「優秀な秘書」や「専門知識を持つ部下」へと進化しました。</p>
            <p>しかし、「何を聞けばいいのか分からない」「返ってきた答えが期待外れだった」という悩みを持つ方も少なくありません。実は、ChatGPTを使いこなすコツは、あなたが上司として<strong>「明確な指示」</strong>を出すことにあります。</p>
            <p>この記事では、初心者の方でも今日からChatGPTを「魔法のツール」に変えられる具体的な方法をお伝えします。</p>
          </section>

          {/* 黄金テンプレートセクション */}
          <section id="template">
            <h2>迷ったらこれ！「黄金テンプレート」の紹介</h2>
            <p>ChatGPTへの質問（プロンプト）で迷ったときは、以下の3つの要素を意識するだけで、回答の質が劇的に向上します。</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex flex-col items-center text-center">
                <ShieldCheck className="w-8 h-8 text-blue-500 mb-2" />
                <span className="font-bold text-blue-900">[役割]</span>
                <span className="text-sm text-blue-700">「あなたはプロの編集者です」など、AIの立場を決める</span>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex flex-col items-center text-center">
                <Zap className="w-8 h-8 text-green-500 mb-2" />
                <span className="font-bold text-green-900">[目的]</span>
                <span className="text-sm text-green-700">「〜のメールの下書きを作って」など、ゴールを伝える</span>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 flex flex-col items-center text-center">
                <Lightbulb className="w-8 h-8 text-yellow-500 mb-2" />
                <span className="font-bold text-yellow-900">[条件]</span>
                <span className="text-sm text-yellow-700">「300文字以内で」「箇条書きで」など、ルールを決める</span>
              </div>
            </div>

            <PromptBlock title="コピペで使える！黄金テンプレート">{`あなたは【役割：プロの秘書/ライター/コンサルタント】です。
以下の【目的】を達成するために、最適な回答を作成してください。

【目的】
【ここに依頼したい内容を詳しく入力】

【条件】
・【箇条書きで/300文字程度で/初心者向けに】
・【トーン：丁寧/親しみやすく/論理的に】
・【出力形式：文章/表形式/ステップ形式】

それでは、お願いします。`}</PromptBlock>

            <PromptInfoCard type="tips" title="ポイント解説">
              <ul className="space-y-1 list-disc list-inside">
                <li><strong>役割を与える</strong>ことで、ChatGPTはその分野の専門家らしい言葉遣いや視点で回答してくれます。</li>
                <li><strong>条件を細かく指定</strong>するほど、修正の手間が省ける「一発回答」に近づきます。</li>
              </ul>
            </PromptInfoCard>
          </section>

          {/* 活用例セクション */}
          <section id="usecase">
            <h2>初心者が今日からできる3つの活用例</h2>
            <p>「黄金テンプレート」を使って、具体的にどんなことができるのか見ていきましょう。</p>

            <div id="usecase1" className="mt-8">
              <h3>1. メールの下書き作成・言い換え</h3>
              <p>言いにくいお断りのメールや、丁寧な表現に迷うビジネスメールも、ChatGPTなら数秒で作成します。</p>
              <PromptBlock title="プロンプト例">{`あなたはプロの秘書です。
取引先からの「急ぎの打ち合わせ依頼」に対し、スケジュールの都合がつかないため、来週以降に調整をお願いする丁寧なメールの下書きを作成してください。

【条件】
・相手に失礼のないよう、非常に丁寧な言葉遣いで。
・代替案として「来週の火曜か水曜」を提示して。`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例">{`件名：お打ち合わせ日程調整のお願い（株式会社〇〇 氏名）

株式会社△△
佐藤様

いつも大変お世話になっております。
株式会社〇〇の[あなたの氏名]でございます。

この度は、お打ち合わせのご依頼をいただき、誠にありがとうございます。
また、お急ぎのところご連絡をいただきましたこと、重ねて御礼申し上げます。

せっかくのご依頼ではございますが、あいにく今週いっぱいは予定が立て込んでおり、ご指定の日時にお時間を確保することが難しい状況でございます。
迅速なご対応ができず、誠に申し訳ございません。

もしよろしければ、来週以降にて改めて調整させていただけますでしょうか。
私の方では、以下の日程であれば調整が可能でございます。

・[日付] 3月31日(火) 13:00〜17:00
・[日付] 4月1日(水) 10:00〜15:00

上記以外のご都合がよろしい場合も、柔軟に対応させていただきますので、お知らせいただけますと幸いです。

お忙しい中お手数をおかけいたしますが、何卒ご検討のほどよろしくお願い申し上げます。`}</ResponseExample>
            </div>

            <div id="usecase2" className="mt-8">
              <h3>2. 長い資料の「3行要約」</h3>
              <p>読む時間がないニュース記事や、長文の資料を貼り付けるだけで、要点だけを抽出してくれます。</p>
              <PromptBlock title="プロンプト例">{`以下の文章を、忙しい人でも1分で理解できるように「3行」で要約してください。

【対象の文章】
[ここに長い文章を貼り付け]`}</PromptBlock>
            </div>

            <div id="usecase3" className="mt-8">
              <h3>3. 家族旅行のプラン出し</h3>
              <p>「どこに行こう？」と悩む旅行の計画も、条件を伝えれば最適なプランを提案してくれます。</p>
              <PromptBlock title="プロンプト例">{`あなたは旅行コンサルタントです。
週末に家族（夫婦と小学生2人）で行く、関東近郊の1泊2日旅行プランを考えてください。

【条件】
・予算は家族全員で10万円以内。
・子供が体験学習できるスポットを含めて。
・移動は車。
・表形式でスケジュールを作成して。`}</PromptBlock>
            </div>
          </section>

          {/* 安全性セクション */}
          <section id="safety">
            <h2>安心して使うための「3つの約束」</h2>
            <p>AIを便利に、そして安全に使い続けるために、以下の3点は必ず守りましょう。</p>
            <div className="bg-[#FFF8E6] border border-[#FF9800] rounded-lg p-5 my-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-[#FF9800]" />
                <span className="font-bold text-lg text-[#333333]">利用時のチェックリスト</span>
              </div>
              <ul className="space-y-3 text-[#333333]">
                <li className="flex gap-2">
                  <span className="font-bold">1. 個人情報は入力しない</span>
                  <span>：名前、住所、電話番号、社外秘のプロジェクト名などは伏せて入力しましょう。</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">2. 最後は人間が確認する</span>
                  <span>：AIはもっともらしい嘘（ハルシネーション）をつくことがあります。重要な事実は必ず自分で確認しましょう。</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">3. AIの回答をそのまま信じ込まない</span>
                  <span>：最新のニュースなどはAIが把握していない場合もあります。検索エンジンと併用するのが賢い使い方です。</span>
                </li>
              </ul>
            </div>
          </section>

          {/* まとめ */}
          <section id="summary">
            <h2>まとめ</h2>
            <p>ChatGPTは、あなたの指示次第で最高のパートナーになります。まずは今回ご紹介した<strong>「黄金テンプレート」</strong>を辞書登録したり、メモ帳に保存して使ってみてください。</p>
            <p>「AIを使う」ことは、これからの時代をより豊かに、効率的に過ごすための必須スキルです。失敗を恐れず、まずは今日の夕食の献立相談からでも、ChatGPTに話しかけてみませんか？</p>
          </section>

          <AffiliateBox
            title="ChatGPT Plusで最新のAI体験を"
            description="月額20ドルの有料プランなら、より賢いGPT-5モデルや、画像生成、データ分析機能が使い放題になります。仕事の効率をさらに上げたい方におすすめです。"
            buttonText="公式サイトで詳細を見る"
            buttonHref="https://chat.openai.com/"
            features={[
              "最新モデルへの優先アクセス",
              "画像生成（DALL-E 3）が利用可能",
              "カスタムAI（GPTs）の作成・利用",
              "混雑時もスムーズなレスポンス",
            ]}
          />

          <RelatedArticles articles={relatedArticles} />
        </ArticleContent>
      </div>
    </PageLayout>
  );
}
