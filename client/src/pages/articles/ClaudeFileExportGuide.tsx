import PageLayout from "@/components/layout/PageLayout";
import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleContent from "@/components/article/ArticleContent";
import TableOfContents from "@/components/article/TableOfContents";
import PromptBlock from "@/components/article/PromptBlock";
import RelatedArticles from "@/components/article/RelatedArticles";
import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";
import { useStructuredData } from "@/hooks/useStructuredData";

const tocItems = [
  { id: "introduction", label: "もう「コピペ」で悩まない！Claudeの『ファイル直接生成』とは？" },
  { id: "target-audience", label: "こんな方におすすめ！Claudeのファイル直接生成" },
  { id: "key-points", label: "Claudeファイル直接生成の3つのポイント" },
  { id: "prompt-examples", label: "今すぐ使えるプロンプト活用例" },
  { id: "news-sources", label: "ニュースソース" },
];

const relatedArticles = [
  {
    title: "【初心者向け】もう「コピペ」で悩まない！Geminiの『ファイル直接生成』で資料を即ダウンロードするプロンプト術",
    description: "Geminiのファイル直接生成機能で、AIが作った資料をすぐにダウンロードする方法を解説。",
    href: "/articles/gemini-file-generation",
  },
  {
    title: "【初心者向け】AIがあなたの代わりに「予約」まで完了！最新AIエージェント『Agent i』のおでかけプロンプト術",
    description: "AIエージェントAgent iを活用して、予約などのタスクを自動化するプロンプト術を紹介。",
    href: "/articles/agent-i-travel",
  },
];

export default function ClaudeFileExportGuide() {
  const title = "【初心者向け】もう「コピペ」で悩まない！Claudeの『ファイル直接生成』で書類を即ダウンロードするプロンプト術";
  const description = "2026年5月の最新アップデートにより、AI「Claude（クロード）」がWordやExcel、PowerPoint形式のファイルを直接作成・出力できるようになった機能を活用したガイド。AIが作った文章をコピーして別のソフトに貼り付け、フォントを整えるといった「地味に面倒な作業」をゼロにする、ITに疎い初心者向けの究極の時短術を提案します。";
  const keywords = "Claude, ファイル出力, Word, Excel, PowerPoint, コピペ不要, 書類作成, プロンプト術, 初心者, 時短, 業務効率化, AI活用";
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
    datePublished: "2026-05-03T00:00:00Z",
    dateModified: "2026-05-03T00:00:00Z",
  });
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <ArticleHeader
          title={title}
          description={description}
          category="AI活用"
          categoryColor="#5B9BD5"
          publishedAt="2026年5月3日"
          readingTime="約6分"
        />
        <TableOfContents items={tocItems} />
        <ArticleContent>
          <section id="introduction">
            <h2>もう「コピペ」で悩まない！Claudeの『ファイル直接生成』とは？</h2>
            <p>
              「AIが生成した文章をWordに貼り付けて、体裁を整えるのが面倒...」<br />
              「議事録をAIに作ってもらったけど、どうやってファイルとして保存すればいいの？」
            </p>
            <p>
              そんな風に感じたことはありませんか？これまでは、AIが生成したテキストを別のアプリケーションにコピー＆ペーストし、手動でファイル形式を整えるのが一般的でした。
            </p>
            <p>
              しかし、2026年5月の最新アップデートにより、AI「Claude（クロード）」がWordやExcel、PowerPoint形式のファイルを直接作成・出力できるようになったことで、この常識は覆されました。プロンプト一つで、AIが「完成品」のファイルを直接作成・出力し、ダウンロードまで可能にする画期的な機能です。この記事では、ITに疎い初心者でもすぐに活用できる、この究極の時短術を徹底解説します。
            </p>
          </section>
          <section id="target-audience">
            <h2>こんな方におすすめ！Claudeのファイル直接生成</h2>
            <ul>
              <li>AIで文章は作れるが、その後のWordやExcelへの整形作業に時間がかかっている人</li>
              <li>PCの操作（コピペや書式設定）が苦手で、AIに全部任せたい初心者</li>
              <li>学級通信や地域の案内、簡単な集計表などをサクッと作りたい人</li>
            </ul>
          </section>
          <section id="key-points">
            <h2>Claudeファイル直接生成の3つのポイント</h2>
            <ul>
              <li>
                <strong>「貼り付け・整形」の手間をゼロに</strong>: Claudeなら、指示の最後に「Word形式で出して」と書くだけで、そのまま印刷できるレベルのファイルが手に入ります。
              </li>
              <li>
                <strong>ひな形活用の凄さ</strong>: 自分がいつも使っているWordファイルを先に読み込ませることで、そのデザインを崩さずに内容だけを埋めてもらう「プロ並み」の活用法を紹介します。
              </li>
              <li>
                <strong>Excelも一瞬</strong>: 「行事予定表をExcelで作って」の一言で、色分けされた見やすい表が完成する驚きを体験できます。
              </li>
            </ul>
          </section>
          <section id="prompt-examples">
            <h2>今すぐ使えるプロンプト活用例</h2>
            <p>Claudeにファイル直接生成を依頼する際の具体的なプロンプト例です。コピペして、あなたの業務に役立ててください。</p>
            <PromptBlock title="学級通信をWordファイルで生成">
              {`「学級通信を作りたいです。添付のWordひな形のデザインに合わせて、運動会の思い出を400字程度で書き込み、Wordファイルとして出力してください」`}
            </PromptBlock>
            <PromptBlock title="来月の当番表をExcelファイルで生成">
              {`「来月の当番表をExcelで作ってください。1列目は日付、2列目は名前、3列目は備考にして、1行目には色をつけて見やすくしてください」`}
            </PromptBlock>
          </section>
          <section id="news-sources">
            <h2>ニュースソース</h2>
            <ul>
              <li><a href="https://news.yahoo.co.jp/articles/efa980e3e7f942320c54c9dbcbd5cb075f3d93d3" target="_blank" rel="noopener noreferrer">Word・Excelもそのまま出力、「Claude」でコピペ時間を短縮（こどもとIT） - Yahoo!ニュース</a></li>
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
