# 【中級者向け】IDEの知能をAIに開放！Rider 2026.2の「Agent Skills」で実現する超高精度コーディング導入ガイド

## 概要
2026年7月22日にリリースされたJetBrains Rider 2026.2の新機能「Agent Skills」を活用し、AIエージェントにIDE内部のコンテキスト（プロファイラ、テストカバレッジ、リファクタリングエンジン）を直接参照させる手法を解説します。AIがソースコードを「読む」だけでなく、プロジェクトの「動的な状態」を理解して提案を行う次世代の開発フローを構築します。

## ターゲット
- GitHub CopilotやClaude Codeを実務で活用している開発者（中級者）
- AIの提案がプロジェクトの文脈（テスト、パフォーマンス等）とズレることに悩んでいる方
- RiderをメインIDEとして使用しており、AIアシスタントの能力を最大限に引き出したい方

## 記事のポイント
1. **「静的解析」から「動的理解」へ**: AIがプロファイラ（dotTrace）やカバレッジ（dotCover）のデータにアクセスできることのメリット。
2. **Agent Skillsの設定と活用**: 組み込みスキル（dottrace-analyze, finding-tests）の有効化と、AIへの指示方法。
3. **Claude Codeとの連携**: 「Code quality check hooks」を使用して、AIエージェントの変更をIDEの静的解析で自動検証するパイプライン。
4. **マルチモデル戦略**: 標準のJetBrainsモデルに加え、OpenAI互換エンドポイント（LM Studio等）を補完モデルとして使い分ける設定。

## プロンプト例
- 「このメソッドのパフォーマンスが低い原因をdotTraceの最新スナップショットから特定して、ボトルネックを解消するリファクタリング案を提示して。」
- 「dotCoverの結果を確認して、カバレッジが不足している分岐を網羅する単体テストを、既存のテスト規約に従って追加して。」

## 関連記事（案）
- [【中級者向け】Karpathy流「AI外部脳」を最速構築！Claude Codeで自分専用のナレッジWikiを自動生成する導入ガイド](/articles/karpathy-ai-brain-claude-code)
- [【中級者向け】AIと1000以上のアプリを直結！最新「MCP（Model Context Protocol）」連携による自律型ワークフロー構築ガイド](/articles/mcp-integration-guide)

## 参考文献
1. [Rider 2026.2: IDE Intelligence for AI Agents, Faster Performance, and Spectacular Game Dev Updates](https://blog.jetbrains.com/dotnet/2026/07/22/rider-2026-2-release/) (2026/07/22)
2. [Rider 2026.2: Code quality check hooks for AI agents](https://blog.jetbrains.com/dotnet/2026/06/08/rider-2026-2-code-quality-check-hooks-for-ai-agents/) (2026/06/08)
