/**
 * Types for service category hub pages (e.g. health-insurance, banking-finance).
 * Reusable across Netherlands and future countries.
 */

export type ServiceCategorySEO = {
  title: string;
  description: string;
  keywords: string[];
};

export type ServiceCategoryHero = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image?: {
    src: string;
    alt: string;
    caption?: string;
    imagePrompt?: string;
  };
  ctas: Array<{ label: string; href: string; primary?: boolean }>;
};

export type RequirementCard = {
  id: string;
  title: string;
  description: string;
  whoItAppliesTo?: string;
  link?: { label: string; href: string };
};

export type CoverageCard = {
  id: string;
  title: string;
  description: string;
};

export type ComparisonFactor = {
  id: string;
  title: string;
  description: string;
};

export type ServiceCategoryProviderCard = {
  slug: string;
  name: string;
  href: string;
  shortDescription: string;
  bestFor: string;
  priceNote: string;
  /** Optional: e.g. "~€138–155/mo" for health insurance basic package (verify with provider) */
  typicalCost?: string;
  englishSupportNote?: string;
  isFeatured?: boolean;
  logo?: { src: string; alt: string };
  externalUrl?: string;
  /** When true, review page not yet live */
  reviewComingSoon?: boolean;
  /** Optional: e.g. "bank" | "money-service" for banks category; "law-firm" | "relocation-legal" | "boutique" for lawyers */
  providerType?: "bank" | "money-service" | "law-firm" | "relocation-legal" | "boutique";
  /** Optional: e.g. cities where the firm is relevant (immigration lawyers) */
  cityRelevance?: string[];
  /** Optional: for provider comparison section – short bullet points */
  pros?: string[];
  /** Optional: for provider comparison section – short bullet points */
  cons?: string[];
  /** Optional: one-line summary of who should choose this provider */
  whoShouldChoose?: string;
  /** Optional: features or products offered (shown in compare section) */
  features?: string[];
  /**
   * Display / sort priority: lower = more important (1 = first in category list).
   * Assigned from array order in companies-registry; categories with more than 10 providers use 11, 12, …
   */
  priority: number;
}

export type CostCard = {
  id: string;
  title: string;
  value: string;
  note?: string;
  disclaimer?: string;
  link?: { label: string; href: string };
};

export type WhoNeedsHelpCard = {
  id: string;
  title: string;
  description: string;
  link?: { label: string; href: string };
};

export type ScenarioCard = {
  id: string;
  title: string;
  summary: string;
  whatToConfirm: string[];
  whatToCompare: string[];
  commonMistakes?: string[];
  links?: Array<{ label: string; href: string }>;
}

