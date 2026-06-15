"use client";

import PageLayout from "@/components/layout/PageLayout"
import ArticleHeader from "@/components/article/ArticleHeader"
import TableOfContents from "@/components/article/TableOfContents"
import PromptBlock from "@/components/article/PromptBlock"
import PromptInfoCard from "@/components/article/PromptInfoCard"
import RelatedArticles from "@/components/cta/RelatedArticles"
import { useSEO } from "@/hooks/useSEO"
import { useOGP } from "@/hooks/useOGP"
import { useStructuredData } from "@/hooks/useStructuredData"

// 共通設定
const headerProps = {
  logoSrc: "/images/logo.png",
  siteName: "AIプロンプト活用ガイド",
  navItems: [
    { label: "ホーム", href: "/" },
    { label: "記事一覧", href: "/articles" },
    { label: "プライバシーポリシー", href: "/privacy" },
  ],
}

const footerProps = {
  categories: [
    {
      name: "基礎・入門",
      articles: [
        { title: "AI初心者でも失敗しない！ChatGPTに正しく質問するテンプレ集", href: "/articles/beginner-template" },
        { title: "プロンプトは「書く」から「話す」へ！ChatGPT「高度な音声モード」活用術", href: "/articles/chatgpt-voice-beginner" },
      ],
    },
    {
      name: "ビジネス文書",
      articles: [
        { title: "会議議事録をChatGPTで自動作成するプロンプト4選", href: "/articles/chatgpt-meeting-minutes" },
        { title: "Excelの「わからない」をAIに丸投げ！Copilot Excelエージェント超入門", href: "/articles/excel-copilot-agent" },
      ],
    },
  ],
  copyright: "© 2026 AIプロンプト活用ガイド All Rights Reserved.",
}

// 目次データ
const headings = [
  { id: "what-is-copilot-cowork", text: "「Copilot Cowork」とは？", level: 2 as const },
  { id: "why-for-beginners", text: "初心者こそ「おまかせ」が必要な理由", level: 2 as const },
  { id: "how-to-use", text: "3ステップで理解する使い方", level: 2 as const },
  { id: "prompt-examples", text: "コピペで使える業務委任プロンプト例", level: 2 as const },
  { id: "guardrails", text: "安心して任せるための『ガードレール』設定", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "Excelの「わからない」をAIに丸投げ！Copilot Excelエージェント超入門",
    description: "複雑なExcel作業をAIに自動化させるプロンプト術。Copilot Coworkの前段階として、単一アプリでの業務委任を学べます。",
    href: "/articles/excel-copilot-agent",
  },
  {
    title: "メール作成の「悩み」をAIに丸投げ！Copilot in Outlookで『下書き』から卒業する術",
    description: "Outlookのメール作成をAIに任せるプロンプト術。Coworkで複数アプリを操る基礎が学べます。",
    href: "/articles/copilot-outlook-email-draft",
  },
  {
    title: "AIが「じっくり考えて」から答えてくれる！Copilotの『Think Deeper』で失敗しない相談術",
    description: "複雑な判断をAIに任せるための『Think Deeper』機能。Coworkで長時間タスクを実行する際の思考プロセスに役立ちます。",
    href: "/articles/copilot-think-deeper-beginner",
  },
]

