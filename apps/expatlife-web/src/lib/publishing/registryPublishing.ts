import movingRegistry from "@/src/content/guides/netherlands/moving/registry.json";
import toolsRegistry from "@/src/content/tools/registry.json";
import { normalizeSitePath } from "@/src/data/site/route-registry";
import { isPubliclyVisible } from "@/src/lib/publishing/isPubliclyVisible";
import type { RegistryGuide } from "@/src/lib/guides/types";
import type { ToolRecord } from "@/src/lib/tools/loadToolRegistry";

const guides = movingRegistry.guides as RegistryGuide[];
const tools = toolsRegistry.tools as ToolRecord[];

export function findMovingGuideByNormalizedPath(normalizedPath: string): RegistryGuide | undefined {
  const n = normalizeSitePath(normalizedPath);
  return guides.find((g) => normalizeSitePath(g.path) === n);
}

export function findMovingGuideBySlug(slug: string): RegistryGuide | undefined {
  const s = slug.toLowerCase();
  return guides.find((g) => g.slug.toLowerCase() === s);
}

export function findLiveToolByNormalizedRoute(normalizedRoute: string): ToolRecord | undefined {
  const n = normalizeSitePath(normalizedRoute);
  return tools.find((t) => t.status === "live" && normalizeSitePath(t.route) === n);
}

/**
 * If this normalized path is a moving guide or live tool row, require publish schedule.
 * Non-registry paths return true (no extra gate here).
 */
export function isRegistryScheduledPathPublic(normalizedPath: string, now: Date): boolean {
  const guide = findMovingGuideByNormalizedPath(normalizedPath);
  if (guide) {
    return isPubliclyVisible(guide.publish, guide.publishDate, now);
  }
  const tool = findLiveToolByNormalizedRoute(normalizedPath);
  if (tool) {
    return isPubliclyVisible(tool.publish, tool.publishDate, now);
  }
  return true;
}
