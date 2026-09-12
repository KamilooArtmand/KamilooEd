"use client";

import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { t, lang } = useLanguage();

  return (
    <div className="w-full flex flex-col items-center justify-center space-y-24 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out pb-24">
      
      {/* Hero Section */}
      <section className="text-center space-y-8 max-w-4xl mt-16 px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/70 border border-blue-200/60 text-blue-800 text-sm font-semibold backdrop-blur-md shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          {t("hero_badge")}
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
          {t("hero_title_part1")}{" "}
          <span className="text-gradient">{t("hero_title_accent")}</span>{" "}
          <br className="hidden md:block" />
          {t("hero_title_part2")}
        </h1>

        <p className="text-lg md:text-2xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
          {t("hero_description")}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
          <Link
            href="/courses/adobe-incopy-2026"
            className="px-10 py-4 rounded-full bg-gray-900 text-white font-semibold hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-base"
          >
            {t("hero_btn_start")}
          </Link>
          <Link
            href="/graphics"
            className="px-10 py-4 rounded-full liquid-glass-darker text-gray-800 font-semibold hover:bg-white/95 transition-all shadow hover:shadow-lg hover:-translate-y-1 text-base border border-white/80"
          >
            {t("hero_btn_explore")}
          </Link>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="w-full max-w-6xl px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{t("featured_title")}</h2>
          <span className="text-blue-600 font-medium hover:underline cursor-pointer group flex items-center gap-1">
            {t("view_all")}
            <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={lang === "fa" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
            </svg>
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Adobe InCopy Course Card */}
          <Link href="/courses/adobe-incopy-2026" className="group block h-full">
            <div className="liquid-glass-card p-5 h-full flex flex-col">
              <div className="aspect-[4/3] w-full bg-gray-100 rounded-[1.5rem] mb-6 overflow-hidden relative border border-white/50 shadow-inner">
                {/* Visual Thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/80 via-indigo-50 to-purple-100 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-white/90 backdrop-blur-xl shadow-lg border border-white flex items-center justify-center text-blue-700 font-black text-2xl font-inter">
                      Ic
                    </div>
                  </div>
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 rtl:right-4 ltr:left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-indigo-700 shadow-sm border border-white text-gradient-gold">
                  {t("badge_levels")}
                </div>
              </div>
              
              <div className="px-2 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {lang === "fa" ? "آموزش جامع Adobe InCopy 2026" : "Mastering Adobe InCopy 2026"}
                </h3>
                <p className="text-gray-500 line-clamp-2 mb-6 font-light leading-relaxed">
                  {lang === "fa"
                    ? "یادگیری کامل نرم‌افزار این‌کپی از الفبا تا سطح حرفه‌ای. متناسب برای نویسندگان، ویراستاران و طراحان نشریات."
                    : "Comprehensive training from core editorial fundamentals to advanced collaborative workflows."}
                </p>
                <div className="mt-auto flex items-center justify-between text-sm pt-4 border-t border-gray-200/50">
                  <span className="flex items-center gap-1.5 font-medium text-gray-500">
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t("duration_hours")}
                  </span>
                  <span className="font-bold text-sm text-blue-700 bg-blue-100/50 px-3 py-1.5 rounded-full backdrop-blur-sm border border-blue-200/50">
                    {t("pricing_free")}
                  </span>
                </div>
              </div>
            </div>
          </Link>
          
          {/* New Platform Modules (Placeholders for Graphics, Prompt Bank) */}
          {[
            {
              title: lang === "fa" ? "طراحی گرافیک و UI/UX" : "Graphic Design & UI/UX",
              icon: "Ai",
              desc: lang === "fa" ? "دوره جامع طراحی رابط کاربری و تجربه کاربری" : "Master class for user interface design."
            },
            {
              title: lang === "fa" ? "توسعه وب با Next.js" : "Web Dev with Next.js",
              icon: "Nx",
              desc: lang === "fa" ? "آموزش ساخت پلتفرم‌های سریع و مدرن" : "Build blazing fast modern platforms."
            }
          ].map((course, idx) => (
             <div key={idx} className="liquid-glass rounded-[2rem] p-5 h-full flex flex-col opacity-70 hover:opacity-100 transition-all duration-300">
               <div className="aspect-[4/3] w-full bg-gray-50 rounded-[1.5rem] mb-6 flex flex-col items-center justify-center border border-gray-200/50 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-gray-50 opacity-50"></div>
                 <div className="w-14 h-14 z-10 rounded-2xl bg-white/80 shadow-sm border border-gray-100 flex items-center justify-center text-gray-500 font-bold text-xl font-inter mb-3">
                   {course.icon}
                 </div>
                 <span className="z-10 text-gray-500 text-sm font-medium bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm">{t("coming_soon")}</span>
               </div>
               <div className="px-2 flex-1 flex flex-col">
                 <h4 className="font-bold text-gray-800 text-xl mb-2">{course.title}</h4>
                 <p className="text-gray-500 text-sm font-light">{course.desc}</p>
               </div>
             </div>
          ))}
        </div>
      </section>

      {/* Brand New Ecosystem Banners (Prompt Bank & Gallery) */}
      <section className="w-full max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Prompt Bank Banner */}
        <div className="liquid-glass-card rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl group-hover:bg-purple-400/30 transition-all duration-700"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4">{t("nav_prompt_bank")}</h3>
            <p className="text-gray-600 text-lg mb-8 font-light max-w-md leading-relaxed">
              {lang === "fa" 
                ? "مجموعه‌ای عظیم از بهترین پرامپت‌های هوش مصنوعی برای تولید تصویر و کدنویسی." 
                : "A massive collection of premium AI prompts for image generation and coding."}
            </p>
            <Link href="/prompt-bank" className="inline-flex items-center font-bold text-purple-700 hover:text-purple-800 group-hover:gap-2 transition-all">
              {lang === "fa" ? "ورود به بانک" : "Enter Bank"}
              <svg className="w-5 h-5 ml-1 rtl:mr-1 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Gallery Banner */}
        <div className="liquid-glass-card rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group">
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl group-hover:bg-amber-400/30 transition-all duration-700"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center mb-6 shadow-lg">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4">{t("nav_gallery")}</h3>
            <p className="text-gray-600 text-lg mb-8 font-light max-w-md leading-relaxed">
               {lang === "fa" 
                ? "گالری هنری از برترین آثار طراحی گرافیک، تصویرسازی و UI/UX هنرجویان." 
                : "An art gallery featuring the best graphic design and UI/UX works by students."}
            </p>
            <Link href="/gallery" className="inline-flex items-center font-bold text-amber-600 hover:text-amber-700 group-hover:gap-2 transition-all">
              {lang === "fa" ? "مشاهده آثار" : "View Gallery"}
              <svg className="w-5 h-5 ml-1 rtl:mr-1 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
}
