/**
 * Generates a URL with the correct base path for the current environment.
 * Handles both local development (/) and GitHub Pages (/tunadao-public-site/).
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL;
  // Remove leading slash from path if present, base already ends with /
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
