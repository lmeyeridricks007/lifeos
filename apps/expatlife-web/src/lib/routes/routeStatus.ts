import {
  COMING_SOON_ROUTES,
  LIVE_PATHS,
  PLACEHOLDER_TOOL_PATHS,
  normalizeSitePath,
  isOriginCountryGuidePath,
  isMovingToolFromCountryPath,
} from "@/src/data/site/route-registry";
import {
  findMovingGuideBySlug,
  isRegistryScheduledPathPublic,
} from "@/src/lib/publishing/registryPublishing";
import { isPubliclyVisible } from "@/src/lib/publishing/isPubliclyVisible";
import {
  isNetherlandsCitiesHubPath,
  isNetherlandsCitiesHubPubliclyVisible,
} from "@/src/lib/cities-overview/citiesHubPublishing";
import { findNetherlandsCityHubByNormalizedPath } from "@/src/lib/city-hub/netherlandsCityHubPages";

export type PublishRouteStatus = "live" | "coming-soon" | "hidden";

export function getRouteStatus(href: string, now: Date = new Date()): PublishRouteStatus {
  const n = normalizeSitePath(href);
  if (COMING_SOON_ROUTES[n] || PLACEHOLDER_TOOL_PATHS.has(n)) return "coming-soon";

  const baseLive =
    LIVE_PATHS.has(n) || isOriginCountryGuidePath(href) || isMovingToolFromCountryPath(href);

  if (!baseLive) {
    const m = /^\/netherlands\/moving\/guides\/([a-z0-9-]+)\/$/.exec(n);
    if (m) {
      const reg = findMovingGuideBySlug(m[1]);
      if (reg) {
        return isPubliclyVisible(reg.publish, reg.publishDate, now) ? "live" : "hidden";
      }
    }
    return "hidden";
  }

  if (!isRegistryScheduledPathPublic(n, now)) return "hidden";

  if (isNetherlandsCitiesHubPath(n) && !isNetherlandsCitiesHubPubliclyVisible(now)) {
    return "hidden";
  }

  const cityHub = findNetherlandsCityHubByNormalizedPath(n);
  if (cityHub && !isPubliclyVisible(cityHub.publish, cityHub.publishDate, now)) {
    return "hidden";
  }

  return "live";
}

export function isRouteLive(href: string, now?: Date): boolean {
  return getRouteStatus(href, now) === "live";
}

export function isRouteComingSoon(href: string): boolean {
  return getRouteStatus(href) === "coming-soon";
}

export type InternalLink = { label: string; href: string };

/** Drop links to routes that are not live (hidden or coming-soon). Use for body copy and related sections. */
export function filterLiveInternalLinks<T extends InternalLink>(links: T[]): T[] {
  return links.filter((l) => isRouteLive(l.href));
}

/** For optional “roadmap” blocks: keep live as links; render coming-soon rows without href (handled in UI). */
export type RenderableInternalLink =
  | { kind: "live"; label: string; href: string }
  | { kind: "soon"; label: string };

export function toRenderableInternalLink(link: InternalLink): RenderableInternalLink | null {
  const st = getRouteStatus(link.href);
  if (st === "live") return { kind: "live", label: link.label, href: link.href };
  if (st === "coming-soon") return { kind: "soon", label: link.label };
  return null;
}

export function mapToRenderableInternalLinks(links: InternalLink[]): RenderableInternalLink[] {
  return links.map(toRenderableInternalLink).filter(Boolean) as RenderableInternalLink[];
}

function isAbsoluteExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href.trim());
}

/**
 * Related guide cards: live internal routes stay links; planned/hidden internal routes show as
 * non-clickable “Coming soon” rows (labels preserved). External URLs stay normal links.
 */
export function mapRelatedGuideLinks(links: InternalLink[]): RenderableInternalLink[] {
  return links.map((link) => {
    if (isAbsoluteExternalHref(link.href)) {
      return { kind: "live" as const, label: link.label, href: link.href };
    }
    const st = getRouteStatus(link.href);
    if (st === "live") return { kind: "live" as const, label: link.label, href: link.href };
    return { kind: "soon" as const, label: link.label };
  });
}

/** Audit helper: hrefs that are not safe to ship as normal links. */
export function listNonLiveHrefs(hrefs: string[], onlyHidden = false): string[] {
  return hrefs.filter((h) => {
    const st = getRouteStatus(h);
    if (onlyHidden) return st === "hidden";
    return st !== "live";
  });
}
