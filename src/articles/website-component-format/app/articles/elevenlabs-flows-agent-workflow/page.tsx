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
  title: '1文でメディアパイプラインを自動構築！ElevenLabs「Flows Agent」による次世代動画制作ワークフロー',
  description: '2026年7月発表のElevenLabs「Flows Agent」を活用した動画制作自動化術。1つの指示から音声・動画・編集のパイプラインを組み立て、高品質なドキュメンタリーや解説動画を効率的に制作する方法を解説します。',
  keywords: 'ElevenLabs, Flows Agent, 動画制作, AI自動化, マルチモーダル, プロンプト, ワークフロー',
  openGraph: {
    title: '1文でメディアパイプラインを自動構築！ElevenLabs「Flows Agent」による次世代動画制作ワークフロー',
    description: '1つの指示から音声・動画・編集のパイプラインを自動構築するElevenLabs「Flows Agent」の実践プロンプトと活用術を解説。',
    type: 'article',
    images: ['/images/og-image-nano-banana-2.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '1文でメディアパイプラインを自動構築！ElevenLabs「Flows Agent」による次世代動画制作ワークフロー',
    description: 'ElevenLabs「Flows Agent」を活用した次世代の動画制作自動化ワークフローと実践プロンプト術。',
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
        { title: "AIエージェントで業務自動化！自律型ワークフロー構築プロンプト術", href: "/articles/ai-agent-workflow" },
        { title: "1文でメディアパイプラインを自動構築！ElevenLabs「Flows Agent」", href: "/articles/elevenlabs-flows-agent-workflow" },
        { title: "ChatGPT「高度な音声モード」活用術", href: "/articles/chatgpt-voice-beginner" },
      ],
    },
  ],
  copyright: "© 2026 AIプロンプト活用ガイド All Rights Reserved.",
}

const headings = [
  { id: "introduction", text: "制作工程の「蒸発」：ElevenLabs Flows Agentがもたらすパラダイムシフト", level: 2 as const },
  { id: "basic-operation", text: "Flows Agentの基本操作とパイプライン生成の仕組み", level: 2 as const },
  { id: "prompt-1", text: "プロンプト1：全体設計を行う「マスター・オーケストレーター・プロンプト」", level: 3 as const },
  { id: "prompt-2", text: "プロンプト2：ブランドのトーン＆マナーを固定する「スタイル・コントロール・プロンプト」", level: 3 as const },
  { id: "prompt-3", text: "プロンプト3：音声・映像・エフェクトの同期を最適化する「シンクロナイゼーション・プロンプト」", level: 3 as const },
  { id: "prompt-4", text: "プロンプト4：最終レンダリングと品質チェックを行う「QA・フィードバック・プロンプト」", level: 3 as const },
  { id: "case-study", text: "ケーススタディ：10分で完成する高品質ドキュメンタリー動画", level: 2 as const },
  { id: "tips", text: "成功させるための3つのポイント", level: 2 as const },
  { id: "summary", text: "まとめ：「AIディレクター」としてワークフローを指揮する", level: 2 as const },
]

