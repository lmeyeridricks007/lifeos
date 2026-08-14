export const HEALTH_INSURANCE_COMPARISON_NETHERLANDS_PATH =
  "/netherlands/health/health-insurance-comparison-netherlands/" as const;
/** Alias used by sibling health models that already import this path name. */
export const HEALTH_INSURANCE_COMPARISON_PATH = HEALTH_INSURANCE_COMPARISON_NETHERLANDS_PATH;

export const PHYSIOTHERAPY_NETHERLANDS_PATH = "/netherlands/health/physiotherapy-netherlands/" as const;
export const PHARMACIES_NETHERLANDS_PATH = "/netherlands/health/pharmacies-netherlands/" as const;
export const PRESCRIPTIONS_NETHERLANDS_PATH = "/netherlands/health/prescriptions-netherlands/" as const;
export const MATERNITY_CARE_NETHERLANDS_PATH = "/netherlands/health/maternity-care-netherlands/" as const;
export const GP_NETHERLANDS_PATH = "/netherlands/health/gp-netherlands/" as const;
export const EMERGENCY_HEALTHCARE_NETHERLANDS_PATH =
  "/netherlands/health/emergency-healthcare-netherlands/" as const;
export const HOSPITALS_NETHERLANDS_PATH = "/netherlands/health/hospitals-netherlands/" as const;
export const DENTISTS_NETHERLANDS_PATH = "/netherlands/health/dentists-netherlands/" as const;
export const MENTAL_HEALTHCARE_NETHERLANDS_PATH =
  "/netherlands/health/mental-healthcare-netherlands/" as const;
export const HEALTH_HUB_PATH = "/netherlands/health/" as const;
export const HEALTH_INSURANCE_PATH = "/netherlands/health-insurance-netherlands/" as const;
export const HEALTH_INSURANCE_SERVICES_PATH = "/netherlands/services/health-insurance/" as const;
export const INSURANCE_BROKERS_PATH = "/netherlands/services/insurance-brokers/" as const;
export const HEALTHCARE_FOR_CHILDREN_PATH =
  "/netherlands/family/healthcare-for-children-netherlands/" as const;
export const HEALTHCARE_BASICS_PATH = "/netherlands/living/healthcare-basics/" as const;
export const EMERGENCIES_SAFETY_PATH = "/netherlands/living/emergencies-safety/" as const;
export const HEALTH_SYSTEM_CULTURE_PATH = "/netherlands/culture/health-system-culture-basics/" as const;

export type ComparisonLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon" | "external";
};

export type TipCard = { title: string; body: string };

export type SnapshotSignal = { label: string; value: string; note: string };

export type MistakeCard = { title: string; body: string; advice: string };

export type TimelineStep = { phase: string; title: string; detail: string };

export type ScenarioRow = {
  situation: string;
  approach: string;
  firstStep: string;
};

export type HowToStep = { name: string; text: string };

export type ContactRouteRow = {
  route: string;
  when: string;
  how: string;
  note: string;
};

export type RoleCard = { role: string; focus: string };

