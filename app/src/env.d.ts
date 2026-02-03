/// <reference types="astro/client" />

// Allow importing .astro files in TypeScript
// This handles the case where tsc runs separately from astro check
declare module '*.astro' {
  import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
  const Component: AstroComponentFactory;
  export default Component;
}
