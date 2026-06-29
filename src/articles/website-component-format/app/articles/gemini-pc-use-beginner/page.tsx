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
  title: 'マウス操作もAIにお任せ！Google Geminiの「パソコンの使用」で作業を自動化するプロンプト術',
  description: 'Google Gemini 3.5 Flashの新機能「パソコンの使用（Computer Use）」を使って、AIに画面操作を任せる方法を初心者向けに解説。コピペ作業からの解放、安全な使い方のコツを実践プロンプトとともに紹介します。',
  keywords: 'Google Gemini, パソコンの使用, Computer Use, AI自動化, プロンプト, 初心者, 画面操作, Gemini 3.5 Flash',
  openGraph: {
    title: 'マウス操作もAIにお任せ！Google Geminiの「パソコンの使用」で作業を自動化するプロンプト術',
    description: 'Google Gemini 3.5 Flashの新機能「パソコンの使用」で、AIが画面を見て操作する自動化プロンプト術を初心者向けに解説します。',
    type: 'article',
    images: ['/images/og-image-nano-banana-2.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'マウス操作もAIにお任せ！Google Geminiの「パソコンの使用」で作業を自動化するプロンプト術',
    description: 'Google Gemini 3.5 Flashの新機能「パソコンの使用」で、AIが画面を見て操作する自動化プロンプト術を初心者向けに解説します。',
    images: ['/images/og-image-nano-banana-2.png'],
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
        { title: "マウス操作もAIにお任せ！Google Geminiの「パソコンの使用」で作業を自動化するプロンプト術", href: "/articles/gemini-pc-use-beginner" },
        { title: "AIエージェントで業務自動化！自律型ワークフロー構築プロンプト術", href: "/articles/ai-agent-workflow" },
        { title: "ChatGPT「高度な音声モード」活用術", href: "/articles/chatgpt-voice-beginner" },
      ],
    },
    {
      name: "Google AI活用",
      articles: [
        { title: "Gemini 2.0 Pro マルチモーダル活用術", href: "/articles/gemini-2-pro-multimodal" },
        { title: "Gemini for Google Workspace 活用ガイド", href: "/articles/gemini-workspace-extensions" },
        { title: "Google Vids で動画作成を自動化する方法", href: "/articles/google-vids-free-beginner" },
      ],
    },
  ],
  copyright: "© 2026 AIプロンプト活用ガイド All Rights Reserved.",
}

const headings = [
  { id: "introduction", text: "AIが「見て、動く」時代が来た", level: 2 as const },
  { id: "what-is-computer-use", text: "「パソコンの使用」ツールとは？", level: 2 as const },
  { id: "prompt-1", text: "プロンプト1：視覚的な指示で画面を操作させる", level: 2 as const },
  { id: "prompt-2", text: "プロンプト2：アプリをまたぐコピペ作業を自動化する", level: 2 as const },
  { id: "prompt-3", text: "プロンプト3：確認ステップを挟みながら安全に操作させる", level: 2 as const },
  { id: "prompt-4", text: "プロンプト4：繰り返し作業をまとめて自動実行させる", level: 2 as const },
  { id: "safety-tips", text: "安全に使うための3つの心がけ", level: 2 as const },
  { id: "summary", text: "まとめ：「言葉」でパソコンを動かす新時代", level: 2 as const },
]

