"use client";

import { useLanguage } from "../context/LanguageContext";

export default function PromptBankPage() {
  const { lang } = useLanguage();

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center space-y-12 py-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center shadow-xl mb-4">
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
        {lang === "fa" ? "بانک پرامپت هوش مصنوعی" : "AI Prompt Bank"}
      </h1>
      <p className="text-xl text-gray-500 font-light max-w-2xl text-center leading-relaxed">
        {lang === "fa" 
          ? "مجموعه‌ای پریمیوم از پرامپت‌های مهندسی‌شده برای Midjourney، ChatGPT و ابزارهای هوش مصنوعی دیگر. به زودی در این بخش فعال خواهد شد."
          : "A premium collection of engineered prompts for Midjourney, ChatGPT, and other AI tools. Coming soon to this section."}
      </p>

      <div className="liquid-glass-card p-10 rounded-[3rem] w-full text-center mt-12 border-dashed border-2 border-purple-200/50 bg-purple-50/30">
        <span className="text-purple-600 font-bold text-2xl tracking-widest uppercase opacity-50">
          {lang === "fa" ? "در حال توسعه..." : "Under Development..."}
        </span>
      </div>
    </div>
  );
}