const prompts = {
  p1: `あなたはプロフェッショナルなAIメディア・ディレクターです。以下の要件に基づき、ElevenLabs Flows Agentで使用する総合的な動画制作パイプラインの設計図を作成してください。

【制作テーマ・概要】
【ドキュメンタリー風の解説動画：テーマ名を入力】

【ターゲット視聴者】
【ターゲット層を入力】

【構成要件】
・総尺: 【例: 10分】
・トーン＆マナー: 【例: 知的、洗練された、引き込まれるナレーション】
・使用する要素: ナレーション音声、BGM、AI生成ビジュアル、トランジションエフェクト

【出力要件】
1. 各セクションのタイムコードとナレーション原稿
2. 各シーンで使用する音声モデルおよび感情パラメータの設定
3. 映像生成プロンプトの構成案
まずは、全体のパイプライン構成を定義してください。`,
  r1: `■ メディア制作パイプライン設計図

【テーマ】AI技術の進化と未来社会
【ターゲット】テクノロジーに関心を持つビジネスパーソン・クリエイター

【パイプライン構造】
1. **オープニング（0:00 - 1:30）**
   - ナレーション音声設定: 「Adam（深みのある落ち着いた声）」、感情パラメータ：神秘的・引き込み型
   - BGM: アンビエント・エレクトロニカ（低音重視）
   - 映像ビジュアル: 近未来都市のタイムラプス（AI生成）

2. **本編解説フェーズ（1:30 - 8:30）**
   - ナレーション音声設定: 「Rachel（クリアで知的な声）」
   - スライド＆アニメーション連携: 複雑なデータ構造を視覚化するモーショングラフィックス

3. **エンディング（8:30 - 10:00）**
   - 締めくくりのメッセージとコールトゥアクション

【現在のステータス】
パイプラインの初期構成が完了しました。各ノードの詳細なパラメータ調整へ移行します。`,

  p2: `あなたはElevenLabs Flows Agentのブランド・エンジニアです。生成されるコンテンツ全体で一貫した「トーン＆マナー」を維持するためのスタイル固定設定を作成してください。

【ブランド要件】
・ブランド名／チャンネル名: 【チャンネル名を入力】
・ブランドアイデンティティ: 【例: 信頼性、革新性、温かみのある解説】
・禁止事項: 【例: 安易な誇張表現、過度にポップなエフェクトの排除】

【設定項目】
1. 音声の安定性・明瞭度パラメータ（Stability, Clarity）
2. 語り口調およびキーワードのトーン
3. ビジュアルと音声の同期ルール
指定された要件に基づき、Flows Agentに適用するスタイル設定プロンプトを構築してください。`,
  r2: `■ ブランド・スタイル固定プロンプト設定

【適用対象】チャンネル：「Future Tech Insights」
【音声設定プロファイル】
- Stability（安定性）: 0.75（感情の振れ幅を抑え、聴き取りやすさを重視）
- Clarity/Similarity（明瞭度・類似度）: 0.85
- Style Exaggeration（表現の誇張）: 0.15（落ち着いたドキュメンタリー調を維持）

【トーン＆マナー定義】
- 専門用語を使用する際は、必ず短い比喩を挟んで解説する
- 煽り文句を使用せず、客観的かつエビデンスに基づいた語り口を厳守する

【ステータス】
スタイルガイドが正常にFlows Agentのコンテキストにロードされました。`,

  p3: `あなたはマルチモーダル・シンクロナイゼーションの専門家です。ElevenLabs Flows Agentにおける「音声」「映像」「効果音」のタイミング調整を行う自動同期プロンプトを作成してください。

【同期対象の素材】
・ナレーション音声ファイル: 【音声IDまたはファイル名を入力】
・背景映像・BGM: 【映像テーマを入力】

【調整要件】
1. ナレーションの無音区間とBGMの音量ダッキング（Ducking）の連動
2. 重要なキーワードの発話タイミングに合わせた視覚的ハイライトの挿入
3. シーン転換時のトランジションと音声エフェクトの完全同期
上記を自動処理するためのルールを定義してください。`,
  r3: `■ シンクロナイゼーション制御ルール

【ダッキング設定】
- ナレーション発話中：BGM音量を -18dB に自動減衰
- ポーズ（0.5秒以上の無音）：BGM音量を -8dB に復帰

【キーワード同期】
- 重点キーワード（例：「パラダイムシフト」「自動化」）検知時：
  - 画面上のテキストテロップをハイライト表示
  - 微細な環境音（Whoosh効果音）を0.2秒前後に重ねて配置

【ステータス】
音声・映像の同期タイミングの算出が完了しました。タイムラインへ適用中です。`,

  p4: `あなたはAIメディア品質管理（QA）のスペシャリストです。Flows Agentによって自動生成された最終成果物を検証し、品質を担保するためのQAプロンプトを作成してください。

【検証基準】
1. 音声のアーティファクト（ノイズや不自然な途切れ）の有無
2. 映像と音声の同期ズレ（リップシンクおよびタイミングの許容誤差 ±0.1秒以内）
3. 全体の構成が当初の目的（【目的を入力】）を達成しているか
上記に基づくチェックリストと、修正指示を自動生成するプロンプトを記述してください。`,
  r4: `■ QA・品質検証レポート

【検証結果サマリー】
- 音声品質チェック: 合格（アーティファクト検出なし、ノイズフロア -60dB 以下）
- 同期ズレチェック: 合格（最大ズレ幅 0.04秒、許容範囲内）
- 目的達成度評価: 95点（構成の論理展開、視聴者エンゲージメント予測ともに良好）

【軽微な修正提案】
- シーン3の後半において、BGMのフェードアウトが0.3秒早いため、エンドロール開始に合わせて調整しました。

【最終ステータス】
全ての品質基準をクリアしました。レンダリング出力の準備が完了しています。`,
}

const relatedArticles = [
  {
    title: "AIエージェントで業務自動化！自律型ワークフロー構築プロンプト術",
    description: "複数のタスクを連携させて自動完結させる「エージェント型ワークフロー」の構築方法",
    href: "/articles/ai-agent-workflow",
  },
  {
    title: "プロンプト不要？感覚でAIを操る「Vibe Working」入門",
    description: "2026年の新しい働き方、バイブ・ワーキングについて解説",
    href: "/articles/vibe-working-beginner",
  },
]

