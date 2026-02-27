"use client";

import { useLanguage } from "@/context/LanguageContext";
import LanguageSelector from "./LanguageSelector";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="mb-8">
      {/* SVG with striped text effect */}
      <div className="mb-8">
        <svg
          viewBox="0 0 920 200"
          className="w-full text-foreground"
          aria-label="Mikel Studio"
          role="img"
        >
          <defs>
            <pattern
              id="hero-stripes"
              width="100%"
              height="5.5"
              patternUnits="userSpaceOnUse"
            >
              <rect width="100%" height="3" fill="currentColor" />
            </pattern>
          </defs>
          {/* Single line on desktop */}
          <text
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
            fill="url(#hero-stripes)"
            className="hidden sm:block"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "140px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Mikel Studio
          </text>
          {/* Two lines on mobile */}
          <text
            x="50%"
            y="35%"
            dominantBaseline="central"
            textAnchor="middle"
            fill="url(#hero-stripes)"
            className="sm:hidden"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "120px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Mikel
          </text>
          <text
            x="50%"
            y="72%"
            dominantBaseline="central"
            textAnchor="middle"
            fill="url(#hero-stripes)"
            className="sm:hidden"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "120px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Studio
          </text>
        </svg>
      </div>

      {/* Tagline */}
      <p className="text-base sm:text-lg text-muted leading-relaxed max-w-md">
        {t("hero.tagline")}
      </p>

      {/* Language Selector */}
      <div className="mt-5">
        <LanguageSelector />
      </div>
    </section>
  );
}
