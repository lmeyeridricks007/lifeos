import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

/** Services directory — Dutch mobile / SIM / eSIM / prepaid plan providers for expats. */
export const PHONE_PROVIDERS_PATH = "/netherlands/services/phone-providers/" as const;
export const PHONE_PROVIDERS_NETHERLANDS_PATH = PHONE_PROVIDERS_PATH;

/** Sibling Connectivity directories — path strings only (avoids circular model imports). */
export const INTERNET_PROVIDERS_PATH = "/netherlands/services/internet-providers/" as const;
export const ENERGY_PROVIDERS_PATH = "/netherlands/services/energy-providers/" as const;
export const MOBILE_CONNECTIVITY_PATH = "/netherlands/services/mobile-connectivity/" as const;
export const INTERNET_AND_MOBILE_UTILITIES_PATH =
  "/netherlands/utilities/internet-and-mobile-netherlands/" as const;
export const ENERGY_AND_WATER_PATH = "/netherlands/utilities/energy-and-water-netherlands/" as const;
export const UTILITIES_HUB_PATH = "/netherlands/utilities/utilities-netherlands/" as const;
export const SERVICES_HUB_PATH = "/netherlands/services/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;
export const ESTATE_AGENTS_PATH = "/netherlands/services/estate-agents/" as const;
export const MOVING_COMPANIES_PATH = "/netherlands/services/moving-companies/" as const;
export const RENTAL_AGENCIES_PATH = "/netherlands/services/rental-agencies/" as const;
export const INSURANCE_BROKERS_PATH = "/netherlands/services/insurance-brokers/" as const;

export const PHONE_PROVIDERS_AFFILIATE_PLACEMENT_ID =
  "nl-services-phone-providers-support-providers" as const;

export type PhoneProviderEntry = {
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
  providerType:
    | "National MNO (network operator)"
    | "MVNO / challenger brand"
    | "Prepaid specialist"
    | "SIM-only / postpaid"
    | "eSIM-first option"
    | "Comparison platform"
    | "Retail / airport SIM"
    | "ACM consumer orientation";
  citiesServed: string[];
  featured: boolean;
  verificationNote: string;
};

export type PhoneProviderLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

