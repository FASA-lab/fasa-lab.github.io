// Build an internal URL from import.meta.env.BASE_URL (never hardcode the repo name).
export const url = (path = '') =>
  import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\//, '');

// Placeholders ("TODO: ...") and draft items render only in the dev server.
export const isDev = import.meta.env.DEV;
export const isTodo = (s?: string | null) => !s || /^TODO/i.test(s);
export const visibleAreas = <T extends { draft?: boolean }>(areas: T[]) => areas.filter((a) => !a.draft || isDev);
