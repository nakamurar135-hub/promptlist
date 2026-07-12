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
* [2026-07-12: 【中級者向け】AI業界に激震！Apple対OpenAIの提訴と、家庭へ浸透するChatGPT最新活用ガイド](docs/ideas/idea-20260712-apple-openai-lawsuit-chatgpt-home.md) - *新規追加*
*   [2026-07-11: 【中級者向け】1枚の写真から販促セットを自動生成！最新AI「GPT-5.6 Sol」によるマルチステップ・クリエイティブ活用ガイド](docs/ideas/idea-20260711-gpt56-sol-multistep-creative.md) - [記事作成済み](src/articles/website-component-format/app/articles/gpt56-sol-multistep-creative/page.tsx)
*   [2026-07-11: 【中級者向け】Instagramの新AI「Muse Image」で実現する超パーソナライズ広告制作と、企業が守るべきプライバシーガバナンス](docs/ideas/idea-20260711-instagram-muse-image-governance.md) - *新規追加*
*   [2026-05-22: 【中級者向け】AIが自律的にタスクを完遂！次世代AIエージェント『Manus』活用ガイド](docs/ideas/idea-20260522-manus-autonomous-agent.md) - [記事作成済み](src/articles/website-component-format/app/articles/manus-autonomous-agent/page.tsx)

*   [セット1 (001-020)](docs/ideas/set-1.md) - *未作成*
*   [2026-06-26: 【中級者向け】AIが自律的にタスクを完遂！次世代AIエージェント『Manus』活用ガイド](docs/ideas/idea-20260626-manus-ai-agent-guide.md) - [記事作成済み](src/articles/website-component-format/app/articles/manus-ai-agent-guide/page.tsx)

