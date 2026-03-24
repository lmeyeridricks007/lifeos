/**
 * Canonical registry of companies / partners shown on Netherlands service pages.
 * Single source for URLs, logos, copy, and where each row appears (pages + UI components).
 *
 * Regenerate from legacy slices: `node apps/expatlife-web/scripts/assemble-companies-registry.mjs`
 */

import type {
  HousingPlatformRecord,
  RentalAgencyRecord,
  RelocationProviderRecord,
  ServiceCategoryProviderCard,
  StartupFacilitatorRecord,
} from "@/src/lib/service-category/types";

/** High-level grouping used for filtering and analytics. */
export type CompanyRegistryCategory =
  | "banks"
  | "health-insurance"
  | "international-health-insurance"
  | "immigration-lawyers"
  | "visa-consultants"
  | "mobile-connectivity"
  | "relocation-agencies"
  | "relocation-services"
  | "housing-platforms"
  | "rental-agencies"
  | "startup-visa-advisors";

export type CompanyRegistryRowBase = {
  /** Stable id: `${category}/${slug}` (unique per row in this registry). */
  registryId: string;
  category: CompanyRegistryCategory;
  /** Owning Next.js page module (app router). */
  sourcePage: string;
  /** UI surfaces that render this row (for docs / consistency). */
  surfaces: readonly string[];
};

export type ServiceCategoryRegistryRow = CompanyRegistryRowBase &
  ServiceCategoryProviderCard & { rowKind: "service-category-provider" };

export type RelocationRegistryRow = CompanyRegistryRowBase &
  RelocationProviderRecord & { rowKind: "relocation-directory" };

export type HousingPlatformRegistryRow = CompanyRegistryRowBase &
  HousingPlatformRecord & { rowKind: "housing-platform" };

export type RentalAgencyRegistryRow = CompanyRegistryRowBase &
  RentalAgencyRecord & { rowKind: "rental-agency" };

export type StartupFacilitatorRegistryRow = CompanyRegistryRowBase &
  StartupFacilitatorRecord & { rowKind: "startup-facilitator" };

export type CompanyRegistryRow =
  | ServiceCategoryRegistryRow
  | RelocationRegistryRow
  | HousingPlatformRegistryRow
  | RentalAgencyRegistryRow
  | StartupFacilitatorRegistryRow;

const BANKS_BASE = "/netherlands/services/banks";
const LOGOS = "/images/affiliates/logos";
const INSURANCE_BASE = "/netherlands/services/insurance";
const IMMIGRATION_LAWYERS_BASE = "/netherlands/services/immigration-lawyers";
const VISA_CONSULTANTS_BASE = "/netherlands/services/visa-consultants";
const HOUSING_RENTAL_LAST_CHECKED = "2026-03-11";
const MOBILE_CONNECTIVITY_LAST_CHECKED = "2026-03-24";
const STARTUP_DATA_LAST_CHECKED = "2026-03-06";
const RVO_SOURCE = "https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups";

const DEFAULT_SERVICES = ["Startup visa support", "Mentoring & programme", "Network & ecosystem"] as const;

const BANKS_PAGE = "app/netherlands/services/banks/page.tsx";
const BANKS_SURFACES = ["ProviderCardsGrid", "ProviderComparisonSection", "ServiceCategoryTemplate"] as const;

const HEALTH_PAGE = "app/netherlands/services/health-insurance/page.tsx";
const HEALTH_SURFACES = [
  "ProviderCardsGrid",
  "ProviderComparisonSection",
  "ServiceCategoryTemplate",
  "internationalHealthBlock",
] as const;

const IMMIGRATION_PAGE = "app/netherlands/services/immigration-lawyers/page.tsx";
const IMMIGRATION_SURFACES = ["ProviderCardsGrid", "ProviderComparisonSection", "ServiceCategoryTemplate"] as const;

const VISA_PAGE = "app/netherlands/services/visa-consultants/page.tsx";
const VISA_SURFACES = ["ProviderCardsGrid", "ProviderComparisonSection", "ServiceCategoryTemplate"] as const;

const MOBILE_CONNECTIVITY_BASE = "/netherlands/services/mobile-connectivity";
const MOBILE_CONNECTIVITY_PAGE = "app/netherlands/services/mobile-connectivity/page.tsx";
const MOBILE_CONNECTIVITY_SURFACES = ["ProviderCardsGrid", "ProviderComparisonSection", "ServiceCategoryTemplate"] as const;

const RELOCATION_AGENCIES_PAGE = "app/netherlands/services/relocation-agencies/page.tsx";
const RELOCATION_AGENCIES_SURFACES = [
  "RelocationProviderDirectory",
  "FeaturedRelocationCards",
  "ProviderComparisonSection",
  "ServiceCategoryTemplate",
] as const;

const RELOCATION_SERVICES_PAGE = "app/netherlands/services/relocation-services/page.tsx";
const RELOCATION_SERVICES_SURFACES = [
  "RelocationProviderDirectory",
  "FeaturedRelocationCards",
  "ProviderComparisonSection",
  "ServiceCategoryTemplate",
] as const;

const HOUSING_PAGE = "app/netherlands/services/housing-platforms/page.tsx";
const HOUSING_SURFACES = ["HousingPlatformDirectory", "ProviderComparisonSection", "ServiceCategoryTemplate"] as const;

const RENTAL_PAGE = "app/netherlands/services/rental-agencies/page.tsx";
const RENTAL_SURFACES = ["RelocationProviderDirectory", "ProviderComparisonSection", "ServiceCategoryTemplate"] as const;

const STARTUP_PAGE = "app/netherlands/services/startup-visa-advisors/page.tsx";
const STARTUP_SURFACES = ["ServiceCategoryTemplate", "startup facilitator directory"] as const;

/**
 * Assign display priority from array order: 1 = highest (first item), then 2, 3, …
 * (Upper bound is not capped at 10—use as relative order within the category.)
 */
export function attachSequentialPriority<T extends object>(items: readonly T[]): (T & { priority: number })[] {
  return items.map((item, index) => ({ ...item, priority: index + 1 }));
}

function tagServiceCategory(
  category: CompanyRegistryCategory,
  sourcePage: string,
  surfaces: readonly string[],
  cards: ServiceCategoryProviderCard[]
): ServiceCategoryRegistryRow[] {
  return cards.map((c) => ({
    ...c,
    rowKind: "service-category-provider",
    registryId: `${category}/${c.slug}`,
    category,
    sourcePage,
    surfaces,
  }));
}

function tagRelocation(
  category: "relocation-agencies" | "relocation-services",
  sourcePage: string,
  surfaces: readonly string[],
  rows: RelocationProviderRecord[]
): RelocationRegistryRow[] {
  return rows.map((r) => ({
    ...r,
    rowKind: "relocation-directory",
    registryId: `${category}/${r.slug}`,
    category,
    sourcePage,
    surfaces,
  }));
}

function tagHousing(
  rows: HousingPlatformRecord[],
  sourcePage: string,
  surfaces: readonly string[]
): HousingPlatformRegistryRow[] {
  return rows.map((r) => ({
    ...r,
    rowKind: "housing-platform",
    registryId: `housing-platforms/${r.slug}`,
    category: "housing-platforms",
    sourcePage,
    surfaces,
  }));
}

function tagRental(
  rows: RentalAgencyRecord[],
  sourcePage: string,
  surfaces: readonly string[]
): RentalAgencyRegistryRow[] {
  return rows.map((r) => ({
    ...r,
    rowKind: "rental-agency",
    registryId: `rental-agencies/${r.slug}`,
    category: "rental-agencies",
    sourcePage,
    surfaces,
  }));
}

function tagStartup(
  rows: StartupFacilitatorRecord[],
  sourcePage: string,
  surfaces: readonly string[]
): StartupFacilitatorRegistryRow[] {
  return rows.map((r) => ({
    ...r,
    rowKind: "startup-facilitator",
    registryId: `startup-visa-advisors/${r.slug}`,
    category: "startup-visa-advisors",
    sourcePage,
    surfaces,
  }));
}

export const RELOCATION_AGENCIES_LAST_CHECKED = "2026-03-11";
export const RELOCATION_AGENCIES_SOURCE_MODEL = "Trusted expat-centre / public-support ecosystems";

export const RELOCATION_SERVICES_LAST_CHECKED = "2026-03-11";
export const RELOCATION_SERVICES_SOURCE_MODEL = "Trusted expat-centre / public-support ecosystems";

const banksProvidersData = [







  {
    slug: "bunq",
    name: "bunq",
    href: `${BANKS_BASE}/bunq/`,
    shortDescription:
      "Digital bank with expat-friendly signup and multi-currency options. Often used for quick account setup and international use.",
    bestFor: "Expats, digital-first banking, multi-currency",
    priceNote: "Paid plans from ~€2.99/mo; check current pricing",
    typicalCost: "From ~€2.99/mo",
    pros: ["Expat-friendly signup; often quick setup", "Multi-currency and international use", "Full Dutch account with iDEAL; English app"],
    cons: ["Paid plans only; no free basic account", "No branches"],
    whoShouldChoose: "Expats who want a Dutch-licensed digital bank with strong English support and multi-currency.",
    englishSupportNote: "English app and support available",
    isFeatured: true,
    logo: { src: `${LOGOS}/bunq.svg`, alt: "bunq" },
    externalUrl: "https://www.bunq.com/",
    reviewComingSoon: true,
    providerType: "bank",
    features: ["Dutch current account", "iDEAL", "Debit card", "Multi-currency accounts", "App banking", "International transfers", "Sub-accounts"],
  },
  {
    slug: "knab",
    name: "Knab",
    href: `${BANKS_BASE}/knab/`,
    shortDescription:
      "Dutch online bank (no branches). Full Dutch payment account with iDEAL and debit card; often chosen for straightforward pricing and digital experience.",
    bestFor: "Digital-only banking, transparent fees, Dutch account without branches",
    priceNote: "Check current account and card pricing",
    typicalCost: "From ~€3.50/mo",
    pros: ["Full Dutch account; iDEAL and debit card", "Transparent pricing; Dutch-licensed", "Digital-only; no branch need"],
    cons: ["No branches", "English support may be limited; check site"],
    whoShouldChoose: "Expats who want a Dutch online bank with clear fees and no need for branches.",
    englishSupportNote: "Check provider website for English",
    isFeatured: true,
    logo: { src: `${LOGOS}/knab.svg`, alt: "Knab" },
    externalUrl: "https://www.knab.nl/",
    reviewComingSoon: true,
    providerType: "bank",
    features: ["Dutch payment account", "iDEAL", "Debit card", "Online and app banking", "Savings account", "Insurance and investments (optional)"],
  },
  {
    slug: "abn-amro",
    name: "ABN AMRO",
    href: `${BANKS_BASE}/abn-amro/`,
    shortDescription:
      "Major Dutch bank with branches and online banking. Full current accounts, iDEAL, and in-branch support.",
    bestFor: "Traditional banking, in-branch support, salary account",
    priceNote: "Basic account fees apply; check current pricing",
    typicalCost: "Free basic account",
    pros: ["Branches and in-person support", "Free basic account option", "English pages and support; strong for expats"],
    cons: ["Branch opening hours and locations may be limited", "Some products Dutch-only"],
    whoShouldChoose: "Expats who want a big Dutch bank with branch access and free basic account.",
    englishSupportNote: "English pages and support available",
    isFeatured: true,
    logo: { src: `${LOGOS}/abn-amro.svg`, alt: "ABN AMRO" },
    externalUrl: "https://www.abnamro.nl/en/personal/",
    reviewComingSoon: true,
    providerType: "bank",
    features: ["Current account", "iDEAL", "Debit card", "Branch and online banking", "Savings", "Mortgages", "Investments", "Insurance"],
  },
  {
    slug: "ing",
    name: "ING",
    href: `${BANKS_BASE}/ing/`,
    shortDescription:
      "Large Dutch bank with strong digital offering. Widely used for salary, iDEAL, and day-to-day payments. Some flows allow providing BSN within 90 days.",
    bestFor: "Salary account, iDEAL, daily use, digital onboarding",
    priceNote: "Basic account fees apply; check current pricing",
    typicalCost: "Free basic account",
    pros: ["Free basic account; very widely used", "Expat flow; some allow BSN within 90 days", "Strong app and digital; English expat pages"],
    cons: ["Branch network reduced in recent years", "BSN rules can change; confirm current policy"],
    whoShouldChoose: "Expats who want a major Dutch bank, free basic account, and possible staged onboarding before BSN.",
    englishSupportNote: "English expat pages and support available",
    isFeatured: true,
    logo: { src: `${LOGOS}/ing.svg`, alt: "ING" },
    externalUrl: "https://www.ing.nl/en/personal/expats",
    reviewComingSoon: true,
    providerType: "bank",
    features: ["Current account", "iDEAL", "Debit card", "App and online banking", "Savings", "Mortgages", "Investments", "Expat onboarding flow"],
  },
  {
    slug: "rabobank",
    name: "Rabobank",
    href: `${BANKS_BASE}/rabobank/`,
    shortDescription:
      "Major Dutch cooperative bank with a large branch network and strong presence in the Netherlands. Full current accounts, iDEAL, and in-person service.",
    bestFor: "Traditional banking, branch network, salary account, cooperative model",
    priceNote: "Account fees apply; check current pricing",
    typicalCost: "From free basic to paid packages",
    pros: ["Large branch network across the Netherlands", "Cooperative structure; no external shareholders", "Full range of banking and often mortgage products"],
    cons: ["Less expat-specific onboarding than ING/ABN", "English support varies; check availability"],
    whoShouldChoose: "Expats who want a major Dutch bank with widespread branch access and a full product range.",
    englishSupportNote: "Check provider website for English",
    isFeatured: true,
    logo: { src: `${LOGOS}/rabobank.svg`, alt: "Rabobank" },
    externalUrl: "https://www.rabobank.nl/",
    reviewComingSoon: true,
    providerType: "bank",
    features: ["Current account", "iDEAL", "Debit card", "Branch network", "Savings", "Mortgages", "Investments", "Business banking"],
  },
  {
    slug: "sns-bank",
    name: "SNS Bank",
    href: `${BANKS_BASE}/sns-bank/`,
    shortDescription:
      "Dutch retail bank (de Volksbank). No physical branches; online and phone service. Full Dutch payment account with iDEAL and debit card.",
    bestFor: "Online-only Dutch account, straightforward pricing",
    priceNote: "Check current account pricing",
    typicalCost: "From ~€2–4/mo",
    pros: ["Dutch-licensed; covered by deposit guarantee", "Transparent pricing; part of de Volksbank", "Full iDEAL and debit card"],
    cons: ["No branches; digital and phone only", "English support may be limited"],
    whoShouldChoose: "Expats who want a no-branch Dutch bank with clear fees and don’t need in-person service.",
    englishSupportNote: "Check provider website",
    isFeatured: false,
    logo: { src: `${LOGOS}/sns-bank.svg`, alt: "SNS Bank" },
    externalUrl: "https://www.snsbank.nl/",
    reviewComingSoon: true,
    providerType: "bank",
    features: ["Dutch payment account", "iDEAL", "Debit card", "Online and app banking", "Savings", "Sustainable investment options"],
  },
  {
    slug: "asn-bank",
    name: "ASN Bank",
    href: `${BANKS_BASE}/asn-bank/`,
    shortDescription:
      "Dutch sustainable bank (de Volksbank). Focus on ethical and green investing; full current account, iDEAL, and online banking. No branches.",
    bestFor: "Sustainable banking, ethical focus, Dutch account without branches",
    priceNote: "Check current account pricing",
    typicalCost: "From ~€2–4/mo",
    pros: ["Dutch-licensed; sustainable/ethical positioning", "Full payment account; iDEAL and card", "Transparent about impact and criteria"],
    cons: ["No branches", "Account eligibility and English support; check site"],
    whoShouldChoose: "Expats who want a Dutch account from a bank with a strong sustainability focus.",
    englishSupportNote: "Check provider website",
    isFeatured: false,
    logo: { src: `${LOGOS}/asn-bank.svg`, alt: "ASN Bank" },
    externalUrl: "https://www.asnbank.nl/",
    reviewComingSoon: true,
    providerType: "bank",
    features: ["Dutch payment account", "iDEAL", "Debit card", "Sustainable savings", "Ethical investments", "Online banking"],
  },
  {
    slug: "triodos-bank",
    name: "Triodos Bank",
    href: `${BANKS_BASE}/triodos-bank/`,
    shortDescription:
      "Dutch sustainable bank with a focus on social and environmental impact. Full current account, iDEAL, and online banking; limited branch presence.",
    bestFor: "Sustainable banking, impact focus, Dutch account",
    priceNote: "Monthly account fee; check current pricing",
    typicalCost: "From ~€3/mo",
    pros: ["Dutch-licensed; strong sustainability profile", "Full payment account; iDEAL and card", "Transparent about where money is used"],
    cons: ["Monthly fee; few or no walk-in branches", "English availability; check website"],
    whoShouldChoose: "Expats who prioritise a bank with a clear ethical and impact focus.",
    englishSupportNote: "Check provider website",
    isFeatured: false,
    logo: { src: `${LOGOS}/triodos-bank.svg`, alt: "Triodos Bank" },
    externalUrl: "https://www.triodos.nl/",
    reviewComingSoon: true,
    providerType: "bank",
    features: ["Dutch current account", "iDEAL", "Debit card", "Savings", "Sustainable lending and investments", "App and online banking"],
  },
  {
    slug: "wise",
    name: "Wise",
    href: `${BANKS_BASE}/wise/`,
    shortDescription:
      "International transfers and multi-currency accounts. Useful for moving money to the Netherlands and holding multiple currencies; not a substitute for a Dutch bank account for salary and local payments.",
    bestFor: "International transfers, multi-currency, moving money to NL",
    priceNote: "Free account; pay per transfer; check current fees",
    typicalCost: "Free account, pay per transfer",
    pros: ["Low-cost international transfers", "Multi-currency; English-first", "Free account; pay per use"],
    cons: ["Not a full Dutch bank account for salary/iDEAL in NL", "Use alongside a Dutch account for local needs"],
    whoShouldChoose: "Expats who need to move money to the Netherlands or hold multiple currencies; use with a Dutch account for salary and daily spending.",
    englishSupportNote: "English-first product",
    isFeatured: true,
    logo: { src: `${LOGOS}/wise.svg`, alt: "Wise" },
    externalUrl: "https://wise.com/",
    reviewComingSoon: true,
    providerType: "money-service",
    features: ["International transfers", "Multi-currency account", "Debit card", "Currency conversion", "Business account", "No monthly fee for basic account"],
  },
  {
    slug: "revolut",
    name: "Revolut",
    href: `${BANKS_BASE}/revolut/`,
    shortDescription:
      "Digital banking and multi-currency app. Offers accounts and cards; suitability for salary and full Dutch banking needs varies. Check provider for Dutch account and iDEAL support.",
    bestFor: "Multi-currency, travel, digital-first",
    priceNote: "Free tier and paid plans; check current pricing",
    typicalCost: "Free tier, plans from ~€2.99/mo",
    pros: ["Free tier; multi-currency and travel-friendly", "English app; popular with expats", "Useful for spending and transfers"],
    cons: ["Not a Dutch-licensed bank; check iDEAL/salary support for NL", "May need a Dutch account alongside for full local use"],
    whoShouldChoose: "Expats who want a free multi-currency app for travel and spending; confirm Dutch account and iDEAL needs with provider.",
    englishSupportNote: "English app and support",
    isFeatured: false,
    logo: { src: `${LOGOS}/revolut.svg`, alt: "Revolut" },
    externalUrl: "https://www.revolut.com/",
    reviewComingSoon: true,
    providerType: "money-service",
    features: ["Multi-currency account", "Debit card", "International transfers", "Currency exchange", "Free and paid tiers", "App-based banking"],
  },







] as Omit<ServiceCategoryProviderCard, "priority">[];

