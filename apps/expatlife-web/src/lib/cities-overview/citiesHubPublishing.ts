import { netherlandsCitiesOverview } from "@/src/data/cities-overview/netherlands-cities";
import { normalizeSitePath } from "@/src/data/site/route-registry";
import { isPubliclyVisible } from "@/src/lib/publishing/isPubliclyVisible";

/** Normalized path for `/netherlands/cities/` — single hub for Dutch city discovery. */
export const NETHERLANDS_CITIES_HUB_NORMALIZED = normalizeSitePath(netherlandsCitiesOverview.path);

export function isNetherlandsCitiesHubPath(normalizedPath: string): boolean {
  return normalizedPath === NETHERLANDS_CITIES_HUB_NORMALIZED;
}

/** Same rules as moving guides and tools: `isPubliclyVisible` (incl. dev / preview date bypass). */
export function isNetherlandsCitiesHubPubliclyVisible(now: Date): boolean {
  return isPubliclyVisible(
    netherlandsCitiesOverview.publish,
    netherlandsCitiesOverview.publishDate,
    now
  );
}
