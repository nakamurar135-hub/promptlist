import PageLayout from "@/components/layout/PageLayout";
import { useSEO } from "@/hooks/useSEO";
import { useOGP } from "@/hooks/useOGP";
import { useStructuredData } from "@/hooks/useStructuredData";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ResponseExampleProps {
  title: string;
  children: React.ReactNode;
}

const ResponseExample: React.FC<ResponseExampleProps> = ({ title, children }) => (
  <div className="bg-muted p-4 rounded-lg border border-border">
    <p className="font-semibold text-sm mb-2">{title}</p>
    <div className="text-sm text-muted-foreground whitespace-pre-wrap">{children}</div>
  </div>
);

export default function AiAgentCourseModule4() {
  useSEO({
    title: "本番環境へのデプロイとCI/CD構築｜AIプロンプト活用ガイド",
    description: "AIエージェントを本番環境にデプロイする方法とCI/CDパイプラインの構築。Docker、Kubernetes、GitHub Actionsを使用した自動化デプロイメント。",
    keywords: "デプロイ,CI/CD,Docker,Kubernetes,AIエージェント,中級者向け",
  });

  useOGP({
    title: "本番環境へのデプロイとCI/CD構築｜AIプロンプト活用ガイド",
    description: "AIエージェントを本番環境にデプロイする方法とCI/CDパイプラインの構築。Docker、Kubernetes、GitHub Actionsを使用した自動化デプロイメント。",
    type: "article",
  });

  useStructuredData({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "本番環境へのデプロイとCI/CD構築",
    description: "AIエージェントを本番環境にデプロイする方法とCI/CDパイプラインの構築。Docker、Kubernetes、GitHub Actionsを使用した自動化デプロイメント。",
    datePublished: "2026-03-08",
    author: {
      "@type": "Organization",
      name: "AIプロンプト活用ガイド",
    },
  });

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            中級者向けコース
          </Badge>
          <h1 className="text-4xl font-bold mb-4">本番環境へのデプロイとCI/CD構築</h1>
          <p className="text-lg text-muted-foreground mb-4">
            第4回：AIエージェントの本番運用と自動デプロイメント
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span>公開日：2026年3月8日</span>
            <span>難易度：中級</span>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">このモジュールについて</h2>
            <p>
              これまで学んだAIエージェント開発の知識を、本番環境で実運用するための方法を学びます。このモジュールでは、Dockerコンテナ化、Kubernetesオーケストレーション、GitHub ActionsによるCI/CDパイプラインの構築方法を解説します。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Dockerによるコンテナ化</h2>
            <p>
              AIエージェントアプリケーションをDockerコンテナとしてパッケージ化することで、環境依存性を排除し、本番環境での一貫性を保証します。以下はDockerfileの例です：
            </p>
            <ResponseExample title="AIエージェント用Dockerfile">
{`FROM python:3.11-slim

WORKDIR /app

# 依存関係のインストール
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# アプリケーションコードのコピー
COPY . .

# 環境変数の設定
ENV PYTHONUNBUFFERED=1
ENV OPENAI_API_KEY=${OPENAI_API_KEY}

# ヘルスチェック
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD python -c "import requests; requests.get('http://localhost:8000/health')"

# アプリケーション起動
CMD ["python", "-m", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]`}
            </ResponseExample>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Kubernetesでのオーケストレーション</h2>
            <p>
              Kubernetesを使用することで、AIエージェントアプリケーションのスケーリング、負荷分散、自動復旧を実現できます。以下はKubernetesマニフェストの例です：
            </p>
            <ResponseExample title="Kubernetes Deployment">
{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: ai-agent-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: ai-agent
  template:
    metadata:
      labels:
        app: ai-agent
    spec:
      containers:
      - name: ai-agent
        image: my-registry/ai-agent:latest
        ports:
        - containerPort: 8000
        env:
        - name: OPENAI_API_KEY
          valueFrom:
            secretKeyRef:
              name: openai-secret
              key: api-key
        resources:
          requests:
            memory: "512Mi"
            cpu: "500m"
          limits:
            memory: "1Gi"
            cpu: "1000m"
        livenessProbe:
          httpGet:
            path: /health
            port: 8000
          initialDelaySeconds: 30
          periodSeconds: 10`}
            </ResponseExample>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">GitHub ActionsによるCI/CD</h2>
            <p>
              GitHub Actionsを使用することで、コード変更時に自動でテスト、ビルド、デプロイを実行できます。以下はワークフロー定義の例です：
            </p>
            <ResponseExample title="GitHub Actions ワークフロー">
{`.github/workflows/deploy.yml:

name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up Python
      uses: actions/setup-python@v4
      with:
        python-version: '3.11'
    
    - name: Install dependencies
      run: |
        pip install -r requirements.txt
        pip install pytest pytest-cov
    
    - name: Run tests
      run: pytest --cov=. --cov-report=xml
    
    - name: Upload coverage
      uses: codecov/codecov-action@v3

  build:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    - uses: actions/checkout@v3
    
    - name: Build Docker image
      run: docker build -t my-registry/ai-agent:latest .
    
    - name: Push to registry
      run: docker push my-registry/ai-agent:latest

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    - name: Deploy to Kubernetes
      run: |
        kubectl set image deployment/ai-agent-deployment \
          ai-agent=my-registry/ai-agent:latest`}
            </ResponseExample>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">本番環境での監視とログ</h2>
            <p>
              本番環境でのAIエージェント運用には、適切な監視とログ記録が不可欠です。以下のベストプラクティスを参考にしてください：
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Prometheus + Grafanaによるメトリクス監視</li>
              <li>ELK Stack（Elasticsearch、Logstash、Kibana）によるログ管理</li>
              <li>Jaegerによる分散トレーシング</li>
              <li>アラート設定と通知システム</li>
              <li>パフォーマンスプロファイリング</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">セキュリティベストプラクティス</h2>
            <p>
              本番環境でのAIエージェント運用には、セキュリティが重要です。以下の対策を実装してください：
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>API キーと認証情報の安全な管理（Kubernetes Secrets）</li>
              <li>ネットワークセキュリティ（ファイアウォール、VPC）</li>
              <li>コンテナイメージスキャン</li>
              <li>アクセス制御とロールベースアクセス（RBAC）</li>
              <li>定期的なセキュリティ監査</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">スケーリング戦略</h2>
            <p>
              AIエージェントアプリケーションのスケーリングには、以下の戦略があります：
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>水平スケーリング</strong>：複数のレプリカを実行</li>
              <li><strong>垂直スケーリング</strong>：リソース割り当ての増加</li>
              <li><strong>自動スケーリング</strong>：負荷に応じた自動調整</li>
              <li><strong>キャッシング戦略</strong>：API呼び出しの削減</li>
              <li><strong>非同期処理</strong>：バックグラウンドジョブの活用</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">トラブルシューティング</h2>
            <p>
              本番環境でのトラブルシューティングのための重要なチェックリスト：
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>ログの確認と分析</li>
              <li>リソース使用率の監視</li>
              <li>API呼び出しのレート制限確認</li>
              <li>ネットワーク接続の確認</li>
              <li>環境変数の設定確認</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">コース完了</h2>
            <p>
              このモジュールで、AIエージェント開発の全体像を学びました。第1回の環境構築から第4回の本番運用まで、実践的なスキルを習得できたはずです。これらの知識を活かして、実際のプロジェクトでAIエージェントを開発・運用してください。
            </p>
          </section>

          <section className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold mb-2">💡 プレミアム会員向け</h3>
            <p>
              このコースはプレミアム会員向けの限定コンテンツです。全4回のモジュールを通じて、AIエージェント開発の実践的なスキルを習得できます。
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