export const banksProviders: ServiceCategoryProviderCard[] = attachSequentialPriority(banksProvidersData);

const healthInsuranceProvidersData = [







  {
    slug: "zilveren-kruis",
    name: "Zilveren Kruis",
    href: `${INSURANCE_BASE}/zilveren-kruis/`,
    shortDescription:
      "One of the largest Dutch health insurers (Achmea). Broad care network, basic and supplementary packages; widely recognised by expats.",
    bestFor: "Broad network, brand recognition, supplementary options",
    priceNote: "Basic package only; supplementary and excess options affect price.",
    typicalCost: "~€145–162/mo",
    pros: ["Very broad care network", "Widely recognised; many providers accept", "Strong supplementary packages (dental, physio)"],
    cons: ["Premium often in mid–upper range", "Full English support varies by product"],
    whoShouldChoose: "Expats who want a well-known insurer with a large network and optional extras.",
    englishSupportNote: "Check provider website for English",
    isFeatured: true,
    logo: { src: `${LOGOS}/zilveren-kruis.svg`, alt: "Zilveren Kruis" },
    externalUrl: "https://www.zilverenkruis.nl/",
    reviewComingSoon: true,
    features: ["Basic (mandatory) package", "Supplementary dental", "Supplementary physiotherapy", "Supplementary glasses", "Natura and restitution options", "Broad care network"],
  },
  {
    slug: "cz",
    name: "CZ",
    href: `${INSURANCE_BASE}/cz/`,
    shortDescription:
      "Large Dutch insurer with a big customer base. Standard basic and various supplementary packages; solid option for daily cover.",
    bestFor: "Large customer base, standard cover",
    priceNote: "Basic package only; supplementary and excess options affect price.",
    typicalCost: "~€142–158/mo",
    pros: ["Large customer base; stable and established", "Wide range of supplementary options", "Good national coverage"],
    cons: ["Less expat-focused than some", "English materials may be limited"],
    whoShouldChoose: "Expats who want a big, established insurer with straightforward basic and supplementary cover.",
    englishSupportNote: "Check provider website",
    isFeatured: true,
    logo: { src: `${LOGOS}/cz.svg`, alt: "CZ" },
    externalUrl: "https://www.cz.nl/",
    reviewComingSoon: true,
    features: ["Basic package", "Supplementary dental and physio", "Supplementary extra cover", "Multiple policy types", "National network"],
  },
  {
    slug: "menzis",
    name: "Menzis",
    href: `${INSURANCE_BASE}/menzis/`,
    shortDescription:
      "Major Dutch health insurer with a range of basic and supplementary products. Often chosen for flexibility and customer service.",
    bestFor: "Flexibility, supplementary packages",
    priceNote: "Basic package only; supplementary and excess options affect price.",
    typicalCost: "~€138–155/mo",
    pros: ["Flexible package options", "Often competitive on price", "Good customer service reputation"],
    cons: ["Network and English support vary by product"],
    whoShouldChoose: "Expats who want flexibility in packages and a balance of price and service.",
    englishSupportNote: "Check provider website",
    isFeatured: true,
    logo: { src: `${LOGOS}/menzis.svg`, alt: "Menzis" },
    externalUrl: "https://www.menzis.nl/",
    reviewComingSoon: true,
    features: ["Basic package", "Supplementary packages", "Dental and physio add-ons", "Flexible excess options", "App and online service"],
  },
  {
    slug: "vgz",
    name: "VGZ",
    href: `${INSURANCE_BASE}/vgz/`,
    shortDescription:
      "Major Dutch health insurer with a wide range of basic and supplementary products. Often chosen for flexibility.",
    bestFor: "Wide choice, supplementary options",
    priceNote: "Basic package only; supplementary and excess options affect price.",
    typicalCost: "~€140–158/mo",
    pros: ["Wide choice of packages and add-ons", "Strong supplementary options", "Established brand"],
    cons: ["Premium can be higher for top packages", "Check English availability"],
    whoShouldChoose: "Expats who want plenty of choice in basic and supplementary cover.",
    englishSupportNote: "Check provider website",
    isFeatured: true,
    logo: { src: `${LOGOS}/vgz.svg`, alt: "VGZ" },
    externalUrl: "https://www.vgz.nl/",
    reviewComingSoon: true,
    features: ["Basic package", "Wide supplementary range", "Dental, physio, glasses", "Multiple package levels", "Online comparison and sign-up"],
  },
  {
    slug: "ohra",
    name: "OHRA",
    href: `${INSURANCE_BASE}/ohra/`,
    shortDescription:
      "Dutch insurer offering basic and supplementary health insurance. Often positioned for straightforward cover and competitive pricing.",
    bestFor: "Straightforward cover, competitive pricing",
    priceNote: "Basic package only; supplementary and excess options affect price.",
    typicalCost: "~€132–148/mo",
    pros: ["Often among the cheaper basic packages", "Straightforward product range", "Competitive for no-frills cover"],
    cons: ["Fewer bells and whistles than larger insurers", "English support may be limited"],
    whoShouldChoose: "Expats who prioritise low premium and simple basic cover.",
    englishSupportNote: "Check provider website",
    isFeatured: false,
    logo: { src: `${LOGOS}/ohra.svg`, alt: "OHRA" },
    externalUrl: "https://www.ohra.nl/",
    reviewComingSoon: true,
    features: ["Basic package", "Supplementary dental and physio", "Simple package options", "Competitive basic premium", "Direct/online sales"],
  },
  {
    slug: "ditzo",
    name: "Ditzo",
    href: `${INSURANCE_BASE}/ditzo/`,
    shortDescription:
      "Part of Zilveren Kruis/Achmea; often aimed at younger and digital-savvy users with basic and supplementary options.",
    bestFor: "Digital-first, younger users",
    priceNote: "Basic package only; supplementary and excess options affect price.",
    typicalCost: "~€135–152/mo",
    pros: ["App-first, digital experience", "Often competitive pricing", "Uses Achmea/Zilveren Kruis network"],
    cons: ["Aimed at younger segment; may feel less “traditional”", "Check English in app and docs"],
    whoShouldChoose: "Expats who prefer managing insurance via app and want a modern, often cheaper option.",
    englishSupportNote: "Check provider website",
    isFeatured: false,
    logo: { src: `${LOGOS}/ditzo.svg`, alt: "Ditzo" },
    externalUrl: "https://www.ditzo.nl/",
    reviewComingSoon: true,
    features: ["Basic package", "Supplementary options", "App-first management", "Achmea network", "Often lower premium"],
  },
  {
    slug: "fbto",
    name: "FBTO",
    href: `${INSURANCE_BASE}/fbto/`,
    shortDescription:
      "Dutch health insurer focused on direct sales and often competitive premiums. Basic and supplementary packages; part of Achmea.",
    bestFor: "Competitive premiums, direct/online",
    priceNote: "Basic package only; supplementary and excess options affect price.",
    typicalCost: "~€130–148/mo",
    pros: ["Often competitive basic premiums", "Direct model; straightforward packages", "Part of Achmea network"],
    cons: ["Fewer add-ons than some larger brands", "Check English support"],
    whoShouldChoose: "Expats looking for a lower-cost basic package with a recognised Dutch insurer.",
    englishSupportNote: "Check provider website",
    isFeatured: false,
    logo: { src: `${LOGOS}/fbto.svg`, alt: "FBTO" },
    externalUrl: "https://www.fbto.nl/",
    reviewComingSoon: true,
    features: ["Basic package", "Supplementary dental and physio", "Direct sales model", "Competitive pricing", "Achmea care network"],
  },
  {
    slug: "dsw",
    name: "DSW",
    href: `${INSURANCE_BASE}/dsw/`,
    shortDescription:
      "Dutch health insurer with a focus on service and customer satisfaction. Basic and supplementary insurance; often competitive on price.",
    bestFor: "Service focus, competitive pricing",
    priceNote: "Basic package only; supplementary and excess options affect price.",
    typicalCost: "~€132–150/mo",
    pros: ["Strong customer satisfaction ratings", "Often competitive premiums", "Clear basic and supplementary options"],
    cons: ["Smaller than big four; check network", "English materials; check availability"],
    whoShouldChoose: "Expats who want a service-oriented insurer with competitive basic cover.",
    englishSupportNote: "Check provider website",
    isFeatured: false,
    logo: { src: `${LOGOS}/dsw.svg`, alt: "DSW" },
    externalUrl: "https://www.dsw.nl/",
    reviewComingSoon: true,
    features: ["Basic package", "Supplementary packages", "Dental and extra cover", "Customer service focus", "Online and app"],
  },
  {
    slug: "onvz",
    name: "ONVZ",
    href: `${INSURANCE_BASE}/onvz/`,
    shortDescription:
      "Dutch health insurer with a range of basic and supplementary products. Often chosen for flexibility and optional extras.",
    bestFor: "Flexibility, supplementary options",
    priceNote: "Basic package only; supplementary and excess options affect price.",
    typicalCost: "~€138–156/mo",
    pros: ["Flexible package options", "Good supplementary range", "Established Dutch insurer"],
    cons: ["Premium varies by package", "Check English support"],
    whoShouldChoose: "Expats who want flexible basic and add-on options from a recognised insurer.",
    englishSupportNote: "Check provider website",
    isFeatured: false,
    logo: { src: `${LOGOS}/onvz.svg`, alt: "ONVZ" },
    externalUrl: "https://www.onvz.nl/",
    reviewComingSoon: true,
    features: ["Basic package", "Supplementary dental and physio", "Flexible add-ons", "Multiple policy types", "Online service"],
  },
  {
    slug: "unive",
    name: "Unive",
    href: `${INSURANCE_BASE}/unive/`,
    shortDescription:
      "Dutch health insurer offering basic and supplementary insurance. Often positioned for straightforward cover and competitive pricing.",
    bestFor: "Straightforward cover, competitive price",
    priceNote: "Basic package only; supplementary and excess options affect price.",
    typicalCost: "~€128–145/mo",
    pros: ["Often competitive basic premiums", "Straightforward product range", "Part of larger group"],
    cons: ["Less expat-focused", "English support; check website"],
    whoShouldChoose: "Expats who want simple, often cheaper basic cover.",
    englishSupportNote: "Check provider website",
    isFeatured: false,
    logo: { src: `${LOGOS}/unive.svg`, alt: "Unive" },
    externalUrl: "https://www.unive.nl/",
    reviewComingSoon: true,
    features: ["Basic package", "Supplementary options", "Straightforward packages", "Competitive basic premium", "Online sign-up"],
  },
  {
    slug: "hollandzorg",
    name: "HollandZorg",
    href: `${INSURANCE_BASE}/hollandzorg/`,
    shortDescription:
      "Dutch health insurer with basic and supplementary packages. Often competitive on price; part of the Dutch market for standard cover.",
    bestFor: "Competitive premiums, standard cover",
    priceNote: "Basic package only; supplementary and excess options affect price.",
    typicalCost: "~€130–148/mo",
    pros: ["Often low-cost basic option", "Standard government basic package", "Supplementary add-ons available"],
    cons: ["Less brand visibility than largest insurers", "Check English availability"],
    whoShouldChoose: "Expats prioritising a low basic premium with standard Dutch cover.",
    englishSupportNote: "Check provider website",
    isFeatured: false,
    logo: { src: `${LOGOS}/hollandzorg.svg`, alt: "HollandZorg" },
    externalUrl: "https://www.hollandzorg.nl/",
    reviewComingSoon: true,
    features: ["Basic package", "Supplementary dental and physio", "Low-cost basic option", "Standard government package", "Online and phone"],
  },







] as Omit<ServiceCategoryProviderCard, "priority">[];

