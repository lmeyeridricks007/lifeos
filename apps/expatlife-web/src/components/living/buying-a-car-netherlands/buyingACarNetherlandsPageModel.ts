import { LIVING_GETTING_AROUND_PATH, LIVING_PILLAR_ROOT_PATH } from "@/src/components/living/livingPillarContent";
import {
  BUYING_A_CAR_NETHERLANDS_PATH,
  CAR_INSURANCE_NETHERLANDS_PATH,
  CAR_SHARING_NETHERLANDS_PATH,
  DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
  ELECTRIC_VEHICLES_NETHERLANDS_PATH,
  GETTING_AROUND_PATH,
  LEASE_CARS_NETHERLANDS_PATH,
  LIVING_HUB_PATH,
  MOT_APK_NETHERLANDS_PATH,
  MUNICIPALITY_PATH,
  PARKING_PATH,
  ROAD_TAX_NETHERLANDS_PATH,
  SPEED_CAMERAS_NETHERLANDS_PATH,
} from "@/src/components/living/driving-licence-exchange-netherlands/drivingLicenceExchangeNetherlandsPageModel";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

export {
  BUYING_A_CAR_NETHERLANDS_PATH,
  CAR_INSURANCE_NETHERLANDS_PATH,
  CAR_SHARING_NETHERLANDS_PATH,
  DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
  ELECTRIC_VEHICLES_NETHERLANDS_PATH,
  GETTING_AROUND_PATH,
  LEASE_CARS_NETHERLANDS_PATH,
  LIVING_HUB_PATH,
  MOT_APK_NETHERLANDS_PATH,
  MUNICIPALITY_PATH,
  PARKING_PATH,
  ROAD_TAX_NETHERLANDS_PATH,
  SPEED_CAMERAS_NETHERLANDS_PATH,
};

export type DrivingLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon" | "external";
};

