import { normalizeDomainMenuKey } from "@/src/lib/nav/navKeyCompat";
import { getToolCategoryById, loadToolMenuFeatures, loadToolRegistry, type ToolRecord } from "@/src/lib/tools/loadToolRegistry";

export function getFeaturedTools(toolIds: string[]): ToolRecord[] {
  const registry = loadToolRegistry();
  const tools = toolIds
    .map((toolId) => registry.find((tool) => tool.id === toolId))
    .filter((tool): tool is ToolRecord => Boolean(tool));
  // Preserve config order; only push placeholders to the end.
  return tools.sort((a, b) => {
    if (a.status !== b.status) return a.status === "live" ? -1 : 1;
    return 0;
  });
}

export function getTopLevelToolsMenuGroups() {
  const features = loadToolMenuFeatures();
  return features.topLevelToolsMenu
    .map((entry) => {
      const category = getToolCategoryById(entry.categoryId);
      if (!category) return null;
      return {
        category,
        tools: getFeaturedTools(entry.featuredToolIds),
      };
    })
    .filter((entry): entry is { category: NonNullable<ReturnType<typeof getToolCategoryById>>; tools: ToolRecord[] } => Boolean(entry));
}

export function getDomainFeaturedTools(menuKey: string): { categoryId: string; tools: ToolRecord[] } | null {
  const resolved = normalizeDomainMenuKey(menuKey);
  const config = loadToolMenuFeatures().domainMenus[resolved];
  if (!config) return null;
  return {
    categoryId: config.categoryId,
    tools: getFeaturedTools(config.featuredToolIds),
  };
}
