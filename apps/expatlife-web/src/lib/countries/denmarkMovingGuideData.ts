/**
 * Extended editorial + SEO layout for the Denmark → Netherlands origin-country guide (EU citizens).
 * Focus: free movement, registration, BSN, Danish e-apostille/translation rules, practical setup—not MVV framing.
 */

import { filterLiveInternalLinks } from "@/src/lib/routes/routeStatus";
import type { GuideData, GuideSection } from "@/src/lib/guides/types";
import type { CountryPageModel } from "./buildCountryPageModel";

const PILLAR_PATH = "/netherlands/moving-to-the-netherlands/";
const COUNTRY_INDEX_PATH = "/netherlands/moving-to-netherlands-from/";
const COST_ESTIMATOR_PATH = "/netherlands/moving/tools/relocation-cost-estimator/";
const DOCUMENTS_GUIDE_PATH = "/netherlands/documents-needed-to-move-netherlands/";
const COST_GUIDE_PATH = "/netherlands/moving-to-netherlands-cost/";

const OFFICIAL_EU: Array<{ label: string; href: string }> = [
  {
    label: "European Union — Your Europe: residence rights in the EU",
    href: "https://europa.eu/youreurope/citizens/residence/residence-rights/index_en.htm",
  },
  {
    label: "European Union — Your Europe: registering residence in another EU country",
    href: "https://europa.eu/youreurope/citizens/residence/documents-formalities/registering-residence/index_en.htm",
  },
];

const OFFICIAL_NL_REGISTRATION: Array<{ label: string; href: string }> = [
  {
    label: "Government.nl — What to arrange when moving to the Netherlands",
    href: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/what-do-i-need-to-arrange-if-im-moving-to-the-netherlands",
  },
  {
    label: "Government.nl — When to register with the Personal Records Database (BRP) as a resident",
    href: "https://www.government.nl/topics/personal-data/question-and-answer/when-should-i-register-with-the-personal-records-database-as-a-resident",
  },
  {
    label: "Government.nl — As an EU citizen, how can I stay in the Netherlands for longer than three months?",
    href: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/as-an-eu-citizen-how-can-i-stay-in-the-netherlands-for-longer-than-three-months",
  },
  {
    label: "Netherlands Worldwide — checklist relocating to the Netherlands",
    href: "https://www.netherlandsworldwide.nl/checklist-relocating-netherlands-immigration",
  },
  { label: "IND — Form 8005 (PDF)", href: "https://ind.nl/en/forms/8005.pdf" },
];

const OFFICIAL_DK_DOCS: Array<{ label: string; href: string }> = [
  {
    label: "Netherlands Worldwide — Legalisation: documents from Denmark",
    href: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents/denmark",
  },
  {
    label: "Netherlands Worldwide — Legalisation of foreign documents (overview)",
    href: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents",
  },
  {
    label: "Netherlands Worldwide — Apostille Convention countries",
    href: "https://www.netherlandsworldwide.nl/legalisation/apostille-convention-countries",
  },
  {
    label: "Netherlands Worldwide — Passport or ID card from Denmark (abroad)",
    href: "https://www.netherlandsworldwide.nl/passport-id-card/abroad/apply-denmark",
  },
];

