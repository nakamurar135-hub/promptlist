import PromptBlock from "./PromptBlock"
import ResponseExample from "./ResponseExample"
import PromptInfoCard from "./PromptInfoCard"
import AffiliateBox from "@/components/cta/AffiliateBox"
import RelatedArticles from "@/components/cta/RelatedArticles"

export default function ArticleContent() {
  const prompt1 = `以下の会議メモを元に、ビジネス文書として適切な議事録を作成してください。

【会議情報】
・会議名：【会議名を入力】
・日時：【日時を入力】
・場所：【場所を入力】
・参加者：【参加者を入力】

【会議メモ】
【箇条書きのメモを入力】

【出力形式】
1. 議題
2. 討議内容
3. 決定事項
4. アクションアイテム（担当者・期限付き）
5. 次回会議予定

敬語を使用し、簡潔かつ明確な表現で作成してください。`

  const response1 = `■ 議事録

【会議名】第3四半期営業戦略会議
【日時】2026年2月4日（火）14:00〜15:30
【場所】本社3階 会議室A
【参加者】田中部長、佐藤課長、山田主任、鈴木

━━━━━━━━━━━━━━━━━━━━━━━━

1. 議題
・第2四半期の売上実績報告
・第3四半期の営業目標設定
・新規顧客開拓施策の検討

2. 討議内容
（1）第2四半期の売上実績について
・目標達成率は95%となり、前年同期比で8%増加した
・特にA製品の販売が好調で、目標を15%上回った
・B製品は競合の影響により、目標を10%下回った

（2）第3四半期の営業目標について
・全体目標を前四半期比10%増に設定する方向で議論
・各担当エリアの市場状況を考慮し、個別目標を設定することで合意

（3）新規顧客開拓施策について
・展示会出展、Web広告強化、既存顧客からの紹介促進の3案を検討
・費用対効果を考慮し、まずWeb広告強化から着手することに決定

3. 決定事項
・第3四半期の全体売上目標を1億2,000万円とする
・新規顧客開拓はWeb広告強化を優先的に実施する
・B製品の競合分析を実施し、次回会議で報告する

4. アクションアイテム
・Web広告の予算案作成：佐藤課長（2/10まで）
・B製品競合分析レポート作成：山田主任（2/15まで）
・各エリア別目標の設定：各担当者（2/7まで）

5. 次回会議予定
・日時：2026年2月18日（火）14:00〜
・場所：本社3階 会議室A
・議題：Web広告予算の承認、競合分析結果の共有

以上`

  const prompt2 = `以下は会議の音声を文字起こししたテキストです。
この内容を整理して、読みやすい議事録形式にまとめてください。

【文字起こしテキスト】
【音声認識で取得したテキストをそのまま入力】

【作成条件】
・話者が誰かわかる場合は発言者名を記載
・重複や言い直しは整理して簡潔にまとめる
・重要なポイントは箇条書きで整理
・曖昧な表現は文脈から推測して明確化
・敬語を使用したビジネス文書として仕上げる`

  const response2 = `■ 議事録（文字起こしから整理）

【会議名】新製品開発進捗ミーティング
【日時】2026年2月3日（月）10:00〜11:00
【参加者】高橋PM、伊藤エンジニア、小林デザイナー

━━━━━━━━━━━━━━━━━━━━━━━━

■ 討議内容

【1. 開発進捗について】
高橋PM：
・全体の進捗は予定通り。現在フェーズ2の中盤。
・来週にはプロトタイプが完成予定。

伊藤エンジニア：
・バックエンド開発は順調に進行中。
・一部の機能でパフォーマンス課題あり。最適化に追加で2日必要。

小林デザイナー：
・UI設計は90%完了。残りはレビュー後の修正対応のみ。
・ユーザーテスト用のモックアップは今週中に準備可能。

【2. 課題と対応策】
・パフォーマンス課題について
  → 伊藤エンジニアがプロファイリングを実施し、ボトルネックを特定
  → 必要に応じて設計の一部見直しを検討

・スケジュールへの影響
  → 現時点では全体スケジュールに影響なし
  → 週次で進捗を確認し、遅延リスクを早期に検知する

■ 決定事項
・プロトタイプ完成目標日：2月10日
・ユーザーテスト実施日：2月14日〜15日
・パフォーマンス最適化の完了期限：2月7日

■ 次回ミーティング
・日時：2月7日（金）10:00〜
・議題：プロトタイプレビュー、ユーザーテスト準備確認

以上`

  const prompt3 = `以下の議事録から、アクションアイテム（タスク）を抽出してリスト化してください。

【議事録】
【議事録の内容を入力】

【出力形式】
各アクションアイテムについて以下を整理：
・タスク内容
・担当者
・期限
・優先度（高/中/低）
・補足事項（あれば）

表形式でわかりやすくまとめてください。`

  const response3 = `■ アクションアイテム一覧

| No. | タスク内容 | 担当者 | 期限 | 優先度 | 補足事項 |
|-----|-----------|--------|------|--------|----------|
| 1 | Web広告の予算案作成 | 佐藤課長 | 2/10 | 高 | 第3四半期の新規顧客開拓施策として |
| 2 | B製品競合分析レポート作成 | 山田主任 | 2/15 | 高 | 次回会議で報告予定 |
| 3 | 各エリア別目標の設定 | 各担当者 | 2/7 | 中 | 部長承認後に確定 |
| 4 | パフォーマンス最適化 | 伊藤 | 2/7 | 高 | プロファイリング結果を踏まえて実施 |
| 5 | ユーザーテスト用モックアップ準備 | 小林 | 2/7 | 中 | - |

━━━━━━━━━━━━━━━━━━━━━━━━

■ 担当者別サマリー

【佐藤課長】
・Web広告の予算案作成（2/10まで）

【山田主任】
・B製品競合分析レポート作成（2/15まで）

【伊藤】
・パフォーマンス最適化（2/7まで）

【小林】
・ユーザーテスト用モックアップ準備（2/7まで）

【各担当者】
・各エリア別目標の設定（2/7まで）

━━━━━━━━━━━━━━━━━━━━━━━━

■ 来週のマイルストーン
・2/7：エリア別目標確定、パフォーマンス最適化完了、モックアップ完成
・2/10：Web広告予算案提出

以上`

  const prompt4 = `以下の議事録を、要点のみを抜粋した要約版に変換してください。
忙しい上司や経営層が1分で内容を把握できる形式でお願いします。

【議事録】
【元の議事録を入力】

【要約の条件】
・全体を300文字以内に収める
・最重要の決定事項を冒頭に配置
・数値や期限は必ず含める
・箇条書きを活用して読みやすく`

  const response4 = `■ 議事録要約（第3四半期営業戦略会議）

【最重要決定事項】
第3四半期売上目標：1億2,000万円（前期比+10%）

【主な決定事項】
・新規顧客開拓はWeb広告強化を優先実施
・B製品の競合分析を実施（2/15報告予定）

【重要アクション】
・Web広告予算案：佐藤課長（2/10）
・競合分析：山田主任（2/15）
・エリア別目標設定：各担当（2/7）

【次回】2/18（火）14:00〜 Web広告予算承認・競合分析報告

以上`

  const relatedArticles = [
    {
      title: "ChatGPTでそのまま使えるビジネスメール例文プロンプト10選",
      description: "ビジネスメールの作成に役立つプロンプトを厳選して紹介",
      href: "/articles/business-email",
    },
    {
      title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集",
      description: "効果的なプロンプトの書き方を基礎から解説",
      href: "/articles/beginner-template",
    },
    {
      title: "ChatGPTで敬語文章を自動生成するプロンプト",
      description: "ビジネスシーンで使える敬語表現を自動生成",
      href: "/articles/keigo",
    },
  ]

  return (
    <div className="prose prose-lg max-w-none">
      {/* 導入部 */}
      <section id="introduction" className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
          会議議事録の作成でこんな悩みはありませんか？
        </h2>
        <p className="text-[#333333] leading-relaxed mb-4">
          「会議が終わった後、議事録を作るのに何時間もかかってしまう...」
          「メモを取りながら会議に参加するのが大変で、内容を聞き逃してしまう...」
          「上司に提出する議事録のフォーマットがいつも指摘される...」
        </p>
        <p className="text-[#333333] leading-relaxed mb-4">
          そんな悩みをお持ちの皆さんに向けて、この記事ではChatGPTを活用した議事録作成に使える実践的なプロンプトを4つご紹介します。
          コピペするだけで使えるので、初心者の方でも安心です。
        </p>
        <p className="text-[#333333] leading-relaxed">
          これらのプロンプトを使えば、会議メモから整った議事録を数分で作成したり、音声文字起こしから読みやすい議事録に変換したりすることが可能になります。
          議事録作成の時間を大幅に短縮して、より重要な業務に時間を使いましょう。
        </p>
      </section>

      {/* ChatGPT基礎説明 */}
      <section id="what-is-chatgpt" className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
          ChatGPTとは？初心者向けにわかりやすく解説
        </h2>
        <p className="text-[#333333] leading-relaxed mb-4">
          ChatGPTは、OpenAI社が開発した対話型のAIサービスです。
          質問や指示（プロンプト）を入力すると、人間のような自然な文章で回答を生成してくれます。
          無料で始められるため、誰でも気軽に試すことができます。
        </p>
        <p className="text-[#333333] leading-relaxed mb-4">
          無料版でも十分に議事録作成に活用できますが、より高精度な回答や長文の処理が必要な場合は、有料版の「ChatGPT Plus」がおすすめです。
          月額20ドルでGPT-4などの高性能モデルを利用でき、複雑な会議内容も正確に整理してくれます。
        </p>

        <AffiliateBox
          title="ChatGPT Plusでさらに高精度な議事録作成を"
          description="月額20ドルでGPT-4が使い放題。長時間の会議メモや複雑な討議内容も、より正確に議事録化できます。"
          buttonText="ChatGPT Plusを試してみる"
          buttonHref="https://chat.openai.com/auth/login"
          features={[
            "GPT-4モデルで高精度な文章生成",
            "長文の処理能力が大幅向上",
            "混雑時も優先アクセス",
          ]}
        />
      </section>

      {/* プロンプト解説セクション */}
      <section id="prompts" className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
          議事録作成に使えるChatGPTプロンプト4選
        </h2>
        <p className="text-[#333333] leading-relaxed mb-8">
          それでは、議事録作成に役立つ4つのプロンプトを紹介します。
          それぞれの用途に合わせて使い分けてください。
        </p>

        {/* プロンプト1 */}
        <div id="prompt-1" className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
          <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
            プロンプト1：会議メモから議事録を自動生成
          </h3>

          <PromptInfoCard type="response" title="どんな回答が返ってくるか">
            <p>
              箇条書きの会議メモを入力すると、議題・討議内容・決定事項・アクションアイテムが整理された正式な議事録フォーマットで出力されます。
            </p>
          </PromptInfoCard>

          <PromptInfoCard type="usecase" title="こんなときに使おう">
            <p>
              会議中に取った走り書きのメモを、上司や関係者に共有できる形式の議事録に仕上げたいときに最適です。
            </p>
          </PromptInfoCard>

          <PromptBlock prompt={prompt1} />
          <ResponseExample response={response1} />

          <PromptInfoCard type="tips" title="ポイント解説">
            <ul className="list-disc list-inside space-y-2">
              <li>会議情報（日時・場所・参加者）を正確に入力することで、完成度の高い議事録になります</li>
              <li>メモは完璧でなくてOK。キーワードや要点だけでもChatGPTが文脈を補完してくれます</li>
              <li>出力形式を指定することで、自社のフォーマットに合わせた議事録を作成できます</li>
            </ul>
          </PromptInfoCard>
        </div>

        {/* プロンプト2 */}
        <div id="prompt-2" className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
          <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
            プロンプト2：音声文字起こしから議事録を整理
          </h3>

          <PromptInfoCard type="response" title="どんな回答が返ってくるか">
            <p>
              音声認識ツールで取得した生テキストから、重複や言い直しを整理し、発言者ごとに内容がまとまった読みやすい議事録が生成されます。
            </p>
          </PromptInfoCard>

          <PromptInfoCard type="usecase" title="こんなときに使おう">
            <p>
              Web会議ツールの文字起こし機能や、スマホの音声認識アプリで取得したテキストを議事録に変換したいときに便利です。
            </p>
          </PromptInfoCard>

          <PromptBlock prompt={prompt2} />
          <ResponseExample response={response2} />

          <PromptInfoCard type="tips" title="ポイント解説">
            <ul className="list-disc list-inside space-y-2">
              <li>文字起こしの精度が低くても、ChatGPTがある程度補正して整理してくれます</li>
              <li>発言者名がわかる場合は、テキストに「田中：」のように記載しておくとより正確になります</li>
              <li>長時間の会議は分割して処理すると、より精度の高い結果が得られます</li>
            </ul>
          </PromptInfoCard>
        </div>

        {/* プロンプト3 */}
        <div id="prompt-3" className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
          <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
            プロンプト3：アクションアイテム抽出
          </h3>

          <PromptInfoCard type="response" title="どんな回答が返ってくるか">
            <p>
              議事録からタスク・担当者・期限・優先度を抽出し、表形式でわかりやすくまとめた一覧が出力されます。
            </p>
          </PromptInfoCard>

          <PromptInfoCard type="usecase" title="こんなときに使おう">
            <p>
              会議後のタスク管理を効率化したいとき、議事録から「誰が何をいつまでにやるか」を一目で把握したいときに最適です。
            </p>
          </PromptInfoCard>

          <PromptBlock prompt={prompt3} />
          <ResponseExample response={response3} />

          <PromptInfoCard type="tips" title="ポイント解説">
            <ul className="list-disc list-inside space-y-2">
              <li>抽出したアクションアイテムは、タスク管理ツールにそのままコピーして使えます</li>
              <li>優先度の判断基準を追加で指定すると、より的確な分類がされます</li>
              <li>担当者別サマリーを追加することで、各メンバーへの共有がスムーズになります</li>
            </ul>
          </PromptInfoCard>
        </div>

        {/* プロンプト4 */}
        <div id="prompt-4" className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
          <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
            プロンプト4：議事録の要約版を作成
          </h3>

          <PromptInfoCard type="response" title="どんな回答が返ってくるか">
            <p>
              長文の議事録から要点のみを抽出し、300文字以内のコンパクトな要約版が生成されます。
            </p>
          </PromptInfoCard>

          <PromptInfoCard type="usecase" title="こんなときに使おう">
            <p>
              忙しい上司や経営層に会議内容を報告するとき、詳細な議事録を読む時間がない人向けに共有するときに活用できます。
            </p>
          </PromptInfoCard>

          <PromptBlock prompt={prompt4} />
          <ResponseExample response={response4} />

          <PromptInfoCard type="tips" title="ポイント解説">
            <ul className="list-disc list-inside space-y-2">
              <li>文字数制限を指定することで、適切な長さの要約が得られます</li>
              <li>「経営層向け」「チームメンバー向け」など読み手を指定すると、内容の粒度が調整されます</li>
              <li>要約版と詳細版の両方を作成し、用途に応じて使い分けるのがおすすめです</li>
            </ul>
          </PromptInfoCard>
        </div>
      </section>

      {/* 活用のコツ */}
      <section id="tips" className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
          プロンプトをさらに活用するコツ
        </h2>
        <p className="text-[#333333] leading-relaxed mb-4">
          紹介したプロンプトをより効果的に使うためのコツをご紹介します。
        </p>
        <ul className="list-disc list-inside text-[#333333] space-y-3 mb-6">
          <li>
            <strong>会社のフォーマットに合わせる：</strong>
            出力形式の部分を自社の議事録フォーマットに置き換えることで、そのまま使える議事録が作成できます
          </li>
          <li>
            <strong>固有名詞は正確に：</strong>
            人名、プロジェクト名、製品名などは正確に入力することで、誤字や表記ゆれを防げます
          </li>
          <li>
            <strong>複数回のやり取りで精度アップ：</strong>
            一度の出力で完璧を求めず、「この部分をもう少し詳しく」「箇条書きを増やして」など追加指示で調整しましょう
          </li>
        </ul>

        <AffiliateBox
          title="GPT-4で議事録作成の精度をさらに向上"
          description="ChatGPT Plusなら、より複雑な会議内容も正確に理解し、高品質な議事録を生成できます。長時間の会議や専門的な内容にも対応。"
          buttonText="ChatGPT Plusの詳細を見る"
          buttonHref="https://chat.openai.com/auth/login"
          features={[
            "長文処理能力が大幅に向上",
            "専門用語の理解力が高い",
            "より自然な日本語表現",
          ]}
        />
      </section>

      {/* 注意事項 */}
      <section id="cautions" className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
          ChatGPT利用時の注意点
        </h2>
        <ul className="list-disc list-inside text-[#333333] space-y-3">
          <li>
            <strong>AIの回答は必ず確認を：</strong>
            ChatGPTの出力は完璧ではありません。特に固有名詞や数値は必ず人間が確認してください
          </li>
          <li>
            <strong>機密情報の取り扱いに注意：</strong>
            会議内容に機密情報が含まれる場合は、入力前に社内規定を確認してください。必要に応じて固有名詞を伏せ字にするなどの対応が必要です
          </li>
          <li>
            <strong>最終責任は利用者に：</strong>
            生成された議事録の内容に関する責任は利用者にあります。共有前に必ず内容を確認しましょう
          </li>
        </ul>
      </section>

      {/* まとめ */}
      <section id="summary" className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
          まとめ
        </h2>
        <p className="text-[#333333] leading-relaxed mb-4">
          この記事では、ChatGPTを使った議事録作成に役立つ4つのプロンプトを紹介しました。
        </p>
        <ul className="list-disc list-inside text-[#333333] space-y-2 mb-4">
          <li>会議メモから議事録を自動生成するプロンプト</li>
          <li>音声文字起こしから議事録を整理するプロンプト</li>
          <li>アクションアイテムを抽出するプロンプト</li>
          <li>議事録の要約版を作成するプロンプト</li>
        </ul>
        <p className="text-[#333333] leading-relaxed">
          どのプロンプトもコピペするだけで使えるので、初心者の方でもすぐに議事録作成の効率化を始められます。
          ぜひ今日から使ってみてください。
        </p>
      </section>

      {/* CTA */}
      <section id="cta" className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
          ChatGPTをもっと活用したい方へ
        </h2>
        <p className="text-[#333333] leading-relaxed mb-4">
          無料版のChatGPTでも十分に議事録作成に活用できますが、より高精度な回答や長文の処理が必要な場合は「ChatGPT Plus」がおすすめです。
        </p>
        <p className="text-[#333333] leading-relaxed mb-4">
          月額20ドルで、GPT-4モデルによる高精度な文章生成、長文処理能力の向上、混雑時の優先アクセスなどの特典が受けられます。
          議事録作成だけでなく、ビジネス文書全般の作成効率が大幅に向上します。
        </p>
        <AffiliateBox
          title="ChatGPT Plusで仕事の効率を劇的に改善"
          description="議事録作成はもちろん、メール作成、資料作成、アイデア出しなど、あらゆるビジネスシーンで活躍します。"
          buttonText="ChatGPT Plusを始める"
          buttonHref="https://chat.openai.com/auth/login"
          features={[
            "GPT-4モデルが使い放題",
            "画像認識・生成機能も利用可能",
            "新機能への早期アクセス",
          ]}
        />
      </section>

      {/* 関連記事 */}
      <section id="related">
        <RelatedArticles articles={relatedArticles} />
      </section>
    </div>
  )
}
