import type { MoveResigningJobReferencesConfig } from "./moveResigningJobNl.config.types";
import { moveResigningJobNlRoutes as ROUTES } from "./moveResigningJobNl.routes";

export const moveResigningJobReferences = {
  sectionId: "official-sources",
  sectionTitle: "Official sources / useful references",
  disclaimer:
    "Requirements and interpretations change. Use these to **verify** what applies to you — especially for **employment, stay, tax, and benefits** after this orientation page.",
  groups: [
    {
      id: "work-residence",
      title: "Work, residence, and newcomer guidance",
      links: [
        { type: "external", label: "IND — Dutch Immigration and Naturalisation Service", href: "https://ind.nl/en" },
        {
          type: "external",
          label: "Government.nl — Working in the Netherlands",
          href: "https://www.government.nl/topics/working-in-the-netherlands",
        },
        {
          type: "external",
          label: "Government.nl — Immigration to the Netherlands",
          href: "https://www.government.nl/topics/immigration-to-the-netherlands",
        },
        { type: "external", label: "Work in NL", href: "https://www.workinnl.nl/" },
      ],
    },
    {
      id: "tax-contracts",
      title: "Tax, payroll, and employment-contract orientation",
      links: [
        {
          type: "external",
          label: "Belastingdienst — individuals (incl. internationals)",
          href: "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/individuals",
        },
        {
          type: "external",
          label: "Government.nl — Employment contracts and CAO",
          href: "https://www.government.nl/topics/employment-contract-and-collective-agreement-cao",
        },
        { type: "internal", label: "Municipality registration guide", href: ROUTES.municipalityRegistration },
        {
          type: "internal",
          label: "Health insurance in the Netherlands",
          href: "/netherlands/health-insurance-netherlands/",
        },
      ],
    },
  ],
} satisfies MoveResigningJobReferencesConfig;
