import PageLayout from "@/components/layout/PageLayout";
import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleContent from "@/components/article/ArticleContent";
import TableOfContents from "@/components/article/TableOfContents";
import PromptBlock from "@/components/article/PromptBlock";
import PromptInfoCard from "@/components/article/PromptInfoCard";
import RelatedArticles from "@/components/article/RelatedArticles";
import { Lightbulb, Edit3, MessageSquare, CheckCircle } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";
import { useStructuredData } from "@/hooks/useStructuredData";

const tocItems = [
  { id: "intro", label: "AIと「一緒に作る」新体験！ChatGPT Canvasとは？" },
  { id: "features", label: "Canvasでできること：チャットを超えた共同作業" },
  { id: "how-to-use", label: "初心者が今日からできるCanvas活用術3選" },
  { id: "email", label: "1. お礼メールの微調整：一瞬で「親しみやすく」", level: 3 as const },
  { id: "report", label: "2. レポート・ブログの構成：AIと二人三脚で肉付け", level: 3 as const },
  { id: "shopping", label: "3. 献立・買い物リスト：直接編集して自動再計算", level: 3 as const },
  { id: "tips", label: "「とりあえず出して、後で直す」気楽な使い方のススメ" },
  { id: "summary", label: "まとめ" },
];

const relatedArticles = [
  {
    title: "ChatGPT初心者向け完全活用ガイド",
    href: "/articles/chatgpt-beginner-guide",
    description: "AI活用の第一歩、ChatGPTの基本をマスターしましょう。",
  },
  {
    title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集",
    href: "/articles/chatgpt-question-template",
    description: "Canvasへの指示にも役立つプロンプトの基礎。",
  },
];

