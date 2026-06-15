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
  title: '【中級者向け】AIが自律的にタスクを完遂！OpenAIの最新エージェント『Operator』による業務自動化プロンプト術',
  description: '2026年5月19日に一般公開されたOpenAIの自律型AIエージェント「Operator」を最大限に活用し、日常業務を完全に自動化するための「ゴール逆算型」プロンプト術を解説します。',
  keywords: 'OpenAI, Operator, AIエージェント, 業務自動化, プロンプト, 自律型AI, ワークフロー',
  openGraph: {
    title: '【中級者向け】AIが自律的にタスクを完遂！OpenAIの最新エージェント『Operator』による業務自動化プロンプト術',
    description: 'OpenAIの自律型AIエージェント「Operator」を最大限に活用し、日常業務を完全に自動化するための「ゴール逆算型」プロンプト術を解説。',
    type: 'article',
    images: ['/images/openai-operator-eyecatch.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '【中級者向け】AIが自律的にタスクを完遂！OpenAIの最新エージェント『Operator』による業務自動化プロンプト術',
    description: 'OpenAIの自律型AIエージェント「Operator」を最大限に活用し、日常業務を完全に自動化するための「ゴール逆算型」プロンプト術を解説。',
    images: ['/images/openai-operator-eyecatch.jpg'],
  },
}

// 共通設定
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
        { title: "AIエージェントで業務自動化！自律型ワークフロー構築プロンプト術", href: "/articles/ai-agent-workflow" },
        { title: "ChatGPT「高度な音声モード」活用術", href: "/articles/chatgpt-voice-beginner" },
        { title: "Vibe Working（バイブ・ワーキング）入門", href: "/articles/vibe-working-beginner" },
      ],
    },
    {
      name: "ビジネス文書",
      articles: [
        { title: "会議議事録をChatGPTで自動作成するプロンプト4選", href: "/articles/chatgpt-meeting-minutes" },
        { title: "Excelの「わからない」をAIに丸投げ！Copilot Excelエージェント超入門", href: "/articles/excel-copilot-agent" },
      ],
    },
  ],
  copyright: "© 2026 AIプロンプト活用ガイド All Rights Reserved.",
}