const prompts = {
  visualOperation: `あなたは私のパソコンの画面を見ながら操作を行うAIアシスタントです。
現在の画面を確認して、以下の操作を順番に実行してください。

【操作内容】
【操作したい内容を具体的に入力（例：「画面右上の検索ボックスに『AIプロンプト』と入力してEnterを押す」）】

【注意事項】
・操作を実行する前に、対象の要素が画面上に存在することを確認してください。
・見つからない場合は操作を止めて、その旨を報告してください。
・各操作の完了後に「〇〇を実行しました」と報告してください。`,

  visualOperationResponse: `画面を確認しました。ご指示の操作を実行します。

【実行ステップ】
1. 画面右上の検索ボックスを確認しました。
2. 検索ボックスをクリックしてフォーカスを当てました。
3. 「AIプロンプト」と入力しました。
4. Enterキーを押して検索を実行しました。

【完了報告】
検索ボックスへの入力とEnterキーの押下が完了しました。検索結果ページが表示されています。
次の操作があればお知らせください。`,

  crossAppCopy: `あなたは複数のアプリケーションを横断して操作できるAIアシスタントです。
以下の手順でデータの転記作業を実行してください。

【転記元】
アプリ名: 【転記元のアプリ名を入力（例：Chrome ブラウザ）】
取得する情報: 【取得したい情報を入力（例：表示されている商品名・価格・在庫数）】

【転記先】
アプリ名: 【転記先のアプリ名を入力（例：Excel）】
入力先のセル: 【入力先を入力（例：A列に商品名、B列に価格、C列に在庫数）】

【実行手順】
1. 転記元アプリから指定の情報を読み取る
2. 転記先アプリに切り替える
3. 指定のセルに情報を入力する
4. 完了後に転記した件数を報告する`,

  crossAppCopyResponse: `転記作業を開始します。

【ステップ1：転記元から情報を読み取り】
Chromeブラウザの画面を確認しました。
表示されている商品情報を読み取りました：
・商品名：AIプロンプト活用ガイド（書籍）
・価格：2,480円
・在庫数：残り3点

【ステップ2：Excelへ切り替え】
タスクバーからExcelウィンドウに切り替えました。

【ステップ3：セルへの入力】
・A2セルに「AIプロンプト活用ガイド（書籍）」を入力しました。
・B2セルに「2480」を入力しました。
・C2セルに「3」を入力しました。

【完了報告】
1件の転記が完了しました。続けて次の商品情報を転記する場合はお知らせください。`,

  safeOperation: `あなたは慎重に操作を行うAIアシスタントです。
以下の作業を実行しますが、**重要な操作の前には必ず私に確認を取ってください**。

【実行したい作業】
【実行したい作業内容を入力（例：「メールの下書きを送信する」）】

【確認が必要なタイミング】
・ファイルを削除・上書きする前
・メール・メッセージを送信する前
・フォームを送信・決済を実行する前
・設定を変更する前

【確認方法】
「次に〇〇を実行しようとしています。実行してよいですか？（はい/いいえ）」と質問してください。
私が「はい」と答えた場合のみ操作を進めてください。`,

  safeOperationResponse: `承知しました。慎重に作業を進めます。

【現在の状況】
メールの下書きを確認しました。
宛先：example@company.co.jp
件名：【ご確認】プロジェクト進捗報告
本文：（下書き内容を確認済み）

【確認のお願い】
次に「このメールを送信する」操作を実行しようとしています。
実行してよいですか？（はい/いいえ）

※「はい」とお答えいただいた場合のみ送信ボタンをクリックします。
※「いいえ」の場合は下書き保存のまま操作を停止します。`,

  repeatTask: `あなたは繰り返し作業を効率よく自動実行できるAIアシスタントです。
以下の作業を指定した回数だけ繰り返し実行してください。

【繰り返す作業の内容】
【繰り返したい作業を入力（例：「スプレッドシートの各行のURLを開いて、タイトルをB列にコピーする」）】

【繰り返す対象】
対象の範囲: 【対象範囲を入力（例：「A2からA20の各行」）】
合計件数: 【件数を入力（例：「19件」）】

【実行ルール】
・1件ごとに完了を確認してから次へ進む
・エラーが発生した場合は該当行をスキップして続行し、最後にエラー一覧を報告する
・全件完了後に「〇件成功、〇件エラー」の形式でサマリーを報告する`,

  repeatTaskResponse: `繰り返し作業を開始します。全19件を順番に処理します。

【進捗状況】
1件目（A2行）：URL「https://example.com/article1」を開きました。
タイトル「AIプロンプト入門ガイド」をB2セルにコピーしました。✓

2件目（A3行）：URL「https://example.com/article2」を開きました。
タイトル「ChatGPT活用術2026」をB3セルにコピーしました。✓

3件目（A4行）：URLが空欄のためスキップしました。（エラーリストに追加）

…（以降、16件を順次処理）

【最終サマリー】
全19件の処理が完了しました。
・成功：17件
・スキップ（エラー）：2件（A4行：URL空欄、A11行：ページ読み込みエラー）
エラー行の対応が必要な場合はお知らせください。`,
}

