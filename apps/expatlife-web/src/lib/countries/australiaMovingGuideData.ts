/**
 * Extended editorial + SEO layout for the Australia → Netherlands origin-country guide.
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

const OFFICIAL_AU_ENTRY: Array<{ label: string; href: string }> = [
  {
    label: "Netherlands Worldwide — MVV long stay (apply in Australia)",
    href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-australia",
  },
  { label: "Netherlands Worldwide — Working Holiday Programme", href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/whp" },
  {
    label: "IND — Residence permit working holiday",
    href: "https://ind.nl/en/residence-permits/au-pair-and-exchange/residence-permit-working-holiday",
  },
];

const OFFICIAL_AU_DOCS: Array<{ label: string; href: string }> = [
  {
    label: "Smartraveller — Notarial and document services (Australia)",
    href: "https://www.smartraveller.gov.au/consular-services/notarial-services/documents",
  },
];

const OFFICIAL_AU_CONSULAR_NL: Array<{ label: string; href: string }> = [
  {
    label: "Australian Embassy — Netherlands (official site)",
    href: "https://netherlands.embassy.gov.au/",
  },
];

const AUSTRALIA_RELATED_INTERNAL = filterLiveInternalLinks([
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

function australiaSections(
  fromQuery: string,
  costEstimatorHref: string,
  costsDisclaimer?: string
): GuideSection[] {
  return [
    {
      id: "intro-overview",
      heading: "What Australians Need to Know Before Moving to the Netherlands",
      body: [
        "Moving from Australia to the Netherlands usually means planning around immigration steps, civil documents, housing, banking, and health coverage—not only booking a long-haul flight. Because Australia is outside the EU, EEA, and Switzerland, permit rules are central to most stays longer than short visits.",
        "Routes diverge widely: a sponsored professional, a university student, someone joining a partner, a founder testing startup or self-employment options, and a younger traveller on a working holiday each follow different requirements and timelines.",
        "This guide summarises the main pathways, how an MVV may fit in, what document preparation often looks like before you leave Australia, and which Netherlands guides to open next. It supports planning only—it is not legal advice and does not guarantee outcomes.",
      ],
      links: [
        { label: "EU vs non-EU moving to the Netherlands", href: "/netherlands/eu-vs-non-eu-moving-to-netherlands/" },
        { label: "Moving to the Netherlands (main hub)", href: `${PILLAR_PATH}${fromQuery}` },
      ],
    },
    {
      id: "visa-route",
      heading: "Main Ways Australians Move to the Netherlands",
      body: [
        "The right route depends on your purpose in the Netherlands, whether you have a sponsor (employer, school, or family member), and the conditions for that permit type. Confirm every detail with the IND and Netherlands Worldwide for your situation.",
      ],
      visaRoutes: {
        commonRoutes: [
          "Moving for work — employment with a Dutch or Netherlands-based employer, tied to a specific permit type and often sponsor obligations.",
          "Highly skilled migrant — sponsored employment meeting salary and role criteria, usually through a recognised sponsor.",
          "Moving to study — admission to a Dutch institution and a study residence permit, with rules on hours worked and insurance.",
          "Joining a partner or family — eligibility depends on the relationship and your partner's status; evidence requirements vary.",
          "Entrepreneurship / startup — startup or self-employment routes have distinct criteria, documentation, and sometimes advisors or facilitators.",
          "Working Holiday / Working Holiday Scheme — cultural exchange for eligible Australians; separate from standard long-term skilled work—see official pages for limits and conditions.",
        ],
        notes: [
          "Australians are eligible for the Dutch Working Holiday route; the IND describes how to apply, including online application where it applies—check the current IND working-holiday page.",
          "Many long-stay procedures use an MVV plus residence permit; others differ by nationality and route. Verify on official sources rather than assuming one path fits everyone.",
          "Use the visa checker and, if needed, regulated advisors—see service hubs below—for complex or time-sensitive cases.",
        ],
      },
      callout: {
        type: "info",
        title: "Planning note",
        text: "Rules change. Use this page as a map, then confirm requirements on official Dutch and Australian government pages before you rely on them for decisions.",
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
      heading: "MVV and Residence Permit Basics for Australians",
      body: [
        "If you plan to stay in the Netherlands longer than 90 days, you generally need to consider Dutch residence-permit rules for your situation. The MVV (provisional residence permit) is an entry visa used in many long-stay procedures so you can travel to the Netherlands to complete steps such as collecting your residence permit. Whether you need an MVV, and how you apply, depends on your nationality and permit route.",
        "Netherlands Worldwide publishes an Australia-specific page for applying for the MVV visa sticker in Australia. Read it together with the IND pages on MVV and applying from abroad.",
        "This site does not decide eligibility. If you are unsure whether your route needs an MVV, a residence permit only, or both, start from the official checklist and your route description, then seek professional advice if needed.",
      ],
      callout: {
        type: "tip",
        title: "Official entry points",
        text: "IND explains residency and MVV concepts; Netherlands Worldwide covers practical steps including how to apply from Australia.",
        href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-australia",
        linkLabel: "MVV in Australia (Netherlands Worldwide)",
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
          label: "MVV long stay — apply in Australia",
          href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-australia",
        },
      ],
    },
    {
      id: "documents",
      heading: "Documents Australians Often Need Before Moving",
      body: [
        "Start with a valid passport and assemble civil and supporting records for your route—birth or marriage certificates, contracts, admissions letters, proof of address where asked, and qualifications for work or study.",
        "Australian authorities explain that documents may need apostille or authentication before foreign authorities will accept them. Smartraveller covers notarial and document topics for Australians. Dutch procedures may additionally require legalisation steps or sworn translations depending on the authority—check each process.",
        "Build slack for state or Commonwealth issuing bodies, authentication, sworn translation, and courier time—especially alongside long-haul move logistics.",
      ],
      bullets: [
        "Passport validity through your first months in the Netherlands",
        "Civil-status records for partner or family routes where relevant",
        "Apostille / authentication planning for Australian-issued documents",
        "Sworn translations when a Dutch authority requests them",
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
      heading: "Working Holiday Route for Australians",
      body: [
        "The Netherlands and Australia participate in a Working Holiday / Working Holiday Scheme arrangement. It is aimed at cultural exchange and temporary stay—not a substitute for a standard long-term skilled work permit. Age limits, duration, and conditions are set out on Netherlands Worldwide and the IND.",
        "The IND describes how to apply for a working holiday residence permit, including whether online application is available for your nationality—follow the current IND instructions rather than informal summaries.",
        "If your goal is a longer career-based move, compare this route with sponsored employment permits.",
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
      heading: "What to Budget For When Moving from Australia",
      body: [
        "Ultra long-haul relocation amplifies timing risk: flights, shipping windows, and overlapping rent can stack quickly. Use the table as categories to research—not as fixed price promises.",
        costsDisclaimer ?? "",
      ].filter(Boolean),
      table: {
        headers: ["Category", "How costs usually behave", "Planning notes"],
        rows: [
          [
            "Visa / permit fees",
            "Route-dependent",
            "Use official IND and service fee pages for your permit type.",
          ],
          [
            "Apostille / authentication",
            "Per document",
            "Follow Australian government guidance; allow time for issuing authorities and postage.",
          ],
          ["Translations", "Per page or document", "Sworn translators; urgent jobs cost more."],
          [
            "Flights and baggage",
            "Route- and season-dependent",
            "Australia–Europe is typically multi-segment; compare dates and cities.",
          ],
          [
            "Shipping household goods",
            "Volume-driven",
            "Sea freight is common; align with temporary housing.",
          ],
          [
            "Initial housing",
            "City-dependent",
            "Deposits and agency fees vary; Amsterdam-area pressure is often highest.",
          ],
          [
            "Health insurance and banking",
            "Ongoing after registration",
            "Basic Dutch health insurance is mandatory for most residents; BSN often precedes banking.",
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
        "Most people line up municipality registration and BSN, residence-permit steps if required, a bank account, Dutch basic health insurance where mandatory, DigiD when eligible, then housing utilities, phone, and transport.",
        "The after-arrival guide ties these together; the links below are the pages Australians most often open first.",
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
      heading: "Useful Services for Australians Moving to the Netherlands",
      body: [
        "These hubs group banks, housing platforms, relocation firms, visa support, and more. Provider cards under “Useful services” reuse the same affiliate dataset as other origin guides—use them for comparison, not as an endorsement.",
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
      id: "cities-australia",
      heading: "Popular Dutch Cities Australians Often Consider",
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
        "Australia-to-Europe sea freight typically runs on multi-week timelines. Many households use furnished short-stay housing until goods arrive and registration is complete.",
      ],
      bullets: [
        "Compare shared vs full container and insurance options early.",
        "Keep an inventory and copies of shipping documents accessible during travel.",
        "Plan pet transport separately if applicable.",
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
        "Official Dutch and Australian resources, grouped for scanning.",
        "Netherlands — immigration and relocation",
        "Australia-specific Dutch entry / MVV / working holiday",
        "Australian documents — authentication / apostille",
        "Australian support in the Netherlands",
      ],
      links: [
        ...OFFICIAL_NL_IMMIGRATION,
        ...OFFICIAL_AU_ENTRY,
        ...OFFICIAL_AU_DOCS,
        ...OFFICIAL_AU_CONSULAR_NL,
      ],
    },
  ];
}

export function augmentAustraliaGuideData(model: CountryPageModel, base: GuideData): GuideData {
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
      "Discover the main visa routes, documents, practical steps, and settlement considerations for Australians moving to the Netherlands.",
    description: model.seo.description,
    quickAnswersTitle: "Australia to Netherlands Move at a Glance",
    quickAnswers: [
      {
        label: "Main move routes",
        value: "Work, study, partner or family, entrepreneurship, working holiday",
      },
      {
        label: "Key admin theme",
        value: "Residence-permit planning plus document preparation before you leave Australia",
      },
      {
        label: "Common document issues",
        value: "Apostille/authentication, sworn translations, aligning timing with permit steps",
      },
      {
        label: "Good fit for",
        value: "Professionals, students, families, partners, founders, younger Australians on WHP",
      },
      {
        label: "Main early tasks",
        value: "Confirm your route, gather documents, plan registration and first-month setup",
      },
      {
        label: "Trade-off to know",
        value: "Long-haul and document prep both take time—start earlier than feels comfortable",
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
      { id: "cities-australia", label: "Cities" },
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
      title: "Plan your move from Australia",
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
    sections: australiaSections(fromQuery, costEstimatorHref, model.costs.disclaimer),
    internalLinks: {
      ...base.internalLinks,
      related: AUSTRALIA_RELATED_INTERNAL,
    },
    relatedGuidesSectionTitle: "Related Guides Before Moving from Australia",
    servicesSectionTitle: "Useful Services for Australians Moving to the Netherlands",
    servicesIntro:
      "Provider cards below are drawn from the same affiliate dataset used on other Netherlands pages. Compare options yourself; inclusion here is not a recommendation.",
    scenariosSectionTitle: "Common Australia-to-Netherlands Relocation Scenarios",
    scenariosSectionIntro:
      "Each scenario highlights different priorities. Use the checklist tool with ?from=australia to keep your origin context while you work through tasks.",
    exampleScenarios: [
      {
        title: "Australian professional relocating for a Dutch job offer",
        summary:
          "Align sponsor timelines with MVV/residence steps if they apply, secure housing near work, and sequence BSN, banking, and insurance. Use highly skilled migrant sponsor directories if your employer expects you to self-serve parts of the process.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Australian student starting a degree in the Netherlands",
        summary:
          "Lock study-permit conditions, housing near campus, finances, and student insurance rules. Start apostille and translation early for academic records.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Australian joining a partner in the Netherlands",
        summary:
          "Relationship evidence and civil documents drive the timeline. Expect authentication and translation work—see our apostille and translation guides.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Australian on the Working Holiday route",
        summary:
          "Treat as temporary cultural exchange: confirm IND and WHP conditions, insurance, and what would change if you later switch to sponsored work.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Australian entrepreneur exploring startup or self-employment",
        summary:
          "Match your plan to startup or self-employment criteria, advisors, and municipality registration. Evidence needs are usually heavier than for a standard employee route.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Australian family with children",
        summary:
          "Combine schools research, larger housing, and document bundles per family member. Add buffer for Australian civil records and authentication.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Australian preparing authenticated documents for Dutch authorities",
        summary:
          "Even if you apply from outside Australia, you may need Australian apostilles and translations. Cross-check Smartraveller and the requesting Dutch authority’s list.",
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
        description: "For appeals, refusals, or complex business structures, legal advice may help.",
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
