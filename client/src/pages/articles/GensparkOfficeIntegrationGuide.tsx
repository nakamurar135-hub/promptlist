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
  { id: "introduction", label: "パワポやExcelにAIが常駐！『Genspark Workspace 4.0』登場" },
  { id: "what-is-genspark-4", label: "ブラウザ不要！Officeと一体化した「Genspark 4.0」とは？" },
  { id: "why-it-helps-beginners", label: "初心者にこそ『Genspark Workspace』がおすすめな理由" },
  { id: "how-to-use", label: "「画面内」で完結！AI社員への頼み方3つのステップ" },
  { id: "prompt-examples", label: "今すぐ使えるプロンプト活用例" },
  { id: "summary", label: "まとめ" },
  { id: "news-sources", label: "ニュースソース" },
];

const relatedArticles = [
  {
    title: "【初心者向け】もう「コピペ」で悩まない！Geminiの『ファイル直接生成』で資料を即ダウンロードするプロンプト術",
    href: "/articles/gemini-file-generation",
    description: "Geminiの新機能を使って、プロンプト一つでWordやPDFファイルを直接生成・ダウンロードする方法を解説",
  },
  {
    title: "Excelの「面倒な作業」をAIが自動完結！Copilotの『エンドツーエンド業務自動化』プロンプト術",
    href: "/articles/copilot-excel-automation",
    description: "Excelのデータ処理をCopilotで自動化し、複雑な集計や分析を効率化する方法を紹介",
  },
];

export default function GensparkOfficeIntegrationGuide() {
  const title = "【初心者向け】パワポやExcelにAIが常駐！『Genspark Workspace 4.0』で資料作成を「AI社員」に任せるプロンプト術";
  const description = "2026年4月に登場した「Genspark Workspace 4.0」。PowerPointやExcelの画面内でAIと対話しながら資料を完成させる、初心者向けの「AI共作」術を解説。ブラウザとの行き来をゼロにする最新の仕事術を紹介します。";
  const keywords = "Genspark, Genspark Workspace 4.0, PowerPoint, Excel, AI活用, 資料作成, 初心者, プロンプト, 業務効率化";

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
    datePublished: "2026-05-01T00:00:00Z",
    dateModified: "2026-05-01T00:00:00Z",
  });

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <ArticleHeader
          title={title}
          description={description}
          category="ビジネス効率化"
          categoryColor="#FF9800"
          publishedAt="2026年5月1日"
          readingTime="約8分"
        />
        <TableOfContents items={tocItems} />
        <ArticleContent>
          <section id="introduction">
            <h2>パワポやExcelにAIが常駐！『Genspark Workspace 4.0』登場</h2>
            <p>
              「パワーポイントのスライドを作るのに何時間もかかってしまう...」<br />
              「エクセルの関数がわからなくて、いちいちブラウザで調べてコピペするのが面倒」
            </p>
            <p>
              そんな資料作成の悩みを、AIが「画面の中から」解決してくれる時代が来ました。
            </p>
            <p>
              2026年4月にリリースされた<strong>『Genspark Workspace 4.0』</strong>は、Microsoft OfficeソフトにAIが直接入り込む「ネイティブ統合」を実現しました。もうブラウザを開き直す必要はありません。あなたの隣に座る「AI社員」に頼む感覚で、資料作成を爆速化させる方法を解説します。
            </p>
          </section>
          <section id="what-is-genspark-4">
            <h2>ブラウザ不要！Officeと一体化した「Genspark 4.0」とは？</h2>
            <p>
              Genspark Workspace 4.0の最大の特徴は、新機能「Genspark Claw」によるOfficeソフトとの完全一体化です。
            </p>
            <ul>
              <li><strong>「画面内」で対話</strong>: パワポやエクセルのサイドバーにAIが常駐。</li>
              <li><strong>資料の文脈を理解</strong>: 今開いているスライドや表の内容をAIが自動で読み取ります。</li>
              <li><strong>直接実行</strong>: 「スライドを追加して」と頼めば、AIが実際に新しいスライドを作成します。</li>
              <li><strong>マルチモーダル対応</strong>: 図解の配置やグラフのデザインなど、視覚的な指示も通じます。</li>
            </ul>
          </section>
          <section id="why-it-helps-beginners">
            <h2>初心者にこそ『Genspark Workspace』がおすすめな理由</h2>
            <p>
              「AIへの指示の出し方がわからない」という初心者の方こそ、この「一体型」の恩恵を大きく受けられます。
            </p>
            <PromptInfoCard type="tips" title="「説明する手間」がゼロになる">
              従来のAIチャットでは、「こういう表があって、ここをこうしたい」と状況を説明するプロンプトを書く必要がありました。Genspark 4.0なら、AIが画面を共有している状態なので、「この表をグラフにして」といった短い指示だけで意図が伝わります。
            </PromptInfoCard>
          </section>
          <section id="how-to-use">
            <h2>「画面内」で完結！AI社員への頼み方3つのステップ</h2>
            <p>Gensparkの基本的な使い方は、たった3ステップです。</p>
            <ol>
              <li>
                <strong>サイドバーでGensparkを起動</strong><br />
                Officeソフト（パワポやエクセル）のメニューからGensparkアイコンをクリックして、サイドバーを表示させます。
              </li>
              <li>
                <strong>今の資料について指示を出す</strong><br />
                「このスライドを要約して」「このデータを分析して」など、今見ている画面に基づいた指示を入力します。
              </li>
              <li>
                <strong>AIの提案を反映・実行させる</strong><br />
                AIが作成した文章やグラフを確認し、「適用」ボタンを押すと資料に直接反映されます。
              </li>
            </ol>
          </section>
          <section id="prompt-examples">
            <h2>今すぐ使えるプロンプト活用例</h2>
            <p>Officeソフトの中でAI社員に指示を出す際の、便利なプロンプト例です。</p>
            <PromptBlock title="PowerPoint：スライドの自動追加">
              {`「このスライドの内容をもとに、補足説明用のスライドをあと2枚追加して。画像も内容に適したものを選んで配置しておいて」`}
            </PromptBlock>
            <PromptBlock title="Excel：データ分析とグラフ作成">
              {`「この範囲のデータを使って、売上の推移がひと目でわかるグラフを作成して。その考察も横のセルに添えておいて」`}
            </PromptBlock>
            <PromptBlock title="Word：文章のブラッシュアップ">
              {`「この企画書の導入部分を、もっと取引先の担当者に刺さるような、説得力のある表現に書き換えて」`}
            </PromptBlock>
          </section>
          <section id="summary">
            <h2>まとめ</h2>
            <p>
              Genspark Workspace 4.0は、AIを「別のツール」として使うのではなく、「いつもの道具」の一部として使う新しい体験を提供します。
            </p>
            <p>
              まずは、いつもの資料作成の途中でサイドバーを開いてみてください。あなたが言葉に詰まったとき、AI社員が即座に助け舟を出してくれるはずです。
            </p>
          </section>
          <section id="news-sources">
            <h2>ニュースソース</h2>
            <ul>
              <li><a href="https://note.com/komon_ai/n/n731afd238802" target="_blank" rel="noopener noreferrer">Genspark 4.0リリース：Microsoft Officeにネイティブプラグインとして統合 - note</a></li>
              <li><a href="https://hinakira.com/blog/genspark-ai-slide-creation/" target="_blank" rel="noopener noreferrer">【2026最新】Gensparkスライド作成の完全手順！AIで資料を自動生成する方法 - hinakira.com</a></li>
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
