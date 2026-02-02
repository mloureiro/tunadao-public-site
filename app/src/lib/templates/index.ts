/**
 * Template System
 *
 * Provides switchable UI templates with isolated CSS and cookie-based persistence.
 *
 * @example
 * ```astro
 * ---
 * import { getTemplateFromRequest, getTemplate, DEFAULT_TEMPLATE } from '@lib/templates';
 *
 * const templateId = getTemplateFromRequest(Astro.request.headers.get('cookie'));
 * const template = getTemplate(templateId);
 * ---
 * <html data-template={templateId}>
 *   <!-- Template CSS loaded dynamically -->
 * </html>
 * ```
 */

// Types
export type { Template, TemplateId, TemplateCookieConfig } from './types';

// Registry
export {
  TEMPLATES,
  TEMPLATE_MAP,
  DEFAULT_TEMPLATE,
  getTemplate,
  getEnabledTemplates,
  isValidTemplateId,
} from './registry';

// Cookies
export {
  TEMPLATE_COOKIE_CONFIG,
  parseTemplateCookie,
  getTemplateFromRequest,
  getTemplateFromBrowser,
  setTemplateInBrowser,
  generateTemplateCookieHeader,
} from './cookies';
