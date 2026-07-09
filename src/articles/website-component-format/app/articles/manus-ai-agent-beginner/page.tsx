'use client'

import { useSEO } from '@/hooks/useSEO'
import { useOGP } from '@/hooks/useOGP'
import { useStructuredData } from '@/hooks/useStructuredData'
import PageLayout from '@/components/layout/PageLayout'
import ArticleHeader from '@/components/article/ArticleHeader'
import PromptBlock from '@/components/article/PromptBlock'
import PromptInfoCard from '@/components/article/PromptInfoCard'
import ResponseExample from '@/components/article/ResponseExample'
import RelatedArticles from '@/components/cta/RelatedArticles'

export default function ManusAIAgentBeginnerPage() {
  // SEO最適化
  useSEO({
    title: 'Manusエージェント完全ガイド｜AI自動化の第一歩',
    description: '2026年のAIは「動く」時代。自律型AIエージェント「Manus」の基本から実践的なプロンプト術まで、初心者向けに完全解説します。',
    keywords: 'AIエージェント, Manus, 自動化, プロンプト, AI活用, 初心者向け',
  })

  // OGP設定
  useOGP({
    title: 'Manusエージェント完全ガイド｜AI自動化の第一歩',
    description: '2026年のAIは「動く」時代。自律型AIエージェント「Manus」の基本から実践的なプロンプト術まで、初心者向けに完全解説します。',
    image: 'https://promptlist.jp/images/manus-ai-agent-beginner-eyecatch.jpg',
    url: 'https://promptlist.jp/articles/manus-ai-agent-beginner',
    type: 'article',
  })

  // 構造化データ設定
  useStructuredData({
    title: 'Manusエージェント完全ガイド｜AI自動化の第一歩',
    description: '2026年のAIは「動く」時代。自律型AIエージェント「Manus」の基本から実践的なプロンプト術まで、初心者向けに完全解説します。',
    author: 'Manus AI',
    datePublished: '2026-07-09T00:00:00Z',
    dateModified: '2026-07-09T00:00:00Z',
    image: 'https://promptlist.jp/images/manus-ai-agent-beginner-eyecatch.jpg',
    url: 'https://promptlist.jp/articles/manus-ai-agent-beginner',
  })

  const relatedArticles = [
    {
      title: 'AIエージェント超入門',
      url: '/articles/ai-agent-beginner-guide',
      category: '基礎知識',
    },
    {
      title: 'ChatGPT「高度な音声モード」活用術',
      url: '/articles/chatgpt-voice-beginner',
      category: 'ChatGPT',
    },
    {
      title: 'Claude Auto Mode活用術',
      url: '/articles/claude-auto-mode-guide',
      category: 'Claude',
    },
  ]

  return (
    <PageLayout>
      <article className="max-w-3xl mx-auto">
        <ArticleHeader
          title="【初心者向け】2026年の新常識！AIエージェント「Manus」で日常の面倒なタスクを自動化するプロンプト術"
          category="AI活用"
          readTime="8分"
          publishDate="2026-07-09"
          author="Manus AI"
        />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              2026年、AIは「答える」から「動く」へ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              これまでのAIは、あなたの質問に「答える」ことが仕事でした。しかし2026年、その常識は大きく変わりました。
              自律型AIエージェント「Manus」は、あなたの指示を受けて、**自分で考えて、自分で動く**AIです。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              ブラウザを操作し、コードを実行し、データを分析し、さらには外部サービスと連携する。
              これまで「人間にしかできない」と思われていた複雑なタスクを、Manusは一人で完結させることができます。
            </p>
            <p className="text-[#333333] leading-relaxed">
              本記事では、Manusの基本から、今日から使える実践的なプロンプト術まで、初心者向けに完全解説します。
            </p>
          </section>

          <section id="what-is-agentic-ai" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「AIエージェント」は何が違う？従来のチャットAIとの決定的な違い
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-bold mb-2 text-[#333333]">従来のチャットAI</h3>
                <ul className="text-sm text-[#333333] space-y-2">
                  <li>✓ あなたの質問に答える</li>
                  <li>✓ テキストを生成する</li>
                  <li>✓ 1回のやり取りで完結</li>
                  <li>✗ 自分で行動を起こさない</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                <h3 className="font-bold mb-2 text-[#333333]">Manusエージェント</h3>
                <ul className="text-sm text-[#333333] space-y-2">
                  <li>✓ あなたの目標を理解する</li>
                  <li>✓ 複数のステップを自動実行</li>
                  <li>✓ 途中で判断・修正する</li>
                  <li>✓ 成果物を完成させて返す</li>
                </ul>
              </div>
            </div>
            <p className="text-[#333333] leading-relaxed">
              簡単に言えば、**チャットAIは「相談相手」、Manusエージェントは「実行者」**です。
              あなたは「何をしたいか」を伝えるだけで、「どうやるか」はManusが自分で考えて実行してくれます。
            </p>
          </section>

          <section id="three-basic-rules" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Manusを動かす「3つの基本ルール」
            </h2>
            <p className="mb-6 text-[#333333]">
              Manusエージェントを効果的に使うには、3つの基本ルールを押さえることが大切です。
            </p>

            <div className="space-y-6">
              <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                <h3 className="font-bold mb-2 text-[#333333]">ルール1: ゴールを明確にする（What）</h3>
                <p className="text-sm text-[#333333] mb-3">
                  Manusに何をしてほしいのか、最終的な成果物は何かを、できるだけ具体的に伝えます。
                </p>
                <div className="bg-white p-3 rounded text-sm">
                  <p className="text-red-600 mb-2">❌ 悪い例：「AIについて調べて」</p>
                  <p className="text-green-600">✅ 良い例：「2026年の最新AI企業10社を調査して、企業名・設立年・主要サービスをまとめた比較表をMarkdown形式で作成してください」</p>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                <h3 className="font-bold mb-2 text-[#333333]">ルール2: 手順をAIに任せる（How）</h3>
                <p className="text-sm text-[#333333] mb-3">
                  「どうやるか」の詳細な指示は必要ありません。Manusが最適な方法を自分で判断します。
                </p>
                <div className="bg-white p-3 rounded text-sm">
                  <p className="text-red-600 mb-2">❌ 悪い例：「まずGoogleで検索して、次にそれぞれのサイトを開いて...」</p>
                  <p className="text-green-600">✅ 良い例：「最新情報を調査して、信頼できるソースから情報を集めてください」</p>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                <h3 className="font-bold mb-2 text-[#333333]">ルール3: 必要な情報やファイルを渡す（Input）</h3>
                <p className="text-sm text-[#333333] mb-3">
                  Manusが作業に必要な情報（ファイル、参考資料、背景情報など）があれば、事前に提供しましょう。
                </p>
                <div className="bg-white p-3 rounded text-sm">
                  <p className="text-red-600 mb-2">❌ 悪い例：「レポートを作成して」（何について？）</p>
                  <p className="text-green-600">✅ 良い例：「このExcelファイルのデータを分析して、月別の売上トレンドをまとめたレポートを作成してください」</p>
                </div>
              </div>
            </div>
          </section>

          <section id="practical-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              今日から使える！Manus活用シーン別プロンプト
            </h2>
            <p className="mb-6 text-[#333333]">
              実際の仕事で使えるプロンプト例を、シーン別に紹介します。
              これらをベースに、あなたの状況に合わせてカスタマイズしてみてください。
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-[#333333] mb-3">シーン1: 市場調査・競合分析</h3>
                <PromptBlock
                  title="競合企業の最新情報を調査"
                  prompt="以下の3つの競合企業について、2026年の最新情報を調査してください：
1. OpenAI
2. Google DeepMind
3. Anthropic

調査内容：
- 企業の最新ニュース（過去3ヶ月）
- 新しいAIモデルやサービスのリリース
- 企業の評価額や資金調達情報

結果をMarkdown形式で、企業ごとにまとめた比較表として出力してください。"
                />
              </div>

              <div>
                <h3 className="font-bold text-[#333333] mb-3">シーン2: 自動化・ファイル操作</h3>
                <PromptBlock
                  title="GitHubへのプッシュを自動化"
                  prompt="以下の手順でGitHubの特定ブランチに記事をプッシュしてください：

1. ローカルリポジトリ /home/ubuntu/promptlist に移動
2. next-migration ブランチをチェックアウト
3. 新しい記事ファイルを src/articles/ に追加
4. 変更をコミット（コミットメッセージ: 'Add new article: Manus AI Agent Guide'）
5. origin/next-migration にプッシュ

プッシュが完了したら、完了メッセージを表示してください。"
                />
              </div>

              <div>
                <h3 className="font-bold text-[#333333] mb-3">シーン3: データ分析・レポート作成</h3>
                <PromptBlock
                  title="大量のPDFから要点を抽出"
                  prompt="docs/ideas/ ディレクトリ内の全Markdownファイルを分析して、以下の情報を抽出してください：

抽出項目：
- ファイル名
- 記事のタイトル
- ターゲット層（初心者向け/中級者向け）
- 主要なAIツール名
- 記事の概要（100字以内）

結果をCSV形式で出力し、ファイルに保存してください。"
                />
              </div>

              <div>
                <h3 className="font-bold text-[#333333] mb-3">シーン4: コンテンツ生成・編集</h3>
                <PromptBlock
                  title="ブログ記事の自動生成"
                  prompt="『AIエージェントの活用シーン』というテーマで、以下の構成のブログ記事を作成してください：

構成：
1. はじめに（100字）
2. 3つの活用シーン（各200字）
   - ビジネス分析
   - 営業支援
   - カスタマーサポート
3. 導入のポイント（150字）
4. まとめ（100字）

トーン：初心者向け、親しみやすい口調
形式：Markdown

完成したら、ファイルに保存してください。"
                />
              </div>
            </div>
          </section>

          <section id="feedback-techniques" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              失敗しないための「フィードバック」術
            </h2>
            <p className="mb-6 text-[#333333]">
              Manusが途中で止まったり、期待と違う結果が出た時は、フィードバックを与えることで改善できます。
              ここでは、効果的なフィードバックの方法を紹介します。
            </p>

            <PromptInfoCard type="tips" title="フィードバックの基本">
              <ul className="space-y-3">
                <li>
                  <strong>「何が」問題なのか明確に</strong><br />
                  「もっと詳しく」ではなく、「データの分析部分をもっと詳しく」と具体的に指摘します。
                </li>
                <li>
                  <strong>「どうしてほしい」かを伝える</strong><br />
                  「この部分は削除して」「もっと簡潔に」など、具体的な修正指示をします。
                </li>
                <li>
                  <strong>参考例を示す</strong><br />
                  「こんな感じで」と例を示すことで、Manusはより正確に理解できます。
                </li>
              </ul>
            </PromptInfoCard>

            <div className="mt-6 space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="font-bold text-[#333333] mb-2">例1: 途中で止まった時</p>
                <p className="text-sm text-[#333333] mb-2">
                  <strong>Manusからの返答:</strong> 「調査が完了しました。ただし、一部のサイトにアクセスできませんでした」
                </p>
                <p className="text-sm text-[#333333]">
                  <strong>あなたのフィードバック:</strong> 「アクセスできなかったサイトについては、代替の情報源から情報を集めてください。例えば、ニュースサイトやプレスリリースから情報を探してみてください」
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="font-bold text-[#333333] mb-2">例2: クオリティを上げたい時</p>
                <p className="text-sm text-[#333333] mb-2">
                  <strong>Manusからの返答:</strong> 「比較表を作成しました」
                </p>
                <p className="text-sm text-[#333333]">
                  <strong>あなたのフィードバック:</strong> 「良いですね。さらに、各企業の『最大の強み』と『課題』の列も追加してもらえますか？」
                </p>
              </div>
            </div>
          </section>

          <section id="success-tips" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Manusエージェントを使いこなすための5つのコツ
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                <h3 className="font-bold text-[#333333] mb-2">1. 「背景情報」を伝える</h3>
                <p className="text-sm text-[#333333]">
                  なぜそのタスクが必要なのか、背景を伝えることで、Manusはより適切な判断ができます。
                  例：「マーケティング戦略の立案に必要なため」
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                <h3 className="font-bold text-[#333333] mb-2">2. 「制約条件」を明確にする</h3>
                <p className="text-sm text-[#333333]">
                  予算、時間、品質基準など、制約があれば伝えましょう。
                  例：「3時間以内に完了してください」「初心者向けの説明で」
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                <h3 className="font-bold text-[#333333] mb-2">3. 「成功の定義」を決める</h3>
                <p className="text-sm text-[#333333]">
                  「何ができたら完了か」を明確にすることで、Manusは目標を見失いません。
                  例：「10社の情報が揃ったら完了」
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                <h3 className="font-bold text-[#333333] mb-2">4. 「信頼できるソース」を指定する</h3>
                <p className="text-sm text-[#333333]">
                  情報の正確性が重要な場合は、参考にすべきソースを指定しましょう。
                  例：「公式サイトとプレスリリースのみから情報を集めてください」
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                <h3 className="font-bold text-[#333333] mb-2">5. 「段階的」に進める</h3>
                <p className="text-sm text-[#333333]">
                  複雑なタスクは、複数のステップに分けて指示することで、より正確な結果が得られます。
                  例：「まず調査してください。その後、結果を分析してください」
                </p>
              </div>
            </div>
          </section>

          <section id="real-world-scenarios" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              実例：Manusで実現する日常のタスク自動化
            </h2>

            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-[#333333] mb-3">実例1: 営業資料の自動生成</h3>
                <p className="text-sm text-[#333333] mb-3">
                  <strong>タスク:</strong> 競合企業の最新情報をまとめた営業資料を作成
                </p>
                <p className="text-sm text-[#333333] mb-3">
                  <strong>Manusの実行:</strong>
                </p>
                <ol className="text-sm text-[#333333] space-y-2 ml-4">
                  <li>1. 競合企業5社の最新ニュースをウェブから収集</li>
                  <li>2. 情報を分類・整理</li>
                  <li>3. PowerPointスライドを自動生成</li>
                  <li>4. 完成した資料をダウンロード</li>
                </ol>
                <p className="text-sm text-green-600 mt-3">
                  <strong>結果:</strong> 通常2時間かかる作業が30分で完了
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-[#333333] mb-3">実例2: カスタマーサポートの自動化</h3>
                <p className="text-sm text-[#333333] mb-3">
                  <strong>タスク:</strong> よくある質問（FAQ）から回答テンプレートを自動生成
                </p>
                <p className="text-sm text-[#333333] mb-3">
                  <strong>Manusの実行:</strong>
                </p>
                <ol className="text-sm text-[#333333] space-y-2 ml-4">
                  <li>1. FAQファイルを分析</li>
                  <li>2. 質問のカテゴリ分け</li>
                  <li>3. 各カテゴリの回答テンプレートを作成</li>
                  <li>4. テンプレートをドキュメント化</li>
                </ol>
                <p className="text-sm text-green-600 mt-3">
                  <strong>結果:</strong> サポート対応時間が30%削減
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-[#333333] mb-3">実例3: データ分析レポートの自動作成</h3>
                <p className="text-sm text-[#333333] mb-3">
                  <strong>タスク:</strong> 月次売上データを分析し、経営層向けレポートを作成
                </p>
                <p className="text-sm text-[#333333] mb-3">
                  <strong>Manusの実行:</strong>
                </p>
                <ol className="text-sm text-[#333333] space-y-2 ml-4">
                  <li>1. Excelファイルのデータを読み込み</li>
                  <li>2. 売上トレンド、前月比、予測を計算</li>
                  <li>3. グラフやチャートを自動生成</li>
                  <li>4. 分析結果をまとめたレポートを作成</li>
                </ol>
                <p className="text-sm text-green-600 mt-3">
                  <strong>結果:</strong> 毎月の手作業が完全に自動化
                </p>
              </div>
            </div>
          </section>

          <section id="common-mistakes" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Manusを使う時の「よくある失敗」と対策
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                <h3 className="font-bold text-[#333333] mb-2">❌ 失敗1: 指示が曖昧</h3>
                <p className="text-sm text-[#333333] mb-2">
                  <strong>例:</strong> 「レポートを作成して」
                </p>
                <p className="text-sm text-[#333333]">
                  <strong>対策:</strong> 「売上分析のレポートを作成してください。対象期間は2026年1月〜6月、形式はPDF、対象読者は経営層です」
                </p>
              </div>

              <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                <h3 className="font-bold text-[#333333] mb-2">❌ 失敗2: 必要な情報を渡さない</h3>
                <p className="text-sm text-[#333333] mb-2">
                  <strong>例:</strong> 「このプロジェクトについて調査して」（プロジェクト名を指定していない）
                </p>
                <p className="text-sm text-[#333333]">
                  <strong>対策:</strong> 「プロジェクト『AI導入プロジェクト2026』について調査してください。このファイルが参考資料です」
                </p>
              </div>

              <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                <h3 className="font-bold text-[#333333] mb-2">❌ 失敗3: 完璧を求めすぎる</h3>
                <p className="text-sm text-[#333333] mb-2">
                  <strong>例:</strong> 最初から「完璧なレポート」を期待する
                </p>
                <p className="text-sm text-[#333333]">
                  <strong>対策:</strong> 段階的に改善。「まずドラフトを作成してください。その後、フィードバックに基づいて改善します」
                </p>
              </div>

              <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                <h3 className="font-bold text-[#333333] mb-2">❌ 失敗4: 信頼できるソースを指定しない</h3>
                <p className="text-sm text-[#333333] mb-2">
                  <strong>例:</strong> 「最新情報を集めて」（情報源を指定していない）
                </p>
                <p className="text-sm text-[#333333]">
                  <strong>対策:</strong> 「公式ウェブサイト、プレスリリース、信頼できるニュースメディアから情報を集めてください」
                </p>
              </div>
            </div>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ：2026年、Manusと共に歩む
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              AIエージェント「Manus」は、単なる「便利なツール」ではありません。
              それは、あなたの「専属アシスタント」であり、あなたの仕事を大きく変える可能性を秘めています。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              本記事で紹介した「3つの基本ルール」と「実践的なプロンプト術」を押さえれば、
              今日からあなたもManusを使いこなすことができます。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              最初は小さなタスクから始めて、徐々に複雑なタスクに挑戦していく。
              その過程で、あなたはManusの可能性を最大限に引き出すコツを習得できるでしょう。
            </p>
            <p className="text-[#333333] leading-relaxed">
              2026年、AIは「答える」から「動く」時代へ。
              Manusと共に、この新しい時代を楽しく、そして生産的に過ごしていきましょう。
            </p>
          </section>

          <section id="related" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              関連記事
            </h2>
            <RelatedArticles articles={relatedArticles} />
          </section>
        </div>
      </article>
    </PageLayout>
  )
}
