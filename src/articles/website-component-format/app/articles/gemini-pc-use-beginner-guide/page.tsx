
import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import ArticleHeader from "../../components/article/ArticleHeader";
import PromptBlock from "../../components/article/PromptBlock";
import TableOfContents from "../../components/article/TableOfContents";
import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";
import { useStructuredData } from "@/hooks/useStructuredData";

export default function GeminiPcUseBeginnerGuide() {
  const articleTitle = "【初心者向け】マウス操作もAIにお任せ？Google Geminiの『パソコンの使用』で面倒な作業を自動化するプロンプト術";
  const articleDescription = "Google Gemini 3.5 Flashの新機能『パソコンの使用』で、AIが画面を見て操作する自動化プロンプト術を解説。コピペ作業からの解放、安全な使い方を初心者向けに紹介します。";
  const articleKeywords = "Google Gemini, パソコンの使用, AI, プロンプト術, 初心者, 自動化, マウス操作, AI活用";
  const articleImage = "https://promptlist.jp/og-image.png"; // 仮のOGP画像
  const articleUrl = "https://promptlist.jp/articles/gemini-pc-use-beginner-guide";
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
    { id: "what-is-computer-use", text: "パソコンの使用（Computer Use）とは？" },
    { id: "see-and-do", text: "「見て、やって」の指示：視覚的な指示の凄さ" },
    { id: "freedom-from-copy-paste", text: "コピペからの解放：アプリを跨ぐ作業を言葉で繋ぐ" },
    { id: "safe-usage", text: "安全な使い方の基本：AIに操作を任せる際の注意点" },
    { id: "news-source", text: "ニュースソース" },
  ];

  const relatedArticles = [
    { title: "【初心者向け】AIに「仕事を丸投げ」！Microsoft Copilotの『Cowork』で完成品を受け取るプロンプト術", href: "/articles/copilot-cowork-beginner-guide" },
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
              tags={["Google Gemini", "パソコンの使用", "AI", "プロンプト術"]}
            />

            <section id="overview" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                ネタの概要
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Googleの最新AI「Gemini 3.5 Flash」に、AIが直接パソコンの画面を見て操作する『パソコンの使用（Computer Use）』ツールのプレビュー版が登場しました。プロンプトで「このExcelのデータをあのサイトに入力して」と伝えるだけで、AIがあなたの代わりにクリックやタイピングを行ってくれる魔法のような機能の基本を紹介します。
              </p>
            </section>

            <section id="target-audience" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                対象読者
              </h2>
              <ul className="list-disc pl-5 text-[#333333] leading-relaxed mb-4">
                <li>「プロンプト」という言葉は知っているが、入力するのが精一杯な初心者</li>
                <li>複数のアプリを行き来するコピペ作業に疲れている人</li>
                <li>AIが「画面を見ている」という感覚がまだピンとこない人</li>
              </ul>
            </section>

            <section id="prompt-guide-points" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                プロンプトガイドのポイント
              </h2>
              <ul className="list-decimal pl-5 text-[#333333] leading-relaxed mb-4">
                <li><strong className="font-semibold">「見て、やって」の指示</strong>: 「画面の右下にあるボタンを押して」といった、視覚的な指示が通じる凄さを解説。</li>
                <li><strong className="font-semibold">コピペからの解放</strong>: ブラウザからExcelへ、メールからカレンダーへ。アプリを跨ぐ作業を「言葉」で繋ぐ方法。</li>
                <li><strong className="font-semibold">安全な使い方の基本</strong>: AIに操作を任せる際の注意点（確認画面で止めるなど）を初心者に分かりやすく説明。</li>
              </ul>
            </section>

            <section id="what-is-computer-use" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                パソコンの使用（Computer Use）とは？
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Google Gemini 3.5 Flashに搭載された新機能『パソコンの使用（Computer Use）』は、AIがユーザーのPC画面を認識し、マウス操作やキーボード入力を代行することで、様々なタスクを自動化する画期的なツールです。従来のAIがテキストベースの指示に限定されていたのに対し、この機能はAIが視覚情報を処理し、実際のアプリケーションを操作できる点が最大の特徴です。これにより、ユーザーは複雑な手順を言葉で説明するだけで、AIにPC上の作業を「実行」させることが可能になります。
              </p>
            </section>

            <section id="see-and-do" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                「見て、やって」の指示：視覚的な指示の凄さ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                『パソコンの使用』ツールの真骨頂は、AIが画面上の要素を認識し、それに基づいて操作を実行できる点にあります。例えば、「画面の右下にある『保存』ボタンを押して」といった、人間が日常的に行うような視覚的な指示がAIに通じます。AIは画面上のボタン、テキストボックス、画像などを識別し、ユーザーの指示に合致する要素を正確にクリックしたり、テキストを入力したりします。これにより、抽象的な指示だけでなく、具体的な画面操作をAIに任せることが可能となり、より直感的で効率的な作業自動化が実現します。
              </p>
            </section>

            <section id="freedom-from-copy-paste" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                コピペからの解放：アプリを跨ぐ作業を言葉で繋ぐ
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                複数のアプリケーション間でのデータ転送やコピペ作業は、多くのユーザーにとって時間と労力を要する面倒な作業です。『パソコンの使用』ツールは、この課題を解決します。例えば、「このブラウザの情報をExcelに転記して、その内容をカレンダーに登録して」といった一連の指示をAIに与えるだけで、AIがブラウザから情報を抽出し、Excelに貼り付け、さらにカレンダーアプリを開いてイベントを作成するといった、アプリを跨ぐ複雑なワークフローを自動で実行します。これにより、ユーザーは手作業によるコピペから解放され、より創造的な業務に集中できるようになります。
              </p>
            </section>

            <section id="safe-usage" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                安全な使い方の基本：AIに操作を任せる際の注意点
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                AIにPC操作を任せることは非常に便利ですが、同時に注意も必要です。特に初心者ユーザーは、AIが意図しない操作を行わないよう、以下の点に留意することが重要です。
                <ul className="list-disc pl-5 text-[#333333] leading-relaxed mb-4">
                  <li><strong className="font-semibold">明確な指示</strong>: AIへの指示は具体的かつ明確に記述し、曖昧さを避けることが重要です。</li>
                  <li><strong className="font-semibold">確認画面の活用</strong>: 重要な操作の前には、AIに「実行前に確認を求める」ように指示を出すことで、誤操作を防ぐことができます。</li>
                  <li><strong className="font-semibold">最小限の権限</strong>: AIに与えるアクセス権限は、タスク遂行に必要な最小限に留めるべきです。</li>
                  <li><strong className="font-semibold">監視とレビュー</strong>: AIが実行した操作は定期的に監視し、意図通りに動作しているかを確認することが推奨されます。</li>
                </ul>
                これらの注意点を守ることで, AIによるPC操作自動化の恩恵を安全に享受することができます。
              </p>
            </section>

            <section id="news-source" className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
                ニュースソース
              </h2>
              <ul className="list-disc pl-5 text-[#333333] leading-relaxed">
                <li><a href="https://ai.google.dev/gemini-api/docs/changelog?hl=ja" target="_blank" rel="noopener noreferrer">Gemini API リリースノート：Gemini 3.5 Flash でパソコンの使用ツール公開（2026年6月24日）</a></li>
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
