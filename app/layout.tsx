import type { Metadata } from "next";
import "./globals.css";

import SearchBar from "./components/SearchBar";

export const metadata: Metadata = {
  title: "Kamiloo Ed | آموزش‌های تخصصی",
  description: "پلتفرم آموزش مدرن، مینیمال و پیشرفته برای یادگیری مهارت‌های تخصصی.",
  manifest: "/manifest.json",
  themeColor: "#fbfbfd",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Kamiloo Ed",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body className="antialiased selection:bg-blue-100 selection:text-blue-900">
        <div className="flex flex-col min-h-screen">
          {/* Header Navigation */}
          <header className="sticky top-0 z-50 p-4">
            <nav className="liquid-glass rounded-3xl max-w-5xl mx-auto px-6 py-3 flex items-center justify-between transition-all duration-300">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 shadow-inner flex items-center justify-center text-white font-bold text-sm">
                  K
                </div>
                <span className="font-semibold text-lg tracking-tight text-gray-900">Kamiloo Ed</span>
              </div>
              <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                <a href="/" className="hover:text-blue-600 transition-colors">خانه</a>
                <a href="/courses/adobe-incopy-2026" className="hover:text-blue-600 transition-colors">دوره‌ها</a>
                <a href="#" className="hover:text-blue-600 transition-colors">مقاله‌ها</a>
              </div>
              <div className="flex items-center gap-3">
                <SearchBar />
              </div>
            </nav>
          </header>

          {/* Main Content */}
          <main className="flex-1 flex flex-col items-center w-full max-w-5xl mx-auto px-4 py-8">
            {children}
          </main>

          {/* Footer */}
          <footer className="mt-auto py-8 text-center text-sm text-gray-500">
            <div className="liquid-glass rounded-3xl max-w-3xl mx-auto px-6 py-4">
              © {new Date().getFullYear()} Kamiloo Ed. تمامی حقوق محفوظ است.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
