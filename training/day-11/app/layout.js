import "./globals.css";

export const metadata = {
  title: "Numpad Typer",
  description: "テンキーで定型文をすばやく入力",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
