/**
 * IA-P1-ORPHAN-COUNTRY-TOOLS — internal link model for country × moving-tool surfaces.
 *
 * Hierarchy (user-useful paths only):
 *   Moving pillar → country guide → country-specific tool landings
 *   Base tool → country versions of that tool
 *   Country tool landing → parent guide + sibling tools for the same origin
 *
 * Only emit links to landings that actually render (SUPPORTED_ORIGIN_COUNTRIES).
 * Nigeria / Philippines have country guides but no tool `/from/` pages — never link those
 * landings; fall back to base tool `?from=` for interactive prefills only.
 */

import { toSiteHref } from "@/lib/seo/site-url";
import {
  SUPPORTED_ORIGIN_COUNTRIES,
  getOriginCountryLabel,
  isSupportedOriginCountry,
  type OriginCountrySlug,
} from "@/src/lib/tools/shared/toolCountryContext";
import type { ToolSlug } from "@/src/lib/tools/shared/loadCountryLandingContent";

export type MovingCountryToolDef = {
  toolSlug: ToolSlug;
  /** Short label for cards / lists */
  label: string;
  /** One-line user benefit */
  description: string;
  /** Interactive base tool path (no trailing slash) */
  basePath: string;
  /** Cluster / intent tag for reporting */
  cluster: "moving" | "first_90_days";
  searchIntent: string;
};

export const MOVING_COUNTRY_TOOLS: readonly MovingCountryToolDef[] = [
  {
    toolSlug: "moving-checklist",
    label: "Moving checklist",
    description: "Pre-move tasks tailored to your origin country.",
    basePath: "/netherlands/moving/tools/moving-checklist",
    cluster: "moving",
    searchIntent: "moving checklist from country",
  },
  {
    toolSlug: "document-readiness",
    label: "Document readiness",
    description: "Which documents to prepare for your route from this country.",
    basePath: "/netherlands/document-readiness-checker",
    cluster: "moving",
    searchIntent: "documents for move from country",
  },
  {
    toolSlug: "arrival-planner",
    label: "Arrival planner",
    description: "First-week and first-month plan after you land.",
    basePath: "/netherlands/moving/tools/arrival-planner",
    cluster: "moving",
    searchIntent: "arrival plan from country",
  },
  {
    toolSlug: "first-90-days",
    label: "First 90 days",
    description: "Settlement roadmap for your first three months.",
    basePath: "/netherlands/moving/tools/first-90-days",
    cluster: "first_90_days",
    searchIntent: "first 90 days from country",
  },
] as const;

const TOOL_BY_SLUG = Object.fromEntries(MOVING_COUNTRY_TOOLS.map((t) => [t.toolSlug, t])) as Record<
  ToolSlug,
  MovingCountryToolDef
>;

export function getMovingCountryTool(toolSlug: ToolSlug): MovingCountryToolDef {
  return TOOL_BY_SLUG[toolSlug];
}

/** Country guide path for an origin slug (always the guide URL shape). */
export function countryGuidePath(countrySlug: string): string {
  return toSiteHref(`/netherlands/moving/moving-to-netherlands-from/${countrySlug}`);
}

/**
 * Indexable country-tool landing path, or null when no live landing exists
 * (e.g. nigeria / philippines — guides exist; tool landings 404).
 */
export function countryToolLandingPath(toolSlug: ToolSlug, countrySlug: string): string | null {
  if (!isSupportedOriginCountry(countrySlug)) return null;
  return toSiteHref(`/netherlands/moving/tools/${toolSlug}/from/${countrySlug}`);
}

/** Whether this tool×country pair is safe to link as an indexable landing. */
export function isLiveCountryToolLanding(toolSlug: ToolSlug, countrySlug: string): boolean {
  return countryToolLandingPath(toolSlug, countrySlug) != null;
}

/**
 * Preferred href for “open this tool for country X”:
 * - Live landing when available (SEO + crawl path)
 * - Otherwise base tool with `?from=` (interactive only; not a separate indexable URL)
 */
export function countryToolHref(toolSlug: ToolSlug, countrySlug: string): string {
  const landing = countryToolLandingPath(toolSlug, countrySlug);
  if (landing) return landing;
  const tool = TOOL_BY_SLUG[toolSlug];
  // Document readiness guides historically used the shorter checker URL for prefills.
  if (toolSlug === "document-readiness") {
    return `${toSiteHref("/netherlands/document-readiness-checker")}?from=${encodeURIComponent(countrySlug)}`;
  }
  return `${tool.basePath}?from=${encodeURIComponent(countrySlug)}`;
}

export type CountryToolLink = {
  href: string;
  title: string;
  description: string;
  toolSlug: ToolSlug;
  countrySlug: string;
  isLanding: boolean;
};

/** All four tools for one country (landing when live; else `?from=` fallback). */
export function countryToolLinksForGuide(countrySlug: string): CountryToolLink[] {
  const label = getOriginCountryLabel(countrySlug);
  return MOVING_COUNTRY_TOOLS.map((tool) => {
    const landing = countryToolLandingPath(tool.toolSlug, countrySlug);
    return {
      href: countryToolHref(tool.toolSlug, countrySlug),
      title: `${tool.label} from ${label}`,
      description: tool.description,
      toolSlug: tool.toolSlug,
      countrySlug,
      isLanding: landing != null,
    };
  });
}

/** Sibling landings for the same country (excludes current tool; live landings only). */
export function siblingCountryToolLandings(
  countrySlug: string,
  currentTool: ToolSlug
): CountryToolLink[] {
  if (!isSupportedOriginCountry(countrySlug)) return [];
  const label = getOriginCountryLabel(countrySlug);
  return MOVING_COUNTRY_TOOLS.filter((t) => t.toolSlug !== currentTool).flatMap((tool) => {
    const href = countryToolLandingPath(tool.toolSlug, countrySlug);
    if (!href) return [];
    return [
      {
        href,
        title: `${tool.label} from ${label}`,
        description: tool.description,
        toolSlug: tool.toolSlug,
        countrySlug,
        isLanding: true as const,
      } satisfies CountryToolLink,
    ];
  });
}

export type OriginCountryVersionLink = {
  href: string;
  slug: OriginCountrySlug;
  label: string;
};

/** Browse list: every live country version of one base tool. */
export function countryVersionsForTool(toolSlug: ToolSlug): OriginCountryVersionLink[] {
  return SUPPORTED_ORIGIN_COUNTRIES.map((slug) => ({
    href: countryToolLandingPath(toolSlug, slug)!,
    slug,
    label: getOriginCountryLabel(slug),
  })).sort((a, b) => a.label.localeCompare(b.label));
}

/** Reporting / tests: every indexable country-tool landing path. */
export function allLiveCountryToolLandingPaths(): string[] {
  const out: string[] = [];
  for (const tool of MOVING_COUNTRY_TOOLS) {
    for (const slug of SUPPORTED_ORIGIN_COUNTRIES) {
      const p = countryToolLandingPath(tool.toolSlug, slug);
      if (p) out.push(p);
    }
  }
  return out.sort((a, b) => a.localeCompare(b));
}
