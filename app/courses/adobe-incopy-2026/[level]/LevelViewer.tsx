"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../../context/LanguageContext";

interface SectionCard {
  number: string;
  title: string;
  description: string;
}

interface Section {
  id: string;
  title: string;
  content?: string[];
  cards?: SectionCard[];
  imagePlaceholder?: string;
}

interface CourseData {
  title: string;
  breadcrumb: string;
  sections: Section[];
  video: {
    title: string;
    duration: string;
  };
}

interface LevelViewerProps {
  level: string;
  faData: CourseData;
  enData: CourseData;
}

export default function LevelViewer({ level, faData, enData }: LevelViewerProps) {
  const { lang, t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});

  const content = lang === "en" ? enData : faData;

  const toggleComplete = (sectionId: string) => {
    setCompletedLessons((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const nextLevelMap: Record<string, { id: string; labelFa: string; labelEn: string }> = {
    beginner: { id: "intermediate", labelFa: "رفتن به سطح متوسط", labelEn: "Continue to Intermediate" },
    intermediate: { id: "advanced", labelFa: "رفتن به سطح حرفه‌ای", labelEn: "Continue to Advanced" },
  };

  const nextLevel = nextLevelMap[level];

  return (
    <div className="w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-500 flex items-center gap-2 font-medium">
        <Link href="/" className="hover:text-blue-600 transition-colors">{t("nav_home")}</Link>
        <span className="text-gray-300">/</span>
        <Link href="/courses/adobe-incopy-2026" className="hover:text-blue-600 transition-colors font-inter">
          Adobe InCopy 2026
        </Link>
        <span className="text-gray-300">/</span>
        <span className="text-gray-900 font-semibold">{content.breadcrumb}</span>
      </nav>

      {/* Media Player Showcase */}
      <div className="liquid-glass-darker rounded-[2.5rem] p-4 mb-10 shadow-xl border-white/80">
        <div
          onClick={() => setIsPlaying(!isPlaying)}
          className="aspect-video w-full bg-slate-950 rounded-[2rem] overflow-hidden relative flex items-center justify-center group cursor-pointer select-none"
        >
          {/* Subtle Ambient Background Mesh */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-slate-900 to-indigo-900/30"></div>

          {/* Animated Waveform / Ambient Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>

          {/* Center Play Button */}
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center group-hover:bg-white/30 transition-all group-hover:scale-110 border border-white/30 shadow-2xl z-10">
            {isPlaying ? (
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-8 h-8 text-white ltr:ml-1 rtl:mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>

          {/* Video Metadata Bar */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white text-xs z-10 bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/10">
            <span className="font-medium tracking-wide flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${isPlaying ? "bg-red-500 animate-pulse" : "bg-blue-400"}`}></span>
              {content.video.title}
            </span>
            <span className="font-mono text-gray-300">{content.video.duration}</span>
          </div>
        </div>
      </div>

      {/* Lesson Content Sections */}
      <div className="space-y-12">
        {content.sections.map((section, index) => {
          const isDone = completedLessons[section.id];

          return (
            <section key={section.id} className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-base flex items-center justify-center shadow-sm">
                    {index + 1}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                    {section.title}
                  </h2>
                </div>

                {/* Mark as Completed Button */}
                <button
                  type="button"
                  onClick={() => toggleComplete(section.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all backdrop-blur-md border ${
                    isDone
                      ? "bg-emerald-500/10 border-emerald-300 text-emerald-700"
                      : "bg-white/60 border-gray-200 text-gray-500 hover:text-gray-900"
                  }`}
                >
                  <svg className={`w-4 h-4 ${isDone ? "text-emerald-600" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {isDone
                    ? (lang === "fa" ? "تکمیل شده" : "Completed")
                    : (lang === "fa" ? "علامت‌گذاری به عنوان خوانده‌شده" : "Mark as read")}
                </button>
              </div>

              <div className="liquid-glass rounded-3xl p-8 text-gray-700 leading-relaxed font-light text-lg space-y-6 shadow-sm border-white/60">
                {section.content?.map((text, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {text}
                  </p>
                ))}

                {/* Sub-cards */}
                {section.cards && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {section.cards.map((card, cIdx) => (
                      <div
                        key={cIdx}
                        className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/80 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <h3 className="font-bold text-gray-900 mb-2.5 flex items-center gap-2 text-base">
                          <span className="w-6 h-6 rounded-full bg-blue-100/80 text-blue-700 flex items-center justify-center text-xs font-bold font-inter">
                            {card.number}
                          </span>
                          {card.title}
                        </h3>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Image Placeholder with Template Indicator */}
                {section.imagePlaceholder && (
                  <div className="my-8 aspect-video rounded-3xl bg-gradient-to-tr from-gray-50 via-slate-100 to-blue-50/50 border border-gray-200/80 overflow-hidden relative flex flex-col items-center justify-center p-6 shadow-inner group">
                    <div className="w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-md shadow-sm border border-white/80 flex items-center justify-center text-blue-500 mb-3 group-hover:scale-105 transition-transform">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>

                    <span className="text-gray-700 font-semibold text-sm px-4 py-2 bg-white/80 backdrop-blur-md rounded-xl border border-white/80 shadow-sm text-center">
                      {section.imagePlaceholder}
                    </span>

                    <span className="text-[11px] text-gray-400 mt-2 font-light">
                      {lang === "fa"
                        ? "فایل تصویر واقعی را با همین شماره در این بلوک جایگزین کنید."
                        : "Replace this template block with the corresponding high-resolution screenshot."}
                    </span>
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>

      {/* Navigation Footer Buttons */}
      <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200/80 pt-8">
        <Link
          href="/courses/adobe-incopy-2026"
          className="px-6 py-2.5 rounded-full border border-gray-200 bg-white/60 text-gray-700 hover:bg-white transition-all text-sm font-medium backdrop-blur-md shadow-sm"
        >
          {t("back_to_curriculum")}
        </Link>

        {nextLevel && (
          <Link
            href={`/courses/adobe-incopy-2026/${nextLevel.id}`}
            className="px-7 py-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all text-sm font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            {lang === "fa" ? nextLevel.labelFa : nextLevel.labelEn}
          </Link>
        )}
      </div>
    </div>
  );
}