export default function ChatgptCanvasBeginner() {
  const title = "【初心者向け】AIと「一緒に作る」新体験！ChatGPTの『Canvas』活用術";
  const description = "ChatGPTの新機能「Canvas（キャンバス）」を初心者向けに解説。AIが出した回答を直接編集したり、ピンポイントで指示を出したりできる共同作業スペースの使い方を紹介します。";
  const keywords = "ChatGPT, Canvas, キャンバス, 初心者, 使い方, プロンプト, 文章作成, 資料作成, 共同作業";

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
    datePublished: "2026-04-23T00:00:00Z",
    dateModified: "2026-04-23T00:00:00Z",
  });

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <ArticleHeader
          title={title}
          description="AIに文章を書いてもらっても「ここだけ直したい」と思うことはありませんか？新機能『Canvas』なら、AIと一緒にホワイトボードで作業する感覚で資料が完成します。"
          category="AI活用"
          categoryColor="#4CAF50"
          publishedAt="2026年4月23日"
          readingTime="約8分"
        />
        <TableOfContents items={tocItems} />
        <ArticleContent>
          <section id="intro">
            <h2>AIと「一緒に作る」新体験！ChatGPT Canvasとは？</h2>
            <p>
              ChatGPTに文章を書いてもらった後、「内容はいいけど、この段落だけもう少し柔らかい表現にしたい」「全体の構成を少し入れ替えたい」と思ったことはありませんか？
              これまでは、チャット欄で「第2段落を書き直して」と何度も指示を出す必要がありました。
            </p>
            <p>
              2026年の新機能**「Canvas（キャンバス）」**は、そんな不便を解消する「AIとの共同作業スペース」です。
              チャット欄とは別に、右側に専用の編集画面が開き、AIが書いたものを人間が直接直したり、人間が書いたものをAIに手伝ってもらったりすることができます。
            </p>
          </section>

          <section id="features">
            <h2>Canvasでできること：チャットを超えた共同作業</h2>
            <p>
              Canvasは、まるでGoogleドキュメントやホワイトボードをAIと一緒に囲んでいるような感覚で使えます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg dark:bg-blue-900/20 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-2 text-blue-800 dark:text-blue-300 font-bold">
                  <Edit3 className="w-5 h-5" />
                  <h4>直接編集</h4>
                </div>
                <p className="text-sm">AIの回答を自分で直接書き換えられます。修正した内容をAIが理解し、続きを書いてくれます。</p>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg dark:bg-green-900/20 dark:border-green-800">
                <div className="flex items-center gap-2 mb-2 text-green-800 dark:text-green-300 font-bold">
                  <MessageSquare className="w-5 h-5" />
                  <h4>ピンポイント指示</h4>
                </div>
                <p className="text-sm">特定の文章を選んで「ここを短く」「ここを箇条書きに」とボタン一つで指示できます。</p>
              </div>
            </div>
            <p>
              「全部書き直し」をお願いする必要はもうありません。PC操作が苦手な方でも、直感的に資料を完成させることができます。
            </p>
          </section>

          <section id="how-to-use">
            <h2>初心者が今日からできるCanvas活用術3選</h2>
            <p>Canvasを使い始めるのに、難しいプロンプトは不要です。日常のよくあるシーンでの使い方を見てみましょう。</p>

            <div id="email" className="mt-8">
              <h3>1. お礼メールの微調整：一瞬で「親しみやすく」</h3>
              <p>AIに下書きを作ってもらい、Canvas上でニュアンスを調整する方法です。</p>
              <PromptBlock title="メール作成の指示例">
                {`取引先の佐藤さんに、昨日の打ち合わせのお礼メールを書いて。
Canvasで開いて、後で一緒に調整したい。`}
              </PromptBlock>
              <PromptInfoCard type="tips" title="Canvasでの調整のコツ">
                <p>
                  出てきた文章が少し堅苦しいと感じたら、文章全体を選択してメニューから**「親しみやすく」**を選ぶだけ。
                  一瞬で、相手との距離感に合わせた適切な文章に変わります。
                </p>
              </PromptInfoCard>
            </div>

            <div id="report" className="mt-8">
              <h3>2. レポート・ブログの構成：AIと二人三脚で肉付け</h3>
              <p>断片的なアイデアをCanvasに送り、AIと一緒に文章を膨らませていきます。</p>
              <PromptBlock title="構成案の指示例">
                {`「週末のキャンプの魅力」についてのブログ記事を書きたい。
まずは思いつくメリットを箇条書きで出すから、Canvasで整理して。`}
              </PromptBlock>
              <p className="mt-4">
                あなたが書いた箇条書きに対して、AIが「この部分に具体的な体験談を入れましょうか？」と提案してくれたり、不足している情報を補ってくれたりします。
              </p>
            </div>

            <div id="shopping" className="mt-8">
              <h3>3. 献立・買い物リスト：直接編集して自動再計算</h3>
              <p>AIが出したリストを見ながら、手元の状況に合わせて編集します。</p>
              <PromptBlock title="献立作成の指示例">
                {`今週の夕食の献立5日分と、必要な買い物リストをCanvasで作って。`}
              </PromptBlock>
              <div className="flex gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg mt-4 dark:bg-blue-900/20 dark:border-blue-800">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5 dark:text-blue-400" />
                <div>
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    リストを見て「玉ねぎは家にあるから消そう」と直接削除。
                    するとAIが「了解です。玉ねぎを除いた買い物リストに更新しました」と、残りの材料でできる調整を提案してくれます。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="tips">
            <h2>「とりあえず出して、後で直す」気楽な使い方のススメ</h2>
            <p>
              Canvasの最大のメリットは、**「プロンプトを完璧に書かなくていい」**という解放感です。
            </p>
            <div className="flex gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg my-6 dark:bg-yellow-900/20 dark:border-yellow-800">
              <Lightbulb className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5 dark:text-yellow-400" />
              <div>
                <p className="font-semibold text-yellow-900 dark:text-yellow-200">ワンポイントアドバイス</p>
                <p className="text-sm text-yellow-800 dark:text-yellow-300 mt-1">
                  「とりあえず60点の出来でいいから出して、後はCanvasで一緒に直そう」というスタンスで使ってみてください。
                  完璧な指示文を考える時間を、AIとの共同作業の時間に変えることで、結果的に早く、納得のいくものが出来上がります。
                </p>
              </div>
            </div>
          </section>

          <section id="summary">
            <h2>まとめ</h2>
            <p>
              ChatGPTのCanvasは、AIを「一方的に答えを出すツール」から「一緒に汗を流すパートナー」へと変えてくれる画期的な機能です。
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>**「全部書き直し」は不要**。直したいところだけをピンポイントで。</li>
              <li>**直接編集できる**から、人間のこだわりを反映させやすい。</li>
              <li>**プロンプトは一言でOK**。後で一緒に直せばいいという気楽さが鍵。</li>
            </ul>
            <p className="mt-4">
              文章作成や資料作りに苦手意識がある方こそ、ぜひこの「Canvas」を体験してみてください。
              AIとの共同作業が、驚くほどスムーズで楽しいものになるはずです。
            </p>
          </section>
        </ArticleContent>
        <div className="mt-12">
          <RelatedArticles articles={relatedArticles} />
        </div>
      </div>
    </PageLayout>
  );
}
