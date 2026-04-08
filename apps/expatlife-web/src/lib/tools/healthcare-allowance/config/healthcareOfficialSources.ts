/**
 * Official and portal links for the Healthcare Allowance Estimator “Official sources” section.
 * UI: map over `healthcareOfficialSources` and render label, href, hint; show `introParagraph` + `lastUpdatedLabel` above the list.
 */

export type HealthcareOfficialSourceKind = "government_nl" | "government_en" | "portal";

export type HealthcareOfficialSource = {
  id: string;
  kind: HealthcareOfficialSourceKind;
  label: string;
  href: string;
  /** Expat-friendly one-line context for the link card. */
  hint: string;
};

export type HealthcareOfficialSourcesConfig = {
  /** Shown next to LastUpdated-style UI, e.g. "April 2026". */
  lastUpdatedLabel: string;
  /** Opening paragraph (planning disclaimer + confirm on official sites). */
  introParagraph: string;
  sources: readonly HealthcareOfficialSource[];
  /** Optional internal links rendered after external list (paths only — use Next `Link`). */
  internalSeeAlso: readonly { label: string; path: string }[];
};

export const healthcareOfficialSourcesConfig = {
  lastUpdatedLabel: "April 2026",
  introParagraph:
    "Income limits, asset limits, and maximum allowance amounts change with law and policy. Always confirm current zorgtoeslag figures and your own entitlement on official sites and through Dienst Toeslagen — this estimator does not read government systems and is planning-only, not an official determination.",
  sources: [
    {
      id: "belastingdienst-toeslagen",
      kind: "government_nl",
      label: "Belastingdienst — Toeslagen (Dutch)",
      href: "https://www.belastingdienst.nl/wps/wcm/connect/nl/toeslagen/content/hoofdscherm-toeslagen",
      hint: "Central hub for zorgtoeslag and other allowances — applications, updates, and documentation.",
    },
    {
      id: "government-nl-healthcare-allowance",
      kind: "government_en",
      label: "Government.nl — Healthcare allowance (English)",
      href: "https://www.government.nl/topics/healthcare-insurance/question-and-answer/am-i-eligible-for-a-healthcare-allowance",
      hint: "High-level eligibility overview in English; confirm details on Dutch sources before acting.",
    },
    {
      id: "rijksoverheid-zorgtoeslag",
      kind: "government_nl",
      label: "Rijksoverheid — Zorgtoeslag (Dutch)",
      href: "https://www.rijksoverheid.nl/onderwerpen/zorgtoeslag",
      hint: "Policy context and links to official information about healthcare allowance.",
    },
    {
      id: "toeslagen-mijn",
      kind: "portal",
      label: "Toeslagen — Mijn toeslagen (login)",
      href: "https://www.toeslagen.nl/",
      hint: "Official portal to manage allowance applications and changes — not a third-party calculator.",
    },
  ],
  internalSeeAlso: [
    { label: "Healthcare allowance guide", path: "/netherlands/taxes/healthcare-allowance/" },
    { label: "Tax tools hub", path: "/netherlands/taxes/tools/" },
    { label: "Health insurance in the Netherlands", path: "/netherlands/health-insurance-netherlands/" },
    { label: "Health insurance services hub", path: "/netherlands/services/health-insurance/" },
  ],
} as const satisfies HealthcareOfficialSourcesConfig;
