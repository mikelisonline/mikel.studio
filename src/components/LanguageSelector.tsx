"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { Locale } from "@/i18n";

const locales: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "eu", label: "EU" },
];

export default function LanguageSelector() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1.5 font-mono text-xs tracking-wider">
      {locales.map((l, i) => (
        <span key={l.code} className="flex items-center gap-1.5">
          <button
            onClick={() => setLocale(l.code)}
            className={`transition-colors duration-200 cursor-pointer px-1 py-0.5 rounded ${
              locale === l.code
                ? "text-text-primary bg-surface-raised"
                : "text-text-muted hover:text-text-primary"
            }`}
          >
            {l.label}
          </button>
          {i < locales.length - 1 && (
            <span className="text-text-muted/30">/</span>
          )}
        </span>
      ))}
    </div>
  );
}
