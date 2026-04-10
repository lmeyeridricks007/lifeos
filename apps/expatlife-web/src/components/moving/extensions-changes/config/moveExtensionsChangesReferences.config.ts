import type { MoveVisaResidencyReferences } from "../../visas-residency/config/moveVisaResidency.types";

export const moveExtensionsChangesReferences = {
  sectionId: "official-sources",
  sectionTitle: "Official sources & useful references",
  disclaimer:
    "ExpatCopilot helps you understand extensions and changes in plain language — not replace government decisions. When nationality, income, sponsor, or timing affects your case, use official sources or ask a qualified adviser.",
  groups: [
    {
      id: "immigration",
      title: "Immigration & residence",
      links: [
        { type: "external", label: "IND — Immigration and Naturalisation Service →", href: "https://ind.nl/en" },
        { type: "external", label: "IND — Residence permits overview →", href: "https://ind.nl/en/residence-permits" },
        { type: "external", label: "Netherlands Worldwide — travel & documents →", href: "https://www.netherlandsworldwide.nl/" },
      ],
    },
    {
      id: "government",
      title: "Government newcomer information",
      links: [
        { type: "external", label: "Government.nl — immigration topics →", href: "https://www.government.nl/topics/immigration/" },
        { type: "external", label: "Government.nl — living in the Netherlands →", href: "https://www.government.nl/topics/living-in-the-netherlands/" },
      ],
    },
    {
      id: "municipality",
      title: "Municipality registration",
      links: [
        { type: "internal", label: "Municipality registration (ExpatCopilot) →", href: "/netherlands/municipality-registration-netherlands/" },
        { type: "internal", label: "BSN registration →", href: "/netherlands/bsn-registration/" },
      ],
    },
    {
      id: "health",
      title: "Also useful",
      links: [
        { type: "external", label: "Government.nl — health insurance →", href: "https://www.government.nl/topics/health-insurance" },
        { type: "internal", label: "Health insurance guide (ExpatCopilot) →", href: "/netherlands/health-insurance-netherlands/" },
      ],
    },
  ],
} satisfies MoveVisaResidencyReferences;
