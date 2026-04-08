import type { UsServiceCategoryId } from "../types";

export type UtilitiesFaqItem = {
  id: string;
  question: string;
  answer: string;
  /** Optional UI filter chips — broad tags only, not SEO stuffing */
  relatedCategoryIds?: readonly UsServiceCategoryId[];
};

/**
 * Planning FAQ — answers are editorial, not legal or tax advice.
 * Totals in the tool are bands; replace with quotes and letters when you buy.
 */
export const utilitiesFaq: readonly UtilitiesFaqItem[] = [
  {
    id: "which-utilities",
    question: "Which utilities do I need to set up in the Netherlands?",
    answer:
      "Most households arrange electricity (and often gas, unless the home is all-electric or on district heating), drinking water and wastewater through the regional water company, home internet, and mobile. Separately, expect gemeente-linked household charges (for example waste collection) that are not the same as rent. Mandatory basic health insurance is separate from this “household utilities” picture — see our health insurance guide for timing and comparison.",
    relatedCategoryIds: ["energy", "water", "internet", "mobile", "municipality"],
  },
  {
    id: "choose-energy-supplier",
    question: "Do I need to choose my own energy supplier in the Netherlands?",
    answer:
      "Often yes when you hold the contract — but not always. Some rents bundle energy, and some buildings negotiate supply. Read your lease and landlord instructions before you switch. When you do choose a retailer, comparison is usually worthwhile on tariff type, contract length, green options, and exit terms.",
    relatedCategoryIds: ["energy"],
  },
  {
    id: "water-compare",
    question: "Can I compare Dutch water companies like energy suppliers?",
    answer:
      "Usually no. Drinking water and wastewater are typically regional monopolies with regulated tariffs. You can still clarify whether you are billed directly, via the landlord, or through service costs — but it is not a classic competitive switching market.",
    relatedCategoryIds: ["water"],
  },
  {
    id: "municipality-in-rent",
    question: "Are municipality (gemeente) charges included in my rent?",
    answer:
      "Sometimes parts overlap with service costs, but many local household charges are billed separately depending on gemeente rules and your contract. Use this tool’s municipality line as a planning band until you receive real assessments and letters.",
    relatedCategoryIds: ["municipality"],
  },
  {
    id: "often-included",
    question: "What utilities are often already included in Dutch rent?",
    answer:
      "It varies widely: some listings are “inclusive” of energy, water, or internet; others are fully “exclusive”. Student housing and furnished rentals are more likely to bundle pieces. Always confirm in writing what inclusive means before you sign duplicate supplier contracts.",
    relatedCategoryIds: ["energy", "water", "internet"],
  },
  {
    id: "internet-mobile-cost",
    question: "How much do internet and mobile cost in the Netherlands?",
    answer:
      "Broadband depends on speed tier, technology at the address (fiber vs DSL/cable), and promotions. Mobile depends on lines, data, and EU roaming needs. This tool shows planning bands, not live offers — use comparison sites and provider quotes when you are ready to buy.",
    relatedCategoryIds: ["internet", "mobile"],
  },
  {
    id: "before-moving-in",
    question: "What should I arrange before moving into a Dutch home?",
    answer:
      "Clarify inclusions with the landlord or seller, check broadband availability and realistic install dates, understand heating setup, and line up contracts you will be responsible for. Your results checklist adapts to your answers (move stage, tenure, inclusions, internet, and more).",
  },
  {
    id: "first-month-more-expensive",
    question: "Why is the first month in a new home often more expensive?",
    answer:
      "Activation fees, overlapping rent or contracts, installation visits, modem or router charges, insurance start dates, and partial first invoices often land in the same calendar month. The planner models these as explicit setup buckets on top of recurring monthly lines.",
  },
  {
    id: "district-heating",
    question: "How does district (block) heating affect what I compare?",
    answer:
      "District heat is often billed or allocated differently from gas. You may still choose an electricity supplier. Confirm how heat is metered, whether you can switch, and what the landlord or VvE passes through before you mirror a standard gas-and-power mental model.",
    relatedCategoryIds: ["energy"],
  },
  {
    id: "expats-double-pay",
    question: "How do expats accidentally double-pay for utilities?",
    answer:
      "Common pattern: signing energy or internet while the landlord already bundles them in rent or service charges — or assuming a roommate deal covers your personal liability. Match every supplier contract to what the lease says you must arrange yourself.",
  },
  {
    id: "tools-accuracy",
    question: "Is this tool accurate compared to my real bills?",
    answer:
      "It is a transparent planning model with rounded bands, not address-level tariffs. Real outcomes depend on your building, usage, supplier choice, and local assessments. Use results to structure questions and buffers — then replace estimates with actual quotes and letters.",
  },
  {
    id: "renter-vs-owner-utilities",
    question: "Do renters and owners arrange the same utilities?",
    answer:
      "Broadly similar household lines, but owners should align meter handover with transfer dates and watch VvE (homeowners association) rules for shared infrastructure. The tool adjusts checklist items when you select owner vs renter.",
  },
  {
    id: "utilities-and-30-percent",
    question: "Do utilities affect my 30% ruling or taxes?",
    answer:
      "Utilities are generally personal living costs — not part of the 30% ruling calculation. They do affect your monthly cash flow next to net salary; pair this planner with our Dutch salary (net) calculator when budgeting.",
  },
  {
    id: "shared-housing",
    question: "What changes in a house share or student room?",
    answer:
      "Bundles and fair-use rules are common; one housemate may hold the contract. Agree how energy, internet, and gemeente-related splits work before you join joint direct debits. Mark inclusions carefully in the form so the model does not assume you self-contract everything.",
  },
  {
    id: "export-share-results",
    question: "Can I save or share my utilities estimate?",
    answer:
      "Yes. After you calculate, use download or print from the results, and copy the URL — your inputs can be encoded in the query string for private sharing. Nothing is processed on a server for the estimate itself; still treat URLs as sensitive if they describe your household.",
  },
];