export const healthInsuranceProviders: ServiceCategoryProviderCard[] =
  attachSequentialPriority(healthInsuranceProvidersData);

const immigrationLawyersProvidersData = [







  {
    slug: "fragomen",
    name: "Fragomen",
    href: `${IMMIGRATION_LAWYERS_BASE}/fragomen/`,
    shortDescription:
      "Global immigration law firm with a Netherlands practice. Handles corporate immigration, work permits, and relocations for employers and individuals.",
    bestFor: "Corporate immigration, global mobility, work permits",
    priceNote: "Varies by case and service; confirm with firm",
    typicalCost: "From ~€175–300/hr; corporate packages on request",
    pros: ["Global network; experienced in corporate moves", "Work permits and highly skilled migrant routes", "Often used by multinational employers"],
    cons: ["Premium positioning; may be costlier than boutiques", "Best for employer-sponsored or corporate cases"],
    whoShouldChoose: "Expats and employers needing corporate or global-mobility immigration support.",
    englishSupportNote: "English-first; international practice",
    isFeatured: true,
    cityRelevance: ["Amsterdam", "Rotterdam", "The Hague"],
    reviewComingSoon: true,
    providerType: "law-firm",
    logo: { src: `${LOGOS}/fragomen.svg`, alt: "Fragomen" },
    externalUrl: "https://www.fragomen.com/",
    features: ["Work permits and highly skilled migrant", "Corporate immigration", "Intra-company transfers", "Global mobility programmes", "Compliance and policy"],
  },
  {
    slug: "everaert",
    name: "Everaert Advocaten",
    href: `${IMMIGRATION_LAWYERS_BASE}/everaert/`,
    shortDescription:
      "Dutch immigration law firm focused on residence permits, family migration, and IND procedures. One of the first in the Netherlands dedicated to immigration law.",
    bestFor: "Residence permits, family reunification, IND procedures",
    priceNote: "Varies by case; confirm with firm",
    typicalCost: "From ~€150–275/hr; fixed fees for some applications",
    pros: ["Dutch-focused immigration practice", "Family and work permit experience", "IND procedures and objections"],
    cons: ["Capacity and lead times; confirm availability"],
    whoShouldChoose: "Expats needing Dutch immigration advice for residence, family, or work permits.",
    englishSupportNote: "English available; confirm with firm",
    isFeatured: true,
    cityRelevance: ["Amsterdam", "The Hague"],
    reviewComingSoon: true,
    providerType: "law-firm",
    logo: { src: `${LOGOS}/everaert.svg`, alt: "Everaert Advocaten" },
    externalUrl: "https://www.everaert.nl/",
    features: ["Residence permits", "Family reunification", "IND procedures", "Objections and appeals", "Work permits", "Naturalisation"],
  },
  {
    slug: "orion-immigration",
    name: "Orion Immigration",
    href: `${IMMIGRATION_LAWYERS_BASE}/orion-immigration/`,
    shortDescription:
      "Immigration and relocation services for expats and employers. Residence permits, work permits, and support with IND applications.",
    bestFor: "Expat immigration, work permits, IND applications",
    priceNote: "Varies by case; packages available",
    typicalCost: "From ~€150/hr; packages on request",
    pros: ["Expat-focused; English service", "Work and residence permit experience", "Packages for individuals and employers"],
    cons: ["Confirm scope and fees in writing"],
    whoShouldChoose: "Expats and smaller employers needing clear, English-language immigration support.",
    englishSupportNote: "English service available",
    isFeatured: true,
    cityRelevance: ["Amsterdam", "Rotterdam", "Utrecht"],
    reviewComingSoon: true,
    providerType: "law-firm",
    logo: { src: `${LOGOS}/orion-immigration.svg`, alt: "Orion Immigration" },
    externalUrl: "https://www.orion-immigration.com/",
    features: ["Work permits", "Residence permits", "IND applications", "Employer and individual clients", "Packages and hourly options"],
  },
  {
    slug: "franssen-advocaten",
    name: "Franssen Advocaten",
    href: `${IMMIGRATION_LAWYERS_BASE}/franssen-advocaten/`,
    shortDescription:
      "Dutch law firm with immigration practice. Residence permits, family migration, and legal support for IND procedures and appeals.",
    bestFor: "Residence permits, family cases, IND procedures",
    priceNote: "Varies by case; confirm with firm",
    typicalCost: "From ~€175–250/hr; fixed fees for some work",
    pros: ["Immigration and family law experience", "IND procedures and objections", "Dutch-based practice"],
    cons: ["Availability and English; confirm with firm"],
    whoShouldChoose: "Expats needing Dutch immigration and family-related legal support.",
    englishSupportNote: "Check with firm",
    isFeatured: true,
    cityRelevance: ["Amsterdam", "The Hague"],
    reviewComingSoon: true,
    providerType: "law-firm",
    logo: { src: `${LOGOS}/franssen-advocaten.svg`, alt: "Franssen Advocaten" },
    externalUrl: "https://www.franssenadvocaten.nl/",
    features: ["Residence permits", "Family migration", "IND procedures", "Objections and appeals", "Immigration and family law"],
  },
  {
    slug: "pathway-partners",
    name: "Pathway Partners",
    href: `${IMMIGRATION_LAWYERS_BASE}/pathway-partners/`,
    shortDescription:
      "Immigration and relocation support for expats and employers. Combines immigration advice with practical relocation assistance.",
    bestFor: "Relocation and immigration, employer support, first-time moves",
    priceNote: "Packages and hourly; confirm with provider",
    typicalCost: "Packages from ~€1,200; depends on scope",
    pros: ["Immigration plus relocation in one place", "Employer and individual clients", "Practical and legal support"],
    cons: ["Scope and pricing vary by package"],
    whoShouldChoose: "Expats or employers wanting combined immigration and relocation support.",
    englishSupportNote: "English service",
    isFeatured: false,
    cityRelevance: ["Amsterdam", "Rotterdam", "Eindhoven"],
    reviewComingSoon: true,
    providerType: "relocation-legal",
    logo: { src: `${LOGOS}/pathway-partners.svg`, alt: "Pathway Partners" },
    externalUrl: "https://www.pathwaypartners.nl/",
    features: ["Immigration advice and applications", "Relocation support", "Housing and registration", "Employer packages", "First-time move packages"],
  },
  {
    slug: "adam-wolf",
    name: "Adam & Wolf Immigration Lawyers",
    href: `${IMMIGRATION_LAWYERS_BASE}/adam-wolf/`,
    shortDescription:
      "Amsterdam-based immigration law firm with decades of collective experience in Dutch immigration procedures, work permits, and residence applications.",
    bestFor: "Work permits, residence permits, IND procedures, expat cases",
    priceNote: "Varies by case; confirm with firm",
    typicalCost: "From ~€150–250/hr; fixed fees for some applications",
    pros: ["Experienced team; Dutch immigration focus", "Work and residence permits", "Expat and employer clients"],
    cons: ["Confirm availability and English support"],
    whoShouldChoose: "Expats and employers seeking experienced Dutch immigration representation.",
    englishSupportNote: "English available; confirm with firm",
    isFeatured: false,
    cityRelevance: ["Amsterdam"],
    reviewComingSoon: true,
    providerType: "law-firm",
    externalUrl: "https://www.adamwolf.nl/",
    features: ["Residence permits", "Work permits", "IND procedures", "Family migration", "Objections and appeals"],
  },
  {
    slug: "kroes-advocaten",
    name: "Kroes Advocaten",
    href: `${IMMIGRATION_LAWYERS_BASE}/kroes-advocaten/`,
    shortDescription:
      "Multilingual immigration practice (Dutch, English, Spanish, French, German) specialising in family reunification, visa applications, and residence permits.",
    bestFor: "Family reunification, visa applications, multilingual support",
    priceNote: "Varies by case; confirm with firm",
    typicalCost: "From ~€150–225/hr; fixed fees for straightforward cases",
    pros: ["Multilingual team", "Family reunification and visa focus", "Several languages spoken"],
    cons: ["Capacity; confirm lead times"],
    whoShouldChoose: "Expats who need family reunification or visa support in a language they are comfortable with.",
    englishSupportNote: "English and other languages available",
    isFeatured: false,
    cityRelevance: ["Amsterdam"],
    reviewComingSoon: true,
    providerType: "boutique",
    externalUrl: "https://www.kroesadvocaten.nl/",
    features: ["Family reunification", "Visa applications", "Residence permits", "Multilingual service", "IND procedures"],
  },
  {
    slug: "singh-raaijmakers",
    name: "Singh Raaijmakers Lawyers",
    href: `${IMMIGRATION_LAWYERS_BASE}/singh-raaijmakers/`,
    shortDescription:
      "Corporate immigration specialists; one of the larger practices for employer and work-permit matters. Can arrange work permits in as little as two weeks in suitable cases.",
    bestFor: "Corporate immigration, work permits, employer-sponsored moves",
    priceNote: "Typically corporate billing; confirm with firm",
    typicalCost: "Corporate packages; hourly and fixed fees on request",
    pros: ["Corporate and work-permit focus", "Fast turnaround in suitable cases", "Employer and HR experience"],
    cons: ["Positioned for corporate and employer clients"],
    whoShouldChoose: "Employers and HR teams needing work permits and corporate immigration in the Netherlands.",
    englishSupportNote: "English-first; international client base",
    isFeatured: false,
    cityRelevance: ["Amsterdam", "Rotterdam", "The Hague"],
    reviewComingSoon: true,
    providerType: "law-firm",
    externalUrl: "https://www.singhraaijmakers.nl/",
    features: ["Work permits", "Corporate immigration", "Highly skilled migrant", "Employer representation", "Fast-track where applicable"],
  },
  {
    slug: "law-more",
    name: "Law & More Advocaten",
    href: `${IMMIGRATION_LAWYERS_BASE}/law-more/`,
    shortDescription:
      "Dutch law firm with immigration and expat-related practice. Residence permits, family law, and IND procedures.",
    bestFor: "Residence permits, family migration, expat legal matters",
    priceNote: "Varies by case; confirm with firm",
    typicalCost: "From ~€150–250/hr",
    pros: ["Immigration and related legal areas", "Expat-focused practice", "IND and residence experience"],
    cons: ["Confirm scope and language support"],
    whoShouldChoose: "Expats needing immigration and possibly related legal support from one firm.",
    englishSupportNote: "Check with firm",
    isFeatured: false,
    cityRelevance: ["Amsterdam", "Eindhoven"],
    reviewComingSoon: true,
    providerType: "law-firm",
    externalUrl: "https://www.lawandmore.nl/",
    features: ["Residence permits", "Family migration", "IND procedures", "Expat legal services", "Objections and appeals"],
  },
  {
    slug: "baker-mckenzie",
    name: "Baker McKenzie (Amsterdam)",
    href: `${IMMIGRATION_LAWYERS_BASE}/baker-mckenzie/`,
    shortDescription:
      "Global law firm with an Amsterdam office and immigration practice. Corporate immigration, work permits, and global mobility for multinational employers.",
    bestFor: "Corporate immigration, global mobility, multinational employers",
    priceNote: "Corporate billing; confirm with firm",
    typicalCost: "From ~€200–350/hr; corporate packages",
    pros: ["Global network; Amsterdam presence", "Corporate and employer focus", "Multi-country coordination"],
    cons: ["Premium rates; best for corporate clients"],
    whoShouldChoose: "Multinational employers and expats in corporate relocation programmes.",
    englishSupportNote: "English-first; international practice",
    isFeatured: false,
    cityRelevance: ["Amsterdam"],
    reviewComingSoon: true,
    providerType: "law-firm",
    externalUrl: "https://www.bakermckenzie.com/",
    features: ["Work permits and HSM", "Corporate immigration", "Global mobility", "Intra-company transfers", "Multi-jurisdiction coordination"],
  },







] as Omit<ServiceCategoryProviderCard, "priority">[];

export const immigrationLawyersProviders: ServiceCategoryProviderCard[] =
  attachSequentialPriority(immigrationLawyersProvidersData);

