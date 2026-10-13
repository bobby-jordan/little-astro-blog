export const SITE_TITLE = 'Little Astro Blog';
export const SITE_DESCRIPTION = 'Notes, writeups and things I learned along the way.';
export const AUTHOR = 'Bobby Jordan';
export const GITHUB_URL = 'https://github.com/bobby-jordan';

/** Prefix a path with the site's base (/little-astro-blog). */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}
