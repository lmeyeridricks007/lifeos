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
export type TimelineStep = { phase: string; timing: string; detail: string };
export type CostRow = { category: string; range: string; notes: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "car-insurance-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const carInsuranceNetherlandsPage = {
  slug: "car-insurance-netherlands",
  path: CAR_INSURANCE_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: GETTING_AROUND_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(CAR_INSURANCE_NETHERLANDS_PATH) ?? "2026-08-29",
  seo: {
    title: "Car Insurance in the Netherlands | Complete Guide for Expats",
    description:
      "Learn how Dutch car insurance works for expats: mandatory WA liability, WA+ and all-risk orientation, what to compare (excess, extras, green card), how cover ties to RDW registration, and soft comparison steps — not insurance advice.",
    keywords: [
      "car insurance Netherlands",
      "Dutch car insurance expats",
      "WA insurance Netherlands",
      "WA+ allrisk Netherlands",
      "motor insurance Netherlands",
      "autoverzekering expats",
      "car insurance comparison Netherlands",
      "green card car insurance Netherlands",
      "eigen risico car insurance",
      "insure car after RDW registration",
      "Independer car insurance Netherlands",
      "third party insurance Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Driving",
    pageTitle: "Car Insurance in the Netherlands",
    subtitle:
      "Mandatory WA liability, optional WA+ and all-risk cover, what to compare before you buy, and how insurance ties to RDW registration — orientation for expats, not a personal quote.",
    primaryCta: { label: "Compare cover levels", href: "#cover" },
    secondaryCta: { label: "Insurance checklist", href: "#checklist" },
    chips: ["WA mandatory", "WA+ vs all-risk", "Excess & extras", "Registration tie-in", "Compare quotes"],
    disclaimer:
      "General orientation only — not insurance, legal or financial advice and not a substitute for insurer policy wording. Premiums, cover definitions and claim rules change. Verify live quotes and conditions with insurers or comparison tools before you buy.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch canal-side living-room desk: multicultural expat reviewing a car insurance policy folder and laptop comparison layout beside car keys and a kenteken card, soft daylight, no insurer logos, reassuring orientation mood.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#mandatory", label: "Why mandatory" },
    { href: "#cover", label: "Cover levels" },
    { href: "#compare", label: "What to compare" },
    { href: "#costs", label: "Cost bands" },
    { href: "#registration", label: "Registration" },
    { href: "#recommended-options", label: "Compare quotes" },
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
    intro: visual(
      "intro",
      "Premium orientation board titled Car Insurance Before You Drive — four building blocks: know WA is mandatory, choose cover level, compare excess and extras, align policy start with RDW registration — Policy File Checklist rail on the right, Dutch canal skyline and ExpatLife brand footer.",
      "Four habits cover most car-insurance questions: mandatory WA, cover level, comparison checklist, and registration timing."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Dutch car insurance — mandatory WA, WA+ middle ground, all-risk orientation, what to compare, cost bands, registration tie-in — Dutch city mobility band and ExpatLife brand footer.",
      "Six building blocks explain almost every car-insurance question for newcomers."
    ),
    mandatory: visual(
      "mandatory",
      "Premium explain board — WA third-party liability as the legal baseline to drive a registered car in the Netherlands — calm Dutch desk with policy folder, keys and canal light, General information only rail.",
      "WA liability is the mandatory baseline — optional layers sit on top, they do not replace it."
    ),
    cover: visual(
      "cover",
      "Premium three-column comparison desk — WA third-party, WA+ limited own damage, all-risk / comprehensive-style cover with excess notes — Dutch living-room laptop scene, Compare cover yourself rail.",
      "WA, WA+ and all-risk are marketing families — always read what each quote actually includes."
    ),
    compare: visual(
      "compare",
      "Premium comparison checklist board — cover scope, eigen risico excess, named drivers, roadside and glass extras, green card / abroad notes — advisor consultation desk with Dutch canal window.",
      "Compare the same checklist across quotes so a cheap premium does not hide thin cover."
    ),
    costs: visual(
      "costs",
      "Premium cost orientation board — indicative monthly bands by cover family with driver profile and car value as levers — calculator-style desk, Verify live quotes rail, no fake guaranteed prices.",
      "Bands are orientation only — your live quote depends on driver, car, postcode and claim history."
    ),
    registration: visual(
      "registration",
      "Premium post-purchase timeline — buy and RDW transfer, activate insurance same day, keep policy confirmation with kenteken pack, diary renewals — Dutch kitchen table with keys and registration papers.",
      "Insurance start should align with the moment you may drive after RDW ownership change."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — low-value city hatchback, newer financed car, multi-driver household, short assignment lease vs own — first-step arrows and General information only rail.",
      "Match your car value and household to a calm first quote path — not a colleague’s product label."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — driving uninsured after transfer, buying all-risk by habit, ignoring excess, skipping named drivers, treating road tax as insurance — Fix notes beside each card.",
      "Most friction comes from timing and thin comparison — not from finding a quote link."
    ),
    checklist: visual(
      "checklist",
      "Premium car-insurance checklist clipboard — licence status clear, cover level chosen, excess compared, named drivers listed, start date aligned with RDW, policy PDF filed — Dutch kitchen table with canal light.",
      "Use this checklist so purchase day does not leave you with keys and no cover."
    ),
  },
  snapshotSignals: [
    { label: "Baseline", value: "WA liability", note: "Mandatory to drive" },
    { label: "Optional", value: "WA+ · all-risk", note: "Match to car value" },
    { label: "Compare", value: "Cover · excess · extras", note: "Read policy wording" },
    { label: "Timing", value: "With RDW transfer", note: "Before you drive" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Car insurance in the Netherlands starts with mandatory third-party liability — usually called WA (wettelijke aansprakelijkheid). Optional WA+ and all-risk layers can cover more of your own damage, but they never replace the legal baseline.",
    "Buying a car covers purchase and RDW transfer. Road tax covers recurring ownership tax. Driving licence exchange covers whether you may drive. This page stays on insurance orientation: cover families, what to compare, indicative cost bands, and how cover ties to registration.",
  ],
  introHighlights: [
    "You need motor liability insurance to drive a registered car on Dutch roads.",
    "WA, WA+ and all-risk are common product families — definitions still differ by insurer.",
    "Compare excess (eigen risico), named drivers, extras and territorial cover — not only the monthly premium.",
    "Align policy start with RDW ownership transfer; do not treat this page as personal insurance advice.",
  ],
  orientationFlowSteps: [
    "Confirm you (or a named driver) may legally drive — licence status first.",
    "Choose a cover family that matches car value, finance rules and risk tolerance.",
    "Compare two or three live quotes on the same checklist (cover, excess, extras, start date).",
    "Activate cover before or at the moment you drive after RDW registration.",
  ],
  policyFileChecklist: [
    "Valid driving licence status (or clear exchange plan)",
    "Kenteken / vehicle details for the quote",
    "Chosen cover family (WA / WA+ / all-risk) with dated quote PDFs",
    "Excess (eigen risico) and named-driver list confirmed",
    "Policy start date aligned with RDW transfer / first drive",
    "Policy confirmation PDF filed next to purchase documents",
  ],
  introScenarios: [
    {
      situation: "Just bought a used car and completed RDW transfer today",
      approach: "Treat insurance as same-day admin — do not drive until cover is active.",
      firstStep: "Open Cover levels, pick a family, then run live quotes with the kenteken.",
    },
    {
      situation: "Comparing two cars before buying",
      approach: "Insurance premiums can differ by car value and theft risk — include quotes in the monthly stack.",
      firstStep: "Get indicative quotes for both candidates with the same driver profile.",
    },
    {
      situation: "Partner will also drive the car",
      approach: "Named-driver rules and premiums matter as much as the cover label.",
      firstStep: "List every regular driver before you accept a quote.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "WA is liability to others — it does not rebuild your own car after a crash.",
    "Road tax (MRB) is a different cost — see Road tax.",
    "Purchase and RDW steps live on Buying a car.",
    "Health insurance is unrelated — do not mix portals.",
  ],
  quickAnswer: {
    heading: "Car insurance in one minute",
    summary:
      "If you drive a car registered in the Netherlands, you need at least WA third-party liability insurance. Many owners add WA+ or all-risk depending on car value and risk tolerance. Compare live quotes on cover, excess and extras, and make sure the policy is active before you drive after RDW registration.",
    bullets: [
      "WA liability is the mandatory baseline to drive.",
      "WA+ and all-risk are optional layers — read what each quote includes.",
      "Premiums depend on driver profile, car, postcode and claim history.",
      "Align insurance start with ownership transfer; keep confirmation with your file.",
    ],
    note: "Buying a car and road tax are sibling guides — use them for purchase and MRB, not as substitutes for insurer policy wording.",
  },
  snapshotCards: [
    {
      title: "Why mandatory",
      body: "Dutch roads require motor liability insurance — WA is the everyday label for that baseline.",
    },
    {
      title: "Cover levels",
      body: "WA, WA+ and all-risk families help you match cover to car value — verify definitions per insurer.",
    },
    {
      title: "What to compare",
      body: "Cover scope, excess, named drivers, extras, green card and abroad notes beat premium-only shopping.",
    },
    {
      title: "Cost bands",
      body: "Orientation ranges help budgeting — live quotes remain the only personal figure.",
    },
    {
      title: "Registration tie-in",
      body: "Insure before or when you drive after becoming the registered keeper.",
    },
    {
      title: "Compare quotes",
      body: "Use comparison tools or insurers directly — ExpatLife does not rank products.",
    },
  ] satisfies TipCard[],
  mandatory: {
    heading: "Why car insurance is mandatory",
    intro:
      "Dutch traffic rules require motor liability insurance for vehicles used on public roads. In everyday speech, that mandatory layer is WA — wettelijke aansprakelijkheid — covering damage you cause to others.",
    paragraphs: [
      "Paying road tax or holding a valid licence does not create liability cover. Buying a car and completing RDW transfer without insurance leaves you with a registered vehicle you should not drive until a policy is active.",
      "Police checks and claim situations make uninsured driving an expensive operational failure — not a paperwork technicality. Start with WA as the legal floor, then decide whether optional own-damage layers are worth the premium for your car.",
    ],
    rows: [
      {
        topic: "WA liability",
        whatToCheck: "That a policy covering third-party liability is active before you drive.",
        tip: "This is the baseline — optional products sit on top.",
      },
      {
        topic: "Road tax (MRB)",
        whatToCheck: "That you understand tax is a separate Belastingdienst topic.",
        tip: "See Road tax — paying MRB is not insurance.",
      },
      {
        topic: "Driving licence",
        whatToCheck: "That you may legally drive under Dutch rules.",
        tip: "See Driving licence exchange if your foreign licence status is unclear.",
      },
      {
        topic: "Health insurance",
        whatToCheck: "That you do not confuse basisverzekering with autoverzekering.",
        tip: "Different legal duty, different portals.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Liability first",
        body: "WA protects others you may injure or whose property you damage — it is not a repair fund for your own car.",
      },
      {
        title: "Keys are not cover",
        body: "Holding keys and a kenteken card does not mean a policy is active — keep confirmation emails.",
      },
      {
        title: "No fake guarantees",
        body: "ExpatLife does not promise claim outcomes or “best insurer” rankings.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Buying a car",
        href: BUYING_A_CAR_NETHERLANDS_PATH,
        status: "live",
        description: "Purchase, RDW transfer and the ownership stack where insurance starts.",
      },
      {
        label: "Road tax",
        href: ROAD_TAX_NETHERLANDS_PATH,
        status: "live",
        description: "Recurring ownership tax — separate from insurance premiums.",
      },
    ] satisfies DrivingLink[],
  },
  cover: {
    heading: "WA vs WA+ vs all-risk",
    intro:
      "Dutch car insurance is commonly discussed in three families: WA (third-party only), WA+ (third-party plus limited own-damage events), and all-risk / comprehensively styled cover. Marketing labels differ — always read the quote schedule.",
    paragraphs: [
      "WA is usually the cheapest premium and the legal minimum for many private cars. It does not pay to repair your own vehicle after a crash you cause.",
      "WA+ typically adds selected own-damage events (for example certain theft, fire or weather scenarios depending on the product). Exclusions matter — “WA+” is not a single national template.",
      "All-risk / comprehensive-style products usually aim at broader own-damage cover, often considered for newer or higher-value cars and sometimes required by finance agreements. Premiums are higher; excess and claim rules still decide the real cost of an incident.",
    ],
    rows: [
      {
        topic: "WA (third-party)",
        whatToCheck: "Legal liability baseline and whether car value makes thin own-damage cover acceptable.",
        tip: "Common starting point for lower-value used cars — still compare excess and extras.",
      },
      {
        topic: "WA+",
        whatToCheck: "Which own-damage events are included versus excluded on that exact product.",
        tip: "Read the middle ground carefully — labels differ by insurer.",
      },
      {
        topic: "All-risk / comprehensive-style",
        whatToCheck: "Premium vs car value, finance requirements, and claim/excess rules.",
        tip: "Often considered for newer cars — verify, do not assume “all” means everything.",
      },
      {
        topic: "Switching later",
        whatToCheck: "Whether you can change cover level at renewal or mid-term.",
        tip: "As car value falls, some owners step down cover — confirm notice rules.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Match cover to car value",
        body: "Spending all-risk premiums on a low-value runabout can be poor maths — the reverse is also true for a new financed car.",
      },
      {
        title: "Finance can set a floor",
        body: "Lease or loan contracts may require a minimum cover level — read the finance paperwork.",
      },
      {
        title: "No invented product charts",
        body: "ExpatLife explains families. Live policy schedules come from insurers.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Buying a car — costs",
        href: `${BUYING_A_CAR_NETHERLANDS_PATH}#costs`,
        status: "live",
        description: "See how insurance sits in the full ownership cost stack.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "If ownership costs look high, stress-test OV and bike options.",
      },
    ] satisfies DrivingLink[],
  },
  compare: {
    heading: "What to compare before you buy",
    intro:
      "A low monthly premium is not a complete decision. Put every quote through the same checklist so you can see cover differences clearly.",
    paragraphs: [
      "Excess (eigen risico) changes what you pay when you claim. Named drivers, young-driver rules and no-claim discounts affect price and eligibility. Roadside assistance, glass cover and replacement transport are common add-ons with their own limits.",
      "If you drive abroad, confirm territorial cover and whether a green card (internationale motorverzekeringskaart) is needed for the countries on your trip. Do not invent border rules from a forum post — check the policy and official travel guidance for that itinerary.",
    ],
    rows: [
      {
        topic: "Cover scope",
        whatToCheck: "What is included/excluded for your chosen family (WA / WA+ / all-risk).",
        tip: "Download the conditions PDF, not only the price screen.",
      },
      {
        topic: "Excess (eigen risico)",
        whatToCheck: "Voluntary vs compulsory excess and how it changes the premium.",
        tip: "A lower premium with a high excess can surprise you after a claim.",
      },
      {
        topic: "Named drivers",
        whatToCheck: "Who may drive and whether occasional drivers need listing.",
        tip: "Partners and housemates who drive regularly usually belong on the policy.",
      },
      {
        topic: "Extras",
        whatToCheck: "Roadside assistance, glass, legal help, replacement car — limits and exclusions.",
        tip: "Add only what you will use; stack-on packs can inflate premiums quietly.",
      },
      {
        topic: "Green card / abroad",
        whatToCheck: "Territorial cover for trips outside the Netherlands and document needs.",
        tip: "Confirm before a weekend drive to neighbouring countries.",
      },
      {
        topic: "Claims & contact",
        whatToCheck: "How claims are reported and whether English support is offered.",
        tip: "Operational calm matters as much as the brochure cover art.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Same-day apples-to-apples",
        body: "Run quotes the same day with identical driver and car inputs.",
      },
      {
        title: "Save dated PDFs",
        body: "Keep quote schedules next to the purchase file so you remember what you compared.",
      },
      {
        title: "Soft comparison CTAs",
        body: "Comparison sites can speed shopping — they are not a substitute for reading policy wording.",
      },
    ] satisfies TipCard[],
  },
  costs: {
    heading: "Indicative cost bands (orientation)",
    intro:
      "Premiums vary widely. The bands below are rough orientation for budgeting conversations — not personal quotes and not a promise of what you will pay.",
    paragraphs: [
      "Insurers price on driver age and experience, claim history, postcode, annual kilometres, car value/theft risk and chosen cover. Newcomers without Dutch claim history may see different pricing than long-term residents.",
      "Treat any euro range on a blog as stale the moment tariffs move. Use live comparison or insurer quotes with your exact profile, then convert the annual figure into a monthly ownership line next to road tax, parking and fuel.",
    ],
    rows: [
      {
        category: "WA (third-party) orientation",
        range: "Often lower monthly band",
        notes: "Legal baseline; still confirm live — profile matters more than label.",
      },
      {
        category: "WA+ orientation",
        range: "Mid monthly band",
        notes: "Depends heavily on which own-damage events are included.",
      },
      {
        category: "All-risk orientation",
        range: "Higher monthly band",
        notes: "Common when car value or finance terms push broader cover.",
      },
      {
        category: "Add-ons (roadside, glass, etc.)",
        range: "Small to material uplift",
        notes: "Price each add-on; decline unused packs.",
      },
      {
        category: "High excess trade-off",
        range: "Premium down / claim cost up",
        notes: "Model a realistic claim before choosing the cheapest premium.",
      },
    ] satisfies CostRow[],
    cards: [
      {
        title: "Write the monthly number",
        body: "If you cannot state a calm monthly insurance line, you are not ready to buy the car.",
      },
      {
        title: "No fake bargains",
        body: "ExpatLife does not invent “from €X” guarantees, awards or insurer rankings.",
      },
      {
        title: "Re-quote after life changes",
        body: "Moving postcode, adding a driver or changing cars should trigger a fresh comparison.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Road tax",
        href: ROAD_TAX_NETHERLANDS_PATH,
        status: "live",
        description: "Add MRB to the same monthly ownership sheet.",
      },
      {
        label: "Parking and local permits",
        href: PARKING_PATH,
        status: "live",
        description: "Permit and garage fees often rival insurance in dense cities.",
      },
    ] satisfies DrivingLink[],
  },
  registration: {
    heading: "How insurance ties to registration",
    intro:
      "RDW ownership transfer and insurance start belong on the same purchase-day plan. Once you are the registered keeper and may drive, liability cover should already be active.",
    paragraphs: [
      "Typical flow: complete buyer/seller RDW transfer, activate a policy for that kenteken, then drive. Dealers sometimes help sequence paperwork — private sales need more deliberate coordination.",
      "If licence exchange is still pending, clarify with insurers what evidence they accept and whether another named driver will be the primary operator. A parked insured car you cannot legally drive still costs premium and parking.",
    ],
    steps: [
      {
        phase: "Before purchase day",
        timing: "Decision week",
        detail: "Shortlist cover family, gather driver details, and know how you will bind a policy quickly.",
      },
      {
        phase: "RDW transfer moment",
        timing: "Purchase handoff",
        detail: "Complete ownership change and keep confirmation documents.",
      },
      {
        phase: "Activate insurance",
        timing: "Same day",
        detail: "Bind cover for the kenteken before the first drive; save the policy PDF.",
      },
      {
        phase: "First week file",
        timing: "Days 1–7",
        detail: "Store transfer proof, insurance confirmation, and diary road-tax / parking follow-ups.",
      },
    ] satisfies TimelineStep[],
    cards: [
      {
        title: "Same-day stack",
        body: "Transfer + insurance + “may I drive?” beats a weekend of uninsured risk.",
      },
      {
        title: "Kenteken consistency",
        body: "Use the same vehicle identity across insurer forms, parking permits and tax tools.",
      },
      {
        title: "Selling later",
        body: "Cancel or transfer cover only after ownership leaves your name — confirm with the insurer.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Buying a car — RDW",
        href: `${BUYING_A_CAR_NETHERLANDS_PATH}#rdw`,
        status: "live",
        description: "How ownership transfer usually fits into purchase day.",
      },
      {
        label: "Driving licence exchange",
        href: DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
        status: "live",
        description: "Confirm drive rights before ownership stress compounds.",
      },
      {
        label: "Road tax — timing",
        href: `${ROAD_TAX_NETHERLANDS_PATH}#timing`,
        status: "live",
        description: "MRB follows registration — plan it beside insurance, not instead of it.",
      },
    ] satisfies DrivingLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Compare car insurance quotes",
    subtitle:
      "Soft CTAs for insurance comparison when you are ready to cover a car. This block is not a ranking of insurers and not personal advice — confirm live prices, excess and exclusions yourself.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for car-insurance orientation — not pay-to-rank placement unless a link is explicitly labelled as sponsored.",
    placementId: "nl-living-car-insurance-support-providers",
    analyticsPageContext: "car-insurance-netherlands-recommended-options",
    categoryLinks: [
      { href: BUYING_A_CAR_NETHERLANDS_PATH, label: "Buying a car" },
      { href: ROAD_TAX_NETHERLANDS_PATH, label: "Road tax" },
      { href: GETTING_AROUND_PATH, label: "Getting around" },
    ],
    browseLabel: "More driving context: ",
  },
  scenarios: {
    heading: "Common expat car-insurance scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "Low-value city hatchback, bike-first weekdays",
        approach: "WA plus carefully chosen extras often beats paying all-risk on a car you rarely park on busy streets.",
        firstStep: "Quote WA and WA+ with the same excess; pick after reading exclusions.",
      },
      {
        situation: "Newer or financed family car",
        approach: "Finance terms may require broader cover; model premium vs remaining car value.",
        firstStep: "Read the loan/lease cover clause, then compare all-risk quotes.",
      },
      {
        situation: "Partner and occasional housemate will drive",
        approach: "Named-driver rules can change price and claim validity.",
        firstStep: "List every regular driver before accepting the cheapest premium.",
      },
      {
        situation: "Licence exchange still in progress",
        approach: "Clarify insurer evidence rules; avoid driving if you may not legally drive.",
        firstStep: "Open Driving licence exchange and ask insurers what they accept.",
      },
      {
        situation: "Weekend trips to Belgium or Germany",
        approach: "Confirm territorial cover and any green-card document needs for the itinerary.",
        firstStep: "Check the policy schedule before the first cross-border drive.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Driving after transfer without active cover",
      body: "RDW ownership without a live policy is an avoidable legal and financial risk.",
      advice: "Bind insurance the same day as transfer — before the first drive.",
    },
    {
      title: "Buying all-risk by habit",
      body: "High cover on a low-value car can waste premium without improving outcomes.",
      advice: "Match cover family to car value and finance rules, then re-check at renewal.",
    },
    {
      title: "Comparing premiums only",
      body: "A cheap quote with a high excess or thin extras can cost more after a claim.",
      advice: "Run the full comparison checklist on every quote PDF.",
    },
    {
      title: "Forgetting named drivers",
      body: "Unlisted regular drivers can create claim disputes.",
      advice: "Declare household drivers honestly when you quote.",
    },
    {
      title: "Thinking road tax includes insurance",
      body: "Belastingdienst collects MRB; insurers collect premiums.",
      advice: "Keep separate mandates labelled in your banking app.",
    },
    {
      title: "Ignoring abroad / green-card notes",
      body: "Cross-border weekends fail when territorial cover was never checked.",
      advice: "Confirm cover and documents before you leave the Netherlands.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Car insurance readiness checklist",
    intro: "Use this before purchase day — and again when a policy renews or a new driver joins the household.",
    items: [
      "Confirm licence status for every regular driver",
      "Choose a cover family (WA / WA+ / all-risk) that matches car value and finance rules",
      "Gather kenteken, postcode, kilometres and claim-history answers for accurate quotes",
      "Compare at least two live quotes on cover, excess, extras and named drivers",
      "Confirm territorial / green-card needs if you drive abroad",
      "Align policy start with RDW transfer and first drive",
      "Save policy PDF next to purchase and registration documents",
      "Diary renewal date and re-quote after moves or household changes",
      "Keep road tax and parking admin on separate tracks",
    ],
  },
  howTo: {
    heading: "How to arrange Dutch car insurance as an expat (orientation)",
    steps: [
      {
        name: "Confirm drive rights and vehicle identity",
        text: "Make sure licence status is clear and you have the kenteken / vehicle details needed for accurate quotes.",
      },
      {
        name: "Pick a cover family",
        text: "Choose WA, WA+ or all-risk based on car value, finance requirements and risk tolerance — then verify the product schedule.",
      },
      {
        name: "Compare live quotes on one checklist",
        text: "Match cover, excess, named drivers, extras and abroad notes across insurers or a comparison tool.",
      },
      {
        name: "Bind cover with RDW timing",
        text: "Activate the policy before or at the moment you drive after ownership transfer; file the confirmation.",
      },
      {
        name: "Revisit at renewal",
        text: "As the car ages or your household changes, re-compare cover level and premium instead of auto-renewing blindly.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to arrange Dutch car insurance as an expat",
    description:
      "Orientation steps for expats choosing WA, WA+ or all-risk cover, comparing excess and extras, and aligning policy start with RDW car registration.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "Is car insurance mandatory in the Netherlands?",
      a: "Yes — you need motor liability insurance (commonly called WA) to drive a registered car on public roads. Optional WA+ or all-risk layers do not replace that baseline.",
    },
    {
      q: "What is the difference between WA, WA+ and all-risk?",
      a: "WA is third-party liability. WA+ usually adds limited own-damage events defined by the insurer. All-risk / comprehensive-style cover aims at broader own-damage protection. Always read the specific policy schedule — labels are not identical across insurers.",
    },
    {
      q: "When should I insure a car after buying it?",
      a: "Align policy start with RDW ownership transfer and make sure cover is active before you drive. Same-day activation is the calm default for purchase day.",
    },
    {
      q: "How much does Dutch car insurance cost?",
      a: "Premiums depend on driver profile, car, postcode, kilometres, claim history and cover level. Use live quotes for a personal figure — published bands are orientation only.",
    },
    {
      q: "Do I need a green card to drive abroad?",
      a: "Territorial cover and document needs depend on your policy and destination. Check the schedule and any green-card (internationale motorverzekeringskaart) requirements before cross-border trips.",
    },
    {
      q: "Is road tax the same as car insurance?",
      a: "No. Road tax (MRB / wegenbelasting) is a tax. Car insurance is a separate contract. Paying one does not replace the other.",
    },
    {
      q: "Can ExpatLife recommend the best insurer?",
      a: "No. ExpatLife provides orientation and may show comparison links. We do not rank insurers or give personal insurance advice — verify quotes and wording yourself.",
    },
    {
      q: "Is this insurance advice?",
      a: "No. This page is general information only. Follow insurer policy conditions and official rules for your situation.",
    },
  ],
  relatedGuidesTips: [
    "Purchase and RDW transfer → Buying a car.",
    "Recurring tax → Road tax.",
    "Drive rights → Driving licence exchange.",
    "OV and bikes → Getting around.",
    "Resident parking → Parking and local permits.",
  ],
  relatedGuides: [
    {
      label: "Buying a car",
      href: BUYING_A_CAR_NETHERLANDS_PATH,
      status: "live",
      description: "Purchase paths, RDW registration and the full ownership cost stack.",
    },
    {
      label: "Road tax",
      href: ROAD_TAX_NETHERLANDS_PATH,
      status: "live",
      description: "Wegenbelasting / MRB orientation — separate from insurance premiums.",
    },
    {
      label: "Driving licence exchange",
      href: DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
      status: "live",
      description: "Foreign licence validity and Dutch rijbewijs exchange.",
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
      label: "MOT / APK",
      href: MOT_APK_NETHERLANDS_PATH,
      status: "live",
      description: "Periodic vehicle inspection — separate from insurance cover.",
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
      description: "EV cover notes sit lightly here — deeper in electric vehicles.",
    },
    {
      label: "Car sharing",
      href: CAR_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Shared cars often include cover in the membership — compare vs owning.",
    },
    {
      label: "Lease cars",
      href: LEASE_CARS_NETHERLANDS_PATH,
      status: "live",
      description: "Lease and company cars may bundle insurance differently from private policies.",
    },
  ] satisfies DrivingLink[],
  drivingHubTips: [
    "Car insurance is the cover cornerstone of the Driving cluster.",
    "Buying a car is the purchase and registration sibling.",
    "Road tax is the recurring-tax sibling.",
    "MOT / APK is the roadworthiness sibling.",
    "Electric vehicles, car sharing and lease cars cover alternative access paths.",
    "Driving licence exchange remains the drive-rights guide.",
  ],
  drivingHubCards: [
    {
      label: "Car insurance",
      href: CAR_INSURANCE_NETHERLANDS_PATH,
      status: "live",
      description: "WA, WA+ and cover choices — you are here.",
    },
    {
      label: "Buying a car",
      href: BUYING_A_CAR_NETHERLANDS_PATH,
      status: "live",
      description: "Purchase, BPM orientation, RDW transfer and ownership costs.",
    },
    {
      label: "Road tax",
      href: ROAD_TAX_NETHERLANDS_PATH,
      status: "live",
      description: "Wegenbelasting / MRB orientation for registered keepers.",
    },
    {
      label: "MOT / APK",
      href: MOT_APK_NETHERLANDS_PATH,
      status: "live",
      description: "Dutch MOT / periodic vehicle inspection orientation.",
    },
    {
      label: "Driving licence exchange",
      href: DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
      status: "live",
      description: "Foreign licence validity and Dutch rijbewijs exchange.",
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
    {
      label: "Speed cameras",
      href: SPEED_CAMERAS_NETHERLANDS_PATH,
      status: "live",
      description: "Speed enforcement orientation for Dutch roads.",
    },
  ] satisfies DrivingLink[],
  exploreNextCards: [
    {
      label: "Buying a car",
      href: BUYING_A_CAR_NETHERLANDS_PATH,
      status: "live",
      description: "Still shopping? Build the full purchase and ownership plan.",
    },
    {
      label: "Electric vehicles",
      href: ELECTRIC_VEHICLES_NETHERLANDS_PATH,
      status: "live",
      description: "Insuring an EV? Pair with electric vehicles orientation.",
    },
    {
      label: "Lease cars",
      href: LEASE_CARS_NETHERLANDS_PATH,
      status: "live",
      description: "Company or private lease? Cover may sit with the lessor.",
    },
    {
      label: "Car sharing",
      href: CAR_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Skip private policies with membership cars when fit.",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Ownership looking expensive? Strengthen OV and bike habits.",
    },
  ] satisfies DrivingLink[],
  exploreNextTips: [
    "Still buying → Buying a car.",
    "Going electric → Electric vehicles.",
    "Lease path → Lease cars.",
    "Occasional use → Car sharing.",
    "Delay ownership → Getting around.",
  ],
  officialSources: [
    {
      label: "Government.nl — traffic and transport",
      href: "https://www.government.nl/",
      description: "Dutch government portal for living and transport orientation",
    },
    {
      label: "RDW — vehicle registration",
      href: "https://www.rdw.nl/en",
      description: "Official vehicle authority for registration context that ties to when you may drive a car",
    },
    {
      label: "Belastingdienst — motorrijtuigenbelasting",
      href: "https://www.belastingdienst.nl/",
      description: "Road tax is separate from insurance — confirm MRB on official tax pages",
    },
    {
      label: "Netherlands Worldwide",
      href: "https://www.netherlandsworldwide.nl/",
      description: "Practical official orientation for living in the Netherlands",
    },
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: [
        "Know WA is mandatory.",
        "Choose a cover family.",
        "Compare excess and extras.",
        "Align start with RDW transfer.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Why insurance is mandatory.",
        "WA vs WA+ vs all-risk.",
        "What to compare.",
        "Cost orientation.",
        "Registration timing.",
        "Quote comparison habit.",
      ],
    },
    mandatory: {
      title: "From the visual — baseline checks",
      items: [
        "WA liability to drive.",
        "Not road tax.",
        "Not health insurance.",
        "Keep policy confirmation.",
      ],
    },
    cover: {
      title: "From the visual — cover families",
      items: [
        "WA = third-party baseline.",
        "WA+ = limited own damage.",
        "All-risk = broader own damage.",
        "Read each quote schedule.",
      ],
    },
    compare: {
      title: "From the visual — comparison checklist",
      items: [
        "Cover scope.",
        "Excess (eigen risico).",
        "Named drivers.",
        "Extras and abroad notes.",
      ],
    },
    costs: {
      title: "From the visual — cost habits",
      items: [
        "Bands are orientation only.",
        "Live quotes win.",
        "Model excess trade-offs.",
        "Budget monthly beside MRB.",
      ],
    },
    registration: {
      title: "From the visual — first day stack",
      items: [
        "Prepare quotes before purchase.",
        "Complete RDW transfer.",
        "Activate cover same day.",
        "File policy with kenteken pack.",
      ],
    },
    scenarios: {
      title: "From the visual — first steps",
      items: [
        "Match cover to car value.",
        "List household drivers.",
        "Check finance cover rules.",
        "Confirm abroad cover.",
      ],
    },
    mistakes: {
      title: "From the visual — fix patterns",
      items: [
        "Insure before you drive.",
        "Compare more than price.",
        "Declare named drivers.",
        "Separate tax from premiums.",
      ],
    },
    checklist: {
      title: "From the visual — readiness",
      items: [
        "Licence status clear.",
        "Cover family chosen.",
        "Quotes compared.",
        "Start date aligned.",
      ],
    },
  },
  disclosure:
    "General information only. Not insurance, legal or financial advice and not a substitute for insurer, RDW or Belastingdienst instructions. Rules and premiums change. Some links may be affiliate links; if you use them, we may earn a commission at no extra cost to you.",
};

/** Re-export pillar root for breadcrumbs/tests that expect a local name. */
export const CAR_INSURANCE_LIVING_HUB_PATH = LIVING_PILLAR_ROOT_PATH;

void LIVING_GETTING_AROUND_PATH;
void MUNICIPALITY_PATH;
