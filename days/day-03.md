# Day 3 — 4/3 (金): Deep Research 比較 + ツール使い分け

## 今日のゴール

ChatGPT と Gemini の Deep Research 機能を体験し、さらに Claude との回答も比較して「ツールの使い分け感覚」を身につける。

> **ポジショニング**: 「Claude は分析・文章が得意、GPT は推論・リサーチが得意」——今日はその違いを自分の手で確かめる。

---

## 必須課題

### 課題1: ChatGPT & Gemini の Deep Research でリサーチを実施する

**Step 1: ChatGPT Deep Research を開始する**

1. https://chatgpt.com を開いてログインする
2. 新しいチャットを開く
3. チャット画面左下のモデル選択で「Deep Research」を選択する
   - モデル選択が見つからない場合: 入力欄の下部にあるドロップダウンメニューを確認する
   - Deep Research が表示されない場合: Plus プランが必要。Slack で報告する
4. 以下のプロンプトを入力して送信する:

```
「AI時代に求められる人材評価の新しいあり方」について、包括的にリサーチしてください。
以下の観点を含めてください:
- 従来の人材評価手法の限界
- AI時代に必要とされるスキルセットの変化
- AIを活用した新しい評価手法の事例
- 導入企業の成功事例と課題
- 今後の展望と提言
```

5. Deep Research は処理に数分かかる。**待っている間に Step 2 へ進む**

> **テーマについて**: これは Sirius（自社）の事業に直結するテーマ。HR Tech・人材評価の文脈を意識してリサーチする。

**Step 2: 待ち時間に Gemini Deep Research も並行して開始する**

1. https://gemini.google.com を開く
2. チャット画面で「Deep Research」モードを選択する
3. **ChatGPT と同じプロンプト** をそのまま入力して送信する
4. 両方の完了を待つ

> **ポイント**: Deep Research は処理に数分かかるので、待ち時間を無駄にしない。並行実行がコツ。

**Step 3: 両方のレポートを読み、一言感想を書く**

ChatGPT と Gemini それぞれの Deep Research レポートに、一言感想を追記する。長文のコメントは不要。

例:
- ChatGPT: 「事例の具体性が高い。○○社の事例は自社にも応用できそう」
- Gemini: 「構成が整理されていて読みやすいが、事例が少ない」

---

### 課題2: 同じ質問を ChatGPT と Claude で比較する（3つ以上）

**3つ以上の質問を、ChatGPT と Claude の両方に投げて回答を比較する。**

**質問例（これらを使っても、自分で考えてもOK）:**

```
質問1: 新卒採用の面接で聞くべき質問を10個考えて。それぞれの質問の意図も説明して。
```

```
質問2: SaaS企業の営業メールのテンプレートを3パターン作って。ターゲットはIT部門の課長クラス。
```

```
質問3: HR Tech市場の主要プレイヤーを10社リストアップして。各社のサービス概要、強み、想定顧客規模を表にまとめて。
```

**比較の手順:**

1. ChatGPT（通常モード。Deep Research ではない）に質問を入力して送信
2. 回答をコピーして保存する
3. https://claude.ai で同じ質問を入力して送信
4. 回答をコピーして保存する
5. 両方の回答を以下の観点で比較する:
   - 回答の長さ・詳細度
   - 構成のわかりやすさ
   - 具体性（数値、企業名、事例の有無）
   - 正確性（明らかな間違いがないか）
   - 実務で使えるか

---

### 課題3: 比較表とレポートを Google Docs で作成 → Drive に格納

**成果物1: Deep Research 比較レポート**
- ChatGPT と Gemini の Deep Research レポート + それぞれへの一言感想
- 両者のアウトプットの違いについての考察（構成、情報量、情報源、読みやすさなど）

**成果物2: ChatGPT vs Claude 比較表**

以下の形式で比較表を作成する:

| 比較項目 | 質問1 ChatGPT | 質問1 Claude | 質問2 ChatGPT | 質問2 Claude | ... |
|---------|--------------|-------------|--------------|-------------|-----|
| 回答の長さ | | | | | |
| 詳細度 | | | | | |
| 実用性 | | | | | |
| 総合評価 | | | | | |

最後に「自分の結論」を1段落で書く:
- 「○○の用途には ChatGPT が強い。△△の用途には Claude が強い」
- どちらが何に強いか、自分の判断付きで

**Google Drive への格納手順:**

1. https://docs.google.com で空白のドキュメントを2つ作成
2. それぞれにレポートと比較表を記入
3. 「ファイル」→「移動」→ Spec Division フォルダ（ https://drive.google.com/drive/u/0/folders/1_fnoo33Kf6qNzuE6-2dB_rqac2uVNnws ）に格納
4. 手動での作成・格納でOK（Day2 のように AI を使う必要はない）

---

## Evening Share — 30 min

- ChatGPT vs Claude vs Gemini: どちらが何に強かったか発表
- ChatGPT と Gemini の Deep Research の違いで気づいたこと
- Teach-back: 「一番すごいと思った AI の機能」を相手に説明

---

## ヒント

- Deep Research は「調査」に特化した機能。通常のチャットとは異なり、複数のソースを参照して長文のレポートを生成する
- 比較では「どちらが正解か」ではなく「どちらが何に向いているか」を意識する。正解はない
- Google Drive への格納は手動でOK（Day3 の主題は AI ツール比較であり、格納方法ではない）
- 比較する際は、必ず同じ質問文を使うこと。質問が違うと公正な比較にならない

## 提出方法

1. Deep Research 比較レポート（ChatGPT vs Gemini + 一言感想・考察）を Google Docs で作成
2. ChatGPT vs Claude 比較表を Google Docs で作成
3. 両方を Google Drive の Spec Division フォルダに格納
4. Slack で「Day3 完了しました。レポート: [URL] / 比較表: [URL]」と報告する

## 理解度チェック（クイズ）

Day3 はクイズなし。

**進行ゲートの確認:**
- [ ] ChatGPT & Gemini の Deep Research 比較レポートが完成している（一言感想・考察付き）
- [ ] 3つ以上の質問で ChatGPT vs Claude 比較表が完成している
- [ ] 両方の資料が Google Drive に格納されている

## 早期完了者向け追加課題

### 3ツール横断比較表を作成する

課題2の ChatGPT vs Claude 比較に Gemini（通常モード）も加え、3ツールの横断比較表を作成する。

1. 課題2と同じ質問を Gemini（通常モード。Deep Research ではない）にも投げる
2. 3ツール（ChatGPT / Claude / Gemini）の回答を同じ観点で比較する
3. 「この用途にはこのツール」という使い分けガイドを自分の言葉でまとめる

この資料も Google Docs で作成して Google Drive に格納する。

## 参考リソース

- [ChatGPT Deep Research ガイド](https://help.openai.com/en/articles/deep-research)
- [Gemini Deep Research](https://blog.google/products/gemini/google-gemini-deep-research/)
- [Claude 公式サイト](https://claude.ai)
- Day2 の Claude 製品リサーチ結果（自分の成果物を参照）
