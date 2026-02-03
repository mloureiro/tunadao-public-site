import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

// Template identifiers
export type TemplateId = 'classic' | 'advanced' | 'experimental' | 'mashup';

// What a template must export
export interface TemplateExports {
  // Shell
  Layout: AstroComponentFactory;
  Hero: AstroComponentFactory;
  Header: AstroComponentFactory;
  Footer: AstroComponentFactory;
  // Content
  EditionCard: AstroComponentFactory;
  FestivalCard: AstroComponentFactory;
  Award: AstroComponentFactory;
  Section: AstroComponentFactory;
  YearNav: AstroComponentFactory;
}

// Template metadata
export interface TemplateInfo {
  id: TemplateId;
  name: string;
  description: string;
  enabled: boolean;
  inspirations?: string[]; // Optional design inspirations for UI display
}