const visaConsultantsProvidersData = [







  {
    slug: "fragomen",
    name: "Fragomen",
    href: `${VISA_CONSULTANTS_BASE}/fragomen/`,
    logo: { src: `${LOGOS}/fragomen.svg`, alt: "Fragomen" },
    externalUrl: "https://www.fragomen.com/offices/amsterdam.html",
    shortDescription:
      "Global immigration firm with an Amsterdam office. Work permits, residence permits, highly skilled migrant, startup and entrepreneur routes, family reunification, and naturalisation. Serves private clients, SMEs, and corporations; trusted partner of Expatcenter Amsterdam.",
    bestFor: "Corporate and individual clients; HSM, startup, family, and work-permit support",
    priceNote: "Fees vary by service and client type. Check directly with the firm.",
    typicalCost: "Corporate and individual pricing on request; check directly",
    pros: ["Full-service immigration support", "Direct engagement with IND", "Corporate and private clients", "English-language service"],
    cons: ["Pricing not published online; request a quote", "May be geared toward larger cases or employers"],
    whoShouldChoose: "Expats and employers seeking full-service immigration support and IND familiarity.",
    englishSupportNote: "English and Dutch",
    isFeatured: true,
    cityRelevance: ["Amsterdam", "Netherlands"],
    reviewComingSoon: true,
    features: ["Work and residence permits", "HSM and startup routes", "Family reunification", "Naturalisation", "Corporate immigration"],
  },
  {
    slug: "pathway-partners",
    name: "Pathway Partners",
    href: `${VISA_CONSULTANTS_BASE}/pathway-partners/`,
    logo: { src: `${LOGOS}/pathway-partners.svg`, alt: "Pathway Partners" },
    externalUrl: "https://pathwaypartners.nl/",
    shortDescription:
      "Amsterdam-based immigration and legal services for individuals and businesses. Employment visas (HSM, Blue Card, ICT), self-employment permits, family reunification, naturalisation, objections (bezwaar), and humanitarian residence. Free eligibility assessment and consultation.",
    bestFor: "Individuals and businesses; employment, family, self-employment, naturalisation, and appeals",
    priceNote: "Free eligibility assessment; service fees vary. Extra family member from ~€500 per person; check full pricing.",
    typicalCost: "Free initial assessment; service fees vary. Family reunification from ~€500 per additional family member",
    pros: ["Free eligibility assessment and consultation", "Broad range of routes", "Individual and business clients", "Objections and appeals"],
    cons: ["Full price list requires direct enquiry", "Office by appointment"],
    whoShouldChoose: "Expats who want a free assessment and support across employment, family, or self-employment routes.",
    englishSupportNote: "English and Dutch",
    isFeatured: true,
    cityRelevance: ["Amsterdam", "Netherlands"],
    reviewComingSoon: true,
    features: ["Eligibility assessment", "Employment and HSM visas", "Family reunification", "Self-employment permits", "Naturalisation", "Objections and appeals"],
  },
  {
    slug: "immigration-advise-nl",
    name: "Immigration Advise NL",
    href: `${VISA_CONSULTANTS_BASE}/immigration-advise-nl/`,
    logo: { src: "https://logo.clearbit.com/immigrationadvise.nl", alt: "Immigration Advise NL" },
    externalUrl: "https://immigrationadvise.nl/",
    shortDescription:
      "Immigration advisory practice (Marco van der Vinne; experience since 2001, formerly with Dutch Immigration Service). Affordable package options: pre-scan and DIY support, full handling, and objection procedures. MVV, residence permits, and extensions.",
    bestFor: "Expats seeking transparent, package-based pricing; MVV, residence permits, extensions, objections",
    priceNote: "Check current rates on the provider’s website; packages may be updated.",
    typicalCost: "From ~€100 pre-scan and DIY; ~€200 full handling; ~€300 objection procedures (check current rates)",
    pros: ["Transparent package pricing", "Experience with Dutch immigration system", "Pre-scan and full-handling options", "Objection support"],
    cons: ["Solo practice; capacity may be limited", "Verify current package prices"],
    whoShouldChoose: "Expats who want clear package options and MVV or residence-permit support.",
    englishSupportNote: "Check directly",
    isFeatured: true,
    cityRelevance: ["Netherlands"],
    reviewComingSoon: true,
    features: ["Pre-scan and DIY packages", "Full application handling", "MVV and residence permits", "Extensions", "Objection procedures"],
  },
  {
    slug: "lex-braxis",
    name: "Lex Braxis",
    href: `${VISA_CONSULTANTS_BASE}/lex-braxis/`,
    logo: { src: "https://logo.clearbit.com/lexbraxis.com", alt: "Lex Braxis" },
    externalUrl: "https://www.lexbraxis.com/",
    shortDescription:
      "Immigration and visa support in the Netherlands: residence permits, work permits, Dutch nationality, study visas, and DAFT. Fixed fees available with cost transparency. English, Portuguese, and Spanish spoken.",
    bestFor: "Expats seeking fixed-fee options; work, study, DAFT, and nationality routes",
    priceNote: "Fixed fees available; confirm current rates and scope with the provider.",
    typicalCost: "Fixed fees available; check directly for current rates",
    pros: ["Fixed-fee options", "Multilingual (English, Portuguese, Spanish)", "Work, study, DAFT, nationality"],
    cons: ["Confirm which services are fixed-fee", "Rates may vary by case type"],
    whoShouldChoose: "Expats who prefer fixed-fee clarity and multilingual support.",
    englishSupportNote: "English, Portuguese, Spanish",
    isFeatured: true,
    cityRelevance: ["Netherlands"],
    reviewComingSoon: true,
    features: ["Residence and work permits", "Study visas", "DAFT visa", "Dutch nationality", "Fixed-fee options"],
  },
  {
    slug: "kroes-advocaten",
    name: "Kroes Advocaten",
    href: `${VISA_CONSULTANTS_BASE}/kroes-advocaten/`,
    logo: { src: "https://logo.clearbit.com/kroesadvocaten.nl", alt: "Kroes Advocaten" },
    externalUrl: "https://www.kroesadvocaten.nl/en/",
    shortDescription:
      "Law firm specialising in labour migration and immigration. Highly skilled migrant permits, family reunification, entrepreneur visas, Dutch passport applications, and EU Blue Card. Fixed-fee pricing where applicable.",
    bestFor: "HSM, family reunification, entrepreneur route, Dutch citizenship; clients who want legal representation",
    priceNote: "Fixed-fee pricing available; confirm scope and current fees.",
    typicalCost: "Fixed-fee pricing; check directly for current fees",
    pros: ["Immigration law specialisation", "Fixed-fee options", "HSM, family, entrepreneur, citizenship", "Legal representation"],
    cons: ["Law firm fees may be higher than consultancy-only", "Confirm whether you need a lawyer or advisor"],
    whoShouldChoose: "Expats who want a law firm for complex cases or legal representation.",
    englishSupportNote: "English available",
    isFeatured: false,
    cityRelevance: ["Netherlands"],
    reviewComingSoon: true,
    features: ["HSM permits", "Family reunification", "Entrepreneur visas", "Dutch citizenship", "EU Blue Card", "Fixed-fee options"],
  },
  {
    slug: "everaert-advocaten",
    name: "Everaert Advocaten",
    href: `${VISA_CONSULTANTS_BASE}/everaert-advocaten/`,
    logo: { src: `${LOGOS}/everaert.svg`, alt: "Everaert Advocaten" },
    externalUrl: "https://www.everaert.nl/en/home/",
    shortDescription:
      "Full-service immigration law firm: work permits, family reunification, Dutch citizenship, permanent residency, creative industries, and business immigration. Broad coverage of residence and permit routes.",
    bestFor: "Work permits, family, citizenship, permanent residency, creative and business immigration",
    priceNote: "Fees depend on matter; check directly with the firm.",
    typicalCost: "Check directly with the firm",
    pros: ["Full-service immigration law", "Work, family, citizenship, business", "Legal representation"],
    cons: ["Pricing not published; request a quote", "Law firm—confirm if lawyer required for your case"],
    whoShouldChoose: "Expats needing full legal support across work, family, or business routes.",
    englishSupportNote: "English available",
    isFeatured: false,
    cityRelevance: ["Netherlands"],
    reviewComingSoon: true,
    features: ["Work permits", "Family reunification", "Dutch citizenship", "Permanent residency", "Creative and business immigration"],
  },
  {
    slug: "newland-chase",
    name: "Newland Chase",
    href: `${VISA_CONSULTANTS_BASE}/newland-chase/`,
    logo: { src: "https://logo.clearbit.com/newlandchase.com", alt: "Newland Chase" },
    externalUrl: "https://www.newlandchase.com/",
    shortDescription:
      "Global mobility and immigration services (part of Envoy Global). Corporate and individual clients; work permits, compliance, and relocation-related immigration support. Often engaged by employers for assignees and new hires.",
    bestFor: "Employer-supported moves; corporate assignees; work permits and compliance",
    priceNote: "Often employer-paid or package-based; individual fees vary.",
    typicalCost: "Often part of relocation or corporate package; individual pricing on request",
    pros: ["Global mobility focus", "Corporate and employer clients", "Often employer-paid", "English-first"],
    cons: ["May be oriented to corporate clients", "Individual pricing not standardised"],
    whoShouldChoose: "Expats whose employer uses Newland Chase or who need corporate-style immigration support.",
    englishSupportNote: "Typically English-first",
    isFeatured: false,
    cityRelevance: ["Amsterdam", "Netherlands"],
    reviewComingSoon: true,
    features: ["Work permits and compliance", "Corporate immigration", "Relocation support", "Employer programmes"],
  },
  {
    slug: "crown-relocations",
    name: "Crown Relocations",
    href: `${VISA_CONSULTANTS_BASE}/crown-relocations/`,
    logo: { src: "https://logo.clearbit.com/crownrelo.com", alt: "Crown Relocations" },
    externalUrl: "https://www.crownrelo.com/",
    shortDescription:
      "Global relocation and mobility services including immigration and visa support. Work permits, visa coordination, and move logistics. Often used by employers for international assignments and new hires.",
    bestFor: "Employer-supported relocations; visa and move coordination in one place",
    priceNote: "Typically bundled in relocation packages; scope and fee vary.",
    typicalCost: "Usually part of relocation package; check with employer or provider",
    pros: ["Relocation and immigration combined", "Employer programmes", "Global network"],
    cons: ["Individual availability and pricing vary", "Confirm in-house vs referred visa support"],
    whoShouldChoose: "Expats with employer-sponsored moves who want relocation and visa support from one provider.",
    englishSupportNote: "English available",
    isFeatured: false,
    cityRelevance: ["Netherlands"],
    reviewComingSoon: true,
    features: ["Visa and work-permit support", "Relocation coordination", "Assignments and new hires"],
  },







] as Omit<ServiceCategoryProviderCard, "priority">[];

export const visaConsultantsProviders: ServiceCategoryProviderCard[] =
  attachSequentialPriority(visaConsultantsProvidersData);

const mobileConnectivityProvidersData = [




  {
    slug: "simyo",
    name: "Simyo",
    href: `${MOBILE_CONNECTIVITY_BASE}/`,
    shortDescription:
      "Dutch SIM-only mobile brand (KPN network). Often used for straightforward prepaid or monthly plans and quick local number setup.",
    bestFor: "Simple SIM-only plans, local number for banking and 2FA, flexible data bundles",
    priceNote: "Prepaid and monthly SIM-only; check current plans",
    typicalCost: "~€7–25/mo depending on data bundle",
    pros: ["SIM-only focus; often easy online signup", "English website available", "Useful for OTPs, DigiD, and day-to-day Dutch number"],
    cons: ["Not a bank or utility—separate contracts for home internet", "Coverage and speeds depend on location like any MNO"],
    whoShouldChoose: "New arrivals who want a Dutch mobile number quickly with minimal friction.",
    englishSupportNote: "English website and help available",
    isFeatured: true,
    logo: { src: `${LOGOS}/simyo.svg`, alt: "Simyo" },
    externalUrl: "https://www.simyo.nl/",
    reviewComingSoon: true,
    features: ["SIM-only and prepaid", "Data bundles", "EU roaming (per plan rules)", "eSIM where offered", "Manage account online"],
  },
  {
    slug: "lebara",
    name: "Lebara",
    href: `${MOBILE_CONNECTIVITY_BASE}/`,
    shortDescription:
      "Mobile brand focused on internationals in the Netherlands. Prepaid and monthly options; useful when you want flexible plans and international calling bundles.",
    bestFor: "Internationals, prepaid flexibility, international minutes or bundles",
    priceNote: "Prepaid top-up or monthly plans; check current pricing",
    typicalCost: "~€5–20/mo typical entry plans; varies by bundle",
    pros: ["Positioned for internationals", "Prepaid and subscription options", "Often simple online ordering"],
    cons: ["Home broadband is a different product category—compare fixed ISPs separately", "Plan details change; confirm roaming and fair-use rules"],
    whoShouldChoose: "Expats comparing flexible mobile plans with international calling or data needs.",
    englishSupportNote: "English website and support available",
    isFeatured: true,
    logo: { src: `${LOGOS}/lebara.svg`, alt: "Lebara" },
    externalUrl: "https://www.lebara.nl/",
    reviewComingSoon: true,
    features: ["Prepaid and subscriptions", "Data and international bundles", "SIM delivery or pick-up options (check site)", "EU roaming per plan terms"],
  },
  {
    slug: "kpn",
    name: "KPN",
    href: `${MOBILE_CONNECTIVITY_BASE}/`,
    shortDescription:
      "Major Dutch network operator. Consumer mobile, prepaid, and SIM-only under the KPN brand; wide coverage and retail stores across the country.",
    bestFor: "Full-network coverage, in-store support, combined mobile and fibre from one provider",
    priceNote: "SIM-only and bundles; check current plans and promotions",
    typicalCost: "~€15–45/mo typical SIM-only range; varies by data",
    pros: ["Large native network and retail presence", "English information on consumer site", "eSIM and physical SIM options"],
    cons: ["Often priced above budget MVNOs", "Promotional pricing can be time-limited—read contract terms"],
    whoShouldChoose: "Expats who want a household-name operator with strong nationwide coverage and shop support.",
    englishSupportNote: "English pages available for consumer mobile",
    isFeatured: false,
    logo: {
      src: "https://www.google.com/s2/favicons?domain=www.kpn.com&sz=128",
      alt: "KPN",
    },
    externalUrl: "https://www.kpn.com/",
    reviewComingSoon: true,
    features: ["4G/5G mobile", "SIM-only and postpaid", "Prepaid options", "eSIM (check device)", "Bundles with fibre/TV"],
  },
  {
    slug: "vodafone-netherlands",
    name: "Vodafone Netherlands",
    href: `${MOBILE_CONNECTIVITY_BASE}/`,
    shortDescription:
      "Large mobile network in the Netherlands. Red-by-Vodafone and Vodafone-branded plans; common choice for data-heavy use and EU roaming.",
    bestFor: "Data-heavy users, EU travel, Red / Vodafone plan families",
    priceNote: "Contract and SIM-only; compare Red vs standard Vodafone",
    typicalCost: "~€12–40/mo entry to mid plans; unlimited options higher",
    pros: ["Strong brand and app experience", "English website and support options", "Broad retail and partner sales"],
    cons: ["Pricing mid-to-premium vs discounters", "Contract length and discounts—confirm cancellation rules"],
    whoShouldChoose: "Expats who want a major international brand with English-first flows and strong data options.",
    englishSupportNote: "English website and customer options",
    isFeatured: false,
    logo: {
      src: "https://www.google.com/s2/favicons?domain=www.vodafone.nl&sz=128",
      alt: "Vodafone Netherlands",
    },
    externalUrl: "https://www.vodafone.nl/",
    reviewComingSoon: true,
    features: ["4G/5G", "SIM-only and subscriptions", "Red by Vodafone (youth/budget sub-brand)", "EU roaming per plan", "eSIM on supported devices"],
  },
  {
    slug: "odido",
    name: "Odido",
    href: `${MOBILE_CONNECTIVITY_BASE}/`,
    shortDescription:
      "Netherlands mobile network (successor to T-Mobile NL consumer brand). Nationwide coverage, competitive SIM-only and unlimited-style plans.",
    bestFor: "SIM-only, unlimited data seekers, former T-Mobile customers migrating to Odido",
    priceNote: "Check Odido.nl for current SIM-only and bundle pricing",
    typicalCost: "~€10–35/mo typical SIM-only; unlimited plans higher",
    pros: ["Strong network footprint in NL", "Modern positioning vs legacy incumbents", "English consumer website"],
    cons: ["Brand change can confuse people searching “T-Mobile NL”", "Shop branding still transitioning in places"],
    whoShouldChoose: "Expats who want a major Dutch network with simple online signup and strong data offers.",
    englishSupportNote: "English website available",
    isFeatured: false,
    logo: {
      src: "https://www.google.com/s2/favicons?domain=www.odido.nl&sz=128",
      alt: "Odido",
    },
    externalUrl: "https://www.odido.nl/",
    reviewComingSoon: true,
    features: ["4G/5G", "SIM-only and plans", "Prepaid and postpaid", "EU roaming", "eSIM where supported"],
  },


] as Omit<ServiceCategoryProviderCard, "priority">[];

