import type { MoveVisaResidencyReferences } from "../../../visas-residency/config/moveVisaResidency.types";

export const moveResidencePermitReferences: MoveVisaResidencyReferences = {
  sectionId: "official-sources",
  sectionTitle: "Official sources & useful references",
  disclaimer:
    "ExpatCopilot helps you plan—it doesn’t replace the government. For rules that depend on your nationality, income, or permit type, use official sites or a qualified professional.",
  groups: [
    {
      id: "ind",
      title: "Immigration & residence (IND)",
      links: [
        { type: "external", label: "IND — Immigration and Naturalisation Service →", href: "https://ind.nl/en" },
        { type: "external", label: "IND — Residence permits overview →", href: "https://ind.nl/en/residence-permits" },
      ],
    },
    {
      id: "gov",
      title: "Government newcomer information",
      links: [
        { type: "external", label: "Government.nl — immigration topics →", href: "https://www.government.nl/topics/immigration/" },
        {
          type: "external",
          label: "Government.nl — living in the Netherlands on a residence permit →",
          href: "https://www.government.nl/topics/immigration-to-the-netherlands/living-in-the-netherlands-on-a-residence-permit",
        },
      ],
    },
    {
      id: "gemeente",
      title: "Municipality registration",
      links: [
        { type: "internal", label: "Municipality registration (ExpatCopilot) →", href: "/netherlands/municipality-registration-netherlands/" },
        { type: "internal", label: "BSN registration →", href: "/netherlands/bsn-registration/" },
      ],
    },
    {
      id: "health",
      title: "Healthcare context",
      links: [
        {
          type: "external",
          label: "Government.nl — health insurance & residence permit →",
          href: "https://www.government.nl/topics/health-insurance/health-insurance-and-residence-permit",
        },
        { type: "internal", label: "Health insurance guide (ExpatCopilot) →", href: "/netherlands/health-insurance-netherlands/" },
      ],
    },
  ],
};
