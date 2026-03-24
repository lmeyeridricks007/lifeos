/**
 * Extended editorial + SEO layout for the Singapore → Netherlands origin-country guide.
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
    label: "Netherlands Worldwide — checklist relocating to the Netherlands (immigration)",
    href: "https://www.netherlandsworldwide.nl/checklist-relocating-netherlands-immigration",
  },
  { label: "IND — Provisional residence permit (MVV)", href: "https://ind.nl/en/provisional-residence-permit-mvv" },
  {
    label: "IND — Apply for MVV and residence permit from abroad",
    href: "https://ind.nl/en/apply-for-mvv-and-residence-permit-from-abroad",
  },
  { label: "Government.nl — Immigration to the Netherlands", href: "https://www.government.nl/topics/immigration-to-the-netherlands" },
  {
    label: "Government.nl — Living in the Netherlands on a residence permit",
    href: "https://www.government.nl/topics/immigration-to-the-netherlands/living-in-the-netherlands-on-a-residence-permit",
  },
  {
    label: "Government.nl — How do I apply for a residence permit for the Netherlands?",
    href: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/how-do-i-apply-for-a-residence-permit-for-the-netherlands",
  },
  {
    label: "Government.nl — Checklist: coming to the Netherlands for work",
    href: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/checklist-coming-to-the-nederlands-for-work",
  },
];

const OFFICIAL_SG_NWW: Array<{ label: string; href: string }> = [
  {
    label: "Netherlands Worldwide — MVV long stay (apply in Singapore)",
    href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-singapore",
  },
  {
    label: "Netherlands Worldwide — Making an appointment (Singapore)",
    href: "https://www.netherlandsworldwide.nl/making-appointment/singapore",
  },
  {
    label: "Netherlands Worldwide — Schengen visa (apply in Singapore)",
    href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/schengen-visa/apply-singapore",
  },
  {
    label: "Netherlands Worldwide — Entry visa (apply in Singapore)",
    href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/entry-visa/apply-singapore",
  },
  { label: "Netherlands Worldwide — MVV issue form", href: "https://www.netherlandsworldwide.nl/mvv-issue-form" },
  {
    label: "Netherlands Worldwide — Civic integration exam abroad (Singapore)",
    href: "https://www.netherlandsworldwide.nl/civic-integration-exam-abroad/singapore",
  },
];

const OFFICIAL_SG_DOCS: Array<{ label: string; href: string }> = [
  {
    label: "Netherlands Worldwide — Legalisation of documents from Singapore",
    href: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents/singapore",
  },
  {
    label: "Singapore MFA — Legalisation of documents",
    href: "https://www.mfa.gov.sg/i-need-help-overseas/legalisation-of-documents/",
  },
  {
    label: "Singapore Academy of Law — Legalisation information",
    href: "https://legalisation.sal.sg/LegalisationInfo",
  },
];

const SINGAPORE_RELATED_INTERNAL = filterLiveInternalLinks([
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
  { label: "EU vs non-EU moving to the Netherlands", href: "/netherlands/eu-vs-non-eu-moving-to-the-netherlands/" },
  { label: "First 90 days in the Netherlands", href: "/netherlands/first-90-days-netherlands/" },
  { label: "Netherlands services directory", href: "/netherlands/services/" },
  { label: "Dutch cities overview", href: "/netherlands/cities/" },
  { label: "Moving from your country (all guides)", href: COUNTRY_INDEX_PATH },
  { label: "How this site works", href: "/how-this-site-works/" },
  { label: "Methodology", href: "/methodology/" },
  { label: "Sources", href: "/sources/" },
]);

function singaporeSections(
  fromQuery: string,
  costEstimatorHref: string,
  costsDisclaimer?: string
): GuideSection[] {
  return [
    {
      id: "intro-overview",
      heading: "What People Moving from Singapore Need to Know Before Moving to the Netherlands",
      body: [
        "Moving from Singapore to the Netherlands usually means planning around immigration permission, civil documents, housing, banking, health coverage, and municipal registration—not only booking a flight. Singapore is outside the EU, EEA, and Switzerland, so permit rules are central to most longer stays.",
        "Short-stay travel and long-term relocation follow different official processes. A smooth tourist or business visit does not answer the question of how you will live, work, or study in the Netherlands beyond short visits.",
        "Not everyone follows the same path: sponsored employment, study, partner or family routes, entrepreneurship where criteria are met, and corporate assignments all have different evidence, sponsors, and timelines. This guide maps the main themes and points you to official Dutch and Singapore-specific consular pages—planning support only, not guaranteed legal advice.",
      ],
      links: [
        { label: "EU vs non-EU moving to the Netherlands", href: "/netherlands/eu-vs-non-eu-moving-to-the-netherlands/" },
        { label: "Moving to the Netherlands (main hub)", href: `${PILLAR_PATH}${fromQuery}` },
      ],
    },
    {
      id: "visa-mvv",
      heading: "Visa, MVV and Residence Permit Basics for Moving from Singapore",
      body: [
        "Short stays: Schengen short-stay rules apply to visits up to 90 days in the Schengen area. Netherlands Worldwide publishes Singapore-specific pages for Schengen visas and entry visas when one is required—use those pages to confirm your passport situation. Many Singapore passport holders can visit short-term without a Schengen visa under current rules, but your purpose of stay and any edge cases still matter; do not confuse short visits with relocating.",
        "Long stays: if you intend to live in the Netherlands for more than short visits, you normally need a Dutch residence permit for a recognised purpose (work, study, family, certain entrepreneurship routes, etc.). The IND describes the MVV as a long-stay entry visa used in many procedures so you can travel to the Netherlands and complete steps such as collecting your residence permit. Whether you need an MVV depends on nationality and the specific permit route—check the IND’s MVV information and exemption rules rather than assuming one answer for every case.",
        "Procedure: in many long-stay routes, MVV and residence permit steps are linked and handled from abroad with a sponsor or institution. After a positive decision, the IND letter indicates where to collect the MVV sticker; Netherlands Worldwide covers MVV applications and appointments for Singapore. This is not the same workflow as a short tourist trip.",
        "If your situation is complex, corroborate every requirement on Government.nl, the IND, and Netherlands Worldwide, and consider regulated visa consultants or immigration lawyers for case-specific help.",
      ],
      callout: {
        type: "warning",
        title: "Short visits are not a relocation shortcut",
        text: "Entering for tourism or short business does not replace employment authorisation or a residence permit. Align your travel date with MVV validity and sponsor timelines when a long-stay route applies.",
        href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-singapore",
        linkLabel: "MVV from Singapore (Netherlands Worldwide)",
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
          label: "MVV long stay — apply in Singapore",
          href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-singapore",
        },
        {
          label: "Schengen visa — apply in Singapore",
          href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/schengen-visa/apply-singapore",
        },
      ],
    },
    {
      id: "visa-route",
      heading: "Main Ways to Move from Singapore to the Netherlands",
      body: [
        "The right route depends on why you are moving. Most pathways depend on a sponsor—an employer, university, partner, or qualifying institution—or on meeting standalone entrepreneur criteria assessed by the IND. Treat the checklist for your specific permit type as authoritative.",
      ],
      visaRoutes: {
        commonRoutes: [
          "Moving for work — employment with a Dutch or recognised sponsor; highly skilled migrant is a common pattern for international employers.",
          "Highly skilled migrant — salary and sponsor rules apply; timelines are often driven by IND processing and MVV collection.",
          "Study — admission at a Dutch institution as sponsor; proof-of-funds and insurance conditions are typical.",
          "Partner or family — relationship and civil evidence; processing depends on your family member’s status in the Netherlands.",
          "Entrepreneur or startup founder — startup or self-employment routes where IND criteria are met; often more bespoke than employee tracks.",
          "Sponsored company transfer or international assignment — clarify which Dutch entity sponsors and which permit type applies.",
        ],
        notes: [
          "Every route above requires either a sponsor, an institution, a qualifying family tie, or a positive entrepreneur decision—there is rarely an unsponsored general relocation.",
          "Civic integration requirements may apply depending on your route; Netherlands Worldwide lists the civic integration exam in Singapore where relevant.",
        ],
      },
      callout: {
        type: "info",
        title: "Verify your exact route",
        text: "Immigration rules change. Confirm salary thresholds, sponsor recognition, and document lists on official Dutch sources before you rely on them for decisions.",
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
      heading: "Documents People Moving from Singapore Often Need Before Moving",
      body: [
        "Start with a valid passport and the checklist your sponsor, university, or Netherlands Worldwide provides for your permit type. Civil documents (birth, marriage, name changes) are common for family and registration steps.",
        "To use many Singapore-issued public documents in the Netherlands, legalisation with a Hague apostille through the Singapore Academy of Law (SAL) is the standard path described on Netherlands Worldwide. Singapore’s Ministry of Foreign Affairs also states that SAL is Singapore’s designated competent authority for apostilles. You may still need sworn translation when the receiving body requests Dutch or English versions.",
        "Educational and employment evidence varies by route; keep certified copies and track which originals you must carry for MVV collection and first appointments.",
      ],
      bullets: [
        "Passport valid for travel and consular steps",
        "Birth, marriage, or civil-status documents when relevant",
        "Proof of address or status documents if your procedure requires them",
        "SAL apostille on Singapore public documents when legalisation is required",
        "Sworn translations when requested",
        "Sponsor letters, contracts, admissions, or business evidence for your permit",
      ],
      internalCta: {
        label: "Run the document readiness checker",
        href: `/netherlands/document-readiness-checker/${fromQuery}`,
      },
      links: [
        { label: "Apostille documents (guide)", href: "/netherlands/apostille-documents-netherlands/" },
        { label: "Document translation (Netherlands)", href: "/netherlands/document-translation-netherlands/" },
        { label: "Document legalization guide", href: "/netherlands/document-legalization-netherlands/" },
        { label: "Documents needed to move", href: DOCUMENTS_GUIDE_PATH },
        {
          label: "Netherlands Worldwide — legalisation (Singapore)",
          href: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents/singapore",
        },
      ],
    },
    {
      id: "short-long-stay",
      heading: "Short Visits vs Long-Term Relocation",
      body: [
        "Short visits fall under Schengen short-stay rules (up to 90 days in any 180-day period in the Schengen area, subject to the official conditions that apply to you). Netherlands Worldwide’s Singapore pages explain when a Schengen visa or entry visa is needed.",
        "Long-term relocation means living in the Netherlands under a residence permit for a specific purpose. That process involves the IND, often an MVV in many nationalities and routes, sponsors, and different document expectations than a holiday booking.",
        "If you are house-hunting or interviewing from Singapore, keep your activities aligned with the entry rules that actually apply to you; do not assume a short visit authorises work or replaces a permit.",
      ],
      links: [
        {
          label: "Schengen visa — apply in Singapore",
          href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/schengen-visa/apply-singapore",
        },
        {
          label: "MVV long stay — apply in Singapore",
          href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-singapore",
        },
        { label: "IND — MVV overview", href: "https://ind.nl/en/provisional-residence-permit-mvv" },
      ],
    },
    {
      id: "costs",
      heading: "What to Budget For When Moving from Singapore",
      body: [
        "Costs vary sharply with city, family size, housing choices, and how much you ship. Use this as a planning map rather than a fixed quote.",
        costsDisclaimer ?? "",
      ].filter(Boolean),
      table: {
        headers: ["Category", "How costs usually behave", "Planning notes"],
        rows: [
          [
            "Visa / MVV / permit fees",
            "Route-dependent",
            "Check IND and consular fee pages; SGD/EUR moves with exchange rates.",
          ],
          [
            "Apostille / legalisation (SAL and related)",
            "Per document",
            "Batch where possible; express options cost more.",
          ],
          [
            "Sworn translation",
            "Per document or page",
            "Match translator credentials to what your sponsor or gemeente requests.",
          ],
          [
            "Flights Singapore–Netherlands",
            "Seasonal",
            "Align with MVV validity and first-week appointments.",
          ],
          [
            "Initial housing",
            "High in major cities",
            "Deposits, agency fees, and temporary furnished stays are common.",
          ],
          [
            "Shipping",
            "Variable",
            "Sea vs air for household goods; insurance and customs paperwork.",
          ],
          [
            "First weeks in the Netherlands",
            "Variable",
            "Registration, insurance, phone, transport, and setup costs.",
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
      heading: "What to Arrange After You Arrive",
      body: [
        "Most people sequence municipality registration and BSN, residence permit steps if your route requires collection or follow-up in the Netherlands, a bank account, and Dutch basic health insurance as a resident. DigiD and GP registration follow once identifiers exist.",
        "Book gemeente slots early in tight markets; keep SAL-apostilled documents and translations accessible for any follow-up appointments.",
      ],
      bullets: [
        "Municipal registration and BSN",
        "Residence permit pickup or IND follow-up if applicable",
        "Bank account for salary and rent",
        "Dutch basic health insurance",
        "DigiD, phone, transport, daily-life setup",
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
      heading: "Useful Services for People Moving from Singapore to the Netherlands",
      body: [
        "Non-EU moves from Singapore are often immigration- and document-heavy. Many people compare regulated visa consultants, immigration lawyers, relocation agencies, housing platforms, banks, and insurers while still in Singapore. The hubs below match listings used elsewhere on this site; provider cards in “Useful services” draw from the same dataset—compare scope and fees yourself.",
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
      id: "cities-singapore",
      heading: "Popular Dutch Cities People Moving from Singapore Often Consider",
      body: [
        "Choose using job location, industry clusters, housing pressure, international schools if needed, and commute tolerance. These city guides are practical starting points.",
      ],
      links: filterLiveInternalLinks([
        { label: "Amsterdam", href: "/netherlands/amsterdam/" },
        { label: "Rotterdam", href: "/netherlands/rotterdam/" },
        { label: "Utrecht", href: "/netherlands/utrecht/" },
        { label: "The Hague", href: "/netherlands/the-hague/" },
        { label: "Eindhoven", href: "/netherlands/eindhoven/" },
        { label: "Haarlem", href: "/netherlands/haarlem/" },
        { label: "Amstelveen", href: "/netherlands/amstelveen/" },
        { label: "Leiden", href: "/netherlands/leiden/" },
        { label: "Delft", href: "/netherlands/delft/" },
        { label: "Groningen", href: "/netherlands/groningen/" },
        { label: "Maastricht", href: "/netherlands/maastricht/" },
        { label: "Breda", href: "/netherlands/breda/" },
        { label: "Tilburg", href: "/netherlands/tilburg/" },
        { label: "Arnhem", href: "/netherlands/arnhem/" },
        { label: "Nijmegen", href: "/netherlands/nijmegen/" },
        { label: "Compare all cities", href: "/netherlands/cities/" },
      ]).map((l) => ({ label: l.label, href: l.href })),
    },
    {
      id: "shipping",
      heading: "Shipping and long-distance logistics",
      body: [
        "Singapore-to-Europe moves often combine sea freight for household goods with air baggage or courier for essentials. Temporary furnished housing in the Netherlands helps while shipments and MVV-driven travel dates align.",
      ],
      bullets: [
        "Compare shared container, full container, and air options.",
        "Keep inventories for insurance and customs.",
        "Plan pet travel separately if applicable.",
      ],
      links: [
        { label: "Shipping household goods to the Netherlands", href: "/netherlands/shipping-household-goods-netherlands/" },
        { label: "Bringing pets", href: "/netherlands/bringing-pets-to-netherlands/" },
      ],
    },
    {
      id: "official-sources",
      heading: "Official Sources and Useful References",
      body: [
        "Netherlands immigration and relocation:",
        "Singapore-specific Dutch visa, MVV, appointments, and civic integration exam:",
        "Singapore document apostille and legalisation:",
        "Always confirm the latest version on the official site—procedures and fees change.",
      ],
      links: [...OFFICIAL_NL_IMMIGRATION, ...OFFICIAL_SG_NWW, ...OFFICIAL_SG_DOCS],
    },
  ];
}

export function augmentSingaporeGuideData(model: CountryPageModel, base: GuideData): GuideData {
  const fromQuery = `?from=${encodeURIComponent(model.slug)}`;
  const costEstimatorHref = `${COST_ESTIMATOR_PATH}${fromQuery}`;
  const checklistHref = `/netherlands/moving/tools/moving-checklist/${fromQuery}`;
  const pillarWithFrom = `${PILLAR_PATH}${fromQuery}`;

  return {
    ...base,
    publishDate: "2026-04-20",
    lastUpdated: "Last updated: 20 April 2026.",
    title: "Moving to the Netherlands from Singapore",
    metaTitle: model.seo.title,
    subtitle:
      "Discover the main visa routes, MVV requirements, document apostille rules, and practical settlement steps for moving from Singapore to the Netherlands.",
    description: model.seo.description,
    quickAnswersTitle: "Singapore to Netherlands Move at a Glance",
    quickAnswers: [
      { label: "Main move routes", value: "Work, study, partner/family, entrepreneur, sponsored relocation" },
      { label: "Key admin theme", value: "Residence-permit planning plus apostilled documents where required" },
      {
        label: "Common document issue",
        value: "Singapore documents often need a Hague apostille through SAL for use in Dutch procedures",
      },
      { label: "Good fit for", value: "Professionals, students, families, entrepreneurs, sponsored movers" },
      {
        label: "Main early tasks",
        value: "Confirm permit route, prepare documents, line up registration and first-weeks setup",
      },
      {
        label: "Trade-off to know",
        value: "Permit and document timing can add complexity—start early and track dependencies",
      },
    ],
    tocItems: [
      { id: "intro-overview", label: "Overview" },
      { id: "visa-mvv", label: "Visa & MVV" },
      { id: "visa-route", label: "Pathways" },
      { id: "documents", label: "Documents" },
      { id: "short-long-stay", label: "Short vs long stay" },
      { id: "costs", label: "Budget" },
      { id: "arrival-weeks", label: "After arrival" },
      { id: "service-hubs", label: "Services" },
      { id: "cities-singapore", label: "Cities" },
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
      title: "Plan your move from Singapore",
      supportingText:
        "Use the moving hub, regulated services, and tools to sequence MVV and residence steps, SAL apostilles, housing, and first-month admin.",
      primaryCtaLabel: "Explore Visa & Move Options",
      primaryCtaHref: pillarWithFrom,
      secondaryCtaLabel: "Browse Netherlands Services",
      secondaryCtaHref: "/netherlands/services/",
      tertiaryCtaLabel: "Generate your moving checklist",
      tertiaryCtaHref: checklistHref,
      supportingLinks: [
        { label: "Visa checker", href: "/netherlands/visa-checker/" },
        { label: "Moving checklist tool", href: checklistHref },
        { label: "Relocation cost estimator", href: costEstimatorHref },
        { label: "Document readiness checker", href: `/netherlands/document-readiness-checker/${fromQuery}` },
        { label: "All origin-country guides", href: COUNTRY_INDEX_PATH },
      ],
    },
    sections: singaporeSections(fromQuery, costEstimatorHref, model.costs.disclaimer),
    internalLinks: {
      ...base.internalLinks,
      related: SINGAPORE_RELATED_INTERNAL,
    },
    relatedGuidesSectionTitle: "Related Guides Before Moving from Singapore",
    servicesSectionTitle: "Useful services when relocating from Singapore",
    servicesIntro:
      "Provider cards below are drawn from the same affiliate dataset used on other Netherlands pages. Compare options yourself; inclusion here is not an endorsement.",
    scenariosSectionTitle: "Common Singapore-to-Netherlands Relocation Scenarios",
    scenariosSectionIntro:
      "Use the checklist tool with ?from=singapore to keep origin context while you work through tasks.",
    exampleScenarios: [
      {
        title: "Singaporean professional moving for work",
        summary:
          "Align sponsor timelines, MVV collection per your IND letter, housing within commute range, and BSN-first banking and insurance.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Singaporean student moving for university",
        summary:
          "Match admission to study permit conditions; plan SAL apostilles on academic and civil documents; budget for student housing competition.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Partner or family relocation from Singapore",
        summary:
          "Relationship evidence and civil documents are central; timelines depend on your partner’s status in the Netherlands.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Entrepreneur or startup founder exploring Dutch options",
        summary:
          "Map IND criteria, possible facilitator involvement, and municipality registration—expect more bespoke evidence than a standard employee route.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Sponsored corporate transfer from Singapore",
        summary:
          "Clarify sponsor entity, permit type, MVV sequencing, and payroll transition with your mobility team.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Family preparing apostilled documents for Dutch use",
        summary:
          "Batch SAL apostilles, track translations, and keep originals organised for gemeente and IND follow-ups.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Long-stay mover comparing cities after permit approval",
        summary:
          "Use city guides to weigh commute, schools, and housing pressure before you sign a lease—still within MVV travel timing.",
        href: "/netherlands/cities/",
        ctaLabel: "Explore Dutch cities",
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
        description: "For refusals, appeals, or multi-step permit histories.",
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
