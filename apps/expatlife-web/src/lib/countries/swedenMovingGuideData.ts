/**
 * Extended editorial + SEO layout for the Sweden → Netherlands origin-country guide (EU citizens).
 * Focus: free movement, registration, BSN, housing, banking, insurance—not visa/MVV framing.
 */

import { filterLiveInternalLinks } from "@/src/lib/routes/routeStatus";
import type { GuideData, GuideSection } from "@/src/lib/guides/types";
import type { CountryPageModel } from "./buildCountryPageModel";

const PILLAR_PATH = "/netherlands/moving-to-the-netherlands/";
const COUNTRY_INDEX_PATH = "/netherlands/moving-to-netherlands-from/";
const COST_ESTIMATOR_PATH = "/netherlands/moving/tools/relocation-cost-estimator/";
const DOCUMENTS_GUIDE_PATH = "/netherlands/documents-needed-to-move-netherlands/";
const COST_GUIDE_PATH = "/netherlands/moving-to-netherlands-cost/";

const OFFICIAL_EU_MOVEMENT: Array<{ label: string; href: string }> = [
  {
    label: "European Union — Your Europe: residence rights in the EU",
    href: "https://europa.eu/youreurope/citizens/residence/residence-rights/index_en.htm",
  },
];

const OFFICIAL_NL_RELOC: Array<{ label: string; href: string }> = [
  {
    label: "Netherlands Worldwide — checklist relocating to the Netherlands",
    href: "https://www.netherlandsworldwide.nl/checklist-relocating-netherlands-immigration",
  },
  {
    label: "Government.nl — What to arrange when moving to the Netherlands",
    href: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/what-do-i-need-to-arrange-if-im-moving-to-the-netherlands",
  },
  {
    label: "Government.nl — Checklist: coming to the Netherlands for work",
    href: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/checklist-coming-to-the-nederlands-for-work",
  },
];

const OFFICIAL_DOCS_LEGALISATION: Array<{ label: string; href: string }> = [
  {
    label: "Netherlands Worldwide — Legalisation of foreign documents (overview)",
    href: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents",
  },
  {
    label: "Netherlands Worldwide — Apostille Convention countries",
    href: "https://www.netherlandsworldwide.nl/legalisation/apostille-convention-countries",
  },
];

