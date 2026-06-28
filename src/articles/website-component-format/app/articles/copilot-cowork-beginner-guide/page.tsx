
import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import ArticleHeader from "../../components/article/ArticleHeader";
import PromptBlock from "../../components/article/PromptBlock";
import TableOfContents from "../../components/article/TableOfContents";
import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";
import { useStructuredData } from "@/hooks/useStructuredData";

export default function CopilotCoworkBeginnerGuide() {
  const articleTitle = "【初心者向け】AIに「仕事を丸投げ」！Microsoft Copilot de『Cowork』で完成品を受け取るプロンプト術";
  const articleDescription = "Microsoft 365 Copilotの新機能『Cowork』を活用し、AIにタスクを最後まで完遂させるための初心者向けガイド。従来のチャット形式とは異なる「委任」のプロンプト術を解説します。";
  const articleKeywords = "Microsoft Copilot, Cowork, AI, プロンプト術, 初心者, タスク自動化, 仕事丸投げ, AI活用, Microsoft 365";
  const articleImage = "https://promptlist.jp/og-image.png"; // 仮のOGP画像
  const articleUrl = "https://promptlist.jp/articles/copilot-cowork-beginner-guide";
  const datePublished = "2026-06-28T00:00:00Z";
  const dateModified = "2026-06-28T00:00:00Z";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    keywords: articleKeywords,
  });

  useOGP({
    title: articleTitle,
    description: articleDescription,
    type: "article",
    image: articleImage,
    url: articleUrl,
  });

  useStructuredData({
    title: articleTitle,
    description: articleDescription,
    author: "Manus AI",
    datePublished: datePublished,
    dateModified: dateModified,
    image: articleImage,
    url: articleUrl,
  });

  const tocItems = [
    { id: "overview", text: "ネタの概要" },
    { id: "target-audience", text: "対象読者" },
    { id: "prompt-guide-points", text: "プロンプトガイドのポイント" },
    { id: "what-is-cowork", text: "Coworkとは？「お願い」から「委任」へ" },
    { id: "work-iq", text: "Work IQの活用：AIがあなたのコンテキストを理解する" },
    { id: "async-benefits", text: "完了を待つだけ：非同期処理のメリット" },
    { id: "prompt-examples", text: "プロンプト例" },
    { id: "news-source", text: "ニュースソース" },
  ];

  const relatedArticles = [
    { title: "【初心者向け】マウス操作もAIにお任せ？Google Geminiの『パソコンの使用』で面倒な作業を自動化するプロンプト術", href: "/articles/gemini-pc-use-beginner" },
    { title: "【中級者向け】AIと1000以上のアプリを直結！最新「MCP（Model Context Protocol）」連携による自律型ワークフロー構築ガイド", href: "/articles/mcp-integration-guide" },
  ];

  return (
    <PageLayout
      headerProps={{
        logoSrc: "/logo.svg",
        siteName: "AIプロンプト活用ガイド",
        navItems: [
          { label: "ホーム", href: "/" },
          { label: "記事一覧", href: "/articles" },
        ],
      }}
      footerProps={{
        categories: [], // カテゴリは省略
        copyright: "© 2026 AIプロンプト活用ガイド",
      }}
    >
      <article className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <ArticleHeader
              title={articleTitle}
              datePublished={datePublished}
              dateModified={dateModified}
              author="Manus AI"
              category="初心者向け"
              tags={["Microsoft Copilot", "Cowork", "AI", "プロンプト術"]}
            />

            <section id="overview" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                ネタの概要
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Microsoft 365 CopilotのUIが刷新され、新機能『Cowork（コワーク）』が一般提供されました。従来のチャット形式とは異なり、AIが複数のツールを跨いで「タスクを最後まで完遂」してくれるモードです。ITに疎い初心者でも、「下書き」ではなく「完成品」をAIに作ってもらうための第一歩を解説します。
              </p>
            </section>

            <section id="target-audience" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                対象読者
              </h2>
              <ul className="list-disc pl-5 text-[#333333] leading-relaxed mb-4">
                <li>PCに備え付けのCopilotは知っているが、具体的な使い道がわからない初心者</li>
                <li>プロンプトを何度も打ち直すのが面倒だと感じている人</li>
                <li>「AIに任せる」と言われても、何を頼めばいいかイメージが湧かない人</li>
              </ul>
            </section>

            <section id="prompt-guide-points" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                プロンプトガイドのポイント
              </h2>
              <ul className="list-decimal pl-5 text-[#333333] leading-relaxed mb-4">
                <li><strong className="font-semibold">「お願い」から「委任」へ</strong>: 従来の「〜を教えて」ではなく、「〜を完了させて」という指示の出し方の違い。</li>
                <li><strong className="font-semibold">Work IQの活用</strong>: 自分のメールや会議、ファイルをAIが理解していることを前提とした「あの会議の要点をまとめて資料にして」という具体的な頼み方。</li>
                <li><strong className="font-semibold">完了を待つだけ</strong>: 指示を出した後はPCを閉じてもOK。AIが裏で作業を進めてくれる「非同期」のメリットを強調。</li>
              </ul>
            </section>

            <section id="what-is-cowork" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                Coworkとは？「お願い」から「委任」へ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Microsoft Copilotの新機能「Cowork」は、従来のAIチャットとは一線を画します。これまでのAIは、ユーザーの質問に対して情報を提供したり、簡単なタスクを補助したりする「アシスタント」の役割が主でした。しかし、Coworkは、ユーザーがAIにタスクを「委任」し、AIが自律的に複数のアプリケーションやサービスを横断して、そのタスクを最後まで完遂する能力を持っています。例えば、「先週の営業会議の議事録を作成し、関係者にメールで共有して」と指示すれば、AIがOutlookでメールを検索し、Wordで議事録を作成し、再度Outlookでメールを送信するといった一連の作業を自動で行います。これにより、ユーザーはAIに「お願い」するのではなく、まるで同僚に仕事を頼むように「委任」することが可能になります。
              </p>
            </section>

            <section id="work-iq" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                Work IQの活用：AIがあなたのコンテキストを理解する
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Coworkの強力な機能の背景には、「Work IQ」と呼ばれるAIの高度なコンテキスト理解能力があります。これは、AIがあなたのMicrosoft 365環境（メール、カレンダー、ドキュメント、チャット履歴など）全体を横断的に学習し、あなたの業務内容や過去のやり取りを深く理解していることを意味します。そのため、あなたは「あの会議の要点をまとめて資料にして」といった曖昧な指示でも、AIがどの「会議」を指しているのか、どのような「要点」が必要か、どのような「資料」形式が適切かを推測し、適切なアウトプットを生成できます。これにより、プロンプト作成の手間が大幅に削減され、より自然な言葉でAIに仕事を依頼できるようになります。
              </p>
            </section>

            <section id="async-benefits" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                完了を待つだけ：非同期処理のメリット
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Coworkのもう一つの大きな特徴は、タスク의「非同期処理」です。従来のAIチャットでは、AIからの応答をリアルタイムで待つ必要がありましたが、Coworkでは一度指示を出せば、AIがバックグラウンドで作業を進めてくれます。これにより、ユーザーは指示を出した後にPCを閉じたり、別の作業に移ったりすることが可能です。AIがタスクを完了すると、通知で知らせてくれるため、ユーザーはAIの作業完了を待つ必要がありません。これは、特に時間のかかるタスクや、複数のステップを要する複雑なタスクにおいて、ユーザーの生産性を飛躍的に向上させます。
              </p>
            </section>

            <section id="prompt-examples" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                プロンプト例
              </h2>
              <PromptBlock
                title="営業報告書の作成と共有"
                prompt="先月の営業データを分析し、主要な成果と課題をまとめた営業報告書をWordで作成して。完成したら、営業チーム全員にOutlookで共有して。"
              />
              <PromptBlock
                title="イベント企画のブレインストーミングとタスクリスト作成"
                prompt="来月の新製品発表イベントについて、斬新な企画アイデアを5つ提案して。それぞれのアイデアについて、必要なタスクと担当者（仮）をまとめたExcelシートを作成して。"
              />
              <PromptBlock
                title="顧客からの問い合わせ対応の自動化"
                prompt="Outlookに届いた顧客からの問い合わせメールを分析し、よくある質問とその回答をまとめたFAQドキュメントをSharePointに作成して。新しい問い合わせが来たら、このFAQを参考に自動返信メールのドラフトを作成して。"
              />
            </section>

            <section id="news-source" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                ニュースソース
              </h2>
              <ul className="list-disc pl-5 text-[#333333] leading-relaxed">
                <li><a href="https://note.com/kagen_shin/n/n5dd9b59285bb" target="_blank" rel="noopener noreferrer">Microsoft 365 Copilot UI刷新とCowork GA（2026年6月）</a></li>
              </ul>
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
  );
}
