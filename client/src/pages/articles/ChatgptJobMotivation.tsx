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
import { useOGP } from "@/hooks/useOGP";

const tocItems = [
  { id: "intro", label: "志望動機の作成、どうしていますか？" },
  { id: "points", label: "ChatGPTで志望動機を作るときのポイント" },
  { id: "prompts", label: "志望動機作成プロンプト集" },
  { id: "prompt1", label: "プロンプト1：基本的な志望動機", level: 3 as const },
  { id: "prompt2", label: "プロンプト2：転職理由と志望動機を組み合わせる", level: 3 as const },
  { id: "prompt3", label: "プロンプト3：未経験職種への志望動機", level: 3 as const },
  { id: "prompt4", label: "プロンプト4：志望動機の添削・改善", level: 3 as const },
  { id: "tips", label: "さらに質を高めるコツ" },
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

export default function ChatgptJobMotivation() {
  useSEO({
    title: "ChatGPTで志望動機を書くプロンプト｜転職・就活で使える例文付き",
    description: "転職・就職活動で必要な志望動機の作成をChatGPTでサポートします。あなたの経験や強みを入力するだけで、採用担当者に伝わる志望動機が完成します。",
    keywords: "ChatGPT,志望動機,転職,就活,キャリア,プロンプト,AI,文章作成,採用試験,事会书",
  });
  useOGP({
    title: "ChatGPTで志望動機を書くプロンプト",
    description: "転職・就職活動で使える志望動機の作成をサポート。あなたの経験を効果的にアピール。",
    type: "article",
  });

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <ArticleHeader
          title="ChatGPTで志望動機を書くプロンプト｜転職・就活で使える例文付き"
          description="転職・就職活動で必要な志望動機の作成をChatGPTでサポートします。あなたの経験や強みを入力するだけで、採用担当者に伝わる志望動機が完成します。コピペで使えるプロンプト4選をご紹介。"
          category="キャリア"
          categoryColor="#9C27B0"
          publishedAt="2026年2月7日"
          readingTime="約7分"
        />
        <TableOfContents items={tocItems} />
        <ArticleContent>
          {/* 導入セクション */}
          <section id="intro">
            <h2>志望動機の作成、どうしていますか？</h2>
            <p>「志望動機を書こうとするけど、何を書けばいいかわからない...」「自分の経験をどうアピールすればいいか迷う...」「何度書いても、なんだか薄い内容になってしまう...」</p>
            <p>転職活動や就職活動で避けて通れない志望動機の作成。自分のことを文章にするのは、意外と難しいものです。</p>
            <p>この記事では、ChatGPTを使って志望動機を効率的に作成するためのプロンプトを4つご紹介します。あなたの経験や強みを入力するだけで、採用担当者に伝わる志望動機の下書きが作成できます。</p>
          </section>

          {/* ポイントセクション */}
          <section id="points">
            <h2>ChatGPTで志望動機を作るときのポイント</h2>
            <p>ChatGPTで質の高い志望動機を作成するために、以下の3つのポイントを押さえておきましょう。</p>
            <ul>
              <li><strong>自分の情報を詳しく入力する</strong>：職歴・スキル・実績など、具体的な情報を入力するほど、オリジナリティのある志望動機が生成されます。</li>
              <li><strong>応募先の情報も入力する</strong>：会社の特徴・事業内容・求める人物像を入力することで、その会社に合った志望動機が作れます。</li>
              <li><strong>生成後は必ず自分の言葉に直す</strong>：AIが生成した文章はあくまで「下書き」です。自分の言葉に直して、面接でも自信を持って話せる内容にしましょう。</li>
            </ul>
          </section>

          {/* プロンプト集セクション */}
          <section id="prompts">
            <h2>志望動機作成プロンプト集</h2>
            <p>それでは、シーン別にプロンプトをご紹介します。【】内の部分をご自身の情報に書き換えてお使いください。</p>

            {/* プロンプト1 */}
            <div id="prompt1">
              <h3>プロンプト1：基本的な志望動機</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                あなたの経験と応募先企業の特徴を結びつけた、具体的な志望動機が生成されます。「なぜこの会社なのか」が明確に伝わる文章が作成されます。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                転職・就職活動の志望動機を初めて作成するとき、複数の会社に応募していて会社ごとに志望動機を変えたいときに最適です。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`以下の情報をもとに、採用担当者に伝わる志望動機を作成してください。

【私の情報】
・職歴・経験：【これまでの仕事内容や経験年数】
・スキル・強み：【得意なことや資格など】
・実績：【数字で示せる成果があれば】

【応募先の情報】
・会社名・業種：【応募する会社名と業種】
・応募職種：【応募するポジション】
・会社の特徴：【会社のビジョン・事業内容・強みなど】

【志望動機の条件】
・文字数：300〜400字程度
・トーン：誠実・前向き
・強調したいこと：【特にアピールしたいことがあれば】

「なぜこの会社なのか」が明確に伝わる志望動機を作成してください。`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例（営業職への転職の場合）">{`私がこの度、貴社の営業職に応募した理由は、貴社の「顧客に寄り添う営業スタイル」に強く共感したからです。

前職では5年間、IT機器の法人営業に従事し、年間売上目標を3年連続で120%達成してまいりました。この経験を通じて、単に製品を売るのではなく、顧客の課題を深く理解し、最適なソリューションを提案することの重要性を学びました。

貴社は業界でも特に顧客満足度が高く、長期的な関係構築を重視されていると伺っております。私のこれまでの経験と、顧客との信頼関係を大切にする姿勢は、貴社の営業スタイルと合致していると確信しております。

貴社においても、これまでの経験を活かしながら、さらに成長し、貴社の発展に貢献したいと考えております。`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>「年間売上目標を3年連続で120%達成」のように、数字を入れると説得力が増します。</li>
                  <li>「なぜこの会社なのか」を明確にするため、会社の特徴を詳しく入力しましょう。</li>
                  <li>生成後は、自分の言葉に直して面接でも話せるようにしておきましょう。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト2 */}
            <div id="prompt2">
              <h3>プロンプト2：転職理由と志望動機を組み合わせる</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                転職理由を前向きに表現しつつ、応募先への志望動機と自然につながる文章が生成されます。「なぜ前職を辞めるのか」と「なぜこの会社なのか」が一貫したストーリーになります。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                転職活動中で、転職理由と志望動機を一緒に説明する必要があるとき、特に面接での「転職理由を教えてください」という質問への回答を準備したいときに使えます。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`転職理由と志望動機を自然につなげた文章を作成してください。

【転職理由（本音）】：【実際の転職理由を正直に記載】
【転職理由（表向き）】：【面接で話せるポジティブな表現があれば】
【前職での経験・学び】：【前職で得たスキルや気づき】
【応募先への志望動機】：【なぜこの会社・職種に応募するのか】
【将来のキャリアビジョン】：【5年後・10年後にどうなりたいか】

転職理由をネガティブに聞こえないよう、前向きに表現しながら、応募先への志望動機と自然につながる文章（400〜500字）を作成してください。`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例">{`前職では中小企業向けのシステム開発に5年間携わり、要件定義から納品まで一貫して担当してまいりました。多くのプロジェクトを通じて技術力を高める一方で、より大規模なシステム開発に挑戦し、自分のスキルをさらに伸ばしたいという思いが強くなってまいりました。

貴社は国内有数の大手企業向けシステム開発を手がけており、最新技術を積極的に取り入れていることで業界内でも高い評価を受けていると伺っております。前職での経験を活かしながら、より大きなプロジェクトに携わることで、エンジニアとしてさらに成長できると確信しております。

将来的には、プロジェクトマネージャーとしてチームを率い、大規模なシステム開発を成功に導く人材になりたいと考えております。貴社でのキャリアを通じて、その目標を実現したいと思っております。`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>「より大きな挑戦がしたかった」という表現は、ネガティブな転職理由をポジティブに変換する定番の手法です。</li>
                  <li>将来のキャリアビジョンを含めることで、長期的に働く意欲が伝わります。</li>
                  <li>本音の転職理由（人間関係・給与など）は、面接では直接言わないようにしましょう。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト3 */}
            <div id="prompt3">
              <h3>プロンプト3：未経験職種への志望動機</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                未経験であることを正直に認めつつ、これまでの経験で培ったスキルの転用可能性と、学ぶ意欲を前面に出した志望動機が生成されます。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                異業種・異職種への転職、新卒で希望職種の経験がない場合など、未経験での応募が必要なときに使えます。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`未経験職種への志望動機を作成してください。

【現在の職種・経験】：【今の仕事内容と経験年数】
【応募する職種】：【挑戦したい職種】
【応募する理由・きっかけ】：【なぜこの職種に興味を持ったか】
【活かせるスキル・経験】：【現在の職種から転用できるスキルや経験】
【学習・準備状況】：【独学や資格取得など、すでに取り組んでいることがあれば】

未経験であることを正直に認めながら、ポテンシャルと学ぶ意欲が伝わる志望動機（350〜450字）を作成してください。`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例（営業職からWebデザイナーへの転職の場合）">{`現在は営業職として3年間、顧客へのプレゼンテーション資料の作成や、提案書のデザインを担当してまいりました。その中で、視覚的にわかりやすいデザインが顧客の意思決定に大きく影響することを実感し、Webデザインの世界に強い興味を持つようになりました。

Webデザインは未経験ではありますが、この1年間、独学でHTML/CSSを学び、個人ポートフォリオサイトを制作いたしました。また、UIデザインツール「Figma」の基本操作も習得しております。

営業職で培ったユーザー視点での考え方や、顧客の課題を視覚化する力は、Webデザインにも活かせると考えております。貴社のデザインチームで実務を通じてスキルを磨き、ユーザーに価値を届けるデザイナーとして成長したいと考えております。`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>「独学でHTML/CSSを学び、ポートフォリオを制作」のように、具体的な行動を示すことが重要です。</li>
                  <li>前職のスキルとの接点を見つけることで、未経験でも説得力が生まれます。</li>
                  <li>学習状況を具体的に記載するほど、本気度が伝わります。</li>
                </ul>
              </PromptInfoCard>
            </div>

            {/* プロンプト4 */}
            <div id="prompt4">
              <h3>プロンプト4：志望動機の添削・改善</h3>
              <PromptInfoCard type="response" title="どんな回答が返ってくるか">
                自分で書いた志望動機の問題点が指摘され、改善案が提示されます。「なぜ弱いのか」という理由の説明と、具体的な改善文が両方得られます。
              </PromptInfoCard>
              <PromptInfoCard type="usecase" title="こんなときに使おう">
                自分で書いた志望動機をより良くしたいとき、「なんとなく弱い気がする」という直感を具体的な改善につなげたいときに使えます。
              </PromptInfoCard>
              <PromptBlock title="プロンプト">{`以下の志望動機を添削・改善してください。

【現在の志望動機】：
【ここに自分が書いた志望動機を貼り付ける】

【応募先情報】：【会社名・職種・業種】
【強調したいこと】：【特にアピールしたい点があれば】

以下の観点で評価・改善してください：
1. 「なぜこの会社なのか」が明確か
2. 具体的なエピソードや数字が含まれているか
3. 応募先のニーズと自分のスキルが結びついているか
4. 読み手（採用担当者）に伝わりやすい構成か

問題点の指摘と、改善した志望動機の両方を提示してください。`}</PromptBlock>
              <ResponseExample title="ChatGPTの回答例">{`【現在の志望動機の問題点】

① 「なぜこの会社なのか」が不明確
「御社の成長性に魅力を感じました」という表現は、どの会社にでも使える汎用的な表現です。貴社固有の特徴（〇〇事業・〇〇の強みなど）に触れることで、本気度が伝わります。

② 具体的な実績が不足
「営業として頑張ってきました」という表現では、どの程度の成果を出したのかが伝わりません。「年間売上〇〇万円達成」「顧客満足度〇〇%向上」など、数字を加えましょう。

【改善した志望動機】

前職では5年間、中小企業向けのクラウドサービス営業に従事し、担当エリアの売上を2年で1.5倍に伸ばしました。この経験を通じて、顧客の課題を深く理解し、長期的な関係を構築することの重要性を学びました。

貴社は国内でも数少ない〇〇分野に特化したSaaSを展開されており、急成長を続けていると伺っております。私の営業経験と顧客折衝力を活かし、貴社のさらなる成長に貢献したいと考えております。`}</ResponseExample>
              <PromptInfoCard type="tips" title="ポイント解説">
                <ul className="space-y-1 list-disc list-inside">
                  <li>添削プロンプトは「問題点の指摘」と「改善案」の両方を求めることがポイントです。</li>
                  <li>評価観点を明示することで、的確なフィードバックが得られます。</li>
                  <li>改善案を参考にしながら、最終的には自分の言葉で書き直しましょう。</li>
                </ul>
              </PromptInfoCard>
            </div>
          </section>

          {/* 活用のコツセクション */}
          <section id="tips">
            <h2>さらに質を高めるコツ</h2>
            <p>ChatGPTで生成した志望動機をさらに良くするためのコツをご紹介します。</p>
            <ul>
              <li><strong>複数のバリエーションを生成する</strong>：「別のパターンでも作成してください」と指示することで、複数の候補から選べます。</li>
              <li><strong>面接想定で深掘りする</strong>：「この志望動機について、面接でよく聞かれる追加質問と回答例を教えてください」と続けて質問するのも効果的です。</li>
              <li><strong>字数を調整する</strong>：「200字に短くしてください」「もう少し具体的なエピソードを加えて500字にしてください」と指示できます。</li>
            </ul>
          </section>

          {/* CTA */}
          <AffiliateBox
            title="ChatGPT Plusでさらに高品質な志望動機を"
            description="月額20ドルでGPT-4が使い放題。より自然で説得力のある文章生成が可能です。転職活動を本格化させる前に、ぜひ試してみてください。"
            buttonText="ChatGPT Plusを試してみる"
            buttonHref="https://chat.openai.com/auth/login"
            features={[
              "GPT-4モデルが使い放題",
              "より自然で高品質な文章生成",
              "長文の志望動機・職務経歴書にも対応",
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
                <li className="flex gap-2"><span>•</span>AIが生成した志望動機はあくまで「下書き」です。必ず自分の言葉に直して、面接でも自信を持って話せる内容にしてください。</li>
                <li className="flex gap-2"><span>•</span>個人情報（氏名・住所・連絡先など）はChatGPTに入力しないようにしてください。</li>
                <li className="flex gap-2"><span>•</span>生成された文章の内容が事実と異なる場合は、必ず修正してください。虚偽の内容での応募は避けましょう。</li>
                <li className="flex gap-2"><span>•</span>複数の会社に同じ志望動機を使い回すことは避け、各社に合わせてカスタマイズしましょう。</li>
              </ul>
            </div>
          </section>

          {/* まとめ */}
          <section id="summary">
            <h2>まとめ</h2>
            <p>この記事では、ChatGPTを使って志望動機を作成するためのプロンプトを4つご紹介しました。</p>
            <ul>
              <li><strong>基本的な志望動機</strong>：経験と応募先の特徴を結びつける</li>
              <li><strong>転職理由と組み合わせる</strong>：ネガティブな理由をポジティブに変換する</li>
              <li><strong>未経験職種への志望動機</strong>：ポテンシャルと学ぶ意欲を前面に出す</li>
              <li><strong>添削・改善</strong>：自分で書いた文章をさらにブラッシュアップする</li>
            </ul>
            <p>ChatGPTはあくまでも「下書き作成のサポート」として活用してください。最終的には自分の言葉に直し、面接でも自信を持って話せる内容にすることが大切です。転職・就職活動の成功を応援しています。</p>
          </section>

          <RelatedArticles articles={relatedArticles} />
        </ArticleContent>
      </div>
    </PageLayout>
  );
}
