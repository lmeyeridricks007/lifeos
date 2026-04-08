/**
 * Editorial “recommended next steps” for Healthcare Allowance context.
 * Use for static UI sections; pair with `getHealthcareAllowanceServiceBundles()` for provider cards from the registry.
 *
 * `href` values are site-internal paths unless `external` is true (then `href` is absolute URL).
 */

export type HealthcareRecommendedLinkKind = "tool" | "guide" | "hub" | "services";

export type HealthcareRecommendedLink = {
  id: string;
  kind: HealthcareRecommendedLinkKind;
  label: string;
  href: string;
  description: string;
  external?: boolean;
};

export type HealthcareRecommendedGroup = {
  id: string;
  title: string;
  description: string;
  links: readonly HealthcareRecommendedLink[];
};

/**
 * High-level groups the page can render (e.g. stacked sections or columns).
 * Provider comparison grids stay in `pageRegistryRecommendations` — this config is path-based and editor-friendly.
 */
export const healthcareRecommendedServiceGroups: readonly HealthcareRecommendedGroup[] = [
  {
    id: "budget-and-income",
    title: "Budget & income planning",
    description: "Align allowance assumptions with the rest of your monthly picture — all planning-only, not government tools.",
    links: [
      {
        id: "salary-net",
        kind: "tool",
        label: "Dutch salary net calculator",
        href: "/netherlands/taxes/tools/dutch-salary-net-calculator/",
        description: "Gross-to-net sanity check before you plug income into zorgtoeslag planning.",
      },
      {
        id: "col",
        kind: "tool",
        label: "Cost of living calculator",
        href: "/netherlands/money/tools/cost-of-living-calculator/",
        description: "Monthly bands for rent, groceries, and insurance alongside estimated allowance.",
      },
      {
        id: "rent",
        kind: "tool",
        label: "Rent affordability calculator",
        href: "/netherlands/housing/tools/rent-affordability-calculator/",
        description: "Stress-test housing cash flow next to net premium after allowance.",
      },
      {
        id: "thirty-percent",
        kind: "tool",
        label: "30% ruling calculator",
        href: "/netherlands/taxes/tools/30-ruling-calculator/",
        description: "Separate expat tax facility check — not a substitute for toeslagen rules.",
      },
    ],
  },
  {
    id: "insurance-and-allowance",
    title: "Insurance & allowance context",
    description: "Understand basic cover and compare premiums — allowance remains a Dienst Toeslagen decision.",
    links: [
      {
        id: "allowance-guide",
        kind: "guide",
        label: "Healthcare allowance guide",
        href: "/netherlands/taxes/healthcare-allowance/",
        description: "Editorial walkthrough of how zorgtoeslag fits typical expat budgets.",
      },
      {
        id: "health-insurance-nl",
        kind: "guide",
        label: "Health insurance in the Netherlands",
        href: "/netherlands/health-insurance-netherlands/",
        description: "Mandatory basic insurance basics before you compare providers.",
      },
      {
        id: "compare-insurance",
        kind: "services",
        label: "Compare Dutch health insurance",
        href: "/netherlands/services/compare-health-insurance/",
        description: "Compare gross premiums and cover — then treat allowance as a separate planning line.",
      },
      {
        id: "health-insurance-services",
        kind: "services",
        label: "Health insurance services hub",
        href: "/netherlands/services/health-insurance/",
        description: "Provider discovery and comparison entry points.",
      },
    ],
  },
  {
    id: "arrival-and-family",
    title: "Arrival & household",
    description: "Timing, registration, and family tools that often sit next to insurance decisions.",
    links: [
      {
        id: "moving",
        kind: "hub",
        label: "Moving to the Netherlands",
        href: "/netherlands/moving-to-the-netherlands/",
        description: "Relocation hub for first-year practicalities.",
      },
      {
        id: "settling",
        kind: "guide",
        label: "Settling in the Netherlands",
        href: "/netherlands/settling-in-netherlands/",
        description: "First months checklist alongside insurance and toeslagen timing.",
      },
      {
        id: "bsn",
        kind: "guide",
        label: "BSN registration",
        href: "/netherlands/bsn-registration/",
        description: "Registration steps that often sit upstream of insurance and benefits.",
      },
      {
        id: "family-tools",
        kind: "hub",
        label: "Family tools",
        href: "/netherlands/family/tools/",
        description: "Childcare and partner-work planners when household composition matters.",
      },
      {
        id: "health-tools",
        kind: "hub",
        label: "Health tools hub",
        href: "/netherlands/health/tools/",
        description: "Other Netherlands health planning tools on ExpatCopilot.",
      },
    ],
  },
  {
    id: "tax-context",
    title: "Tax context",
    description: "Broader hubs when you are cross-checking allowances with annual tax planning.",
    links: [
      {
        id: "taxes-hub",
        kind: "hub",
        label: "Dutch taxes hub",
        href: "/netherlands/taxes/",
        description: "Broader tax context for internationals.",
      },
      {
        id: "tax-tools-hub",
        kind: "hub",
        label: "Tax tools hub",
        href: "/netherlands/taxes/tools/",
        description: "All live tax calculators and planners.",
      },
    ],
  },
] as const;