export type ServiceCategoryPageData = {
  slug: string;
  parentSlug: string;
  country: string;
  path: string;
  seo: ServiceCategorySEO;
  hero: ServiceCategoryHero;
  tocItems: Array<{ id: string; label: string }>;
  intro: {
    heading: string;
    paragraphs: string[];
    links: Array<{ label: string; href: string }>;
  };
  requirementCards: RequirementCard[];
  coverageCards: CoverageCard[];
  comparisonFactors: ComparisonFactor[];
  providers: ServiceCategoryProviderCard[];
  costCards: CostCard[];
  whoNeedsExtraHelp: WhoNeedsHelpCard[];
  scenarios: ScenarioCard[];
  faqs: Array<{ q: string; a: string }>;
  officialSources: Array<{ label: string; url: string; category: string }>;
  relatedGuides: Array<{ title: string; links: Array<{ label: string; href: string }> }>;
  relatedCategories?: Array<{ label: string; href: string }>;
  tools: Array<{ label: string; href: string; description?: string; status?: "live" | "coming_soon" }>;
  disclosure: string[];
  /** Optional: e.g. Dutch Deposit Guarantee for banks page */
  trustBlock?: { heading: string; paragraphs: string[]; highlight?: string; link?: { label: string; href: string } };
  /** Optional: legal matters grid (immigration lawyers page) */
  legalMatters?: LegalMatterCard[];
  /** Optional: "when you may not need" decision support (immigration lawyers) */
  whenNotNeed?: { heading: string; paragraphs: string[]; points: string[] };
  /** Optional: title and intro for the "Compare providers" section */
  comparisonSection?: { title: string; intro: string };
  /** Optional: dedicated "Digital banks" section (e.g. banks category page) */
  digitalBanksBlock?: {
    heading: string;
    paragraphs: string[];
    linkLabel?: string;
    linkHref?: string;
  };
  /** Optional: "International health insurance" section (e.g. health insurance category page) */
  internationalHealthBlock?: {
    heading: string;
    paragraphs: string[];
    linkLabel?: string;
    linkHref?: string;
    providers?: ServiceCategoryProviderCard[];
  };
  /** Optional: HSM sponsor directory page – "What is a recognised sponsor" section */
  whatIsRecognisedSponsor?: { heading: string; paragraphs: string[] };
  /** Optional: HSM sponsor directory page – "Why sponsor status matters" section */
  whySponsorMatters?: {
    heading: string;
    paragraphs: string[];
    cards: Array<{ title: string; description: string }>;
  };
  /** Optional: HSM sponsor directory – metadata for directory (lastUpdated, sourceHref, etc.) */
  sponsorDirectoryMeta?: SponsorDirectoryMetadata;
  /** Optional: HSM featured sponsor examples with optional description, links, logo for "Examples from the register" section */
  featuredSponsorExamples?: FeaturedSponsorExample[];
  /** Optional: relocation agencies – directory metadata */
  relocationDirectoryMeta?: RelocationDirectoryMetadata;
  /** Optional: startup visa advisors – directory metadata (RVO facilitator list) */
  facilitatorDirectoryMeta?: StartupFacilitatorDirectoryMetadata;
  /** Optional: startup visa advisors – "What is a facilitator" section */
  whatIsFacilitator?: { heading: string; paragraphs: string[] };
  /** Optional: startup visa advisors – "Why facilitator matters" section */
  whyFacilitatorMatters?: {
    heading: string;
    paragraphs: string[];
    cards: Array<{ title: string; description: string }>;
  };
  /** Optional: housing platforms – directory metadata */
  housingPlatformDirectoryMeta?: HousingPlatformDirectoryMetadata;
  /** Optional: housing platforms – anti-scam / safety tips section */
  antiScamTips?: { heading: string; paragraphs: string[]; points: string[] };
  /** Optional: rental agencies – directory metadata */
  rentalDirectoryMeta?: RentalAgencyDirectoryMetadata;
  /** Optional: rental agencies – tenant rights / safety section (Huurcommissie, Rent Check) */
  tenantRightsBlock?: { heading: string; paragraphs: string[]; points: string[]; links?: Array<{ label: string; href: string }> };
}

/** Featured sponsor example for HSM page: name, KvK, optional description, links, logo. */
export type FeaturedSponsorExample = {
  name: string;
  kvkNumber: string;
  slug?: string;
  description?: string;
  websiteUrl?: string;
  careersUrl?: string;
  /** Logo image URL (e.g. Clearbit or local path). Fallback to initials if missing or fails. */
  logoUrl?: string;
};

/** Sponsor record from official IND register (Labour / Highly Skilled Migrants). */
export type SponsorRecord = {
  slug: string;
  name: string;
  kvkNumber: string;
  source: "IND";
  registerType: string;
  sourceHref?: string;
  isOfficial?: boolean;
  /** Optional: industry/sector (e.g. "Banking", "Technology"). */
  industry?: string;
  /** Optional: type of work or activities. */
  typeOfWork?: string;
  /** Optional: city or region (e.g. "Amsterdam", "Rotterdam"). */
  location?: string;
  /** Optional: company website URL; "View" action links here when set. */
  websiteUrl?: string;
};

/** Metadata for the sponsor directory (source, last updated, counts). */
export type SponsorDirectoryMetadata = {
  lastUpdated: string;
  totalRecords: number;
  sourceHref: string;
  registerType: string;
  source: string;
};

export type LegalMatterCard = {
  id: string;
  title: string;
  description: string;
  whenComplex?: string;
  link?: { label: string; href: string };
};

