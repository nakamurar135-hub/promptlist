#!/bin/bash
set -e

# ==============================================================================
# S3 デプロイスクリプト
# ==============================================================================

# 設定（環境変数または .env ファイルから読み込み）
S3_BUCKET="${S3_BUCKET:-}"
CLOUDFRONT_DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID:-}"
SOURCE_DIR="${SOURCE_DIR:-./src}"
AWS_PROFILE="${AWS_PROFILE:-default}"

# 色付き出力
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# ログ関数
log_info() { echo -e "${GREEN}[INFO]${NC} $1"; }
log_warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# 使い方
usage() {
    echo "Usage: $0 [options]"
    echo ""
    echo "Options:"
    echo "  -b, --bucket BUCKET    S3バケット名"
    echo "  -d, --dist-id ID       CloudFrontディストリビューションID"
    echo "  -s, --source DIR       ソースディレクトリ (default: ./src)"
    echo "  -p, --profile PROFILE  AWSプロファイル (default: default)"
    echo "  -h, --help             このヘルプを表示"
    echo ""
    echo "Environment variables:"
    echo "  S3_BUCKET                    S3バケット名"
    echo "  CLOUDFRONT_DISTRIBUTION_ID   CloudFrontディストリビューションID"
    echo "  SOURCE_DIR                   ソースディレクトリ"
    echo "  AWS_PROFILE                  AWSプロファイル"
}

# 引数パース
while [[ $# -gt 0 ]]; do
    case $1 in
        -b|--bucket)
            S3_BUCKET="$2"
            shift 2
            ;;
        -d|--dist-id)
            CLOUDFRONT_DISTRIBUTION_ID="$2"
            shift 2
            ;;
        -s|--source)
            SOURCE_DIR="$2"
            shift 2
            ;;
        -p|--profile)
            AWS_PROFILE="$2"
            shift 2
            ;;
        -h|--help)
            usage
            exit 0
            ;;
        *)
            log_error "不明なオプション: $1"
            usage
            exit 1
            ;;
    esac
done

# 必須パラメータのチェック
if [[ -z "$S3_BUCKET" ]]; then
    log_error "S3バケット名が指定されていません"
    log_info "環境変数 S3_BUCKET を設定するか、-b オプションを使用してください"
    exit 1
fi

# ソースディレクトリの存在チェック
if [[ ! -d "$SOURCE_DIR" ]]; then
    log_error "ソースディレクトリが存在しません: $SOURCE_DIR"
    exit 1
fi

# AWS CLIの存在チェック
if ! command -v aws &> /dev/null; then
    log_error "AWS CLI がインストールされていません"
    log_info "インストール方法: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"
    exit 1
fi

# デプロイ開始
log_info "デプロイを開始します..."
log_info "  バケット: s3://$S3_BUCKET"
log_info "  ソース: $SOURCE_DIR"
log_info "  プロファイル: $AWS_PROFILE"

# S3へ同期
log_info "S3にファイルをアップロード中..."
aws s3 sync "$SOURCE_DIR" "s3://$S3_BUCKET" \
    --profile "$AWS_PROFILE" \
    --delete \
    --exclude ".git/*" \
    --exclude ".gitignore" \
    --exclude "*.md"

log_info "S3へのアップロードが完了しました"

# CloudFrontキャッシュの無効化（オプション）
if [[ -n "$CLOUDFRONT_DISTRIBUTION_ID" ]]; then
    log_info "CloudFrontキャッシュを無効化中..."
    aws cloudfront create-invalidation \
        --profile "$AWS_PROFILE" \
        --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
        --paths "/*"
    log_info "CloudFrontキャッシュの無効化が完了しました"
else
    log_warn "CloudFrontディストリビューションIDが指定されていないため、キャッシュ無効化をスキップします"
fi

log_info "デプロイが完了しました"
