"use client";

import { useLanguage } from "@/context/LanguageContext";

interface SectionHeaderProps {
  labelKey: string;
  descriptionKey?: string;
}

export default function SectionHeader({
  labelKey,
  descriptionKey,
}: SectionHeaderProps) {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-12 gap-4 mb-6 sm:mb-8 lg:mb-16">
      <div className="col-span-12 lg:col-span-4">
        <h2 className="text-xl font-bold">{t(labelKey)}</h2>
      </div>
      {descriptionKey && (
        <div className="col-span-12 lg:col-span-8 lg:col-start-5">
          <p className="font-mono text-text-secondary text-sm mt-1 lg:mt-0">
            {t(descriptionKey)}
          </p>
        </div>
      )}
    </div>
  );
}
