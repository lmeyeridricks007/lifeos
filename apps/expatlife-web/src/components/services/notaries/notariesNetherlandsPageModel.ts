import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

/** Services directory — Dutch notaris for conveyancing, deeds, inheritance orientation. */
export const NOTARIES_PATH = "/netherlands/services/notaries/" as const;
export const NOTARIES_NETHERLANDS_PATH = NOTARIES_PATH;

export const ESTATE_AGENTS_PATH = "/netherlands/services/estate-agents/" as const;
export const MORTGAGE_ADVISORS_PATH = "/netherlands/services/mortgage-advisors/" as const;
export const FINANCIAL_ADVISORS_PATH = "/netherlands/services/financial-advisors/" as const;
export const INSURANCE_BROKERS_PATH = "/netherlands/services/insurance-brokers/" as const;
export const TAX_ADVISORS_PATH = "/netherlands/services/tax-advisors/" as const;
export const SERVICES_HUB_PATH = "/netherlands/services/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;
export const MORTGAGES_FOR_EXPATS_PATH = "/netherlands/housing/mortgages-netherlands-expats/" as const;
export const BUYING_HOUSE_NETHERLANDS_PATH = "/netherlands/housing/buying-a-house-netherlands/" as const;
export const HOUSING_HUB_PATH = "/netherlands/housing/" as const;

export const NOTARIES_AFFILIATE_PLACEMENT_ID = "nl-services-notaries-support-providers" as const;

export type NotaryProvider = {
  name: string;
  slug: string;
  city: string;
  region: string;
  summary: string;
  expatFocus: string;
  languages: string[];
  remoteSupport: boolean;
  inPersonAvailability: string;
  website: string;
  engagementType: string;
  notaryType:
    | "Conveyancing / purchase notary"
    | "Inheritance & estate notary"
    | "Family / cohabitation deeds"
    | "KNB member office"
    | "Network / multi-city office"
    | "Expat-oriented notary support";
  citiesServed: string[];
  featured: boolean;
  verificationNote: string;
};

export type NotaryLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

