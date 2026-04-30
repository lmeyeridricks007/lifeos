import type { MoneyExpatTaxesServiceKey } from "./moneyExpatTaxesContent.types";

/** Resolve `relatedServiceKeys` on scenario / risk cards to concrete links. */
export const moneyExpatTaxesServiceRegistry: Record<MoneyExpatTaxesServiceKey, { href: string; label: string }> = {
  taxesHub: { href: "/netherlands/taxes/", label: "Netherlands taxes hub" },
  servicesAll: { href: "/netherlands/services/", label: "All services" },
  banks: { href: "/netherlands/services/banks/", label: "Banks" },
  healthInsurance: { href: "/netherlands/services/health-insurance/", label: "Health insurance" },
  relocationServices: { href: "/netherlands/services/relocation-services/", label: "Relocation services" },
  visaConsultants: { href: "/netherlands/services/visa-consultants/", label: "Visa consultants" },
  immigrationLawyers: { href: "/netherlands/services/immigration-lawyers/", label: "Immigration lawyers" },
};
