import type { Metadata, Viewport } from "next";
import { Vazirmatn, Inter, Roboto_Flex } from "next/font/google";
import "./globals.css";

import { LanguageProvider } from "./context/LanguageContext";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazir",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-flex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kamiloo Ed | آموزش‌های تخصصی و مدرن",
  description: "پلتفرم آموزش مدرن، مینیمال و پیشرفته برای یادگیری مهارت‌های تخصصی.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Kamiloo Ed",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbfbfd",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazir.variable} ${inter.variable} ${robotoFlex.variable}`}>
      <body className="antialiased selection:bg-blue-100 selection:text-blue-900 transition-colors duration-300">
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <AppHeader />
            <main className="flex-1 flex flex-col items-center w-full max-w-5xl mx-auto px-4 py-8">
              {children}
            </main>
            <AppFooter />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
