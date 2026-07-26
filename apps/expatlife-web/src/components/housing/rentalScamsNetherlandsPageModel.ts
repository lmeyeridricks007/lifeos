import {
  BUYING_HOUSE_NETHERLANDS_PATH,
  HOUSING_COSTS_NETHERLANDS_PATH,
  HOUSING_HUB_PATH,
  MOVING_TO_NETHERLANDS_PATH,
  NEIGHBORHOODS_NETHERLANDS_PATH,
  RENTAL_CONTRACTS_AND_DEPOSITS_NETHERLANDS_PATH,
  RENTING_NETHERLANDS_PATH,
  TEMPORARY_ACCOMMODATION_NETHERLANDS_PATH,
} from "./housingNetherlandsPageModel";

export const RENTAL_SCAMS_NETHERLANDS_PATH = "/netherlands/housing/rental-scams-netherlands/" as const;

export type HousingGuideLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon" | "external";
};

export type TipCard = { title: string; body: string };

export type SnapshotSignal = { label: string; value: string; note: string };

export type MistakeCard = { title: string; body: string; tip: string };

export type ScamTypeCard = {
  title: string;
  summary: string;
  howItWorks: string;
  warningSigns: readonly string[];
  howToAvoid: readonly string[];
};

export type TimelineStep = {
  phase: string;
  title: string;
  detail: string;
};

export type VerificationStep = {
  step: string;
  title: string;
  detail: string;
  actions: readonly string[];
};

export type PlatformCard = {
  name: string;
  type: string;
  audience: string;
  note: string;
  website?: string;
};

export type CityRiskRow = {
  city: string;
  marketPressure: string;
  whatToWatch: string;
  saferApproach: string;
};

export type DecisionTreeStep = {
  step: string;
  question: string;
  ifYes: string;
  ifNo: string;
};

export type DecisionOutcome = {
  label: string;
  detail: string;
};

export type ScenarioRow = {
  situation: string;
  approach: string;
  firstStep: string;
};

export type PaymentRow = {
  stage: string;
  safePractice: string;
  warningSign: string;
};