const INFOGRAPHIC_VERSION = "premium-v1";
const VISUAL_PREFIX = "netherlands-services-notaries";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const notariesNetherlandsPage = {
  slug: "notaries",
  path: NOTARIES_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(NOTARIES_PATH) ?? "2026-11-01",
  affiliatePlacementId: NOTARIES_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "Notaries in the Netherlands for Expats | Dutch Notaris Guide",
    description:
      "Understand the Dutch notaris for house purchase deeds, hypotheekakte, inheritance and cohabitation agreements. Soft discovery directory — not a ranking; not legal advice.",
    keywords: [
      "notary netherlands",
      "notaris netherlands",
      "dutch notary house purchase",
      "levering notaris",
      "hypotheekakte",
      "notary deed netherlands",
      "notaris cost expat",
      "find notary netherlands",
      "inheritance notaris",
      "cohabitation agreement netherlands notary",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Services · Notaries",
    pageTitle: "Notaries in the Netherlands for Expats",
    subtitle:
      "Compare Dutch notaris support for house purchase deeds (levering), mortgage deeds (hypotheekakte), inheritance orientation and family agreements. This is a services directory for civil-law notaries — not estate agents, mortgage advisors or foreign solicitors.",
    primaryCta: { label: "Browse Notary Directory", href: "#directory" },
    secondaryCta: { label: "Notary vs Other Providers", href: "#differentiate" },
    chips: ["Levering & deeds", "Hypotheekakte", "Purchase process", "Provider directory"],
    image: {
      src: "/images/heroes/netherlands-services-notaries-hero-premium-v1.png",
      alt: "Photorealistic editorial scene of an expat couple reviewing a Dutch property deed file with a notaris in a bright canal-side notary office, seals and purchase documents on the desk.",
    },
  },
  visuals: {
    role: visual(
      "role",
      "Infographic showing what a Dutch notaris does: deed drafting, levering, hypotheekakte, identity checks and Kadaster registration handoff.",
      "The notaris executes and registers key deeds — confirm scope and timing before completion day."
    ),
    differentiate: visual(
      "differentiate",
      "Infographic differentiating notaries, estate agents, mortgage advisors and tax advisors for Dutch home buyers.",
      "Pick the right provider type first — a notaris is not a makelaar or hypotheekadviseur."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of six facts about Dutch notaries for expats.",
      "Use this snapshot before choosing a notaris: role, costs, language and purchase timing differ."
    ),
    notaryServices: visual(
      "notary-services",
      "Infographic of notary services: conveyancing, mortgage deeds, wills orientation, cohabitation agreements and inheritance files.",
      "Service mix varies by office — purchase files are the most common expat touchpoint."
    ),
    notaryTypes: visual(
      "notary-types",
      "Infographic comparing conveyancing notaries, inheritance specialists, family-deed offices, KNB members and multi-city networks.",
      "Match the notary model to your deed type — purchase, mortgage, family or estate."
    ),
    purchaseRole: visual(
      "purchase-role",
      "Infographic explaining the notary role in a Dutch house purchase: accepted offer, deed prep, signing, levering and registration.",
      "Buyer and seller usually share one purchase notary — clarify who chooses and who pays what."
    ),
    costs: visual(
      "costs",
      "Infographic explaining Dutch notary cost orientation: deed fees, mortgage deed, searches and what to confirm in writing.",
      "Ask for a written fee estimate — costs are not fixed quotes and vary by file complexity."
    ),
    documents: visual(
      "documents",
      "Infographic listing documents often needed for a Dutch notary purchase or mortgage deed file.",
      "ID, marital status proof, mortgage offer and property details commonly start the notary file."
    ),
    challenges: visual(
      "challenges",
      "Infographic of common expat challenges with Dutch notaries: terminology, remote signing, power of attorney, language and timing with mortgages.",
      "Use early questions on English support and attendance plans to reduce completion-day surprises."
    ),
    cityCoverage: visual(
      "city-coverage",
      "Infographic showing notary coverage across Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven and other Dutch cities.",
      "Purchase notaries are local but often work nationwide on deed files with remote intake."
    ),
    directory: visual(
      "directory",
      "Infographic showing a neutral notary directory workflow: shortlist, compare deed experience, verify KNB context and decide.",
      "Provider discovery should lead to verification — not blind trust in a ranking."
    ),
    comparisonMatrix: visual(
      "comparison-matrix",
      "Infographic comparison matrix for notaries: deed focus, languages, city coverage and expat support.",
      "Compare offices by deed fit and language before you compare marketing claims."
    ),
    questions: visual(
      "questions",
      "Infographic of questions expats should ask Dutch notaries before instructing them.",
      "Good questions reveal fees, English deed explanations, attendance rules and mortgage coordination."
    ),
    faq: visual(
      "faq",
      "Infographic decision map of common notary FAQ topics: vs solicitor, purchase role, costs, inheritance and red flags.",
      "FAQ answers should help you pick the next verification step — not replace legal advice."
    ),
    leadCta: visual(
      "lead-cta",
      "Infographic showing how to shortlist notaries: define deed type, compare fees, check languages and align with mortgage advisor and makelaar.",
      "Turn provider discovery into a structured shortlist before completion week."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic showing official and trusted sources for notary and property orientation in the Netherlands: KNB, notaris.nl, Kadaster and government.",
      "Verify consumer orientation with official sources — not office marketing alone."
    ),
    servicesEcosystem: visual(
      "services-ecosystem",
      "Infographic showing services around a Dutch purchase: notaries, estate agents, mortgage advisors, financial advisors, tax advisors and insurance brokers.",
      "Notaries are one required piece of the wider buy/sell support ecosystem."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic showing a research path after comparing notaries: buying guide, mortgages for expats, estate agents and tax advisors.",
      "Continue from notary discovery into financing, purchase process and related providers."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting notary research to mortgage advisors, estate agents, financial advisors, tax advisors and Dutch cities.",
      "Notary shortlists connect naturally into mortgage timing and makelaar handoffs."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#differentiate", label: "Not the same as…" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#notary-role", label: "What notaries do" },
    { href: "#notary-types", label: "Notary types" },
    { href: "#purchase-role", label: "House purchase" },
    { href: "#costs", label: "Costs" },
    { href: "#documents", label: "Documents" },
    { href: "#challenges", label: "Challenges" },
    { href: "#cities", label: "Cities" },
    { href: "#directory", label: "Directory" },
    { href: "#comparison", label: "Compare" },
    { href: "#affiliate-providers", label: "Providers" },
    { href: "#questions", label: "Questions" },
    { href: "#lead-cta", label: "Get help" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
  ],
  intro: {
    heading: "Why Expats Need a Dutch Notaris (Notary)",
    paragraphs: [
      "In the Netherlands, a civil-law notaris is a public official who drafts and executes key deeds — especially the transfer deed (levering) and mortgage deed (hypotheekakte) when you buy a home. This is different from a solicitor abroad who may only advise or negotiate.",
      "This page is a services directory for Dutch notaries. It owns notary discovery and orientation. Estate agents own makelaars; mortgage advisors own financing advice — those topics get short cross-links only here.",
      "Inclusion here is informational soft discovery, not a ranking. No directory can guarantee deed outcomes, fees or English support. Confirm scope, costs and attendance rules directly with the notaris before completion.",
    ],
    links: [
      { label: "Estate agents", href: ESTATE_AGENTS_PATH },
      { label: "Mortgage advisors", href: MORTGAGE_ADVISORS_PATH },
      { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH },
      { label: "Mortgages for Expats", href: MORTGAGES_FOR_EXPATS_PATH },
    ],
  },
  differentiateCards: [
    {
      title: "Notaries (this page)",
      body: "Dutch civil-law notaris for purchase/mortgage deeds, inheritance orientation and family agreements — deed execution and registration.",
      href: NOTARIES_PATH,
      status: "live" as const,
    },
    {
      title: "Estate agents",
      body: "Makelaars for buying and selling property — search, viewings, bidding and listing. They are not the deed office.",
      href: ESTATE_AGENTS_PATH,
      status: "live" as const,
    },
    {
      title: "Mortgage advisors",
      body: "Regulated hypotheekadviseurs for financing and lender comparison — not deed drafting or Kadaster registration.",
      href: MORTGAGE_ADVISORS_PATH,
      status: "live" as const,
    },
    {
      title: "Tax advisors",
      body: "Tax filing and cross-border tax orientation — separate from notarial deeds, though property ownership can create tax questions.",
      href: TAX_ADVISORS_PATH,
      status: "live" as const,
    },
  ],
  snapshotCards: [
    { label: "Core purchase role", value: "Deeds", note: "Levering + hypotheekakte are typical completion documents." },
    { label: "Vs solicitor abroad", value: "Public official", note: "A notaris executes authentic deeds — not only private advice." },
    { label: "Who chooses", value: "Often buyer", note: "Buyer usually proposes the purchase notary; confirm early." },
    { label: "Costs", value: "Estimate-based", note: "Ask for a written fee breakdown — not a fixed public tariff for every file." },
    { label: "Languages", value: "Varies", note: "English-friendly offices exist; confirm deed explanation language." },
    { label: "Guarantee", value: "None", note: "No directory ranks notaries or guarantees completion timing." },
  ],
  notaryServices: [
    { title: "Purchase transfer deed (levering)", body: "Drafting and executing the deed that transfers ownership, with identity and capacity checks." },
    { title: "Mortgage deed (hypotheekakte)", body: "Executing the mortgage deed alongside or after the purchase deed when a lender is involved." },
    { title: "Registration handoff", body: "Coordinating filing so ownership and mortgage rights reach the Kadaster land registry." },
    { title: "Funds & settlement coordination", body: "Managing completion-day money flows between buyer, seller, lender and taxes where applicable." },
    { title: "Family & cohabitation deeds", body: "Orientation on cohabitation agreements, prenups and related notarial acts — verify scope per office." },
    { title: "Wills & inheritance orientation", body: "Notarial wills and estate files where a notaris is involved — not a substitute for full estate planning advice." },
  ],
  notaryTypeComparison: [
    {
      type: "Conveyancing / purchase notary",
      scope: "Focuses on residential purchase and mortgage deeds, searches and completion logistics.",
      usefulWhen: "You are buying or selling a Dutch home and need levering / hypotheekakte support.",
      questions: ["English deed explanation?", "Can we sign remotely or by power of attorney?", "Fee estimate for purchase + mortgage?"],
    },
    {
      type: "Inheritance & estate notary",
      scope: "Handles estate settlement, certificates of inheritance and related notarial steps.",
      usefulWhen: "You need orientation on Dutch inheritance formalities after a death or for cross-border estates.",
      questions: ["Cross-border estate experience?", "Languages?", "What documents start the file?"],
    },
    {
      type: "Family / cohabitation deeds",
      scope: "Cohabitation agreements, prenuptial arrangements and related family notarial acts.",
      usefulWhen: "You want a notarial agreement before living together or marrying in the Netherlands.",
      questions: ["Do you draft samenlevingscontracten?", "Timeline and fee estimate?", "English support?"],
    },
    {
      type: "KNB member office",
      scope: "Local notary offices operating under KNB professional context — still verify the individual notaris.",
      usefulWhen: "You want a recognised Dutch notary office with standard purchase workflows.",
      questions: ["Who is the assigned notaris?", "Purchase volume in my city?", "Completion-week capacity?"],
    },
    {
      type: "Network / multi-city office",
      scope: "Notary networks or larger offices covering multiple cities with shared intake processes.",
      usefulWhen: "You want flexible city coverage or remote intake while buying outside your current city.",
      questions: ["Which office signs?", "Who explains the deed in English?", "How are funds handled?"],
    },
  ],
  purchaseScenarios: [
    {
      profile: "First-time expat buyer",
      whatCanMatter: "Deed terminology, ID checks, marital-status proof and mortgage timing.",
      exampleQuestion: "Can you walk me through the levering and hypotheekakte in English before signing day?",
    },
    {
      profile: "Buyer with mortgage",
      whatCanMatter: "Lender conditions, valuation timing and same-day purchase + mortgage deeds.",
      exampleQuestion: "How do you coordinate with my mortgage advisor and lender for completion?",
    },
    {
      profile: "Remote / overseas signer",
      whatCanMatter: "Power of attorney, video ID options and who may attend in person.",
      exampleQuestion: "Can I grant a power of attorney if I cannot fly in for the signing?",
    },
    {
      profile: "Seller completing a chain",
      whatCanMatter: "Funds release timing, keys and overlapping purchase/sale completions.",
      exampleQuestion: "How do you handle same-day sale and purchase settlement?",
    },
  ],
  costExamples: [
    { item: "Purchase / transfer deed fees", typicalRange: "Varies by file", whatToConfirm: "What is included (drafts, searches, appointment) and when payable." },
    { item: "Mortgage deed (hypotheekakte)", typicalRange: "Often separate line", whatToConfirm: "Whether purchase and mortgage deeds are quoted together." },
    { item: "Land registry / search costs", typicalRange: "Pass-through / file-based", whatToConfirm: "Which third-party costs are estimated vs fixed." },
    { item: "Extra complexity (VvE, company buyer, remote PoA)", typicalRange: "Higher", whatToConfirm: "Surcharges for complex ownership, foreign documents or power of attorney." },
  ],
  documentChecklist: [
    { document: "Passport / ID", why: "Required for notarial identity and capacity checks." },
    { document: "BSN / residence context if available", why: "Helps the office complete client records for Dutch deeds." },
    { document: "Marital / partnership status proof", why: "Affects who must sign and how ownership is structured." },
    { document: "Purchase agreement / accepted offer", why: "Starts the deed file and completion timeline." },
    { document: "Mortgage offer / lender details", why: "Needed when a hypotheekakte is part of completion." },
    { document: "Existing property / VvE documents (as relevant)", why: "Apartment and complex titles need extra checks." },
    { document: "Power of attorney plans", why: "Required if you cannot attend signing in person." },
  ],
  challengeCards: [
    { title: "Solicitor vs notaris confusion", body: "A Dutch notaris executes authentic deeds — not the same role as many foreign solicitors." },
    { title: "Deed terminology", body: "Levering, hypotheekakte and eigendom need clear English explanations before signing." },
    { title: "Remote attendance", body: "Overseas buyers often need power of attorney logistics planned early." },
    { title: "Mortgage timing", body: "Lender conditions and notary diaries must align in the same completion window." },
    { title: "Who chooses the notary", body: "Buyer usually proposes; sellers may prefer a known office — agree early." },
    { title: "Fee surprises", body: "Complex titles, translations or late changes can increase estimates." },
    { title: "Language at signing", body: "You must understand the deed — confirm English support, not only marketing English." },
    { title: "Role mix-ups", body: "Makelaars and mortgage advisors do not replace the notaris on completion day." },
  ],
  cityCards: [
    { city: "Amsterdam", href: "/netherlands/cities/amsterdam/", note: "High purchase volume; book notary diaries early in competitive markets." },
    { city: "Rotterdam", href: "/netherlands/cities/rotterdam/", note: "Strong local notary coverage for city and regional purchases." },
    { city: "The Hague", href: "/netherlands/cities/the-hague/", note: "International buyers common; confirm English deed support." },
    { city: "Utrecht", href: "/netherlands/cities/utrecht/", note: "Busy completion weeks; align mortgage and notary early." },
    { city: "Eindhoven", href: "/netherlands/cities/eindhoven/", note: "Tech-driven buyer demand with regional notary offices." },
    { city: "Haarlem", href: "/netherlands/cities/haarlem/", note: "Amsterdam spillover purchases; local offices handle Randstad files." },
    { city: "Leiden", href: "/netherlands/cities/leiden/", note: "Compact market with established notary practices." },
    { city: "Delft", href: "/netherlands/cities/delft/", note: "University and tech buyers; verify completion capacity." },
    { city: "Groningen", href: "/netherlands/cities/groningen/", note: "Northern coverage; confirm remote intake if you live elsewhere." },
    { city: "Arnhem", href: "/netherlands/cities/arnhem/", note: "Eastern regional purchase and estate files." },
    { city: "Nijmegen", href: "/netherlands/cities/nijmegen/", note: "University city turnover and family home completions." },
    { city: "Maastricht", href: "/netherlands/cities/maastricht/", note: "Cross-border region; ask about foreign document handling." },
  ],
  providers: [
    {
      name: "Residential conveyancing notaries (purchase focus)",
      slug: "conveyancing-purchase-notaries",
      city: "Major cities",
      region: "Netherlands",
      summary: "Notary offices that primarily handle residential purchase deeds (levering) and related mortgage deeds for home buyers and sellers.",
      expatFocus: "Best starting point for most expat buyers — confirm English deed explanations and power-of-attorney options.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Signing often in person; intake calls can be remote.",
      website: "https://www.notaris.nl/",
      engagementType: "Purchase / conveyancing deed file",
      notaryType: "Conveyancing / purchase notary",
      citiesServed: ["Amsterdam", "Utrecht", "Rotterdam", "The Hague", "Multiple cities"],
      featured: true,
      verificationNote: "Use notaris.nl / KNB find-a-notary tools to identify current offices; this row explains the role, not a single brand endorsement.",
    },
    {
      name: "KNB / notaris.nl registered offices",
      slug: "knb-notaris-nl-offices",
      city: "Nationwide",
      region: "Netherlands",
      summary: "Local notary offices discoverable via the official consumer notary portal and KNB professional context.",
      expatFocus: "Useful verification starting point; still interview the assigned notaris for language and fee clarity.",
      languages: ["Dutch", "English availability varies by office"],
      remoteSupport: true,
      inPersonAvailability: "Local offices; verify nearest practice.",
      website: "https://www.knb.nl/",
      engagementType: "General notarial services via local office",
      notaryType: "KNB member office",
      citiesServed: ["Netherlands-wide"],
      featured: true,
      verificationNote: "KNB context is professional orientation — confirm the specific notaris handling your deed.",
    },
    {
      name: "Netwerk Notarissen",
      slug: "netwerk-notarissen",
      city: "Multiple cities",
      region: "National network",
      summary: "Dutch notary network with member offices offering notarial services including residential conveyancing across regions.",
      expatFocus: "Network coverage can help when your purchase city differs from where you live — verify the signing office.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Member offices; confirm city and English support.",
      website: "https://www.netwerknotarissen.nl/",
      engagementType: "Network member deed services",
      notaryType: "Network / multi-city office",
      citiesServed: ["Multiple Dutch cities"],
      featured: true,
      verificationNote: "Network membership is not a ranking — interview the local office that will execute your deed.",
    },
    {
      name: "Inheritance & estate notary practices",
      slug: "inheritance-estate-notaries",
      city: "Major cities",
      region: "Netherlands",
      summary: "Notaries experienced with estate settlement, certificates of inheritance and related notarial formalities.",
      expatFocus: "Useful when cross-border heirs need Dutch notarial steps — not a substitute for full estate planning advice.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Intake often remote; some acts require specific attendance rules.",
      website: "https://www.notaris.nl/",
      engagementType: "Estate / inheritance notarial file",
      notaryType: "Inheritance & estate notary",
      citiesServed: ["Netherlands-wide local offices"],
      featured: false,
      verificationNote: "Ask about foreign wills, translations and which documents open an inheritance file.",
    },
    {
      name: "Family & cohabitation deed notaries",
      slug: "family-cohabitation-deed-notaries",
      city: "Major cities",
      region: "Netherlands",
      summary: "Offices that regularly draft cohabitation agreements and related family notarial acts for couples.",
      expatFocus: "Helpful for internationals formalising living-together arrangements under Dutch notarial form.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Consultation remote possible; signing rules depend on the act.",
      website: "https://www.notaris.nl/",
      engagementType: "Family / cohabitation notarial acts",
      notaryType: "Family / cohabitation deeds",
      citiesServed: ["Amsterdam", "The Hague", "Utrecht", "Rotterdam", "Other cities"],
      featured: false,
      verificationNote: "Confirm whether English drafts or bilingual explanations are available before you book.",
    },
    {
      name: "Expat-oriented purchase deed support",
      slug: "expat-oriented-purchase-deed-support",
      city: "Randstad focus",
      region: "Western Netherlands",
      summary: "Notary offices and workflows that market English-language support for international buyers through completion.",
      expatFocus: "Useful for deed walkthroughs and remote-buyer logistics — still verify who explains the deed on signing day.",
      languages: ["English", "Dutch"],
      remoteSupport: true,
      inPersonAvailability: "Randstad signings common; remote intake possible.",
      website: "https://www.notaris.nl/",
      engagementType: "Expat purchase deed packages",
      notaryType: "Expat-oriented notary support",
      citiesServed: ["Amsterdam", "The Hague", "Utrecht", "Rotterdam"],
      featured: true,
      verificationNote: "Marketing English is not enough — ask who will explain each clause before you sign.",
    },
    {
      name: "Mortgage-deed coordinated offices",
      slug: "mortgage-deed-coordinated-offices",
      city: "Netherlands-wide",
      region: "National",
      summary: "Notaries accustomed to same-day purchase and mortgage deed completions with Dutch lenders.",
      expatFocus: "Important when your lender timeline is tight; coordinate early with your mortgage advisor.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Completion appointments on site; prep calls remote.",
      website: "https://www.notaris.nl/",
      engagementType: "Purchase + hypotheekakte coordination",
      notaryType: "Conveyancing / purchase notary",
      citiesServed: ["Netherlands-wide"],
      featured: false,
      verificationNote: "Confirm lender document cut-offs and who sends the mortgage instructions to the notary.",
    },
    {
      name: "Remote / power-of-attorney purchase support",
      slug: "remote-power-of-attorney-purchase-support",
      city: "Netherlands-wide",
      region: "National",
      summary: "Notary workflows designed for buyers who cannot attend signing in person and need power-of-attorney arrangements.",
      expatFocus: "Critical for overseas assignees; plan PoA formalities weeks ahead of completion.",
      languages: ["English", "Dutch"],
      remoteSupport: true,
      inPersonAvailability: "Attorney or representative may attend; client ID rules still apply.",
      website: "https://www.notaris.nl/",
      engagementType: "Remote purchase completion via PoA",
      notaryType: "Expat-oriented notary support",
      citiesServed: ["Netherlands-wide via cooperating offices"],
      featured: false,
      verificationNote: "Ask exactly which documents must be legalised or apostilled for your nationality and situation.",
    },
  ] satisfies NotaryProvider[],
  comparisonTable: [
    { advisor: "Conveyancing / purchase notaries", citiesServed: "Major cities", expatFocus: "Levering & hypotheekakte", languages: "Dutch, English varies", onlineConsultations: "Often", advisorType: "Conveyancing / purchase notary" },
    { advisor: "KNB / notaris.nl offices", citiesServed: "Netherlands-wide", expatFocus: "Verified local discovery", languages: "Dutch, English varies", onlineConsultations: "Varies", advisorType: "KNB member office" },
    { advisor: "Netwerk Notarissen", citiesServed: "Multiple cities", expatFocus: "Network coverage", languages: "Dutch, English varies", onlineConsultations: "Varies", advisorType: "Network / multi-city office" },
    { advisor: "Inheritance & estate practices", citiesServed: "Local offices", expatFocus: "Estate formalities", languages: "Dutch, English varies", onlineConsultations: "Often", advisorType: "Inheritance & estate notary" },
    { advisor: "Family / cohabitation deed offices", citiesServed: "Major cities", expatFocus: "Samenlevingscontract", languages: "Dutch, English varies", onlineConsultations: "Often", advisorType: "Family / cohabitation deeds" },
    { advisor: "Expat-oriented purchase support", citiesServed: "Randstad common", expatFocus: "English deed support", languages: "English, Dutch", onlineConsultations: "Yes", advisorType: "Expat-oriented notary support" },
    { advisor: "Mortgage-deed coordinated offices", citiesServed: "Nationwide", expatFocus: "Lender completion timing", languages: "Dutch, English varies", onlineConsultations: "Prep remote", advisorType: "Conveyancing / purchase notary" },
    { advisor: "Remote / PoA purchase support", citiesServed: "Partner network", expatFocus: "Overseas signers", languages: "English, Dutch", onlineConsultations: "Yes", advisorType: "Expat-oriented notary support" },
  ],
  questionsToAsk: [
    "Will you handle both the purchase deed (levering) and the mortgage deed (hypotheekakte)?",
    "Can you provide a written fee estimate, including third-party costs?",
    "In which language will you explain the deed before I sign?",
    "What are the options if I cannot attend signing in person?",
    "Who usually chooses the notary in this purchase — and are you acceptable to the seller?",
    "How do you coordinate with my mortgage advisor, lender and makelaar?",
    "What documents do you need from me in the first week after the accepted offer?",
    "What typically delays completion on expat files, and how do we prevent it?",
  ],
  relatedHousingGuides: [
    { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "End-to-end home-buying process including notary timing." },
    { label: "Mortgages for Expats", href: MORTGAGES_FOR_EXPATS_PATH, status: "live", description: "Financing context that must align with deed completion." },
    { label: "Mortgage advisors", href: MORTGAGE_ADVISORS_PATH, status: "live", description: "Regulated mortgage advice — separate from the notaris." },
    { label: "Estate agents", href: ESTATE_AGENTS_PATH, status: "live", description: "Makelaars for search, bidding and sale mandates." },
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, status: "live", description: "Longer-term planning after purchase — not deed execution." },
  ] satisfies NotaryLink[],
  leadCta: {
    heading: "Need Help Shortlisting Notaries?",
    body: "Use the directory to compare deed focus, city coverage, language support and remote options. Then contact shortlisted notaries for written fee estimates — and keep makelaar and mortgage advice on their own service pages.",
    primaryCta: { label: "Compare Notaries", href: "#directory" },
    secondaryCta: { label: "Open Buying a House Guide", href: BUYING_HOUSE_NETHERLANDS_PATH },
  },
  faqs: [
    {
      q: "Is a Dutch notaris the same as a solicitor abroad?",
      a: "Not exactly. A Dutch notaris is a civil-law public official who drafts and executes authentic deeds (such as the transfer and mortgage deeds). Many foreign solicitors advise or negotiate without that same deed-execution role. Use a Dutch notaris for the required notarial acts.",
    },
    {
      q: "Do I need a notary when buying a house in the Netherlands?",
      a: "Yes for a normal residential purchase: ownership transfers through a notarial deed (levering), and a mortgage usually needs a hypotheekakte. Your makelaar and mortgage advisor support other steps, but they do not replace the notaris.",
    },
    {
      q: "Who chooses the notary — buyer or seller?",
      a: "In practice the buyer often proposes the notary, but parties should agree early. Confirm acceptability with the seller and ask for a written fee estimate before the file is locked in.",
    },
    {
      q: "How much does a Dutch notary cost?",
      a: "Costs vary by deed type, complexity and third-party items. Ask for a written estimate covering purchase deed, mortgage deed and expected pass-through costs. This page does not publish fixed quotes.",
    },
    {
      q: "How do notaries differ from estate agents and mortgage advisors?",
      a: "Estate agents (makelaars) help with search, viewings and negotiation. Mortgage advisors handle financing advice. Notaries execute and register the deeds that transfer ownership and create the mortgage right.",
    },
    {
      q: "Can I sign if I am abroad?",
      a: "Often via power of attorney or other arrangements your notary accepts — but rules and document formalities matter. Ask early; do not leave remote signing to the final week.",
    },
    {
      q: "Does directory inclusion mean ExpatLife recommends a notary?",
      a: "No. Listings are informational soft discovery only. Always verify current services, fees, languages and fit directly with the office.",
    },
    {
      q: "When else might expats need a notary?",
      a: "Besides house purchase: certain cohabitation agreements, wills and inheritance formalities commonly involve a notaris. Those are orientation topics here — confirm scope with the office for your situation.",
    },
  ],
  officialSources: [
    { label: "KNB", href: "https://www.knb.nl/", description: "Koninklijke Notariële Beroepsorganisatie — professional organisation for Dutch notaries." },
    { label: "notaris.nl", href: "https://www.notaris.nl/", description: "Consumer-facing notary information and find-a-notary orientation from the notarial profession." },
    { label: "Kadaster", href: "https://www.kadaster.nl/", description: "Dutch land registry context for ownership and mortgage registration." },
    { label: "Government.nl — Housing", href: "https://www.government.nl/topics/housing", description: "Official Dutch government information related to housing topics." },
    { label: "ACM — Consumers", href: "https://www.acm.nl/en/consumers", description: "Consumer authority orientation for contracts and services." },
  ],
  relatedGuides: [
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, status: "live", description: "Pensions, investments and long-term planning — separate from notarial deeds." },
    { label: "Mortgage advisors", href: MORTGAGE_ADVISORS_PATH, status: "live", description: "Financing advice to align with deed completion." },
    { label: "Estate agents", href: ESTATE_AGENTS_PATH, status: "live", description: "Makelaars for buy/sell process support." },
    { label: "Tax advisors", href: TAX_ADVISORS_PATH, status: "live", description: "Tax support around property and relocation." },
    { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "Full buying process guide for expats." },
    { label: "Mortgages for Expats", href: MORTGAGES_FOR_EXPATS_PATH, status: "live", description: "Expat mortgage orientation beside notary timing." },
    { label: "Insurance brokers", href: INSURANCE_BROKERS_PATH, status: "live", description: "Insurance intermediary discovery for household cover after purchase." },
  ] satisfies NotaryLink[],
  servicesLinks: [
    { label: "All Services", href: SERVICES_HUB_PATH, status: "live", description: "Browse service providers for expats in the Netherlands." },
    { label: "Estate agents", href: ESTATE_AGENTS_PATH, status: "live", description: "Buy/sell makelaars directory." },
    { label: "Mortgage advisors", href: MORTGAGE_ADVISORS_PATH, status: "live", description: "Regulated mortgage advice for buyers." },
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, status: "live", description: "Long-term financial planning support." },
    { label: "Tax advisors", href: TAX_ADVISORS_PATH, status: "live", description: "Tax support around property and relocation." },
    { label: "Insurance brokers", href: INSURANCE_BROKERS_PATH, status: "live", description: "Broker support for household and other insurance." },
  ] satisfies NotaryLink[],
  exploreNextCards: [
    { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "See where the notaris sits in the full purchase timeline." },
    { label: "Mortgage advisors", href: MORTGAGE_ADVISORS_PATH, status: "live", description: "Align financing before completion week." },
    { label: "Estate agents", href: ESTATE_AGENTS_PATH, status: "live", description: "Coordinate makelaar handoff into the notary file." },
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, status: "live", description: "Plan beyond the deed — pensions and wealth questions." },
    { label: "Insurance brokers", href: INSURANCE_BROKERS_PATH, status: "live", description: "Compare household cover after purchase completion." },
    { label: "Tax advisors", href: TAX_ADVISORS_PATH, status: "live", description: "Property ownership can create tax follow-ups." },
  ] satisfies NotaryLink[],
};
