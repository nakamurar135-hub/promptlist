import type { Metadata } from 'next'
import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import TableOfContents from "@/components/article/TableOfContents"
import PromptBlock from "@/components/article/PromptBlock"
import ResponseExample from "@/components/article/ResponseExample"
import PromptInfoCard from "@/components/article/PromptInfoCard"
import AffiliateBox from "@/components/cta/AffiliateBox"
import RelatedArticles from "@/components/cta/RelatedArticles"
import { useSEO } from "@/hooks/useSEO"
import { useOGP } from "@/hooks/useOGP"
import { useStructuredData } from "@/hooks/useStructuredData"

export const metadata: Metadata = {
  title: 'リサーチ時間を9割削減！Perplexity Proの『Research Agent』で深掘り調査を自動化するプロンプト術',
  description: '2026年の最新リサーチ術。複数の情報源をAIが自律的にクロスチェックし、矛盾点を指摘。専門的なレポートをわずか数分で完成させるPerplexity Pro Research Agentの使いこなし術を解説します。',
  keywords: 'Perplexity Pro, Research Agent, リサーチ自動化, プロンプト, 情報分析, 市場調査, AI活用',
  openGraph: {
    title: 'リサーチ時間を9割削減！Perplexity Proの『Research Agent』で深掘り調査を自動化するプロンプト術',
    description: '複数の情報源をAIが自律的にクロスチェック。矛盾点を指摘し、信頼性の高いレポートを数分で作成。',
    type: 'article',
    images: ['/images/og-image-perplexity-research.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'リサーチ時間を9割削減！Perplexity Proの『Research Agent』で深掘り調査を自動化するプロンプト術',
    description: '2026年の最新リサーチ術。複数の情報源をAIが自律的にクロスチェックし、矛盾点を指摘。',
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
        { title: "リサーチ時間を9割削減！Perplexity Proの『Research Agent』で深掘り調査を自動化するプロンプト術", href: "/articles/perplexity-research-agent-advanced" },
        { title: "ググるより速い！ChatGPTの「検索機能（Search）」で最新情報を引き出すプロンプト術", href: "/articles/chatgpt-search-beginner" },
        { title: "【中級者向け】金融実務をAIが代行！Anthropicの最新『金融特化型エージェント』活用プロンプト術", href: "/articles/anthropic-financial-agents" },
      ],
    },
  ],
  copyright: "© 2026 AIプロンプト活用ガイド All Rights Reserved.",
}

const headings = [
  { id: "introduction", text: "2026年のリサーチは「AIに任せて、人間が検証する」時代へ", level: 2 as const },
  { id: "evolution", text: "Research Agentの進化：2026年版の強化ポイント", level: 2 as const },
  { id: "multi-perspective", text: "多角的リサーチを指示する「3視点プロンプト」", level: 2 as const },
  { id: "contradiction-detection", text: "矛盾の発見と検証：信頼性を担保するテクニック", level: 2 as const },
  { id: "structured-report", text: "そのまま使える！構造化レポート出力プロンプト", level: 2 as const },
  { id: "practical-examples", text: "実践例：3つのビジネスシーン別プロンプト", level: 2 as const },
  { id: "tips", text: "Research Agentを使いこなすための3つのコツ", level: 2 as const },
  { id: "summary", text: "まとめ：リサーチは「検索」から「オーケストレーション」へ", level: 2 as const },
]

