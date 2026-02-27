"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { PhotoSeries } from "@/data/photos";
import { photographyLink } from "@/data/photos";
import DrawerWrapper from "./DrawerWrapper";
import Image from "next/image";

export default function PhotoCard({ series }: { series: PhotoSeries }) {
  const { t } = useLanguage();

  const card = (
    <button className="group hover-lift text-left cursor-pointer w-full">
      <div className="aspect-[3/4] rounded-xl bg-surface overflow-hidden relative">
        <Image
          src={series.cover}
          alt={series.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 80vw, 33vw"
          loading="lazy"
        />
      </div>
      <div className="mt-3">
        <p className="text-sm font-bold text-text-primary truncate">
          {series.title}
        </p>
        <p className="text-sm text-text-secondary truncate">
          {series.location}, {series.year}
        </p>
      </div>
    </button>
  );

  return (
    <DrawerWrapper
      trigger={card}
      title={series.title}
      description={`${series.location}, ${series.year}`}
    >
      <div className="space-y-5">
        {/* Horizontal scrolling photo gallery */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-6 px-6 pb-2">
          {series.images.map((src, i) => (
            <div
              key={i}
              className="snap-center shrink-0 rounded-xl overflow-hidden relative"
              style={{ width: "75vw", maxWidth: "400px" }}
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src={src}
                  alt={`${series.title} — ${i + 1} of ${series.images.length}`}
                  fill
                  className="object-cover"
                  sizes="75vw"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Photo count indicator */}
        <p className="text-xs font-mono text-text-muted text-center">
          {series.images.length} photos — swipe to browse
        </p>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-text-muted font-mono text-xs mb-1">{t("drawer.location")}</p>
            <p className="text-text-primary">{series.location}</p>
          </div>
          <div>
            <p className="text-text-muted font-mono text-xs mb-1">{t("drawer.year")}</p>
            <p className="text-text-primary">{series.year}</p>
          </div>
        </div>

        <a
          href={photographyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm text-text-primary underline decoration-border underline-offset-4 hover:decoration-text-primary transition-colors"
        >
          {t("drawer.viewMore")}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>
    </DrawerWrapper>
  );
}
