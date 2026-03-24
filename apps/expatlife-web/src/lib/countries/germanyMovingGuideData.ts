/**
 * Extended editorial + SEO layout for the Germany → Netherlands origin-country guide (EU citizens).
 * Focus: registration, BSN, documents, housing, and practical setup—not MVV-style immigration.
 */

import { filterLiveInternalLinks } from "@/src/lib/routes/routeStatus";
import type { GuideData, GuideSection } from "@/src/lib/guides/types";
import type { CountryPageModel } from "./buildCountryPageModel";

const PILLAR_PATH = "/netherlands/moving-to-the-netherlands/";
const COUNTRY_INDEX_PATH = "/netherlands/moving-to-netherlands-from/";
const COST_ESTIMATOR_PATH = "/netherlands/moving/tools/relocation-cost-estimator/";
const DOCUMENTS_GUIDE_PATH = "/netherlands/documents-needed-to-move-netherlands/";
const COST_GUIDE_PATH = "/netherlands/moving-to-netherlands-cost/";

const OFFICIAL_NL_EU: Array<{ label: string; href: string }> = [
  {
    label: "Netherlands Worldwide — checklist relocating to the Netherlands",
    href: "https://www.netherlandsworldwide.nl/checklist-relocating-netherlands-immigration",
  },
  {
    label: "Government.nl — What to arrange when moving to the Netherlands",
    href: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/what-do-i-need-to-arrange-if-im-moving-to-the-netherlands",
  },
  {
    label: "IND — Staying in the Netherlands as an EU, EEA or Swiss citizen",
    href: "https://ind.nl/en/residence-permits/eu-eea-or-swiss-citizens/staying-in-the-netherlands-as-an-eu-eea-or-swiss-citizen",
  },
  { label: "Government.nl — Immigration to the Netherlands", href: "https://www.government.nl/topics/immigration-to-the-netherlands" },
  {
    label: "Government.nl — Checklist: coming to the Netherlands for work",
    href: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/checklist-coming-to-the-nederlands-for-work",
  },
];

const OFFICIAL_DE_DOCS: Array<{ label: string; href: string }> = [
  {
    label: "Netherlands Worldwide — German documents for use in the Netherlands",
    href: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents/germany",
  },
  {
    label: "Netherlands Worldwide — Foreign documents (legalisation overview)",
    href: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents",
  },
  {
    label: "Government.nl — Legalising a foreign document for use in the Netherlands",
    href: "https://www.government.nl/topics/identification-documents/certificates-and-official-documents/legalising-a-foreign-document-for-use-in-the-netherlands",
  },
  {
    label: "German Federal Foreign Office — Civil status certificates (general information)",
    href: "https://www.auswaertiges-amt.de/en/visa-service/konsularisches/urkundenverkehrallgemeines-node/urkundenverkehrteila-node",
  },
];

