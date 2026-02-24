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

const tocItems = [
  { id: "intro", label: "ChatGPTへの質問、うまくいっていますか？" },
  { id: "basics", label: "良い質問の3つの基本要素" },
  { id: "templates", label: "コピペで使える質問テンプレート集" },
  { id: "template1", label: "テンプレート1：情報収集・調査", level: 3 as const },
  { id: "template2", label: "テンプレート2：文章作成・添削", level: 3 as const },
  { id: "template3", label: "テンプレート3：アイデア出し・ブレスト", level: 3 as const },
  { id: "template4", label: "テンプレート4：手順・やり方を教えてもらう", level: 3 as const },
  { id: "template5", label: "テンプレート5：比較・選択の相談", level: 3 as const },
  { id: "tips", label: "さらに精度を上げるコツ" },
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
    title: "ChatGPTでそのまま使えるビジネスメール例文プロンプト10選",
    href: "/articles/chatgpt-business-email",
    description: "お礼・依頼・謝罪など、ビジネスシーンで使えるメール文面をAIが自動生成。",
  },
  {
    title: "ブログ記事をAIに書かせる日本語プロンプト",
    href: "/articles/chatgpt-blog-writing",
    description: "ブログやSNS投稿のための文章作成をAIがサポート。",
  },
];

