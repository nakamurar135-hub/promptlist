
import PageLayout from "@/components/layout/PageLayout";
import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleContent from "@/components/article/ArticleContent";
import TableOfContents from "@/components/article/TableOfContents";
import PromptBlock from "@/components/article/PromptBlock";
import PromptInfoCard from "@/components/article/PromptInfoCard";
import ResponseExample from "@/components/article/ResponseExample";
import AffiliateBox from "@/components/article/AffiliateBox";
import RelatedArticles from "@/components/article/RelatedArticles";
import { AlertTriangle } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";
import { useStructuredData } from "@/hooks/useStructuredData";


const tocItems = [
  { id: "intro", label: "ChatGPTで翻訳、もう困らない！" },
  { id: "about-chatgpt", label: "ChatGPTとは？初心者向けにわかりやすく解説" },
  { id: "prompts", label: "翻訳に使えるプロンプト4選" },
  { id: "prompt1", label: "プロンプト1：基本翻訳（言語指定）", level: 3 as const },
  { id: "prompt2", label: "プロンプト2：目的・文脈指定型翻訳", level: 3 as const },
  { id: "prompt3", label: "プロンプト3：専門用語・固有名詞対応翻訳", level: 3 as const },
  { id: "prompt4", label: "プロンプト4：複数言語への一括翻訳", level: 3 as const },
  { id: "tips", label: "プロンプトをさらに活用するコツ" },
  { id: "notice", label: "ChatGPT利用時の注意点" },
  { id: "summary", label: "まとめ" },
];

const relatedArticles = [
  {
    title: "ChatGPTで要約文を作成するプロンプト4選｜長文読解・情報整理を効率化",
    href: "/articles/chatgpt-summarize-prompt",
    description: "文字数指定、目的・視点指定、箇条書き・表形式、専門家視点など、長文読解・情報整理を効率化する実践的なプロンプト集です。",
  },
  {
    title: "ChatGPTでアイデア出しをするプロンプト4選｜企画・発想を加速する実践例",
    href: "/articles/chatgpt-ideation-prompt",
    description: "ブレインストーミング、SWOT分析、SCAMPER法、6W2Hなど、企画・発想を加速する実践的なプロンプト集です。",
  },
  {
    title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集",
    href: "/articles/chatgpt-question-template",
    description: "ChatGPTを使いこなすための基本的な質問テクニックを解説。初めての方はまずこちらから。",
  },
];

