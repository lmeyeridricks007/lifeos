import registryJson from "@/src/content/tools/registry.json";
import categoriesJson from "@/src/content/tools/categories.json";
import menuFeaturesJson from "@/src/content/tools/menu-features.json";

export type ToolStatus = "live" | "placeholder";
export type ToolTemplateType = "planner" | "calculator" | "checker" | "comparison" | "scanner" | "quiz" | "advanced";
export type ToolPrimaryConversion = "signup" | "affiliate" | "both";

export type ToolRecord = {
  id: string;
  title: string;
  slug: string;
  route: string;
  status: ToolStatus;
  templateType: ToolTemplateType;
  categoryId: string;
  menuGroup: string;
  aliases?: string[];
  seo: {
    title: string;
    description: string;
    keywords?: string[];
  };
  summary: string;
  primaryConversion: ToolPrimaryConversion;
  relatedGuides: string[];
  relatedTools: string[];
  affiliatePlacementIds?: string[];
  affiliateCategories?: string[];
  signupVariant?: string;
  pillarCategoryRoute: string;
  exampleInputs?: string[];
  exampleOutputs?: string[];
  mostUsefulFor?: string;
  /** Explicit `false` hides the tool. Omitted/`true` = allowed if `publishDate` has passed. */
  publish?: boolean;
  /** `YYYY-MM-DD` (UTC start of day) or full ISO datetime. Omitted = no date gate. */
  publishDate?: string;
};

export type ToolCategory = {
  id: string;
  label: string;
  route: string;
  description: string;
  menuGroup: string;
  relatedGuides?: string[];
  /** Live tools from other categories to list on this hub (deduped by route). */
  additionalToolIds?: string[];
};

export type TopLevelToolsMenuFeature = {
  categoryId: string;
  featuredToolIds: string[];
};

export type DomainMenuFeature = {
  categoryId: string;
  featuredToolIds: string[];
};

export type ToolMenuFeatures = {
  topLevelToolsMenu: TopLevelToolsMenuFeature[];
  domainMenus: Record<string, DomainMenuFeature>;
};

const REGISTRY = registryJson.tools as ToolRecord[];
const CATEGORIES = categoriesJson.categories as ToolCategory[];
const MENU_FEATURES = menuFeaturesJson as ToolMenuFeatures;

export function loadToolRegistry(): ToolRecord[] {
  return REGISTRY;
}

export function loadToolCategories(): ToolCategory[] {
  return CATEGORIES;
}

export function loadToolMenuFeatures(): ToolMenuFeatures {
  return MENU_FEATURES;
}

export function getToolCategoryById(categoryId: string): ToolCategory | undefined {
  return CATEGORIES.find((category) => category.id === categoryId);
}
