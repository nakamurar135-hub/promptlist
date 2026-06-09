import { PageLayout } from "@/components/layout/PageLayout"
import { ArticleHeader } from "@/components/article/ArticleHeader"
import { ArticleContent } from "@/components/article/ArticleContent"
import { TableOfContents } from "@/components/article/TableOfContents"
import { PromptBlock } from "@/components/article/PromptBlock"
import { RelatedArticles } from "@/components/cta/RelatedArticles"
import { useSEO } from "@/hooks/useSEO"
import { useOGP } from "@/hooks/useOGP"
import { useStructuredData } from "@/hooks/useStructuredData"

export default function M365CopilotMeetingSchedulePage() {
  const title = "M365 Copilotで会議調整を自動化｜初心者向けプロンプト術"
  const description = "Outlook内で『Schedule with Copilot』を使い、メールから全員の空き時間を自動抽出。会議予約まで一括処理できるプロンプト術をご紹介します。"
  const keywords = "M365 Copilot, Schedule with Copilot, 会議調整, Outlook, プロンプト術, 業務効率化, AI活用, 初心者向け"
  const publishedDate = "2026-06-09T00:00:00Z"
  const modifiedDate = "2026-06-09T00:00:00Z"
  const url = "https://promptlist.jp/articles/m365-copilot-meeting-schedule"
  const image = "https://promptlist.jp/images/m365-copilot-meeting-schedule-eyecatch.jpg"

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
    { id: "target", title: "ターゲット" },
    { id: "article-points", title: "記事のポイント" },
    { id: "what-is-schedule-with-copilot", title: "『Schedule with Copilot』とは" },
    { id: "how-to-use", title: "使い方の基本ステップ" },
    { id: "prompt-examples", title: "プロンプト例" },
    { id: "tips-and-tricks", title: "上手く使うコツ" },
    { id: "related-articles", title: "関連記事" },
  ]

  const relatedArticles = [
    {
      title: "【初心者向け】AIがあなたの代わりに「予約」まで完了！最新AIエージェント『Agent i』のおでかけプロンプト術",
      href: "/articles/agent-i-travel",
    },
    {
      title: "【初心者向け】AIがあなたのことを覚えてくれる！ChatGPTの『Dreaming V3』で賢い相棒を育てるプロンプト術",
      href: "/articles/chatgpt-dreaming-v3-beginner",
    },
    {
      title: "【初心者向け】Word・Excelもそのまま出力！Claudeの『コピペ不要』な書類作成プロンプト術",
      href: "/articles/claude-file-export",
    },
  ]

  return (
    <PageLayout>
      <article className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">
            <ArticleHeader
              title={title}
              level="初心者向け"
              publishedDate={publishedDate}
              readingTime="5分"
            />

            <section id="overview" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                概要
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                毎日の会議調整に時間を取られていませんか？「来週の都合つきますか？」というメールを何度も送ったり、複数人のスケジュールを手作業で確認したり…そんな面倒な作業は、もう終わりです。
              </p>
              <p className="text-[#333333] leading-relaxed mb-4">
                Microsoft 365 Copilotに搭載された「Schedule with Copilot」機能を使えば、メールのやり取りから自動で全員の空き時間を探し、最適な会議時間を提案し、さらに招待状の送信まで一括処理できます。
              </p>
              <p className="text-[#333333] leading-relaxed">
                本記事では、PC操作が苦手な初心者でも秘書に頼む感覚でスケジュール調整を終わらせるコツをお伝えします。
              </p>
            </section>

            <section id="target" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                ターゲット
              </h2>
              <ArticleContent
                content={[
                  "毎日の会議調整に時間を取られているビジネスパーソン",
                  "Outlookは使っているが、AIの使い所がわからない初心者",
                  "複数人のスケジュールを合わせるのが苦手な人",
                  "Microsoft 365を契約しているが、Copilot機能をまだ使ったことがない人",
                ]}
              />
            </section>

            <section id="article-points" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                記事のポイント
              </h2>
              <ArticleContent
                content={[
                  "『Schedule with Copilot』はメールのスレッドから直接呼び出せる",
                  "AIが参加者全員の予定を自動で考慮し、最適な時間帯を提案する",
                  "会議室の予約、議題の下書き、招待状の送信まで一括処理可能",
                  "初心者でも簡単な指示文で複雑な調整を完結できる",
                ]}
              />
            </section>

            <section id="what-is-schedule-with-copilot" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                『Schedule with Copilot』とは
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                『Schedule with Copilot』は、Microsoft 365 Copilotの新機能で、Outlook内で直接利用できます。従来は手作業で行っていた会議調整を、AIが自動で処理してくれる機能です。
              </p>
              <p className="text-[#333333] leading-relaxed mb-4">
                <strong>主な特徴：</strong>
              </p>
              <ArticleContent
                content={[
                  "**メールスレッド連携**: 会議調整に関するメールのスレッドから直接起動できる",
                  "**参加者の自動認識**: メール内に記載されている参加者を自動で認識",
                  "**スケジュール分析**: 全参加者の予定を分析し、共通の空き時間を抽出",
                  "**提案と自動予約**: 最適な時間帯を提案し、ワンクリックで会議を予約",
                  "**招待状の自動送信**: 参加者に招待状を自動で送信",
                ]}
              />
            </section>

            <section id="how-to-use" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                使い方の基本ステップ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                『Schedule with Copilot』を使った会議調整は、わずか3ステップで完了します。
              </p>

              <div className="bg-[#F0F4F8] p-6 rounded-lg mb-6">
                <h3 className="text-lg font-bold text-[#333333] mb-3">ステップ1: メールスレッドを開く</h3>
                <p className="text-[#333333] leading-relaxed">
                  会議調整に関するメールのスレッドをOutlookで開きます。複数人とのやり取りが含まれているメールが対象です。
                </p>
              </div>

              <div className="bg-[#F0F4F8] p-6 rounded-lg mb-6">
                <h3 className="text-lg font-bold text-[#333333] mb-3">ステップ2: Copilotボタンをクリック</h3>
                <p className="text-[#333333] leading-relaxed">
                  Outlookのリボンメニューに表示される「Copilot」ボタンをクリックし、「Schedule with Copilot」を選択します。
                </p>
              </div>

              <div className="bg-[#F0F4F8] p-6 rounded-lg">
                <h3 className="text-lg font-bold text-[#333333] mb-3">ステップ3: 指示を入力して実行</h3>
                <p className="text-[#333333] leading-relaxed">
                  表示されたダイアログボックスに、会議の条件（日時、時間、場所など）を指示します。Copilotが自動で最適な時間を提案し、確認後に予約が完了します。
                </p>
              </div>
            </section>

            <section id="prompt-examples" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                プロンプト例
              </h2>

              <PromptBlock
                title="一括調整の指示"
                prompt="このメールのメンバーで、来週中に30分の打ち合わせを設定して。全員が参加できる一番早い時間を提案して。"
              />

              <PromptBlock
                title="条件付きの指示"
                prompt="このプロジェクトの定例会議を、毎週火曜日の午後に設定して。空いている会議室も一緒に確保して。"
              />

              <PromptBlock
                title="複雑な条件の指示"
                prompt="営業チーム（田中、鈴木、佐藤）と企画チーム（山田、高橋）で、来週中に1時間のキックオフミーティングを設定して。午前中で、東京オフィスの大会議室を予約して。"
              />

              <PromptBlock
                title="定期会議の設定"
                prompt="マーケティング部門の週次レビュー会議を、毎週木曜日の14:00に設定して。参加者は全員のOutlookに自動で追加して。"
              />

              <PromptBlock
                title="時間帯指定の調整"
                prompt="このメンバーで、来週中に45分の戦略会議を設定して。ただし、営業時間内（9:00-17:00）で、かつ全員が参加できる時間を選んで。"
              />
            </section>

            <section id="tips-and-tricks" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                上手く使うコツ
              </h2>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#333333] mb-3">💡 コツ1: 参加者を明確に指定する</h3>
                <p className="text-[#333333] leading-relaxed">
                  メール内に参加者の名前がはっきり記載されていると、Copilotが正確に認識しやすくなります。「〇〇さんと△△さんで…」という形式が効果的です。
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#333333] mb-3">💡 コツ2: 時間帯の条件を具体的に指定する</h3>
                <p className="text-[#333333] leading-relaxed">
                  「午前中」「営業時間内」「14:00以降」など、時間帯を具体的に指定することで、より適切な提案が得られます。
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#333333] mb-3">💡 コツ3: 会議の目的を簡潔に伝える</h3>
                <p className="text-[#333333] leading-relaxed">
                  「プロジェクトキックオフ」「四半期レビュー」など、会議の目的を明記すると、Copilotが議題の下書きまで自動で作成してくれます。
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#333333] mb-3">💡 コツ4: 定期会議は「毎週」「毎月」と指定する</h3>
                <p className="text-[#333333] leading-relaxed">
                  定期的に開催する会議の場合、「毎週火曜日」「毎月第1金曜日」と指定すれば、複数回分の予約を一括で設定できます。
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#333333] mb-3">💡 コツ5: 会議室の条件を指定する</h3>
                <p className="text-[#333333] leading-relaxed">
                  「東京オフィスの大会議室」「ビデオ会議対応の会議室」など、会議室の条件を指定することで、自動で最適な会議室が予約されます。
                </p>
              </div>

              <div className="bg-[#FFF3CD] border-l-4 border-[#FFC107] p-4 rounded mb-6">
                <p className="text-[#333333] font-semibold mb-2">⚠️ 注意点</p>
                <p className="text-[#333333] leading-relaxed">
                  『Schedule with Copilot』を使用するには、Microsoft 365 Copilot Pro または組織向けのCopilot Pro ライセンスが必要です。また、参加者全員がOutlookを使用していることが前提となります。
                </p>
              </div>
            </section>

            <section id="related-articles" className="mb-12">
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
