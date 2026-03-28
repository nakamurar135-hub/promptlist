# 中級者向け記事ネタ帳 (Idealist.md)

このファイルは、中級者向け記事のアイディアを管理するためのネタ帳です。
効率的な管理と可読性向上のため、以下の運用ルールに従って管理します。

## 運用ルール

1.  **ファイル分割**:
    *   ネタは1件ごとに独立したMarkdownファイルとして作成します。
    *   ネタファイルは `docs/ideas/` ディレクトリ内に格納します。
    *   ファイル名は `idea-YYYYMMDD-topic.md` の形式とします。

2.  **20件ごとのグルーピング**:
    *   ネタが20件溜まるごとに、それらをまとめた「セットファイル」を作成します。
    *   セットファイル名は `docs/ideas/set-N.md` (Nは連番) とします。

3.  **シンボリックリンクによる接続**:
    *   この `Idealist.md` からは、最新のセットファイルや重要なネタファイルに対してシンボリックリンク（またはMarkdownのリンク）を用いて接続します。
    *   リポジトリ内での実体管理を `docs/ideas/` に集約し、`Idealist.md` はインデックスとしての役割を担います。

4.  **シンボリックリンクの作成方法 (例)**:
    ```bash
    # docs/ideas/set-1.md へのリンクをルートに作成する場合
    ln -s docs/ideas/set-1.md current-ideas.md
    ```

## ネタ一覧（インデックス）

*   [セット1 (001-020)](docs/ideas/set-1.md) - *未作成*
*   [最新の個別ネタ](docs/ideas/)
    *   [2026-03-28: エージェント型AI（Agentic AI）構築ガイド](docs/ideas/idea-20260328-agentic-ai-workflow.md) - [記事作成済み](articles/agentic-ai-workflow-guide)
    *   [2026-03-28: LLM構造化出力（Structured Output）実践ガイド](docs/ideas/idea-20260328-llm-structured-output.md) - [記事作成済み](articles/llm-structured-output-guide)
    *   [2026-03-27: Google Gemini導入・活用ガイド](docs/ideas/idea-20260327-gemini-beginner-guide.md) - *新規追加*
    *   [2026-03-27: ChatGPT初心者向け完全活用ガイド](docs/ideas/idea-20260327-chatgpt-beginner-guide.md) - *新規追加*
    *   [2026-03-26: OpenClaw導入ガイド](docs/ideas/idea-20260326-openclaw-intro.md) - [記事作成済み](articles/openclaw-intro-guide.md)
    *   [2026-03-26: Claude Code「Auto Mode」活用術](docs/ideas/idea-20260326-claude-auto-mode.md) - [記事作成済み](articles/claude-auto-mode-guide.md)

---
*最終更新日: 2026-03-28*
