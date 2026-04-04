# AI Boot Camp リソース集

最終更新: 2026-04-04

> 各Dayの課題に取り組む前に、該当する参考資料に目を通すこと。
> URLは変更される可能性がある。リンク切れを見つけたらPRで報告する。

---

## Phase 1: オリエンテーション（Day1-Day3）

### Day1: 事業理解 + 環境セットアップ

- Git 公式ドキュメント: https://git-scm.com/doc
- GitHub SSH キー設定ガイド: GitHub Docs > "Connecting to GitHub with SSH" を検索
- `account-setup.md` — 本リポジトリのセットアップ手順

### Day2: AIツール体験

- Google Gemini: gemini.google.com（ログインして Advanced 機能を確認）
- Claude: claude.ai（ログインして Pro プランの機能を確認）
- ChatGPT: chatgpt.com
- NotebookLM: notebooklm.google.com（ドキュメントをアップロードして質問する）

### Day3: プロンプトエンジニアリング基礎

- Anthropic プロンプトエンジニアリングガイド: docs.anthropic.com > "Prompt engineering" を検索
- Google AI プロンプト設計戦略: ai.google.dev > "Prompt design strategies" を検索
- OpenAI プロンプトエンジニアリング: platform.openai.com > "Prompt engineering" を検索
- 基本パターンの理解: Zero-shot / Few-shot / Chain of Thought

---

## Phase 2: AI基礎 + 実務応用（Day4-Day8）

### Day4: AI全体像 + GitHub基礎

#### AI全体像 / ツール比較

- 主流AIプレイヤーの全体像を把握する（AIに「2026年のAI市場マップを作って」と指示するのも有効）
- Gemini / Claude / ChatGPT の公式ドキュメントで各ツールの特徴を確認

#### 最低限用語

以下の用語を自分の言葉で説明できるようにする:
- Token / Context / Prompt / LLM / LLM kinds
- Agent / Autonomous AI / RAG / OCR / Plan Mode
- Skills / AGENTS.md / CLAUDE.md

#### Git / GitHub

- GitHub Flow: GitHub Docs > "GitHub Flow" を検索
- Pull Request の使い方: GitHub Docs > "About pull requests" を検索
- GitHub for Slack 連携: GitHub Docs > "GitHub and Slack" を検索

### Day5: リサーチ実務 + ハルシネーション対策

- Gemini Deep Research の使い方: Gemini 内で "Deep Research" モードを選択して実行
- ChatGPT Deep Research: ChatGPT 内で "Deep research" を選択（Plus プラン必要）
- ファクトチェックの基本: 一次ソースへの遡り方、引用URLの検証方法
- AI出力の信頼性評価: 「数値」「固有名詞」「日付」は特にハルシネーションが起きやすい

### Day6: 資料作成実務 + 人間/AI役割分担

- スライド作成のAI活用: Claude / ChatGPT にアウトライン生成を指示 → 人間が構成を調整
- NotebookLM の活用: 資料をアップロード → 想定質問の自動生成
- 役割分担フレームワーク: 「AI向きな作業」（定型・大量・下書き）vs「人間向きな作業」（判断・感情・創造）

### Day7: GTM実務 + 差別化整理

- コンテンツマーケティング基礎: ペルソナ設定 → コンテンツ設計 → 配信チャネル選定
- X（Twitter）投稿の書き方: 短文で価値を伝える技術。AIに複数案を出させて選ぶ
- 競合分析フレームワーク: 3C分析（顧客・競合・自社）をAIで効率化

### Day8: データ分析 + LLM基礎挙動

- AIによるデータ分析: CSV / スプレッドシートをAIに渡して分析させる手法
- LLM基礎挙動の理解:
  - Token予測: LLMは「次に来る最も確率の高いToken」を予測する
  - コンテキストウィンドウ: 一度に処理できるToken数の上限。超えると古い情報が失われる
  - 温度パラメータ: 低い=安定した出力、高い=創造的だが不安定な出力
- Cursor 公式ドキュメント: cursor.com > Docs を参照

---

## Phase 3: 開発体験（Day9-Day13）

### Day9-Day10: Project A

- V0: v0.dev — テキストでUIを指示するとReactコードを生成
- Google Stitch: stitch.google.com — AIデザインモックアップ
- Vercel デプロイガイド: vercel.com > Docs > "Deployments" を検索
- 要件定義の書き方: 「背景→ゴール→スコープ→ターゲットユーザー→主要機能」の構成

### Day11-Day12: Project B + AIレディネス

- Project A の経験を活かし、異なるテーマで2つ目のプロジェクトに取り組む
- AIレディネス診断の参考: 「業務AI化の判断基準」をAIに聞いて、自分の業務に当てはめる
- 診断の観点: データの有無、繰り返し頻度、判断の複雑さ、ミスの許容度、現状の工数

### Day13: 最終発表 + 実務移行計画

- プレゼン構成: 研修前の状態 → 研修で学んだこと → 成果物 → 実務への活かし方
- 実務移行計画: 具体的な「初月アクションプラン」を含めること

---

## 備考

- 低レイヤーの理論資料（例: Transformerの内部構造）は任意閲覧とする
- 研修で求めるのは実務での運用力と判断力であり、モデル理論の深掘りではない
- リソースは研修の進行に合わせて更新される。最新版は常にこのファイルを参照すること
