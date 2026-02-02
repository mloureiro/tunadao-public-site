import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

// Template identifiers
export type TemplateId = 'classic' | 'advanced' | 'experimental' | 'mashup';

// What a template must export
export interface TemplateExports {
  Layout: AstroComponentFactory;
  Hero: AstroComponentFactory;
  Header: AstroComponentFactory;
  Footer: AstroComponentFactory;
  // Add more as needed
}

// Template metadata
export interface TemplateInfo {
  id: TemplateId;
  name: string;
  description: string;
  enabled: boolean;
  inspirations?: string[]; // Optional design inspirations for UI display
}
