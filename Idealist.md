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
*   [2026-05-22: 【中級者向け】AIが自律的にタスクを完遂！次世代AIエージェント『Manus』活用ガイド](docs/ideas/idea-20260522-manus-autonomous-agent.md) - [記事作成済み](src/articles/website-component-format/app/articles/manus-autonomous-agent/page.tsx)

*   [セット1 (001-020)](docs/ideas/set-1.md) - *未作成*
*   [2026-06-26: 【中級者向け】AIが自律的にタスクを完遂！次世代AIエージェント『Manus』活用ガイド](docs/ideas/idea-20260626-manus-ai-agent-guide.md) - [記事作成済み](src/articles/website-component-format/app/articles/manus-ai-agent-guide/page.tsx)

*   [最新の個別ネタ](docs/ideas/)
    *   [2026-06-23: 【初心者向け】iPhoneの「ショートカット」が魔法の杖に！自然言語で自動化プロンプト術](docs/ideas/idea-20260623-apple-shortcuts-natural-language.md) - *新規追加*
    *   [2026-06-23: 【初心者向け】「ググる」が「買い物代行」に！Google新検索ボックスと『Universal Cart』活用プロンプト術](docs/ideas/idea-20260623-google-universal-cart-shopping.md) - *新規追加*
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
    *   [2026-05-02: 【中級者向け】ビジネスの意思決定をAIが支援！SAS Viya「統治型AIエージェント」導入ガイド](docs/ideas/idea-20260502-sas-viya-governed-agent.md) - *新規追加*
    *   [2026-05-03: 【初心者向け】Word・Excelもそのまま出力！Claudeの『コピペ不要』な書類作成プロンプト術](docs/ideas/idea-20260503-claude-file-export.md) - *新規追加*
    *   [2026-05-03: 【初心者向け】AIがあなたの代わりに「予約」まで完了！最新AIエージェント『Agent i』のおでかけプロンプト術](docs/ideas/idea-20260503-agent-i-travel.md) - *新規追加*
    *   [2026-05-04: 【初心者向け】AIがあなたの「作業員」に！ChatGPTの新アプリ『Codex』で面倒なファイル整理を丸投げするプロンプト術](docs/ideas/idea-20260504-chatgpt-codex-beginner.md) - *新規追加*
    *   [2026-05-04: 【初心者向け】AI特有の「不自然な文章」を卒業！『ペルソナ抽出』であなたの言葉を再現する魔法のプロンプト術](docs/ideas/idea-20260504-ai-persona-writing.md) - *新規追加*
    *   [2026-05-05: 【中級者向け】ChatGPT Canvasで実現する「自律型ドキュメント作成」ワークフロー](docs/ideas/idea-20260505-chatgpt-canvas-advanced.md) - *新規追加*
    *   [2026-05-07: 【中級者向け】AI動画制作の極意！Google Flow & Veo 3.1で「一貫性のあるストーリー」を作るプロンプト術](docs/ideas/idea-20260507-google-flow-veo-advanced.md) - [記事作成済み](src/articles/website-component-format/app/articles/google-flow-veo-advanced/page.tsx)
    *   [2026-05-08: 【中級者向け】金融実務をAIが代行！Anthropicの最新『金融特化型エージェント』活用プロンプト術](docs/ideas/idea-20260508-anthropic-financial-agents.md) - *新規追加*
    *   [2026-05-09: 【初心者向け】Metaの最新AI『Muse Spark』で実現！「指示ひとつ」でマルチメディアを自在に操るプロンプト術](docs/ideas/idea-20260509-meta-muse-spark.md) - [記事作成済み](src/articles/website-component-format/app/articles/meta-muse-spark-beginner/page.tsx)
    *   [2026-06-05: 【初心者向け】AIがあなたの健康相談パートナーに！『ChatGPT Health』活用プロンプト術](docs/ideas/idea-20260605-chatgpt-health-beginner.md) - [記事作成済み](src/articles/website-component-format/app/articles/chatgpt-health-beginner/page.tsx)
    *   [2026-06-05: 【初心者向け】Excelの空欄をAIが勝手に埋めてくる！？Googleスプレッドシートの『Fill with Gemini』活用術](docs/ideas/idea-20260605-gemini-fill-beginner.md) - [記事作成済み](src/articles/website-component-format/app/articles/gemini-fill-beginner/page.tsx)

