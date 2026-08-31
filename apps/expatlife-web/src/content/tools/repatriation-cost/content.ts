export const REPATRIATION_COST_CANONICAL = "/netherlands/leaving/tools/repatriation-cost-calculator/";

export const REPATRIATION_COST_FAQ_ITEMS = [
  {
    id: "quote",
    question: "Is this a mover quote?",
    answer:
      "No. It is an orientation budget range by category. Get written quotes from movers, airlines, and landlords before you commit.",
  },
  {
    id: "tax",
    question: "Does this include exit tax bills?",
    answer:
      "No. Tax and toeslagen outcomes are case-specific. Use the taxes-when-leaving guide and Belastingdienst for those topics — this calculator focuses on move logistics costs.",
  },
  {
    id: "timing",
    question: "When should I budget cash?",
    answer:
      "Flights and movers often need deposits weeks before departure. Plan for overlapping rent, deposit disputes, and destination temporary housing paid upfront.",
  },
];

export const REPATRIATION_COST_RELATED_GUIDES = [
  {
    href: "/netherlands/leaving/",
    title: "Leaving the Netherlands",
    description: "Full exit journey before you budget logistics costs.",
  },
  {
    href: "/netherlands/taxes/leaving-netherlands-tax/",
    title: "Taxes when leaving the Netherlands",
    description: "Admin and tax orientation alongside your move budget.",
  },
  {
    href: "/netherlands/moving/extensions-changes/",
    title: "Extensions and changes",
    description: "If timing or permits change before you leave.",
  },
];

export const HOUSEHOLD_OPTIONS = [
  { value: "1", label: "Just me" },
  { value: "2", label: "Two people" },
  { value: "3_plus", label: "Family of 3+" },
] as const;

export const REGION_OPTIONS = [
  { value: "europe", label: "Elsewhere in Europe" },
  { value: "uk_or_nearby", label: "UK / nearby short-haul" },
  { value: "north_america", label: "North America" },
  { value: "asia_pacific", label: "Asia-Pacific" },
  { value: "other", label: "Other / long-haul" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export const SHIPPING_OPTIONS = [
  { value: "suitcases", label: "Suitcases only" },
  { value: "few_boxes", label: "A few boxes / small shipment" },
  { value: "room_partial", label: "Room / partial household" },
  { value: "full_container", label: "Full household / container" },
  { value: "unsure", label: "Not sure" },
] as const;

export const FLIGHTS_OPTIONS = [
  { value: "none_already", label: "Already booked / none needed" },
  { value: "one_way_household", label: "Need one-way tickets for household" },
  { value: "unsure", label: "Not sure" },
] as const;

export const LEASE_OPTIONS = [
  { value: "none", label: "Clean exit / notice ok" },
  { value: "deposit_at_risk", label: "Deposit partly at risk" },
  { value: "early_fee_possible", label: "Early termination fee possible" },
  { value: "unsure", label: "Not sure" },
] as const;

export const TEMP_OPTIONS = [
  { value: "0", label: "None — go straight to long-term housing" },
  { value: "1_to_2", label: "About 1–2 weeks" },
  { value: "3_to_4", label: "About 3–4 weeks" },
  { value: "longer", label: "Longer bridge stay" },
  { value: "unsure", label: "Not sure" },
] as const;

export const PETS_OPTIONS = [
  { value: "no", label: "No pets relocating" },
  { value: "yes", label: "Yes — pet(s) relocating" },
  { value: "unsure", label: "Not sure" },
] as const;
