export function originToChecklistRoute(slug: string) {
  return `/netherlands/moving/tools/moving-checklist?from=${encodeURIComponent(slug)}`;
}

export function originToCountryRoute(slug: string) {
  return `/netherlands/moving/moving-to-netherlands-from/${slug}`;
}
