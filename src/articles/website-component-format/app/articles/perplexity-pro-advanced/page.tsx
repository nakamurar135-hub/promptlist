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
  title: '【中級者向け】Perplexity Proで深掘り調査を自動化するプロンプト術',
  description: 'Perplexity ProのResearch Agentを使い、複数ソースの比較、矛盾点の検出、追加調査項目の洗い出し、Markdownレポート化までを効率化する中級者向けプロンプト術を解説します。',
  keywords: 'Perplexity Pro, Research Agent, リサーチ自動化, プロンプト, 市場調査, 情報収集, AIリサーチ, レポート作成',
  openGraph: {
    title: '【中級者向け】Perplexity Proで深掘り調査を自動化するプロンプト術',
    description: 'Research Agentでリサーチ時間を短縮し、複数ソースのクロスチェックと構造化レポート作成を実践する方法を紹介します。',
    type: 'article',
    images: ['/images/og-image-perplexity-research.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '【中級者向け】Perplexity Proで深掘り調査を自動化するプロンプト術',
    description: 'Perplexity ProのResearch Agentを使い、深掘り調査を数分で進めるための4つの実践プロンプトを解説します。',
    images: ['/images/og-image-perplexity-research.png'],
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
        { title: "【中級者向け】Perplexity Proで深掘り調査を自動化するプロンプト術", href: "/articles/perplexity-pro-advanced" },
        { title: "ググるより速い！ChatGPTの「検索機能（Search）」で最新情報を引き出すプロンプト術", href: "/articles/chatgpt-search-beginner" },
        { title: "AIエージェントで業務自動化！自律型ワークフロー構築プロンプト術", href: "/articles/ai-agent-workflow" },
      ],
    },
    {
      name: "ビジネス文書",
      articles: [
        { title: "会議議事録をChatGPTで自動作成するプロンプト4選【コピペOK】", href: "/articles/chatgpt-meeting-minutes" },
        { title: "Excelの「わからない」をAIに丸投げ！Copilot Excelエージェント超入門", href: "/articles/excel-copilot-agent" },
      ],
    },
  ],
  copyright: "© 2026 AIプロンプト活用ガイド All Rights Reserved.",
}

const headings = [
  { id: "introduction", text: "リサーチは「検索結果を読む」から「調査設計を任せる」へ", level: 2 as const },
  { id: "research-agent-evolution", text: "Research Agentで変わる3つの作業", level: 2 as const },
  { id: "prompt-1", text: "プロンプト1：ソース重み付けで調査品質を上げる", level: 2 as const },
  { id: "prompt-2", text: "プロンプト2：肯定・否定・中立の3視点で深掘りする", level: 2 as const },
  { id: "prompt-3", text: "プロンプト3：矛盾点と追加調査項目を洗い出す", level: 2 as const },
  { id: "prompt-4", text: "プロンプト4：企画書に使えるMarkdownレポートへ整える", level: 2 as const },
  { id: "workflow", text: "4つのプロンプトをつなげる実務ワークフロー", level: 2 as const },
  { id: "tips", text: "Research Agentを使いこなす注意点", level: 2 as const },
  { id: "summary", text: "まとめ：人間は問いと判断に集中する", level: 2 as const },
]

