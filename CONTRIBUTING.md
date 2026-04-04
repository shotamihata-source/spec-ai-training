# 運用・貢献ガイド

このリポジトリをAI研修運用の唯一の正式な参照先とする。

## ブランチ運用

- ブランチ名: `training/day-xx-<topic>`
- 1つのPRは1日分、または1つの運用変更に集中させる

## コミットスタイル

- 可能な限り Conventional Commits 形式を使う:
  - `docs:` カリキュラム、教材、運用ドキュメント更新
  - `chore:` 非コンテンツ系の運用設定
  - `feat:` 新しい研修機能追加
  - `fix:` 運用不整合や誤りの修正

## PR必須項目

日次PRには以下を必ず含める。

1. 当日の目的
2. 成果物パス
3. クイズ証跡（100点）
4. Slack通知リンク
5. レビューしてほしい観点

利用テンプレート:

- `.github/PULL_REQUEST_TEMPLATE.md`
- `templates/day-pr-body-template.md`

## 日次成果物の配置ルール

成果物は以下に配置する。

- `training/day-xx/`

最低限推奨するファイル:

- `daily-report.md`
- 課題成果物1点以上（`*.md` またはプロジェクトファイル）

利用テンプレート:

- `templates/day-output-template.md`

## クイズゲート運用

- 完了判定にはクイズ100点が必須。
- 当日内の再受験は無制限。
- レビューが遅延する場合は、以下で暫定完了を認める。
  - PR作成済み
  - Slack通知確認済み
  - クイズ100点達成

最終完了はMerge後に確定する。

## 機密情報ルール

- 社内機密情報はコミットしない。
- 業務コンテキストはローカル専用ファイルに保存する。
  - `references/farleap-context.local.md`（gitignore対象）
