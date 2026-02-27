"use client";

import { useLanguage } from "@/context/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import Container from "./Container";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="pt-24 md:pt-40 pb-8 md:pb-16 bg-surface">
      <Container>
        {/* SVG with striped text effect */}
        <div className="mb-8 md:mb-12">
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

        {/* Tagline + Language selector row */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8">
            <p className="text-base font-mono text-text-secondary leading-relaxed">
              {t("hero.tagline")}
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:flex md:justify-end md:items-end">
            <LanguageSelector />
          </div>
        </div>
      </Container>
    </section>
  );
}
