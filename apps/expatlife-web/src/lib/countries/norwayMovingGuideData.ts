/**
 * Extended editorial + SEO layout for the Norway → Netherlands origin-country guide (EEA nationals).
 * Focus: IND EU/EEA/Swiss-aligned stay rules, registration, BSN, Norwegian document legalisation, practical setup—not MVV framing.
 */

import { filterLiveInternalLinks } from "@/src/lib/routes/routeStatus";
import type { GuideData, GuideSection } from "@/src/lib/guides/types";
import type { CountryPageModel } from "./buildCountryPageModel";

const PILLAR_PATH = "/netherlands/moving-to-the-netherlands/";
const COUNTRY_INDEX_PATH = "/netherlands/moving-to-netherlands-from/";
const COST_ESTIMATOR_PATH = "/netherlands/moving/tools/relocation-cost-estimator/";
const DOCUMENTS_GUIDE_PATH = "/netherlands/documents-needed-to-move-netherlands/";
const COST_GUIDE_PATH = "/netherlands/moving-to-netherlands-cost/";

const OFFICIAL_IND_EEA: Array<{ label: string; href: string }> = [
  {
    label: "IND — Staying in the Netherlands as an EU, EEA or Swiss citizen",
    href: "https://ind.nl/en/residence-permits/eu-eea-or-swiss-citizens/staying-in-the-netherlands-as-an-eu-eea-or-swiss-citizen",
  },
  {
    label: "IND — Member states of the EU and EEA",
    href: "https://ind.nl/en/member-states-eu-eea",
  },
  { label: "IND — Form 8005 (PDF)", href: "https://ind.nl/en/forms/8005.pdf" },
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
    label: "Government.nl — Personal Records Database (BRP)",
    href: "https://www.government.nl/topics/personal-data/personal-records-database-brp",
  },
  {
    label: "Government.nl — Registration for a short-term stay in the Netherlands (PDF brochure)",
    href: "https://www.government.nl/binaries/government/documenten/leaflets/2018/07/01/registration-for-a-short-term-stay-in-the-netherlands/WEB_121507_brochure_inschrijven_ENGELS.pdf",
  },
  {
    label: "Netherlands Worldwide — checklist relocating to the Netherlands",
    href: "https://www.netherlandsworldwide.nl/checklist-relocating-netherlands-immigration",
  },
];

const OFFICIAL_NO_DOCS: Array<{ label: string; href: string }> = [
  {
    label: "Netherlands Worldwide — Legalisation: documents from Norway",
    href: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents/norway",
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
    label: "Netherlands Worldwide — Making an appointment in Norway (consular support)",
    href: "https://www.netherlandsworldwide.nl/making-appointment/norway",
  },
];