export const mobileConnectivityProviders: ServiceCategoryProviderCard[] =
  attachSequentialPriority(mobileConnectivityProvidersData);

const internationalHealthInsuranceProvidersData = [







  {
    slug: "cigna-global",
    name: "Cigna Healthcare (Cigna Global)",
    href: `${INSURANCE_BASE}/cigna-global/`,
    shortDescription:
      "Global health insurance for expats and internationally mobile individuals. Flexible plans and optional coverage for treatment in the Netherlands and abroad.",
    bestFor: "Expats before or after moving, global coverage, employer-sponsored options",
    priceNote: "Plans and premiums vary by region and cover level; get a quote.",
    typicalCost: "From ~€100–300+/mo (varies by plan)",
    pros: ["Wide global network", "English-first; expat-focused", "Flexible plans and optional modules"],
    cons: ["Premium often higher than Dutch basic only", "Not a substitute for mandatory Dutch insurance if you live/work in NL"],
    whoShouldChoose: "Expats who need international cover before relocating, or alongside Dutch insurance for travel and home-country care.",
    englishSupportNote: "English-first; global product",
    isFeatured: true,
    externalUrl: "https://www.cigna.com/international/",
    reviewComingSoon: true,
    features: ["International medical cover", "In-patient and out-patient options", "Optional dental and wellness", "Global network", "Pre-departure and in-country cover"],
  },
  {
    slug: "allianz-care",
    name: "Allianz Care",
    href: `${INSURANCE_BASE}/allianz-care/`,
    shortDescription:
      "International health insurance for expatriates and globally mobile people. Plans can cover treatment in the Netherlands and worldwide.",
    bestFor: "Expats, international assignees, flexible geographic cover",
    priceNote: "Premiums depend on area, level of cover, and options.",
    typicalCost: "From ~€80–250+/mo (varies by plan)",
    pros: ["Strong global presence", "Often used by employers for assignees", "English support and online tools"],
    cons: ["Not a replacement for compulsory Dutch insurance when resident in NL", "Price varies significantly by plan"],
    whoShouldChoose: "Expats and assignees who want international cover that includes the Netherlands and other countries.",
    englishSupportNote: "English support available",
    isFeatured: true,
    externalUrl: "https://www.allianzcare.com/",
    reviewComingSoon: true,
    features: ["International health plans", "In-patient and out-patient", "Optional dental and maternity", "Global network", "Assignment and relocation support"],
  },
  {
    slug: "bupa-global",
    name: "Bupa Global",
    href: `${INSURANCE_BASE}/bupa-global/`,
    shortDescription:
      "Worldwide health insurance for individuals and families. Plans can include treatment in the Netherlands and direct settlement with many providers.",
    bestFor: "Expats and families wanting global cover including the Netherlands",
    priceNote: "Premiums vary by plan, region, and options.",
    typicalCost: "From ~€120–350+/mo (varies by plan)",
    pros: ["Established global insurer", "Direct settlement and network options", "English-first"],
    cons: ["Generally premium positioning", "Does not replace mandatory Dutch basic insurance if you live in NL"],
    whoShouldChoose: "Expats who prioritise global coverage and direct billing, including before or alongside Dutch residence.",
    englishSupportNote: "English-first",
    isFeatured: true,
    externalUrl: "https://www.bupaglobal.com/",
    reviewComingSoon: true,
    features: ["Global health plans", "In-patient and out-patient", "Optional dental and wellness", "Direct settlement network", "Pre-departure and in-NL cover"],
  },
  {
    slug: "aetna-international",
    name: "Aetna International",
    href: `${INSURANCE_BASE}/aetna-international/`,
    shortDescription:
      "International health benefits for expats and globally mobile employees. Coverage can include the Netherlands and other countries.",
    bestFor: "Employer-sponsored expats, international assignees",
    priceNote: "Typically offered through employers; individual plans may be available.",
    typicalCost: "Varies; often employer-sponsored",
    pros: ["Widely used for corporate mobility", "Global network and support", "English support"],
    cons: ["Individual plans may be limited; check availability", "Not a substitute for Dutch mandatory insurance when resident"],
    whoShouldChoose: "Expats whose employer offers Aetna International or who are exploring international group cover.",
    englishSupportNote: "English support",
    isFeatured: false,
    externalUrl: "https://www.aetnainternational.com/",
    reviewComingSoon: true,
    features: ["International medical plans", "In-patient and out-patient", "Corporate and individual options", "Global network", "Wellness and support programmes"],
  },
  {
    slug: "now-health",
    name: "Now Health International",
    href: `${INSURANCE_BASE}/now-health/`,
    shortDescription:
      "International health insurance for expats and families. Plans can cover treatment worldwide including in the Netherlands.",
    bestFor: "Expats seeking mid-market international cover",
    priceNote: "Premiums depend on area and plan level.",
    typicalCost: "From ~€70–200+/mo (varies by plan)",
    pros: ["Expat-focused", "Range of plan levels", "English-first"],
    cons: ["Not a replacement for compulsory Dutch insurance when you live in NL", "Check Netherlands-specific terms"],
    whoShouldChoose: "Expats who want international cover that includes the Netherlands, often before or in addition to Dutch basic insurance.",
    englishSupportNote: "English-first",
    isFeatured: false,
    externalUrl: "https://www.nowhealth.com/",
    reviewComingSoon: true,
    features: ["Worldwide plans", "In-patient and out-patient", "Optional modules", "Global network", "Pre- and post-move cover"],
  },







] as Omit<ServiceCategoryProviderCard, "priority">[];

export const internationalHealthInsuranceProviders: ServiceCategoryProviderCard[] =
  attachSequentialPriority(internationalHealthInsuranceProvidersData);

const RELOCATION_AGENCIES_DATA = [







  {
    slug: "expat2holland",
    name: "Expat2Holland",
    providerUrl: "https://www.expat2holland.com",
    logoUrl:
      "https://www.google.com/s2/favicons?domain=www.expat2holland.com&sz=128",
    sourceEcosystems: ["IN Amsterdam"],
    cityRelevance: ["Amsterdam", "Amstelveen", "Region Amsterdam"],
    shortDescription:
      "Relocation and settling-in support for internationals, including housing, registration, and practical onboarding.",
    servicesOrProducts: [
      "Housing search and rental support",
      "Municipal registration (BRP) and BSN",
      "Bank account and insurance setup",
      "School and childcare referrals",
      "Settling-in and orientation",
      "Employer and individual packages",
    ],
    serviceTags: ["relocation", "housing", "registration", "expat advice", "settling in"],
    typicalCost: "Full package from ~€1,500–3,000; à la carte from ~€200–500 per service. Employer packages often higher.",
    pros: [
      "Full-service relocation and settling-in",
      "Housing, registration, bank and insurance support",
      "School and childcare referrals",
      "Employer and individual packages",
    ],
    cons: ["Pricing not published online; request a quote", "Amsterdam-focused; confirm coverage for other cities"],
    whoShouldChoose: "Expats and families moving to the Amsterdam region who want end-to-end support from housing to settling-in.",
    isOfficial: false,
    sourcePages: [
      "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/expat2holland",
    ],
    lastChecked: RELOCATION_AGENCIES_LAST_CHECKED,
  },
  {
    slug: "jimble",
    name: "Jimble",
    providerUrl: "https://www.jimble.nl",
    logoUrl: "https://logo.clearbit.com/jimble.nl",
    sourceEcosystems: ["IN Amsterdam"],
    cityRelevance: ["Amsterdam", "Region Amsterdam"],
    shortDescription:
      "Relocation and mobility services for expats and internationals in the Amsterdam area.",
    servicesOrProducts: [
      "Relocation and move coordination",
      "Housing and registration support",
      "Mobility and settling-in",
      "Corporate and individual clients",
    ],
    serviceTags: ["relocation", "expat advice", "mobility"],
    typicalCost: "Packages vary; often €1,000–2,500+ for core relocation. Check directly for quote.",
    pros: [
      "Relocation and move coordination in one place",
      "Housing and registration support",
      "Corporate and individual clients",
      "Amsterdam-area focus",
    ],
    cons: ["Limited to Amsterdam region", "Exact pricing requires a quote"],
    whoShouldChoose: "Expats and companies relocating to the Amsterdam area who want combined mobility and settling-in support.",
    isOfficial: false,
    sourcePages: [
      "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/jimble",
    ],
    lastChecked: RELOCATION_AGENCIES_LAST_CHECKED,
  },
  {
    slug: "rsh-relocation-and-immigration-services",
    name: "RSH Relocation and Immigration Services",
    providerUrl: "https://www.rsh.nl",
    logoUrl: "https://logo.clearbit.com/rsh.nl",
    sourceEcosystems: ["The Hague International Centre"],
    cityRelevance: ["The Hague", "Den Haag", "Region The Hague"],
    shortDescription:
      "Relocation and immigration services for internationals and families, including housing and registration support.",
    servicesOrProducts: [
      "Immigration and permit support",
      "Housing search and rental",
      "Municipal registration and BSN",
      "Family and school support",
      "Settling-in and orientation",
    ],
    serviceTags: ["relocation", "immigration", "housing", "registration", "family support"],
    typicalCost: "From ~€1,200 for basic package; full relocation €2,000–4,000+. Immigration support often separate.",
    pros: [
      "Relocation and immigration in one provider",
      "Housing, registration, family and school support",
      "The Hague and region experience",
    ],
    cons: ["Immigration fees often separate from relocation", "Confirm full scope and quote in writing"],
    whoShouldChoose: "Expats and families moving to The Hague who want both relocation and immigration support from a single provider.",
    isOfficial: false,
    sourcePages: [
      "https://www.thehagueinternationalcentre.nl/partners/relocation-services/rsh-relocation-and-immigration-services",
    ],
    lastChecked: RELOCATION_AGENCIES_LAST_CHECKED,
  },
  {
    slug: "relocaid",
    name: "RelocAid",
    providerUrl: "https://www.relocaid.com",
    logoUrl: "https://logo.clearbit.com/relocaid.com",
    sourceEcosystems: ["The Hague International Centre"],
    cityRelevance: ["The Hague", "Den Haag", "Region The Hague"],
    shortDescription:
      "Relocation support for expats and families, including housing search, registration, and settling-in assistance.",
    servicesOrProducts: [
      "Housing search and viewings",
      "Registration and BSN",
      "Family and school search",
      "Settling-in and practical support",
    ],
    serviceTags: ["relocation", "housing", "registration", "family support", "settling in"],
    typicalCost: "Packages from ~€1,000; full family relocation €2,000–3,500+. Confirm scope and quote.",
    pros: [
      "Family and school search support",
      "Housing search and viewings",
      "Registration and settling-in",
    ],
    cons: ["The Hague–focused; check coverage elsewhere", "Request written quote for full scope"],
    whoShouldChoose: "Families relocating to The Hague who want housing, registration, and school support in one package.",
    isOfficial: false,
    sourcePages: [
      "https://www.thehagueinternationalcentre.nl/partners/relocation-services/relocaid",
    ],
    lastChecked: RELOCATION_AGENCIES_LAST_CHECKED,
  },
  {
    slug: "access",
    name: "ACCESS",
    providerUrl: "https://www.access-nl.org",
    logoUrl: "https://logo.clearbit.com/access-nl.org",
    sourceEcosystems: ["The Hague International Centre"],
    cityRelevance: ["The Hague", "Den Haag", "Netherlands"],
    shortDescription:
      "Support for internationals and families with practical settling-in, information, and referral services.",
    servicesOrProducts: [
      "Information and orientation",
      "Referrals to housing, legal, tax",
      "Volunteer and community support",
      "Workshops and events",
    ],
    serviceTags: ["relocation", "expat advice", "family support", "information"],
    typicalCost: "Many services free or low-cost; membership and specific programmes may have fees. Check website.",
    pros: [
      "Many free or low-cost services",
      "Information, orientation, and referrals",
      "Volunteer and community support",
      "Workshops and events",
    ],
    cons: ["Not full-service relocation; more information and referral focused", "Some programmes may have membership or fees"],
    whoShouldChoose: "Expats in The Hague who want practical information, referrals, and community support rather than full-service relocation.",
    isOfficial: false,
    sourcePages: [
      "https://www.thehagueinternationalcentre.nl/partners/relocation-services/access",
    ],
    lastChecked: RELOCATION_AGENCIES_LAST_CHECKED,
  },
  {
    slug: "altair-global",
    name: "Altair Global",
    providerUrl: "https://www.altairglobal.com",
    logoUrl: "https://logo.clearbit.com/altairglobal.com",
    sourceEcosystems: ["The Hague International Centre"],
    cityRelevance: ["The Hague", "Den Haag", "Netherlands"],
    shortDescription:
      "Global relocation and mobility services, including corporate and family moves, housing, and immigration coordination.",
    servicesOrProducts: [
      "Corporate relocation programmes",
      "Destination and assignment support",
      "Housing and household goods",
      "Immigration and visa coordination",
      "Family and school support",
    ],
    serviceTags: ["relocation", "corporate relocation", "housing", "immigration", "mobility"],
    typicalCost: "Typically employer-paid; corporate packages €3,000–10,000+ depending on scope. Individual pricing on request.",
    pros: [
      "Global relocation and mobility experience",
      "Corporate and assignment support",
      "Housing, immigration, family and school coordination",
      "Often used by multinational employers",
    ],
    cons: ["Positioned for corporate and employer clients", "Individual pricing not standard; request quote"],
    whoShouldChoose: "Employers and assignees needing global mobility and corporate relocation support, often employer-funded.",
    isOfficial: false,
    sourcePages: [
      "https://www.thehagueinternationalcentre.nl/partners/relocation-services/altair-global",
    ],
    lastChecked: RELOCATION_AGENCIES_LAST_CHECKED,
  },
  {
    slug: "pasbms-immigration-and-relocation-services",
    name: "PASBMS Immigration and Relocation Services",
    providerUrl: "https://www.pasbms.com",
    logoUrl: "https://logo.clearbit.com/pasbms.com",
    sourceEcosystems: ["Rotterdam Expat Centre"],
    cityRelevance: ["Rotterdam", "Region Rotterdam"],
    shortDescription:
      "Immigration and relocation services for expats in the Rotterdam area, including permits, housing, and registration.",
    servicesOrProducts: [
      "Residence and work permits",
      "Housing search and registration",
      "BSN and municipal registration",
      "Settling-in support",
    ],
    serviceTags: ["relocation", "immigration", "housing", "registration"],
    typicalCost: "From ~€800 for immigration support; full relocation €1,500–3,000+. Fees depend on scope.",
    pros: [
      "Immigration and relocation in one place",
      "Rotterdam-area focus",
      "Permits, housing, BSN and settling-in",
    ],
    cons: ["Rotterdam-focused; confirm coverage for other cities", "Scope and fees vary; get written quote"],
    whoShouldChoose: "Expats moving to Rotterdam who want combined immigration and relocation support from a local provider.",
    isOfficial: false,
    sourcePages: [
      "https://rotterdamexpatcentre.nl/location/pasbms-immigration-and-relocation-services/",
    ],
    lastChecked: RELOCATION_AGENCIES_LAST_CHECKED,
  },
  {
    slug: "hr-expat-services",
    name: "HR Expat Services",
    providerUrl: "https://www.hrexpatservices.com",
    logoUrl: "https://logo.clearbit.com/hrexpatservices.com",
    sourceEcosystems: ["Rotterdam Expat Centre"],
    cityRelevance: ["Rotterdam", "Region Rotterdam"],
    shortDescription:
      "Expat and relocation support services, including immigration, housing, and HR-related settling-in for internationals.",
    servicesOrProducts: [
      "Immigration and permit support",
      "Housing and registration",
      "HR and onboarding support",
      "Settling-in for employees",
    ],
    serviceTags: ["relocation", "expat advice", "immigration", "housing", "HR support"],
    typicalCost: "Often employer-funded; packages from ~€1,000. Individual and corporate quotes on request.",
    pros: [
      "HR and onboarding focus for employers",
      "Immigration, housing and registration",
      "Settling-in for employees",
    ],
    cons: ["Often employer-funded; individual pricing on request", "Rotterdam-area focus"],
    whoShouldChoose: "Employers and HR teams in the Rotterdam area needing expat onboarding and relocation support for new hires.",
    isOfficial: false,
    sourcePages: ["https://rotterdamexpatcentre.nl/location/hr-expat-services/"],
    lastChecked: RELOCATION_AGENCIES_LAST_CHECKED,
  },







] as Omit<RelocationProviderRecord, "priority">[];