const relatedArticles = [
  {
    title: "AIエージェントで業務自動化！自律型ワークフロー構築プロンプト術",
    description: "複数のタスクを連携させて自動完結させる「エージェント型ワークフロー」の構築方法を解説",
    href: "/articles/ai-agent-workflow",
  },
  {
    title: "AIと1000以上のアプリを直結！MCP連携による自律型ワークフロー構築ガイド",
    description: "Model Context Protocolを活用してAIの行動範囲を広げる方法",
    href: "/articles/mcp-integration-guide",
  },
  {
    title: "Vibe Working（バイブ・ワーキング）入門",
    description: "プロンプト不要？感覚でAIを操る新しい働き方",
    href: "/articles/vibe-working-beginner",
  },
]

export default function GeminiPcUseBeginnerPage() {
  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title="マウス操作もAIにお任せ！Google Geminiの「パソコンの使用」で作業を自動化するプロンプト術"
          eyecatchSrc="/images/og-image-nano-banana-2.png"
          createdAt="2026年6月28日"
          updatedAt="2026年6月28日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">

          {/* ===== はじめに ===== */}
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              AIが「見て、動く」時代が来た
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「プロンプトを入力したら、AIが自分で画面を操作してくれたら楽なのに」——そんな夢のような話が、2026年6月についに現実になりました。
              Googleの最新AI「Gemini 3.5 Flash」に、AIが直接パソコンの画面を見てクリックやタイピングを行う
              <strong>「パソコンの使用（Computer Use）」ツール</strong>のプレビュー版が登場したのです。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              この機能を使えば、「このExcelのデータをあのサイトに入力して」「ブラウザで調べた情報をカレンダーに登録して」といった、
              複数のアプリを行き来する面倒な作業をAIに丸ごと任せられます。
              本記事では、AI操作の初心者でもすぐに使える実践プロンプトを4つ厳選して紹介します。
            </p>
            <div className="bg-[#F5F9FC] p-6 rounded-lg mb-6">
              <h4 className="font-bold text-[#333333] mb-2">この記事で学べること</h4>
              <ul className="list-disc list-inside space-y-2 text-[#333333]">
                <li>「パソコンの使用」ツールの基本的な仕組みと使い方</li>
                <li>視覚的な指示でAIに画面操作をさせるプロンプト</li>
                <li>アプリをまたぐコピペ作業を自動化するプロンプト</li>
                <li>確認ステップを挟みながら安全に操作させるプロンプト</li>
                <li>繰り返し作業をまとめて自動実行させるプロンプト</li>
              </ul>
            </div>
          </section>

          {/* ===== 機能説明 ===== */}
          <section id="what-is-computer-use" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「パソコンの使用」ツールとは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「パソコンの使用（Computer Use）」とは、AIがパソコンの画面をリアルタイムで認識し、
              ユーザーの指示に基づいてクリック・テキスト入力・スクロールなどの操作を自律的に実行できる機能です。
              従来のAIチャットは「テキストで回答を返す」だけでしたが、この機能によってAIは「実際に手を動かす」存在へと進化しました。
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-bold mb-3 text-[#333333]">従来のAIとの違い</h4>
              <table className="w-full text-sm text-[#333333]">
                <thead>
                  <tr className="border-b border-[#5B9BD5]">
                    <th className="text-left py-2 pr-4">項目</th>
                    <th className="text-left py-2 pr-4">従来のAIチャット</th>
                    <th className="text-left py-2">パソコンの使用ツール</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">できること</td>
                    <td className="py-2 pr-4">テキストで回答を返す</td>
                    <td className="py-2">画面を見て実際に操作する</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">アプリ連携</td>
                    <td className="py-2 pr-4">不可（コピペは手動）</td>
                    <td className="py-2">複数アプリを自動で横断</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">繰り返し作業</td>
                    <td className="py-2 pr-4">都度指示が必要</td>
                    <td className="py-2">まとめて自動実行</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[#333333] leading-relaxed">
              現在はGemini APIのプレビュー版として提供されており、開発者向けの機能として公開されています。
              今後は一般ユーザー向けのサービスへの統合も期待されています。
            </p>
          </section>

          {/* ===== プロンプト1 ===== */}
          <section id="prompt-1" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              プロンプト1：視覚的な指示で画面を操作させる
            </h2>
            <p className="text-[#333333] leading-relaxed mb-6">
              最初のプロンプトは、AIに「画面を見ながら操作する」という基本動作を教えるものです。
              「右上のボタンをクリックして」「検索ボックスに〇〇と入力して」といった、
              人間が日常的に行うような視覚的な指示がそのまま通じるのが、この機能の最大の特徴です。
            </p>

            <div className="mb-8 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                視覚的指示プロンプト
              </h3>
              <PromptInfoCard type="response" title="期待される動作">
                <p>
                  AIが現在の画面を確認し、指定した要素（ボタン、テキストボックスなど）を特定して操作を実行します。
                  操作のたびに「〇〇を実行しました」と報告するため、進捗を把握しながら作業を進められます。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんな場面で使える">
                <p>
                  ウェブサービスへのログイン操作、フォームへの情報入力、ファイルのダウンロードボタンのクリックなど、
                  「どこをクリックすればいいかわかっているが手間がかかる」作業に最適です。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="tips" title="うまく使うコツ">
                <p>
                  「右上の青いボタン」「検索ボックスの右側にある虫眼鏡アイコン」のように、
                  色・位置・形状を組み合わせて要素を説明すると、AIが正確に対象を特定できます。
                  曖昧な指示よりも具体的な描写が成功率を高めます。
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.visualOperation} />
              <ResponseExample response={prompts.visualOperationResponse} />
            </div>
          </section>

          {/* ===== プロンプト2 ===== */}
          <section id="prompt-2" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              プロンプト2：アプリをまたぐコピペ作業を自動化する
            </h2>
            <p className="text-[#333333] leading-relaxed mb-6">
              「ブラウザで調べた情報をExcelに転記する」「メールの内容をカレンダーに登録する」——
              こうしたアプリをまたぐコピペ作業は、毎日行うと相当な時間を消費します。
              このプロンプトを使えば、AIが複数のアプリを自動で行き来して転記作業を代行してくれます。
            </p>

            <div className="mb-8 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                アプリ横断コピペ自動化プロンプト
              </h3>
              <PromptInfoCard type="response" title="期待される動作">
                <p>
                  転記元アプリから指定の情報を読み取り、転記先アプリに切り替えて指定の場所に入力します。
                  転記した件数を最後に報告するため、作業の完了確認が簡単に行えます。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんな場面で使える">
                <p>
                  ウェブサイトの商品情報をExcelに転記する作業、メールの予定をGoogleカレンダーに登録する作業、
                  PDFの数値をスプレッドシートに入力する作業など、日常的なデータ転記業務全般に活用できます。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="tips" title="うまく使うコツ">
                <p>
                  転記元と転記先の「アプリ名」「取得する情報の種類」「入力先の場所（セル番号や項目名）」を
                  できるだけ具体的に指定することが重要です。
                  また、転記前にExcelのファイルを開いておくと、AIがスムーズに切り替えられます。
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.crossAppCopy} />
              <ResponseExample response={prompts.crossAppCopyResponse} />
            </div>
          </section>

          {/* ===== プロンプト3 ===== */}
          <section id="prompt-3" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              プロンプト3：確認ステップを挟みながら安全に操作させる
            </h2>
            <p className="text-[#333333] leading-relaxed mb-6">
              AIに操作を任せる際に最も心配なのが「意図しない操作をしてしまわないか」という点です。
              特に、メールの送信やファイルの削除、フォームの送信など、取り消しが難しい操作は慎重に行いたいものです。
              このプロンプトでは、重要な操作の前に必ず確認を取るよう指示することで、安全性を確保します。
            </p>

            <div className="mb-8 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                確認付き安全操作プロンプト
              </h3>
              <PromptInfoCard type="response" title="期待される動作">
                <p>
                  AIが重要な操作（送信・削除・決済など）の直前に「〇〇を実行しようとしています。実行してよいですか？」と
                  確認を求めます。ユーザーが「はい」と答えた場合のみ操作を進めるため、誤操作を防げます。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんな場面で使える">
                <p>
                  メールの送信代行、ファイルの整理・削除、オンラインフォームへの申請、
                  ECサイトでの注文確定など、「後から取り消せない操作」を含む作業に特に有効です。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="tips" title="うまく使うコツ">
                <p>
                  「確認が必要なタイミング」のリストを自分の用途に合わせてカスタマイズしましょう。
                  たとえば「金額が1万円を超える決済の前」「10件以上のファイルを一括削除する前」のように、
                  条件を具体的に設定すると、不要な確認を減らしながら安全性を保てます。
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.safeOperation} />
              <ResponseExample response={prompts.safeOperationResponse} />
            </div>
          </section>

          {/* ===== プロンプト4 ===== */}
          <section id="prompt-4" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              プロンプト4：繰り返し作業をまとめて自動実行させる
            </h2>
            <p className="text-[#333333] leading-relaxed mb-6">
              同じ操作を何十回も繰り返す単純作業は、AIが最も得意とする分野のひとつです。
              「スプレッドシートの各行のURLを順番に開いて情報を転記する」「複数のファイルに同じ処理を適用する」といった
              繰り返し作業を、このプロンプトで一括自動化できます。
            </p>

            <div className="mb-8 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                繰り返し作業一括自動化プロンプト
              </h3>
              <PromptInfoCard type="response" title="期待される動作">
                <p>
                  指定した範囲の各件を順番に処理し、エラーが発生した場合はスキップして続行します。
                  全件完了後に「〇件成功、〇件エラー」の形式でサマリーを報告するため、
                  作業の全体像を一目で把握できます。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんな場面で使える">
                <p>
                  URLリストの一括スクレイピングと転記、複数ファイルへの同一操作の適用、
                  リスト形式のデータを使った一括フォーム入力など、
                  「同じ操作を多数の対象に繰り返す」あらゆる作業に活用できます。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="tips" title="うまく使うコツ">
                <p>
                  処理件数が多い場合は「10件ごとに進捗を報告する」という指示を追加すると、
                  作業の途中経過を把握しやすくなります。
                  また、エラーが多発する場合は対象範囲を絞って原因を特定してから再実行するのが効率的です。
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.repeatTask} />
              <ResponseExample response={prompts.repeatTaskResponse} />
            </div>
          </section>

          {/* ===== 安全に使うためのコツ ===== */}
          <section id="safety-tips" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              安全に使うための3つの心がけ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-6">
              「パソコンの使用」ツールは非常に強力ですが、AIに操作を任せる以上、
              いくつかの基本的な注意点を守ることが大切です。
              特に初めて使う方は、以下の3点を意識してください。
            </p>
            <ul className="list-disc list-inside text-[#333333] space-y-4 mb-6">
              <li>
                <strong>最小限の権限から始める：</strong>
                最初は「読み取り専用」の操作（情報の確認・コピーなど）から試し、
                慣れてきたら書き込み・送信などの操作へと段階的に範囲を広げましょう。
                いきなり重要なファイルの操作を任せるのは避けてください。
              </li>
              <li>
                <strong>重要な操作には必ず確認ステップを入れる：</strong>
                プロンプト3で紹介した「確認付き操作プロンプト」を活用し、
                取り消しが難しい操作（送信・削除・決済など）の前には必ずAIに確認を求めるよう指示しましょう。
              </li>
              <li>
                <strong>操作ログを確認する習慣をつける：</strong>
                AIが実行した操作の報告をこまめに確認し、意図通りに動作しているかを検証しましょう。
                特に初回実行時は、AIの動作を画面で見守りながら進めることをおすすめします。
              </li>
            </ul>
          </section>

          {/* ===== まとめ ===== */}
          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ：「言葉」でパソコンを動かす新時代
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Google Geminiの「パソコンの使用」ツールは、AIとパソコン操作の関係を根本から変える機能です。
              これまで「AIに聞いて、自分で操作する」という2ステップが必要だった作業が、
              「AIに言葉で伝えるだけ」の1ステップに集約されます。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              本記事で紹介した4つのプロンプトを使えば、視覚的な画面操作・アプリをまたぐ転記作業・
              安全確認付きの重要操作・繰り返し作業の自動化まで、幅広いシーンに対応できます。
            </p>
            <p className="text-[#333333] leading-relaxed">
              まずは「読み取り専用の操作」など、リスクの低い作業から試してみてください。
              AIが実際に画面を見て動く感覚を体験すれば、日常業務の自動化の可能性が大きく広がるはずです。
            </p>
          </section>

          <AffiliateBox
            title="Google Gemini APIを今すぐ試してみよう"
            description="「パソコンの使用」ツールはGemini APIのプレビュー版として利用できます。Google AI Studioから無料で試せるので、ぜひ実際の操作を体験してみてください。"
            buttonText="Google AI Studioを開く"
            buttonHref="https://aistudio.google.com/"
            features={[
              "Gemini 3.5 Flash の最新機能を無料で試せる",
              "プレビュー版のComputer Useツールに対応",
              "APIキーの取得から利用開始まで数分で完了",
            ]}
          />

          <section id="related">
            <RelatedArticles articles={relatedArticles} />
          </section>

        </div>
      </article>
    </PageLayout>
  )
}
