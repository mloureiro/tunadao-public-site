import type { TemplateId } from './types';
import { DEFAULT_TEMPLATE, TEMPLATES } from './registry';

export const TEMPLATE_COOKIE_CONFIG = {
  name: 'tunadao-template',
  maxAge: 60 * 60 * 24 * 365, // 1 year
  path: '/',
  sameSite: 'Lax' as const,
};

/**
 * Parse template ID from cookie string.
 * Returns DEFAULT_TEMPLATE if no valid template found.
 */
export function getTemplateFromRequest(cookieHeader: string | null): TemplateId {
  if (!cookieHeader) return DEFAULT_TEMPLATE;

  const match = cookieHeader.match(new RegExp(`${TEMPLATE_COOKIE_CONFIG.name}=([^;]+)`));
  if (!match) return DEFAULT_TEMPLATE;

  const templateId = match[1] as TemplateId;

  // Validate it's a known template
  const isValid = TEMPLATES.some((t) => t.id === templateId);
  return isValid ? templateId : DEFAULT_TEMPLATE;
}

/**
 * Get template info by ID (for display purposes).
 * This is different from getTemplate() which returns components.
 */
export function getTemplateById(templateId: TemplateId) {
  return TEMPLATES.find((t) => t.id === templateId) ?? TEMPLATES[0];
}
