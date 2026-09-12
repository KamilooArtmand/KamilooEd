"use client";

import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { t, lang } = useLanguage();

  return (
    <div className="w-full flex flex-col items-center justify-center space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-2xl mt-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-200/50 text-blue-700 text-xs font-semibold backdrop-blur-md shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          {t("hero_badge")}
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
          {t("hero_title_part1")}{" "}
          <span className="text-gradient">{t("hero_title_accent")}</span>{" "}
          {t("hero_title_part2")}
        </h1>

        <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
          {t("hero_description")}
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <Link
            href="/courses/adobe-incopy-2026"
            className="px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm md:text-base"
          >
            {t("hero_btn_start")}
          </Link>
          <Link
            href="/courses/adobe-incopy-2026"
            className="px-8 py-3 rounded-full liquid-glass text-gray-800 font-medium hover:bg-white/90 transition-all text-sm md:text-base"
          >
            {t("hero_btn_explore")}
          </Link>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="w-full pt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">{t("featured_title")}</h2>
          <span className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">
            {t("view_all")}
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Adobe InCopy Course Card */}
          <Link href="/courses/adobe-incopy-2026" className="group block h-full">
            <div className="liquid-glass rounded-[2rem] p-4 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-white/60">
              <div className="aspect-[4/3] w-full bg-gray-100 rounded-3xl mb-6 overflow-hidden relative border border-gray-200/50">
                {/* Visual Thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/80 via-blue-50 to-purple-50 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-2xl bg-white/80 backdrop-blur-md shadow-sm border border-white/60 flex items-center justify-center text-blue-600 font-bold text-lg font-inter">
                      Ic
                    </div>
                    <span className="text-indigo-400 font-medium text-xs border border-indigo-200/50 rounded-lg px-3 py-1 bg-white/50 backdrop-blur-sm">
                      {lang === "fa" ? "قالب اسکرین‌شات ۰۱" : "Thumbnail Template 01"}
                    </span>
                  </div>
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 rtl:right-4 ltr:left-4 bg-white/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-indigo-600 shadow-sm border border-white/50">
                  {t("badge_levels")}
                </div>
              </div>
              
              <div className="px-2 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {lang === "fa" ? "آموزش جامع Adobe InCopy 2026" : "Mastering Adobe InCopy 2026"}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4 font-light leading-relaxed">
                  {lang === "fa"
                    ? "یادگیری کامل نرم‌افزار این‌کپی از الفبا تا سطح حرفه‌ای. متناسب برای نویسندگان، ویراستاران و طراحان نشریات."
                    : "Comprehensive training from core editorial fundamentals to advanced collaborative InDesign publishing workflows."}
                </p>
                <div className="mt-auto flex items-center justify-between text-sm text-gray-500 pt-2 border-t border-gray-100/60">
                  <span className="flex items-center gap-1.5 text-xs">
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t("duration_hours")}
                  </span>
                  <span className="font-semibold text-xs text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                    {t("pricing_free")}
                  </span>
                </div>
              </div>
            </div>
          </Link>
          
          {/* Upcoming Placeholders */}
          {[
            {
              title: lang === "fa" ? "طراحی سیستم دیزاین با InDesign" : "InDesign Publishing Systems",
              code: "Id"
            },
            {
              title: lang === "fa" ? "اتوماسیون اسکریپت‌نویسی در نشر" : "Publishing Scripting & Automation",
              code: "Js"
            }
          ].map((course, idx) => (
            <div key={idx} className="liquid-glass rounded-[2rem] p-4 h-full flex flex-col opacity-60 grayscale hover:opacity-75 transition-opacity">
              <div className="aspect-[4/3] w-full bg-gray-100 rounded-3xl mb-6 flex flex-col items-center justify-center border border-gray-200/50 relative">
                <div className="w-10 h-10 rounded-xl bg-white/70 flex items-center justify-center text-gray-400 font-bold text-sm mb-2 font-inter">
                  {course.code}
                </div>
                <span className="text-gray-400 text-xs font-medium">{t("coming_soon")}</span>
              </div>
              <div className="px-2 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-gray-700 text-base mb-2">{course.title}</h4>
                  <div className="h-3 bg-gray-200/60 rounded-md w-full mb-2"></div>
                  <div className="h-3 bg-gray-200/60 rounded-md w-2/3"></div>
                </div>
                <span className="text-[11px] text-gray-400 mt-4">{t("coming_soon")}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