*   [最新の個別ネタ](docs/ideas/)
    *   [2026-06-23: 【初心者向け】iPhoneの「ショートカット」が魔法の杖に！自然言語で自動化プロンプト術](docs/ideas/idea-20260623-apple-shortcuts-natural-language.md) - *新規追加*
    *   [2026-06-23: 【初心者向け】「ググる」が「買い物代行」に！Google新検索ボックスと『Universal Cart』活用プロンプト術](docs/ideas/idea-20260623-google-universal-cart-shopping.md) - *新規追加*
    *   [2026-07-03: 【中級者向け】チームのAI活用を加速！Anthropicの新機能『Claude Tag』による共同作業プロンプト術](docs/ideas/idea-20260703-claude-tag-workflow.md) - [記事作成済み](src/articles/website-component-format/app/articles/claude-tag-workflow/page.tsx)
    *   [2026-07-03: 【中級者向け】Googleが放つ究極の自動化！『Gemini Enterprise Agent Platform』導入・活用ガイド](docs/ideas/idea-20260703-gemini-enterprise-agent.md) - *新規追加*
    *   [2026-07-10: 【初心者向け】「ググる」の終焉？Geminiの新機能『Deep Research』でプロ級 of 調査レポートを自動生成するプロンプト術](docs/ideas/idea-20260710-gemini-deep-research-beginner.md) - [記事作成済み](src/articles/website-component-format/app/articles/gemini-deep-research-beginner/page.tsx)
    *   [2026-07-10: 【初心者向け】AIが「じっくり考えて」から答えてくれる！Copilotの『Think Deeper』で失敗しない相談術](docs/ideas/idea-20260710-copilot-think-deeper-beginner.md) - *新規追加*
    *   [2026-06-25: 【初心者向け】言葉が「動くマニュアル」に変身！Google検索の新機能『ジェネレーティブUI』活用プロンプト術](docs/ideas/idea-20260625-google-generative-ui-simulations.md) - [記事作成済み](src/articles/website-component-format/app/articles/google-generative-ui-simulations/page.tsx)
    *   [2026-06-25: 【初心者向け】「あの時の写真」も「あのメール」もAIが即発見！Siri AIの『自分専用検索』プロンプト術](docs/ideas/idea-20260625-siri-ai-personal-context-search.md) - *新規追加*
    *   [2026-04-04: プロンプトは「書く」から「話す」へ！ChatGPT「高度な音声モード」活用術](docs/ideas/idea-20260404-chatgpt-voice-beginner.md) - [記事作成済み](src/articles/website-component-format/app/articles/chatgpt-voice-beginner/page.tsx)
    *   [2026-04-04: ググるより速い！ChatGPTの「検索機能（Search）」で最新情報を引き出すプロンプト術](docs/ideas/idea-20260404-chatgpt-search-beginner.md) - [記事作成済み](src/articles/website-component-format/app/articles/chatgpt-search-beginner/page.tsx)
    *   [2026-04-02: プロンプト不要？感覚でAIを操る「Vibe Working（バイブ・ワーキング）」入門](docs/ideas/idea-20260402-vibe-working-beginner.md) - [記事作成済み](src/articles/website-component-format/app/articles/vibe-working-beginner/page.tsx)
    *   [2026-04-02: 面倒な指示はAIに覚えさせよう！ChatGPT「Skills」超入門](docs/ideas/idea-20260402-chatgpt-skills-beginner.md) - [記事作成済み](src/articles/website-component-format/app/articles/chatgpt-skills-beginner/page.tsx)
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
    *   [2026-04-08: 【初心者向け】「あのサイト、何だっけ？」をAIが解決！Chromeの『AI履歴検索』活用プロンプト術](docs/ideas/idea-20260408-chrome-ai-history-search.md) - [記事作成済み](src/articles/website-component-format/app/articles/chrome-ai-history-search/page.tsx)
    *   [2026-04-08: 【初心者向け】メールもSNSも「右クリック」で完成！Edgeの『AI書き換え』プロンプト術](docs/ideas/idea-20260408-edge-ai-rewrite.md) - [記事作成済み](src/articles/website-component-format/app/articles/edge-ai-rewrite/page.tsx)
    *   [2026-04-09: 【初心者向け】検索は「ググる」から「聞く」へ！Yahooの新機能『Yahoo Scout』活用プロンプト術](docs/ideas/idea-20260409-yahoo-scout-beginner.md) - [記事作成済み](src/articles/website-component-format/app/articles/yahoo-scout-beginner/page.tsx)
    *   [2026-04-09: 【初心者向け】iPhoneのSiriが賢くなった！Google Gemini搭載で「頼み事」が通じるプロンプト術](docs/ideas/idea-20260409-siri-gemini-beginner.md) - [記事作成済み](src/articles/website-component-format/app/articles/siri-gemini-beginner/page.tsx)
    *   [2026-04-12: 【中級者向け】AIエージェントで業務を自動化！「自律型ワークフロー」構築プロンプト術](docs/ideas/idea-20260412-ai-agent-workflow.md) - [記事作成済み](src/articles/website-component-format/app/articles/ai-agent-workflow/page.tsx)
    *   [2026-04-13: 【初心者向け】言葉が「動く図解」に！Geminiの『シミュレーター生成』プロンプト術](docs/ideas/idea-20260413-gemini-dynamic-visualizer.md) - [記事作成済み](src/articles/website-component-format/app/articles/gemini-dynamic-visualizer/page.tsx)
    *   [2026-04-13: 【初心者向け】スマートスピーカーが「話の通じる家族」に！Gemini for Homeの『意図を汲み取る』プロンプト術](docs/ideas/idea-20260413-gemini-for-home-beginner.md) - [記事作成済み](src/articles/website-component-format/app/articles/gemini-for-home-beginner/page.tsx)
    *   [2026-04-15: 【初心者向け】もうプロンプトを打ち直さない！Chromeの『Skills』でAIを「自分専用」に育てる術](docs/ideas/idea-20260415-chrome-gemini-skills.md) - [記事作成済み](src/articles/website-component-format/app/articles/chrome-gemini-skills/page.tsx)
    *   [2026-04-15: 【初心者向け】メール作成の「悩み」をAIに丸投げ！Copilot in Outlookで『下書き』から卒業する術](docs/ideas/idea-20260415-copilot-outlook-email-draft.md) - *新規追加*
    *   [2026-04-17: 【初心者向け】画面上の「これ」をAIが即解決！Windows 11の新機能『Click to Do』活用プロンプト術](docs/ideas/idea-20260417-windows-click-to-do-beginner.md) - [記事作成済み](src/articles/website-component-format/app/articles/windows-click-to-do-beginner/page.tsx)
    *   [2026-04-17: 【初心者向け】AIが「じっくり考えて」から答えてくれる！Copilotの『Think Deeper』で失敗しない相談術](docs/ideas/idea-20260417-copilot-think-deeper-beginner.md) - [記事作成済み](src/articles/website-component-format/app/articles/copilot-think-deeper-beginner/page.tsx)
    *   [2026-04-16: 【中級者向け】自分専用のAIツールをノーコードで！Claude Opus 4.7 & Claude Builder 活用ガイド](docs/ideas/idea-20260416-claude-opus-47-builder.md) - *新規追加*
    *   [2026-04-18: 【中級者向け】アプリ間移動をゼロに！Geminiの『@メンション』でGoogle Workspaceを1つの画面で操る術](docs/ideas/idea-20260418-gemini-mention-google-workspace.md) - *新規追加*
    *   [2026-04-19: 【初心者向け】回答の一部を「選んで質問」！Copilotの新機能でピンポイントに解決するプロンプト術](docs/ideas/idea-20260419-copilot-select-ask.md) - [記事作成済み](src/articles/website-component-format/app/articles/copilot-select-ask/page.tsx)
    *   [2026-04-19: 【初心者向け】もう「ググる」で迷わない！ChatGPT Searchの『聞き直し』で最新情報を絞り込むプロンプト術](docs/ideas/idea-20260419-chatgpt-multi-turn-search.md) - *新規追加*
    *   [2026-04-20: 【初心者向け】Excelの「面倒な作業」をAIが自動完結！Copilotの『エンドツーエンド業務自動化』プロンプト術](docs/ideas/idea-20260420-copilot-excel-automation.md) - [記事作成済み](src/articles/website-component-format/app/articles/copilot-excel-automation/page.tsx)
    *   [2026-04-20: 【初心者向け】AIが「考えてから動く」！Gemma 4の『エージェント機能』で頼み事が1回で通じるプロンプト術](docs/ideas/idea-20260420-gemma-agent-beginner.md) - [記事作成済み](src/articles/website-component-format/app/articles/gemma-agent-beginner/page.tsx)
    *   [2026-04-21: 【初心者向け】Gemini「パーソナル インテリジェンス」で自分専用のAIアシスタントを作る](docs/ideas/idea-20260421-gemini-personal-intelligence.md) - *新規追加*
    *   [2026-04-21: 【初心者向け】Copilotで「会議の動画」を自動で短縮！要点だけを見る「動画要約」術](docs/ideas/idea-20260421-copilot-meeting-video-summary.md) - *新規追加*
    *   [2026-04-25: 【中級者向け】AIが勝手に仕事を終わらせる？GPT-5.5の『自律実行モード』活用プロンプト術](docs/ideas/idea-20260425-gpt5-5-autonomous-tasks.md) - *新規追加*
    *   [2026-04-26: 【初心者向け】プレゼン資料の「わからない」を即解決！PowerPointの新機能『Explainer』活用プロンプト術](docs/ideas/idea-20260426-powerpoint-explainer.md) - [記事作成済み](src/articles/website-component-format/app/articles/powerpoint-explainer/page.tsx)
    *   [2026-04-26: 【初心者向け】登録不要・プロンプト不要？ソフトバンクの『だれでもAI』で始める「頑張らない」AI活用術](docs/ideas/idea-20260426-softbank-darede-ai.md) - *新規追加*
    *   [2026-04-28: 【初心者向け】Copilotがさらに進化！最新AI「GPT-5.5 Thinking」と「ChatGPT Images 2.0」で変わる相談・画像生成術](docs/ideas/idea-20260428-copilot-gpt55-images2.md) - [記事作成済み](src/articles/website-component-format/app/articles/copilot-gpt55-images2/page.tsx)
    *   [2026-04-28: 【初心者向け】Google ドライブが賢くなった！新機能『AI概要（AI Overviews）』で大量のファイルから答えを即座に見つけるプロンプト術](docs/ideas/idea-20260428-google-drive-ai-overview.md) - *新規追加*
    *   [2026-04-29: 【初心者向け】もう「クリック」すら不要？ブラウザ操作AI『Copelf』でルーチンワークを自動化するプロンプト術](docs/ideas/idea-20260429-copelf-browser-automation.md) - [記事作成済み](src/articles/website-component-format/app/articles/copelf-browser-automation/page.tsx)
    *   [2026-04-29: 【初心者向け】パワポやExcelにAIが常駐！『Genspark Workspace 4.0』で資料作成を「AI社員」に任せるプロンプト術](docs/ideas/idea-20260429-genspark-office-integration.md) - [記事作成済み](src/articles/website-component-format/app/articles/genspark-office-integration/page.tsx)
    *   [2026-04-30: 【初心者向け】もう「コピペ」で悩まない！Geminiの『ファイル直接生成』で資料を即ダウンロードするプロンプト術](docs/ideas/idea-20260430-gemini-file-generation.md) - *新規追加*
    *   [2026-04-30: 【初心者向け】メールの山にさようなら！Outlookの『Copilotエージェント』でAIに秘書を任せるプロンプト術](docs/ideas/idea-20260430-outlook-copilot-agent.md) - *新規追加*
    *   [2026-05-02: 【中級者向け】クリエイティブ作業を「指示」で自動化！Adobe Firefly AI Assistant活用ガイド](docs/ideas/idea-20260502-adobe-firefly-assistant.md) - *新規追加*
