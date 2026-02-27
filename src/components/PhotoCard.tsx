"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { Photo } from "@/data/photos";
import { photographyLink } from "@/data/photos";
import DrawerWrapper from "./DrawerWrapper";
import Image from "next/image";

export default function PhotoCard({ photo }: { photo: Photo }) {
  const { t } = useLanguage();

  const card = (
    <button className="group hover-lift text-left cursor-pointer w-full">
      <div className="aspect-[3/4] rounded-xl bg-surface overflow-hidden relative">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 80vw, 33vw"
          loading="lazy"
        />
      </div>
    </button>
  );

  return (
    <DrawerWrapper
      trigger={card}
      title={photo.title}
      description={`${photo.location}, ${photo.year}`}
    >
      <div className="space-y-4">
        <div className="rounded-xl overflow-hidden relative aspect-[3/4] max-h-[50vh]">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-contain"
            sizes="90vw"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-text-muted font-mono text-xs mb-1">{t("drawer.location")}</p>
            <p className="text-text-primary">{photo.location}</p>
          </div>
          <div>
            <p className="text-text-muted font-mono text-xs mb-1">{t("drawer.year")}</p>
            <p className="text-text-primary">{photo.year}</p>
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
