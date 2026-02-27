import en from "./en.json";
import es from "./es.json";
import eu from "./eu.json";

export type Locale = "en" | "es" | "eu";

const translations: Record<Locale, Record<string, unknown>> = { en, es, eu };

export function getTranslations(locale: Locale): Record<string, unknown> {
  return translations[locale];
}

export function t(
  translationObj: Record<string, unknown>,
  key: string
): string {
  const keys = key.split(".");
  let result: unknown = translationObj;
  for (const k of keys) {
    if (result && typeof result === "object" && k in (result as Record<string, unknown>)) {
      result = (result as Record<string, unknown>)[k];
    } else {
      return key; // fallback: return the key itself
    }
  }
  return typeof result === "string" ? result : key;
}
