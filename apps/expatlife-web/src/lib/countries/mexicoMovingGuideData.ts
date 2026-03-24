/**
 * Extended editorial + SEO layout for the Mexico → Netherlands origin-country guide.
 * Non-EU framing: short Schengen visits vs MVV + residence permit for long stays.
 */

import { filterLiveInternalLinks } from "@/src/lib/routes/routeStatus";
import type { GuideData, GuideSection } from "@/src/lib/guides/types";
import type { CountryPageModel } from "./buildCountryPageModel";

const PILLAR_PATH = "/netherlands/moving-to-the-netherlands/";
const COUNTRY_INDEX_PATH = "/netherlands/moving-to-netherlands-from/";
const COST_ESTIMATOR_PATH = "/netherlands/moving/tools/relocation-cost-estimator/";
const DOCUMENTS_GUIDE_PATH = "/netherlands/documents-needed-to-move-netherlands/";
const COST_GUIDE_PATH = "/netherlands/moving-to-netherlands-cost/";

const OFFICIAL_NL_IMMIGRATION: Array<{ label: string; href: string }> = [
  {
    label: "Netherlands Worldwide — checklist relocating to the Netherlands",
    href: "https://www.netherlandsworldwide.nl/checklist-relocating-netherlands-immigration",
  },
  { label: "IND — Provisional residence permit (MVV)", href: "https://ind.nl/en/provisional-residence-permit-mvv" },
  {
    label: "IND — Apply for MVV and residence permit from abroad",
    href: "https://ind.nl/en/apply-for-mvv-and-residence-permit-from-abroad",
  },
  { label: "IND — Residency in the Netherlands", href: "https://ind.nl/en/residency-in-the-netherlands" },
  { label: "Government.nl — Immigration to the Netherlands", href: "https://www.government.nl/topics/immigration-to-the-netherlands" },
  {
    label: "Government.nl — What permits do foreign workers need?",
    href: "https://www.government.nl/topics/foreign-citizens-working-in-the-netherlands/question-and-answer/what-permits-do-foreign-workers-need",
  },
  {
    label: "Government.nl — How do I apply for a residence permit?",
    href: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/how-do-i-apply-for-a-residence-permit-for-the-netherlands",
  },
];

const OFFICIAL_MX_ENTRY: Array<{ label: string; href: string }> = [
  {
    label: "Netherlands Worldwide — Schengen visa (apply in Mexico)",
    href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/schengen-visa/apply-mexico",
  },
  {
    label: "Netherlands Worldwide — MVV long stay (apply in Mexico)",
    href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-mexico",
  },
];

