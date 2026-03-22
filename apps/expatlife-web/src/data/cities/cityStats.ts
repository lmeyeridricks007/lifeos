/**
 * Shared city statistics and comparison data for Dutch expat city hub pages.
 * Data source: Business.gov.nl / CBS where available; otherwise indicative.
 * Reusable for Amsterdam, Rotterdam, Utrecht, The Hague, Eindhoven and future cities.
 */

import type { CityComparisonRow } from "@/src/lib/city-hub/types";

export type CityStatsRecord = {
  industries: string[];
  majorEmployers: string[];
  companies: number | null;
  jobs: number | null;
  sourceLabel: string;
  sourceHref: string;
};

export const cityStats: Record<string, CityStatsRecord> = {
  amsterdam: {
    industries: ["Technology", "Finance", "Media", "Startups", "Corporate HQ", "Creative"],
    majorEmployers: ["Booking.com", "Adyen", "Uber", "TomTom", "ING", "Philips"],
    companies: null,
    jobs: null,
    sourceLabel: "Business.gov.nl / CBS",
    sourceHref: "https://business.gov.nl/facts-and-figures/amsterdam/amsterdam/",
  },
  rotterdam: {
    industries: ["Logistics", "Maritime", "Engineering", "Trade", "Port economy"],
    majorEmployers: ["Port of Rotterdam Authority", "Shell", "Unilever", "Boskalis", "Van Oord"],
    companies: null,
    jobs: null,
    sourceLabel: "Business.gov.nl / CBS",
    sourceHref: "https://business.gov.nl/facts-and-figures/rotterdam/rotterdam/",
  },
  utrecht: {
    industries: ["Life sciences", "Education", "Digital", "Professional services", "Healthcare"],
    majorEmployers: ["Rabobank", "Bol.com", "Universiteit Utrecht", "UMC Utrecht", "ProRail"],
    companies: null,
    jobs: null,
    sourceLabel: "Business.gov.nl / CBS",
    sourceHref: "https://business.gov.nl/facts-and-figures/utrecht/utrecht/",
  },
  "the-hague": {
    industries: ["Government", "NGOs", "International organisations", "Legal", "Energy", "Security"],
    majorEmployers: ["International Court of Justice", "Shell (HQ)", "Dutch government", "Europol", "NGOs"],
    companies: null,
    jobs: null,
    sourceLabel: "Business.gov.nl / CBS",
    sourceHref: "https://business.gov.nl/facts-and-figures/den-haag/the-hague/",
  },
  eindhoven: {
    industries: ["Semiconductors", "High-tech manufacturing", "Engineering", "Design", "R&D"],
    majorEmployers: ["ASML", "Philips", "NXP", "VDL", "High-tech campus companies"],
    companies: null,
    jobs: null,
    sourceLabel: "Business.gov.nl / CBS",
    sourceHref: "https://business.gov.nl/facts-and-figures/eindhoven/eindhoven/",
  },
};

/** Comparison table rows for "Comparing Dutch Cities for Expats". Same data used on every city page. */
export const cityComparisonTableRows: CityComparisonRow[] = [
  {
    city: "Amsterdam",
    cityHref: "/netherlands/amsterdam/",
    bestFor: "Global careers",
    typicalJobs: "Tech / finance / startups",
    lifestyle: "Fast-paced international",
    housingCost: "High",
    commute: "Good transit",
  },
  {
    city: "Rotterdam",
    cityHref: "/netherlands/rotterdam/",
    bestFor: "Engineering",
    typicalJobs: "Logistics / engineering",
    lifestyle: "Modern urban",
    housingCost: "Medium",
    commute: "Good transit",
  },
  {
    city: "Utrecht",
    cityHref: "/netherlands/utrecht/",
    bestFor: "Balanced life",
    typicalJobs: "Consulting / healthcare / education",
    lifestyle: "Historic and relaxed",
    housingCost: "Medium–high",
    commute: "Excellent",
  },
  {
    city: "The Hague",
    cityHref: "/netherlands/the-hague/",
    bestFor: "International organisations",
    typicalJobs: "Government / diplomacy",
    lifestyle: "Quiet coastal city",
    housingCost: "Medium–high",
    commute: "Good",
  },
  {
    city: "Eindhoven",
    cityHref: "/netherlands/eindhoven/",
    bestFor: "Tech careers",
    typicalJobs: "Engineering / semiconductors",
    lifestyle: "Innovation-driven",
    housingCost: "Medium",
    commute: "Regional commuting",
  },
];

export function getCityStats(slug: string): CityStatsRecord | undefined {
  return cityStats[slug];
}

/** Shared comparison section config for all city pages. */
export const cityComparisonSection = {
  heading: "Comparing Dutch Cities for Expats",
  ctaLabel: "Explore detailed city guides",
  ctaHref: "/netherlands/cities/",
} as const;
