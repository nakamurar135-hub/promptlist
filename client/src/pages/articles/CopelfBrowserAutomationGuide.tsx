import PageLayout from "@/components/layout/PageLayout";
import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleContent from "@/components/article/ArticleContent";
import TableOfContents from "@/components/article/TableOfContents";
import PromptBlock from "@/components/article/PromptBlock";
import PromptInfoCard from "@/components/article/PromptInfoCard";
import RelatedArticles from "@/components/article/RelatedArticles";
import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";
import { useStructuredData } from "@/hooks/useStructuredData";

const tocItems = [
  { id: "introduction", label: "もう「クリック」すら不要？ブラウザ操作AI『Copelf』登場" },
  { id: "what-is-copelf", label: "プロンプト不要で自動化できる「Copelf」とは？" },
  { id: "why-it-helps-beginners", label: "初心者にこそ『Copelf』がおすすめな理由" },
  { id: "how-to-use", label: "「録画」して「指示」するだけ！3つのステップ" },
  { id: "prompt-examples", label: "今すぐ使えるプロンプト活用例" },
  { id: "safety-tips", label: "安全に自動化するためのコツ" },
  { id: "summary", label: "まとめ" },
  { id: "news-sources", label: "ニュースソース" },
];

const relatedArticles = [
  {
    title: "【初心者向け】画面上の「これ」をAIが即解決！Windows 11の新機能『Click to Do』活用術",
    href: "/articles/windows-click-to-do-beginner",
    description: "画面内の要素を右クリックするだけでAIが処理を提案してくれる「Click to Do」の活用方法を解説",
  },
  {
    title: "Excelの「面倒な作業」をAIが自動完結！Copilotの『エンドツーエンド業務自動化』プロンプト術",
    href: "/articles/copilot-excel-automation",
    description: "Excelのデータ処理をCopilotで自動化し、複雑な集計や分析を効率化する方法を紹介",
  },
];