export const relocationAgenciesProviders: RelocationProviderRecord[] =
  attachSequentialPriority(RELOCATION_AGENCIES_DATA);

const RELOCATION_SERVICES_ADDITIONAL_DATA = [







  {
    slug: "packimpex",
    name: "Packimpex",
    providerUrl: "https://www.packimpex.com",
    logoUrl: "https://logo.clearbit.com/packimpex.com",
    sourceEcosystems: ["IN Amsterdam"],
    cityRelevance: ["Amsterdam", "Region Amsterdam", "Netherlands"],
    shortDescription:
      "Relocation and moving services including immigration, housing, tax, and settling-in support for internationals.",
    servicesOrProducts: [
      "Immigration and housing support",
      "Tax and settling-in",
      "Moving and relocation coordination",
    ],
    serviceTags: ["relocation", "housing", "immigration", "tax", "settling in"],
    typicalCost: "Varies by scope. Check directly for quote.",
    pros: [
      "Immigration, housing, tax and settling-in in one place",
      "Moving and relocation coordination",
      "Amsterdam and Netherlands coverage",
    ],
    cons: ["Pricing not published; request a quote", "Confirm scope in writing"],
    whoShouldChoose: "Expats who want combined immigration, housing, tax and settling-in support, especially in the Amsterdam area.",
    isOfficial: false,
    sourcePages: [
      "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/packimpex",
    ],
    lastChecked: RELOCATION_SERVICES_LAST_CHECKED,
  },
  {
    slug: "eurohome-relocation-services",
    name: "Eurohome Relocation Services",
    providerUrl: "https://www.eurohome.nl",
    logoUrl: "https://logo.clearbit.com/eurohome.nl",
    sourceEcosystems: ["The Hague International Centre"],
    cityRelevance: ["The Hague", "Den Haag", "Region The Hague"],
    shortDescription:
      "Home finding, immigration, school search, moving, and local registration support for internationals and families.",
    servicesOrProducts: [
      "Home finding",
      "Immigration coordination",
      "School search",
      "Moving and local registration",
    ],
    serviceTags: ["relocation", "housing", "immigration", "family support", "school search"],
    typicalCost: "Packages vary. Confirm scope and quote with provider.",
    pros: [
      "Home finding, immigration and school search",
      "Moving and local registration",
      "Family-focused; The Hague region",
    ],
    cons: ["The Hague–focused; check coverage elsewhere", "Quote required for pricing"],
    whoShouldChoose: "Families moving to The Hague who need home finding, school search and immigration in one package.",
    isOfficial: false,
    sourcePages: [
      "https://www.thehagueinternationalcentre.nl/partners/relocation-services/eurohome-relocation-services",
    ],
    lastChecked: RELOCATION_SERVICES_LAST_CHECKED,
  },
  {
    slug: "royal-de-gruijter-co",
    name: "Royal De Gruijter & Co.",
    providerUrl: "https://www.royaldegruijter.com",
    logoUrl: "https://logo.clearbit.com/royaldegruijter.com",
    sourceEcosystems: ["The Hague International Centre"],
    cityRelevance: ["The Hague", "Den Haag", "Region The Hague"],
    shortDescription:
      "Relocation and moving services for internationals and families in the The Hague region.",
    servicesOrProducts: [
      "Relocation and moving",
      "Housing and registration support",
    ],
    serviceTags: ["relocation", "housing", "moving", "family support"],
    typicalCost: "Check directly for scope and pricing.",
    pros: [
      "Relocation and moving in one place",
      "Housing and registration support",
      "The Hague region experience",
    ],
    cons: ["Pricing not published; request quote", "Region-focused"],
    whoShouldChoose: "Expats and families relocating to The Hague who want moving and housing support from a local provider.",
    isOfficial: false,
    sourcePages: [
      "https://www.thehagueinternationalcentre.nl/partners/relocation-services/royal-de-gruijter-co",
    ],
    lastChecked: RELOCATION_SERVICES_LAST_CHECKED,
  },
  {
    slug: "utility-direct",
    name: "Utility Direct",
    providerUrl: "https://www.utilitydirect.nl",
    logoUrl: "https://logo.clearbit.com/utilitydirect.nl",
    sourceEcosystems: ["Rotterdam Expat Centre"],
    cityRelevance: ["Rotterdam", "Region Rotterdam"],
    shortDescription:
      "Utility and practical setup support for expats; often used alongside relocation and housing services.",
    servicesOrProducts: [
      "Utility setup",
      "Practical settling-in",
    ],
    serviceTags: ["utilities", "settling in", "expat support"],
    typicalCost: "Check directly.",
    pros: [
      "Utility setup and practical settling-in",
      "Often used alongside relocation and housing services",
      "Rotterdam expat centre partner",
    ],
    cons: ["Focused on utilities and practical setup; not full relocation", "Pricing on request"],
    whoShouldChoose: "Expats who need utility and practical setup support, often in combination with another relocation or housing provider.",
    isOfficial: false,
    sourcePages: ["https://rotterdamexpatcentre.nl/location/utility-direct/"],
    lastChecked: RELOCATION_SERVICES_LAST_CHECKED,
  },







] as Omit<RelocationProviderRecord, "priority">[];

export const relocationServicesProviders: RelocationProviderRecord[] = attachSequentialPriority([
  ...RELOCATION_AGENCIES_DATA,
  ...RELOCATION_SERVICES_ADDITIONAL_DATA,
]);

const housingPlatformsData = [







  {
    slug: "funda",
    name: "Funda",
    logoUrl: "https://www.google.com/s2/favicons?domain=www.funda.nl&sz=128",
    providerUrl: "https://www.funda.nl/en/",
    categoryType: "rental-and-sale-marketplace",
    shortDescription: "Major Dutch platform for homes for sale and rent. Listings from estate agents and landlords across the Netherlands.",
    bestFor: ["long-term rental", "buying research", "apartments", "houses"],
    sourceReferences: ["https://www.funda.nl/en/"],
    feeNote: "Free to browse; agent or landlord fees may apply.",
    cityRelevance: ["Netherlands-wide"],
    isOfficial: false,
    lastChecked: HOUSING_RENTAL_LAST_CHECKED,
    pros: ["Largest NL property portal", "Free to browse", "Sale and rent", "Nationwide coverage"],
    cons: ["Listings from agents; no direct landlord filter", "Competition high in popular cities"],
    whoShouldChoose: "Expats looking for long-term rentals or buying research who want the main Dutch portal.",
  },
  {
    slug: "housinganywhere",
    name: "HousingAnywhere",
    logoUrl: "/images/affiliates/logos/housinganywhere.svg",
    providerUrl: "https://housinganywhere.com/",
    categoryType: "mid-term-rental-platform",
    shortDescription: "Online platform connecting people looking for a home with landlords. Not a real estate agency. Mid- and long-term furnished rentals.",
    bestFor: ["expats", "students", "mid-term stays", "furnished rental"],
    sourceReferences: [
      "https://www.iamsterdam.com/en/live-work-study/study/find-student-accommodation",
      "https://www.iamsterdam.com/en/live-work-study/living/housing/temporary-accommodation-in-amsterdam",
    ],
    feeNote: "Check platform pricing and booking fees.",
    cityRelevance: ["Amsterdam", "Netherlands", "Europe"],
    isOfficial: false,
    lastChecked: HOUSING_RENTAL_LAST_CHECKED,
    pros: ["Expat- and student-focused", "Furnished mid-term", "Multiple European cities", "Referenced by I amsterdam"],
    cons: ["Booking fees may apply", "Availability varies by city and season"],
    whoShouldChoose: "Expats and students needing furnished mid-term housing before or just after arrival.",
  },
  {
    slug: "pararius",
    name: "Pararius",
    logoUrl: "/images/affiliates/logos/pararius.svg",
    providerUrl: "https://www.pararius.com/",
    categoryType: "long-term-rental-marketplace",
    shortDescription: "Rental listing platform for apartments and houses in the Netherlands. Listings from agents and landlords.",
    bestFor: ["long-term rental", "expats", "apartments"],
    sourceReferences: ["https://www.pararius.com/"],
    feeNote: "Free to browse; agent or landlord fees may apply.",
    cityRelevance: ["Netherlands-wide"],
    isOfficial: false,
    lastChecked: HOUSING_RENTAL_LAST_CHECKED,
    pros: ["Free to browse", "Rental-focused", "English option", "Wide coverage"],
    cons: ["Mix of agent and landlord listings", "Application process per listing"],
    whoShouldChoose: "Expats searching for long-term apartments or houses who want a rental-dedicated platform.",
  },
  {
    slug: "kamernet",
    name: "Kamernet",
    logoUrl: "https://www.google.com/s2/favicons?domain=www.kamernet.nl&sz=128",
    providerUrl: "https://www.kamernet.nl/",
    categoryType: "room-platform",
    shortDescription: "Platform for room rentals and shared housing. Popular with students and young professionals.",
    bestFor: ["rooms", "students", "shared housing"],
    sourceReferences: ["https://www.kamernet.nl/"],
    feeNote: "Subscription or per-contact fees; check site.",
    cityRelevance: ["Netherlands-wide"],
    isOfficial: false,
    lastChecked: HOUSING_RENTAL_LAST_CHECKED,
    pros: ["Largest room platform in NL", "Students and young professionals", "Direct landlord contact"],
    cons: ["Paid subscription or per-contact fees", "Quality of listings varies"],
    whoShouldChoose: "Students and young professionals looking for a single room or shared housing.",
  },
  {
    slug: "holland2stay",
    name: "Holland2Stay",
    logoUrl: "https://www.google.com/s2/favicons?domain=www.holland2stay.com&sz=128",
    providerUrl: "https://www.holland2stay.com/",
    categoryType: "furnished-rental-platform",
    shortDescription: "Furnished apartments and studios for short- and mid-term stays. Often used by expats and internationals.",
    bestFor: ["furnished rental", "expats", "short-term", "mid-term"],
    sourceReferences: ["https://www.holland2stay.com/"],
    feeNote: "Check platform for pricing and minimum stay.",
    cityRelevance: ["Rotterdam", "Amsterdam", "Eindhoven", "Other cities"],
    isOfficial: false,
    lastChecked: HOUSING_RENTAL_LAST_CHECKED,
    pros: ["Furnished apartments and studios", "Short- and mid-term", "Expat-oriented", "Multiple cities"],
    cons: ["Minimum stay and pricing vary", "Limited availability in peak periods"],
    whoShouldChoose: "Expats needing furnished short- or mid-term housing in Rotterdam, Amsterdam, or Eindhoven.",
  },
  {
    slug: "flatio",
    name: "Flatio",
    logoUrl: "https://www.google.com/s2/favicons?domain=flatio.com&sz=128",
    providerUrl: "https://flatio.com/",
    categoryType: "mid-term-rental-platform",
    shortDescription: "Furnished mid-term rentals. Online platform for medium-length stays, often used by relocating professionals and students.",
    bestFor: ["mid-term stays", "furnished rental", "expats", "students"],
    sourceReferences: [
      "https://www.iamsterdam.com/en/live-work-study/living/housing/temporary-accommodation-in-amsterdam",
    ],
    feeNote: "Check platform for fees and booking terms.",
    cityRelevance: ["Amsterdam", "Europe"],
    isOfficial: false,
    lastChecked: HOUSING_RENTAL_LAST_CHECKED,
    pros: ["Mid-term furnished focus", "Referenced by I amsterdam", "Professionals and students", "European coverage"],
    cons: ["Fees and minimum stay apply", "Availability city-dependent"],
    whoShouldChoose: "Relocating professionals and students looking for furnished mid-term stays.",
  },
  {
    slug: "nestpick",
    name: "Nestpick",
    logoUrl: "https://www.google.com/s2/favicons?domain=www.nestpick.com&sz=128",
    providerUrl: "https://www.nestpick.com/",
    categoryType: "mid-term-rental-platform",
    shortDescription: "Furnished mid-term and short-term rentals. Aggregates listings for flexible stays.",
    bestFor: ["mid-term stays", "furnished rental", "expats", "short-term"],
    sourceReferences: [
      "https://www.iamsterdam.com/en/live-work-study/living/housing/temporary-accommodation-in-amsterdam",
    ],
    feeNote: "Check platform for fees.",
    cityRelevance: ["Amsterdam", "Europe"],
    isOfficial: false,
    lastChecked: HOUSING_RENTAL_LAST_CHECKED,
    pros: ["Aggregates multiple providers", "Short- and mid-term", "Flexible stays", "European cities"],
    cons: ["Fees vary by listing", "Third-party aggregation"],
    whoShouldChoose: "Expats wanting one place to compare furnished short- and mid-term options across cities.",
  },
  {
    slug: "student-experience",
    name: "Student Experience",
    logoUrl: "https://www.google.com/s2/favicons?domain=www.studentexperience.com&sz=128",
    providerUrl: "https://www.studentexperience.com/",
    categoryType: "student-housing-platform",
    shortDescription: "Student accommodation and furnished rooms. Focus on international students and young professionals.",
    bestFor: ["students", "rooms", "furnished", "Amsterdam"],
    sourceReferences: ["https://www.studentexperience.com/"],
    feeNote: "Check platform for pricing.",
    cityRelevance: ["Amsterdam", "Netherlands"],
    isOfficial: false,
    lastChecked: HOUSING_RENTAL_LAST_CHECKED,
    pros: ["Student-focused", "Furnished rooms", "Amsterdam presence", "International students"],
    cons: ["City coverage limited", "Pricing and availability vary"],
    whoShouldChoose: "International students and young professionals looking for furnished rooms in Amsterdam.",
  },
  {
    slug: "short-stay-group",
    name: "Short Stay Group",
    logoUrl: "https://www.google.com/s2/favicons?domain=www.shortstaygroup.com&sz=128",
    providerUrl: "https://www.shortstaygroup.com/",
    categoryType: "temporary-accommodation",
    shortDescription: "Short-stay and serviced apartments. Corporate and temporary housing.",
    bestFor: ["temporary accommodation", "short-stay", "corporate housing", "serviced apartments"],
    sourceReferences: ["https://www.shortstaygroup.com/"],
    feeNote: "Rates and minimum stay vary; check directly.",
    cityRelevance: ["Amsterdam", "Netherlands"],
    isOfficial: false,
    lastChecked: HOUSING_RENTAL_LAST_CHECKED,
    pros: ["Serviced apartments", "Corporate and temporary", "Short-stay focus", "Amsterdam and NL"],
    cons: ["Rates and minimum stay vary", "Often premium pricing"],
    whoShouldChoose: "Expats needing short-stay or corporate serviced apartments for the first weeks or months.",
  },







] as Omit<HousingPlatformRecord, "priority">[];

