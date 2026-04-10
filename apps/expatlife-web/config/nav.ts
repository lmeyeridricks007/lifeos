export type NavLink = { title: string; href: string; description?: string; comingSoon?: boolean };
export type NavGroup = { title: string; links: NavLink[] };

export type TopNavKey =
  | "move"
  | "work"
  | "money"
  | "living"
  | "mobility"
  | "culture"
  | "language"
  | "health"
  | "family"
  | "everyday"
  | "travel"
  | "tools";

export type MegaMenuSection = {
  key: TopNavKey;
  label: string;
  href: string;
  groups: NavGroup[];
};

const link = (title: string, href: string, description: string, comingSoon = true): NavLink => ({
  title,
  href,
  description,
  comingSoon,
});

export const NAV_ITEMS: Array<{ key: TopNavKey; label: string }> = [
  { key: "move", label: "Move" },
  { key: "work", label: "Work" },
  { key: "money", label: "Money" },
  { key: "living", label: "Living" },
  { key: "mobility", label: "Mobility" },
  { key: "culture", label: "Culture" },
  { key: "language", label: "Language" },
  { key: "health", label: "Health" },
  { key: "family", label: "Family" },
  { key: "everyday", label: "Everyday" },
  { key: "travel", label: "Travel" },
  { key: "tools", label: "Tools" },
];

