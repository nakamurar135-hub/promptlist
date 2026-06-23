import PageLayout from "@/components/layout/PageLayout";
import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleContent from "@/components/article/ArticleContent";
import TableOfContents from "@/components/article/TableOfContents";
import PromptBlock from "@/components/article/PromptBlock";
import PromptInfoCard from "@/components/article/PromptInfoCard";
import RelatedArticles from "@/components/article/RelatedArticles";
import { Lightbulb, AlertTriangle } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";
import { useStructuredData } from "@/hooks/useStructuredData";

const tocItems = [
  { id: "intro", label: "iPhoneの「ショートカット」が魔法の杖に！自然言語で自動化プロンプト術" },
  { id: "evolution", label: "「複雑なパズル」から「話し相手への頼み事」へ：iOS 27の革新" },
  { id: "practice", label: "初心者が今日からできる「自然言語」で自動化するプロンプト実践例" },
  { id: "home", label: "【帰宅時の自動化】家に帰ったら照明とプレイリストを自動起動", level: 3 as const },
  { id: "morning", label: "【朝の準備】目覚まし後、天気とニュースを自動で表示", level: 3 as const },
  { id: "photo", label: "【写真整理】撮った写真を自動で分類・クラウド保存", level: 3 as const },
  { id: "tips", label: "Apple Intelligenceを使いこなす「自然言語指示」のコツ" },
  { id: "siri", label: "Siriとの連携で、画面操作不要の完全自動化" },
  { id: "caution", label: "安心して自動化するための注意点" },
  { id: "summary", label: "まとめ" },
];

const relatedArticles = [
  {
    title: "iPhoneのSiriが賢くなった！Google Gemini搭載で「頼み事」が通じるプロンプト術",
    href: "/articles/siri-gemini-beginner",
    description: "Siriの対話機能を活用したプロンプト術を学びましょう。",
  },
  {
    title: "「AIに任せる」の第一歩！AIエージェント超入門",
    href: "/articles/ai-agent-beginner-guide",
    description: "自動化の基本概念をマスターするための必読ガイド。",
  },
  {
    title: "AIエージェントで業務を自動化！「自律型ワークフロー」構築プロンプト術",
    href: "/articles/ai-agent-workflow",
    description: "より高度な自動化ワークフロー構築のテクニック。",
  },
];

