"use client";

import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export default function CourseInCopy() {
  const { t, lang } = useLanguage();

  const levelsData = {
    fa: [
      {
        id: "beginner",
        title: "سطح مبتدی (الفبا و مبانی)",
        description: "آشنایی با محیط نرم‌افزار، ابزارهای پایه و مفاهیم اولیه برای شروع کار با InCopy.",
        lessons: [
          { title: "معرفی کامل و تاریخچه InCopy 2026", duration: "۱۵ دقیقه" },
          { title: "کارکرد و موارد استفاده در صنعت نشر", duration: "۲۰ دقیقه" },
          { title: "آشنایی با رابط کاربری (UI) و نوار ابزارها", duration: "۲۵ دقیقه" },
        ],
        btnText: "ورود به بخش مبتدی"
      },
      {
        id: "intermediate",
        title: "سطح متوسط (ویرایش و تعامل)",
        description: "نحوه ارتباط با طراحان InDesign، استفاده از استایل‌ها و ویرایش متون طولانی.",
        lessons: [
          { title: "کار با استایل‌های پاراگراف و کاراکتر", duration: "۳۰ دقیقه" },
          { title: "مدیریت تغییرات (Track Changes)", duration: "۲۵ دقیقه" },
          { title: "لینک کردن فایل‌ها و هماهنگی با InDesign", duration: "۴۰ دقیقه" },
        ],
        btnText: "ورود به بخش متوسط"
      },
      {
        id: "advanced",
        title: "سطح حرفه‌ای (ترفندها و اتوماسیون)",
        description: "تسلط کامل بر میان‌برها، ماکروها و شخصی‌سازی محیط کار برای حداکثر سرعت.",
        lessons: [
          { title: "شخصی‌سازی پیشرفته Workspace", duration: "۲۰ دقیقه" },
          { title: "کار با جداول و داده‌های پیچیده", duration: "۳۵ دقیقه" },
          { title: "خروجی گرفتن نهایی و آماده‌سازی برای چاپ", duration: "۳۰ دقیقه" },
        ],
        btnText: "ورود به بخش حرفه‌ای"
      }
    ],
    en: [
      {
        id: "beginner",
        title: "Beginner Level (Fundamentals & Basics)",
        description: "Orientation with the software environment, foundational tools, and key publishing concepts.",
        lessons: [
          { title: "Complete InCopy 2026 Architecture & History", duration: "15 min" },
          { title: "Core Editorial Use Cases in Modern Media", duration: "20 min" },
          { title: "Navigating the Workspace & Primary Toolbars", duration: "25 min" },
        ],
        btnText: "Enter Beginner Level"
      },
      {
        id: "intermediate",
        title: "Intermediate Level (Styles & Editorial Collaboration)",
        description: "Deep InDesign workflow collaboration, styling hygiene, and audit tracking.",
        lessons: [
          { title: "Working with Paragraph & Character Styles", duration: "30 min" },
          { title: "Track Changes & Editorial Revisions", duration: "25 min" },
          { title: "Document Linking & InDesign Package Sync", duration: "40 min" },
        ],
        btnText: "Enter Intermediate Level"
      },
      {
        id: "advanced",
        title: "Advanced Level (Power Shortcuts & Automation)",
        description: "Command key ergonomics, macro actions, and high-velocity pre-press output.",
        lessons: [
          { title: "Advanced Workspace & Panel Ergonomics", duration: "20 min" },
          { title: "Tabular Styling & Complex Data Sets", duration: "35 min" },
          { title: "Pre-press Validation & Final Package Delivery", duration: "30 min" },
        ],
        btnText: "Enter Advanced Level"
      }
    ]
  };

  const levels = levelsData[lang] || levelsData.fa;

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      
      {/* Breadcrumb & Navigation */}
      <nav className="mb-8 text-sm text-gray-500 flex items-center gap-2 font-medium">
        <Link href="/" className="hover:text-blue-600 transition-colors">{t("nav_home")}</Link>
        <span className="text-gray-300">/</span>
        <span className="text-gray-500">{t("nav_courses")}</span>
        <span className="text-gray-300">/</span>
        <span className="text-gray-900 font-semibold font-inter">Adobe InCopy 2026</span>
      </nav>

      {/* Course Header */}
      <div className="liquid-glass rounded-[2.5rem] p-8 md:p-12 mb-12 flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/3 aspect-square bg-gradient-to-tr from-indigo-50/90 to-blue-50/90 rounded-[2rem] border border-blue-100/60 flex items-center justify-center relative overflow-hidden shadow-inner">
          <div className="text-center p-6 z-10">
            <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-white/90 backdrop-blur-md shadow-md border border-white/60 flex items-center justify-center text-blue-600 font-black text-2xl font-inter">
              Ic
            </div>
            <span className="text-blue-500 font-bold text-sm px-4 py-1.5 bg-white/70 rounded-full backdrop-blur-sm border border-blue-200/50 shadow-sm inline-block">
              {lang === "fa" ? "تصویر اصلی دوره (۱)" : "Master Thumbnail (01)"}
            </span>
          </div>
          
          {/* Liquid floating glowing blobs */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-400/25 rounded-full blur-2xl"></div>
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-indigo-400/25 rounded-full blur-2xl"></div>
        </div>
        
        <div className="w-full md:w-2/3 space-y-6">
          <div className="inline-flex items-center gap-2 bg-indigo-50/80 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold border border-indigo-100">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            <span className="font-inter">Adobe 2026</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {lang === "fa" ? (
              <>آموزش جامع Adobe InCopy <span className="text-gradient font-inter">2026</span></>
            ) : (
              <>Mastering Adobe InCopy <span className="text-gradient font-inter">2026</span></>
            )}
          </h1>

          <p className="text-lg text-gray-600 font-light leading-relaxed">
            {lang === "fa"
              ? "تنها دوره‌ای که برای تسلط کامل بر Adobe InCopy نیاز دارید. از معرفی اولیه ابزارها و فضای کار تا ترفندهای حرفه‌ای تعامل با تیم طراحی را با متدی روان و مدرن بیاموزید."
              : "The definitive masterclass for mastering Adobe InCopy. From core editorial interface mechanics to advanced InDesign collaboration, elevate your editorial velocity."}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/courses/adobe-incopy-2026/beginner"
              className="px-8 py-3.5 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-0.5 text-sm md:text-base"
            >
              {lang === "fa" ? "شروع یادگیری (سطح مبتدی)" : "Start Learning (Beginner)"}
            </Link>
            <button
              onClick={() => alert(lang === "fa" ? "سرفصل‌ها به زودی برای دانلود قرار می‌گیرد." : "Syllabus download will be available shortly.")}
              className="px-8 py-3.5 rounded-full border border-gray-200 bg-white/60 text-gray-800 font-medium hover:bg-white transition-all text-sm md:text-base backdrop-blur-md"
            >
              {t("download_syllabus")}
            </button>
          </div>
        </div>
      </div>

      {/* Course Curriculum */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-900">{t("curriculum_title")}</h2>
          <div className="h-px bg-gray-200/80 flex-1 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {levels.map((level, idx) => (
            <div 
              key={level.id} 
              className="liquid-glass rounded-3xl p-6 transition-all duration-300 flex flex-col ring-2 ring-blue-500/10 shadow-lg hover:-translate-y-1 hover:shadow-xl hover:border-white/70"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                  {t("phase")} {idx + 1}
                </span>
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {level.title}
              </h3>
              <p className="text-sm text-gray-500 mb-6 font-light leading-relaxed flex-1">
                {level.description}
              </p>
              
              <ul className="space-y-3 mt-auto">
                {level.lessons.map((lesson, lIdx) => (
                  <li key={lIdx} className="flex items-start gap-3 text-sm">
                    <svg className="w-5 h-5 shrink-0 mt-0.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="flex flex-col">
                      <span className="text-gray-800 font-medium">
                        {lesson.title}
                      </span>
                      <span className="text-xs text-gray-400 mt-0.5 font-mono">{lesson.duration}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <Link 
                href={`/courses/adobe-incopy-2026/${level.id}`}
                className="mt-8 block w-full py-3 text-center rounded-xl bg-blue-50/90 text-blue-700 font-semibold text-sm hover:bg-blue-100 transition-colors shadow-sm"
              >
                {level.btnText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