export default function CopilotCoworkBeginnerPage() {
  const title = "AIに「仕事を丸投げ」！Microsoft Copilot Coworkで『おまかせ業務委任』プロンプト術";
  const description = "2026年3月から利用可能になったMicrosoft Copilot Coworkは、複数のアプリを横断して一連の業務をAIに自動実行させる機能。「資料作成→メール送信→スケジュール登録」といった複雑な作業を、たった一度の指示で完結させるプロンプト術を初心者向けに解説します。";
  const keywords = "Copilot, Cowork, プロンプト, 業務自動化, Microsoft 365, AIエージェント, 初心者, AI活用, 仕事効率化, 自動実行";
  const url = typeof window !== 'undefined' ? window.location.href : "";

  useSEO({
    title: `${title} | AIプロンプト活用ガイド`,
    description,
    keywords,
  });

  useOGP({
    title,
    description,
    type: "article",
    image: "/images/placeholder.jpg",
    url,
  });

  useStructuredData({
    title,
    description,
    author: "AIプロンプト活用ガイド",
    datePublished: "2026-05-13T00:00:00Z",
    dateModified: "2026-05-13T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年5月13日"
          updatedAt="2026年5月13日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="what-is-copilot-cowork" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「Copilot Cowork」とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Microsoft Copilot Coworkは、2026年3月9日に発表された、Microsoft 365 Copilotの新機能です。
              従来のCopilotは「チャットで質問に答える」という単発の対話が中心でしたが、Coworkは異なります。
              複数のアプリ（Word、Excel、Outlook、Teams、Schedulerなど）を自動で操作し、
              数分から数時間にわたる複雑な業務を、AIが自律的に完結させるのです。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              例えば、「来週の営業会議の準備をしておいて」という一度の指示で、AIが以下を自動実行します：
            </p>
            <ul className="list-disc list-inside text-[#333333] mb-4 space-y-2">
              <li>Word で会議資料のドラフトを作成</li>
              <li>Excel で営業データをまとめる</li>
              <li>Outlook で関係者にメール送信</li>
              <li>Scheduler で会議を予定に登録</li>
            </ul>
            <p className="text-[#333333] leading-relaxed">
              これまでは「何度もプロンプトを打ち直す」のが当たり前でしたが、Coworkなら「一度の指示」で全て完結。
              これが「おまかせ業務委任」の本質です。
            </p>
          </section>

          <section id="why-for-beginners" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者こそ「おまかせ」が必要な理由
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「AIに仕事を任せる」と聞くと、上級者向けのように思えるかもしれません。
              しかし実は、初心者こそCoworkの恩恵を受けやすいのです。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              <strong>理由1：複数アプリの操作が不要になる</strong><br />
              初心者は、複数のアプリを行き来するだけで疲れてしまいます。
              Coworkなら、その手間がゼロになります。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              <strong>理由2：「正しいプロンプト」を考える必要がない</strong><br />
              AIに「最終的なゴール」を伝えるだけで、AIが「どう実行するか」を自動で判断します。
              細かい指示書を書く必要がありません。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              <strong>理由3：失敗が少ない</strong><br />
              AIが「計画」を立てて、実行前に確認を求めます。
              初心者でも「これでいい？」と確認してから実行できるので、ミスが減ります。
            </p>
          </section>

          <section id="how-to-use" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              3ステップで理解する使い方
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Copilot Coworkの使い方は、実は非常にシンプルです。
            </p>
            <div className="bg-[#F5F9FC] p-6 rounded-lg mb-6">
              <h3 className="font-bold text-[#333333] mb-4">ステップ1：「ゴール」を伝える</h3>
              <p className="text-[#333333] mb-2">
                「来週の会議の準備をして」という、<strong>最終的な成果</strong>を伝えます。
                細かい手順は不要です。
              </p>
            </div>
            <div className="bg-[#F5F9FC] p-6 rounded-lg mb-6">
              <h3 className="font-bold text-[#333333] mb-4">ステップ2：AIの「計画」を確認する</h3>
              <p className="text-[#333333] mb-2">
                AIが「こういう手順で進めます」と提案します。
                内容を確認して、修正があれば指摘します。
              </p>
            </div>
            <div className="bg-[#F5F9FC] p-6 rounded-lg mb-6">
              <h3 className="font-bold text-[#333333] mb-4">ステップ3：実行を承認する</h3>
              <p className="text-[#333333] mb-2">
                「進めて」と言えば、AIが自動で全ての作業を完結させます。
                途中経過も確認できます。
              </p>
            </div>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              コピペで使える業務委任プロンプト例
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              以下のプロンプトをコピーして、Copilot Coworkに貼り付けてみてください。
              ポイントは「何をしてほしいのか」という<strong>ゴール</strong>を明確に伝えることです。
            </p>

            <PromptBlock
              title="営業会議の準備をAIに丸投げする時"
              prompt="来週の営業会議の準備をしておいて。以下の内容でお願い：
1. Word で会議資料を作成（営業目標、今月の実績、来月の予定を含める）
2. Excel で営業データを整理（過去3ヶ月の売上推移をグラフ化）
3. Outlook で営業チーム全員にメール送信（会議の日時、資料の概要を記載）
4. Scheduler で会議を予定に登録（参加者は営業部長、営業課長、営業担当者）
実行前に計画を確認させてね。"
            />

            <PromptBlock
              title="月次レポート作成をAIに任せる時"
              prompt="月次レポートの作成と配布をお願い。以下の流れで進めて：
1. Excel で今月の業績データをまとめる（売上、コスト、利益率）
2. Word でレポート文書を作成（データの分析と来月の施策を含める）
3. PDF に変換して保存
4. Outlook でマネージャーと関係部門にメール送信
計画を確認してから実行してね。"
            />

            <PromptBlock
              title="プロジェクト進捗の報告をAIに代行させる時"
              prompt="プロジェクト進捗の報告をお願い。以下の手順で：
1. Excel で進捗状況をまとめる（完了タスク、進行中タスク、遅延タスク）
2. Word で進捗レポートを作成（成果、課題、来週の計画）
3. Outlook でステークホルダーに送信
4. Teams チャネルにも投稿
実行前に内容を確認させてください。"
            />

            <PromptBlock
              title="顧客フォローアップをAIに自動化する時"
              prompt="先月の顧客リストへのフォローアップをお願い。以下の内容で：
1. Excel で顧客リストを確認
2. Outlook で個別メールを作成・送信（顧客ごとにカスタマイズ）
3. Scheduler で1週間後のフォローアップ予定を登録
4. Teams で営業チームに報告
計画を見てから進めてね。"
            />
          </section>

          <section id="guardrails" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              安心して任せるための『ガードレール』設定
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「AIに仕事を任せるのは不安」という初心者の気持ちはよく分かります。
              そこで重要なのが『ガードレール』—— AIが暴走しないための「ルール」を事前に設定することです。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              <strong>ガードレール1：実行前に必ず確認させる</strong>
            </p>
            <div className="bg-[#FFF3CD] p-4 rounded-lg mb-6 text-[#333333]">
              <p className="mb-2">
                プロンプトの最後に「実行前に計画を確認させてね」と明記します。
                これにより、AIが勝手に実行することはありません。
              </p>
            </div>

            <p className="text-[#333333] leading-relaxed mb-4">
              <strong>ガードレール2：メール送信前に内容をチェックさせる</strong>
            </p>
            <div className="bg-[#FFF3CD] p-4 rounded-lg mb-6 text-[#333333]">
              <p className="mb-2">
                「メール送信前に内容を確認させてください」と指示します。
                これで誤字や不適切な表現を防げます。
              </p>
            </div>

            <p className="text-[#333333] leading-relaxed mb-4">
              <strong>ガードレール3：「承認後に実行」の流れを明示する</strong>
            </p>
            <div className="bg-[#FFF3CD] p-4 rounded-lg mb-6 text-[#333333]">
              <p className="mb-2">
                「計画 → 確認 → 修正 → 承認 → 実行」という流れを明確にします。
                AIはこのルールに従うので、初心者でも安心です。
              </p>
            </div>

            <PromptInfoCard
              title="ガードレール付きプロンプトテンプレート"
              items={[
                "「以下の手順で進めてください」と明確に指示",
                "各ステップの後に「確認」を入れる",
                "「実行前に計画を見せてください」と明記",
                "「メール送信前に内容をチェックしてください」と指示",
                "「修正があれば教えてください」と伝える",
                "最後に「承認後に実行」と明示",
              ]}
            />
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Copilot Coworkは、2026年のAIトレンド「自律型AI（Agentic AI）」を、
              初心者にも分かりやすく「おまかせ業務委任」という形で実現した機能です。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              複雑な業務も、「ゴール」を伝えるだけで、AIが自動で完結させます。
              初心者こそ、この「おまかせ」の力を活用することで、
              仕事の効率が劇的に向上します。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              大切なのは「ガードレール」—— AIが暴走しないよう、事前に「ルール」を設定することです。
              「実行前に確認」「メール送信前にチェック」といった指示を明記することで、
              初心者でも安心して仕事をAIに任せられます。
            </p>
            <p className="text-[#333333] leading-relaxed">
              ぜひこのガイドを参考に、Copilot Coworkで「仕事の未来」を体験してみてください。
              AIとの新しい働き方が、あなたの日常を変えるはずです。
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