export const MEGA_MENU: Record<TopNavKey, MegaMenuSection> = {
  move: {
    key: "move",
    label: "Move",
    href: "/netherlands/moving-to-the-netherlands",
    groups: [
      {
        title: "Moving to NL",
        links: [
          link("Moving to the Netherlands", "/netherlands/moving-to-the-netherlands", "Relocation guide", false),
          link("Visas & residency orientation", "/netherlands/moving/visas-residency", "Permit routes overview", false),
          link("Extensions & changes", "/netherlands/moving/extensions-changes/", "Renewals & life shifts after arrival", false),
          link("Municipality registration", "/netherlands/municipality-registration-netherlands", "BRP & BSN", false),
          link("DigiD awareness", "/netherlands/digid-awareness", "Government login", false),
          link("Moving checklist", "/netherlands/moving-checklist-netherlands", "Checklist route", false),
          link("Document readiness checker", "/netherlands/document-readiness-checker", "Document pack prep", false),
          link("Moving timeline", "/netherlands/moving-to-netherlands-timeline", "Timeline overview", false),
          link("First 30 days", "/netherlands/first-30-days-netherlands", "Arrival sequencing", false),
          link("First 60 days", "/netherlands/first-60-days-netherlands", "Mid-phase setup", false),
          link("First 90 days", "/netherlands/first-90-days-netherlands", "Stabilization checkpoints", false),
          link("Moving with partner", "/netherlands/moving-to-netherlands-with-partner", "Couple relocation", false),
          link("Moving with kids", "/netherlands/moving-to-netherlands-with-kids", "Family relocation", false),
          link("Bringing pets", "/netherlands/bringing-pets-to-netherlands", "Pet travel", false),
          link("Shipping household goods", "/netherlands/shipping-household-goods-netherlands", "Moving goods", false),
        ],
      },
      {
        title: "Visas & Residency",
        links: [
          link("Visas & residency", "/netherlands/moving/visas-residency", "Permit routes & orientation"),
          link("Compare visas", "/netherlands/visa/compare-visas", "Compare work, student, partner & entrepreneur routes"),
          link("Visa checker", "/netherlands/visa-checker", "Find the best visa for your situation"),
          link("Highly skilled migrant", "/netherlands/visa/highly-skilled-migrant", "Sponsor-based permits"),
          link("EU Blue Card", "/netherlands/visa/eu-blue-card", "EU-wide skilled work route"),
          link("DAFT (US entrepreneurs)", "/netherlands/visa/dutch-american-friendship-treaty", "US self-employed route"),
          link("Self-employed visa", "/netherlands/visa/self-employed-visa", "Entrepreneur / freelancer route"),
          link("Student visa", "/netherlands/visa/student-visa", "Study route"),
          link("Partner & family", "/netherlands/visa/partner-family-visa", "Family route"),
          link("Residence permits", "/netherlands/moving/residence-permits", "Permit categories", false),
          link("Extensions & changes", "/netherlands/moving/extensions-changes/", "After arrival: renewals & life changes", false),
          link("Status changes", "/netherlands/moving/status-changes/", "Path transitions", false),
        ],
      },
      {
        title: "Move tools",
        links: [
          link("Visa checker", "/netherlands/visa-checker", "Find the best visa for your situation", false),
          link("Visa timeline estimator", "/netherlands/visa-timeline-estimator", "Estimate processing and move timing", false),
          link("Visa cost calculator", "/netherlands/visa-cost-calculator", "Estimate fees, documents, and move costs", false),
          link("Moving checklist", "/netherlands/moving/tools/moving-checklist", "Before/arrival/90-day tasks", false),
          link("Relocation cost estimator", "/netherlands/moving/tools/relocation-cost-estimator", "Budget and cost estimate", false),
          link("Document readiness", "/netherlands/document-readiness-checker", "Completeness scoring"),
          link("First 90 days", "/netherlands/moving/tools/first-90-days", "Weekly sequence"),
          link("Arrival planner", "/netherlands/moving/tools/arrival-planner", "Arrival setup"),
        ],
      },
      {
        title: "More",
        links: [
          link("Cities", "/netherlands/cities/", "Discover and compare Dutch cities for expats", false),
        ],
      },
      {
        title: "Services",
        links: [
          link("Health Insurance", "/netherlands/services/health-insurance/", "Compare providers, costs & rules for expats", false),
          link("Banks", "/netherlands/services/banks/", "Compare accounts, fees, cards & setup for expats", false),
          link("Housing Platforms", "/netherlands/services/housing-platforms/", "Rental, room, furnished & temporary housing", false),
          link("Visa Consultants", "/netherlands/services/visa-consultants/", "MVV, permits, startup & family routes", false),
          link("Relocation Services", "/netherlands/services/relocation-services/", "Housing, immigration, registration & settling-in", false),
          link("View all services", "/netherlands/services/", "Expat services hub: banking, insurance, housing & more", false),
        ],
      },
      {
        title: "Integration + Leaving",
        links: [
          link("Integration", "/netherlands/integration", "Inburgering essentials"),
          link("Inburgering planner", "/netherlands/integration/inburgering-planner", "Planning tool"),
          link("Citizenship", "/netherlands/citizenship", "Long-term route"),
          link("Leaving", "/netherlands/leaving", "Exit planning"),
        ],
      },
    ],
  },
  work: {
    key: "work",
    label: "Work",
    href: "/netherlands/work/contracts",
    groups: [
      {
        title: "Employment",
        links: [
          link("Contracts", "/netherlands/work/contracts", "Contract fundamentals"),
          link("Contract checklist", "/netherlands/work/contracts/checklist", "Offer review"),
          link("Rights", "/netherlands/work/rights", "Employee rights"),
          link("Payroll", "/netherlands/work/payroll", "Payslip and deductions"),
        ],
      },
      {
        title: "Career + Benefits",
        links: [
          link("Benefits", "/netherlands/work/benefits", "Total rewards"),
          link("Career transitions", "/netherlands/work/career/transition-planner", "Job-change planning"),
          link("Sponsor dependency", "/netherlands/work/career/sponsor-dependency", "Visa-linked employment"),
        ],
      },
    ],
  },
  money: {
    key: "money",
    label: "Money",
    href: "/netherlands/money/banking",
    groups: [
      {
        title: "Banking + Taxes",
        links: [
          link("Banking", "/netherlands/money/banking", "Accounts and setup"),
          link("Bank comparison", "/netherlands/money/banking/bank-comparison", "Compare options"),
          link("Taxes", "/netherlands/money/taxes", "Tax basics"),
          link("Tax readiness", "/netherlands/money/taxes/readiness-score", "Readiness scoring"),
        ],
      },
      {
        title: "Insurance + Retirement",
        links: [
          link("Insurance", "/netherlands/money/insurance", "Coverage planning"),
          link("Health insurance", "/netherlands/money/insurance/health", "Health setup"),
          link("Retirement", "/netherlands/money/retirement", "Long-term planning"),
        ],
      },
    ],
  },
  living: {
    key: "living",
    label: "Living",
    href: "/netherlands/living/housing",
    groups: [
      {
        title: "Housing + Utilities",
        links: [
          link("Housing", "/netherlands/living/housing", "Rental and address setup"),
          link("Registration address", "/netherlands/living/housing/registration-address", "Address requirements"),
          link("Utilities", "/netherlands/living/utilities", "Energy/internet/services"),
        ],
      },
      {
        title: "Local Life",
        links: [
          link("Local living", "/netherlands/living/local", "Municipality basics"),
          link("Digital government", "/netherlands/living/digital-government", "DigiD and services"),
          link("Subscriptions", "/netherlands/living/subscriptions", "Recurring admin"),
        ],
      },
    ],
  },
  mobility: {
    key: "mobility",
    label: "Mobility",
    href: "/netherlands/mobility",
    groups: [
      {
        title: "Mobility",
        links: [
          link("Mobility hub", "/netherlands/mobility", "Biking, transit, driving"),
          link("Public transport", "/netherlands/mobility/public-transport", "OV and route patterns"),
          link("Driving", "/netherlands/mobility/driving", "License and car basics"),
        ],
      },
    ],
  },
  culture: {
    key: "culture",
    label: "Culture",
    href: "/netherlands/culture/workplace",
    groups: [
      {
        title: "Culture",
        links: [
          link("Workplace culture", "/netherlands/culture/workplace", "Norms and communication"),
          link("Social norms", "/netherlands/culture/social", "Daily social cues"),
          link("Traditions", "/netherlands/culture/traditions", "Calendar and customs"),
        ],
      },
    ],
  },
  language: {
    key: "language",
    label: "Language",
    href: "/netherlands/language",
    groups: [
      {
        title: "Language",
        links: [
          link("Language hub", "/netherlands/language", "Dutch pathway"),
          link("Dutch learning", "/netherlands/language/dutch-learning", "Learning routes"),
          link("Inburgering exams", "/netherlands/language/inburgering-exams", "Exam prep"),
        ],
      },
    ],
  },
  health: {
    key: "health",
    label: "Health",
    href: "/netherlands/health",
    groups: [
      {
        title: "Health",
        links: [
          link("Health hub", "/netherlands/health", "Healthcare setup"),
          link("GP registration", "/netherlands/health/gp-registration", "Primary care setup"),
          link("Emergency basics", "/netherlands/health/emergency-basics", "Emergency orientation"),
        ],
      },
    ],
  },
  family: {
    key: "family",
    label: "Family",
    href: "/netherlands/family",
    groups: [
      {
        title: "Family",
        links: [
          link("Family hub", "/netherlands/family", "Partner and children"),
          link("School pathways", "/netherlands/family/schools", "School selection"),
          link("Family admin", "/netherlands/family/admin", "Family paperwork"),
        ],
      },
    ],
  },
  everyday: {
    key: "everyday",
    label: "Everyday",
    href: "/netherlands/everyday",
    groups: [
      {
        title: "Everyday life",
        links: [
          link("Everyday hub", "/netherlands/everyday", "Routine systems"),
          link("Admin essentials", "/netherlands/everyday/admin", "Recurring compliance"),
          link("Community basics", "/netherlands/everyday/community", "Local integration"),
        ],
      },
    ],
  },
  travel: {
    key: "travel",
    label: "Travel",
    href: "/netherlands/travel",
    groups: [
      {
        title: "Travel",
        links: [
          link("Travel hub", "/netherlands/travel", "Cross-border planning"),
          link("EU travel basics", "/netherlands/travel/eu-basics", "Intra-EU movement"),
          link("Re-entry docs", "/netherlands/travel/re-entry-docs", "Return readiness"),
        ],
      },
    ],
  },
  tools: {
    key: "tools",
    label: "Tools",
    href: "/netherlands/moving/tools/moving-checklist",
    groups: [
      {
        title: "Moving tools",
        links: [
          link("Visa checker", "/netherlands/visa-checker", "Find the best visa for your situation", false),
          link("Visa timeline estimator", "/netherlands/visa-timeline-estimator", "Estimate processing and move timing", false),
          link("Visa application plan", "/netherlands/visa-application-plan", "Step-by-step application roadmap", false),
          link("Moving checklist", "/netherlands/moving/tools/moving-checklist", "Before/arrival/90-day tasks", false),
          link("Relocation cost estimator", "/netherlands/moving/tools/relocation-cost-estimator", "Budget and cost estimate", false),
          link("Document readiness", "/netherlands/document-readiness-checker", "Completeness scoring"),
          link("First 90 days", "/netherlands/moving/tools/first-90-days", "Weekly sequence"),
          link("Arrival planner", "/netherlands/moving/tools/arrival-planner", "Arrival setup"),
        ],
      },
      {
        title: "Work + money tools",
        links: [
          link("Contract checklist", "/netherlands/work/tools/contract-checklist", "Employment review"),
          link("Payslip decoder", "/netherlands/work/tools/payslip-decoder", "Payroll checks"),
          link(
            "Employment type scenario tool",
            "/netherlands/work/tools/employment-type-scenario-tool",
            "Employee vs contractor vs ZZP comparison",
            false
          ),
          link("Bank comparison", "/netherlands/money/banking/bank-comparison", "Account choice"),
          link("Tax readiness", "/netherlands/money/taxes/readiness-score", "Readiness check"),
        ],
      },
    ],
  },
};
