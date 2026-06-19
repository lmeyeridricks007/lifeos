import { DIGID_NETHERLANDS_PATH } from "./digiDNetherlandsPageModel";
import { GOVERNMENT_PORTALS_NETHERLANDS_PATH } from "./governmentPortalsNetherlandsPageModel";
import { MUNICIPALITY_SERVICES_NETHERLANDS_PATH } from "./municipalityServicesNetherlandsPageModel";

export const PRIVACY_AND_SAFETY_BASICS_NETHERLANDS_PATH =
  "/netherlands/practical-life/privacy-and-safety-basics-netherlands/" as const;

export const MOVING_TO_NETHERLANDS_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const HOUSING_HUB_PATH = "/netherlands/housing/" as const;
export const OPEN_BANK_ACCOUNT_PATH = "/netherlands/open-bank-account-netherlands/" as const;
export const MONEY_BANKING_PATH = "/netherlands/money/banking/" as const;
export const GOVERNMENT_SERVICES_HUB_PATH = "/netherlands/government-services/" as const;

export type PracticalLifeLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type TipCard = {
  title: string;
  body: string;
};

export type SnapshotSignal = {
  label: string;
  value: string;
  note: string;
};

export type ExpatQuestion = {
  q: string;
  a: string;
};

export type SafetyTask = {
  task: string;
  channel: string;
  timing: string;
};

export type SafetyScenario = {
  situation: string;
  action: string;
  note: string;
};

export type SafetyGuideSection = {
  id: string;
  visualSlug: string;
  heading: string;
  paragraphs: readonly string[];
  cards?: readonly TipCard[];
  bullets?: readonly string[];
  bulletTitle?: string;
  tasks?: readonly SafetyTask[];
  scenarios?: readonly SafetyScenario[];
  crossLink?: {
    href: string;
    title: string;
    description: string;
    linkLabel: string;
  };
};

export type ContactDirectoryEntry = {
  name: string;
  purpose: string;
  website: string;
  websiteLabel: string;
  whenToUse: string;
};

export type CitySafetyCard = {
  city: string;
  href: string;
  environment: string;
  considerations: string;
};

