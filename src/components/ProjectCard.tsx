"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { Project } from "@/data/projects";

const tagColors: Record<string, string> = {
  development: "border-blue-500/30 text-blue-400",
  design: "border-purple-500/30 text-purple-400",
  both: "border-emerald-500/30 text-emerald-400",
};

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();

  return (
    <a
      href={project.href}
      className="group flex-shrink-0 snap-start w-72 sm:w-80 rounded-xl border border-border p-4 transition-all duration-200 hover:-translate-y-1 hover:border-muted/50"
    >
      {/* Thumbnail placeholder */}
      <div className="aspect-video rounded-lg bg-white/[0.03] mb-4" />

      {/* Meta */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wider ${tagColors[tag]}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-xs text-muted">{project.year}</span>
      </div>

      {/* Title */}
      <h3 className="font-medium text-foreground mb-1">
        {t(project.titleKey)}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed">
        {t(project.descriptionKey)}
      </p>
    </a>
  );
}
