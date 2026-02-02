import type { TemplateId, TemplateExports } from './types';
import { DEFAULT_TEMPLATE } from './registry';

// Environment variable for build-time template selection
const BUILD_TEMPLATE = (import.meta.env.PUBLIC_TEMPLATE || DEFAULT_TEMPLATE) as TemplateId;

/**
 * Get template components.
 *
 * @param templateId - Optional template ID. If not provided, uses build-time config.
 * @returns Promise resolving to template component exports
 */
export async function getTemplate(templateId?: TemplateId): Promise<TemplateExports> {
  const id = templateId ?? BUILD_TEMPLATE;

  // Dynamic import based on template ID
  switch (id) {
    case 'classic':
      return import('../classic');
    case 'advanced':
      return import('../advanced');
    case 'experimental':
      return import('../experimental');
    case 'mashup':
      return import('../mashup');
    default:
      return import('../classic');
  }
}

/**
 * Get current template ID (for dev pages, switcher, etc.)
 */
export function getCurrentTemplateId(): TemplateId {
  return BUILD_TEMPLATE;
}