const INFOGRAPHIC_VERSION = "premium-v3";
const HERO_IMAGE_VERSION = "v3";
const VISUAL_PREFIX = "netherlands-privacy-safety-basics";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const privacyAndSafetyBasicsNetherlandsPage = {
  slug: "privacy-and-safety-basics-netherlands",
  path: PRIVACY_AND_SAFETY_BASICS_NETHERLANDS_PATH,
  hubPath: MOVING_TO_NETHERLANDS_PATH,
  parentGuidePath: MUNICIPALITY_SERVICES_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-11-05",
  seo: {
    title: "Privacy and Safety Basics in the Netherlands | Expat Guide",
    description:
      "Learn about privacy, personal safety, emergency services, scam awareness, digital security and consumer protections in the Netherlands.",
    keywords: [
      "safety netherlands",
      "privacy netherlands",
      "expat safety netherlands",
      "living safely netherlands",
      "netherlands safety guide",
      "emergency services netherlands",
      "scams netherlands",
      "online safety netherlands",
      "personal safety netherlands",
      "privacy rights netherlands",
    ],
  },
  hero: {
    eyebrow: "Practical life guide",
    pageTitle: "Privacy and Safety Basics in the Netherlands",
    subtitle:
      "Understand personal safety, digital security, privacy rights and emergency services so you can confidently settle into life in the Netherlands.",
    chips: ["Emergency numbers", "Scam awareness", "DigiD security", "Consumer protections"],
    disclaimer:
      "General safety and privacy orientation only — not legal, security or emergency advice. In an emergency call 112. Verify details on official websites.",
    primaryCta: { label: "Learn Safety Basics", href: "#intro" },
    secondaryCta: { label: "Explore Practical Life Guides", href: GOVERNMENT_SERVICES_HUB_PATH },
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Photorealistic editorial photo of an international couple in a bright Dutch apartment kitchen saving emergency numbers on a phone and reviewing secure login on a tablet, with canal houses and bicycles visible through the window — calm, confident privacy and safety mood without police or fear imagery.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "At a glance" },
    { href: "#privacy", label: "Privacy" },
    { href: "#personal-safety", label: "Personal safety" },
    { href: "#emergency-services", label: "Emergencies" },
    { href: "#police", label: "Police" },
    { href: "#digital-safety", label: "Digital safety" },
    { href: "#scams", label: "Scams" },
    { href: "#banking", label: "Banking" },
    { href: "#housing", label: "Housing" },
    { href: "#digital-government", label: "DigiD" },
    { href: "#consumer-protection", label: "Consumer rights" },
    { href: "#families", label: "Families" },
    { href: "#students", label: "Students" },
    { href: "#cities", label: "Cities" },
    { href: "#checklist", label: "Checklist" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#contacts", label: "Contacts" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
    { href: "#related-guides", label: "Related" },
    { href: "#explore-next", label: "Explore next" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation map linking privacy, personal safety, emergencies, digital hygiene and consumer rights for expats in the Netherlands.",
      "Five pillars with actionable first steps — save 112, enable 2FA and verify official links before you click."
    ),
    snapshot: visual(
      "snapshot",
      "Premium at-a-glance panel with emergency 112, GDPR framework, police 0900-8844 and consumer help channels.",
      "Six concrete signals with numbers and names you can save to your phone today."
    ),
    privacy: visual(
      "privacy",
      "Premium record-file builder for BSN sharing, GDPR rights, DigiD protection and marketing opt-outs.",
      "When employers, landlords and apps ask for data — what to check before you share."
    ),
    personalSafety: visual(
      "personal-safety",
      "Premium city route map for walking, cycling, OV and nightlife with calm practical habits.",
      "Double-lock bikes, zip bags on trams and plan routes home after dark."
    ),
    emergencyServices: visual(
      "emergency-services",
      "Premium decision flowchart for 112 versus 0900-8844 police and huisarts urgent care.",
      "Life-threatening danger to 112; stolen bike and weekend fever use different channels."
    ),
    police: visual(
      "police",
      "Premium Politie.nl reporting desk scene with bike theft and lost document steps.",
      "Photograph, report online, keep reference numbers for insurance."
    ),
    digitalSafety: visual(
      "digital-safety",
      "Premium eight-point digital hygiene checklist for passwords, phishing and banking apps.",
      "Concrete red flags such as urgent tax links and callers asking for login codes."
    ),
    scams: visual(
      "scams",
      "Premium eight-panel scam board with phishing, housing, marketplace and WhatsApp examples.",
      "Recognise patterns before you pay — verify viewing and official domains."
    ),
    banking: visual(
      "banking",
      "Premium payment verification desk with Tikkie name checks and card freeze steps.",
      "Confirm recipient on iDEAL and freeze cards immediately if your phone is lost."
    ),
    housing: visual(
      "housing",
      "Premium rental red-flag checklist before paying deposits on unseen properties.",
      "Below-market prices and foreign wire requests are common warning signs."
    ),
    digitalGovernment: visual(
      "digital-government",
      "Premium DigiD activation and security timeline with app-only approval flow.",
      "Activate via official channels and review authorised organisations quarterly."
    ),
    consumerProtection: visual(
      "consumer-protection",
      "Premium service map for ConsuWijzer disputes, ACM markets and Fraudehelpdesk scams.",
      "Which channel to use for contract disputes versus scam reports."
    ),
    families: visual(
      "families",
      "Premium family safety cards for schools, child cycling, huisarts and community clubs.",
      "Register healthcare early and teach helmet and light habits on family bikes."
    ),
    students: visual(
      "students",
      "Premium student semester timeline for housing verification, OV and campus phishing.",
      "Verify university housing portals before transferring deposits."
    ),
    cities: visual(
      "cities",
      "Premium Netherlands map with Amsterdam, Rotterdam, The Hague, Utrecht and Eindhoven safety notes.",
      "City-specific tips for centres, student markets and suburban campuses."
    ),
    checklist: visual(
      "checklist",
      "Premium newcomer safety record with eight timed tasks for the first two weeks.",
      "From saving 112 to bookmarking Fraudehelpdesk and testing card freeze."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board with eight common expat errors and one-line fixes.",
      "Oversharing BSN, weak passwords and unverified housing offers top the list."
    ),
    contacts: visual(
      "contacts",
      "Premium directory table for 112, Politie, Fraudehelpdesk, AP and Government.nl.",
      "When to use each official contact — emergencies versus orientation."
    ),
    faq: visual(
      "faq",
      "Premium FAQ panels with concrete answers on safety, 112, fraud and DigiD.",
      "Quick readable answers to the questions newcomers ask most."
    ),
    sources: visual(
      "sources",
      "Premium official source cards for Government.nl, Politie, Rijksoverheid, Fraudehelpdesk and AP.",
      "Bookmark these starting points and check guidance dates before acting."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium hub diagram linking DigiD, government portals, housing, banking and municipality guides.",
      "Suggested reading order after this privacy and safety orientation."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium explore-next path for DigiD setup, portal mapping and safe housing search.",
      "Pick the next guide that matches your current relocation priority."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "What this guide covers",
      items: [
        "Privacy culture and data protection expectations in the Netherlands",
        "Everyday personal safety without alarmist framing",
        "Emergency numbers and when to use official channels",
        "Digital hygiene for banking, DigiD and government services",
      ],
    },
    snapshot: {
      title: "Safety signals to remember",
      items: [
        "112 for life-threatening emergencies across the EU standard",
        "GDPR-level privacy norms apply to personal data handling",
        "Phishing and marketplace scams target newcomers — stay sceptical",
        "Official sites use .nl government domains — verify before clicking",
      ],
    },
    privacy: {
      title: "Privacy in practice",
      items: [
        "Ask why data is collected before sharing BSN or passport copies",
        "Use official portals for tax and gemeente tasks when possible",
        "Review app permissions on banking and identity apps",
        "Know you can contact Autoriteit Persoonsgegevens about data rights",
      ],
    },
    personalSafety: {
      title: "Everyday habits",
      items: [
        "Lock bikes properly — theft is a common nuisance, not violent crime",
        "Use well-lit routes and trusted transport apps at night",
        "Keep valuables out of sight on trams and trains",
        "Share travel plans with someone when exploring new areas",
      ],
    },
    emergencyServices: {
      title: "Emergency vs non-emergency",
      items: [
        "112 — immediate danger, serious injury or crime in progress",
        "0900-8844 — police non-emergency (no immediate danger)",
        "Local huisarts line — urgent medical advice when not life-threatening",
        "Gemeente websites — non-urgent local issues and permits",
      ],
    },
    police: {
      title: "Police services",
      items: [
        "Report theft or loss online when safe to do so",
        "Keep serial numbers and photos of valuable items",
        "Visit politie.nl for current reporting options",
        "Community officers exist in many neighbourhoods",
      ],
    },
    digitalSafety: {
      title: "Digital hygiene",
      items: [
        "Use unique passwords and enable two-factor authentication",
        "Never share DigiD codes or full login sequences with anyone",
        "Avoid banking on public Wi-Fi without a VPN",
        "Update phone OS and banking apps regularly",
      ],
    },
    scams: {
      title: "Scam patterns",
      items: [
        "Urgent payment requests via WhatsApp or email",
        "Fake IND or Belastingdienst messages with odd links",
        "Too-good rental offers without viewing",
        "Job offers asking for upfront fees or passport photos early",
      ],
    },
    banking: {
      title: "Financial safety",
      items: [
        "Verify Tikkie sender name and amount before every approval",
        "Freeze cards in the banking app within minutes of loss",
        "Use iDEAL only through merchants you initiated payment with",
        "Dispute unknown small charges — they may test stolen cards",
      ],
    },
    housing: {
      title: "Rental awareness",
      items: [
        "Never pay deposits before viewing or signed contract",
        "Match bank account holder name to landlord on contract",
        "Watermark passport scans with purpose before sending",
        "Report suspicious listings to platform and politie.nl",
      ],
    },
    digitalGovernment: {
      title: "DigiD protection",
      items: [
        "Activate DigiD only through official digid.nl flows",
        "Use the DigiD app notification approval model",
        "Deny unexpected approval requests on your phone",
        "Review active DigiD authorisations monthly in year one",
      ],
    },
    consumerProtection: {
      title: "Consumer channels",
      items: [
        "ConsuWijzer for disputes and cooling-off questions",
        "ACM for telecom, energy and market supervision context",
        "Fraudehelpdesk for scam reporting and awareness",
        "Keep emails and contracts for complaint evidence",
      ],
    },
    families: {
      title: "Family orientation",
      items: [
        "Register children for school and healthcare promptly",
        "Teach cycling rules and helmet habits early",
        "Know huisarts and pediatric urgent care routes",
        "Join neighbourhood groups when comfortable",
      ],
    },
    students: {
      title: "Student tips",
      items: [
        "Verify university housing offers through official portals",
        "Use OV and trusted ride apps after nightlife",
        "Back up thesis and ID documents securely",
        "Report campus phishing to IT services",
      ],
    },
    cities: {
      title: "City notes",
      items: [
        "Busy centres need extra bike-lock and pickpocket awareness",
        "Student cities have active rental markets — verify listings",
        "Each gemeente publishes local safety and waste info online",
        "City expat guides cover neighbourhood-specific tips",
      ],
    },
    checklist: {
      title: "First-week actions",
      items: [
        "Save 112 and local huisarts number in your phone",
        "Enable 2FA on email and banking",
        "Bookmark Government.nl and politie.nl",
        "Read Fraudehelpdesk scam alerts monthly",
      ],
    },
    mistakes: {
      title: "Avoid these",
      items: [
        "Sharing BSN copies without checking the recipient",
        "Clicking links in unsolicited tax or visa emails",
        "Paying housing deposits to unverified accounts",
        "Delaying DigiD security setup after registration",
      ],
    },
    contacts: {
      title: "Official contacts",
      items: [
        "112 — life-threatening emergencies",
        "Politie.nl — reporting and safety information",
        "Fraudehelpdesk.nl — scam awareness and reporting",
        "Autoriteit Persoonsgegevens — data protection authority",
      ],
    },
    faq: {
      title: "FAQ themes",
      items: [
        "Is the Netherlands safe for newcomers?",
        "What is the emergency number?",
        "How do I report fraud or phishing?",
        "How do I protect DigiD and banking apps?",
      ],
    },
    sources: {
      title: "Official starting points",
      items: [
        "Government.nl — consumer and daily-life orientation",
        "Politie.nl — police services and reporting",
        "Rijksoverheid.nl — government information portal",
        "Fraudehelpdesk — national fraud helpdesk",
      ],
    },
    relatedGuides: {
      title: "Continue your setup",
      items: [
        "DigiD guide for digital identity setup",
        "Government portals map for online services",
        "Housing hub for rental market orientation",
        "Open bank account guide for secure banking start",
      ],
    },
    exploreNext: {
      title: "Next practical steps",
      items: [
        "Secure DigiD after municipality registration",
        "Map government portals for recurring admin",
        "Review housing search safety before paying deposits",
        "Set up banking with fraud-aware habits",
      ],
    },
  },
  intro: {
    heading: "Is the Netherlands Safe?",
    paragraphs: [
      "The Netherlands is generally considered a safe, well-organised country with reliable infrastructure, effective emergency services and strong privacy and consumer protection frameworks. Most expats settle without serious safety incidents when they follow everyday urban habits and basic digital hygiene.",
      "Like any country, risks exist — bike theft, phishing, rental scams and payment fraud are more common than violent crime. Understanding local systems, official channels and scam patterns helps you stay confident rather than anxious.",
      "This guide offers practical orientation on privacy culture, personal safety, emergencies, digital security and consumer resources. It is not legal advice, security consulting or emergency instruction — in immediate danger always call 112.",
    ],
  },
  quickAnswer: {
    summary:
      "The Netherlands is generally safe with strong public services, privacy laws and consumer protections — but newcomers should still learn emergency numbers and scam patterns.",
    bullets: [
      "Low violent crime rates in most cities; everyday nuisances include bike theft and digital fraud.",
      "112 is the EU emergency number for life-threatening situations.",
      "GDPR-level privacy norms protect personal data — know your rights and official channels.",
      "Phishing, rental and marketplace scams target newcomers — verify before paying.",
    ],
    note: "Save 112 and your huisarts number when you arrive — calm preparation beats last-minute searching.",
  },
  snapshotSignals: [
    { label: "Emergency", value: "112", note: "Life-threatening danger" },
    { label: "Privacy law", value: "GDPR + AP", note: "Strong data protection framework" },
    { label: "Police non-emergency", value: "0900-8844", note: "When no immediate danger" },
    { label: "Scam helpdesk", value: "Fraudehelpdesk", note: "Report and learn scam patterns" },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    { title: "Strong privacy laws", body: "Personal data handling is regulated — organisations must explain why they collect information." },
    { title: "Reliable emergency services", body: "112 connects police, fire and ambulance for urgent emergencies across the Netherlands." },
    { title: "Low violent crime rates", body: "Most cities feel safe day-to-day; focus on theft prevention and digital fraud awareness." },
    { title: "Common digital scams exist", body: "Phishing, fake government messages and marketplace fraud target expats — verify links and payments." },
    { title: "Consumer protections available", body: "ACM and ConsuWijzer help with market supervision and consumer disputes." },
    { title: "Digital government widely used", body: "DigiD and official portals are normal — protect credentials like bank logins." },
  ] satisfies TipCard[],
  snapshotMilestones: [
    { label: "Day 1", value: "Save 112", note: "Add huisarts number when registered" },
    { label: "Week 1", value: "DigiD security", note: "Review authorisations and MFA settings" },
    { label: "Week 1–2", value: "Home safety", note: "Locks, smoke detectors, shared emergency contacts" },
    { label: "Month 1", value: "Scam patterns", note: "Bookmark Fraudehelpdesk and official portals" },
  ] satisfies SnapshotSignal[],
  snapshotUseTips: [
    "Save 112 and 0900-8844 in your phone before your first week exploring.",
    "Use this page as a map — official sites publish the latest procedures.",
    "Share emergency contacts with housemates or family members abroad.",
    "Verify government links manually; bookmark official URLs instead of clicking SMS links.",
    "Pair safety setup with DigiD and government portal guides for digital hygiene.",
  ],
  orientationFlowSteps: [
    "On arrival: save 112, your address in Dutch format, and huisarts contact when registered.",
    "In week one: strengthen passwords, review DigiD authorisations and learn local scam patterns.",
    "Ongoing: verify payments and links, report fraud early, and use official portals for government tasks.",
  ],
  expatQuestions: [
    {
      q: "Is the Netherlands safe for expats?",
      a: "Generally yes. Violent crime rates are low in most areas. Everyday risks include bike theft, pickpocketing in busy centres and online fraud. Standard urban awareness and digital hygiene are usually enough.",
    },
    {
      q: "What is the emergency number?",
      a: "112 for life-threatening emergencies (police, fire, ambulance). For police when there is no immediate danger, use 0900-8844. For urgent medical advice when not life-threatening, contact your huisarts or local urgent care line.",
    },
    {
      q: "How private is my personal data?",
      a: "The Netherlands applies EU GDPR rules. Organisations need lawful grounds to process data. You can ask what is collected and contact Autoriteit Persoonsgegevens about data protection concerns.",
    },
    {
      q: "What scams should newcomers watch for?",
      a: "Phishing emails pretending to be Belastingdienst or IND, fake rental listings, marketplace payment tricks, WhatsApp payment requests and job offers asking for upfront fees or passport copies.",
    },
  ] satisfies ExpatQuestion[],
  guideSections: [
    {
      id: "privacy",
      visualSlug: "privacy",
      heading: "Privacy Culture and Expectations",
      paragraphs: [
        "Dutch society values privacy and straightforward communication about personal information. You will routinely share data for registration, taxes, healthcare and banking — but legitimate providers explain why data is needed.",
        "GDPR gives residents rights to access, correct and sometimes delete personal data. Autoriteit Persoonsgegevens supervises compliance. This does not replace reading each organisation's privacy statement.",
      ],
      cards: [
        { title: "Personal information", body: "BSN, address and ID copies are sensitive — share only with verified landlords, employers, insurers and government channels." },
        { title: "Data protection", body: "Ask how long data is stored and whether it is shared with third parties before signing forms." },
        { title: "Digital identity", body: "DigiD links you to government services — treat approval requests like banking logins." },
        { title: "Marketing opt-outs", body: "You can often limit commercial contact; check privacy settings in apps and bank portals." },
      ],
      bullets: [
        "Employers and insurers need accurate data — keep copies of what you submitted.",
        "Social media oversharing can complicate housing or job searches — adjust visibility.",
        "Public Wi-Fi is fine for browsing but avoid sensitive logins without protection.",
      ],
      tasks: [
        { task: "Read employer privacy notice", channel: "Contract and HR onboarding pack", timing: "Before or within your first work week" },
        { task: "Watermark passport copies", channel: "Add purpose text such as 'for rental only'", timing: "Before sending scans to landlords" },
        { task: "Review app permissions", channel: "Phone settings and bank or insurer apps", timing: "After installing banking and DigiD apps" },
        { task: "Request your data copy", channel: "Organisation privacy contact or AP guidance", timing: "When unsure what data is stored about you" },
      ],
      scenarios: [
        {
          situation: "Landlord asks for BSN before a viewing",
          action: "Ask why it is needed now — many landlords only need it at contract signing.",
          note: "Legitimate providers explain purpose and storage period clearly.",
        },
        {
          situation: "Marketing calls after opening a bank account",
          action: "Check portal privacy settings and opt out of commercial contact.",
          note: "You can often limit sharing for marketing without affecting core banking.",
        },
        {
          situation: "Old employer still has your address on file",
          action: "Request correction under GDPR access and rectification rights.",
          note: "Keep email confirmation of updates for your records.",
        },
      ],
    },
    {
      id: "personal-safety",
      visualSlug: "personalSafety",
      heading: "Everyday Personal Safety",
      paragraphs: [
        "Most Dutch cities are walkable and well lit. Cycling is central to daily life — invest in a good lock and learn local traffic rules. Public transport is generally safe; keep bags closed in crowded trams.",
        "Nightlife areas are busy and monitored but still use the same awareness you would in any European city: travel with friends, use licensed taxis or trusted apps, and plan your route home.",
      ],
      cards: [
        { title: "Walking", body: "Stay aware at crossings; cyclists have priority on many paths." },
        { title: "Cycling", body: "Use two locks, park in lit areas, register your bike if the municipality offers it." },
        { title: "Public transport", body: "Validate OV cards, watch bags near doors, report harassment to staff." },
        { title: "Travel", body: "Share itineraries for intercity trips; keep digital copies of ID separately from phones." },
      ],
      bullets: [
        "Bike theft is the most common property crime — invest in quality locks, not only cable locks.",
        "Friday and Saturday nights in city centres need extra bag awareness, not panic.",
        "Licensed taxis and major ride apps are standard; avoid unmarked offers at stations.",
        "Dutch traffic rules differ — look for cyclists when crossing bike paths.",
      ],
      bulletTitle: "Everyday habits",
      tasks: [
        { task: "Photograph bike frame number", channel: "Phone gallery or insurer app", timing: "Day you buy or receive a bike" },
        { task: "Save huisarts number", channel: "GP practice card or website", timing: "After registering with a practice" },
        { task: "Plan late-night route", channel: "OV app or trusted ride app", timing: "Before nightlife or events" },
        { task: "Enable find-my-device", channel: "Apple or Google account settings", timing: "First week with a new phone" },
      ],
      scenarios: [
        {
          situation: "Phone stolen on a crowded tram",
          action: "Freeze bank cards in the banking app, remote-wipe the phone, report at politie.nl.",
          note: "Fraud often follows within minutes — speed matters more than recovering the device.",
        },
        {
          situation: "Bike missing from a rack you used daily",
          action: "Check nearby racks, then file theft report with frame photos if available.",
          note: "Insurance claims often need a police reference even when the bike is not found.",
        },
        {
          situation: "Feeling followed while walking at night",
          action: "Enter a shop, café or staffed station; call 112 if threatened.",
          note: "Busy Dutch centres usually have open venues within a short walk.",
        },
      ],
    },
    {
      id: "emergency-services",
      visualSlug: "emergencyServices",
      heading: "Emergency Services",
      paragraphs: [
        "112 is the single emergency number for police, fire and ambulance when lives are at risk or crime is in progress. Operators may ask location, nature of emergency and callback number — stay on the line.",
        "Non-emergency police: 0900-8844. For medical issues that are urgent but not life-threatening, contact your huisarts or local urgent care (huisartsenpost). Gemeente websites list local non-emergency contacts.",
      ],
      bullets: [
        "112 works across the EU — same number many expats already know.",
        "Know your address in Dutch format for faster emergency response.",
        "After calling 112, follow instructions and do not hang up early.",
        "Save your huisarts number when you register with a practice.",
      ],
      bulletTitle: "Key numbers",
      tasks: [
        { task: "Life-threatening emergency", channel: "Call 112", timing: "Police, fire or ambulance — stay on the line" },
        { task: "Crime without immediate danger", channel: "Call 0900-8844 or politie.nl", timing: "Theft reports, harassment documentation" },
        { task: "Urgent medical advice", channel: "Huisarts or huisartsenpost", timing: "Not life-threatening but needs same-day care" },
        { task: "Poison or medication emergency", channel: "Call 112", timing: "Follow operator instructions immediately" },
      ],
      scenarios: [
        {
          situation: "Witnessing a traffic accident with injuries",
          action: "Call 112, give location and number of injured people.",
          note: "Do not move seriously injured people unless immediate danger.",
        },
        {
          situation: "Bike stolen overnight",
          action: "File report via politie.nl or 0900-8844 with frame number photos.",
          note: "Insurance may require an official report even if the bike is not recovered.",
        },
        {
          situation: "Chest pain but conscious and breathing",
          action: "Call huisartsenpost or 112 if severe — operator triages urgency.",
          note: "112 is correct if symptoms worsen rapidly.",
        },
      ],
    },
    {
      id: "police",
      visualSlug: "police",
      heading: "Understanding Police Services",
      paragraphs: [
        "Dutch police (Politie) handle crime reports, traffic incidents, lost property and community safety programmes. Many services are available online at politie.nl including theft reports when safe to file digitally.",
        "Community officers engage with neighbourhoods and schools. Reporting minor theft helps statistics and may support insurance claims even when items are not recovered.",
      ],
      cards: [
        { title: "Online reporting", body: "Theft, vandalism and some fraud cases can be filed at politie.nl when safe." },
        { title: "Lost property", body: "Search politie.nl lost-and-found orientation — gemeente may handle some documents." },
        { title: "Reference numbers", body: "Save report IDs for insurance and employer documentation." },
        { title: "Community officers", body: "Wijkagenten engage locally — useful for neighbourhood questions, not emergencies." },
      ],
      bullets: [
        "Report bike theft with frame number and photos if available.",
        "Lost Dutch documents may require gemeente and police steps — start online.",
        "Emergency remains 112; online reporting is for non-urgent cases.",
      ],
      tasks: [
        { task: "Report bike theft", channel: "politie.nl online form or 0900-8844", timing: "When you discover the theft" },
        { task: "Report pickpocketing or bag theft", channel: "politie.nl or station staff if at a hub", timing: "Same day if possible for insurance" },
        { task: "Document lost Dutch ID", channel: "politie.nl plus gemeente ID procedures", timing: "As soon as you confirm loss" },
        { task: "Request police reference letter", channel: "Follow politie.nl guidance for your report type", timing: "When insurer or employer needs proof" },
      ],
      scenarios: [
        {
          situation: "Car window smashed, nothing taken",
          action: "Photograph damage, file online report for insurance documentation.",
          note: "Even minor damage claims often need an official reference.",
        },
        {
          situation: "Harassment on public transport",
          action: "Tell staff immediately; they can involve security or police at next stop.",
          note: "112 if you feel immediate danger; otherwise staff can help document the incident.",
        },
        {
          situation: "Online marketplace buyer never paid",
          action: "Keep chat logs; report fraud pattern to Fraudehelpdesk if payment trick was used.",
          note: "Police report may help if identity theft or large loss is involved.",
        },
      ],
    },
    {
      id: "digital-safety",
      visualSlug: "digitalSafety",
      heading: "Online Safety",
      paragraphs: [
        "Newcomers rely on email, banking apps, DigiD and marketplace platforms from day one. Strong passwords, device updates and scepticism toward unsolicited messages reduce most digital risk.",
        "Official government communication usually arrives via secure portals or post — not random SMS links asking for full credentials.",
      ],
      cards: [
        { title: "Password security", body: "Use a password manager and unique passwords for email, banking and DigiD." },
        { title: "Device security", body: "Enable screen lock, biometrics and automatic OS updates." },
        { title: "Phishing awareness", body: "Check sender addresses and URLs; type official sites manually." },
        { title: "Public Wi-Fi", body: "Avoid sensitive logins on open networks or use a trusted VPN." },
      ],
      bullets: [
        "Government rarely asks for full passwords or DigiD codes by phone or SMS.",
        "Turn on automatic updates for OS, browser and banking apps.",
        "Use separate email for banking alerts versus shopping newsletters.",
        "Report phishing to your employer IT team if work accounts are targeted.",
      ],
      bulletTitle: "Digital hygiene",
      tasks: [
        { task: "Enable two-factor authentication", channel: "Email, banking and cloud storage settings", timing: "First week after arrival" },
        { task: "Review DigiD authorisations", channel: "DigiD app or digid.nl", timing: "Monthly during first year" },
        { task: "Update phone OS and apps", channel: "Automatic updates or manual check monthly", timing: "Ongoing" },
        { task: "Report phishing email", channel: "Forward to employer IT or mark as phishing in mail app", timing: "When suspicious message arrives" },
      ],
      scenarios: [
        {
          situation: "SMS claims DigiD will expire with a link",
          action: "Delete message; open digid.nl manually or use the official app only.",
          note: "DigiD does not threaten account closure via random text links.",
        },
        {
          situation: "Browser warning on a tax website",
          action: "Stop; type belastingdienst.nl yourself and check for padlock and correct domain.",
          note: "Look-alike domains are a common phishing technique for newcomers.",
        },
        {
          situation: "Work laptop asks for unusual admin access",
          action: "Contact employer IT through known channels before installing anything.",
          note: "Job scams sometimes start with malicious software downloads.",
        },
      ],
    },
    {
      id: "banking",
      visualSlug: "banking",
      heading: "Protecting Your Finances",
      paragraphs: [
        "Open accounts through official bank websites or branches. Dutch payment culture uses cards, Tikkie and iDEAL — always verify recipient names before approving.",
        "If your phone or card is lost, freeze cards in the banking app immediately and report to the bank and police if theft is suspected.",
      ],
      cards: [
        { title: "iDEAL payments", body: "Browser or app redirect to your bank — confirm merchant name and amount before approving." },
        { title: "Tikkie requests", body: "Check sender name and amount; scammers spoof familiar names on payment requests." },
        { title: "Card freeze", body: "Most Dutch banking apps let you block cards instantly without calling." },
        { title: "Statements", body: "Review small test transactions — fraudsters sometimes probe accounts with tiny amounts first." },
      ],
      bullets: [
        "Never share card reader codes, PINs or full DigiD sequences with callers.",
        "Use bank app notifications for every debit above a low threshold.",
        "Separate savings from daily spending accounts when possible.",
        "Report unauthorised payments to the bank first — speed limits liability.",
      ],
      bulletTitle: "Payment habits",
      tasks: [
        { task: "Freeze lost or stolen card", channel: "Banking app card settings", timing: "Immediately when card or phone is missing" },
        { task: "Verify Tikkie before paying", channel: "Match name and amount in banking app", timing: "Every payment request" },
        { task: "Report unauthorised debit", channel: "Bank fraud line or in-app dispute", timing: "Within 24 hours when possible" },
        { task: "Set payment alerts", channel: "Bank app notification settings", timing: "After opening your account" },
      ],
      scenarios: [
        {
          situation: "Caller claims bank fraud team needs your codes",
          action: "Hang up; call the number on your bank card or use the official app chat.",
          note: "Banks never ask for full login sequences or remote desktop access.",
        },
        {
          situation: "iDEAL payment page looks different than usual",
          action: "Cancel; log into your bank manually and check pending payments.",
          note: "Fake payment pages mimic bank styling — verify the bank domain.",
        },
        {
          situation: "Small unknown charge on statement",
          action: "Dispute via app and monitor for follow-up charges.",
          note: "Micro-charges sometimes test whether a stolen card is still active.",
        },
      ],
      crossLink: {
        href: OPEN_BANK_ACCOUNT_PATH,
        title: "Open a Bank Account in the Netherlands",
        description: "Secure banking setup, ID requirements and payment habits for newcomers after registration.",
        linkLabel: "Open banking guide",
      },
    },
    {
      id: "housing",
      visualSlug: "housing",
      heading: "Housing and Rental Awareness",
      paragraphs: [
        "Rental scams peak during tight markets. Warning signs include below-market prices, refusal to show the property, pressure to pay before contract signing and requests to wire deposits abroad.",
        "Use established platforms, verify agency registration where possible and register your address at the gemeente only after signing a legitimate contract.",
      ],
      cards: [
        { title: "Below-market price", body: "If a canal-centre flat looks half the usual rent, verify identity before any payment." },
        { title: "No viewing", body: "Refuse deposits when the landlord refuses video or in-person walkthrough." },
        { title: "Foreign wire only", body: "Legitimate Dutch rentals usually use Dutch bank accounts and signed contracts." },
        { title: "Copied photos", body: "Reverse-image search listing photos if the same kitchen appears on multiple cities." },
      ],
      bullets: [
        "Read the full contract before transferring any deposit or key money.",
        "Register at the gemeente only after signing — registration confirms legitimate tenancy.",
        "Use platform messaging until you verify the landlord or agency identity.",
        "Never send passport copies without watermarking the purpose on the scan.",
      ],
      bulletTitle: "Before you pay",
      tasks: [
        { task: "Verify landlord or agency", channel: "KVK lookup, platform profile and viewing", timing: "Before any deposit" },
        { task: "Inspect contract terms", channel: "Notice period, deposit cap and utilities", timing: "Before signing" },
        { task: "Transfer deposit to verified account", channel: "Match name on contract to bank account holder", timing: "Only after signed contract" },
        { task: "Report suspicious listing", channel: "Platform report button plus politie.nl if fraud suspected", timing: "When red flags appear" },
      ],
      scenarios: [
        {
          situation: "Landlord abroad asks for Western Union deposit",
          action: "Stop — this is a classic scam pattern in Dutch rental markets.",
          note: "Legitimate landlords use Dutch contracts and local bank transfers.",
        },
        {
          situation: "Agency charges fee before showing the property",
          action: "Research agency registration; many reputable agencies charge only after match.",
          note: "Student cities see extra fake agency websites each autumn.",
        },
        {
          situation: "Roommate found listing on social media only",
          action: "Insist on viewing and written sublet permission from main tenant or landlord.",
          note: "Illegal sublets can leave you without tenant rights or deposit protection.",
        },
      ],
      crossLink: {
        href: HOUSING_HUB_PATH,
        title: "Housing in the Netherlands",
        description: "Rental market, contracts, deposits and tenant orientation for expats searching for a home.",
        linkLabel: "Open housing hub",
      },
    },
    {
      id: "digital-government",
      visualSlug: "digitalGovernment",
      heading: "Protecting DigiD and Government Accounts",
      paragraphs: [
        "DigiD is the gateway to taxes, healthcare admin and many gemeente services. Activate only via digid.nl or the official app. Approval happens on your phone — never share codes with callers.",
        "Review which organisations have active DigiD authorisations and revoke unused ones. Government portals guide links to official tasks — bookmark our government portals guide for orientation.",
      ],
      cards: [
        { title: "Activation letter", body: "Official code arrives by post to your registered address — plan timing after gemeente registration." },
        { title: "App approval", body: "Legitimate logins show a push notification on your phone — approve only requests you initiated." },
        { title: "Authorisation review", body: "Revoke old insurer or employer DigiD links you no longer use." },
        { title: "Recovery codes", body: "Store backup codes offline — not in the same cloud as your password list." },
      ],
      bullets: [
        "Never approve a DigiD request you did not start yourself.",
        "Government staff do not call asking to install remote-access software.",
        "Use official digid.nl — not search ads or email links.",
        "Pair DigiD setup with MijnOverheid activation for message overview.",
      ],
      tasks: [
        { task: "Activate DigiD", channel: "digid.nl after BSN and address registration", timing: "Usually week 2–4 after arrival" },
        { task: "Install DigiD app", channel: "Official app store listing from digid.nl", timing: "During activation" },
        { task: "Review authorisations", channel: "DigiD app organisation list", timing: "Monthly in first year" },
        { task: "Bookmark agency portals", channel: "Government portals guide plus MijnOverheid", timing: "After DigiD works" },
      ],
      scenarios: [
        {
          situation: "Unexpected DigiD approval on your phone",
          action: "Deny the request; change passwords if you did not initiate login.",
          note: "Attackers sometimes trigger approvals hoping you tap approve quickly.",
        },
        {
          situation: "Caller says Belastingdienst needs screen sharing",
          action: "Hang up; tax matters go through official portals or post.",
          note: "Tax authority does not resolve cases via unsolicited remote access.",
        },
        {
          situation: "Lost phone with DigiD app installed",
          action: "Remote wipe phone, contact DigiD helpdesk, freeze bank cards.",
          note: "Treat a lost unlocked phone like a lost wallet plus login device.",
        },
      ],
      crossLink: {
        href: DIGID_NETHERLANDS_PATH,
        title: "DigiD in the Netherlands",
        description: "Digital identity setup, activation steps and security habits after BSN registration.",
        linkLabel: "Open DigiD guide",
      },
    },
    {
      id: "consumer-protection",
      visualSlug: "consumerProtection",
      heading: "Consumer Rights and Protections",
      paragraphs: [
        "Consumers can turn to ConsuWijzer for disputes, cooling-off questions and unfair contract patterns. ACM supervises markets including telecom and energy retail.",
        "Fraudehelpdesk collects scam reports and publishes alerts — useful for recognising new fraud campaigns targeting expats.",
      ],
      cards: [
        { title: "ConsuWijzer", body: "Free orientation on disputes, cooling-off periods and unfair contract terms." },
        { title: "ACM", body: "Market supervisor for telecom, energy and competition issues — publishes switching guidance." },
        { title: "Fraudehelpdesk", body: "Scam alerts and reporting — separate from contract disputes but often paired with fraud." },
        { title: "Evidence", body: "Contracts, emails, screenshots and payment references strengthen complaints." },
      ],
      bullets: [
        "Keep contract PDFs and email threads for complaints.",
        "Report scams even if you did not lose money — patterns help others.",
        "ACM publishes switching and consumer guidance for regulated markets.",
      ],
      tasks: [
        { task: "Contract dispute orientation", channel: "consuwijzer.nl complaint wizard", timing: "After failed direct contact with provider" },
        { task: "Report telecom or energy issue", channel: "ACM consumer information pages", timing: "When switching blocked or misleading offer" },
        { task: "Report scam attempt", channel: "fraudehelpdesk.nl", timing: "Even if you did not lose money" },
        { task: "Escalate unresolved dispute", channel: "ConsuWijzer or sector mediator per guidance", timing: "After provider deadline passes" },
      ],
      scenarios: [
        {
          situation: "Gym refuses cancellation despite notice sent",
          action: "Gather notice email and contract; start ConsuWijzer orientation with dates.",
          note: "Minimum terms and notice windows are common dispute themes.",
        },
        {
          situation: "Energy provider auto-renewed without clear notice",
          action: "Check contract renewal clause; contact ConsuWijzer with correspondence.",
          note: "Keep meter readings and renewal emails as evidence.",
        },
        {
          situation: "Paid scammer posing as insurer",
          action: "Call bank immediately, report Fraudehelpdesk, file politie.nl if needed.",
          note: "Consumer dispute channels differ from fraud recovery paths.",
        },
      ],
    },
    {
      id: "families",
      visualSlug: "families",
      heading: "Family Safety Considerations",
      paragraphs: [
        "Families register children for healthcare and schools after address registration. Cycling education starts early — helmets and lights are strongly recommended for children.",
        "Neighbourhood networks, sports clubs and school parent groups are common community anchors. Know your huisarts and local urgent pediatric routes.",
      ],
      cards: [
        { title: "Schools", body: "Use official school registration channels; verify communication domains." },
        { title: "Cycling", body: "Teach traffic rules; use child seats and lights on family bikes." },
        { title: "Healthcare", body: "Register with a huisarts; know weekend urgent care locations." },
        { title: "Community", body: "Join local activities through schools, clubs or gemeente listings." },
      ],
      tasks: [
        { task: "Register children for healthcare", channel: "Insurer portal after address registration", timing: "Within first weeks after arrival" },
        { task: "Save pediatric urgent care route", channel: "Huisarts and huisartsenpost websites", timing: "Before first weekend need" },
        { task: "Teach bike traffic rules", channel: "School programmes and gemeente cycling maps", timing: "Before independent child cycling" },
        { task: "Share family emergency list", channel: "Phone contacts and paper copy at home", timing: "First week in new home" },
      ],
      scenarios: [
        {
          situation: "Child falls off bike, conscious with minor injury",
          action: "Call huisarts or huisartsenpost; 112 if head injury or loss of consciousness.",
          note: "Many families save huisartsenpost number separately from 112.",
        },
        {
          situation: "School email asks for passport copy via odd link",
          action: "Verify with school office through known phone number before uploading.",
          note: "Phishing sometimes targets school payment or document portals.",
        },
        {
          situation: "Neighbour reports suspicious activity",
          action: "Note details; call 0900-8844 or 112 if immediate danger.",
          note: "Community WhatsApp groups are useful but not official emergency channels.",
        },
      ],
    },
    {
      id: "students",
      visualSlug: "students",
      heading: "Student Safety",
      paragraphs: [
        "International students often hunt for housing in competitive cities. Prefer university housing offices or verified agencies. Share flatmate contacts and emergency numbers.",
        "Nightlife and festival seasons increase phone theft — use lock screens and find-my-device features. Report campus phishing to university IT.",
      ],
      cards: [
        { title: "University housing", body: "Use official housing office portals — not forwarded social media links alone." },
        { title: "OV and nightlife", body: "Plan last train times; save trusted ride apps before festival season." },
        { title: "Device security", body: "Lock screens and find-my-device are essential in busy student areas." },
        { title: "Campus phishing", body: "IT departments warn about fake tuition or library payment emails each term." },
      ],
      bullets: [
        "Verify tenancy contracts before transferring deposits.",
        "Use OV or trusted ride apps when returning late.",
        "Back up IDs and enrollment documents to secure cloud storage.",
      ],
      tasks: [
        { task: "Verify housing offer", channel: "University housing office email domain", timing: "Before any deposit transfer" },
        { task: "Register with huisarts", channel: "Practice near campus or flat", timing: "First month after arrival" },
        { task: "Save OV night alternatives", channel: "NS and local operator apps", timing: "Before first late event" },
        { task: "Report campus phishing", channel: "University IT security contact", timing: "When suspicious email targets student login" },
      ],
      scenarios: [
        {
          situation: "Facebook housing group demands deposit today",
          action: "Refuse; use university housing or verified agencies with viewings.",
          note: "Autumn intake sees a spike in fake room listings in student cities.",
        },
        {
          situation: "Festival phone stolen",
          action: "Freeze cards, wipe device, report theft for insurance.",
          note: "Many students lose phones in crowds — prepare freeze steps in advance.",
        },
        {
          situation: "Fake internship offer requests passport scan",
          action: "Verify company via KVK and official careers portal before sending ID.",
          note: "Job scams target international students with remote work promises.",
        },
      ],
    },
  ] satisfies SafetyGuideSection[],
  scamCards: [
    { title: "Phishing emails", body: "Fake Belastingdienst, bank or IND messages with urgent payment links — check domains and log in via official sites only." },
    { title: "Fake government messages", body: "SMS or WhatsApp claiming fines or visa issues — government rarely demands immediate wire transfers." },
    { title: "Banking scams", body: "Caller impersonating bank fraud teams asking for codes or remote access — banks do not ask for full DigiD sequences." },
    { title: "Marketplace scams", body: "Buyers overpaying or sellers insisting on off-platform payment — use in-person exchange when possible." },
    { title: "Housing scams", body: "Unseen properties, foreign wire requests and copied photos from real listings." },
    { title: "Job scams", body: "Upfront training fees, passport copies before contract or unrealistic salaries." },
    { title: "WhatsApp scams", body: "Family impersonation or Tikkie requests from unknown numbers — call back on known numbers." },
    { title: "Identity fraud", body: "Stolen ID copies used for contracts — limit copies and watermark purpose on documents." },
  ] satisfies TipCard[],
  scamScenarios: [
    {
      situation: "Email claims Belastingdienst fine with payment link",
      action: "Do not click — log in via belastingdienst.nl manually and check messages.",
      note: "Tax authority rarely demands immediate wire transfers by email.",
    },
    {
      situation: "Rental listing below market with foreign wire deposit",
      action: "Refuse payment until you view the property and sign a contract.",
      note: "Copied photos from real listings are a common housing scam signal.",
    },
    {
      situation: "Bank caller asks for DigiD codes or remote access",
      action: "Hang up and call the number on your bank card or app.",
      note: "Banks do not ask for full DigiD sequences or screen-sharing.",
    },
    {
      situation: "WhatsApp Tikkie from unknown number",
      action: "Do not pay — verify identity by calling on a known number.",
      note: "Family impersonation scams spike during holidays and travel.",
    },
  ] satisfies SafetyScenario[],
  citySafetyCards: [
    {
      city: "Amsterdam",
      href: "/netherlands/amsterdam/",
      environment: "Busy historic centre, heavy tourism and nightlife",
      considerations: "Pickpocket awareness, bike theft prevention, crowded tram exits",
    },
    {
      city: "Rotterdam",
      href: "/netherlands/rotterdam/",
      environment: "Modern port city with diverse neighbourhoods",
      considerations: "Learn district layouts; secure bikes near transport hubs",
    },
    {
      city: "The Hague",
      href: "/netherlands/the-hague/",
      environment: "International institutions and beach districts",
      considerations: "Embassy quarter traffic; beach season bag security",
    },
    {
      city: "Utrecht",
      href: "/netherlands/utrecht/",
      environment: "University city with canal centre",
      considerations: "Student rental market — verify listings; busy bike storage areas",
    },
    {
      city: "Eindhoven",
      href: "/netherlands/eindhoven/",
      environment: "Tech hub with suburban campuses",
      considerations: "Industrial zones vs residential — plan routes after dark",
    },
  ] satisfies CitySafetyCard[],
  citySafetyScenarios: [
    {
      situation: "Tourist crowds in Amsterdam centre",
      action: "Zip bags on trams; use bike rings in lit streets; avoid phone at tram doors.",
      note: "Pickpocketing peaks near Centraal and busy market streets.",
    },
    {
      situation: "Student housing search in Utrecht or Delft",
      action: "Verify listings via university housing; refuse unseen-property deposits.",
      note: "Autumn intake drives scam listing volume in university cities.",
    },
    {
      situation: "Beach day in The Hague or Scheveningen",
      action: "Do not leave bags unattended; use lockers where available.",
      note: "Summer beach theft targets phones and wallets left on towels.",
    },
    {
      situation: "Late night in Rotterdam transport hubs",
      action: "Stay in staffed areas; plan OV or ride app before last train.",
      note: "Port city districts vary — learn your neighbourhood routes in daylight first.",
    },
  ] satisfies SafetyScenario[],
  safetyChecklist: [
    "Save emergency numbers (112 and huisarts)",
    "Set up secure passwords and two-factor authentication",
    "Understand DigiD security and approval flow",
    "Learn scam awareness basics via Fraudehelpdesk",
    "Register your address with the municipality",
    "Understand healthcare access and urgent care routes",
    "Review banking security and card freeze options",
    "Bookmark official websites (Government.nl, politie.nl)",
  ],
  checklistMilestones: [
    { label: "Arrival day", value: "112 + address", note: "Save Dutch-format address in phone contacts" },
    { label: "Week 1", value: "2FA + passwords", note: "Email, banking and cloud storage" },
    { label: "Week 1–2", value: "DigiD security", note: "Activate and review authorisations" },
    { label: "Month 1", value: "Scam alerts", note: "Fraudehelpdesk plus card freeze test" },
  ] satisfies SnapshotSignal[],
  mistakeCards: [
    { title: "Sharing too much personal information", body: "Posting BSN, passport or address details on social media or unverified forms." },
    { title: "Ignoring phishing attempts", body: "Clicking tax or visa links without checking the URL." },
    { title: "Using weak passwords", body: "Reusing one password across email, banking and shopping accounts." },
    { title: "Not verifying housing offers", body: "Paying deposits before viewing or signing a contract." },
    { title: "Trusting unofficial websites", body: "Using look-alike domains for taxes, IND or banking." },
    { title: "Delaying DigiD security setup", body: "Leaving weak recovery options after activation." },
    { title: "Ignoring consumer protections", body: "Not using ConsuWijzer or ACM when disputes arise." },
    { title: "Not knowing emergency contacts", body: "Searching for numbers during an urgent situation." },
  ] satisfies TipCard[],
  mistakeFixTips: [
    "Before sharing BSN: confirm recipient, purpose and watermark ID scans.",
    "For tax or visa emails: type belastingdienst.nl or ind.nl manually — never click links.",
    "Use a password manager with unique passwords for email, banking and shopping.",
    "View rental properties or verified video walkthrough before any deposit.",
    "Bookmark official .nl government and bank URLs instead of using search ads.",
    "Complete DigiD recovery setup the same week you activate.",
    "Open ConsuWijzer orientation before escalating contract disputes.",
    "Save 112, 0900-8844 and huisarts in your phone contacts on arrival day.",
  ],
  contactQuickReference: [
    { task: "Life-threatening emergency", channel: "112", timing: "Police, fire or ambulance — stay on the line" },
    { task: "Police non-emergency", channel: "0900-8844", timing: "Theft reports when no immediate danger" },
    { task: "Scam reporting", channel: "fraudehelpdesk.nl", timing: "Phishing, fraud attempts and victim orientation" },
    { task: "Data protection (AP)", channel: "autoriteitpersoonsgegevens.nl", timing: "GDPR rights — not for emergencies" },
    { task: "Consumer disputes", channel: "consuwijzer.nl", timing: "Contract complaints and cooling-off questions" },
    { task: "Market supervision (ACM)", channel: "acm.nl", timing: "Telecom, energy and unfair commercial practices" },
  ] satisfies SafetyTask[],
  scamReportingSteps: [
    { task: "Stop payment if possible", channel: "Bank app freeze or fraud line", timing: "Immediately when fraud is discovered" },
    { task: "Report to Fraudehelpdesk", channel: "fraudehelpdesk.nl report form", timing: "Same day — helps national alerts" },
    { task: "File police report if needed", channel: "politie.nl for theft or identity fraud", timing: "When documentation required" },
    { task: "Notify employer or school IT", channel: "Known IT contact if work or campus accounts involved", timing: "If phishing targeted work login" },
  ] satisfies SafetyTask[],
  contactDirectory: [
    {
      name: "Emergency services (112)",
      purpose: "Police, fire and ambulance for life-threatening emergencies",
      website: "https://www.rijksoverheid.nl/",
      websiteLabel: "Rijksoverheid",
      whenToUse: "Immediate danger, serious injury or crime in progress",
    },
    {
      name: "Police Netherlands",
      purpose: "Crime reports, lost property and safety information",
      website: "https://www.politie.nl/",
      websiteLabel: "Politie.nl",
      whenToUse: "Non-emergency reporting and safety guidance — 0900-8844 when not urgent",
    },
    {
      name: "Fraudehelpdesk",
      purpose: "Scam awareness, reporting and victim support orientation",
      website: "https://www.fraudehelpdesk.nl/",
      websiteLabel: "Fraudehelpdesk",
      whenToUse: "Suspected phishing, payment fraud or identity scam",
    },
    {
      name: "Autoriteit Persoonsgegevens",
      purpose: "Dutch data protection authority",
      website: "https://autoriteitpersoonsgegevens.nl/",
      websiteLabel: "Autoriteit Persoonsgegevens",
      whenToUse: "Questions about personal data handling and GDPR rights",
    },
    {
      name: "Government.nl",
      purpose: "Official government portal for daily life topics",
      website: "https://www.government.nl/",
      websiteLabel: "Government.nl",
      whenToUse: "High-level orientation on rights, services and consumer topics",
    },
    {
      name: "Municipality services",
      purpose: "Local registration, permits and neighbourhood information",
      website: "https://www.government.nl/",
      websiteLabel: "Find your gemeente",
      whenToUse: "Address registration, local taxes and non-emergency local issues",
    },
    {
      name: "ConsuWijzer",
      purpose: "Consumer information and dispute orientation",
      website: "https://www.consuwijzer.nl/",
      websiteLabel: "ConsuWijzer",
      whenToUse: "Contract disputes, cooling-off questions and complaint escalation",
    },
    {
      name: "ACM",
      purpose: "Authority for Consumers and Markets",
      website: "https://www.acm.nl/",
      websiteLabel: "ACM",
      whenToUse: "Telecom, energy market issues and unfair commercial practices",
    },
  ] satisfies ContactDirectoryEntry[],
  faqs: [
    {
      q: "Is the Netherlands safe?",
      a: "Generally yes for everyday life. Violent crime rates are relatively low. Focus on bike theft prevention, urban awareness and digital fraud — the same practical habits as in most Western European countries.",
    },
    {
      q: "What is the emergency number in the Netherlands?",
      a: "112 for life-threatening emergencies. For police without immediate danger call 0900-8844. For urgent medical advice when not life-threatening, contact your huisarts or local urgent care service.",
    },
    {
      q: "How do I report fraud?",
      a: "Report scams to Fraudehelpdesk and your bank immediately if money moved. File police reports online at politie.nl for theft or fraud documentation, especially if you need records for insurance.",
    },
    {
      q: "What scams should I watch for?",
      a: "Phishing pretending to be government or banks, fake rental listings, marketplace payment tricks, WhatsApp Tikkie scams and job offers requesting upfront fees or passport copies.",
    },
    {
      q: "How do I protect my DigiD?",
      a: "Activate only via official channels, use the app approval model, never share codes with callers, enable phone security and review authorised organisations periodically.",
    },
    {
      q: "What privacy rights do I have?",
      a: "EU GDPR applies. You can often access, correct or request deletion of personal data and ask organisations why data is processed. Autoriteit Persoonsgegevens oversees compliance.",
    },
    {
      q: "How do consumer protections work?",
      a: "ConsuWijzer helps with disputes and contract questions. ACM supervises regulated markets. Keep contracts and emails as evidence when escalating complaints.",
    },
    {
      q: "What should I do in an emergency?",
      a: "Call 112, state location and nature of emergency, follow operator instructions. If safe, help others and meet responders at an agreed point. For non-urgent police matters use 0900-8844.",
    },
  ],
  officialSources: [
    { label: "Government.nl", href: "https://www.government.nl/", description: "Official Dutch government portal for consumer and daily-life topics." },
    { label: "Politie.nl", href: "https://www.politie.nl/", description: "Dutch police — reporting, safety tips and contact information." },
    { label: "Rijksoverheid", href: "https://www.rijksoverheid.nl/", description: "Dutch government information portal and emergency orientation." },
    { label: "Fraudehelpdesk", href: "https://www.fraudehelpdesk.nl/", description: "National fraud helpdesk — scam alerts and reporting." },
    { label: "Autoriteit Persoonsgegevens", href: "https://autoriteitpersoonsgegevens.nl/", description: "Dutch Data Protection Authority — GDPR and privacy rights." },
    { label: "ConsuWijzer", href: "https://www.consuwijzer.nl/", description: "Consumer information and dispute orientation for Dutch residents." },
    { label: "ACM", href: "https://www.acm.nl/", description: "Authority for Consumers and Markets — telecom, energy and competition." },
  ],
  sourcesDisclaimer:
    "Safety information, emergency procedures and privacy regulations can change. Always verify details through official sources before acting.",
  sourceUsageTips: [
    "Use Fraudehelpdesk alerts to learn new scam patterns before they target you.",
    "Check politie.nl for current online reporting options in your region.",
    "Contact Autoriteit Persoonsgegevens for data protection questions — not for emergencies.",
    "Bookmark Government.nl for calm orientation before diving into agency sites.",
  ],
  relatedGuides: [
    {
      label: "DigiD in the Netherlands",
      href: DIGID_NETHERLANDS_PATH,
      description: "Digital identity setup and security after registration.",
      status: "live",
    },
    {
      label: "Government portals",
      href: GOVERNMENT_PORTALS_NETHERLANDS_PATH,
      description: "Map of Dutch government websites and digital services.",
      status: "live",
    },
    {
      label: "Housing in the Netherlands",
      href: HOUSING_HUB_PATH,
      description: "Rental market, contracts and tenant orientation.",
      status: "live",
    },
    {
      label: "Open a bank account",
      href: OPEN_BANK_ACCOUNT_PATH,
      description: "Banking setup and secure payment habits for newcomers.",
      status: "live",
    },
    {
      label: "Municipality services",
      href: MUNICIPALITY_SERVICES_NETHERLANDS_PATH,
      description: "Gemeente registration, BSN and local services.",
      status: "live",
    },
    {
      label: "Moving to the Netherlands",
      href: MOVING_TO_NETHERLANDS_PATH,
      description: "Relocation hub for visas, registration and first-month tasks.",
      status: "live",
    },
  ] satisfies PracticalLifeLink[],
  exploreNextCards: [
    {
      label: "DigiD guide",
      href: DIGID_NETHERLANDS_PATH,
      description: "Secure your digital identity after BSN registration.",
      status: "live",
    },
    {
      label: "Government portals",
      href: GOVERNMENT_PORTALS_NETHERLANDS_PATH,
      description: "Find which portal handles each government task.",
      status: "live",
    },
    {
      label: "Housing hub",
      href: HOUSING_HUB_PATH,
      description: "Search safely and understand rental contracts.",
      status: "live",
    },
    {
      label: "Banking guide",
      href: MONEY_BANKING_PATH,
      description: "Accounts, payments and banking security overview.",
      status: "live",
    },
    {
      label: "Municipality services",
      href: MUNICIPALITY_SERVICES_NETHERLANDS_PATH,
      description: "Registration, permits and local gemeente tasks.",
      status: "live",
    },
  ] satisfies PracticalLifeLink[],
  exploreNextTips: [
    "Activate DigiD soon after address registration — many services assume you have it.",
    "Read one Fraudehelpdesk alert per month to stay ahead of scam trends.",
    "Photograph your bike frame number and save insurance policy numbers offline.",
    "Share this guide's emergency numbers with housemates or family members.",
  ],
};
