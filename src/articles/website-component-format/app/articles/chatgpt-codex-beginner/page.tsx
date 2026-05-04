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
        { title: "AIがあなたの「作業員」に！ChatGPTの新アプリ『Codex』で面倒なファイル整理を丸投げするプロンプト術", href: "/articles/chatgpt-codex-beginner" },
      ],
    },
    {
      name: "ファイル・業務自動化",
      articles: [
        { title: "Excelの「わからない」をAIに丸投げ！Copilot Excelエージェント超入門", href: "/articles/excel-copilot-agent" },
        { title: "もう「クリック」すら不要？ブラウザ操作AI『Copelf』でルーチンワークを自動化するプロンプト術", href: "/articles/copelf-browser-automation" },
      ],
    },
  ],
  copyright: "© 2026 AIプロンプト活用ガイド All Rights Reserved.",
}

// 目次データ
const headings = [
  { id: "introduction", text: "AIが「相談相手」から「作業員」へ進化", level: 2 as const },
  { id: "what-is-codex", text: "ChatGPT『Codex』とは？", level: 2 as const },
  { id: "why-it-helps-beginners", text: "初心者にこそ『Codex』が必要な3つの理由", level: 2 as const },
  { id: "how-it-works", text: "『Codex』の仕組み：AIが実際に手を動かす", level: 2 as const },
  { id: "prompt-examples", text: "今日から使える！『Codex』プロンプトの具体例", level: 2 as const },
  { id: "tips-for-success", text: "『Codex』を使いこなすコツ", level: 2 as const },
  { id: "summary", text: "まとめ", level: 2 as const },
  { id: "related", text: "関連記事", level: 2 as const },
]

// 関連記事データ
const relatedArticles = [
  {
    title: "Excelの「わからない」をAIに丸投げ！Copilot Excelエージェント超入門",
    description: "AIがスプレッドシート操作を代行する方法を初心者向けに解説",
    href: "/articles/excel-copilot-agent",
  },
  {
    title: "もう「クリック」すら不要？ブラウザ操作AI『Copelf』でルーチンワークを自動化するプロンプト術",
    description: "ブラウザ操作をAIに任せて、ルーチンワークを完全自動化する方法",
    href: "/articles/copelf-browser-automation",
  },
  {
    title: "Word・Excelもそのまま出力！Claudeの『コピペ不要』な書類作成プロンプト術",
    description: "AIが直接ファイルを生成・ダウンロードする最新の活用法",
    href: "/articles/claude-file-export",
  },
]