const INFOGRAPHIC_VERSION = "premium-v2";
const HERO_IMAGE_VERSION = "premium-v2";
const VISUAL_PREFIX = "rental-scams-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const rentalScamsNetherlandsPage = {
  slug: "rental-scams-netherlands",
  path: RENTAL_SCAMS_NETHERLANDS_PATH,
  hubPath: HOUSING_HUB_PATH,
  parentGuidePath: RENTAL_CONTRACTS_AND_DEPOSITS_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2027-01-20",
  seo: {
    title: "Rental Scams in the Netherlands | Complete Safety Guide for Expats",
    description:
      "Learn how to avoid rental scams in the Netherlands. Discover warning signs, verify landlords, protect your deposit and rent safely as an expat or international student.",
    keywords: [
      "rental scams netherlands",
      "housing scams netherlands",
      "apartment scam netherlands",
      "fake landlord netherlands",
      "rental fraud netherlands",
      "renting safely netherlands",
      "rental deposit scam",
      "expat housing scams",
      "apartment fraud",
      "rental contract netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Housing · Safety",
    pageTitle: "Rental Scams in the Netherlands",
    subtitle:
      "Protect yourself from housing fraud by learning how legitimate rentals work, spotting warning signs and renting safely in the Netherlands.",
    primaryCta: { label: "Learn How to Rent Safely", href: "#red-flags" },
    secondaryCta: { label: "View Housing Guides", href: HOUSING_HUB_PATH },
    chips: ["Verify first", "Never rush", "View if possible", "Protect deposits", "Report fraud"],
    disclaimer:
      "General safety orientation only — not legal advice. Verify listings, contracts and payments independently. Report suspected fraud through police and Fraudehelpdesk channels when appropriate.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Photorealistic editorial photo of a young international professional verifying a rental listing on her smartphone against the brass house-number plaque of a classic Amsterdam canal house before a viewing — printed floor plan in hand, bicycle against the brick facade, soft late-afternoon light on the canal street.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#how-renting-works", label: "How renting works" },
    { href: "#common-scams", label: "Scam types" },
    { href: "#red-flags", label: "Red flags" },
    { href: "#verify-landlord", label: "Verify landlord" },
    { href: "#safe-payments", label: "Safe payments" },
    { href: "#viewing-safely", label: "Viewings" },
    { href: "#rental-contracts", label: "Contracts" },
    { href: "#trusted-platforms", label: "Platforms" },
    { href: "#if-scammed", label: "If scammed" },
    { href: "#student-expat", label: "Students & expats" },
    { href: "#city-risk", label: "By city" },
    { href: "#safety-checklist", label: "Checklist" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#housing-hub", label: "Housing hub" },
    { href: "#explore-next", label: "Explore next" },
    { href: "#sources", label: "Sources" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation board — three safety moves before any rental payment: verify the landlord and listing, insist on a viewing or verified video walkthrough, and pay only against a signed contract, with a Dutch canal street scene in the background.",
      "Three moves protect most newcomers: verify identity, see the property, and pay only against a signed agreement."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card safety snapshot — Verify the Landlord, Never Rush, View the Property, Check the Contract, Protect Your Deposit and Report Suspicious Activity with concrete practical notes for expats.",
      "Read all six cards before you transfer any money — most fraud attempts fail at one of these gates."
    ),
    howRentingWorks: visual(
      "how-renting-works",
      "Premium seven-step rental timeline — property advertised, viewing, application with documents, landlord approval, signed rental agreement, deposit payment and move-in with keys and inventory list.",
      "Legitimate Dutch rentals follow a recognisable order — payment sits after the signed agreement, not before the viewing."
    ),
    commonScams: visual(
      "common-scams",
      "Premium scam pattern board — ten labelled cards covering fake listings, fake landlords, non-existent properties, copied adverts, deposit-before-viewing demands, keys-after-payment promises, identity theft, phishing sites, fake agencies and holiday-listing fraud.",
      "Ten recurring patterns cover most reported rental fraud attempts — recognise the shape rather than memorising every story."
    ),
    redFlags: visual(
      "red-flags",
      "Premium red-flag checklist board — below-market rent, refusal to allow viewings, urgency and pressure tactics, payment by transfer to a personal account, no written contract, landlord always abroad, and requests for passport scans before any agreement.",
      "One red flag is a reason to slow down; two or more is a reason to stop and verify independently."
    ),
    verifyLandlord: visual(
      "verify-landlord",
      "Premium verification workflow — cross-check the advertisement, request identity and ownership evidence, confirm agency registration, arrange a viewing, verify the bank account name and keep every message in writing.",
      "Verification is a sequence of small checks — each one is cheap compared with a lost deposit."
    ),
    safePayments: visual(
      "safe-payments",
      "Premium payment safety board — Dutch bank transfer with matching account name, signed contract before deposit, receipts and payment confirmations, contrasted with high-risk requests for gift cards, crypto, cash couriers and money transfer services.",
      "Legitimate landlords accept a normal bank transfer against a signed contract — unusual payment channels are the warning."
    ),
    viewingSafely: visual(
      "viewing-safely",
      "Premium viewing safety guide — in-person visit with a friend, daylight appointment, address and door number verification, live video walkthrough alternative, and questions to ask the person showing the property.",
      "A viewing confirms three things at once: the property exists, the person has access, and the advert matches reality."
    ),
    rentalContracts: visual(
      "rental-contracts",
      "Premium contract safety panel — huurcontract essentials, borg deposit terms, inventarisatielijst, notice period and gemeente registration permission, linked to the full rental contracts and deposits guide.",
      "A written agreement is your main protection — read every clause before any deposit leaves your account."
    ),
    trustedPlatforms: visual(
      "trusted-platforms",
      "Premium platform directory — Funda, Pararius, Kamernet, HousingAnywhere, Vesteda, MVGM, Rotsvast and local housing corporations shown with an independent-verification reminder banner.",
      "Well-known platforms reduce exposure but never remove your own verification step."
    ),
    ifScammed: visual(
      "if-scammed",
      "Premium response timeline — stop further payments, save all evidence, contact your bank, report to the police, notify Fraudehelpdesk and seek legal information from Juridisch Loket.",
      "Speed matters most in the first hours — stop payments, preserve evidence, then report through official channels."
    ),
    studentExpat: visual(
      "student-expat",
      "Premium risk-profile board explaining why international students and newly arriving expats are targeted — remote searching, deadline pressure, unfamiliar market norms and language gaps, with practical counter-measures.",
      "Newcomers are targeted for situation, not naivety — deadline pressure and remote searching are the real vulnerabilities."
    ),
    cityRisk: visual(
      "city-risk",
      "Premium city map of Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven, Leiden and Groningen with market-pressure notes and safer search approaches for each competitive rental market.",
      "Competition creates urgency, and urgency is what fraud relies on — plan extra time in the tightest markets."
    ),
    safetyChecklist: visual(
      "safety-checklist",
      "Premium pre-payment safety checklist board covering listing verification, identity checks, viewing confirmation, contract review, payment method, documentation and reporting routes.",
      "Work through the checklist in order — do not skip a step because a listing feels like a rare opportunity."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — paying before viewing, trusting emotional stories, transferring to personal accounts, sending passport scans early, skipping the written contract and staying silent after being scammed, each paired with a practical fix.",
      "Most losses trace back to six avoidable habits — each has a simple replacement action."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board answering how to spot a scam listing, whether to pay before viewing, how to verify a landlord, what to do after fraud, and whether agencies are safe.",
      "Quick answers for orientation — confirm current procedures with your bank, the police and official consumer services."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium related-guide route map linking rental contracts and deposits, renting, housing costs, temporary accommodation, neighbourhoods, buying and the moving hub.",
      "Scam awareness sits alongside contracts, budgets and search strategy — read them together."
    ),
    housingHub: visual(
      "housing-hub",
      "Premium housing hub grid showing the safe-renting path from budget and search through verification, contract signing, deposit protection and move-in registration.",
      "Use the housing hub to sequence search, contracts, costs and registration around your safety checks."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium dark-band next-step cards — rental contracts and deposits, renting guide, housing costs, temporary accommodation, buying and moving hub with when-to-use labels.",
      "Pick the card matching whether you need contract detail, budget planning or a temporary base while you search safely."
    ),
    sources: visual(
      "sources",
      "Premium official source cards for Government.nl, Juridisch Loket, Politie, Fraudehelpdesk, Consumentenbond and municipality housing pages with verification reminders.",
      "Official channels change their procedures — always open the source site before acting on a reporting step."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "First three safety moves",
      items: [
        "Verify who you are dealing with before sharing documents or money.",
        "Insist on a viewing — in person where possible, or a live video walkthrough.",
        "Pay only after a written agreement names the property, rent and deposit terms.",
        "Keep every message, advert screenshot and payment record in one folder.",
      ],
    },
    snapshot: {
      title: "How to use this snapshot",
      items: [
        "Read all six cards before responding to any listing with money or documents.",
        "Treat urgency as a signal to slow down, not to act faster.",
        "Use the cards as gates — a listing should pass every one.",
        "Return to this snapshot each time you start a new search round.",
      ],
    },
    howRentingWorks: {
      title: "Why the order matters",
      items: [
        "Advert → viewing → application → approval → contract → deposit → keys.",
        "Payment normally follows a signed agreement, not a first message.",
        "Deposits and first rent are commonly requested together after signing.",
        "Any sequence that puts money before contract or viewing deserves scrutiny.",
      ],
    },
    commonScams: {
      title: "Reading the scam patterns",
      items: [
        "Most attempts combine a great-value property with a reason you cannot view it.",
        "Fake identity and fake payment routes usually appear together.",
        "Copied adverts often reuse real photos from legitimate listings.",
        "Phishing sites imitate familiar platforms — check the address bar carefully.",
      ],
    },
    redFlags: {
      title: "Red-flag discipline",
      items: [
        "One red flag: slow down and verify independently.",
        "Two or more: stop and treat the listing as unsafe.",
        "Never let a deadline, competing applicant or discount override your checks.",
        "Ask yourself what evidence you actually have, not how convincing the story feels.",
      ],
    },
    verifyLandlord: {
      title: "Verification sequence",
      items: [
        "Cross-check the advert text and photos with a reverse image search.",
        "Ask for identity and ownership or management evidence in writing.",
        "Confirm the agency exists independently — not through links they sent you.",
        "Match the bank account holder name to the person or company on the contract.",
      ],
    },
    safePayments: {
      title: "Payment safety rules",
      items: [
        "Pay by regular Dutch bank transfer with a clear reference.",
        "Confirm the account holder name matches the contract party.",
        "Decline gift cards, crypto, cash couriers and money-transfer requests.",
        "Save the payment confirmation with the signed contract PDF.",
      ],
    },
    viewingSafely: {
      title: "Viewing safety habits",
      items: [
        "Book daylight appointments and tell someone where you are going.",
        "Bring a friend or housemate when you can.",
        "Check the street name, house number and doorbell label match the advert.",
        "If you cannot attend, request a live video call walkthrough — not pre-recorded clips.",
      ],
    },
    rentalContracts: {
      title: "Contract protections",
      items: [
        "Named parties, exact address, rent amount and payment date.",
        "Deposit amount, holder and return conditions in writing.",
        "Notice period and required notice format.",
        "Permission to register your address with the gemeente where applicable.",
      ],
    },
    trustedPlatforms: {
      title: "Using platforms wisely",
      items: [
        "Well-known platforms reduce exposure but do not guarantee every listing.",
        "Keep conversations on the platform where messaging is provided.",
        "Be cautious when a contact pushes you to WhatsApp or email immediately.",
        "Verify agencies and corporate landlords independently before paying.",
      ],
    },
    ifScammed: {
      title: "Act in this order",
      items: [
        "Stop all further payments and cancel scheduled transfers.",
        "Screenshot adverts, chats, emails and bank confirmations before they disappear.",
        "Call your bank immediately — recovery chances fall quickly with time.",
        "Report to the police and notify Fraudehelpdesk; ask Juridisch Loket about next steps.",
      ],
    },
    studentExpat: {
      title: "Reduce your exposure",
      items: [
        "Start searching earlier so deadlines do not force fast decisions.",
        "Arrange a short temporary stay so you can view properties in person.",
        "Ask your university housing office or employer relocation contact to sanity-check listings.",
        "Have a trusted local contact attend a viewing if you cannot travel.",
      ],
    },
    cityRisk: {
      title: "City-by-city discipline",
      items: [
        "Competition drives urgency — build extra search time into tight markets.",
        "Widen your radius to nearby towns with better commute links.",
        "Register with reputable agencies and corporate landlords in advance.",
        "Never treat a below-market listing in a hot market as luck.",
      ],
    },
    safetyChecklist: {
      title: "Before you transfer money",
      items: [
        "Listing verified and photos cross-checked.",
        "Identity, ownership or management evidence received.",
        "Viewing completed in person or by live video call.",
        "Written contract read in full, with deposit terms clear.",
      ],
    },
    mistakes: {
      title: "Swap these habits",
      items: [
        "Replace paying before viewing with paying after a signed contract.",
        "Replace emotional trust with documentary evidence.",
        "Replace personal-account transfers with verified account holders.",
        "Replace silence after a loss with prompt bank and police reporting.",
      ],
    },
    faq: {
      title: "After the FAQ",
      items: [
        "Confirm reporting steps with the police and Fraudehelpdesk directly.",
        "Read the rental contracts and deposits guide before signing anything.",
        "Ask your bank about their fraud reporting process in advance.",
      ],
    },
    relatedGuides: {
      title: "Reading order",
      items: [
        "Rental Scams (this page) → verify before paying",
        "Rental Contracts and Deposits → what to read before signing",
        "Housing Costs → what a realistic rent actually looks like",
        "Temporary Accommodation → a safe base while you search",
      ],
    },
    housingHub: {
      title: "Housing hub focus",
      items: [
        "Budget realistically so below-market listings look suspicious, not tempting.",
        "Sequence search, viewing, contract and deposit in the right order.",
        "Plan gemeente registration and utilities after keys, not before payment.",
        "Return to the hub when comparing cities or rent-versus-buy decisions.",
      ],
    },
    exploreNext: {
      title: "Choose your next step",
      items: [
        "Need contract detail → Rental Contracts and Deposits",
        "Need realistic budgets → Housing Costs",
        "Need a base while searching → Temporary Accommodation",
        "Need the wider relocation plan → Moving to the Netherlands",
      ],
    },
    sources: {
      title: "Official orientation",
      items: [
        "Government.nl — official information for residents and newcomers.",
        "Politie — police reporting routes for fraud.",
        "Fraudehelpdesk — national fraud reporting and information point.",
        "Juridisch Loket — free legal information for residents.",
      ],
    },
  },
  quickAnswer: {
    heading: "How Do You Avoid Rental Scams in the Netherlands?",
    summary:
      "Rent safely by following the normal Dutch rental order: see the advert, view the property, apply with documents, receive approval, sign a written agreement — and only then pay the deposit and first rent. Verify the landlord or agency independently, use a regular bank transfer to an account whose holder name matches the contract, and treat urgency, refused viewings and below-market rent as reasons to slow down rather than act fast.",
    bullets: [
      "Legitimate rentals almost always allow a viewing or a live video walkthrough before payment.",
      "Deposits are normally requested after a written agreement names the property, rent and terms.",
      "Verify the landlord or agency through independent searches — not links or documents they send you.",
      "Use normal bank transfers; decline gift cards, crypto, cash couriers and money-transfer services.",
      "If something goes wrong, stop payments, save evidence, contact your bank and report to the police and Fraudehelpdesk.",
    ],
    note:
      "Work through the safety checklist below before any money leaves your account. If a listing cannot pass every step, treat it as unsafe and move on — good properties do appear again.",
  },
  introParagraphs: [
    "Finding a home in the Netherlands can feel like a race. Listings disappear within hours in the busiest cities, employers and universities set start dates, and many newcomers search from abroad before they can visit. That combination of speed, distance and unfamiliar rules is exactly what rental fraud relies on — not carelessness.",
    "The good news is that legitimate Dutch rentals follow a fairly predictable pattern, and almost every fraud attempt breaks it somewhere. Once you know the normal order — advert, viewing, application, approval, signed agreement, deposit, keys — the warning signs become much easier to see.",
    "This guide explains how renting normally works, the scam patterns most often reported, the red flags worth stopping for, how to verify a landlord or agency, how to pay safely, and what to do if you have already lost money. It is practical safety orientation — not legal advice, and not a substitute for the police, your bank or a qualified legal service.",
  ],
  orientationFlowSteps: [
    "Verify the listing and the person behind it before sharing documents or money — cross-check photos, names and any agency details independently.",
    "Confirm the property exists and the contact has access — attend a viewing in person, or request a live video walkthrough with the address visible.",
    "Read the written agreement in full, then pay the deposit by bank transfer to an account whose holder name matches the contract party.",
  ],
  snapshotSignals: [
    { label: "Rule one", value: "Verify first", note: "Identity and ownership before money" },
    { label: "Rule two", value: "Never rush", note: "Urgency is a warning, not a reason" },
    { label: "Rule three", value: "View if possible", note: "In person or live video call" },
    { label: "Rule four", value: "Protect deposits", note: "Signed contract before payment" },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "Verify the Landlord",
      body:
        "Ask who owns or manages the property and request evidence in writing. Search the name, company and phone number independently — never rely only on documents or links sent to you.",
    },
    {
      title: "Never Rush",
      body:
        "Pressure is the most common tool in rental fraud: another applicant is waiting, the discount expires tonight, transfer now to hold it. A genuine landlord can wait for you to read a contract.",
    },
    {
      title: "View the Property",
      body:
        "A viewing confirms the property exists, matches the advert and that your contact has access. If you cannot attend, ask for a live video walkthrough showing the street sign and door number.",
    },
    {
      title: "Check the Contract",
      body:
        "Read the full huurcontract before paying anything. It should name both parties, the exact address, rent, deposit amount, notice period and whether gemeente registration is permitted.",
    },
    {
      title: "Protect Your Deposit",
      body:
        "Pay by regular Dutch bank transfer after signing, confirm the account holder name matches the contract, and keep the payment confirmation with your signed documents.",
    },
    {
      title: "Report Suspicious Activity",
      body:
        "Report suspicious listings to the platform, and report suspected fraud to the police and Fraudehelpdesk. Reporting helps others and is often required for bank or insurance follow-up.",
    },
  ] satisfies TipCard[],
  snapshotTips: [
    "Treat each card as a gate — a safe listing passes all six, not four out of six.",
    "Write down what evidence you actually hold before you transfer money.",
    "If a landlord resists any of these steps, ask yourself why a legitimate owner would.",
    "Re-read this snapshot at the start of every new search round, not just the first.",
  ],
  howRentingWorks: {
    heading: "How Renting Normally Works in the Netherlands",
    paragraphs: [
      "Most legitimate Dutch rentals — whether through an agency, a corporate landlord or a private owner — follow a recognisable sequence. The property is advertised, interested tenants view it, applicants submit documents, the landlord selects a tenant, both parties sign a written agreement, the deposit and first rent are paid, and keys are handed over with an inventory list.",
      "The order is what protects you. Money normally moves after a signed agreement, and keys are handed over in person. When someone proposes a different order — payment before viewing, keys posted after a transfer, a deposit to 'reserve' a property you have never seen — that change of sequence is the signal, regardless of how professional the messages look.",
    ],
    timeline: [
      {
        phase: "1",
        title: "Property advertised",
        detail:
          "The home appears on a platform, agency site or corporate landlord portal with photos, rent, size and availability date. Note the advert details and take screenshots for later comparison.",
      },
      {
        phase: "2",
        title: "Viewing",
        detail:
          "You visit the property, often alongside other applicants, or join a scheduled group viewing. Agencies confirm appointments in writing and identify the person showing the home.",
      },
      {
        phase: "3",
        title: "Application",
        detail:
          "You submit documents — identification, employment contract or enrolment proof, recent payslips and sometimes references. Share only what the process reasonably requires.",
      },
      {
        phase: "4",
        title: "Landlord approval",
        detail:
          "The landlord or agency selects a tenant and confirms the offer in writing, including rent, start date and deposit amount. Ask for this confirmation before discussing payment.",
      },
      {
        phase: "5",
        title: "Rental agreement",
        detail:
          "Both parties sign the huurcontract. Read every clause: parties, address, rent, servicekosten, deposit, notice period, maintenance split and registration permission.",
      },
      {
        phase: "6",
        title: "Deposit",
        detail:
          "The borg and often the first month's rent are transferred by bank payment after signing. Confirm the account holder name matches the landlord or agency named in the contract.",
      },
      {
        phase: "7",
        title: "Move-in",
        detail:
          "You receive the keys in person, complete a move-in inspection, sign the inventarisatielijst and photograph the property and meter readings on day one.",
      },
    ] satisfies TimelineStep[],
    orderTips: [
      "Payment after signing is the norm — payment before viewing is the exception worth refusing.",
      "Keys are handed over in person; posted keys after a transfer is a well-known fraud pattern.",
      "Written confirmation exists at every stage in professional processes — ask for it.",
      "A reservation fee for an unseen property is not a standard part of this sequence.",
    ],
  },
  commonScams: {
    heading: "Common Rental Scam Patterns",
    intro:
      "These are the patterns most often described by newcomers and consumer information services. You do not need to memorise every story — recognise the shape: an unusually attractive property, a reason you cannot verify it, and pressure to pay quickly.",
    cards: [
      {
        title: "Fake Property Listings",
        summary: "An attractive home that was never available to rent.",
        howItWorks:
          "An advert is created for a property the poster does not own or manage, often using photos taken from other listings, holiday rentals or estate-agent archives. The rent is set slightly below market to attract many replies quickly.",
        warningSigns: [
          "Rent noticeably below comparable listings in the same area",
          "Photos look professional but the advert text is short and generic",
          "The same photos appear elsewhere under a different address or price",
          "Contact pushes you to WhatsApp or email within the first message",
        ],
        howToAvoid: [
          "Reverse image search the photos before replying",
          "Compare the rent against several current listings in the same neighbourhood",
          "Ask for the full address and check it on a map and street view",
          "Insist on a viewing or live video walkthrough before any payment",
        ],
      },
      {
        title: "Fake Landlords",
        summary: "A convincing person who has no right to rent the property.",
        howItWorks:
          "Someone poses as the owner, a family member managing the home, or an employee of a management company. They may send an identity document image and a plausible contract template, then request a deposit to secure the tenancy.",
        warningSigns: [
          "Identity documents are sent as low-quality images or partial crops",
          "The name on the bank account does not match the name on the contract",
          "The contact avoids phone or video calls and answers only in text",
          "Ownership or management evidence is promised but never arrives",
        ],
        howToAvoid: [
          "Ask for the name of the owner or management company and search it independently",
          "Request a short video call and compare the person with the documents provided",
          "Check that the contract party and the account holder name match exactly",
          "Decline to pay until identity and authority to rent are evidenced in writing",
        ],
      },
      {
        title: "Properties That Don't Exist",
        summary: "An address that is not a rentable home at all.",
        howItWorks:
          "The advert lists an address that is an office, a demolished building, a non-existent house number or a property in a completely different city. Because the tenant is searching from abroad, the address is never checked on the ground.",
        warningSigns: [
          "House number or street combination cannot be found on a map",
          "Street view shows a very different building type from the photos",
          "The contact refuses to confirm the exact address before payment",
          "Viewing is offered only after a 'reservation' transfer",
        ],
        howToAvoid: [
          "Confirm the exact address in writing before discussing money",
          "Check the address on a map and street-level imagery",
          "Ask a friend, colleague or local contact to walk past the building",
          "Request a live video call showing the street sign and door number",
        ],
      },
      {
        title: "Copy-and-Paste Listings",
        summary: "A real property duplicated by someone with no connection to it.",
        howItWorks:
          "A genuine listing from an agency or platform is copied — photos, description and floor plan — and reposted at a lower rent with new contact details. The original property may be genuinely available, which makes the copy look credible.",
        warningSigns: [
          "The identical property appears on another site at a higher rent",
          "Description wording matches another advert word for word",
          "Contact details differ from the agency shown in the photos",
          "You are asked to pay a deposit outside the original platform",
        ],
        howToAvoid: [
          "Search the address and description text to find duplicate adverts",
          "Contact the agency named in the photos through their own website",
          "Prefer the original listing and its official contact route",
          "Never pay a party who cannot be reached through the agency's verified channels",
        ],
      },
      {
        title: "Deposit Before Viewing",
        summary: "Money requested to 'hold' a property you have not seen.",
        howItWorks:
          "The contact explains that demand is high and a deposit or reservation fee is required before a viewing can be arranged. Once the payment arrives, the viewing is postponed, then cancelled, and contact stops.",
        warningSigns: [
          "A reservation fee is requested before any viewing or contract",
          "You are told several other applicants are transferring today",
          "The amount is small enough to feel low-risk but non-refundable",
          "Refund conditions are vague or verbal only",
        ],
        howToAvoid: [
          "Do not pay to view a property — treat this as a stop signal",
          "Ask what contract or written agreement the payment relates to",
          "Offer to attend a viewing first and pay after signing",
          "Walk away if the sequence cannot be corrected",
        ],
      },
      {
        title: "Keys Sent After Payment",
        summary: "A promise to post keys once the money clears.",
        howItWorks:
          "The supposed landlord says they are abroad for work or family reasons and will courier the keys after receiving the deposit and first rent. Sometimes an envelope arrives containing keys that do not open anything.",
        warningSigns: [
          "Landlord is permanently abroad and cannot arrange a local representative",
          "Keys are offered by post or courier instead of in-person handover",
          "No local agency, neighbour or caretaker can show the property",
          "Payment is requested in full before any handover",
        ],
        howToAvoid: [
          "Insist on in-person key handover with an inventory walkthrough",
          "Ask for a local representative if the owner genuinely cannot attend",
          "Pay only after signing and against an in-person handover arrangement",
          "Treat courier-key proposals as a reason to stop the process",
        ],
      },
      {
        title: "Identity Theft",
        summary: "A 'rental application' designed to harvest your documents.",
        howItWorks:
          "Under the guise of screening, the contact requests full passport scans, BSN, bank statements and signed forms very early — sometimes before a viewing. The documents are then used for fraudulent accounts or applications rather than tenancy screening.",
        warningSigns: [
          "Full document scans requested before any viewing or written offer",
          "Requests for BSN, DigiD credentials or full bank login details",
          "Pressure to send documents through informal chat apps",
          "No explanation of who processes the data or why it is needed",
        ],
        howToAvoid: [
          "Share documents only after a viewing and a written offer, through official channels",
          "Never share DigiD credentials or full banking logins with anyone",
          "Ask which company processes your data and why each document is required",
          "Redact non-essential details where the process allows",
        ],
      },
      {
        title: "Phishing Websites",
        summary: "A convincing imitation of a platform or payment page.",
        howItWorks:
          "You receive a link that looks like a familiar housing platform, agency portal or payment page. The design is copied closely, but the web address differs slightly. Login details or payment data entered there go to the fraudster.",
        warningSigns: [
          "Web address contains extra words, hyphens or an unusual ending",
          "Link arrives by chat, email or SMS rather than being typed by you",
          "The page asks for banking logins to 'verify' your identity",
          "Urgency messaging about an expiring reservation on the page itself",
        ],
        howToAvoid: [
          "Type platform addresses yourself instead of following sent links",
          "Check the address bar carefully before entering any credentials",
          "Use the platform's own app or bookmarked address for payments",
          "Contact the platform through its published support channel if unsure",
        ],
      },
      {
        title: "Fake Rental Agencies",
        summary: "A professional-looking agency that does not exist.",
        howItWorks:
          "A website, logo, staff photos and contract templates are created for an agency with no real operations. Fees are charged for registration, viewings, 'screening' or a guaranteed shortlist, and the promised properties never materialise.",
        warningSigns: [
          "Upfront fees for registration, shortlists or guaranteed viewings",
          "No verifiable business registration or physical office address",
          "Reviews appear only on the agency's own website",
          "Staff photos or text appear elsewhere on unrelated sites",
        ],
        howToAvoid: [
          "Search the agency name plus the word review outside their own site",
          "Verify the business registration and office address independently",
          "Be cautious about paying for access rather than for a signed tenancy",
          "Prefer agencies you can visit, call and confirm through public records",
        ],
      },
      {
        title: "Short-Term Holiday Listing Fraud",
        summary: "A holiday rental presented as a long-term home.",
        howItWorks:
          "A short-stay or holiday apartment is advertised as a long-term rental. In some cases the person has only booked the property briefly; in others the listing is entirely fabricated. Tenants pay for months and lose access within days.",
        warningSigns: [
          "Photos match a holiday-rental style with staged décor and no storage",
          "The 'landlord' cannot explain registration or contract terms",
          "You are asked to pay through a holiday-booking flow for a yearly tenancy",
          "The stay length offered keeps changing during the conversation",
        ],
        howToAvoid: [
          "Ask explicitly whether the property may be let long term and registered at the gemeente",
          "Search the address on holiday-rental platforms for duplicates",
          "Require a normal huurcontract rather than a booking confirmation",
          "Verify with the building manager or agency when the address allows",
        ],
      },
    ] satisfies ScamTypeCard[],
    patternTips: [
      "Almost every pattern includes a reason you cannot verify something — that reason is the tell.",
      "Professional-looking documents and websites are cheap to produce; independent verification is not.",
      "A below-market rent in a competitive city deserves more scepticism, not more speed.",
      "If two or more patterns above describe your conversation, stop and verify before replying.",
    ],
  },
  redFlags: {
    heading: "Red Flags to Stop For",
    paragraphs: [
      "Red flags are not proof of fraud — plenty of legitimate landlords are disorganised, and some genuinely live abroad. Treat them as triggers for independent verification rather than accusations. One flag means slow down; two or more means stop and verify before you reply again.",
      "Write down what evidence you actually hold: a confirmed address, a viewing, a named contract party, a matching bank account holder. If the list is thin and the pressure is high, that gap is the risk.",
    ],
    checklist: [
      "Rent noticeably below comparable properties in the same neighbourhood",
      "Refusal or repeated postponement of a viewing, in person or by live video",
      "Urgency and pressure — other applicants transferring today, offer expires tonight",
      "Deposit or reservation fee requested before any viewing or written agreement",
      "Payment requested to a personal account whose holder name does not match the contract",
      "Requests for gift cards, cryptocurrency, cash couriers or money-transfer services",
      "No written contract offered, or only a photo of an unsigned template",
      "Landlord permanently abroad with no local representative or agency",
      "Keys offered by post or courier instead of in-person handover",
      "Full passport, BSN or bank statement scans requested before a viewing or offer",
      "Requests for DigiD credentials or full online banking logins",
      "Links to payment or login pages sent by chat, with an unfamiliar web address",
      "Emotional or elaborate personal story explaining why normal steps are impossible",
      "Contact details that differ from the agency shown in the listing photos",
      "Refusal to confirm the exact address before payment",
      "Reluctance to discuss gemeente registration at the address",
      "Contract, advert and conversation contain inconsistent rent, size or availability details",
      "Communication only through chat apps, with no verifiable company channel",
    ],
    flagTips: [
      "One red flag: pause and verify independently before replying.",
      "Two or more red flags: treat the listing as unsafe and stop engaging.",
      "Never let a competing applicant story shorten your verification steps.",
      "Report suspicious listings to the platform so others are warned.",
    ],
  },
  decisionTree: {
    heading: "Is This Listing Legitimate?",
    intro:
      "Work through the questions in order. Each step is a small, cheap check. If you cannot answer yes with actual evidence — not a promise — treat that as your stopping point and verify before going further.",
    steps: [
      {
        step: "1",
        question: "Does the rent look realistic for this area, size and condition?",
        ifYes: "Continue to step 2, and keep the comparison listings you used as a reference.",
        ifNo: "Compare at least three current listings nearby. A large unexplained discount is the most common hook — verify everything else before replying.",
      },
      {
        step: "2",
        question: "Can you confirm the exact address, and does it match a real residential building?",
        ifYes: "Continue to step 3 and note the street name, house number and building type.",
        ifNo: "Ask for the full address in writing. Refusal to confirm an address before payment is a stop signal.",
      },
      {
        step: "3",
        question: "Do the photos and description appear only in this listing?",
        ifYes: "Continue to step 4 — the advert is at least not an obvious copy.",
        ifNo: "You may be looking at a copied advert. Contact the agency named in the original listing through their own website instead.",
      },
      {
        step: "4",
        question: "Can you view the property in person, or by a live video call showing the address?",
        ifYes: "Continue to step 5 and confirm the advert matches what you saw.",
        ifNo: "Stop. A refused viewing with no local representative is the single strongest warning sign in rental fraud.",
      },
      {
        step: "5",
        question: "Can the landlord or agency evidence who owns or manages the property?",
        ifYes: "Continue to step 6 and keep the evidence with your file.",
        ifNo: "Search the owner or company name independently. Do not rely on documents or links the contact sent you.",
      },
      {
        step: "6",
        question: "Is there a written rental agreement naming both parties, the address, rent and deposit?",
        ifYes: "Continue to step 7 after reading every clause, including notice period and registration permission.",
        ifNo: "Do not pay. A written agreement is your main protection and the basis for any later dispute.",
      },
      {
        step: "7",
        question: "Does the bank account holder name match the party named in the contract?",
        ifYes: "You have completed the core checks. Pay by regular bank transfer and save the confirmation with the contract.",
        ifNo: "Stop and ask why. A mismatch between the contract party and the account holder is a common fraud indicator.",
      },
    ] satisfies DecisionTreeStep[],
    outcomes: [
      {
        label: "All seven answered yes with evidence",
        detail:
          "The listing has passed the core safety checks. Pay by normal bank transfer against the signed contract, keep the confirmation, and complete a move-in inspection with photos on day one.",
      },
      {
        label: "One step unresolved",
        detail:
          "Pause the conversation and resolve that single step in writing before continuing. Ask directly for the missing address, evidence, viewing or contract — a legitimate landlord can provide it.",
      },
      {
        label: "Two or more steps unresolved",
        detail:
          "Treat the listing as unsafe. Stop sending documents or money, report the listing to the platform, and continue your search through verified channels.",
      },
    ] satisfies DecisionOutcome[],
    note:
      "This tree is an orientation aid, not a guarantee. Passing every step reduces risk but does not remove it — keep documentation, and contact your bank and the police immediately if something later looks wrong.",
  },
  verifyLandlord: {
    heading: "How to Verify a Landlord or Agency",
    paragraphs: [
      "Verification means gathering evidence from sources the other party does not control. A document image, a smart-looking contract template and a professional website can all be produced quickly. A confirmed company registration, a phone number that reaches a real office and a viewing you attended cannot.",
      "You do not need to be confrontational. Framing the request as standard practice works well: 'Before I transfer the deposit I confirm ownership details and the account holder name — could you send those in writing?' A legitimate landlord or agency will recognise this as normal tenant diligence.",
    ],
    steps: [
      {
        step: "1",
        title: "Cross-check the advertisement",
        detail:
          "Treat the advert as a claim to be tested rather than a description to be trusted.",
        actions: [
          "Reverse image search the main photos to find duplicates or holiday listings",
          "Search the exact description text for identical wording elsewhere",
          "Compare rent, size and energy label against several nearby listings",
          "Screenshot the advert, including price and contact details, for your records",
        ],
      },
      {
        step: "2",
        title: "Request identity and authority to rent",
        detail:
          "Establish who the person is and on what basis they can let the property.",
        actions: [
          "Ask for the full name of the owner and, if different, the managing company",
          "Ask how they are authorised to let the property — owner, agency or management mandate",
          "Request a short video call and compare the person with any documents provided",
          "Keep all answers in writing rather than in voice notes only",
        ],
      },
      {
        step: "3",
        title: "Verify the company independently",
        detail:
          "Use public records and your own searches — not links or attachments they provide.",
        actions: [
          "Search the company name plus 'review' and 'fraud' outside their own website",
          "Confirm the business registration and physical office address independently",
          "Call the published office number rather than a mobile number from a chat",
          "Check that the agency in the photos is the agency you are speaking to",
        ],
      },
      {
        step: "4",
        title: "Confirm the property in person",
        detail:
          "A viewing verifies existence, condition and access all at once.",
        actions: [
          "Attend a daylight viewing and check the street sign and door number",
          "Confirm the person showing the property has keys and building access",
          "Compare rooms, layout and condition against the advert photos",
          "Ask a trusted local contact to attend if you cannot travel",
        ],
      },
      {
        step: "5",
        title: "Match contract and payment details",
        detail:
          "The final gate before money moves is a name match between contract and bank account.",
        actions: [
          "Check the contract names both parties and the exact address",
          "Confirm the bank account holder name matches the landlord or agency",
          "Query any request to pay a third party or a different account name",
          "Save the signed contract, payment confirmation and correspondence together",
        ],
      },
      {
        step: "6",
        title: "Keep everything in writing",
        detail:
          "Documentation is what makes a later bank, police or legal conversation possible.",
        actions: [
          "Move key agreements from chat into email so there is a durable record",
          "Store adverts, contracts, ID evidence and payment proofs in one folder",
          "Note dates and times of calls and what was agreed",
          "Avoid deleting conversations, even after a listing falls through",
        ],
      },
    ] satisfies VerificationStep[],
    questionsToAsk: [
      "Who owns the property, and are you the owner or acting for a management company?",
      "Can you confirm the full address, including house number and any letter suffix?",
      "When can I view the property, and who will be there to open it?",
      "Which bank account holder name will appear on the transfer instruction?",
      "Does the contract permit me to register this address with the gemeente?",
      "What exactly does the deposit cover, and under what conditions is it returned?",
      "Are servicekosten and utilities included, and how are they billed?",
      "Can you send the full rental agreement to read before I commit to anything?",
    ],
    scenarios: [
      {
        situation: "Searching from abroad before arrival",
        approach: "Substitute distance with verified eyes on the ground",
        firstStep: "Request a live video walkthrough showing the street sign and door number",
      },
      {
        situation: "Landlord says they are working overseas",
        approach: "Ask for a local representative rather than accepting a postal handover",
        firstStep: "Request the name and number of the agency, caretaker or family member with keys",
      },
      {
        situation: "Agency asks for a registration fee before any viewing",
        approach: "Separate paying for access from paying for a tenancy",
        firstStep: "Verify the agency independently and ask what the fee contractually entitles you to",
      },
      {
        situation: "Contract party and bank account name differ",
        approach: "Treat the mismatch as unresolved until explained in writing",
        firstStep: "Pause the payment and request written clarification of the account holder",
      },
    ] satisfies ScenarioRow[],
  },
  safePayments: {
    heading: "Paying Safely for a Rental",
    paragraphs: [
      "In the Netherlands, rent and deposits are normally paid by ordinary bank transfer from your own account, after a written agreement is signed. The transfer names a landlord or agency, the reference mentions the property or contract, and you keep the confirmation alongside the signed contract.",
      "Requests that step outside that pattern are the clearest financial warning sign. Gift cards, cryptocurrency, cash couriers and international money-transfer services are difficult or impossible to reverse — which is precisely why they are requested. A landlord who cannot accept a normal bank transfer is telling you something important.",
    ],
    rows: [
      {
        stage: "Before any payment",
        safePractice: "Signed rental agreement naming both parties, address, rent and deposit terms",
        warningSign: "Reservation or holding fee requested with no contract and no viewing",
      },
      {
        stage: "Choosing the method",
        safePractice: "Regular bank transfer from your own account with a clear reference",
        warningSign: "Gift cards, cryptocurrency, cash couriers or money-transfer services",
      },
      {
        stage: "Checking the recipient",
        safePractice: "Account holder name matches the landlord or agency in the contract",
        warningSign: "Personal account with an unrelated name, or a 'colleague's' account",
      },
      {
        stage: "Amount and timing",
        safePractice: "Deposit and first rent as stated in the signed agreement",
        warningSign: "Escalating requests — extra 'insurance', 'screening' or 'guarantee' fees",
      },
      {
        stage: "Proof of payment",
        safePractice: "Bank confirmation saved with the contract and correspondence",
        warningSign: "Requests to send screenshots of cash receipts instead of bank records",
      },
      {
        stage: "After payment",
        safePractice: "Written confirmation of receipt and an agreed in-person key handover",
        warningSign: "Contact becomes slower, handover is postponed or keys are posted",
      },
    ] satisfies PaymentRow[],
    safeHabits: [
      "Sign first, pay second — never the reverse.",
      "Pay from your own account so the trail is clear and traceable.",
      "Confirm the account holder name before confirming the transfer.",
      "Keep the payment reference specific — property address and contract date.",
      "Decline any request for payment methods you cannot dispute or trace.",
      "Store contract, payment confirmation and messages in one folder from day one.",
    ],
    neverDo: [
      "Never pay a deposit for a property you have not seen in person or by live video call.",
      "Never send money by gift card, cryptocurrency, cash courier or money-transfer service for a tenancy.",
      "Never share DigiD credentials, full banking logins or one-time payment codes.",
      "Never pay 'extra' fees invented after the contract was agreed.",
      "Never transfer to an account holder name that does not match your contract party.",
    ],
  },
  viewingSafely: {
    heading: "Viewing Properties Safely",
    paragraphs: [
      "A viewing does two jobs. It protects you from fraud by confirming the property exists and your contact has access, and it protects you as a tenant by revealing condition problems the photos hid. Both matter, so treat the viewing as a required step rather than a courtesy.",
      "Personal safety also deserves a moment of planning. Book daylight appointments, tell someone where you are going, and bring a friend or future housemate when you can. If you are searching from abroad, a live video walkthrough is a reasonable substitute — a pre-recorded clip is not, because it proves nothing about who currently has access.",
    ],
    checklist: [
      "Book the appointment in writing, with a name and phone number for the person attending",
      "Choose daylight hours and share the address and time with someone you trust",
      "Bring a friend, partner or prospective housemate where possible",
      "Check the street name, house number and doorbell label against the advert",
      "Confirm the person has keys and normal building access",
      "Walk every room and compare layout and condition against the photos",
      "Test taps, heating, windows, locks and any included appliances briefly",
      "Photograph existing damage and note anything the advert did not mention",
      "Ask about rent, servicekosten, utilities, deposit and registration permission",
      "Avoid handing over documents or payments during the viewing itself",
    ],
    videoWalkthroughTips: [
      "Insist on a live call rather than a recorded video — recordings can be reused or copied.",
      "Ask the person to show the street sign, house number and doorbell label at the start.",
      "Request a continuous walk from the front door through every room without cuts.",
      "Ask them to open a window and show the view, which is hard to fake convincingly.",
      "Have a trusted local contact attend in person if the video raises any doubt.",
    ],
    questions: [
      "Who will be at the viewing, and are they the owner, agent or caretaker?",
      "Is the rent shown inclusive of servicekosten, and which utilities are separate?",
      "What is the deposit amount, and who holds it during the tenancy?",
      "May I register this address with the gemeente?",
      "What is the notice period, and how must notice be given?",
      "When would the tenancy start, and when would keys be handed over?",
    ],
  },
  rentalContracts: {
    heading: "Why the Written Contract Protects You",
    paragraphs: [
      "The huurcontract is the document that turns a conversation into an enforceable arrangement. It names the parties, the exact property, the rent, the deposit, the notice period and often whether you may register the address with your gemeente. Without it, you have almost nothing to point to if something goes wrong.",
      "Read the whole agreement before any deposit leaves your account, including appendices. If a clause is unclear, ask in writing and keep the reply. Our dedicated contracts and deposits guide walks through the clauses, inventory lists and inspections in detail.",
    ],
    mustHaveClauses: [
      "Full names of both the landlord or agency and the tenant",
      "Exact property address, including house number and any suffix",
      "Monthly rent, payment date and the bank account for payments",
      "Servicekosten and which utilities are included or separate",
      "Deposit (borg) amount, who holds it and the conditions for return",
      "Start date, contract type and any fixed end date",
      "Notice period and the required format for giving notice",
      "Maintenance split between tenant and landlord",
      "Whether gemeente registration at the address is permitted",
      "Reference to an inventarisatielijst and move-in inspection where applicable",
    ],
    contractRedFlags: [
      "Only an unsigned photo or screenshot of a template is provided",
      "The property address in the contract does not match the advert",
      "Deposit conditions and return terms are missing or vague",
      "Verbal promises contradict the written text",
      "You are asked to sign a booking confirmation instead of a rental agreement",
      "The landlord refuses to discuss gemeente registration at the address",
    ],
    relatedGuide: {
      label: "Rental Contracts and Deposits in the Netherlands",
      href: RENTAL_CONTRACTS_AND_DEPOSITS_NETHERLANDS_PATH,
      description:
        "Clause-by-clause orientation on huurcontracten, borg deposits, inventory lists, inspections and move-out preparation.",
      status: "live" as const,
    } satisfies HousingGuideLink,
  },
  trustedPlatforms: {
    heading: "Where People Usually Search",
    intro:
      "These are widely used, publicly known Dutch platforms, corporate landlords and property managers. Listing on a well-known site reduces exposure to obvious fraud, but it does not remove your verification step — always confirm the landlord, view the property and read the contract before paying.",
    platforms: [
      {
        name: "Funda",
        type: "Property portal",
        audience: "Buyers and renters nationwide",
        note: "Large Dutch property portal listing homes through registered estate agents. Contact the agency named on the listing through its own channels.",
        website: "https://www.funda.nl/",
      },
      {
        name: "Pararius",
        type: "Rental portal",
        audience: "Renters, including internationals",
        note: "Rental-focused portal with agency-listed apartments and houses. Verify the letting agency independently before paying anything.",
        website: "https://www.pararius.com/",
      },
      {
        name: "Kamernet",
        type: "Rooms and studios",
        audience: "Students and young professionals",
        note: "Widely used for rooms, studios and shared housing. Keep conversations in-platform and be cautious if a contact moves you off it immediately.",
        website: "https://kamernet.nl/en",
      },
      {
        name: "HousingAnywhere",
        type: "Mid-term rentals",
        audience: "International students and expats",
        note: "Platform aimed at internationals booking before arrival, with in-platform booking flows. Use the platform's own payment route rather than side transfers.",
        website: "https://housinganywhere.com/",
      },
      {
        name: "Vesteda",
        type: "Corporate landlord",
        audience: "Long-term renters",
        note: "Institutional residential landlord letting directly through its own portal. Apply via the official website rather than third-party intermediaries.",
        website: "https://www.vesteda.com/en",
      },
      {
        name: "MVGM",
        type: "Property manager",
        audience: "Renters of managed portfolios",
        note: "Property management company handling residential portfolios. Confirm any contact claiming to represent them through published company channels.",
        website: "https://www.mvgm.com/",
      },
      {
        name: "Rotsvast",
        type: "Letting agency network",
        audience: "Renters in multiple cities",
        note: "Franchise network of letting offices across the Netherlands. Check the local branch details and office address independently.",
        website: "https://www.rotsvast.nl/en/",
      },
      {
        name: "Local housing corporations",
        type: "Social housing (woningcorporaties)",
        audience: "Registered social-housing applicants",
        note: "Municipal and regional corporations allocate income-capped social housing through official registration systems with waiting lists. Register only via official portals.",
        website: "https://www.government.nl/topics/housing",
      },
    ] satisfies PlatformCard[],
    usageTips: [
      "Recognised platforms lower risk — they do not replace verification, viewings or contract review.",
      "Keep negotiation and agreements in writing on the platform or by email.",
      "Be cautious when a contact insists on moving to chat apps in the first message.",
      "Report suspicious listings to the platform so they can act and warn others.",
      "For corporate landlords and agencies, always apply through the company's own website.",
    ],
    verificationReminder:
      "Platform presence is not an endorsement of any individual listing. Verify the landlord or agency independently, view the property in person or by live video call, and pay only against a signed agreement.",
  },
  ifScammed: {
    heading: "What to Do If You Have Been Scammed",
    paragraphs: [
      "If you think you have paid a fraudster, act quickly and in order. The first hours matter most for any chance of stopping or recovering a transfer, and the evidence you save now determines what the police, your bank or a legal service can do later.",
      "Being scammed is not a personal failure, and reporting is worth the effort even when recovery is uncertain. Reports help authorities identify patterns and often warn others before they pay.",
    ],
    timeline: [
      {
        phase: "1",
        title: "Stop payments",
        detail:
          "Cancel any scheduled or recurring transfers immediately and make no further payments, including 'administration' or 'release' fees. Additional payments are a common follow-up tactic.",
      },
      {
        phase: "2",
        title: "Save evidence",
        detail:
          "Screenshot the advert, full chat and email threads, contract documents, phone numbers, profile pages and bank confirmations before anything is deleted or taken offline.",
      },
      {
        phase: "3",
        title: "Contact your bank",
        detail:
          "Call your bank's fraud line as soon as possible and explain what happened. Ask whether the transfer can be recalled and what they need from you in writing.",
      },
      {
        phase: "4",
        title: "Report to the police",
        detail:
          "File a report with the Dutch police (Politie). Bring your evidence file and note the report reference — banks, platforms and insurers often ask for it.",
      },
      {
        phase: "5",
        title: "Notify Fraudehelpdesk",
        detail:
          "Report the case to Fraudehelpdesk, the national fraud reporting and information point. They collect fraud reports and publish information about current patterns.",
      },
      {
        phase: "6",
        title: "Get legal information",
        detail:
          "Contact Juridisch Loket for free legal information about your situation and possible next steps, and ask about options if you also signed documents or shared identity data.",
      },
    ] satisfies TimelineStep[],
    evidenceChecklist: [
      "Screenshots of the original advert, including price, photos and posting date",
      "Complete chat, WhatsApp and email threads, exported where possible",
      "Any contract, invoice or booking confirmation you received",
      "Bank transfer confirmations with dates, amounts and recipient details",
      "Names, phone numbers, email addresses and profile links used by the contact",
      "Notes of calls — date, time and what was said or promised",
      "Any documents or identity data you shared, so you can monitor for misuse",
    ],
    afterReportingTips: [
      "Change passwords and enable two-factor authentication if you entered credentials anywhere.",
      "Monitor your bank account and any accounts linked to documents you shared.",
      "Tell the platform where you found the listing so it can be removed.",
      "Warn your university housing office, employer relocation contact or community group.",
      "Keep your evidence file even after reporting — follow-up questions often arrive later.",
    ],
    reassurance:
      "Fraud attempts are designed to be convincing, and being targeted says nothing about your judgement. Focus on the next practical step — stop payments, preserve evidence, report — rather than on how the situation happened.",
  },
  studentExpat: {
    heading: "Why Students and New Arrivals Are Targeted",
    paragraphs: [
      "International students and newly arriving expats are not targeted because they are careless. They are targeted because their situation removes the checks that protect other renters: they often search from another country, work against a fixed start date, do not yet know what a normal rent looks like, and cannot easily walk past a building to confirm it exists.",
      "Understanding the specific vulnerability makes it easier to close. If distance is the gap, arrange verified eyes on the ground. If deadline pressure is the gap, secure a short temporary stay so you are not forced to decide in one evening. If market knowledge is the gap, compare several listings before believing any single one.",
    ],
    riskFactors: [
      {
        title: "Searching from abroad",
        body:
          "Without a viewing, you rely entirely on what the other party tells you. Fraud attempts often begin by making distance sound like a normal reason to pay first.",
      },
      {
        title: "Fixed start dates",
        body:
          "Semester start, a job start date or an expiring temporary booking creates urgency — the exact condition fraud needs to bypass verification.",
      },
      {
        title: "Unfamiliar market norms",
        body:
          "If you do not yet know typical rents, deposits or contract steps, a below-market listing looks like good fortune rather than a warning sign.",
      },
      {
        title: "Language and paperwork gaps",
        body:
          "Dutch contracts and platform messages can be hard to assess quickly, which makes an English-speaking, confident contact feel safer than the documents justify.",
      },
      {
        title: "Limited local network",
        body:
          "Newcomers often have nobody who can check an address, meet a landlord or sanity-check a contract before payment.",
      },
      {
        title: "Payment pressure in one currency step",
        body:
          "Sending a large deposit abroad or in an unfamiliar way makes unusual requests feel like part of the international process.",
      },
    ] satisfies TipCard[],
    protectionTips: [
      "Start your search earlier than feels necessary — time is the cheapest protection available.",
      "Book a short temporary stay so you can attend viewings in person before committing.",
      "Ask your university housing office or employer relocation contact to review a listing.",
      "Find one trusted local contact who can walk past an address or attend a viewing.",
      "Compare at least three current listings before accepting that a price is realistic.",
      "Agree with yourself in advance that you will not pay before a viewing and signed contract.",
    ],
    scenarios: [
      {
        situation: "Semester starts in three weeks and nothing is confirmed",
        approach: "Separate the housing deadline from the arrival deadline",
        firstStep: "Book two to four weeks of temporary accommodation, then view in person",
      },
      {
        situation: "Employer relocation package with a tight start date",
        approach: "Use the relocation contact as a verification channel",
        firstStep: "Ask them to confirm the agency and contract before you transfer anything",
      },
      {
        situation: "Studying remotely with no local contacts",
        approach: "Replace an in-person viewing with a live video walkthrough",
        firstStep: "Request a continuous live call showing the street sign and every room",
      },
      {
        situation: "Shared flat offered by a current tenant",
        approach: "Confirm the landlord permits the arrangement in writing",
        firstStep: "Ask for the landlord or agency contact and a written agreement naming you",
      },
    ] satisfies ScenarioRow[],
  },
  cityRisk: {
    heading: "Competitive Markets to Search Carefully",
    intro:
      "These cities have well-known housing pressure, which matters for safety because competition creates urgency — and urgency is what fraud depends on. This is a market-pressure overview, not a ranking of fraud levels: no city is inherently unsafe, and the same verification steps apply everywhere.",
    rows: [
      {
        city: "Amsterdam",
        marketPressure: "Very high demand; listings can receive many responses within hours",
        whatToWatch: "Below-market studios and 'available immediately' adverts that discourage viewings",
        saferApproach: "Compare several listings before replying and consider Amstelveen, Zaandam or Haarlem with good rail links",
      },
      {
        city: "Rotterdam",
        marketPressure: "High demand with fast-moving city-centre and waterfront listings",
        whatToWatch: "Copied adverts reusing photos from newer developments",
        saferApproach: "Contact the agency named in the photos through its own website and view before paying",
      },
      {
        city: "The Hague",
        marketPressure: "Strong international demand around institutions and coastal districts",
        whatToWatch: "Short-stay and holiday properties presented as long-term homes",
        saferApproach: "Require a normal huurcontract and confirm registration permission at the address",
      },
      {
        city: "Utrecht",
        marketPressure: "Very high demand from students, commuters and families",
        whatToWatch: "Room and studio listings that request a reservation fee before viewings",
        saferApproach: "Use university housing routes and established platforms; refuse pre-viewing payments",
      },
      {
        city: "Eindhoven",
        marketPressure: "Strong demand linked to tech employers and student intake periods",
        whatToWatch: "Relocation-themed offers arriving by direct message with tight deadlines",
        saferApproach: "Verify through your employer relocation contact and the agency's published channels",
      },
      {
        city: "Leiden",
        marketPressure: "Compact rental stock with concentrated academic-year demand",
        whatToWatch: "Peak-season listings pressuring students to decide within hours",
        saferApproach: "Register early with student housing services and plan a temporary stay for August",
      },
      {
        city: "Groningen",
        marketPressure: "Large student population creating sharp seasonal pressure",
        whatToWatch: "Room offers from accounts created shortly before the academic year",
        saferApproach: "Prefer established platforms and university-linked housing routes; view before paying",
      },
    ] satisfies CityRiskRow[],
    cityTips: [
      "Build extra weeks into your search in the tightest markets so you never decide under pressure.",
      "Widen your radius — nearby towns with direct trains often have calmer markets.",
      "Register with reputable agencies and corporate landlords before you need a home urgently.",
      "Peak periods (August–September and January) concentrate both demand and fraud attempts.",
      "The same verification steps apply in every city — no location makes them optional.",
    ],
    note:
      "Market pressure descriptions are general orientation drawn from widely reported housing-demand patterns. They are not fraud statistics and should not be read as ranking cities by scam frequency.",
  },
  safetyChecklist: {
    heading: "Safe Renting Checklist",
    intro:
      "Work through this list in order before any money leaves your account. If you cannot tick an item, resolve it in writing first — a legitimate landlord or agency will be able to help you complete every line.",
    checklist: [
      "Compared the rent against at least three current listings in the same area",
      "Confirmed the exact address in writing, including house number",
      "Checked the address on a map and street-level imagery",
      "Reverse image searched the listing photos for duplicates",
      "Searched the description text for copied adverts elsewhere",
      "Identified who owns or manages the property, in writing",
      "Verified the agency or company independently, not through links they sent",
      "Spoken with the contact by phone or video call",
      "Attended a viewing in person, or completed a live video walkthrough",
      "Confirmed the person showing the property has keys and building access",
      "Received the full rental agreement and read every clause and appendix",
      "Confirmed the deposit amount, holder and return conditions in writing",
      "Confirmed servicekosten, utilities and any additional charges",
      "Confirmed whether gemeente registration at the address is permitted",
      "Checked the bank account holder name matches the contract party",
      "Paid by regular bank transfer from my own account with a clear reference",
      "Saved contract, payment confirmation and all correspondence in one folder",
      "Arranged in-person key handover with a move-in inspection and photos",
    ],
    finalGateTips: [
      "Signed contract, verified account holder, completed viewing — all three before payment.",
      "If you feel rushed at this point, that feeling is information; slow the process down.",
      "Keep the folder after move-in — it also supports deposit discussions at move-out.",
      "Report any listing that failed these checks so the platform can remove it.",
    ],
  },
  mistakes: {
    heading: "Common Mistakes to Avoid",
    intro:
      "These are the habits that most often turn a suspicious listing into a real loss. Each has a straightforward replacement.",
    cards: [
      {
        title: "Paying before viewing",
        body:
          "Reservation fees and deposits for unseen properties are the single most common route to losing money, especially when searching from abroad.",
        tip: "Pay only after a viewing or live video walkthrough and a signed written agreement.",
      },
      {
        title: "Trusting an emotional story",
        body:
          "Elaborate explanations — a family emergency, a posting overseas, a missionary assignment — exist to justify skipping normal steps.",
        tip: "Judge the evidence you hold, not how sympathetic or urgent the story sounds.",
      },
      {
        title: "Transferring to a personal account",
        body:
          "A mismatch between the contract party and the bank account holder is a well-known indicator and makes recovery far harder.",
        tip: "Confirm the account holder name matches the contract before authorising any transfer.",
      },
      {
        title: "Sending documents too early",
        body:
          "Full passport scans, BSN and bank statements sent before a viewing or written offer can be used for identity fraud rather than screening.",
        tip: "Share documents only after a viewing and written offer, through official channels.",
      },
      {
        title: "Skipping the written contract",
        body:
          "Without a signed agreement naming parties, address, rent and deposit, you have very little to rely on if the arrangement collapses.",
        tip: "Insist on the full huurcontract in writing and read every clause before paying.",
      },
      {
        title: "Staying silent after a loss",
        body:
          "Embarrassment delays the bank call and the police report — the two actions where speed matters most.",
        tip: "Report immediately to your bank, the police and Fraudehelpdesk, then warn your community.",
      },
    ] satisfies MistakeCard[],
  },
  howToSchema: {
    name: "Verify a Rental Listing in the Netherlands",
    description:
      "Practical steps to check that a Dutch rental listing, landlord and payment request are legitimate before transferring a deposit.",
    steps: [
      {
        name: "Compare the rent against the local market",
        text: "Check at least three current listings of similar size and condition in the same neighbourhood. Treat an unexplained discount as a reason for extra verification rather than speed.",
      },
      {
        name: "Cross-check the advert and photos",
        text: "Reverse image search the photos and search the description text to find duplicate or copied listings, then confirm the exact address on a map and street-level imagery.",
      },
      {
        name: "Verify the landlord or agency independently",
        text: "Ask in writing who owns or manages the property, then search the name, company and office details yourself rather than relying on links or documents you were sent.",
      },
      {
        name: "View the property in person or by live video call",
        text: "Attend a daylight viewing, check the street sign and door number, and confirm the person has keys. If you cannot travel, request a continuous live video walkthrough.",
      },
      {
        name: "Read the full rental agreement",
        text: "Confirm the contract names both parties, the exact address, rent, servicekosten, deposit amount and return conditions, notice period and whether gemeente registration is permitted.",
      },
      {
        name: "Check the bank account holder before paying",
        text: "Confirm the account holder name matches the contract party, pay by regular bank transfer from your own account, and save the confirmation with the signed contract.",
      },
      {
        name: "Report anything suspicious",
        text: "Report suspicious listings to the platform, and report suspected fraud to the Dutch police and Fraudehelpdesk, keeping all evidence in one folder.",
      },
    ],
  },
  faqQuickReference: [
    "Legitimate rentals allow a viewing — in person or by live video call — before payment.",
    "Deposits follow a signed written agreement; reservation fees for unseen homes are a stop signal.",
    "Verify landlords and agencies through your own searches, not links they send you.",
    "Use normal bank transfers and check the account holder name matches the contract.",
    "If you have paid a fraudster: stop payments, save evidence, call your bank, report to police and Fraudehelpdesk.",
  ],
  faq: [
    {
      q: "How common are rental scams in the Netherlands?",
      a: "Rental fraud is a recognised problem in competitive Dutch housing markets, and consumer information services and police publish warnings about it — particularly around student intake and peak relocation periods. We do not publish figures here because reliable, current statistics are hard to compare and easy to misread. The practical takeaway is that the risk is real enough to justify verification on every listing, and that following the normal rental order removes most of the exposure.",
    },
    {
      q: "How do I know if a rental listing is a scam?",
      a: "Look at the sequence rather than the story. Warning signs include rent well below comparable listings, refusal or repeated postponement of a viewing, pressure to transfer money today, a deposit requested before any written agreement, payment to an account holder whose name does not match the contract, and requests for full passport or bank details early on. One of these means slow down and verify independently; two or more means stop.",
    },
    {
      q: "Should I ever pay a deposit before viewing a property?",
      a: "As a rule, no. In the normal Dutch process the deposit follows a signed rental agreement, and viewings come before that. If you genuinely cannot travel, a live video walkthrough showing the street sign, door number and every room — plus verified landlord or agency details and a signed contract — is the minimum substitute. A reservation fee to view a property you have never seen is not a standard step.",
    },
    {
      q: "How can I verify a landlord is legitimate?",
      a: "Ask in writing who owns the property and on what basis the contact can let it, then verify independently: search the person and company name, confirm the business registration and office address, call a published office number rather than a mobile from a chat, and check that the agency shown in the listing photos is the one you are speaking to. Finally, confirm the bank account holder name matches the party named in the contract before paying.",
    },
    {
      q: "What should I do if I have been scammed?",
      a: "Act in order. Stop all further payments and cancel scheduled transfers. Save every piece of evidence — advert screenshots, chat and email threads, contracts, bank confirmations and contact details. Call your bank's fraud line immediately and ask whether the transfer can be recalled. File a report with the Dutch police, notify Fraudehelpdesk, and contact Juridisch Loket for free legal information about your next steps.",
    },
    {
      q: "Are rental agencies safe to use?",
      a: "Established letting agencies and corporate landlords are a common and generally lower-risk route, because they have verifiable registrations, offices and published contact channels. The risk is impersonation: someone claiming to represent an agency, or a fabricated agency with a convincing website. Always reach agencies through their own published website or phone number, apply through their official process, and be cautious about upfront fees that buy access rather than a signed tenancy.",
    },
    {
      q: "Why are international students and expats targeted?",
      a: "Because of situation, not judgement. Newcomers often search from abroad without the ability to view a property, work against a fixed semester or job start date, do not yet know what a realistic rent looks like, and have no local contact who can check an address. Each of those gaps can be closed: start earlier, book a short temporary stay so you can view in person, compare several listings before believing any price, and ask a university housing office, employer relocation contact or trusted local to sanity-check a listing.",
    },
  ],
  relatedGuidesTips: [
    "Need contract detail before signing → Rental Contracts and Deposits.",
    "Need to know what a realistic rent looks like → Housing Costs.",
    "Need a safe base while you search → Temporary Accommodation.",
    "Need the wider relocation sequence → Moving to the Netherlands.",
  ],
  relatedGuides: [
    {
      label: "Rental Contracts and Deposits",
      href: RENTAL_CONTRACTS_AND_DEPOSITS_NETHERLANDS_PATH,
      description: "Clause-by-clause orientation on huurcontracten, borg deposits, inventory lists and inspections.",
      status: "live",
    },
    {
      label: "Renting in the Netherlands",
      href: RENTING_NETHERLANDS_PATH,
      description: "Full rental pillar covering search strategy, viewings and tenant orientation.",
      status: "comingSoon",
    },
    {
      label: "Housing Costs",
      href: HOUSING_COSTS_NETHERLANDS_PATH,
      description: "Realistic rent, utility and city cost ranges so below-market listings stand out.",
      status: "live",
    },
    {
      label: "Temporary Accommodation",
      href: TEMPORARY_ACCOMMODATION_NETHERLANDS_PATH,
      description: "Short-stay options that let you view properties in person before committing.",
      status: "comingSoon",
    },
    {
      label: "Buying a House",
      href: BUYING_HOUSE_NETHERLANDS_PATH,
      description: "Purchase process, notary transfer and owner responsibilities for longer stays.",
      status: "live",
    },
    {
      label: "Best Neighbourhoods",
      href: NEIGHBORHOODS_NETHERLANDS_PATH,
      description: "Compare areas within major Dutch cities before narrowing your search.",
      status: "comingSoon",
    },
    {
      label: "Moving to the Netherlands",
      href: MOVING_TO_NETHERLANDS_PATH,
      description: "Relocation timeline that sequences housing alongside registration and setup.",
      status: "live",
    },
    {
      label: "Housing hub",
      href: HOUSING_HUB_PATH,
      description: "Central housing pillar linking renting, buying, costs and utilities.",
      status: "live",
    },
  ] satisfies HousingGuideLink[],
  housingHubTips: [
    "Set a realistic budget first so an implausible rent reads as a warning, not an opportunity.",
    "Sequence viewing, contract and deposit in the standard order every time.",
    "Plan gemeente registration and utilities for after key handover.",
    "Return to the hub when comparing cities or reconsidering rent versus buy.",
  ],
  housingHubCards: [
    {
      label: "Rental Contracts and Deposits",
      href: RENTAL_CONTRACTS_AND_DEPOSITS_NETHERLANDS_PATH,
      description: "Read this before signing anything or transferring a deposit.",
      status: "live",
    },
    {
      label: "Housing Costs",
      href: HOUSING_COSTS_NETHERLANDS_PATH,
      description: "Benchmark rents so unrealistic listings are easy to spot.",
      status: "live",
    },
    {
      label: "Renting in the Netherlands",
      href: RENTING_NETHERLANDS_PATH,
      description: "Search strategy, viewings and tenant orientation.",
      status: "comingSoon",
    },
    {
      label: "Temporary Accommodation",
      href: TEMPORARY_ACCOMMODATION_NETHERLANDS_PATH,
      description: "A safe base while you view properties in person.",
      status: "comingSoon",
    },
    {
      label: "Buying a House",
      href: BUYING_HOUSE_NETHERLANDS_PATH,
      description: "Ownership route for longer, more settled stays.",
      status: "live",
    },
    {
      label: "Housing hub",
      href: HOUSING_HUB_PATH,
      description: "Central overview of every housing topic for expats.",
      status: "live",
    },
  ] satisfies HousingGuideLink[],
  exploreNextCards: [
    {
      label: "Rental Contracts and Deposits",
      href: RENTAL_CONTRACTS_AND_DEPOSITS_NETHERLANDS_PATH,
      description: "Next: what to read and confirm before you sign.",
      status: "live",
    },
    {
      label: "Housing Costs",
      href: HOUSING_COSTS_NETHERLANDS_PATH,
      description: "Benchmark realistic rents in your target city.",
      status: "live",
    },
    {
      label: "Renting in the Netherlands",
      href: RENTING_NETHERLANDS_PATH,
      description: "Full rental pillar for search and viewings.",
      status: "comingSoon",
    },
    {
      label: "Temporary Accommodation",
      href: TEMPORARY_ACCOMMODATION_NETHERLANDS_PATH,
      description: "Buy yourself time to verify before committing.",
      status: "comingSoon",
    },
    {
      label: "Buying a House",
      href: BUYING_HOUSE_NETHERLANDS_PATH,
      description: "If your stay horizon points to ownership instead.",
      status: "live",
    },
    {
      label: "Moving to the Netherlands",
      href: MOVING_TO_NETHERLANDS_PATH,
      description: "Sequence housing within the wider relocation plan.",
      status: "live",
    },
    {
      label: "Best Neighbourhoods",
      href: NEIGHBORHOODS_NETHERLANDS_PATH,
      description: "Compare areas before narrowing your search.",
      status: "comingSoon",
    },
    {
      label: "Housing hub",
      href: HOUSING_HUB_PATH,
      description: "Return to the central housing overview.",
      status: "live",
    },
  ] satisfies HousingGuideLink[],
  sourceUsageTips: [
    "Use Government.nl for official orientation on housing and living in the Netherlands.",
    "Use Politie to file a fraud report and obtain a report reference for your bank.",
    "Use Fraudehelpdesk to report suspected fraud and read about current patterns.",
    "Use Juridisch Loket for free legal information about contracts and next steps.",
    "Use your gemeente website for registration rules at a specific address.",
  ],
  officialSources: [
    {
      label: "Government.nl — housing",
      href: "https://www.government.nl/topics/housing",
      description: "Official Dutch government orientation on housing, renting and tenant-related topics.",
    },
    {
      label: "Juridisch Loket",
      href: "https://www.juridischloket.nl/",
      description: "Free legal information service for residents — useful for contract and fraud questions.",
    },
    {
      label: "Politie (Dutch police)",
      href: "https://www.politie.nl/en",
      description: "Report fraud to the police and obtain a report reference for banks and platforms.",
    },
    {
      label: "Fraudehelpdesk",
      href: "https://www.fraudehelpdesk.nl/",
      description: "National fraud reporting and information point publishing current fraud patterns.",
    },
    {
      label: "Consumentenbond",
      href: "https://www.consumentenbond.nl/",
      description: "Dutch consumer organisation with practical consumer-protection information and guidance.",
    },
    {
      label: "Municipalities (Government.nl)",
      href: "https://www.government.nl/topics/municipalities",
      description: "Find your gemeente to confirm address registration rules and local housing information.",
    },
  ] satisfies Array<{ label: string; href: string; description: string }>,
  officialSourcesNote:
    "Official links are for orientation only. Reporting procedures, contact routes and consumer guidance change over time — open the source site to confirm current steps. This guide is not legal advice and does not assess your specific listing, contract or case.",
} as const;

export type RentalScamsNetherlandsPage = typeof rentalScamsNetherlandsPage;
