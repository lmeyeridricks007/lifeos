import { loadToolRegistry, type ToolRecord } from "@/src/lib/tools/loadToolRegistry";

type GetToolBySlugOptions = {
  categoryId?: string;
  includeAliases?: boolean;
};

export function getToolBySlug(slug: string, options?: GetToolBySlugOptions): ToolRecord | undefined {
  const { categoryId, includeAliases = true } = options ?? {};

  return loadToolRegistry().find((tool) => {
    if (categoryId && tool.categoryId !== categoryId) return false;
    if (tool.slug === slug) return true;
    return includeAliases ? tool.aliases?.includes(slug) === true : false;
  });
}
