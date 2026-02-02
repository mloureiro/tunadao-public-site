/**
 * Template System Types
 *
 * Defines the structure for UI templates that can be switched at runtime.
 * Each template has isolated CSS and can optionally use different layouts.
 */

/** Template identifiers */
export type TemplateId = 'classic' | 'standard-plus' | 'experimental' | 'mashup';

/** Template definition */
export interface Template {
  /** Unique identifier used in cookies and data attributes */
  id: TemplateId;

  /** Display name shown in the switcher UI */
  name: string;

  /** Short description of the template's style */
  description: string;

  /** Path to template-specific CSS file (relative to styles/) */
  cssPath: string;

  /** Whether this template is ready for use */
  enabled: boolean;

  /** Design inspiration sources */
  inspirations?: string[];
}

/** Cookie configuration for template persistence */
export interface TemplateCookieConfig {
  /** Cookie name */
  name: string;

  /** Cookie max age in seconds (default: 1 year) */
  maxAge: number;

  /** Cookie path */
  path: string;

  /** SameSite attribute */
  sameSite: 'strict' | 'lax' | 'none';
}
