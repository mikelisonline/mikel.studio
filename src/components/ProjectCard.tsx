"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import type { Project } from "@/data/projects";
import DrawerWrapper from "./DrawerWrapper";

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();

  const card = (
    <button
      className="group h-full w-full relative aspect-[4/5] rounded-2xl p-3 flex flex-col overflow-hidden hover-lift text-left cursor-pointer"
      style={{
        backgroundColor: project.bgColorDark,
      }}
    >
      {/* Top bar */}
      <div className="flex justify-between items-start w-full">
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white font-mono">
          {project.year}
        </span>
        <span className="rounded-full bg-white/10 p-1.5 text-white">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </span>
      </div>

      {/* Center logo area */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-[36%] aspect-square relative opacity-60">
          <Image
            src={project.logo}
            alt={`${t(project.titleKey)} logo`}
            fill
            className="object-contain"
            sizes="120px"
          />
        </div>
      </div>

      {/* Bottom text */}
      <div className="transition-transform duration-300 md:group-hover:-translate-y-4">
        <h3 className="font-bold text-white text-base">
          {t(project.titleKey)}
        </h3>
        <div className="flex gap-1.5 mt-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Description reveals on hover */}
        <p className="hidden md:block max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-70 mt-2 text-sm text-white/80 transition-all duration-300">
          {t(project.descriptionKey)}
        </p>
      </div>
    </button>
  );

  return (
    <DrawerWrapper
      trigger={card}
      title={t(project.titleKey)}
      description={t(project.descriptionKey)}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-text-muted font-mono text-xs mb-1">{t("drawer.year")}</p>
            <p className="text-text-primary">{project.year}</p>
          </div>
          <div>
            <p className="text-text-muted font-mono text-xs mb-1">{t("drawer.role")}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-surface-raised px-2 py-0.5 rounded-full text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm text-text-primary underline decoration-border underline-offset-4 hover:decoration-text-primary transition-colors"
        >
          {t("drawer.visitSite")}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>
    </DrawerWrapper>
  );
}