export default function ChatGPTCodexBeginnerPage() {
  const title = "AIがあなたの「作業員」に！ChatGPTの新アプリ『Codex』で面倒なファイル整理を丸投げするプロンプト術";
  const description = "PCのファイル操作が苦手な初心者向け。ChatGPTの新アプリ『Codex』を使い、画像のPDF化やファイルリネーム、フォルダ分けなどの面倒な作業をAIに丸投げする方法を分かりやすく解説します。";
  const keywords = "ChatGPT, Codex, ファイル整理, 自動化, プロンプト, 初心者, AI活用, 業務効率化";
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
    datePublished: "2026-05-04T00:00:00Z",
    dateModified: "2026-05-04T00:00:00Z",
  });

  return (
    <PageLayout headerProps={headerProps} footerProps={footerProps}>
      <article className="max-w-4xl mx-auto">
        <ArticleHeader
          title={title}
          eyecatchSrc="/images/placeholder.jpg"
          createdAt="2026年5月4日"
          updatedAt="2026年5月4日"
        />
        <TableOfContents headings={headings} />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              AIが「相談相手」から「作業員」へ進化
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              「スマホで撮った写真をPDFにまとめたい」
              「デジカメの画像ファイルを日付ごとにフォルダ分けしたい」
              「Excelの名簿から特定の条件の人だけを抽出したい」
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              こんな「ちょっとした作業」に、多くの初心者は何時間も費やしてしまいます。ファイル操作が苦手だと、パソコンの基本機能すら使いこなせず、仕事もプライベートも効率が落ちてしまいます。
            </p>
            <p className="text-[#333333] leading-relaxed">
              そこに登場したのが、ChatGPTの新アプリ「**Codex**」です。これまでのAIは「教えてくれる相談相手」でしたが、Codexは**「実際に手を動かす作業員」**。プロンプト一つで、AIがあなたの代わりにファイルを整理し、形式を変換し、名前を変更してくれるのです。
            </p>
          </section>

          <section id="what-is-codex" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              ChatGPT『Codex』とは？
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              『Codex』は、ChatGPTの新しいアプリケーションで、**AIが直接ファイルを操作・生成できる**機能を持っています。これまでのChatGPTは「回答をテキストで返す」だけでしたが、Codexは以下のことが可能です：
            </p>
            <ul className="list-disc list-inside mb-4 text-[#333333]">
              <li>複数の画像ファイルを1つのPDFに統合</li>
              <li>バラバラなファイル名を一括でリネーム</li>
              <li>ファイルを日付やカテゴリごとにフォルダ分け</li>
              <li>ExcelやCSVから特定条件のデータを抽出</li>
              <li>異なるファイル形式に自動変換</li>
            </ul>
            <p className="text-[#333333] leading-relaxed">
              つまり、「AIが中身を理解して、あなたの意図に合わせてファイル操作を実行する」という、これまでのAIにはできなかった領域に踏み込んでいるのです。
            </p>
          </section>

          <section id="why-it-helps-beginners" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              初心者にこそ『Codex』が必要な3つの理由
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-bold mb-2">1. PCスキルの差を埋められる</h3>
                <p className="text-sm">フォルダ作成やファイル形式の変換など、初心者がつまずきやすい操作をAIが代行します。</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-bold mb-2">2. 曖昧な指示で動く</h3>
                <p className="text-sm">難しいコマンドや専門用語は不要。「いい感じに整理して」という日本語で十分です。</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-bold mb-2">3. 時間を大幅短縮</h3>
                <p className="text-sm">手作業で数時間かかる作業が、プロンプト一つで数秒で完了します。</p>
              </div>
            </div>
          </section>

          <section id="how-it-works" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              『Codex』の仕組み：AIが実際に手を動かす
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              『Codex』がどのように動作するのか、ステップバイステップで説明します。
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <h3 className="font-bold mb-3">ステップ1：ファイルをアップロード</h3>
              <p className="text-[#333333] mb-3">
                Codexアプリにファイルをドラッグ&ドロップ、またはアップロードします。複数ファイルの一括アップロードも可能です。
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <h3 className="font-bold mb-3">ステップ2：指示をプロンプトで伝える</h3>
              <p className="text-[#333333] mb-3">
                「これらの画像をPDFにまとめて」「ファイル名を日付_タイトルに変更して」など、やってほしいことを日本語で説明します。
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <h3 className="font-bold mb-3">ステップ3：AIが処理を実行</h3>
              <p className="text-[#333333] mb-3">
                Codexがあなたの指示を理解し、ファイル操作を自動実行します。AIが「何をするべきか」を判断してくれるので、細かい指示は不要です。
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-3">ステップ4：完成ファイルをダウンロード</h3>
              <p className="text-[#333333]">
                処理が完了したら、完成したファイルをダウンロードします。そのまま使用可能です。
              </p>
            </div>
          </section>

          <section id="prompt-examples" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              今日から使える！『Codex』プロンプトの具体例
            </h2>
            <p className="mb-4">以下のプロンプトをコピペして、Codexに指示してみてください。</p>
            
            <PromptBlock
              title="旅行写真をフォルダ分けして整理する時"
              prompt="このフォルダにある旅行の写真を、日付ごとにフォルダ分けして、ファイル名を『2026_旅行_〇〇』に変えておいて。撮影日時を自動判定して分類してね。"
            />
            
            <PromptBlock
              title="バラバラな画像をPDFにまとめる時"
              prompt="このフォルダにある5枚の画像を、1つのPDFファイルにまとめてダウンロードできるようにして。ファイル名は『統合資料_2026-05-04』でお願い。"
            />
            
            <PromptBlock
              title="Excelから特定条件のデータを抽出する時"
              prompt="このExcel名簿から、住所が東京都の人だけを抜き出した新しいファイルを作ってください。列は『名前』『住所』『電話番号』『メール』だけで大丈夫です。"
            />

            <PromptBlock
              title="ファイル形式を一括変換する時"
              prompt="このフォルダにあるPNG画像をすべてJPEG形式に変換して。ファイル名はそのままで、『_converted』を末尾に付けてください。"
            />
          </section>

          <section id="tips-for-success" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              『Codex』を使いこなすコツ
            </h2>
            <p className="mb-4">
              Codexをより効果的に使うための、初心者向けのコツを紹介します。
            </p>
            <PromptInfoCard type="tips" title="コツ1：「いい感じに」でOK">
              完璧な指示は不要です。「ファイルをいい感じに整理して」「見やすいようにリネームして」といった曖昧な表現でも、AIが意図を汲み取ってくれます。
            </PromptInfoCard>

            <PromptInfoCard type="tips" title="コツ2：修正指示は簡潔に">
              「今のなしで」「もっと細かく分類して」といった修正指示も可能です。何度でもやり直せるので、完璧を目指さず、試行錯誤を楽しみましょう。
            </PromptInfoCard>

            <PromptInfoCard type="tips" title="コツ3：複数の指示を組み合わせる">
              「まず日付ごとに分類して、その後ファイル名を統一して」というように、複数の指示を組み合わせることも可能です。
            </PromptInfoCard>
          </section>

          <section id="summary" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              ChatGPTの新アプリ『Codex』は、AIの使い方を根本的に変えるツールです。これまで「AIは質問に答えてくれるだけ」と思っていた初心者の皆さんにこそ、このツールの価値が分かるはずです。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              ファイル操作が苦手だからこそ、Codexを使う価値があります。スマホやデジカメの写真整理、Excelの名簿管理、書類のファイル形式変換...こうした「面倒だけど、やらなきゃいけない作業」を、AIに丸投げしましょう。
            </p>
            <p className="text-[#333333] leading-relaxed">
              時間を取り戻し、本当にやりたいことに集中する。それが、AI時代の賢い働き方です。
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
