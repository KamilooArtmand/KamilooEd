"use client";

import React, { createContext, useContext, useState, useEffect, useSyncExternalStore } from "react";

export type Language = "fa" | "en";
export type Direction = "rtl" | "ltr";

interface LanguageContextType {
  lang: Language;
  dir: Direction;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fa: {
    brand: "Kamiloo Ed",
    nav_home: "خانه",
    nav_courses: "دوره‌ها",
    nav_articles: "مقاله‌ها",
    nav_about: "درباره ما",
    search_placeholder: "جستجو در دوره‌ها و سرفصل‌ها...",
    search_aria: "جستجو",
    search_button: "بیابید",
    hero_badge: "جدیدترین نسل یادگیری",
    hero_title_part1: "یادگیری",
    hero_title_accent: "حرفه‌ای‌تر",
    hero_title_part2: "از همیشه",
    hero_description: "با دوره‌های مدرن و کاربردی ما، در سریع‌ترین زمان ممکن به یک متخصص تبدیل شوید. طراحی شده با بالاترین استانداردهای بصری و تعاملی جهان.",
    hero_btn_start: "شروع یادگیری",
    hero_btn_explore: "کاوش دوره‌ها",
    featured_title: "جدیدترین دوره‌ها",
    view_all: "مشاهده همه",
    coming_soon: "به زودی...",
    duration_hours: "۱۲ ساعت",
    pricing_free: "رایگان",
    badge_levels: "مبتدی تا پیشرفته",
    badge_latest: "نسخه ۲۰۲۶",
    curriculum_title: "سرفصل‌های آموزشی",
    phase: "فاز",
    active_now: "در دسترس",
    enter_level: "ورود به بخش",
    download_syllabus: "دانلود سرفصل‌ها",
    back_to_curriculum: "بازگشت به سرفصل‌ها",
    next_level: "سطح بعدی",
    copyright: "تمامی حقوق محفوظ است.",
  },
  en: {
    brand: "Kamiloo Ed",
    nav_home: "Home",
    nav_courses: "Courses",
    nav_articles: "Articles",
    nav_about: "About",
    search_placeholder: "Search courses and lessons...",
    search_aria: "Search",
    search_button: "Find",
    hero_badge: "Next-Gen Educational Experience",
    hero_title_part1: "Learn",
    hero_title_accent: "Smarter",
    hero_title_part2: "Than Ever",
    hero_description: "Transform into an industry professional with our state-of-the-art masterclasses. Crafted with modern Liquid Glass aesthetics and responsive architecture.",
    hero_btn_start: "Get Started",
    hero_btn_explore: "Explore Courses",
    featured_title: "Featured Courses",
    view_all: "View All",
    coming_soon: "Coming Soon...",
    duration_hours: "12 Hours",
    pricing_free: "Free Access",
    badge_levels: "Beginner to Pro",
    badge_latest: "2026 Edition",
    curriculum_title: "Course Curriculum",
    phase: "Phase",
    active_now: "Active",
    enter_level: "Enter",
    download_syllabus: "Download Syllabus",
    back_to_curriculum: "Back to Curriculum",
    next_level: "Next Level",
    copyright: "All rights reserved.",
  }
};

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): Language {
  const saved = localStorage.getItem("kamiloo_lang");
  return saved === "en" ? "en" : "fa";
}

function getServerSnapshot(): Language {
  return "fa";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const clientLang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [localLang, setLocalLang] = useState<Language | null>(null);

  const lang: Language = localLang ?? clientLang;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLocalLang(newLang);
    localStorage.setItem("kamiloo_lang", newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "fa" ? "rtl" : "ltr";
  };

  const dir: Direction = lang === "fa" ? "rtl" : "ltr";

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations["fa"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, dir, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
