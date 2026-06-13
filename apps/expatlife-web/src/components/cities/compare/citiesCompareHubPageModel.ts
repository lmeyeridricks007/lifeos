export const CITIES_COMPARE_HUB_PATH = "/netherlands/cities/compare/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;
export const AMSTERDAM_VS_ROTTERDAM_PATH = "/netherlands/cities/amsterdam-vs-rotterdam/" as const;
export const CITY_COMPARISON_TOOL_PATH = "/netherlands/tools/city-comparison/" as const;

export type CitiesCompareLink = {
  label: string;
  href: string;
  description: string;
  status?: "live" | "comingSoon";
};

export const citiesCompareHubPage = {
  slug: "compare",
  path: CITIES_COMPARE_HUB_PATH,
  publish: true,
  publishDate: "2026-09-16",
  seo: {
    title: "Compare Dutch Cities for Expats | City Comparison Hub",
    description:
      "Head-to-head city comparisons for expats — Amsterdam vs Rotterdam and more guides to help you choose where to live in the Netherlands.",
    keywords: [
      "compare dutch cities",
      "city comparison netherlands expat",
      "amsterdam vs rotterdam",
      "best city netherlands",
      "expat city compare",
    ],
  },
  hero: {
    pageTitle: "Compare Dutch Cities",
    subtitle:
      "Head-to-head guides and tools to compare housing, jobs, lifestyle and costs across the Netherlands' major expat cities.",
    primaryCta: { label: "Amsterdam vs Rotterdam", href: AMSTERDAM_VS_ROTTERDAM_PATH },
    secondaryCta: { label: "Cities hub", href: CITIES_HUB_PATH },
  },
  liveComparisons: [
    {
      label: "Amsterdam vs Rotterdam",
      href: AMSTERDAM_VS_ROTTERDAM_PATH,
      description: "Housing, jobs, salaries, lifestyle, transport and expat life — the flagship Randstad comparison.",
      status: "live" as const,
    },
  ],
  comingSoonComparisons: [
    { label: "Amsterdam vs Utrecht", href: CITIES_COMPARE_HUB_PATH, description: "Capital region vs central Randstad hub.", status: "comingSoon" as const },
    { label: "Amsterdam vs The Hague", href: CITIES_COMPARE_HUB_PATH, description: "Startup capital vs international institutions.", status: "comingSoon" as const },
    { label: "Rotterdam vs The Hague", href: CITIES_COMPARE_HUB_PATH, description: "Port city vs diplomatic centre.", status: "comingSoon" as const },
    { label: "Utrecht vs Eindhoven", href: CITIES_COMPARE_HUB_PATH, description: "Central hub vs Brainport tech.", status: "comingSoon" as const },
    { label: "Amsterdam vs Eindhoven", href: CITIES_COMPARE_HUB_PATH, description: "Corporate capital vs deep tech.", status: "comingSoon" as const },
  ] satisfies CitiesCompareLink[],
  funnelGuides: [
    { label: "Best cities for expats", href: "/netherlands/cities/best-cities-for-expats/", description: "Scenario shortlists and trade-offs.", status: "live" as const },
    { label: "Cheapest cities for expats", href: "/netherlands/cities/cheapest-cities-for-expats/", description: "Affordability lens across NL cities.", status: "live" as const },
    { label: "Best cities for families", href: "/netherlands/cities/best-cities-for-families/", description: "Schools, childcare and family housing.", status: "live" as const },
    { label: "Best cities for international professionals", href: "/netherlands/cities/best-cities-for-international-professionals/", description: "Jobs, net pay and commute honesty.", status: "live" as const },
  ] satisfies CitiesCompareLink[],
  tools: [
    { label: "City comparison tool", href: CITY_COMPARISON_TOOL_PATH, description: "Rank 2–4 cities from your budget and priorities.", status: "live" as const },
    { label: "Rent affordability calculator", href: "/netherlands/housing/tools/rent-affordability-calculator/", description: "Max rent from income before you search.", status: "live" as const },
  ] satisfies CitiesCompareLink[],
} as const;

export type CitiesCompareHubPage = typeof citiesCompareHubPage;
