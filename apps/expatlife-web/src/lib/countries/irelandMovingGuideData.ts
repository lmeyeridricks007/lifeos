/**
 * Extended editorial + SEO layout for the Ireland → Netherlands origin-country guide (EU citizens).
 * Focus: free movement, registration, BSN, Irish apostille rules, Dutch health insurance timing, practical setup—not MVV framing.
 */

import { filterLiveInternalLinks } from "@/src/lib/routes/routeStatus";
import type { GuideData, GuideSection } from "@/src/lib/guides/types";
import type { CountryPageModel } from "./buildCountryPageModel";

const PILLAR_PATH = "/netherlands/moving-to-the-netherlands/";
const COUNTRY_INDEX_PATH = "/netherlands/moving-to-netherlands-from/";
const COST_ESTIMATOR_PATH = "/netherlands/moving/tools/relocation-cost-estimator/";
const DOCUMENTS_GUIDE_PATH = "/netherlands/documents-needed-to-move-netherlands/";
const COST_GUIDE_PATH = "/netherlands/moving-to-netherlands-cost/";

const OFFICIAL_EU_NL: Array<{ label: string; href: string }> = [
  {
    label: "Government.nl — What to arrange when moving to the Netherlands",
    href: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/what-do-i-need-to-arrange-if-im-moving-to-the-netherlands",
  },
  {
    label: "Government.nl — As an EU citizen, how can I stay in the Netherlands for longer than three months?",
    href: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/as-an-eu-citizen-how-can-i-stay-in-the-netherlands-for-longer-than-three-months",
  },
  {
    label: "Netherlands Worldwide — checklist relocating to the Netherlands",
    href: "https://www.netherlandsworldwide.nl/checklist-relocating-netherlands-immigration",
  },
  { label: "IND — Form 8005 (PDF)", href: "https://ind.nl/en/forms/8005.pdf" },
];

const OFFICIAL_REGISTRATION_HEALTH: Array<{ label: string; href: string }> = [
  {
    label: "Government.nl — When to register with the Personal Records Database (BRP) as a resident",
    href: "https://www.government.nl/topics/personal-data/question-and-answer/when-should-i-register-with-the-personal-records-database-as-a-resident",
  },
  {
    label: "Government.nl — When do I need to take out health insurance if I come to live in the Netherlands?",
    href: "https://www.government.nl/topics/health-insurance/question-and-answer/when-do-i-need-to-take-out-health-insurance-if-i-come-to-live-in-the-netherlands",
  },
  {
    label: "Government.nl — Registration for a short-term stay in the Netherlands (PDF brochure)",
    href: "https://www.government.nl/binaries/government/documenten/leaflets/2018/07/01/registration-for-a-short-term-stay-in-the-netherlands/WEB_121507_brochure_inschrijven_ENGELS.pdf",
  },
];

const OFFICIAL_IE_DOCS: Array<{ label: string; href: string }> = [
  {
    label: "Netherlands Worldwide — Legalisation: documents from Ireland",
    href: "https://www.netherlandsworldwide.nl/legalisation/foreign-documents/ireland",
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
    label: "Netherlands Worldwide — Foreign qualifications and working in the Netherlands",
    href: "https://www.netherlandsworldwide.nl/foreign-qualifications-netherlands/work",
  },
  {
    label: "Netherlands Worldwide — Making an appointment in Ireland (consular support)",
    href: "https://www.netherlandsworldwide.nl/making-appointment/ireland",
  },
];

