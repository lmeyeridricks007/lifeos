import type { MoveVisaResidencyReferences } from "../../visas-residency/config/moveVisaResidency.types";

export const moveStatusChangesReferences = {
  sectionId: "official-sources",
  sectionTitle: "Official sources & useful references",
  disclaimer:
    "ExpatCopilot helps you get oriented when your situation changes. It does not determine your legal status or replace official instructions. If timing, sponsorship, nationality, or household facts could affect your case, confirm with official sources or qualified help.",
  groups: [
    {
      id: "immigration",
      title: "Immigration & residence",
      links: [
        { type: "external", label: "IND — Immigration and Naturalisation Service →", href: "https://ind.nl/en" },
        { type: "external", label: "IND — Residence permits overview →", href: "https://ind.nl/en/residence-permits" },
        { type: "external", label: "IND — Work residence permits →", href: "https://ind.nl/en/residence-permits/work" },
        { type: "external", label: "IND — Family and partner permits →", href: "https://ind.nl/en/residence-permits/family-and-partner" },
        { type: "external", label: "IND — Study residence permits →", href: "https://ind.nl/en/residence-permits/study" },
      ],
    },
    {
      id: "government",
      title: "Government newcomer information",
      links: [
        { type: "external", label: "Government.nl — immigration topics →", href: "https://www.government.nl/topics/immigration" },
        { type: "external", label: "Government.nl — living in the Netherlands →", href: "https://www.government.nl/topics/living-in-the-netherlands" },
        { type: "external", label: "Netherlands Worldwide — travel & documents →", href: "https://www.netherlandsworldwide.nl/" },
      ],
    },
    {
      id: "registration",
      title: "Municipality registration & admin",
      links: [
        { type: "internal", label: "Municipality registration (ExpatCopilot) →", href: "/netherlands/municipality-registration-netherlands/" },
        { type: "internal", label: "BSN registration →", href: "/netherlands/bsn-registration/" },
        { type: "internal", label: "Arrival planner →", href: "/netherlands/moving/tools/arrival-planner/" },
      ],
    },
    {
      id: "practical",
      title: "Practical setup while status is changing",
      links: [
        { type: "internal", label: "Healthcare basics →", href: "/netherlands/living/healthcare-basics/" },
        { type: "internal", label: "First 90 days planner →", href: "/netherlands/moving/tools/first-90-days/" },
        { type: "internal", label: "Document readiness →", href: "/netherlands/moving/tools/document-readiness/" },
      ],
    },
  ],
} satisfies MoveVisaResidencyReferences;
