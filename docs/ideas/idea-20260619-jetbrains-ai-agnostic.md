# 【中級者向け】脱・単一AI依存！JetBrains AIでClaude・Codex・Geminiを使い分ける「エージェント・アグノスティック」開発術

2026年6月16日、JetBrainsは自社AIプラットフォームの最新状況を公開し、「Coding Agent Agnostic（エージェント非依存）」な開発環境を強調しました。単一のAIモデルに頼るのではなく、タスクに応じてClaude Code、Codex、Gemini、そして自社製Junieを瞬時に切り替えて利用する、プロフェッショナルな開発者向けの実践ガイドです。

## 記事のポイント
- **「適材適所」のモデル選定**: 複雑なリファクタリングはClaude、高速なコード補完はCodex、広範なドキュメント参照はGeminiといった使い分けの基準を提示。
- **ACP（Agent Client Protocol）の活用**: JetBrains IDEからCursorやGitHub Copilotなどの外部エージェントをワンクリックで連携・操作する設定術。
- **クレジット管理の最適化**: 複数のベンダーと個別契約せずに、JetBrains AIの1つの契約で全モデルを使い倒すための法人・個人向け運用ノウハウ。
- **Junie CLIによる自律開発**: IDEを介さず、ターミナルから直接AIに「Plan mode」や「Debug mode」を実行させる高度な自動化手法。

## ターゲット
- 開発効率を極限まで高めたいシニアエンジニア
- 複数のAIツールを導入しており、コストと契約の管理に課題を感じているテックリード
- 特定のAIベンダーにロックインされるリスクを回避したい開発チーム

## 参考資料
- [Junie だけではない JetBrains AI の現在（2026年）](https://blog.jetbrains.com/ja/blog/2026/06/16/junie-jetbrains-ai-2026/)
- [Junie CLI Documentation - Slash Commands](https://junie.jetbrains.com/docs/slash-commands.html)
