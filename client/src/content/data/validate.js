/**
 * Build-time guard for content records.
 * A duplicate or missing `slug` would silently collide as a URL, so we fail the
 * build (and the dev server) loudly instead of shipping a broken detail page.
 */
export function assertUniqueSlugs(items, label) {
  const seen = new Set();
  for (const item of items) {
    if (!item.slug) {
      throw new Error(`[${label}] every record needs a "slug" (offending title: ${item.title || '?'})`);
    }
    if (seen.has(item.slug)) {
      throw new Error(`[${label}] duplicate slug "${item.slug}" — slugs must be unique because they become the page URL`);
    }
    seen.add(item.slug);
  }
  return items;
}
