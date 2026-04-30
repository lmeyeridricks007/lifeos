import type { MoneyTaxResidencyServiceDirectoryKey } from "./moneyTaxResidencyTypes";

export const MONEY_TAX_RESIDENCY_SERVICE_REGISTRY: Record<
  MoneyTaxResidencyServiceDirectoryKey,
  { href: string; label: string }
> = {
  allServices: { href: "/netherlands/services/", label: "All services" },
  banks: { href: "/netherlands/services/banks/", label: "Banks" },
  healthInsurance: { href: "/netherlands/services/health-insurance/", label: "Health insurance" },
  relocationServices: { href: "/netherlands/services/relocation-services/", label: "Relocation services" },
  visaConsultants: { href: "/netherlands/services/visa-consultants/", label: "Visa consultants" },
  immigrationLawyers: { href: "/netherlands/services/immigration-lawyers/", label: "Immigration lawyers" },
};