const prompts = {
  multiPerspective: `【調査テーマ】2026年の固体電池市場の動向

Perplexity Research Agentへの指示：
以下の3つの視点から情報を収集し、それぞれの根拠となるソースを明示してまとめてください。

1. 推進・肯定的な立場（メリット、成長要因）
   - 主要メーカーの商用化予定
   - 市場規模の成長予測
   - 技術的ブレークスルー

2. 慎重・否定的な立場（リスク、課題、反対意見）
   - 技術的課題の残存
   - 価格競争力の問題
   - 規制上の懸念

3. 中立・客観的な立場（市場統計、公的規制）
   - 公開されている市場調査データ
   - 政府の産業政策
   - 国際的な規制動向

最後に、これら3つの視点から導き出される『現在のコンセンサス』と『今後の注目点』を提示してください。`,

  multiPerspectiveResponse: `■ 固体電池市場の3視点分析

【推進・肯定的な立場】
✓ Toyota、Samsung、QuantumScapeが2026年内の商用化を発表
✓ 市場規模は2025年の$50Bから2030年には$500B超へ成長予測（CAGR 80%）
✓ エネルギー密度が従来型の2倍以上を実現

【慎重・否定的な立場】
✗ 製造プロセスの歩留まり率がまだ70%程度（商用化には90%以上必要）
✗ 現在の生産コストは従来型の3〜5倍
✗ 長期耐久性データが不足（5年以上の実運用データなし）

【中立・客観的な立場】
= 国際エネルギー機関（IEA）は2026年時点での市場浸透率を3%と予測
= 日本、EU、米国が相次いで固体電池産業への補助金を発表
= 特許出願件数は年30%の増加率

【コンセンサス】
固体電池は「確実に来る」が「いつ本格化するかは不透明」という状況。
2026年は「導入期」であり、本格的な普及は2028年以降と予想。`,

  contradictionDetection: `【調査テーマ】Web3.0の現状と課題

Perplexity Research Agentへの指示：
Web3.0に関する最新の動向を調査してください。特に、主要な情報源（政府発表、大手テック企業、業界専門家ブログ）の間で、以下の点に食い違いがある箇所を特定し、なぜその差異が生じているのかを分析してください。

1. Web3.0の定義と範囲
2. 市場規模の推定値
3. 技術的実現可能性の評価
4. 規制方針の方向性

各矛盾点について、「なぜこの差異が生じているのか」という背景も含めて解説してください。`,

  contradictionResponse: `■ Web3.0に関する矛盾点の分析

【矛盾1：市場規模の推定値】
- Gartner: 2026年の市場規模 $150B
- Statista: 同時期の推定値 $80B
- 理由: Gartnerはメタバース関連を含める、Statistaはブロックチェーン限定

【矛盾2：技術的実現可能性】
- Meta、Microsoft: 「2026年内に実用的なメタバース環境が実現する」
- 学術論文（MIT、Stanford）: 「現在の技術では2030年以降が現実的」
- 理由: 企業は楽観的シナリオ、学術界はボトルネック分析に基づく

【矛盾3：規制方針】
- 米国SEC: 「暗号資産規制の枠組みで対応」
- EU: 「包括的なデジタル資産規制を別途構築」
- 理由: 米国は既存枠組みの活用、EUは新規制の構築志向

【未解決の課題】
1. スケーラビリティの限界（現在のブロックチェーンは秒間100〜1000トランザクション）
2. ユーザー体験の改善（ウォレット管理の複雑さ）
3. エネルギー消費問題（PoWの環境負荷）`,

  structuredReport: `【調査テーマ】日本の生成AI規制に関する最新動向

Perplexity Research Agentへの指示：
これまでの調査結果を元に、以下の構成でMarkdown形式のレポートを作成してください。

# タイトル：日本の生成AI規制に関する総合リサーチレポート（2026年5月版）

## 1. エグゼクティブ・サマリー（300文字以内）
日本政府は2026年、生成AIに関する包括的な規制枠組みを発表。欧州のAI法との比較では、日本は「イノベーション重視」、欧州は「リスク管理重視」という対照的なアプローチを採用。中小企業への影響は、コンプライアンスコストの増加と新規参入障壁の上昇が予想される。

## 2. 主要な発見事項
- 日本政府は「生成AI産業競争力強化法」を国会に提出
- 欧州AI法との最大の違いは「事前規制 vs 事後規制」
- 中小企業の67%がコンプライアンス対応に懸念

## 3. ソース別比較表
| ソース | 信頼度 | 主な主張 | 根拠 |
| --- | --- | --- | --- |
| 経済産業省 | 高 | イノベーション重視 | 公式発表 |
| 日本経団連 | 中 | 規制は最小限に | 業界団体 |
| 学識者グループ | 中 | 倫理的ガイドライン必要 | 学術的分析 |

## 4. 矛盾点と未解決の課題
- 「規制」と「競争力」のバランスが不明確
- 国際的な規制調和の見通しが立たない

## 5. 次に取るべき推奨アクション
1. 政府の最新ガイドラインを定期的に確認
2. 業界団体の動向を監視
3. 自社システムのコンプライアンス監査を実施`,

  structuredReportResponse: `# 日本の生成AI規制に関する総合リサーチレポート（2026年5月版）

## 1. エグゼクティブ・サマリー
日本政府は2026年、生成AIに関する包括的な規制枠組みを発表。欧州のAI法との比較では、日本は「イノベーション重視」、欧州は「リスク管理重視」という対照的なアプローチを採用。中小企業への影響は、コンプライアンスコストの増加と新規参入障壁の上昇が予想される。

## 2. 主要な発見事項
- 日本政府は「生成AI産業競争力強化法」を国会に提出
- 欧州AI法との最大の違いは「事前規制 vs 事後規制」
- 中小企業の67%がコンプライアンス対応に懸念

## 3. ソース別比較表
| ソース | 信頼度 | 主な主張 | 根拠 |
| --- | --- | --- | --- |
| 経済産業省 | 高 | イノベーション重視 | 公式発表 |
| 日本経団連 | 中 | 規制は最小限に | 業界団体 |
| 学識者グループ | 中 | 倫理的ガイドライン必要 | 学術的分析 |

## 4. 矛盾点と未解決の課題
- 「規制」と「競争力」のバランスが不明確
- 国際的な規制調和の見通しが立たない

## 5. 次に取るべき推奨アクション
1. 政府の最新ガイドラインを定期的に確認
2. 業界団体の動向を監視
3. 自社システムのコンプライアンス監査を実施`,
}

