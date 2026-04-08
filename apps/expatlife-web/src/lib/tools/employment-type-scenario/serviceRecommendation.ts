import type { PageRecommendedProviderCard } from "@/src/lib/recommended-services/pageRegistryRecommendations";
import type { EmploymentScenarioId, EmploymentTypeScenarioResult, RiskHighlightCategory } from "./types";

export type EmploymentServiceLean = "independent" | "payroll" | "foreign_remote" | "unknown";

export type ServiceCardGroupConfig = {
  id: string;
  title: string;
  bestFor: string;
  categories: readonly string[];
  limit: number;
  strategy: "round-robin" | "sequential";
  prepend?: readonly PageRecommendedProviderCard[];
  append?: readonly PageRecommendedProviderCard[];
};

const INDEPENDER: PageRecommendedProviderCard = {
  name: "Independer",
  url: "https://www.independer.nl/",
  useFor: "Compare Dutch basic health insurance when you choose a policy outside an employer scheme.",
  priceRange: "Free comparison; insurer premiums vary.",
};

function taxAdvisorGuideCard(base: string): PageRecommendedProviderCard {
  return {
    name: "Tax advisors in the Netherlands (guide)",
    url: `${base}/taxes/tax-advisors-netherlands/`,
    useFor: "Shortlist accountants and tax advisors for ZZP, VAT, annual filings, and contractor trade-offs.",
    priceRange: "Fees vary by firm and scope.",
  };
}

const HIGH_RISK_CATEGORIES = new Set<RiskHighlightCategory>(["tax_complexity", "sponsorship", "security"]);

function scenarioLean(id: EmploymentScenarioId): EmploymentServiceLean {
  if (id === "zzp_self_employed" || id === "contractor") return "independent";
  if (id === "permanent_employee" || id === "fixed_term_employee") return "payroll";
  if (id === "foreign_remote_employee") return "foreign_remote";
  return "unknown";
}

function elevatedRisk(result: EmploymentTypeScenarioResult): boolean {
  const total = result.scenarios.reduce((n, s) => n + s.riskHighlights.length, 0);
  if (total >= 7) return true;
  const heavy = result.scenarios.some((s) =>
    s.riskHighlights.some((h) => HIGH_RISK_CATEGORIES.has(h.category))
  );
  if (heavy && total >= 3) return true;
  return result.scenarios.some((s) => s.riskHighlights.length >= 4);
}

function legalImmigrationGroup(base: string, riskUp: boolean, withTaxAppend: boolean): ServiceCardGroupConfig {
  return {
    id: "legal-immigration",
    title: riskUp ? "Legal, immigration & tax review (priority)" : "Legal, immigration & permit support",
    bestFor:
      "Sponsorship questions, permit routes, contract red flags, and early tax conversations when several risks show up together.",
    categories: ["immigration-lawyers", "visa-consultants"],
    limit: riskUp ? 6 : 3,
    strategy: "round-robin",
    append: withTaxAppend ? [taxAdvisorGuideCard(base)] : undefined,
  };
}

/**
 * Builds provider card groups and editorial hints from the latest tool result.
 * Independent lean → tax guide + relocation/payroll-style providers, health insurance, banking.
 * Payroll lean → relocation, immigration, housing; contract and salary tools in toolLinks.
 * Elevated risk → legal/immigration first, tax guide surfaced on that block when relevant.
 */
