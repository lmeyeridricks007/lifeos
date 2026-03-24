/**
 * Extended editorial + SEO layout for the Brazil → Netherlands origin-country guide.
 * Non-EU framing: visa-free short visits vs MVV + residence permit for long stays.
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
    label: "Government.nl — How do I apply for a residence permit?",
    href: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/how-do-i-apply-for-a-residence-permit-for-the-netherlands",
  },
];

const OFFICIAL_BR_ENTRY: Array<{ label: string; href: string }> = [
  {
    label: "Netherlands Worldwide — Schengen visa (apply in Brazil)",
    href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/schengen-visa/apply-brazil",
  },
  {
    label: "Netherlands Worldwide — MVV long stay (apply in Brazil)",
    href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-brazil",
  },
];

const BRAZIL_RELATED_INTERNAL = filterLiveInternalLinks([
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

function brazilSections(
  fromQuery: string,
  costEstimatorHref: string,
  costsDisclaimer?: string
): GuideSection[] {
  return [
    {
      id: "intro-overview",
      heading: "Moving from Brazil to the Netherlands — what makes it different",
      body: [
        "Relocating from Brazil is not a light EU border crossing: Brazilian nationals need structured immigration permission for long stays, and the timeline is often set by sponsors, document legalisation, and MVV processing—not just a flight booking.",
        "The gap between “visa-free tourism” and “moving for work or study” catches people off guard. Short Schengen visits are handled under different rules than residence permits. If your goal is to live in the Netherlands, start from residence-permit routes and official IND guidance, not from holiday entry rules alone.",
        "This guide summarises how MVV entry visas fit into many Brazilian long-stay procedures, what document preparation from Brazil often looks like, and which practical Netherlands topics to line up next. It supports planning only; it is not legal advice.",
      ],
      links: [
        { label: "EU vs non-EU moving to the Netherlands", href: "/netherlands/eu-vs-non-eu-moving-to-netherlands/" },
        { label: "Moving to the Netherlands (main hub)", href: `${PILLAR_PATH}${fromQuery}` },
      ],
    },
    {
      id: "visa-mvv",
      heading: "Do Brazilians Need a Visa for the Netherlands?",
      body: [
        "For short stays in the Schengen area, Brazilian passport holders are often visa-exempt for visits up to 90 days—Netherlands Worldwide explains the Schengen situation for applicants in Brazil. Use that for tourism or short business trips, not as proof you can work or study long term.",
        "If you intend to stay longer than such short visits, you normally need a Dutch residence permit that matches a recognised purpose (work, study, family, certain entrepreneurship routes, etc.). For Brazilian nationals, an MVV is typically also required: the IND describes the MVV as a provisional residence permit used as a long-stay entry visa, and Brazil is generally not on the list of nationalities exempt from the MVV requirement—always confirm the current exemption table on the IND.",
        "In many procedures the MVV and residence permit are applied for together from abroad. After approval, you collect the MVV sticker at the Dutch mission in Brazil (Netherlands Worldwide publishes Brazil-specific instructions, including consular coverage such as São Paulo). You then travel within the validity window and complete steps in the Netherlands such as collecting your residence permit when applicable.",
        "A sponsor—employer, educational institution, partner, or other qualifying sponsor depending on route—usually initiates or backs the application. Government.nl summarises how residence permit applications typically work with sponsorship.",
      ],
      callout: {
        type: "warning",
        title: "Avoid mixing up short visits and relocation",
        text: "Entering visa-free for a holiday does not replace a work or study permit. Working without the right permission has serious consequences—confirm your route before you plan employment.",
        href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-brazil",
        linkLabel: "MVV from Brazil (Netherlands Worldwide)",
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
          label: "Schengen visa — apply in Brazil",
          href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/schengen-visa/apply-brazil",
        },
        {
          label: "MVV long stay — apply in Brazil",
          href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-brazil",
        },
      ],
    },
    {
      id: "visa-route",
      heading: "Ways to Move from Brazil to the Netherlands",
      body: [
        "Each route below leads to a specific residence permit type with its own evidence, fees, and processing time. Treat sponsor responsibilities and IND checklists as the source of truth—especially for salary thresholds on skilled employment routes.",
      ],
      visaRoutes: {
        commonRoutes: [
          "Highly skilled migrant — sponsored employment with a recognised sponsor; common for tech and corporate moves from Brazil.",
          "Paid employment — other work permits where a Dutch employer meets sponsor rules for that permit type.",
          "Study — residence permit for study tied to a Dutch institution; admission and funds requirements apply.",
          "Partner or family — for eligible relationships; heavy documentation on civil status and sometimes income.",
          "Startup / self-employment — distinct business criteria; facilitators or advisors are common.",
          "Orientation year (search year) for highly educated people — for eligible graduates; separate conditions from standard work sponsorship; confirm on the IND if you may qualify after completing qualifying studies.",
        ],
        notes: [
          "None of these routes is an “instant” move: build months of buffer for apostilles, translations, and consular scheduling.",
          "If your employer is new to Dutch sponsorship, consider comparing relocation agencies and immigration counsel early—see the service section below.",
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
      heading: "Documents to Prepare in Brazil",
      body: [
        "Start from a valid passport and the document list your sponsor or Netherlands Worldwide provides for your permit type. Brazilian civil records (birth, marriage, police certificates when requested) often need apostille legalisation under the Hague Convention and may need sworn translation for Dutch authorities.",
        "Unlike moves from EU countries, you should assume extra steps: cartório certification, CNJ registration where applicable for some acts, and courier time between cities. Educational diplomas and professional credentials may need recognition or certified copies depending on employer or IND requests.",
        "Keep scans and originals organised; you will reuse many documents for municipality registration after arrival.",
      ],
      bullets: [
        "Passport with enough validity for travel and permit collection",
        "Birth and marriage certificates when relevant to family or partner routes",
        "Apostille legalisation for Brazilian public documents where required",
        "Sworn translations when the receiving authority requests Dutch or English",
        "Permit-specific employer, university, or partner evidence",
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
        "Costs vary sharply by city, family size, and whether you ship furniture. Use the table as a planning checklist, not a price guarantee.",
        costsDisclaimer ?? "",
      ].filter(Boolean),
      table: {
        headers: ["Category", "How costs usually behave", "Planning notes"],
        rows: [
          [
            "Visa / MVV / permit fees",
            "Route-dependent",
            "Use official IND and consular fee pages; currency swings affect BRL planning.",
          ],
          [
            "Apostille, notary, translations",
            "Per document",
            "Cartório and courier fees add up—sequence tasks to avoid express premiums.",
          ],
          [
            "Flights Brazil–Netherlands",
            "Seasonal",
            "Book around MVV validity; allow jet lag before first appointments.",
          ],
          [
            "Initial housing",
            "City-dependent",
            "Deposits and agency fees; temporary furnished stays are common.",
          ],
          [
            "Shipping",
            "Variable",
            "Sea freight vs air; insurance and customs paperwork.",
          ],
          [
            "First weeks after arrival",
            "Variable",
            "Municipality fees, insurance, phone, transport passes.",
          ],
          [
            "Health insurance and banking",
            "Ongoing",
            "Dutch basic health insurance is mandatory for most residents; banking often follows BSN.",
          ],
        ],
      },
      internalCta: { label: "Estimate relocation cost (tool) →", href: costEstimatorHref },
      links: [{ label: "Cost of moving to the Netherlands", href: COST_GUIDE_PATH }],
    },
    {
      id: "arrival-weeks",
      heading: "After Arriving in the Netherlands",
      body: [
        "Most people prioritise collecting the residence permit when the procedure requires it, registering at the municipality to receive a BSN, opening a bank account, and taking out Dutch basic health insurance as a resident. DigiD and GP registration follow once identifiers exist.",
        "Government.nl describes collecting a residence permit after entry for many routes; combine that with your gemeente’s registration instructions for appointments and documents.",
      ],
      bullets: [
        "Residence permit collection or follow-up if required",
        "Municipal registration and BSN",
        "Bank account aligned with salary and address",
        "Dutch basic health insurance",
        "DigiD, phone, and transport",
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
      heading: "Services That Help Brazilians Relocate",
      body: [
        "Because immigration steps are central, many Brazilian movers compare regulated visa consultants, immigration lawyers, relocation firms, housing platforms, banks, and insurers. The hubs below group vetted-style listings; the provider cards in “Useful services” come from the same affiliate datasets used elsewhere—research and compare yourself.",
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
      id: "cities-brazil",
      heading: "Dutch Cities Brazilians Often Consider",
      body: [
        "Choice usually depends on job location, industry clusters, housing pressure, and international-school needs for families. Start from these guides and narrow by commute.",
      ],
      links: filterLiveInternalLinks([
        { label: "Amsterdam", href: "/netherlands/amsterdam/" },
        { label: "Eindhoven", href: "/netherlands/eindhoven/" },
        { label: "Rotterdam", href: "/netherlands/rotterdam/" },
        { label: "Utrecht", href: "/netherlands/utrecht/" },
        { label: "The Hague", href: "/netherlands/the-hague/" },
        { label: "Compare all cities", href: "/netherlands/cities/" },
      ]).map((l) => ({ label: l.label, href: l.href })),
    },
    {
      id: "shipping",
      heading: "Shipping and long-distance logistics",
      body: [
        "Transatlantic moves often use sea freight with weeks of transit. Many Brazilian families keep a short-term rental in the Netherlands while paperwork and shipments catch up.",
      ],
      bullets: [
        "Decide between shared container, full container, and air freight for essentials.",
        "Align shipment arrival with MVV travel dates and lease start.",
        "Keep inventory documentation for insurance.",
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
        "Use these Dutch government pages as your primary references.",
        "Immigration and residence",
        "Applying from Brazil — Schengen and MVV",
      ],
      links: [...OFFICIAL_NL_IMMIGRATION, ...OFFICIAL_BR_ENTRY],
    },
  ];
}

export function augmentBrazilGuideData(model: CountryPageModel, base: GuideData): GuideData {
  const fromQuery = `?from=${encodeURIComponent(model.slug)}`;
  const costEstimatorHref = `${COST_ESTIMATOR_PATH}${fromQuery}`;
  const checklistHref = `/netherlands/moving/tools/moving-checklist/${fromQuery}`;
  const pillarWithFrom = `${PILLAR_PATH}${fromQuery}`;

  return {
    ...base,
    publishDate: "2026-04-14",
    lastUpdated: "Last updated: 14 April 2026.",
    title: "Moving to the Netherlands from Brazil",
    metaTitle: model.seo.title,
    subtitle:
      "Understand visa requirements, MVV process, residence permits, and the full relocation journey from Brazil to the Netherlands.",
    description: model.seo.description,
    quickAnswersTitle: "Brazil to Netherlands move — snapshot",
    quickAnswers: [
      { label: "Legal status", value: "Non-EU relocation" },
      { label: "Long-term stay", value: "Residence permit required; MVV typically required for Brazilian nationals" },
      {
        label: "Short stay (tourism / short business)",
        value: "Often visa-free up to 90 days in Schengen—separate from moving for work or study",
      },
      { label: "Main process", value: "MVV + residence permit (usually applied together from Brazil)" },
      { label: "Typical pathways", value: "Work (e.g. HSM), study, partner, startup, orientation year if eligible" },
      { label: "Complexity", value: "Medium to high (immigration + documents + housing)" },
    ],
    tocItems: [
      { id: "intro-overview", label: "Overview" },
      { id: "visa-mvv", label: "Visa & MVV" },
      { id: "visa-route", label: "Pathways" },
      { id: "documents", label: "Documents" },
      { id: "costs", label: "Budget" },
      { id: "arrival-weeks", label: "After arrival" },
      { id: "service-hubs", label: "Services" },
      { id: "cities-brazil", label: "Cities" },
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
      title: "Plan your move from Brazil",
      supportingText:
        "Use the moving hub, regulated services, and planning tools to sequence immigration, documents, housing, and first-month admin.",
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
    sections: brazilSections(fromQuery, costEstimatorHref, model.costs.disclaimer),
    internalLinks: {
      ...base.internalLinks,
      related: BRAZIL_RELATED_INTERNAL,
    },
    relatedGuidesSectionTitle: "Related guides before moving from Brazil",
    servicesSectionTitle: "Useful services when relocating from Brazil",
    servicesIntro:
      "Provider cards below are drawn from the same affiliate dataset used on other Netherlands pages. Compare options yourself; inclusion here is not a recommendation.",
    scenariosSectionTitle: "Typical Brazil-to-Netherlands scenarios",
    scenariosSectionIntro:
      "Use the checklist tool with ?from=brazil to keep your origin context while you work through tasks.",
    exampleScenarios: [
      {
        title: "Brazilian tech professional with a Dutch job offer",
        summary:
          "Sequence sponsor-side IND steps, MVV collection in Brazil, housing search, and BSN-first banking and insurance. Add visa-consultant support if the employer is new to sponsorship.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Brazilian student starting a degree in the Netherlands",
        summary:
          "Align admission, study permit, funds proof, and student housing. Plan apostilles and translations for diplomas and civil records with buffer time.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Partner relocating from Brazil",
        summary:
          "Focus on relationship evidence and civil documents; timelines depend on the partner’s status. Legalisation and translations are common.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Entrepreneur or startup route",
        summary:
          "Map business criteria, facilitator involvement, and municipality registration. Expect more bespoke evidence than a standard employee route.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Graduate exploring an orientation year",
        summary:
          "If you may qualify after completing eligible studies, confirm IND criteria and timing, then plan MVV/residence steps alongside job search.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
    ],
    exploreNextCards: [
      {
        title: "Netherlands services directory",
        description: "Visa support, lawyers, housing, banks, and insurance in one place.",
        ctaLabel: "Browse services",
        ctaHref: "/netherlands/services/",
      },
      {
        title: "Dutch cities compared",
        description: "Match commute, industry, and lifestyle before you sign a lease.",
        ctaLabel: "Explore cities",
        ctaHref: "/netherlands/cities/",
      },
      {
        title: "Visa consultants",
        description: "Useful when timelines are tight or documents span multiple countries.",
        ctaLabel: "View visa consultants",
        ctaHref: "/netherlands/services/visa-consultants/",
      },
      {
        title: "Immigration lawyers",
        description: "For refusals, appeals, or complex family and business cases.",
        ctaLabel: "View immigration lawyers",
        ctaHref: "/netherlands/services/immigration-lawyers/",
      },
      {
        title: "Complete moving guide",
        description: "Return to the Netherlands-wide moving pillar for deep links and context.",
        ctaLabel: "Moving to the Netherlands",
        ctaHref: pillarWithFrom,
      },
    ],
  };
}
