/**
 * Central route comparison data for the Netherlands visa comparison page.
 * Derives from visa-checker routes and adds comparison-specific fields (bestNextStep, routeType).
 * Single source of truth for the comparison table and featured route cards.
 */

import type { VisaRouteSlug } from "@/src/lib/visa-checker/types";
import { VISA_CHECKER_ROUTES, getRouteBySlug } from "@/src/lib/visa-checker/routes";
import type { RouteTypeFilter } from "./comparison-dimensions";

export type RouteComparisonEntry = {
  routeId: VisaRouteSlug;
  title: string;
  shortDescription: string;
  bestFor: string;
  routeType: RouteTypeFilter;
  guideHref: string;
  typicalComplexity: "Low" | "Medium" | "High";
  officialFeeLabel: string;
  officialFeeSourceHref?: string;
  timelineLabel: string;
  workRightsLabel: string;
  sponsorNeededLabel: string;
  bestNextStep: string;
  /** Tags for featured cards, e.g. Work, Entrepreneur, Sponsor-needed */
  idealForTags: string[];
  officialSources: Array<{ label: string; href: string }>;
};

const BASE = "/netherlands";

/** Slugs included in the main comparison table (excludes no-visa-needed). */
export const COMPARISON_TABLE_SLUGS: VisaRouteSlug[] = [
  "highly-skilled-migrant",
  "eu-blue-card",
  "dutch-american-friendship-treaty",
  "self-employed-visa",
  "student-visa",
  "partner-family-visa",
];

function buildEntry(slug: VisaRouteSlug, overrides: Partial<RouteComparisonEntry>): RouteComparisonEntry {
  const r = getRouteBySlug(slug);
  if (!r) throw new Error(`Missing route for slug: ${slug}`);
  return {
    routeId: slug,
    title: r.title,
    shortDescription: r.shortDescription,
    bestFor: r.bestFor,
    routeType: overrides.routeType ?? "work",
    guideHref: r.guideHref,
    typicalComplexity: r.complexityLabel,
    officialFeeLabel: r.currentFeeReference,
    timelineLabel: r.timelineRange,
    workRightsLabel: r.workRightsOrType,
    sponsorNeededLabel: slug === "partner-family-visa" ? "Yes (sponsor in NL)" : slug === "student-visa" ? "Yes (institution)" : ["highly-skilled-migrant", "eu-blue-card"].includes(slug) ? "Yes (employer)" : "No",
    bestNextStep: overrides.bestNextStep ?? `Read the full guide: ${r.title}`,
    idealForTags: overrides.idealForTags ?? r.primaryUseCases.slice(0, 3),
    officialSources: r.officialSourceLinks,
    ...overrides,
  };
}

/** Full comparison entries for the six main routes. */
export const ROUTE_COMPARISON_ENTRIES: RouteComparisonEntry[] = [
  buildEntry("highly-skilled-migrant", {
    routeType: "work",
    bestNextStep: "Confirm with employer that they are a recognized sponsor; check salary threshold.",
    idealForTags: ["Work", "Sponsor needed", "Tech / Finance"],
  }),
  buildEntry("eu-blue-card", {
    routeType: "work",
    bestNextStep: "Compare with Highly Skilled Migrant; confirm salary and employer route.",
    idealForTags: ["Work", "Sponsor needed", "EU mobility"],
  }),
  buildEntry("dutch-american-friendship-treaty", {
    routeType: "entrepreneur",
    bestNextStep: "Compare DAFT vs self-employed; prepare business plan and €4,500 investment.",
    idealForTags: ["Entrepreneur", "US only", "Freelance / Startup"],
  }),
  buildEntry("self-employed-visa", {
    routeType: "entrepreneur",
    bestNextStep: "Compare with DAFT if US citizen; prepare business plan and viability evidence.",
    idealForTags: ["Entrepreneur", "Freelance", "No sponsor"],
  }),
  buildEntry("student-visa", {
    routeType: "study",
    bestNextStep: "Check admission and proof-of-funds requirements with your institution.",
    idealForTags: ["Study", "University / HBO", "Limited work rights"],
  }),
  buildEntry("partner-family-visa", {
    routeType: "family",
    bestNextStep: "Gather partner/family documents; confirm sponsor income and housing.",
    idealForTags: ["Family", "Partner", "Full work rights"],
  }),
];

/** All routes for featured cards (optional: include no-visa-needed for awareness). */
export function getRoutesForComparisonTable(): RouteComparisonEntry[] {
  return ROUTE_COMPARISON_ENTRIES;
}

export function getRouteComparisonBySlug(slug: VisaRouteSlug): RouteComparisonEntry | undefined {
  return ROUTE_COMPARISON_ENTRIES.find((e) => e.routeId === slug);
}

export function getRoutesByType(routeType: RouteTypeFilter): RouteComparisonEntry[] {
  if (routeType === "all") return ROUTE_COMPARISON_ENTRIES;
  return ROUTE_COMPARISON_ENTRIES.filter((e) => e.routeType === routeType);
}
