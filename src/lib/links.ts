// Prepend the configured Astro `base` to an absolute-style path so internal links
// keep working under GitHub Pages' subpath deploy. Once we move to a custom domain
// served at root we can drop `base` from astro.config and this helper becomes a no-op.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!path.startsWith('/')) return `${base}/${path}`;
  return `${base}${path}`;
}
