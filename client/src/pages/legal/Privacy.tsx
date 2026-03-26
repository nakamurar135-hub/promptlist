import PageLayout from "@/components/layout/PageLayout";
import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  useSEO({
    title: "プライバシーポリシー｜AIプロンプト活用ガイド",
    description: "AIプロンプト活用ガイドのプライバシーポリシーです。個人情報の取り扱い、データ保護、Cookie使用について説明しています。",
    keywords: "プライバシーポリシー,個人情報保護,データ保護,Cookie",
  });
  useOGP({
    title: "プライバシーポリシー｜AIプロンプト活用ガイド",
    description: "個人情報の取り扱い、データ保護、Cookie使用について説明しています。",
    type: "website",
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
          <span>プライバシーポリシー</span>
        </div>

        <div className="prose prose-sm max-w-none">
          <h1 className="text-3xl font-bold text-[#333333] mb-8">プライバシーポリシー</h1>

          <p className="text-[#666666] mb-6">
            本プライバシーポリシーは、「AIプロンプト活用ガイド」（以下「本サイト」）における個人情報の取り扱いについて説明するものです。
          </p>

          <h2 className="text-2xl font-bold text-[#333333] mt-8 mb-4">1. 個人情報の定義</h2>
          <p className="text-[#666666] mb-4">
            本プライバシーポリシーにおいて「個人情報」とは、以下の情報を指します。
          </p>
          <ul className="list-disc list-inside text-[#666666] mb-6 space-y-2">
            <li>ユーザーが登録時に提供する情報（メールアドレス、ユーザー名など）</li>
            <li>本サイトへのアクセス時に自動的に収集される情報（IPアドレス、ブラウザ情報など）</li>
            <li>Cookie、ローカルストレージなどを通じて収集される情報</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#333333] mt-8 mb-4">2. 個人情報の収集方法</h2>
          <p className="text-[#666666] mb-4">
            本サイトは以下の方法で個人情報を収集します。
          </p>
          <ul className="list-disc list-inside text-[#666666] mb-6 space-y-2">
            <li><strong>ユーザー登録時</strong>：メールアドレスなどの情報を直接収集</li>
            <li><strong>アクセスログ</strong>：サーバーログを通じてIPアドレス、アクセス日時、参照ページなどを記録</li>
            <li><strong>Cookie・ローカルストレージ</strong>：ユーザーの利便性向上のため、ブラウザに情報を保存</li>
            <li><strong>分析ツール</strong>：Google Analyticsなどを使用してアクセス統計情報を収集</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#333333] mt-8 mb-4">3. 個人情報の利用目的</h2>
          <p className="text-[#666666] mb-4">
            収集した個人情報は、以下の目的で利用します。
          </p>
          <ul className="list-disc list-inside text-[#666666] mb-6 space-y-2">
            <li>ユーザーアカウントの管理と認証</li>
            <li>サービスの提供と改善</li>
            <li>ユーザーサポートの提供</li>
            <li>アクセス統計の分析と利用傾向の把握</li>
            <li>セキュリティの確保と不正利用の防止</li>
            <li>法令に基づく要求への対応</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#333333] mt-8 mb-4">4. 個人情報の保護</h2>
          <p className="text-[#666666] mb-4">
            本サイトは、収集した個人情報を以下の方法で保護します。
          </p>
          <ul className="list-disc list-inside text-[#666666] mb-6 space-y-2">
            <li>SSL/TLS暗号化通信によるデータ保護</li>
            <li>アクセス制限とパスワード保護</li>
            <li>定期的なセキュリティ監査</li>
            <li>従業員への個人情報保護教育</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#333333] mt-8 mb-4">5. 第三者への情報提供</h2>
          <p className="text-[#666666] mb-6">
            本サイトは、ユーザーの同意がない限り、個人情報を第三者に提供しません。ただし、以下の場合は例外とします。
          </p>
          <ul className="list-disc list-inside text-[#666666] mb-6 space-y-2">
            <li>法令に基づく要求がある場合</li>
            <li>人命の安全が脅かされる緊急の場合</li>
            <li>本サイトの利用規約に違反する行為を防止する必要がある場合</li>
            <li>サービス提供に必要な信頼できるパートナー企業への提供（データ処理業者など）</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#333333] mt-8 mb-4">6. Cookie について</h2>
          <p className="text-[#666666] mb-4">
            本サイトは、ユーザーの利便性向上のため、Cookieを使用します。
          </p>
          <ul className="list-disc list-inside text-[#666666] mb-6 space-y-2">
            <li><strong>セッション管理</strong>：ログイン状態の保持</li>
            <li><strong>ユーザー設定</strong>：言語設定やテーマ設定の保存</li>
            <li><strong>分析</strong>：アクセス統計の収集</li>
          </ul>
          <p className="text-[#666666] mb-6">
            ユーザーはブラウザの設定でCookieを無効にできますが、その場合、本サイトの一部機能が正常に動作しない可能性があります。
          </p>

          <h2 className="text-2xl font-bold text-[#333333] mt-8 mb-4">7. ユーザーの権利</h2>
          <p className="text-[#666666] mb-4">
            ユーザーは、以下の権利を有します。
          </p>
          <ul className="list-disc list-inside text-[#666666] mb-6 space-y-2">
            <li>個人情報の開示請求</li>
            <li>個人情報の訂正・削除請求</li>
            <li>個人情報の利用停止請求</li>
            <li>個人情報の処理に関する苦情申し立て</li>
          </ul>
          <p className="text-[#666666] mb-6">
            これらの請求については、お問い合わせフォームからご連絡ください。
          </p>

          <h2 className="text-2xl font-bold text-[#333333] mt-8 mb-4">8. ポリシーの変更</h2>
          <p className="text-[#666666] mb-6">
            本プライバシーポリシーは、予告なく変更される可能性があります。変更後のポリシーは、本サイトに掲載された時点で有効となります。
          </p>

          <h2 className="text-2xl font-bold text-[#333333] mt-8 mb-4">9. お問い合わせ</h2>
          <p className="text-[#666666] mb-4">
            本プライバシーポリシーに関するご質問やご不明な点については、以下のお問い合わせ先までご連絡ください。
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
