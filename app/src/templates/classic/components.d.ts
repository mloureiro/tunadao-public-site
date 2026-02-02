// Type declarations for Astro component re-exports
// These allow TypeScript to understand imports from .astro files

declare module '../../layouts/Layout.astro' {
  import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
  const Layout: AstroComponentFactory;
  export default Layout;
}

declare module '../../components/HeroSection.astro' {
  import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
  const Hero: AstroComponentFactory;
  export default Hero;
}

declare module '../../components/Header.astro' {
  import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
  const Header: AstroComponentFactory;
  export default Header;
}

declare module '../../components/Footer.astro' {
  import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
  const Footer: AstroComponentFactory;
  export default Footer;
}
