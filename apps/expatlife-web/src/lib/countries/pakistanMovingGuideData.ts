/**
 * Extended editorial + SEO layout for the Pakistan → Netherlands origin-country guide.
 * Non-EU framing: Schengen short stay via VFS Global vs long-stay MVV/residence permit;
 * Pakistan-specific steps are deferred to Netherlands Worldwide (appointments, documents, passport handling).
 * Pakistani documents: legalisation by the Ministry of Foreign Affairs per Netherlands Worldwide.
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
  { label: "Government.nl — Immigration to the Netherlands", href: "https://www.government.nl/topics/immigration-to-the-netherlands" },
  {
    label: "Government.nl — Living on a residence permit",
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

const OFFICIAL_PK_VISA: Array<{ label: string; href: string }> = [
  {
    label: "Netherlands Worldwide — MVV long stay (apply in Pakistan)",
    href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-pakistan",
  },
  {
    label: "Netherlands Worldwide — Making an appointment (Pakistan)",
    href: "https://www.netherlandsworldwide.nl/making-appointment/pakistan",
  },
  {
    label: "Netherlands Worldwide — Schengen visa (apply in Pakistan)",
    href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/schengen-visa/apply-pakistan",
  },
  {
    label: "Netherlands Worldwide — Entry visa (apply in Pakistan)",
    href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/entry-visa/apply-pakistan",
  },
  {
    label: "Netherlands Worldwide — Waiting time after visa application",
    href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/waiting-time-after-visa-application",
  },
  {
    label: "Netherlands Worldwide — Visa application form",
    href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/visa-application-form",
  },
  {
    label: "Netherlands Worldwide — Civic integration exam abroad (Pakistan)",
    href: "https://www.netherlandsworldwide.nl/civic-integration-exam-abroad/pakistan",
  },
  {
    label: "Netherlands Worldwide — Consular fees (Pakistan)",
    href: "https://www.netherlandsworldwide.nl/consular-fees/pakistan",
  },
];

const OFFICIAL_PK_LEGAL: Array<{ label: string; href: string }> = [
  {
    label: "Netherlands Worldwide — Legalisation: documents from Pakistan",
    href: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents/pakistan",
  },
  {
    label: "Netherlands Worldwide — Legalisation of foreign documents (overview)",
    href: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents",
  },
  {
    label: "Netherlands Worldwide — Embassies and consulates (legalisation context)",
    href: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents/embassies-consulates",
  },
];

const OFFICIAL_IND_EXTRA: Array<{ label: string; href: string }> = [
  { label: "IND — MVV exemptions", href: "https://ind.nl/en/mvv-exemptions" },
  {
    label: "IND — Residence permit for partner",
    href: "https://ind.nl/en/residence-permits/family-and-partner/residence-permit-for-partner",
  },
  {
    label: "IND — Residence permit for orientation year",
    href: "https://ind.nl/en/residence-permits/work/residence-permit-for-orientation-year",
  },
];

const PAKISTAN_RELATED_INTERNAL = filterLiveInternalLinks([
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
  { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
  { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/" },
  { label: "Relocation services", href: "/netherlands/services/relocation-services/" },
  { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
  { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
  { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
  { label: "Banks for expats", href: "/netherlands/services/banks/" },
  { label: "Health insurance (services)", href: "/netherlands/services/health-insurance/" },
  { label: "Startup visa advisors", href: "/netherlands/services/startup-visa-advisors/" },
  { label: "Highly skilled migrant sponsors", href: "/netherlands/services/highly-skilled-migrant-sponsors/" },
  { label: "Dutch cities overview", href: "/netherlands/cities/" },
  { label: "Moving from your country (all guides)", href: COUNTRY_INDEX_PATH },
  { label: "How this site works", href: "/how-this-site-works/" },
  { label: "Methodology", href: "/methodology/" },
  { label: "Sources", href: "/sources/" },
]);

function pakistanSections(fromQuery: string, costEstimatorHref: string, costsDisclaimer?: string): GuideSection[] {
  return [
    {
      id: "intro-overview",
      heading: "What People Moving from Pakistan Need to Know Before Moving to the Netherlands",
      body: [
        "Moving from Pakistan to the Netherlands usually means planning around immigration permission, civil documents, housing, banking, Dutch basic health insurance, and municipal registration—not only booking a flight. Pakistani nationals are not EU, EEA, or Swiss citizens, so stays longer than short visits are normally built around a Dutch residence permit for a recognised purpose.",
        "Short visits and long-term relocation follow different procedures. Schengen short-stay applications from Pakistan are submitted through VFS Global, as described on Netherlands Worldwide. That channel is not a substitute for a residence permit if you intend to live in the Netherlands.",
        "Not everyone follows the same path: a sponsored professional, a degree student, someone joining a partner, a founder exploring startup routes, and a corporate transferee all face different evidence requirements and timelines. Whether you need an MVV (long-stay entry visa) depends on your route and situation—confirm on IND.nl and Netherlands Worldwide rather than assuming one answer for every case.",
        "This guide explains the main pathways, how the MVV often fits into relocation when it applies, what Pakistani document legalisation usually involves (Ministry of Foreign Affairs legalisation, translations when required), and which practical Netherlands guides to open next. It supports planning—it is not legal advice and does not guarantee any outcome.",
      ],
      links: [
        { label: "EU vs non-EU moving to the Netherlands", href: "/netherlands/eu-vs-non-eu-moving-to-netherlands/" },
        { label: "Moving to the Netherlands (main hub)", href: `${PILLAR_PATH}${fromQuery}` },
      ],
    },
    {
      id: "visa-route",
      heading: "Main Ways to Move from Pakistan to the Netherlands",
      body: [
        "The right route depends on why you are moving, whether you have a sponsor (employer, university, partner, or other qualifying basis), and the conditions that apply to that specific permit. Always confirm details with the IND and Netherlands Worldwide for your situation.",
      ],
      visaRoutes: {
        commonRoutes: [
          "Moving for work — salaried employment with a Dutch or Netherlands-based employer; often highly skilled migrant, EU Blue Card, or another sponsored permit where criteria are met.",
          "Highly skilled migrant — the employer must be a recognised IND sponsor; salary thresholds and role requirements apply.",
          "Moving to study — admission to a Dutch institution and a residence permit for study, with rules on hours, insurance, and proof of funds.",
          "Joining a partner or family — relationship and civil documentation are central; eligibility depends on your partner’s status and the IND checklist.",
          "Entrepreneurship / startup — startup or self-employment routes have distinct criteria; advisors and facilitators may be involved.",
          "Orientation year — for eligible graduates; see the IND orientation-year page for current criteria (not a generic fallback for everyone).",
          "Sponsored corporate transfer / ICT — when the official intra-corporate route matches your assignment.",
        ],
        notes: [
          "The IND states that when you need an MVV, you normally apply for the MVV and residence permit together from abroad—your procedure page and decision letter define what applies to you.",
          "MVV exemptions exist for some situations; do not assume you are exempt without checking IND.nl.",
          "If your case is time-sensitive or unusual, visa consultants or immigration lawyers may help reduce rework—see the service hubs below.",
        ],
      },
      callout: {
        type: "info",
        title: "Planning note",
        text: "Immigration rules change. Treat this page as a structured starting point and confirm every requirement on official Dutch government pages before you rely on it for decisions.",
      },
      links: [
        { label: "Highly skilled migrant visa", href: "/netherlands/visa/highly-skilled-migrant/" },
        { label: "EU Blue Card", href: "/netherlands/visa/eu-blue-card/" },
        { label: "Student visa", href: "/netherlands/visa/student-visa/" },
        { label: "Partner & family visa", href: "/netherlands/visa/partner-family-visa/" },
        { label: "Self-employed visa", href: "/netherlands/visa/self-employed-visa/" },
        { label: "Visa consultants (Netherlands)", href: "/netherlands/services/visa-consultants/" },
        { label: "Immigration lawyers (Netherlands)", href: "/netherlands/services/immigration-lawyers/" },
      ],
    },
    {
      id: "mvv-residence-basics",
      heading: "Visa, MVV and Residence Permit Basics for Moving from Pakistan",
      body: [
        "If you intend to stay in the Netherlands longer than 90 days, you normally need a Dutch residence permit for a recognised purpose. Whether you also need an MVV (provisional residence permit / Type D long-stay entry visa) depends on your nationality and route—the IND explains this and lists possible exemptions.",
        "When an MVV applies, the usual picture is: your sponsor (or you, on self-employment routes) works through the IND procedure; after a positive decision, you collect the MVV sticker so you can travel to the Netherlands and complete steps such as collecting your residence permit. The exact sequence is spelled out in your IND correspondence.",
        "For Pakistan, Netherlands Worldwide publishes dedicated pages for the MVV long-stay visa and for making appointments. Use those official pages for appointment confirmation, required documents, and how passport collection is organised—wording and procedures can change, so follow the live site rather than informal summaries.",
        "The IND explains that if you need an MVV, you apply for the MVV and residence permit at the same time from abroad in many procedures—your official checklist determines the exact steps.",
        "This site cannot tell you whether your specific route requires an MVV. Use the official checklist for your permit type, the IND MVV exemption page if relevant, and the Pakistan-specific Netherlands Worldwide pages.",
      ],
      callout: {
        type: "warning",
        title: "Do not confuse short stay with relocation",
        text: "Short-stay Schengen rules and long-stay MVV/residence-permit procedures are different. Use the correct official checklist for your actual plans.",
        href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/schengen-visa/apply-pakistan",
        linkLabel: "Schengen visa from Pakistan (Netherlands Worldwide)",
      },
      links: [
        { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
        { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/" },
        { label: "IND — MVV", href: "https://ind.nl/en/provisional-residence-permit-mvv" },
        {
          label: "IND — Apply for MVV and residence permit from abroad",
          href: "https://ind.nl/en/apply-for-mvv-and-residence-permit-from-abroad",
        },
        {
          label: "MVV long stay — apply in Pakistan",
          href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-pakistan",
        },
        { label: "IND — MVV exemptions", href: "https://ind.nl/en/mvv-exemptions" },
      ],
    },
    {
      id: "short-vs-long-stay",
      heading: "Short Visits vs Long-Term Relocation",
      body: [
        "Short visits to the Schengen area (including the Netherlands) use short-stay Schengen visa rules when a visa is required. From Pakistan, Netherlands Worldwide explains that applications go through VFS Global. The same official guidance also states that you can usually apply up to six months before you travel and must apply at least 45 days before travel—confirm the current text on the Pakistan Schengen page and related application guidance before you plan dates.",
        "Long-term relocation normally means a residence permit (and often an MVV) tied to work, study, family, or another recognised basis. Procedures, documents, and mission steps are explained on IND.nl and the Pakistan-specific Netherlands Worldwide pages for MVV, entry visa, and appointments.",
        "If your goal is to live and work or study in the Netherlands, build your plan around the long-stay checklist. If your goal is a short trip, use the short-stay checklist. Mixing the two causes costly mistakes.",
      ],
      links: [
        {
          label: "Schengen visa — apply in Pakistan",
          href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/schengen-visa/apply-pakistan",
        },
        {
          label: "MVV long stay — apply in Pakistan",
          href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-pakistan",
        },
      ],
    },
    {
      id: "documents",
      heading: "Documents People Moving from Pakistan Often Need Before Moving",
      body: [
        "Start with a valid passport and gather civil and supporting records that match your permit route—birth, marriage, or family-composition documents when required, employment or admission letters, and proof of address where relevant. Educational and professional documents are common for work and study routes.",
        "Netherlands Worldwide states that to use a document from Pakistan in the Netherlands it must first be legalised by the Pakistani Ministry of Foreign Affairs. Whether you also need certified translation depends on the document language, document type, and the authority that receives it; cross-check the Pakistan legalisation page on Netherlands Worldwide and our document translation guide for general patterns, then confirm against your IND or sponsor checklist.",
        "Build in buffer time: civil registry steps, MFA legalisation, possible translations, and VFS or appointment scheduling all compete with employer or university deadlines.",
      ],
      bullets: [
        "Passport validity and blank pages as stated on Netherlands Worldwide for your visa or MVV step",
        "Civil-status documents when your route requires them",
        "Ministry of Foreign Affairs legalisation on Pakistani-issued documents intended for Dutch authorities, when legalisation is required",
        "Certified or sworn translation when the receiving authority requires it",
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
        {
          label: "Legalisation — documents from Pakistan",
          href: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents/pakistan",
        },
      ],
    },
    {
      id: "civic-integration-abroad",
      heading: "Civic Integration Exam Abroad for Some Family Routes",
      body: [
        "Some family-based migration routes may require the civic integration exam abroad before arrival. Netherlands Worldwide hosts a Pakistan-specific page for this process.",
        "This step applies only when your official IND checklist and permit category require it—not to every person moving from Pakistan. If your route does not mention the exam, do not assume you must take it.",
      ],
      links: [
        {
          label: "Civic integration exam abroad — Pakistan",
          href: "https://www.netherlandsworldwide.nl/civic-integration-exam-abroad/pakistan",
        },
        { label: "Partner & family visa overview", href: "/netherlands/visa/partner-family-visa/" },
      ],
    },
    {
      id: "costs",
      heading: "What to Budget For When Moving from Pakistan",
      body: [
        "Total spend varies sharply by city, family size, housing strategy, and whether you ship household goods. Use the categories below as a planning checklist rather than a promise of exact totals.",
        "For visa- and consular-related charges, use Netherlands Worldwide’s consular fees page for Pakistan and any VFS service-fee information linked from the official application pages—amounts change, so avoid copying informal numbers into your plan.",
        costsDisclaimer ?? "",
      ].filter(Boolean),
      table: {
        headers: ["Category", "How costs usually behave", "Planning notes"],
        rows: [
          [
            "Visa / permit fees",
            "Route-dependent",
            "Use official IND and Netherlands Worldwide fee pages (including consular fees for Pakistan); avoid informal estimates.",
          ],
          [
            "Document legalisation",
            "Per document / per step",
            "Ministry of Foreign Affairs legalisation in Pakistan; factor courier and repeat visits if needed.",
          ],
          ["Translations", "Per page or per document", "Sworn translators; urgency affects price and lead time."],
          ["Flights and arrival logistics", "Seasonal", "Confirm ticket flexibility against MVV validity and decision timing."],
          [
            "Initial housing",
            "City-dependent",
            "Temporary furnished stay vs long-term rental affects deposits and agency fees.",
          ],
          [
            "First weeks after arrival",
            "Variable",
            "Municipal fees, insurance start dates, and household setup.",
          ],
          [
            "Health insurance and banking",
            "Ongoing",
            "Dutch basic health insurance is mandatory for most residents; banking often needs BSN/address.",
          ],
        ],
      },
      internalCta: { label: "Estimate relocation cost (tool) →", href: costEstimatorHref },
      links: [
        { label: "Cost of moving to the Netherlands", href: COST_GUIDE_PATH },
        {
          label: "Netherlands Worldwide — Consular fees (Pakistan)",
          href: "https://www.netherlandsworldwide.nl/consular-fees/pakistan",
        },
      ],
    },
    {
      id: "arrival-weeks",
      heading: "What to Arrange After You Arrive",
      body: [
        "Most people stack a similar set of early tasks: register with the municipality and receive a BSN, complete any residence-permit pickup or biometrics if applicable, arrange a bank account, take out Dutch basic health insurance where required, and set up DigiD when eligible. Housing, transport, and day-to-day services then become easier to manage.",
        "Our after-arrival guide expands the sequence; the links below are the topics Pakistani movers most often open first.",
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
      heading: "Useful Services for People Moving from Pakistan to the Netherlands",
      body: [
        "These hub pages list curated categories of providers—immigration support, banks, housing platforms, relocation firms, and more. Provider examples in the block below use the same datasets as elsewhere on the site; listings are for research, not an endorsement.",
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
      id: "cities-pakistan",
      heading: "Popular Dutch Cities People Moving from Pakistan Often Consider",
      body: [
        "City choice usually comes down to job location, industry clusters, housing pressure, and lifestyle. Below are practical starting points—each links to a city guide on this site.",
      ],
      links: filterLiveInternalLinks([
        { label: "Amsterdam — broad international hiring", href: "/netherlands/amsterdam/" },
        { label: "Utrecht — central, strong commuting links", href: "/netherlands/utrecht/" },
        { label: "The Hague — institutions and many international employers", href: "/netherlands/the-hague/" },
        { label: "Rotterdam — port, logistics, creative sectors", href: "/netherlands/rotterdam/" },
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
      heading: "Shipping and long-distance logistics",
      body: [
        "Moves from Pakistan often combine air freight for essentials with sea freight for larger households. Many people book short-term furnished housing in the Netherlands while legalisation work, permit decisions, and shipments align.",
      ],
      bullets: [
        "Decide early between air baggage, shared container, and full container options.",
        "Align shipment dates with MVV validity and your lease start.",
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
        "Use the links below directly from the Dutch government and Netherlands Worldwide. They are grouped for quick scanning.",
        "Netherlands — immigration and relocation",
        "Pakistan — Dutch visa, MVV, appointments, waiting times, forms, civic integration abroad, and consular fees",
        "Pakistan — document legalisation and translation context",
        "Short-stay vs long-stay and family-route references (IND)",
      ],
      links: [...OFFICIAL_NL_IMMIGRATION, ...OFFICIAL_PK_VISA, ...OFFICIAL_PK_LEGAL, ...OFFICIAL_IND_EXTRA],
    },
  ];
}

export function augmentPakistanGuideData(model: CountryPageModel, base: GuideData): GuideData {
  const fromQuery = `?from=${encodeURIComponent(model.slug)}`;
  const costEstimatorHref = `${COST_ESTIMATOR_PATH}${fromQuery}`;
  const checklistHref = `/netherlands/moving/tools/moving-checklist/${fromQuery}`;

  const pillarWithFrom = `${PILLAR_PATH}${fromQuery}`;

  return {
    ...base,
    publishDate: "2026-05-03",
    lastUpdated: "Last updated: 3 May 2026.",
    metaTitle: model.seo.title,
    subtitle:
      "Discover the main visa routes, MVV requirements, document legalisation rules, and practical settlement steps for moving from Pakistan to the Netherlands.",
    description: model.seo.description,
    quickAnswersTitle: "Pakistan to Netherlands Move at a Glance",
    quickAnswers: [
      {
        label: "Main move routes",
        value: "Work, study, partner or family, entrepreneurship, sponsored relocation",
      },
      {
        label: "Key admin theme",
        value: "Residence-permit planning plus legalised documents from Pakistan when required",
      },
      {
        label: "Common document issue",
        value: "Pakistani documents must be legalised by the Pakistani Ministry of Foreign Affairs for Dutch use when legalisation is required",
      },
      {
        label: "Good fit for",
        value: "Professionals, students, families, entrepreneurs, sponsored movers",
      },
      {
        label: "Main early tasks",
        value: "Determine permit route, prepare documents, plan MVV or visa steps using official Pakistan pages, line up registration and first-week setup",
      },
      {
        label: "Trade-off to know",
        value: "Document and permit timing can add complexity—early planning matters",
      },
    ],
    tocItems: [
      { id: "intro-overview", label: "Before you move" },
      { id: "visa-route", label: "Main pathways" },
      { id: "mvv-residence-basics", label: "MVV & permits" },
      { id: "short-vs-long-stay", label: "Short vs long stay" },
      { id: "documents", label: "Documents" },
      { id: "civic-integration-abroad", label: "Civic exam abroad" },
      { id: "costs", label: "Budget" },
      { id: "arrival-weeks", label: "After arrival" },
      { id: "service-hubs", label: "Service hubs" },
      { id: "cities-pakistan", label: "Cities" },
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
      title: "Plan your move from Pakistan",
      supportingText:
        "Compare visa routes, then browse vetted service categories. Use the tools when you are ready to turn planning into a checklist and timeline.",
      primaryCtaLabel: "Explore Visa & Move Options",
      primaryCtaHref: "/netherlands/visa/compare-visas/",
      secondaryCtaLabel: "Browse Netherlands Services",
      secondaryCtaHref: "/netherlands/services/",
      tertiaryCtaLabel: "Generate your moving checklist",
      tertiaryCtaHref: checklistHref,
      supportingLinks: [
        { label: "Visa checker", href: "/netherlands/visa-checker/" },
        { label: "Moving checklist tool", href: checklistHref },
        { label: "Relocation cost estimator", href: costEstimatorHref },
        { label: "All origin-country guides", href: COUNTRY_INDEX_PATH },
        { label: "Moving to the Netherlands (main hub)", href: pillarWithFrom },
      ],
    },
    sections: pakistanSections(fromQuery, costEstimatorHref, model.costs.disclaimer),
    internalLinks: {
      ...base.internalLinks,
      related: PAKISTAN_RELATED_INTERNAL,
    },
    relatedGuidesSectionTitle: "Related Guides Before Moving from Pakistan",
    servicesSectionTitle: "Useful Services for People Moving from Pakistan to the Netherlands",
    servicesIntro:
      "Provider cards below are drawn from the same affiliate dataset used on other Netherlands pages. Compare options yourself; inclusion here is not a recommendation.",
    scenariosSectionTitle: "Common Pakistan-to-Netherlands Relocation Scenarios",
    scenariosSectionIntro:
      "Each scenario highlights different priorities. Use the checklist tool with ?from=pakistan to keep your origin context while you work through tasks.",
    exampleScenarios: [
      {
        title: "Pakistani professional moving for work",
        summary:
          "Coordinate IND timing with your sponsor, MVV steps using Netherlands Worldwide’s Pakistan pages, MFA legalisation on civil documents, housing near work, and BSN-first banking and insurance. Compare highly skilled migrant sponsors and relocation support if your employer does not run the full process.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Pakistani student moving for university",
        summary:
          "Align admission, study-permit conditions, proof of funds, and housing; complete MFA legalisation on Pakistani civil records and confirm translations if the institution or IND checklist requires them.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Partner or family relocation from Pakistan",
        summary:
          "Relationship and civil documents are central; timelines depend on the sponsor’s status. Check whether the civic integration exam abroad applies on Netherlands Worldwide’s Pakistan page. Legalisation and translations are common—see our document guides.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Entrepreneur or startup founder exploring Dutch options",
        summary:
          "Map business criteria against startup and self-employment routes, advisor ecosystems, and municipality registration. Expect more bespoke evidence than a standard employee route.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Sponsored corporate transfer or international assignment",
        summary:
          "Align with employer immigration counsel, MVV timing when required, housing near the assignment location, and schooling if children relocate.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Family preparing legalised documents for Dutch use",
        summary:
          "Work from the Netherlands Worldwide Pakistan legalisation page: Ministry of Foreign Affairs legalisation, then confirm translation needs per document. Line up scans and originals before submission windows.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Long-stay mover comparing Dutch cities after permit approval",
        summary:
          "Use city guides to weigh commute, housing, and community; book flexible initial housing until you view properties in person where possible.",
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
