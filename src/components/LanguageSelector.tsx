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
    <div className="flex items-center gap-1 text-xs uppercase tracking-widest">
      {locales.map((l, i) => (
        <span key={l.code} className="flex items-center gap-1">
          <button
            onClick={() => setLocale(l.code)}
            className={`transition-colors cursor-pointer ${
              locale === l.code
                ? "text-foreground"
                : "text-muted hover:text-foreground"
            }`}
          >
            {l.label}
          </button>
          {i < locales.length - 1 && (
            <span className="text-border">/</span>
          )}
        </span>
      ))}
    </div>
  );
}
