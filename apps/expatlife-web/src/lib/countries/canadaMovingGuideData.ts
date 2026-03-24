/**
 * Extended editorial + SEO layout for the Canada → Netherlands origin-country guide.
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

const OFFICIAL_CA_ENTRY: Array<{ label: string; href: string }> = [
  {
    label: "Netherlands Worldwide — MVV long stay (apply in Canada)",
    href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-canada",
  },
  { label: "Netherlands Worldwide — Working Holiday Programme", href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/whp" },
  {
    label: "IND — Residence permit working holiday",
    href: "https://ind.nl/en/residence-permits/au-pair-and-exchange/residence-permit-working-holiday",
  },
];

const OFFICIAL_CA_DOCS: Array<{ label: string; href: string }> = [
  {
    label: "Global Affairs Canada — Authentication of documents (overview)",
    href: "https://www.international.gc.ca/gac-amc/about-a_propos/services/authentication-authentification/index.aspx?lang=eng",
  },
  {
    label: "Global Affairs Canada — Authentication step 1",
    href: "https://www.international.gc.ca/gac-amc/about-a_propos/services/authentication-authentification/step-etape-1.aspx?lang=eng",
  },
  {
    label: "Global Affairs Canada — Authentication step 2",
    href: "https://www.international.gc.ca/gac-amc/about-a_propos/services/authentication-authentification/step-etape-2.aspx?lang=eng",
  },
];

const OFFICIAL_CA_CONSULAR: Array<{ label: string; href: string }> = [
  {
    label: "Embassy of Canada — The Hague (country info)",
    href: "https://www.international.gc.ca/country-pays/netherlands-pays_bas/the_hague-la_haye-info.aspx?lang=eng",
  },
  {
    label: "Embassy of Canada — The Hague",
    href: "https://www.international.gc.ca/country-pays/netherlands-pays_bas/the_hague-la_haye.aspx?lang=eng",
  },
];

const CANADA_RELATED_INTERNAL = filterLiveInternalLinks([
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

function canadaSections(
  fromQuery: string,
  costEstimatorHref: string,
  costsDisclaimer?: string
): GuideSection[] {
  return [
    {
      id: "intro-overview",
      heading: "What Canadians Need to Know Before Moving to the Netherlands",
      body: [
        "Moving from Canada to the Netherlands usually means planning around immigration steps, civil documents, housing, banking, and health coverage—not just booking a flight. Because Canada is outside the EU, EEA, and Switzerland, permit rules are a core part of most longer stays.",
        "Not everyone follows the same route: a software professional with a Dutch employer, a master's student, someone joining a partner, a founder exploring entrepreneurship, and a young adult on a working holiday all face different requirements and timelines.",
        "This guide explains the main pathways, how MVV entry visas fit into the picture for some routes, what document preparation often looks like on the Canadian side, and which practical Netherlands guides to open next. It is an overview to support planning—not a substitute for legal advice or a guarantee of any outcome.",
      ],
      links: [
        { label: "EU vs non-EU moving to the Netherlands", href: "/netherlands/eu-vs-non-eu-moving-to-netherlands/" },
        { label: "Moving to the Netherlands (main hub)", href: `${PILLAR_PATH}${fromQuery}` },
      ],
    },
    {
      id: "visa-route",
      heading: "Main Ways Canadians Move to the Netherlands",
      body: [
        "The right route depends on your purpose in the Netherlands, whether you have a sponsor (employer, educational institution, or family member), and the conditions that apply to that specific permit type. Always confirm details with the IND and Netherlands Worldwide for your situation.",
      ],
      visaRoutes: {
        commonRoutes: [
          "Moving for work — salaried employment with a Dutch or Netherlands-based employer, often tied to a specific permit type and sponsor responsibilities.",
          "Highly skilled migrant — a sponsored route for qualifying employment and salary thresholds; typically arranged with a recognized sponsor.",
          "Moving to study — enrollment at a Dutch institution and a residence permit for study, with rules around hours and insurance.",
          "Joining a partner or family — for eligible relationships with a Dutch citizen, EU/EEA resident in the Netherlands, or other qualifying situations; evidence requirements vary.",
          "Entrepreneurship / startup — routes such as startup or self-employment have distinct criteria, business plans, and sometimes advisor or facilitator involvement.",
          "Working Holiday / Working Holiday Scheme — a cultural exchange route for eligible Canadians; different from long-term skilled employment and with its own conditions on the official pages.",
        ],
        notes: [
          "Canadians are eligible for the Dutch Working Holiday route; check the official WHP and IND pages for current eligibility and conditions.",
          "Some long-stay routes involve both an MVV (entry visa) and a residence permit; others may follow a different procedure depending on nationality and route—verify on official sources.",
          "Use the visa checker and, when needed, qualified advisors—see the service links below—if your case is time-sensitive or complex.",
        ],
      },
      callout: {
        type: "info",
        title: "Planning note",
        text: "Immigration rules change. Treat this page as a structured starting point and confirm every requirement on official Dutch and Canadian government pages before you rely on it for decisions.",
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
      heading: "MVV and Residence Permit Basics for Canadians",
      body: [
        "If you intend to stay in the Netherlands longer than 90 days, you generally need to look at Dutch residence-permit rules for your situation. The MVV (provisional residence permit) is an entry visa used in many long-stay procedures so you can travel to the Netherlands to collect your residence permit—whether you need an MVV, and how you apply, depends on your nationality and permit route.",
        "Netherlands Worldwide publishes a Canada-specific page for applying for the MVV visa sticker in Canada, including how applications are handled for areas including Ottawa, Toronto, and Vancouver. Use it alongside IND guidance on applying for an MVV and residence permit from abroad.",
        "This site does not determine your eligibility. If you are unsure whether your route requires an MVV, a residence permit only, or both, start from the official checklist and route pages, then consider professional advice if needed.",
      ],
      callout: {
        type: "tip",
        title: "Official entry points",
        text: "IND explains residency and MVV concepts; Netherlands Worldwide covers practical application steps including country-specific submission details.",
        href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-canada",
        linkLabel: "MVV in Canada (Netherlands Worldwide)",
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
          label: "MVV long stay — apply in Canada",
          href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-canada",
        },
      ],
    },
    {
      id: "documents",
      heading: "Documents Canadians Often Need Before Moving",
      body: [
        "Start with a valid passport and gather civil and supporting records that match your permit route—such as birth or marriage certificates, employment or admission letters, and proof of address where relevant. Educational credentials and professional references are common for work and study routes.",
        "Global Affairs Canada explains that Canadian documents may need authentication before they can be used abroad. Since 11 January 2024, Canadian documents are authenticated with an apostille under the Hague Apostille Convention. The Embassy of Canada in The Hague can provide apostille services for certain Canadian documents when you are already in the Netherlands—check their current scope and instructions.",
        "Dutch authorities may ask for legalised or translated foreign documents depending on the procedure. Build in time for provincial issuing bodies, authentication, sworn translation, and any appointment scheduling.",
      ],
      bullets: [
        "Passport validity beyond your planned first months in the Netherlands",
        "Civil-status documents when relevant to family or partner routes",
        "Apostille / authentication planning for Canadian-issued records",
        "Sworn translations when a Dutch authority requests Dutch (or other) language versions",
        "Permit-specific forms and employer or institution documentation",
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
      heading: "Working Holiday Route for Canadians",
      body: [
        "The Netherlands participates in a Working Holiday / Working Holiday Scheme arrangement with Canada. It is designed as a cultural exchange route—not the same as a standard long-term skilled work permit—and age limits, duration, and conditions apply as described on Netherlands Worldwide and the IND.",
        "If your goal is a longer career move with a Dutch employer, you will usually compare this with sponsored work permits rather than assuming the working holiday fits the same purpose.",
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
      heading: "What to Budget For When Moving from Canada",
      body: [
        "Total spend varies sharply by city, family size, housing strategy, and whether you ship furniture. Use the categories below as a planning checklist rather than a promise of exact totals.",
        costsDisclaimer ?? "",
      ].filter(Boolean),
      table: {
        headers: ["Category", "How costs usually behave", "Planning notes"],
        rows: [
          [
            "Visa / permit fees",
            "Route-dependent",
            "Use official fee pages for your permit type; avoid relying on informal estimates.",
          ],
          [
            "Authentication / apostille",
            "Per document",
            "Global Affairs Canada describes authentication; factor courier or notary time if applicable.",
          ],
          ["Translations", "Per page or per document", "Sworn translators; urgency affects price and lead time."],
          ["Flights and arrival logistics", "Seasonal", "Long-haul from Canada; compare flexible dates if possible."],
          [
            "Initial housing",
            "City-dependent",
            "Temporary stay vs long-term rental affects deposits and agency fees.",
          ],
          [
            "First weeks after arrival",
            "Variable",
            "Municipal fees, insurance start dates, and household setup.",
          ],
          [
            "Health insurance and banking",
            "Ongoing",
            "Dutch basic health insurance is mandatory for most residents; banking may need BSN first.",
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
        "Most people stack a similar set of early tasks: register with the municipality and receive a BSN, complete any residence-permit steps if applicable, arrange a bank account, take out Dutch basic health insurance where required, and set up DigiD when eligible. Housing, transport, and day-to-day services then become much easier to manage.",
        "Our after-arrival guide walks through the wider sequence; the links below jump to the topics Canadians most often open first.",
      ],
      bullets: [
        "Municipal registration and BSN",
        "Residence permit collection or follow-up if required",
        "Bank account that fits your situation (often after BSN/address)",
        "Dutch basic health insurance",
        "DigiD, phone, and transport passes",
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
      heading: "Useful Services for Canadians Moving to the Netherlands",
      body: [
        "These hub pages list curated categories of providers—banks, housing platforms, relocation firms, visa support, and more. Provider examples in the block below come from the same datasets we use elsewhere on the site; listings are for research, not an endorsement of a specific company.",
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
      id: "cities-canada",
      heading: "Popular Dutch Cities Canadians Often Consider",
      body: [
        "City choice usually comes down to job location, industry clusters, housing pressure, and lifestyle. Below are practical starting points—each links to a city guide on this site.",
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
        { label: "Groningen — strong student and northern hub", href: "/netherlands/groningen/" },
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
      heading: "Shipping and long-distance logistics",
      body: [
        "Transatlantic moves often use sea freight for household goods, with total transit and handling measured in weeks. Many Canadians book short-term furnished housing while paperwork and shipments catch up.",
      ],
      bullets: [
        "Decide early between air baggage, shared container, and full container options.",
        "Align shipment dates with your lease start and temporary accommodation.",
        "Keep copies of inventory lists and customs-related paperwork accessible.",
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
        "Use the links below directly from the Dutch and Canadian governments. They are grouped for quick scanning.",
        "Netherlands — immigration and relocation",
        "Canada-specific Dutch entry / MVV / working holiday",
        "Canadian documents — authentication / apostille",
        "Canadian consular support in the Netherlands",
      ],
      links: [
        ...OFFICIAL_NL_IMMIGRATION,
        ...OFFICIAL_CA_ENTRY,
        ...OFFICIAL_CA_DOCS,
        ...OFFICIAL_CA_CONSULAR,
      ],
    },
  ];
}

export function augmentCanadaGuideData(model: CountryPageModel, base: GuideData): GuideData {
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
      "Discover the main visa routes, documents, practical steps, and settlement considerations for Canadians moving to the Netherlands.",
    description: model.seo.description,
    quickAnswersTitle: "Canada to Netherlands Move at a Glance",
    quickAnswers: [
      {
        label: "Main move routes",
        value: "Work, study, partner or family, entrepreneurship, working holiday",
      },
      {
        label: "Key admin theme",
        value: "Residence-permit planning plus document preparation on the Canadian side",
      },
      {
        label: "Common document issues",
        value: "Apostille/authentication, sworn translations, aligning timing with permit steps",
      },
      {
        label: "Good fit for",
        value: "Professionals, students, families, partners, founders, younger Canadians on WHP",
      },
      {
        label: "Main early tasks",
        value: "Confirm your route, gather documents, plan registration and first-month setup",
      },
      {
        label: "Trade-off to know",
        value: "Cross-border document steps can take longer than expected—start early",
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
      { id: "cities-canada", label: "Cities" },
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
      title: "Plan your move from Canada",
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
    sections: canadaSections(fromQuery, costEstimatorHref, model.costs.disclaimer),
    internalLinks: {
      ...base.internalLinks,
      related: CANADA_RELATED_INTERNAL,
    },
    relatedGuidesSectionTitle: "Related Guides Before Moving from Canada",
    servicesSectionTitle: "Useful Services for Canadians Moving to the Netherlands",
    servicesIntro:
      "Provider cards below are drawn from the same affiliate dataset used on other Netherlands pages. Compare options yourself; inclusion here is not a recommendation.",
    scenariosSectionTitle: "Common Canada-to-Netherlands Relocation Scenarios",
    scenariosSectionIntro:
      "Each scenario highlights different priorities. Use the checklist tool with ?from=canada to keep your origin context while you work through tasks.",
    exampleScenarios: [
      {
        title: "Canadian professional relocating for a Dutch job offer",
        summary:
          "Focus on sponsor timelines, MVV/residence steps if applicable, housing near the work location, and BSN-first banking and insurance sequencing. Compare highly skilled migrant sponsors and relocation support if your employer does not run the full process.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Canadian student starting a degree in the Netherlands",
        summary:
          "Confirm admission and study-permit conditions, housing near campus, proof-of-funds expectations, and insurance rules for students. Plan document translations early.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Canadian joining a partner already in the Netherlands",
        summary:
          "Relationship and civil documents are central; timelines depend on the partner's status. Legalisation and translation needs are common—see our document guides.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Canadian using the Working Holiday route",
        summary:
          "Treat this as a structured temporary stay: check WHP conditions, insurance, housing flexibility, and what happens if you later switch to a sponsored permit.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Canadian entrepreneur exploring startup or self-employment",
        summary:
          "Map business criteria against startup and self-employment routes, advisor ecosystems, and municipality registration. Expect more bespoke evidence than a standard employee route.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Canadian family moving with children",
        summary:
          "Layer school research, larger-housing search, and document bundles for every family member. Start authentication on Canadian civil records with extra buffer time.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Canadian already in Europe using Canadian documents for Dutch procedures",
        summary:
          "You may still need Canadian apostilles and translations even if you are not applying from Canada. Cross-check which embassy or service handles your documents.",
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
        description: "When timing is tight or your case is unusual, specialist help can reduce rework.",
        ctaLabel: "View visa consultants",
        ctaHref: "/netherlands/services/visa-consultants/",
      },
      {
        title: "Immigration lawyers",
        description: "For complex refusals, appeals, or business structures, legal counsel may be appropriate.",
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
