/**
 * Official and primary references for background reading.
 * Each entry is orientation — not personalised to your contract, permit, or tax file.
 */

export type OfferComparisonOfficialSourceNature =
  | "tax_administration"
  | "immigration"
  | "government_employment_hub"
  | "employee_insurance_agency"
  | "social_insurance_orientation"
  | "work_portal_orientation";

export type OfferComparisonOfficialSource = {
  readonly id: string;
  readonly title: string;
  readonly href: string;
  /** Shown under the link */
  readonly body: string;
  readonly nature: OfferComparisonOfficialSourceNature;
  /**
   * false = site does not tailor to the reader’s case (always false here).
   * Explicit for UI badges: “General reference — not your file”.
   */
  readonly personalised: false;
};

export const OFFER_COMPARISON_OFFICIAL_SOURCES: readonly OfferComparisonOfficialSource[] = [
  {
    id: "belastingdienst",
    title: "Belastingdienst Nederland",
    href: "https://www.belastingdienst.nl/",
    body: "Official Dutch Tax Administration: wage tax, payroll withholding, and published guidance on benefits such as the 30% facility for incoming employees. Use the site search for current topic pages; pair with a tax advisor for your facts.",
    nature: "tax_administration",
    personalised: false,
  },
  {
    id: "ind",
    title: "IND — residence and highly skilled migrant (context)",
    href: "https://ind.nl/en",
    body: "Immigration and Naturalisation Service: official routes and documents when a job offer ties to a permit — not personalised to your file.",
    nature: "immigration",
    personalised: false,
  },
  {
    id: "rijksoverheid-werken",
    title: "Rijksoverheid — working in the Netherlands",
    href: "https://www.rijksoverheid.nl/onderwerpen/werken-in-nederland",
    body: "Government hub on working, contracts, and employee topics (Dutch/English mix depending on page) — orientation, not contract advice.",
    nature: "government_employment_hub",
    personalised: false,
  },
  {
    id: "uwv",
    title: "UWV — work and benefits (context)",
    href: "https://www.uwv.nl/en/",
    body: "Employee insurance agency: useful background when contracts, unemployment risk, or sick-pay schemes appear in negotiation — details stay with your CAO and contract.",
    nature: "employee_insurance_agency",
    personalised: false,
  },
  {
    id: "svb",
    title: "SVB — AOW and social security orientation",
    href: "https://www.svb.nl/en/",
    body: "Orientation on state pension and social insurance context; workplace pension accrual is scheme-specific — ask HR for the pension brochure.",
    nature: "social_insurance_orientation",
    personalised: false,
  },
  {
    id: "werk-nl",
    title: "Werk.nl — work and benefits orientation (Dutch)",
    href: "https://www.werk.nl/",
    body: "Government work portal with orientation on finding work and benefits context — not a substitute for your contract or HR answers.",
    nature: "work_portal_orientation",
    personalised: false,
  },
] as const satisfies readonly OfferComparisonOfficialSource[];
