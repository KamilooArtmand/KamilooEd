"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import SearchBar from "./SearchBar";
import LanguageSwitcher from "./LanguageSwitcher";

export default function AppHeader() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 p-4">
      <nav className="liquid-glass rounded-3xl max-w-5xl mx-auto px-6 py-3 flex items-center justify-between transition-all duration-300">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-md flex items-center justify-center text-white font-bold text-sm tracking-tighter group-hover:scale-105 transition-transform">
            K
          </div>
          <span className="font-bold text-lg tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">
            {t("brand")}
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            {t("nav_home")}
          </Link>
          <Link href="/courses/adobe-incopy-2026" className="hover:text-blue-600 transition-colors">
            {t("nav_courses")}
          </Link>
          <a href="#" className="hover:text-blue-600 transition-colors opacity-70">
            {t("nav_articles")}
          </a>
        </div>

        {/* Actions (Search + Language Switcher) */}
        <div className="flex items-center gap-3">
          <SearchBar />
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
