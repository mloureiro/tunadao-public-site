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
  const base = import.meta.env.BASE_URL || '/';
  let pathname = url.pathname;

  // Remove base path if present
  if (base !== '/' && pathname.startsWith(base)) {
    pathname = pathname.slice(base.length - 1); // Keep leading slash
  }

  const [, lang] = pathname.split('/');
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
 * Get the base URL from Astro config, normalized (without trailing slash)
 */
function getBase(): string {
  const base = import.meta.env.BASE_URL || '/';
  // Remove trailing slash for consistent path building
  return base.endsWith('/') ? base.slice(0, -1) : base;
}

/**
 * Get localized path - converts a path to the correct language version
 * Includes the base URL from Astro config for subdirectory deployments
 * @param path - The path to localize (e.g., '/sobre')
 * @param lang - Target language
 * @param currentLang - Current language (to handle removing prefix)
 */
export function getLocalizedPath(path: string, lang: Language, _currentLang?: Language): string {
  const base = getBase();

  // Remove base path if present (handles paths from Astro.url.pathname)
  let cleanPath = path;
  if (base && cleanPath.startsWith(base)) {
    cleanPath = cleanPath.slice(base.length) || '/';
  }

  // Remove any existing language prefix
  for (const l of Object.keys(languages)) {
    if (cleanPath.startsWith(`/${l}/`)) {
      cleanPath = cleanPath.slice(l.length + 1);
      break;
    } else if (cleanPath === `/${l}`) {
      cleanPath = '/';
      break;
    }
  }

  // Build the final path with base and language prefix
  if (lang === defaultLang) {
    return cleanPath === '/' ? base || '/' : `${base}${cleanPath}`;
  }
  return `${base}/${lang}${cleanPath}`;
}

/**
 * Get the alternate language
 */
export function getAlternateLang(lang: Language): Language {
  return lang === 'pt' ? 'en' : 'pt';
}
