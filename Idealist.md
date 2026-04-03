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
    *   [2026-04-02: プロンプト不要？感覚でAIを操る「Vibe Working（バイブ・ワーキング）」入門](docs/ideas/idea-20260402-vibe-working-beginner.md) - *新規追加*
    *   [2026-04-02: 面倒な指示はAIに覚えさせよう！ChatGPT「Skills」超入門](docs/ideas/idea-20260402-chatgpt-skills-beginner.md) - *新規追加*
    *   [2026-04-02: Excelの「わからない」をAIに丸投げ！Copilot Excelエージェント超入門](docs/ideas/idea-20260402-copilot-excel-agent.md) - *新規追加*
    *   [2026-04-02: 「AIに任せる」の第一歩！AIエージェント超入門 - 2026年のAIは「自分で考えて動く」](docs/ideas/idea-20260402-ai-agent-beginner-guide.md) - [記事作成済み](articles/ai-agent-beginner-guide.md)
    *   [2026-03-31: AIに「使い方」を教わる最強のマスターキー・プロンプト](docs/ideas/idea-20260331-ai-master-key-prompt.md) - [記事作成済み](articles/ai-master-key-prompt-guide)
    *   [2026-03-31: Copilot新機能「Think Deeper」活用ガイド](docs/ideas/idea-20260331-copilot-think-deeper-guide.md) - *新規追加*
    *   [2026-03-30: ChatGPT最新版「GPT-5.4」の『おまかせモード』活用術](docs/ideas/idea-20260330-gpt5-4-agent-mode.md) - [記事作成済み](articles/gpt54-agent-mode-guide)
    *   [2026-03-30: Windows 11新機能「Click to Do」超入門](docs/ideas/idea-20260330-windows-click-to-do.md) - *新規追加*
    *   [2026-03-29: ChatGPT「ロックモード」とプライバシー保護プロンプト](docs/ideas/idea-20260329-chatgpt-lock-mode-privacy.md) - *新規追加*
    *   [2026-03-29: Google Nano Banana 2 画像生成プロンプトガイド](docs/ideas/idea-20260329-google-nano-banana-2-image-gen.md) - *新規追加*
    *   [2026-03-28: エージェント型AI（Agentic AI）構築ガイド](docs/ideas/idea-20260328-agentic-ai-workflow.md) - [記事作成済み](articles/agentic-ai-workflow-guide)
    *   [2026-03-28: LLM構造化出力（Structured Output）実践ガイド](docs/ideas/idea-20260328-llm-structured-output.md) - [記事作成済み](articles/llm-structured-output-guide)
    *   [2026-03-27: Google Gemini導入・活用ガイド](docs/ideas/idea-20260327-gemini-beginner-guide.md) - *新規追加*
    *   [2026-03-27: ChatGPT初心者向け完全活用ガイド](docs/ideas/idea-20260327-chatgpt-beginner-guide.md) - *新規追加*
    *   [2026-03-26: OpenClaw導入ガイド](docs/ideas/idea-20260326-openclaw-intro.md) - [記事作成済み](articles/openclaw-intro-guide.md)
    *   [2026-03-26: Claude Code「Auto Mode」活用術](docs/ideas/idea-20260326-claude-auto-mode.md) - [記事作成済み](articles/claude-auto-mode-guide.md)

---
*最終更新日: 2026-04-02*
