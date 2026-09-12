"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";



const SEARCH_DATABASE = {
  fa: [
    {
      title: "معرفی کامل و تاریخچه InCopy 2026",
      category: "سطح مبتدی",
      href: "/courses/adobe-incopy-2026/beginner",
      snippet: "آشنایی با تاریخچه این‌کپی، تفاوت آن با سایر ویرایشگرها و نحوه تعامل با این‌دیزاین."
    },
    {
      title: "آشنایی با رابط کاربری (UI) و ابزارها",
      category: "سطح مبتدی",
      href: "/courses/adobe-incopy-2026/beginner",
      snippet: "بررسی نوار ابزار اصلی (Tools Panel)، پنل کنترل داینامیک و نوار وضعیت."
    },
    {
      title: "کار با استایل‌های پاراگراف و کاراکتر",
      category: "سطح متوسط",
      href: "/courses/adobe-incopy-2026/intermediate",
      snippet: "مدیریت فرمت متن بدون تداخل در چیدمان و همگام‌سازی مستقیم با InDesign."
    },
    {
      title: "مدیریت تغییرات و پیگیری ویرایش‌ها (Track Changes)",
      category: "سطح متوسط",
      href: "/courses/adobe-incopy-2026/intermediate",
      snippet: "تایید یا رد تغییرات، کامنت‌گذاری تیمی و استفاده از نمای داستانی (Story View)."
    },
    {
      title: "کلیدهای میانبر سفارشی و ماکروها",
      category: "سطح حرفه‌ای",
      href: "/courses/adobe-incopy-2026/advanced",
      snippet: "افزایش سرعت عمل ویراستاری با کلیدهای میانبر اختصاصی و ابزارهای اتوماسیون."
    },
    {
      title: "کار با جداول پیچیده و خروجی نهایی",
      category: "سطح حرفه‌ای",
      href: "/courses/adobe-incopy-2026/advanced",
      snippet: "طراحی، سطر و ستون‌بندی و فرمت‌بندی پیشرفته داده‌های جدولی."
    }
  ],
  en: [
    {
      title: "Complete Overview & History of InCopy 2026",
      category: "Beginner Level",
      href: "/courses/adobe-incopy-2026/beginner",
      snippet: "Understanding the origins of InCopy, core differences, and collaborative integration with InDesign."
    },
    {
      title: "Navigating the Workspace & Tools Panel",
      category: "Beginner Level",
      href: "/courses/adobe-incopy-2026/beginner",
      snippet: "Deep dive into the primary toolbar, dynamic control bar, and layout preview modes."
    },
    {
      title: "Mastering Paragraph & Character Styles",
      category: "Intermediate Level",
      href: "/courses/adobe-incopy-2026/intermediate",
      snippet: "Typography consistency, applying master InDesign paragraph rules, and character styles."
    },
    {
      title: "Track Changes & Collaborative Editorial Revisions",
      category: "Intermediate Level",
      href: "/courses/adobe-incopy-2026/intermediate",
      snippet: "Accepting/rejecting revisions, adding editorial comments, and Story View mode."
    },
    {
      title: "Custom Keyboard Shortcuts & Productivity Macros",
      category: "Advanced Level",
      href: "/courses/adobe-incopy-2026/advanced",
      snippet: "Accelerating editorial workflows through custom key chords and automated macro actions."
    },
    {
      title: "Complex Tabular Data & Final Delivery",
      category: "Advanced Level",
      href: "/courses/adobe-incopy-2026/advanced",
      snippet: "Table styling, repeating headers, cell synchronization, and pre-press export."
    }
  ]
};

export default function SearchBar() {
  const { lang, t, dir } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const currentList = SEARCH_DATABASE[lang] || SEARCH_DATABASE.fa;
    return currentList.filter(
      item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.snippet.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, lang]);

  return (
    <div ref={containerRef} className="relative flex items-center">
      {/* Search Input Container */}
      <div
        className={`transition-all duration-300 ease-out flex items-center overflow-visible ${
          isOpen ? "w-64 md:w-80 opacity-100" : "w-0 opacity-0 pointer-events-none"
        }`}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder={t("search_placeholder")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-white/70 border border-white/60 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 placeholder:text-gray-400 backdrop-blur-xl shadow-inner text-gray-800"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute ltr:right-10 rtl:left-10 text-gray-400 hover:text-gray-600 p-1 text-xs"
            type="button"
          >
            ✕
          </button>
        )}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-full transition-all duration-200 text-gray-600 hover:text-gray-900 ${
          isOpen ? "bg-white/80 shadow-sm text-blue-600" : "hover:bg-gray-100/60"
        }`}
        aria-label={t("search_aria")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </button>

      {/* Live Results Dropdown */}
      {isOpen && query.trim() !== "" && (
        <div className={`absolute top-12 ${dir === "rtl" ? "right-0" : "left-0"} w-80 md:w-96 liquid-glass-darker rounded-2xl p-3 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200 border border-white/80`}>
          <div className="text-xs font-bold text-gray-400 px-3 py-1.5 border-b border-gray-100/60 flex justify-between">
            <span>{results.length} {lang === "fa" ? "نتیجه یافت شد" : "results found"}</span>
            <span className="text-[10px] text-gray-400 font-mono">Adobe InCopy 2026</span>
          </div>

          <div className="max-h-72 overflow-y-auto divide-y divide-gray-100/50 mt-1">
            {results.length > 0 ? (
              results.map((res, i) => (
                <Link
                  key={i}
                  href={res.href}
                  onClick={() => setIsOpen(false)}
                  className="block p-3 rounded-xl hover:bg-blue-50/70 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {res.title}
                    </span>
                    <span className="text-[10px] bg-blue-100/60 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                      {res.category}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed font-light">
                    {res.snippet}
                  </p>
                </Link>
              ))
            ) : (
              <div className="p-4 text-center text-xs text-gray-400">
                {lang === "fa" ? "هیچ موردی یافت نشد." : "No results matching your query."}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
