/**
 * Generates a URL with the correct base path for the current environment.
 * Handles both local development (/) and GitHub Pages (/tunadao-public-site/).
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base}/${path}`.replace(/\/+/g, '/');
}