export default function ChatgptQuestionTemplate() {
  useSEO({
    title: "ChatGPTへの質問テンプレート集｜初心者でも失敗しないプロンプトの書き方5選",
    description: "ChatGPTにうまく質問できない方向けに、コピペで使える質問テンプレートを5種類紹介。情報収集・文章作成・アイデア出し・手順確認・比較相談の各シーンで使える実践的なプロンプト集です。",
    keywords: "ChatGPT,質問テンプレート,プロンプト,AI,初心者,質問の仕方,コピペ,ChatGPT使い方,プロンプトエンジニアリング,AIプロンプト",
  });

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <ArticleHeader
          title="AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集"
          description="ChatGPTをうまく使えない原因の多くは「質問の仕方」にあります。この記事では、コピペするだけで使えるChatGPTへの質問テンプレートを5種類ご紹介します。初めての方でも今日から使えます。"
          category="基礎・入門"
          categoryColor="#4CAF50"
          publishedAt="2026年2月5日"
          readingTime="約6分"
        />
        <TableOfContents items={tocItems} />
        <ArticleContent>
          {/* 導入セクション */}
          <section id="intro">
            <h2>ChatGPTへの質問、うまくいっていますか？</h2>
            <p>「ChatGPTに質問してみたけど、思ったような答えが返ってこなかった...」「何を聞けばいいのかわからない...」「使ってみたいけど、どう使えばいいの？」</p>
            <p>ChatGPTを初めて使う方の多くが、こうした悩みを抱えています。実は、ChatGPTの回答の質は「どう質問するか」によって大きく変わります。</p>
            <p>この記事では、ChatGPTに正しく質問するための基本的な考え方と、すぐに使えるテンプレートを5種類ご紹介します。コピペして使えるので、今日から実践できます。</p>
          </section>

          {/* 基本要素セクション */}
          <section id="basics">
            <h2>良い質問の3つの基本要素</h2>
            <p>ChatGPTへの質問を改善するうえで、まず以下の3つの要素を意識してみてください。</p>
            <ul>
              <li><strong>目的を明確にする</strong>：「何のために」その情報や文章が必要なのかを伝える</li>
              <li><strong>条件・制約を指定する</strong>：文字数、対象読者、トーン（丁寧・カジュアルなど）を指定する</li>
              <li><strong>出力形式を指定する</strong>：箇条書き、表、文章など、どんな形式で回答してほしいかを伝える</li>
            </ul>
            <p>この3つを意識するだけで、ChatGPTの回答の質が格段に上がります。以下のテンプレートはすべてこの3要素を含んでいます。</p>
          </section>

          {/* テンプレート集セクション */}
          <section id="templates">
            <h2>コピペで使える質問テンプレート集</h2>
            <p>それでは、実際に使えるテンプレートを5種類ご紹介します。【】内の部分をご自身の内容に書き換えてお使いください。</p>

            {/* テンプレート1 */}
            <div id="template1">
              <h3>テンプレート1：情報収集・調査</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                指定したテーマについて、わかりやすく整理された情報が返ってきます。専門用語は平易な言葉で説明され、初心者でも理解しやすい形式で出力されます。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                新しいテーマについて基礎知識を身につけたいとき、仕事や勉強で調べ物をしたいとき、プレゼン資料の下調べをしたいときに最適です。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`【テーマ】について、初心者にもわかりやすく説明してください。

以下の形式でまとめてください：
・概要（3〜4文で）
・重要なポイント（箇条書きで3〜5つ）
・初心者がまず知っておくべきこと
・よくある誤解や注意点

専門用語は使わず、中学生でも理解できる言葉で説明してください。`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例（「生成AI」をテーマにした場合）">{`【生成AIについて初心者向け解説】

■ 概要
生成AIとは、文章・画像・音楽などを自動で作り出すことができる人工知能のことです。ChatGPTやMidjourneyなどが代表例で、人間が入力した指示（プロンプト）に応じて、まるで人間が作ったかのようなコンテンツを生成します。従来のAIが「分類」や「予測」を得意としていたのに対し、生成AIは「創造」を得意としています。

■ 重要なポイント
・大量のデータを学習して、パターンを覚えている
・文章・画像・音声など、さまざまな形式のコンテンツを作れる
・指示（プロンプト）の内容によって、出力の質が大きく変わる
・完全に正確ではなく、間違いを含むこともある

■ まず知っておくべきこと
ChatGPTなどのサービスは無料で試せるものが多く、特別な知識がなくても使い始められます。まずは「普通の会話をするように質問する」ことから始めてみましょう。

■ よくある誤解・注意点
「AIは何でも正確に答えてくれる」と思われがちですが、実際には間違った情報を自信満々に答えることがあります（これを「ハルシネーション」と呼びます）。重要な情報は必ず別の方法で確認しましょう。`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>「中学生でも理解できる言葉で」と指定することで、専門用語を使わない説明が得られます。</li>
                  <li>出力形式（概要・ポイント・注意点）を指定することで、情報が整理された形で返ってきます。</li>
                  <li>テーマ部分を変えるだけで、どんな調べ物にも応用できます。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* テンプレート2 */}
            <div id="template2">
              <h3>テンプレート2：文章作成・添削</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                指定した条件（文体・長さ・対象読者）に合った文章が生成されます。添削の場合は、修正箇所と理由も合わせて説明してくれます。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                メール・報告書・SNS投稿など、さまざまな文章を作成したいときに使えます。また、自分が書いた文章をより良くしたいときの添削依頼にも活用できます。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`以下の条件で【目的・内容】についての文章を作成してください。

【条件】
・文体：【丁寧語/カジュアル/ビジネス敬語など】
・文字数：【〇〇字程度】
・対象読者：【誰に向けた文章か】
・含めてほしい内容：【必ず入れたい要素があれば記載】
・避けてほしい表現：【使わないでほしい言葉や表現があれば記載】

【目的・内容】
【ここに書きたい内容の概要を入力】`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例（お礼メールの場合）">{`件名：先日のご面談のお礼

山田様

先日はお忙しい中、お時間をいただきありがとうございました。

ご説明いただいた新サービスの内容、大変参考になりました。特に、導入コストを抑えながら段階的に展開できる点は、弊社の課題にマッチしていると感じております。

ご提案いただいた内容について、社内で検討を進めてまいります。改めてご連絡させていただきますので、引き続きよろしくお願いいたします。

株式会社〇〇
〇〇 〇〇`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>文体・文字数・対象読者を明示することで、用途に合った文章が生成されます。</li>
                  <li>「避けてほしい表現」を指定することで、不適切な表現を防げます。</li>
                  <li>生成された文章はそのまま使わず、必ず内容を確認・修正してから使用してください。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* テンプレート3 */}
            <div id="template3">
              <h3>テンプレート3：アイデア出し・ブレスト</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                指定したテーマに関するアイデアが複数提案されます。各アイデアには簡単な説明も付いているため、すぐに実行に移しやすい形式で出力されます。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                企画会議の前準備、新しい取り組みのアイデア出し、マンネリ打破のヒントが欲しいときなど、創造的な思考が必要な場面で活躍します。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`【テーマ・目標】に関するアイデアを【〇〇個】提案してください。

【前提条件】
・対象：【誰のためのアイデアか】
・予算・リソース：【制約があれば記載】
・実現したいこと：【達成したい目標】
・避けたいこと：【やりたくないこと・できないことがあれば】

各アイデアについて、以下の形式で説明してください：
・アイデア名
・概要（2〜3文）
・期待できる効果

【テーマ・目標】
【ここにテーマや達成したい目標を入力】`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例（社内コミュニケーション活性化の場合）">{`【社内コミュニケーション活性化アイデア5選】

① ランダムランチ制度
概要：部署をまたいで毎月ランダムにペアを組み、ランチ代を会社が補助する制度。普段接点のない社員同士が交流できます。
期待できる効果：部署間の壁が低くなり、業務上の連携がスムーズになる。

② 週次5分スタンドアップMTG
概要：毎週月曜朝に全員が5分間、「今週やること・先週の成果・困っていること」を共有する短時間ミーティング。
期待できる効果：チーム全体の状況が可視化され、助け合いの文化が生まれる。

③ 社内スキルシェア会
概要：社員が得意なスキル（Excel、料理、語学など）を他の社員に教える30分の勉強会を月1回開催。
期待できる効果：社員の隠れた才能が発掘され、相互理解が深まる。`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>アイデアの数を指定することで、適切な量の提案が得られます。多すぎず少なすぎない5〜10個がおすすめです。</li>
                  <li>「避けたいこと」を明示することで、実現不可能なアイデアが提案されるのを防げます。</li>
                  <li>出てきたアイデアをさらに深掘りしたい場合は「①についてもっと詳しく教えてください」と続けて質問できます。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* テンプレート4 */}
            <div id="template4">
              <h3>テンプレート4：手順・やり方を教えてもらう</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                ステップごとに番号が振られた、わかりやすい手順書が生成されます。各ステップに注意点や補足説明も含まれるため、初めての作業でも迷わず進められます。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                初めて取り組む作業の手順を知りたいとき、マニュアルを作成したいとき、誰かに作業を教えるための説明を準備したいときに便利です。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`【やりたいこと】の手順を、初心者にもわかりやすく説明してください。

【前提条件】
・経験レベル：【完全初心者/少し経験あり/中級者など】
・使用するツール・環境：【使うソフトや道具があれば記載】
・目標：【最終的に何ができるようになりたいか】

以下の形式でまとめてください：
1. 必要なもの・事前準備
2. ステップごとの手順（各ステップに注意点も記載）
3. よくある失敗とその対処法
4. 完成の確認方法

【やりたいこと】
【ここに取り組みたい作業や目標を入力】`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例（Excelで集計表を作る場合）">{`【Excelで売上集計表を作る手順】

■ 必要なもの・事前準備
・Microsoft Excel（またはGoogle スプレッドシート）
・集計したいデータ（売上データなど）

■ ステップごとの手順

ステップ1：データを入力する
A列に「日付」、B列に「商品名」、C列に「売上金額」と入力します。
⚠️ 注意：1行目は必ず見出し行にしてください。

ステップ2：合計を計算する
集計したいセルをクリックし、「=SUM(C2:C100)」と入力します。
⚠️ 注意：C2:C100の部分は実際のデータ範囲に合わせて変更してください。

ステップ3：ピボットテーブルで集計する
データ範囲を選択→「挿入」→「ピボットテーブル」の順にクリックします。

■ よくある失敗と対処法
・数式が計算されない → セルの書式が「文字列」になっている可能性があります。「数値」に変更してください。
・合計が0になる → 数字に見えても文字として入力されているかもしれません。`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>「経験レベル」を指定することで、説明の難易度が調整されます。初心者の場合は「完全初心者」と明記しましょう。</li>
                  <li>「よくある失敗とその対処法」を含めることで、つまずいたときの解決策も一緒に得られます。</li>
                  <li>手順が長すぎる場合は「ステップ1〜3だけ詳しく教えてください」と絞り込むことができます。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* テンプレート5 */}
            <div id="template5">
              <h3>テンプレート5：比較・選択の相談</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                比較対象の特徴・メリット・デメリットが表形式や箇条書きでわかりやすくまとめられます。最後に状況別のおすすめも提示してくれます。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                ツールやサービスの選定、購入品の比較検討、方針の選択など、複数の選択肢から最適なものを選ぶ必要があるときに役立ちます。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`【選択肢A】と【選択肢B】を比較して、どちらが良いか教えてください。

【私の状況・条件】
・目的：【何のために使うか・何を達成したいか】
・予算：【予算の上限があれば記載】
・重視するポイント：【使いやすさ/コスト/機能など、優先したいこと】
・スキルレベル：【初心者/中級者など】

以下の形式で比較してください：
1. 各選択肢の特徴・メリット・デメリット
2. 比較表（主要な項目を表形式で）
3. 私の状況に合ったおすすめとその理由

【選択肢A】【ここに選択肢Aを入力】
【選択肢B】【ここに選択肢Bを入力】`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例（ChatGPT無料版 vs Plus版の場合）">{`【ChatGPT 無料版 vs Plus版 比較】

■ 無料版の特徴
メリット：費用がかからない、基本的な質問・回答に十分対応できる
デメリット：混雑時に使えないことがある、最新モデルが使えない場合がある

■ Plus版（月額20ドル）の特徴
メリット：GPT-4が使い放題、混雑時も優先アクセス、より長い文章の処理が可能
デメリット：月額費用がかかる

■ 比較表
| 項目 | 無料版 | Plus版 |
|------|--------|--------|
| 料金 | 無料 | 月額20ドル |
| モデル | GPT-3.5 | GPT-4（最新） |
| 混雑時 | 制限あり | 優先アクセス |
| 文章の長さ | 制限あり | より長い文章OK |

■ あなたの状況へのおすすめ
初心者の方や、まずChatGPTを試してみたい方には無料版がおすすめです。
業務で毎日使う方や、より高精度な回答が必要な方はPlus版を検討してみてください。`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>「私の状況・条件」を詳しく書くほど、自分に合ったアドバイスが得られます。</li>
                  <li>比較表の形式を指定することで、視覚的にわかりやすい回答が得られます。</li>
                  <li>2つ以上の選択肢がある場合は「A・B・Cを比較してください」と複数指定することも可能です。</li>
                </ul>
              </PromptInfoCard>
            </div>
          </section>

          {/* 活用のコツセクション */}
          <section id="tips">
            <h2>さらに精度を上げるコツ</h2>
            <p>テンプレートを使いこなしたら、以下のコツも試してみてください。</p>
            <ul>
              <li><strong>役割を与える</strong>：「あなたはプロのコピーライターです」のように、ChatGPTに役割を与えると専門的な回答が得られます。</li>
              <li><strong>例を示す</strong>：「〇〇のような文体で」と具体例を示すと、イメージ通りの出力に近づきます。</li>
              <li><strong>段階的に質問する</strong>：一度に多くを求めず、「まず概要を教えて」→「次に詳細を教えて」と段階的に深掘りしましょう。</li>
              <li><strong>気に入らなければ再生成</strong>：「もう少し短くして」「もっとカジュアルな文体で」と追加指示を出すことで、出力を調整できます。</li>
            </ul>
          </section>

          {/* CTA */}
          <AffiliateBox
            title="ChatGPT Plusでさらに高精度な回答を"
            description="月額20ドルでGPT-4が使い放題。より複雑な質問や長文の処理も正確に行えます。初心者を卒業したら、ぜひPlus版も検討してみてください。"
            buttonText="ChatGPT Plusを試してみる"
            buttonHref="https://chat.openai.com/auth/login"
            features={[
              "GPT-4モデルが使い放題",
              "混雑時も優先アクセス",
              "より長い文章の入力・出力に対応",
              "画像の読み取り・生成機能も利用可能",
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
                <li className="flex gap-2"><span>•</span>ChatGPTの回答は必ずしも正確ではありません。重要な情報は必ず別の方法で確認してください。</li>
                <li className="flex gap-2"><span>•</span>個人情報や機密情報をChatGPTに入力しないようにしてください。</li>
                <li className="flex gap-2"><span>•</span>生成された文章をそのまま使用する場合は、内容を十分に確認してから使用してください。</li>
                <li className="flex gap-2"><span>•</span>著作権に関わるコンテンツの生成には注意が必要です。</li>
              </ul>
            </div>
          </section>

          {/* まとめ */}
          <section id="summary">
            <h2>まとめ</h2>
            <p>この記事では、ChatGPTに正しく質問するための5つのテンプレートをご紹介しました。</p>
            <ul>
              <li><strong>情報収集・調査</strong>：テーマについて体系的に学びたいとき</li>
              <li><strong>文章作成・添削</strong>：メールや報告書などの文章を作りたいとき</li>
              <li><strong>アイデア出し・ブレスト</strong>：新しいアイデアが欲しいとき</li>
              <li><strong>手順・やり方</strong>：初めての作業の手順を知りたいとき</li>
              <li><strong>比較・選択の相談</strong>：複数の選択肢から最適なものを選びたいとき</li>
            </ul>
            <p>どのテンプレートも【】内を書き換えるだけで使えます。まずは一つ試してみて、ChatGPTとの対話に慣れていきましょう。</p>
          </section>

          <RelatedArticles articles={relatedArticles} />
        </ArticleContent>
      </div>
    </PageLayout>
  );
}