export function buildEmploymentScenarioServicePlan(result: EmploymentTypeScenarioResult | null): {
  lean: EmploymentServiceLean;
  elevatedRisk: boolean;
  introTitle: string;
  introBody: string;
  toolLinks: { href: string; label: string }[];
  groups: ServiceCardGroupConfig[];
} {
  const BASE = "/netherlands";
  const defaultToolLinks = [
    { href: `${BASE}/taxes/tools/dutch-salary-net-calculator/`, label: "Dutch salary net calculator" },
    { href: `${BASE}/taxes/tools/30-ruling-calculator/`, label: "30% ruling calculator" },
    { href: `${BASE}/work/tools/employment-contract-risk-scanner/`, label: "Employment contract risk scanner" },
    { href: `${BASE}/taxes/tools/double-tax-awareness-tool/`, label: "Double tax awareness tool" },
    { href: `${BASE}/money/tools/cost-of-living-calculator/`, label: "Cost of living calculator" },
    { href: `${BASE}/housing/tools/rent-affordability-calculator/`, label: "Rent affordability calculator" },
  ];

  if (!result) {
    return {
      lean: "unknown",
      elevatedRisk: false,
      introTitle: "Recommended services",
      introBody:
        "Run the tool to rank scenarios. We then emphasize tax and payroll-style support for independent paths, or relocation and contract context for payroll paths. Several risk flags move legal and tax review to the top.",
      toolLinks: defaultToolLinks,
      groups: [
        legalImmigrationGroup(BASE, false, false),
        {
          id: "relocation-onboarding",
          title: "Relocation & mobility providers",
          bestFor: "Registration timing, housing search, and employer-led moves.",
          categories: ["relocation-agencies", "relocation-services"],
          limit: 4,
          strategy: "sequential",
        },
        {
          id: "health-banks",
          title: "Health insurance & banking",
          bestFor: "Basic insurance when you are not on a Dutch payroll scheme, plus IBAN and local banking.",
          categories: ["health-insurance", "banks"],
          limit: 3,
          strategy: "round-robin",
          append: [INDEPENDER],
        },
      ],
    };
  }

  const lean = scenarioLean(result.bestFitId);
  const riskUp = elevatedRisk(result);
  const bestLabel =
    result.scenarios.find((s) => s.scenarioId === result.bestFitId)?.shortLabel ?? "your top scenario";

  const moneyLens = result.insights.decisionLenses.find((l) => l.key === "income");
  const dimensionCrossCheck =
    moneyLens && moneyLens.winnerId !== result.bestFitId
      ? ` ${moneyLens.winnerShortLabel} leads on relative money score in this pass — your sliders still put ${bestLabel} ahead overall; check “Who wins by dimension” if take-home should override the blend.`
      : "";

  const payrollToolLinks = [
    { href: `${BASE}/work/tools/employment-contract-risk-scanner/`, label: "Employment contract risk scanner" },
    { href: `${BASE}/taxes/tools/dutch-salary-net-calculator/`, label: "Dutch salary net calculator" },
    { href: `${BASE}/taxes/tools/30-ruling-calculator/`, label: "30% ruling calculator" },
    { href: `${BASE}/taxes/tools/double-tax-awareness-tool/`, label: "Double tax awareness tool" },
    { href: `${BASE}/money/tools/cost-of-living-calculator/`, label: "Cost of living calculator" },
    { href: `${BASE}/housing/tools/rent-affordability-calculator/`, label: "Rent affordability calculator" },
  ];

  const independentTaxSurface: ServiceCardGroupConfig = {
    id: "tax-zzp-accounting",
    title: "Tax advisors, bookkeeping & ZZP structure",
    bestFor: "Income tax, VAT, entrepreneur assumptions, and filings once you leave simple payroll withholding.",
    categories: ["relocation-services"],
    limit: riskUp ? 2 : 3,
    strategy: "sequential",
    prepend: riskUp ? undefined : [taxAdvisorGuideCard(BASE)],
  };

  const payrollUmbrellaGroup: ServiceCardGroupConfig = {
    id: "payroll-mobility",
    title: "Payroll, umbrella & mobility providers",
    bestFor:
      "Contractor umbrella fees, payroll coordination, and employer-of-record style quotes are often bundled with relocation or mobility firms — compare a few before you trust headline day rates.",
    categories: ["relocation-services", "relocation-agencies"],
    limit: riskUp ? 5 : 4,
    strategy: "round-robin",
  };

  const healthGroup: ServiceCardGroupConfig = {
    id: "health-insurance",
    title: "Health insurance (independents & between jobs)",
    bestFor: "Mandatory Dutch basic insurance when you are not covered by an employer scheme, or when switching structures.",
    categories: ["health-insurance"],
    limit: 4,
    strategy: "sequential",
    append: [INDEPENDER],
  };

  const banksMobileGroup: ServiceCardGroupConfig = {
    id: "banks-mobile",
    title: "Banks & local connectivity",
    bestFor: "IBAN, DigiD-friendly onboarding, and a local number for admin alongside variable income.",
    categories: ["banks", "mobile-connectivity"],
    limit: 3,
    strategy: "round-robin",
  };

  const payrollRelocationGroup: ServiceCardGroupConfig = {
    id: "relocation-payroll",
    title: "Relocation specialists",
    bestFor: "Coordinating start date, BRP, housing, and employer onboarding for payroll roles.",
    categories: ["relocation-agencies", "relocation-services"],
    limit: riskUp ? 5 : 4,
    strategy: "sequential",
  };

  const payrollImmigrationGroup: ServiceCardGroupConfig = {
    id: "immigration-sponsors",
    title: "Immigration lawyers & consultants",
    bestFor: "Highly skilled migrant routes, recognised sponsors, permit renewals, and contract wording tied to employment.",
    categories: ["immigration-lawyers", "visa-consultants"],
    limit: riskUp ? 5 : 3,
    strategy: "round-robin",
  };

  const housingGroup: ServiceCardGroupConfig = {
    id: "housing-search",
    title: "Housing search support",
    bestFor: "Renting near a new office when a payroll role fixes your city.",
    categories: ["housing-platforms", "rental-agencies"],
    limit: 3,
    strategy: "round-robin",
  };

  const foreignCore: ServiceCardGroupConfig[] = [
    {
      id: "cross-border-mobility",
      title: "Cross-border payroll & relocation",
      bestFor: "Foreign employer plus living in the Netherlands: coordinate payroll, social security, and move timing.",
      categories: ["relocation-services", "visa-consultants"],
      limit: 5,
      strategy: "round-robin",
    },
    healthGroup,
    banksMobileGroup,
  ];

  let groups: ServiceCardGroupConfig[] = [];
  let introBody = "";
  let toolLinks = [...defaultToolLinks];

  if (lean === "independent") {
    introBody = `Your top match is “${bestLabel}”. We surface tax and bookkeeping context, payroll/umbrella-style mobility providers, health insurance, and banking — typical next steps for contractor and ZZP paths.${dimensionCrossCheck}`;
    const legal = legalImmigrationGroup(BASE, riskUp, riskUp);
    if (riskUp) {
      groups = [legal, independentTaxSurface, payrollUmbrellaGroup, healthGroup, banksMobileGroup];
      introBody += " Several risk flags appeared — legal, immigration, and tax review are listed first.";
    } else {
      groups = [independentTaxSurface, payrollUmbrellaGroup, healthGroup, banksMobileGroup, legal];
    }
  } else if (lean === "payroll") {
    toolLinks = payrollToolLinks;
    introBody = `Your top match is “${bestLabel}”. We emphasize relocation, immigration support, housing search, and links to contract and salary tools — the usual bundle around a new Dutch payroll role.${dimensionCrossCheck}`;
    const legal = legalImmigrationGroup(BASE, riskUp, riskUp);
    if (riskUp) {
      groups = [legal, payrollRelocationGroup, payrollImmigrationGroup, housingGroup];
      introBody += " Elevated risk flags — contract, permit, and tax review are highlighted first.";
    } else {
      groups = [payrollRelocationGroup, payrollImmigrationGroup, housingGroup, legal];
    }
  } else if (lean === "foreign_remote") {
    toolLinks = payrollToolLinks;
    introBody =
      `Foreign-employer / remote setups often need cross-border coordination. Relocation and immigration support lead; we keep health and banking in view for registration and insurance timing.${dimensionCrossCheck}`;
    const legal = legalImmigrationGroup(BASE, riskUp, true);
    if (riskUp) {
      groups = [legal, ...foreignCore];
    } else {
      groups = [...foreignCore, legal];
    }
  } else {
    introBody =
      "Your run did not pick a single dominant structure — we show a balanced mix of payroll-oriented and independent-oriented providers.";
    groups = [
      legalImmigrationGroup(BASE, riskUp, riskUp),
      payrollRelocationGroup,
      independentTaxSurface,
      healthGroup,
    ];
  }

  return {
    lean,
    elevatedRisk: riskUp,
    introTitle: "Recommended services",
    introBody,
    toolLinks,
    groups,
  };
}
