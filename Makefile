# ==============================================================================
# Promptlist - S3 + CloudFront Web サイト
# ==============================================================================

.PHONY: help deploy deploy-dry-run validate clean setup

# デフォルトターゲット
.DEFAULT_GOAL := help

# 設定
SOURCE_DIR ?= ./src
SCRIPTS_DIR ?= ./scripts

# ヘルプ
help: ## このヘルプを表示
	@echo "利用可能なコマンド:"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}'
	@echo ""
	@echo "環境変数:"
	@echo "  S3_BUCKET                  - S3バケット名（必須）"
	@echo "  CLOUDFRONT_DISTRIBUTION_ID - CloudFrontディストリビューションID（オプション）"
	@echo "  AWS_PROFILE                - AWSプロファイル（デフォルト: default）"

# セットアップ
setup: ## 開発環境のセットアップ
	@echo "開発環境をセットアップ中..."
	@chmod +x $(SCRIPTS_DIR)/*.sh
	@echo "セットアップ完了"

# デプロイ
deploy: setup ## S3にデプロイ
	@$(SCRIPTS_DIR)/deploy.sh

# ドライラン
deploy-dry-run: ## デプロイのドライラン（実際にはアップロードしない）
	@echo "ドライラン: 以下のファイルがアップロードされます"
	@aws s3 sync $(SOURCE_DIR) s3://$(S3_BUCKET) --dryrun --delete --exclude ".git/*" --exclude ".gitignore" --exclude "*.md"

# 検証
validate: ## ソースディレクトリの検証
	@echo "ソースディレクトリを検証中..."
	@if [ ! -d "$(SOURCE_DIR)" ]; then \
		echo "エラー: ソースディレクトリが存在しません: $(SOURCE_DIR)"; \
		exit 1; \
	fi
	@echo "検証完了: $(SOURCE_DIR)"
	@echo "ファイル一覧:"
	@find $(SOURCE_DIR) -type f | head -20

# クリーンアップ
clean: ## 一時ファイルを削除
	@echo "一時ファイルを削除中..."
	@find . -name "*.tmp" -delete
	@find . -name ".DS_Store" -delete
	@echo "クリーンアップ完了"

# サンプルindex.html作成
init-src: ## srcディレクトリにサンプルファイルを作成
	@mkdir -p $(SOURCE_DIR)
	@echo '<!DOCTYPE html>' > $(SOURCE_DIR)/index.html
	@echo '<html lang="ja">' >> $(SOURCE_DIR)/index.html
	@echo '<head>' >> $(SOURCE_DIR)/index.html
	@echo '  <meta charset="UTF-8">' >> $(SOURCE_DIR)/index.html
	@echo '  <meta name="viewport" content="width=device-width, initial-scale=1.0">' >> $(SOURCE_DIR)/index.html
	@echo '  <title>Promptlist</title>' >> $(SOURCE_DIR)/index.html
	@echo '</head>' >> $(SOURCE_DIR)/index.html
	@echo '<body>' >> $(SOURCE_DIR)/index.html
	@echo '  <h1>Welcome to Promptlist</h1>' >> $(SOURCE_DIR)/index.html
	@echo '</body>' >> $(SOURCE_DIR)/index.html
	@echo '</html>' >> $(SOURCE_DIR)/index.html
	@echo "サンプルファイルを作成しました: $(SOURCE_DIR)/index.html"