const prompts = {
  sourceWeighting: `あなたは経験豊富なリサーチアナリストです。Perplexity ProのResearch Agentとして、以下のテーマについて信頼度の高い情報源を優先して調査してください。

【調査テーマ】
【調査テーマを入力】

【調査目的】
【意思決定・記事作成・企画書作成などの目的を入力】

【優先する情報源】
1. 公式発表・一次情報
2. 公的機関・業界団体の資料
3. 主要メディアの記事
4. 専門家の分析・アナリストレポート

【出力形式】
以下の表形式でまとめてください。
| 情報源 | 種別 | 主張の要点 | 信頼度（高・中・低） | 採用理由 | 注意点 |

最後に、今回の調査で最も重視すべき情報源を3つ選び、その理由を説明してください。`,

  sourceWeightingResponse: `| 情報源 | 種別 | 主張の要点 | 信頼度 | 採用理由 | 注意点 |
| --- | --- | --- | --- | --- | --- |
| 主要メーカーのプレスリリース | 一次情報 | 2026年後半に量産ラインを拡張予定 | 高 | 当事者の公式発表であり、時期と投資額が明示されている | 成功見通しは楽観的に書かれやすい |
| 政府の産業政策資料 | 公的資料 | 次世代電池を重点投資領域に指定 | 高 | 政策支援と補助金の方向性を確認できる | 企業別の進捗までは分からない |
| 証券会社のアナリストレポート | 専門分析 | 商用化は2027年以降が本格化と予測 | 中 | 複数社の動向を比較している | 前提条件により予測が大きく変わる |

【最も重視すべき情報源】
1. 主要メーカーの公式発表：商用化時期を確認する一次情報として重要です。
2. 政府の政策資料：市場形成を後押しする制度面の根拠になります。
3. アナリストレポート：企業発表の楽観性を補正する比較材料になります。`,

  multiPerspective: `あなたは中立的な調査チームのリーダーです。以下のテーマについて、肯定・否定・中立の3つの視点から情報を集め、偏りの少ない調査メモを作成してください。

【調査テーマ】
【調査テーマを入力】

【調査対象期間】
【直近3ヶ月・2026年上半期などを入力】

【重点的に見たい論点】
【市場性・技術課題・規制・導入コストなどを入力】

【依頼内容】
1. 肯定的な見方：成長要因、導入メリット、追い風となるニュースを整理してください。
2. 否定的な見方：リスク、失敗事例、反対意見、未解決課題を整理してください。
3. 中立的な見方：統計データ、公的見解、業界全体の傾向を整理してください。

【出力形式】
- 3視点の比較表
- それぞれの根拠ソース
- 現時点での暫定結論
- 追加で確認すべき質問を5つ`,

  multiPerspectiveResponse: `## 3視点の比較表

| 視点 | 主な論点 | 根拠ソース | 読み取り方 |
| --- | --- | --- | --- |
| 肯定 | 主要企業が投資を拡大し、実証実験が進んでいる | 企業発表、業界メディア | 市場投入の準備は進んでいると判断できます |
| 否定 | コスト、量産歩留まり、安全性検証に課題が残る | 専門家コメント、技術論文 | 短期的な過度な期待には注意が必要です |
| 中立 | 政策支援は強いが、普及時期は用途により差がある | 公的機関資料、市場調査 | 初期導入は限定用途から始まる可能性が高いです |

【暫定結論】
対象市場は成長期待が大きい一方、2026年時点では量産・価格・標準化の課題が残っています。短期的には「本格普及」ではなく「限定領域での実装拡大」と捉えるのが現実的です。

【追加で確認すべき質問】
1. 量産開始時期は企業発表と第三者分析で一致しているか。
2. 補助金や規制変更が導入コストに与える影響はどの程度か。
3. 既存技術から置き換わる条件は何か。
4. 導入が先行する業界はどこか。
5. 失敗事例から見える最大のボトルネックは何か。`,

  contradictionCheck: `あなたはファクトチェック担当者です。以下の調査テーマについて、複数ソース間で食い違っている情報を特定し、どの情報を採用すべきか判断できるように整理してください。

【調査テーマ】
【調査テーマを入力】

【比較したいソース】
- 【ソース1を入力】
- 【ソース2を入力】
- 【ソース3を入力】

【確認したい項目】
- 数値・市場規模
- 時期・ロードマップ
- 規制や制度の解釈
- メリットとリスクの評価

【出力形式】
1. 食い違い一覧表
2. 食い違いが起きた理由の仮説
3. 現時点で採用すべき見解
4. 追加調査が必要な項目
5. 記事や企画書で書く場合の注意書き`,

  contradictionCheckResponse: `## 食い違い一覧表

| 項目 | ソースAの主張 | ソースBの主張 | 差異の理由 | 採用方針 |
| --- | --- | --- | --- | --- |
| 市場規模 | 2030年に急拡大 | 2030年でも限定的 | 対象市場の定義が異なる | 定義を明記して両論併記する |
| 商用化時期 | 2026年に量産開始 | 本格普及は2028年以降 | 試験量産と大量普及を混同している | 「量産開始」と「普及」を分けて記述する |
| 規制影響 | 追い風になる | コスト増になる | 規制を補助政策として見るか、遵守負担として見るかの違い | 企業規模別に影響を分ける |

【食い違いが起きた理由】
主な原因は、同じ言葉でも定義が異なることです。特に「商用化」「普及」「市場規模」は、調査会社や企業によって範囲が変わるため、数値だけを比較すると誤解が生じます。

【追加調査が必要な項目】
- 各ソースが市場規模に含めている製品カテゴリ
- 量産開始と黒字化時期の違い
- 政府支援策の対象企業と適用条件`,

  markdownReport: `あなたはビジネス向け調査レポートの編集者です。これまでのResearch Agentの調査結果をもとに、企画書や社内共有にそのまま貼り付けられるMarkdownレポートを作成してください。

【調査テーマ】
【調査テーマを入力】

【想定読者】
【経営層・事業責任者・編集者などを入力】

【レポートの目的】
【投資判断・新規事業検討・記事企画などを入力】

【必須構成】
# タイトル
## 1. エグゼクティブサマリー（300文字以内）
## 2. 主要な発見事項（5点）
## 3. ソース別比較表
## 4. 肯定・否定・中立の3視点分析
## 5. 矛盾点と未解決の課題
## 6. 次に取るべきアクション

【品質条件】
- 断定しすぎず、根拠の強さを明記してください。
- 数値や時期は、必ずソース種別とセットで書いてください。
- 最後に「追加確認が必要な情報」を箇条書きで示してください。`,

  markdownReportResponse: `# 次世代AIリサーチ市場に関する調査レポート

## 1. エグゼクティブサマリー
次世代AIリサーチ市場は、検索、要約、比較、ファクトチェックを統合する方向へ進んでいます。特にResearch Agent型の機能は、複数ソースを横断して調査メモを作る点で有効です。ただし、ソースの定義差や予測値のばらつきが大きいため、意思決定では一次情報と第三者分析を併用する必要があります。

## 2. 主要な発見事項
1. リサーチ業務は単発検索からエージェント型調査へ移行しています。
2. 公式発表は速報性が高い一方、楽観的な表現が含まれます。
3. アナリストレポートは比較に強い一方、前提条件の確認が必要です。
4. 市場規模や普及時期は、定義によって大きく変わります。
5. 実務では「調査結果」よりも「根拠と限界」を示すことが重要です。

## 3. ソース別比較表
| ソース種別 | 強み | 注意点 | 推奨用途 |
| --- | --- | --- | --- |
| 公式発表 | 一次情報として信頼しやすい | 成功見通しが強調されやすい | 事実確認、日付確認 |
| 公的資料 | 制度や政策の根拠になる | 更新頻度が遅い場合がある | 規制・政策分析 |
| 専門メディア | 背景解説が分かりやすい | 記事ごとに論調が異なる | 論点整理 |
| アナリストレポート | 比較・予測に強い | 前提条件の確認が必須 | 市場性評価 |

## 4. 次に取るべきアクション
- 一次情報で時期と数値を再確認する。
- 対立する見解を社内レビューで共有する。
- 追加調査が必要な項目をResearch Agentへ再依頼する。`,
}

