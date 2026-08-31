export const EXIT_READINESS_CANONICAL = "/netherlands/leaving/tools/exit-readiness-checker/";

export const EXIT_READINESS_FAQ_ITEMS = [
  {
    id: "legal",
    question: "Does this tool clear me to leave the Netherlands?",
    answer:
      "No. It is an orientation checklist for common exit admin themes. Municipality, insurer, Belastingdienst, and employer rules for your case remain the source of truth.",
  },
  {
    id: "deregister",
    question: "Do I always need to deregister from my municipality?",
    answer:
      "Many residents deregister when leaving, and the confirmation often becomes the official departure date trail. Confirm with your gemeente — short absences can differ from a permanent move.",
  },
  {
    id: "tax",
    question: "Is exit readiness the same as the leaving-NL tax guide?",
    answer:
      "No. This checker sequences practical closures. The taxes-when-leaving guide covers residency, payroll split, M-form orientation, and records in more depth.",
  },
];

export const EXIT_READINESS_OFFICIAL_SOURCES = [
  { label: "Belastingdienst — Individuals", href: "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals" },
  { label: "Belastingdienst — Benefits / toeslagen", href: "https://www.belastingdienst.nl/wps/wcm/connect/en/benefits" },
];

export const EXIT_READINESS_RELATED_GUIDES = [
  {
    href: "/netherlands/leaving/",
    title: "Leaving the Netherlands",
    description: "End-to-end exit journey: deregistration, insurance, 30% end, PR consequences, and tax links.",
  },
  {
    href: "/netherlands/taxes/leaving-netherlands-tax/",
    title: "Taxes when leaving the Netherlands",
    description: "Residency, payroll split, allowances, and leaving-year records.",
  },
  {
    href: "/netherlands/moving/extensions-changes/",
    title: "Extensions and changes",
    description: "Permit changes if your exit plans shift.",
  },
];

export const TIMING_OPTIONS = [
  { value: "within_1_month", label: "Within about 1 month" },
  { value: "one_to_three_months", label: "1–3 months" },
  { value: "later", label: "More than 3 months / flexible" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export const ITEM_STATUS_OPTIONS = [
  { value: "done_or_planned", label: "Done or firmly planned" },
  { value: "not_started", label: "Not started" },
  { value: "not_applicable", label: "Not applicable" },
  { value: "unsure", label: "Not sure" },
] as const;
