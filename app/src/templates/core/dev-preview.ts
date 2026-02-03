/**
 * Rewrites navigation hrefs for dev template preview context.
 *
 * When viewing a template at /dev/templates/{id}/, nav links should stay
 * within the preview context instead of going to main site pages.
 */

const BASE_URL = import.meta.env.BASE_URL;

/**
 * Detect the dev template preview prefix from the current pathname.
 * Returns the prefix (e.g., "/base/dev/templates/advanced") or null if not in preview.
 */
function getDevTemplatePrefix(currentPathname: string): string | null {
  const normalizedBase = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;
  const devTemplatePattern = `${normalizedBase}/dev/templates/`;

  if (!currentPathname.startsWith(devTemplatePattern)) {
    return null;
  }

  const afterPrefix = currentPathname.slice(devTemplatePattern.length);
  const templateId = afterPrefix.split('/')[0];
  if (!templateId) return null;

  return `${normalizedBase}/dev/templates/${templateId}`;
}

/**
 * Rewrite a navigation href for dev template preview context.
 *
 * @param href - The original nav link (e.g., "/tunadao-public-site/citadao")
 * @param currentPathname - Astro.url.pathname
 * @returns The rewritten href, or original if not in dev preview
 */
export function getDevPreviewHref(href: string, currentPathname: string): string {
  const prefix = getDevTemplatePrefix(currentPathname);
  if (!prefix) return href;

  const normalizedBase = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;

  // Strip the base from the original href to get the clean path
  let cleanPath = href;
  if (normalizedBase && cleanPath.startsWith(normalizedBase)) {
    cleanPath = cleanPath.slice(normalizedBase.length);
  }

  // Root "/" or "" -> template preview root
  if (cleanPath === '/' || cleanPath === '') {
    return `${prefix}/`;
  }

  return `${prefix}${cleanPath}`;
}
