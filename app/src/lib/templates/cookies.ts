/**
 * Template Cookie Management
 *
 * Handles reading and writing template selection cookies.
 * Works both server-side (Astro) and client-side (browser).
 */

import type { TemplateCookieConfig, TemplateId } from './types';
import { DEFAULT_TEMPLATE, isValidTemplateId } from './registry';

/** Cookie configuration */
export const TEMPLATE_COOKIE_CONFIG: TemplateCookieConfig = {
  name: 'tunadao-template',
  maxAge: 60 * 60 * 24 * 365, // 1 year in seconds
  path: '/',
  sameSite: 'lax',
};

/**
 * Parse template ID from cookie value.
 * Returns the default template if the value is invalid.
 *
 * @param cookieValue - Raw cookie value string
 * @returns Valid template ID
 */
export function parseTemplateCookie(cookieValue: string | undefined | null): TemplateId {
  if (!cookieValue) return DEFAULT_TEMPLATE;

  const trimmed = cookieValue.trim();
  if (isValidTemplateId(trimmed)) {
    return trimmed;
  }

  return DEFAULT_TEMPLATE;
}

/**
 * Get template ID from request cookies (server-side).
 * Use this in Astro pages and layouts.
 *
 * @param cookieHeader - The Cookie header from the request
 * @returns Template ID
 *
 * @example
 * ```astro
 * ---
 * import { getTemplateFromRequest } from '@lib/templates';
 * const templateId = getTemplateFromRequest(Astro.request.headers.get('cookie'));
 * ---
 * ```
 */
export function getTemplateFromRequest(cookieHeader: string | null): TemplateId {
  if (!cookieHeader) return DEFAULT_TEMPLATE;

  // Parse cookie header
  const cookies = cookieHeader.split(';').reduce(
    (acc, cookie) => {
      const [key, ...valueParts] = cookie.trim().split('=');
      if (key) {
        acc[key] = valueParts.join('='); // Handle values with = in them
      }
      return acc;
    },
    {} as Record<string, string>
  );

  return parseTemplateCookie(cookies[TEMPLATE_COOKIE_CONFIG.name]);
}

/**
 * Generate the Set-Cookie header value for a template selection.
 *
 * @param templateId - Template ID to set
 * @returns Set-Cookie header value
 */
export function generateTemplateCookieHeader(templateId: TemplateId): string {
  const { name, maxAge, path, sameSite } = TEMPLATE_COOKIE_CONFIG;
  return `${name}=${templateId}; Max-Age=${maxAge}; Path=${path}; SameSite=${sameSite}`;
}

/**
 * Client-side: Get current template from browser cookies.
 * Only call this in client-side code (inside <script> tags or .ts files loaded by browser).
 */
export function getTemplateFromBrowser(): TemplateId {
  if (typeof document === 'undefined') return DEFAULT_TEMPLATE;
  return parseTemplateCookie(getCookieValue(TEMPLATE_COOKIE_CONFIG.name));
}

/**
 * Client-side: Set template cookie in browser.
 * Only call this in client-side code.
 *
 * @param templateId - Template ID to set
 */
export function setTemplateInBrowser(templateId: TemplateId): void {
  if (typeof document === 'undefined') return;

  const { name, maxAge, path, sameSite } = TEMPLATE_COOKIE_CONFIG;
  document.cookie = `${name}=${templateId}; max-age=${maxAge}; path=${path}; samesite=${sameSite}`;
}

/**
 * Helper to get a cookie value by name (client-side only).
 */
function getCookieValue(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;

  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match?.[2];
}
