import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleContent from "@/components/article/ArticleContent";
import TableOfContents from "@/components/article/TableOfContents";
import PromptBlock from "@/components/article/PromptBlock";
import PromptInfoCard from "@/components/article/PromptInfoCard";
import ResponseExample from "@/components/article/ResponseExample";
import AffiliateBox from "@/components/cta/AffiliateBox";
import RelatedArticles from "@/components/cta/RelatedArticles";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "ChatGPTで要約文を作成するプロンプト4選｜長文読解・情報整理を効率化",
  description: "ChatGPTで要約文を作成するプロンプトを4つご紹介。文字数指定、目的・視点指定、箇条書き・表形式、専門家視点など、長文読解・情報整理を効率化する実践的なプロンプト集です。",
  openGraph: {
    title: "ChatGPTで要約文を作成するプロンプト4選｜長文読解・情報整理を効率化",
    description: "ChatGPTで要約文を作成するプロンプトを4つご紹介。文字数指定、目的・視点指定、箇条書き・表形式、専門家視点など、長文読解・情報整理を効率化する実践的なプロンプト集です。",
    images: ["/images/chatgpt-summarize-prompt-eyecatch.png"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPTで要約文を作成するプロンプト4選｜長文読解・情報整理を効率化",
    description: "ChatGPTで要約文を作成するプロンプトを4つご紹介。文字数指定、目的・視点指定、箇条書き・表形式、専門家視点など、長文読解・情報整理を効率化する実践的なプロンプト集です。",
    images: ["/images/chatgpt-summarize-prompt-eyecatch.png"],
  },
};

const tocItems = [
  { id: "intro", label: "ChatGPTで長文読解・情報整理を効率化！" },
  { id: "about-chatgpt", label: "ChatGPTとは？初心者向けにわかりやすく解説" },
  { id: "prompts", label: "要約に使えるプロンプト4選" },
  { id: "prompt1", label: "プロンプト1：文字数指定型要約", level: 3 as const },
  { id: "prompt2", label: "プロンプト2：目的・視点指定型要約", level: 3 as const },
  { id: "prompt3", label: "プロンプト3：箇条書き・表形式要約", level: 3 as const },
  { id: "prompt4", label: "プロンプト4：専門家視点での詳細要約", level: 3 as const },
  { id: "tips", label: "プロンプトをさらに活用するコツ" },
  { id: "notice", label: "ChatGPT利用時の注意点" },
  { id: "summary", label: "まとめ" },
];

const relatedArticles = [
  {
    title: "ChatGPTでアイデア出しをするプロンプト4選｜企画・発想を加速する実践例",
    href: "/articles/chatgpt-ideation-prompt",
    description: "ブレインストーミング、SWOT分析、SCAMPER法、6W2Hなど、企画・発想を加速する実践的なプロンプト集です。",
  },
  {
    title: "ChatGPTでSNS投稿文を作成するプロンプト4選｜コピペで使える実践例",
    href: "/articles/chatgpt-sns-post-prompt",
    description: "新商品紹介、イベント告知、顧客の声、Q&A形式まで、コピペで使える実践的なプロンプト集です。",
  },
  {
    title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集",
    href: "/articles/chatgpt-question-template",
    description: "ChatGPTを使いこなすための基本的な質問テクニックを解説。初めての方はまずこちらから。",
  },
];