const GERMANY_RELATED_INTERNAL = filterLiveInternalLinks([
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

function germanySections(
  fromQuery: string,
  costEstimatorHref: string,
  costsDisclaimer?: string
): GuideSection[] {
  return [
    {
      id: "intro-overview",
      heading: "What Germans Need to Know Before Moving to the Netherlands",
      body: [
        "Moving from Germany to the Netherlands is usually simpler on the immigration side than relocating from outside the EU: as a German citizen you generally exercise EU free movement rather than applying for an entry visa or MVV for ordinary residence.",
        "The practical workload is still real: housing competition, municipal registration, BSN, Dutch basic health insurance, banking, DigiD, and day-to-day setup often take more time and patience than paperwork at the border.",
        "Many German civil-status documents are accepted in the Netherlands without legalisation, and German-language documents often do not require translation for Dutch authorities—but not every document type is treated the same, so you should always confirm the requirement for your specific case.",
        "This guide maps the usual sequence and official references. It supports planning only; it is not legal advice and does not replace checks on Government.nl, the IND, or your municipality.",
      ],
      links: [
        { label: "EU vs non-EU moving to the Netherlands", href: "/netherlands/eu-vs-non-eu-moving-to-netherlands/" },
        { label: "Moving to the Netherlands (main hub)", href: `${PILLAR_PATH}${fromQuery}` },
      ],
    },
    {
      id: "eu-visa-basics",
      heading: "Visa and Residence Permit Basics for Germans",
      body: [
        "German citizens are EU citizens. Under the applicable EU rules, you can live in the Netherlands without a visa or residence permit for ordinary residence based on free movement, provided you meet the conditions that apply to your situation (for example work, study, or sufficient resources). The IND explains how EU, EEA, and Swiss citizens stay in the Netherlands.",
        "That is a different starting point from our guides for non-EU nationals, where MVV and residence permits are often central. For a typical German move, the emphasis shifts to registration, proof of address, insurance, and local services—not to a standard “visa application” path.",
        "Some situations—complex family law, unusual nationality combinations in the household, or specific legal questions—may still warrant tailored advice. Immigration lawyers or visa consultants can be relevant in those cases; for many EU movers they are optional rather than the default first step.",
      ],
      callout: {
        type: "info",
        title: "EU mover framing",
        text: "This page does not describe a standard MVV or residence-permit application route for Germans exercising EU free movement. Always confirm your personal circumstances on official Dutch pages.",
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
      heading: "Registering in the Netherlands After Moving from Germany",
      body: [
        "Municipal registration is the backbone of life in the Netherlands: it is how you obtain a BSN (citizen service number), which banks, insurers, and many employers rely on.",
        "If you will live in the Netherlands for more than four months, you are generally required to register with the municipality. You must register within five working days of arriving if you already have a residential address. Your municipality confirms the exact appointment process and documents.",
        "Cross-border commuters who keep their main residence in Germany follow different rules; if that might be you, check official guidance for your situation rather than assuming standard resident registration applies.",
      ],
      bullets: [
        "Book or request a municipality appointment as early as your housing situation allows",
        "Bring valid ID and address proof required by your gemeente",
        "After registration, use your BSN to progress banking and insurance",
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
      heading: "Documents Germans Often Need Before Moving",
      body: [
        "Bring a valid passport or national ID, rental or purchase documents for your Dutch address where available, and any civil-status records you may need for family registration, schools, or employers.",
        "Netherlands Worldwide states that for many German civil-status documents—such as birth, marriage, divorce, and death certificates—legalisation is not required for use in the Netherlands, and documents in German do not have to be translated. Multilingual extracts from German civil registers can often be used without legalisation. Other document types or uses can still have different rules, so verify against the Germany-specific page and the requesting authority.",
        "Do not assume every document is covered by the same rule: employment, tax, or non-civil records may be handled differently depending on who asks for them and why.",
      ],
      bullets: [
        "Passport or EU national ID",
        "Housing contract or proof of residence for gemeente registration",
        "Civil-status documents when relevant (check Germany-specific guidance)",
        "Employment or university paperwork for your specific setup",
      ],
      internalCta: {
        label: "Run the document readiness checker",
        href: `/netherlands/document-readiness-checker/${fromQuery}`,
      },
      links: [
        { label: "Apostille in the Netherlands (when it still matters)", href: "/netherlands/apostille-documents-netherlands/" },
        { label: "Document translation (Netherlands)", href: "/netherlands/document-translation-netherlands/" },
        { label: "Document legalization (Netherlands)", href: "/netherlands/document-legalization-netherlands/" },
        { label: "Documents needed to move", href: DOCUMENTS_GUIDE_PATH },
      ],
    },
    {
      id: "visa-route",
      heading: "Common Germany-to-Netherlands Move Scenarios",
      body: [
        "EU free movement simplifies the immigration side, but each situation still has its own practical checklist. Use the cards below to orient, then open the linked guides and tools for your case.",
      ],
      visaRoutes: {
        commonRoutes: [
          "Moving for work — focus on contract start date, payroll, health insurance from day one of residence, and housing within commuting distance. Employer HR may help with local steps but registration remains your gemeente process.",
          "Moving as a student — enrolment, student finance or self-funding proof, housing near campus, and insurance rules for students. Civil-status documents may still be needed even when legalisation is waived for many German extracts.",
          "Partner or family — EU family members often have a lighter formal route than non-EU cases, but municipalities still expect coherent address and identity documents for everyone registering.",
          "Cross-border living or commuting — if your main home stays in Germany while you work or study in the Netherlands, social insurance, tax residency, and registration rules can differ from a full relocation. Verify cross-border rules rather than following a standard “move-in” checklist blindly.",
          "Remote worker / freelancer — practical setup (registration, insurance, banking) still applies even when your employer is outside the Netherlands; tax and social-security questions may need professional advice.",
        ],
        notes: [
          "None of these scenarios replaces official checks on IND and Government.nl for your status.",
          "Housing search intensity is often the bottleneck, not immigration paperwork.",
        ],
      },
      links: [
        { label: "Moving to the Netherlands (main hub)", href: `${PILLAR_PATH}${fromQuery}` },
        { label: "First 90 days in the Netherlands", href: "/netherlands/first-90-days-netherlands/" },
      ],
    },
    {
      id: "costs",
      heading: "What to Budget For When Moving from Germany",
      body: [
        "Cross-border moves can be cheaper on travel than intercontinental ones, but Dutch housing deposits, agency fees, and first-month costs still bite. Use the table as categories to research—not fixed promises.",
        costsDisclaimer ?? "",
      ].filter(Boolean),
      table: {
        headers: ["Category", "How costs usually behave", "Planning notes"],
        rows: [
          [
            "Transport and removal",
            "Distance-dependent",
            "Train, van, or professional movers; compare peak weekend pricing.",
          ],
          [
            "Initial housing",
            "City- and segment-dependent",
            "Deposits, agency fees, and temporary stay if you search on arrival.",
          ],
          [
            "Registration and first weeks",
            "Mostly time",
            "Municipality fees if any; buffer for insurance start dates.",
          ],
          [
            "Health insurance",
            "Monthly premium",
            "Dutch basic insurance is mandatory for most residents once you live in NL.",
          ],
          [
            "Banking",
            "Varies",
            "Often easier after BSN; digital banks are popular for fast onboarding.",
          ],
          [
            "Document extracts",
            "Per certificate",
            "German civil extracts may still have issuing fees even without legalisation.",
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
        "A typical sequence: secure your address, complete municipal registration and receive your BSN, open a bank account, take out Dutch basic health insurance where required, activate DigiD, then sort phone, transport, and utilities.",
        "The after-arrival guide connects these steps; the links below jump to the pages Germans use most often right after crossing the border.",
      ],
      bullets: [
        "Municipal registration and BSN",
        "Bank account suited to your situation",
        "Dutch basic health insurance",
        "DigiD and day-to-day services",
      ],
      links: [
        { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
        { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
        { label: "Health insurance", href: "/netherlands/health-insurance-netherlands/" },
      ],
    },
    {
      id: "service-hubs",
      heading: "Useful Services for Germans Moving to the Netherlands",
      body: [
        "Most EU movers start with housing platforms, relocation help, banks, and insurers. Immigration-law and visa-consultant services are linked last for atypical or complex cases—not as a default requirement.",
        "Provider cards below use the same affiliate dataset as other pages; compare options yourself; listings are not endorsements.",
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
      id: "cities-germany",
      heading: "Popular Dutch Cities Germans Often Consider",
      body: [
        "Proximity, industry clusters, and housing pressure drive choices. Germans often weigh eastern and southern cities for regional links as well as the main Randstad hubs.",
      ],
      links: filterLiveInternalLinks([
        { label: "Amsterdam — broad international hiring", href: "/netherlands/amsterdam/" },
        { label: "Utrecht — central hub", href: "/netherlands/utrecht/" },
        { label: "Eindhoven — tech and engineering", href: "/netherlands/eindhoven/" },
        { label: "Arnhem — eastern proximity", href: "/netherlands/arnhem/" },
        { label: "Nijmegen — eastern university city", href: "/netherlands/nijmegen/" },
        { label: "Maastricht — southern, near DE/BE", href: "/netherlands/maastricht/" },
        { label: "The Hague — institutions and employers", href: "/netherlands/the-hague/" },
        { label: "Rotterdam — port and logistics", href: "/netherlands/rotterdam/" },
        { label: "Haarlem — near Amsterdam", href: "/netherlands/haarlem/" },
        { label: "Amstelveen — Amsterdam metro", href: "/netherlands/amstelveen/" },
        { label: "Leiden — university town", href: "/netherlands/leiden/" },
        { label: "Delft", href: "/netherlands/delft/" },
        { label: "Groningen — northern hub", href: "/netherlands/groningen/" },
        { label: "Breda", href: "/netherlands/breda/" },
        { label: "Tilburg", href: "/netherlands/tilburg/" },
        { label: "Compare all cities", href: "/netherlands/cities/" },
      ]).map((l) => ({ label: l.label, href: l.href })),
    },
    {
      id: "cross-border-logistics",
      heading: "Cross-border logistics from Germany",
      body: [
        "Many Germans relocate by road or rail. If you bring household goods, plan parking, elevator access, and any building rules in Dutch cities. Smaller moves sometimes use van hire or a partial removal service rather than sea freight.",
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
        "Dutch and German official sources for EU stay, registration context, and document treatment.",
        "Netherlands — relocation and EU citizen rules",
        "Germany-specific document use in the Netherlands",
        "German federal context for civil-status certificates",
      ],
      links: [...OFFICIAL_NL_EU, ...OFFICIAL_DE_DOCS],
    },
  ];
}

export function augmentGermanyGuideData(model: CountryPageModel, base: GuideData): GuideData {
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
      "Discover the registration rules, document requirements, housing considerations, and practical settlement steps for Germans moving to the Netherlands.",
    description: model.seo.description,
    quickAnswersTitle: "Germany to Netherlands Move at a Glance",
    quickAnswers: [
      {
        label: "Main legal position",
        value: "EU citizen move—no standard visa/MVV path for ordinary free movement",
      },
      {
        label: "Key admin theme",
        value: "Municipal registration, BSN, insurance, banking, and housing",
      },
      {
        label: "Common document advantage",
        value: "Many German civil-status documents need no legalisation or translation for Dutch use—verify each case",
      },
      {
        label: "Good fit for",
        value: "Professionals, students, families, cross-border movers, EU remote workers",
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
      { id: "cities-germany", label: "Cities" },
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
      title: "Plan your move from Germany",
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
    sections: germanySections(fromQuery, costEstimatorHref, model.costs.disclaimer),
    internalLinks: {
      ...base.internalLinks,
      related: GERMANY_RELATED_INTERNAL,
    },
    relatedGuidesSectionTitle: "Related Guides Before Moving from Germany",
    servicesSectionTitle: "Useful Services for Germans Moving to the Netherlands",
    servicesIntro:
      "Provider cards below reuse the site’s affiliate dataset—often housing and banking first for EU movers. Compare providers yourself; inclusion is not a recommendation.",
    scenariosSectionTitle: "Common Germany-to-Netherlands Relocation Scenarios",
    scenariosSectionIntro:
      "Each scenario stresses different setup steps. Use the checklist with ?from=germany to keep your origin context.",
    exampleScenarios: [
      {
        title: "German professional starting a job in the Netherlands",
        summary:
          "Prioritise gemeente registration and BSN, insurance start aligned with residence, and banking for salary. Housing near work remains the common bottleneck.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "German student enrolling at a Dutch university",
        summary:
          "Confirm enrolment documents, student housing or rental search, and insurance rules for students. Many German civil extracts need no legalisation—still verify what your institution asks for.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Partner or family moving together from Germany",
        summary:
          "Plan registration appointments for each person and gather civil-status evidence the gemeente expects. EU family moves are often lighter on permits but not on paperwork detail.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Cross-border mover (home in Germany, substantial time in NL)",
        summary:
          "Check whether you are a resident for registration and insurance purposes versus a commuter. Rules for social insurance and tax can differ from a full relocation—verify official guidance.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Family preparing German civil-status documents",
        summary:
          "Use Netherlands Worldwide’s Germany-specific page: many certificates need no legalisation and German may be accepted without translation. Confirm multilingual extracts where helpful.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Freelancer or remote worker relocating for lifestyle",
        summary:
          "Registration and insurance still apply. If clients or tax residency span countries, consider professional advice after reading Government.nl and IND EU pages.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Choosing Arnhem, Nijmegen, or Maastricht over Amsterdam",
        summary:
          "Eastern and southern cities can offer different housing pressure and cross-border links. Compare commute, industry clusters, and quality of life using our city guides.",
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
        description: "From Randstad hubs to border-friendly regional cities.",
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
