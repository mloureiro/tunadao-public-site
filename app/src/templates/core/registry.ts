import type { TemplateId, TemplateInfo } from './types';

export const TEMPLATES: TemplateInfo[] = [
  {
    id: 'classic',
    name: 'Classic',
    description: 'The original Tunadão look',
    enabled: true,
  },
  {
    id: 'advanced',
    name: 'Advanced',
    description: 'Refined and polished - content-first design',
    enabled: true,
    inspirations: ['Radical Face', 'Bon Iver', 'Preston Thompson'],
  },
  {
    id: 'experimental',
    name: 'Experimental',
    description: 'Bold typography and unique interactions',
    enabled: false,
  },
  {
    id: 'mashup',
    name: 'Mashup',
    description: 'Best elements from all templates',
    enabled: false,
  },
];

export const DEFAULT_TEMPLATE: TemplateId = 'classic';

export function getTemplateInfo(id: TemplateId): TemplateInfo {
  return TEMPLATES.find((t) => t.id === id) ?? TEMPLATES[0];
}

export function getEnabledTemplates(): TemplateInfo[] {
  return TEMPLATES.filter((t) => t.enabled);
}
