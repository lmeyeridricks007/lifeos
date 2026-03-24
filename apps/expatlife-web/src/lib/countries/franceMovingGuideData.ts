/**
 * Extended editorial + SEO layout for the France → Netherlands origin-country guide (EU citizens).
 * Focus: registration, BSN, documents (apostille where needed), housing, banking—not MVV-style immigration.
 */

import { filterLiveInternalLinks } from "@/src/lib/routes/routeStatus";
import type { GuideData, GuideSection } from "@/src/lib/guides/types";
import type { CountryPageModel } from "./buildCountryPageModel";

const PILLAR_PATH = "/netherlands/moving-to-the-netherlands/";
const COUNTRY_INDEX_PATH = "/netherlands/moving-to-netherlands-from/";
const COST_ESTIMATOR_PATH = "/netherlands/moving/tools/relocation-cost-estimator/";
const DOCUMENTS_GUIDE_PATH = "/netherlands/documents-needed-to-move-netherlands/";
const COST_GUIDE_PATH = "/netherlands/moving-to-netherlands-cost/";

/** Netherlands relocation, EU stay, and BRP registration context */
const OFFICIAL_NL_EU_FR: Array<{ label: string; href: string }> = [
  {
    label: "Netherlands Worldwide — checklist relocating to the Netherlands",
    href: "https://www.netherlandsworldwide.nl/checklist-relocating-netherlands-immigration",
  },
  {
    label: "IND — Staying in the Netherlands as an EU, EEA or Swiss citizen",
    href: "https://ind.nl/en/residence-permits/eu-eea-or-swiss-citizens/staying-in-the-netherlands-as-an-eu-eea-or-swiss-citizen",
  },
  {
    label: "Government.nl — As an EU citizen, staying longer than three months",
    href: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/as-an-eu-citizen-how-can-i-stay-in-the-netherlands-for-longer-than-three-months",
  },
  {
    label: "Government.nl — What to arrange when moving to the Netherlands",
    href: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/what-do-i-need-to-arrange-if-i%E2%80%99m-moving-to-the-netherlands",
  },
  {
    label: "Government.nl — When to register with the BRP as a resident",
    href: "https://www.government.nl/topics/personal-data/question-and-answer/when-should-i-register-with-the-personal-records-database-as-a-resident",
  },
  {
    label: "Government.nl — Personal Records Database (BRP)",
    href: "https://www.government.nl/topics/personal-data/personal-records-database-brp",
  },
];

const OFFICIAL_FR_DOCS: Array<{ label: string; href: string }> = [
  {
    label: "Netherlands Worldwide — French documents for use in the Netherlands",
    href: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents/france",
  },
  {
    label: "Netherlands Worldwide — Foreign documents (legalisation overview)",
    href: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents",
  },
  {
    label: "Netherlands Worldwide — Converting foreign documents (what you may need)",
    href: "https://www.netherlandsworldwide.nl/convert-foreign-documents/needs",
  },
  {
    label: "Government.nl — Legalising a foreign document for use in the Netherlands",
    href: "https://www.government.nl/topics/identification-documents/certificates-and-official-documents/legalising-a-foreign-document-for-use-in-the-netherlands",
  },
  {
    label: "French diplomacy — The apostille procedure (English)",
    href: "https://www.diplomatie.gouv.fr/en/french-consular-network/news/article/the-apostille-procedure",
  },
];

