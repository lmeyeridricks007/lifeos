import type { MoveTwvWorkPermitReferences } from "./moveTwvWorkPermit.types";
import { moveTwvWorkPermitRoutes } from "./moveTwvWorkPermit.shared";

const ROUTES = moveTwvWorkPermitRoutes;

export const moveTwvReferences: MoveTwvWorkPermitReferences = {
  sectionId: "official-sources",
  sectionTitle: "Official sources / useful references",
  disclaimer:
    "Use this page to understand the route context first, then confirm anything binding with official UWV, IND, government, employer, or qualified legal guidance. Work-authorization rules depend on category and can change.",
  groups: [
    {
      id: "uwv-work-permits",
      title: "UWV work permit guidance",
      links: [
        { type: "external", label: "UWV — work permit information", href: "https://www.uwv.nl/en/individuals/working-in-the-netherlands/work-permit/index.aspx" },
        { type: "external", label: "UWV — employer information on hiring foreign workers", href: "https://www.uwv.nl/werkgevers/werkvergunning/index.aspx" },
      ],
    },
    {
      id: "ind-residence",
      title: "IND work & residence guidance",
      links: [
        { type: "external", label: "IND — work and residence in the Netherlands", href: "https://ind.nl/en/work" },
        { type: "external", label: "IND — residence permits", href: "https://ind.nl/en/residence-permits" },
      ],
    },
    {
      id: "government-foreign-workers",
      title: "Government and employer-facing guidance",
      links: [
        { type: "external", label: "Government.nl — foreign workers in the Netherlands", href: "https://www.government.nl/topics/foreign-citizens-working-in-the-netherlands" },
        { type: "external", label: "Government.nl — working in the Netherlands", href: "https://www.government.nl/topics/working-in-the-netherlands" },
        { type: "external", label: "Business.gov.nl — hiring foreign personnel", href: "https://business.gov.nl/running-your-business/staff/hiring-staff/hiring-foreign-personnel/" },
      ],
    },
    {
      id: "internal-guides",
      title: "ExpatCopilot next reads",
      links: [
        { type: "internal", label: "Working in the Netherlands", href: ROUTES.workingPage },
        { type: "internal", label: "Visas & residency orientation", href: ROUTES.visas },
        { type: "internal", label: "Residence permits in the Netherlands", href: ROUTES.residencePermits },
        { type: "internal", label: "Extensions & changes in the Netherlands", href: ROUTES.extensions },
        { type: "internal", label: "Status changes in the Netherlands", href: ROUTES.statusChanges },
      ],
    },
  ],
};