export default function ChatgptSummarizePrompt() {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <ArticleHeader
          title="ChatGPTで要約文を作成するプロンプト4選｜長文読解・情報整理を効率化"
          description="ChatGPTで要約文を作成するプロンプトを4つご紹介。文字数指定、目的・視点指定、箇条書き・表形式、専門家視点など、長文読解・情報整理を効率化する実践的なプロンプト集です。"
          category="情報整理"
          categoryColor="#00BCD4"
          publishedAt="2026年3月5日"
          readingTime="約10分"
        />

        <TableOfContents items={tocItems} />

        <ArticleContent>
          {/* 導入セクション */}
          <section id="intro">
            <h2>ChatGPTで長文読解・情報整理を効率化！</h2>
            <p>「長い会議の議事録を短時間で把握したい…」「論文やレポートの要点を素早く掴みたい…」「Web記事の情報を効率的にインプットしたい…」</p>
            <p>情報過多の現代において、長文読解や情報整理は多くの人にとって大きな課題です。この記事では、ChatGPTを使ってあらゆるテキストを効率的に要約するための実践的なプロンプトを4つご紹介します。</p>
            <p>コピペするだけで使えるので、初心者の方でも安心です。</p>
          </section>

          {/* ChatGPT基礎説明 */}
          <section id="about-chatgpt">
            <h2>ChatGPTとは？初心者向けにわかりやすく解説</h2>
            <p>ChatGPTは、OpenAIが開発したAIチャットサービスです。質問を入力するだけで、自然な日本語で回答を得ることができます。テキスト生成、翻訳、要約など、様々なタスクをこなすことができます。</p>
            <p>基本機能は無料で利用できますが、より高度な機能や高速な応答を求める方には、月額20ドルのChatGPT Plus（有料版）がおすすめです。ChatGPT Plusでは、最新のGPT-4モデルが利用でき、より複雑な指示にも対応できます。</p>
          </section>

          {/* プロンプト解説セクション */}
          <section id="prompts">
            <h2>要約に使えるプロンプト4選</h2>
            <p>ここからは、実際に要約で使えるプロンプトを4つご紹介します。用途に合わせてお使いください。</p>

            {/* プロンプト1 */}
            <div id="prompt1">
              <h3>プロンプト1：文字数指定型要約</h3>

              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                指定した文字数（または行数）の範囲内で、元の文章の主要な情報や要点をまとめた要約文が生成されます。簡潔に情報を把握したい場合に非常に有効です。
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                会議の議事録、報告書、メール、Web記事など、特定の文字数制限がある中で内容を伝えたい場合に最適です。SNS投稿やプレゼンテーション資料の作成にも役立ちます。
              </PromptInfoCard>

              <PromptBlock title="プロンプト">{`以下の文章を〇〇字（または〇〇行）で要約してください。

【文章】
`}</PromptBlock>

              <ResponseExample title="ChatGPTの回答例">{`以下の文章を100字で要約してください。

【文章】
近年、AI技術の進化は目覚ましく、私たちの生活やビジネスに多大な影響を与えています。特に、自然言語処理の分野ではChatGPTのような大規模言語モデルが登場し、人間と遜色ないレベルでの対話や文章生成が可能になりました。これにより、カスタマーサポートの自動化、コンテンツ作成の効率化、教育分野での個別学習支援など、様々な応用が期待されます。しかし、AIの利用には倫理的な問題や情報セキュリティのリスクも伴うため、その適切な利用方法や規制の議論も活発に行われています。私たちはAIの可能性を最大限に引き出しつつ、そのリスクを管理し、社会全体で恩恵を享受できる未来を築く必要があります。
`}</ResponseExample>

              <ResponseExample title="ChatGPTの回答">
                <p>AI技術、特にChatGPTのような大規模言語モデルの進化は、生活やビジネスに多大な影響を与えている。対話や文章生成が可能になり、カスタマーサポートやコンテンツ作成などで応用が期待される。しかし、倫理やセキュリティのリスクも伴うため、適切な利用と規制が重要である。</p>
              </ResponseExample>

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>具体的な文字数や行数を指定することで、ChatGPTがより正確に要約の長さを調整できます。</li>
                  <li>要約の目的（例：SNS投稿用、社内報告用など）を追記すると、文体や含めるべき情報の優先順位を調整しやすくなります。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト2 */}
            <div id="prompt2">
              <h3>プロンプト2：目的・視点指定型要約</h3>

              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                特定の目的や視点に基づいて、元の文章から必要な情報だけを抽出・整理した要約文が生成されます。例えば、「営業担当者向けに、顧客の課題と解決策に焦点を当てて要約」といった具体的な指示が可能です。
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                特定の情報だけを効率的に把握したい場合や、異なる部署や役割のメンバーに情報を共有する際に最適です。例えば、経営層向けの報告書、開発チーム向けの技術概要、マーケティングチーム向けの市場動向分析などに活用できます。
              </PromptInfoCard>

              <PromptBlock title="プロンプト">{`あなたは〇〇（役割）です。以下の文章を〇〇（目的）の視点から要約してください。

【文章】
`}</PromptBlock>

              <ResponseExample title="ChatGPTの回答例">{`あなたはプロジェクトマネージャーです。以下の会議議事録を、次回の会議で議論すべき「課題」と「決定事項」に焦点を当てて要約してください。

【文章】
2026年3月5日開催のプロジェクト定例会議議事録

**出席者**: 山田（PM）、佐藤（開発）、田中（営業）、鈴木（デザイン）

**議題1: フェーズ1開発進捗報告**
*   佐藤より、開発は予定通り進行中。ただし、一部の機能で技術的な課題が発生しており、解決に時間を要する見込み。
*   具体的には、外部APIとの連携部分でデータ形式の不整合が判明。佐藤は、代替案として内部処理でのデータ変換を提案。
*   山田は、この課題が全体のスケジュールに与える影響を懸念。佐藤は、最大で3日の遅延が発生する可能性があると報告。

**議題2: マーケティング戦略の検討**
*   田中より、新機能のリリースに向けたマーケティング戦略案を提示。ターゲット層は20代〜30代のビジネスパーソン。
*   SNS広告とインフルエンサーマーケティングを主軸とする計画。予算は50万円。
*   鈴木は、デザインチームとして広告クリエイティブの制作に着手済みであることを報告。A/Bテストの実施を提案。
*   山田は、マーケティング戦略の承認。ただし、費用対効果の検証を徹底するよう指示。

**議題3: 次回アクションプラン**
*   佐藤は、API連携の技術課題について、データ変換の実装を本日中に開始し、明日までに進捗を報告する。
*   田中は、SNS広告の出稿準備を進め、来週中にインフルエンサーとの契約を完了させる。
*   鈴木は、A/Bテスト用の広告クリエイティブを3パターン作成し、来週の会議で共有する。
*   山田は、全体のスケジュール調整を行い、必要であれば関係者と共有する。

**決定事項**
*   マーケティング戦略案を承認。
*   API連携の技術課題は内部処理でのデータ変換で対応。
*   A/Bテストの実施。

**次回会議**: 2026年3月12日（木）10:00〜
`}</ResponseExample>

              <ResponseExample title="ChatGPTの回答">
                <p><strong>課題</strong></p>
                <ul>
                  <li>外部API連携におけるデータ形式の不整合が発生し、最大3日の開発遅延の可能性。</li>
                </ul>
                <p><strong>決定事項</strong></p>
                <ul>
                  <li>マーケティング戦略案を承認。</li>
                  <li>API連携の技術課題は内部処理でのデータ変換で対応。</li>
                  <li>A/Bテストの実施。</li>
                </ul>
                <p><strong>次回会議での議論事項</strong></p>
                <ul>
                  <li>API連携技術課題の進捗報告。</li>
                  <li>A/Bテスト用広告クリエイティブの共有。</li>
                </ul>
              </ResponseExample>

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>役割と目的を明確にすることで、ChatGPTがその視点に立って情報を取捨選択し、要約してくれます。</li>
                  <li>複数の視点から要約を生成し、比較検討することで、より多角的な情報整理が可能です。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト3 */}
            <div id="prompt3">
              <h3>プロンプト3：箇条書き・表形式要約</h3>

              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                元の文章の内容を箇条書きや表形式で整理し、視覚的に分かりやすい形で要約文が生成されます。複雑な情報や比較検討が必要な情報を整理するのに適しています。
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                製品の機能比較、イベントのスケジュール、複数の候補のメリット・デメリット、調査結果のまとめなど、情報を構造化して提示したい場合に最適です。プレゼンテーション資料や報告書の作成時に役立ちます。
              </PromptInfoCard>

              <PromptBlock title="プロンプト">{`以下の文章を箇条書き（または表形式）で要約してください。

【文章】
`}</PromptBlock>

              <ResponseExample title="ChatGPTの回答例">{`以下の文章を表形式で要約してください。

【文章】
当社は、新製品Aと新製品Bの2つの開発プロジェクトを進めています。新製品Aは、高性能なAIチップを搭載し、画像認識と音声認識に特化しています。開発期間は12ヶ月、開発費用は5億円を見込んでいます。主なターゲット顧客は、製造業における品質検査部門と、セキュリティ業界の監視システムです。一方、新製品Bは、省電力設計のIoTデバイスであり、環境センサーとデータ収集機能が特徴です。開発期間は8ヶ月、開発費用は3億円を予定しています。主なターゲット顧客は、農業分野におけるスマート農業システムと、スマートシティにおける環境モニタリングです。両製品ともに市場からの期待は高く、今後の成長が期待されます。
`}</ResponseExample>

              <ResponseExample title="ChatGPTの回答">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">項目</th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">新製品A</th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">新製品B</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><strong>特徴</strong></td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">高性能AIチップ、画像・音声認識に特化</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">省電力IoTデバイス、環境センサー、データ収集</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><strong>開発期間</strong></td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12ヶ月</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8ヶ月</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><strong>開発費用</strong></td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5億円</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3億円</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><strong>ターゲット</strong></td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">製造業の品質検査、セキュリティ監視システム</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">農業のスマート農業、スマートシティの環境モニタリング</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </ResponseExample>

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>箇条書きや表形式を指定することで、ChatGPTが情報を構造化して整理してくれます。</li>
                  <li>比較したい項目や、情報の種類を具体的に指示すると、より精度の高い表を作成できます。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト4 */}
            <div id="prompt4">
              <h3>プロンプト4：専門家視点での詳細要約</h3>

              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                特定の分野の専門家としての視点から、元の文章を詳細に分析し、専門用語を交えながらも分かりやすく要約してくれます。専門的な知識が求められる文章の理解を深めるのに役立ちます。
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                学術論文、技術レポート、法律文書、医療情報など、専門性の高い文章の内容を深く理解したい場合に最適です。特定の分野の知識がない人が、専門的な情報を効率的にインプットする際に活用できます。
              </PromptInfoCard>

              <PromptBlock title="プロンプト">{`あなたは〇〇（専門分野）の専門家です。以下の文章を、その分野の専門家としての視点から詳細に要約してください。専門用語は適宜解説を加えてください。

【文章】
`}</PromptBlock>

              <ResponseExample title="ChatGPTの回答例">{`あなたはサイバーセキュリティの専門家です。以下のニュース記事を、その分野の専門家としての視点から詳細に要約してください。専門用語は適宜解説を加えてください。

【文章】
最近、ある企業で大規模なデータ漏洩が発生しました。原因は、従業員がフィッシングメールによって認証情報を詐取され、その情報が悪意のある第三者に利用されたこととされています。攻撃者は、盗んだ認証情報を用いて社内ネットワークに不正アクセスし、顧客データベースから個人情報を窃取しました。この事件を受けて、同社は多要素認証（MFA）の導入を急ぐとともに、従業員へのセキュリティ教育を強化する方針を発表しました。専門家は、このような攻撃は今後も増加する傾向にあるため、企業はより強固なセキュリティ対策を講じる必要があると警鐘を鳴らしています。
`}</ResponseExample>

              <ResponseExample title="ChatGPTの回答">
                <p>サイバーセキュリティの観点から、今回のデータ漏洩事件は「フィッシング攻撃」が起点となっています。フィッシング攻撃とは、偽のメールやウェブサイトを用いてユーザーから認証情報（IDやパスワードなど）を騙し取る手口です。攻撃者は、詐取した認証情報で企業の「社内ネットワーク」に「不正アクセス」し、顧客の「個人情報」を窃取しました。</p>
                <p>この種の攻撃は「ソーシャルエンジニアリング」の一種であり、技術的な脆弱性だけでなく、人間の心理的な隙を突く点が特徴です。対策として、企業は「多要素認証（MFA）」の導入を急いでいます。MFAとは、パスワードだけでなく、スマートフォンアプリで生成されるワンタイムパスワードや生体認証など、複数の認証要素を組み合わせてセキュリティを強化する仕組みです。これにより、たとえパスワードが漏洩しても、不正アクセスを防ぐことが可能になります。また、従業員への「セキュリティ教育」の強化も不可欠です。従業員一人ひとりがセキュリティ意識を高め、不審なメールやリンクに注意することが、組織全体のセキュリティレベル向上に繋がります。</p>
                <p>専門家は、今後も同様の攻撃が増加すると予測しており、企業は技術的対策と人的対策の両面から、より包括的なセキュリティ戦略を構築する必要があることを示唆しています。</p>
              </ResponseExample>

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>専門分野を具体的に指定することで、ChatGPTがその分野の知識を動員して要約してくれます。</li>
                  <li>専門用語の解説を求めることで、その分野に詳しくない人でも内容を理解しやすくなります。</li>
                </ul>
              </PromptInfoCard>
            </div>
          </section>

          {/* 活用のコツセクション */}
          <section id="tips">
            <h2>プロンプトをさらに活用するコツ</h2>
            <p>紹介したプロンプトの効果をさらに高めるためのコツをご紹介します。</p>
            <ul>
              <li><strong>要約の粒度を調整する</strong>: 「〇〇字で」「〇〇の視点から」など、要約の粒度を具体的に指示することで、より目的に合った要約文を得られます。</li>
              <li><strong>複数回要約を試す</strong>: 一度で完璧な要約が得られない場合でも、プロンプトを微調整したり、異なるプロンプトを試したりすることで、より良い結果に繋がります。</li>
              <li><strong>要約後の活用方法を考える</strong>: 要約した情報をどのように活用するかを明確にすることで、要約の質を高めることができます。例えば、「この要約を元にプレゼン資料を作成する」といった具体的な指示が有効です。</li>
            </ul>
            <p>ChatGPT Plus（有料版）を利用すれば、より長い文章の要約や、複雑な指示にも対応できます。GPT-4モデルは、より高度な文章理解力と生成能力を持ち合わせているため、質の高い要約を効率的に生み出すことができます。</p>
          </section>

          {/* CTA */}
          <AffiliateBox
            title="ChatGPT Plusでさらに高精度な要約を"
            description="月額20ドルでGPT-4が使い放題。より長い文章や複雑な内容も、正確かつ効率的に要約できます。"
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
                <li className="flex gap-2"><span>•</span>AIの回答は完璧ではありません。生成された要約は必ず内容を確認し、必要に応じて修正してください。</li>
                <li className="flex gap-2"><span>•</span>重要な情報整理や意思決定に利用する際は、特に慎重に内容をチェックしましょう。</li>
                <li className="flex gap-2"><span>•</span>機密情報や個人情報を含む内容を入力する際は、会社のセキュリティポリシーを確認してください。</li>
                <li className="flex gap-2"><span>•</span>生成された要約の最終的な責任は利用者にあります。</li>
              </ul>
            </div>
          </section>

          {/* まとめ */}
          <section id="summary">
            <h2>まとめ</h2>
            <p>この記事では、ChatGPTで要約文を作成するための4つのプロンプトをご紹介しました。</p>
            <ul>
              <li><strong>文字数指定型要約</strong>: 特定の文字数制限がある中で簡潔にまとめたいときに</li>
              <li><strong>目的・視点指定型要約</strong>: 特定の目的や視点から必要な情報だけを抽出したいときに</li>
              <li><strong>箇条書き・表形式要約</strong>: 複雑な情報や比較検討が必要な情報を視覚的に整理したいときに</li>
              <li><strong>専門家視点での詳細要約</strong>: 専門性の高い文章の内容を深く理解したいときに</li>
            </ul>
            <p>どのプロンプトもコピペするだけですぐに使えます。長文読解や情報整理に行き詰まった際は、ぜひ今日からChatGPTを活用して、効率的な情報インプットを実現しましょう。</p>
          </section>

          <RelatedArticles articles={relatedArticles} />
        </ArticleContent>
      </div>
    </PageLayout>
  );
}
