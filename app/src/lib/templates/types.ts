/**
 * Template System Types
 *
 * This module defines the interface for UI templates.
 * Templates control layout, structure, and styling - not just colors.
 */

export interface Template {
  /** Unique identifier for the template */
  id: string;
  /** Display name shown in UI */
  name: string;
  /** Short description of the template style */
  description: string;
  /** Design inspirations for this template */
  inspirations?: string[];
  /** Whether this template is available (implemented) */
  available: boolean;
}

export type TemplateId = 'classic' | 'standard-plus' | 'experimental' | 'mashup';

/**
 * Template registry - all available templates
 */
export const templates: Template[] = [
  {
    id: 'classic',
    name: 'Clássico',
    description: 'O design atual - tradicional e familiar',
    inspirations: ['Current design'],
    available: true,
  },
  {
    id: 'standard-plus',
    name: 'Standard+',
    description: 'Melhorias convencionais - limpo e focado no conteúdo',
    inspirations: ['Bon Iver', 'Radical Face', 'Preston Thompson'],
    available: false,
  },
  {
    id: 'experimental',
    name: 'Experimental',
    description: 'Ideias ousadas - tipografia distintiva e animações',
    inspirations: ['Ólafur Arnalds', 'KIKK Festival', 'Splore'],
    available: false,
  },
  {
    id: 'mashup',
    name: 'Mashup',
    description: 'O melhor de tudo - herança com modernidade',
    inspirations: ['Blue Note', 'Moog Music', 'ECM Records'],
    available: false,
  },
];

/**
 * Get a template by ID
 */
export function getTemplate(id: string): Template | undefined {
  return templates.find((t) => t.id === id);
}

/**
 * Get the default template
 */
export function getDefaultTemplate(): Template {
  return templates[0]; // classic
}

/**
 * Cookie name for template persistence
 */
export const TEMPLATE_COOKIE_NAME = 'tunadao-template';

/**
 * Parse cookies from a cookie header string
 */
export function parseCookies(cookieHeader: string): Record<string, string> {
  return Object.fromEntries(
    cookieHeader.split(';').map((c) => {
      const [key, ...rest] = c.trim().split('=');
      return [key, rest.join('=')];
    })
  );
}

/**
 * Get the current template from request cookies
 */
export function getTemplateFromCookies(cookieHeader: string | null): Template {
  if (!cookieHeader) return getDefaultTemplate();

  const cookies = parseCookies(cookieHeader);
  const templateId = cookies[TEMPLATE_COOKIE_NAME];

  return getTemplate(templateId) || getDefaultTemplate();
}
