/**
 * Extended editorial + SEO layout for the Türkiye → Netherlands origin-country guide.
 * Non-EU framing: short-stay Schengen vs long-stay residence permit + MVV where applicable.
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
  { label: "IND — Residence permits", href: "https://ind.nl/en/residence-permits" },
  {
    label: "IND — Turkish citizens and living in the Netherlands",
    href: "https://ind.nl/en/turkish-citizens-and-living-in-the-netherlands",
  },
  { label: "Government.nl — Immigration to the Netherlands", href: "https://www.government.nl/topics/immigration-to-the-netherlands" },
  {
    label: "Government.nl — Living in the Netherlands on a residence permit",
    href: "https://www.government.nl/topics/immigration-to-the-netherlands/living-in-the-netherlands-on-a-residence-permit",
  },
  {
    label: "Government.nl — How do I apply for a residence permit?",
    href: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/how-do-i-apply-for-a-residence-permit-for-the-netherlands",
  },
  {
    label: "Government.nl — Checklist: coming to the Netherlands for work",
    href: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/checklist-coming-to-the-nederlands-for-work",
  },
];

const OFFICIAL_TR_APPLICATIONS: Array<{ label: string; href: string }> = [
  {
    label: "Netherlands Worldwide — MVV long stay (apply in Türkiye)",
    href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-turkiye",
  },
  {
    label: "Netherlands Worldwide — Making an appointment (Türkiye)",
    href: "https://www.netherlandsworldwide.nl/making-appointment/turkiye",
  },
  {
    label: "Netherlands Worldwide — Schengen visa (apply in Türkiye)",
    href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/schengen-visa/apply-turkiye",
  },
  {
    label: "Netherlands Worldwide — Entry visa (apply in Türkiye)",
    href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/entry-visa/apply-turkiye",
  },
  {
    label: "Netherlands Worldwide — Waiting time after visa application",
    href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/waiting-time-after-visa-application",
  },
  {
    label: "Netherlands Worldwide — Visa application status",
    href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/visa-application-status",
  },
];

const OFFICIAL_TR_LEGALISATION: Array<{ label: string; href: string }> = [
  {
    label: "Netherlands Worldwide — Legalisation: documents from Türkiye",
    href: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents/turkiye",
  },
  {
    label: "Netherlands Worldwide — Legalisation of foreign documents (overview)",
    href: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents",
  },
  {
    label: "Netherlands Worldwide — Apostille Convention countries",
    href: "https://www.netherlandsworldwide.nl/legalisation/apostille-convention-countries",
  },
];

const TURKEY_RELATED_INTERNAL = filterLiveInternalLinks([
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
]);

function turkeySections(
  fromQuery: string,
  costEstimatorHref: string,
  costsDisclaimer?: string
): GuideSection[] {
  return [
    {
      id: "intro-overview",
      heading: "What people moving from Türkiye need to know before moving to the Netherlands",
      body: [
        "Moving from Türkiye to the Netherlands usually stacks immigration planning, document preparation (including possible apostille and translation), housing search, and first-month admin such as municipality registration, BSN, banking, and Dutch basic health insurance.",
        "Turkish nationals are not EU/EEA/Switzerland citizens, so permit rules matter for stays longer than short visits. Short-stay travel and long-stay relocation are different processes with different application channels—treating a tourist visa plan as a move plan is a common mistake.",
        "Not everyone follows the same pathway: work, study, partner or family, entrepreneurship, and sponsored corporate moves each have different sponsors, documents, and timelines. This guide summarises the main ideas and points you to official Dutch sources and practical tools on ExpatCopilot. It is planning information only, not legal advice, and cannot guarantee outcomes.",
      ],
      links: [
        { label: "EU vs non-EU moving to the Netherlands", href: "/netherlands/eu-vs-non-eu-moving-to-netherlands/" },
        { label: "Moving to the Netherlands (main hub)", href: `${PILLAR_PATH}${fromQuery}` },
      ],
    },
    {
      id: "visa-mvv-permits",
      heading: "Visa, MVV and residence permit basics for moving from Türkiye",
      body: [
        "For short visits to the Netherlands, Schengen short-stay rules apply. When you need a visa, Netherlands Worldwide explains that applications in Türkiye are handled through VFS Global, and the Türkiye-specific Schengen page covers how to apply—including that you can generally apply up to six months before travel and must apply no later than 45 days before you intend to travel (confirm the current wording on the official page).",
        "For stays longer than 90 days, you normally need a Dutch residence permit that matches a recognised purpose (such as work, study, or family). The IND describes the MVV as a long-stay entry visa used in many procedures: it is placed as a sticker in your passport so you can travel to the Netherlands and complete steps such as collecting your residence permit. MVV and residence permit applications are often linked when you apply from abroad—but not every route or personal situation is identical, so treat “MVV required?” as a checklist question, not a universal rule.",
        "After a positive decision, you typically collect the MVV at the Dutch mission following Netherlands Worldwide’s instructions for Türkiye. For Istanbul specifically, Netherlands Worldwide’s appointment page for Türkiye explains that how you request an appointment can depend on your purpose of stay—for example, refugee family reunification may use a different contact route than study, knowledge migrant, or other purposes—so read the current page for the email or instructions that match your case.",
        "Following arrival, residence permit collection and municipal registration proceed as described on Government.nl and the IND. If your case is time-sensitive or unusual, regulated visa consultants or immigration lawyers may help you interpret official requirements—see the service hubs below.",
      ],
      callout: {
        type: "info",
        title: "Verify your specific route",
        text: "Immigration rules change and depend on your facts. Use IND.nl, Government.nl, and Netherlands Worldwide as the sources of truth for your permit type.",
        href: "https://ind.nl/en/apply-for-mvv-and-residence-permit-from-abroad",
        linkLabel: "IND — MVV and residence permit from abroad",
      },
      links: [
        { label: "Visa checker", href: "/netherlands/visa-checker/" },
        { label: "Visa consultants (Netherlands)", href: "/netherlands/services/visa-consultants/" },
        { label: "Immigration lawyers (Netherlands)", href: "/netherlands/services/immigration-lawyers/" },
        { label: "IND — MVV", href: "https://ind.nl/en/provisional-residence-permit-mvv" },
        {
          label: "IND — Turkish citizens and living in the Netherlands",
          href: "https://ind.nl/en/turkish-citizens-and-living-in-the-netherlands",
        },
        {
          label: "MVV long stay — apply in Türkiye",
          href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-turkiye",
        },
      ],
    },
    {
      id: "visa-route",
      heading: "Main ways to move from Türkiye to the Netherlands",
      body: [
        "The right route depends on why you are moving and who can act as sponsor or counterparty (employer, university, partner, or qualifying business structure). Use the official checklist for your purpose and confirm salary thresholds, recognised sponsor status, and document lists on the IND and Government.nl.",
      ],
      visaRoutes: {
        commonRoutes: [
          "Moving for work — paid employment with a Dutch employer that meets sponsor and permit rules for your category.",
          "Highly skilled migrant — a sponsored route with salary thresholds and recognised sponsor requirements; common for tech and multinational employers.",
          "Moving to study — residence permit for study tied to a Dutch institution; admission and proof-of-funds requirements apply.",
          "Partner or family — relationship evidence and civil documents are central; timelines depend on the status of the person in the Netherlands.",
          "Entrepreneur or startup founder — routes such as startup or self-employment with distinct business criteria; advisors are a common planning entry point.",
          "Sponsored company transfer / international assignment — compare intra-corporate transfer rules with standard employment when your employer has entities in multiple countries.",
        ],
        notes: [
          "The IND maintains a dedicated page for Turkish citizens living in the Netherlands—read it alongside your route-specific checklist on IND.nl and Government.nl for any additional official context that applies to your situation.",
          "If dependents are involved, sequence permits, MVV appointments, and school or childcare research early.",
        ],
      },
      links: [
        { label: "Visa checker", href: "/netherlands/visa-checker/" },
        { label: "Highly skilled migrant visa", href: "/netherlands/visa/highly-skilled-migrant/" },
        { label: "Student visa", href: "/netherlands/visa/student-visa/" },
        { label: "Partner & family visa", href: "/netherlands/visa/partner-family-visa/" },
        { label: "Self-employed visa", href: "/netherlands/visa/self-employed-visa/" },
        { label: "Compare visa routes", href: "/netherlands/visa/compare-visas/" },
        { label: "Highly skilled migrant sponsors", href: "/netherlands/services/highly-skilled-migrant-sponsors/" },
        { label: "Startup visa advisors", href: "/netherlands/services/startup-visa-advisors/" },
      ],
    },
    {
      id: "documents",
      heading: "Documents people moving from Türkiye often need before moving",
      body: [
        "Start from a valid passport and the checklist your sponsor or Netherlands Worldwide provides for your route. Civil documents (birth, marriage, custody) frequently appear in family and registration processes; education and employment evidence matter for work and study routes.",
        "Netherlands Worldwide explains that some Turkish documents can be used in the Netherlands without extra steps, while others must be legalised with an apostille by the Turkish authorities. If a document is in Turkish, it generally needs translation into Dutch, English, French, or German for Dutch use—confirm whether your procedure asks for sworn or certified translation.",
        "Build time for apostille appointments, translation, and couriers into your timeline. Late documents are a common reason moves slip relative to job start dates or semester intake.",
      ],
      bullets: [
        "Passport validity aligned with MVV stickers and travel dates",
        "Birth and marriage certificates when your route or municipality asks for them",
        "Proof of address or civil-status history where relevant",
        "Apostille on Turkish documents when legalisation is required for Dutch use",
        "Translations into Dutch, English, French, or German when officials require them",
        "Sponsor letters, contracts, or admission documents for your specific permit",
      ],
      internalCta: {
        label: "Run the document readiness checker",
        href: `/netherlands/document-readiness-checker/${fromQuery}`,
      },
      links: [
        { label: "Apostille documents (guide)", href: "/netherlands/apostille-documents-netherlands/" },
        { label: "Document translation (Netherlands)", href: "/netherlands/document-translation-netherlands/" },
        { label: "Document legalization (Netherlands)", href: "/netherlands/document-legalization-netherlands/" },
        { label: "Documents needed to move", href: DOCUMENTS_GUIDE_PATH },
        {
          label: "Legalisation — documents from Türkiye (Netherlands Worldwide)",
          href: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents/turkiye",
        },
      ],
    },
    {
      id: "short-long-stay",
      heading: "Short visits vs long-term relocation",
      body: [
        "Short visits fall under Schengen short-stay rules. When a visa is required, Netherlands Worldwide directs applicants in Türkiye through VFS Global and publishes Türkiye-specific Schengen guidance (including typical application timing windows).",
        "Long-term relocation falls under residence-permit logic: a recognised purpose, sponsor where required, and— in many cases—MVV and residence permit steps that are applied for from abroad under IND and Netherlands Worldwide procedures.",
        "Keeping the two tracks separate helps you choose the right checklist, budget the right fees, and avoid planning housing or employment start dates around the wrong visa type.",
      ],
      links: [
        {
          label: "Schengen visa — apply in Türkiye",
          href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/schengen-visa/apply-turkiye",
        },
        {
          label: "MVV long stay — apply in Türkiye",
          href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-turkiye",
        },
        {
          label: "Making an appointment (Türkiye)",
          href: "https://www.netherlandsworldwide.nl/making-appointment/turkiye",
        },
      ],
    },
    {
      id: "costs",
      heading: "What to budget for when moving from Türkiye",
      body: [
        "Treat the table below as categories to plan against rather than a promise of exact totals. Your city, family size, housing strategy, and shipping choices change the outcome.",
        costsDisclaimer ?? "",
      ].filter(Boolean),
      table: {
        headers: ["Category", "How costs usually behave", "Planning notes"],
        rows: [
          [
            "Visa / MVV / permit fees",
            "Route-dependent",
            "Use official IND and Netherlands Worldwide guidance for your permit type.",
          ],
          [
            "Apostille, legalisation, translations",
            "Per document",
            "Queues and sworn translators can dominate lead time—start early.",
          ],
          ["Flights (Türkiye–Netherlands)", "Seasonal", "Align travel with MVV validity and housing availability."],
          [
            "Initial housing",
            "City-dependent",
            "Deposits, agency fees, and temporary furnished stays are common while you search.",
          ],
          [
            "Relocation and shipping",
            "Variable",
            "Air vs sea for household goods; insurance and customs paperwork.",
          ],
          [
            "Registration and first weeks",
            "Variable",
            "Municipality steps, insurance start dates, phone, transport, and household setup.",
          ],
          [
            "Health insurance and banking",
            "Ongoing",
            "Dutch basic health insurance is mandatory for most residents; banking often follows BSN/address.",
          ],
        ],
      },
      internalCta: { label: "Estimate relocation cost (tool) →", href: costEstimatorHref },
      links: [{ label: "Cost of moving to the Netherlands", href: COST_GUIDE_PATH }],
    },
    {
      id: "arrival-weeks",
      heading: "What to arrange after you arrive",
      body: [
        "Most people follow a similar early sequence: collect the residence permit when your procedure requires it, register with the municipality and receive a BSN, open a bank account, and arrange Dutch basic health insurance when you become resident. DigiD, GP registration, and everyday transport then become much easier.",
        "Use the after-arrival hub on this site together with official Government.nl and IND explanations for permit collection and registration.",
      ],
      bullets: [
        "Municipal registration and BSN",
        "Residence permit steps if applicable",
        "Bank account aligned with salary and landlord checks",
        "Dutch basic health insurance",
        "DigiD, phone, and transport passes",
        "Housing handover and home utilities",
      ],
      links: [
        { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
        { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" },
        { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
        { label: "Health insurance", href: "/netherlands/health-insurance-netherlands/" },
      ],
    },
    {
      id: "service-hubs",
      heading: "Useful services for people moving from Türkiye to the Netherlands",
      body: [
        "Long-stay moves from Türkiye are often document- and timing-intensive. The hub pages below group regulated visa consultants, immigration lawyers, relocation firms, housing platforms, banks, and insurers—use them to shortlist providers, then compare scope and fees yourself.",
        "Provider cards in the “Useful services” section come from the same affiliate datasets used elsewhere on ExpatCopilot. Inclusion is not an endorsement.",
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
      id: "cities-turkey",
      heading: "Popular Dutch cities people moving from Türkiye often consider",
      body: [
        "City choice usually comes down to job location, industry clusters, housing pressure, schools for families, and commute preferences. Amsterdam offers broad international hiring; Utrecht balances centrality and quality of life; The Hague fits institutions and many family setups; Eindhoven is strong for tech and engineering; Haarlem and Amstelveen offer different Amsterdam-area trade-offs; Leiden, Delft, and Groningen suit academic paths; Maastricht, Breda, Tilburg, Arnhem, and Nijmegen can fit regional or lifestyle-led moves.",
      ],
      links: CITY_LINKS.map((l) => ({ label: l.label, href: l.href })),
    },
    {
      id: "shipping",
      heading: "Shipping and relocation logistics",
      body: [
        "Many Türkiye–Netherlands moves combine air baggage for essentials with road or sea options for larger shipments. Align packing and customs paperwork with your MVV window, notice periods, and temporary housing dates.",
      ],
      bullets: [
        "Compare insured movers vs self-managed freight early.",
        "Keep inventory lists accessible for customs questions.",
        "If you ship before you depart, confirm who receives goods in the Netherlands.",
      ],
      links: [
        { label: "Shipping household goods to the Netherlands", href: "/netherlands/shipping-household-goods-netherlands/" },
        { label: "Bringing pets", href: "/netherlands/bringing-pets-to-netherlands/" },
      ],
    },
    {
      id: "official-sources",
      heading: "Official sources and useful references",
      body: [
        "Use these Dutch government entry points first. Labels indicate the topic each link supports.",
        "Netherlands immigration and relocation — general orientation and permit concepts.",
        "Applying from Türkiye — MVV, Schengen, appointments, waiting times, and status.",
        "Türkiye-issued documents — legalisation, apostille context, and foreign-documents overview.",
      ],
      links: [...OFFICIAL_NL_IMMIGRATION, ...OFFICIAL_TR_APPLICATIONS, ...OFFICIAL_TR_LEGALISATION],
    },
  ];
}

export function augmentTurkeyGuideData(model: CountryPageModel, base: GuideData): GuideData {
  const fromQuery = `?from=${encodeURIComponent(model.slug)}`;
  const costEstimatorHref = `${COST_ESTIMATOR_PATH}${fromQuery}`;
  const checklistHref = `/netherlands/moving/tools/moving-checklist/${fromQuery}`;
  const pillarWithFrom = `${PILLAR_PATH}${fromQuery}`;

  return {
    ...base,
    publishDate: "2026-04-27",
    lastUpdated: "Last updated: 27 April 2026.",
    title: "Moving to the Netherlands from Türkiye",
    metaTitle: model.seo.title,
    breadcrumbLabel: "From Türkiye",
    subtitle:
      "Discover the main visa routes, MVV requirements, document apostille rules, and practical settlement steps for moving from Türkiye to the Netherlands.",
    description: model.seo.description,
    quickAnswersTitle: "Türkiye to Netherlands move at a glance",
    quickAnswers: [
      {
        label: "Main move routes",
        value: "Work, study, partner or family, entrepreneur, sponsored relocation",
      },
      {
        label: "Key admin theme",
        value: "Residence-permit planning plus apostilled and translated documents when required",
      },
      {
        label: "Common document issue",
        value:
          "Some Turkish documents need apostille; Turkish-language documents generally need translation for Dutch use (Dutch, English, French, or German)",
      },
      {
        label: "Good fit for",
        value: "Professionals, students, families, entrepreneurs, sponsored movers",
      },
      {
        label: "Main early tasks",
        value: "Confirm permit route, prepare documents, line up registration and first-weeks setup",
      },
      {
        label: "Trade-off to know",
        value: "Permit and document timing can add complexity—early planning reduces last-minute risk",
      },
    ],
    tocItems: [
      { id: "intro-overview", label: "Overview" },
      { id: "visa-mvv-permits", label: "Visa & MVV" },
      { id: "visa-route", label: "Pathways" },
      { id: "documents", label: "Documents" },
      { id: "short-long-stay", label: "Short vs long stay" },
      { id: "costs", label: "Budget" },
      { id: "arrival-weeks", label: "After arrival" },
      { id: "service-hubs", label: "Services" },
      { id: "cities-turkey", label: "Cities" },
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
      title: "Plan your move from Türkiye",
      supportingText:
        "Start from the main moving hub, compare regulated services, and use the tools when you are ready to turn guidance into a checklist and timeline.",
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
    sections: turkeySections(fromQuery, costEstimatorHref, model.costs.disclaimer),
    internalLinks: {
      ...base.internalLinks,
      related: TURKEY_RELATED_INTERNAL,
    },
    relatedGuidesSectionTitle: "Related guides before moving from Türkiye",
    servicesSectionTitle: "Useful services when relocating from Türkiye",
    servicesIntro:
      "Provider cards below are drawn from the same affiliate dataset used on other Netherlands pages. Compare options yourself; inclusion here is not a recommendation.",
    scenariosSectionTitle: "Common Türkiye-to-Netherlands relocation scenarios",
    scenariosSectionIntro:
      "Examples show how priorities shift by route. Use the checklist tool with ?from=turkey to keep your origin context.",
    exampleScenarios: [
      {
        title: "Turkish professional moving for a sponsored job",
        summary:
          "Sequence employer-side IND steps, MVV collection after approval, housing near the role, and BSN-first banking and insurance. Engage consultants or lawyers if your start date is tight.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Turkish student moving for university",
        summary:
          "Align admission, study-permit conditions, proof of funds, and student housing. Plan apostille and translations for Turkish civil and academic documents early.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Partner or family relocation",
        summary:
          "Relationship evidence and civil documents drive timelines. Expect possible apostille and translation work; confirm which appointment route applies in Istanbul on Netherlands Worldwide.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Entrepreneur or startup founder exploring Dutch options",
        summary:
          "Business criteria differ from employment routes. Shortlist startup advisors and compare against self-employment checklists on official pages before you commit to timelines.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Sponsored corporate transfer",
        summary:
          "Clarify sponsor, permit type, MVV timing, and payroll transition with your mobility team; relocation agencies can fill gaps when HR does not centralise the process.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Family preparing apostilled and translated documents",
        summary:
          "Use Netherlands Worldwide’s Türkiye legalisation page to decide which documents need apostille, then line up sworn translations. Run the document readiness checker for a structured pass.",
        href: `/netherlands/document-readiness-checker/${fromQuery}`,
        ctaLabel: "Run document readiness checker",
      },
      {
        title: "Long-stay mover comparing cities after permit approval",
        summary:
          "Use city guides to balance commute, rent pressure, and schools. Book temporary housing if you need time to view long-term rentals in person.",
        href: "/netherlands/cities/",
        ctaLabel: "Explore Dutch cities",
      },
    ],
    exploreNextCards: [
      {
        title: "Netherlands services directory",
        description: "Visa help, lawyers, housing, banks, insurance, and more in one hub.",
        ctaLabel: "Browse services",
        ctaHref: "/netherlands/services/",
      },
      {
        title: "Dutch cities compared",
        description: "Shortlist places that match your commute, industry, and lifestyle.",
        ctaLabel: "Explore cities",
        ctaHref: "/netherlands/cities/",
      },
      {
        title: "Visa consultants",
        description: "Useful when appointment timing, document bundles, or multi-step MVV procedures need careful sequencing.",
        ctaLabel: "View visa consultants",
        ctaHref: "/netherlands/services/visa-consultants/",
      },
      {
        title: "Immigration lawyers",
        description: "For refusals, appeals, or complex family or business structures, legal counsel may fit.",
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