const MEXICO_RELATED_INTERNAL = filterLiveInternalLinks([
  { label: "Moving to the Netherlands (main guide)", href: PILLAR_PATH },
  { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
  { label: "Municipality registration in the Netherlands", href: "/netherlands/municipality-registration-netherlands/" },
  { label: "Open a bank account in the Netherlands", href: "/netherlands/open-bank-account-netherlands/" },
  { label: "Health insurance in the Netherlands", href: "/netherlands/health-insurance-netherlands/" },
  { label: "Document translation in the Netherlands", href: "/netherlands/document-translation-netherlands/" },
  { label: "Document legalization in the Netherlands", href: "/netherlands/document-legalization-netherlands/" },
  { label: "Apostille documents (Netherlands context)", href: "/netherlands/apostille-documents-netherlands/" },
  { label: "Documents needed to move", href: DOCUMENTS_GUIDE_PATH },
  { label: "Cost of moving to the Netherlands", href: COST_GUIDE_PATH },
  { label: "EU vs non-EU moving to the Netherlands", href: "/netherlands/eu-vs-non-eu-moving-to-netherlands/" },
  { label: "First 90 days in the Netherlands", href: "/netherlands/first-90-days-netherlands/" },
  { label: "Netherlands services directory", href: "/netherlands/services/" },
  { label: "Dutch cities overview", href: "/netherlands/cities/" },
  { label: "Moving from your country (all guides)", href: COUNTRY_INDEX_PATH },
  { label: "How this site works", href: "/how-this-site-works/" },
  { label: "Methodology", href: "/methodology/" },
  { label: "Sources", href: "/sources/" },
]);

function mexicoSections(
  fromQuery: string,
  costEstimatorHref: string,
  costsDisclaimer?: string
): GuideSection[] {
  return [
    {
      id: "intro-overview",
      heading: "Moving from Mexico to the Netherlands — the honest picture",
      body: [
        "Relocating from Mexico to the Netherlands is materially harder than moving within the EU: immigration permission is usually the longest pole in the tent, not the flight. Most long-stay routes depend on a sponsor (employer, university, partner, or qualifying facilitator) and a document pack that survives apostille and translation checks.",
        "Mexican nationals often enjoy visa-free entry for short Schengen visits, which can make the mental model feel “easy”—until you need to work, study, or stay beyond short visits. Long stays require a residence permit aligned with a recognised purpose, and an MVV entry visa is typically part of that journey for Mexican passport holders.",
        "This guide summarises how MVV and residence permits fit together, what applying from Mexico usually involves (including collection after approval), and where to go next on official Dutch pages. It is planning support only, not legal advice.",
      ],
      links: [
        { label: "EU vs non-EU moving to the Netherlands", href: "/netherlands/eu-vs-non-eu-moving-to-netherlands/" },
        { label: "Moving to the Netherlands (main hub)", href: `${PILLAR_PATH}${fromQuery}` },
      ],
    },
    {
      id: "visa-mvv",
      heading: "Do Mexicans Need a Visa for the Netherlands?",
      body: [
        "Short stays: many Mexican passport holders do not need a Schengen visa for tourism or short business trips up to 90 days in the Schengen area. Netherlands Worldwide explains when a Schengen visa is required for applicants in Mexico—use that page if your situation is borderline or your travel purpose is unusual.",
        "Long stays: if you plan to live in the Netherlands beyond short visits, you normally need a Dutch residence permit for a specific purpose (work, study, family, certain entrepreneurship routes, etc.). The IND describes the MVV as a provisional residence permit used as a long-stay national visa (often referred to as type D) so you can enter and complete residence steps. Mexican nationals are generally not on the MVV-exempt nationality list—verify the current table on the IND before you assume an exemption.",
        "Procedure: MVV and residence permit applications are usually submitted together from abroad. For a long-stay move you normally wait for the MVV before travelling to settle—not the same as entering visa-free as a visitor. After a positive decision, you collect the MVV sticker at the Dutch embassy in Mexico City (or the competent Dutch mission for your area) as described on Netherlands Worldwide. You then enter the Netherlands within the MVV validity window and complete steps such as collecting your residence permit when your route requires it.",
        "Sponsors and work: most employment routes are permit-driven. Government.nl explains that foreign workers typically need the correct permit or route—pair that overview with IND detail for your job type and sponsor.",
      ],
      callout: {
        type: "warning",
        title: "Visa-free visits are not a work or relocation shortcut",
        text: "Tourism-style entry does not replace employment authorisation. Align your start date with permit timing, not only with your flight.",
        href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-mexico",
        linkLabel: "MVV from Mexico (Netherlands Worldwide)",
      },
      links: [
        { label: "Visa checker", href: "/netherlands/visa-checker/" },
        { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
        { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/" },
        { label: "IND — MVV", href: "https://ind.nl/en/provisional-residence-permit-mvv" },
        {
          label: "IND — Apply for MVV and residence permit from abroad",
          href: "https://ind.nl/en/apply-for-mvv-and-residence-permit-from-abroad",
        },
        {
          label: "Schengen visa — apply in Mexico",
          href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/schengen-visa/apply-mexico",
        },
        {
          label: "MVV long stay — apply in Mexico",
          href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-mexico",
        },
      ],
    },
    {
      id: "visa-route",
      heading: "Ways to Move from Mexico",
      body: [
        "Each pathway below corresponds to a residence permit type with its own sponsor, evidence, and timeline. Treat the IND checklist for your route as authoritative—especially for salary thresholds and recognised sponsor rules on skilled employment.",
      ],
      visaRoutes: {
        commonRoutes: [
          "Highly skilled migrant — sponsored employment with a recognised sponsor; a common route for tech and international companies.",
          "Student visa — tied to admission at a Dutch institution; includes proof-of-funds and insurance conditions.",
          "Partner or family — for qualifying relationships; evidence-heavy and dependent on your partner’s situation in the Netherlands.",
          "Startup visa — for eligible founders, often with facilitator involvement and business scrutiny.",
          "Self-employed — distinct criteria, business plan quality, and IND assessment; not a casual freelance default.",
        ],
        notes: [
          "Every route above requires either a sponsor, an institution, a qualifying family tie, or a positive decision on a standalone entrepreneur application—there is rarely an unsponsored “general” move.",
          "Some graduates may explore orientation-year style permits if they meet separate IND criteria; confirm eligibility before you bank on it.",
        ],
      },
      callout: {
        type: "info",
        title: "Planning note",
        text: "Immigration rules change. Confirm every requirement on official Dutch pages before you rely on it for decisions.",
      },
      links: [
        { label: "Visa checker", href: "/netherlands/visa-checker/" },
        { label: "Highly skilled migrant visa", href: "/netherlands/visa/highly-skilled-migrant/" },
        { label: "Student visa", href: "/netherlands/visa/student-visa/" },
        { label: "Partner & family visa", href: "/netherlands/visa/partner-family-visa/" },
        { label: "Self-employed visa", href: "/netherlands/visa/self-employed-visa/" },
        { label: "Compare visa routes", href: "/netherlands/visa/compare-visas/" },
        { label: "Visa consultants (Netherlands)", href: "/netherlands/services/visa-consultants/" },
        { label: "Immigration lawyers (Netherlands)", href: "/netherlands/services/immigration-lawyers/" },
      ],
    },
    {
      id: "documents",
      heading: "Documents to Prepare in Mexico",
      body: [
        "Begin with a valid passport and the checklist your sponsor or Netherlands Worldwide provides. Mexican civil records (birth, marriage, certificates requested for your route) typically need Hague apostille legalisation from the competent authority for that document—requirements can vary by Mexican state or issuing agency.",
        "Educational documents may need certified copies, apostille, and sometimes credential evaluation depending on employer or institution rules. Sworn translations into Dutch or English are common when the receiving body requests them.",
        "Unlike EU free-movement contexts, assume extra time: registro civil extracts, notarial acts, apostilles, couriers, and consular appointments can run in parallel but rarely compress to a single week.",
      ],
      bullets: [
        "Passport valid for travel and MVV collection",
        "Actas and civil documents for family or partner routes",
        "Apostille (Apostilla de La Haya) where required for Mexican public documents",
        "Sworn translations when requested",
        "Sponsor letters, contracts, or admissions specific to your permit",
      ],
      internalCta: {
        label: "Run the document readiness checker",
        href: `/netherlands/document-readiness-checker/${fromQuery}`,
      },
      links: [
        { label: "Document legalization guide", href: "/netherlands/document-legalization-netherlands/" },
        { label: "Document translation (Netherlands)", href: "/netherlands/document-translation-netherlands/" },
        { label: "Apostille in the Netherlands (guide)", href: "/netherlands/apostille-documents-netherlands/" },
        { label: "Documents needed to move", href: DOCUMENTS_GUIDE_PATH },
      ],
    },
    {
      id: "costs",
      heading: "What to Budget For",
      body: [
        "Figures swing with city, family size, and shipping choices. Treat this as a structured budget map, not a quote.",
        costsDisclaimer ?? "",
      ].filter(Boolean),
      table: {
        headers: ["Category", "How costs usually behave", "Planning notes"],
        rows: [
          [
            "Visa / MVV / permit fees",
            "Route-dependent",
            "Check IND and consular fees; MXN/EUR swings matter for planning.",
          ],
          [
            "Apostille, notary, translations",
            "Per document",
            "Batch documents where possible; express services cost more.",
          ],
          [
            "Flights Mexico–Netherlands",
            "Seasonal",
            "Align with MVV validity; book slack before first gemeente or IND appointments.",
          ],
          [
            "Initial housing",
            "High in major cities",
            "Deposits, agency fees, and temporary furnished stays are typical.",
          ],
          [
            "Shipping",
            "Variable",
            "Sea vs air; insurance and customs paperwork.",
          ],
          [
            "First weeks in the Netherlands",
            "Variable",
            "Municipality costs, insurance, phone, transport.",
          ],
          [
            "Health insurance and banking",
            "Ongoing",
            "Dutch basic health insurance is mandatory for most residents; BSN often unlocks banking.",
          ],
        ],
      },
      internalCta: { label: "Estimate relocation cost (tool) →", href: costEstimatorHref },
      links: [{ label: "Cost of moving to the Netherlands", href: COST_GUIDE_PATH }],
    },
    {
      id: "arrival-weeks",
      heading: "After Arrival",
      body: [
        "Expect a focused first month: collect your residence permit when your procedure requires it, register with the municipality to receive a BSN, open a bank account, and take out Dutch basic health insurance as a resident. DigiD and GP registration follow once identifiers exist.",
        "Government.nl and your gemeente explain sequencing; book registration slots early in tight housing markets.",
      ],
      bullets: [
        "Residence permit collection or follow-up",
        "Municipal registration and BSN",
        "Bank account for salary and rent",
        "Dutch basic health insurance",
        "DigiD, phone, transport",
      ],
      links: [
        { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
        { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" },
        { label: "BSN registration", href: "/netherlands/bsn-registration/" },
        { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
        { label: "Health insurance", href: "/netherlands/health-insurance-netherlands/" },
      ],
    },
    {
      id: "service-hubs",
      heading: "Services That Support Non-EU Moves from Mexico",
      body: [
        "Because immigration and document timing dominate, many Mexican movers compare regulated visa consultants, immigration lawyers, relocation agencies, housing platforms, banks, and insurers before they fly. The hubs below group listings used elsewhere on ExpatCopilot; provider cards under “Useful services” use the same affiliate dataset—compare scope and fees yourself.",
      ],
      links: filterLiveInternalLinks([
        { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
        { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/" },
        { label: "Relocation services", href: "/netherlands/services/relocation-services/" },
        { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
        { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
        { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
        { label: "Banks for expats", href: "/netherlands/services/banks/" },
        { label: "Health insurance", href: "/netherlands/services/health-insurance/" },
        { label: "Highly skilled migrant sponsors", href: "/netherlands/services/highly-skilled-migrant-sponsors/" },
        { label: "Startup visa advisors", href: "/netherlands/services/startup-visa-advisors/" },
        { label: "All Netherlands services", href: "/netherlands/services/" },
      ]).map((l) => ({ label: l.label, href: l.href })),
    },
    {
      id: "cities-mexico",
      heading: "Dutch Cities Mexican Movers Often Shortlist",
      body: [
        "Pick based on job location, industry clusters, housing pressure, and family needs. These guides are practical starting points.",
      ],
      links: filterLiveInternalLinks([
        { label: "Amsterdam", href: "/netherlands/amsterdam/" },
        { label: "Rotterdam", href: "/netherlands/rotterdam/" },
        { label: "Utrecht", href: "/netherlands/utrecht/" },
        { label: "Eindhoven", href: "/netherlands/eindhoven/" },
        { label: "The Hague", href: "/netherlands/the-hague/" },
        { label: "Compare all cities", href: "/netherlands/cities/" },
      ]).map((l) => ({ label: l.label, href: l.href })),
    },
    {
      id: "shipping",
      heading: "Shipping and long-distance logistics",
      body: [
        "Atlantic routing often means sea freight measured in weeks plus handling. Pair shipments with MVV travel dates and temporary housing so you are not paying storage indefinitely.",
      ],
      bullets: [
        "Choose between shared container, full container, and air options for essentials.",
        "Document inventories for insurance.",
        "Plan pet travel separately if applicable.",
      ],
      links: [
        { label: "Shipping household goods to the Netherlands", href: "/netherlands/shipping-household-goods-netherlands/" },
        { label: "Bringing pets", href: "/netherlands/bringing-pets-to-netherlands/" },
      ],
    },
    {
      id: "official-sources",
      heading: "Official sources",
      body: [
        "Primary Dutch government references:",
        "Immigration, work, and residence",
        "Applying from Mexico — Schengen and MVV",
      ],
      links: [...OFFICIAL_NL_IMMIGRATION, ...OFFICIAL_MX_ENTRY],
    },
  ];
}

export function augmentMexicoGuideData(model: CountryPageModel, base: GuideData): GuideData {
  const fromQuery = `?from=${encodeURIComponent(model.slug)}`;
  const costEstimatorHref = `${COST_ESTIMATOR_PATH}${fromQuery}`;
  const checklistHref = `/netherlands/moving/tools/moving-checklist/${fromQuery}`;
  const pillarWithFrom = `${PILLAR_PATH}${fromQuery}`;

  return {
    ...base,
    publishDate: "2026-04-17",
    lastUpdated: "Last updated: 17 April 2026.",
    title: "Moving to the Netherlands from Mexico",
    metaTitle: model.seo.title,
    subtitle:
      "Understand visa requirements, MVV process, residence permits, and relocation steps from Mexico to the Netherlands.",
    description: model.seo.description,
    quickAnswersTitle: "Mexico to Netherlands move — snapshot",
    quickAnswers: [
      { label: "Legal framing", value: "Non-EU relocation" },
      {
        label: "Short stay",
        value: "Often visa-free up to 90 days in Schengen—separate from work or long-term residence",
      },
      { label: "Long stay", value: "Residence permit required; MVV typically required for Mexican nationals" },
      { label: "Main process", value: "MVV + residence permit (usually applied together from Mexico)" },
      { label: "Typical pathways", value: "Work (e.g. HSM), study, partner, startup, self-employment" },
      { label: "Complexity", value: "Medium–high (immigration, documents, housing)" },
    ],
    tocItems: [
      { id: "intro-overview", label: "Overview" },
      { id: "visa-mvv", label: "Visa & MVV" },
      { id: "visa-route", label: "Pathways" },
      { id: "documents", label: "Documents" },
      { id: "costs", label: "Budget" },
      { id: "arrival-weeks", label: "After arrival" },
      { id: "service-hubs", label: "Services" },
      { id: "cities-mexico", label: "Cities" },
      { id: "shipping", label: "Shipping" },
      { id: "official-sources", label: "Official sources" },
      { id: "tools", label: "Tools" },
      { id: "example-scenarios", label: "Scenarios" },
      { id: "useful-services", label: "Provider picks" },
      { id: "faq", label: "FAQ" },
      { id: "related-guides", label: "Related guides" },
      { id: "explore-next", label: "Explore next" },
    ],
    heroCta: {
      title: "Plan your move from Mexico",
      supportingText:
        "Use the moving hub, regulated services, and tools to sequence MVV/residence steps, documents, housing, and first-month admin.",
      primaryCtaLabel: "Explore visa & move options",
      primaryCtaHref: pillarWithFrom,
      secondaryCtaLabel: "Browse Netherlands services",
      secondaryCtaHref: "/netherlands/services/",
      tertiaryCtaLabel: "Generate your moving checklist",
      tertiaryCtaHref: checklistHref,
      supportingLinks: [
        { label: "Visa checker", href: "/netherlands/visa-checker/" },
        { label: "Moving checklist tool", href: checklistHref },
        { label: "Relocation cost estimator", href: costEstimatorHref },
        { label: "All origin-country guides", href: COUNTRY_INDEX_PATH },
      ],
    },
    sections: mexicoSections(fromQuery, costEstimatorHref, model.costs.disclaimer),
    internalLinks: {
      ...base.internalLinks,
      related: MEXICO_RELATED_INTERNAL,
    },
    relatedGuidesSectionTitle: "Related guides before moving from Mexico",
    servicesSectionTitle: "Useful services when relocating from Mexico",
    servicesIntro:
      "Provider cards below are drawn from the same affiliate dataset used on other Netherlands pages. Compare options yourself; inclusion here is not a recommendation.",
    scenariosSectionTitle: "Typical Mexico-to-Netherlands scenarios",
    scenariosSectionIntro:
      "Use the checklist tool with ?from=mexico to keep your origin context while you work through tasks.",
    exampleScenarios: [
      {
        title: "Mexican tech worker with a Dutch sponsor",
        summary:
          "Line up IND processing with your employer, MVV collection in Mexico, housing within commute range, and BSN-first banking and insurance.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Mexican student starting in the Netherlands",
        summary:
          "Match admission dates to permit timing, plan apostilled actas and diplomas, and budget for student housing competition in larger cities.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Partner relocation from Mexico",
        summary:
          "Prioritise relationship evidence and civil documents; timelines hinge on your partner’s residence status. Translation and legalisation are common.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Entrepreneur or startup applicant",
        summary:
          "Expect detailed business evidence, possible facilitator coordination, and longer review cycles than a standard employee route.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
    ],
    exploreNextCards: [
      {
        title: "Netherlands services directory",
        description: "Visa consultants, lawyers, housing, banks, and insurance in one hub.",
        ctaLabel: "Browse services",
        ctaHref: "/netherlands/services/",
      },
      {
        title: "Dutch cities compared",
        description: "Match commute, industry, and housing pressure before you commit.",
        ctaLabel: "Explore cities",
        ctaHref: "/netherlands/cities/",
      },
      {
        title: "Visa consultants",
        description: "Helpful when consular timing and document stacks are tight.",
        ctaLabel: "View visa consultants",
        ctaHref: "/netherlands/services/visa-consultants/",
      },
      {
        title: "Immigration lawyers",
        description: "For refusals, appeals, or multi-country document histories.",
        ctaLabel: "View immigration lawyers",
        ctaHref: "/netherlands/services/immigration-lawyers/",
      },
      {
        title: "Complete moving guide",
        description: "Return to the Netherlands-wide moving pillar for timelines and deep links.",
        ctaLabel: "Moving to the Netherlands",
        ctaHref: pillarWithFrom,
      },
    ],
  };
}
