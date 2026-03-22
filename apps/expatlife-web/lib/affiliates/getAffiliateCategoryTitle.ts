import { loadCategories } from "./loadAffiliates";

/**
 * Returns the display title for a category slug, or the slug if not found.
 */
export async function getAffiliateCategoryTitle(categorySlug: string): Promise<string> {
  const categories = await loadCategories();
  const cat = categories[categorySlug];
  return cat?.title ?? categorySlug;
}
