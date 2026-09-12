"use client";

import { useLanguage } from "../context/LanguageContext";

export default function WebDevPage() {
  const { lang } = useLanguage();

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center space-y-12 py-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-blue-600 to-cyan-600 text-white flex items-center justify-center shadow-xl mb-4">
        <span className="font-black text-3xl font-inter">Nx</span>
      </div>
      <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
        {lang === "fa" ? "توسعه وب و برنامه‌نویسی" : "Web Development"}
      </h1>
      <p className="text-xl text-gray-500 font-light max-w-2xl text-center leading-relaxed">
        {lang === "fa" 
          ? "یادگیری عمیق فریم‌ورک‌های مدرن نظیر Next.js، React، TypeScript و Tailwind CSS."
          : "Deep dive into modern frameworks like Next.js, React, TypeScript, and Tailwind CSS."}
      </p>

      <div className="liquid-glass-card p-10 rounded-[3rem] w-full text-center mt-12 border-dashed border-2 border-blue-200/50 bg-blue-50/30">
         <span className="text-blue-600 font-bold text-2xl tracking-widest uppercase opacity-50">
          {lang === "fa" ? "به زودی..." : "Coming soon..."}
        </span>
      </div>
    </div>
  );
}