// 目次データ
const headings = [
  { id: "overview", text: "Operatorの基本性能：自律的なブラウジングとツール実行", level: 2 as const },
  { id: "goal-oriented", text: "「ゴール逆算型」プロンプトの極意", level: 2 as const },
  { id: "prompts", text: "Operatorを活用する実践プロンプト4選", level: 2 as const },
  { id: "prompt-1", text: "プロンプト1：出張手配の完全自動化", level: 3 as const },
  { id: "prompt-2", text: "プロンプト2：競合調査とレポート作成", level: 3 as const },
  { id: "prompt-3", text: "プロンプト3：GitHubのIssue確認とバグ修正", level: 3 as const },
  { id: "prompt-4", text: "プロンプト4：エラーハンドリングと軌道修正", level: 3 as const },
  { id: "security", text: "セキュリティと権限管理の注意点", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
]

// プロンプトデータ
const prompts = {
  prompt1: `来週の東京出張のスケジュールを立てて。予算5万円以内で新幹線とホテルを予約し、確定した日程をGoogleカレンダーに登録して、関係者にSlackで共有して。
【出張日時】：【〇〇を入力】
【目的地】：【〇〇を入力】
【関係者のSlackチャンネル】：【〇〇を入力】`,

  response1: `■ 出張手配完了レポート

以下の内容で手配を完了しました。

1. **新幹線・ホテル予約**
   - 往路：東京行き（〇月〇日 09:00発）
   - 復路：東京発（〇月〇日 18:00発）
   - ホテル：〇〇ホテル（〇月〇日チェックイン、1泊）
   - 合計金額：48,500円（予算内）

2. **Googleカレンダー登録**
   - 出張日程として〇月〇日〜〇月〇日をカレンダーに登録しました。

3. **Slack共有**
   - 指定されたチャンネル（#〇〇）に、出張日程と連絡先を投稿しました。`,

  prompt2: `競合他社5社の最新の製品アップデートを調査し、比較表をスプレッドシートで作成して。完成したらPDFで保存し、私のメールに送信して。
【調査対象の競合他社】：【〇〇を入力】
【比較項目】：【〇〇を入力】
【送信先メールアドレス】：【〇〇を入力】`,

  response2: `■ 競合調査完了レポート

指定された5社の製品アップデート調査が完了しました。

1. **調査内容**
   - 各社の公式サイト、プレスリリース、技術ブログをクロールし、最新のアップデート情報を抽出しました。
   - 比較項目（機能、価格、ターゲット層）に沿ってデータを整理しました。

2. **スプレッドシート作成**
   - 抽出したデータをスプレッドシートに入力し、比較表を作成しました。

3. **PDF送信**
   - スプレッドシートをPDF形式で保存し、指定されたメールアドレス（〇〇@example.com）に送信しました。添付ファイルをご確認ください。`,

  prompt3: `GitHubリポジトリのIssueを確認し、バグ修正のプルリクエストを作成して。テストが通ることを確認してから報告して。
【対象リポジトリ】：【〇〇を入力】
【修正対象のIssue番号】：【〇〇を入力】`,

  response3: `■ バグ修正完了レポート

指定されたIssueの修正とプルリクエストの作成が完了しました。

1. **Issueの確認**
   - Issue #〇〇（〇〇に関するバグ）の内容と再現手順を確認しました。

2. **コード修正**
   - ローカル環境でリポジトリをクローンし、該当箇所のコードを修正しました。
   - 修正内容：〇〇の処理で発生していたNull参照エラーを修正。

3. **テスト実行**
   - 既存の単体テストを実行し、すべてパスすることを確認しました。
   - 新たなテストケースを追加し、カバレッジを維持しました。

4. **プルリクエスト作成**
   - 修正ブランチ（fix/issue-〇〇）をプッシュし、プルリクエストを作成しました。
   - PRのURL：https://github.com/〇〇/〇〇/pull/〇〇`,

  prompt4: `先ほどのタスクでエラーが発生したようです。ログを確認し、原因を特定して再度実行して。もし外部APIの制限に引っかかっている場合は、待機時間を設けてリトライして。
【対象タスク】：【〇〇を入力】
【エラー内容】：【〇〇を入力】`,

  response4: `■ エラー復旧・再実行レポート

エラーの原因を特定し、タスクを正常に完了しました。

1. **エラー原因の特定**
   - ログを確認した結果、外部API（〇〇API）のレートリミット（リクエスト上限）に達していたことが原因でした。

2. **軌道修正**
   - APIの仕様に従い、リクエスト間に5秒の待機時間（スリープ）を設けるようスクリプトを修正しました。

3. **再実行**
   - 修正したスクリプトでタスクを再実行し、すべての処理が正常に完了したことを確認しました。`,
}

const relatedArticles = [
  {
    title: "【中級者向け】動画・音声・コードを同時解析！Google Gemini 2.0 Proの『マルチモーダル推論』活用プロンプト術",
    description: "Gemini 2.0 Proの革新的なマルチモーダル推論機能を詳解。動画、音声、ソースコードを同時に処理し、相関関係を推論する高度な活用方法を紹介します。",
    href: "/articles/gemini-2-pro-multimodal",
  },
  {
    title: "【中級者向け】リサーチ時間を9割削減！Perplexity Proの『Research Agent』で深掘り調査を自動化するプロンプト術",
    description: "複数の情報源をクロスチェックし、矛盾点を自動検出するPerplexity Proの最新機能を活用したリサーチ効率化の方法。",
    href: "/articles/perplexity-pro-advanced",
  },
  {
    title: "【初心者向け】AIに「仕事を丸投げ」！Microsoft Copilot Coworkで『おまかせ業務委任』プロンプト術",
    description: "AIに業務を丸投げできるMicrosoft Copilot Coworkの基本的な使い方とプロンプト術を解説。",
    href: "/articles/copilot-cowork-beginner",
  },
]

export default function OpenAIOperatorPage() {
  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title="【中級者向け】AIが自律的にタスクを完遂！OpenAIの最新エージェント『Operator』による業務自動化プロンプト術"
          eyecatchSrc="/images/openai-operator-eyecatch.jpg"
          createdAt="2026年5月19日"
          updatedAt="2026年5月19日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年5月19日、OpenAIは自律型AIエージェント「Operator」の一般公開を発表しました。
              Operatorは、ブラウザ操作、ファイルの編集、外部ツールの呼び出しを自律的に行い、ユーザーの指示した複雑なゴールを達成する「エージェント・ファースト」のAIです。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              本記事では、定型的な業務プロセスを自動化したいビジネスパーソンや、複数のSaaSを横断したワークフローを構築したいIT担当者に向けて、このOperatorを最大限に活用し、日常業務を完全に自動化するためのプロンプト術を解説します。
            </p>
          </section>

          <section id="overview" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Operatorの基本性能：自律的なブラウジングとツール実行
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Operatorの最大の特徴は、人間に代わってコンピュータを操作できる点にあります。
              従来のAIがテキストを生成して「やり方を教える」だけだったのに対し、Operatorは実際にブラウザを開き、検索し、クリックし、文字を入力します。
            </p>
            <ul className="list-disc list-inside text-[#333333] mb-4 space-y-2">
              <li><strong>自律的ブラウジング：</strong>Webサイトを巡回し、必要な情報を収集したり、フォームに入力して送信したりします。</li>
              <li><strong>ファイル操作：</strong>ローカルやクラウド上のファイルを読み込み、編集し、保存することができます。</li>
              <li><strong>ツール連携：</strong>APIを介さずとも、ブラウザ上のUIを通じて各種SaaS（Slack、Google Workspace、GitHubなど）を操作します。</li>
            </ul>
          </section>

          <section id="goal-oriented" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「ゴール逆算型」プロンプトの極意
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Operatorを使いこなすための鍵は、「ゴール逆算型」のプロンプト設計です。
              AIに具体的な手順（「まずGoogleを開いて、次にAと検索して...」）を指示するのではなく、「最終的に欲しい成果物」を明確に伝えます。
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-bold mb-2">ゴール逆算型プロンプトの構成要素</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>最終目標：</strong>達成すべき状態（例：出張の手配が完了していること）</li>
                <li><strong>制約条件：</strong>予算、期限、使用してよいツールなど</li>
                <li><strong>成果物の形式：</strong>スプレッドシート、PDF、Slack通知など</li>
              </ul>
            </div>
          </section>

          <section id="prompts" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Operatorを活用する実践プロンプト4選
            </h2>
            <p className="text-[#333333] leading-relaxed mb-8">
              ここでは、日常業務を自動化するための具体的なプロンプト例を紹介します。
            </p>

            <div id="prompt-1" className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                プロンプト1：出張手配の完全自動化
              </h3>

              <PromptInfoCard type="response" title="どんな結果が得られるか">
                <p>
                  交通機関や宿泊施設の予約サイトを操作し、条件に合うプランを予約。その後、カレンダーへの登録と関係者への通知までを全自動で行います。
                </p>
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                <p>
                  出張や会議の手配など、複数のサービス（予約サイト、カレンダー、チャットツール）をまたぐ煩雑な事務作業を任せたいときに最適です。
                </p>
              </PromptInfoCard>

              <PromptBlock prompt={prompts.prompt1} />
              <ResponseExample response={prompts.response1} />

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="list-disc list-inside space-y-2">
                  <li>予算や日時などの制約条件を明確に指定することで、意図しない高額な予約を防ぎます。</li>
                  <li>【〇〇を入力】の部分に具体的な情報を埋め込んで使用してください。</li>
                </ul>
              </PromptInfoCard>
            </div>

            <div id="prompt-2" className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                プロンプト2：競合調査とレポート作成
              </h3>

              <PromptInfoCard type="response" title="どんな結果が得られるか">
                <p>
                  指定した企業の最新情報を自律的に検索・収集し、比較表として整理した上で、PDF形式のレポートとして納品します。
                </p>
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                <p>
                  定期的な市場調査や競合分析など、膨大な情報の収集と構造化が必要なリサーチ業務を自動化したいときに役立ちます。
                </p>
              </PromptInfoCard>

              <PromptBlock prompt={prompts.prompt2} />
              <ResponseExample response={prompts.response2} />

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="list-disc list-inside space-y-2">
                  <li>比較項目を具体的に指定することで、質の高い構造化データが得られます。</li>
                  <li>出力形式（スプレッドシート、PDFなど）を指定することで、そのまま業務で使える成果物になります。</li>
                </ul>
              </PromptInfoCard>
            </div>

            <div id="prompt-3" className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                プロンプト3：GitHubのIssue確認とバグ修正
              </h3>

              <PromptInfoCard type="response" title="どんな結果が得られるか">
                <p>
                  リポジトリのIssueを読み解き、ローカル環境でコードを修正し、テストを実行した上でプルリクエストを作成します。
                </p>
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                <p>
                  開発業務において、軽微なバグ修正やリファクタリングなどのタスクをAIに委譲し、エンジニアはより高度な設計に集中したい場合に使用します。
                </p>
              </PromptInfoCard>

              <PromptBlock prompt={prompts.prompt3} />
              <ResponseExample response={prompts.response3} />

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="list-disc list-inside space-y-2">
                  <li>「テストが通ることを確認してから」という条件を入れることで、品質を担保します。</li>
                  <li>リポジトリへのアクセス権限が適切に設定されていることを事前に確認してください。</li>
                </ul>
              </PromptInfoCard>
            </div>

            <div id="prompt-4" className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                プロンプト4：エラーハンドリングと軌道修正
              </h3>

              <PromptInfoCard type="response" title="どんな結果が得られるか">
                <p>
                  AIが途中でエラーに遭遇した際、ログを分析して原因を特定し、自律的に解決策を適用してタスクを再開します。
                </p>
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                <p>
                  自動化プロセスが途中で停止してしまった場合や、想定外のエラーが発生した際に、AI自身に問題を解決させたいときに使います。
                </p>
              </PromptInfoCard>

              <PromptBlock prompt={prompts.prompt4} />
              <ResponseExample response={prompts.response4} />

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="list-disc list-inside space-y-2">
                  <li>AIに「エラーの原因を考えさせる」ことで、自己修復能力を引き出します。</li>
                  <li>想定されるエラー（API制限など）とその対処方針をあらかじめ伝えておくとスムーズです。</li>
                </ul>
              </PromptInfoCard>
            </div>
          </section>

          <section id="security" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              セキュリティと権限管理の注意点
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Operatorは非常に強力なツールですが、自律的にシステムを操作するため、セキュリティと権限管理には細心の注意が必要です。
            </p>
            <ul className="list-disc list-inside text-[#333333] mb-4 space-y-2">
              <li><strong>最小権限の原則：</strong>Operatorに付与するアカウントやAPIキーは、タスクに必要な最小限の権限のみを持たせるようにしてください。</li>
              <li><strong>確認プロセスの組み込み：</strong>重要な操作（決済の実行、本番環境へのデプロイなど）の前に、必ず人間の承認（Human-in-the-loop）を挟むようプロンプトで指示します。</li>
              <li><strong>サンドボックス環境の活用：</strong>新しいプロンプトを試す際は、本番環境ではなくテスト環境やサンドボックス環境で動作確認を行いましょう。</li>
            </ul>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              OpenAIの「Operator」は、AIが単なる「相談役」から「実務の実行者」へと進化したことを示す画期的なエージェントです。
              「ゴール逆算型」のプロンプトをマスターし、適切な権限管理のもとで運用することで、日常業務の多くを完全に自動化することが可能になります。
            </p>
            <p className="text-[#333333] leading-relaxed">
              まずは、今回紹介したプロンプトを参考に、身近なルーチンワークからOperatorに任せてみてはいかがでしょうか。
            </p>
          </section>

          <AffiliateBox
            title="ChatGPT PlusでOperatorを最大限に活用"
            description="Operatorの高度な自律実行機能や、最新のAIモデルを利用するにはChatGPT Plusへの登録がおすすめです。"
            buttonText="ChatGPT Plusを試してみる"
            buttonHref="https://chat.openai.com/auth/login"
            features={[
              "Operatorによる自律的なタスク実行",
              "最新モデルへの優先アクセス",
              "高度なデータ分析とファイル操作",
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