export type TipCard = { title: string; body: string };
export type SnapshotSignal = { label: string; value: string; note: string };
export type MistakeCard = { title: string; body: string; advice: string };
export type ScenarioRow = { situation: string; approach: string; firstStep: string };
export type HowToStep = { name: string; text: string };
export type ComparisonRow = { topic: string; whatToCheck: string; tip: string };
export type CostRow = { category: string; range: string; notes: string };
export type TimelineStep = { phase: string; timing: string; detail: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "buying-a-car-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const buyingACarNetherlandsPage = {
  slug: "buying-a-car-netherlands",
  path: BUYING_A_CAR_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: GETTING_AROUND_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(BUYING_A_CAR_NETHERLANDS_PATH) ?? "2026-08-26",
  seo: {
    title: "Buying a Car in the Netherlands | Complete Guide for Expats",
    description:
      "Learn how expats buy a used or new car in the Netherlands: BPM and tax orientation, RDW registration, insurance, APK checks, dealer vs private purchase, and realistic ownership costs.",
    keywords: [
      "buying a car Netherlands",
      "buy used car Netherlands expats",
      "BPM Netherlands car tax",
      "RDW car registration",
      "APK inspection Netherlands",
      "car insurance Netherlands expats",
      "dealer vs private car Netherlands",
      "import car Netherlands",
      "car ownership costs Netherlands",
      "kenteken Netherlands",
      "expat buy car Netherlands",
      "Dutch car purchase checklist",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Driving",
    pageTitle: "Buying a Car in the Netherlands",
    subtitle:
      "How expats buy used or new cars here: purchase paths, BPM and tax orientation, RDW registration, insurance, APK, and the real monthly cost stack — without licence-exchange or parking deep-dives.",
    primaryCta: { label: "Start with the decision check", href: "#decide" },
    secondaryCta: { label: "Purchase checklist", href: "#checklist" },
    chips: ["New vs used", "Dealer vs private", "BPM & tax", "RDW registration", "Insurance & APK"],
    disclaimer:
      "General orientation only — not legal, tax, financial or insurance advice and not a substitute for RDW, Belastingdienst, insurer or dealer contracts. Rules and fees change. Verify current amounts and steps on official sites before you buy or drive.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch canal-side scene: multicultural expat couple reviewing car purchase paperwork beside a compact hatchback on a brick street, soft daylight, no dealer or government logos, reassuring orientation mood.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#decide", label: "Decide" },
    { href: "#new-vs-used", label: "New vs used" },
    { href: "#dealer-private", label: "Dealer vs private" },
    { href: "#bpm-tax", label: "BPM & tax" },
    { href: "#rdw", label: "RDW" },
    { href: "#insurance", label: "Insurance" },
    { href: "#apk", label: "APK" },
    { href: "#costs", label: "Costs" },
    { href: "#recommended-options", label: "Recommended" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#checklist", label: "Checklist" },
    { href: "#howto", label: "How-to" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#driving-hub", label: "Hub" },
    { href: "#explore-next", label: "Explore next" },
    { href: "#sources", label: "Sources" },
  ],
  visuals: {
    intro: {
      src: `/images/infographics/${VISUAL_PREFIX}-intro-premium-v2.png`,
      alt: "Premium orientation board titled Buying a Car After Arrival — four building blocks: confirm you may drive, choose purchase path, plan RDW and insurance, budget ownership costs — Purchase File Checklist rail on the right, Dutch canal skyline and ExpatLife brand footer.",
      caption:
        "Four habits cover most purchase questions: licence status, path, registration stack, and ownership budget.",
    },
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of buying a car in the Netherlands — decide if you need one, new vs used, dealer vs private, BPM and tax orientation, RDW transfer, insurance and APK — Dutch city mobility band and ExpatLife brand footer.",
      "Six building blocks explain almost every car-purchase question for newcomers."
    ),
    decide: visual(
      "decide",
      "Premium decision board — own a car vs OV and bike vs car-share — commute, parking and licence status forks with a Verify before you buy rail, Dutch canal and bike lane props.",
      "Ownership is optional in many cities — confirm licence status and parking reality before you commit."
    ),
    newVsUsed: visual(
      "new-vs-used",
      "Premium comparison desk — new showroom path versus used market path with warranty, mileage, APK and price trade-offs — calm Dutch dealer-window and classifieds papers scene.",
      "New cars trade price for simplicity; used cars need deeper checks and still need insurance and registration."
    ),
    dealerPrivate: visual(
      "dealer-private",
      "Premium two-lane purchase map — authorised dealer desk versus private seller handshake with document and history checklists — General information only rail.",
      "Dealers add process support; private sales need stronger buyer diligence on history and paperwork."
    ),
    bpmTax: visual(
      "bpm-tax",
      "Premium tax orientation board — BPM when it appears, road tax habits, and when import/export rules matter — calculator-style desk with Dutch canal light, no fake rates.",
      "BPM and road tax are planning topics — confirm live amounts on official calculators before you budget."
    ),
    rdw: visual(
      "rdw",
      "Premium RDW registration timeline — ownership transfer, kenteken documents, name on the register, and first-week admin after purchase — municipal-adjacent paperwork desk.",
      "RDW ownership transfer is the legal handoff — keep proof that you are the registered keeper."
    ),
    insurance: visual(
      "insurance",
      "Premium insurance orientation scene — WA vs WA+ vs all-risk comparison cards, excess and no-claim notes, Compare cover yourself rail — Dutch living-room desk with policy folder.",
      "Third-party liability is the legal baseline; higher cover is a risk and budget choice you verify with insurers."
    ),
    apk: visual(
      "apk",
      "Premium APK inspection board — when the next APK is due, what a valid sticker/status means, and buying a used car with APK still current — garage bay with checklist rail.",
      "APK keeps roadworthiness on a calendar — check the next due date before you buy a used car."
    ),
    costs: visual(
      "costs",
      "Premium ownership cost stack — purchase price, tax/BPM orientation, insurance, fuel or charge, parking, maintenance and APK — euro planning bands as orientation only.",
      "Budget the full stack, not only the sticker price — parking and insurance surprise many newcomers."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — city bike-first household, suburban commute, company vs private car, short assignment import temptation — first-step arrows.",
      "Match your city and assignment length to a calm first step instead of copying a colleague’s purchase."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — buying before licence status is clear, ignoring parking permits, skipping history checks, under-budgeting insurance, assuming BPM is zero — Fix notes beside each card.",
      "Most friction comes from timing and total cost — not from finding a pretty hatchback online."
    ),
    checklist: visual(
      "checklist",
      "Premium car-purchase checklist clipboard — licence OK, path chosen, history checked, RDW transfer planned, insurance quote ready, parking researched, APK date noted — Dutch kitchen table with canal light.",
      "Use this checklist so purchase day stays intentional, not improvised."
    ),
  },
  snapshotSignals: [
    { label: "Licence first", value: "Drive rights clear", note: "Before you buy" },
    { label: "Path", value: "Dealer or private", note: "Plus new vs used" },
    { label: "Admin", value: "RDW + insure", note: "Same-week stack" },
    { label: "Budget", value: "Full cost stack", note: "Not sticker only" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Buying a car in the Netherlands is an ownership journey — purchase path, tax orientation, RDW registration, insurance and APK — not the same topic as exchanging a foreign licence or learning the OV network.",
    "Driving licence exchange covers whether you may legally drive. Getting around covers bikes, trains and OVpay. Parking and local permits covers resident parking once you have a vehicle. This page stays on buying and owning the car itself.",
  ],
  introHighlights: [
    "Confirm licence status before you commit money to a vehicle.",
    "Dealer and private paths both need RDW ownership transfer and insurance.",
    "BPM, road tax, parking and insurance often dwarf “bargain” purchase prices.",
    "Do not treat this page as tax, legal or insurance advice — verify official calculators and quotes.",
  ],
  orientationFlowSteps: [
    "Confirm you may drive (licence exchange status) and whether parking is realistic where you live.",
    "Choose new vs used and dealer vs private with a written budget for the full ownership stack.",
    "Inspect history, APK timing and paperwork before you pay.",
    "Plan RDW transfer + insurance start for the same day you take the keys.",
  ],
  purchaseFileChecklist: [
    "Valid Dutch or still-valid foreign driving rights for the vehicle category",
    "Seller identity + purchase agreement / invoice",
    "Vehicle identity (kenteken) and ownership transfer plan via RDW",
    "Recent APK status / next due date for used cars",
    "Insurance quote ready to activate on transfer day",
    "Parking reality check (permit waitlists, garage, street rules)",
  ],
  introScenarios: [
    {
      situation: "I live in a dense city and mostly use OV and bikes",
      approach: "Ownership is optional — car-share and weekend hire often beat fixed costs if you drive rarely.",
      firstStep: "Read Getting around and price a month of car-share before viewing cars.",
    },
    {
      situation: "My foreign licence exchange is still in progress",
      approach: "Do not assume you can drive a newly bought car yet — licence status comes first.",
      firstStep: "Finish the Driving licence exchange path, then return here.",
    },
    {
      situation: "I need a car for a suburban commute next month",
      approach: "Reverse-plan insurance, RDW transfer and parking permits alongside the purchase.",
      firstStep: "Set a total monthly budget, then shortlist dealer vs private options.",
    },
  ] satisfies ScenarioRow[],
  quickAnswer: {
    heading: "How do expats buy a car in the Netherlands?",
    summary:
      "Most residents buy through a dealer or a private seller, complete RDW ownership transfer, insure the car from day one, and budget for road tax, fuel or charging, maintenance, APK and parking. BPM and other tax rules can apply especially on new cars or certain import paths — always verify live official calculators. Licence exchange and parking permits are separate guides.",
    bullets: [
      "Confirm you may legally drive before you buy.",
      "Choose new vs used and dealer vs private with a written ownership budget.",
      "Check vehicle history, APK timing and paperwork before paying.",
      "Transfer ownership via RDW and start insurance on the same day.",
      "Research resident parking early — many cities have waitlists.",
    ],
    note: "This page does not replace RDW, Belastingdienst, insurer or contract advice for your purchase.",
  },
  snapshotCards: [
    {
      title: "Decide first",
      body: "City density, assignment length and licence status decide whether owning beats OV, bike and car-share.",
    },
    {
      title: "New vs used",
      body: "New cars cost more up front; used cars need stronger history and APK checks.",
    },
    {
      title: "Dealer vs private",
      body: "Dealers add process support; private sales need more buyer diligence on documents and condition.",
    },
    {
      title: "BPM & tax orientation",
      body: "BPM can appear on new or import paths; road tax is a recurring ownership cost — verify official tools.",
    },
    {
      title: "RDW registration",
      body: "Ownership transfer puts you on the register — keep proof and align insurance start dates.",
    },
    {
      title: "Insurance & APK",
      body: "Insure before you drive; check the next APK date on any used car you consider.",
    },
  ] satisfies TipCard[],
  snapshotTips: [
    "Licence exchange is the drive-rights sibling — keep it separate from purchase logistics.",
    "Getting around covers OV and bikes when ownership is optional.",
    "Parking permits assume you already have (or will soon have) a car and local address rules.",
  ],
  decide: {
    heading: "Should you buy a car — or keep multimodal?",
    intro:
      "In many Dutch cities, owning a car is a lifestyle and budget choice, not a default. Start with commute reality, parking, and whether you may legally drive.",
    paragraphs: [
      "Dense cores with strong OV and bike infrastructure often make occasional car-share cheaper than insurance, parking and depreciation combined.",
      "Suburban or multi-site work patterns can still justify ownership — but only after you price parking permits and monthly fixed costs honestly.",
      "If your foreign licence validity window is unclear, pause purchase. Driving licence exchange is the companion guide for that question.",
    ],
    rows: [
      {
        topic: "Dense city, rare car needs",
        whatToCheck: "Monthly car-share + OV vs insurance + parking + depreciation.",
        tip: "Try a month without ownership before you buy.",
      },
      {
        topic: "Regular suburban / multi-site commute",
        whatToCheck: "Door-to-door time, parking at work, and total monthly cost.",
        tip: "Build a written budget including road tax and maintenance.",
      },
      {
        topic: "Short assignment (under ~12–18 months)",
        whatToCheck: "Resale friction, import temptation, and lease alternatives.",
        tip: "Avoid heavy import complexity unless you have a clear exit plan.",
      },
      {
        topic: "Licence status uncertain",
        whatToCheck: "Whether you may legally drive now and through the purchase week.",
        tip: "Resolve licence exchange first — ownership without drive rights is expensive storage.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Parking is part of the decision",
        body: "Resident permit waitlists and garage fees can erase a “cheap” used-car deal.",
      },
      {
        title: "Company cars are a different track",
        body: "Employer lease and bijtelling rules are HR/tax topics — do not mix them into a private purchase budget casually.",
      },
      {
        title: "Mobility backup still matters",
        body: "Even car owners use OV and bikes for city centres, events and when the car is in the workshop.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "OV, bikes and multimodal mobility when ownership is optional.",
      },
      {
        label: "Driving licence exchange",
        href: DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
        status: "live",
        description: "Confirm foreign licence validity and Dutch rijbewijs exchange before you buy.",
      },
      {
        label: "Parking and local permits",
        href: PARKING_PATH,
        status: "live",
        description: "Resident parking, visitor permits and paid zones.",
      },
    ] satisfies DrivingLink[],
  },
  newVsUsed: {
    heading: "New versus used cars",
    intro:
      "New cars trade a higher purchase price for clearer history and warranty patterns. Used cars can be great value — if you verify condition, APK timing and ownership paperwork.",
    paragraphs: [
      "For newcomers, the biggest used-car risk is incomplete history or a surprise workshop bill in month one — not the classifieds site itself.",
      "New-car paths often involve dealer admin support, but tax and monthly ownership costs still apply. Confirm what is included in the offer versus optional extras.",
      "Importing a foreign-registered car can add BPM and registration complexity. Treat import as an advanced path with official calculators — not a casual weekend project.",
    ],
    rows: [
      {
        topic: "Brand-new from dealer",
        whatToCheck: "On-the-road price, options, delivery date, and what tax items are already handled.",
        tip: "Ask for a written breakdown — not only a monthly lease-style teaser.",
      },
      {
        topic: "Nearly-new / ex-lease",
        whatToCheck: "Service history, remaining warranty, mileage pattern, tyre and brake condition.",
        tip: "Still verify APK status and run a careful test drive.",
      },
      {
        topic: "Private used sale",
        whatToCheck: "Ownership proof, service stamps, accident history signals, and next APK date.",
        tip: "Budget an independent inspection for higher-value cars.",
      },
      {
        topic: "Import from abroad",
        whatToCheck: "BPM orientation, RDW registration path, and whether the car meets Dutch requirements.",
        tip: "Use official tools before you ship or drive a foreign-plated car home.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Warranty is not insurance",
        body: "A warranty may cover some defects; you still need motor insurance to drive legally.",
      },
      {
        title: "Mileage tells a story",
        body: "Very low or oddly high mileage needs explanation — ask for service records.",
      },
      {
        title: "Electric vs petrol/diesel",
        body: "Charging access at home or work matters as much as fuel price headlines.",
      },
    ] satisfies TipCard[],
  },
  dealerPrivate: {
    heading: "Dealer purchase versus private seller",
    intro:
      "Both paths can work. Dealers usually add process scaffolding; private sales need stronger buyer checks on identity, history and the RDW handoff.",
    paragraphs: [
      "Authorised or reputable dealers may help with paperwork, trade-ins and warranty products — still read the contract and confirm what is optional.",
      "Private sales (including popular classifieds) can be cheaper, but you own the diligence: seller identity, payment safety, vehicle history and a clean ownership transfer.",
      "Never hand over full payment without a clear plan for RDW transfer and insurance start. Meet in safe, well-lit places and keep written agreements.",
    ],
    steps: [
      {
        phase: "1 · Shortlist",
        timing: "Before viewing",
        detail: "Set max budget including tax, insurance and parking — then filter listings.",
      },
      {
        phase: "2 · Verify",
        timing: "Before paying",
        detail: "Check identity, history signals, APK date, and take a thorough test drive.",
      },
      {
        phase: "3 · Agree in writing",
        timing: "Purchase day",
        detail: "Price, extras, defects disclosed, and who handles RDW transfer steps.",
      },
      {
        phase: "4 · Transfer + insure",
        timing: "Same day as keys",
        detail: "Complete RDW ownership change and activate insurance before you drive away.",
      },
      {
        phase: "5 · First-week admin",
        timing: "Days after",
        detail: "Confirm road tax expectations, parking permit applications, and service bookings.",
      },
    ] satisfies TimelineStep[],
    cards: [
      {
        title: "Dealer",
        body: "More process support and sometimes warranty options — compare total price, not only monthly teasers.",
      },
      {
        title: "Private",
        body: "Often lower sticker price — higher diligence burden on history, paperwork and handoff.",
      },
      {
        title: "Payment safety",
        body: "Prefer traceable payments and never ignore red-flag pressure to skip RDW steps.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Municipality services",
        href: MUNICIPALITY_PATH,
        status: "live",
        description: "Local admin orientation when parking or address proof appears in the journey.",
      },
      {
        label: "Parking and local permits",
        href: PARKING_PATH,
        status: "live",
        description: "Resident parking after you own the car.",
      },
    ] satisfies DrivingLink[],
  },
  bpmTax: {
    heading: "BPM and tax orientation for car buyers",
    intro:
      "Dutch car purchasing can involve BPM (a purchase-related tax in specific situations) and recurring motor vehicle tax. Treat numbers as orientation only — official calculators win.",
    paragraphs: [
      "BPM often matters most for new cars and certain import paths. Many domestic used-car purchases between residents already reflect BPM historically in the market price — but do not invent exemptions for your case.",
      "Road tax (motorrijtuigenbelasting) is a recurring ownership cost that depends on factors such as fuel type, weight and province. Check the Belastingdienst tools for your vehicle profile.",
      "Company cars, lease constructs and bijtelling are separate from a private purchase budget. If your employer provides a car, ask HR/payroll — do not copy a private-buyer checklist blindly.",
    ],
    rows: [
      {
        topic: "Domestic used car (already NL-registered)",
        whatToCheck: "Whether any extra BPM applies to your path (often none for a simple resident-to-resident used sale) and upcoming road tax.",
        tip: "Still verify — edge cases exist; official pages beat forums.",
      },
      {
        topic: "New car",
        whatToCheck: "How BPM is reflected in the on-the-road price and what the dealer quote includes.",
        tip: "Ask for a line-item breakdown before you sign.",
      },
      {
        topic: "Import / foreign plates",
        whatToCheck: "BPM calculation inputs, RDW registration requirements and timing.",
        tip: "Run official BPM tools before you commit to shipping or driving in.",
      },
      {
        topic: "Recurring road tax",
        whatToCheck: "Quarterly/annual estimate for the specific kenteken characteristics.",
        tip: "Add it to the monthly ownership stack with insurance and parking.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "No fake rates here",
        body: "ExpatLife does not publish guaranteed BPM amounts or unofficial tax waivers.",
      },
      {
        title: "Save dated screenshots",
        body: "Calculator outputs and fee pages change — keep proof of what you used to decide.",
      },
      {
        title: "Tax ≠ insurance",
        body: "Paying road tax does not replace the legal need for motor insurance.",
      },
    ] satisfies TipCard[],
  },
  rdw: {
    heading: "RDW registration and ownership transfer",
    intro:
      "RDW is the vehicle authority lane for registration and ownership changes. After purchase, you want clear proof that you are the registered keeper — and insurance aligned to that moment.",
    paragraphs: [
      "For many domestic sales, ownership is transferred digitally or via dealer process using the vehicle’s registration documents. Follow the current RDW instructions for buyers and sellers — flows are updated over time.",
      "Keep copies of the purchase agreement, transfer confirmation and any temporary documents. Name mismatches between passport, DigiD and RDW records cause avoidable delays.",
      "If you buy from a dealer, clarify who initiates the transfer and when keys are released. If you buy privately, agree the sequence in writing before money moves.",
    ],
    steps: [
      {
        phase: "Confirm seller authority",
        timing: "Before payment",
        detail: "Seller should be able to transfer ownership; watch for incomplete paperwork stories.",
      },
      {
        phase: "Complete RDW transfer",
        timing: "Purchase handoff",
        detail: "Follow the official buyer/seller transfer flow until confirmation is recorded.",
      },
      {
        phase: "Activate insurance",
        timing: "Same day",
        detail: "Do not drive uninsured — align policy start with ownership change.",
      },
      {
        phase: "File the pack",
        timing: "Same week",
        detail: "Store transfer proof, invoice, APK notes and insurer policy PDF together.",
      },
    ] satisfies TimelineStep[],
    cards: [
      {
        title: "Kenteken is the vehicle ID",
        body: "Use the plate/registration identity consistently across insurance and parking applications.",
      },
      {
        title: "Dealer vs private handoff",
        body: "Same legal idea — different who-clicks-what. Confirm the sequence before you pay.",
      },
      {
        title: "Name matching",
        body: "Keep BRP/DigiD identity details consistent with RDW and insurer forms.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Driving licence exchange",
        href: DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
        status: "live",
        description: "You still need valid drive rights after the car is registered to you.",
      },
      {
        label: "Municipality services",
        href: MUNICIPALITY_PATH,
        status: "live",
        description: "Address and DigiD context when admin stacks collide.",
      },
    ] satisfies DrivingLink[],
  },
  insurance: {
    heading: "Car insurance orientation for expats",
    intro:
      "You need motor insurance to drive. Dutch products are commonly discussed as WA (third-party), WA+ (third-party + limited own damage) and all-risk — confirm definitions and exclusions on insurer quotes.",
    paragraphs: [
      "Insurers price on driver profile, car value, postcode, claim history and cover level. Newcomers sometimes under-insure a financed or high-value car — or over-pay for cover they do not need on a low-value runabout.",
      "Compare excess (eigen risico), roadside assistance add-ons, glass cover and whether other named drivers are included. Do not rely on a single comparison screenshot without reading the policy conditions.",
      "If you are waiting on a licence exchange, clarify with insurers what licence evidence they accept. Ownership without a driver who may legally drive is still an expensive object in a parking space.",
    ],
    rows: [
      {
        topic: "WA (third-party)",
        whatToCheck: "Legal liability baseline and whether it matches your risk tolerance for the car’s value.",
        tip: "Common starting point for lower-value used cars — still compare excess and extras.",
      },
      {
        topic: "WA+",
        whatToCheck: "Which own-damage events are included versus excluded.",
        tip: "Read the middle ground carefully — marketing labels differ by insurer.",
      },
      {
        topic: "All-risk / comprehensively styled cover",
        whatToCheck: "Premium vs car value, finance requirements, and claim rules.",
        tip: "Often considered for newer/higher-value cars — verify, do not assume.",
      },
      {
        topic: "Start date",
        whatToCheck: "Policy activates before or at the moment you drive after transfer.",
        tip: "Align with RDW ownership change; keep confirmation emails.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "No fake rankings",
        body: "ExpatLife does not rank insurers. Compare live quotes and policy wording yourself.",
      },
      {
        title: "Named drivers",
        body: "Partners or housemates who will drive usually need to be listed — check rules.",
      },
      {
        title: "Claims abroad",
        body: "If you drive to neighbouring countries, confirm territorial cover on the policy.",
      },
    ] satisfies TipCard[],
  },
  apk: {
    heading: "APK inspection and roadworthiness timing",
    intro:
      "APK is the periodic roadworthiness inspection many passenger cars need. When buying used, the next APK due date is a practical purchase signal — not a cosmetic detail.",
    paragraphs: [
      "A car can look clean and still be close to an expensive APK failure. Ask for the next due date and recent inspection history before you negotiate price.",
      "After you own the car, diary the next APK so you are not scrambling when a reminder arrives. Workshops book up — especially around popular due months.",
      "APK status does not replace insurance, RDW ownership proof or a valid driving licence. Treat it as one column in the ownership checklist.",
    ],
    rows: [
      {
        topic: "Used car with APK valid for months",
        whatToCheck: "Exact due date, any advisory notes from the last inspection.",
        tip: "Still do a test drive and history check — APK is not a full provenance report.",
      },
      {
        topic: "APK due within weeks",
        whatToCheck: "Whether price reflects upcoming inspection risk.",
        tip: "Negotiate with eyes open or budget workshop time immediately after purchase.",
      },
      {
        topic: "Failed / unclear status stories",
        whatToCheck: "Why the seller is vague and whether documents match the plate.",
        tip: "Walk away from pressure to buy “as is” without clarity.",
      },
      {
        topic: "New cars",
        whatToCheck: "When the first APK becomes due under current rules for that vehicle.",
        tip: "Confirm on official guidance — first intervals can differ by vehicle category.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Diary the due date",
        body: "Put the next APK in your calendar the week you buy.",
      },
      {
        title: "Workshop buffer",
        body: "Book early if your due date clusters with school holidays or busy seasons.",
      },
      {
        title: "Separate from tuning culture",
        body: "Modifications can affect inspection outcomes — keep road-legal configuration.",
      },
    ] satisfies TipCard[],
  },
  costs: {
    heading: "Ownership cost stack (planning orientation)",
    intro:
      "The sticker price is only the entry ticket. Expats underestimate insurance, parking, road tax and maintenance more often than they overestimate fuel.",
    paragraphs: [
      "Build a monthly stack: insurance + road tax share + parking + fuel/charging + maintenance reserve + unexpected repairs. Compare that number to car-share and OV before you buy.",
      "Depreciation is real — especially on new cars. If your assignment might end in two years, factor resale friction into the decision.",
      "Ranges below are planning orientation only. Your postcode, car type and driving pattern can move every line.",
    ],
    rows: [
      {
        category: "Purchase price / down payment",
        range: "Wide — set a hard ceiling",
        notes: "Include dealer fees or inspection costs for used cars.",
      },
      {
        category: "BPM / purchase tax (when applicable)",
        range: "Verify on official tools",
        notes: "Most relevant for new/import paths — do not invent amounts.",
      },
      {
        category: "Insurance",
        range: "Monthly — compare quotes",
        notes: "Driver profile and cover level dominate price.",
      },
      {
        category: "Road tax",
        range: "Recurring — check Belastingdienst",
        notes: "Depends on vehicle characteristics and location factors.",
      },
      {
        category: "Parking (permit / garage / visitor)",
        range: "Often material in cities",
        notes: "See Parking and local permits for the permit track.",
      },
      {
        category: "Fuel / charging + maintenance + APK",
        range: "Usage + age dependent",
        notes: "Keep a repair buffer for used cars.",
      },
    ] satisfies CostRow[],
    cards: [
      {
        title: "Write the monthly number",
        body: "If you cannot state a calm monthly total, you are not ready to buy.",
      },
      {
        title: "Compare to not owning",
        body: "OV + bike + occasional car-share is a real alternative in many cities.",
      },
      {
        title: "No fake bargains",
        body: "ExpatLife does not invent dealer discounts, guaranteed residuals or official partnerships.",
      },
    ] satisfies TipCard[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Mobility and insurance orientation while you buy",
    subtitle:
      "Soft CTAs for car-sharing if you want to delay ownership, and insurance comparison when you are ready to cover a car. This block is not a ranking of dealers, workshops or municipalities.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for purchase-week mobility and insurance orientation — not pay-to-rank placement unless a link is explicitly labelled as sponsored.",
    placementId: "nl-living-buying-a-car-support-providers",
    analyticsPageContext: "buying-a-car-netherlands-recommended-options",
    categoryLinks: [
      { href: GETTING_AROUND_PATH, label: "Getting around" },
      { href: DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH, label: "Driving licence exchange" },
      { href: PARKING_PATH, label: "Parking permits" },
    ],
    browseLabel: "More mobility context: ",
  },
  scenarios: {
    heading: "Common expat car-buying scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "Amsterdam/Utrecht-style dense city, bike-first",
        approach: "Stress-test ownership against parking waitlists and monthly fixed costs.",
        firstStep: "Price car-share + OV for a month; read Parking permits if you still want a car.",
      },
      {
        situation: "Suburban family needing weekend flexibility",
        approach: "Used dealer purchase with inspection + insurance quotes often beats rushed private buys.",
        firstStep: "Set a full monthly budget, then shortlist 3 cars max.",
      },
      {
        situation: "Licence exchange still pending",
        approach: "Pause purchase driving plans; ownership without drive rights is storage.",
        firstStep: "Open Driving licence exchange and diary the validity window.",
      },
      {
        situation: "Tempted to import your home-country car",
        approach: "Treat BPM and RDW registration as first-class project risks.",
        firstStep: "Run official BPM/registration orientation before any shipping deposit.",
      },
      {
        situation: "Company car offered at work",
        approach: "Compare HR lease terms and tax treatment separately from private purchase maths.",
        firstStep: "Ask payroll/HR for a written breakdown; keep private buying as a fallback only.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Buying before licence status is clear",
      body: "A parked car you cannot legally drive still costs insurance and parking.",
      advice: "Confirm drive rights via the licence-exchange guide first.",
    },
    {
      title: "Ignoring resident parking reality",
      body: "Permit waitlists and garage fees can erase a “deal”.",
      advice: "Check Parking and local permits before you pay the seller.",
    },
    {
      title: "Skipping history and APK checks",
      body: "Pretty photos hide workshop surprises.",
      advice: "Verify APK due date, service history and take a careful test drive.",
    },
    {
      title: "Under-budgeting insurance and road tax",
      body: "Sticker price optimism fades in month two.",
      advice: "Write the full monthly stack before you bid.",
    },
    {
      title: "Paying without an RDW transfer plan",
      body: "Keys without a clean ownership handoff are a red flag.",
      advice: "Agree transfer + insurance start in writing on purchase day.",
    },
    {
      title: "Treating forums as tax law",
      body: "BPM and import threads go stale and miss edge cases.",
      advice: "Prefer RDW and Belastingdienst tools — save dated screenshots.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Car purchase readiness checklist",
    intro: "Use this before you transfer money — and again on the day you take the keys.",
    items: [
      "Confirm you may legally drive (licence exchange status clear)",
      "Confirm parking plan (permit, garage, or private spot)",
      "Choose new vs used and dealer vs private with a written budget",
      "Check vehicle history signals, service records and next APK date",
      "Agree purchase terms in writing (price, defects, included extras)",
      "Plan RDW ownership transfer sequence with the seller/dealer",
      "Activate insurance to cover the moment you drive",
      "File invoice, transfer proof, policy PDF and APK notes together",
      "Diary road tax expectations and first maintenance / APK reminder",
    ],
  },
  howTo: {
    heading: "How to buy a car in the Netherlands (orientation)",
    steps: [
      {
        name: "Confirm drive rights and parking reality",
        text: "Make sure you may legally drive and that storing the car where you live is realistic before you shop.",
      },
      {
        name: "Set a full ownership budget",
        text: "Include purchase ceiling, insurance, road tax, parking, fuel/charging and a maintenance buffer — then compare to not owning.",
      },
      {
        name: "Shortlist and verify the car",
        text: "Inspect history, APK timing, condition and paperwork; use an independent check for higher-value used cars when needed.",
      },
      {
        name: "Complete RDW transfer and start insurance",
        text: "Follow the official ownership transfer flow and activate insurance before you drive away.",
      },
      {
        name: "Finish first-week admin",
        text: "Store documents, apply for parking permits if required, and diary APK and maintenance reminders.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to buy a car in the Netherlands as an expat",
    description:
      "Orientation steps for expats deciding whether to buy, verifying a vehicle, completing RDW ownership transfer and starting insurance.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "Can I buy a car before exchanging my foreign driving licence?",
      a: "You can explore listings, but you should not assume you may drive. Confirm licence validity first using the Driving licence exchange guide, then complete purchase logistics here.",
    },
    {
      q: "Is it better to buy from a dealer or a private seller?",
      a: "Dealers often provide more process support; private sales can be cheaper but need stronger buyer diligence on history, paperwork and RDW transfer. Choose based on your risk tolerance and budget — not on social-media folklore.",
    },
    {
      q: "What is BPM and will I pay it?",
      a: "BPM is a Dutch tax that can apply especially to new cars and certain import situations. Many simple domestic used-car purchases between residents do not add a fresh BPM line in the way newcomers fear — but you must verify your path on official tools rather than assume.",
    },
    {
      q: "How does RDW ownership transfer work?",
      a: "After purchase, ownership is transferred so you become the registered keeper. Dealers and private sellers follow official RDW buyer/seller flows. Align insurance start with the transfer and keep confirmation documents.",
    },
    {
      q: "What insurance do I need?",
      a: "You need motor insurance to drive. WA is the common third-party baseline; higher cover levels are optional risk choices. Compare live quotes and policy conditions — ExpatLife does not rank insurers.",
    },
    {
      q: "What is APK?",
      a: "APK is the periodic roadworthiness inspection. On used cars, check the next due date before you buy and diary it after purchase.",
    },
    {
      q: "Should I import my car from abroad?",
      a: "Sometimes, but import can add BPM and registration complexity. Run official calculators and RDW guidance before you pay deposits or ship a vehicle.",
    },
    {
      q: "Is this tax or legal advice?",
      a: "No. ExpatLife provides general orientation only. Follow RDW, Belastingdienst, your insurer and written contracts for decisions on your purchase.",
    },
  ],
  relatedGuidesTips: [
    "Drive rights → Driving licence exchange.",
    "Cover choices → Car insurance.",
    "Recurring tax → Road tax.",
    "OV and bikes → Getting around.",
    "Resident parking → Parking and local permits.",
    "Gemeente admin context → Municipality services.",
  ],
  relatedGuides: [
    {
      label: "Driving licence exchange",
      href: DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
      status: "live",
      description: "Foreign licence validity and Dutch rijbewijs exchange — confirm before you buy.",
    },
    {
      label: "Car insurance",
      href: CAR_INSURANCE_NETHERLANDS_PATH,
      status: "live",
      description: "WA, WA+ and cover choices — align policy start with RDW transfer.",
    },
    {
      label: "Road tax",
      href: ROAD_TAX_NETHERLANDS_PATH,
      status: "live",
      description: "Wegenbelasting / MRB orientation after you become the registered keeper.",
    },
    {
      label: "MOT / APK",
      href: MOT_APK_NETHERLANDS_PATH,
      status: "live",
      description: "Periodic vehicle inspection timing after purchase — deeper than the purchase APK check.",
    },
    {
      label: "Speed cameras",
      href: SPEED_CAMERAS_NETHERLANDS_PATH,
      status: "live",
      description: "Speed enforcement orientation for Dutch roads.",
    },
    {
      label: "Electric vehicles",
      href: ELECTRIC_VEHICLES_NETHERLANDS_PATH,
      status: "live",
      description: "Considering an EV purchase? Charging, tax orientation and ownership notes.",
    },
    {
      label: "Car sharing",
      href: CAR_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Not ready to own? Membership cars vs purchase orientation.",
    },
    {
      label: "Lease cars",
      href: LEASE_CARS_NETHERLANDS_PATH,
      status: "live",
      description: "Private lease or company car instead of buying outright.",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Trains, OVpay, bikes and everyday mobility when ownership is optional.",
    },
    {
      label: "Parking and local permits",
      href: PARKING_PATH,
      status: "live",
      description: "Resident parking, visitor permits and paid zones once you have a car.",
    },
    {
      label: "Municipality services",
      href: MUNICIPALITY_PATH,
      status: "live",
      description: "Gemeente services, registration context and local admin orientation.",
    },
  ] satisfies DrivingLink[],
  drivingHubTips: [
    "Buying a car is the ownership cornerstone of the Driving cluster.",
    "Driving licence exchange is the drive-rights sibling.",
    "Car insurance, road tax and MOT / APK complete the ownership stack.",
    "Electric vehicles, car sharing and lease cars cover alternative access paths.",
    "Getting around remains the wider mobility guide for OV and bikes.",
  ],
  drivingHubCards: [
    {
      label: "Buying a car",
      href: BUYING_A_CAR_NETHERLANDS_PATH,
      status: "live",
      description: "Purchase, registration and ownership orientation — you are here.",
    },
    {
      label: "Driving licence exchange",
      href: DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
      status: "live",
      description: "Foreign licence validity and Dutch rijbewijs exchange.",
    },
    {
      label: "Car insurance",
      href: CAR_INSURANCE_NETHERLANDS_PATH,
      status: "live",
      description: "Mandatory WA and optional cover orientation.",
    },
    {
      label: "Road tax",
      href: ROAD_TAX_NETHERLANDS_PATH,
      status: "live",
      description: "Wegenbelasting / MRB for registered keepers.",
    },
    {
      label: "MOT / APK",
      href: MOT_APK_NETHERLANDS_PATH,
      status: "live",
      description: "Dutch MOT / periodic vehicle inspection orientation.",
    },
    {
      label: "Speed cameras",
      href: SPEED_CAMERAS_NETHERLANDS_PATH,
      status: "live",
      description: "Speed enforcement orientation for Dutch roads.",
    },
    {
      label: "Electric vehicles",
      href: ELECTRIC_VEHICLES_NETHERLANDS_PATH,
      status: "live",
      description: "EV ownership: charging, incentives orientation and range notes.",
    },
    {
      label: "Car sharing",
      href: CAR_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "App and membership cars when you need occasional four wheels.",
    },
    {
      label: "Lease cars",
      href: LEASE_CARS_NETHERLANDS_PATH,
      status: "live",
      description: "Private lease and company-car orientation for expats.",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "OV, bikes and multimodal commuting.",
    },
    {
      label: "Parking and local permits",
      href: PARKING_PATH,
      status: "live",
      description: "Permits and paid parking after you have a vehicle.",
    },
  ] satisfies DrivingLink[],
  exploreNextCards: [
    {
      label: "Car insurance",
      href: CAR_INSURANCE_NETHERLANDS_PATH,
      status: "live",
      description: "Bought or about to transfer? Align cover with RDW timing.",
    },
    {
      label: "Electric vehicles",
      href: ELECTRIC_VEHICLES_NETHERLANDS_PATH,
      status: "live",
      description: "Shopping electric? Read EV charging and ownership notes.",
    },
    {
      label: "Lease cars",
      href: LEASE_CARS_NETHERLANDS_PATH,
      status: "live",
      description: "Comparing lease vs buy? Orient before you commit.",
    },
    {
      label: "Car sharing",
      href: CAR_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Not buying yet? Occasional shared cars may fit better.",
    },
    {
      label: "Parking permits",
      href: PARKING_PATH,
      status: "live",
      description: "Car on the way? Learn resident parking early.",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Not buying yet? Use OV and bike systems well.",
    },
  ] satisfies DrivingLink[],
  exploreNextTips: [
    "Need cover → Car insurance.",
    "Going electric → Electric vehicles.",
    "Lease vs buy → Lease cars.",
    "Occasional use → Car sharing.",
    "Car at the curb → Parking permits.",
    "No car yet → Getting around.",
  ],
  officialSources: [
    {
      label: "RDW — vehicle registration orientation",
      href: "https://www.rdw.nl/en",
      description: "Official vehicle authority orientation for registration and ownership — verify current buyer/seller pages",
    },
    {
      label: "Belastingdienst — motor vehicle tax / BPM tools",
      href: "https://www.belastingdienst.nl/",
      description: "Official tax orientation for road tax and BPM calculators — confirm live amounts",
    },
    {
      label: "Government.nl — transport topics",
      href: "https://www.government.nl/",
      description: "Dutch government portal for living and transport orientation",
    },
    {
      label: "Netherlands Worldwide",
      href: "https://www.netherlandsworldwide.nl/",
      description: "Practical official orientation for living in the Netherlands",
    },
    {
      label: "Your municipality website",
      href: "https://www.government.nl/topics/municipalities",
      description: "Parking permits and local rules — check your city site",
    },
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: [
        "Confirm you may drive.",
        "Choose the purchase path.",
        "Plan RDW + insurance.",
        "Budget the ownership stack.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Decide if you need a car.",
        "New vs used.",
        "Dealer vs private.",
        "BPM and tax orientation.",
        "RDW transfer.",
        "Insurance and APK.",
      ],
    },
    decide: {
      title: "From the visual — decision checks",
      items: [
        "Own vs OV/bike/share.",
        "Parking reality.",
        "Licence status clear?",
        "Assignment length fits ownership?",
      ],
    },
    newVsUsed: {
      title: "From the visual — path trade-offs",
      items: [
        "New: clearer history, higher price.",
        "Used: inspect APK and history.",
        "Import: BPM/RDW complexity.",
        "Warranty is not insurance.",
      ],
    },
    dealerPrivate: {
      title: "From the visual — purchase lanes",
      items: [
        "Shortlist with a hard budget.",
        "Verify before paying.",
        "Agree terms in writing.",
        "Transfer + insure same day.",
      ],
    },
    bpmTax: {
      title: "From the visual — tax orientation",
      items: [
        "BPM when it applies.",
        "Road tax as a recurring cost.",
        "Use official calculators.",
        "Save dated screenshots.",
      ],
    },
    rdw: {
      title: "From the visual — registration handoff",
      items: [
        "Confirm seller can transfer.",
        "Complete RDW ownership change.",
        "Activate insurance same day.",
        "File the document pack.",
      ],
    },
    insurance: {
      title: "From the visual — cover choices",
      items: [
        "WA baseline liability.",
        "WA+ middle ground.",
        "Higher cover for higher-value cars.",
        "Align start date with transfer.",
      ],
    },
    apk: {
      title: "From the visual — APK timing",
      items: [
        "Check next due date before buying.",
        "Budget workshop risk if due soon.",
        "Diary the date after purchase.",
        "APK ≠ insurance or licence.",
      ],
    },
    costs: {
      title: "From the visual — cost stack",
      items: [
        "Purchase ceiling.",
        "Insurance + road tax.",
        "Parking + fuel/charging.",
        "Maintenance and APK buffer.",
      ],
    },
    scenarios: {
      title: "From the visual — first steps",
      items: [
        "Dense city: stress-test not owning.",
        "Licence pending: pause purchase.",
        "Import temptation: run official tools.",
        "Company car: ask HR in writing.",
      ],
    },
    mistakes: {
      title: "From the visual — fix patterns",
      items: [
        "Licence first.",
        "Parking before payment.",
        "History + APK checks.",
        "RDW transfer plan on purchase day.",
      ],
    },
    checklist: {
      title: "From the visual — readiness",
      items: [
        "Drive rights confirmed.",
        "Budget written.",
        "Car verified.",
        "Transfer + insurance ready.",
      ],
    },
  },
  disclosure:
    "General information only. Not legal, tax, financial or insurance advice and not a substitute for RDW, Belastingdienst, insurer or contract instructions. Some links may be affiliate links; if you use them, we may earn a commission at no extra cost to you.",
};

/** Re-export pillar root for breadcrumbs/tests that expect a local name. */
export const BUYING_A_CAR_LIVING_HUB_PATH = LIVING_PILLAR_ROOT_PATH;
