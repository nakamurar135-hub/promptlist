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
  { id: "intro", label: "ブログ記事の執筆、時間がかかっていませんか？" },
  { id: "flow", label: "AIを使ったブログ記事作成の流れ" },
  { id: "prompts", label: "ブログ記事作成プロンプト集" },
  { id: "prompt1", label: "プロンプト1：記事構成（アウトライン）の作成", level: 3 as const },
  { id: "prompt2", label: "プロンプト2：記事本文の執筆", level: 3 as const },
  { id: "prompt3", label: "プロンプト3：SEOタイトルと導入文の作成", level: 3 as const },
  { id: "prompt4", label: "プロンプト4：SNS投稿文の作成", level: 3 as const },
  { id: "tips", label: "AI記事をさらに良くするコツ" },
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
    title: "ChatGPTで議事録を作成するプロンプト4選",
    href: "/articles/chatgpt-meeting-minutes",
    description: "会議メモから自動で議事録を生成。コピペで使える実践的なプロンプト集。",
  },
  {
    title: "ChatGPTでそのまま使えるビジネスメール例文プロンプト10選",
    href: "/articles/chatgpt-business-email",
    description: "お礼・依頼・謝罪など、ビジネスシーンで使えるメール文面をAIが自動生成。",
  },
];

export default function ChatgptBlogWriting() {
  useSEO({
    title: "ブログ記事をAIに書かせる日本語プロンプト｜構成から本文まで完全対応",
    description: "ChatGPTを使ってブログ記事を効率的に作成したい方向けのプロンプト4つをご紹介。記事構成から本文執筆、SEOタイトル、SNS投稿文まで、コンテンツ作成に必要なすべてをカバーします。",
    keywords: "ブログ,ChatGPT,記事作成,プロンプト,コンテンツマーケティング,AI,文章作成,SEO,SNS投稿",
  });

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <ArticleHeader
          title="ブログ記事をAIに書かせる日本語プロンプト｜構成から本文まで完全対応"
          description="ChatGPTを使ってブログ記事を効率的に作成するためのプロンプトを4つご紹介します。記事構成の作成から本文執筆、SEOタイトル、SNS投稿文まで、コンテンツ作成に必要なすべてをカバーします。"
          category="コンテンツ作成"
          categoryColor="#FF9800"
          publishedAt="2026年2月8日"
          readingTime="約7分"
        />
        <TableOfContents items={tocItems} />
        <ArticleContent>
          {/* 導入セクション */}
          <section id="intro">
            <h2>ブログ記事の執筆、時間がかかっていませんか？</h2>
            <p>「ブログを始めたいけど、記事を書く時間がない...」「何を書けばいいか、構成が決まらない...」「文章を書くのが苦手で、なかなか記事が完成しない...」</p>
            <p>ブログ運営を続けるうえで、記事の執筆は最も時間のかかる作業の一つです。特に、記事の構成を考えたり、読みやすい文章を書いたりするのは、慣れないうちは大変です。</p>
            <p>この記事では、ChatGPTを使ってブログ記事を効率的に作成するためのプロンプトを4つご紹介します。記事の構成から本文執筆、タイトル作成、SNS投稿文まで、コンテンツ作成に必要なすべてをカバーしています。</p>
          </section>

          {/* 作成フローセクション */}
          <section id="flow">
            <h2>AIを使ったブログ記事作成の流れ</h2>
            <p>ChatGPTを使ったブログ記事作成は、以下の流れで進めると効率的です。</p>
            <ul>
              <li><strong>ステップ1：記事構成（アウトライン）を作成する</strong>：まず記事の骨格を作ります。H2・H3の見出し構成を決めることで、書く内容が明確になります。</li>
              <li><strong>ステップ2：各セクションの本文を執筆する</strong>：構成に沿って、セクションごとに本文を生成します。一度に全文を生成するより、セクション単位で作成する方が品質が高くなります。</li>
              <li><strong>ステップ3：タイトルと導入文を最適化する</strong>：SEOを意識したタイトルと、読者を引き込む導入文を作成します。</li>
              <li><strong>ステップ4：SNS投稿文を作成する</strong>：記事の宣伝用にSNS投稿文を作成します。</li>
            </ul>
            <p>それでは、各ステップで使えるプロンプトをご紹介します。</p>
          </section>

          {/* プロンプト集セクション */}
          <section id="prompts">
            <h2>ブログ記事作成プロンプト集</h2>

            {/* プロンプト1 */}
            <div id="prompt1">
              <h3>プロンプト1：記事構成（アウトライン）の作成</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                SEOを意識したH2・H3の見出し構成が生成されます。各見出しに書くべき内容の概要も含まれるため、そのまま執筆の指針として使えます。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                記事を書き始める前の構成作りに使えます。「何を書けばいいかわからない」という状態から、具体的な執筆計画を立てるのに最適です。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`以下の条件でブログ記事の構成（アウトライン）を作成してください。

【記事テーマ】：【書きたいテーマ・キーワード】
【ターゲット読者】：【誰に向けた記事か】
【読者の悩み・課題】：【読者が抱えている問題や知りたいこと】
【記事の目標】：【読者にどんな行動をとってほしいか】
【文字数目安】：【〇〇字程度】

以下の形式で構成を作成してください：
・タイトル候補（3案）
・導入文の方向性
・H2見出し（4〜6個）
  └ 各H2の下にH3見出し（2〜3個）と、書くべき内容の概要

SEOキーワードを自然に含めた見出し構成にしてください。`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例（「ChatGPT 初心者 使い方」をテーマにした場合）">{`【タイトル候補】
① ChatGPT初心者ガイド｜今日から使える基本の使い方と活用術
② 【2026年最新】ChatGPTの使い方を初心者向けに徹底解説
③ ChatGPTを初めて使う方へ｜登録から活用まで完全ガイド

【導入文の方向性】
読者の悩み（「使い方がわからない」「うまく活用できない」）に共感し、この記事を読めば解決できることを伝える。

【記事構成】

H2：ChatGPTとは？初心者でも3分でわかる基礎知識
  H3：ChatGPTの仕組みをざっくり理解する
  H3：無料版と有料版（Plus）の違い

H2：ChatGPTの始め方｜アカウント登録から最初の質問まで
  H3：アカウント登録の手順（画像付きで解説）
  H3：最初の質問の仕方

H2：初心者がすぐ使えるChatGPT活用例5選
  H3：メール・文章作成
  H3：調べ物・情報収集
  H3：アイデア出し

H2：ChatGPTをうまく使うコツ
  H3：良い質問の作り方
  H3：回答を改善する方法

H2：よくある質問と注意点
  H3：ChatGPTが間違えることはある？
  H3：個人情報は入力してもいい？

H2：まとめ`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>「読者の悩み・課題」を具体的に書くと、読者に刺さる構成が生成されます。</li>
                  <li>タイトル候補を3案生成することで、最適なものを選べます。</li>
                  <li>構成が決まったら、次のプロンプトで各セクションの本文を執筆しましょう。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト2 */}
            <div id="prompt2">
              <h3>プロンプト2：記事本文の執筆</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                指定した見出しに対応した本文が生成されます。読みやすい段落構成で、ターゲット読者に合ったトーンで書かれます。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                構成が決まった後、各セクションの本文を効率的に書きたいときに使えます。セクションごとに実行することで、全体の品質が安定します。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`以下の条件でブログ記事の本文を執筆してください。

【記事テーマ】：【記事全体のテーマ】
【対象セクション】：【執筆するH2見出し】
【ターゲット読者】：【誰に向けた記事か】
【文体・トーン】：【です・ます調/カジュアル/専門的など】
【文字数】：【このセクションの目標文字数】
【含めてほしい情報】：【必ず入れたい内容・キーワード・事例など】

以下のルールで執筆してください：
・専門用語は使わず、初心者でもわかる言葉で書く
・具体例や数字を積極的に使う
・段落は3〜5文程度にまとめる
・読者が「なるほど」と思えるような説明を心がける`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例">{`【ChatGPTとは？初心者でも3分でわかる基礎知識】

ChatGPTは、アメリカのOpenAI社が開発した「AIチャットボット」です。難しく聞こえるかもしれませんが、要するに「賢いLINE」のようなものです。テキストを入力すると、まるで人間のように自然な文章で返答してくれます。

ChatGPTが他の検索エンジンと大きく違うのは、「会話形式で使える」という点です。Googleで検索する場合はキーワードを入力しますが、ChatGPTには「〇〇について教えてください」「〇〇の文章を作ってください」と、普通の言葉で話しかけるだけで使えます。

2022年11月の公開以来、わずか2ヶ月で1億人のユーザーを獲得した、史上最速で普及したサービスとも言われています。現在は世界中のビジネスパーソンや学生が、文章作成・翻訳・プログラミング・アイデア出しなど、さまざまな用途で活用しています。`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>一度に全文を生成するのではなく、セクションごとに生成することで品質が安定します。</li>
                  <li>「具体例や数字を積極的に使う」と指示することで、説得力のある文章になります。</li>
                  <li>生成後は必ず事実確認を行い、誤情報が含まれていないかチェックしましょう。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト3 */}
            <div id="prompt3">
              <h3>プロンプト3：SEOタイトルと導入文の作成</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                検索上位を狙えるSEOタイトルの候補と、読者を記事に引き込む導入文が生成されます。クリック率を高めるタイトルの書き方のコツも含まれます。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                記事本文が完成した後、タイトルと導入文を最適化したいときに使えます。SEOを意識したタイトルを複数候補から選びたいときにも便利です。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`以下の記事のSEOタイトルと導入文を作成してください。

【記事テーマ・内容の概要】：【記事で扱うテーマと主な内容】
【メインキーワード】：【SEOで狙いたいキーワード】
【ターゲット読者】：【誰に向けた記事か】
【読者の悩み】：【読者が抱えている問題】

【SEOタイトル】
・5案作成してください
・32文字以内
・メインキーワードを含める
・読者が思わずクリックしたくなる表現を使う

【導入文】
・300字程度
・読者の悩みに共感するところから始める
・この記事を読むとどんな問題が解決するかを明示する
・読み続けたくなる引きを作る`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例">{`【SEOタイトル候補5案】
① ChatGPT初心者ガイド｜今日から使える基本の使い方
② 【完全版】ChatGPTの使い方を初心者向けに徹底解説
③ ChatGPTが使えない初心者必見！3分でわかる基本操作
④ ChatGPTの使い方入門｜登録から活用まで全部わかる
⑤ 初心者でも失敗しないChatGPTの始め方と活用術

【導入文】
「ChatGPTって聞いたことはあるけど、どうやって使えばいいの？」

そんな疑問を持っている方は、実はとても多いです。ChatGPTは2022年の公開以来、世界中で1億人以上が使っているAIツールですが、「難しそう」「使い方がわからない」という理由で、まだ試したことがない方も少なくありません。

この記事では、ChatGPTを一度も使ったことがない方でも、今日からすぐに使い始められるよう、基本的な使い方から実践的な活用例まで、わかりやすく解説します。読み終わる頃には、「もっと早く使えばよかった！」と思っていただけるはずです。`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>タイトルは「数字」「疑問形」「メリット明示」の要素を含めるとクリック率が上がります。</li>
                  <li>導入文は「読者の悩みへの共感」→「解決の約束」の流れが効果的です。</li>
                  <li>タイトルは5案の中から最もSEOとクリック率のバランスが取れたものを選びましょう。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト4 */}
            <div id="prompt4">
              <h3>プロンプト4：SNS投稿文の作成</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                Twitter（X）・Instagram・Facebookなど、各SNSの特性に合わせた投稿文が生成されます。ハッシュタグの提案も含まれます。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                記事を公開した後、SNSで宣伝したいときに使えます。各SNSに合わせた文体・文字数で投稿文を作成できます。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`以下のブログ記事のSNS投稿文を作成してください。

【記事タイトル】：【記事のタイトル】
【記事URL】：【記事のURL（任意）】
【記事の要点】：【記事で伝えたい主なポイントを3つ程度】
【ターゲット読者】：【誰に読んでほしいか】

以下のSNSそれぞれに合わせた投稿文を作成してください：

【Twitter（X）】
・140文字以内
・インパクトのある一文から始める
・ハッシュタグを3〜5個含める

【Instagram】
・200〜300字
・絵文字を適度に使用
・ハッシュタグを10〜15個含める

【Facebook】
・300〜400字
・丁寧な文体
・記事への誘導を含める`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例">{`【Twitter（X）投稿文】
ChatGPTを使えば、ブログ記事が10倍速で書けます📝

構成作成→本文執筆→タイトル最適化まで、AIに任せる方法を解説しました。

✅ 記事構成を5分で作成
✅ セクション別に高品質な本文を生成
✅ SEOタイトルを複数候補から選択

詳しくはこちら👇
#ChatGPT #ブログ #AI活用 #コンテンツ作成

---

【Instagram投稿文】
✨ ブログ記事の執筆、AIに任せてみませんか？

ChatGPTを使えば、記事の構成から本文まで効率的に作成できます📱

この記事では...
📌 記事構成の作り方
📌 本文執筆のコツ
📌 SEOタイトルの最適化
📌 SNS投稿文の作成

...をすべてカバーしています！

ブログを始めたいけど時間がない方、文章を書くのが苦手な方、ぜひ試してみてください✨

#ChatGPT #ブログ運営 #AI活用 #コンテンツマーケティング #ライティング #ブログ初心者 #副業 #在宅ワーク #文章術 #AI`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>TwitterはインパクトのあるフックとCTA（行動喚起）が重要です。</li>
                  <li>Instagramはハッシュタグを多めに設定することで、発見されやすくなります。</li>
                  <li>各SNSの文化・文体に合わせて投稿文を使い分けることが大切です。</li>
                </ul>
              </PromptInfoCard>
            </div>
          </section>

          {/* 活用のコツセクション */}
          <section id="tips">
            <h2>AI記事をさらに良くするコツ</h2>
            <p>ChatGPTで生成した記事をさらに良くするためのコツをご紹介します。</p>
            <ul>
              <li><strong>自分の経験・体験を加える</strong>：AIが生成した文章に、自分の実体験や具体的なエピソードを加えることで、オリジナリティが生まれます。</li>
              <li><strong>事実確認を必ず行う</strong>：AIは間違った情報を自信満々に書くことがあります。数字・日付・固有名詞は必ず確認しましょう。</li>
              <li><strong>読み返して自分の言葉に直す</strong>：生成された文章をそのまま使うのではなく、読み返して不自然な部分を修正しましょう。</li>
              <li><strong>画像・図表を追加する</strong>：テキストだけでなく、画像や図表を追加することで、読みやすさと理解度が向上します。</li>
            </ul>
          </section>

          {/* CTA */}
          <AffiliateBox
            title="ChatGPT Plusでさらに高品質なコンテンツを"
            description="月額20ドルでGPT-4が使い放題。より長い記事の生成や、複雑なテーマの解説も高精度に行えます。ブログ運営を本格化させたい方におすすめです。"
            buttonText="ChatGPT Plusを試してみる"
            buttonHref="https://chat.openai.com/auth/login"
            features={[
              "GPT-4モデルが使い放題",
              "より長い記事の生成に対応",
              "より自然で高品質な文章生成",
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
                <li className="flex gap-2"><span>•</span>AIが生成した記事は必ず事実確認を行ってください。誤情報を含む記事の公開は、読者への迷惑や信頼損失につながります。</li>
                <li className="flex gap-2"><span>•</span>AIが生成した文章をそのまま公開することは、Googleのガイドラインに抵触する可能性があります。必ず加筆・修正を行いましょう。</li>
                <li className="flex gap-2"><span>•</span>他者の著作物をAIに入力して記事を生成することは、著作権侵害になる可能性があります。</li>
                <li className="flex gap-2"><span>•</span>個人情報や機密情報をChatGPTに入力しないようにしてください。</li>
              </ul>
            </div>
          </section>

          {/* まとめ */}
          <section id="summary">
            <h2>まとめ</h2>
            <p>この記事では、ChatGPTを使ってブログ記事を効率的に作成するためのプロンプトを4つご紹介しました。</p>
            <ul>
              <li><strong>記事構成の作成</strong>：SEOを意識したH2・H3の見出し構成を素早く作成</li>
              <li><strong>記事本文の執筆</strong>：セクションごとに高品質な本文を生成</li>
              <li><strong>SEOタイトルと導入文</strong>：クリック率を高めるタイトルと読者を引き込む導入文</li>
              <li><strong>SNS投稿文</strong>：各SNSの特性に合わせた宣伝文を自動生成</li>
            </ul>
            <p>AIはあくまでも「執筆のサポート」として活用してください。自分の経験や視点を加えることで、読者に価値を届けるオリジナルのコンテンツが完成します。ぜひ試してみてください。</p>
          </section>

          <RelatedArticles articles={relatedArticles} />
        </ArticleContent>
      </div>
    </PageLayout>
  );
}