export default function ChatgptTranslationPrompt() {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <ArticleHeader
          title="ChatGPTで翻訳をするプロンプト4選｜ビジネス・学習で役立つ実践例"
          description="ChatGPTで翻訳をするプロンプトを4つご紹介。言語指定、目的・文脈指定、専門用語・固有名詞対応、複数言語一括翻訳など、ビジネス・学習で役立つ実践的なプロンプト集です。"
          category="翻訳"
          categoryColor="#9C27B0"
          publishedAt="2026年3月5日"
          readingTime="約10分"
        />

        <TableOfContents items={tocItems} />

        <ArticleContent>
          {/* 導入セクション */}
          <section id="intro">
            <h2>ChatGPTで翻訳、もう困らない！</h2>
          </section>

          {/* ChatGPT基礎説明 */}
          <section id="about-chatgpt">
            <h2>ChatGPTとは？初心者向けにわかりやすく解説</h2>
          </section>

          {/* プロンプト解説セクション */}
          <section id="prompts">
            <h2>翻訳に使えるプロンプト4選</h2>

            {/* プロンプト1 */}
            <div id="prompt1">
              <h3>プロンプト1：基本翻訳（言語指定）</h3>

              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                指定した言語に、元の文章を自然な表現で翻訳してくれます。単語やフレーズだけでなく、文脈を考慮した翻訳が可能です。
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                ビジネスメール、Webサイトのコンテンツ、SNS投稿、個人的なメッセージなど、様々なテキストを特定の言語に翻訳したい場合に最適です。基本的な翻訳ニーズに対応できます。
              </PromptInfoCard>

              <PromptBlock title="プロンプト">{`以下の文章を〇〇語に翻訳してください。

【文章】
`}</PromptBlock>

              <ResponseExample title="ChatGPTの回答例">{`以下の文章を英語に翻訳してください。

【文章】
平素より大変お世話になっております。貴社益々ご清栄のこととお慶び申し上げます。さて、先日お問い合わせいただきました新製品の件ですが、詳細資料を添付いたしましたので、ご査収いただけますと幸いです。ご不明な点がございましたら、お気軽にお問い合わせください。今後とも変わらぬご愛顧を賜りますようお願い申し上げます。
`}</ResponseExample>

              <ResponseExample title="ChatGPTの回答">
              </ResponseExample>

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>翻訳したい言語を明確に指定することで、ChatGPTが正確な翻訳を提供します。</li>
                  <li>専門用語や固有名詞が含まれる場合は、事前にその情報を与えることで、より適切な翻訳が得られます。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト2 */}
            <div id="prompt2">
              <h3>プロンプト2：目的・文脈指定型翻訳</h3>

              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                翻訳の目的や文脈（例：ビジネスメール、学術論文、カジュアルな会話など）を指定することで、その状況に合わせた適切なトーンや表現で翻訳してくれます。単なる直訳ではない、より自然で伝わりやすい翻訳が可能です。
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                ビジネス文書、契約書、学術論文、マーケティング資料など、特定の文脈や読者層に合わせた翻訳が必要な場合に最適です。誤解を避け、意図を正確に伝えたい場合に活用できます。
              </PromptInfoCard>

              <PromptBlock title="プロンプト">{`あなたは〇〇（役割）です。以下の文章を〇〇（目的・文脈）として〇〇語に翻訳してください。

【文章】
`}</PromptBlock>

              <ResponseExample title="ChatGPTの回答例">{`あなたはマーケティング担当者です。以下の新製品紹介文を、ターゲット層（20代女性）に響くような、魅力的でカジュアルなトーンの英語に翻訳してください。

【文章】
新登場！「きらめきグロスリップ」で、あなたの唇に魔法をかけましょう。ひと塗りで、ぷるんと潤い、宝石のような輝きを放ちます。ベタつかないのに長時間キープ。全5色展開で、今日の気分に合わせて選べます。今すぐ手に入れて、新しい自分に出会って！
`}</ResponseExample>

              <ResponseExample title="ChatGPTの回答">
              </ResponseExample>

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>翻訳の目的や文脈、ターゲット層を具体的に指示することで、ChatGPTがその状況に最適な表現を選んでくれます。</li>
                  <li>翻訳後の文章がどのような効果を狙っているのか（例：購買意欲を高める、信頼性を伝えるなど）を伝えることも有効です。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト3 */}
            <div id="prompt3">
              <h3>プロンプト3：専門用語・固有名詞対応翻訳</h3>

              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                特定の専門用語や固有名詞が含まれる文章を翻訳する際に、それらの用語を正確に処理し、必要に応じて補足説明を加えてくれます。専門分野の翻訳で特に役立ちます。
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                医療、法律、IT、科学技術などの専門分野の文書、企業名、製品名、人名などの固有名詞が含まれる文章を翻訳する場合に最適です。誤訳や意味の取り違えを防ぎたい場合に活用できます。
              </PromptInfoCard>

              <PromptBlock title="プロンプト">{`以下の文章を〇〇語に翻訳してください。ただし、以下の専門用語/固有名詞は〇〇語で〇〇と表記し、必要であれば簡単な説明を加えてください。

【専門用語/固有名詞リスト】
- 〇〇: 〇〇
- 〇〇: 〇〇

【文章】
`}</PromptBlock>

              <ResponseExample title="ChatGPTの回答例">{`以下の文章を英語に翻訳してください。ただし、以下の専門用語/固有名詞は英語で以下のように表記し、必要であれば簡単な説明を加えてください。

【専門用語/固有名詞リスト】
- SDGs: Sustainable Development Goals (持続可能な開発目標)
- カーボンニュートラル: Carbon Neutrality (温室効果ガスの排出量と吸収量を均衡させること)

【文章】
当社は、SDGs達成に向けた取り組みの一環として、2050年までにカーボンニュートラルを実現することを目標としています。具体的には、再生可能エネルギーの導入拡大、省エネルギー設備の導入、サプライチェーン全体での排出量削減などを推進していきます。
`}</ResponseExample>

              <ResponseExample title="ChatGPTの回答">
              </ResponseExample>

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>専門用語や固有名詞の対訳を事前に与えることで、ChatGPTがそれらを正確に翻訳に反映させることができます。</li>
                  <li>必要に応じて簡単な説明を追記させることで、翻訳後の文章を読む人が専門知識を持っていなくても理解しやすくなります。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト4 */}
            <div id="prompt4">
              <h3>プロンプト4：複数言語への一括翻訳</h3>

              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                一つの文章を複数の指定した言語に一度に翻訳してくれます。多言語対応が必要なコンテンツ作成や、複数の国の関係者への情報共有を効率化できます。
              </PromptInfoCard>

              <PromptInfoCard type="usecase" title="こんなときに使おう">
                グローバル展開するWebサイトの多言語化、多国籍チームへの情報共有、海外向けプレスリリース作成など、複数の言語への翻訳が同時に必要な場合に最適です。作業の効率化と一貫性の確保に役立ちます。
              </PromptInfoCard>

              <PromptBlock title="プロンプト">{`以下の文章を、以下の言語に翻訳してください。

【翻訳言語リスト】
- 〇〇語
- 〇〇語
- 〇〇語

【文章】
`}</PromptBlock>

              <ResponseExample title="ChatGPTの回答例">{`以下の文章を、以下の言語に翻訳してください。

【翻訳言語リスト】
- 英語
- 中国語（簡体字）
- 韓国語

【文章】
この度、新サービス「AIアシスタント」をリリースいたしました。AIがあなたの日常業務をサポートし、生産性向上に貢献します。ぜひ一度お試しください。
`}</ResponseExample>

              <ResponseExample title="ChatGPTの回答">{`英語 (English):
We are pleased to announce the launch of our new service, "AI Assistant." Our AI will support your daily tasks and contribute to increased productivity. Please give it a try!

中国語（粗体字 - Simplified Chinese）:
我们很高兴地宣布，新服务"AI助手"已正式上线。AI将支持您的日常工作，并有助于提高生产力。请务必尝试一下！

韓国語 (Korean):
새로운 서비스 "AI 어시스턴트"를 출시했습니다. AI가 귀하의 일상 업무를 지원하고 생산성 향상에 기여합니다. 꼭 한번 사용해보세요!`}</ResponseExample>

              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>複数の言語を一度に指定することで、個別に翻訳する手間を省き、作業効率を大幅に向上させることができます。</li>
                  <li>各言語の文化的なニュアンスや表現の違いを考慮した翻訳を求める場合は、それぞれの言語に対して個別の指示を追加することも可能です。</li>
                </ul>
              </PromptInfoCard>
            </div>
          </section>

          {/* 活用のコツセクション */}
          <section id="tips">
            <h2>プロンプトをさらに活用するコツ</h2>
            <ul>
              <li><strong>翻訳の精度を確認する</strong>: 特に重要な文書の翻訳では、ChatGPTが生成した翻訳文を必ず人間が確認し、必要に応じて修正してください。専門家によるレビューも検討しましょう。</li>
              <li><strong>フィードバックを繰り返す</strong>: 翻訳結果に不満がある場合は、具体的な改善点を伝えて再度翻訳を依頼することで、より精度の高い翻訳を得られます。</li>
              <li><strong>用語集を活用する</strong>: 頻繁に使う専門用語や固有名詞がある場合は、それらをまとめた用語集をプロンプトに含めることで、翻訳の一貫性を保つことができます。</li>
            </ul>
          </section>

          {/* CTA */}
          <AffiliateBox
            title="ChatGPT Plusでさらに高精度な翻訳を"
            description="月額20ドルでGPT-4が使い放題。より長い文章や複雑な内容も、正確かつ効率的に翻訳できます。"
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
                <li className="flex gap-2"><span>•</span>AIの回答は完璧ではありません。生成された翻訳は必ず内容を確認し、必要に応じて修正してください。</li>
                <li className="flex gap-2"><span>•</span>重要なビジネス文書や契約書、学術論文などに利用する際は、特に慎重に内容をチェックしましょう。</li>
                <li className="flex gap-2"><span>•</span>機密情報や個人情報を含む内容を入力する際は、会社のセキュリティポリシーを確認してください。</li>
                <li className="flex gap-2"><span>•</span>生成された翻訳の最終的な責任は利用者にあります。</li>
              </ul>
            </div>
          </section>

          {/* まとめ */}
          <section id="summary">
            <h2>まとめ</h2>
            <ul>
              <li><strong>基本翻訳（言語指定）</strong>: 様々なテキストを特定の言語に翻訳したいときに</li>
              <li><strong>目的・文脈指定型翻訳</strong>: 特定の文脈や読者層に合わせた翻訳が必要なときに</li>
              <li><strong>専門用語・固有名詞対応翻訳</strong>: 専門分野の文書や固有名詞を含む文章を正確に翻訳したいときに</li>
              <li><strong>複数言語への一括翻訳</strong>: 複数の言語への翻訳が同時に必要なときに</li>
            </ul>
          </section>

          <RelatedArticles articles={relatedArticles} />
        </ArticleContent>
      </div>
    </PageLayout>
  );
}