const relatedArticles = [
  {
    title: "ググるより速い！ChatGPTの「検索機能（Search）」で最新情報を引き出すプロンプト術",
    description: "ChatGPT検索機能を使った効率的な情報取得方法",
    href: "/articles/chatgpt-search-beginner",
  },
  {
    title: "【中級者向け】金融実務をAIが代行！Anthropicの最新『金融特化型エージェント』活用プロンプト術",
    description: "金融分析に特化したAIエージェントの活用方法",
    href: "/articles/anthropic-financial-agents",
  },
  {
    title: "【初心者向け】「あのサイト、何だっけ？」をAIが解決！Chromeの『AI履歴検索』活用プロンプト術",
    description: "Chrome AI履歴検索機能を使った情報検索",
    href: "/articles/chrome-ai-history-search",
  },
]

export default function PerplexityResearchAgentPage() {
  useSEO({
    title: 'Perplexity Pro Research Agent活用術｜リサーチ自動化プロンプト',
    description: 'Perplexity Proの新機能Research Agentで、複数の情報源を自動クロスチェック。矛盾点を指摘し、信頼性の高いレポートを数分で作成するプロンプト術を解説。',
    keywords: 'Perplexity Pro, Research Agent, リサーチ自動化, プロンプト, 情報分析, 市場調査, AI活用, 深掘り調査, 多角的分析'
  });

  useOGP({
    title: 'Perplexity Pro Research Agent活用術｜リサーチ自動化プロンプト',
    description: 'Perplexity Proの新機能Research Agentで、複数の情報源を自動クロスチェック。矛盾点を指摘し、信頼性の高いレポートを数分で作成するプロンプト術を解説。',
    type: 'article',
    image: 'https://example.com/images/og-image-perplexity-research.png',
    url: 'https://promptlist.jp/articles/perplexity-research-agent-advanced'
  });

  useStructuredData({
    title: 'Perplexity Pro Research Agent活用術｜リサーチ自動化プロンプト',
    description: 'Perplexity Proの新機能Research Agentで、複数の情報源を自動クロスチェック。矛盾点を指摘し、信頼性の高いレポートを数分で作成するプロンプト術を解説。',
    author: 'AIプロンプト活用ガイド',
    datePublished: '2026-05-16T00:00:00Z',
    dateModified: '2026-05-16T00:00:00Z',
    image: 'https://example.com/images/og-image-perplexity-research.png',
    url: 'https://promptlist.jp/articles/perplexity-research-agent-advanced'
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title="リサーチ時間を9割削減！Perplexity Proの『Research Agent』で深掘り調査を自動化するプロンプト術"
          eyecatchSrc="/images/og-image-perplexity-research.png"
          createdAt="2026年5月16日"
          updatedAt="2026年5月16日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              2026年のリサーチは「AIに任せて、人間が検証する」時代へ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年、情報の氾濫はさらに加速し、信頼できるソースを見つけ出し、多角的に分析するコストは増大し続けています。そんな中、Perplexity Proが発表した「Research Agent」の新機能は、リサーチ業務の常識を根底から覆しました。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              単なる検索結果の要約にとどまらず、複数の情報源を自律的にクロスチェックし、情報の矛盾点や未解明の課題を浮き彫りにする。本記事では、この強力なエージェントを使いこなし、数時間かかっていた専門レポートをわずか数分で完成させるための実践的なプロンプト術を解説します。
            </p>
          </section>

          <section id="evolution" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Research Agentの進化：2026年版の強化ポイント
            </h2>
            <p className="text-[#333333] leading-relaxed mb-6">
              2026年のアップデートにより、PerplexityのResearch Agentは以下の3点で飛躍的な進化を遂げました。
            </p>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-[#CCCCCC]">
                <thead>
                  <tr className="bg-[#F0F4F8]">
                    <th className="border border-[#CCCCCC] px-4 py-2 text-left font-bold">機能</th>
                    <th className="border border-[#CCCCCC] px-4 py-2 text-left font-bold">進化の内容</th>
                    <th className="border border-[#CCCCCC] px-4 py-2 text-left font-bold">ユーザーへのメリット</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#CCCCCC] px-4 py-2"><strong>自律的推論能力</strong></td>
                    <td className="border border-[#CCCCCC] px-4 py-2">単一のクエリではなく、目標達成に必要なサブクエリを自ら生成して深掘りする。</td>
                    <td className="border border-[#CCCCCC] px-4 py-2">曖昧な指示からでも精度の高い調査が可能に。</td>
                  </tr>
                  <tr className="bg-[#F9F9F9]">
                    <td className="border border-[#CCCCCC] px-4 py-2"><strong>ソースの重み付け</strong></td>
                    <td className="border border-[#CCCCCC] px-4 py-2">論文、公式発表、ニュース、SNSなど、情報の信頼性を自動でランク付けする。</td>
                    <td className="border border-[#CCCCCC] px-4 py-2">偽情報や偏った意見に惑わされるリスクを低減。</td>
                  </tr>
                  <tr>
                    <td className="border border-[#CCCCCC] px-4 py-2"><strong>矛盾検知アルゴリズム</strong></td>
                    <td className="border border-[#CCCCCC] px-4 py-2">異なるソース間で数値や見解が食い違う場合、それを「矛盾」として即座に指摘する。</td>
                    <td className="border border-[#CCCCCC] px-4 py-2">自分でクロスチェックする手間が大幅に削減。</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="multi-perspective" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              多角的リサーチを指示する「3視点プロンプト」
            </h2>
            <p className="text-[#333333] leading-relaxed mb-6">
              情報の偏りを防ぐためには、1つの事象に対してあえて異なる立場から調査させることが重要です。以下のプロンプトを使用することで、推進派、慎重派、中立派の3つの視点から包括的な分析が可能になります。
            </p>

            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                実践プロンプト：多角的分析
              </h3>
              <PromptInfoCard type="response" title="期待される動作">
                <p>
                  Research Agentが3つの異なる視点から情報を自動的に収集し、各視点の根拠となるソースを明示した上で、最終的なコンセンサスと今後の注目点を提示します。
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.multiPerspective} />
              <ResponseExample response={prompts.multiPerspectiveResponse} />
            </div>
          </section>

          <section id="contradiction-detection" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              矛盾の発見と検証：信頼性を担保するテクニック
            </h2>
            <p className="text-[#333333] leading-relaxed mb-6">
              Research Agentの真骨頂は、情報の「ズレ」を見つける能力にあります。複数のソース間で数値や見解が食い違う箇所を自動で特定し、その理由を分析することで、より信頼性の高いリサーチが実現します。
            </p>

            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                実践プロンプト：矛盾検知
              </h3>
              <PromptInfoCard type="response" title="期待される動作">
                <p>
                  Research Agentが複数のソースを比較し、数値データや予測時期の食い違いを特定。各矛盾が生じた背景や理由を分析します。
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.contradictionDetection} />
              <ResponseExample response={prompts.contradictionResponse} />
            </div>
          </section>

          <section id="structured-report" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              そのまま使える！構造化レポート出力プロンプト
            </h2>
            <p className="text-[#333333] leading-relaxed mb-6">
              リサーチ結果をそのまま企画書や報告書に活用するための仕上げのステップです。以下のプロンプトを使用することで、経営層にも開発チームにも分かりやすい、構造化されたMarkdownレポートが自動生成されます。
            </p>

            <div className="mb-12 p-6 bg-[#F5F9FC] rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-4">
                実践プロンプト：構造化レポート出力
              </h3>
              <PromptInfoCard type="response" title="期待される動作">
                <p>
                  Research Agentが調査結果を、エグゼクティブサマリー、主要発見、ソース比較表、矛盾点分析、推奨アクションという5つのセクションで構造化したMarkdownレポートを生成します。
                </p>
              </PromptInfoCard>
              <PromptBlock prompt={prompts.structuredReport} />
              <ResponseExample response={prompts.structuredReportResponse} />
            </div>
          </section>

          <section id="practical-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              実践例：3つのビジネスシーン別プロンプト
            </h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-4">シーン1：新規事業の市場調査</h3>
              <p className="text-[#333333] mb-3">
                「[新規事業名]の市場規模、競合状況、参入障壁について、過去3年間のデータと今後の成長予測を調査してください。特に、楽観的な見方と慎重な見方の両方を含めて、矛盾点を指摘してください。」
              </p>
              <p className="text-[#666666] text-sm">
                → 数時間かかっていた市場調査が30分で完了。複数の視点から検討できるため、意思決定の質が向上します。
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-4">シーン2：規制動向の監視</h3>
              <p className="text-[#333333] mb-3">
                「[業界名]に関連する最新の規制動向を、日本、米国、EUの3地域で調査してください。各地域の規制方針の違いと、その背景にある考え方の違いを分析してください。」
              </p>
              <p className="text-[#666666] text-sm">
                → グローバル展開時の規制リスクを事前に把握。各地域での対応戦略を立案する際の基礎情報が得られます。
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">シーン3：技術トレンドの分析</h3>
              <p className="text-[#333333] mb-3">
                「[技術名]の最新動向について、学術論文、企業プレスリリース、業界ブログから情報を集約してください。技術的な実現可能性と、市場での採用見通しについて、異なる見方を比較分析してください。」
              </p>
              <p className="text-[#666666] text-sm">
                → 技術投資の判断に必要な、バランスの取れた情報が得られます。過度な期待値と現実のギャップを認識できます。
              </p>
            </div>
          </section>

          <section id="tips" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Research Agentを使いこなすための3つのコツ
            </h2>
            <ul className="list-disc list-inside text-[#333333] space-y-4 mb-6">
              <li>
                <strong>「何を調べるか」より「どう調べるか」を明確に指示する:</strong>
                単に「〇〇について調べて」ではなく、「推進派と慎重派の両方の見方を含めて」「矛盾点を特定して」など、調査方法を具体的に指定することで、より質の高い結果が得られます。
              </li>
              <li>
                <strong>ソースの信頼度を意識させる:</strong>
                「論文、公式発表、ニュース、SNSの中で、特に論文と公式発表を重視してください」など、ソースの重み付けを明示することで、偏った情報に基づくリサーチを防げます。
              </li>
              <li>
                <strong>最終的な出力形式を指定する:</strong>
                「Markdown形式で、経営層向けのサマリーと開発チーム向けの技術詳細を分けて提示してください」など、出力形式を明確に指定することで、そのまま報告書として使用できるレポートが生成されます。
              </li>
            </ul>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ：リサーチは「検索」から「オーケストレーション」へ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Perplexity ProのResearch Agentは、私たちの「調べる」という行為を、単なる検索から、AIという優秀な部下を指揮する「オーケストレーション」へと進化させました。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              重要なのは、AIが出した答えを鵜呑みにすることではなく、AIに「どこを深掘りさせるか」「どの視点が欠けているか」を適切に指示することです。本記事で紹介したプロンプト術を活用し、2026年の情報社会をより賢く、効率的に渡り歩いていきましょう。
            </p>
            <p className="text-[#333333] leading-relaxed">
              Research Agentは単なるツールではなく、あなたの「思考パートナー」です。その力を最大限に引き出すのは、あなたの指示の質にかかっています。
            </p>
          </section>

          <section id="related">
            <RelatedArticles articles={relatedArticles} />
          </section>
        </div>
      </article>
    </PageLayout>
  )
}
