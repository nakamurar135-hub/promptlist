# Promptlist

S3 + CloudFront で構築するChatGPT/AIプロンプト活用ブログサイト

## ディレクトリ構造

```
promptlist/
├── formats/                        # フォーマット指示書
│   ├── blog-article-format.md      # ブログ記事作成フォーマット
│   └── website-component-format.md # Reactコンポーネントフォーマット
├── scripts/                        # デプロイスクリプト
│   └── deploy.sh
├── skills/                         # スキルドキュメント
│   └── deployment.md
├── src/                            # Webサイトのソースコード（デプロイ対象）
│   ├── index.html
│   ├── articles/                   # 記事HTMLファイル
│   ├── css/
│   └── images/
├── .env.example                    # 環境変数テンプレート
├── Makefile
└── README.md
```

---

## クイックスタート

### 1. 環境変数を設定

```bash
# 本番環境
export S3_BUCKET=promptlist.jp
export CLOUDFRONT_DISTRIBUTION_ID=E3UD11UI8HVZKX
```

### 2. 記事を作成してデプロイ

```bash
# Claudeで記事を作成後、デプロイ
make deploy
```

---

## Claudeによる記事作成→S3デプロイ フロー

### ワークフロー概要

```
┌─────────────────────────────────────────────────────────────────┐
│  1. Claudeにフォーマットを読み込ませる                            │
│     formats/blog-article-format.md                              │
│     formats/website-component-format.md                         │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  2. Claudeに記事作成を依頼                                       │
│     「〇〇についての記事を作成してください」                        │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  3. 生成されたHTMLをsrc/articles/に保存                          │
│     src/articles/article-slug.html                              │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  4. デプロイコマンド実行                                          │
│     make deploy                                                 │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  5. S3アップロード + CloudFrontキャッシュ無効化                    │
│     https://promptlist.jp/articles/article-slug.html で公開     │
└─────────────────────────────────────────────────────────────────┘
```

### Step 1: Claudeにフォーマットを読み込ませる

Claude Code で以下を実行：

```bash
# フォーマットファイルを読み込む
cat formats/blog-article-format.md
cat formats/website-component-format.md
```

または、Claudeに直接指示：

```
formats/blog-article-format.md と formats/website-component-format.md を読み込んでください
```

### Step 2: 記事作成を依頼

```
上記フォーマットに従って、「ChatGPTでメール文面を作成するプロンプト」についての記事を作成してください。
HTMLファイルとして src/articles/chatgpt-email-prompt.html に保存してください。
```

### Step 3: デプロイ

```bash
# ドライラン（確認）
make deploy-dry-run

# 本番デプロイ
make deploy
```

---

## コマンドリファレンス

| コマンド | 説明 |
|---------|------|
| `make help` | ヘルプを表示 |
| `make deploy` | S3にデプロイ + CloudFrontキャッシュ無効化 |
| `make deploy-dry-run` | デプロイのドライラン（実際にはアップロードしない） |
| `make validate` | src/ディレクトリの検証 |
| `make clean` | 一時ファイル削除 |
| `make init-src` | サンプルindex.htmlを作成 |

---

## フォーマット指示書

### blog-article-format.md

ブログ記事作成のためのフォーマット指示書：

- **ターゲット読者**: AI/ChatGPT初心者（30-50代ビジネスパーソン）
- **記事構成**: 導入→ChatGPT説明→プロンプト4選→活用のコツ→注意事項→まとめ→CTA
- **文字数**: 約5,000字
- **SEO設計**: キーワード配置、見出し構造、内部リンク
- **出力形式**: S3+CloudFront用HTML

### website-component-format.md

UIコンポーネントのフォーマット指示書：

- **技術スタック**: React + Tailwind CSS
- **カラーパレット**: プライマリ `#5B9BD5`、アクセント `#FF9800`
- **レイアウト**: 左右広告枠 + 中央80%コンテンツ
- **コンポーネント**: Header, Footer, PromptBlock, CopyButton, TableOfContents 等

---

## 環境変数

| 変数名 | 説明 | 値 |
|--------|------|-----|
| `S3_BUCKET` | S3バケット名 | `promptlist.jp` |
| `CLOUDFRONT_DISTRIBUTION_ID` | CloudFrontディストリビューションID | `E3UD11UI8HVZKX` |
| `AWS_PROFILE` | AWSプロファイル（オプション） | `default` |
| `SOURCE_DIR` | ソースディレクトリ（オプション） | `./src` |

---

## 詳細ドキュメント

- [デプロイスキル](./skills/deployment.md) - デプロイの詳細手順
