import { moveLayoffsNlRoutes as ROUTES } from "./moveLayoffsNl.routes";
import type { MoveLayoffsReferencesConfig } from "../moveLayoffsNl.content.model";

export const moveLayoffsReferences = {
  sectionId: "official-sources",
  sectionTitle: "Official sources / useful references",
  disclaimer:
    "Layoff situations vary by employer, contract, and route. Use these sources to verify what applies to you — especially for stay, work permission, tax, and benefits.",
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
      title: "Tax, payroll, and employment orientation",
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
} satisfies MoveLayoffsReferencesConfig;
