/**
 * Extended editorial + SEO layout for the Argentina → Netherlands origin-country guide.
 * Non-EU framing: Schengen short stay vs long-stay residence permit + MVV; MFA e-apostille; Working Holiday.
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
    label: "IND — Residence permit for working holiday",
    href: "https://ind.nl/en/residence-permits/au-pair-and-exchange/residence-permit-working-holiday",
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

const OFFICIAL_AR_APPLICATIONS: Array<{ label: string; href: string }> = [
  {
    label: "Netherlands Worldwide — MVV long stay (apply in Argentina)",
    href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-argentina",
  },
  {
    label: "Netherlands Worldwide — Making an appointment (Argentina / Buenos Aires)",
    href: "https://www.netherlandsworldwide.nl/making-appointment/argentina",
  },
  {
    label: "Netherlands Worldwide — Schengen visa (apply in Argentina)",
    href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/schengen-visa/apply-argentina",
  },
  {
    label: "Netherlands Worldwide — Entry visa (apply in Argentina)",
    href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/entry-visa/apply-argentina",
  },
  {
    label: "Netherlands Worldwide — Civic integration exam abroad (Argentina)",
    href: "https://www.netherlandsworldwide.nl/civic-integration-exam-abroad/argentina",
  },
  {
    label: "Netherlands Worldwide — Working Holiday Programme (WHP)",
    href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/whp",
  },
  {
    label: "Netherlands Worldwide — Consular fees (Argentina)",
    href: "https://www.netherlandsworldwide.nl/consular-fees/argentina",
  },
];

const OFFICIAL_AR_LEGALISATION: Array<{ label: string; href: string }> = [
  {
    label: "Netherlands Worldwide — Legalisation: documents from Argentina",
    href: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents/argentina",
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
    label: "Netherlands Worldwide — Working with foreign qualifications in the Netherlands",
    href: "https://www.netherlandsworldwide.nl/foreign-qualifications-netherlands/work",
  },
];

const ARGENTINA_RELATED_INTERNAL = filterLiveInternalLinks([
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

function argentinaSections(
  fromQuery: string,
  costEstimatorHref: string,
  costsDisclaimer?: string
): GuideSection[] {
  return [
    {
      id: "intro-overview",
      heading: "What people moving from Argentina need to know before moving to the Netherlands",
      body: [
        "Moving from Argentina to the Netherlands usually combines immigration planning, document preparation (including the Argentine MFA digital e-apostille and possible translations), housing search, and first-month admin such as municipality registration, BSN, banking, and Dutch basic health insurance.",
        "Argentine nationals are not EU/EEA/Switzerland citizens, so permit rules matter for stays longer than short visits. Short-stay Schengen travel and long-stay relocation use different procedures and different Netherlands Worldwide pages—planning a holiday visit is not the same as planning a move.",
        "Routes differ: work, study, partner or family, entrepreneurship, Working Holiday, and sponsored corporate moves each have different sponsors, documents, and timelines. This guide summarises the main ideas and points you to official Dutch sources and ExpatCopilot tools. It is planning information only, not legal advice, and cannot guarantee outcomes.",
      ],
      links: [
        { label: "EU vs non-EU moving to the Netherlands", href: "/netherlands/eu-vs-non-eu-moving-to-netherlands/" },
        { label: "Moving to the Netherlands (main hub)", href: `${PILLAR_PATH}${fromQuery}` },
      ],
    },
    {
      id: "visa-mvv-permits",
      heading: "Visa, MVV and residence permit basics for moving from Argentina",
      body: [
        "For short visits of up to 90 days in the Schengen area, short-stay rules apply. Netherlands Worldwide’s Argentina-specific Schengen page explains how to apply from Argentina, including that you can generally submit an application up to six months before travel and must apply no later than 45 days before you intend to travel—confirm the current wording on the official page.",
        "For stays longer than 90 days, you normally need a Dutch residence permit for a recognised purpose (work, study, family, etc.). The IND describes the MVV as a long-stay entry visa used in many procedures: it is placed as a sticker in your passport so you can travel to the Netherlands and complete steps such as collecting your residence permit. The IND states that when you need an MVV, you apply for the MVV and residence permit at the same time from abroad—but not every route or person is identical, so treat “MVV required?” as a checklist question tied to your permit type.",
        "After a positive decision, you collect the MVV following Netherlands Worldwide’s Argentina-specific instructions, including appointments linked to the embassy in Buenos Aires. After arrival, residence permit collection and municipal registration follow Government.nl and IND guidance.",
        "If your case is urgent or complex, regulated visa consultants or immigration lawyers can help you interpret official requirements—see the service hubs below.",
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
          label: "MVV long stay — apply in Argentina",
          href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-argentina",
        },
        {
          label: "Making an appointment (Argentina)",
          href: "https://www.netherlandsworldwide.nl/making-appointment/argentina",
        },
      ],
    },
    {
      id: "visa-route",
      heading: "Main ways to move from Argentina to the Netherlands",
      body: [
        "The right route depends on why you are moving and who can sponsor or support your application (employer, university, partner, or qualifying programme). Use the official checklist for your purpose and confirm salary thresholds, recognised sponsor rules, and document lists on the IND and Government.nl.",
      ],
      visaRoutes: {
        commonRoutes: [
          "Moving for work — paid employment with a Dutch employer that meets sponsor and permit rules for your category.",
          "Highly skilled migrant — sponsored route with salary thresholds and recognised sponsor requirements.",
          "Moving to study — residence permit for study tied to a Dutch institution; admission and proof-of-funds requirements apply.",
          "Partner or family — relationship evidence and civil documents are central; some routes may reference the civic integration exam abroad (see Netherlands Worldwide for Argentina).",
          "Entrepreneur or startup founder — startup or self-employment routes with distinct business criteria; advisors are a common entry point.",
          "Working Holiday / Working Holiday Scheme — Argentina is on the Dutch programme list; distinct conditions and quotas apply on official pages.",
          "Sponsored company transfer / international assignment — compare intra-corporate transfer rules with standard employment with your mobility team.",
        ],
        notes: [
          "The Working Holiday route is especially relevant for younger movers seeking a temporary stay; it is not interchangeable with long-term skilled employment.",
          "If dependents move with you, sequence permits, embassy appointments, and school research early.",
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
        {
          label: "IND — Residence permit for working holiday",
          href: "https://ind.nl/en/residence-permits/au-pair-and-exchange/residence-permit-working-holiday",
        },
        {
          label: "Netherlands Worldwide — Working Holiday Programme",
          href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/whp",
        },
      ],
    },
    {
      id: "documents",
      heading: "Documents people moving from Argentina often need before moving",
      body: [
        "Start from a valid passport and the checklist your sponsor or Netherlands Worldwide provides. Civil documents (birth, marriage, custody) are common in family and registration processes; diplomas and employment evidence matter for work and study.",
        "Netherlands Worldwide explains that to use a document from Argentina in the Netherlands it must be legalised with a digital e-apostille by the Argentine Ministry of Foreign Affairs. Build time to obtain correct extracts and complete the e-apostille before you lock in travel or embassy dates.",
        "If a document is not already in Dutch, English, French, or German, you may need sworn or certified translation for the authority that requests it. Employers and institutions may ask for legalised certificates; Netherlands Worldwide also publishes guidance on working with foreign qualifications in the Netherlands when that applies to your case.",
      ],
      bullets: [
        "Passport validity aligned with MVV stickers and travel",
        "Birth and marriage certificates when your route or gemeente asks for them",
        "Digital e-apostille (MFA Argentina) for Argentine documents intended for Dutch use",
        "Translations when the receiving body requires Dutch, English, French, or German",
        "Sponsor letters, contracts, or admission documents for your permit type",
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
          label: "Legalisation — documents from Argentina (Netherlands Worldwide)",
          href: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents/argentina",
        },
        {
          label: "Foreign qualifications — working in the Netherlands",
          href: "https://www.netherlandsworldwide.nl/foreign-qualifications-netherlands/work",
        },
      ],
    },
    {
      id: "short-long-stay",
      heading: "Short visits vs long-term relocation",
      body: [
        "Short visits use Schengen short-stay rules. Netherlands Worldwide’s Argentina-specific Schengen page covers applications from Argentina, including typical submission timing (up to six months before travel; no later than 45 days before travel—verify on the live page).",
        "Long-term relocation uses residence-permit logic: a recognised purpose, sponsor where required, and— in many cases—linked MVV and residence permit applications from abroad.",
        "Keeping the two tracks separate avoids booking housing or job start dates on the wrong visa type.",
      ],
      links: [
        {
          label: "Schengen visa — apply in Argentina",
          href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/schengen-visa/apply-argentina",
        },
        {
          label: "MVV long stay — apply in Argentina",
          href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-argentina",
        },
        {
          label: "Making an appointment (Argentina)",
          href: "https://www.netherlandsworldwide.nl/making-appointment/argentina",
        },
      ],
    },
    {
      id: "working-holiday",
      heading: "Working Holiday route for Argentinians",
      body: [
        "Argentina is included in the Dutch Working Holiday / Working Holiday Scheme country list described on Netherlands Worldwide. The IND explains the residence permit for working holiday as a separate route aimed at younger movers who want a temporary stay combining holiday and paid work, subject to official conditions and procedures.",
        "This route is not the same as standard long-term sponsored employment or highly skilled migrant pathways: quotas, age limits, duration, and work rules are defined on official pages and can change.",
        "Before you build a move plan around Working Holiday, read the Netherlands Worldwide WHP overview and the IND’s residence permit page for working holiday, and confirm you meet the current criteria.",
      ],
      callout: {
        type: "tip",
        title: "Check eligibility on official pages",
        text: "Do not assume Working Holiday replaces a work or study permit for a long-term career move—match the route to your actual goals.",
        href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/whp",
        linkLabel: "Netherlands Worldwide — Working Holiday Programme",
      },
      links: [
        {
          label: "Netherlands Worldwide — Working Holiday Programme (WHP)",
          href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/whp",
        },
        {
          label: "IND — Residence permit for working holiday",
          href: "https://ind.nl/en/residence-permits/au-pair-and-exchange/residence-permit-working-holiday",
        },
        { label: "Visa consultants (Netherlands)", href: "/netherlands/services/visa-consultants/" },
      ],
    },
    {
      id: "costs",
      heading: "What to budget for when moving from Argentina",
      body: [
        "Use the categories below for planning—not as a promise of exact totals. City, family size, housing strategy, and shipping choices all move the number.",
        costsDisclaimer ?? "",
      ].filter(Boolean),
      table: {
        headers: ["Category", "How costs usually behave", "Planning notes"],
        rows: [
          [
            "Visa / MVV / permit fees",
            "Route-dependent",
            "Use IND and Netherlands Worldwide; consular fees pages list official charges when you need them.",
          ],
          [
            "E-apostille (MFA Argentina) and translations",
            "Per document",
            "Digital e-apostille and sworn translators can drive lead time—start early.",
          ],
          ["Flights (Argentina–Netherlands)", "Seasonal", "Long-haul pricing; align with MVV validity and housing."],
          [
            "Initial housing",
            "City-dependent",
            "Deposits, agency fees, and temporary furnished stays are common.",
          ],
          [
            "Relocation and shipping",
            "Variable",
            "Sea freight for household goods; insurance and customs paperwork.",
          ],
          [
            "Registration and first weeks",
            "Variable",
            "Municipality steps, phone, transport, utilities.",
          ],
          [
            "Health insurance and banking",
            "Ongoing",
            "Dutch basic health insurance for most residents; banking often follows BSN/address.",
          ],
        ],
      },
      internalCta: { label: "Estimate relocation cost (tool) →", href: costEstimatorHref },
      links: [
        { label: "Cost of moving to the Netherlands", href: COST_GUIDE_PATH },
        {
          label: "Netherlands Worldwide — consular fees (Argentina)",
          href: "https://www.netherlandsworldwide.nl/consular-fees/argentina",
        },
      ],
    },
    {
      id: "arrival-weeks",
      heading: "What to arrange after you arrive",
      body: [
        "Most people stack a similar sequence: collect the residence permit when required, register with the municipality and receive a BSN, open a bank account, and arrange Dutch basic health insurance when resident. DigiD, GP registration, and transport passes follow.",
        "Pair this site’s after-arrival guides with official Government.nl and IND instructions.",
      ],
      bullets: [
        "Municipal registration and BSN",
        "Residence permit pickup if applicable",
        "Bank account for salary and rent",
        "Dutch basic health insurance",
        "DigiD, phone, and everyday transport",
        "Housing handover and utilities",
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
      heading: "Useful services for people moving from Argentina to the Netherlands",
      body: [
        "Long-haul, immigration-heavy moves benefit from structured help. The hubs below group visa consultants, immigration lawyers, relocation firms, housing platforms, banks, and insurers—shortlist providers and compare scope and fees yourself.",
        "Provider cards under “Useful services” use the same affiliate datasets as other pages; inclusion is not an endorsement.",
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
      id: "cities-argentina",
      heading: "Popular Dutch cities people moving from Argentina often consider",
      body: [
        "Choice usually reflects job location, industry clusters, housing pressure, schools, and commute. Amsterdam offers broad international hiring; Utrecht balances centrality; The Hague suits institutions and families; Eindhoven fits tech and engineering; Haarlem and Amstelveen offer Amsterdam-area trade-offs; Leiden, Delft, and Groningen suit academic paths; Maastricht, Breda, Tilburg, Arnhem, and Nijmegen can fit regional or lifestyle-led moves.",
      ],
      links: CITY_LINKS.map((l) => ({ label: l.label, href: l.href })),
    },
    {
      id: "shipping",
      heading: "Shipping and relocation logistics",
      body: [
        "Argentina–Netherlands relocations often use sea freight for household goods with several weeks of transit, plus air baggage for essentials. Align dates with MVV validity, notice periods, and temporary housing.",
      ],
      bullets: [
        "Compare insured movers vs self-managed freight.",
        "Keep inventory lists for customs.",
        "Confirm who receives shipments in the Netherlands if you send goods ahead.",
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
        "Use these Dutch government entry points first.",
        "Netherlands immigration and relocation — general orientation.",
        "Argentina — MVV, Schengen, Buenos Aires appointments, Working Holiday, civic integration exam abroad, consular fees.",
        "Argentina-issued documents — e-apostille and legalisation; foreign qualifications when relevant.",
      ],
      links: [...OFFICIAL_NL_IMMIGRATION, ...OFFICIAL_AR_APPLICATIONS, ...OFFICIAL_AR_LEGALISATION],
    },
  ];
}

export function augmentArgentinaGuideData(model: CountryPageModel, base: GuideData): GuideData {
  const fromQuery = `?from=${encodeURIComponent(model.slug)}`;
  const costEstimatorHref = `${COST_ESTIMATOR_PATH}${fromQuery}`;
  const checklistHref = `/netherlands/moving/tools/moving-checklist/${fromQuery}`;
  const pillarWithFrom = `${PILLAR_PATH}${fromQuery}`;

  return {
    ...base,
    publishDate: "2026-04-27",
    lastUpdated: "Last updated: 27 April 2026.",
    title: "Moving to the Netherlands from Argentina",
    metaTitle: model.seo.title,
    breadcrumbLabel: "From Argentina",
    subtitle:
      "Discover the main visa routes, MVV requirements, document apostille rules, and practical settlement steps for moving from Argentina to the Netherlands.",
    description: model.seo.description,
    quickAnswersTitle: "Argentina to Netherlands move at a glance",
    quickAnswers: [
      {
        label: "Main move routes",
        value: "Work, study, partner or family, entrepreneur, working holiday, sponsored relocation",
      },
      {
        label: "Key admin theme",
        value: "Residence-permit planning plus MFA digital e-apostille for Argentine documents",
      },
      {
        label: "Common document issue",
        value:
          "Argentine documents need e-apostille for Dutch use; translation may be required depending on document language",
      },
      {
        label: "Good fit for",
        value: "Professionals, students, families, entrepreneurs, younger movers on WHP, sponsored movers",
      },
      {
        label: "Main early tasks",
        value: "Confirm permit route, complete e-apostille chain, line up registration and first-weeks setup",
      },
      {
        label: "Trade-off to know",
        value: "Long-haul logistics plus permit timing—early planning reduces compressed deadlines",
      },
    ],
    tocItems: [
      { id: "intro-overview", label: "Overview" },
      { id: "visa-mvv-permits", label: "Visa & MVV" },
      { id: "visa-route", label: "Pathways" },
      { id: "documents", label: "Documents" },
      { id: "short-long-stay", label: "Short vs long stay" },
      { id: "working-holiday", label: "Working Holiday" },
      { id: "costs", label: "Budget" },
      { id: "arrival-weeks", label: "After arrival" },
      { id: "service-hubs", label: "Services" },
      { id: "cities-argentina", label: "Cities" },
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
      title: "Plan your move from Argentina",
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
    sections: argentinaSections(fromQuery, costEstimatorHref, model.costs.disclaimer),
    internalLinks: {
      ...base.internalLinks,
      related: ARGENTINA_RELATED_INTERNAL,
    },
    relatedGuidesSectionTitle: "Related guides before moving from Argentina",
    servicesSectionTitle: "Useful services when relocating from Argentina",
    servicesIntro:
      "Provider cards below are drawn from the same affiliate dataset used on other Netherlands pages. Compare options yourself; inclusion here is not a recommendation.",
    scenariosSectionTitle: "Common Argentina-to-Netherlands relocation scenarios",
    scenariosSectionIntro:
      "Examples show how priorities shift by route. Use the checklist tool with ?from=argentina to keep your origin context.",
    exampleScenarios: [
      {
        title: "Argentinian professional moving for a sponsored job",
        summary:
          "Sequence employer-side IND steps, MVV collection in Buenos Aires after approval, housing, and BSN-first banking and insurance. Complete MFA e-apostille on civil documents early.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Argentinian student moving for university",
        summary:
          "Align admission, study-permit conditions, proof of funds, and student housing. E-apostille diplomas and transcripts; add translations when the institution requires them.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Partner or family relocation",
        summary:
          "Relationship evidence and civil documents drive timelines. Check whether the civic integration exam abroad applies—Netherlands Worldwide has an Argentina-specific exam page.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Entrepreneur or startup founder exploring Dutch options",
        summary:
          "Business criteria differ from employment. Compare startup advisors with IND self-employment pages before committing to dates.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Younger mover considering Working Holiday",
        summary:
          "Confirm current WHP eligibility and quotas on Netherlands Worldwide and the IND working holiday page. Do not treat WHP as a default long-term work permit. Official WHP and IND links are in the pathways and official sources sections above.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Family preparing e-apostilled documents",
        summary:
          "Use the Argentina legalisation page on Netherlands Worldwide to plan MFA e-apostille steps, then run the document readiness checker for a structured pass.",
        href: `/netherlands/document-readiness-checker/${fromQuery}`,
        ctaLabel: "Run document readiness checker",
      },
      {
        title: "Long-stay mover comparing cities after permit approval",
        summary:
          "Use city guides for commute and rent trade-offs. Book temporary housing if you need in-person viewings.",
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
        description: "Helpful when MVV, embassy appointments, and document bundles need tight sequencing.",
        ctaLabel: "View visa consultants",
        ctaHref: "/netherlands/services/visa-consultants/",
      },
      {
        title: "Immigration lawyers",
        description: "For refusals, appeals, or complex family or business cases.",
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
