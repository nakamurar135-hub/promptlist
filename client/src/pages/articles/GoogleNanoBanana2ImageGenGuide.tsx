
import PageLayout from "@/components/layout/PageLayout";
import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleContent from "@/components/article/ArticleContent";
import TableOfContents from "@/components/article/TableOfContents";
import PromptBlock from "@/components/article/PromptBlock";
import PromptInfoCard from "@/components/article/PromptInfoCard";
import ResponseExample from "@/components/article/ResponseExample";
import AffiliateBox from "@/components/article/AffiliateBox";
import RelatedArticles from "@/components/article/RelatedArticles";
import { AlertTriangle, Lightbulb } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";
import { useStructuredData } from "@/hooks/useStructuredData";

const tocItems = [
  { id: "intro", label: "Google Nano Banana 2とは？" },
  { id: "diff-from-old-ai", label: "これまでのAIとの違い" },
  { id: "magic-prompt", label: "魔法のプロンプト構成" },
  { id: "text-in-image", label: "文字を正しく入れるコツ" },
  { id: "google-search-link", label: "Google検索連携の活用" },
  { id: "expected-effect", label: "期待される効果" },
];

const relatedArticles = [
  {
    title: "ChatGPT初心者向け完全活用ガイド",
    href: "/articles/chatgpt-beginner-guide",
    description: "ChatGPTの基本から応用まで。AI活用の基礎知識を習得できます。",
  },
  {
    title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集",
    href: "/articles/chatgpt-question-template",
    description: "効果的なプロンプト作成方法。画像生成AIの指示にも応用可能です。",
  },
  {
    title: "LLM構造化出力（Structured Output）実践ガイド",
    href: "/articles/llm-structured-output-guide",
    description: "AIの回答をJSONで確実に受け取るための技術。より高度なAI活用に役立ちます。",
  },
];

