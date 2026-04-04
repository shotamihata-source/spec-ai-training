# Day 1 — 4/1 (水): AIで自己紹介スライド作成

## 今日のゴール

AIツール（Gemini, NotebookLM）を使って自己紹介スライドを完成させ、Google Drive に格納する。

---

## 必須課題

### 課題1: GeminiとNotebookLMで自己紹介スライドを作成する

**Step 1: Gemini にスライド構成を考えてもらう**

1. https://gemini.google.com を開く
2. 以下のようなプロンプトを入力する（コピーして使ってOK）:

```
新入社員の自己紹介スライドの構成を考えてください。
以下の情報を含めたいです:
- 名前、出身地
- 経歴（学歴・前職など）
- 趣味・特技
- この会社でやりたいこと
- 好きな言葉やモットー

5〜7枚程度のスライド構成を提案してください。
各スライドのタイトルと、記載すべき内容の箇条書きも含めてください。
```

3. Gemini が構成案を出力する。内容を確認し、自分の情報に合わせて調整する

**Step 2: NotebookLM を活用する（任意だが推奨）**

1. https://notebooklm.google.com を開く
2. 「新しいノートブック」をクリック
3. ソースとして、自分のプロフィール情報や会社の情報をアップロードする（テキストファイル、Googleドキュメントなど）
4. NotebookLM に「この情報をもとに自己紹介スライドの内容を提案して」と指示する
5. 出力をスライド作成の参考にする

**Step 3: Google Slides でスライドを仕上げる**

1. https://docs.google.com/presentation を開く
2. 「空白のプレゼンテーション」をクリック
3. Step 1 で Gemini が提案した構成に沿って、各スライドを作成する
4. 自分の情報を入力し、写真やイラストがあれば挿入する
5. デザインは「テーマ」ボタンから好みのものを選ぶ

---

### 課題2: 完成したスライドを Google Drive の Spec Division フォルダに格納する

格納先フォルダ: https://drive.google.com/drive/u/0/folders/1_fnoo33Kf6qNzuE6-2dB_rqac2uVNnws

> このURLをブラウザで開くと「Spec Division」フォルダが表示されます。アクセスできない場合はSlackで報告してください。

**重要: できる限り手動アップロードではなく、AIやツールの機能を使って格納すること。まずは方法Bを試してみてください。**

**方法A: Google Slides から直接格納**

1. 作成した Google Slides を開く
2. 「ファイル」→「移動」をクリック
3. 「Spec Division」フォルダを選択して「移動」をクリック

**方法B: AIに方法を聞く**

1. Claude または Gemini に以下のように聞く:

```
Google Slides で作成した自己紹介プレゼンテーションを、Google Drive の特定のフォルダに移動する方法を教えてください。
```

2. AIの回答に従って実行する

**完了確認:** Google Drive の Spec Division フォルダを開き、自分のスライドが表示されていればOK。

---

## ヒント

- スライドは AI に丸投げせず、「構成を考えて」→「内容を提案して」→「自分で仕上げる」の流れで進める
- NotebookLM はソースとなるドキュメントを読み込ませると、その内容に基づいた回答を生成できる。「AIに文脈を与える」体験として有用
- 完璧を目指さなくてOK。AIを使って何かを作る体験が今日の最大の目的

## 提出方法

1. Google Slides で自己紹介スライドを完成させる
2. Google Drive の Spec Division フォルダに格納する（手動アップロードNG）
3. Slack で「Day1 完了しました。スライドのリンク: [URL]」と報告する

**スライドの共有リンクの取得方法:**
- Google Slides の右上「共有」ボタンをクリック
- 「リンクをコピー」をクリック
- コピーしたリンクを Slack に貼り付ける

## 理解度チェック（クイズ）

Day1 はクイズなし。

**進行ゲートの確認:**
- [ ] 自己紹介スライドが Google Drive に格納されている
- [ ] Slack で完了報告済み

## 早期完了者向け追加課題

- 自己紹介スライドの別バージョンを **Claude** または **ChatGPT** で作成する
- Gemini 版と比較して、以下の観点でメモを残す:
  - 構成案の違い
  - 文章の表現やトーンの違い
  - どちらが自分にとって使いやすかったか
- このメモも Google Drive に格納する

## 参考リソース

- [Gemini ヘルプ](https://support.google.com/gemini)
- [NotebookLM ヘルプ](https://support.google.com/notebooklm)
- [Google Slides ヘルプ](https://support.google.com/docs/topic/9052835)