const FRANCE_RELATED_INTERNAL = filterLiveInternalLinks([
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

function franceSections(
  fromQuery: string,
  costEstimatorHref: string,
  costsDisclaimer?: string
): GuideSection[] {
  return [
    {
      id: "intro-overview",
      heading: "What People Moving from France Need to Know Before Moving to the Netherlands",
      body: [
        "Moving from France to the Netherlands is usually simpler on the immigration side than relocating from outside the EU: as a French national you exercise EU free movement rather than applying for an MVV or standard residence permit for ordinary long-term stay.",
        "The hard part is often practical: finding housing, registering in the BRP through your municipality, obtaining a BSN, arranging Dutch basic health insurance, opening a bank account, and setting up DigiD and daily services.",
        "Document handling is often more straightforward than for many non-EU origins: Netherlands Worldwide explains that many French documents can be used in the Netherlands immediately, while others need an apostille from the French authorities—and official documents in French do not have to be translated for use in the Netherlands. Rules still depend on document type and who requests them, so verify each case.",
        "This guide maps the usual sequence and points to official Dutch and French sources. It supports planning only; it is not legal advice.",
      ],
      links: [
        { label: "EU vs non-EU moving to the Netherlands", href: "/netherlands/eu-vs-non-eu-moving-to-netherlands/" },
        { label: "Moving to the Netherlands (main hub)", href: `${PILLAR_PATH}${fromQuery}` },
      ],
    },
    {
      id: "eu-visa-basics",
      heading: "Visa and Residence Permit Basics for French Citizens",
      body: [
        "French nationals are EU citizens. Under the applicable EU rules, you can live in the Netherlands without a visa or standard residence permit for ordinary residence based on free movement, provided you meet the conditions for your situation (work, study, self-sufficiency, etc.). The IND and Government.nl explain how EU, EEA, and Swiss citizens stay in the Netherlands.",
        "That is a different starting point from our guides for non-EU nationals, where MVV and residence permits are often central. For a typical move from France, the emphasis shifts to BRP registration, proof of address, insurance, and local services—not a default “visa application” path.",
        "Complex family situations, unusual nationality mixes in the household, or questions about EU law may still warrant tailored advice. Immigration lawyers or visa consultants are optional supports in those cases, not a default requirement for EU movers.",
      ],
      callout: {
        type: "info",
        title: "EU mover framing",
        text: "This page does not describe a standard MVV or residence-permit route for French nationals exercising EU free movement. Confirm your circumstances on Government.nl and the IND.",
      },
      links: [
        {
          label: "IND — EU/EEA/Swiss citizens in the Netherlands",
          href: "https://ind.nl/en/residence-permits/eu-eea-or-swiss-citizens/staying-in-the-netherlands-as-an-eu-eea-or-swiss-citizen",
        },
        { label: "Immigration lawyers (optional, complex cases)", href: "/netherlands/services/immigration-lawyers/" },
        { label: "Visa consultants (optional, special situations)", href: "/netherlands/services/visa-consultants/" },
      ],
    },
    {
      id: "registration-bsn",
      heading: "Registering in the Netherlands After Moving from France",
      body: [
        "Registration in the Personal Records Database (BRP) through your municipality is how you obtain a BSN (citizen service number). Banks, insurers, and many employers use the BSN in everyday admin.",
        "If you will stay in the Netherlands for longer than four months, you are generally required to register as a resident. Government.nl states that if you will stay for more than four months, you must register within five days of arrival—your municipality schedules the appointment and confirms which documents they need.",
        "Cross-border workers or people who keep their main residence in France may follow different rules for registration, tax, and social insurance. If that could be you, check official guidance rather than assuming a standard full-move checklist applies.",
      ],
      bullets: [
        "Book your gemeente appointment as soon as you have a residential address",
        "Bring valid ID and the address proof your municipality lists",
        "After registration, use your BSN for banking and basic health insurance where required",
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
      heading: "Documents People Moving from France Often Need Before Moving",
      body: [
        "Bring a valid passport or national ID, your Dutch address proof where you already have it, and civil-status documents (birth, marriage, partnership, divorce) if schools, employers, or the gemeente need them.",
        "Netherlands Worldwide’s France page explains which French documents can be used immediately in the Netherlands and which need an apostille from the French authorities. Official documents in French do not need to be translated for use in the Netherlands—but the requesting organisation may still have format or recency requirements.",
        "Use the “convert foreign documents” guidance when you need a Dutch civil-registry extract equivalent; not every situation is covered by the same rule.",
      ],
      bullets: [
        "Passport or national ID card",
        "Rental or purchase proof for your Dutch address",
        "Civil-status documents when relevant (check France-specific guidance)",
        "Employment contract or university enrolment for your scenario",
      ],
      internalCta: {
        label: "Run the document readiness checker",
        href: `/netherlands/document-readiness-checker/${fromQuery}`,
      },
      links: [
        { label: "Apostille in the Netherlands (context)", href: "/netherlands/apostille-documents-netherlands/" },
        { label: "Document translation (Netherlands)", href: "/netherlands/document-translation-netherlands/" },
        { label: "Document legalization (Netherlands)", href: "/netherlands/document-legalization-netherlands/" },
        { label: "Documents needed to move", href: DOCUMENTS_GUIDE_PATH },
      ],
    },
    {
      id: "visa-route",
      heading: "Common France-to-Netherlands Move Scenarios",
      body: [
        "EU free movement keeps the immigration side lighter, but each situation still has its own practical checklist. Use the cards below to orient, then open the linked guides and tools.",
      ],
      visaRoutes: {
        commonRoutes: [
          "Moving for work — align contract start, payroll, and Dutch basic health insurance with your residence date; registration and BSN remain your gemeente process. Housing near work or transit is often the bottleneck.",
          "Moving as a student — enrolment, housing near campus, student insurance rules, and civil-status documents if the institution or gemeente asks for them. Check whether specific extracts need an apostille.",
          "Partner or family — plan registration for each person and gather civil-status evidence the municipality expects. EU family moves are often lighter on permits than non-EU cases but not on paperwork detail.",
          "Cross-border or bi-national within the EU — if your main home stays in France or you split time, social security coordination, tax residency, and registration obligations can differ from a single-country move. Verify against official sources.",
          "Remote worker / freelancer — registration, BSN, and insurance still apply; clients or employers outside the Netherlands do not remove local obligations. Cross-border tax and social security may need professional advice.",
        ],
        notes: [
          "None of these scenarios replaces checks on Government.nl, the IND, or your municipality.",
          "Housing search intensity is often harder than immigration paperwork.",
        ],
      },
      links: [
        { label: "Moving to the Netherlands (main hub)", href: `${PILLAR_PATH}${fromQuery}` },
        { label: "First 90 days in the Netherlands", href: "/netherlands/first-90-days-netherlands/" },
      ],
    },
    {
      id: "costs",
      heading: "What to Budget For When Moving from France",
      body: [
        "France–Netherlands moves are often regional (train, car, or short flight), but Dutch housing deposits, agency fees, and first-month costs can still be significant. Use the table as categories to research—not fixed amounts.",
        costsDisclaimer ?? "",
      ].filter(Boolean),
      table: {
        headers: ["Category", "How costs usually behave", "Planning notes"],
        rows: [
          ["Transport and removal", "Distance- and mode-dependent", "Thalys/Eurostar, driving, or movers; peak dates cost more."],
          ["Initial housing", "City-dependent", "Deposits, agency fees, temporary stay while you search."],
          ["Registration and first weeks", "Mostly time", "Insurance start dates; gemeente fees if any."],
          ["Health insurance", "Monthly premium", "Dutch basic insurance for most residents once you live in NL."],
          ["Banking", "Varies", "Often smoother after BSN; digital banks are common."],
          ["Apostille or copies", "Per document", "French apostille or certified copies where Netherlands Worldwide says they are needed."],
        ],
      },
      internalCta: { label: "Estimate relocation cost (tool) →", href: costEstimatorHref },
      links: [{ label: "Cost of moving to the Netherlands", href: COST_GUIDE_PATH }],
    },
    {
      id: "arrival-weeks",
      heading: "What to Arrange After You Arrive",
      body: [
        "A typical sequence: finalise your address, complete municipal BRP registration and receive your BSN, open a bank account, take out Dutch basic health insurance where required, activate DigiD, then arrange phone, transport, and utilities.",
        "The after-arrival guide ties these steps together; the links below jump to the pages French movers use most in the first weeks.",
      ],
      bullets: [
        "BRP registration and BSN",
        "Bank account for salary and direct debits",
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
      heading: "Useful Services for People Moving from France to the Netherlands",
      body: [
        "Most EU movers start with housing platforms, relocation help, banks, and insurers. Immigration lawyers and visa consultants are listed last for atypical cases—not as a default.",
        "Provider cards use the same affiliate dataset as other pages; compare options yourself; listings are not endorsements.",
      ],
      links: filterLiveInternalLinks([
        { label: "Relocation services", href: "/netherlands/services/relocation-services/" },
        { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
        { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
        { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
        { label: "Banks for expats", href: "/netherlands/services/banks/" },
        { label: "Health insurance", href: "/netherlands/services/health-insurance/" },
        { label: "Immigration lawyers (complex cases)", href: "/netherlands/services/immigration-lawyers/" },
        { label: "Visa consultants (special situations)", href: "/netherlands/services/visa-consultants/" },
        { label: "All Netherlands services", href: "/netherlands/services/" },
      ]).map((l) => ({ label: l.label, href: l.href })),
    },
    {
      id: "cities-france",
      heading: "Popular Dutch Cities People Moving from France Often Consider",
      body: [
        "Many people from France weigh international hiring pools in the Randstad, institutions in The Hague, tech roles around Eindhoven, or university towns—plus regional cities for lifestyle and shorter commutes from the south.",
      ],
      links: filterLiveInternalLinks([
        { label: "Amsterdam — broad international opportunity", href: "/netherlands/amsterdam/" },
        { label: "Utrecht — central hub", href: "/netherlands/utrecht/" },
        { label: "The Hague — institutions and employers", href: "/netherlands/the-hague/" },
        { label: "Eindhoven — tech and engineering", href: "/netherlands/eindhoven/" },
        { label: "Rotterdam — port and logistics", href: "/netherlands/rotterdam/" },
        { label: "Haarlem — near Amsterdam", href: "/netherlands/haarlem/" },
        { label: "Amstelveen — Amsterdam metro", href: "/netherlands/amstelveen/" },
        { label: "Leiden — university town", href: "/netherlands/leiden/" },
        { label: "Delft", href: "/netherlands/delft/" },
        { label: "Groningen — northern hub", href: "/netherlands/groningen/" },
        { label: "Maastricht — southern, near BE/DE", href: "/netherlands/maastricht/" },
        { label: "Breda", href: "/netherlands/breda/" },
        { label: "Tilburg", href: "/netherlands/tilburg/" },
        { label: "Arnhem", href: "/netherlands/arnhem/" },
        { label: "Nijmegen", href: "/netherlands/nijmegen/" },
        { label: "Compare all cities", href: "/netherlands/cities/" },
      ]).map((l) => ({ label: l.label, href: l.href })),
    },
    {
      id: "cross-border-logistics",
      heading: "Cross-border logistics from France",
      body: [
        "Many people relocate by high-speed train or car; flights from Paris and regional airports are also common. If you move household goods, plan parking, building access, and gemeente rules in dense Dutch cities.",
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
        "Netherlands — EU stay, moving, and BRP registration",
        "France-specific document use, conversion, and apostille context",
      ],
      links: [...OFFICIAL_NL_EU_FR, ...OFFICIAL_FR_DOCS],
    },
  ];
}

export function augmentFranceGuideData(model: CountryPageModel, base: GuideData): GuideData {
  const fromQuery = `?from=${encodeURIComponent(model.slug)}`;
  const costEstimatorHref = `${COST_ESTIMATOR_PATH}${fromQuery}`;
  const checklistHref = `/netherlands/moving/tools/moving-checklist/${fromQuery}`;
  const pillarWithFrom = `${PILLAR_PATH}${fromQuery}`;

  return {
    ...base,
    publishDate: "2026-04-10",
    lastUpdated: "Last updated: 10 April 2026.",
    metaTitle: model.seo.title,
    subtitle:
      "Discover the registration rules, document requirements, housing considerations, and practical settlement steps for people moving from France to the Netherlands.",
    description: model.seo.description,
    quickAnswersTitle: "France to Netherlands Move at a Glance",
    quickAnswers: [
      {
        label: "Main legal position",
        value: "EU citizen move—no standard visa/MVV path for ordinary free movement",
      },
      {
        label: "Key admin theme",
        value: "BRP registration, BSN, insurance, banking, and housing",
      },
      {
        label: "Common document advantage",
        value: "Many French documents usable directly; French often needs no translation; some documents need apostille—verify each case",
      },
      {
        label: "Good fit for",
        value: "Professionals, students, families, cross-border EU movers, remote workers",
      },
      {
        label: "Main early tasks",
        value: "Secure housing, register within required timelines, obtain BSN, arrange insurance and bank",
      },
      {
        label: "Trade-off to know",
        value: "Easier immigration paperwork does not mean an easy housing market or instant admin",
      },
    ],
    tocItems: [
      { id: "intro-overview", label: "Before you move" },
      { id: "eu-visa-basics", label: "EU stay basics" },
      { id: "registration-bsn", label: "Registration & BSN" },
      { id: "documents", label: "Documents" },
      { id: "visa-route", label: "Move scenarios" },
      { id: "costs", label: "Budget" },
      { id: "arrival-weeks", label: "After arrival" },
      { id: "service-hubs", label: "Service hubs" },
      { id: "cities-france", label: "Cities" },
      { id: "cross-border-logistics", label: "Logistics" },
      { id: "official-sources", label: "Official sources" },
      { id: "tools", label: "Tools" },
      { id: "example-scenarios", label: "Scenarios" },
      { id: "useful-services", label: "Provider examples" },
      { id: "faq", label: "FAQ" },
      { id: "related-guides", label: "Related guides" },
      { id: "explore-next", label: "Explore next" },
    ],
    heroCta: {
      title: "Plan your move from France",
      supportingText:
        "Use the main moving hub for the full timeline, or jump into registration, housing, and service directories when you are ready.",
      primaryCtaLabel: "Explore move steps",
      primaryCtaHref: pillarWithFrom,
      secondaryCtaLabel: "Browse Netherlands services",
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
    sections: franceSections(fromQuery, costEstimatorHref, model.costs.disclaimer),
    internalLinks: {
      ...base.internalLinks,
      related: FRANCE_RELATED_INTERNAL,
    },
    relatedGuidesSectionTitle: "Related Guides Before Moving from France",
    servicesSectionTitle: "Useful Services for People Moving from France to the Netherlands",
    servicesIntro:
      "Provider cards below reuse the site’s affiliate dataset—often housing and banking first for EU movers. Compare providers yourself; inclusion is not a recommendation.",
    scenariosSectionTitle: "Common France-to-Netherlands Relocation Scenarios",
    scenariosSectionIntro:
      "Each scenario stresses different setup steps. Use the checklist with ?from=france to keep your origin context.",
    exampleScenarios: [
      {
        title: "French professional starting a job in the Netherlands",
        summary:
          "Prioritise BRP registration and BSN, insurance aligned with residence, and banking for salary. Housing and commute planning often take longer than immigration formalities.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "French student enrolling at a Dutch university",
        summary:
          "Confirm enrolment and housing; check insurance rules for students. Use Netherlands Worldwide’s France page to see whether your civil documents need an apostille.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Partner or family moving together from France",
        summary:
          "Schedule registration for each person and gather civil-status documents the gemeente expects. EU family routes are often lighter on permits but not on documentation.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Cross-border mover between France and the Netherlands",
        summary:
          "If your main residence may stay in France or you split time, check registration, insurance, and social-security guidance before assuming a full relocation checklist.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Family preparing French civil documents",
        summary:
          "Follow Netherlands Worldwide (France) and French apostille guidance: some documents are accepted directly; others need an apostille. French originals often need no translation for Dutch authorities.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Freelancer or remote worker relocating for lifestyle",
        summary:
          "BRP registration, BSN, and Dutch basic insurance still apply. If income or tax ties span countries, consider advice after reading Government.nl and the IND EU pages.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Choosing Breda, Maastricht, or Utrecht over Amsterdam",
        summary:
          "Regional cities can offer different housing pressure and commute trade-offs. Compare employers, transit, and quality of life using our city guides.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
    ],
    exploreNextCards: [
      {
        title: "Netherlands services directory",
        description: "Housing, banking, insurance, relocation support, and more.",
        ctaLabel: "Browse services",
        ctaHref: "/netherlands/services/",
      },
      {
        title: "Dutch cities compared",
        description: "Randstad hubs, university towns, and regional options.",
        ctaLabel: "Explore cities",
        ctaHref: "/netherlands/cities/",
      },
      {
        title: "Relocation services",
        description: "Hands-on help for housing search and move coordination.",
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