export default function GoogleNanoBanana2ImageGenGuide() {
  useSEO({
    title: "Google Nano Banana 2 画像生成プロンプトガイド｜無料AIで理想の画像を",
    description: "Googleの最新無料AI「Nano Banana 2」を使って、高品質な画像を生成するためのプロンプトガイド。初心者でも簡単に使える魔法のテンプレートとコツを解説。",
    keywords: "Google Nano Banana 2,画像生成AI,無料AI,プロンプト,AI活用,初心者,画像作成,SNS画像,マーケティング画像",
  });
  useOGP({
    title: "Google Nano Banana 2 画像生成プロンプトガイド｜無料AIで理想の画像を",
    description: "Googleの最新無料AI「Nano Banana 2」を使って、高品質な画像を生成するためのプロンプトガイド。初心者でも簡単に使える魔法のテンプレートとコツを解説。",
    type: "article",
        image: "https://promptlist.jp/images/og-image-nano-banana-2.png", 
    url: "https://promptlist.jp/articles/google-nano-banana-2-image-gen-guide",
  });
  useStructuredData({
    title: "Google Nano Banana 2 画像生成プロンプトガイド｜無料AIで理想の画像を",
    description: "Googleの最新無料AI「Nano Banana 2」を使って、高品質な画像を生成するためのプロンプトガイド。初心者でも簡単に使える魔法のテンプレートとコツを解説。",
    author: "Manus AI",
    datePublished: "2026-03-29T00:00:00Z",
    dateModified: "2026-03-29T00:00:00Z",
        image: "https://promptlist.jp/images/og-image-nano-banana-2.png",
    url: "https://promptlist.jp/articles/google-nano-banana-2-image-gen-guide",
  });

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <ArticleHeader
          title="【初心者向け】Googleの最新無料AI「Nano Banana 2」で理想の画像を生成するプロンプトガイド"
          description="Googleが無料公開した最新画像生成AI「Nano Banana 2」を使いこなし、思い通りの画像を生成するための完全ガイド。プロンプトの基本から応用まで、初心者でも失敗しないコツを徹底解説します。"
          category="AI活用"
          categoryColor="#FF5722"
          publishedAt="2026年3月29日"
          readingTime="約10分"
        />

        <TableOfContents items={tocItems} />

        <ArticleContent>
          {/* 導入セクション */}
          <section id="intro">
            <h2>Google Nano Banana 2とは？</h2>
            <p>Googleが最新の画像生成AI「Nano Banana 2」を無料ユーザー向けに一般開放しました。このモデルは、これまで有料版でしか利用できなかった「Pro品質」の画像を、驚異的なスピードで生成できるのが特徴です。特に、従来のAIが苦手としていた「画像内の文字を正しく描くこと」や「実在する製品を正確に描写すること」が大幅に改善されています。</p>
            <p>本ガイドでは、この画期的なAIを最大限に活用し、あなたのイメージ通りの画像を生成するためのプロンプト作成術を、初心者にも分かりやすく解説します。</p>
          </section>

          {/* これまでのAIとの違い */}
          <section id="diff-from-old-ai">
            <h2>これまでのAIとの違い</h2>
            <p>Nano Banana 2が従来の画像生成AIと一線を画す点は、以下の通りです。</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>画像内の文字を正しく描画：</strong>「SALE」や「OPEN」といった文字を、画像内で自然かつ正確に表現できるようになりました。</li>
              <li><strong>実在する製品やブランドの正確な描写：</strong>特定のスマートフォンや有名ブランドのロゴなど、現実世界のオブジェクトをより忠実に再現できます。</li>
              <li><strong>驚異的な生成速度：</strong>高品質な画像を、待つことなく瞬時に生成することが可能です。</li>
              <li><strong>無料でのPro品質提供：</strong>これまで有料プランでしか利用できなかったレベルの画像を、無料で手軽に利用できます。</li>
            </ul>
            <div className="flex gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg dark:bg-blue-900/20 dark:border-blue-800 my-6">
              <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5 dark:text-blue-400" />
              <div>
                <p className="font-semibold text-blue-900 dark:text-blue-200">Nano Banana 2の革新性</p>
                <p className="text-sm text-blue-800 dark:text-blue-300 mt-1">
                  このAIは、単に画像を生成するだけでなく、より実用的でビジネスシーンにも活用できるレベルに到達しました。特に、文字の正確な描画は、広告バナーやSNS投稿画像作成において大きなアドバンテージとなります。
                </p>
              </div>
            </div>
          </section>

          {/* 魔法のプロンプト構成 */}
          <section id="magic-prompt">
            <h2>魔法のプロンプト構成：初心者でも失敗しないテンプレート</h2>
            <p>思い通りの画像を生成するための基本は、明確で具体的なプロンプトです。以下のテンプレートを使えば、初心者でも簡単に高品質な画像を生成できます。</p>
            <PromptBlock title="基本プロンプトテンプレート">{`[対象] + [動作/状態] + [背景] + [画風]`}</PromptBlock>
            <PromptInfoCard type="tips" title="テンプレート活用のコツ">
              <ul className="space-y-1 list-disc list-inside">
                <li><strong>[対象]:</strong> 何を描きたいかを具体的に指定します。（例: 「笑顔の女性」「未来的なロボット」）</li>
                <li><strong>[動作/状態]:</strong> 対象が何をしているか、どのような状態かを記述します。（例: 「コーヒーを飲んでいる」「空を飛んでいる」）</li>
                <li><strong>[背景]:</strong> シーンの場所や雰囲気を設定します。（例: 「賑やかなカフェ」「夕焼けのビーチ」）</li>
                <li><strong>[画風]:</strong> 画像のスタイルを指定します。（例: 「水彩画風」「サイバーパンク風」「写真のようにリアルな」）</li>
              </ul>
            </PromptInfoCard>
            <PromptBlock title="プロンプト例">{`笑顔の女性が、賑やかなカフェでコーヒーを飲んでいる、写真のようにリアルな画像`}</PromptBlock>
            <ResponseExample title="生成画像例">
              <p>上記のプロンプトで生成された画像</p>
            </ResponseExample>
          </section>

          {/* 文字を正しく入れるコツ */}
          <section id="text-in-image">
            <h2>文字を正しく入れるコツ</h2>
            <p>Nano Banana 2の大きな進化点の一つが、画像内の文字描画能力です。以下のコツを参考に、プロンプトで文字を正確に指定しましょう。</p>
            <PromptBlock title="文字指定プロンプト例">{`カフェの窓に「OPEN」と書かれた看板が掲げられている、晴れた日の街角の風景、高精細な写真`}</PromptBlock>
            <PromptInfoCard type="tips" title="文字指定のポイント">
              <ul className="space-y-1 list-disc list-inside">
                <li>文字の内容は明確にダブルクォーテーションで囲む（例: 「"SALE"と書かれた」）</li>
                <li>文字を配置する場所や対象物を具体的に指定する（例: 「看板に」「Tシャツに」）</li>
                <li>フォントやスタイルを指定すると、よりイメージに近づけられます（例: 「手書き風の文字」「ネオンサイン風の文字」）</li>
              </ul>
            </PromptInfoCard>
            <ResponseExample title="生成画像例">
              <p>上記のプロンプトで生成された、文字が正確に描画された画像</p>
            </ResponseExample>
          </section>

          {/* Google検索連携の活用 */}
          <section id="google-search-link">
            <h2>Google検索連携の活用：最新トレンドを画像に反映</h2>
            <p>Nano Banana 2は、Googleの検索データと連携することで、最新のトレンドや実在するオブジェクトの情報を画像生成に活用できます。これにより、「最新のスマートフォンのようなデザイン」や「特定の観光地の雰囲気」など、より具体的な指示が可能になります。</p>
            <PromptBlock title="検索連携プロンプト例">{`2026年最新モデルのスマートフォンを手に持っているビジネスマン、未来的なオフィス、洗練されたデザイン`}</PromptBlock>
            <PromptInfoCard type="usecase" title="活用シーン">
              <ul className="space-y-1 list-disc list-inside">
                <li>最新のファッションやガジェットを取り入れた画像を生成したい時</li>
                <li>特定の場所や建築物の特徴を正確に反映させたい時</li>
                <li>マーケティング資料やプレゼンテーションで、リアルな製品イメージが必要な時</li>
              </ul>
            </PromptInfoCard>
            <ResponseExample title="生成画像例">
              <p>最新のスマートフォンを反映した画像</p>
            </ResponseExample>
          </section>

          {/* 期待される効果 */}
          <section id="expected-effect">
            <h2>期待される効果</h2>
            <p>このガイドを活用することで、初心者の皆様は以下の効果を期待できます。</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>AI活用のハードル低下：</strong>「AIでこんなに簡単に、しかも無料で綺麗な画像が作れるんだ！」という成功体験を通じて、AI活用への心理的ハードルが下がります。</li>
              <li><strong>高品質な画像を手軽に生成：</strong>プロンプトのコツを掴むことで、SNS投稿、ブログ記事、プレゼンテーション資料など、様々な用途で使える高品質な画像を迅速に作成できます。</li>
              <li><strong>創造性の向上：</strong>AIとの対話を通じて、新たなアイデアや表現方法を発見し、自身の創造性をさらに高めることができます。</li>
            </ul>
            <div className="flex gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg dark:bg-yellow-900/20 dark:border-yellow-800 my-6">
              <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5 dark:text-yellow-400" />
              <div>
                <p className="font-semibold text-yellow-900 dark:text-yellow-200">注意点</p>
                <p className="text-sm text-yellow-800 dark:text-yellow-300 mt-1">
                  AIが生成する画像は、プロンプトの内容やAIの学習データに依存します。意図しない結果になる場合もありますが、プロンプトを調整することで改善が期待できます。また、著作権や肖像権には十分注意し、商用利用の際は各サービスの利用規約を確認してください。
                </p>
              </div>
            </div>
          </section>

          <AffiliateBox
            title="Google AI Studioで画像生成を試そう"
            description="Google AI Studioを使えば、Nano Banana 2を含む最新のGoogle AIモデルを無料で試すことができます。"
            buttonText="Google AI Studioを開く"
            buttonHref="https://aistudio.google.com/"
          />
          <RelatedArticles articles={relatedArticles} />
        </ArticleContent>
      </div>
    </PageLayout>
  );
}
