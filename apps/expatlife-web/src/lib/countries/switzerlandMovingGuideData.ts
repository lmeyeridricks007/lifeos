/**
 * Extended editorial + SEO layout for the Switzerland → Netherlands origin-country guide.
 * Swiss citizens follow IND guidance alongside EU/EEA nationals—not standard non-EU MVV framing.
 */

import { filterLiveInternalLinks } from "@/src/lib/routes/routeStatus";
import type { GuideData, GuideSection } from "@/src/lib/guides/types";
import type { CountryPageModel } from "./buildCountryPageModel";

const PILLAR_PATH = "/netherlands/moving-to-the-netherlands/";
const COUNTRY_INDEX_PATH = "/netherlands/moving-to-netherlands-from/";
const COST_ESTIMATOR_PATH = "/netherlands/moving/tools/relocation-cost-estimator/";
const DOCUMENTS_GUIDE_PATH = "/netherlands/documents-needed-to-move-netherlands/";
const COST_GUIDE_PATH = "/netherlands/moving-to-netherlands-cost/";

const OFFICIAL_NL_SWISS_STAY: Array<{ label: string; href: string }> = [
  {
    label: "IND — Staying in the Netherlands as an EU, EEA or Swiss citizen",
    href: "https://ind.nl/en/residence-permits/eu-eea-or-swiss-citizens/staying-in-the-netherlands-as-an-eu-eea-or-swiss-citizen",
  },
  {
    label: "IND — EU, EEA and Swiss citizens (overview)",
    href: "https://ind.nl/en/residence-permits/eu-eea-or-swiss-citizens",
  },
  { label: "IND — Form 8005 (PDF)", href: "https://ind.nl/en/forms/8005.pdf" },
  {
    label: "Government.nl — What to arrange when moving to the Netherlands",
    href: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/what-do-i-need-to-arrange-if-im-moving-to-the-netherlands",
  },
  {
    label: "Government.nl — Checklist: coming to the Netherlands for work",
    href: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/checklist-coming-to-the-nederlands-for-work",
  },
  {
    label: "Netherlands Worldwide — checklist relocating to the Netherlands (immigration)",
    href: "https://www.netherlandsworldwide.nl/checklist-relocating-netherlands-immigration",
  },
];

const OFFICIAL_CH_DOCS: Array<{ label: string; href: string }> = [
  {
    label: "Netherlands Worldwide — Legalisation: documents from Switzerland",
    href: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents/switzerland",
  },
  {
    label: "Netherlands Worldwide — Legalisation of foreign documents (overview)",
    href: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents",
  },
  {
    label: "Netherlands Worldwide — What is legalisation / apostille?",
    href: "https://www.netherlandsworldwide.nl/legalisation/what-is-legalisation-apostille",
  },
  {
    label: "Netherlands Worldwide — Apostille Convention countries",
    href: "https://www.netherlandsworldwide.nl/legalisation/apostille-convention-countries",
  },
  {
    label: "Netherlands Worldwide — Making an appointment (Switzerland)",
    href: "https://www.netherlandsworldwide.nl/making-appointment/switzerland",
  },
];

