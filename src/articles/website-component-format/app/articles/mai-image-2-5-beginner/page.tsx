"use client"

import { PageLayout } from "@/components/layout/PageLayout"
import { ArticleHeader } from "@/components/article/ArticleHeader"
import { ArticleContent } from "@/components/article/ArticleContent"
import { TableOfContents } from "@/components/article/TableOfContents"
import { PromptBlock } from "@/components/article/PromptBlock"
import { RelatedArticles } from "@/components/cta/RelatedArticles"
import { useSEO } from "@/hooks/useSEO"
import { useOGP } from "@/hooks/useOGP"
import { useStructuredData } from "@/hooks/useStructuredData"

export default function MaiImage25BeginnerPage() {
  const title = "【初心者向け】センス不要！PowerPointに内蔵された最新AI『MAI-Image 2.5』で「伝わるスライド画像」を作るプロンプト術"
  const description = "Microsoftが2026年6月のBuild 2026で発表した自社開発AI「MAI」シリーズ。PowerPointに搭載された画像生成AI『MAI-Image 2.5』で、デザインセンスに自信がない初心者でもプロ級の素材を作るコツを解説します。"
  const keywords = "PowerPoint, MAI-Image 2.5, AI画像生成, 初心者, プロンプト術, スライド作成, Microsoft Build 2026, AI活用"
  const publishedDate = "2026-07-05T00:00:00Z"
  const modifiedDate = "2026-07-05T00:00:00Z"
  const url = "https://promptlist.jp/articles/mai-image-2-5-beginner"
  const image = "https://promptlist.jp/images/mai-image-2-5-eyecatch.jpg"

  // SEO最適化
  useSEO({ title, description, keywords })
  useOGP({ title, description, type: "article", image, url })
  useStructuredData({
    title,
    description,
    datePublished: publishedDate,
    dateModified: modifiedDate,
    image,
    url,
  })

  const tocItems = [
    { id: "overview", title: "概要" },
    { id: "mai-image-2-5-greatness", title: "パワポの中に「専属絵師」がいる？: 最新AI『MAI-Image 2.5』の凄さ" },
    { id: "how-to-start", title: "ボタンひとつで起動: どこからAIを呼び出すのか、基本操作を解説" },
    { id: "3-elements-prompt", title: "初心者が失敗しない「3要素プロンプト」" },
    { id: "fine-tuning", title: "「スライドに馴染む」ための微調整術" },
    { id: "summary", title: "まとめ" },
  ]

  const relatedArticles = [
    {
      title: "【初心者向け】AIが「考えてから動く」！Gemma 4の『エージェント機能』で頼み事が1回で通じるプロンプト術",
      href: "/articles/gemma-agent-beginner",
    },
    {
      title: "【初心者向け】もう「クリック」すら不要？ブラウザ操作AI『Copelf』でルーチンワークを自動化するプロンプト術",
      href: "/articles/copelf-browser-automation",
    },
    {
      title: "【初心者向け】パワポやExcelにAIが常駐！『Genspark Workspace 4.0』で資料作成を「AI社員」に任せるプロンプト術",
      href: "/articles/genspark-office-integration",
    },
  ]

  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ArticleHeader
          title={title}
          category="初心者向け"
          date="2026.07.05"
          tags={["PowerPoint", "AI画像生成", "MAI-Image", "初心者"]}
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <section id="overview" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                概要
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Microsoftが2026年6月のBuild 2026で発表した自社開発AI「MAI」シリーズ。その中でも、すでにPowerPointに搭載されている画像生成AI『MAI-Image 2.5』が話題です。外部の難しい画像生成ツールを使わなくても、スライド作成中に「こんな画像が欲しい」と入力するだけで、プロ級の素材が手に入ります。デザインセンスに自信がない初心者が、言葉だけで資料を華やかにするコツを解説します。
              </p>
            </section>

            <section id="mai-image-2-5-greatness" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                パワポの中に「専属絵師」がいる？: 最新AI『MAI-Image 2.5』の凄さ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                2026年、Microsoftは自社開発のAIシリーズ「MAI」を発表し、その中でも特に注目を集めているのがPowerPointに統合された画像生成AI『MAI-Image 2.5』です。これまでの画像生成AIは、専門的な知識や複雑なプロンプトが必要とされ、デザインの専門家やAIに精通したユーザーに限られていました。しかし、『MAI-Image 2.5』は、PowerPointのインターフェースから直接アクセスでき、自然言語で指示を出すだけで高品質な画像を生成できるため、誰もが「専属の絵師」を持っているかのようにスライド作成を進めることができます。
              </p>
              <p className="text-[#333333] leading-relaxed mb-4">
                この機能の最大の利点は、デザインスキルや画像編集ソフトの知識がなくても、視覚的に魅力的なスライドを簡単に作成できる点にあります。プレゼンテーションのテーマに合わせたイラスト、グラフの背景、アイコンなど、あらゆる種類の画像を瞬時に生成し、スライドの表現力を飛躍的に向上させることが可能です。
              </p>
            </section>

            <section id="how-to-start" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                ボタンひとつで起動: どこからAIを呼び出すのか、基本操作を解説
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                『MAI-Image 2.5』の起動は非常にシンプルです。PowerPointのメニューバーに新しく追加された「MAI」タブ、または画像を挿入する際に表示される「AI画像生成」オプションからアクセスできます。ここでは、基本的な操作手順を解説します。
              </p>
              <ArticleContent
                content={[
                  "**PowerPointを開く**: 通常通りPowerPointを起動し、スライドを作成するファイルを開きます。",
                  "**AI画像生成機能の選択**: スライド上で画像を挿入したい場所を選択し、リボンメニューの「挿入」タブ内、または新設された「MAI」タブから「AI画像生成」をクリックします。",
                  "**プロンプト入力**: 表示されるダイアログボックスに、生成したい画像のイメージをテキストで入力します。例えば、「未来的な都市の風景」や「ビジネスミーティングのイラスト」など、具体的に描写します。",
                  "**画像生成と挿入**: プロンプトを入力後、「生成」ボタンをクリックすると、数秒で複数の画像候補が表示されます。気に入った画像を選択し、「挿入」をクリックすれば、スライドに画像が配置されます。",
                ]}
              />
              <p className="text-[#333333] leading-relaxed mt-4">
                この手軽さにより、アイデアが浮かんだ瞬間に画像を生成し、スライドに反映させることが可能となり、思考の流れを止めずにクリエイティブな作業に集中できます。
              </p>
            </section>

            <section id="3-elements-prompt" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                初心者が失敗しない「3要素プロンプト」
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                AI画像生成でイメージ通りの結果を得るためには、適切なプロンプトが不可欠です。特に初心者が陥りがちな「漠然とした指示」を避け、具体的な画像を生成するための「3要素プロンプト」を習得しましょう。これは、「何が（主役）」＋「どんな風に（スタイル）」＋「どこで（背景）」の3つの要素を組み合わせる方法です。
              </p>
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-2">
                「何が（主役）」＋「どんな風に（スタイル）」＋「どこで（背景）」
              </h3>
              <ArticleContent
                content={[
                  "**何が（主役）**: 画像の中心となる被写体やオブジェクトを明確に指定します。例: 「ビジネスマン」「猫」「ロケット」",
                  "**どんな風に（スタイル）**: 画像の雰囲気や画風を指示します。例: 「水彩画風」「リアルな写真」「ミニマルなイラスト」「サイバーパンク調」",
                  "**どこで（背景）**: 被写体が置かれる環境や背景を記述します。例: 「オフィス」「森の中」「宇宙空間」「会議室」",
                ]}
              />
              <p className="text-[#333333] leading-relaxed mt-4">
                これらの要素を組み合わせることで、AIはより具体的で意図に沿った画像を生成しやすくなります。
              </p>
              <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-2">
                具体例：ビジネスマン ＋ 水彩画風 ＋ オフィス
              </h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                例えば、「ビジネスマンがオフィスで働いている水彩画風のイラスト」を生成したい場合、以下のようなプロンプトになります。
              </p>
              <PromptBlock
                title="プロンプト例: 水彩画風のビジネスマンがオフィスで働くイラスト"
                prompt="水彩画風のビジネスマンがオフィスで働くイラスト"
              />
              <p className="text-[#333333] leading-relaxed mt-4">
                このプロンプトでは、「ビジネスマン」が主役、「水彩画風」がスタイル、「オフィスで働く」が背景を明確に示しています。これにより、AIは抽象的な「ビジネス」というテーマから、具体的なイメージを生成する精度が格段に向上します。
              </p>
            </section>

            <section id="fine-tuning" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                「スライドに馴染む」ための微調整術
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                生成された画像がスライド全体のデザインやトーンに合わない場合でも、『MAI-Image 2.5』は簡単な微調整機能を提供します。背景の透過、色調の変更、特定の要素の削除など、スライドに自然に馴染ませるための指示の出し方を学びましょう。
              </p>
              <ArticleContent
                content={[
                  "**背景の透過**: 「背景を透明にして」と追記することで、生成された画像の背景を透過させ、既存のスライドデザインに重ねやすくします。",
                  "**色調の調整**: 「暖色系のトーンで」「青を基調とした」など、具体的な色調を指示することで、スライドのカラースキームに合わせることができます。",
                  "**要素の削除・追加**: 「人物を削除して」「左下にグラフを追加して」といった指示で、生成後に不要な要素を削除したり、必要な要素を追加したりすることも可能です。",
                ]}
              />
              <p className="text-[#333333] leading-relaxed mt-4">
                これらの微調整機能を活用することで、AIが生成した画像を単に挿入するだけでなく、スライド全体の統一感を保ちながら、より洗練されたプレゼンテーションを作成できます。
              </p>
            </section>

            <section id="summary" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                まとめ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                2026年、Microsoft PowerPointに搭載された『MAI-Image 2.5』は、スライド作成における画像準備の常識を大きく変えようとしています。もはや、プレゼンテーション資料のためにインターネットでフリー素材を探し回ったり、高価なストックフォトサービスを契約したりする必要はありません。必要な画像を、必要な時に、必要な形で「その場で作る」時代が到来したのです。
              </p>
              <p className="text-[#333333] leading-relaxed mb-4">
                デザインセンスに自信がない初心者でも、本記事で紹介した「3要素プロンプト」と「微調整術」を駆使すれば、誰でもプロ級のビジュアルを持つスライドを作成できます。AIが「絵師」となり、「デザイナー」となることで、私たちはコンテンツの中身、つまり「何を伝えるか」という本質的な部分に、より集中できるようになるでしょう。2026年のビジネスシーンでは、『MAI-Image 2.5』を使いこなすことが、プレゼンテーション成功の鍵となるはずです。
              </p>
            </section>

            <section id="related" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                関連記事
              </h2>
              <RelatedArticles articles={relatedArticles} />
            </section>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>
        </div>
      </article>
    </PageLayout>
  )
}
