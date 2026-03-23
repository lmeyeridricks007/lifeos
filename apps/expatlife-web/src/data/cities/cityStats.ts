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
  groningen: {
    industries: ["Education", "Research", "Life sciences", "Energy", "Public sector", "Regional services"],
    majorEmployers: ["University of Groningen", "UMCG", "Regional employers & SMEs"],
    companies: null,
    jobs: null,
    sourceLabel: "Business.gov.nl / CBS",
    sourceHref: "https://business.gov.nl/facts-and-figures/groningen/groningen/",
  },
  delft: {
    industries: ["Engineering", "Technology", "R&D", "Education", "Aerospace", "Cleantech", "SMEs"],
    majorEmployers: ["TU Delft", "Research institutes", "Regional tech employers"],
    companies: null,
    jobs: null,
    sourceLabel: "Municipality / regional economy context",
    sourceHref: "https://www.delft.nl/en/municipal-services",
  },
  leiden: {
    industries: [
      "Life sciences & health",
      "Higher education",
      "Research",
      "Biotech / pharma",
      "Med-tech",
      "Knowledge services",
    ],
    majorEmployers: [
      "Leiden University",
      "Leiden University Medical Center (LUMC)",
      "Leiden Bio Science Park cluster",
    ],
    companies: null,
    jobs: 130_000,
    sourceLabel: "Regional jobs context (Leiden International Centre)",
    sourceHref: "https://www.leideninternationalcentre.nl/work-study/work-in-leiden",
  },
  amstelveen: {
    industries: [
      "Amsterdam Area employment (commuters)",
      "Schiphol & aviation-related corridor",
      "International education",
      "Professional & business services",
      "Healthcare & local services",
    ],
    majorEmployers: [
      "Amsterdam & Randstad employers (commuters)",
      "Schiphol-related and regional HQs",
      "International schools",
      "Local SMEs & services",
    ],
    companies: null,
    jobs: null,
    sourceLabel: "Amsterdam Area / regional economy context (I amsterdam / Business.gov.nl)",
    sourceHref: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam",
  },
  maastricht: {
    industries: [
      "Higher education",
      "Healthcare & services",
      "Regional economy & SMEs",
      "Hospitality & culture",
      "Cross-border corridor",
    ],
    majorEmployers: ["Maastricht University", "Regional employers & SMEs"],
    companies: null,
    jobs: null,
    sourceLabel: "Maastricht Region newcomer ecosystem (Expat Centre Maastricht Region)",
    sourceHref: "https://www.expatcentremaastrichtregion.nl/",
  },
  breda: {
    industries: [
      "Creative industries & media",
      "Logistics & distribution",
      "Higher education",
      "Healthcare & services",
      "Hospitality & retail",
      "SMEs & regional business",
    ],
    majorEmployers: ["Breda University of Applied Sciences (BUas)", "Avans (Breda presence)", "Regional employers & SMEs"],
    companies: null,
    jobs: null,
    sourceLabel: "Brabant / Breda newcomer context (Breda Internationals)",
    sourceHref: "https://bredainternationals.com/",
  },
  tilburg: {
    industries: [
      "Higher education & research",
      "Logistics & services",
      "Public sector & institutions",
      "Creative industries & events",
      "Retail & hospitality",
      "SMEs & regional employers",
    ],
    majorEmployers: ["Tilburg University", "Regional employers & SMEs"],
    companies: null,
    jobs: null,
    sourceLabel: "Tilburg newcomer & community context (International Center Tilburg)",
    sourceHref: "https://www.ictilburg.com/",
  },
  arnhem: {
    industries: [
      "Healthcare & social services",
      "Public sector & institutions",
      "Retail & hospitality",
      "Logistics & regional services",
      "Creative & events",
      "SMEs & regional employers",
    ],
    majorEmployers: ["Regional institutions & employers", "Retail & services cluster", "SMEs"],
    companies: null,
    jobs: null,
    sourceLabel: "Municipality of Arnhem – first registration (newcomer context)",
    sourceHref: "https://www.arnhem.nl/product/eerste-inschrijving-in-nederland/",
  },
  nijmegen: {
    industries: [
      "Higher education & research",
      "Healthcare & life sciences",
      "Public sector & institutions",
      "Regional innovation (Lifeport / Arnhem–Nijmegen–Wageningen)",
      "Retail & hospitality",
      "SMEs & regional employers",
    ],
    majorEmployers: ["Radboud University", "Regional healthcare & research institutions", "Regional employers & SMEs"],
    companies: null,
    jobs: null,
    sourceLabel: "Lifeport Welcome Center & regional knowledge ecosystem (context)",
    sourceHref: "https://lifeport.nl/lifeport-welcome-center-for-expats/",
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
    city: "Haarlem",
    cityHref: "/netherlands/haarlem/",
    bestFor: "Amsterdam-area lifestyle & charm",
    typicalJobs: "Often Amsterdam / Randstad employers",
    lifestyle: "Historic, calmer, premium-local",
    housingCost: "Medium–high",
    commute: "Strong rail to Amsterdam; bike-friendly",
  },
  {
    city: "Amstelveen",
    cityHref: "/netherlands/amstelveen/",
    bestFor: "Families, international schools, Amsterdam-area workers",
    typicalJobs: "Often Amsterdam / Schiphol / Randstad",
    lifestyle: "Green, suburban, international-family oriented",
    housingCost: "Medium–high (Amsterdam Area demand)",
    commute: "Bike + OV to Amsterdam; regional road links",
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
    city: "Delft",
    cityHref: "/netherlands/delft/",
    bestFor: "Engineering, research, students, TH region",
    typicalJobs: "Tech / university / R&D",
    lifestyle: "Historic, compact, academic",
    housingCost: "Medium–high (student demand)",
    commute: "Bike + rail to The Hague / Rotterdam",
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
  {
    city: "Groningen",
    cityHref: "/netherlands/groningen/",
    bestFor: "Students, research, knowledge workers, northern NL",
    typicalJobs: "Education / research / regional employers",
    lifestyle: "Compact, youthful, cycling-first",
    housingCost: "Medium (varies; plan ahead)",
    commute: "Bike-first; trains for intercity",
  },
  {
    city: "Leiden",
    cityHref: "/netherlands/leiden/",
    bestFor: "Research, life sciences, students, knowledge workers",
    typicalJobs: "University / LUMC / biotech cluster",
    lifestyle: "Historic, intellectual, compact",
    housingCost: "Medium–high (student + Randstad context)",
    commute: "Bike + NS; The Hague & Amsterdam links",
  },
  {
    city: "Maastricht",
    cityHref: "/netherlands/maastricht/",
    bestFor: "Southern NL, cross-border life, culture, academics, regional professionals",
    typicalJobs: "University / regional employers / SMEs / hospitality",
    lifestyle: "Historic, slower-paced, strong food & café culture, European-border feel",
    housingCost: "Varies; plan and compare listings",
    commute: "Bike-friendly core; trains for intercity; longer trips to western Randstad",
  },
  {
    city: "Breda",
    cityHref: "/netherlands/breda/",
    bestFor: "Brabant livability, families, students, professionals wanting approachable city scale",
    typicalJobs: "Education / logistics & services / SMEs / creative & hospitality",
    lifestyle: "Historic, welcoming, sociable, relaxed vs largest metros",
    housingCost: "Varies; plan and compare listings",
    commute: "Bike-friendly; trains to Randstad & regional Brabant cities",
  },
  {
    city: "Tilburg",
    cityHref: "/netherlands/tilburg/",
    bestFor: "Students, young professionals, families; grounded Brabant city life",
    typicalJobs: "University / services / logistics / SMEs / creative & events",
    lifestyle: "Practical, relaxed, student energy, community-oriented",
    housingCost: "Varies; plan and compare listings",
    commute: "Bike-first; trains to Breda, Eindhoven, Randstad",
  },
  {
    city: "Arnhem",
    cityHref: "/netherlands/arnhem/",
    bestFor: "Greener city life, families, students, eastern Netherlands",
    typicalJobs: "Regional services / institutions / SMEs",
    lifestyle: "Calmer, spacious, nature-adjacent vs largest metros",
    housingCost: "Varies; plan and compare listings",
    commute: "Bike + NS; less Randstad-central than Utrecht",
  },
  {
    city: "Nijmegen",
    cityHref: "/netherlands/nijmegen/",
    bestFor: "Students, researchers, knowledge workers, eastern NL / Lifeport region",
    typicalJobs: "University / health & research / regional innovation / SMEs",
    lifestyle: "Historic, green, student-led, research-oriented",
    housingCost: "Varies; plan around academic year",
    commute: "Bike + NS; links to Arnhem & region; less Randstad-central than Utrecht",
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
