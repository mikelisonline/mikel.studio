"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function SectionHeader({ labelKey }: { labelKey: string }) {
  const { t } = useLanguage();

  return (
    <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-muted">
      {t(labelKey)}
    </h2>
  );
}