---
*   [2026-04-23: 【初心者向け】AIと「一緒に作る」新体験！ChatGPTの『Canvas』で文章・資料作成を10倍楽にするプロンプト術](docs/ideas/idea-20260423-chatgpt-canvas-beginner.md) - [記事作成済み](client/src/pages/articles/ChatgptCanvasBeginner.tsx)
*   [2026-04-23: 【初心者向け】調べ物から資料作成まで1画面で完結！Microsoft Copilotの『Pages』活用プロンプト術](docs/ideas/idea-20260423-copilot-pages-beginner.md) - *新規追加*
*   [2026-04-24: 【中級者向け】GPT-5.5「Thinking」で実現する「自律型多段階ワークフロー」構築術](docs/ideas/idea-20260424-gpt5-5-thinking-workflow.md) - [記事作成済み](src/articles/website-component-format/app/articles/gpt5-5-thinking-workflow/page.tsx)
*   [2026-04-24: 【中級者向け】ChatGPT Images 2.0で実現する「一貫性のあるキャラクター・ブランド」画像生成術](docs/ideas/idea-20260424-chatgpt-images-2-0-consistency.md) - *新規追加*

---
*最終更新日: 2026-05-13 (by Manus)

*   [2026-05-12: 【初心者向け】Meta Muse Spark活用ガイド：マルチメディアを自在に操るプロンプト術](docs/ideas/idea-20260509-meta-muse-spark.md) - [記事作成済み](src/articles/website-component-format/app/articles/meta-muse-spark-guide/page.tsx)
    *   [2026-05-13: 【初心者向け】AIに「仕事を丸投げ」！Microsoft Copilot Coworkで『おまかせ業務委任』プロンプト術](docs/ideas/idea-20260513-copilot-cowork-beginner.md) - [記事作成済み](src/articles/website-component-format/app/articles/copilot-cowork-beginner/page.tsx)
    *   [2026-05-13: 【初心者向け】スマホの「通知疲れ」をAIが解決！Apple Intelligence『優先度自動仕分け』活用ガイド](docs/ideas/idea-20260513-apple-intelligence-priority-notifications.md) - [記事作成済み](src/articles/website-component-format/app/articles/apple-intelligence-priority-notifications/page.tsx)

    *   [2026-05-14: 【初心者向け】Androidスマホがもっと賢く！新機能『Gemini Intelligence』活用プロンプト術](docs/ideas/idea-20260514-android-gemini-intelligence.md) - *新規追加*
    *   [2026-05-15: 【中級者向け】場所を選ばずAI開発！OpenAI『Codex Mobile』でスマホからコード生成・デバッグするプロンプト術](docs/ideas/idea-20260515-openai-codex-mobile.md) - *新規追加*
    *   [2026-05-16: 【中級者向け】リサーチ時間を9割削減！Perplexity Proの『Research Agent』で深掘り調査を自動化するプロンプト術](docs/ideas/idea-20260516-perplexity-pro-advanced.md) - *新規追加*
    *   [2026-05-17: 【中級者向け】動画・音声・コードを同時解析！Google Gemini 2.0 Proの『マルチモーダル推論』活用プロンプト術](docs/ideas/idea-20260517-gemini-2-pro-multimodal.md) - [記事作成済み](src/articles/website-component-format/app/articles/gemini-2-pro-multimodal/page.tsx)
    * [2026-05-19: 【中級者向け】AIが自律的にタスクを完遂！OpenAIの最新エージェント『Operator』による業務自動化プロンプト術](docs/ideas/idea-20260519-openai-operator.md) - [記事作成済み](src/articles/website-component-format/app/articles/openai-operator-automation/page.tsx)