export type ComparisonRow = {
  type: string;
  focus: string;
  whenReferred: string;
  note: string;
};

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "health-insurance-comparison-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const healthInsuranceComparisonNetherlandsPage = {
  slug: "health-insurance-comparison-netherlands",
  path: HEALTH_INSURANCE_COMPARISON_NETHERLANDS_PATH,
  hubPath: HEALTH_HUB_PATH,
  parentGuidePath: HEALTHCARE_BASICS_PATH,
  publish: true,
  publishDate: "2027-02-19",
  seo: {
    title: "Health Insurance Comparison in the Netherlands | Complete Guide for Expats",
    description:
      "Compare Dutch health insurance as an expat — basic vs supplementary decision factors, natura vs restitutie, eigen risico tradeoffs, English support, claims and what to check on comparison sites. Not an insurer ranking.",
    keywords: [
      "health insurance comparison Netherlands",
      "compare Dutch health insurance",
      "basic vs supplementary insurance Netherlands",
      "aanvullende verzekering Netherlands",
      "natura vs restitutie",
      "eigen risico Netherlands",
      "voluntary excess Netherlands",
      "Independer health insurance",
      "expat health insurance Netherlands",
      "Dutch health insurer comparison",
      "zorgverzekering vergelijken",
      "health insurance factors Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Health · Insurance comparison",
    pageTitle: "Health Insurance Comparison in the Netherlands",
    subtitle:
      "An expat-facing decision framework for comparing Dutch health insurance — basic vs supplementary factors, insurer choice levers, eigen risico tradeoffs and what to verify on comparison sites. Not a ranking of insurers.",
    primaryCta: { label: "Start the Comparison Framework", href: "#how-it-works" },
    secondaryCta: { label: "Open Early Setup Guide", href: HEALTH_INSURANCE_PATH },
    chips: [
      "Basic vs supplementary",
      "Natura vs restitutie",
      "Eigen risico",
      "English support",
      "Comparison sites",
      "Switching window",
    ],
    disclaimer:
      "General orientation only — not insurance, financial or medical advice, and not a ranking, award list or “best for expats” crowning of any insurer. Indicative figures (when shown) are year-labelled planning cues — always verify with your insurer and comparison tools such as Independer for the current policy year. For mandate, deadline and basic-package basics, use the Early Setup Health Insurance guide.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Unique photorealistic Dutch canal-side apartment desk scene — multicultural expat couple comparing Dutch health insurance policy documents and a laptop comparison checklist, tea cups and BSN cards nearby, soft evening light, calm and organised atmosphere, no insurer logos or fake awards.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#basic-vs-supplementary", label: "Basic vs extra" },
    { href: "#insurer-factors", label: "Insurer factors" },
    { href: "#eigen-risico", label: "Eigen risico" },
    { href: "#comparison-sites", label: "Comparison sites" },
    { href: "#switching", label: "Switching" },
    { href: "#supplementary-why", label: "Why extras matter" },
    { href: "#differences", label: "Differences" },
    { href: "#checklist", label: "Checklist" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#healthcare-hub", label: "Health hub" },
    { href: "#explore-next", label: "Explore next" },
    { href: "#sources", label: "Sources" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation board titled Before You Compare Policies — four building blocks: know the mandate and basic package, list your likely care needs, separate premium from risk factors, and prepare a comparison checklist — with a Policy File Checklist rail and Dutch canal desk scene.",
      "Four building blocks cover readiness: mandate basics, personal need list, premium vs risk, and a reusable comparison checklist."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Dutch health insurance comparison — basic package, supplementary add-ons, insurer factors, eigen risico, comparison-site checks, and switching timing — each with a one-line role description.",
      "Six building blocks explain almost every comparison question — the sections below add practical detail."
    ),
    howItWorks: visual(
      "how-it-works",
      "Premium comparison decision flow — clarify needs, separate basic from supplementary, score insurer factors, set eigen risico, verify on comparison sites, then confirm before the switch deadline — calm Dutch desk with policy cards and a record rail.",
      "Most useful comparisons follow a needs-first flow rather than chasing the lowest premium alone."
    ),
    basicVsSupplementary: visual(
      "basic-vs-supplementary",
      "Premium two-column comparison board — left basisverzekering mandatory core cover, right aanvullende verzekering optional extras for dental physio maternity extras and more — with a Verify with insurer year label and General information only rail.",
      "Basic cover is mandatory and standardised in scope; supplementary is optional and package-specific."
    ),
    insurerFactors: visual(
      "insurer-factors",
      "Premium insurer-choice factor map — contracted network and natura vs restitutie, English support channels, claims and app experience, customer service hours, and hospital or specialist network notes — Dutch consultation desk scene.",
      "Insurer choice is about fit factors — not a celebrity ranking of brands."
    ),
    eigenRisico: visual(
      "eigen-risico",
      "Premium eigen risico tradeoff board — mandatory deductible about €385 in 2026, voluntary top-up up to about €885 total, lower monthly premium vs higher first-euro risk, GP usually outside deductible — verify-with-insurer year label.",
      "Voluntary excess can lower premium but raises your first-euro risk for many insured adult pathways."
    ),
    comparisonSites: visual(
      "comparison-sites",
      "Premium comparison-site checklist board — filters for basic and supplementary, network type, dental and physio session caps, English notes, eigen risico slider, and a reminder that listings are tools not awards — laptop on a Dutch apartment desk.",
      "Use comparison sites as checklists — verify filters, year and policy wording before you switch."
    ),
    switching: visual(
      "switching",
      "Premium policy-year calendar — November–December comparison window, 31 December switch orientation, January start, mid-year change limits, and a reminder to cancel or switch correctly — canal-neighbourhood calendar scene.",
      "Most people compare and switch toward year-end for a 1 January start — verify current deadlines."
    ),
    supplementaryWhy: visual(
      "supplementary-why",
      "Premium why-supplementary-matters map linking dental, physiotherapy session caps, maternity extras such as kraamzorg contributions, and prescription or pharmacy edge cases — with deep-links note to sibling guides, not rebuilt content.",
      "Supplementary matters when your likely year includes dental, physio, maternity extras or similar gaps."
    ),
    differences: visual(
      "differences",
      "Premium surprise cards for expats — basic package is largely the same across insurers, premium is not the only lever, network type changes freedom of choice, English support varies, and there is no official best-for-expats crown.",
      "Expect standardised basic cover with real differences in networks, extras, service and deductible choices."
    ),
    checklist: visual(
      "checklist",
      "Premium comparison checklist clipboard — need list, basic vs extras, network type, eigen risico choice, English and claims checks, comparison-site filters, insurer confirmation, switch deadline — ExpatLife brand footer.",
      "A reusable checklist beats improvising from a single price sort."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — choosing on premium alone, ignoring network type, buying unused extras, misunderstanding eigen risico, missing the switch window, and treating comparison sites as award lists.",
      "Most costly mistakes come from skipping fit factors or treating rankings as advice."
    ),
    faq: visual(
      "faq",
      "Premium FAQ desk with six open cards — is basic the same, do I need extras, natura vs restitutie, eigen risico voluntary top-up, English support, and how to use Independer without crowning a winner.",
      "FAQ answers stay orientation-only — verify your own policy year with official and insurer sources."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium related-guides pathway from Health Insurance Comparison to Early Setup Health Insurance, Physiotherapy, Dentists, Maternity care, Prescriptions, Pharmacies and Healthcare for Children.",
      "Read the Early Setup guide for mandate basics, then sibling care guides for why extras may matter."
    ),
    healthcareHub: visual(
      "healthcare-hub",
      "Premium healthcare-hub constellation with Health Insurance Comparison at the centre and GP, Hospitals, Emergency, Mental Healthcare, Pharmacies, Prescriptions, Physiotherapy and Maternity as orbiting cards.",
      "This page owns comparison factors — the hub holds the wider healthcare cluster."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium explore-next pathway from comparison decisions to Early Setup insurance, physio, dental, maternity and children’s healthcare, with official source cards for Government.nl, Zorginstituut and Rijksoverheid.",
      "Continue with mandate basics or the care guide that matches your likely extras — then verify on official sources."
    ),
  },
  snapshotSignals: [
    {
      label: "Basic package",
      value: "Mandatory core",
      note: "Scope is largely standardised — compare service factors, not mythical coverage gaps.",
    },
    {
      label: "Supplementary",
      value: "Optional extras",
      note: "Dental, physio sessions, maternity extras and more — package-specific.",
    },
    {
      label: "Eigen risico",
      value: "~€385 in 2026",
      note: "Mandatory adult deductible orientation — voluntary top-up can raise it.",
    },
    {
      label: "Switch window",
      value: "Year-end focus",
      note: "Most switches aim for 1 January — verify current deadlines.",
    },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Dutch health insurance comparison for expats is less about crowning a “best insurer” and more about matching your likely care year to the right combination of basic policy type, optional supplementary cover, deductible level and service factors.",
    "The Early Setup Health Insurance guide covers who must insure, the four-month rule and what the basic package broadly includes. This cornerstone owns the comparison framework: decision factors, tradeoffs and what to verify before you click switch.",
    "Indicative euro figures on this page are labelled for 2026 planning conversations. They are not quotes. Always verify with your insurer and a current comparison tool for the policy year you are buying.",
  ],
  introHighlights: [
    "Framework for comparing — not an insurer ranking or award board.",
    "Links to the Early Setup guide for mandate and basic-package basics.",
    "Uses physio, dental, maternity and prescriptions as examples of why extras may matter.",
    "Treats comparison sites as checklists, not verdict engines.",
  ],
  safetyFileChecklist: [
    "BSN and current address details",
    "Current insurer and policy number (if switching)",
    "List of likely care needs for the next calendar year",
    "Preferred hospitals, dentists, physios or midwife practices",
    "English-support preference for app, chat or phone",
    "Budget range for premium vs out-of-pocket risk",
    "Notes on remaining eigen risico this year (if mid-year questions)",
    "Calendar reminder for the year-end switch window",
  ],
  introScenarios: [
    {
      situation: "First Dutch policy after arrival",
      approach: "Confirm mandate timing in the Early Setup guide, then use this framework to choose policy type and extras.",
      firstStep: "Open Health Insurance (early setup), then return here for compare factors.",
    },
    {
      situation: "Year-end switch consideration",
      approach: "Rebuild your need list, re-check network type and eigen risico, then verify filters on a comparison site.",
      firstStep: "Write three likely care needs for next year before sorting by premium.",
    },
    {
      situation: "Physio or dental year expected",
      approach: "Treat supplementary session or dental caps as first-class factors, not afterthoughts.",
      firstStep: "Open the Physiotherapy or Dentists guide for coverage context, then compare packages.",
    },
  ] satisfies ScenarioRow[],
  orientationFlowSteps: [
    "Confirm mandate and basic-package basics",
    "List likely care needs for the year",
    "Score insurer and deductible factors",
    "Verify on a comparison site, then confirm",
  ],
  snapshotTips: [
    "Sort by fit factors first — premium second.",
    "Basic cover scope is largely the same; service and network differ.",
    "Supplementary only helps if you will use the extras.",
    "Eigen risico changes risk, not what is insured in the basic package.",
  ],
  quickAnswer: {
    heading: "Quick answer: how to compare Dutch health insurance",
    summary:
      "Compare Dutch policies as a decision framework: separate mandatory basic cover from optional supplementary extras, then score insurer factors (network / natura vs restitutie, English support, claims), set your eigen risico tradeoff, and verify filters on a comparison site before switching — without treating any brand as “best for expats.”",
    bullets: [
      "Basic package (basisverzekering) is mandatory and largely standardised in what it covers.",
      "Supplementary (aanvullende) is optional — useful when dental, physio sessions or maternity extras are likely.",
      "Natura vs restitutie and contracted networks change how freely you choose providers.",
      "Mandatory adult eigen risico is about €385 in 2026; voluntary top-up can lower premium but raise first-euro risk.",
      "Use comparison sites to check filters and year — not as award ceremonies.",
    ],
    note: "For who must insure and the four-month rule, use the Early Setup Health Insurance guide. This page does not rank insurers.",
  },
  snapshotCards: [
    {
      title: "Basic package",
      body: "Mandatory core cover with largely standardised benefits — compare service and network, not imaginary coverage gaps.",
    },
    {
      title: "Supplementary extras",
      body: "Optional packages for dental, physio session caps, maternity extras and similar — only valuable if you will use them.",
    },
    {
      title: "Insurer factors",
      body: "Network contracts, natura vs restitutie, English support, claims UX and customer service shape day-to-day fit.",
    },
    {
      title: "Eigen risico",
      body: "Mandatory deductible plus optional voluntary excess — a premium vs out-of-pocket risk tradeoff for many adult pathways.",
    },
    {
      title: "Comparison sites",
      body: "Tools for filtering packages by year — check filters carefully; they are not official rankings.",
    },
    {
      title: "Switching timing",
      body: "Most people compare toward year-end for a 1 January start — verify current deadlines before you assume.",
    },
  ] satisfies TipCard[],
  howItWorks: {
    heading: "How a useful comparison works",
    intro:
      "A useful Dutch health insurance comparison starts with your likely care year, not with a sorted premium table. Premium matters, but fit factors decide whether a low price becomes an expensive surprise.",
    paragraphs: [
      "First separate what you must buy (basic) from what you might buy (supplementary). Then score how you want to access care: contracted networks, freedom to choose non-contracted providers, English support and claims friction.",
      "Only after those factors are clear should you use a comparison site to filter current-year packages. Confirm the final policy wording with the insurer before you rely on a switch.",
    ],
    flowLabels: [
      "Clarify needs",
      "Basic vs extras",
      "Score insurer factors",
      "Set eigen risico",
      "Verify on comparison sites",
      "Confirm & switch",
    ],
    timeline: [
      {
        phase: "1",
        title: "Clarify your year",
        detail: "List likely dental, physio, maternity, medicines, specialist or family needs for the next calendar year.",
      },
      {
        phase: "2",
        title: "Separate basic from extras",
        detail: "Keep mandate basics in the Early Setup guide; decide whether any aanvullende package is worth the premium.",
      },
      {
        phase: "3",
        title: "Score insurer factors",
        detail: "Network type, English support, claims and preferred providers matter more than brand familiarity.",
      },
      {
        phase: "4",
        title: "Set deductible tradeoff",
        detail: "Choose mandatory-only vs voluntary excess based on cash buffer and expected insured adult care.",
      },
      {
        phase: "5",
        title: "Verify, then switch",
        detail: "Use a comparison site as a checklist, confirm policy year details, then complete the switch before the deadline.",
      },
    ] satisfies TimelineStep[],
    decisionTips: [
      "Write needs before opening a comparison tab.",
      "If you cannot name a use for an extra, do not buy it by default.",
      "Check whether your preferred dentist, physio or hospital is contracted.",
      "English marketing pages are not the same as English claims support.",
    ],
    howToSteps: [
      {
        name: "Open the Early Setup guide for mandate basics",
        text: "Confirm who must insure, timing and what the basic package broadly includes before you compare.",
      },
      {
        name: "Build a one-page need list",
        text: "Note dental, physio, maternity extras, medicines, specialist care and language preferences for the next year.",
      },
      {
        name: "Choose network and deductible posture",
        text: "Decide natura vs restitutie preference and whether voluntary excess fits your cash buffer.",
      },
      {
        name: "Filter on a comparison site for the correct year",
        text: "Apply filters for extras and deductible, then open the shortlist policies — do not stop at the top row.",
      },
      {
        name: "Confirm with the insurer and switch on time",
        text: "Verify English support, network notes and claims process, then complete switching before the deadline.",
      },
    ] satisfies HowToStep[],
  },
  basicVsSupplementary: {
    heading: "Basic vs supplementary — decision factors",
    intro:
      "The basic package (basisverzekering) is mandatory and largely the same in benefit scope across insurers. Supplementary insurance (aanvullende verzekering) is optional and differs widely by package.",
    paragraphs: [
      "When people say “compare insurance,” they often mix two decisions: which basic policy type and insurer service factors to choose, and whether any supplementary package is worth the extra premium for their year.",
      "Supplementary is not automatically “more complete care.” It is a budget tool for specific gaps — adult dental, many physio sessions, some maternity extras and similar. If those gaps are unlikely, a leaner setup can be rational.",
    ],
    cards: [
      {
        title: "Basic (basisverzekering)",
        body: "Mandatory. Covers medically necessary care such as GP, many hospital pathways and prescribed medicines under Dutch rules. Scope is largely standardised.",
      },
      {
        title: "Supplementary (aanvullende)",
        body: "Optional. Packages add dental, physio session caps, glasses, maternity extras and more — terms differ by insurer and package tier.",
      },
      {
        title: "Premium vs utilisation",
        body: "An unused supplementary package is a pure cost. Estimate likely visits before buying higher tiers.",
      },
      {
        title: "Children and family notes",
        body: "Children often follow different rules for deductibles and some care pathways — verify family composition on the policy, not by assumption.",
      },
    ] satisfies TipCard[],
    points: [
      "Basic = mandatory standardised core; supplementary = optional package-specific extras.",
      "Do not buy extras “just in case” without a need hypothesis.",
      "Dental and physio are classic expat reasons to review aanvullende cover.",
      "Maternity pathways often sit in basic care — extras may still matter for kraamzorg contributions or related add-ons.",
    ],
    contrastRows: [
      {
        type: "Basic package",
        focus: "Mandatory medically necessary care",
        whenReferred: "Everyone who must insure under Dutch rules",
        note: "Compare service/network factors — not mythical benefit gaps.",
      },
      {
        type: "Supplementary dental",
        focus: "Adult dental budgets and orthodontics tiers",
        whenReferred: "Likely check-ups, fillings or orthodontics next year",
        note: "See Dentists guide for care context.",
      },
      {
        type: "Supplementary physio",
        focus: "Session caps (often in a wide band by package)",
        whenReferred: "Expected physiotherapy year",
        note: "See Physiotherapy guide for access and limits.",
      },
      {
        type: "Maternity-related extras",
        focus: "Own contributions / comfort add-ons",
        whenReferred: "Pregnancy or birth planning year",
        note: "See Maternity care guide — core midwife care is usually basic-oriented.",
      },
    ] satisfies ComparisonRow[],
    checklist: [
      "Listed likely uses for any aanvullende package",
      "Separated basic decision from extras decision",
      "Checked whether children change deductible assumptions",
      "Noted that basic benefit scope is largely standardised",
      "Opened sibling guides for dental / physio / maternity context where relevant",
    ],
    scenarios: [
      {
        situation: "Healthy year, no dental work planned",
        approach: "Basic-focused comparison may be enough; skip unused dental tiers.",
        firstStep: "Confirm you still want any minimal extras before filtering.",
      },
      {
        situation: "Physio every month is likely",
        approach: "Treat session caps and contracted physio networks as primary filters.",
        firstStep: "Open Physiotherapy guide, then filter aanvullende session bands.",
      },
      {
        situation: "Pregnancy expected next year",
        approach: "Learn basic maternity pathways first; then check which extras (if any) matter for your budget.",
        firstStep: "Open Maternity care guide, then return to compare factors.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Two decisions beat one vague “best package” search.",
      "If you cannot estimate utilisation, start lean and reassess next November.",
      "Package names are marketing — read session caps and exclusions.",
    ],
    crossLink: {
      href: HEALTH_INSURANCE_PATH,
      label: "Health Insurance (early setup)",
      description: "Mandate, four-month rule and basic-package overview — read this for basics, then compare here.",
    },
  },
  insurerFactors: {
    heading: "Insurer choice factors (without crowning a winner)",
    intro:
      "Insurers differ less in what the basic package covers and more in how you access care and get help. Score factors — do not crown a “best for expats” winner from marketing pages.",
    paragraphs: [
      "Natura policies typically emphasise contracted providers; restitutie-style policies generally offer more freedom with different reimbursement mechanics for non-contracted care. Exact labels and percentages vary by policy — verify the wording for your year.",
      "English support, mobile apps, claims speed and phone hours are real quality-of-life factors for newcomers. So is whether your preferred hospital, dentist or physiotherapist is contracted.",
    ],
    cards: [
      {
        title: "Network / natura vs restitutie",
        body: "Contracted networks can mean smoother billing; more open policies can mean more choice with different personal-share rules. Verify labels for your policy year.",
      },
      {
        title: "Preferred providers",
        body: "Check whether your GP-linked hospital, dentist, physio or midwife pathway sits inside contracted care for the policy you shortlist.",
      },
      {
        title: "English support",
        body: "Ask about English for app, chat, phone and claims letters — marketing English is not the same as operational English.",
      },
      {
        title: "Claims & service",
        body: "App quality, reimbursement timelines and human support hours matter when something goes wrong mid-year.",
      },
    ] satisfies TipCard[],
    points: [
      "No official expat award list appears on this page — by design.",
      "Network fit often beats brand familiarity.",
      "Service factors are legitimate comparison criteria.",
      "Always re-check contracts when you change preferred providers.",
    ],
    contrastRows: [
      {
        route: "Natura-oriented",
        when: "You are fine using contracted providers",
        how: "Usually smoother in-network billing",
        note: "Confirm your preferred clinics are contracted.",
      },
      {
        route: "Restitutie-oriented",
        when: "You want more provider freedom",
        how: "Reimbursement rules differ for non-contracted care",
        note: "Read personal-share percentages carefully.",
      },
      {
        route: "English support check",
        when: "You need operational English",
        how: "Test chat/phone samples or FAQ language before switching",
        note: "Do not rely on a translated homepage alone.",
      },
      {
        route: "Claims UX",
        when: "You expect frequent reimbursements",
        how: "Review app ratings and claim steps on the insurer site",
        note: "Still not a ranking — your workflow matters.",
      },
    ] satisfies ContactRouteRow[],
    checklist: [
      "Noted natura vs restitutie preference for your year",
      "Checked preferred hospital / dentist / physio contracts",
      "Verified English support channels you will actually use",
      "Skimmed claims process and app expectations",
      "Avoided “best insurer” listicles as decision inputs",
    ],
    scenarios: [
      {
        situation: "You already love a non-contracted specialist clinic",
        approach: "Prioritise policy types that reimburse non-contracted care acceptably.",
        firstStep: "Ask the clinic which insurers they commonly work with, then verify policy wording.",
      },
      {
        situation: "You want the simplest in-network path",
        approach: "A contracted-network-oriented policy may reduce surprise personal shares.",
        firstStep: "Confirm your local hospital and GP referral destinations are contracted.",
      },
      {
        situation: "You need English claims help",
        approach: "Treat support language as a hard filter, not a nice-to-have.",
        firstStep: "Contact shortlisted insurers with one English claims question before switching.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Fit > fame.",
      "One verified contracted-provider check beats three ranking articles.",
      "Save screenshots of key policy pages for the year you buy.",
    ],
  },
  eigenRisico: {
    heading: "Eigen risico and voluntary excess tradeoffs",
    intro:
      "For adults, Dutch basic insurance includes an annual deductible (eigen risico). You can often raise it with a voluntary excess (vrijwillig eigen risico) in exchange for a lower monthly premium.",
    paragraphs: [
      "For orientation in 2026, the mandatory adult eigen risico is about €385 per calendar year. Voluntary top-ups can raise the total deductible (commonly discussed up to about €885 combined) while lowering premium — exact steps and premium discounts vary by insurer and year.",
      "GP care is generally outside eigen risico. Many hospital, specialist, ambulance and prescribed-medicine pathways for adults can count toward it. Children under 18 usually do not pay the adult deductible for basic-insured care — verify family rules for your policy.",
    ],
    indicativeNote:
      "Indicative cost orientation for 2026 planning conversations — not a quote, premium promise or advice to raise or lower your deductible. Always verify current mandatory amounts, voluntary steps and premium effects with your insurer or a current comparison tool (for example Independer) for the policy year you are buying.",
    indicativeRows: [
      {
        item: "Mandatory adult eigen risico (2026)",
        indicative: "About €385 / year",
        whatYouPay: "First euros of many insured adult pathways",
        note: "GP usually outside — verify edge cases.",
      },
      {
        item: "With voluntary top-up (orientation)",
        indicative: "Up to about €885 total discussed",
        whatYouPay: "Higher first-euro risk if care happens",
        note: "Premium discount varies — not advice to top up.",
      },
      {
        item: "Children under 18 (typical orientation)",
        indicative: "Usually no adult deductible",
        whatYouPay: "Different financing rules may still apply",
        note: "Confirm on the family policy.",
      },
      {
        item: "Supplementary claims (typical orientation)",
        indicative: "Often outside eigen risico",
        whatYouPay: "Package premium + any package limits",
        note: "Dental/physio extras follow package terms.",
      },
    ],
    orientationCards: [
      {
        title: "Lower premium path",
        body: "Voluntary excess can reduce monthly cost if you have a cash buffer and expect limited deductible-touching care.",
      },
      {
        title: "Lower risk path",
        body: "Staying at the mandatory deductible limits first-euro shock when hospital, medicines or specialist care appear.",
      },
      {
        title: "Not a coverage change",
        body: "Raising eigen risico does not remove benefits from the basic package — it changes who pays first.",
      },
      {
        title: "Mid-year reality",
        body: "If deductible-touching care already happened, a high voluntary excess may not be the bargain it looked like in November.",
      },
    ] satisfies TipCard[],
    costFactors: [
      "Expected hospital, specialist or medicine use next year",
      "Cash buffer for a sudden deductible bill",
      "Whether you already used deductible this year (mid-year questions)",
      "Family composition and child rules",
      "Whether your main costs are actually supplementary (dental/physio) instead",
    ],
    checklist: [
      "Noted mandatory ~€385 (2026) as orientation only",
      "Decided whether voluntary excess fits your buffer",
      "Separated deductible risk from supplementary premium decisions",
      "Confirmed GP usually sits outside eigen risico",
      "Verified current steps with insurer / comparison tool",
    ],
    scenarios: [
      {
        situation: "Strong cash buffer, low expected hospital year",
        approach: "Some people consider voluntary excess for premium savings — still a personal risk choice.",
        firstStep: "Price the exact discount vs extra risk for your shortlist policies.",
      },
      {
        situation: "Likely specialist or medicine year",
        approach: "Mandatory-only deductible often reduces bill shock.",
        firstStep: "Estimate whether you would hit €385 quickly anyway.",
      },
      {
        situation: "Most costs will be dental / physio extras",
        approach: "Focus on aanvullende caps; deductible may be a secondary lever.",
        firstStep: "Map which costs are basic-billed vs supplementary-billed.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Eigen risico is a risk dial, not a quality dial.",
      "Never delay urgent care because of deductible uncertainty.",
      "Revisit the choice every November with a fresh need list.",
    ],
    crossLink: {
      href: HEALTH_INSURANCE_PATH,
      label: "Health Insurance (early setup)",
      description: "For deductible basics in the wider mandate story, start with the Early Setup guide, then apply the tradeoff here.",
    },
  },
  comparisonSites: {
    heading: "What to check on comparison sites",
    intro:
      "Comparison sites are useful filters — not award ceremonies. Treat the top row as a shortlist candidate, not a verdict. Independer is a commonly used Dutch comparison tool; other tools exist. None of them replace reading policy conditions.",
    paragraphs: [
      "Set the correct policy year before you sort. Apply filters for supplementary needs, eigen risico level and network type. Then open two or three policies and verify English support, contracted providers and exclusions yourself.",
      "Be wary of any page that presents fake awards, guaranteed “best for expats” crowns or outdated year data. This ExpatLife guide intentionally does not rank insurers.",
    ],
    cards: [
      {
        title: "Year and filters first",
        body: "Wrong year or missing filters produce confident nonsense. Set year, deductible and extras before sorting by premium.",
      },
      {
        title: "Open the policy, not only the row",
        body: "Session caps, waiting periods, network notes and exclusions live in details — not in the sort key.",
      },
      {
        title: "Independent verification",
        body: "Confirm critical claims with the insurer: English support, preferred providers and reimbursement examples.",
      },
      {
        title: "No award thinking",
        body: "Stars, badges and “winner” labels are marketing or editorial opinion — not official Dutch rankings for expats.",
      },
    ] satisfies TipCard[],
    points: [
      "Comparison sites = tools; you still own the decision.",
      "Independer framing here is methodological — not an exclusive endorsement.",
      "Always match filters to your need list.",
      "Save or export the shortlist you actually compared.",
    ],
    contrastRows: [
      {
        route: "Filter setup",
        when: "Before sorting results",
        how: "Set year, eigen risico, dental/physio/maternity extras",
        note: "Garbage filters → garbage shortlists.",
      },
      {
        route: "Shortlist review",
        when: "After first sort",
        how: "Open 2–3 policies end to end",
        note: "Ignore trophy badges.",
      },
      {
        route: "Insurer confirm",
        when: "Before switching",
        how: "Ask English + network + claims questions",
        note: "Get answers in writing when possible.",
      },
      {
        route: "Switch execution",
        when: "Inside the window",
        how: "Complete insurer switch / cancel correctly",
        note: "Verify start date is 1 January when intended.",
      },
    ] satisfies ContactRouteRow[],
    checklist: [
      "Correct policy year selected",
      "Eigen risico filter matches your tradeoff",
      "Supplementary filters match your need list",
      "Network / restitutie filters considered",
      "Opened full conditions for shortlist policies",
      "Verified critical points with insurer",
      "No reliance on fake awards or “best expat” crowns",
    ],
    scenarios: [
      {
        situation: "You only sorted by lowest premium",
        approach: "Restart with filters for network and extras — premium-only sorts hide fit risk.",
        firstStep: "Rebuild filters from your need list.",
      },
      {
        situation: "Site shows a “best” badge",
        approach: "Ignore the badge; score factors yourself.",
        firstStep: "Write your own scorecard with five fit criteria.",
      },
      {
        situation: "Details disagree with the summary row",
        approach: "Trust the policy conditions and insurer confirmation over the summary chip.",
        firstStep: "Screenshot both and ask the insurer which applies.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "A slow shortlist beats a fast wrong switch.",
      "If a claim sounds too neat (“best for all expats”), discard it.",
      "Keep mandate timing separate — see Early Setup for deadlines to insure after arrival.",
    ],
  },
  switching: {
    heading: "Policy year timing and switching",
    intro:
      "Most residents compare and switch toward the end of the calendar year so a new policy starts on 1 January. Exact deadlines and auto-renewal mechanics can change — verify for the year you are in.",
    paragraphs: [
      "Newcomers also face arrival-related deadlines to take out basic insurance. That mandate clock is covered in the Early Setup Health Insurance guide. Do not confuse “I must insure after arrival” with “I can casually switch mid-year whenever I want.”",
      "Mid-year changes are more limited. If you are unsure whether a life event allows a change, ask your current insurer and verify against official guidance rather than forum folklore.",
    ],
    cards: [
      {
        title: "Year-end comparison window",
        body: "November–December is the practical research season for many households aiming at a 1 January start.",
      },
      {
        title: "Switch deadline orientation",
        body: "Many switches must be completed by 31 December for a New Year start — confirm the current rule before you wait.",
      },
      {
        title: "Arrival mandate (separate)",
        body: "New residents have their own timeline to arrange basic insurance — see the Early Setup guide.",
      },
      {
        title: "Auto-renewal awareness",
        body: "If you do nothing, many policies continue — which is fine only if you still want the same fit.",
      },
    ] satisfies TipCard[],
    points: [
      "Year-end is the main comparison season for voluntary switches.",
      "Arrival deadlines are a different clock — Early Setup owns that story.",
      "Confirm cancellation / switch mechanics so you are never uninsured.",
      "Keep written confirmation of the new start date.",
    ],
    timeline: [
      {
        phase: "1",
        title: "October–November — need list",
        detail: "Rebuild your care-need list and gather preferred-provider notes.",
      },
      {
        phase: "2",
        title: "November–December — compare",
        detail: "Filter comparison sites, shortlist, and confirm English/network factors.",
      },
      {
        phase: "3",
        title: "By deadline — switch",
        detail: "Complete the switch with clear 1 January intent when that is your goal.",
      },
      {
        phase: "4",
        title: "January — verify",
        detail: "Check policy documents, apps, cards and remaining deductible display.",
      },
    ] satisfies TimelineStep[],
    checklist: [
      "Know whether you are in arrival-mandate or year-end-switch mode",
      "Marked the switch deadline on your calendar",
      "Confirmed how cancellation works if required",
      "Saved confirmation of the new policy start date",
      "Verified you will not have a coverage gap",
    ],
    scenarios: [
      {
        situation: "Arrived in spring, still uninsured",
        approach: "Prioritise mandate compliance via Early Setup — comparison polish comes second.",
        firstStep: "Open Health Insurance (early setup) immediately.",
      },
      {
        situation: "Happy with insurer, unsure about extras",
        approach: "You can often adjust supplementary choices within insurer rules — still verify deadlines.",
        firstStep: "Ask your insurer what can change for 1 January.",
      },
      {
        situation: "Missed the year-end window",
        approach: "Assume you may be locked until next cycle unless a permitted life event applies.",
        firstStep: "Ask the insurer what options remain; avoid unverified mid-year myths.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Calendar the deadline before you fall in love with a shortlist.",
      "Uninsured gaps are worse than a suboptimal package.",
      "January is for verification, not for discovering you never switched.",
    ],
    crossLink: {
      href: HEALTH_INSURANCE_PATH,
      label: "Health Insurance (early setup)",
      description: "Arrival mandate, four-month rule and basic overview — essential before year-end optimisation.",
    },
  },
  supplementaryWhy: {
    heading: "Why supplementary can matter (with deep links)",
    intro:
      "Supplementary insurance is optional — but several expat-heavy care topics sit partly outside a lean basic-only budget. Use sibling guides for how those services work; use this page only for the insurance-factor lens.",
    paragraphs: [
      "Physiotherapy session caps, adult dental care, some maternity-related own contributions and day-to-day medicine logistics are common reasons expats reopen the extras conversation. None of those sibling pages are rebuilt here.",
      "If your year is unlikely to touch those gaps, you may rationally skip heavy aanvullende tiers and revisit next November.",
    ],
    cards: [
      {
        title: "Physiotherapy",
        body: "Many adult physio sessions rely on aanvullende caps. Direct access still does not equal unlimited reimbursement.",
      },
      {
        title: "Dentists",
        body: "Adult routine dental care is a classic basic-package gap — supplementary dental tiers are a frequent comparison filter.",
      },
      {
        title: "Maternity care",
        body: "Core midwife/obstetric pathways are often basic-oriented; extras may still matter for certain contributions or comfort add-ons.",
      },
      {
        title: "Prescriptions & pharmacies",
        body: "Prescribed medicines often route through basic insurance and may touch adult eigen risico — extras rarely replace deductible literacy.",
      },
    ] satisfies TipCard[],
    points: [
      "Extras follow utilisation — not fear.",
      "Sibling guides explain care; this page explains compare factors.",
      "Medicines literacy is often a deductible issue more than an extras issue.",
      "Family years (maternity, children) deserve a fresh need list.",
    ],
    linkCards: [
      {
        label: "Physiotherapy",
        href: PHYSIOTHERAPY_NETHERLANDS_PATH,
        status: "live" as const,
        description: "Direct access, session limits and why aanvullende caps appear in comparisons.",
      },
      {
        label: "Dentists",
        href: DENTISTS_NETHERLANDS_PATH,
        status: "live" as const,
        description: "Adult dental gaps and how dental packages enter the comparison.",
      },
      {
        label: "Maternity care",
        href: MATERNITY_CARE_NETHERLANDS_PATH,
        status: "live" as const,
        description: "Midwife-first pathways and insurance orientation around birth care.",
      },
      {
        label: "Prescriptions",
        href: PRESCRIPTIONS_NETHERLANDS_PATH,
        status: "live" as const,
        description: "Recepten, herhaalrecept and insurance/deductible orientation for medicines.",
      },
      {
        label: "Pharmacies",
        href: PHARMACIES_NETHERLANDS_PATH,
        status: "live" as const,
        description: "Apotheek logistics that sit beside medicine coverage questions.",
      },
      {
        label: "Healthcare for Children",
        href: HEALTHCARE_FOR_CHILDREN_PATH,
        status: "live" as const,
        description: "Family pathways when children’s care shapes the household need list.",
      },
    ] satisfies ComparisonLink[],
    checklist: [
      "Mapped which sibling care topics apply to your year",
      "Separated care-how questions (sibling guides) from compare-factor questions (this page)",
      "Decided whether any aanvullende tier has a clear use",
      "Noted medicines / eigen risico separately from dental/physio extras",
    ],
    scenarios: [
      {
        situation: "Desk-job back pain every winter",
        approach: "Physio session caps become a primary filter.",
        firstStep: "Open Physiotherapy, estimate sessions, then compare packages.",
      },
      {
        situation: "Adult dental catch-up year",
        approach: "Dental supplementary tiers dominate the extras decision.",
        firstStep: "Open Dentists, then filter dental coverage bands.",
      },
      {
        situation: "Pregnancy + new medicines",
        approach: "Read Maternity and Prescriptions for care mechanics; compare only the insurance levers here.",
        firstStep: "Build a combined need list, then shortlist policies.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Deep links beat duplicated encyclopedias.",
      "If a sibling guide is irrelevant to your year, skip that filter.",
      "Reassess extras annually — utilisation changes.",
    ],
  },
  differences: {
    heading: "Common differences expats notice",
    intro:
      "Coming from systems with employer HMOs, private hospital networks or dental-in-basic norms, Dutch comparison culture can feel unfamiliar. These cards capture the usual surprises — without ranking insurers.",
    cards: [
      {
        title: "Basic cover looks “the same”",
        body: "Benefit scope is largely standardised — newcomers sometimes over-search for coverage differences that barely exist.",
        advice: "Compare network, service, extras and deductible instead of hunting mythical basic gaps.",
      },
      {
        title: "Premium is not the whole story",
        body: "A cheap policy with the wrong network or unused extras can cost more in friction and waste.",
        advice: "Score fit factors before celebrating the lowest monthly price.",
      },
      {
        title: "Dental is often extra",
        body: "Adult routine dentistry frequently sits outside basic cover — a shock for many expats.",
        advice: "Use the Dentists guide + supplementary filters when dental work is likely.",
      },
      {
        title: "Eigen risico is normal",
        body: "Annual deductibles are a standard adult feature, not a scam.",
        advice: "Budget for it and decide consciously on voluntary top-ups.",
      },
      {
        title: "English varies by insurer",
        body: "Some processes are smooth in English; others expect Dutch for claims letters.",
        advice: "Test support channels before you switch.",
      },
      {
        title: "No official best-expat crown",
        body: "Listicles and badges are not Dutch government rankings.",
        advice: "Use this framework and verify with official + insurer sources.",
      },
    ] satisfies MistakeCard[],
    tips: [
      "Translate your home-country assumptions into Dutch factors explicitly.",
      "Keep Early Setup open for mandate questions while you compare.",
      "Write decisions down — future-you will thank you next November.",
    ],
  },
  preparation: {
    heading: "Comparison checklist",
    paragraphs: [
      "Use this checklist when you compare or switch. It is a process aid — not a recommendation to buy any insurer or package.",
      "Complete the need list and Early Setup basics before you touch premium sorting.",
    ],
    checklist: [
      "Read Early Setup guide for mandate / basic overview",
      "Wrote likely care needs for the next calendar year",
      "Decided basic policy posture (network / natura vs restitutie preference)",
      "Decided whether any supplementary tier has a clear use",
      "Chose eigen risico posture (mandatory-only vs voluntary top-up)",
      "Checked preferred providers against contracted networks",
      "Verified English support channels you will use",
      "Set correct year + filters on a comparison site",
      "Opened full conditions for 2–3 shortlist policies",
      "Confirmed critical points with the insurer",
      "Calendarised the switch deadline",
      "Saved written confirmation of the new start date",
    ],
    roleCards: [
      { role: "You", focus: "Need list, budget buffer and final switch decision." },
      { role: "Comparison site", focus: "Filtering and shortlisting for the correct policy year." },
      { role: "Insurer", focus: "Policy wording, English support, network and claims confirmation." },
      { role: "Early Setup guide", focus: "Mandate, timing and basic-package literacy." },
      { role: "Sibling care guides", focus: "Whether dental, physio, maternity or medicines shape extras." },
      { role: "Official sources", focus: "Government and regulator orientation — not product sales." },
    ] satisfies RoleCard[],
    tips: [
      "Check off items in order — skipping to premium sorts causes rework.",
      "Keep screenshots of the year and filters you used.",
      "If anything conflicts, trust insurer confirmation + official guidance over blogs.",
    ],
  },
  mistakes: {
    heading: "Common expat comparison mistakes",
    intro:
      "These mistakes are expensive mainly because they skip fit factors or confuse mandate basics with optimisation. Fixes stay practical and non-alarmist.",
    cards: [
      {
        title: "Choosing on premium alone",
        body: "Lowest monthly price can hide network friction or useless extras.",
        advice: "Score five fit factors before sorting by premium.",
      },
      {
        title: "Ignoring natura vs restitutie",
        body: "Provider freedom and personal-share rules differ by policy type.",
        advice: "Decide your freedom needs, then filter.",
      },
      {
        title: "Buying unused extras",
        body: "High dental or physio tiers with zero planned use waste premium.",
        advice: "Require a utilisation hypothesis for every extra.",
      },
      {
        title: "Misreading eigen risico",
        body: "People confuse deductible with “worse coverage.”",
        advice: "Treat it as a who-pays-first dial and budget accordingly.",
      },
      {
        title: "Missing the switch window",
        body: "Great research after the deadline does not help.",
        advice: "Calendar the deadline first.",
      },
      {
        title: "Treating rankings as advice",
        body: "“Best for expats” listicles are not official guidance.",
        advice: "Use this framework; verify with insurer and Government.nl.",
      },
    ] satisfies MistakeCard[],
    adaptationTips: [
      "Needs → factors → filters → confirm → switch.",
      "Keep Early Setup and this comparison page in different browser tabs.",
      "Revisit annually; do not copy last year’s package blindly.",
    ],
  },
  faq: [
    {
      q: "Is the basic health insurance package the same across Dutch insurers?",
      a: "The basic package is largely standardised in what it covers. Insurers still differ in policy type (for example network-oriented versus more open reimbursement styles), service, apps, English support and contracted providers. Compare those factors rather than hunting for large mythical gaps in basic benefits.",
    },
    {
      q: "Do I need supplementary insurance?",
      a: "Not automatically. Supplementary packages help when you expect gaps such as adult dental care or many physiotherapy sessions. If you cannot name a likely use, a leaner setup can be rational — revisit next year. See Physiotherapy, Dentists and Maternity care guides for care-context examples.",
    },
    {
      q: "What is the difference between natura and restitutie?",
      a: "Broadly, natura-oriented policies emphasise contracted providers with smoother in-network billing, while restitutie-oriented policies generally allow more provider freedom with different reimbursement rules for non-contracted care. Labels and percentages vary — always read the policy for your year.",
    },
    {
      q: "What is eigen risico and should I raise it?",
      a: "Eigen risico is the adult annual deductible for many basic-insured pathways. For orientation in 2026 the mandatory amount is about €385; voluntary top-ups can raise it while lowering premium. Whether to raise it depends on your cash buffer and expected care — this page does not advise either choice. Verify current steps with your insurer.",
    },
    {
      q: "Can I rely on Independer or other comparison sites?",
      a: "Use them as filtering tools for the correct policy year. They are not official rankings and not a substitute for reading conditions or confirming English support and networks with the insurer. This guide does not crown a winner from any comparison site.",
    },
    {
      q: "When can I switch health insurance?",
      a: "Most voluntary switches aim for a 1 January start and must meet year-end deadlines. Newcomers also have arrival-related mandate timing covered in the Early Setup Health Insurance guide. Mid-year changes are more limited — ask your insurer rather than relying on forum advice.",
    },
    {
      q: "Which insurer is best for expats?",
      a: "There is no official “best for expats” insurer crown on ExpatLife. The useful question is which combination of network type, extras, deductible and English support fits your year. Score those factors; ignore fake awards.",
    },
    {
      q: "How does this page relate to the Early Setup Health Insurance guide?",
      a: "Early Setup owns who must insure, the four-month rule and basic-package overview. This cornerstone owns comparison decision factors. Read Early Setup first if you are new, then use this framework to compare.",
    },
  ],
  faqQuickReference: [
    "Basic benefits ≈ standardised; service/network differ.",
    "Supplementary = optional utilisation tool.",
    "Eigen risico 2026 orientation ≈ €385 mandatory for adults.",
    "Comparison sites = filters, not trophies.",
    "No best-for-expats ranking here.",
    "Early Setup = mandate; this page = compare factors.",
  ],
  howToSchema: {
    name: "Comparing Health Insurance in the Netherlands",
    description:
      "Step-by-step orientation for expats on comparing Dutch health insurance: clarifying needs, separating basic from supplementary, scoring insurer factors, setting eigen risico tradeoffs, verifying comparison-site filters and confirming before switching.",
    anchor: "#how-it-works",
  },
  relatedGuidesTips: [
    "Mandate and basics → Health Insurance (early setup).",
    "Physio session logic → Physiotherapy.",
    "Adult dental gaps → Dentists.",
    "Birth pathways → Maternity care.",
    "Medicines billing → Prescriptions / Pharmacies.",
    "Family care → Healthcare for Children.",
  ],
  relatedGuides: [
    {
      label: "Health Insurance (early setup)",
      href: HEALTH_INSURANCE_PATH,
      status: "live",
      description: "Who must insure, four-month rule and basic-package overview.",
    },
    {
      label: "Physiotherapy",
      href: PHYSIOTHERAPY_NETHERLANDS_PATH,
      status: "live",
      description: "Direct access and why session caps appear in comparisons.",
    },
    {
      label: "Dentists",
      href: DENTISTS_NETHERLANDS_PATH,
      status: "live",
      description: "Adult dental gaps and supplementary dental context.",
    },
    {
      label: "Maternity care",
      href: MATERNITY_CARE_NETHERLANDS_PATH,
      status: "live",
      description: "Midwife-first pathways and insurance orientation around birth.",
    },
    {
      label: "Prescriptions",
      href: PRESCRIPTIONS_NETHERLANDS_PATH,
      status: "live",
      description: "Recepten and insurance/deductible orientation for medicines.",
    },
    {
      label: "Pharmacies",
      href: PHARMACIES_NETHERLANDS_PATH,
      status: "live",
      description: "Apotheek logistics beside coverage questions.",
    },
    {
      label: "Healthcare for Children",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      status: "live",
      description: "Family pathways that reshape household need lists.",
    },
    {
      label: "General Practitioner (GP)",
      href: GP_NETHERLANDS_PATH,
      status: "live",
      description: "Registration and primary care that sits outside many deductible surprises.",
    },
    {
      label: "Mental Healthcare",
      href: MENTAL_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "GGZ pathways where adult deductible literacy often matters.",
    },
    {
      label: "Hospitals",
      href: HOSPITALS_NETHERLANDS_PATH,
      status: "live",
      description: "Secondary care and contracted-hospital orientation.",
    },
    {
      label: "Health insurance (services directory)",
      href: HEALTH_INSURANCE_SERVICES_PATH,
      status: "live",
      description: "Zorgverzekeraar provider directory — how to choose insurers beside this comparison framework.",
    },
    {
      label: "Insurance brokers",
      href: INSURANCE_BROKERS_PATH,
      status: "live",
      description: "Independent adviseurs for non-life packages — not a substitute for basic health cover shopping.",
    },
  ] satisfies ComparisonLink[],
  healthcareHubTips: [
    "This page owns comparison factors inside the healthcare cluster.",
    "Early Setup remains the mandate/basics door.",
    "Operational care guides stay separate — deep-link, do not duplicate.",
  ],
  healthcareHubCards: [
    {
      label: "Health Insurance Comparison",
      href: HEALTH_INSURANCE_COMPARISON_NETHERLANDS_PATH,
      status: "live",
      description: "You are here — decision framework for comparing policies.",
    },
    {
      label: "Health Insurance (early setup)",
      href: HEALTH_INSURANCE_PATH,
      status: "live",
      description: "Mandate, timing and basic-package overview.",
    },
    {
      label: "Health insurance (services)",
      href: HEALTH_INSURANCE_SERVICES_PATH,
      status: "live",
      description: "Insurer provider directory for basic and aanvullend orientation.",
    },
    {
      label: "Insurance brokers",
      href: INSURANCE_BROKERS_PATH,
      status: "live",
      description: "Independent brokers for liability, home and non-life packages.",
    },
    {
      label: "GP",
      href: GP_NETHERLANDS_PATH,
      status: "live",
      description: "Primary care door and referrals.",
    },
    {
      label: "Hospitals",
      href: HOSPITALS_NETHERLANDS_PATH,
      status: "live",
      description: "Secondary care and specialist pathways.",
    },
    {
      label: "Emergency Healthcare",
      href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "112, HAP and SEH orientation.",
    },
    {
      label: "Mental Healthcare",
      href: MENTAL_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "GP, POH-GGZ and GGZ pathways.",
    },
    {
      label: "Pharmacies",
      href: PHARMACIES_NETHERLANDS_PATH,
      status: "live",
      description: "Apotheek finding and services.",
    },
    {
      label: "Prescriptions",
      href: PRESCRIPTIONS_NETHERLANDS_PATH,
      status: "live",
      description: "Recepten and medication lists.",
    },
    {
      label: "Physiotherapy",
      href: PHYSIOTHERAPY_NETHERLANDS_PATH,
      status: "live",
      description: "Fysiotherapie access and limits.",
    },
    {
      label: "Maternity care",
      href: MATERNITY_CARE_NETHERLANDS_PATH,
      status: "live",
      description: "Verloskundige and birth pathways.",
    },
    {
      label: "Dentists",
      href: DENTISTS_NETHERLANDS_PATH,
      status: "live",
      description: "Dental care and insurance gaps.",
    },
    {
      label: "Healthcare for Children",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      status: "live",
      description: "Family healthcare cornerstone.",
    },
  ] satisfies ComparisonLink[],
  exploreNextCards: [
    {
      label: "Health Insurance (early setup)",
      href: HEALTH_INSURANCE_PATH,
      status: "live",
      description: "Still unsure about mandate or basic package? Start here.",
    },
    {
      label: "Health insurance (services)",
      href: HEALTH_INSURANCE_SERVICES_PATH,
      status: "live",
      description: "Browse insurer directory after you know your comparison criteria.",
    },
    {
      label: "Insurance brokers",
      href: INSURANCE_BROKERS_PATH,
      status: "live",
      description: "Need help with liability or home packages beside health cover?",
    },
    {
      label: "Physiotherapy",
      href: PHYSIOTHERAPY_NETHERLANDS_PATH,
      status: "live",
      description: "Estimate session needs before buying physio extras.",
    },
    {
      label: "Dentists",
      href: DENTISTS_NETHERLANDS_PATH,
      status: "live",
      description: "Map adult dental work before choosing dental tiers.",
    },
    {
      label: "Maternity care",
      href: MATERNITY_CARE_NETHERLANDS_PATH,
      status: "live",
      description: "Understand birth pathways before maternity-related extras.",
    },
    {
      label: "Healthcare for Children",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      status: "live",
      description: "Family years change the household need list.",
    },
    {
      label: "Prescriptions",
      href: PRESCRIPTIONS_NETHERLANDS_PATH,
      status: "live",
      description: "Medicine logistics and deductible orientation.",
    },
  ] satisfies ComparisonLink[],
  exploreNextTips: [
    "New arrival → Early Setup first.",
    "Physio year → Physiotherapy then extras filters.",
    "Dental catch-up → Dentists then dental tiers.",
    "Pregnancy year → Maternity care then compare.",
    "Family focus → Healthcare for Children.",
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: [
        "Know mandate and basic-package basics.",
        "List likely care needs for the year.",
        "Separate premium from risk factors.",
        "Prepare a reusable comparison checklist.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Basic package.",
        "Supplementary extras.",
        "Insurer factors.",
        "Eigen risico.",
        "Comparison-site checks.",
        "Switching timing.",
      ],
    },
    howItWorks: {
      title: "From the visual — comparison flow",
      items: [
        "Clarify needs.",
        "Separate basic from extras.",
        "Score insurer factors.",
        "Set eigen risico.",
        "Verify on comparison sites.",
        "Confirm and switch.",
      ],
    },
    basicVsSupplementary: {
      title: "From the visual — two decisions",
      items: [
        "Basic = mandatory standardised core.",
        "Supplementary = optional package-specific extras.",
        "Utilisation beats fear-buying.",
        "Verify with insurer for your year.",
      ],
    },
    insurerFactors: {
      title: "From the visual — fit factors",
      items: [
        "Network / natura vs restitutie.",
        "Preferred providers.",
        "English support channels.",
        "Claims and service UX.",
      ],
    },
    eigenRisico: {
      title: "From the visual — deductible dial",
      items: [
        "Mandatory ~€385 orientation for 2026.",
        "Voluntary top-up raises first-euro risk.",
        "GP usually outside deductible.",
        "Verify steps before choosing.",
      ],
    },
    comparisonSites: {
      title: "From the visual — site checklist",
      items: [
        "Set correct year and filters.",
        "Open full policy details.",
        "Confirm with insurer.",
        "Ignore fake awards.",
      ],
    },
    switching: {
      title: "From the visual — timing",
      items: [
        "Year-end research window.",
        "Deadline for 1 January starts.",
        "Arrival mandate is a separate clock.",
        "Verify you are never uninsured.",
      ],
    },
    supplementaryWhy: {
      title: "From the visual — why extras appear",
      items: [
        "Physio session caps.",
        "Adult dental gaps.",
        "Maternity-related extras.",
        "Medicines / deductible literacy.",
      ],
    },
    differences: {
      title: "From the visual — expat surprises",
      items: [
        "Basic cover looks similar across insurers.",
        "Premium is not the whole story.",
        "Dental often needs extras.",
        "No official best-expat crown.",
      ],
    },
    checklist: {
      title: "From the visual — checklist spine",
      items: [
        "Need list first.",
        "Factors before filters.",
        "Confirm before switch.",
        "Save start-date proof.",
      ],
    },
    mistakes: {
      title: "From the visual — avoid these",
      items: [
        "Premium-only choosing.",
        "Ignoring network type.",
        "Unused extras.",
        "Ranking-as-advice thinking.",
      ],
    },
    faq: {
      title: "From the visual — FAQ themes",
      items: [
        "Basic sameness.",
        "Do I need extras?",
        "Natura vs restitutie.",
        "Eigen risico tradeoffs.",
        "Comparison-site use.",
        "No best-insurer crown.",
      ],
    },
    relatedGuides: {
      title: "From the visual — read next",
      items: [
        "Early Setup for mandate basics.",
        "Physio / Dentists / Maternity for extras context.",
        "Prescriptions / Pharmacies for medicines.",
        "Children’s healthcare for family years.",
      ],
    },
    healthcareHub: {
      title: "From the visual — cluster map",
      items: [
        "Comparison owns decision factors.",
        "Operational guides stay deep-linked.",
        "GP and hospitals remain core doors.",
        "Emergency and mental health stay available.",
      ],
    },
    exploreNext: {
      title: "From the visual — next step",
      items: [
        "New arrival → Early Setup.",
        "Physio year → Physiotherapy.",
        "Dental year → Dentists.",
        "Verify on official sources.",
      ],
    },
  },
  sourceUsageTips: [
    "Use Government.nl for official health insurance obligations and covered-care orientation.",
    "Use Rijksoverheid zorgverzekering pages for Dutch-language official explanations.",
    "Use Zorginstituut Nederland for insured-package orientation — not product sales.",
    "Use NZa for regulator and patient-rights orientation.",
    "Use your insurer and a current comparison tool for premiums, networks and deductible steps for the year you buy.",
  ],
  officialSources: [
    {
      label: "Government.nl — Health insurance",
      href: "https://www.government.nl/topics/health-insurance",
      description: "Official orientation on Dutch health insurance obligations and covered care.",
    },
    {
      label: "Rijksoverheid — Zorgverzekering",
      href: "https://www.rijksoverheid.nl/onderwerpen/zorgverzekering",
      description: "Dutch government topic pages on health insurance rules and organisation.",
    },
    {
      label: "Zorginstituut Nederland",
      href: "https://www.zorginstituutnederland.nl/",
      description: "Orientation on the insured package and healthcare system context.",
    },
    {
      label: "NZa — Dutch Healthcare Authority",
      href: "https://www.nza.nl/english",
      description: "Regulator information on healthcare rules and patient-facing rights orientation.",
    },
    {
      label: "Independer — compare health insurance",
      href: "https://www.independer.nl/zorgverzekering/intro.aspx",
      description:
        "Example comparison tool for filtering current-year packages — not an official ranking and not a substitute for policy conditions.",
    },
  ],
  officialSourcesNote:
    "General information only — not insurance, financial or medical advice, and not an insurer ranking. Rules, premiums, deductible amounts and package terms change by year. Verify your own situation with official sources, your insurer and a current comparison tool. In a medical emergency, call 112.",
} as const;