const SWITZERLAND_RELATED_INTERNAL = filterLiveInternalLinks([
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

function switzerlandSections(
  fromQuery: string,
  costEstimatorHref: string,
  costsDisclaimer?: string
): GuideSection[] {
  return [
    {
      id: "intro-overview",
      heading: "What People Moving from Switzerland Need to Know Before Moving to the Netherlands",
      body: [
        "Moving from Switzerland to the Netherlands is usually much simpler on the immigration side than a standard non-EU relocation: Swiss nationals are covered in the same IND guidance framework as EU and EEA citizens for many stay and work questions, so ordinary moves are not framed around MVV entry visas or standard residence permits.",
        "The practical workload is still substantial: competitive housing, municipal registration, your BSN (citizen service number), Dutch basic health insurance, banking, DigiD, and settling into daily life often take more energy than border formalities.",
        "For documents, Netherlands Worldwide explains that some Swiss-issued papers can be used in the Netherlands immediately, while others need a Hague apostille from the Swiss authorities first. The rule depends on the document type and who is asking—not every Swiss document follows the same path.",
        "This guide is for planning and orientation only. It is not legal advice. Confirm your situation on IND.nl, Government.nl, your municipality, and Netherlands Worldwide.",
      ],
      links: [
        { label: "EU vs non-EU moving to the Netherlands", href: "/netherlands/eu-vs-non-eu-moving-to-netherlands/" },
        { label: "Moving to the Netherlands (main hub)", href: `${PILLAR_PATH}${fromQuery}` },
      ],
    },
    {
      id: "swiss-stay-basics",
      heading: "Visa and Residence Permit Basics for Swiss Citizens",
      body: [
        "The IND states that EU, EEA and Swiss citizens can stay in the Netherlands for up to three months without additional requirements beyond a valid travel document.",
        "For longer stays under the ordinary Swiss-citizen route described in IND guidance, Swiss nationals do not need a residence permit to live in the Netherlands in the same way many non-EU nationals do. A valid Swiss passport or identity card is proof that you are permitted to stay and work, per IND information—always verify the current wording on the live IND pages for your situation.",
        "That is intentionally different from our non-EU country guides, where MVV and residence permits are often central. For a typical Swiss move, the emphasis shifts to registration at the municipality, proof of address, insurance, and local services—not a standard “visa application” storyline.",
        "Special cases exist: for example, family members who are not Swiss citizens, complex household nationalities, or unusual legal questions may need route-specific checks. Immigration lawyers and visa consultants can be relevant there; for many Swiss movers they are optional follow-ups, not the default first step.",
      ],
      callout: {
        type: "info",
        title: "Swiss mover framing",
        text: "This page does not describe a standard MVV or ordinary residence-permit application path for Swiss citizens in the routine case covered by IND EU/EEA/Swiss guidance. If your situation is non-standard, use official sources or tailored professional advice.",
      },
      links: [
        {
          label: "IND — Staying as EU, EEA or Swiss citizen",
          href: "https://ind.nl/en/residence-permits/eu-eea-or-swiss-citizens/staying-in-the-netherlands-as-an-eu-eea-or-swiss-citizen",
        },
        { label: "Immigration lawyers (optional — special cases)", href: "/netherlands/services/immigration-lawyers/" },
        { label: "Visa consultants (optional — atypical situations)", href: "/netherlands/services/visa-consultants/" },
      ],
    },
    {
      id: "registration-bsn",
      heading: "Registering in the Netherlands After Moving from Switzerland",
      body: [
        "If you will live in the Netherlands long enough to become resident, registering with your municipality is one of the most important early steps. After registration, the municipality issues a BSN, which banks, insurers, and many employers use across Dutch admin.",
        "Dutch rules generally require registration if you will stay more than four months, and you must register within five working days of arrival once you have a residential address. Your gemeente confirms appointment booking, address evidence, and any extra documents.",
        "If you keep your main home in Switzerland while spending substantial time in the Netherlands (cross-border or hybrid arrangements), registration and insurance rules may differ from a full relocation—check official guidance for your pattern rather than assuming standard resident registration applies.",
      ],
      bullets: [
        "Book a municipality appointment as soon as your Dutch address is firm",
        "Bring valid Swiss ID and the address proof your gemeente lists",
        "Use your BSN to progress banking and basic health insurance",
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
      heading: "Documents People Moving from Switzerland Often Need Before Moving",
      body: [
        "Bring a valid Swiss passport or Swiss identity card, rental or purchase documents for your Dutch address when available, and any civil-status records your municipality, employer, or school may request.",
        "Netherlands Worldwide’s Switzerland-specific page explains that certain Swiss documents can be used in the Netherlands without further steps, while others must be legalised with an apostille by the Swiss authorities. Do not treat apostille as automatic for every document—confirm each item with the body that will receive it.",
        "Depending on language and recipient, translation into Dutch, English, French, or German may sometimes be required; this is separate from whether apostille is needed.",
      ],
      bullets: [
        "Swiss passport or Swiss ID card",
        "Housing contract or residence proof for gemeente registration",
        "Birth, marriage, or other civil-status documents when relevant (check Switzerland page)",
        "Employment contracts or university admission where applicable",
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
      heading: "Common Switzerland-to-Netherlands Move Scenarios",
      body: [
        "Swiss residence status under IND guidance simplifies many immigration questions, but each situation still has its own practical checklist. Use the themes below to orient, then open the linked guides and tools for your case.",
      ],
      visaRoutes: {
        commonRoutes: [
          "Moving for work — align start date, payroll, Dutch basic health insurance from residence, and housing within commuting distance. HR may help with context; registration stays a gemeente process.",
          "Moving as a student — enrolment, proof of funds or finance, student housing, and insurance rules for students. Ask which civil documents the institution needs and whether any Swiss extracts require apostille.",
          "Partner or family — if everyone holds Swiss citizenship, EU/EEA/Swiss-style framing often applies; households with non-Swiss members may need extra route checks. Municipalities still expect coherent ID and address evidence for each person registering.",
          "Cross-border or internationally mobile professional — if your main residence remains in Switzerland, social insurance, tax residency, and registration can differ from a full move. Verify cross-border rules rather than copying a standard “full relocation” checklist.",
          "Remote worker or freelancer — registration, BSN, and insurance still matter for Dutch residence. If income or tax ties span countries, consider professional advice after reading official overviews.",
        ],
        notes: [
          "None of this replaces IND, Government.nl, or your municipality for your specific facts.",
          "Housing availability is often the bottleneck, not immigration status for the standard Swiss route.",
        ],
      },
      links: [
        { label: "Moving to the Netherlands (main hub)", href: `${PILLAR_PATH}${fromQuery}` },
        { label: "First 90 days in the Netherlands", href: "/netherlands/first-90-days-netherlands/" },
      ],
    },
    {
      id: "costs",
      heading: "What to Budget For When Moving from Switzerland",
      body: [
        "Cross-border moves from Switzerland can be flexible on travel (train or short flight), but Dutch housing deposits, agency fees, and first-month costs still add up. Use the table as categories to research—not fixed promises.",
        costsDisclaimer ?? "",
      ].filter(Boolean),
      table: {
        headers: ["Category", "How costs usually behave", "Planning notes"],
        rows: [
          ["Transport and removal", "Distance-dependent", "Train, van hire, or movers; compare peak travel dates."],
          ["Initial housing", "City-dependent", "Deposits, agency fees, temporary stay while you search."],
          ["Registration and first weeks", "Mostly time", "Municipality fees if any; buffer for insurance effective dates."],
          ["Health insurance", "Monthly premium", "Dutch basic insurance is mandatory for most residents once you live in NL."],
          ["Banking", "Varies", "Often smoother after BSN; digital banks are popular for fast onboarding."],
          ["Documents", "Per document if applicable", "Apostille or extracts only when Netherlands Worldwide or the requesting body requires them."],
        ],
      },
      internalCta: { label: "Estimate relocation cost (tool) →", href: costEstimatorHref },
      links: [{ label: "Cost of moving to the Netherlands", href: COST_GUIDE_PATH }],
    },
    {
      id: "arrival-weeks",
      heading: "What to Arrange After You Arrive",
      body: [
        "A typical sequence: confirm your address, complete municipal registration and receive your BSN, open a bank account, take out Dutch basic health insurance where you are resident, set up DigiD, then arrange phone, transport, and utilities.",
        "The after-arrival guide ties these threads together; the links below are the pages Swiss movers open most often in the first weeks.",
      ],
      bullets: [
        "Municipal registration and BSN",
        "Bank account suited to your situation",
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
      heading: "Useful Services for People Moving from Switzerland to the Netherlands",
      body: [
        "For most Swiss movers, housing platforms, relocation support, banks, and health insurance matter more than immigration-law services. Lawyer and visa-consultant directories are linked last for atypical or complex cases—not as a default requirement.",
        "Provider cards below use the same affiliate dataset as other pages. Compare options yourself; listings are not endorsements.",
      ],
      links: filterLiveInternalLinks([
        { label: "Relocation services", href: "/netherlands/services/relocation-services/" },
        { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
        { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
        { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
        { label: "Banks for expats", href: "/netherlands/services/banks/" },
        { label: "Health insurance", href: "/netherlands/services/health-insurance/" },
        { label: "Immigration lawyers (optional — special cases)", href: "/netherlands/services/immigration-lawyers/" },
        { label: "Visa consultants (optional — atypical cases)", href: "/netherlands/services/visa-consultants/" },
        { label: "All Netherlands services", href: "/netherlands/services/" },
      ]).map((l) => ({ label: l.label, href: l.href })),
    },
    {
      id: "cities-switzerland",
      heading: "Popular Dutch Cities People Moving from Switzerland Often Consider",
      body: [
        "Swiss movers often weigh Randstad hubs against university towns and southern or eastern cities with a different pace. Proximity to Switzerland is less decisive than by air, but rail connections and industry clusters still shape choices.",
      ],
      links: CITY_LINKS,
    },
    {
      id: "cross-border-logistics",
      heading: "Cross-border logistics from Switzerland",
      body: [
        "Many relocations use train via Germany or a short flight into Schiphol or a regional airport. For household goods, compare partial loads, dedicated road removals, and self-drive van hire depending on volume and building access in the Netherlands.",
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
        "Netherlands — Swiss citizen stay, relocation checklists, and work context",
        "Switzerland — document use and apostille in the Netherlands",
        "Background on legalisation and apostille",
      ],
      links: [...OFFICIAL_NL_SWISS_STAY, ...OFFICIAL_CH_DOCS],
    },
  ];
}

export function augmentSwitzerlandGuideData(model: CountryPageModel, base: GuideData): GuideData {
  const fromQuery = `?from=${encodeURIComponent(model.slug)}`;
  const costEstimatorHref = `${COST_ESTIMATOR_PATH}${fromQuery}`;
  const checklistHref = `/netherlands/moving/tools/moving-checklist/${fromQuery}`;
  const pillarWithFrom = `${PILLAR_PATH}${fromQuery}`;

  return {
    ...base,
    publishDate: "2026-04-27",
    lastUpdated: "Last updated: 27 April 2026.",
    metaTitle: model.seo.title,
    title: "Moving to the Netherlands from Switzerland",
    breadcrumbLabel: "From Switzerland",
    subtitle:
      "Discover the registration rules, document requirements, housing considerations, and practical settlement steps for people moving from Switzerland to the Netherlands.",
    description: model.seo.description,
    quickAnswersTitle: "Switzerland to Netherlands Move at a Glance",
    quickAnswers: [
      {
        label: "Main legal position",
        value: "Swiss-citizen move—no ordinary residence permit for the standard IND-covered route",
      },
      { label: "Key admin theme", value: "Municipal registration and everyday setup (BSN, insurance, banking)" },
      {
        label: "Common document advantage",
        value: "Some Swiss documents usable directly in NL; others need Swiss apostille—verify each document",
      },
      {
        label: "Good fit for",
        value: "Professionals, students, families, cross-border movers, remote workers",
      },
      {
        label: "Main early tasks",
        value: "Secure housing, register, obtain BSN, arrange bank account and basic health insurance",
      },
      {
        label: "Trade-off to know",
        value: "Easier stay rules than many non-EU routes do not mean an easy housing market or instant admin",
      },
    ],
    tocItems: [
      { id: "intro-overview", label: "Overview" },
      { id: "swiss-stay-basics", label: "Stay & permits" },
      { id: "registration-bsn", label: "Registration & BSN" },
      { id: "documents", label: "Documents" },
      { id: "visa-route", label: "Scenarios" },
      { id: "costs", label: "Budget" },
      { id: "arrival-weeks", label: "After arrival" },
      { id: "service-hubs", label: "Services" },
      { id: "cities-switzerland", label: "Cities" },
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
      title: "Plan your move from Switzerland",
      supportingText:
        "Use the main moving hub for the full timeline, or jump into registration, housing, and service directories when you are ready.",
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
    sections: switzerlandSections(fromQuery, costEstimatorHref, model.costs.disclaimer),
    internalLinks: {
      ...base.internalLinks,
      related: SWITZERLAND_RELATED_INTERNAL,
    },
    relatedGuidesSectionTitle: "Related Guides Before Moving from Switzerland",
    servicesSectionTitle: "Useful Services for People Moving from Switzerland to the Netherlands",
    servicesIntro:
      "Provider cards below reuse the site’s affiliate dataset—prioritise housing, relocation, banking, and insurance for typical Swiss moves. Compare providers yourself; inclusion is not a recommendation.",
    scenariosSectionTitle: "Common Switzerland-to-Netherlands Relocation Scenarios",
    scenariosSectionIntro:
      "Each scenario stresses different setup steps. Use the checklist with ?from=switzerland to keep your origin context.",
    exampleScenarios: [
      {
        title: "Swiss professional starting a job in the Netherlands",
        summary:
          "Focus on gemeente registration and BSN, insurance aligned with residence, and payroll banking. Housing near work is often the hardest timeline—not permit paperwork for the standard Swiss route.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Swiss student enrolling at a Dutch university",
        summary:
          "Confirm admission, housing, student insurance rules, and which Swiss civil documents need apostille or translation for your institution or gemeente.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Partner or family relocating from Switzerland",
        summary:
          "Plan registration for each person and civil-status evidence the municipality expects. Non-Swiss family members may need route-specific checks—label those as special cases.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Internationally mobile professional needing clear registration steps",
        summary:
          "Clarify whether you are Dutch-resident for BSN and insurance versus a cross-border pattern. Official guidance beats assumptions when work spans CH and NL.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Family preparing Swiss civil-status documents",
        summary:
          "Use Netherlands Worldwide’s Switzerland page: some documents are accepted as-is; others need Swiss apostille. Confirm translations only if the receiving authority asks.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Swiss remote worker moving for lifestyle",
        summary:
          "Registration, BSN, and Dutch basic insurance still apply for resident life. Tax and social-security questions across borders may need professional advice after reading official overviews.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Choosing Utrecht, The Hague, or a regional city over Amsterdam",
        summary:
          "Compare housing pressure, commute, and industry clusters. Maastricht, Arnhem, Nijmegen, and Groningen suit different trade-offs—use our city guides.",
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
        description: "From Randstad hubs to regional alternatives.",
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
