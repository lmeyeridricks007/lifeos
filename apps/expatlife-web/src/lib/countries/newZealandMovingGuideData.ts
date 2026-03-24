/**
 * Extended editorial + SEO layout for the New Zealand → Netherlands origin-country guide.
 * Merges onto the default country guide data from `buildDefaultCountryGuideData`.
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
  { label: "IND — Residency in the Netherlands", href: "https://ind.nl/en/residency-in-the-netherlands" },
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
    label: "Government.nl — How do I apply for a residence permit?",
    href: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/how-do-i-apply-for-a-residence-permit-for-the-netherlands",
  },
  {
    label: "Government.nl — Checklist: coming to the Netherlands for work",
    href: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/checklist-coming-to-the-nederlands-for-work",
  },
];

const OFFICIAL_NZ_ENTRY: Array<{ label: string; href: string }> = [
  {
    label: "Netherlands Worldwide — MVV long stay (apply in New Zealand)",
    href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-new-zealand",
  },
  {
    label: "Netherlands Worldwide — Making an appointment (New Zealand)",
    href: "https://www.netherlandsworldwide.nl/making-appointment/new-zealand",
  },
  { label: "Netherlands Worldwide — Working Holiday Programme", href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/whp" },
  {
    label: "IND — Residence permit working holiday",
    href: "https://ind.nl/en/residence-permits/au-pair-and-exchange/residence-permit-working-holiday",
  },
];

const OFFICIAL_NZ_DOCS: Array<{ label: string; href: string }> = [
  {
    label: "Govt.nz — Using your NZ documents overseas",
    href: "https://www.govt.nz/browse/passports-citizenship-and-identity/proving-and-protecting-your-identity/use-your-nz-documents-overseas/",
  },
  {
    label: "MFAT — Authentication of documents",
    href: "https://www.mfat.govt.nz/en/about-us/who-we-are/authentication-of-documents",
  },
  {
    label: "DIA — Translation of official documents for use overseas",
    href: "https://www.dia.govt.nz/Translation-Official-documents-to-be-used-overseas",
  },
];

const OFFICIAL_NZ_CONSULAR: Array<{ label: string; href: string }> = [
  {
    label: "MFAT — Netherlands (travel advice and official links)",
    href: "https://www.mfat.govt.nz/en/countries-and-regions/europe/netherlands/",
  },
];

const NZ_RELATED_INTERNAL = filterLiveInternalLinks([
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
  { label: "First 90 days in the Netherlands", href: "/netherlands/first-90-days-netherlands/" },
  { label: "Netherlands services directory", href: "/netherlands/services/" },
  { label: "Dutch cities overview", href: "/netherlands/cities/" },
  { label: "Moving from your country (all guides)", href: COUNTRY_INDEX_PATH },
  { label: "How this site works", href: "/how-this-site-works/" },
  { label: "Methodology", href: "/methodology/" },
  { label: "Sources", href: "/sources/" },
]);

function newZealandSections(
  fromQuery: string,
  costEstimatorHref: string,
  costsDisclaimer?: string
): GuideSection[] {
  return [
    {
      id: "intro-overview",
      heading: "What New Zealanders Need to Know Before Moving to the Netherlands",
      body: [
        "Moving from New Zealand to the Netherlands usually means lining up immigration steps, civil documents, housing, banking, and health coverage—not only booking a long-haul flight. New Zealand is outside the EU, EEA, and Switzerland, so permit rules are central to most stays longer than short visits.",
        "Your pathway depends on why you are going: a sponsored job, a degree, joining family, building a business, or a temporary working holiday each follows different requirements and timelines.",
        "This guide outlines the main routes, how an MVV may fit in, what document preparation often looks like before you leave New Zealand, and which Netherlands guides to open next. It is planning support only—not legal advice and not a guarantee of any outcome.",
      ],
      links: [
        { label: "EU vs non-EU moving to the Netherlands", href: "/netherlands/eu-vs-non-eu-moving-to-netherlands/" },
        { label: "Moving to the Netherlands (main hub)", href: `${PILLAR_PATH}${fromQuery}` },
      ],
    },
    {
      id: "visa-route",
      heading: "Main Ways New Zealanders Move to the Netherlands",
      body: [
        "The right route depends on your purpose, whether you have a sponsor (employer, institution, or family member), and the conditions for that permit. Confirm every detail with the IND and Netherlands Worldwide.",
      ],
      visaRoutes: {
        commonRoutes: [
          "Moving for work — employment with a Dutch or Netherlands-based employer, tied to a permit type and often sponsor responsibilities.",
          "Highly skilled migrant — sponsored role meeting salary and role criteria, usually via a recognised sponsor.",
          "Moving to study — admission to a Dutch institution and a study residence permit, with rules on work hours and insurance.",
          "Joining a partner or family — eligibility and evidence depend on the relationship and your partner's status.",
          "Entrepreneurship / startup — startup or self-employment routes with distinct criteria and documentation.",
          "Working Holiday / Working Holiday Scheme — cultural exchange for eligible New Zealanders; separate from standard long-term skilled work—see official pages for limits.",
        ],
        notes: [
          "New Zealanders are eligible for the Dutch Working Holiday route; the IND describes the residence permit, including how to apply when online application applies—check the current IND page.",
          "Many long-stay procedures combine an MVV with a residence permit; others differ. Do not assume one template fits every nationality and route.",
          "Use the visa checker and, if needed, regulated advisors listed under service hubs for complex or urgent cases.",
        ],
      },
      callout: {
        type: "info",
        title: "Planning note",
        text: "Immigration rules change. Treat this page as a structured map, then verify on official Dutch and New Zealand government sources.",
      },
      links: [
        { label: "Visa checker", href: "/netherlands/visa-checker/" },
        { label: "Highly skilled migrant visa", href: "/netherlands/visa/highly-skilled-migrant/" },
        { label: "Student visa", href: "/netherlands/visa/student-visa/" },
        { label: "Partner & family visa", href: "/netherlands/visa/partner-family-visa/" },
        { label: "Self-employed visa", href: "/netherlands/visa/self-employed-visa/" },
        { label: "Visa consultants (Netherlands)", href: "/netherlands/services/visa-consultants/" },
        { label: "Immigration lawyers (Netherlands)", href: "/netherlands/services/immigration-lawyers/" },
      ],
    },
    {
      id: "mvv-basics",
      heading: "MVV and Residence Permit Basics for New Zealanders",
      body: [
        "If you intend to stay in the Netherlands longer than 90 days, you generally need to consider Dutch residence-permit rules for your situation. The MVV (provisional residence permit) is an entry visa used in many long-stay procedures so you can travel to the Netherlands and complete steps such as collecting your residence permit. Whether you need an MVV depends on your nationality and route.",
        "Netherlands Worldwide publishes New Zealand-specific guidance for applying for the MVV visa sticker, including appointment information. Read it together with IND pages on MVV and applying from abroad.",
        "This site does not determine eligibility. If you are unsure whether your route needs an MVV, a residence permit only, or both, start from the official checklist and route description, then seek professional advice if appropriate.",
      ],
      callout: {
        type: "tip",
        title: "Official entry points",
        text: "IND explains residency and MVV; Netherlands Worldwide covers how to apply from New Zealand, including appointments.",
        href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-new-zealand",
        linkLabel: "MVV in New Zealand (Netherlands Worldwide)",
      },
      links: [
        { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
        { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/" },
        { label: "IND — MVV", href: "https://ind.nl/en/provisional-residence-permit-mvv" },
        {
          label: "IND — Apply from abroad",
          href: "https://ind.nl/en/apply-for-mvv-and-residence-permit-from-abroad",
        },
        {
          label: "MVV long stay — apply in New Zealand",
          href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-new-zealand",
        },
        {
          label: "Making an appointment — New Zealand",
          href: "https://www.netherlandsworldwide.nl/making-appointment/new-zealand",
        },
      ],
    },
    {
      id: "documents",
      heading: "Documents New Zealanders Often Need Before Moving",
      body: [
        "Start with a valid passport and gather civil and supporting records for your route—birth or marriage certificates, contracts, admissions, proof of address where required, and qualifications for work or study.",
        "New Zealand government sources explain that documents for use overseas may need apostille or authentication. Govt.nz, MFAT, and DIA publish guidance on using NZ documents abroad, authentication, and official translation where needed. Dutch authorities may require legalisation and/or sworn translation for specific procedures—check the document list for your permit or municipality process.",
        "Confirm for each step whether apostille, authentication, notarisation, translation, or a combination applies; requirements differ by document type and requesting authority.",
      ],
      bullets: [
        "Passport validity through your first months in the Netherlands",
        "Civil-status records for partner or family routes where relevant",
        "Apostille / authentication planning for New Zealand–issued documents",
        "Official translation when a Dutch authority requires Dutch (or another) language",
        "Employer, university, or IND-specific forms",
      ],
      internalCta: {
        label: "Run the document readiness checker",
        href: `/netherlands/document-readiness-checker/${fromQuery}`,
      },
      links: [
        { label: "Apostille in the Netherlands (guide)", href: "/netherlands/apostille-documents-netherlands/" },
        { label: "Document translation (Netherlands)", href: "/netherlands/document-translation-netherlands/" },
        { label: "Document legalization (Netherlands)", href: "/netherlands/document-legalization-netherlands/" },
        { label: "Documents needed to move", href: DOCUMENTS_GUIDE_PATH },
      ],
    },
    {
      id: "working-holiday",
      heading: "Working Holiday Route for New Zealanders",
      body: [
        "The Netherlands and New Zealand participate in a Working Holiday / Working Holiday Scheme arrangement. It is intended as cultural exchange and temporary stay—not a substitute for a standard long-term skilled work permit. Conditions appear on Netherlands Worldwide and the IND.",
        "The IND describes how to apply for a working holiday residence permit for eligible nationalities; follow the current IND instructions rather than informal summaries.",
        "If you are planning a longer career-based move, compare this route with sponsored employment permits.",
      ],
      links: [
        { label: "Netherlands Worldwide — WHP", href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/whp" },
        {
          label: "IND — Residence permit working holiday",
          href: "https://ind.nl/en/residence-permits/au-pair-and-exchange/residence-permit-working-holiday",
        },
      ],
    },
    {
      id: "costs",
      heading: "What to Budget For When Moving from New Zealand",
      body: [
        "Ultra long-haul relocation from New Zealand often stacks flight costs, shipping lead times, and overlapping rent. Use the table as categories to research—not fixed price promises.",
        costsDisclaimer ?? "",
      ].filter(Boolean),
      table: {
        headers: ["Category", "How costs usually behave", "Planning notes"],
        rows: [
          [
            "Visa / permit fees",
            "Route-dependent",
            "Use official IND and service fee information for your permit type.",
          ],
          [
            "Apostille / authentication",
            "Per document",
            "MFAT and other NZ guidance describe authentication; allow processing and courier time.",
          ],
          [
            "Translation",
            "Per document",
            "DIA and sworn translators; urgent work costs more.",
          ],
          [
            "Flights",
            "Route- and season-dependent",
            "Often multi-leg via Asia or the Middle East; compare hubs and dates.",
          ],
          [
            "Shipping household goods",
            "Volume-driven",
            "Sea freight is common; align with temporary housing.",
          ],
          [
            "Initial housing",
            "City-dependent",
            "Deposits and agency fees vary; major cities are typically tighter.",
          ],
          [
            "Health insurance and banking",
            "After registration",
            "Dutch basic health insurance is mandatory for most residents; BSN often precedes banking.",
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
        "Most people prioritise municipality registration and BSN, any residence-permit steps, a bank account, Dutch basic health insurance where required, DigiD when eligible, then utilities, phone, and transport.",
        "The after-arrival guide connects these threads; the links below are the pages New Zealanders often open first.",
      ],
      bullets: [
        "Municipal registration and BSN",
        "Residence permit pickup or follow-up",
        "Bank account (often after address/BSN)",
        "Dutch basic health insurance",
        "DigiD, mobile, and public transport",
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
      heading: "Useful Services for New Zealanders Moving to the Netherlands",
      body: [
        "These hubs list banks, housing platforms, relocation support, visa services, and more. Provider cards under “Useful services” use the same affiliate dataset as other origin guides—for comparison, not as an endorsement.",
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
        { label: "Startup visa advisors", href: "/netherlands/services/startup-visa-advisors/" },
        { label: "Highly skilled migrant sponsors", href: "/netherlands/services/highly-skilled-migrant-sponsors/" },
        { label: "All Netherlands services", href: "/netherlands/services/" },
      ]).map((l) => ({ label: l.label, href: l.href })),
    },
    {
      id: "cities-new-zealand",
      heading: "Popular Dutch Cities New Zealanders Often Consider",
      body: [
        "Choice usually tracks job location, sector clusters, housing, and lifestyle. Each link opens a city guide on this site.",
      ],
      links: filterLiveInternalLinks([
        { label: "Amsterdam — broad international hiring", href: "/netherlands/amsterdam/" },
        { label: "Rotterdam — port, logistics, creative sectors", href: "/netherlands/rotterdam/" },
        { label: "Utrecht — central, strong commuting links", href: "/netherlands/utrecht/" },
        { label: "The Hague — institutions, many international employers", href: "/netherlands/the-hague/" },
        { label: "Eindhoven — tech and engineering density", href: "/netherlands/eindhoven/" },
        { label: "Haarlem — Amsterdam proximity, different pace", href: "/netherlands/haarlem/" },
        { label: "Amstelveen — Amsterdam metro family-oriented option", href: "/netherlands/amstelveen/" },
        { label: "Leiden — university city", href: "/netherlands/leiden/" },
        { label: "Delft — tech and university town", href: "/netherlands/delft/" },
        { label: "Groningen — northern student and knowledge hub", href: "/netherlands/groningen/" },
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
      heading: "Shipping and ultra long-haul logistics",
      body: [
        "Sea freight from New Zealand to Europe typically spans multiple weeks. Furnished short-stay housing is common until shipments arrive and registration is complete.",
      ],
      bullets: [
        "Compare shared vs full container and insurance early.",
        "Keep inventory lists and shipping paperwork accessible when you travel.",
        "Plan pet transport separately if needed.",
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
        "Official Dutch and New Zealand resources, grouped for scanning.",
        "Netherlands — immigration and relocation",
        "New Zealand–specific Dutch entry / MVV / working holiday",
        "New Zealand — document authentication / apostille / translation",
        "New Zealand — support for New Zealanders (including in the Netherlands)",
      ],
      links: [
        ...OFFICIAL_NL_IMMIGRATION,
        ...OFFICIAL_NZ_ENTRY,
        ...OFFICIAL_NZ_DOCS,
        ...OFFICIAL_NZ_CONSULAR,
      ],
    },
  ];
}

export function augmentNewZealandGuideData(model: CountryPageModel, base: GuideData): GuideData {
  const fromQuery = `?from=${encodeURIComponent(model.slug)}`;
  const costEstimatorHref = `${COST_ESTIMATOR_PATH}${fromQuery}`;
  const checklistHref = `/netherlands/moving/tools/moving-checklist/${fromQuery}`;
  const pillarWithFrom = `${PILLAR_PATH}${fromQuery}`;

  return {
    ...base,
    publishDate: "2026-04-07",
    lastUpdated: "Last updated: 7 April 2026.",
    metaTitle: model.seo.title,
    subtitle:
      "Discover the main visa routes, documents, practical steps, and settlement considerations for New Zealanders moving to the Netherlands.",
    description: model.seo.description,
    quickAnswersTitle: "New Zealand to Netherlands Move at a Glance",
    quickAnswers: [
      {
        label: "Main move routes",
        value: "Work, study, partner or family, entrepreneurship, working holiday",
      },
      {
        label: "Key admin theme",
        value: "Residence-permit planning plus document preparation before you leave New Zealand",
      },
      {
        label: "Common document issues",
        value: "Apostille/authentication, official translation, aligning timing with permit steps",
      },
      {
        label: "Good fit for",
        value: "Professionals, students, families, partners, founders, younger New Zealanders on WHP",
      },
      {
        label: "Main early tasks",
        value: "Confirm your route, gather documents, plan registration and first-month setup",
      },
      {
        label: "Trade-off to know",
        value: "Long-haul logistics plus document steps both need buffer—start earlier than feels comfortable",
      },
    ],
    tocItems: [
      { id: "intro-overview", label: "Before you move" },
      { id: "visa-route", label: "Visa & routes" },
      { id: "mvv-basics", label: "MVV basics" },
      { id: "documents", label: "Documents" },
      { id: "working-holiday", label: "Working holiday" },
      { id: "costs", label: "Budget" },
      { id: "arrival-weeks", label: "After arrival" },
      { id: "service-hubs", label: "Service hubs" },
      { id: "cities-new-zealand", label: "Cities" },
      { id: "shipping", label: "Shipping" },
      { id: "official-sources", label: "Official sources" },
      { id: "tools", label: "Tools" },
      { id: "example-scenarios", label: "Scenarios" },
      { id: "useful-services", label: "Provider examples" },
      { id: "faq", label: "FAQ" },
      { id: "related-guides", label: "Related guides" },
      { id: "explore-next", label: "Explore next" },
    ],
    heroCta: {
      title: "Plan your move from New Zealand",
      supportingText:
        "Start from the main moving hub or browse vetted service categories. Use the tools when you are ready to turn planning into a checklist and timeline.",
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
    sections: newZealandSections(fromQuery, costEstimatorHref, model.costs.disclaimer),
    internalLinks: {
      ...base.internalLinks,
      related: NZ_RELATED_INTERNAL,
    },
    relatedGuidesSectionTitle: "Related Guides Before Moving from New Zealand",
    servicesSectionTitle: "Useful Services for New Zealanders Moving to the Netherlands",
    servicesIntro:
      "Provider cards below are drawn from the same affiliate dataset used on other Netherlands pages. Compare options yourself; inclusion here is not a recommendation.",
    scenariosSectionTitle: "Common New Zealand-to-Netherlands Relocation Scenarios",
    scenariosSectionIntro:
      "Each scenario highlights different priorities. Use the checklist tool with ?from=new-zealand to keep your origin context while you work through tasks.",
    exampleScenarios: [
      {
        title: "New Zealander relocating for a Dutch job offer",
        summary:
          "Align sponsor timelines with MVV/residence steps if they apply, line up housing, and sequence BSN, banking, and insurance. Use highly skilled migrant sponsor listings if your employer expects you to drive parts of the process.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "New Zealander student starting a degree in the Netherlands",
        summary:
          "Confirm study-permit conditions, housing, finances, and insurance rules. Start apostille, authentication, and translation early for academic records.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "New Zealander joining a partner in the Netherlands",
        summary:
          "Relationship and civil documents drive the timeline. Expect authentication and translation work—see our apostille and translation guides.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "New Zealander on the Working Holiday route",
        summary:
          "Treat as temporary cultural exchange: confirm IND and WHP conditions, insurance, and what changes if you later move to sponsored work.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "New Zealander entrepreneur exploring startup or self-employment",
        summary:
          "Match your plan to startup or self-employment criteria, advisors, and municipality registration. Evidence needs are usually heavier than for a standard employee route.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "New Zealander family with children",
        summary:
          "Layer schools research, larger housing, and documents for each family member. Add buffer for NZ civil records and authentication.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "New Zealander preparing apostilled or authenticated documents for Dutch use",
        summary:
          "Cross-check Govt.nz, MFAT, and DIA guidance with the requesting Dutch authority’s checklist so you do not miss translation or legalisation steps.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
    ],
    exploreNextCards: [
      {
        title: "Netherlands services directory",
        description: "Banks, housing, insurance, immigration support, and more in one hub.",
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
        description: "Useful when timelines are tight or your case does not fit a template.",
        ctaLabel: "View visa consultants",
        ctaHref: "/netherlands/services/visa-consultants/",
      },
      {
        title: "Immigration lawyers",
        description: "For refusals, appeals, or complex structures, legal advice may help.",
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