const NORWAY_RELATED_INTERNAL = filterLiveInternalLinks([
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

function norwaySections(
  fromQuery: string,
  costEstimatorHref: string,
  costsDisclaimer?: string
): GuideSection[] {
  return [
    {
      id: "intro-overview",
      heading: "What People Moving from Norway Need to Know Before Moving to the Netherlands",
      body: [
        "Moving from Norway to the Netherlands is usually much simpler on immigration than a standard non-EU relocation: Norwegian nationals are EEA citizens, and the IND explains that EEA nationals have the same rights as EU citizens for many stay and work questions. You do not need a residence document to live in the Netherlands in the ordinary route described for EU/EEA/Swiss citizens—your passport or national ID is usually enough proof that you may stay and work.",
        "The practical work is still real: competitive housing, municipal registration within official timelines, your BSN, Dutch basic health insurance when you are resident, banking, DigiD, and everyday settlement.",
        "Documents from Norway are not all treated the same: Netherlands Worldwide’s Norway page explains that some papers can be used immediately in the Netherlands, while others must be legalised with an apostille from the Norwegian authorities. The exact rule depends on document type and who requests it.",
        "This guide supports planning only; it is not legal, tax, or immigration advice. Confirm each step with IND.nl, Government.nl, your municipality, and the authority that requests each document.",
      ],
      links: [
        { label: "EU vs non-EU moving to the Netherlands", href: "/netherlands/eu-vs-non-eu-moving-to-netherlands/" },
        { label: "Moving to the Netherlands (main hub)", href: `${PILLAR_PATH}${fromQuery}` },
      ],
    },
    {
      id: "norway-visa-basics",
      heading: "Visa and Residence Permit Basics for Norwegian Citizens",
      body: [
        "The IND states that EU, EEA, and Swiss citizens can stay in the Netherlands for up to three months without additional requirements beyond a valid travel document, and that EEA nationals have the same rights as EU citizens. For longer stays, the emphasis in official Dutch guidance is on meeting the conditions that apply to your situation and on practical registration—not on MVV entry visas or ordinary non-EU residence permits for a typical Norwegian mover.",
        "That is intentionally different from our non-EU country guides, where MVV and residence permits are often central. For many Norwegians, the headline tasks become proof of address, gemeente registration, BSN, Dutch basic insurance, and banking.",
        "Special cases—such as household members who are not EEA nationals, or unusual legal or family situations—may need tailored professional advice. Immigration lawyers and visa consultants can be relevant there; for standard EEA movers they are optional follow-ups, not the default first step.",
      ],
      callout: {
        type: "info",
        title: "Not the same as a non-EU move",
        text: "MVV-heavy checklists on this site mainly serve third-country nationals. EEA movers should anchor on IND/Government.nl stay rules, then registration, BSN, housing, and insurance.",
      },
      links: [
        {
          label: "IND — EU, EEA and Swiss citizens in the Netherlands",
          href: "https://ind.nl/en/residence-permits/eu-eea-or-swiss-citizens/staying-in-the-netherlands-as-an-eu-eea-or-swiss-citizen",
        },
        { label: "Immigration lawyers (optional — special cases)", href: "/netherlands/services/immigration-lawyers/" },
        { label: "Visa consultants (optional — atypical situations)", href: "/netherlands/services/visa-consultants/" },
      ],
    },
    {
      id: "registration-bsn",
      heading: "Registering in the Netherlands After Moving from Norway",
      body: [
        "If you will stay in the Netherlands for more than four months, you normally register in the municipality where you live. Government.nl states you must register within five days of arriving in the Netherlands; your gemeente confirms appointment booking, address evidence, and any extra documents. After registration, you receive a BSN (citizen service number)—banks, insurers, and many employers rely on it.",
        "If you will stay for less than four months, you may be relevant for non-resident registration (RNI) or other short-stay registration rules depending on your situation—for example temporary assignments or partial-year stays. The Government.nl brochure on registration for a short-term stay and the BRP overview help clarify when resident versus non-resident registration applies; verify your case with the municipality.",
        "If your main home stays in Norway while you spend substantial time in the Netherlands, social insurance, tax, and registration can differ from a full relocation—use official overviews and professional advice where needed rather than copying a standard move-in checklist blindly.",
      ],
      bullets: [
        "Book a municipality appointment when your Dutch address is firm",
        "Bring valid passport or national ID and required address proof",
        "Use your BSN to progress banking and Dutch basic health insurance",
      ],
      internalCta: {
        label: "Read the municipality registration guide",
        href: "/netherlands/municipality-registration-netherlands/",
      },
      links: [
        { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
        { label: "BSN registration (related)", href: "/netherlands/bsn-registration/" },
        { label: "Register address in the Netherlands", href: "/netherlands/register-address-netherlands/" },
      ],
    },
    {
      id: "documents",
      heading: "Documents People Moving from Norway Often Need Before Moving",
      body: [
        "Bring a valid Norwegian passport or national ID, housing documents for registration, and any civil-status records your municipality, employer, or school requests.",
        "Netherlands Worldwide’s Norway-specific page is the anchor: it explains which Norwegian documents can be used in the Netherlands immediately and which must be legalised with an apostille from the Norwegian authorities. Do not treat apostille as automatic for every paper—identity documents, employment letters, and civil extracts may be handled differently depending on who asks and why.",
        "If a document is not in Dutch, English, French, or German, sworn translation may be required when the receiving authority asks for it—confirm per request.",
      ],
      bullets: [
        "Passport or national ID",
        "Rental contract or residence proof for gemeente registration",
        "Birth, marriage, or divorce documents when needed for admin or family procedures",
        "Education credentials when required (check Norway legalisation page per document type)",
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
      heading: "Common Norway-to-Netherlands Move Scenarios",
      body: [
        "EEA residence rights simplify the immigration side compared with non-EU routes, but you still coordinate housing, contracts, insurance, and local services like any relocation.",
      ],
      visaRoutes: {
        commonRoutes: [
          "Moving for work — align start date, Dutch basic health insurance from residence, payroll banking, and commute-friendly housing.",
          "Moving as a student — admission, housing, student insurance, and document legalisation or translations only when your institution requires them.",
          "Partner or family — plan gemeente registration for each person and civil-status evidence; non-EEA family members may need route-specific checks (special case).",
          "Cross-border or internationally mobile professional — if Norway remains your main residence, registration and insurance may differ from a full Dutch move.",
          "Remote worker or freelancer — registration and insurance still apply if you are resident in the Netherlands; cross-border tax questions may need professional advice.",
        ],
        notes: [
          "Housing in Randstad cities is often the bottleneck, not EEA status for the standard Norwegian citizen.",
          "Use IND.nl, Government.nl, and Netherlands Worldwide to confirm facts for your situation.",
        ],
      },
      links: [
        { label: "Moving to the Netherlands (main hub)", href: `${PILLAR_PATH}${fromQuery}` },
        { label: "First 90 days in the Netherlands", href: "/netherlands/first-90-days-netherlands/" },
        { label: "Relocation services", href: "/netherlands/services/relocation-services/" },
        { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
      ],
    },
    {
      id: "costs",
      heading: "What to Budget For When Moving from Norway",
      body: [
        "Even with a relatively short journey, Dutch deposits, agency fees, and first-month spending can be significant. Use the table as categories to research—not promises of exact amounts.",
        costsDisclaimer ?? "",
      ].filter(Boolean),
      table: {
        headers: ["Category", "How costs usually behave", "Planning notes"],
        rows: [
          ["Transport and removal", "Varies", "Flights, ferry, or movers; compare peak dates and volume."],
          ["Initial housing", "City-dependent", "Deposits, agency fees, temporary furnished stays while you search."],
          ["Registration and first weeks", "Mostly time", "Insurance effective dates; small gemeente fees if any."],
          ["Health insurance", "Monthly premium", "Dutch basic insurance mandatory for most residents."],
          ["Banking", "Varies", "Often smoother after BSN."],
          ["Documents", "Per item if needed", "Apostille, copies, or translation only when Netherlands Worldwide or the recipient requires them."],
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
      heading: "Useful Services for People Moving from Norway to the Netherlands",
      body: [
        "Prioritise housing platforms, relocation support, banks, and insurers. Lawyer and visa-consultant hubs are linked for atypical cases—not as a default requirement for standard EEA movers.",
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
      id: "cities-norway",
      heading: "Popular Dutch Cities People Moving from Norway Often Consider",
      body: [
        "Amsterdam and Utrecht attract broad international hiring; The Hague suits institutions and organisations; Eindhoven is strong for tech and engineering. Haarlem and Amstelveen are common Amsterdam-area alternatives. Leiden, Delft, and Groningen fit academic and knowledge-sector paths. Maastricht, Arnhem, and Nijmegen appeal if you want less Randstad pressure.",
      ],
      links: CITY_LINKS,
    },
    {
      id: "cross-border-logistics",
      heading: "Getting from Norway to the Netherlands",
      body: [
        "Direct flights from Oslo and other Norwegian cities to Amsterdam or regional Dutch airports are common; some movers drive or use ferry segments via Denmark. For household goods, compare removals, partial loads, and air freight; plan elevator and parking at your Dutch address.",
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
        "IND — EU, EEA and Swiss stay rules",
        "Government.nl — registration, BRP, longer stays, and short-stay registration materials",
        "Netherlands Worldwide — relocating checklist and Norway-specific document legalisation",
      ],
      links: [...OFFICIAL_IND_EEA, ...OFFICIAL_NL_REGISTRATION, ...OFFICIAL_NO_DOCS],
    },
  ];
}

export function augmentNorwayGuideData(model: CountryPageModel, base: GuideData): GuideData {
  const fromQuery = `?from=${encodeURIComponent(model.slug)}`;
  const costEstimatorHref = `${COST_ESTIMATOR_PATH}${fromQuery}`;
  const checklistHref = `/netherlands/moving/tools/moving-checklist/${fromQuery}`;
  const pillarWithFrom = `${PILLAR_PATH}${fromQuery}`;

  return {
    ...base,
    publishDate: "2026-04-30",
    lastUpdated: "Last updated: 30 April 2026.",
    metaTitle: model.seo.title,
    title: "Moving to the Netherlands from Norway",
    breadcrumbLabel: "From Norway",
    subtitle:
      "Discover the registration rules, document requirements, housing considerations, and practical settlement steps for people moving from Norway to the Netherlands.",
    description: model.seo.description,
    quickAnswersTitle: "Norway to Netherlands Move at a Glance",
    quickAnswers: [
      {
        label: "Main legal position",
        value: "EEA-citizen move—no ordinary residence permit needed for the standard IND-described route",
      },
      { label: "Key admin theme", value: "Municipal registration + everyday setup (BSN, housing, insurance, banking)" },
      {
        label: "Common document note",
        value: "Some Norwegian documents immediate in NL; others need apostille—depends on type and recipient",
      },
      {
        label: "Good fit for",
        value: "Professionals, students, families, cross-border movers, remote workers",
      },
      {
        label: "Main early tasks",
        value: "Secure housing, register within official timelines, obtain BSN, arrange bank and basic health insurance",
      },
      {
        label: "Trade-off to know",
        value: "Easier residence rules than non-EU routes do not mean an easy housing market or instant appointments",
      },
    ],
    tocItems: [
      { id: "intro-overview", label: "Overview" },
      { id: "norway-visa-basics", label: "Visa & permits" },
      { id: "registration-bsn", label: "Registration & BSN" },
      { id: "documents", label: "Documents" },
      { id: "visa-route", label: "Scenarios" },
      { id: "costs", label: "Budget" },
      { id: "arrival-weeks", label: "After arrival" },
      { id: "service-hubs", label: "Services" },
      { id: "cities-norway", label: "Cities" },
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
      title: "Plan your move from Norway",
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
    sections: norwaySections(fromQuery, costEstimatorHref, model.costs.disclaimer),
    internalLinks: {
      ...base.internalLinks,
      related: NORWAY_RELATED_INTERNAL,
    },
    relatedGuidesSectionTitle: "Related Guides Before Moving from Norway",
    servicesSectionTitle: "Useful Services for People Moving from Norway to the Netherlands",
    servicesIntro:
      "Provider cards reuse the site’s affiliate dataset—housing, relocation, banking, and insurance first for typical EEA movers. Compare providers yourself; inclusion is not a recommendation.",
    scenariosSectionTitle: "Common Norway-to-Netherlands Relocation Scenarios",
    scenariosSectionIntro:
      "Use the checklist with ?from=norway to keep origin context while you sequence housing, documents, and registration.",
    exampleScenarios: [
      {
        title: "Norwegian professional moving for work",
        summary:
          "Line up housing, gemeente registration within five days of arrival (per Government.nl), BSN, Dutch basic health insurance, and payroll banking—without MVV steps for the standard EEA route.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Norwegian student moving for study",
        summary:
          "Plan apostille or other legalisation only when Netherlands Worldwide or the institution requires it; budget time for translations if needed.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Partner or family relocating",
        summary:
          "Register each person with the gemeente; non-EEA family members may need different checks. Label those as special cases and seek tailored advice if unsure.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Internationally mobile professional needing registration clarity",
        summary:
          "Clarify Dutch residency for BSN and insurance versus a Norway-based cross-border pattern using IND, Government.nl, and your employer.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Family preparing Norwegian civil-status documents",
        summary:
          "Use Netherlands Worldwide’s Norway page: some documents may be immediate; others need apostille. Confirm each extract with the body that will receive it in the Netherlands.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Norwegian remote worker moving for lifestyle",
        summary:
          "Registration and Dutch basic insurance apply if you are resident. Cross-border tax ties between Norway and the Netherlands may need professional advice after reading official overviews.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Choosing a regional Dutch city over Amsterdam",
        summary:
          "Compare rent pressure, commute, and sectors. City guides help you shortlist without assuming one-size-fits-all housing.",
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