const DENMARK_RELATED_INTERNAL = filterLiveInternalLinks([
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

function denmarkSections(
  fromQuery: string,
  costEstimatorHref: string,
  costsDisclaimer?: string
): GuideSection[] {
  return [
    {
      id: "intro-overview",
      heading: "What People Moving from Denmark Need to Know Before Moving to the Netherlands",
      body: [
        "Moving from Denmark to the Netherlands is usually much simpler on immigration than relocating from outside the EU: as a Danish citizen you exercise EU freedom of movement, so an ordinary move is not built around visas, MVV entry visas, or standard non-EU residence permits.",
        "The real work is practical: competitive housing, municipal registration, your BSN, Dutch basic health insurance when you are resident, banking, DigiD, and settling day-to-day life.",
        "Documents are often easier than for third-country nationals, but Denmark has specific rules on the Netherlands Worldwide site: some documents can be used immediately in the Netherlands, while diplomas and certificates generally need a digital e-apostille; Danish-language documents often need sworn translation into Dutch, English, French, or German unless the issuing authority attaches an accepted multilingual standard form.",
        "This guide is for planning only; it is not legal advice. Confirm each document and registration step with Government.nl, your municipality, and the authority that requests the paper.",
      ],
      links: [
        { label: "EU vs non-EU moving to the Netherlands", href: "/netherlands/eu-vs-non-eu-moving-to-netherlands/" },
        { label: "Moving to the Netherlands (main hub)", href: `${PILLAR_PATH}${fromQuery}` },
      ],
    },
    {
      id: "denmark-visa-basics",
      heading: "Visa and Residence Permit Basics for Danish Citizens",
      body: [
        "Danish nationals are EU citizens. Under EU free movement, you can live in the Netherlands without a visa or standard residence permit for an ordinary move, provided you meet the conditions that apply to your situation (for example work, study, or sufficient resources). Your Europe summarises residence rights and registration formalities when you stay in another EU country.",
        "That is intentionally different from our non-EU country guides, where MVV and residence permits are often the headline. For a typical Danish move, the emphasis shifts to proof of address, gemeente registration, BSN, insurance, and local services—not a “visa application” path.",
        "Special cases—such as household members who are not EU citizens, or unusual legal questions—may need tailored checks. Immigration lawyers and visa consultants can be relevant there; for many Danish movers they are optional follow-ups, not the default first step.",
      ],
      callout: {
        type: "info",
        title: "Contrast with non-EU routes",
        text: "MVV and long-stay visa checklists on this site mainly serve third-country nationals. EU movers should anchor on registration and BSN first, then housing and insurance.",
      },
      links: [
        {
          label: "Your Europe — EU residence rights",
          href: "https://europa.eu/youreurope/citizens/residence/residence-rights/index_en.htm",
        },
        { label: "Immigration lawyers (optional — special cases)", href: "/netherlands/services/immigration-lawyers/" },
        { label: "Visa consultants (optional — atypical situations)", href: "/netherlands/services/visa-consultants/" },
      ],
    },
    {
      id: "registration-bsn",
      heading: "Registering in the Netherlands After Moving from Denmark",
      body: [
        "If you will stay in the Netherlands for more than four months, you normally register in the municipality where you live. Government.nl states you must register within five days of arriving in the Netherlands; your gemeente confirms appointment booking, address evidence, and any extra documents.",
        "After registration, you receive a BSN (citizen service number). Banks, insurers, and many employers rely on it—treat it as the backbone of your Dutch admin.",
        "EU rules also frame shorter stays: you can be in another EU country for up to three months with lighter registration expectations, but once you are settling long term, municipal registration becomes the practical priority. See Government.nl’s EU citizen page for how longer stays are described in the Dutch context.",
        "If your main home stays in Denmark while you spend substantial time in the Netherlands, registration and insurance rules may differ from a full relocation—verify cross-border guidance rather than copying a standard “move-in” checklist blindly.",
      ],
      bullets: [
        "Book a municipality appointment when your Dutch address is firm",
        "Bring valid passport or EU national ID and required address proof",
        "Use your BSN to progress banking and Dutch basic health insurance",
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
      heading: "Documents People Moving from Denmark Often Need Before Moving",
      body: [
        "Bring a valid Danish passport or national ID, housing documents for registration, and any civil-status records your municipality, employer, or school requests.",
        "Netherlands Worldwide’s Denmark-specific page is the anchor: it explains that some Danish documents can be used in the Netherlands immediately, while diplomas and certificates generally need legalisation with a digital e-apostille. If a document is in Danish, it generally needs translation by a sworn translator into Dutch, English, French, or German—unless the issuing authority attaches a multilingual standard form that Dutch authorities accept without extra translation or legalisation.",
        "Do not treat apostille or translation as automatic for every paper: identity cards, employment letters, and civil extracts may be handled differently depending on who asks and why.",
      ],
      bullets: [
        "Passport or EU national ID",
        "Rental contract or residence proof for gemeente registration",
        "Diplomas or certificates when required (often e-apostille per Netherlands Worldwide)",
        "Sworn translation when Danish originals lack an accepted multilingual form",
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
      heading: "Common Denmark-to-Netherlands Move Scenarios",
      body: [
        "EU free movement removes employer “sponsorship” in the non-EU sense, but you still coordinate contracts, payroll, housing, and insurance like any relocation.",
      ],
      visaRoutes: {
        commonRoutes: [
          "Moving for work — align start date, Dutch basic health insurance from residence, payroll banking, and commute-friendly housing.",
          "Moving as a student — admission, housing, student insurance, and diploma e-apostille or translations when your institution requires them.",
          "Partner or family — plan gemeente registration for each person and civil-status evidence; non-EU family members may need route-specific checks.",
          "Cross-border or internationally mobile professional — if Denmark remains your main residence, social insurance and tax may differ from a full Dutch move.",
          "Remote worker or freelancer — registration and insurance still apply if you are resident in the Netherlands; cross-border tax questions may need professional advice.",
        ],
        notes: [
          "Housing in Randstad cities is often the bottleneck, not immigration status for the standard Danish citizen.",
          "Use official EU and Dutch pages to confirm your facts.",
        ],
      },
      links: [
        { label: "Moving to the Netherlands (main hub)", href: `${PILLAR_PATH}${fromQuery}` },
        { label: "First 90 days in the Netherlands", href: "/netherlands/first-90-days-netherlands/" },
      ],
    },
    {
      id: "costs",
      heading: "What to Budget For When Moving from Denmark",
      body: [
        "Short travel distances can keep transport costs moderate, but Dutch deposits, agency fees, and first-month spending still bite. Use the table as categories to research—not promises of exact amounts.",
        costsDisclaimer ?? "",
      ].filter(Boolean),
      table: {
        headers: ["Category", "How costs usually behave", "Planning notes"],
        rows: [
          ["Transport and removal", "Varies", "Flight, drive via Germany, or movers; compare peak dates."],
          ["Initial housing", "City-dependent", "Deposits, agency fees, temporary stay while you search."],
          ["Registration and first weeks", "Mostly time", "Insurance effective dates; small gemeente fees if any."],
          ["Health insurance", "Monthly premium", "Dutch basic insurance mandatory for most residents."],
          ["Banking", "Varies", "Often smoother after BSN."],
          ["Documents", "Per item if needed", "E-apostille and sworn translation only when Netherlands Worldwide or the recipient requires them."],
        ],
      },
      internalCta: { label: "Estimate relocation cost (tool) →", href: costEstimatorHref },
      links: [{ label: "Cost of moving to the Netherlands", href: COST_GUIDE_PATH }],
    },
    {
      id: "arrival-weeks",
      heading: "What to Arrange After You Arrive",
      body: [
        "Typical sequence: municipal registration and BSN, bank account, Dutch basic health insurance, DigiD, then phone, utilities, and transport.",
      ],
      bullets: [
        "Municipal registration and BSN",
        "Bank account",
        "Dutch basic health insurance",
        "DigiD and everyday services",
      ],
      links: [
        { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
        { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
        { label: "Health insurance", href: "/netherlands/health-insurance-netherlands/" },
      ],
    },
    {
      id: "service-hubs",
      heading: "Useful Services for People Moving from Denmark to the Netherlands",
      body: [
        "Prioritise housing platforms, relocation support, banks, and insurers. Lawyer and visa-consultant hubs are linked last for atypical cases—not as a default requirement.",
        "Provider cards use the same affiliate dataset as other pages; compare options yourself; listings are not endorsements.",
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
      id: "cities-denmark",
      heading: "Popular Dutch Cities People Moving from Denmark Often Consider",
      body: [
        "Many Danes compare Amsterdam and Utrecht with The Hague, Rotterdam, and Eindhoven for jobs and housing pressure. Regional cities like Arnhem, Nijmegen, Maastricht, or Groningen suit different lifestyle trade-offs.",
      ],
      links: CITY_LINKS,
    },
    {
      id: "cross-border-logistics",
      heading: "Getting from Denmark to the Netherlands",
      body: [
        "Driving through Germany, flying to Schiphol or regional airports, or combining train segments are all common. For household goods, compare removals, partial loads, and van hire; plan elevator and parking at your Dutch address.",
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
        "EU — residence rights and registering in another Member State",
        "Netherlands — registration, BRP, and EU stays over three months",
        "Denmark — document use, e-apostille, and optional passport/ID abroad",
      ],
      links: [...OFFICIAL_EU, ...OFFICIAL_NL_REGISTRATION, ...OFFICIAL_DK_DOCS],
    },
  ];
}

export function augmentDenmarkGuideData(model: CountryPageModel, base: GuideData): GuideData {
  const fromQuery = `?from=${encodeURIComponent(model.slug)}`;
  const costEstimatorHref = `${COST_ESTIMATOR_PATH}${fromQuery}`;
  const checklistHref = `/netherlands/moving/tools/moving-checklist/${fromQuery}`;
  const pillarWithFrom = `${PILLAR_PATH}${fromQuery}`;

  return {
    ...base,
    publishDate: "2026-04-30",
    lastUpdated: "Last updated: 30 April 2026.",
    metaTitle: model.seo.title,
    title: "Moving to the Netherlands from Denmark",
    breadcrumbLabel: "From Denmark",
    subtitle:
      "Discover the registration rules, document requirements, housing considerations, and practical settlement steps for people moving from Denmark to the Netherlands.",
    description: model.seo.description,
    quickAnswersTitle: "Denmark to Netherlands Move at a Glance",
    quickAnswers: [
      {
        label: "Main legal position",
        value: "EU citizen move—no standard visa or residence permit needed for ordinary free movement",
      },
      { label: "Key admin theme", value: "Municipal registration, BSN, insurance, banking, housing" },
      {
        label: "Common document note",
        value: "Some Danish documents immediate; diplomas often e-apostille; Danish may need sworn translation unless a multilingual form applies",
      },
      {
        label: "Good fit for",
        value: "Professionals, students, families, cross-border movers, remote workers",
      },
      {
        label: "Main early tasks",
        value: "Secure housing, register within required timelines, obtain BSN, arrange bank and basic health insurance",
      },
      {
        label: "Trade-off to know",
        value: "Easier residence rules than non-EU routes do not mean an easy housing market or instant appointments",
      },
    ],
    tocItems: [
      { id: "intro-overview", label: "Overview" },
      { id: "denmark-visa-basics", label: "Visa & permits" },
      { id: "registration-bsn", label: "Registration & BSN" },
      { id: "documents", label: "Documents" },
      { id: "visa-route", label: "Scenarios" },
      { id: "costs", label: "Budget" },
      { id: "arrival-weeks", label: "After arrival" },
      { id: "service-hubs", label: "Services" },
      { id: "cities-denmark", label: "Cities" },
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
      title: "Plan your move from Denmark",
      supportingText:
        "Use the main moving hub for the full timeline, or open registration, housing, and Netherlands services when you are ready.",
      primaryCtaLabel: "Explore Move Steps",
      primaryCtaHref: pillarWithFrom,
      secondaryCtaLabel: "Browse Netherlands Services",
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
    sections: denmarkSections(fromQuery, costEstimatorHref, model.costs.disclaimer),
    internalLinks: {
      ...base.internalLinks,
      related: DENMARK_RELATED_INTERNAL,
    },
    relatedGuidesSectionTitle: "Related Guides Before Moving from Denmark",
    servicesSectionTitle: "Useful Services for People Moving from Denmark to the Netherlands",
    servicesIntro:
      "Provider cards reuse the site’s affiliate dataset—housing, relocation, banking, and insurance first for typical EU movers. Compare providers yourself; inclusion is not a recommendation.",
    scenariosSectionTitle: "Common Denmark-to-Netherlands Relocation Scenarios",
    scenariosSectionIntro:
      "Use the checklist with ?from=denmark to keep origin context while you sequence housing, e-apostille, and registration.",
    exampleScenarios: [
      {
        title: "Danish professional starting a job in Amsterdam or Utrecht",
        summary:
          "Prioritise gemeente registration within five days of arrival (per Government.nl), BSN, insurance from residence, and payroll banking. Housing remains the usual crunch.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Danish student with qualifications for a Dutch university",
        summary:
          "Plan e-apostille for diplomas or certificates when Netherlands Worldwide or the institution requires it; arrange sworn translation for Danish originals without an accepted multilingual form.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Partner or family relocating together",
        summary:
          "Register each person with the gemeente; non-EU family members may need different checks. EU citizens in the household follow the same broad free-movement framing.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Internationally mobile professional needing clear registration steps",
        summary:
          "Clarify Dutch residency for BSN and insurance versus a Denmark-based cross-border pattern using official EU and Dutch pages.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Family preparing Danish civil-status documents",
        summary:
          "Use Netherlands Worldwide’s Denmark page: some documents may be immediate; others need e-apostille or translation. Multilingual standard forms can reduce steps when accepted.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Remote worker moving for lifestyle",
        summary:
          "Registration and Dutch basic insurance apply if you are resident. Tax ties across DK and NL may need tailored advice after reading official overviews.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Choosing Groningen or Nijmegen over Amsterdam",
        summary:
          "Compare rent pressure, commute, and sectors. Our city guides help you shortlist without assuming one-size-fits-all housing.",
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
