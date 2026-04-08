/** Outbound official references for the childcare cost estimator (not ExpatCopilot endorsements). */
export const CHILDCARE_OFFICIAL_SOURCES = [
  {
    href: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/toeslagen/kinderopvangtoeslag/kinderopvangtoeslag",
    label: "Belastingdienst — kinderopvangtoeslag",
    note: "Authoritative hub for the childcare benefit; use their tools for applications and entitlement questions.",
  },
  {
    href: "https://www.rijksoverheid.nl/onderwerpen/kinderopvangtoeslag",
    label: "Rijksoverheid — childcare benefit overview",
    note: "Policy-level explanation in Dutch government English where available; good orientation before you read provider contracts.",
  },
  {
    href: "https://www.toeslagen.nl/",
    label: "Toeslagen.nl — applications",
    note: "Central entry for benefit applications and account tasks; keep login details secure.",
  },
  {
    href: "https://www.rijksoverheid.nl/onderwerpen/kinderopvang",
    label: "Rijksoverheid — childcare (kinderopvang)",
    note: "How daycare, gastouder, and out-of-school care fit in the wider system — not a price list.",
  },
] as const;
