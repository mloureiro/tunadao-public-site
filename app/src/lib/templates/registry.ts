/**
 * Template Registry
 *
 * Central registry of all available UI templates.
 * Templates are defined here and can be easily extended by other agents.
 */

import type { Template, TemplateId } from './types';

/** Default template ID when no selection exists */
export const DEFAULT_TEMPLATE: TemplateId = 'classic';

/**
 * Registry of all available templates.
 *
 * To add a new template:
 * 1. Add the template definition here
 * 2. Create the CSS file at the specified cssPath
 * 3. Set enabled: true when ready
 */
export const TEMPLATES: readonly Template[] = [
  {
    id: 'classic',
    name: 'Classic',
    description: 'The original Tunadão look - clean and traditional',
    cssPath: 'templates/template-classic.css',
    enabled: true,
    inspirations: ['Current site design'],
  },
  {
    id: 'standard-plus',
    name: 'Standard+',
    description: 'Refined and polished - conventional improvement',
    cssPath: 'templates/template-standard-plus.css',
    enabled: false, // Enable when CSS is ready
    inspirations: ['Radical Face', 'Bon Iver', 'Preston Thompson'],
  },
  {
    id: 'experimental',
    name: 'Experimental',
    description: 'Bold and unconventional - pushing boundaries',
    cssPath: 'templates/template-experimental.css',
    enabled: false, // Enable when CSS is ready
    inspirations: ['Ólafur Arnalds', 'KIKK Festival', 'Splore'],
  },
  {
    id: 'mashup',
    name: 'Mashup',
    description: 'Best of all worlds - curated combination',
    cssPath: 'templates/template-mashup.css',
    enabled: false, // Enable when CSS is ready
    inspirations: ['Blue Note', 'Moog Music', 'ECM Records'],
  },
] as const;

/** Map of template ID to template definition for quick lookup */
export const TEMPLATE_MAP: ReadonlyMap<TemplateId, Template> = new Map(
  TEMPLATES.map((t) => [t.id, t])
);

/**
 * Get a template by ID.
 * Returns the default template if not found.
 */
export function getTemplate(id: TemplateId | string | undefined): Template {
  if (!id) return TEMPLATE_MAP.get(DEFAULT_TEMPLATE)!;
  const template = TEMPLATE_MAP.get(id as TemplateId);
  return template ?? TEMPLATE_MAP.get(DEFAULT_TEMPLATE)!;
}

/**
 * Get all enabled templates.
 * Use this to populate the template switcher UI.
 */
export function getEnabledTemplates(): Template[] {
  return TEMPLATES.filter((t) => t.enabled);
}

/**
 * Check if a template ID is valid.
 */
export function isValidTemplateId(id: string): id is TemplateId {
  return TEMPLATE_MAP.has(id as TemplateId);
}
