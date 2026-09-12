"use client";

import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="relative flex items-center bg-gray-100/70 backdrop-blur-md p-1 rounded-full border border-white/60 shadow-inner">
      <button
        type="button"
        onClick={() => setLang("fa")}
        className={`relative px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
          lang === "fa"
            ? "bg-white text-gray-900 shadow-sm"
            : "text-gray-500 hover:text-gray-900"
        }`}
        title="فارسی (راست‌به‌چپ - فونت وزیرمتن)"
      >
        فا
      </button>

      <button
        type="button"
        onClick={() => setLang("en")}
        className={`relative px-2.5 py-1 rounded-full text-xs font-semibold font-inter transition-all duration-300 ${
          lang === "en"
            ? "bg-white text-gray-900 shadow-sm"
            : "text-gray-500 hover:text-gray-900"
        }`}
        title="English (Left-to-Right - Inter Font)"
      >
        EN
      </button>
    </div>
  );
}
