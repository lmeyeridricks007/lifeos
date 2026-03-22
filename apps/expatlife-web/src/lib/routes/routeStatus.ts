import {
  COMING_SOON_ROUTES,
  LIVE_PATHS,
  PLACEHOLDER_TOOL_PATHS,
  normalizeSitePath,
  isOriginCountryGuidePath,
  isMovingToolFromCountryPath,
} from "@/src/data/site/route-registry";

export type PublishRouteStatus = "live" | "coming-soon" | "hidden";

export function getRouteStatus(href: string): PublishRouteStatus {
  const n = normalizeSitePath(href);
  if (LIVE_PATHS.has(n) || isOriginCountryGuidePath(href) || isMovingToolFromCountryPath(href)) {
    return "live";
  }
  if (COMING_SOON_ROUTES[n] || PLACEHOLDER_TOOL_PATHS.has(n)) return "coming-soon";
  return "hidden";
}

export function isRouteLive(href: string): boolean {
  return getRouteStatus(href) === "live";
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
