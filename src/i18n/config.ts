export const SUPPORTED_LOCALES = ['en', 'de'] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

/** Rendered at build time and used whenever the browser's language can't be detected/matched. */
export const DEFAULT_LOCALE: Locale = 'de';

export function isLocale(value: string): value is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
}
