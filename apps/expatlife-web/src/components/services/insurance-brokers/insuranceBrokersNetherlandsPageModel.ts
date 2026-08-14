import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

/** Services directory — independent insurance brokers / adviseurs / tussenpersonen for expats. */
export const INSURANCE_BROKERS_PATH = "/netherlands/services/insurance-brokers/" as const;
export const INSURANCE_BROKERS_NETHERLANDS_PATH = INSURANCE_BROKERS_PATH;

export const INSURANCE_PROVIDERS_PATH = "/netherlands/services/insurance-providers/" as const;
export const HEALTH_INSURANCE_SERVICES_PATH = "/netherlands/services/health-insurance/" as const;
export const HEALTH_INSURANCE_COMPARISON_PATH =
  "/netherlands/health/health-insurance-comparison-netherlands/" as const;
export const FINANCIAL_ADVISORS_PATH = "/netherlands/services/financial-advisors/" as const;
export const TAX_ADVISORS_PATH = "/netherlands/services/tax-advisors/" as const;
export const NOTARIES_PATH = "/netherlands/services/notaries/" as const;
export const MORTGAGE_ADVISORS_PATH = "/netherlands/services/mortgage-advisors/" as const;
export const SERVICES_HUB_PATH = "/netherlands/services/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;
export const CAR_INSURANCE_PATH = "/netherlands/living/car-insurance-netherlands/" as const;
export const BUYING_HOUSE_NETHERLANDS_PATH = "/netherlands/housing/buying-a-house-netherlands/" as const;
export const ZZP_NETHERLANDS_PATH = "/netherlands/business/zzp-netherlands/" as const;

export const INSURANCE_BROKERS_AFFILIATE_PLACEMENT_ID =
  "nl-services-insurance-brokers-support-providers" as const;

export type InsuranceBrokerProvider = {
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
  brokerType:
    | "Independent multi-carrier broker"
    | "Tied / bank-linked advisor"
    | "Commercial & business broker"
    | "Comparison platform"
    | "Home & liability package specialist"
    | "Life & disability intermediary"
    | "Expat-oriented intermediary"
    | "AFM register discovery";
  citiesServed: string[];
  featured: boolean;
  verificationNote: string;
};

export type InsuranceBrokerLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