const IRELAND_RELATED_INTERNAL = filterLiveInternalLinks([
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

function irelandSections(
  fromQuery: string,
  costEstimatorHref: string,
  costsDisclaimer?: string
): GuideSection[] {
  return [
    {
      id: "intro-overview",
      heading: "What People Moving from Ireland Need to Know Before Moving to the Netherlands",
      body: [
        "Moving from Ireland to the Netherlands is usually much simpler on immigration than relocating from outside the EU: as an Irish citizen you exercise EU freedom of movement, so an ordinary move is not built around visas, MVV entry visas, or standard non-EU residence permits.",
        "Government.nl explains that your passport or identity document is proof that you are in the Netherlands legally for the standard EU route, and you are not required to report to the IND for that ordinary path.",
        "The real work is practical: competitive housing, municipal registration within official timelines, your BSN, Dutch basic health insurance when you come to live or work in the Netherlands, banking, DigiD, and settling day-to-day life.",
        "Some Irish documents can be used immediately in the Netherlands; others need an apostille from the Irish Department of Foreign Affairs. Netherlands Worldwide’s Ireland page is the anchor—requirements depend on document type and who requests the paper.",
        "This guide is for planning only; it is not legal advice. Confirm each step with Government.nl, your municipality, and the authority that requests each document.",
      ],
      links: [
        { label: "EU vs non-EU moving to the Netherlands", href: "/netherlands/eu-vs-non-eu-moving-to-netherlands/" },
        { label: "Moving to the Netherlands (main hub)", href: `${PILLAR_PATH}${fromQuery}` },
      ],
    },
    {
      id: "ireland-visa-basics",
      heading: "Visa and Residence Permit Basics for Irish Citizens",
      body: [
        "Irish nationals are EU citizens. Under EU free movement, you can live in the Netherlands without a visa or standard residence permit for an ordinary move, provided you meet the conditions that apply to your situation (for example work, study, or sufficient resources). You can stay up to three months with a valid passport or identity document before longer-stay registration themes apply.",
        "That is intentionally different from our non-EU country guides, where MVV and residence permits are often the headline. For a typical Irish move, the emphasis shifts to proof of address, gemeente registration, BSN, insurance, and local services—not a “visa application” path.",
        "Special cases—such as household members who are not EU citizens, or unusual legal questions—may need tailored checks. Immigration lawyers and visa consultants can be relevant there; for many Irish movers they are optional follow-ups, not the default first step.",
      ],
      callout: {
        type: "info",
        title: "Contrast with non-EU routes",
        text: "MVV and long-stay visa checklists on this site mainly serve third-country nationals. EU movers should anchor on registration, BSN, and health insurance timing first, then housing and banking.",
      },
      links: [
        {
          label: "Government.nl — EU citizens staying longer than three months",
          href: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/as-an-eu-citizen-how-can-i-stay-in-the-netherlands-for-longer-than-three-months",
        },
        { label: "Immigration lawyers (optional — special cases)", href: "/netherlands/services/immigration-lawyers/" },
        { label: "Visa consultants (optional — atypical situations)", href: "/netherlands/services/visa-consultants/" },
      ],
    },
    {
      id: "registration-bsn",
      heading: "Registering in the Netherlands After Moving from Ireland",
      body: [
        "If you will stay in the Netherlands for more than four months, you normally register in the municipality where you live. Government.nl states you must register within five days of arriving in the Netherlands; your gemeente confirms appointment booking, address evidence, and any extra documents. When you register, the municipality arranges your BSN (citizen service number).",
        "Government.nl also notes that you must register with a Dutch municipality even if you have not yet taken out Dutch health insurance—do not delay registration while sorting insurance.",
        "If you will stay for less than four months, you are not required to register with the local municipality as a resident; however, you may still want or need a BSN through non-resident (RNI) registration depending on your situation—for example short assignments, temporary work, or when an employer or bank requires a BSN. The Government.nl brochure on short-term registration helps clarify options; verify your case with the municipality.",
        "If your main home stays in Ireland while you spend substantial time in the Netherlands, registration and insurance rules may differ from a full relocation—verify cross-border guidance rather than copying a standard “move-in” checklist blindly.",
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
      heading: "Documents People Moving from Ireland Often Need Before Moving",
      body: [
        "Bring a valid Irish passport or national ID, housing documents for registration, and any civil-status records your municipality, employer, or school requests.",
        "Netherlands Worldwide’s Ireland-specific page explains that some Irish documents can be used in the Netherlands immediately, while others must be legalised with an apostille issued by the Irish Department of Foreign Affairs. Qualifications for work may involve extra checks—use Netherlands Worldwide’s foreign qualifications pages when that applies to you.",
        "Do not treat apostille as automatic for every paper: employment letters, civil extracts, and education records may be handled differently depending on who asks and why.",
      ],
      bullets: [
        "Passport or national ID card",
        "Rental contract or residence proof for gemeente registration",
        "Birth, marriage, or divorce documents when needed for admin or family procedures",
        "Education or professional certificates when required (confirm apostille per Ireland page)",
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
      heading: "Common Ireland-to-Netherlands Move Scenarios",
      body: [
        "EU free movement removes employer “sponsorship” in the non-EU sense, but you still coordinate contracts, payroll, housing, insurance, and local services like any relocation.",
      ],
      visaRoutes: {
        commonRoutes: [
          "Moving for work — align start date, Dutch basic health insurance from arrival (see Government.nl), payroll banking, and commute-friendly housing.",
          "Moving as a student — admission, housing, student insurance, and document legalisation or translations when your institution requires them.",
          "Partner or family — plan gemeente registration for each person and civil-status evidence; non-EU family members may need route-specific checks (special case).",
          "Short assignment or temporary stay — you may not register as a resident under four months, but RNI or a BSN need can still arise; confirm with your gemeente and employer.",
          "Remote worker or freelancer — registration and Dutch basic insurance apply if you are resident in the Netherlands; cross-border tax questions may need professional advice.",
        ],
        notes: [
          "Housing in Randstad cities is often the bottleneck, not immigration status for the standard Irish citizen.",
          "Use Government.nl and Netherlands Worldwide to confirm your facts.",
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
      id: "health-insurance-admin",
      heading: "Health Insurance and Everyday Setup",
      body: [
        "Government.nl explains that if you come to live or work in the Netherlands, you are required to take out Dutch health insurance with coverage from the day you arrive. You have four months to arrange the policy, but the insurance applies from your arrival date where applicable—read the official health insurance Q&A for nuances and exceptions.",
        "Pair insurance planning with municipality registration: you can register before insurance is in place, and your BSN unlocks much of the day-to-day stack (banking, DigiD, payroll).",
        "Typical early admin: bank account, mobile plan, GP registration after insurance, public transport apps, and utilities if you are directly liable—sequence these alongside your employer’s or school’s onboarding checklist.",
      ],
      bullets: [
        "Arrange Dutch basic health insurance within the official window; confirm effective date rules on Government.nl",
        "Complete municipal registration for BSN even if insurance is not finalised",
        "Add DigiD, banking, and GP registration once your core IDs are in place",
      ],
      internalCta: {
        label: "Read the health insurance guide",
        href: "/netherlands/health-insurance-netherlands/",
      },
      links: [
        { label: "Open a bank account in the Netherlands", href: "/netherlands/open-bank-account-netherlands/" },
        { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
        {
          label: "Government.nl — health insurance when coming to live",
          href: "https://www.government.nl/topics/health-insurance/question-and-answer/when-do-i-need-to-take-out-health-insurance-if-i-come-to-live-in-the-netherlands",
        },
      ],
    },
    {
      id: "costs",
      heading: "What to Budget For When Moving from Ireland",
      body: [
        "Short travel distances can keep transport costs moderate, but Dutch deposits, agency fees, and first-month spending still bite. Use the table as categories to research—not promises of exact amounts.",
        costsDisclaimer ?? "",
      ].filter(Boolean),
      table: {
        headers: ["Category", "How costs usually behave", "Planning notes"],
        rows: [
          ["Transport and removal", "Varies", "Flights, ferry, or movers; compare peak dates."],
          ["Initial housing", "City-dependent", "Deposits, agency fees, temporary stay while you search."],
          ["Registration and first weeks", "Mostly time", "Insurance premiums from arrival date rules; small gemeente fees if any."],
          ["Health insurance", "Monthly premium", "Dutch basic insurance mandatory for most residents when living/working in NL."],
          ["Banking", "Varies", "Often smoother after BSN."],
          ["Documents", "Per item if needed", "Apostille and translation only when Netherlands Worldwide or the recipient requires them."],
        ],
      },
      internalCta: { label: "Estimate relocation cost (tool) →", href: costEstimatorHref },
      links: [{ label: "Cost of moving to the Netherlands", href: COST_GUIDE_PATH }],
    },
    {
      id: "arrival-weeks",
      heading: "What to Arrange After You Arrive",
      body: [
        "Typical sequence: municipal registration and BSN, Dutch basic health insurance (aligned with Government.nl timing rules), bank account, DigiD, then phone, utilities, and transport.",
      ],
      bullets: [
        "Municipal registration and BSN",
        "Dutch basic health insurance",
        "Bank account",
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
      heading: "Useful Services for People Moving from Ireland to the Netherlands",
      body: [
        "Prioritise housing platforms, relocation support, banks, and insurers. Lawyer and visa-consultant hubs are linked last for atypical cases—not as a default requirement.",
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
      id: "cities-ireland",
      heading: "Popular Dutch Cities People Moving from Ireland Often Consider",
      body: [
        "Many Irish movers compare Amsterdam and Utrecht with The Hague, Rotterdam, and Eindhoven for jobs and housing pressure. Haarlem and Amstelveen are common Amsterdam-area alternatives. Leiden, Delft, and Groningen suit academic paths. Maastricht, Arnhem, and Nijmegen appeal if you want less Randstad intensity.",
      ],
      links: CITY_LINKS,
    },
    {
      id: "cross-border-logistics",
      heading: "Getting from Ireland to the Netherlands",
      body: [
        "Direct flights to Amsterdam or Eindhoven are common; ferry routes via the UK or France plus driving remain an option for those moving goods by road. For household volumes, compare removals, partial loads, and air freight; plan elevator and parking at your Dutch address.",
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
        "Government.nl — EU stay rules, moving checklist themes, and registration",
        "Government.nl — BRP registration, health insurance timing, and short-stay brochure",
        "Netherlands Worldwide — Ireland document legalisation, apostille context, and foreign qualifications for work",
      ],
      links: [...OFFICIAL_EU_NL, ...OFFICIAL_REGISTRATION_HEALTH, ...OFFICIAL_IE_DOCS],
    },
  ];
}

export function augmentIrelandGuideData(model: CountryPageModel, base: GuideData): GuideData {
  const fromQuery = `?from=${encodeURIComponent(model.slug)}`;
  const costEstimatorHref = `${COST_ESTIMATOR_PATH}${fromQuery}`;
  const checklistHref = `/netherlands/moving/tools/moving-checklist/${fromQuery}`;
  const pillarWithFrom = `${PILLAR_PATH}${fromQuery}`;

  return {
    ...base,
    publishDate: "2026-04-30",
    lastUpdated: "Last updated: 30 April 2026.",
    metaTitle: model.seo.title,
    title: "Moving to the Netherlands from Ireland",
    breadcrumbLabel: "From Ireland",
    subtitle:
      "Discover the registration rules, document requirements, housing considerations, and practical settlement steps for people moving from Ireland to the Netherlands.",
    description: model.seo.description,
    quickAnswersTitle: "Ireland to Netherlands Move at a Glance",
    quickAnswers: [
      {
        label: "Main legal position",
        value: "EU citizen move—no standard visa or residence permit needed for ordinary free movement",
      },
      { label: "Key admin theme", value: "Municipal registration, BSN, insurance timing, banking, housing" },
      {
        label: "Common document note",
        value: "Some Irish documents immediate; others need Irish apostille—depends on type and recipient",
      },
      {
        label: "Good fit for",
        value: "Professionals, students, families, cross-border movers, remote workers",
      },
      {
        label: "Main early tasks",
        value: "Secure housing, register within official timelines, obtain BSN, arrange bank and Dutch basic health insurance",
      },
      {
        label: "Trade-off to know",
        value: "Easier residence rules than non-EU routes do not mean an easy housing market or instant appointments",
      },
    ],
    tocItems: [
      { id: "intro-overview", label: "Overview" },
      { id: "ireland-visa-basics", label: "Visa & permits" },
      { id: "registration-bsn", label: "Registration & BSN" },
      { id: "documents", label: "Documents" },
      { id: "visa-route", label: "Scenarios" },
      { id: "health-insurance-admin", label: "Health insurance & admin" },
      { id: "costs", label: "Budget" },
      { id: "arrival-weeks", label: "After arrival" },
      { id: "service-hubs", label: "Services" },
      { id: "cities-ireland", label: "Cities" },
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
      title: "Plan your move from Ireland",
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
    sections: irelandSections(fromQuery, costEstimatorHref, model.costs.disclaimer),
    internalLinks: {
      ...base.internalLinks,
      related: IRELAND_RELATED_INTERNAL,
    },
    relatedGuidesSectionTitle: "Related Guides Before Moving from Ireland",
    servicesSectionTitle: "Useful Services for People Moving from Ireland to the Netherlands",
    servicesIntro:
      "Provider cards reuse the site’s affiliate dataset—housing, relocation, banking, and insurance first for typical EU movers. Compare providers yourself; inclusion is not a recommendation.",
    scenariosSectionTitle: "Common Ireland-to-Netherlands Relocation Scenarios",
    scenariosSectionIntro:
      "Use the checklist with ?from=ireland to keep origin context while you sequence housing, insurance, and registration.",
    exampleScenarios: [
      {
        title: "Irish professional moving for work",
        summary:
          "Prioritise housing, gemeente registration within five days of arrival (per Government.nl), BSN, Dutch basic health insurance aligned with arrival-date rules, and payroll banking—without visa or MVV steps for the standard EU route.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Irish student moving for study",
        summary:
          "Plan apostille or other legalisation only when Netherlands Worldwide or the institution requires it; check foreign qualifications guidance if work recognition matters.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Partner or family relocating",
        summary:
          "Register each person with the gemeente; non-EU family members may need different checks—treat as a special case and seek tailored advice if needed.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Short assignment needing BSN or RNI clarity",
        summary:
          "Under four months you may not register as a resident, but you might still need RNI or a BSN for payroll—confirm with your gemeente and employer using official short-stay materials.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Family preparing Irish civil-status documents",
        summary:
          "Use Netherlands Worldwide’s Ireland page: some documents may be immediate; others need apostille. Confirm each extract with the Dutch body that will receive it.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Irish remote worker moving for lifestyle",
        summary:
          "Registration and Dutch basic insurance apply if you are resident. Cross-border tax ties between Ireland and the Netherlands may need professional advice after reading official overviews.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Choosing Groningen or Nijmegen over Amsterdam",
        summary:
          "Compare rent pressure, commute, and sectors. Our city guides help you shortlist without assuming one-size-fits-all housing.",
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