export default function CopelfBrowserAutomationGuide() {
  const title = "【初心者向け】もう「クリック」すら不要？ブラウザ操作AI『Copelf』でルーチンワークを自動化するプロンプト術";
  const description = "2026年4月に登場した、プロンプト不要でブラウザ操作を自動化できるAI「Copelf（コペルフ）」。事務作業やデータ収集などの繰り返し作業を、AIに丸投げするための具体的なプロンプトと活用術を初心者向けに解説します。";
  const keywords = "Copelf, ブラウザ操作AI, 自動化, ルーチンワーク, 初心者, プロンプト, 業務効率化, RPA";

  useSEO({
    title: `${title} | AIプロンプト活用ガイド`,
    description,
    keywords,
  });
  useOGP({
    title,
    description,
    type: "article",
  });
  useStructuredData({
    title,
    description,
    author: "AIプロンプト活用ガイド",
    datePublished: "2026-04-29T00:00:00Z",
    dateModified: "2026-04-29T00:00:00Z",
  });

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <ArticleHeader
          title={title}
          description={description}
          category="AI活用"
          categoryColor="#4CAF50"
          publishedAt="2026年4月29日"
          readingTime="約8分"
        />
        <TableOfContents items={tocItems} />
        <ArticleContent>
          <section id="introduction">
            <h2>もう「クリック」すら不要？ブラウザ操作AI『Copelf』登場</h2>
            <p>
              「毎日同じウェブサイトを開いて、同じ情報を入力する作業が苦痛...」<br />
              「データ収集のためにいくつものページを行き来するのが面倒...」
            </p>
            <p>
              そんな繰り返しのブラウザ操作に悩んでいる方に朗報です。2026年4月に登場した「Copelf（コペルフ）」は、あなたのブラウザ操作を「見て覚えて」、その後は自動でこなしてくれるAIです。
            </p>
          </section>
          <section id="what-is-copelf">
            <h2>プロンプト不要で自動化できる「Copelf」とは？</h2>
            <p>
              Copelfは、従来のRPA（ロボティック・プロセス・オートメーション）ツールとは一線を画す新しいブラウザ自動化AIです。最大の特徴は、<strong>「一度操作を録画するだけで、あとはAIが文脈を理解して自動実行してくれる」</strong>点です。
            </p>
            <PromptInfoCard type="tips" title="Copelfが従来ツールと違う点">
              従来の自動化ツールは「このボタンをクリック→この欄に入力」という手順を細かく設定する必要がありました。Copelfは、あなたの操作を見ながら「何をしたいのか」という意図を学習するため、ページのデザインが少し変わっても柔軟に対応できます。
            </PromptInfoCard>
          </section>
          <section id="why-it-helps-beginners">
            <h2>初心者にこそ『Copelf』がおすすめな理由</h2>
            <p>
              「自動化ツールは難しそう」と感じる方にこそ、Copelfはおすすめです。なぜなら、複雑なプログラミングや設定が一切不要だからです。
            </p>
            <PromptInfoCard type="usecase" title="こんな作業を自動化できます">
              <ul>
                <li>競合他社のウェブサイトから価格情報を定期的に収集してスプレッドシートに記録する</li>
                <li>複数の問い合わせフォームに同じ情報を繰り返し入力する</li>
                <li>特定のニュースサイトから毎朝キーワードに関する記事をピックアップする</li>
                <li>ECサイトの在庫状況を定期的にチェックして変化があれば通知する</li>
              </ul>
            </PromptInfoCard>
          </section>
          <section id="how-to-use">
            <h2>「録画」して「指示」するだけ！3つのステップ</h2>
            <p>Copelfの基本的な使い方は、たった3ステップです。</p>
            <ol>
              <li><strong>操作を録画する</strong>：自動化したいブラウザ操作を一度だけ実際に行い、Copelfに録画させます。</li>
              <li><strong>指示を自然言語で補足する</strong>：「この作業を毎日9時に実行して」「データは新しいシートに追記して」など、追加の条件を日本語で伝えます。</li>
              <li><strong>あとはAIにおまかせ</strong>：設定した条件に従って、Copelfが自動でブラウザを操作し、タスクを完了させます。</li>
            </ol>
          </section>
          <section id="prompt-examples">
            <h2>今すぐ使えるプロンプト活用例</h2>
            <p>Copelfに指示を出す際の具体的なプロンプト例です。録画後の補足指示として活用してください。</p>
            <PromptBlock title="データ収集と記録の自動化">
              {`「さっき録画した手順で、競合他社の新製品価格をチェックして、スプレッドシートの末尾に追記しておいて」`}
            </PromptBlock>
            <PromptBlock title="定期的な情報収集">
              {`「毎日朝9時に、このニュースサイトから『AI』に関する記事だけをピックアップしてSlackに送って」`}
            </PromptBlock>
            <PromptBlock title="フォーム入力の自動化">
              {`「このExcelリストにある名前と住所を、さっき録画した問い合わせフォームに一件ずつ入力して送信しておいて」`}
            </PromptBlock>
          </section>
          <section id="safety-tips">
            <h2>安全に自動化するためのコツ</h2>
            <p>便利なCopelfですが、自動化する際にはいくつかの点に注意が必要です。</p>
            <PromptInfoCard type="response" title="自動化する前に確認すること">
              <ul>
                <li><strong>個人情報の取り扱い</strong>：氏名・住所・クレジットカード番号などの個人情報を含む操作を自動化する際は、データの保存場所とアクセス権限を必ず確認しましょう。</li>
                <li><strong>利用規約の確認</strong>：ウェブサイトによっては、自動化ツールによるアクセスを禁止している場合があります。対象サイトの利用規約を事前に確認してください。</li>
                <li><strong>最初は少量でテスト</strong>：大量のデータを処理する前に、少量のデータで正しく動作するかテストすることをおすすめします。</li>
              </ul>
            </PromptInfoCard>
          </section>
          <section id="summary">
            <h2>まとめ</h2>
            <p>
              Copelfは、「自動化したいけど難しそう」という初心者の壁を取り除いてくれる画期的なAIツールです。
            </p>
            <p>
              まずは毎日繰り返している小さなブラウザ操作を一つ選んで、Copelfに任せてみてください。その時間を、より創造的な仕事に使えるようになるはずです。
            </p>
          </section>
          <section id="news-sources">
            <h2>ニュースソース</h2>
            <ul>
              <li><a href="https://note.com/komon_ai/n/n5c5f5a9c0e3d" target="_blank" rel="noopener noreferrer">ブラウザ操作を自動化するAI「Copelf」が登場 - note</a></li>
            </ul>
          </section>
        </ArticleContent>
        <div className="mt-12">
          <RelatedArticles articles={relatedArticles} />
        </div>
      </div>
    </PageLayout>
  );
}
