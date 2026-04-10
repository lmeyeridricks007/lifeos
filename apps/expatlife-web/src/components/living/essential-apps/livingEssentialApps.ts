/**
 * Public data API for the Essential Apps page — import these names for editorial workflows.
 * Full bundle (including layout copy) lives in `livingEssentialAppsPageConfig`.
 */
import { livingEssentialAppsPageConfig } from "./livingEssentialApps.config";
import { resolveLivingAppsQuickStart } from "./livingEssentialApps.resolve";

export const livingAppsQuickStart = resolveLivingAppsQuickStart(livingEssentialAppsPageConfig.quickStart);
export const livingAppsCategories = livingEssentialAppsPageConfig.categories;
export const livingAppsCategoryOverview = livingEssentialAppsPageConfig.categoryOverview;
export const livingAppsFaq = livingEssentialAppsPageConfig.faq;
export const livingAppsReferences = livingEssentialAppsPageConfig.references;
export const livingAppsRelatedTools = livingEssentialAppsPageConfig.relatedTools;
export const livingAppsSectionNav = livingEssentialAppsPageConfig.sectionNav;
export const livingAppsSurprises = livingEssentialAppsPageConfig.surprises;

export { livingEssentialAppsPageConfig } from "./livingEssentialApps.config";
export { livingAppsIcon, LIVING_APPS_ICON_MAP } from "./livingEssentialApps.icons";
export { resolveLivingAppCard, resolveLivingAppCards, resolveLivingAppsQuickStart } from "./livingEssentialApps.resolve";
export type * from "./livingEssentialApps.types";