export default function AppleShortcutsNaturalLanguage() {
  useSEO({
    title: "iPhoneショートカット自然言語ガイド｜iOS 27の自動化プロンプト術",
    description: "iOS 27の新機能「Apple Intelligence」対応ショートカットアプリを初心者向けに解説。自然言語だけで複雑な自動化を実現するプロンプト術を紹介します。",
    keywords: "iPhone,ショートカット,Apple Intelligence,自動化,iOS 27,プロンプト,Siri,初心者,自然言語,AI",
  });

  useOGP({
    title: "iPhoneショートカット自然言語ガイド｜iOS 27の自動化プロンプト術",
    description: "iOS 27の新機能「Apple Intelligence」対応ショートカットアプリを初心者向けに解説。自然言語だけで複雑な自動化を実現するプロンプト術を紹介します。",
    type: "article",
  });

  useStructuredData({
    title: "iPhoneショートカット自然言語ガイド｜iOS 27の自動化プロンプト術",
    description: "iOS 27の新機能「Apple Intelligence」対応ショートカットアプリを初心者向けに解説。自然言語だけで複雑な自動化を実現するプロンプト術を紹介します。",
    author: "Manus AI",
    datePublished: "2026-06-23T00:00:00Z",
    dateModified: "2026-06-23T00:00:00Z",
  });

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <ArticleHeader
          title="iPhoneの「ショートカット」が魔法の杖に！自然言語で自動化プロンプト術"
          description="iOS 27で登場した「Apple Intelligence」により、ショートカットアプリが劇的に進化。プログラミングのような複雑な設定なしに、自然な日本語で日常の面倒な作業を自動化できるようになりました。"
          category="iPhone活用"
          categoryColor="#555555"
          publishedAt="2026年6月23日"
          readingTime="約12分"
        />

        <TableOfContents items={tocItems} />

        <ArticleContent>
          <section id="intro">
            <h2>iPhoneの「ショートカット」が魔法の杖に！自然言語で自動化プロンプト術</h2>
            <p>これまでiPhoneの「ショートカット」アプリを避けてきた方も多いのではないでしょうか。複雑なブロック図を組み立てるようなインターフェースは、まるでプログラミングのようで、「初心者には無理…」と感じさせてしまいました。</p>
            <p>しかし、iOS 27で登場した「Apple Intelligence」により、その状況は一変しました。今、あなたが必要なのは、プログラミング知識ではなく、<strong>自然な日本語で「こうしたい」と伝えるだけ</strong>です。AIが複雑な手順を自動で組み立ててくれるのです。</p>
            <p>この記事では、ITに詳しくない初心者の方でも、今日からiPhoneの自動化機能を使いこなし、日常の面倒な作業を「魔法のように」自動化するための第一歩を分かりやすく解説します。</p>
          </section>

          <section id="evolution">
            <h2>「複雑なパズル」から「話し相手への頼み事」へ：iOS 27の革新</h2>
            <p>これまでのショートカットアプリは、いわば「プログラミング言語」でした。「このブロックをこの順番で並べて、条件分岐を入れて…」という具合に、細かい手順を一つ一つ指定する必要がありました。</p>
            <p>しかし、iOS 27の「Apple Intelligence」搭載ショートカットは、まるで「家族や友人に頼み事をするように」動作します。「帰宅したら照明をつけてプレイリストを流して」と日本語で伝えるだけで、AIが自動でその手順を組み立ててくれるのです。</p>
            <p>つまり、人間が「どうやって（How）」を細かく指示しなくても、AIが「何をしたいか（Goal）」を理解して、必要な自動化を実現してくれる。これが、2026年現在のiPhone自動化のスタンダードなのです。</p>
          </section>

          <section id="practice">
            <h2>初心者が今日からできる「自然言語」で自動化するプロンプト実践例</h2>
            <p>Apple Intelligenceを使いこなすコツは、複雑な技術用語を避けて、<strong>日常会話のように「こうしたい」と伝えること</strong>です。ここでは、日常生活で使える3つの具体例を紹介します。</p>

            <div id="home" className="mt-8">
              <h3>【帰宅時の自動化】家に帰ったら照明をつけてプレイリストを流して</h3>
              <p>GPSで自宅への到着を検知して、自動的にリビングの照明をオンにし、お気に入りのプレイリストを再生するショートカットです。複数のアプリを連携させる複雑な設定も、自然言語なら簡単です。</p>
              
              <PromptBlock title="帰宅時の自動化プロンプト">{`Siriよ、新しいショートカットを作ってほしい。

【目的】
私が家に帰ったら自動で実行するショートカット

【やってほしいこと】
1. 自宅に到着したことを検知したら
2. スマートホームで「リビング照明」をオンにして
3. Apple Musicで「リラックス」というプレイリストを再生する

【条件】
- 平日の18時から22時の間だけ実行
- 家族がいない時間帯は実行しない（ファミリー共有を参照）`}</PromptBlock>

              <PromptInfoCard type="response" title="期待される回答のイメージ">
                <p>ショートカットが作成されました。以下の設定で自動実行します：</p>
                <ul className="list-disc list-inside mt-2">
                  <li>トリガー：自宅到着時（GPS検知）</li>
                  <li>実行内容：リビング照明オン → プレイリスト再生</li>
                  <li>実行時間帯：平日18時～22時</li>
                  <li>条件：ファミリー共有で家族がいない時間帯</li>
                </ul>
              </PromptInfoCard>
            </div>

            <div id="morning" className="mt-8">
              <h3>【朝の準備】目覚まし後、天気とニュースを自動で表示</h3>
              <p>朝の目覚まし音が鳴った直後に、自動的に天気予報と最新ニュースをロック画面に表示するショートカットです。朝の準備時間を有効活用できます。</p>
              
              <PromptBlock title="朝の準備プロンプト">{`Siriよ、朝の準備を効率化するショートカットを作ってほしい。

【実行タイミング】
毎朝6時30分に自動実行

【やってほしいこと】
1. 今日の天気予報を取得して表示
2. 朝刊のニュースヘッドラインを5件表示
3. 今日のカレンダー予定を表示
4. 通知で「朝の準備が始まりました」と教える

【表示形式】
- 見やすく、1画面に収まるように
- 重要な予定は赤色でハイライト`}</PromptBlock>
            </div>

            <div id="photo" className="mt-8">
              <h3>【写真整理】撮った写真を自動で分類・クラウド保存</h3>
              <p>毎日撮った写真を自動で分類し、iCloudに保存するショートカットです。「人物写真」「風景」「食べ物」など、AIが自動で判別して整理してくれます。</p>
              
              <PromptBlock title="写真整理プロンプト">{`Siriよ、写真を自動で整理するショートカットを作ってほしい。

【実行タイミング】
毎晩22時に自動実行

【やってほしいこと】
1. 本日撮った写真をすべて取得
2. AIが写真の内容を分析して分類
   - 人物写真 → 「People」フォルダ
   - 風景写真 → 「Landscape」フォルダ
   - 食べ物 → 「Food」フォルダ
   - その他 → 「Other」フォルダ
3. 分類した写真をiCloudに保存
4. 完了したら通知で「写真整理が完了しました」と教える`}</PromptBlock>
            </div>
          </section>

          <section id="tips">
            <h2>Apple Intelligenceを使いこなす「自然言語指示」のコツ</h2>
            <p>ショートカットアプリのAI機能を最大限に活用するには、<strong>「何をしたいか」を明確に、具体的に伝えること</strong>が重要です。</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg dark:bg-blue-900/20 dark:border-blue-800">
                <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">1. 目的を最初に</h4>
                <p className="text-sm">「朝の準備を効率化したい」など、最終的なゴールを最初に伝えることで、AIが最適なショートカットを提案しやすくなります。</p>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg dark:bg-blue-900/20 dark:border-blue-800">
                <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">2. 実行タイミングを明確に</h4>
                <p className="text-sm">「毎朝6時30分」「帰宅時」「毎週金曜日」など、いつ実行するかを具体的に指定すると、トリガー設定が正確になります。</p>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg dark:bg-blue-900/20 dark:border-blue-800">
                <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">3. 条件や例外を添える</h4>
                <p className="text-sm">「平日だけ」「家族がいない時」など背景を伝えることで、より実用的なショートカットが完成します。</p>
              </div>
            </div>

            <div className="flex gap-3 p-4 bg-green-50 border border-green-200 rounded-lg dark:bg-green-900/20 dark:border-green-800">
              <Lightbulb className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5 dark:text-green-400" />
              <div>
                <p className="font-semibold text-green-900 dark:text-green-200">ワンポイントアドバイス</p>
                <p className="text-sm text-green-800 dark:text-green-300 mt-1">
                  AIが作ったショートカットが完璧でなくても大丈夫。「これをこう変えて」と日本語で修正指示を出せば、AIが対応してくれます。何度も試行錯誤しながら、自分にぴったりの自動化を作り上げましょう。
                </p>
              </div>
            </div>
          </section>

          <section id="siri">
            <h2>Siriとの連携で、画面操作不要の完全自動化</h2>
            <p>Apple Intelligenceの最大の特徴は、<strong>Siriとの深い連携</strong>です。ショートカットを作ったら、Siriに音声で呼び出させることで、画面を一切操作することなく自動化を実行できます。</p>
            
            <div className="my-6 p-4 bg-purple-50 border border-purple-200 rounded-lg dark:bg-purple-900/20 dark:border-purple-800">
              <h4 className="font-bold text-purple-900 dark:text-purple-200 mb-2">Siriでショートカットを実行する方法</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm text-purple-800 dark:text-purple-300">
                <li>ショートカットアプリで作成したショートカットに「Siriフレーズ」を設定</li>
                <li>「Hey Siri、[フレーズ名]」と話しかけるだけで実行</li>
                <li>例：「Hey Siri、朝の準備」と言えば、天気・ニュース・予定が自動表示</li>
                <li>運転中や両手がふさがっている時も、音声だけで自動化を実行可能</li>
              </ol>
            </div>

            <PromptBlock title="Siriフレーズ設定プロンプト">{`Siriよ、このショートカットに「朝の準備」というフレーズを設定してほしい。

【設定内容】
- Siriフレーズ：「朝の準備」
- 実行内容：天気・ニュース・予定の表示
- 実行タイミング：毎朝6時30分、または「Hey Siri、朝の準備」で即実行

【その他】
- ロック画面からも実行可能にしてほしい
- 実行時に音声フィードバック「朝の準備を開始します」と言ってほしい`}</PromptBlock>
          </section>

          <section id="caution">
            <h2>安心して自動化するための注意点</h2>
            <div className="flex gap-3 p-4 bg-red-50 border border-red-200 rounded-lg dark:bg-red-900/20 dark:border-red-800">
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5 dark:text-red-400" />
              <div>
                <p className="font-semibold text-red-900 dark:text-red-200">プライバシーと権限の確認が重要</p>
                <p className="text-sm text-red-800 dark:text-red-300 mt-1">
                  ショートカットが位置情報、カレンダー、写真などにアクセスする場合、事前に権限を許可する必要があります。また、ファミリー共有を使う場合は、家族全員のプライバシーに配慮した設定にしましょう。
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg dark:bg-yellow-900/20 dark:border-yellow-800">
              <p className="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">テスト実行を推奨</p>
              <p className="text-sm text-yellow-800 dark:text-yellow-300">
                複雑なショートカットを作ったら、実際の自動実行前に、手動で一度テスト実行してみることをお勧めします。想定外の動作がないか確認してから、本格運用に移しましょう。
              </p>
            </div>
          </section>

          <section id="summary">
            <h2>まとめ</h2>
            <p>iOS 27の「Apple Intelligence」により、iPhoneの自動化は劇的に進化しました。</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>自然言語で指示するだけ</strong>で、複雑な自動化が実現できる。</li>
              <li><strong>Siriとの連携</strong>により、音声だけで自動化を実行可能。</li>
              <li><strong>日常の面倒な作業</strong>を「魔法のように」自動化でき、時間を大幅に節約できる。</li>
            </ul>
            <p className="mt-4">まずは、朝の準備や帰宅時の自動化から始めてみませんか？一度その便利さを体感すれば、もう手動での作業には戻れなくなるはずです。あなたのiPhoneが、本当の意味で「あなたのアシスタント」になる日が来ました。</p>
          </section>
        </ArticleContent>

        <div className="mt-12">
          <RelatedArticles articles={relatedArticles} />
        </div>
      </div>
    </PageLayout>
  );
}
