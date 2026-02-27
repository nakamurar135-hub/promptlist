import PageLayout from "@/components/layout/PageLayout";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
  useSEO({
    title: "利用規約｜AIプロンプト活用ガイド",
    description: "AIプロンプト活用ガイドの利用規約です。個人利用・商用利用OK、許可不要で自由に利用できます。",
    keywords: "利用規約,Terms of Service,個人利用,商用利用",
  });

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* パンくずリスト */}
        <div className="flex items-center gap-2 text-sm text-[#666666] mb-6">
          <Link href="/" className="flex items-center gap-1 text-[#5B9BD5] hover:text-[#4A8BC4]">
            <ArrowLeft className="w-3.5 h-3.5" />
            ホーム
          </Link>
          <span>/</span>
          <span>利用規約</span>
        </div>

        <div className="prose prose-sm max-w-none">
          <h1 className="text-3xl font-bold text-[#333333] mb-8">利用規約</h1>

          <p className="text-[#666666] mb-6">
            本利用規約は、「AIプロンプト活用ガイド」（以下「本サイト」）の利用条件を定めるものです。本サイトを利用することで、ユーザーは本規約に同意したものとみなされます。
          </p>

          <div className="bg-[#FFF3CD] border border-[#FFE69C] rounded-lg p-4 mb-6">
            <p className="text-[#856404] font-bold mb-2">📌 重要なお知らせ</p>
            <p className="text-[#856404]">
              本サイトのコンテンツ（プロンプト、テンプレート、記事、スキルガイドなど）は、<strong>個人利用・商用利用を問わず、自由に利用できます</strong>。許可を取得する必要はありません。
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#333333] mt-8 mb-4">1. サービスの概要</h2>
          <p className="text-[#666666] mb-6">
            本サイトは、ChatGPTなどのAIツールを効果的に活用するためのプロンプト集、テンプレート、スキルガイドを提供するサービスです。
          </p>

          <h2 className="text-2xl font-bold text-[#333333] mt-8 mb-4">2. コンテンツの利用許諾</h2>
          <p className="text-[#666666] mb-4">
            本サイトが提供するコンテンツ（以下「コンテンツ」）には、以下が含まれます。
          </p>
          <ul className="list-disc list-inside text-[#666666] mb-6 space-y-2">
            <li>プロンプトテンプレート</li>
            <li>記事・ガイド・チュートリアル</li>
            <li>スキルガイド（AIエージェント、プロンプトエンジニアリング、RAGなど）</li>
            <li>その他の教育的コンテンツ</li>
          </ul>

          <h3 className="text-xl font-bold text-[#333333] mt-6 mb-3">2.1 個人利用</h3>
          <p className="text-[#666666] mb-6">
            ユーザーは、本サイトのコンテンツを個人的な学習、研究、自己啓発の目的で自由に利用できます。許可を取得する必要はありません。
          </p>

          <h3 className="text-xl font-bold text-[#333333] mt-6 mb-3">2.2 商用利用</h3>
          <p className="text-[#666666] mb-6">
            ユーザーは、本サイトのコンテンツを商用目的で自由に利用できます。以下のような用途が含まれます。
          </p>
          <ul className="list-disc list-inside text-[#666666] mb-6 space-y-2">
            <li>ビジネスの効率化・改善</li>
            <li>コンサルティングサービスでの活用</li>
            <li>教育・研修プログラムでの利用</li>
            <li>製品・サービスの開発</li>
            <li>その他の営利目的での利用</li>
          </ul>
          <p className="text-[#666666] mb-6">
            <strong>許可を取得する必要はありません。</strong>コンテンツを改変・加工して利用することも可能です。
          </p>

          <h3 className="text-xl font-bold text-[#333333] mt-6 mb-3">2.3 著作権表示</h3>
          <p className="text-[#666666] mb-6">
            コンテンツの利用時に著作権表示（「出典：AIプロンプト活用ガイド」など）を付けることが推奨されますが、必須ではありません。
          </p>

          <h2 className="text-2xl font-bold text-[#333333] mt-8 mb-4">3. 禁止事項</h2>
          <p className="text-[#666666] mb-4">
            ユーザーは、本サイトの利用にあたり、以下の行為を禁止します。
          </p>
          <ul className="list-disc list-inside text-[#666666] mb-6 space-y-2">
            <li>本サイトへの不正アクセス、ハッキング、データ盗聴</li>
            <li>本サイトのコンテンツを完全にコピーして、独自のサービスとして提供する行為</li>
            <li>本サイトの運営を妨害する行為</li>
            <li>他のユーザーに対する嫌がらせ、脅迫、中傷</li>
            <li>違法行為、詐欺、スパムの助長</li>
            <li>本サイトのコンテンツを使用して、違法な目的を達成する行為</li>
            <li>マルウェア、ウイルス、その他の有害なコードの配布</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#333333] mt-8 mb-4">4. ユーザーアカウント</h2>
          <p className="text-[#666666] mb-4">
            ユーザーが本サイトでアカウントを作成する場合、以下の責任を負います。
          </p>
          <ul className="list-disc list-inside text-[#666666] mb-6 space-y-2">
            <li>提供する情報の正確性と完全性</li>
            <li>パスワードの管理と保護</li>
            <li>アカウントを通じた行為に対する責任</li>
          </ul>
          <p className="text-[#666666] mb-6">
            本サイトは、ユーザーのアカウント情報の不正使用に対して責任を負いません。
          </p>

          <h2 className="text-2xl font-bold text-[#333333] mt-8 mb-4">5. 免責事項</h2>
          <p className="text-[#666666] mb-6">
            本サイトのコンテンツは「現状のまま」提供されます。本サイトは、以下に対して責任を負いません。
          </p>
          <ul className="list-disc list-inside text-[#666666] mb-6 space-y-2">
            <li>コンテンツの正確性、完全性、適時性</li>
            <li>コンテンツの利用による損害、損失、利益の喪失</li>
            <li>AIの出力結果や推奨事項に基づく決定の結果</li>
            <li>第三者のコンテンツ、リンク先サイトの内容</li>
            <li>本サイトの中断、停止、削除</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#333333] mt-8 mb-4">6. 有料コンテンツ</h2>
          <p className="text-[#666666] mb-4">
            本サイトの一部コンテンツは有料（プレミアム会員向け）です。
          </p>
          <ul className="list-disc list-inside text-[#666666] mb-6 space-y-2">
            <li>有料コンテンツへのアクセスには、プレミアム会員登録が必要です</li>
            <li>支払い方法、料金、キャンセルポリシーは、別途定められます</li>
            <li>払い戻しは原則として行いません</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#333333] mt-8 mb-4">7. 利用規約の変更</h2>
          <p className="text-[#666666] mb-6">
            本利用規約は、予告なく変更される可能性があります。変更後の規約は、本サイトに掲載された時点で有効となります。
          </p>

          <h2 className="text-2xl font-bold text-[#333333] mt-8 mb-4">8. 準拠法と管轄</h2>
          <p className="text-[#666666] mb-6">
            本利用規約は日本法に準拠し、日本の裁判所が管轄権を有します。
          </p>

          <h2 className="text-2xl font-bold text-[#333333] mt-8 mb-4">9. お問い合わせ</h2>
          <p className="text-[#666666] mb-4">
            本利用規約に関するご質問やご不明な点については、以下のお問い合わせ先までご連絡ください。
          </p>
          <div className="bg-[#F9FAFB] p-4 rounded-lg border border-[#E5E7EB] text-[#666666]">
            <p><strong>メール</strong>：support@promptlist.jp</p>
          </div>

          <p className="text-[#999999] text-sm mt-8">
            最終更新日：2026年2月27日
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
