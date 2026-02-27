"use client";

import { useLanguage } from "@/context/LanguageContext";

interface SectionHeaderProps {
  labelKey: string;
  descriptionKey?: string;
  linkHref?: string;
  linkLabelKey?: string;
}

export default function SectionHeader({
  labelKey,
  descriptionKey,
  linkHref,
  linkLabelKey,
}: SectionHeaderProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 mb-6 sm:mb-8 lg:mb-16">
      <h2 className="text-xl font-bold">{t(labelKey)}</h2>
      {descriptionKey && (
        <p className="font-mono text-text-secondary text-sm">
          {t(descriptionKey)}
        </p>
      )}
      {linkHref && linkLabelKey && (
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-mono text-sm text-text-primary underline decoration-border underline-offset-4 hover:decoration-text-primary transition-colors"
        >
          {t(linkLabelKey)}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      )}
    </div>
  );
}
