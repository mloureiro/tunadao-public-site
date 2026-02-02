import type { TemplateExports } from '../core/types';

const notImplemented = () => {
  throw new Error('Mashup template not yet implemented');
};

// Placeholder exports that throw when used
export const Layout = notImplemented as unknown as TemplateExports['Layout'];
export const Hero = notImplemented as unknown as TemplateExports['Hero'];
export const Header = notImplemented as unknown as TemplateExports['Header'];
export const Footer = notImplemented as unknown as TemplateExports['Footer'];
