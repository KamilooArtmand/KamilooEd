"use client";

import { useLanguage } from "../context/LanguageContext";

export default function GalleryPage() {
  const { lang } = useLanguage();

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center space-y-12 py-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center shadow-xl mb-4">
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
        {lang === "fa" ? "گالری هنر و طراحی" : "Art & Design Gallery"}
      </h1>
      <p className="text-xl text-gray-500 font-light max-w-2xl text-center leading-relaxed">
        {lang === "fa" 
          ? "مجموعه‌ای از برترین آثار طراحی گرافیک، تصویرسازی، رابط کاربری و تایپوگرافی از هنرجویان و اساتید آکادمی."
          : "A curated collection of top graphic design, illustration, UI, and typography artworks from our academy's students and mentors."}
      </p>

      <div className="liquid-glass-card p-10 rounded-[3rem] w-full text-center mt-12 border-dashed border-2 border-amber-200/50 bg-amber-50/30">
         <span className="text-amber-600 font-bold text-2xl tracking-widest uppercase opacity-50">
          {lang === "fa" ? "در حال آماده‌سازی..." : "Curating soon..."}
        </span>
      </div>
    </div>
  );
}
