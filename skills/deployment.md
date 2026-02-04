# S3 + CloudFront デプロイスキル

## 概要

このドキュメントは、Claude Codeを使用した記事作成からS3デプロイまでの完全なワークフローを説明します。

---

## 本番環境設定

| 項目 | 値 |
|------|-----|
| S3バケット | `promptlist.jp` |
| CloudFront Distribution ID | `E3UD11UI8HVZKX` |
| 公開URL | `https://promptlist.jp` |

---

## Claude Code による記事作成→デプロイ フロー

### 完全なワークフロー

```
1. フォーマット読み込み
   ↓
2. 記事作成依頼
   ↓
3. HTML生成・保存
   ↓
4. デプロイ実行
   ↓
5. 公開完了
```

### Step 1: Claude Codeでフォーマットを読み込む

Claude Codeを起動し、以下を指示：

```
formats/blog-article-format.md と formats/website-component-format.md を読み込んでください
```

### Step 2: 記事作成を依頼

```
上記フォーマットに従って、「ChatGPTでメール文面を作成するプロンプト」についての記事を作成してください。

出力形式: HTML
保存先: src/articles/chatgpt-email-prompt.html
```

### Step 3: 生成されたHTMLを確認

```bash
# ファイル一覧を確認
ls -la src/articles/

# 内容をプレビュー（ローカルサーバー起動）
python3 -m http.server 8000 --directory src
# ブラウザで http://localhost:8000/articles/chatgpt-email-prompt.html にアクセス
```

### Step 4: デプロイ実行

```bash
# 環境変数を設定（初回のみ）
export S3_BUCKET=promptlist.jp
export CLOUDFRONT_DISTRIBUTION_ID=E3UD11UI8HVZKX

# ドライラン（確認）
make deploy-dry-run

# 本番デプロイ
make deploy
```

### Step 5: 公開確認

```
https://promptlist.jp/articles/chatgpt-email-prompt.html
```

---

## Claude Code 一括コマンド

### 記事作成からデプロイまでを一度に依頼

```
以下の手順を実行してください：

1. formats/blog-article-format.md と formats/website-component-format.md を読み込む
2. 「ChatGPTで議事録を作成するプロンプト」についての記事をフォーマットに従って作成
3. src/articles/chatgpt-meeting-minutes.html に保存
4. make deploy を実行してS3にデプロイ
```

---

## 前提条件

- AWS CLI がインストールされていること
- AWS認証情報が設定されていること
- S3バケットが作成済みであること

## 環境変数

```bash
# 必須
export S3_BUCKET=promptlist.jp

# CloudFrontキャッシュ無効化用
export CLOUDFRONT_DISTRIBUTION_ID=E3UD11UI8HVZKX

# オプション（デフォルト以外のプロファイルを使用する場合）
export AWS_PROFILE="your-profile"
```

---

## デプロイコマンド

### Makefile経由（推奨）

```bash
# デプロイ
make deploy

# ドライラン
make deploy-dry-run

# ヘルプ
make help
```

### スクリプト直接実行

```bash
./scripts/deploy.sh -b promptlist.jp -d E3UD11UI8HVZKX
```

### コマンドオプション

| オプション | 説明 |
|-----------|------|
| `-b, --bucket` | S3バケット名 |
| `-d, --dist-id` | CloudFrontディストリビューションID |
| `-s, --source` | ソースディレクトリ（デフォルト: ./src） |
| `-p, --profile` | AWSプロファイル（デフォルト: default） |

---

## ディレクトリ構造

```
promptlist/
├── formats/                        # フォーマット指示書
│   ├── blog-article-format.md      # 記事作成フォーマット
│   └── website-component-format.md # コンポーネントフォーマット
├── scripts/
│   └── deploy.sh                   # デプロイスクリプト
├── skills/
│   └── deployment.md               # このドキュメント
├── src/                            # デプロイ対象
│   ├── index.html
│   ├── articles/                   # 記事HTML
│   │   ├── chatgpt-email-prompt.html
│   │   └── ...
│   ├── css/
│   └── images/
├── .env.example
├── Makefile
└── README.md
```

---

## トラブルシューティング

### AWS CLI がインストールされていない

```bash
# macOS
brew install awscli

# Linux (Ubuntu/Debian)
sudo apt-get install awscli

# pip
pip install awscli
```

### 認証エラー

```bash
# 認証情報の設定
aws configure

# 認証確認
aws sts get-caller-identity
```

### S3バケットへのアクセス権限がない

IAMポリシーで以下の権限が必要：

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::promptlist.jp",
        "arn:aws:s3:::promptlist.jp/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation"
      ],
      "Resource": "*"
    }
  ]
}
```

---

## CloudFrontキャッシュ無効化

デプロイ時に自動で無効化されます。手動で行う場合：

```bash
aws cloudfront create-invalidation \
  --distribution-id E3UD11UI8HVZKX \
  --paths "/*"
```

---

## 記事ファイル命名規則

| 形式 | 例 |
|------|-----|
| ファイル名 | `chatgpt-{トピック}.html` |
| 配置場所 | `src/articles/` |
| URL | `https://promptlist.jp/articles/{ファイル名}` |

例：
- `src/articles/chatgpt-email-prompt.html` → `https://promptlist.jp/articles/chatgpt-email-prompt.html`
- `src/articles/chatgpt-meeting-minutes.html` → `https://promptlist.jp/articles/chatgpt-meeting-minutes.html`