const SWEDEN_RELATED_INTERNAL = filterLiveInternalLinks([
  { label: "Moving to the Netherlands (main guide)", href: PILLAR_PATH },
  { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
  { label: "Municipality registration in the Netherlands", href: "/netherlands/municipality-registration-netherlands/" },
  { label: "Open a bank account in the Netherlands", href: "/netherlands/open-bank-account-netherlands/" },
  { label: "Health insurance in the Netherlands", href: "/netherlands/health-insurance-netherlands/" },
  { label: "Document translation in the Netherlands", href: "/netherlands/document-translation-netherlands/" },
  { label: "Document legalization in the Netherlands", href: "/netherlands/document-legalization-netherlands/" },
  { label: "Apostille documents (Netherlands context)", href: "/netherlands/apostille-documents-netherlands/" },
  { label: "EU vs non-EU moving to the Netherlands", href: "/netherlands/eu-vs-non-eu-moving-to-netherlands/" },
  { label: "Documents needed to move", href: DOCUMENTS_GUIDE_PATH },
  { label: "Cost of moving to the Netherlands", href: COST_GUIDE_PATH },
  { label: "First 90 days in the Netherlands", href: "/netherlands/first-90-days-netherlands/" },
  { label: "Netherlands services directory", href: "/netherlands/services/" },
  { label: "Dutch cities overview", href: "/netherlands/cities/" },
  { label: "Moving from your country (all guides)", href: COUNTRY_INDEX_PATH },
  { label: "How this site works", href: "/how-this-site-works/" },
  { label: "Methodology", href: "/methodology/" },
  { label: "Sources", href: "/sources/" },
]);

const CITY_LINKS = filterLiveInternalLinks([
  { label: "Amsterdam", href: "/netherlands/amsterdam/" },
  { label: "Rotterdam", href: "/netherlands/rotterdam/" },
  { label: "Utrecht", href: "/netherlands/utrecht/" },
  { label: "The Hague", href: "/netherlands/the-hague/" },
  { label: "Eindhoven", href: "/netherlands/eindhoven/" },
  { label: "Haarlem", href: "/netherlands/haarlem/" },
  { label: "Leiden", href: "/netherlands/leiden/" },
  { label: "Delft", href: "/netherlands/delft/" },
  { label: "Amstelveen", href: "/netherlands/amstelveen/" },
  { label: "Maastricht", href: "/netherlands/maastricht/" },
  { label: "Breda", href: "/netherlands/breda/" },
  { label: "Tilburg", href: "/netherlands/tilburg/" },
  { label: "Arnhem", href: "/netherlands/arnhem/" },
  { label: "Nijmegen", href: "/netherlands/nijmegen/" },
  { label: "Groningen", href: "/netherlands/groningen/" },
  { label: "Compare all cities", href: "/netherlands/cities/" },
]).map((l) => ({ label: l.label, href: l.href }));

function swedenSections(
  fromQuery: string,
  costEstimatorHref: string,
  costsDisclaimer?: string
): GuideSection[] {
  return [
    {
      id: "intro-overview",
      heading: "What People Moving from Sweden Need to Know Before Moving to the Netherlands",
      body: [
        "As a Swedish citizen you are an EU citizen. That means freedom of movement: you can live, work, and study in the Netherlands without a visa or EU-style residence permit application in the ordinary case described on EU and Dutch sources.",
        "The move still feels like a real relocation: finding housing, registering with the municipality, receiving your BSN, taking out Dutch basic health insurance when you are resident, opening a bank account, and setting up DigiD and daily life usually take more effort than border formalities.",
        "Documents moving between EU countries are often simpler than for non-EU nationals, but requirements still depend on document type and who requests them. Netherlands Worldwide explains when legalisation or apostille might still matter—confirm each item with the receiving authority.",
        "This guide supports planning only; it is not legal advice. Use Your Europe, Government.nl, and your municipality for authoritative answers.",
      ],
      links: [
        { label: "EU vs non-EU moving to the Netherlands", href: "/netherlands/eu-vs-non-eu-moving-to-netherlands/" },
        { label: "Moving to the Netherlands (main hub)", href: `${PILLAR_PATH}${fromQuery}` },
      ],
    },
    {
      id: "sweden-visa-basics",
      heading: "Do Swedish Citizens Need a Visa or Residence Permit?",
      body: [
        "No—for a standard move under EU free movement, Swedish citizens do not need a visa to enter or live in the Netherlands, and they do not follow the same residence-permit process as many non-EU nationals.",
        "Your Europe summarises residence rights for EU citizens moving within the EU. Dutch government pages describe what to arrange when you actually live in the Netherlands (registration, insurance, and so on).",
        "You can stay up to three months without the same registration obligations as a longer stay; if you remain as a resident, municipal registration and a BSN become central. After about four months of living in the Netherlands, registration is normally required, and you must register within five working days of having a residential address—your gemeente confirms details.",
        "MVV and long-stay visa processes featured in our non-EU guides are not the default storyline here. Only unusual situations (for example certain non-EU family members or atypical legal questions) might need different routes or professional advice.",
      ],
      callout: {
        type: "info",
        title: "EU mover framing",
        text: "If everyone in your household is an EU citizen exercising free movement, think registration and practical setup first—not immigration-law services as a default.",
      },
      links: [
        {
          label: "Your Europe — EU residence rights",
          href: "https://europa.eu/youreurope/citizens/residence/residence-rights/index_en.htm",
        },
        { label: "Immigration lawyers (optional — complex cases)", href: "/netherlands/services/immigration-lawyers/" },
        { label: "Visa consultants (optional — atypical situations)", href: "/netherlands/services/visa-consultants/" },
      ],
    },
    {
      id: "registration-bsn",
      heading: "Registering in the Netherlands and Getting Your BSN",
      body: [
        "Municipal registration is how you obtain a BSN (citizen service number). Banks, insurers, and employers routinely need it.",
        "Book or request your appointment as soon as your Dutch address is confirmed. Bring valid ID (passport or national ID) and the address evidence your municipality lists.",
        "If you keep your main residence in Sweden while working or studying partly in the Netherlands, you may not be a full Dutch resident for registration purposes—check official guidance for cross-border situations rather than assuming standard registration applies.",
      ],
      bullets: [
        "Valid Swedish passport or EU national ID",
        "Rental contract or other address proof required by the gemeente",
        "After registration, use your BSN for banking and insurance",
      ],
      internalCta: {
        label: "Read the municipality registration guide",
        href: "/netherlands/municipality-registration-netherlands/",
      },
      links: [
        { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
        { label: "BSN registration (related)", href: "/netherlands/bsn-registration/" },
      ],
    },
    {
      id: "documents",
      heading: "Documents People Moving from Sweden Often Need",
      body: [
        "Bring a valid Swedish passport or national ID, housing documents for registration, and any civil-status or education papers your municipality, employer, or university asks for.",
        "Between EU countries many procedures are lighter than for third-country nationals, but you should still verify each document. Netherlands Worldwide’s legalisation overview explains when apostille or other steps could apply outside the routine case.",
        "Translation is only needed when the authority that receives the document requires an accepted language.",
      ],
      bullets: [
        "Passport or national ID card",
        "Dutch address proof for gemeente registration",
        "Employment contract or university admission when relevant",
        "Civil-status extracts if requested (confirm format with the gemeente)",
      ],
      internalCta: {
        label: "Run the document readiness checker",
        href: `/netherlands/document-readiness-checker/${fromQuery}`,
      },
      links: [
        { label: "Apostille in the Netherlands (context)", href: "/netherlands/apostille-documents-netherlands/" },
        { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
        { label: "Document legalization", href: "/netherlands/document-legalization-netherlands/" },
        { label: "Documents needed to move", href: DOCUMENTS_GUIDE_PATH },
      ],
    },
    {
      id: "visa-route",
      heading: "Work, Study, and Lifestyle Moves from Sweden",
      body: [
        "EU free movement means you can take up work or study without employer “sponsorship” in the non-EU sense, though employers still run payroll and contracts normally.",
        "Each situation has its own practical checklist: housing proximity, insurance start date, banking for salary or student finance, and any school or childcare registration for families.",
      ],
      visaRoutes: {
        commonRoutes: [
          "Moving for work — align start date, Dutch basic health insurance from residence, payroll banking, and commute-friendly housing.",
          "Moving as a student — admission, student housing or rental search, and student insurance rules; confirm document formats with your institution.",
          "Remote worker or lifestyle move — registration and insurance still apply if you are resident in the Netherlands; tax and social-security ties across borders may need professional advice.",
          "Family relocation — plan gemeente appointments for each person and gather civil-status evidence the municipality expects.",
        ],
        notes: [
          "Housing competition in major Dutch cities is often the hardest part of the timeline.",
          "Official EU and Dutch pages remain the source of truth for your circumstances.",
        ],
      },
      links: [
        { label: "Moving to the Netherlands (main hub)", href: `${PILLAR_PATH}${fromQuery}` },
        { label: "First 90 days in the Netherlands", href: "/netherlands/first-90-days-netherlands/" },
      ],
    },
    {
      id: "costs",
      heading: "What to Budget For When Moving from Sweden",
      body: [
        "Travel from Sweden can be affordable (especially with flight deals), but Dutch deposits, agency fees, and first-month costs add up. Use the table as categories to research—not fixed amounts.",
        costsDisclaimer ?? "",
      ].filter(Boolean),
      table: {
        headers: ["Category", "How costs usually behave", "Planning notes"],
        rows: [
          ["Transport and removal", "Varies", "Flight, ferry, or road via Denmark/Germany; compare peak dates."],
          ["Initial housing", "City-dependent", "Deposits, agency fees, temporary stay while you search."],
          ["Registration and first weeks", "Mostly time", "Insurance start aligned with residence; small gemeente fees if any."],
          ["Health insurance", "Monthly premium", "Dutch basic insurance mandatory for most residents."],
          ["Banking", "Varies", "Often easier after BSN; digital banks are popular."],
          ["Documents", "Usually low", "Apostille or copies only if a specific authority requires them."],
        ],
      },
      internalCta: { label: "Estimate relocation cost (tool) →", href: costEstimatorHref },
      links: [{ label: "Cost of moving to the Netherlands", href: COST_GUIDE_PATH }],
    },
    {
      id: "arrival-weeks",
      heading: "What to Arrange After You Arrive",
      body: [
        "Typical order: confirm address → municipal registration and BSN → bank account → Dutch basic health insurance → DigiD → phone, utilities, transport.",
        "The after-arrival guide links these steps; the pages below are the ones Swedish movers use most in week one.",
      ],
      bullets: [
        "Municipal registration and BSN",
        "Bank account",
        "Dutch basic health insurance",
        "DigiD and daily services",
      ],
      links: [
        { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
        { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
        { label: "Health insurance", href: "/netherlands/health-insurance-netherlands/" },
      ],
    },
    {
      id: "service-hubs",
      heading: "Useful Services for People Moving from Sweden to the Netherlands",
      body: [
        "Most EU movers start with housing platforms, relocation help, banks, and insurers. Immigration-law and visa-consultant directories are listed last for atypical cases—not as a default need.",
        "Provider cards use the same affiliate dataset as elsewhere; compare options yourself; listings are not endorsements.",
      ],
      links: filterLiveInternalLinks([
        { label: "Relocation services", href: "/netherlands/services/relocation-services/" },
        { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
        { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
        { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
        { label: "Banks for expats", href: "/netherlands/services/banks/" },
        { label: "Health insurance", href: "/netherlands/services/health-insurance/" },
        { label: "Immigration lawyers (optional)", href: "/netherlands/services/immigration-lawyers/" },
        { label: "Visa consultants (optional)", href: "/netherlands/services/visa-consultants/" },
        { label: "All Netherlands services", href: "/netherlands/services/" },
      ]).map((l) => ({ label: l.label, href: l.href })),
    },
    {
      id: "cities-sweden",
      heading: "Popular Dutch Cities People Moving from Sweden Often Consider",
      body: [
        "Tech hiring, international schools, and ferry or flight links shape choices. Many Swedes compare Amsterdam and Utrecht with Eindhoven, The Hague, and Rotterdam for work clusters and housing trade-offs.",
      ],
      links: CITY_LINKS,
    },
    {
      id: "cross-border-logistics",
      heading: "Getting from Sweden to the Netherlands",
      body: [
        "Options include direct flights, ferries toward the northern Netherlands, or driving through Denmark and Germany. For household goods, compare removals, partial loads, and van hire; plan elevator and parking at your Dutch building.",
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
        "EU — free movement and residence rights",
        "Netherlands — relocating and working",
        "Document legalisation background",
      ],
      links: [...OFFICIAL_EU_MOVEMENT, ...OFFICIAL_NL_RELOC, ...OFFICIAL_DOCS_LEGALISATION],
    },
  ];
}

export function augmentSwedenGuideData(model: CountryPageModel, base: GuideData): GuideData {
  const fromQuery = `?from=${encodeURIComponent(model.slug)}`;
  const costEstimatorHref = `${COST_ESTIMATOR_PATH}${fromQuery}`;
  const checklistHref = `/netherlands/moving/tools/moving-checklist/${fromQuery}`;
  const pillarWithFrom = `${PILLAR_PATH}${fromQuery}`;

  return {
    ...base,
    publishDate: "2026-04-27",
    lastUpdated: "Last updated: 27 April 2026.",
    metaTitle: model.seo.title,
    title: "Moving to the Netherlands from Sweden",
    breadcrumbLabel: "From Sweden",
    subtitle:
      "Understand registration, housing, BSN, and practical steps for relocating from Sweden to the Netherlands.",
    description: model.seo.description,
    quickAnswersTitle: "Sweden to Netherlands Move at a Glance",
    quickAnswers: [
      { label: "Legal status", value: "EU freedom of movement—no visa or standard residence permit for ordinary moves" },
      { label: "Admin focus", value: "Municipal registration, BSN, insurance, banking, housing" },
      { label: "Ease of move", value: "High on immigration paperwork; still demanding on housing and setup" },
      { label: "Main challenge", value: "Competitive rental market and first-month costs in popular cities" },
      { label: "Main early tasks", value: "Secure address, register, obtain BSN, arrange insurance and bank" },
      { label: "Trade-off to know", value: "Simple rights do not guarantee simple housing or instant appointments" },
    ],
    tocItems: [
      { id: "intro-overview", label: "Overview" },
      { id: "sweden-visa-basics", label: "Visa & permits" },
      { id: "registration-bsn", label: "Registration & BSN" },
      { id: "documents", label: "Documents" },
      { id: "visa-route", label: "Work & lifestyle" },
      { id: "costs", label: "Budget" },
      { id: "arrival-weeks", label: "After arrival" },
      { id: "service-hubs", label: "Services" },
      { id: "cities-sweden", label: "Cities" },
      { id: "cross-border-logistics", label: "Travel" },
      { id: "official-sources", label: "Official sources" },
      { id: "tools", label: "Tools" },
      { id: "example-scenarios", label: "Scenarios" },
      { id: "useful-services", label: "Provider examples" },
      { id: "faq", label: "FAQ" },
      { id: "related-guides", label: "Related guides" },
      { id: "explore-next", label: "Explore next" },
    ],
    heroCta: {
      title: "Plan your move from Sweden",
      supportingText:
        "Use the main moving hub for the full timeline, or open registration, housing, and services when you are ready.",
      primaryCtaLabel: "Explore Move Steps",
      primaryCtaHref: pillarWithFrom,
      secondaryCtaLabel: "Browse Services",
      secondaryCtaHref: "/netherlands/services/",
      tertiaryCtaLabel: "Generate your moving checklist",
      tertiaryCtaHref: checklistHref,
      supportingLinks: [
        { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" },
        { label: "Moving checklist tool", href: checklistHref },
        { label: "Relocation cost estimator", href: costEstimatorHref },
        { label: "All origin-country guides", href: COUNTRY_INDEX_PATH },
      ],
    },
    sections: swedenSections(fromQuery, costEstimatorHref, model.costs.disclaimer),
    internalLinks: {
      ...base.internalLinks,
      related: SWEDEN_RELATED_INTERNAL,
    },
    relatedGuidesSectionTitle: "Related Guides Before Moving from Sweden",
    servicesSectionTitle: "Useful Services for People Moving from Sweden to the Netherlands",
    servicesIntro:
      "Provider cards reuse the site’s affiliate dataset—housing, relocation, banking, and insurance first for typical EU movers. Compare providers yourself; inclusion is not a recommendation.",
    scenariosSectionTitle: "Common Sweden-to-Netherlands Relocation Scenarios",
    scenariosSectionIntro:
      "Use the checklist with ?from=sweden to keep origin context while you work through housing and registration.",
    exampleScenarios: [
      {
        title: "Swedish professional starting a job in Amsterdam or Utrecht",
        summary:
          "Line up gemeente registration and BSN, insurance from residence, and salary banking. Housing near work is usually the bottleneck—not visa steps.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Swedish student enrolling at a Dutch university",
        summary:
          "Confirm housing, student insurance, and any document formats your school needs. EU moves skip MVV-style paths for the typical Swedish citizen.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Remote worker relocating for lifestyle",
        summary:
          "If you become resident in the Netherlands, registration and Dutch basic insurance still apply. Cross-border tax questions may need advice after reading official overviews.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Family moving with children",
        summary:
          "Book registration for each person, gather civil-status documents the gemeente expects, and research schools or childcare early in larger cities.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Choosing Rotterdam or Eindhoven over Amsterdam",
        summary:
          "Compare rent pressure, commute, and industry clusters. Use our city guides for a grounded shortlist.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Ferry or road move with household goods",
        summary:
          "Plan parking, building access, and insurance for the journey; compare removals versus van hire for your volume.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
    ],
    exploreNextCards: [
      {
        title: "Netherlands services directory",
        description: "Housing, banking, insurance, relocation support.",
        ctaLabel: "Browse services",
        ctaHref: "/netherlands/services/",
      },
      {
        title: "Dutch cities compared",
        description: "Randstad hubs and regional alternatives.",
        ctaLabel: "Explore cities",
        ctaHref: "/netherlands/cities/",
      },
      {
        title: "Relocation services",
        description: "Hands-on help for housing search and coordination.",
        ctaLabel: "View relocation services",
        ctaHref: "/netherlands/services/relocation-services/",
      },
      {
        title: "Housing platforms",
        description: "Listings and temporary options while you search.",
        ctaLabel: "View housing platforms",
        ctaHref: "/netherlands/services/housing-platforms/",
      },
      {
        title: "Complete moving guide",
        description: "Netherlands-wide timeline and deep links.",
        ctaLabel: "Moving to the Netherlands",
        ctaHref: pillarWithFrom,
      },
    ],
  };
}
