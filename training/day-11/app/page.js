"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const STORAGE_KEY = "numpad-typer-templates-v1";
const THEME_STORAGE_KEY = "numpad-typer-theme-v1";

const defaultTemplates = {
  0: "お世話になっております。\n",
  1: "ご連絡ありがとうございます。\n",
  2: "下記、ご確認をお願いいたします。\n",
  3: "日程候補は以下の通りです。\n",
  4: "本件、承知いたしました。\n",
  5: "ご不明点があればお知らせください。\n",
  6: "引き続きよろしくお願いいたします。\n",
  7: "本日の議事録を共有します。\n",
  8: "お手数をおかけしますが、よろしくお願いいたします。\n",
  9: "以上、何卒よろしくお願いいたします。\n",
};

function loadTemplates() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultTemplates };
    return { ...defaultTemplates, ...JSON.parse(raw) };
  } catch {
    return { ...defaultTemplates };
  }
}

function loadTheme() {
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function Page() {
  const outputRef = useRef(null);
  const [templates, setTemplates] = useState(defaultTemplates);
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState("準備完了");
  const [flashKey, setFlashKey] = useState(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTemplates(loadTemplates());
    setTheme(loadTheme());
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(templates));
  }, [templates]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const placeholders = useMemo(() => {
    const matches = output.match(/\[[^\]]+\]/g) ?? [];
    return [...new Set(matches)];
  }, [output]);

  const insertTemplate = useCallback(
    (key) => {
      const text = templates[key];
      if (!text) return;

      setFlashKey(key);
      setTimeout(() => setFlashKey(null), 240);

      const textarea = outputRef.current;
      if (!textarea) return;

      const start = textarea.selectionStart ?? output.length;
      const end = textarea.selectionEnd ?? output.length;
      const next = output.slice(0, start) + text + output.slice(end);
      setOutput(next);
      setStatus(`キー ${key} の定型文を挿入しました`);

      requestAnimationFrame(() => {
        const pos = start + text.length;
        textarea.focus();
        textarea.selectionStart = pos;
        textarea.selectionEnd = pos;
      });
    },
    [output, templates],
  );

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.isComposing) return;

      const ae = document.activeElement;
      const isTemplateField = ae?.closest?.("[data-template-input]");
      const isOutputFocused = ae?.id === "output";

      let key = null;
      if (/^Numpad[0-9]$/.test(event.code)) {
        if (isTemplateField) return;
        key = event.code.replace("Numpad", "");
      } else if (/^Digit[0-9]$/.test(event.code)) {
        if (!isOutputFocused) return;
        key = event.code.replace("Digit", "");
      } else {
        return;
      }

      if (!/^[0-9]$/.test(key)) return;
      const text = templates[key];
      if (!text) return;

      event.preventDefault();
      insertTemplate(key);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [insertTemplate, templates]);

  const onCopy = async () => {
    if (!output) {
      setStatus("コピーするテキストがありません");
      return;
    }
    try {
      await navigator.clipboard.writeText(output);
      setStatus("コピーしました");
    } catch {
      setStatus("コピーに失敗しました（権限をご確認ください）");
    }
  };

  return (
    <main className="mx-auto max-w-6xl p-4 md:p-6">
      <header className="mb-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Numpad Typer</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            テンキーまたは本文エリアフォーカス時の数字キー、または下のボタンで定型文を挿入（MacBookでも利用可）
          </p>
        </div>
        <button
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-fit rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700"
        >
          {theme === "dark" ? "ライトモード" : "ダークモード"}
        </button>
      </header>

      <section className="grid gap-4 md:grid-cols-[1.3fr_1fr]">
        <section className="rounded-xl bg-white p-4 shadow dark:bg-slate-800">
          <h2 className="mb-3 text-lg font-semibold">本文エリア</h2>
          <textarea
            ref={outputRef}
            id="output"
            rows={14}
            value={output}
            onChange={(e) => setOutput(e.target.value)}
            placeholder="ここに定型文が挿入されます"
            className="min-h-[280px] w-full resize-y rounded-lg border border-slate-300 bg-white p-3 outline-none ring-blue-500 focus:ring-2 dark:border-slate-600 dark:bg-slate-900"
          />
          <div className="mt-3">
            <p className="mb-2 text-sm font-medium text-slate-600 dark:text-slate-300">
              クイック挿入（タップ）
            </p>
            <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
              {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => insertTemplate(k)}
                  className="rounded-lg border border-slate-300 bg-slate-50 py-2.5 text-base font-semibold hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:hover:bg-slate-700"
                >
                  {k}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={onCopy}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              コピー
            </button>
            <button
              type="button"
              onClick={() => {
                setOutput("");
                setStatus("本文をクリアしました");
              }}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700"
            >
              クリア
            </button>
          </div>
          <p className="mt-3 min-h-6 text-sm">{status}</p>
          <p className="mt-1 min-h-5 text-sm text-slate-500 dark:text-slate-400">
            {placeholders.length ? `未置換プレースホルダー: ${placeholders.join(", ")}` : ""}
          </p>
        </section>

        <section className="rounded-xl bg-white p-4 shadow dark:bg-slate-800">
          <h2 className="mb-3 text-lg font-semibold">テンキー割り当て（0-9）</h2>
          <div className="grid gap-2">
            {Array.from({ length: 10 }).map((_, i) => {
              const key = String(i);
              return (
                <label
                  key={key}
                  className={`grid grid-cols-[2rem_1fr] items-center gap-2 rounded-lg border p-2 ${
                    flashKey === key
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30"
                      : "border-slate-200 dark:border-slate-600"
                  }`}
                >
                  <span className="text-center font-bold">{key}</span>
                  <input
                    data-template-input
                    type="text"
                    value={templates[key] ?? ""}
                    onChange={(e) => {
                      setTemplates((prev) => ({ ...prev, [key]: e.target.value }));
                      setStatus("定型文を保存しました");
                    }}
                    className="rounded-md border border-slate-300 bg-white px-2 py-1.5 outline-none ring-blue-500 focus:ring-2 dark:border-slate-600 dark:bg-slate-900"
                  />
                </label>
              );
            })}
          </div>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            ヒント: 外付けテンキーがある場合は NumLock を有効にして 0–9 を押せます。MacBook 本体キーボードは本文エリアをクリックしたあと、キー上段の
            0–9 で挿入できます。テンプレ編集欄にフォーカスがあるときは数字は通常入力されます。
          </p>
        </section>
      </section>
    </main>
  );
}
