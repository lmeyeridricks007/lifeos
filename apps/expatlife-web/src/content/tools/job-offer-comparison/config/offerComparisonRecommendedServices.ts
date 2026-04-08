/**
 * Editorial copy and group metadata for the recommended-services block.
 * Provider cards themselves are built from the site registry in code — this file is the expat-facing framing only.
 */

/** Keep in sync with `content.ts` `NL_BASE`. */
export const OFFER_COMPARISON_NL_BASE = "/netherlands" as const;

export type RecommendedServicesGroupId = "tax-ruling" | "employment-law" | "relocation" | "payroll" | "banking";

export type OfferComparisonRecommendedServiceGroupMeta = {
  readonly id: RecommendedServicesGroupId;
  readonly title: string;
  readonly bestFor: string;
  /**
   * Registry categories used when resolving cards (must match `pageRegistryRecommendations` usage).
   * Documented here so editors know what powers each grid without reading the client component.
   */
  readonly registryNote: string;
};

export type OfferComparisonRecommendedServicesConfig = {
  readonly servicesDirectoryHref: string;
  readonly housingGuidesHref: string;
  readonly sectionTitle: string;
  readonly sectionSubtitle: string;
  readonly tailoredBlockTitle: string;
  readonly tailoredFollowUpNote: string;
  readonly editorialShortlistTitle: string;
  readonly editorialShortlistBody: string;
  readonly servicesDirectoryLabel: string;
  readonly housingGuidesLabel: string;
  readonly refineNumbersTitle: string;
  readonly refineNumbersLead: string;
  readonly affiliateDisclosure: string;
  readonly groupMeta: readonly OfferComparisonRecommendedServiceGroupMeta[];
};

export const OFFER_COMPARISON_RECOMMENDED_SERVICES: OfferComparisonRecommendedServicesConfig = {
  servicesDirectoryHref: `${OFFER_COMPARISON_NL_BASE}/services/`,
  housingGuidesHref: `${OFFER_COMPARISON_NL_BASE}/housing/`,
  sectionTitle: "Recommended services",
  sectionSubtitle:
    "Shortlists reorder slightly based on your latest inputs — tax, relocation, contract, and payroll help when the comparison flags weak expat support, contract pressure, or a near-tie.",

  tailoredBlockTitle: "Tailored to your current comparison",
  tailoredFollowUpNote:
    "Provider order below shifts when expat support looks thin, contract risk is elevated, or scores are nearly tied — still compare scope and fees yourself.",

  editorialShortlistTitle: "Editorial shortlist",
  editorialShortlistBody:
    "Ordering favours job-offer decisions (tax, contract, move, payroll) — not paid placement. Compare scope and fees before engaging any provider.",

  servicesDirectoryLabel: "Services directory",
  housingGuidesLabel: "Housing guides",

  refineNumbersTitle: "Refine the numbers first",
  refineNumbersLead: "Pair advisors with the site calculators so you brief them with consistent assumptions:",

  affiliateDisclosure:
    "Some provider links may include referral tracking. This block is editorially ordered for planning relevance.",

  groupMeta: [
    {
      id: "tax-ruling",
      title: "Tax advisors / 30% ruling support",
      bestFor: "Ruling eligibility timing, payroll tax planning, and annual return questions tied to your offer.",
      registryNote: "Curated list from `getThirtyPercentRulingTaxAdvisorCards()` — not category slug based.",
    },
    {
      id: "employment-law",
      title: "Employment lawyer / contract review",
      bestFor: "Non-compete, repayment, overtime, fixed-term risk, and sponsor-linked wording before you sign.",
      registryNote: "Categories: immigration-lawyers (editorial use for contract-heavy expat decisions).",
    },
    {
      id: "relocation",
      title: "Relocation support",
      bestFor: "House search timing, employer relocation packages, and onboarding when you are moving for the role.",
      registryNote: "Categories: relocation-agencies, relocation-services (round-robin).",
    },
    {
      id: "payroll",
      title: "Payroll / admin support",
      bestFor: "Foreign employer setups, umbrella coordination, and payslip interpretation alongside HR.",
      registryNote: "Categories: relocation-services (sequential) — editorial overlap with mobility payroll.",
    },
    {
      id: "banking",
      title: "Banking / insurance setup",
      bestFor: "Accounts and baseline protection when your start date and address timing are still moving.",
      registryNote: "From `getDutchSalaryNetBankCards()` slice.",
    },
  ],
};
