import pt from './pt.json';
import en from './en.json';

export const languages = {
  pt: 'Português',
  en: 'English',
} as const;

export const languageFlags: Record<string, string> = {
  pt: '🇵🇹',
  en: '🇬🇧',
};

export type Language = keyof typeof languages;

export const defaultLang: Language = 'pt';

export const translations = {
  pt,
  en,
} as const;

type _TranslationKeys = typeof pt;

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
 * Get language from Astro's currentLocale or URL
 */
export function getLang(astroLocale: string | undefined, url?: URL): Language {
  if (astroLocale && astroLocale in translations) {
    return astroLocale as Language;
  }
  if (url) {
    return getLangFromUrl(url);
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
 * Get localized path - converts a path to the correct language version
 * @param path - The path to localize (e.g., '/sobre')
 * @param lang - Target language
 * @param currentLang - Current language (to handle removing prefix)
 */
export function getLocalizedPath(path: string, lang: Language, _currentLang?: Language): string {
  // Remove any existing language prefix
  let cleanPath = path;
  for (const l of Object.keys(languages)) {
    if (path.startsWith(`/${l}/`)) {
      cleanPath = path.slice(l.length + 1);
      break;
    } else if (path === `/${l}`) {
      cleanPath = '/';
      break;
    }
  }

  // Add language prefix for non-default languages
  if (lang === defaultLang) {
    return cleanPath;
  }
  return `/${lang}${cleanPath}`;
}

/**
 * Get the alternate language
 */
export function getAlternateLang(lang: Language): Language {
  return lang === 'pt' ? 'en' : 'pt';
}