const relatedArticles = [
  {
    title: "ググるより速い！ChatGPTの「検索機能（Search）」で最新情報を引き出すプロンプト術",
    description: "最新情報を引き出すための検索プロンプトを、初心者にも分かりやすく解説します。",
    href: "/articles/chatgpt-search-beginner",
  },
  {
    title: "AIエージェントで業務自動化！自律型ワークフロー構築プロンプト術",
    description: "AIにゴールを与え、調査からレポート化までの流れを自律的に進める考え方を紹介します。",
    href: "/articles/ai-agent-workflow",
  },
  {
    title: "【中級者向け】金融実務をAIが代行！Anthropicの最新『金融特化型エージェント』活用プロンプト術",
    description: "専門領域の情報分析をAIエージェントに任せる際のポイントを解説します。",
    href: "/articles/anthropic-financial-agents",
  },
]

export default function PerplexityProAdvancedPage() {
  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title="【中級者向け】リサーチ時間を9割削減！Perplexity Proの『Research Agent』で深掘り調査を自動化するプロンプト術"
          eyecatchSrc="/images/og-image-perplexity-research.png"
          createdAt="2026年5月16日"
          updatedAt="2026年5月16日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              リサーチは「検索結果を読む」から「調査設計を任せる」へ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              毎日のように市場ニュース、競合発表、規制変更、技術トレンドを追っていると、検索結果を開いて要点を拾うだけで多くの時間が過ぎてしまいます。Perplexity ProのResearch Agentは、こうした調査作業を「検索」単位ではなく、「問いに対する調査プロジェクト」として扱いやすくする機能です。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              この記事では、リサーチャー、アナリスト、新規事業担当者、ライターに向けて、複数ソースの重み付け、3視点分析、矛盾点の検出、Markdownレポート化までを一連の流れで進めるプロンプトを紹介します。単に「調べて」と頼むのではなく、Research Agentに調査方針を明確に渡すことで、短時間でも判断に使える材料を集めやすくなります。
            </p>
          </section>

          <section id="research-agent-evolution" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Research Agentで変わる3つの作業
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Research Agentを実務で使う価値は、単なる要約の速さだけではありません。重要なのは、調査の前提をそろえ、情報源の信頼度を比較し、相反する見解を見つけるところまで依頼できる点です。
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-[#F5F9FC]">
                    <th className="border border-gray-300 px-4 py-2 text-left text-[#333333]">作業</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-[#333333]">従来の進め方</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-[#333333]">Research Agentでの進め方</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-[#333333] font-bold">情報収集</td>
                    <td className="border border-gray-300 px-4 py-2 text-[#333333]">検索キーワードを何度も変えて記事を探す</td>
                    <td className="border border-gray-300 px-4 py-2 text-[#333333]">調査テーマ、対象期間、優先ソースを指定してまとめて探索する</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-[#333333] font-bold">比較分析</td>
                    <td className="border border-gray-300 px-4 py-2 text-[#333333]">自分で表を作り、情報源ごとの主張を転記する</td>
                    <td className="border border-gray-300 px-4 py-2 text-[#333333]">肯定・否定・中立などの分析軸を先に渡して比較させる</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-[#333333] font-bold">検証</td>
                    <td className="border border-gray-300 px-4 py-2 text-[#333333]">数値や時期の食い違いを目視で確認する</td>
                    <td className="border border-gray-300 px-4 py-2 text-[#333333]">矛盾点、未確認事項、追加調査項目を明示させる</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="prompt-1" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              プロンプト1：ソース重み付けで調査品質を上げる
            </h2>
            <p className="text-[#333333] leading-relaxed mb-6">
              最初のプロンプトでは、Research Agentに「どの情報源を重視するか」を明確に伝えます。特に市場調査や技術調査では、公式発表、政府資料、専門メディア、アナリストレポートの役割が異なるため、同列に扱わないことが重要です。
            </p>
            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                ソース重み付けプロンプト
              </h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                <p>
                  情報源ごとの主張、信頼度、採用理由、注意点が表形式で整理されます。調査の冒頭で使うと、後続の分析に使うべきソースを見極めやすくなります。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                <p>
                  新規事業の市場調査、競合分析、技術トレンド調査など、複数の情報源を比較して意思決定の材料を作りたいときに向いています。
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.sourceWeighting} />
              <ResponseExample response={prompts.sourceWeightingResponse} />
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="list-disc list-inside space-y-2">
                  <li>「優先する情報源」を書くことで、速報記事だけに引っ張られるリスクを減らせます。</li>
                  <li>信頼度を高・中・低で分類させると、後から人間が検証しやすくなります。</li>
                  <li>可変入力欄には、必ず【調査テーマを入力】のように具体的な対象を入れてください。</li>
                </ul>
              </PromptInfoCard>
            </div>
          </section>

          <section id="prompt-2" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              プロンプト2：肯定・否定・中立の3視点で深掘りする
            </h2>
            <p className="text-[#333333] leading-relaxed mb-6">
              ひとつのテーマでも、立場によって結論は大きく変わります。たとえば新技術の市場性を調べる場合、企業発表は前向きに、専門家コメントは慎重に、公的資料は中立的に書かれる傾向があります。3視点を指定すると、調査結果の偏りを抑えやすくなります。
            </p>
            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                3視点リサーチプロンプト
              </h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                <p>
                  肯定的な材料、否定的な材料、中立的なデータが分かれて提示されます。最後に暫定結論と追加質問が出るため、次の調査依頼に進みやすくなります。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                <p>
                  記事執筆で公平な論点整理をしたいとき、投資判断で楽観・悲観の両面を見たいとき、社内資料で反対意見を先回りしたいときに便利です。
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.multiPerspective} />
              <ResponseExample response={prompts.multiPerspectiveResponse} />
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="list-disc list-inside space-y-2">
                  <li>対象期間を入れると、古い情報と最新情報が混ざりにくくなります。</li>
                  <li>重点論点を指定すると、単なるニュース要約ではなく、目的に沿った調査になります。</li>
                  <li>追加質問を出させることで、Research Agentとの調査を一回で終わらせず、深掘りできます。</li>
                </ul>
              </PromptInfoCard>
            </div>
          </section>

          <section id="prompt-3" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              プロンプト3：矛盾点と追加調査項目を洗い出す
            </h2>
            <p className="text-[#333333] leading-relaxed mb-6">
              深掘り調査で最も価値が出るのは、単に「何が書かれているか」ではなく、「どこが食い違っているか」を見つける場面です。市場規模、ロードマップ、規制解釈などは、情報源によって定義が異なることが多いため、矛盾点を明示させるとレポートの信頼性が高まります。
            </p>
            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                矛盾検出プロンプト
              </h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                <p>
                  複数ソース間で異なる数値、時期、解釈が一覧化され、なぜ違いが生じているのかという仮説まで整理されます。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                <p>
                  プレスリリース、専門メディア、調査会社レポートで見解が割れているテーマを扱うときや、記事公開前のファクトチェックに役立ちます。
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.contradictionCheck} />
              <ResponseExample response={prompts.contradictionCheckResponse} />
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="list-disc list-inside space-y-2">
                  <li>比較したいソースを指定すると、調査範囲が明確になります。</li>
                  <li>「採用すべき見解」を出させても、最終判断は人間が行う前提にしてください。</li>
                  <li>食い違いの理由を「定義差」「時点差」「立場差」に分けて読むと、誤解を防げます。</li>
                </ul>
              </PromptInfoCard>
            </div>
          </section>

          <section id="prompt-4" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              プロンプト4：企画書に使えるMarkdownレポートへ整える
            </h2>
            <p className="text-[#333333] leading-relaxed mb-6">
              調査結果をそのまま貼り付けるだけでは、読み手にとって判断しやすい資料にはなりません。最後に、想定読者と目的を指定し、エグゼクティブサマリー、比較表、矛盾点、次のアクションまでを含むMarkdownレポートに整えます。
            </p>
            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                構造化レポート出力プロンプト
              </h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                <p>
                  社内共有や企画書に転用しやすいMarkdown形式で、要約、発見事項、比較表、矛盾点、次アクションが整理されます。
                </p>
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                <p>
                  調査メモを上司やチームに共有したいとき、記事の構成案を作りたいとき、意思決定会議の事前資料を作りたいときに最適です。
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.markdownReport} />
              <ResponseExample response={prompts.markdownReportResponse} />
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="list-disc list-inside space-y-2">
                  <li>想定読者を明記すると、専門用語の深さや結論の粒度が調整されます。</li>
                  <li>「断定しすぎない」と条件に入れると、調査レポートとしての安全性が高まります。</li>
                  <li>Markdown形式にしておくと、Notion、Google Docs、社内Wikiなどに転用しやすくなります。</li>
                </ul>
              </PromptInfoCard>
            </div>
          </section>

          <section id="workflow" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              4つのプロンプトをつなげる実務ワークフロー
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              実務では、4つのプロンプトを単発で使うよりも、順番につなげるほうが効果的です。最初に情報源を整理し、次に3視点で論点を広げ、矛盾点を検証し、最後に読み手向けのレポートへ整える流れです。
            </p>
            <div className="bg-[#F5F9FC] p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-[#333333] mb-3">おすすめの進め方</h3>
              <ol className="list-decimal list-inside text-[#333333] space-y-2">
                <li>ソース重み付けプロンプトで、採用すべき情報源を決めます。</li>
                <li>3視点リサーチプロンプトで、肯定・否定・中立の論点を出します。</li>
                <li>矛盾検出プロンプトで、数値や時期の食い違いを確認します。</li>
                <li>構造化レポート出力プロンプトで、共有しやすいMarkdownに整えます。</li>
              </ol>
            </div>
          </section>

          <section id="tips" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Research Agentを使いこなす注意点
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Research Agentは強力ですが、最終的な判断を完全に任せるのではなく、人間が調査設計と検証を担うことで効果を発揮します。特に重要な意思決定では、一次情報の確認と、数値の定義確認を必ず行ってください。
            </p>
            <ul className="list-disc list-inside text-[#333333] space-y-3 mb-6">
              <li>
                <strong>調査目的を先に書く：</strong>
                記事作成、投資判断、競合比較など、目的によって必要な情報の粒度が変わります。
              </li>
              <li>
                <strong>情報源の種類を分ける：</strong>
                公式発表、報道、専門家コメント、調査レポートを同列に扱わず、役割を分けて読みます。
              </li>
              <li>
                <strong>矛盾を歓迎する：</strong>
                食い違いは失敗ではなく、深掘りすべき論点です。矛盾が見つかったら、定義や対象期間を確認します。
              </li>
            </ul>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ：人間は問いと判断に集中する
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Perplexity ProのResearch Agentを活用すると、情報収集、比較、矛盾検出、レポート化までの時間を大きく短縮できます。ただし、成果の質を左右するのは、最初にどのような問いを立て、どの情報源を重視し、どの形式で出力させるかです。
            </p>
            <p className="text-[#333333] leading-relaxed">
              まずは本記事の4つのプロンプトを使い、日々の調査テーマを1つ選んで試してみてください。Research Agentに作業を任せつつ、人間は問いの設計と最終判断に集中する。それが、2026年のリサーチ業務を効率化する第一歩です。
            </p>
          </section>

          <AffiliateBox
            title="Perplexity Proでリサーチ業務を高速化"
            description="Research Agentを活用すると、複数ソースの比較や深掘り調査を効率よく進められます。日々の市場調査や記事作成の時間を短縮したい方におすすめです。"
            buttonText="Perplexityを試してみる"
            buttonHref="https://www.perplexity.ai/"
            features={[
              "複数ソースを横断したリサーチに便利",
              "出典を確認しながら調査を進めやすい",
              "市場調査・競合分析・記事作成に活用可能",
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
