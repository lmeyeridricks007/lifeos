/**
 * Extended editorial + SEO layout for the UAE → Netherlands origin-country guide.
 * Framed for people relocating from the UAE (Emiratis and expats); nationality drives visa rules.
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
  { label: "IND — Provisional residence permit (MVV)", href: "https://ind.nl/en/provisional-residence-permit-mvv" },
  {
    label: "IND — Apply for MVV and residence permit from abroad",
    href: "https://ind.nl/en/apply-for-mvv-and-residence-permit-from-abroad",
  },
  { label: "IND — Residency in the Netherlands", href: "https://ind.nl/en/residency-in-the-netherlands" },
  { label: "Government.nl — Immigration to the Netherlands", href: "https://www.government.nl/topics/immigration-to-the-netherlands" },
  {
    label: "Government.nl — How do I apply for a residence permit?",
    href: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/how-do-i-apply-for-a-residence-permit-for-the-netherlands",
  },
];

const OFFICIAL_UAE_ENTRY: Array<{ label: string; href: string }> = [
  {
    label: "Netherlands Worldwide — MVV long stay (apply in the United Arab Emirates)",
    href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-united-arab-emirates",
  },
  {
    label: "Netherlands Worldwide — Schengen visa (apply in the United Arab Emirates)",
    href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/schengen-visa/apply-united-arab-emirates",
  },
];

const UAE_RELATED_INTERNAL = filterLiveInternalLinks([
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

function uaeSections(
  fromQuery: string,
  costEstimatorHref: string,
  costsDisclaimer?: string
): GuideSection[] {
  return [
    {
      id: "intro-overview",
      heading: "Relocating from the UAE to the Netherlands",
      body: [
        "The United Arab Emirates is a global expat hub: many people planning a Dutch move live in Dubai or Abu Dhabi on a work or family residence permit, while holding passports from across the world. That matters because Dutch immigration steps are usually driven by your nationality and your permit route—not by UAE residence alone.",
        "A typical long-distance move stacks immigration timing (often employer-, university-, or family-sponsored), document legalisation or attestation, housing in competitive Dutch cities, and first-month admin such as municipality registration, BSN, banking, and health insurance.",
        "This guide explains how MVV entry visas fit into many long-stay procedures, what applying from the UAE usually looks like in practice, and where to go next on official Dutch pages. It supports planning only; it is not legal advice and cannot guarantee outcomes.",
      ],
      links: [
        { label: "EU vs non-EU moving to the Netherlands", href: "/netherlands/eu-vs-non-eu-moving-to-netherlands/" },
        { label: "Moving to the Netherlands (main hub)", href: `${PILLAR_PATH}${fromQuery}` },
      ],
    },
    {
      id: "visa-mvv",
      heading: "Do You Need a Visa When Moving from the UAE?",
      body: [
        "Short answer: it depends on your passport and how long you will stay. For short visits, Schengen visa rules apply from the UAE when a visa is required—handled through the Schengen application process described on Netherlands Worldwide for applicants in the United Arab Emirates.",
        "For stays longer than 90 days, you normally need a Dutch residence permit that matches a recognised purpose (for example work, study, or family). For many non-EU/EEA nationals, the long-stay procedure also uses an MVV, a national long-stay entry visa (often described as a type D visa) so you can enter the Netherlands and complete residence steps such as collecting your permit.",
        "The IND explains that MVV and residence permit applications are often submitted together from abroad, and that you usually apply through the embassy or consulate in your region. From the United Arab Emirates, Netherlands Worldwide publishes UAE-specific instructions—including practical notes such as applying for the MVV visa sticker within the validity period after approval.",
        "A sponsor (employer, educational institution, partner, or other qualifying sponsor depending on the route) is usually part of the process. After arrival, residence permit collection and municipal registration follow the sequence described on Government.nl and the IND.",
      ],
      callout: {
        type: "tip",
        title: "UAE residency ≠ visa-free status",
        text: "Your Emirates ID shows you can live in the UAE; it does not replace passport-based Schengen or MVV rules for the Netherlands. Always verify the steps for your nationality.",
        href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-united-arab-emirates",
        linkLabel: "MVV from the UAE (Netherlands Worldwide)",
      },
      links: [
        { label: "Visa checker", href: "/netherlands/visa-checker/" },
        { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
        { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/" },
        { label: "IND — MVV", href: "https://ind.nl/en/provisional-residence-permit-mvv" },
        {
          label: "IND — Apply for MVV and residence permit from abroad",
          href: "https://ind.nl/en/apply-for-mvv-and-residence-permit-from-abroad",
        },
        {
          label: "MVV long stay — apply in the United Arab Emirates",
          href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-united-arab-emirates",
        },
        {
          label: "Schengen visa — apply in the United Arab Emirates",
          href: "https://www.netherlandsworldwide.nl/visa-the-netherlands/schengen-visa/apply-united-arab-emirates",
        },
      ],
    },
    {
      id: "visa-route",
      heading: "Ways to Move from the UAE to the Netherlands",
      body: [
        "Most long-stay routes are sponsor-driven: a Dutch employer, university, family member, or qualifying facilitator files or supports an application that matches a specific permit type. Use the official checklist for your purpose and confirm salary thresholds, documents, and timelines on the IND website.",
      ],
      visaRoutes: {
        commonRoutes: [
          "Highly skilled migrant — common for Dubai and Abu Dhabi professionals joining Dutch or international employers; salary and sponsor requirements apply.",
          "Paid employment — other sponsored work permits where you have a Dutch employer meeting recognised sponsor rules for that route.",
          "Study — residence permit for study at a Dutch institution; admission and proof-of-funds requirements apply.",
          "Partner or family — for eligible relationships; evidence-heavy and status-dependent on the person already in the Netherlands.",
          "Startup / entrepreneurship — routes such as startup or self-employment with distinct business criteria; advisors and facilitators are common entry points.",
          "Intra-corporate transfer — for some multinational moves between group entities; compare this with standard employment routes on official pages and with your mobility team.",
        ],
        notes: [
          "Emirati nationals and expats follow the same Dutch permit types; the difference is which passport rules and document sources apply to you.",
          "If your case is urgent, mixed-nationality, or involves dependents, many families pair official sources with a regulated visa consultant or immigration lawyer—see the service hubs below.",
        ],
      },
      callout: {
        type: "info",
        title: "Planning note",
        text: "Immigration rules change. Treat this page as a structured starting point and confirm every requirement on official Dutch pages before you rely on it for decisions.",
      },
      links: [
        { label: "Visa checker", href: "/netherlands/visa-checker/" },
        { label: "Highly skilled migrant visa", href: "/netherlands/visa/highly-skilled-migrant/" },
        { label: "Student visa", href: "/netherlands/visa/student-visa/" },
        { label: "Partner & family visa", href: "/netherlands/visa/partner-family-visa/" },
        { label: "Self-employed visa", href: "/netherlands/visa/self-employed-visa/" },
        { label: "Compare visa routes", href: "/netherlands/visa/compare-visas/" },
        { label: "Visa consultants (Netherlands)", href: "/netherlands/services/visa-consultants/" },
        { label: "Immigration lawyers (Netherlands)", href: "/netherlands/services/immigration-lawyers/" },
      ],
    },
    {
      id: "documents",
      heading: "Documents to Prepare in the UAE",
      body: [
        "Start from a valid passport and the permit-specific list your sponsor or Netherlands Worldwide gives you. If you are an expat in the UAE, keep both your passport nationality and your UAE residence documents organised—consulates assess procedures by nationality, while UAE-issued proofs can still matter for address or employment history.",
        "Civil documents (birth, marriage, education, police certificates) may need to be issued recently, certified, and legalised or attested. The UAE often uses attestation through UAE authorities (for example Ministry of Foreign Affairs) for locally issued documents; documents from your home country may follow that country’s apostille or legalisation path instead.",
        "Dutch authorities may request sworn translations into Dutch or English. Build courier, appointment, and re-issuance time into your move plan—Dubai and Abu Dhabi service queues can add weeks during peak periods.",
      ],
      bullets: [
        "Passport valid beyond your first months in the Netherlands",
        "UAE residence visa / Emirates ID copies when they support your application story",
        "Civil-status and family-route evidence where applicable",
        "Attested or legalised documents per issuing country rules (UAE attestation vs apostille elsewhere)",
        "Certified translations when requested",
        "Sponsor letters, contracts, or admission documents for your specific permit",
      ],
      internalCta: {
        label: "Run the document readiness checker",
        href: `/netherlands/document-readiness-checker/${fromQuery}`,
      },
      links: [
        { label: "Document legalization guide", href: "/netherlands/document-legalization-netherlands/" },
        { label: "Document translation (Netherlands)", href: "/netherlands/document-translation-netherlands/" },
        { label: "Apostille in the Netherlands (guide)", href: "/netherlands/apostille-documents-netherlands/" },
        { label: "Documents needed to move", href: DOCUMENTS_GUIDE_PATH },
      ],
    },
    {
      id: "costs",
      heading: "What to Budget For",
      body: [
        "Total spend varies by city, family size, housing strategy, and whether you ship furniture. Use the categories below as a planning checklist rather than a promise of exact totals.",
        costsDisclaimer ?? "",
      ].filter(Boolean),
      table: {
        headers: ["Category", "How costs usually behave", "Planning notes"],
        rows: [
          [
            "Visa / MVV / permit fees",
            "Route-dependent",
            "Use official IND and Netherlands Worldwide fee guidance for your permit type.",
          ],
          [
            "Attestation, legalisation, translations",
            "Per document",
            "UAE MOFA attestation, courier fees, and sworn translators can add up—sequence early tasks.",
          ],
          ["Flights (DXB/AUH–AMS)", "Seasonal", "Compare flexible dates; book arrival around MVV validity and housing."],
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
            "First weeks in the Netherlands",
            "Variable",
            "Municipality fees, insurance start dates, phone, transport, and household setup.",
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
      heading: "After Arrival in the Netherlands",
      body: [
        "Most people stack a similar early sequence: collect the residence permit when your procedure requires it, register with the municipality and receive a BSN, open a bank account, and arrange Dutch basic health insurance when you become resident. DigiD, GP registration, and transport passes then become much easier.",
        "Government.nl describes collecting a residence permit after entry for many routes; combine that with municipality guidance for registration appointments in your city.",
      ],
      bullets: [
        "Residence permit collection or follow-up if required",
        "Municipal registration and BSN",
        "Bank account aligned with your salary and address situation",
        "Dutch basic health insurance",
        "DigiD, phone, and everyday transport",
      ],
      links: [
        { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
        { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" },
        { label: "BSN registration", href: "/netherlands/bsn-registration/" },
        { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
        { label: "Health insurance", href: "/netherlands/health-insurance-netherlands/" },
      ],
    },
    {
      id: "service-hubs",
      heading: "Services People Moving from the UAE Often Research",
      body: [
        "Immigration from the UAE is often nationality-specific and document-heavy. The hub pages below group banks, housing platforms, relocation firms, regulated visa consultants, and law firms—use them to shortlist providers, then compare fees and scope yourself. The provider cards under “Useful services” pull from the same affiliate datasets used elsewhere on ExpatCopilot; inclusion is not an endorsement.",
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
      id: "cities-uae",
      heading: "Dutch Cities People Moving from the UAE Often Shortlist",
      body: [
        "Choice usually comes down to employer location, industry clusters, housing pressure, international schools (for families), and commute preferences. These city guides are practical starting points.",
      ],
      links: filterLiveInternalLinks([
        { label: "Amsterdam", href: "/netherlands/amsterdam/" },
        { label: "Rotterdam", href: "/netherlands/rotterdam/" },
        { label: "Utrecht", href: "/netherlands/utrecht/" },
        { label: "Eindhoven", href: "/netherlands/eindhoven/" },
        { label: "The Hague", href: "/netherlands/the-hague/" },
        { label: "Compare all cities", href: "/netherlands/cities/" },
      ]).map((l) => ({ label: l.label, href: l.href })),
    },
    {
      id: "shipping",
      heading: "Shipping and long-distance logistics",
      body: [
        "Gulf-to-Europe moves often combine sea freight for household goods with air baggage or air cargo for essentials. Align shipment dates with MVV validity, notice periods, and temporary housing in the Netherlands.",
      ],
      bullets: [
        "Decide early between air baggage, shared container, and full container options.",
        "Keep inventory lists and insurance paperwork accessible for customs questions.",
        "If you exit UAE employment, confirm how visa cancellation timing affects your travel date.",
      ],
      links: [
        { label: "Shipping household goods to the Netherlands", href: "/netherlands/shipping-household-goods-netherlands/" },
        { label: "Bringing pets", href: "/netherlands/bringing-pets-to-netherlands/" },
      ],
    },
    {
      id: "official-sources",
      heading: "Official Sources",
      body: [
        "Use these Dutch government entry points first. They are grouped for quick scanning.",
        "Netherlands — immigration and residence",
        "Applying from the United Arab Emirates — MVV and Schengen",
      ],
      links: [...OFFICIAL_NL_IMMIGRATION, ...OFFICIAL_UAE_ENTRY],
    },
  ];
}

export function augmentUaeGuideData(model: CountryPageModel, base: GuideData): GuideData {
  const fromQuery = `?from=${encodeURIComponent(model.slug)}`;
  const costEstimatorHref = `${COST_ESTIMATOR_PATH}${fromQuery}`;
  const checklistHref = `/netherlands/moving/tools/moving-checklist/${fromQuery}`;
  const pillarWithFrom = `${PILLAR_PATH}${fromQuery}`;

  return {
    ...base,
    publishDate: "2026-04-20",
    lastUpdated: "Last updated: 20 April 2026.",
    title: "Moving to the Netherlands from the UAE",
    metaTitle: model.seo.title,
    breadcrumbLabel: "From the UAE",
    subtitle:
      "Understand visa routes, MVV requirements, and relocation steps for moving from Dubai or the UAE to the Netherlands.",
    description: model.seo.description,
    quickAnswersTitle: "UAE to Netherlands move — snapshot",
    quickAnswers: [
      { label: "Legal framing", value: "Non-EU relocation (nationality drives visa rules)" },
      {
        label: "Short stay",
        value: "Schengen visa from the UAE when required—depends on passport",
      },
      {
        label: "Long stay",
        value: "Residence permit for a recognised purpose; sponsor usually required",
      },
      {
        label: "Entry visa (many cases)",
        value: "MVV (long-stay entry) plus residence permit steps—confirm for your nationality",
      },
      {
        label: "Main paths",
        value: "Work (often HSM), study, partner, startup, intra-company transfer",
      },
      { label: "Complexity", value: "Medium–high (documents + immigration timing)" },
    ],
    tocItems: [
      { id: "intro-overview", label: "Overview" },
      { id: "visa-mvv", label: "Visa & MVV" },
      { id: "visa-route", label: "Pathways" },
      { id: "documents", label: "Documents" },
      { id: "costs", label: "Budget" },
      { id: "arrival-weeks", label: "After arrival" },
      { id: "service-hubs", label: "Services" },
      { id: "cities-uae", label: "Cities" },
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
      title: "Plan your move from the UAE",
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
    sections: uaeSections(fromQuery, costEstimatorHref, model.costs.disclaimer),
    internalLinks: {
      ...base.internalLinks,
      related: UAE_RELATED_INTERNAL,
    },
    relatedGuidesSectionTitle: "Related guides before moving from the UAE",
    servicesSectionTitle: "Useful services when relocating from the UAE",
    servicesIntro:
      "Provider cards below are drawn from the same affiliate dataset used on other Netherlands pages. Compare options yourself; inclusion here is not a recommendation.",
    scenariosSectionTitle: "Typical UAE-to-Netherlands scenarios",
    scenariosSectionIntro:
      "These examples show how priorities shift by route. Use the checklist tool with ?from=uae to keep your origin context.",
    exampleScenarios: [
      {
        title: "Dubai expat → tech job in the Netherlands",
        summary:
          "Sequence sponsor-side IND steps, MVV collection in Dubai, housing near the role, and BSN-first banking and insurance. Engage visa support early if salary packaging or relocation deadlines are tight.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "UAE-based student → Dutch university",
        summary:
          "Align admission, study-permit conditions, proof of funds, and student housing. Plan attestations and translations for documents issued outside the Netherlands.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Partner relocation to join someone in the Netherlands",
        summary:
          "Relationship evidence and civil documents are central; timelines depend on the partner’s status. Expect legalisation and translation work spanning your passport country and the UAE.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Corporate transfer from a UAE entity",
        summary:
          "Clarify sponsor, permit type (including possible intra-corporate routes), MVV timing, and payroll transition. Relocation agencies can help when the employer does not centralise mobility.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
      },
      {
        title: "Emirati national pursuing study or work in the Netherlands",
        summary:
          "Follow the same Dutch permit types as other nationalities; focus on document sources issued in the UAE, MVV steps from Dubai, and early housing in student or graduate-heavy cities.",
        href: checklistHref,
        ctaLabel: "Open checklist for this path",
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
        description: "When timing is tight or your case is multi-passport, specialist help can reduce rework.",
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