export const housingPlatforms: HousingPlatformRecord[] = attachSequentialPriority(housingPlatformsData);

const rentalAgenciesData = [







  {
    slug: "mva-certified-expat-broker",
    name: "MVA Certified Expat Brokers",
    providerUrl: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/mva-certified-expat-broker",
    providerType: "expat-broker-network",
    shortDescription:
      "I amsterdam partner network of certified expat brokers who can help with renting, leasing out, or valuing a home and give information and advice about the Amsterdam housing market. I amsterdam states they represent a large share of the expat housing market in the Amsterdam Area.",
    bestFor: ["long-term rental", "expats", "Amsterdam", "viewing support", "market advice"],
    cityRelevance: ["Amsterdam", "Amsterdam Area"],
    sourceReferences: [
      "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/mva-certified-expat-broker",
    ],
    feeNote: "Fees vary by broker; check directly.",
    isOfficial: false,
    lastChecked: HOUSING_RENTAL_LAST_CHECKED,
    pros: ["Certified expat broker network", "Viewing and market advice", "Strong Amsterdam presence"],
    cons: ["Fees vary by broker; compare before committing"],
    whoShouldChoose: "Expats in the Amsterdam area who want a vetted broker for long-term rental, viewings, or market advice.",
  },
  {
    slug: "corporate-housing-living",
    name: "Corporate Housing Living",
    providerUrl: "https://www.thehagueinternationalcentre.nl/partners/housing/corporate-housing-living",
    providerType: "rental-service",
    shortDescription:
      "The Hague International Centre housing partner. Provides housing and rental-related services for internationals moving to the The Hague region.",
    bestFor: ["long-term rental", "expats", "The Hague", "corporate housing"],
    cityRelevance: ["The Hague", "Den Haag", "Region The Hague"],
    sourceReferences: [
      "https://www.thehagueinternationalcentre.nl/partners/housing/corporate-housing-living",
    ],
    feeNote: "Check directly with provider.",
    isOfficial: false,
    lastChecked: HOUSING_RENTAL_LAST_CHECKED,
    pros: ["The Hague International Centre partner", "Corporate and long-term rental focus", "Internationals-oriented"],
    cons: ["Confirm fees and scope directly"],
    whoShouldChoose: "Internationals moving to The Hague who need corporate or long-term rental support.",
  },
  {
    slug: "serviced-apartments-by-preferred",
    name: "Serviced Apartments by Preferred",
    providerUrl: "https://www.thehagueinternationalcentre.nl/partners/housing/serviced-apartments-by-preferred",
    providerType: "serviced-apartments",
    shortDescription:
      "The Hague International Centre housing partner. Serviced and temporary apartment options for internationals in the The Hague region.",
    bestFor: ["temporary accommodation", "serviced apartments", "The Hague", "expats"],
    cityRelevance: ["The Hague", "Den Haag", "Region The Hague"],
    sourceReferences: [
      "https://www.thehagueinternationalcentre.nl/partners/housing/serviced-apartments-by-preferred",
    ],
    feeNote: "Check directly with provider.",
    isOfficial: false,
    lastChecked: HOUSING_RENTAL_LAST_CHECKED,
    pros: ["Serviced and temporary options", "The Hague focus", "Suitable for short stays"],
    cons: ["Pricing and availability vary; confirm directly"],
    whoShouldChoose: "Internationals needing temporary or serviced apartments in The Hague.",
  },
  {
    slug: "corporate-housing-factory",
    name: "Corporate Housing Factory",
    providerUrl: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/corporate-housing-factory",
    providerType: "rental-service",
    shortDescription:
      "I amsterdam partner. Corporate housing and rental services for expats and internationals in the Amsterdam area.",
    bestFor: ["furnished rental", "expats", "Amsterdam", "corporate housing"],
    cityRelevance: ["Amsterdam", "Amsterdam Area"],
    sourceReferences: [
      "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/corporate-housing-factory",
    ],
    feeNote: "Check directly with provider.",
    isOfficial: false,
    lastChecked: HOUSING_RENTAL_LAST_CHECKED,
    pros: ["Corporate housing specialist", "Furnished rental", "I amsterdam partner"],
    cons: ["Confirm fees and minimum stay"],
    whoShouldChoose: "Expats and companies in Amsterdam needing furnished or corporate housing.",
  },
  {
    slug: "city-retreat",
    name: "City Retreat",
    providerUrl: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/city-retreat",
    providerType: "rental-service",
    shortDescription:
      "I amsterdam partner. Housing and accommodation services for expats and internationals in Amsterdam.",
    bestFor: ["furnished rental", "expats", "Amsterdam", "short-term", "mid-term"],
    cityRelevance: ["Amsterdam", "Amsterdam Area"],
    sourceReferences: [
      "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/city-retreat",
    ],
    feeNote: "Check directly with provider.",
    isOfficial: false,
    lastChecked: HOUSING_RENTAL_LAST_CHECKED,
    pros: ["Short- and mid-term options", "Amsterdam focus", "Expat-oriented"],
    cons: ["Fees and availability vary; verify directly"],
    whoShouldChoose: "Expats in Amsterdam needing furnished short- or mid-term accommodation.",
  },
  {
    slug: "woon",
    name: "!WOON",
    providerUrl: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/woon",
    websiteUrl: "https://www.woon.nl",
    providerType: "tenant-support",
    shortDescription:
      "I amsterdam partner. Tenant support and housing rights information. Focus on tenant rights, dispute support, and housing advice—distinct from private rental agencies that focus on search and viewings.",
    bestFor: ["tenant rights", "housing advice", "dispute support", "Amsterdam"],
    cityRelevance: ["Amsterdam", "Amsterdam Area"],
    sourceReferences: [
      "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/woon",
    ],
    feeNote: "Tenant support services; check for free or low-cost options.",
    isOfficial: false,
    lastChecked: HOUSING_RENTAL_LAST_CHECKED,
    pros: ["Tenant rights and dispute support", "Housing advice", "May offer free or low-cost services"],
    cons: ["Not a rental search agency; focus is rights and advice"],
    whoShouldChoose: "Tenants in Amsterdam who need rights advice, dispute support, or housing information.",
  },
  {
    slug: "rsh-relocation",
    name: "RSH Relocation and Immigration Services",
    providerUrl: "https://www.thehagueinternationalcentre.nl/partners/relocation-services/rsh-relocation-and-immigration-services",
    providerType: "relocation-with-rental",
    shortDescription:
      "The Hague International Centre partner. Relocation and immigration services including housing and registration support for internationals in the The Hague region.",
    bestFor: ["relocation", "housing search", "expats", "The Hague", "family support"],
    cityRelevance: ["The Hague", "Den Haag", "Region The Hague"],
    sourceReferences: [
      "https://www.thehagueinternationalcentre.nl/partners/relocation-services/rsh-relocation-and-immigration-services",
    ],
    feeNote: "Check directly; often bundled with relocation packages.",
    isOfficial: false,
    lastChecked: HOUSING_RENTAL_LAST_CHECKED,
    pros: ["Immigration and housing in one", "Family support", "The Hague specialist"],
    cons: ["Packages and fees vary; confirm scope"],
    whoShouldChoose: "Internationals moving to The Hague who want combined immigration and housing support.",
  },
  {
    slug: "relocaid",
    name: "RelocAid",
    providerUrl: "https://www.thehagueinternationalcentre.nl/partners/relocation-services/relocaid",
    providerType: "relocation-with-rental",
    shortDescription:
      "The Hague International Centre partner. Relocation support including housing search, registration, and settling-in for expats and families in The Hague.",
    bestFor: ["relocation", "housing search", "expats", "The Hague", "family support"],
    cityRelevance: ["The Hague", "Den Haag", "Region The Hague"],
    sourceReferences: [
      "https://www.thehagueinternationalcentre.nl/partners/relocation-services/relocaid",
    ],
    feeNote: "Check directly; often bundled with relocation packages.",
    isOfficial: false,
    lastChecked: HOUSING_RENTAL_LAST_CHECKED,
    pros: ["Housing, registration, settling-in", "Family-focused", "The Hague partner"],
    cons: ["Fees often bundled; clarify what is included"],
    whoShouldChoose: "Expats and families relocating to The Hague who want full settling-in support.",
  },
  {
    slug: "pasbms",
    name: "PASBMS Immigration and Relocation Services",
    providerUrl: "https://rotterdamexpatcentre.nl/location/pasbms-immigration-and-relocation-services/",
    providerType: "relocation-with-rental",
    shortDescription:
      "Rotterdam Expat Centre partner. Immigration and relocation services including housing and practical support for internationals in the Rotterdam region.",
    bestFor: ["relocation", "housing", "Rotterdam", "expats", "immigration"],
    cityRelevance: ["Rotterdam", "Region Rotterdam"],
    sourceReferences: [
      "https://rotterdamexpatcentre.nl/location/pasbms-immigration-and-relocation-services/",
    ],
    feeNote: "Check directly.",
    isOfficial: false,
    lastChecked: HOUSING_RENTAL_LAST_CHECKED,
    pros: ["Immigration and housing combined", "Rotterdam Expat Centre partner", "Practical support"],
    cons: ["Confirm fees and package scope"],
    whoShouldChoose: "Internationals moving to Rotterdam who need immigration and housing support together.",
  },
  {
    slug: "hr-expat-services",
    name: "HR Expat Services",
    providerUrl: "https://rotterdamexpatcentre.nl/location/hr-expat-services/",
    providerType: "relocation-with-rental",
    shortDescription:
      "Rotterdam Expat Centre partner. Expat and relocation services including housing and settlement support in the Rotterdam area.",
    bestFor: ["relocation", "housing", "Rotterdam", "expats"],
    cityRelevance: ["Rotterdam", "Region Rotterdam"],
    sourceReferences: [
      "https://rotterdamexpatcentre.nl/location/hr-expat-services/",
    ],
    feeNote: "Check directly.",
    isOfficial: false,
    lastChecked: HOUSING_RENTAL_LAST_CHECKED,
    pros: ["Rotterdam-focused", "Housing and settlement support", "Expat Centre partner"],
    cons: ["Verify services and fees directly"],
    whoShouldChoose: "Expats relocating to Rotterdam who want housing and settlement support.",
  },







] as Omit<RentalAgencyRecord, "priority">[];

export const rentalAgencies: RentalAgencyRecord[] = attachSequentialPriority(rentalAgenciesData);

