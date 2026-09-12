"use client";

import { useLanguage } from "../context/LanguageContext";

export default function AppFooter() {
  const { t } = useLanguage();

  return (
    <footer className="mt-auto py-8 text-center text-sm text-gray-500">
      <div className="liquid-glass rounded-3xl max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-medium text-gray-700">Kamiloo Ed</span>
        <span className="text-xs text-gray-400">
          © {new Date().getFullYear()} Kamiloo Ed. {t("copyright")}
        </span>
      </div>
    </footer>
  );
}
