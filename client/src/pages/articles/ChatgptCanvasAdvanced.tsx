
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
    title: "【初心者向け】AIがあなたの「作業員」に！ChatGPTの新アプリ『Codex』で面倒なファイル整理を丸投げするプロンプト術",
    href: "/articles/chatgpt-codex-beginner",
    description: "ChatGPTの新アプリ『Codex』を使って、ファイル整理やデータ抽出をAIに任せる方法を解説します。",
  },
];

export default function ChatgptCanvasAdvanced() {
  useSEO({
    title: "【中級者向け】ChatGPT Canvasで実現する「自律型ドキュメント作成」ワークフロー",
    description: "ChatGPTのCanvas機能を活用し、構造的なドキュメント作成と推敲をAIと共同で行うための高度なプロンプト術を紹介します。",
    keywords: "ChatGPT,Canvas,自律型ドキュメント作成,ワークフロー,中級者向け,プロンプト,AI活用,共同作業,レポート作成,技術文書",
  });

  useOGP({
    title: "【中級者向け】ChatGPT Canvasで実現する「自律型ドキュメント作成」ワークフロー",
    description: "ChatGPTのCanvas機能を活用し、構造的なドキュメント作成と推敲をAIと共同で行うための高度なプロンプト術を紹介します。",
    type: "article",
    image: "https://example.com/article-image.png", // TODO: 適切なOGP画像を配置
    url: window.location.href,
  });

  useStructuredData({
    title: "【中級者向け】ChatGPT Canvasで実現する「自律型ドキュメント作成」ワークフロー",
    description: "ChatGPTのCanvas機能を活用し、構造的なドキュメント作成と推敲をAIと共同で行うための高度なプロンプト術を紹介します。",
    author: "Manus AI",
    datePublished: "2026-05-05T00:00:00Z",
    dateModified: "2026-05-05T00:00:00Z",
  });

  return (
    <PageLayout>
      <article>
        <ArticleHeader
          title="【中級者向け】ChatGPT Canvasで実現する「自律型ドキュメント作成」ワークフロー"
          date="2026-05-05"
          category="AI活用"
          categoryColor="#FF9800"
          author="Manus AI"
        />
        <TableOfContents items={tocItems} />
        <ArticleContent>
          <section id="intro" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              AIと「一緒に作る」新体験！ChatGPT Canvasとは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              ChatGPTのCanvas機能は、単なるチャットボットとしてのAIの枠を超え、ユーザーがAIと共同でドキュメントを作成・編集できる画期的なツールです。この機能により、AIが生成したテキストを直接編集したり、特定の箇所にピンポイントで指示を出したりすることが可能になります。本記事では、このCanvas機能を最大限に活用し、複雑なドキュメント作成を効率化するための「自律型ドキュメント作成ワークフロー」を中級者向けに解説します。
            </p>
          </section>

          <section id="target" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              このガイドが役立つ方
            </h2>
            <ul className="list-disc list-inside text-[#333333] leading-relaxed mb-4">
              <li>AIとの共同作業をより深化させたい中級者</li>
              <li>複雑なレポートや技術文書を効率的に作成したいビジネスパーソン</li>
              <li>Canvasの「直接編集」と「部分修正」を最大限に活かしたいユーザー</li>
            </ul>
          </section>

          <section id="techniques" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              紹介するテクニック
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg dark:bg-blue-900/20 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-2 text-blue-800 dark:text-blue-300 font-bold">
                  <Edit3 className="w-5 h-5" />
                  <h4>1. 構造化アウトラインからの自動展開</h4>
                </div>
                <p className="text-sm">ドキュメントの全体構造をAIに提示し、セクションごとにCanvasを更新しながら肉付けしていく指示方法です。これにより、一貫性のある論理的なドキュメントを効率的に作成できます。</p>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg dark:bg-green-900/20 dark:border-green-800">
                <div className="flex items-center gap-2 mb-2 text-green-800 dark:text-green-300 font-bold">
                  <MessageSquare className="w-5 h-5" />
                  <h4>2. 多角的レビュープロンプト</h4>
                </div>
                <p className="text-sm">専門家の視点（法務、マーケティング、エンジニア等）をAIに与え、Canvas上でドキュメントを多角的にレビュー・推敲させるテクニックです。これにより、多角的な視点からのフィードバックを迅速に得られます。</p>
              </div>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg dark:bg-yellow-900/20 dark:border-yellow-800">
                <div className="flex items-center gap-2 mb-2 text-yellow-800 dark:text-yellow-300 font-bold">
                  <CheckCircle className="w-5 h-5" />
                  <h4>3. バージョン管理と差分修正</h4>
                </div>
                <p className="text-sm">Canvasの履歴機能を意識し、段階的にドキュメントをブラッシュアップしていく方法です。AIとの共同作業における変更点を効率的に管理し、品質向上につなげます。</p>
              </div>
            </div>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              具体的なプロンプト例
            </h2>
            <p className="mb-4">これらのプロンプトを参考に、CanvasでのAIとの共同作業を始めてみましょう。</p>
            
            <PromptBlock
              title="構造化アウトラインからの自動展開"
              prompt="以下のドキュメントアウトラインに従って、各セクションの内容をCanvas上で詳細に記述してください。特に「導入」と「結論」は読者の興味を引くように、具体的な事例を交えて展開してください。"
            />
            
            <PromptBlock
              title="多角的レビュープロンプト"
              prompt="このドキュメントの第3章について、専門用語を一般向けに噛み砕きつつ、具体例を2つ追加してCanvas上で更新してください。また、法務担当者の視点から、潜在的なリスクや法的表現の修正点を指摘してください。"
            />
            
            <PromptBlock
              title="バージョン管理と差分修正"
              prompt="前回のCanvasの状態から、今回の修正で変更された箇所をハイライトし、その変更がドキュメント全体に与える影響について簡潔に説明してください。特に、第2章のデータ解釈の変更点に焦点を当ててください。"
            />
          </section>

          <section id="tips-for-success" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              『自律型ドキュメント作成』を成功させるコツ
            </h2>
            <PromptInfoCard type="tips" title="コツ1：明確なアウトラインの提示">
              AIにドキュメントの全体像を理解させるために、まずは詳細なアウトラインや目次を提示しましょう。これにより、AIは一貫性のある内容を生成しやすくなります。
            </PromptInfoCard>
            <PromptInfoCard type="tips" title="コツ2：役割に応じた指示">
              AIに「マーケティング担当者として」「技術者として」といった役割を与えることで、より専門的で的確なフィードバックや内容生成を促すことができます。
            </PromptInfoCard>
            <PromptInfoCard type="tips" title="コツ3：段階的なブラッシュアップ">
              一度に完璧なドキュメントを求めず、まずは大枠をAIに作成させ、その後、詳細化、推敲、レビューと段階的にブラッシュアップしていくアプローチが効果的です。
            </PromptInfoCard>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              ChatGPTのCanvas機能を活用した「自律型ドキュメント作成ワークフロー」は、AIとの共同作業を次のレベルへと引き上げます。単なるテキスト生成ツールとしてではなく、思考のパートナーとしてAIを活用することで、複雑なドキュメント作成のプロセスを劇的に効率化し、より高品質な成果物を生み出すことが可能です。
            </p>
            <p className="text-[#333333] leading-relaxed">
              本ガイドで紹介したテクニックとプロンプト例を参考に、ぜひあなたのドキュメント作成プロセスにCanvasを導入し、AIとの新しい働き方を体験してください。
            </p>
          </section>
          <section id="related" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              関連記事
            </h2>
            <RelatedArticles articles={relatedArticles} />
          </section>
        </ArticleContent>
      </article>
    </PageLayout>
  );
}