const startupFacilitatorsData = [







  { slug: "42workspace", name: "42workspace", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://www.42workspace.com/startup-visa-application/", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Co-working and startup visa facilitation for tech founders.", typicalCost: "€0–€2,000 typical; confirm with facilitator", cityRelevance: ["Eindhoven"], servicesOffered: ["Startup visa support", "Co-working space", "Community & events"], pros: ["Tech-focused co-working", "Community and events"], cons: ["Eindhoven-only; confirm capacity"], whoShouldChoose: "Tech founders in or moving to Eindhoven who want co-working and visa support." },
  { slug: "antler", name: "Antler", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://www.antler.co/", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Global early-stage VC and accelerator with Dutch startup visa programme.", typicalCost: "Equity-based; investment in return for stake", cityRelevance: ["Amsterdam", "Netherlands"], servicesOffered: ["Startup visa support", "Investment", "Accelerator programme", "Global network"], pros: ["Investment and accelerator", "Global network", "No upfront fee"], cons: ["Equity required", "Competitive"], whoShouldChoose: "Founders seeking investment and accelerator support in exchange for equity." },
  { slug: "brightlands-campus-heerlen", name: "Brightlands Campus Heerlen Management & Development B.V.", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://www.brightlands.com/brightlands-smart-services-campus", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Smart services campus and innovation ecosystem in Limburg.", typicalCost: "€0–€2,500+ typical; confirm scope", cityRelevance: ["Heerlen", "Limburg"], servicesOffered: ["Startup visa support", "Campus & facilities", "Innovation programmes"] },
  { slug: "brightlands-chemelot-campus", name: "Brightlands Chemelot Campus", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://www.brightlands.com/en/brightlands-chemelot-campus/startup-support", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Chemistry and materials innovation campus with startup support.", typicalCost: "€0–€3,000+ typical; lab access may cost extra", cityRelevance: ["Geleen", "Limburg"], servicesOffered: ["Startup visa support", "Lab & innovation facilities", "Sector-specific programmes"] },
  { slug: "builders", name: "Builders", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://www.builders.studio/", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Studio and accelerator for early-stage startups.", typicalCost: "€0–€2,500 typical; confirm with facilitator", cityRelevance: ["Amsterdam"], servicesOffered: [...DEFAULT_SERVICES] },
  { slug: "cic", name: "CIC", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://innovation.cic.com/cic-rotterdam-startup-visa", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Cambridge Innovation Center’s Rotterdam hub and startup visa programme.", typicalCost: "From ~€500/mo for space; programme fees vary", cityRelevance: ["Rotterdam"], servicesOffered: ["Startup visa support", "Office & lab space", "Community", "Programme"], pros: ["Transparent space pricing", "Office and lab space", "International brand"], cons: ["Programme fees separate; confirm total cost"], whoShouldChoose: "Founders who want flexible space in Rotterdam and clear monthly pricing." },
  { slug: "crosspring", name: "Crosspring", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://www.uglobally.com/startup-visa", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Startup visa and venture-building support.", typicalCost: "€0–€2,500 typical; confirm with facilitator", cityRelevance: ["Netherlands"], servicesOffered: [...DEFAULT_SERVICES] },
  { slug: "dockwize", name: "Dockwize", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://www.dockwize.nl/programmas/the-startup-visa-program", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Startup visa programme and incubation in the Rotterdam area.", typicalCost: "€0–€2,500 typical; confirm with facilitator", cityRelevance: ["Rotterdam"], servicesOffered: ["Startup visa support", "Programme & mentoring", "Office space"] },
  { slug: "dutchbasecamp", name: "DutchBasecamp", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://dutchbasecamp.org/startup-visa", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Community and programme for international founders and startup visa.", typicalCost: "€0–€2,500 typical; confirm with facilitator", cityRelevance: ["Netherlands"], servicesOffered: ["Startup visa support", "Community", "Programme & events"] },
  { slug: "erasmus-centre-for-entrepreneurship", name: "Erasmus Centre for Entrepreneurship", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://www.ece.nl/", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Erasmus University’s centre for entrepreneurship and startup visa.", typicalCost: "€0–€2,500 typical; confirm with facilitator", cityRelevance: ["Netherlands"], servicesOffered: ["Startup visa support", "Education & programmes", "University network"] },
  { slug: "frank-and-the-backs", name: "Frank & the Backs", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://www.frankandthebacks.com/", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Creative and innovation hub with startup visa facilitation.", typicalCost: "€0–€2,500 typical; confirm with facilitator", cityRelevance: ["Netherlands"], servicesOffered: [...DEFAULT_SERVICES] },
  { slug: "glass-frog-ventures", name: "Glass Frog Ventures", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://glassfrogventures.com/", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Venture builder and startup visa facilitator.", typicalCost: "€0–€2,500 typical; confirm with facilitator", cityRelevance: ["Netherlands"], servicesOffered: ["Startup visa support", "Venture building", "Investment"] },
  { slug: "hightechxl", name: "HighTechXL", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://hightechxl.com/", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Deep-tech accelerator and startup visa support in Eindhoven.", typicalCost: "Programme fees; often €0–€3,000+ depending on track", cityRelevance: ["Eindhoven"], servicesOffered: ["Startup visa support", "Deep-tech accelerator", "Corporate & university network"], pros: ["Deep-tech focus", "Eindhoven ecosystem"], cons: ["Sector-specific", "Confirm programme fees"], whoShouldChoose: "Deep-tech founders in or moving to Eindhoven." },
  { slug: "hsd-campus", name: "HSD Campus", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://hsdcampus.nl/en/", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Security and safety innovation campus in The Hague.", typicalCost: "€0–€2,500 typical; confirm with facilitator", cityRelevance: ["The Hague", "Den Haag"], servicesOffered: ["Startup visa support", "Security ecosystem", "Programmes & facilities"] },
  { slug: "imk", name: "IMK - Instituut voor Midden- en Kleinbedrijf", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://imk.nl/innovative-startups/", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Support for innovative SMEs and startup visa applicants.", typicalCost: "€0–€2,500 typical; confirm with facilitator", cityRelevance: ["Netherlands"], servicesOffered: ["Startup visa support", "SME & innovation support", "Advisory"] },
  { slug: "inqubator-leeuwarden", name: "Inqubator Leeuwarden", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://www.startupvisa.nl/", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Incubator in Leeuwarden offering startup visa facilitation.", typicalCost: "€0–€2,000 typical; confirm with facilitator", cityRelevance: ["Leeuwarden", "Friesland"], servicesOffered: ["Startup visa support", "Incubation", "Regional network"] },
  { slug: "nom", name: "NOM - Investerings- en ontwikkelingsmaatschappij Noord-Nederland", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://www.nom.nl/", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Regional development and investment company; startup visa facilitator for the North.", typicalCost: "Often linked to investment; confirm terms", cityRelevance: ["Groningen", "Friesland", "Drenthe", "Noord-Nederland"], servicesOffered: ["Startup visa support", "Investment", "Regional development"] },
  { slug: "novel-t", name: "Novel-T", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://www.startupvisa.nl/", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Twente-based innovation centre and startup visa programme.", typicalCost: "€0–€2,500 typical; confirm with facilitator", cityRelevance: ["Enschede", "Twente"], servicesOffered: ["Startup visa support", "Innovation ecosystem", "Programmes"] },
  { slug: "orange-sports-forum", name: "Orange Sports Forum", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://www.orangesportsforum.com/startup-facilitator/", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Sports innovation and startup visa facilitation.", typicalCost: "€0–€2,500 typical; confirm with facilitator", cityRelevance: ["Netherlands"], servicesOffered: ["Startup visa support", "Sports & innovation", "Network"] },
  { slug: "planet-b-io", name: "Planet B.io", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://www.planet-b.io/", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Biotech and life sciences innovation hub with startup visa.", typicalCost: "€0–€3,000+ typical; lab access may add cost", cityRelevance: ["Rotterdam"], servicesOffered: ["Startup visa support", "Biotech ecosystem", "Lab & facilities"] },
  { slug: "portxl", name: "PortXL", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://portxl.org/", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Port and maritime innovation accelerator in Rotterdam.", typicalCost: "Programme fees; often €0–€3,000+", cityRelevance: ["Rotterdam"], servicesOffered: ["Startup visa support", "Maritime & port innovation", "Accelerator"] },
  { slug: "rockstart", name: "Rockstart", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://www.rockstart.com/", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Early-stage accelerator with startup visa programme.", typicalCost: "Programme fees; typically €0–€5,000+ depending on track", cityRelevance: ["Amsterdam"], servicesOffered: ["Startup visa support", "Accelerator", "Investment", "Network"], pros: ["Accelerator and investment", "Strong network", "Amsterdam base"], cons: ["Programme fees; confirm current rates"], whoShouldChoose: "Early-stage founders in Amsterdam seeking accelerator and possible investment." },
  { slug: "space-business-innovation-centre-noordwijk", name: "Space Business Innovation Centre Noordwijk", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://www.sbicnoordwijk.nl/", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Space and aerospace innovation centre; startup visa facilitator.", typicalCost: "€0–€3,000+ typical; confirm with facilitator", cityRelevance: ["Noordwijk"], servicesOffered: ["Startup visa support", "Space sector ecosystem", "Facilities"] },
  { slug: "startdock", name: "Startdock", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://startdock.nl/en/", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Startup hub and startup visa programme in the Rotterdam region.", typicalCost: "€0–€2,500 typical; confirm with facilitator", cityRelevance: ["Rotterdam"], servicesOffered: ["Startup visa support", "Co-working & programmes", "Community"] },
  { slug: "startlife", name: "StartLife", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://start-life.nl/", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Agri-food tech accelerator and startup visa facilitator.", typicalCost: "€0–€3,000+ typical; accelerator may have fees", cityRelevance: ["Wageningen", "Netherlands"], servicesOffered: ["Startup visa support", "Agri-food tech", "Accelerator & investment"] },
  { slug: "stichting-aerospace-innovation-hub", name: "Stichting Aerospace Innovation Hub", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://aerospaceinnovationhub.nl/rvo-facilitator/", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Aerospace innovation hub and startup visa support.", typicalCost: "€0–€2,500 typical; confirm with facilitator", cityRelevance: ["Netherlands"], servicesOffered: ["Startup visa support", "Aerospace ecosystem", "Programmes"] },
  { slug: "tnw-amsterdam", name: "TNW Amsterdam", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://thenextweb.com/spaces/startup-visa", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Tech media and conference; startup visa programme and space in Amsterdam.", typicalCost: "Space & programme fees; often €200–€800/mo+", cityRelevance: ["Amsterdam"], servicesOffered: ["Startup visa support", "Events & community", "Amsterdam space"], pros: ["Tech and events brand", "Amsterdam space", "Community"], cons: ["Fees vary; confirm total cost"], whoShouldChoose: "Tech founders in Amsterdam who value events and community." },
  { slug: "unusual-space", name: "Unusual Space", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://theunusualspace.com/", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Co-working and startup visa facilitation.", typicalCost: "€0–€2,500 typical; confirm with facilitator", cityRelevance: ["Netherlands"], servicesOffered: [...DEFAULT_SERVICES] },
  { slug: "utrechtinc", name: "UtrechtInc", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://utrechtinc.nl/?lang=en", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Utrecht-based incubator and startup visa programme.", typicalCost: "€0–€2,500 typical; confirm with facilitator", cityRelevance: ["Utrecht"], servicesOffered: ["Startup visa support", "Incubation", "Utrecht ecosystem"], pros: ["Utrecht ecosystem", "Incubation"], cons: ["Confirm availability"], whoShouldChoose: "Founders in or moving to Utrecht." },
  { slug: "vu-starthub", name: "VU StartHub B.V.", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://vu-ondernemend.nl/en/startup-visa-facilitator/", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Vrije Universiteit Amsterdam’s startup hub and visa facilitator.", typicalCost: "Often €0–€2,000; university-linked", cityRelevance: ["Amsterdam"], servicesOffered: ["Startup visa support", "University ecosystem", "Programmes"], pros: ["VU Amsterdam ecosystem", "University programmes"], cons: ["May prioritise VU community"], whoShouldChoose: "Founders who benefit from Vrije Universiteit Amsterdam ecosystem." },
  { slug: "water-alliance", name: "Water Alliance", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://www.wateralliance.nl/en", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Water technology cluster and startup visa facilitator.", typicalCost: "€0–€2,500 typical; confirm with facilitator", cityRelevance: ["Leeuwarden", "Friesland", "Netherlands"], servicesOffered: ["Startup visa support", "Water tech ecosystem", "Network"] },
  { slug: "we-are-changemakers", name: "We are changemakers", source: "RVO", sourceHref: RVO_SOURCE, websiteUrl: "https://wearechangemakers.org/", isOfficial: true, lastChecked: STARTUP_DATA_LAST_CHECKED, shortDescription: "Social impact and changemaker community; startup visa support.", typicalCost: "€0–€2,500 typical; confirm with facilitator", cityRelevance: ["Netherlands"], servicesOffered: ["Startup visa support", "Impact & community", "Programmes"] },







] as Omit<StartupFacilitatorRecord, "priority">[];

export const startupFacilitators: StartupFacilitatorRecord[] = attachSequentialPriority(startupFacilitatorsData);

export const relocationAgenciesMetadata = {
  slug: "relocation-agencies",
  parent: "services",
  country: "netherlands",
  sourceModel: RELOCATION_AGENCIES_SOURCE_MODEL,
  totalRecords: relocationAgenciesProviders.length,
  lastChecked: RELOCATION_AGENCIES_LAST_CHECKED,
};

export const relocationServicesMetadata = {
  slug: "relocation-services",
  parent: "services",
  country: "netherlands",
  sourceModel: RELOCATION_SERVICES_SOURCE_MODEL,
  totalRecords: relocationServicesProviders.length,
  lastChecked: RELOCATION_SERVICES_LAST_CHECKED,
};

export const housingPlatformsMetadata = {
  slug: "housing-platforms",
  parent: "services",
  country: "netherlands",
  sourceModel: "Trusted platform sources and expat-support references",
  totalRecords: housingPlatforms.length,
  lastChecked: HOUSING_RENTAL_LAST_CHECKED,
};

export const rentalAgenciesMetadata = {
  slug: "rental-agencies",
  parent: "services",
  country: "netherlands",
  sourceModel: "Trusted public-support ecosystems and validated provider references",
  totalRecords: rentalAgencies.length,
  lastChecked: HOUSING_RENTAL_LAST_CHECKED,
};

export const startupFacilitatorsMetadata = {
  slug: "startup-visa-advisors",
  parent: "services",
  country: "netherlands",
  lastChecked: STARTUP_DATA_LAST_CHECKED,
  totalRecords: startupFacilitators.length,
  sourceHref: RVO_SOURCE,
  sourceLabel: "RVO facilitator list",
};

export const mobileConnectivityMetadata = {
  slug: "mobile-connectivity",
  parent: "services",
  country: "netherlands",
  sourceModel:
    "Editorial shortlist: MVNOs (Simyo, Lebara) plus major Dutch operators (KPN, Vodafone NL, Odido)",
  totalRecords: mobileConnectivityProviders.length,
  lastChecked: MOBILE_CONNECTIVITY_LAST_CHECKED,
};

/** Every commercial / partner row with placement metadata (search / docs / tooling). */
export const COMPANIES_REGISTRY: CompanyRegistryRow[] = [
  ...tagServiceCategory("banks", BANKS_PAGE, BANKS_SURFACES, banksProviders),
  ...tagServiceCategory("health-insurance", HEALTH_PAGE, HEALTH_SURFACES, healthInsuranceProviders),
  ...tagServiceCategory(
    "international-health-insurance",
    HEALTH_PAGE,
    HEALTH_SURFACES,
    internationalHealthInsuranceProviders
  ),
  ...tagServiceCategory("immigration-lawyers", IMMIGRATION_PAGE, IMMIGRATION_SURFACES, immigrationLawyersProviders),
  ...tagServiceCategory("visa-consultants", VISA_PAGE, VISA_SURFACES, visaConsultantsProviders),
  ...tagServiceCategory(
    "mobile-connectivity",
    MOBILE_CONNECTIVITY_PAGE,
    MOBILE_CONNECTIVITY_SURFACES,
    mobileConnectivityProviders
  ),
  ...tagRelocation(
    "relocation-agencies",
    RELOCATION_AGENCIES_PAGE,
    RELOCATION_AGENCIES_SURFACES,
    relocationAgenciesProviders
  ),
  ...tagRelocation(
    "relocation-services",
    RELOCATION_SERVICES_PAGE,
    RELOCATION_SERVICES_SURFACES,
    relocationServicesProviders
  ),
  ...tagHousing(housingPlatforms, HOUSING_PAGE, HOUSING_SURFACES),
  ...tagRental(rentalAgencies, RENTAL_PAGE, RENTAL_SURFACES),
  ...tagStartup(startupFacilitators, STARTUP_PAGE, STARTUP_SURFACES),
];

export function getCompanyRegistryRowsForCategory(category: CompanyRegistryCategory): CompanyRegistryRow[] {
  return COMPANIES_REGISTRY.filter((r) => r.category === category);
}

/** Primary external URL for a registry row (for docs / outbound link audits). */
export function primaryWebsiteForRegistryRow(row: CompanyRegistryRow): string | undefined {
  if (row.rowKind === "service-category-provider") return row.externalUrl;
  if (row.rowKind === "relocation-directory") return row.providerUrl;
  if (row.rowKind === "housing-platform") return row.providerUrl;
  if (row.rowKind === "rental-agency") return row.websiteUrl ?? row.providerUrl;
  if (row.rowKind === "startup-facilitator") return row.websiteUrl;
  return undefined;
}