const INFOGRAPHIC_VERSION = "premium-v1";
const VISUAL_PREFIX = "netherlands-services-insurance-brokers";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const insuranceBrokersNetherlandsPage = {
  slug: "insurance-brokers",
  path: INSURANCE_BROKERS_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(INSURANCE_BROKERS_PATH) ?? "2026-11-01",
  affiliatePlacementId: INSURANCE_BROKERS_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "Insurance Brokers in the Netherlands for Expats | Adviseurs Guide",
    description:
      "Understand Dutch insurance brokers (adviseurs / tussenpersonen): independent vs tied agents, how they help compare liability, home, travel, life and business cover, and soft discovery — not a ranking or insurance advice.",
    keywords: [
      "insurance brokers netherlands",
      "verzekeringsadviseur netherlands",
      "tussenpersoon insurance",
      "independent insurance broker netherlands",
      "expat insurance broker",
      "compare insurance netherlands broker",
      "AFM insurance advisor",
      "liability insurance broker netherlands",
      "home insurance adviseur",
      "insurance intermediary netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Services · Insurance brokers",
    pageTitle: "Insurance Brokers in the Netherlands for Expats",
    subtitle:
      "Compare Dutch insurance intermediaries who help you shortlist non-life and life packages — liability (AVP), home, travel, disability, business and more. This directory covers brokers and adviseurs, not insurer product catalogues or basic zorgverzekering shopping alone.",
    primaryCta: { label: "Browse Broker Directory", href: "#directory" },
    secondaryCta: { label: "Broker vs Insurer vs Health Page", href: "#differentiate" },
    chips: ["Independent vs tied", "Package comparison", "AFM orientation", "Soft discovery"],
    image: {
      src: "/images/heroes/netherlands-services-insurance-brokers-hero-premium-v1.png",
      alt: "Photorealistic editorial scene of an expat couple reviewing Dutch insurance policy folders with an independent broker at a bright canal-side advisory desk, comparison sheets and laptop open.",
    },
  },
  visuals: {
    role: visual(
      "role",
      "Infographic showing what a Dutch insurance broker does: gather needs, compare carriers, explain cover gaps, place policies and support claims handoff.",
      "Brokers advise and place cover — carriers underwrite the policy. Confirm independence and fee model before you share documents."
    ),
    differentiate: visual(
      "differentiate",
      "Infographic differentiating insurance brokers, insurance providers, health-insurance directories and financial advisors for expats.",
      "Pick the right page first: brokers compare and advise; providers are carriers; health insurance owns zorgverzekering shopping."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of six facts about Dutch insurance brokers for expats.",
      "Use this snapshot before choosing an adviseur: independence, AFM context, fee model and product scope differ."
    ),
    brokerServices: visual(
      "broker-services",
      "Infographic of broker-supported covers: liability AVP, home, contents, travel, life, disability and business packages.",
      "Service mix varies by intermediary — basic health insurance has its own dedicated directory page."
    ),
    brokerTypes: visual(
      "broker-types",
      "Infographic comparing independent multi-carrier brokers, tied agents, commercial brokers, comparison platforms and expat-oriented intermediaries.",
      "Match the broker model to your need — independence and product access are not the same everywhere."
    ),
    whenToUse: visual(
      "when-to-use",
      "Infographic decision map: when to use a broker vs a comparison site vs going direct to an insurer.",
      "Simple standard products often suit comparison sites; complex households and business risks often need broker advice."
    ),
    credentials: visual(
      "credentials",
      "Infographic explaining AFM registration orientation, independence questions, fee transparency and what to verify before instructing a broker.",
      "Ask how the adviseur is paid and whether they can place with multiple carriers — then verify publicly where possible."
    ),
    challenges: visual(
      "challenges",
      "Infographic of common expat challenges with Dutch insurance brokers: tied advice, English policy wording, overlapping covers and health-page confusion.",
      "Clarify independence, language and which products sit outside the broker’s panel before you buy."
    ),
    directory: visual(
      "directory",
      "Infographic showing a neutral insurance-broker directory workflow: shortlist, compare independence, verify AFM context and decide.",
      "Provider discovery should lead to verification — not blind trust in a ranking."
    ),
    comparisonMatrix: visual(
      "comparison-matrix",
      "Infographic comparison matrix for insurance brokers: independence, product focus, languages, city coverage and expat support.",
      "Compare intermediaries by fit and transparency before you compare marketing claims."
    ),
    questions: visual(
      "questions",
      "Infographic of questions expats should ask Dutch insurance brokers before instructing them.",
      "Good questions reveal independence, fee model, English support, claims help and product panel limits."
    ),
    faq: visual(
      "faq",
      "Infographic decision map of common insurance-broker FAQ topics: vs insurer, vs comparison site, AFM, health insurance and red flags.",
      "FAQ answers should help you pick the next verification step — not replace personal insurance advice."
    ),
    leadCta: visual(
      "lead-cta",
      "Infographic showing how to shortlist insurance brokers: define covers needed, check independence, ask fees and align with health and provider pages.",
      "Turn broker discovery into a structured shortlist before you sign anything."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic showing official sources for insurance intermediary orientation: AFM, ACM, government insurance topics and consumer finance context.",
      "Verify consumer and registration orientation with official sources — not marketing alone."
    ),
    servicesEcosystem: visual(
      "services-ecosystem",
      "Infographic showing services around insurance decisions: brokers, providers, health insurance, financial advisors, tax advisors and notaries.",
      "Brokers are one piece of the wider money and household-protection ecosystem."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic showing a research path after comparing brokers: insurance providers, health insurance, car insurance and financial advisors.",
      "Continue from broker discovery into carrier landscape, zorgverzekering and related living guides."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting insurance-broker research to health insurance, providers, financial advisors, tax advisors and Dutch cities.",
      "Broker shortlists connect naturally into health cover, carrier research and long-term planning."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#differentiate", label: "Not the same as…" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#broker-role", label: "What brokers do" },
    { href: "#broker-types", label: "Broker types" },
    { href: "#when-to-use", label: "When to use" },
    { href: "#credentials", label: "Credentials" },
    { href: "#challenges", label: "Challenges" },
    { href: "#directory", label: "Directory" },
    { href: "#comparison", label: "Compare" },
    { href: "#affiliate-providers", label: "Providers" },
    { href: "#questions", label: "Questions" },
    { href: "#lead-cta", label: "Get help" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
  ],
  intro: {
    heading: "Why Expats Use Dutch Insurance Brokers (Adviseurs / Tussenpersonen)",
    paragraphs: [
      "In the Netherlands, insurance brokers and adviseurs (often called tussenpersonen) help you compare and arrange packages across carriers — especially non-life covers such as personal liability (AVP), home and contents, travel, legal expenses, and sometimes life, disability or business insurance.",
      "This page is a services directory for independent comparison and advice intermediaries. It owns broker-advice discovery. Insurance providers owns the carrier landscape; Health insurance owns basic zorgverzekering shopping — those topics get clear cross-links only here.",
      "Inclusion here is informational soft discovery, not a ranking. No directory can guarantee cover outcomes, premiums or English support. Confirm independence, fees, AFM context and product panel directly with the intermediary before you buy.",
    ],
    links: [
      { label: "Insurance providers", href: INSURANCE_PROVIDERS_PATH },
      { label: "Health insurance", href: HEALTH_INSURANCE_SERVICES_PATH },
      { label: "Health insurance comparison", href: HEALTH_INSURANCE_COMPARISON_PATH },
      { label: "Car insurance guide", href: CAR_INSURANCE_PATH },
      { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH },
    ],
  },
  differentiateCards: [
    {
      title: "Insurance brokers (this page)",
      body: "Independent or advisory intermediaries who help compare and place packages across carriers — adviseurs / tussenpersonen.",
      href: INSURANCE_BROKERS_PATH,
      status: "live" as const,
    },
    {
      title: "Insurance providers",
      body: "Carriers and product brands that underwrite policies — the landscape of insurers, not broker advice.",
      href: INSURANCE_PROVIDERS_PATH,
      status: "live" as const,
    },
    {
      title: "Health insurance directory",
      body: "Basic Dutch zorgverzekering shopping and provider orientation — mandatory health cover has its own page.",
      href: HEALTH_INSURANCE_SERVICES_PATH,
      status: "live" as const,
    },
    {
      title: "Financial advisors",
      body: "Pensions, investments and long-term planning — overlapping money questions, but not insurance brokerage.",
      href: FINANCIAL_ADVISORS_PATH,
      status: "live" as const,
    },
  ],
  snapshotCards: [
    { label: "Core role", value: "Compare & advise", note: "Brokers help shortlist packages; insurers underwrite the risk." },
    { label: "Independence", value: "Ask first", note: "Independent multi-carrier vs tied / bank-linked advice differs." },
    { label: "Common covers", value: "AVP + home", note: "Liability and household packages are frequent expat starting points." },
    { label: "Health cover", value: "Separate page", note: "Basic zorgverzekering belongs on the Health insurance directory." },
    { label: "Regulation", value: "AFM context", note: "Ask about registration and how advice is paid for." },
    { label: "Guarantee", value: "None", note: "No directory ranks brokers or guarantees premiums or claims outcomes." },
  ],
  brokerServices: [
    {
      title: "Personal liability (AVP)",
      body: "Orientation on household liability cover many Dutch households carry — limits, household members and exclusions matter.",
    },
    {
      title: "Home & contents",
      body: "Building vs contents packages for owners and renters, including temporary housing and furnished-let edge cases.",
    },
    {
      title: "Travel insurance",
      body: "Single-trip vs continuous cover, home-country visits, cancellation and medical-abroad overlap with health cover.",
    },
    {
      title: "Life & disability orientation",
      body: "Income protection and life cover conversations that often sit beside mortgages or family planning — verify suitability separately.",
    },
    {
      title: "Business & ZZP packages",
      body: "Professional liability, business liability and equipment cover for freelancers and small companies.",
    },
    {
      title: "Claims & renewal support",
      body: "Some brokers help at claim or renewal time — ask what is included versus insurer self-service portals.",
    },
  ],
  brokerTypeComparison: [
    {
      type: "Independent multi-carrier broker",
      scope: "Can usually compare and place across several insurers; fee or commission model varies.",
      usefulWhen: "You want advice across a panel, not a single brand’s catalogue.",
      questions: ["How many carriers can you place with?", "How are you paid?", "English policy explanation?"],
    },
    {
      type: "Tied / bank-linked advisor",
      scope: "Advice linked to one bank, insurer or limited panel — still regulated, but product choice is narrower.",
      usefulWhen: "You already bank with a provider and want a simple package conversation.",
      questions: ["Is advice limited to one insurer?", "Can I still buy elsewhere?", "What is the fee?"],
    },
    {
      type: "Commercial & business broker",
      scope: "Focuses on professional liability, business packages and contract-driven cover for companies and ZZP’ers.",
      usefulWhen: "Your main need is business risk, not a household AVP-only policy.",
      questions: ["Sector experience?", "Proof-of-cover for contracts?", "Claims support?"],
    },
    {
      type: "Comparison platform",
      scope: "Self-serve quote comparison online — useful orientation, not full personal advice.",
      usefulWhen: "You have a standard product need and want to screen prices and features first.",
      questions: ["Which products are compared?", "Is advice included?", "How do renewals work?"],
    },
    {
      type: "Expat-oriented intermediary",
      scope: "Markets English support and internationally mobile household packages.",
      usefulWhen: "Language and temporary housing / relocation timing are your main frictions.",
      questions: ["Who explains exclusions in English?", "Remote onboarding?", "Which carriers?"],
    },
  ],
  whenToUseScenarios: [
    {
      profile: "New arrival, standard household",
      whatCanMatter: "AVP + contents + travel; language; start dates after registration.",
      exampleQuestion: "Can you compare three independent options for liability and contents in English?",
      betterPath: "Broker or comparison site — then verify on Health insurance for zorgverzekering.",
    },
    {
      profile: "Complex household / high valuables",
      whatCanMatter: "Sum insured, jewellery riders, temporary storage, multi-address risk.",
      exampleQuestion: "How do you handle high-value items and temporary storage between moves?",
      betterPath: "Independent broker advice is often useful before buying direct.",
    },
    {
      profile: "ZZP / consultancy contracts",
      whatCanMatter: "Professional liability limits, contract clauses, proof of cover.",
      exampleQuestion: "Can you issue certificate wording that matches my client contract?",
      betterPath: "Commercial / business broker — link ZZP guides for context.",
    },
    {
      profile: "Simple single product",
      whatCanMatter: "Transparent features, excess, cancellation — less need for deep advice.",
      exampleQuestion: "Is a comparison site enough for this travel policy?",
      betterPath: "Comparison site or direct insurer; escalate to a broker if exclusions confuse you.",
    },
  ],
  credentialChecklist: [
    {
      item: "Independence model",
      why: "Independent multi-carrier vs tied advice changes the shortlist you will see.",
    },
    {
      item: "AFM / register orientation",
      why: "Ask how the firm is registered and verify publicly where relevant before instructing.",
    },
    {
      item: "Fee & commission transparency",
      why: "Understand how advice is paid so incentives are clear — ask in writing.",
    },
    {
      item: "Product panel limits",
      why: "Some adviseurs cannot place every brand; know the edges early.",
    },
    {
      item: "Language of advice & policy",
      why: "Marketing English is not the same as explaining exclusions before you sign.",
    },
    {
      item: "Claims support scope",
      why: "Clarify whether the broker helps after a claim or only at placement.",
    },
  ],
  challengeCards: [
    {
      title: "Broker vs insurer confusion",
      body: "Brokers advise and place cover; insurers underwrite. You still need the carrier page for product landscape.",
    },
    {
      title: "Tied advice surprises",
      body: "Bank-linked or single-brand advisors may not show the wider market — ask about independence first.",
    },
    {
      title: "Health page mix-ups",
      body: "Basic zorgverzekering belongs on the Health insurance directory — do not rebuild that journey here.",
    },
    {
      title: "English policy wording",
      body: "Policy schedules are often Dutch; confirm who explains exclusions before purchase.",
    },
    {
      title: "Overlapping covers",
      body: "Travel medical, employer packages and contents riders can overlap — map gaps deliberately.",
    },
    {
      title: "Fee opacity",
      body: "Commission-only vs fee-based models change incentives; ask for a clear explanation.",
    },
    {
      title: "Car cover split",
      body: "Auto policies have a dedicated living guide — use it for WA / WA+ / all-risk orientation.",
    },
    {
      title: "Directory = ranking myth",
      body: "Soft discovery lists are not endorsements. Verify credentials and quotes yourself.",
    },
  ],
  providers: [
    {
      name: "Independent multi-carrier adviseurs",
      slug: "independent-multi-carrier-adviseurs",
      city: "Major cities",
      region: "Netherlands",
      summary:
        "Local verzekeringsadviseurs who compare and place household non-life packages across multiple carriers.",
      expatFocus:
        "Best starting point for AVP, contents and travel when you want advice beyond a single brand catalogue.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Intake often remote; some offices prefer in-person for complex files.",
      website: "https://www.afm.nl/en",
      engagementType: "Independent package advice & placement",
      brokerType: "Independent multi-carrier broker",
      citiesServed: ["Amsterdam", "Utrecht", "Rotterdam", "The Hague", "Multiple cities"],
      featured: true,
      verificationNote:
        "Use AFM / public register orientation to identify current firms; this row explains the role, not a single brand endorsement.",
    },
    {
      name: "AFM register discovery path",
      slug: "afm-register-discovery",
      city: "Nationwide",
      region: "Netherlands",
      summary:
        "Consumer and firm-search orientation via the Dutch Authority for the Financial Markets for financial service providers.",
      expatFocus:
        "Useful verification starting point before you instruct any adviseur — still interview the person who will advise you.",
      languages: ["Dutch", "English site sections"],
      remoteSupport: true,
      inPersonAvailability: "Online register; local firms vary.",
      website: "https://www.afm.nl/en",
      engagementType: "Regulatory / register orientation",
      brokerType: "AFM register discovery",
      citiesServed: ["Netherlands-wide"],
      featured: true,
      verificationNote:
        "AFM context is regulatory orientation — confirm the specific intermediary handling your file.",
    },
    {
      name: "Independer (comparison platform)",
      slug: "independer-comparison-platform",
      city: "Online",
      region: "Netherlands",
      summary:
        "Well-known Dutch comparison site for insurance and related household products — self-serve orientation rather than personal broker advice.",
      expatFocus:
        "Useful when you want to screen standard products before or beside speaking with an independent adviseur.",
      languages: ["Dutch", "English options vary by flow"],
      remoteSupport: true,
      inPersonAvailability: "Online only.",
      website: "https://www.independer.nl/",
      engagementType: "Self-serve comparison",
      brokerType: "Comparison platform",
      citiesServed: ["Netherlands-wide online"],
      featured: true,
      verificationNote:
        "Comparison platforms are not a substitute for personal advice on complex risks — verify quotes on the live site.",
    },
    {
      name: "Aon Nederland",
      slug: "aon-nederland",
      city: "Rotterdam / national",
      region: "Netherlands",
      summary:
        "Large international risk and insurance brokerage active in the Netherlands, often associated with commercial and specialist programmes.",
      expatFocus:
        "More relevant when business, employer or specialist risk programmes matter than a simple AVP-only household file.",
      languages: ["Dutch", "English"],
      remoteSupport: true,
      inPersonAvailability: "Corporate and specialist channels; confirm consumer vs commercial path.",
      website: "https://www.aon.com/netherlands",
      engagementType: "Commercial / specialist brokerage",
      brokerType: "Commercial & business broker",
      citiesServed: ["Netherlands-wide"],
      featured: true,
      verificationNote:
        "Confirm whether your need is consumer household advice or commercial brokerage before contacting.",
    },
    {
      name: "Marsh Netherlands",
      slug: "marsh-netherlands",
      city: "Amsterdam / national",
      region: "Netherlands",
      summary:
        "Global insurance brokerage and risk advisory firm with Dutch operations, typically oriented to corporate and complex programmes.",
      expatFocus:
        "Useful pointer for business-scale risk conversations — not a default for basic household AVP shopping.",
      languages: ["Dutch", "English"],
      remoteSupport: true,
      inPersonAvailability: "Corporate channels; verify the right desk.",
      website: "https://www.marsh.com/",
      engagementType: "Commercial risk & brokerage",
      brokerType: "Commercial & business broker",
      citiesServed: ["Netherlands-wide"],
      featured: false,
      verificationNote:
        "Public corporate brands are not personal recommendations — match desk and licence to your file type.",
    },
    {
      name: "Bank-linked / tied insurance advisors",
      slug: "bank-linked-tied-advisors",
      city: "Nationwide",
      region: "Netherlands",
      summary:
        "Advisors connected to banks or single insurers who help arrange packages within a limited panel.",
      expatFocus:
        "Convenient if you already bank locally — still ask what they cannot compare outside the panel.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Branch and video options vary by bank.",
      website: "https://www.afm.nl/en",
      engagementType: "Tied / panel advice",
      brokerType: "Tied / bank-linked advisor",
      citiesServed: ["Netherlands-wide via bank networks"],
      featured: false,
      verificationNote:
        "Tied advice is legitimate but narrower — ask explicitly about independence and alternatives.",
    },
    {
      name: "Home & liability package specialists",
      slug: "home-liability-package-specialists",
      city: "Major cities",
      region: "Netherlands",
      summary:
        "Adviseurs who primarily help renters and homeowners assemble AVP, contents and building packages.",
      expatFocus:
        "Strong fit for first apartments and first purchases after a makelaar / notary timeline.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Often remote intake.",
      website: "https://www.afm.nl/en",
      engagementType: "Household package placement",
      brokerType: "Home & liability package specialist",
      citiesServed: ["Amsterdam", "The Hague", "Utrecht", "Rotterdam", "Other cities"],
      featured: false,
      verificationNote:
        "Ask how temporary housing and furnished rentals are handled before you accept a quote.",
    },
    {
      name: "Life & disability intermediaries",
      slug: "life-disability-intermediaries",
      city: "Major cities",
      region: "Netherlands",
      summary:
        "Intermediaries who discuss life cover and disability / income protection alongside household non-life needs.",
      expatFocus:
        "Often relevant near mortgage advice — keep mortgage advisors and financial advisors on their own pages.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Consultations often remote; medical underwriting can add steps.",
      website: "https://www.afm.nl/en",
      engagementType: "Life / AOV orientation & placement",
      brokerType: "Life & disability intermediary",
      citiesServed: ["Netherlands-wide local offices"],
      featured: false,
      verificationNote:
        "This is orientation only — suitability depends on personal circumstances and underwriting.",
    },
    {
      name: "Expat-oriented insurance intermediaries",
      slug: "expat-oriented-insurance-intermediaries",
      city: "Randstad focus",
      region: "Western Netherlands",
      summary:
        "Intermediaries and workflows that market English-language support for internationally mobile households.",
      expatFocus:
        "Useful for relocation timing, temporary housing and bilingual explanations — still verify independence and panel.",
      languages: ["English", "Dutch"],
      remoteSupport: true,
      inPersonAvailability: "Randstad meetings common; remote nationwide possible.",
      website: "https://www.afm.nl/en",
      engagementType: "Expat household package advice",
      brokerType: "Expat-oriented intermediary",
      citiesServed: ["Amsterdam", "The Hague", "Utrecht", "Rotterdam"],
      featured: true,
      verificationNote:
        "Marketing English is not enough — ask who will explain exclusions before you sign.",
    },
  ] satisfies InsuranceBrokerProvider[],
  comparisonTable: [
    {
      advisor: "Independent multi-carrier adviseurs",
      citiesServed: "Major cities",
      expatFocus: "Panel comparison",
      languages: "Dutch, English varies",
      onlineConsultations: "Often",
      advisorType: "Independent multi-carrier broker",
    },
    {
      advisor: "AFM register discovery",
      citiesServed: "Netherlands-wide",
      expatFocus: "Verification start",
      languages: "Dutch, English site",
      onlineConsultations: "Online register",
      advisorType: "AFM register discovery",
    },
    {
      advisor: "Independer comparison",
      citiesServed: "Online NL",
      expatFocus: "Self-serve screening",
      languages: "Dutch, English varies",
      onlineConsultations: "Yes",
      advisorType: "Comparison platform",
    },
    {
      advisor: "Aon Nederland",
      citiesServed: "National",
      expatFocus: "Commercial / specialist",
      languages: "Dutch, English",
      onlineConsultations: "Varies",
      advisorType: "Commercial & business broker",
    },
    {
      advisor: "Marsh Netherlands",
      citiesServed: "National",
      expatFocus: "Corporate risk",
      languages: "Dutch, English",
      onlineConsultations: "Varies",
      advisorType: "Commercial & business broker",
    },
    {
      advisor: "Bank-linked / tied advisors",
      citiesServed: "Bank networks",
      expatFocus: "Convenience panel",
      languages: "Dutch, English varies",
      onlineConsultations: "Often",
      advisorType: "Tied / bank-linked advisor",
    },
    {
      advisor: "Home & liability specialists",
      citiesServed: "Major cities",
      expatFocus: "AVP + household",
      languages: "Dutch, English varies",
      onlineConsultations: "Often",
      advisorType: "Home & liability package specialist",
    },
    {
      advisor: "Expat-oriented intermediaries",
      citiesServed: "Randstad common",
      expatFocus: "English support",
      languages: "English, Dutch",
      onlineConsultations: "Yes",
      advisorType: "Expat-oriented intermediary",
    },
  ],
  questionsToAsk: [
    "Are you independent across multiple carriers, or tied to one insurer / bank panel?",
    "How are you paid — fee, commission, or a mix — and can you summarise that in writing?",
    "Which products can you place (AVP, home, travel, life, disability, business) and which sit outside your panel?",
    "Will you explain exclusions and excess choices in English before I buy?",
    "How do you handle temporary housing, furnished rentals or relocation start dates?",
    "What support do you provide if I need to claim or switch at renewal?",
    "For health insurance (zorgverzekering), should I use a dedicated health comparison path instead?",
    "Where can I verify your firm’s registration or authorisation context?",
  ],
  relatedInsuranceGuides: [
    {
      label: "Insurance providers",
      href: INSURANCE_PROVIDERS_PATH,
      status: "live",
      description: "Carrier landscape across health, liability, home, travel and business products.",
    },
    {
      label: "Health insurance",
      href: HEALTH_INSURANCE_SERVICES_PATH,
      status: "live",
      description: "Basic zorgverzekering directory — mandatory health cover shopping.",
    },
    {
      label: "Health insurance comparison",
      href: HEALTH_INSURANCE_COMPARISON_PATH,
      status: "live",
      description: "Decision framework for comparing basic and supplementary health cover.",
    },
    {
      label: "Car insurance",
      href: CAR_INSURANCE_PATH,
      status: "live",
      description: "WA / WA+ / all-risk orientation for Dutch vehicle cover.",
    },
    {
      label: "Financial advisors",
      href: FINANCIAL_ADVISORS_PATH,
      status: "live",
      description: "Pensions and long-term planning — separate from insurance intermedi ation.",
    },
  ] satisfies InsuranceBrokerLink[],
  leadCta: {
    heading: "Need Help Shortlisting Insurance Brokers?",
    body: "Use the directory to compare independence, product focus, language support and remote options. Then contact shortlisted adviseurs for written fee and panel clarity — and keep health insurance and carrier research on their own service pages.",
    primaryCta: { label: "Compare Brokers", href: "#directory" },
    secondaryCta: { label: "Open Insurance Providers", href: INSURANCE_PROVIDERS_PATH },
  },
  faqs: [
    {
      q: "What does a Dutch insurance broker (adviseur / tussenpersoon) do?",
      a: "An insurance broker or adviseur helps you assess needs, compare packages across one or more carriers, explain cover options and place policies. The insurer still underwrites the risk. Brokers are intermediaries — not the same as shopping a single brand’s website alone.",
    },
    {
      q: "How is a broker different from an insurance provider?",
      a: "Providers (carriers) design and underwrite products. Brokers advise and place cover between you and carriers. Use the Insurance providers page for the carrier landscape and this page for intermediary discovery.",
    },
    {
      q: "Should I use a broker or a comparison site?",
      a: "Comparison sites help screen standard products quickly. Brokers are often more useful for complex households, business risks, overlapping covers or when you want someone to explain exclusions. Many expats do both: screen, then validate with an adviseur.",
    },
    {
      q: "Is health insurance handled by brokers on this page?",
      a: "Basic Dutch zorgverzekering has its own Health insurance services directory and comparison guide. Some brokers may discuss health in a wider conversation, but this page does not rebuild the mandatory health shopping journey.",
    },
    {
      q: "What is the difference between independent and tied advisors?",
      a: "Independent multi-carrier adviseurs can usually place across a panel of insurers. Tied or bank-linked advisors work within a narrower product set. Ask which model applies before you share documents.",
    },
    {
      q: "Do I need AFM registration checks?",
      a: "Financial service providers in the Netherlands operate in a regulated environment. Ask how the firm is authorised and use official AFM orientation to verify context. This page is not a substitute for regulatory searches.",
    },
    {
      q: "Does directory inclusion mean ExpatLife recommends a broker?",
      a: "No. Listings are informational soft discovery only. Always verify current services, independence, fees, languages and fit directly with the intermediary.",
    },
    {
      q: "Where should I go for car insurance details?",
      a: "Use the dedicated Car insurance living guide for WA / WA+ / all-risk orientation. Brokers may help place auto cover, but that guide owns the policy-type education.",
    },
  ],
  officialSources: [
    {
      label: "AFM",
      href: "https://www.afm.nl/en",
      description:
        "Authority for the Financial Markets — consumer and firm orientation for financial service providers in the Netherlands.",
    },
    {
      label: "ACM — Consumers",
      href: "https://www.acm.nl/en/consumers",
      description: "Netherlands Authority for Consumers and Markets — consumer contract and market orientation.",
    },
    {
      label: "Government.nl — Insurance topics",
      href: "https://www.government.nl/",
      description: "Official Dutch government information portal for public orientation on consumer topics.",
    },
    {
      label: "Rijksoverheid — Verzekeringen",
      href: "https://www.rijksoverheid.nl/onderwerpen/verzekeringen",
      description: "Dutch government topic pages related to insurance orientation (Dutch-language).",
    },
    {
      label: "Independer (comparison orientation)",
      href: "https://www.independer.nl/",
      description: "Public comparison platform often used to screen Dutch insurance products — not a ranking endorsement.",
    },
  ],
  relatedGuides: [
    {
      label: "Notaries",
      href: NOTARIES_PATH,
      status: "live",
      description: "Dutch notaris for purchase deeds — often timed with household insurance after buying.",
    },
    {
      label: "Financial advisors",
      href: FINANCIAL_ADVISORS_PATH,
      status: "live",
      description: "Pensions, investments and long-term planning beside insurance decisions.",
    },
    {
      label: "Insurance providers",
      href: INSURANCE_PROVIDERS_PATH,
      status: "live",
      description: "Carrier landscape for health, liability, home, travel and business products.",
    },
    {
      label: "Health insurance",
      href: HEALTH_INSURANCE_SERVICES_PATH,
      status: "live",
      description: "Basic zorgverzekering directory for mandatory health cover.",
    },
    {
      label: "Tax advisors",
      href: TAX_ADVISORS_PATH,
      status: "live",
      description: "Tax support around relocation and household finances.",
    },
    {
      label: "Car insurance",
      href: CAR_INSURANCE_PATH,
      status: "live",
      description: "Living guide for Dutch vehicle insurance orientation.",
    },
    {
      label: "Health insurance comparison",
      href: HEALTH_INSURANCE_COMPARISON_PATH,
      status: "live",
      description: "Decision framework for comparing Dutch health packages.",
    },
  ] satisfies InsuranceBrokerLink[],
  servicesLinks: [
    { label: "All Services", href: SERVICES_HUB_PATH, status: "live", description: "Browse service providers for expats in the Netherlands." },
    { label: "Insurance providers", href: INSURANCE_PROVIDERS_PATH, status: "live", description: "Carrier landscape directory." },
    { label: "Health insurance", href: HEALTH_INSURANCE_SERVICES_PATH, status: "live", description: "Zorgverzekering provider directory." },
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, status: "live", description: "Long-term financial planning support." },
    { label: "Tax advisors", href: TAX_ADVISORS_PATH, status: "live", description: "Tax support around relocation and property." },
    { label: "Notaries", href: NOTARIES_PATH, status: "live", description: "Notaris for purchase deeds and related acts." },
    { label: "Mortgage advisors", href: MORTGAGE_ADVISORS_PATH, status: "live", description: "Regulated mortgage advice for buyers." },
  ] satisfies InsuranceBrokerLink[],
  exploreNextCards: [
    {
      label: "Insurance providers",
      href: INSURANCE_PROVIDERS_PATH,
      status: "live",
      description: "See which carriers underwrite the products brokers may compare.",
    },
    {
      label: "Health insurance",
      href: HEALTH_INSURANCE_SERVICES_PATH,
      status: "live",
      description: "Arrange mandatory zorgverzekering on its dedicated directory.",
    },
    {
      label: "Financial advisors",
      href: FINANCIAL_ADVISORS_PATH,
      status: "live",
      description: "Connect household protection to longer-term money planning.",
    },
    {
      label: "Notaries",
      href: NOTARIES_PATH,
      status: "live",
      description: "After purchase deeds, revisit household cover with a broker.",
    },
    {
      label: "Car insurance",
      href: CAR_INSURANCE_PATH,
      status: "live",
      description: "Orient on WA / WA+ / all-risk before placing auto cover.",
    },
    {
      label: "Dutch Cities Guide",
      href: CITIES_HUB_PATH,
      status: "live",
      description: "City context for housing and household setup timing.",
    },
  ] satisfies InsuranceBrokerLink[],
};
