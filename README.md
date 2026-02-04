# Promptlist

S3 + CloudFront で構築する静的Webサイトプロジェクト

## ディレクトリ構造

```
promptlist/
├── formats/           # フォーマットテンプレート
│   ├── article-format.md   # 記事フォーマット
│   └── design-format.md    # デザインフォーマット
├── scripts/           # デプロイスクリプト
│   └── deploy.sh
├── skills/            # スキルドキュメント
│   └── deployment.md
├── src/               # Webサイトのソースコード
├── Makefile
└── README.md
```

## セットアップ

### 1. 環境変数の設定

```bash
export S3_BUCKET="your-bucket-name"
export CLOUDFRONT_DISTRIBUTION_ID="your-distribution-id"  # オプション
```

### 2. 初期化

```bash
make setup
make init-src  # サンプルファイル作成
```

## 使い方

### デプロイ

```bash
make deploy
```

### その他のコマンド

```bash
make help          # ヘルプを表示
make deploy-dry-run # ドライラン
make validate      # ソースの検証
make clean         # 一時ファイル削除
```

## フォーマットの編集

- `formats/article-format.md` - 記事の要件・フォーマットを定義
- `formats/design-format.md` - デザインの要件・フォーマットを定義

## 詳細ドキュメント

- [デプロイスキル](./skills/deployment.md) - デプロイの詳細手順
