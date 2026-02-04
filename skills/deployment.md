# S3 + CloudFront デプロイスキル

## 概要

このドキュメントは、S3とCloudFrontを使用したWebサイトのデプロイ方法を説明します。

## 前提条件

- AWS CLI がインストールされていること
- AWS認証情報が設定されていること
- S3バケットが作成済みであること

## 環境変数の設定

```bash
# 必須
export S3_BUCKET="your-bucket-name"

# オプション（CloudFrontを使用する場合）
export CLOUDFRONT_DISTRIBUTION_ID="your-distribution-id"

# オプション（デフォルト以外のプロファイルを使用する場合）
export AWS_PROFILE="your-profile"
```

## デプロイコマンド

### 基本的なデプロイ

```bash
make deploy
```

### ドライラン（確認のみ）

```bash
make deploy-dry-run
```

### 直接スクリプトを実行

```bash
./scripts/deploy.sh -b your-bucket-name -d your-distribution-id
```

## コマンドオプション

| オプション | 説明 |
|-----------|------|
| `-b, --bucket` | S3バケット名 |
| `-d, --dist-id` | CloudFrontディストリビューションID |
| `-s, --source` | ソースディレクトリ（デフォルト: ./src） |
| `-p, --profile` | AWSプロファイル（デフォルト: default） |

## ディレクトリ構造

```
promptlist/
├── formats/           # フォーマットテンプレート
│   ├── article-format.md
│   └── design-format.md
├── scripts/           # デプロイスクリプト
│   └── deploy.sh
├── skills/            # スキルドキュメント
│   └── deployment.md
├── src/               # Webサイトのソースコード
├── Makefile
└── README.md
```

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

# プロファイルの確認
aws sts get-caller-identity
```

### S3バケットへのアクセス権限がない

IAMポリシーで以下の権限が必要です：

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
        "arn:aws:s3:::your-bucket-name",
        "arn:aws:s3:::your-bucket-name/*"
      ]
    }
  ]
}
```

## CloudFrontキャッシュ無効化

デプロイ時に `CLOUDFRONT_DISTRIBUTION_ID` が設定されていれば、自動的にキャッシュが無効化されます。

手動で無効化する場合：

```bash
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```
