/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CMS_URL: string;
  readonly USE_CMS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
