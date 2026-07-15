import messages from './messages.json';
import type { Locale } from './config';

export type TranslationParams = Record<string, string | number>;

function getByPath(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

export function t(locale: Locale, path: string, params?: TranslationParams): string {
  const raw = getByPath((messages as Record<Locale, unknown>)[locale], path);

  if (typeof raw !== 'string') {
    throw new Error(`Missing translation: ${locale}.${path}`);
  }

  if (!params) return raw;

  return raw.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in params ? String(params[key]) : match,
  );
}
