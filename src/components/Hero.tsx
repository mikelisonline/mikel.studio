"use client";

import { useLanguage } from "@/context/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import Container from "./Container";

// Generate stripe rects with staggered animation delays
// Each stripe is a horizontal line that fades in/out at different times
function AnimatedStripes({ id, height }: { id: string; height: number }) {
  const stripeHeight = 3;
  const gap = 2.5;
  const step = stripeHeight + gap;
  const count = Math.ceil(height / step);

  return (
    <pattern
      id={id}
      width="100%"
      height={height}
      patternUnits="userSpaceOnUse"
    >
      {Array.from({ length: count }, (_, i) => {
        // Pseudo-random delay based on index — creates organic feel
        const delay = ((i * 7 + 3) % count) * 0.15;
        const duration = 3 + (i % 5) * 0.5;
        return (
          <rect
            key={i}
            y={i * step}
            width="100%"
            height={stripeHeight}
            fill="currentColor"
            className="hero-stripe"
            style={{
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </pattern>
  );
}

const textStyle = {
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontWeight: 700,
  letterSpacing: "-0.02em",
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="pt-24 md:pt-40 pb-8 md:pb-16 bg-surface">
      <Container>
        {/* SVG with animated striped text effect */}
        <div className="mb-8 md:mb-12">
          {/* Desktop — single line */}
          <svg
            viewBox="0 0 920 200"
            className="hidden sm:block w-full text-foreground"
            aria-label="Mikel Studio"
            role="img"
          >
            <defs>
              <AnimatedStripes id="hero-stripes-d" height={200} />
            </defs>
            <text
              x="50%"
              y="50%"
              dominantBaseline="central"
              textAnchor="middle"
              fill="url(#hero-stripes-d)"
              style={{ ...textStyle, fontSize: "140px" }}
            >
              Mikel Studio
            </text>
          </svg>
          {/* Mobile — two lines */}
          <svg
            viewBox="0 0 480 260"
            className="sm:hidden w-full text-foreground"
            aria-label="Mikel Studio"
            role="img"
          >
            <defs>
              <AnimatedStripes id="hero-stripes-m" height={260} />
            </defs>
            <text
              x="50%"
              y="38%"
              dominantBaseline="central"
              textAnchor="middle"
              fill="url(#hero-stripes-m)"
              style={{ ...textStyle, fontSize: "120px" }}
            >
              Mikel
            </text>
            <text
              x="50%"
              y="72%"
              dominantBaseline="central"
              textAnchor="middle"
              fill="url(#hero-stripes-m)"
              style={{ ...textStyle, fontSize: "120px" }}
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
