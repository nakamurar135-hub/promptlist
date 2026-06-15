"use client"

import React from "react"
import { PageLayout } from "../../components/PageLayout"
import { ArticleHeader } from "../../components/ArticleHeader"
import { TableOfContents } from "../../components/TableOfContents"
import { PromptBlock } from "../../components/PromptBlock"
import { PromptInfoCard } from "../../components/PromptInfoCard"
import { RelatedArticles } from "../../components/RelatedArticles"
import { useSEO } from "../../hooks/useSEO"
import { useOGP } from "../../hooks/useOGP"
import { useStructuredData } from "../../hooks/useStructuredData"

export default function OpenAIOperatorGuide() {
  const title = "OpenAI Operator活用ガイド：自律型AIで業務を完全自動化するプロンプト術"
  const description = "OpenAIの最新自律型エージェント『Operator』を使いこなし、ブラウザ操作やツール実行を自動化するための「ゴール逆算型」プロンプト術を詳しく解説します。"
  const keywords = "OpenAI, Operator, AIエージェント, 業務自動化, プロンプトエンジニアリング, 自律型AI, 使い方, ガイド"
  const currentUrl = typeof window !== "undefined" ? window.location.href : ""

  useSEO({
    title: `${title} | AIプロンプト活用術`,
    description: description,
    keywords: keywords,
  })

  useOGP({
    title: title,
    description: description,
    type: "article",
    image: "https://promptlist.com/images/articles/openai-operator-guide.png",
    url: currentUrl,
  })

  useStructuredData({
    title: title,
    description: description,
    author: "Manus",
    datePublished: "2026-05-19T00:00:00Z",
    dateModified: "2026-05-19T00:00:00Z",
  })

  const tocItems = [
    { id: "introduction", title: "Operatorとは？" },
    { id: "core-features", title: "Operatorの基本性能" },
    { id: "prompt-techniques", title: "「ゴール逆算型」プロンプト術" },
    { id: "practical-examples", title: "実践プロンプト例" },
    { id: "advanced-tips", title: "中級者向け応用テクニック" },
    { id: "summary", title: "まとめ" },
  ]

  const relatedArticles = [
    {
      title: "Google Gemini 2.0 Proの『マルチモーダル推論』活用プロンプト術",
      href: "/articles/gemini-2-pro-multimodal",
      category: "中級者向け",
    },
    {
      title: "Perplexity Proの『Research Agent』で深掘り調査を自動化するプロンプト術",
      href: "/articles/perplexity-pro-advanced",
      category: "中級者向け",
    },
    {
      title: "Microsoft Copilot Coworkで『おまかせ業務委任』プロンプト術",
      href: "/articles/copilot-cowork-beginner",
      category: "初心者向け",
    },
  ]

  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <ArticleHeader
          title={title}
          date="2026.05.19"
          category="中級者向け"
        />
        <div className="p-6 md:p-10">
          <TableOfContents items={tocItems} />

          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Operatorとは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              2026年5月19日、OpenAIは自律型AIエージェント<strong>「Operator」</strong>の一般公開を発表しました。
              これまでのAIが「テキストを生成する」ものだったのに対し、Operatorは「ユーザーの代わりにコンピュータを操作する」ことに特化しています。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              ブラウザを立ち上げ、サイトを巡回し、フォームを入力し、ファイルを編集する――。
              Operatorは、これまで人間が手作業で行っていた複雑なプロセスを、指示一つで自律的に完遂します。
            </p>
          </section>

          <section id="core-features" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Operatorの基本性能
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Operatorが従来のAIと一線を画す点は、その「自律性」と「ツール実行能力」にあります。
            </p>
            <ul className="list-disc list-inside text-[#333333] space-y-2 mb-4">
              <li><strong>自律的ブラウジング</strong>: リアルタイムでWebサイトを操作し、情報を収集・入力。</li>
              <li><strong>マルチアプリ連携</strong>: ブラウザ、スプレッドシート、Slack、GitHubなどを横断して操作。</li>
              <li><strong>長期タスクの管理</strong>: 数十分に及ぶ複雑な工程も、途中で止まることなく実行。</li>
              <li><strong>サンドボックス環境</strong>: 安全な環境でコードを実行し、結果を検証。</li>
            </ul>
          </section>

          <section id="prompt-techniques" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              「ゴール逆算型」プロンプト術
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Operatorを使いこなす最大のコツは、<strong>「手順」ではなく「ゴール」を伝える</strong>ことです。
              これを「ゴール逆算型プロンプト」と呼びます。
            </p>
            <PromptInfoCard
              title="ゴール逆算型プロンプトの3要素"
              items={[
                "明確な最終成果物（何が完成すれば成功か）",
                "制約条件（予算、期限、使用ツールなど）",
                "確認・報告のタイミング（勝手に進めて良いか、確認が必要か）",
              ]}
            />
          </section>

          <section id="practical-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              実践プロンプト例
            </h2>
            <PromptBlock
              title="出張手配とスケジュール管理"
              prompt="来週の東京出張のスケジュールを立ててください：\n1. 5月26日午前中に品川駅到着、27日夕方に帰宅の旅程\n2. 予算5万円以内で新幹線と品川駅近くのホテルを予約（決済前に確認して）\n3. 確定した日程をGoogleカレンダーに登録\n4. 旅程の概要をSlackの#generalチャンネルに共有"
            />
            <PromptBlock
              title="競合調査とレポート作成"
              prompt="AIエージェント分野の競合他社5社の最新動向を調査してください：\n1. 各社の過去1ヶ月のプレスリリースと製品アップデートを抽出\n2. 機能を比較した表をGoogleスプレッドシートで作成\n3. 要約レポートをPDFで保存し、私のメールに送信"
            />
            <PromptBlock
              title="GitHub Issueの自動修正"
              prompt="リポジトリ内の未解決Issueを確認してください：\n1. ラベル『bug』が付いた最新のIssueを解析\n2. 原因となっているコード箇所を特定し、修正案のプルリクエストを作成\n3. CIテストがパスすることを確認してから、完了報告をして"
            />
          </section>

          <section id="advanced-tips" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              中級者向け応用テクニック
            </h2>
            <h3 className="text-lg font-semibold text-[#333333] mt-6 mb-3">1. 段階的な権限委譲</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              「予約の最終確認は私が行う」「Slack投稿は下書きまで」など、リスクの高い操作には人間の確認ステップを挟むように指示しましょう。
            </p>
            <h3 className="text-lg font-semibold text-[#333333] mt-6 mb-3">2. エラー時の自己修復</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              「もしサイトの構造が変わっていてボタンが見つからない場合は、代替案を2つ提示して」と、エラーを想定した指示を含めることで、タスクの完遂率が高まります。
            </p>
            <h3 className="text-lg font-semibold text-[#333333] mt-6 mb-3">3. フィードバックループの構築</h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              Operatorが実行した結果に対して「この形式ではなく、もっと箇条書きにして」と追加指示を出すことで、AIがあなたの好みを学習し、次回の精度が向上します。
            </p>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              OpenAI Operatorは、AIが「考える」フェーズから「実行する」フェーズへと進化した象徴です。
              単なるチャット相手ではなく、信頼できる<strong>「デジタル・オペレーター」</strong>として活用することで、
              あなたの生産性は劇的に向上するでしょう。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              まずは、毎日発生する小さなルーチンワークからOperatorに任せてみてください。
              AIと共に働く新しい時代の幕開けを体感できるはずです。
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