export default function ElevenLabsFlowsAgentWorkflowPage() {
  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title="1文でメディアパイプラインを自動構築！ElevenLabs「Flows Agent」による次世代動画制作ワークフロー"
          eyecatchSrc="/images/og-image-nano-banana-2.png"
          createdAt="2026年7月25日"
          updatedAt="2026年7月25日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              制作工程の「蒸発」：ElevenLabs Flows Agentがもたらすパラダイムシフト
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年7月25日、ElevenLabsはメディア制作の全工程を自動化する「Flows Agent」を発表しました [1]。従来、音声生成、動画生成、編集といった工程ごとにツールを使い分けていたワークフローを、「ドキュメンタリー風の解説動画を作って」という1つの指示だけでAIが最適なパイプラインを組み立て、完結させることが可能になりました。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              この記事では、中級者向けにこの「Flows Agent」を既存の制作フローに統合し、品質をコントロールするための実践的なプロンプトとワークフローを解説します。
            </p>
          </section>

          <section id="basic-operation" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Flows Agentの基本操作とパイプライン生成の仕組み
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Flows Agentの最大の特徴は、ユーザーが詳細な編集手順を指定せずとも、高次元のゴール（自然言語による指示）から逆算して、音声合成、BGM選定、ビジュアル生成、トランジションの配置といった一連のプロセス（パイプライン）を自律的に構築する点にあります [2]。
            </p>
            <div className="bg-[#F5F9FC] p-6 rounded-lg mb-6">
              <h4 className="font-bold mb-2 text-[#333333]">従来の動画制作 vs Flows Agent</h4>
              <ul className="list-disc list-inside space-y-2 text-[#333333]">
                <li><strong>従来型:</strong> 台本作成 → 音声生成 → 映像素材収集 → タイムライン編集 → 音声同期 → 書き出し（各工程で人間が介在）</li>
                <li><strong>Flows Agent型:</strong> 「1つの指示」を入力 → AIがパイプライン全体を自動構築・実行・自己検証 → 完成品を出力</li>
              </ul>
            </div>
          </section>

          <section id="prompt-1" className="mb-12">
            <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
              プロンプト1：全体設計を行う「マスター・オーケストレーター・プロンプト」
            </h3>
            <p className="text-[#333333] leading-relaxed mb-6">
              まずは、動画の全体像と構造を定義するためのマスタープロンプトです。AIにディレクターとしての役割を与え、詳細なパイプライン設計図を出力させます。
            </p>

            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h4 className="text-base md:text-lg font-bold text-[#333333] mb-4">
                マスター・オーケストレーター・プロンプト
              </h4>
              <PromptInfoCard type="response" title="期待される動作">
                <p>
                  AIがテーマやターゲット層を分析し、タイムコード、音声モデル選定、映像構成を含む構造化された設計図を生成します。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="主な活用シーン">
                <p>
                  新しいシリーズのドキュメンタリーや解説動画を企画する際の、初期パイプライン設計に最適です。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="tips" title="成功のコツ">
                <p>
                  総尺やトーン＆マナーを具体的に指定することで、ブレのない一貫した設計図が得られます。
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.p1} />
              <ResponseExample response={prompts.r1} />
            </div>
          </section>

          <section id="prompt-2" className="mb-12">
            <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
              プロンプト2：ブランドのトーン＆マナーを固定する「スタイル・コントロール・プロンプト」
            </h3>
            <p className="text-[#333333] leading-relaxed mb-6">
              ブランドイメージを統一するため、音声の安定性や語り口調のトーンを固定するプロンプトです。
            </p>

            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h4 className="text-base md:text-lg font-bold text-[#333333] mb-4">
                スタイル・コントロール・プロンプト
              </h4>
              <PromptInfoCard type="response" title="期待される動作">
                <p>
                  StabilityやClarityといったElevenLabs固有のパラメータを設定し、チャンネル全体のブランドアイデンティティを維持します。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="主な活用シーン">
                <p>
                  複数回にわたるシリーズ動画や、企業ブランディング動画の制作時にトーンを統一したい場合。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="tips" title="成功のコツ">
                <p>
                  過度な感情表現を抑える数値を設定することで、信頼性の高いドキュメンタリー調の演出が可能になります。
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.p2} />
              <ResponseExample response={prompts.r2} />
            </div>
          </section>

          <section id="prompt-3" className="mb-12">
            <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
              プロンプト3：音声・映像・エフェクトの同期を最適化する「シンクロナイゼーション・プロンプト」
            </h3>
            <p className="text-[#333333] leading-relaxed mb-6">
              ナレーションのタイミングに合わせてBGMのダッキングや効果音、テロップのハイライトを自動同期させるプロンプトです。
            </p>

            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h4 className="text-base md:text-lg font-bold text-[#333333] mb-4">
                シンクロナイゼーション・プロンプト
              </h4>
              <PromptInfoCard type="response" title="期待される動作">
                <p>
                  音声の無音区間やキーワードを検知し、BGMの自動減衰や視覚的エフェクトの挿入タイミングを正確に計算します。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="主な活用シーン">
                <p>
                  聴き取りやすさとエンターテインメント性を両立させたい解説動画の編集工程。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="tips" title="成功のコツ">
                <p>
                  ダッキングのdB数やキーワードの検出条件を具体的に指定することで、プロ並みの音響効果を実現できます。
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.p3} />
              <ResponseExample response={prompts.r3} />
            </div>
          </section>

          <section id="prompt-4" className="mb-12">
            <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
              プロンプト4：最終レンダリングと品質チェックを行う「QA・フィードバック・プロンプト」
            </h3>
            <p className="text-[#333333] leading-relaxed mb-6">
              自動生成された成果物の品質を検証し、リリース前の最終チェックを行うプロンプトです。
            </p>

            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h4 className="text-base md:text-lg font-bold text-[#333333] mb-4">
                QA・フィードバック・プロンプト
              </h4>
              <PromptInfoCard type="response" title="期待される動作">
                <p>
                  音声ノイズ、同期ズレ、目的達成度を自動評価し、軽微な調整を行った上でレンダリングの承認を出します。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="主な活用シーン">
                <p>
                  完全自動化パイプラインの最終ゲートとして、品質の均一性を保ちたい場合。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="tips" title="成功のコツ">
                <p>
                  許容する誤差の範囲（例：リップシンク ±0.1秒以内）を明確に定義することが重要です。
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.p4} />
              <ResponseExample response={prompts.r4} />
            </div>
          </section>

          <section id="case-study" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ケーススタディ：10分で完成する高品質ドキュメンタリー動画
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              実際にFlows Agentを活用したクリエイターの事例では、従来3〜5日かかっていた10分間の技術解説ドキュメンタリーの制作が、リサーチから最終レンダリングまで約10分で完了したという報告がなされています [2]。人間は「AIディレクター」としてプロンプトによる指示と最終承認を行うだけでよく、制作のボトルネックが完全に解消されています。
            </p>
          </section>

          <section id="tips" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              成功させるための3つのポイント
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-3 mb-6">
              <li>
                <strong>明確なゴールと制約の定義:</strong>
                「面白い動画」ではなく、尺、ターゲット、トーン＆マナーを数値や具体語で指定します。
              </li>
              <li>
                <strong>ブランドプロファイルの固定:</strong>
                毎回ゼロから設定するのではなく、一度構築したスタイル設定をテンプレート化して再利用します。
              </li>
              <li>
                <strong>QAプロンプトによる自律検証:</strong>
                生成しっぱなしにするのではなく、自動QAフェーズを挟むことで品質のムラを防ぎます。
              </li>
            </ul>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ：「AIディレクター」としてワークフローを指揮する
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              ElevenLabsの「Flows Agent」の登場により、メディア制作は「作業」から「ディレクション」へとシフトしました。プロンプトを駆使してAIに適切なパイプラインを組み立てさせることで、個人クリエイターや少人数チームでも圧倒的なクオリティとスピードを両立させることが可能です。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              ぜひ今回のプロンプトを活用し、次世代の動画制作ワークフローを体験してみてください。
            </p>
          </section>

          <section id="references" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              参考文献
            </h2>
            <ol className="list-decimal list-inside text-[#333333] space-y-2">
              <li>
                ElevenLabs. <a href="https://elevenlabs.io/blog" target="_blank" rel="noopener noreferrer" className="text-[#5B9BD5] underline">Flows Agent Product Update</a>. ElevenLabs Blog, 2026.
              </li>
              <li>
                Instagram Tech Update. <a href="https://www.instagram.com/reel/DbJimeypOWY/" target="_blank" rel="noopener noreferrer" className="text-[#5B9BD5] underline">The workflow builds itself: ElevenLabs Flows Agent</a>, 2026.
              </li>
            </ol>
          </section>

          <section id="cta" className="mb-12">
            <AffiliateBox />
          </section>

          <section id="related">
            <RelatedArticles articles={relatedArticles} />
          </section>
        </div>
      </article>
    </PageLayout>
  )
}
