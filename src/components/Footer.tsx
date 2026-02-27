"use client";

import { useLanguage } from "@/context/LanguageContext";
import Container from "./Container";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <Container>
      <footer className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 mt-12 pb-20 md:pb-8">
        <p className="text-sm text-text-secondary">
          &copy; {year} {t("footer.copyright")}
        </p>
        <ul className="flex flex-col sm:flex-row gap-1 sm:gap-4 text-sm text-text-secondary">
          <li>
            <a
              href="https://github.com/mikelisonline/mikel.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-border underline-offset-4 hover:text-text-primary transition-colors"
            >
              {t("footer.source")}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mikelisonline"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-border underline-offset-4 hover:text-text-primary transition-colors"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="mailto:hello@mikel.studio"
              className="underline decoration-border underline-offset-4 hover:text-text-primary transition-colors"
            >
              Email
            </a>
          </li>
        </ul>
      </footer>
    </Container>
  );
}
