
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

export default function ManusExternalIntegrationPage() {
  // SEO最適化
  useSEO({
    title: 'Manusと外部ツール連携｜最強の自動化環境を構築するプロンプト術',
    description: 'ManusをGitHub、Google Workspace、外部APIと連携させ、プロジェクト管理やデータ同期を自動化する実践的なテクニックを解説します。',
    keywords: 'Manus, AIエージェント, 外部連携, GitHub, Google Workspace, API連携, 自動化, プロンプト術, 中級者向け',
  })

  // OGP設定
  useOGP({
    title: 'Manusと外部ツール連携｜最強の自動化環境を構築するプロンプト術',
    description: 'ManusをGitHub、Google Workspace、外部APIと連携させ、プロジェクト管理やデータ同期を自動化する実践的なテクニックを解説します。',
    image: 'https://promptlist.jp/images/manus-external-integration-eyecatch.jpg', // 適切な画像URLに置き換える
    url: 'https://promptlist.jp/articles/manus-external-integration',
    type: 'article',
  })

  // 構造化データ設定
  useStructuredData({
    title: 'Manusと外部ツール連携｜最強の自動化環境を構築するプロンプト術',
    description: 'ManusをGitHub、Google Workspace、外部APIと連携させ、プロジェクト管理やデータ同期を自動化する実践的なテクニックを解説します。',
    author: 'Manus AI',
    datePublished: '2026-07-18T00:00:00Z',
    dateModified: '2026-07-18T00:00:00Z',
    image: 'https://promptlist.jp/images/manus-external-integration-eyecatch.jpg', // 適切な画像URLに置き換える
    url: 'https://promptlist.jp/articles/manus-external-integration',
  })

  const relatedArticles = [
    {
      title: 'AIエージェント超入門',
      description: '2026年のAIは「自分で考えて動く」。AIエージェントの基本を解説。',
      href: '/articles/ai-agent-beginner-guide',
    },
    {
      title: 'Manusエージェント完全ガイド｜AI自動化の第一歩',
      description: '自律型AIエージェント「Manus」の基本から実践的なプロンプト術まで。',
      href: '/articles/manus-ai-agent-beginner',
    },
    {
      title: 'AIエージェントManusで実現する「自律型多段階ワークフロー」構築ガイド',
      description: '複雑な多段階プロセスを自律的に判断し、完結させるManusの活用法。',
      href: '/articles/manus-advanced-workflow',
    },
  ]

  return (
    <PageLayout>
      <article className="max-w-3xl mx-auto">
        <ArticleHeader
          title="【中級者向け】Manusを「外部ツール」と連携させて最強の自動化環境を構築するプロンプト術"
          category="AI活用"
          readTime="10分"
          publishDate="2026-07-18"
          author="Manus AI"
        />

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Manusは「ハブ」となるAIエージェント
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              AIエージェントManusは、単体でも強力なタスク実行能力を持っています。しかし、その真価は、外部のサービスやツールと連携することで最大限に発揮されます。
              GitHubでのコード管理、Google Workspaceでのドキュメント作成やデータ分析、さらには様々な外部APIとの連携により、Manusはあなたのデジタルワークフローの中心となる「ハブ」として機能します。
            </p>
            <p className="text-[#333333] leading-relaxed mb-4">
              本記事では、中級者向けに、Manusを使って外部サービスを操作し、プロジェクト管理やデータ同期を自動化するための実践的なテクニックを解説します。
              これにより、これまで手動で行っていた煩雑な作業から解放され、より戦略的な業務に集中できるようになるでしょう。
            </p>
          </section>

          <section id="github-integration" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              GitHub CLI (gh) を使ったリポジトリ操作の自動化
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              開発プロジェクトにおいて、GitHubは不可欠なツールです。Manusは、GitHub CLI (<code className="bg-gray-100 p-1 rounded">gh</code>) を利用することで、リポジトリのクローン、コミット、プッシュ、Issue管理など、様々な操作を自動化できます。
            </p>
            <PromptBlock
              title="GitHubのIssueを自動で取得・要約"
              prompt="GitHubの 'nakamurar135-hub/promptlist' リポジトリから、オープンなIssueをすべて取得し、それぞれのタイトルと内容を要約してください。要約結果はMarkdown形式で出力し、ファイルに保存してください。"
            />
            <PromptInfoCard type="tips" title="ポイント">
              <ul className="space-y-2 text-sm">
                <li><code className="bg-gray-100 p-1 rounded">gh issue list</code> や <code className="bg-gray-100 p-1 rounded">gh issue view</code> コマンドを組み合わせることで、詳細な情報を取得できます。</li>
                <li>Manusのコード実行能力を活用し、取得した情報を整形・分析することも可能です。</li>
              </ul>
            </PromptInfoCard>
          </section>

          <section id="google-workspace-integration" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              Google SheetsやDriveとのデータ連携
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Google Workspaceは、多くのビジネスで利用される生産性向上ツールです。Manusは、Google SheetsやDriveと連携することで、データ入力、レポート作成、ファイル管理などを自動化できます。
            </p>
            <PromptBlock
              title="市場調査結果をGoogle Sheetsに自動追記"
              prompt="最新の市場調査結果を分析し、主要な競合企業3社の情報を抽出してください。抽出した企業名、製品名、市場シェアのデータを、指定されたGoogle Sheetsの「市場調査データ」シートに自動で追記してください。"
            />
            <PromptInfoCard type="tips" title="ポイント">
              <ul className="space-y-2 text-sm">
                <li>Google WorkspaceのAPIをManus経由で呼び出すことで、高度な連携が可能です。</li>
                <li>スプレッドシートの特定のセルにデータを書き込んだり、ドライブ内のファイルを整理したりすることもできます。</li>
              </ul>
            </PromptInfoCard>
          </section>

          <section id="external-api-integration" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              外部API（OpenAI, Anthropic等）をManus経由で呼び出すワークフロー
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Manusは、OpenAIやAnthropicなどの強力なLLM（大規模言語モデル）APIを直接呼び出すことができます。これにより、より高度なテキスト生成、要約、翻訳、感情分析などをワークフローに組み込むことが可能です。
            </p>
            <PromptBlock
              title="顧客からの問い合わせメールを自動で分類・要約し、CRMに登録"
              prompt="受信した顧客からの問い合わせメールの内容をOpenAI APIで分析し、問い合わせの種類（例: 製品に関する質問、技術サポート、料金について）を分類してください。その後、メールの要点を抽出し、その情報と分類結果をCRMシステム（架空のAPIを想定）に登録するためのAPIリクエストを生成・実行してください。"
            />
            <PromptInfoCard type="tips" title="ポイント">
              <ul className="space-y-2 text-sm">
                <li>Manusは、APIキーの管理やリクエストの構築、レスポンスの解析までを一貫して行えます。</li>
                <li>複数のAPIを組み合わせて、より複雑な処理を実現することも可能です。</li>
              </ul>
            </PromptInfoCard>
          </section>

          <section id="conclusion" className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 pb-2 border-b-2 border-[#5B9BD5]">
              まとめ：Manusで広がる自動化の可能性
            </h2>
            <p className="text-[#333333] leading-relaxed mb-4">
              Manusを外部ツールやAPIと連携させることで、その能力は飛躍的に向上します。
              GitHubでの開発ワークフローの効率化、Google Workspaceでのデータ管理の自動化、そしてLLM APIを活用した高度なコンテンツ処理など、その応用範囲は無限大です。
            </p>
            <p className="text-[#333333] leading-relaxed">
              本記事で紹介したテクニックを参考に、ぜひあなたの業務にManusを導入し、最強の自動化環境を構築してみてください。
              AIエージェントがあなたの「右腕」となり、生産性を劇的に向上させることでしょう。
            </p>
          </section>

          <RelatedArticles articles={relatedArticles} />
        </div>
      </article>
    </PageLayout>
  )
}
