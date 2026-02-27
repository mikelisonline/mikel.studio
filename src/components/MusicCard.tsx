"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import type { Album } from "@/data/music";
import DrawerWrapper from "./DrawerWrapper";

export default function MusicCard({ album }: { album: Album }) {
  const { t } = useLanguage();

  const card = (
    <button className="group hover-lift text-left cursor-pointer w-full">
      {/* Album art */}
      <div className="aspect-square rounded-xl bg-surface overflow-hidden relative">
        <Image
          src={album.cover}
          alt={`${album.artist} — ${album.albumName}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 60vw, 25vw"
        />
      </div>

      {/* Info — album name big, artist small */}
      <div className="mt-3">
        <p className="text-sm font-bold text-text-primary truncate">
          {album.albumName}
        </p>
        <p className="text-sm text-text-secondary truncate">
          {album.artist}
        </p>
      </div>
    </button>
  );

  // size=large + artwork=large gives us the square album art player
  const embedUrl = `https://bandcamp.com/EmbeddedPlayer/${album.embedType}=${album.embedId}/size=large/bgcol=333333/linkcol=e99708/artwork=large/transparent=true/`;

  return (
    <DrawerWrapper
      trigger={card}
      title={album.albumName}
      description={album.artist}
    >
      <div className="space-y-5">
        {/* Bandcamp embed player — square with album art */}
        <div className="rounded-xl overflow-hidden aspect-square max-w-sm mx-auto w-full">
          <iframe
            src={embedUrl}
            seamless
            loading="lazy"
            className="w-full h-full border-0"
            title={`${album.albumName} by ${album.artist}`}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-text-muted font-mono text-xs mb-1">{t("drawer.year")}</p>
            <p className="text-text-primary">{album.year}</p>
          </div>
          <div>
            <p className="text-text-muted font-mono text-xs mb-1">{t("drawer.role")}</p>
            <p className="text-text-primary">{album.role}</p>
          </div>
        </div>

        <a
          href={album.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm text-text-primary underline decoration-border underline-offset-4 hover:decoration-text-primary transition-colors"
        >
          {t("drawer.listenOn")}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>
    </DrawerWrapper>
  );
}
