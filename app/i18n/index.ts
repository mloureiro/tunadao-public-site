import pt from './pt.json';
import en from './en.json';

export const languages = {
  pt: 'Português',
  en: 'English',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'pt';

export const translations = {
  pt,
  en,
} as const;

type TranslationKeys = typeof pt;

/**
 * Get a nested translation value by dot-separated path
 * e.g., t('nav.home') returns 'Início' for PT
 */
export function t(key: string, lang: Language = defaultLang): string {
  const keys = key.split('.');
  let value: unknown = translations[lang];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      // Fallback to default language
      value = translations[defaultLang];
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = (value as Record<string, unknown>)[fallbackKey];
        } else {
          return key; // Return the key if not found
        }
      }
      break;
    }
  }

  return typeof value === 'string' ? value : key;
}

/**
 * Get the language from the URL path
 */
export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) {
    return lang as Language;
  }
  return defaultLang;
}

/**
 * Create a translation function for a specific language
 */
export function useTranslations(lang: Language) {
  return (key: string) => t(key, lang);
}

/**
 * Get localized path
 */
export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}