*最終更新日: 2026-07-01 (by Manus)

*   [2026-05-23: 【初心者向け】スマホの「通知疲れ」をAIが解決！Apple Intelligence『優先度自動仕分け』活用ガイド](docs/ideas/idea-20260513-apple-intelligence-priority-notifications.md) - [記事作成済み](src/articles/website-component-format/app/articles/apple-intelligence-priority-notifications/page.tsx)
    *   [2026-05-26: 【中級者向け】検索は「調べる」から「任せる」へ！Googleの新機能『検索エージェント』活用プロンプト術](docs/ideas/idea-20260526-google-search-agent.md) - *新規追加*
*   [2026-05-28: 【中級者向け】目に見えるものすべてが検索対象に！Google『マルチモーダル検索エージェント』活用ガイド](docs/ideas/idea-20260528-multimodal-search-agent.md) - [記事作成済み](src/articles/website-component-format/app/articles/multimodal-search-agent/page.tsx)

*   [2026-05-30: 【中級者向け】ついに登場！Anthropicの次世代モデル『Claude 4 Preview』活用プロンプト術](docs/ideas/idea-20260530-claude-4-preview-guide.md) - *新規追加*
*   [2026-05-31: 【中級者向け】最先端AIの光と影！Anthropic의最新モデル『Claude Mythos』セキュリティ活用ガイド](docs/ideas/idea-20260531-claude-mythos-security.md) - [記事作成済み](src/articles/website-component-format/app/articles/claude-mythos-security/page.tsx)