/** Relocation provider from trusted expat-centre / public-support ecosystems. */
export type RelocationProviderRecord = {
  slug: string;
  name: string;
  providerUrl?: string;
  /** Optional logo URL (e.g. Clearbit). Fallback to initials if missing or fails. */
  logoUrl?: string;
  sourceEcosystems: string[];
  cityRelevance: string[];
  shortDescription: string;
  /** Optional list of specific services or products (shown in card). */
  servicesOrProducts?: string[];
  serviceTags: string[];
  /** Optional typical cost description (e.g. "From ~€1,500 for full package; à la carte varies"). */
  typicalCost?: string;
  /** Optional pros for comparison cards. */
  pros?: string[];
  /** Optional cons for comparison cards. */
  cons?: string[];
  /** Optional one-line summary of who should choose this provider. */
  whoShouldChoose?: string;
  isOfficial: boolean;
  sourcePages: string[];
  lastChecked: string;
  /** Lower = more important (1 = first in this category list). Set from array order in companies-registry. */
  priority: number;
};

/** Metadata for the relocation provider directory. */
export type RelocationDirectoryMetadata = {
  sourceModel: string;
  totalRecords: number;
  lastChecked: string;
};

/** Startup facilitator from official RVO facilitator list (startup residence route). */
export type StartupFacilitatorRecord = {
  slug: string;
  name: string;
  source: "RVO";
  sourceHref: string;
  websiteUrl?: string;
  isOfficial: boolean;
  lastChecked: string;
  /** Short description of what the facilitator offers. */
  shortDescription?: string;
  /** Typical cost note (e.g. "From €X", "€0–€2,000 typical"). */
  typicalCost?: string;
  /** Services or support they provide (e.g. mentoring, office, visa support). */
  servicesOffered?: string[];
  /** Optional: city or region (e.g. "Amsterdam", "Rotterdam", "Eindhoven"). */
  cityRelevance?: string[];
  /** Optional: pros for comparison cards. */
  pros?: string[];
  /** Optional: cons for comparison cards. */
  cons?: string[];
  /** Optional: who should choose this facilitator. */
  whoShouldChoose?: string;
  /** Lower = more important (1 = first in this category list). Set from array order in companies-registry. */
  priority: number;
};

/** Metadata for the startup facilitator directory. */
export type StartupFacilitatorDirectoryMetadata = {
  lastChecked: string;
  totalRecords: number;
  sourceHref: string;
  sourceLabel: string;
};

/** Housing platform / housing-service provider for expats (rental, room, temporary, etc.). */
export type HousingPlatformRecord = {
  slug: string;
  name: string;
  providerUrl: string;
  categoryType: string;
  shortDescription: string;
  bestFor: string[];
  sourceReferences: string[];
  feeNote?: string;
  cityRelevance?: string[];
  isOfficial: boolean;
  lastChecked: string;
  /** Optional: for comparison cards – short bullet points */
  pros?: string[];
  /** Optional: for comparison cards – short bullet points */
  cons?: string[];
  /** Optional: one-line summary of who should choose this platform */
  whoShouldChoose?: string;
  /** Optional: explicit logo URL (local path or favicon). Use when domain-based logo APIs return wrong images. */
  logoUrl?: string;
  /** Lower = more important (1 = first in this category list). Set from array order in companies-registry. */
  priority: number;
};

/** Metadata for the housing platform directory. */
export type HousingPlatformDirectoryMetadata = {
  sourceModel: string;
  totalRecords: number;
  lastChecked: string;
};

/** Rental agency / expat rental broker from trusted public-support ecosystems. */
export type RentalAgencyRecord = {
  slug: string;
  name: string;
  providerUrl: string;
  providerType: string;
  shortDescription: string;
  bestFor: string[];
  cityRelevance: string[];
  sourceReferences: string[];
  feeNote?: string;
  isOfficial: boolean;
  lastChecked: string;
  /** Optional: company website (for logo and visit link); when missing, providerUrl is used for link only. */
  websiteUrl?: string;
  /** Optional: for comparison cards – short bullet points */
  pros?: string[];
  /** Optional: for comparison cards – short bullet points */
  cons?: string[];
  /** Optional: one-line summary of who should choose this agency */
  whoShouldChoose?: string;
  /** Lower = more important (1 = first in this category list). Set from array order in companies-registry. */
  priority: number;
};

/** Metadata for the rental agency directory. */
export type RentalAgencyDirectoryMetadata = {
  sourceModel: string;
  totalRecords: number;
  lastChecked: string;
};