const INFOGRAPHIC_VERSION = "premium-v1";
const VISUAL_PREFIX = "netherlands-services-phone-providers";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const phoneProvidersNetherlandsPage = {
  slug: "phone-providers",
  path: PHONE_PROVIDERS_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(PHONE_PROVIDERS_PATH) ?? "2026-11-04",
  affiliatePlacementId: PHONE_PROVIDERS_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "Phone Providers in the Netherlands for Expats | SIM & Mobile Guide",
    description:
      "Compare Dutch prepaid, SIM-only and eSIM phone providers for expats: plan types, ID activation, roaming and soft discovery — not a carrier ranking.",
    keywords: [
      "phone providers netherlands",
      "SIM card netherlands expats",
      "eSIM netherlands",
      "prepaid mobile netherlands",
      "SIM-only netherlands",
      "dutch mobile number expats",
      "MVNO netherlands",
      "compare mobile plans netherlands",
      "simyo lebara netherlands",
      "best phone plan netherlands expats",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Services · Phone providers",
    pageTitle: "Phone Providers in the Netherlands for Expats",
    subtitle:
      "Orient on Dutch mobile plans — prepaid, SIM-only, eSIM and MVNO options — including activation ID checks, data fair-use rules and EU roaming. This directory owns SIM and phone-plan provider discovery, not the fixed broadband ISP directory or the utilities how-to setup guide.",
    primaryCta: { label: "Browse Phone Directory", href: "#directory" },
    secondaryCta: { label: "Not the same as…", href: "#differentiate" },
    chips: ["Prepaid / SIM-only", "eSIM options", "MVNO orientation", "Soft discovery"],
    image: {
      src: "/images/heroes/netherlands-services-phone-providers-hero-premium-v1.png",
      alt: "Photorealistic editorial scene of an expat activating a Dutch SIM and comparing prepaid plans on a phone at a bright canal-side café table, passport and eSIM QR notes visible.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Infographic introducing the Dutch mobile and SIM market for expats: prepaid, SIM-only, eSIM and what to check before choosing a phone provider.",
      "Start with how quickly you need a Dutch number — then compare plan type, ID rules and data fair use."
    ),
    differentiate: visual(
      "differentiate",
      "Infographic differentiating phone providers, mobile connectivity, internet providers and the utilities internet-and-mobile how-to guide.",
      "Pick the right page first: this directory owns SIM and phone-plan discovery; fixed broadband and setup how-to live elsewhere."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of six facts about Dutch phone providers for expats.",
      "Use this snapshot before you buy: Dutch number for banking, ID check, prepaid vs contract and fair-use rules matter."
    ),
    planTypes: visual(
      "plan-types",
      "Infographic comparing prepaid, SIM-only postpaid, eSIM and handset-bundle plan types in the Netherlands.",
      "Plan type drives flexibility — many new arrivals start prepaid or SIM-only, then upgrade later."
    ),
    contracts: visual(
      "contracts",
      "Infographic of Dutch mobile contract types: prepaid top-ups, rolling SIM-only, fixed terms and early-exit orientation.",
      "Read minimum term, notice and handset subsidies before you click buy — promotions often hide the real timeline."
    ),
    activation: visual(
      "activation",
      "Infographic showing Dutch SIM activation steps: ID check, eSIM QR, number porting and first top-up.",
      "Always confirm which ID documents are accepted and how long activation takes before you need banking OTPs."
    ),
    roaming: visual(
      "roaming",
      "Infographic explaining EU roaming, fair-use data rules and international calling orientation for Dutch SIMs.",
      "EU roaming is common — still verify fair-use limits and non-EU travel add-ons before you leave the Netherlands."
    ),
    providerTypes: visual(
      "provider-types",
      "Infographic comparing MNOs, MVNOs, prepaid specialists, eSIM-first options, comparison sites and retail SIMs.",
      "Match the provider model to stay length and support needs — not every brand fits a two-week arrival window."
    ),
    scenarios: visual(
      "scenarios",
      "Infographic of expat phone scenarios: arrival week, remote work, frequent travel and family lines.",
      "Your best path depends on how fast you need a Dutch number and whether you travel outside the EU often."
    ),
    mistakes: visual(
      "mistakes",
      "Infographic of common expat mistakes with Dutch mobile plans: buying at the airport without reading fair use, confusing home internet with SIMs and ignoring ID timing.",
      "Avoid signing on marketing GB alone — verify ID rules, fair use and which page owns fixed broadband."
    ),
    directory: visual(
      "directory",
      "Infographic showing a neutral phone-provider directory workflow: choose plan type, shortlist, check ID and confirm fair use.",
      "Provider discovery should lead to verification — not blind trust in a ranking."
    ),
    comparison: visual(
      "comparison",
      "Infographic comparison matrix for Dutch mobile provider models: coverage style, English support and expat fit.",
      "Compare fit and activation clarity before comparing advertised gigabytes."
    ),
    checklist: visual(
      "checklist",
      "Infographic checklist before choosing a Dutch phone provider: ID, plan type, data fair use, roaming and cancellation path.",
      "A short checklist prevents most first-week SIM regrets."
    ),
    questions: visual(
      "questions",
      "Infographic of questions expats should ask Dutch phone providers before buying a SIM.",
      "Good questions reveal real coverage, ID acceptance, eSIM support and exit terms."
    ),
    faq: visual(
      "faq",
      "Infographic decision map of common phone-provider FAQ topics: prepaid vs contract, eSIM, roaming and ACM orientation.",
      "FAQ answers should help you pick the next verification step — not replace provider plan reading."
    ),
    leadCta: visual(
      "lead-cta",
      "Infographic showing how to shortlist Dutch phone providers: pick plan type, check ID, compare fair use and keep broadband separate.",
      "Turn SIM discovery into a structured shortlist before you buy anything."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic showing official sources for Dutch telecom orientation: ACM consumer pages and government consumer topics.",
      "Verify consumer rights and complaint paths with official sources — not marketing alone."
    ),
    servicesEcosystem: visual(
      "services-ecosystem",
      "Infographic showing services around mobile connectivity: phone providers, internet providers, energy providers, mobile connectivity and utilities guides.",
      "A Dutch mobile number is one piece of the wider utilities and connectivity ecosystem."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic showing a research path after comparing phone providers: utilities how-to, internet providers, energy providers and mobile connectivity.",
      "Continue from SIM discovery into setup how-to, home broadband and energy contracts."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting phone-provider research to internet, energy, mobile connectivity, utilities hub and Dutch cities.",
      "SIM shortlists connect naturally into the rest of household setup."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#differentiate", label: "Not the same as…" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#plan-types", label: "Plan types" },
    { href: "#contracts", label: "Contracts" },
    { href: "#activation", label: "Activation" },
    { href: "#roaming", label: "Roaming" },
    { href: "#provider-types", label: "Provider types" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#directory", label: "Directory" },
    { href: "#comparison", label: "Compare" },
    { href: "#affiliate-providers", label: "Providers" },
    { href: "#checklist", label: "Checklist" },
    { href: "#questions", label: "Questions" },
    { href: "#lead-cta", label: "Get help" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
  ],
  intro: {
    heading: "Why Expats Compare Dutch Phone Providers Carefully",
    paragraphs: [
      "In the Netherlands, a local mobile number is often needed early — for bank verification codes, DigiD, delivery apps and everyday contact. What you buy can be prepaid, SIM-only postpaid, eSIM or a longer handset bundle, and the right fit depends on stay length and how fast you need service.",
      "This page is a services directory for mobile and SIM provider discovery: plan types, activation ID checks, roaming orientation and soft comparison approaches. It does not rebuild the Mobile & connectivity category page, the fixed broadband ISP directory, or the utilities how-to guide for setting up internet after you move.",
      "Inclusion here is informational soft discovery, not a ranking of KPN, Odido, Vodafone or any other carrier. Confirm coverage, data fair-use rules, ID requirements and cancellation terms directly with providers before you buy.",
    ],
    links: [
      { label: "Mobile & connectivity", href: MOBILE_CONNECTIVITY_PATH },
      { label: "Internet & mobile how-to", href: INTERNET_AND_MOBILE_UTILITIES_PATH },
      { label: "Internet providers", href: INTERNET_PROVIDERS_PATH },
      { label: "Energy providers", href: ENERGY_PROVIDERS_PATH },
      { label: "Utilities hub", href: UTILITIES_HUB_PATH },
    ],
  },
  differentiateCards: [
    {
      title: "Phone providers (this page)",
      body: "Mobile SIM, prepaid, SIM-only and eSIM provider comparison directory — plan types, activation and soft discovery.",
      href: PHONE_PROVIDERS_PATH,
      status: "live" as const,
    },
    {
      title: "Mobile & connectivity",
      body: "Broader services category page for mobile connectivity orientation — adjacent context, not a duplicate SIM directory.",
      href: MOBILE_CONNECTIVITY_PATH,
      status: "live" as const,
    },
    {
      title: "Internet providers",
      body: "Fixed fibre, cable and DSL ISP directory — home broadband contracts and install, not mobile SIMs.",
      href: INTERNET_PROVIDERS_PATH,
      status: "live" as const,
    },
    {
      title: "Internet & mobile how-to",
      body: "Utilities guide for setting up connectivity after you move — practical setup journey, not carrier rankings.",
      href: INTERNET_AND_MOBILE_UTILITIES_PATH,
      status: "live" as const,
    },
  ],
  snapshotCards: [
    { label: "Dutch number", value: "Often early", note: "Banks and DigiD frequently expect a local mobile for OTPs." },
    { label: "Plan types", value: "Prepaid ↔ contract", note: "Flexibility vs price depends on stay length." },
    { label: "Activation", value: "ID check", note: "Passport or ID rules vary by provider and channel." },
    { label: "eSIM", value: "Growing", note: "Useful when you arrive before a physical SIM ships." },
    { label: "Home Wi-Fi", value: "Separate page", note: "Fixed broadband belongs on Internet providers." },
    { label: "Guarantee", value: "None", note: "No directory ranks carriers or guarantees coverage." },
  ],
  planTypeCards: [
    {
      title: "Prepaid / pay-as-you-go",
      body: "Top up when you need credit. Often the simplest start for short stays and first-week connectivity.",
    },
    {
      title: "SIM-only postpaid",
      body: "Monthly bill without a handset subsidy. Common when you already own an unlocked phone.",
    },
    {
      title: "eSIM",
      body: "Digital SIM activated by QR or app. Handy for dual-SIM phones and arrivals who cannot wait for post.",
    },
    {
      title: "Handset + plan bundles",
      body: "Phone financed with a longer contract. Higher commitment — verify exit costs if your stay is uncertain.",
    },
    {
      title: "MVNO brands",
      body: "Retail brands that ride on a host network. Often compete on price or international calling extras.",
    },
    {
      title: "Family / multi-line packs",
      body: "Shared data or multiple SIMs under one account — useful after you settle, not always day-one.",
    },
  ],
  contractCards: [
    {
      title: "Prepaid top-ups",
      body: "No long commitment, but credit can expire and speeds may throttle after fair-use caps — read the small print.",
    },
    {
      title: "Rolling SIM-only",
      body: "Often clearer exit timing after a short initial period — still confirm notice rules.",
    },
    {
      title: "Fixed-term promotions",
      body: "Discounted monthly price for a set period is common. Note the renewal price and early-exit fees.",
    },
    {
      title: "Handset subsidies",
      body: "Cheap phones usually mean longer contracts. Model your stay length before you lock in hardware.",
    },
    {
      title: "Number porting",
      body: "Moving an existing Dutch number between brands can take days — plan around banking OTPs.",
    },
    {
      title: "Cooling-off & switching",
      body: "Consumer switching rights can apply — use ACM consumer orientation for current guidance.",
    },
  ],
  activationSteps: [
    {
      item: "Confirm which ID documents are accepted",
      why: "Passport-only vs residence-document rules differ by brand and retail channel.",
    },
    {
      item: "Choose physical SIM vs eSIM",
      why: "eSIM can activate the same day; postal SIMs need a Dutch delivery address.",
    },
    {
      item: "Check activation lead time",
      why: "You may need OTPs for banking before a slow activation completes.",
    },
    {
      item: "Unlock status of your phone",
      why: "Carrier-locked handsets from abroad may reject a Dutch SIM.",
    },
    {
      item: "Plan number porting carefully",
      why: "Porting can interrupt service briefly — avoid during critical bank setup days.",
    },
    {
      item: "Keep a temporary foreign SIM as backup",
      why: "Roaming on your old SIM can bridge a day if Dutch activation lags.",
    },
  ],
  roamingCards: [
    {
      title: "EU / EEA roaming",
      body: "Many Dutch plans include EU roaming under fair-use rules — still verify daily caps and speed policies.",
    },
    {
      title: "Fair-use data limits",
      body: "“Unlimited” often means a fair-use threshold before throttling. Check the published GB threshold.",
    },
    {
      title: "Outside the EU",
      body: "UK, US and long-haul travel usually need add-ons or a local SIM — do not assume EU rules apply.",
    },
    {
      title: "International calling packs",
      body: "Useful if you call family abroad often — some MVNOs compete specifically on this.",
    },
  ],
  providerTypeComparison: [
    {
      type: "National MNO (network operator)",
      scope: "Large consumer brands operating their own mobile networks across the Netherlands.",
      usefulWhen: "You want wide coverage familiarity and full retail/support channels.",
      questions: ["Which ID is accepted online?", "eSIM available today?", "Fair-use threshold?"],
    },
    {
      type: "MVNO / challenger brand",
      scope: "Retail brands using a host network — often competing on price, simplicity or international extras.",
      usefulWhen: "You want simpler prepaid or SIM-only deals and can accept leaner support.",
      questions: ["Which host network?", "English support hours?", "Top-up expiry?"],
    },
    {
      type: "Prepaid specialist",
      scope: "Brands oriented around top-ups and short-commitment plans.",
      usefulWhen: "First arrival weeks or uncertain stay length.",
      questions: ["Where to buy in-store?", "Activation without Dutch address?", "App top-up?"],
    },
    {
      type: "SIM-only / postpaid",
      scope: "Monthly plans without handset financing.",
      usefulWhen: "You already own an unlocked phone and want predictable monthly data.",
      questions: ["Minimum term?", "Renewal price?", "Porting timeline?"],
    },
    {
      type: "eSIM-first option",
      scope: "Providers or products emphasising QR/app activation.",
      usefulWhen: "You need a Dutch number before a physical SIM can arrive.",
      questions: ["Device compatibility?", "Dual-SIM tips?", "Refund if QR fails?"],
    },
    {
      type: "Comparison platform",
      scope: "Self-serve deal screens for mobile (and often energy/internet) — orientation, not personal advice.",
      usefulWhen: "You want to shortlist price and term before opening provider carts.",
      questions: ["Which products are compared?", "Are prepaid options included?", "How current are promos?"],
    },
  ],
  whenToUseScenarios: [
    {
      profile: "Arrival week, need OTPs fast",
      whatCanMatter: "Same-day activation, accepted passport ID, eSIM or shop purchase.",
      exampleQuestion: "Can I activate a Dutch number today with my passport?",
      betterPath: "Prepaid or eSIM shortlist → keep foreign roaming as bridge.",
    },
    {
      profile: "12-month assignment, unlocked phone",
      whatCanMatter: "SIM-only value, fair-use data, English self-service.",
      exampleQuestion: "What is the SIM-only renewal price after the promo?",
      betterPath: "SIM-only + comparison site for term clarity.",
    },
    {
      profile: "Frequent EU travel",
      whatCanMatter: "EU roaming fair-use limits and throttle behaviour.",
      exampleQuestion: "What is the published fair-use GB for EU roaming?",
      betterPath: "Plans with clear EU fair-use pages — verify before trips.",
    },
    {
      profile: "Family settling in",
      whatCanMatter: "Multi-line packs, parental controls, shared billing.",
      exampleQuestion: "Can we add lines later without restarting the whole contract?",
      betterPath: "Start with one adult line → expand after registration settles.",
    },
  ],
  mistakeCards: [
    {
      title: "Airport SIM without reading fair use",
      body: "Convenience SIMs can work — still check data caps, top-up expiry and roaming rules.",
    },
    {
      title: "Confusing this page with home broadband",
      body: "Fixed fibre and cable live on Internet providers. A phone hotspot is a bridge, not a household substitute.",
    },
    {
      title: "Ignoring ID timing",
      body: "Buying a plan you cannot activate with your current documents wastes the first critical week.",
    },
    {
      title: "Long handset contracts for short stays",
      body: "Subsidised phones look cheap until early-exit fees appear when you leave the Netherlands.",
    },
    {
      title: "Mixing directory with the how-to guide",
      body: "Practical setup steps after you choose a plan live on the utilities internet-and-mobile guide.",
    },
    {
      title: "Assuming Mobile & connectivity is a duplicate",
      body: "That category page is broader orientation; this directory owns provider-type SIM shopping.",
    },
    {
      title: "Porting during bank setup",
      body: "Number changes mid-OTP week can lock you out of banking apps.",
    },
    {
      title: "Directory = ranking myth",
      body: "Soft discovery lists are not endorsements. Verify coverage and terms yourself.",
    },
  ],
  providers: [
    {
      name: "National mobile network operators",
      slug: "national-mno-operators",
      city: "Major cities",
      region: "Netherlands",
      summary:
        "Large consumer brands operating Dutch mobile networks — prepaid, SIM-only and handset bundles across many cities.",
      expatFocus:
        "Useful when you want familiar retail channels and wide coverage; still confirm ID and eSIM options for your situation.",
      languages: ["Dutch", "English availability varies by brand"],
      remoteSupport: true,
      inPersonAvailability: "Shops and partner retailers in most cities.",
      website: "https://www.acm.nl/en/consumers/telecom-internet-and-television",
      engagementType: "Consumer mobile contract",
      providerType: "National MNO (network operator)",
      citiesServed: ["Amsterdam", "Utrecht", "Rotterdam", "The Hague", "Multiple cities"],
      featured: true,
      verificationNote:
        "This row describes a provider type, not a ranked endorsement of any single brand. Confirm live products on the provider site.",
    },
    {
      name: "MVNO & challenger brands",
      slug: "mvno-challenger-brands",
      city: "Online / national",
      region: "Netherlands",
      summary:
        "Retail brands riding host networks — often competing on simpler prepaid, SIM-only pricing or international calling extras.",
      expatFocus:
        "Strong fit for arrivals who want value and can handle leaner support channels.",
      languages: ["Dutch", "English options vary"],
      remoteSupport: true,
      inPersonAvailability: "Mostly online; some supermarket or partner retail.",
      website: "https://www.acm.nl/en/consumers/telecom-internet-and-television",
      engagementType: "MVNO retail",
      providerType: "MVNO / challenger brand",
      citiesServed: ["Netherlands-wide where host network allows"],
      featured: true,
      verificationNote:
        "Host-network coverage is not identical across brands — check coverage maps for your neighbourhood.",
    },
    {
      name: "Simyo (prepaid / monthly SIM orientation)",
      slug: "simyo-prepaid-sim",
      city: "Online",
      region: "Netherlands",
      summary:
        "Dutch mobile brand often used for simple prepaid and monthly SIM plans without a long handset contract.",
      expatFocus:
        "Helpful soft-discovery option when you want quick activation and straightforward plan choices.",
      languages: ["Dutch", "English options vary"],
      remoteSupport: true,
      inPersonAvailability: "Primarily online ordering and activation.",
      website: "https://www.simyo.nl/",
      engagementType: "Prepaid / monthly SIM",
      providerType: "Prepaid specialist",
      citiesServed: ["Netherlands-wide online"],
      featured: true,
      verificationNote:
        "Listing is informational soft discovery via affiliate placement — verify current plans and ID rules on Simyo’s site.",
    },
    {
      name: "Lebara (international-friendly mobile)",
      slug: "lebara-international-mobile",
      city: "Online / retail",
      region: "Netherlands",
      summary:
        "Mobile brand frequently considered by internationals for affordable data and international calling packs.",
      expatFocus:
        "Useful when calling family abroad is a weekly need — still compare fair-use data for local Dutch use.",
      languages: ["Dutch", "English options vary"],
      remoteSupport: true,
      inPersonAvailability: "Online plus select retail partners.",
      website: "https://www.lebara.nl/",
      engagementType: "Prepaid / mobile retail",
      providerType: "Prepaid specialist",
      citiesServed: ["Major cities", "Online NL"],
      featured: true,
      verificationNote:
        "Listing is informational soft discovery via affiliate placement — not a ranking versus other carriers.",
    },
    {
      name: "SIM-only & postpaid retailers",
      slug: "sim-only-postpaid-retailers",
      city: "Online / shops",
      region: "Netherlands",
      summary:
        "Monthly SIM-only products without handset financing — common once you own an unlocked phone.",
      expatFocus:
        "Good mid-stay upgrade path after a prepaid first week.",
      languages: ["Dutch", "English varies"],
      remoteSupport: true,
      inPersonAvailability: "Brand shops and electronics retailers.",
      website: "https://www.acm.nl/en/consumers/telecom-internet-and-television",
      engagementType: "SIM-only contract",
      providerType: "SIM-only / postpaid",
      citiesServed: ["Where brand sells"],
      featured: false,
      verificationNote:
        "Compare promo vs renewal price and notice period before switching from prepaid.",
    },
    {
      name: "eSIM-first activation paths",
      slug: "esim-first-activation",
      city: "Online",
      region: "Netherlands",
      summary:
        "Products emphasising QR or app eSIM activation for dual-SIM phones and same-day Dutch numbers.",
      expatFocus:
        "Ideal when you need banking OTPs before a physical SIM can be delivered.",
      languages: ["Dutch", "English varies by brand"],
      remoteSupport: true,
      inPersonAvailability: "Online activation; device must support eSIM.",
      website: "https://www.acm.nl/en/consumers/telecom-internet-and-television",
      engagementType: "eSIM retail",
      providerType: "eSIM-first option",
      citiesServed: ["Netherlands-wide online"],
      featured: true,
      verificationNote:
        "Confirm device eSIM compatibility and dual-SIM behaviour before you cancel your foreign number.",
    },
    {
      name: "Pricewise (comparison platform)",
      slug: "pricewise-comparison-platform",
      city: "Online",
      region: "Netherlands",
      summary:
        "Well-known Dutch comparison site covering mobile alongside energy and internet — self-serve deal screening.",
      expatFocus:
        "Helpful to shortlist SIM-only promotions and contract lengths before opening a provider cart.",
      languages: ["Dutch", "English options vary"],
      remoteSupport: true,
      inPersonAvailability: "Online only.",
      website: "https://www.pricewise.nl/",
      engagementType: "Self-serve comparison",
      providerType: "Comparison platform",
      citiesServed: ["Netherlands-wide online"],
      featured: true,
      verificationNote:
        "Comparison results are orientation tools — confirm the final offer on the provider’s checkout.",
    },
    {
      name: "ACM consumer telecom orientation",
      slug: "acm-consumer-telecom",
      city: "Nationwide",
      region: "Netherlands",
      summary:
        "Netherlands Authority for Consumers and Markets consumer pages on telecom, internet and television rights.",
      expatFocus:
        "Best verification starting point for switching, complaints and consumer-rights orientation.",
      languages: ["Dutch", "English site sections"],
      remoteSupport: true,
      inPersonAvailability: "Online consumer guidance.",
      website: "https://www.acm.nl/en/consumers/telecom-internet-and-television",
      engagementType: "Regulatory / consumer orientation",
      providerType: "ACM consumer orientation",
      citiesServed: ["Netherlands-wide"],
      featured: true,
      verificationNote:
        "ACM pages are consumer orientation — not a product catalogue or ranking of phone carriers.",
    },
  ] satisfies PhoneProviderEntry[],
  comparisonTable: [
    {
      provider: "National MNOs",
      citiesServed: "Many municipalities",
      expatFocus: "Coverage familiarity",
      languages: "Dutch, English varies",
      onlineOrdering: "Usually",
      providerType: "National MNO (network operator)",
    },
    {
      provider: "MVNO / challenger brands",
      citiesServed: "Host-network footprint",
      expatFocus: "Price / extras",
      languages: "Dutch, English varies",
      onlineOrdering: "Often",
      providerType: "MVNO / challenger brand",
    },
    {
      provider: "Simyo",
      citiesServed: "Online NL",
      expatFocus: "Simple SIM start",
      languages: "Dutch, English varies",
      onlineOrdering: "Yes",
      providerType: "Prepaid specialist",
    },
    {
      provider: "Lebara",
      citiesServed: "Online + retail",
      expatFocus: "International calls",
      languages: "Dutch, English varies",
      onlineOrdering: "Yes",
      providerType: "Prepaid specialist",
    },
    {
      provider: "SIM-only / postpaid",
      citiesServed: "Where brand sells",
      expatFocus: "Monthly predictability",
      languages: "Dutch first",
      onlineOrdering: "Often",
      providerType: "SIM-only / postpaid",
    },
    {
      provider: "eSIM-first paths",
      citiesServed: "Online NL",
      expatFocus: "Same-day number",
      languages: "Dutch, English varies",
      onlineOrdering: "Yes",
      providerType: "eSIM-first option",
    },
    {
      provider: "Pricewise comparison",
      citiesServed: "Online NL",
      expatFocus: "Deal screening",
      languages: "Dutch, English varies",
      onlineOrdering: "Yes (to providers)",
      providerType: "Comparison platform",
    },
    {
      provider: "ACM consumer orientation",
      citiesServed: "Netherlands-wide",
      expatFocus: "Rights & switching",
      languages: "Dutch, English site",
      onlineOrdering: "Guidance only",
      providerType: "ACM consumer orientation",
    },
  ],
  preSignChecklist: [
    {
      item: "ID documents accepted for activation",
      why: "Avoid buying a plan you cannot activate during arrival week.",
    },
    {
      item: "Plan type matched to stay length",
      why: "Prepaid flexibility vs SIM-only value vs handset lock-in.",
    },
    {
      item: "eSIM vs physical SIM decided",
      why: "Delivery address and device compatibility change the path.",
    },
    {
      item: "Data fair-use & EU roaming checked",
      why: "Marketing GB is not the same as usable monthly data.",
    },
    {
      item: "Phone unlocked",
      why: "Foreign carrier locks can block a Dutch SIM entirely.",
    },
    {
      item: "Banking OTP week protected",
      why: "Do not port numbers while critical verifications are pending.",
    },
    {
      item: "Home broadband kept separate",
      why: "Order fixed internet on Internet providers — not as a SIM substitute.",
    },
    {
      item: "Cancellation / top-up expiry understood",
      why: "Know how credit expires or how to cancel before you move again.",
    },
  ],
  questionsToAsk: [
    "Which ID documents do you accept for online or in-store activation — and how long does activation take?",
    "Is eSIM available for my phone model, and can I keep my foreign SIM as a second line?",
    "What is the monthly data allowance, fair-use threshold and speed after the threshold?",
    "What are the EU roaming rules, and what happens outside the EU?",
    "Is this prepaid, rolling SIM-only or a fixed-term contract — and what is the renewal price?",
    "Can I port an existing Dutch number, and how long will service be interrupted?",
    "Are international calling packs included or optional add-ons?",
    "How do I cancel or stop top-ups, and what happens to unused credit?",
  ],
  leadCta: {
    heading: "Need Help Shortlisting Phone Providers?",
    body: "Use the directory to compare plan type, activation ID rules, fair-use data and roaming clarity. Then verify current offers with providers or a comparison site — and keep fixed broadband on Internet providers while setup how-to stays on the utilities guide.",
    primaryCta: { label: "Compare phone providers", href: "#directory" },
    secondaryCta: { label: "Open Mobile & connectivity", href: MOBILE_CONNECTIVITY_PATH },
  },
  faqs: [
    {
      q: "What mobile plan types are common in the Netherlands?",
      a: "Most expats start with prepaid or SIM-only, then consider longer contracts later. eSIM is increasingly available for same-day activation. Handset bundles exist but lock you into longer terms — match the plan type to your stay length.",
    },
    {
      q: "How is this page different from Mobile & connectivity?",
      a: "This page is the SIM and phone-plan provider directory (plan types, activation, soft discovery). Mobile & connectivity is the broader services category page for mobile orientation. Use both — they do not replace each other.",
    },
    {
      q: "How is this different from Internet providers?",
      a: "Internet providers owns fixed fibre, cable and DSL home broadband. Phone providers owns mobile SIMs and phone plans. A phone hotspot can bridge install delays but is rarely a long-term home-internet substitute.",
    },
    {
      q: "Do I need a Dutch number for banking?",
      a: "Many banks and services expect a Dutch mobile for one-time passwords. Timing varies by provider — plan activation early in your first weeks. This page does not give personal banking advice.",
    },
    {
      q: "Is EU roaming included?",
      a: "Many Dutch plans include EU/EEA roaming under fair-use rules. Always check the published fair-use threshold and non-EU travel add-ons before you leave. Rules change — verify on the provider’s current pages.",
    },
    {
      q: "Does directory inclusion mean ExpatLife recommends a carrier?",
      a: "No. Listings are informational soft discovery of provider types and comparison approaches. Affiliate blocks may include Simyo, Lebara and Pricewise as soft CTAs — not a ranking of phone carriers.",
    },
    {
      q: "Where do energy and internet directories fit?",
      a: "Internet providers and Energy providers are sibling Connectivity directories. The utilities internet-and-mobile guide and utilities hub cover related household setup topics.",
    },
    {
      q: "Where can I check consumer rights for telecom?",
      a: "Start with ACM consumer pages on telecom, internet and television. They provide switching and complaint orientation — not product rankings.",
    },
  ],
  officialSources: [
    {
      label: "ACM — Telecom, internet and television",
      href: "https://www.acm.nl/en/consumers/telecom-internet-and-television",
      description:
        "Netherlands Authority for Consumers and Markets — consumer orientation on telecom, internet and TV.",
    },
    {
      label: "ACM — Consumers hub",
      href: "https://www.acm.nl/en/consumers",
      description: "Broader consumer-rights orientation for Dutch markets and contracts.",
    },
    {
      label: "Government.nl",
      href: "https://www.government.nl/",
      description: "Official Dutch government information portal for public consumer orientation.",
    },
    {
      label: "Rijksoverheid — Consumenten",
      href: "https://www.rijksoverheid.nl/onderwerpen/consumenten",
      description: "Dutch government consumer topic orientation (Dutch-language).",
    },
    {
      label: "Pricewise (comparison orientation)",
      href: "https://www.pricewise.nl/",
      description: "Public comparison platform often used to screen Dutch mobile deals — not a ranking endorsement.",
    },
  ],
  relatedGuides: [
    {
      label: "Internet providers",
      href: INTERNET_PROVIDERS_PATH,
      status: "live",
      description: "Sibling directory for fixed broadband ISP discovery.",
    },
    {
      label: "Energy providers",
      href: ENERGY_PROVIDERS_PATH,
      status: "live",
      description: "Sibling directory for electricity and gas contract discovery.",
    },
    {
      label: "Mobile & connectivity",
      href: MOBILE_CONNECTIVITY_PATH,
      status: "live",
      description: "Services category page for SIMs, data and local numbers.",
    },
    {
      label: "Internet & mobile how-to",
      href: INTERNET_AND_MOBILE_UTILITIES_PATH,
      status: "live",
      description: "Utilities guide for setting up connectivity after you move.",
    },
    {
      label: "Energy & water",
      href: ENERGY_AND_WATER_PATH,
      status: "live",
      description: "Utilities orientation for energy and water contracts.",
    },
    {
      label: "Utilities hub",
      href: UTILITIES_HUB_PATH,
      status: "live",
      description: "Central utilities orientation after relocation.",
    },
    {
      label: "Estate agents",
      href: ESTATE_AGENTS_PATH,
      status: "live",
      description: "Housing search timing often drives when you need a Dutch number.",
    },
  ] satisfies PhoneProviderLink[],
  servicesLinks: [
    { label: "All Services", href: SERVICES_HUB_PATH, status: "live", description: "Browse service providers for expats in the Netherlands." },
    { label: "Internet providers", href: INTERNET_PROVIDERS_PATH, status: "live", description: "Fixed broadband ISP directory." },
    { label: "Energy providers", href: ENERGY_PROVIDERS_PATH, status: "live", description: "Electricity and gas provider directory." },
    { label: "Mobile & connectivity", href: MOBILE_CONNECTIVITY_PATH, status: "live", description: "SIM and connectivity category page." },
    { label: "Moving companies", href: MOVING_COMPANIES_PATH, status: "live", description: "Domestic move support before activation day." },
    { label: "Rental agencies", href: RENTAL_AGENCIES_PATH, status: "live", description: "Rental search that affects when you need OTPs." },
    { label: "Insurance brokers", href: INSURANCE_BROKERS_PATH, status: "live", description: "Household protection beside utilities setup." },
  ] satisfies PhoneProviderLink[],
  exploreNextCards: [
    {
      label: "Internet providers",
      href: INTERNET_PROVIDERS_PATH,
      status: "live",
      description: "Compare fixed broadband next in the Connectivity cluster.",
    },
    {
      label: "Energy providers",
      href: ENERGY_PROVIDERS_PATH,
      status: "live",
      description: "Compare energy contracts after your mobile number is sorted.",
    },
    {
      label: "Mobile & connectivity",
      href: MOBILE_CONNECTIVITY_PATH,
      status: "live",
      description: "Orient on SIMs, data and local numbers in the category page.",
    },
    {
      label: "Internet & mobile how-to",
      href: INTERNET_AND_MOBILE_UTILITIES_PATH,
      status: "live",
      description: "Follow the practical setup steps after you choose a plan.",
    },
    {
      label: "Utilities hub",
      href: UTILITIES_HUB_PATH,
      status: "live",
      description: "See the wider utilities checklist for new arrivals.",
    },
    {
      label: "Dutch Cities Guide",
      href: CITIES_HUB_PATH,
      status: "live",
      description: "City context for housing and household setup timing.",
    },
  ] satisfies PhoneProviderLink[],
};