*   [2026-06-01: 【中級者向け】WindowsをAIエージェントが操作する！Build 2026発表の『Agentic AI for Windows』とMCP活用ガイド](docs/ideas/idea-20260601-agentic-ai-windows.md) - [記事作成済み](src/articles/website-component-format/app/articles/agentic-ai-windows/page.tsx)
*   [2026-06-01: 【中級者向け】AIエージェントの「暴走」を防ぐ！Anthropicが公開した『エージェント封じ込め（Containment）』技術の活用術](docs/ideas/idea-20260601-anthropic-containment.md) - [記事作成済み](src/articles/website-component-format/app/articles/anthropic-containment/page.tsx)
*   [2026-06-03: 【中級者向け】AI開発に激震！トランプ大統領の新AI大統領令と「事前審査」への対応プロンプト術](docs/ideas/idea-20260603-trump-ai-executive-order.md) - [記事作成済み](src/articles/website-component-format/app/articles/trump-ai-executive-order/page.tsx)
*   [2026-06-04: 【中級者向け】ノートPCで爆速動作！Googleの最新オープンモデル『Gemma 4』活用ガイド](docs/ideas/idea-20260604-gemma-4-laptop-guide.md) - [記事作成済み](src/articles/website-component-format/app/articles/gemma-4-laptop-guide/page.tsx)
    *   [2026-06-08: 【初心者向け】AIがあなたのことを覚えてくれる！ChatGPTの『Dreaming V3』で賢い相棒を育てるプロンプト術](docs/ideas/idea-20260608-chatgpt-dreaming-v3-beginner.md) - [記事作成済み](src/articles/website-component-format/app/articles/chatgpt-dreaming-v3-beginner/page.tsx)
    *   [2026-06-10: 【初心者向け】センス不要！Google Vidsで「指示ひとつ」でプロ級の紹介動画を作るプロンプト術](docs/ideas/idea-20260610-google-vids-free-beginner.md) - [記事作成済み](src/articles/website-component-format/app/articles/google-vids-free-beginner/page.tsx)
    *   [2026-06-10: 【初心者向け】AIがあなたの「秘書」になる！Microsoft Scoutで会議準備・スケジュール調整を自動化するプロンプト術](docs/ideas/idea-20260610-microsoft-scout-beginner.md) - [記事作成済み](src/articles/website-component-format/app/articles/microsoft-scout-beginner/page.tsx)
    *   [2026-06-13: 【中級者向け】開発がさらに加速！Claude Fable 5とClaude Codeで実現する「自律型開発」プロンプト術](docs/ideas/idea-20260613-claude-fable-5-build.md) - *新規追加*
    *   [2026-06-14: 【初心者向け】AIがあなたの「専属秘書」に！ChatGPTの新記憶システム『Dreaming V3』活用プロンプト術](docs/ideas/idea-20260614-chatgpt-dreaming-v3.md) - *新規追加*
    *   [2026-06-14: 【初心者向け】タブの切り替えはもう不要！Geminiの『Google Workspace拡張機能』でメールも予定も一括操作術](docs/ideas/idea-20260614-gemini-workspace-extensions.md) - *新規追加*
    *   [2026-06-15: 【初心者向け】検索ボックスが「相談窓口」に！Googleの新しい『AI検索窓』でやりたいことを伝えるプロンプト術](docs/ideas/idea-20260615-google-search-box-beginner.md) - [記事作成済み](src/articles/website-component-format/app/articles/google-search-box-beginner/page.tsx)
    *   [2026-06-15: 【初心者向け】「失敗しても自分で直す」AIが登場！Claude Fable 5に『仕事を丸投げ』する魔法のプロンプト術](docs/ideas/idea-20260615-claude-fable-5-beginner.md) - *新規追加*
    *   [2026-06-16: 【中級者向け】AIが「聞く場所」から「作業する場所」へ！ChatGPT『スーパーアプリ化』＆『Codex』活用ガイド](docs/ideas/idea-20260616-openai-super-app-codex.md) - [記事作成済み](src/articles/website-component-format/app/articles/openai-super-app-codex/page.tsx)
    *   [2026-06-16: 【中級者向け】言語の壁を「リアルタイム」で突破！Gemini 3.5『Live Translate』によるグローバル会議・交渉術](docs/ideas/idea-20260616-gemini-live-translate-global.md) - *新規追加*
    *   [2026-06-18: 【初心者向け】iPhoneが「画面の中」を理解する！Siri AIの『これ、何？』活用プロンプト術](docs/ideas/idea-20260618-siri-ai-onscreen-awareness.md) - [記事作成済み](src/articles/website-component-format/app/articles/siri-ai-onscreen-awareness/page.tsx)
    *   [2026-06-18: 【初心者向け】子供のスマホ利用をAIが見守る！Apple Intelligenceの『安心ペアレンタルコントロール』活用術](docs/ideas/idea-20260618-apple-intelligence-parental-control.md) - [記事作成済み](src/articles/website-component-format/app/articles/apple-intelligence-parental-control/page.tsx)
    *   [2026-06-20: 【初心者向け】もうお店を探さない！ChatGPT・Geminiで「欲しいもの」を直接買うAIショッピング術](docs/ideas/idea-20260620-ai-shopping-beginner.md) - [記事作成済み](src/articles/website-component-format/app/articles/ai-shopping-beginner-guide/page.tsx)
    *   [2026-06-20: 【初心者向け】AIとの会話を「自分だけの教科書」に！『AI Exporter』で大事な回答を保存する整理術](docs/ideas/idea-20260620-ai-exporter-beginner.md) - *新規追加*
    *   [2026-06-21: 【中級者向け】AIモデル停止に備える！『Claude Mythos』の衝撃から学ぶAIリスクマネジメント・プロンプト術](docs/ideas/idea-20260621-claude-mythos-risk-management.md) - *新規追加*
    *   [2026-06-21: 【中級者向け】Apple Intelligence × Gemini 連携！OSレベルでAIを使い分ける『ハイブリッド・オーケストレーション』術](docs/ideas/idea-20260621-siri-gemini-orchestration.md) - *新規追加*
    *   [2026-06-22: 【初心者向け】もう「何度もググる」必要なし！Googleの新機能『Search Agents』で欲しい情報を自動で見張る術](docs/ideas/idea-20260622-google-search-agents.md) - [記事作成済み](src/articles/website-component-format/app/articles/google-search-agents-beginner/page.tsx)
    *   [2026-06-23: 【中級者向け】AIが「データの意味」を自ら学習！Databricks『Genie Ontology』導入ガイド](docs/ideas/idea-20260623-databricks-genie-ontology.md) - *新規追加*
    *   [2026-06-23: 【中級者向け】開発環境をAIが最適化！GitHub Copilot for JetBrains『Copilot CLI基盤移行』活用ガイド](docs/ideas/idea-20260623-github-copilot-cli-migration.md) - *新規追加*
    *   [2026-06-24: 【初心者向け】iPhoneが「今見ているもの」を理解する！Siri AIの『画面認識』活用プロンプト術](docs/ideas/idea-20260624-siri-ai-onscreen-awareness-guide.md) - *新規追加*
    *   [2026-06-24: 【初心者向け】もうプロンプトで迷わない！Microsoft 365 Copilotの『進化する入力ボックス』活用術](docs/ideas/idea-20260624-copilot-workspace-input-guide.md) - [記事作成済み](src/articles/website-component-format/app/articles/copilot-workspace-input-guide/page.tsx)
    *   [2026-06-25: 【中級者向け】現実の物理法則を再現！Google Gemini Omni（Nanobanana 3.0）による「動画・マルチメディア生成」実践ガイド](docs/ideas/idea-20260625-gemini-omni-multimedia.md) - *新規追加*
    *   [2026-06-25: 【中級者向け】AI導入を「コスト」から「投資」へ！ChatGPT Enterprise『Spend Controls』と『分析ダッシュボード』活用ガイド](docs/ideas/idea-20260625-openai-enterprise-spend-controls.md) - *新規追加*
    *   [2026-06-27: 【中級者向け】タイピングを捨てて「話す」だけで完結！GMO流・AI音声入力による業務10倍速ガイド](docs/ideas/idea-20260627-gmo-whisper-voice-ai.md) - *新規追加*
    *   [2026-06-27: 【中級者向け】AIと1000以上のアプリを直結！最新「MCP（Model Context Protocol）」連携による自律型ワークフロー構築ガイド](docs/ideas/idea-20260627-mcp-integration-guide.md) - [記事作成済み](src/articles/website-component-format/app/articles/mcp-integration-guide/page.tsx)
    *   [2026-06-27: 【初心者向け】最新AI「GPT-5.6 ソル」があなたの代わりに「考える」！新機能『自律思考モード』を使いこなすプロンプト術](docs/ideas/idea-20260627-gpt5-6-sol-beginner.md) - *新規追加*
    *   [2026-06-27: 【初心者向け】Google検索が「聞くだけ」で完結！新機能『AIモード』で迷子にならない検索プロンプト術](docs/ideas/idea-20260627-google-ai-mode-beginner.md) - *新規追加*
    *   [2026-06-28: 【初心者向け】AIに「仕事を丸投げ」！Microsoft Copilotの『Cowork』で完成品を受け取るプロンプト術](docs/ideas/idea-20260628-copilot-cowork-beginner.md) - *新規追加*
    *   [2026-06-28: 【初心者向け】マウス操作もAIにお任せ？Google Geminiの『パソコンの使用』で面倒な作業を自動化するプロンプト術](docs/ideas/idea-20260628-gemini-pc-use-beginner.md) - *新規追加*
    *   [2026-06-29: 【中級者向け】AIエージェントと作る！Manusを活用した「爆速Webサイト構築」実践ガイド](docs/ideas/idea-20260629-manus-web-dev-guide.md) - *新規追加*
    *   [2026-06-30: 【中級者向け】2026年の新常識！AIエージェントによる「自律型タスク完遂」の極意](docs/ideas/idea-20260630-ai-autonomous-agents-future.md) - *新規追加*
*   [2026-07-01: 【中級者向け】OpenAI最新モデル「GPT-5.6 Sol」企業導入・活用完全ガイド](docs/ideas/idea-20260701-gpt5-6-sol-enterprise-guide.md) - *新規追加*
