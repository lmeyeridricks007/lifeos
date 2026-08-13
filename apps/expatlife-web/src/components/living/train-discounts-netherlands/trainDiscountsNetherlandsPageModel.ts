import {
  BIKE_SHARING_NETHERLANDS_PATH,
  CYCLING_NETHERLANDS_PATH,
  GETTING_AROUND_PATH,
  LIVING_HUB_PATH,
  METRO_NETHERLANDS_PATH,
  NS_TRAINS_NETHERLANDS_PATH,
  OV_CHIPKAART_NETHERLANDS_PATH,
  OVPAY_NETHERLANDS_PATH,
  REGIONAL_BUSES_NETHERLANDS_PATH,
  TRAIN_DISCOUNTS_NETHERLANDS_PATH,
  TRAMS_NETHERLANDS_PATH,
  WEEKEND_TRAVEL_NETHERLANDS_PATH,
} from "@/src/components/living/ov-chipkaart-netherlands/ovChipkaartNetherlandsPageModel";
import { LIVING_TRANSPORT_APP_DOWNLOADS } from "@/src/components/living/livingTransportAppStoreLinks";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

/** Re-export cluster PATH constants from the OV-chipkaart lead model (single source of truth). */
export {
  BIKE_SHARING_NETHERLANDS_PATH,
  CYCLING_NETHERLANDS_PATH,
  GETTING_AROUND_PATH,
  LIVING_HUB_PATH,
  METRO_NETHERLANDS_PATH,
  NS_TRAINS_NETHERLANDS_PATH,
  OV_CHIPKAART_NETHERLANDS_PATH,
  OVPAY_NETHERLANDS_PATH,
  REGIONAL_BUSES_NETHERLANDS_PATH,
  TRAIN_DISCOUNTS_NETHERLANDS_PATH,
  TRAMS_NETHERLANDS_PATH,
  WEEKEND_TRAVEL_NETHERLANDS_PATH,
};

export type TransportLink = {
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
const VISUAL_PREFIX = "train-discounts-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const trainDiscountsNetherlandsPage = {
  slug: "train-discounts-netherlands",
  path: TRAIN_DISCOUNTS_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: GETTING_AROUND_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(TRAIN_DISCOUNTS_NETHERLANDS_PATH) ?? "2026-09-16",
  seo: {
    title: "Train discounts in the Netherlands | Complete Guide for Expats",
    description:
      "NS train discount products for expats: Dal Voordeel, Weekend Voordeel, Flex and season orientation, how discounts interact with OV-chipkaart vs OVpay, and when a discount beats pay-as-you-go — not a how-to-ride deep-dive.",
    keywords: [
      "train discounts Netherlands",
      "Dal Voordeel",
      "Weekend Voordeel",
      "NS discount subscription",
      "NS Flex Netherlands",
      "train discount expats",
      "NS off-peak discount",
      "Weekend Vrij Netherlands",
      "OV-chipkaart train discount",
      "OVpay vs NS subscription",
      "Dutch train season ticket",
      "NS savings for expats",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Train fares",
    pageTitle: "Train discounts in the Netherlands",
    subtitle:
      "NS discount products for expats: Dal Voordeel, Weekend Voordeel, Flex and season orientation, how discounts sit on OV-chipkaart vs OVpay, and when a subscription beats pay-as-you-go — orientation only, not financial advice or a how-to-ride deep-dive.",
    primaryCta: { label: "When discounts win", href: "#decide" },
    secondaryCta: { label: "Discount checklist", href: "#checklist" },
    chips: ["Dal Voordeel", "Weekend Voordeel", "Flex / season", "Chipkaart vs OVpay", "Break-even"],
    disclaimer:
      "General orientation only — not financial, tax or product advice and not a substitute for NS terms, OV-chipkaart rules or live prices. Product names, peak windows and fees change. Verify current offers on official NS and OV sources before you subscribe.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch station concourse: multicultural expat reviewing an NS discount subscription sheet on a phone beside platform departure boards under soft daylight, reassuring mobility mood without brand or government logos.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#products", label: "Products" },
    { href: "#chipkaart", label: "Chipkaart vs OVpay" },
    { href: "#decide", label: "When it wins" },
    { href: "#student", label: "Student & age" },
    { href: "#recommended-options", label: "Recommended" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#checklist", label: "Checklist" },
    { href: "#howto", label: "How-to" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#transport-hub", label: "Hub" },
    { href: "#explore-next", label: "Explore next" },
    { href: "#sources", label: "Sources" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation board titled Train Discounts After Arrival — four building blocks: map products, check chipkaart vs OVpay, run a break-even, pick weekend or off-peak fit — Discount File Checklist rail on the right, Dutch rail skyline and ExpatLife brand footer.",
      "Four habits cover most first-month discount questions: map, ticket product, break-even, leisure fit."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of train discounts in the Netherlands — product map, off-peak vs weekend, Flex and season, chipkaart vs OVpay, break-even, mistakes to avoid — Dutch station band and ExpatLife brand footer.",
      "Six building blocks explain almost every NS discount question for newcomers."
    ),
    products: visual(
      "products",
      "Premium product-map board — Dal Voordeel off-peak, Weekend Voordeel leisure, Flex and season high-level — calm Dutch rail desk with Product notes rail, timetable props and ExpatLife brand footer.",
      "Dal, Weekend and Flex/season solve different weeks — they are not interchangeable."
    ),
    chipkaart: visual(
      "chipkaart",
      "Premium chipkaart vs OVpay board — personal card with subscription loaded, contactless pay-as-you-go, when products need which rail — Dutch ticket desk scene with Ticket method rail and ExpatLife brand footer.",
      "Many discount products need a personal OV-chipkaart path — OVpay alone is often pay-as-you-go."
    ),
    decide: visual(
      "decide",
      "Premium decide board — when a monthly discount beats pay-as-you-go — kitchen-table trip history cards, Break-even checklist rail, canal skyline and ExpatLife brand footer.",
      "Count real trips and peak windows before you subscribe."
    ),
    student: visual(
      "student",
      "Premium student and age orientation board — student travel products, age-related discounts high-level, verify eligibility — campus café desk with Eligibility rail and ExpatLife brand footer.",
      "Student and age products are eligibility-gated — confirm current rules on official NS pages."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — first month arrival, off-peak commute, weekend leisure, Flex heavy weeks, short stay — first-step arrows and Dutch skyline band with ExpatLife brand footer.",
      "Match trip pattern to a product instead of copying a colleague’s subscription."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — buying too soon, ignoring peak windows, assuming OVpay carries Dal, stacking wrong leisure plans, skipping NS trains sibling, treating indicative prices as quotes — Fix notes beside each card and ExpatLife brand footer.",
      "Most friction is peak-window mismatch and ticket-method confusion — not finding a train."
    ),
    checklist: visual(
      "checklist",
      "Premium train-discount readiness checklist clipboard — trip history counted, product chosen, chipkaart path checked, peak windows noted, NS and Weekend siblings opened — Dutch kitchen table with ticket card and ExpatLife brand footer.",
      "Use this checklist so your first discount month stays intentional."
    ),
  },
  snapshotSignals: [
    { label: "Best start", value: "Trip history", note: "2–4 weeks first" },
    { label: "Often wins", value: "Off-peak weeks", note: "Dal-style products" },
    { label: "Leisure", value: "Weekend", note: "Weekend Voordeel" },
    { label: "Sibling", value: "NS trains", note: "How to ride depth" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Train discounts in the Netherlands mostly means NS subscription-style products that cut the price of many rail trips when your pattern fits — especially off-peak (dal) and weekend leisure travel. For expats the calm path is: collect two to four weeks of trip history, map Dal Voordeel vs Weekend Voordeel vs Flex/season orientation, check whether the product needs a personal OV-chipkaart path versus OVpay pay-as-you-go, then run a simple break-even before you subscribe.",
    "NS trains covers how to ride, buy tickets and commute calmly. Weekend travel deepens leisure itineraries. OV-chipkaart and OVpay deepen ticket methods. Getting around is the wider mobility mental model. This page stays on discount product orientation — not platform etiquette or city weekend plans.",
  ],
  introHighlights: [
    "Collect real trip history before you buy a monthly discount product.",
    "Treat Dal Voordeel, Weekend Voordeel and Flex/season as different tools, not one brand story.",
    "Confirm whether your chosen product needs a personal OV-chipkaart — OVpay alone is often full-price pay-as-you-go.",
    "Use NS trains for riding depth and Weekend travel for leisure days out.",
  ],
  orientationFlowSteps: [
    "Ride pay-as-you-go for 2–4 weeks and note peak vs off-peak and weekend trips.",
    "Map one primary product: Dal Voordeel, Weekend Voordeel, or Flex/season orientation.",
    "Check ticket method: personal OV-chipkaart path vs OVpay pay-as-you-go limits.",
    "Run a break-even against live NS prices, then open NS trains and Weekend travel as needed.",
  ],
  travelFileChecklist: [
    "Two to four weeks of trip history written (peak / off-peak / weekend)",
    "Primary product shortlist (Dal / Weekend / Flex-season)",
    "Ticket method checked (personal chipkaart vs OVpay)",
    "Indicative monthly fee vs expected trip savings noted",
    "Peak window rules read on official NS pages",
    "Sibling guides opened: NS trains, Weekend travel, OV-chipkaart, OVpay",
  ],
  introScenarios: [
    {
      situation: "New arrival commuting off-peak most days",
      approach: "Stay pay-as-you-go briefly, then compare Dal Voordeel-style products once trip counts are real.",
      firstStep: "Open products and decide, then NS trains for riding habits.",
    },
    {
      situation: "Mostly bike or local OV, big weekend rail days",
      approach: "Weekend Voordeel-style products often beat a weekday-focused subscription.",
      firstStep: "Open products and Weekend travel; keep Getting around for multimodal weeks.",
    },
    {
      situation: "Heavy Flex / season corridor already",
      approach: "Discount add-ons may be secondary — deepen ticket types on NS trains and confirm chipkaart products on OV-chipkaart.",
      firstStep: "Skim decide and chipkaart, then open NS trains for Flex/season depth.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "NS trains remains the how-to-ride and ticket-types sibling.",
    "Weekend travel deepens leisure days out after you pick a weekend product.",
    "OV-chipkaart and OVpay deepen which ticket method can carry a discount.",
    "Getting around remains the multimodal overview.",
    "Prices here are indicative orientation only — confirm live NS quotes.",
  ],
  quickAnswer: {
    heading: "Train discounts in one minute",
    summary:
      "NS sells subscription-style discounts that cut many train fares when your pattern fits — notably off-peak (dal) products like Dal Voordeel and weekend leisure products like Weekend Voordeel, plus Flex and season orientation for heavier corridors. Expats usually stay on OVpay or singles for the first weeks, then compare a discount once trip history is clear. Many discount products need a personal OV-chipkaart path; contactless OVpay alone is often full-price pay-as-you-go. Use NS trains for riding depth and Weekend travel for leisure itineraries.",
    bullets: [
      "Match product to off-peak commute vs weekend leisure vs heavy Flex weeks.",
      "Confirm chipkaart vs OVpay before you assume a discount will apply.",
      "Run a break-even on real trips — not a colleague’s screenshot.",
      "Keep NS trains and Weekend travel open for riding and leisure depth.",
    ],
    note: "NS trains, Weekend travel, OV-chipkaart, OVpay and Getting around are siblings — use them for riding, leisure, ticket methods and multimodal overview.",
  },
  snapshotCards: [
    {
      title: "Product map",
      body: "Dal Voordeel, Weekend Voordeel, Flex/season high-level.",
    },
    {
      title: "Off-peak vs weekend",
      body: "Weekday dal windows vs leisure weekend trips.",
    },
    {
      title: "Ticket method",
      body: "Personal chipkaart products vs OVpay PAYG.",
    },
    {
      title: "Break-even",
      body: "Monthly fee vs expected discounted trips.",
    },
    {
      title: "Student & age",
      body: "Eligibility-gated products — verify officially.",
    },
    {
      title: "Avoid mistakes",
      body: "Peak windows, wrong method, buying too soon.",
    },
  ],
  products: {
    heading: "Product map: Dal, Weekend, Flex and season",
    intro:
      "Dutch train discounts are not one product. Off-peak subscriptions, weekend leisure products, and Flex/season tickets solve different weeks — mix them only when official rules stay clear.",
    paragraphs: [
      "Dal Voordeel-style products typically cut NS fares outside peak windows in exchange for a monthly fee — useful when most of your commute or daytime travel is off-peak. Weekend Voordeel-style products focus on Friday–Sunday leisure travel. Flex and season tickets are heavier corridor products: they may already include strong savings, so a separate discount add-on is not always the first lever — deepen those on the NS trains sibling.",
      "Names, percentages and peak definitions change. This page uses orientation labels only — confirm live product sheets on ns.nl. Soft CTAs later are optional exploration, not rankings.",
    ],
    rows: [
      {
        topic: "Dal Voordeel (off-peak)",
        whatToCheck: "Monthly fee, discount %, peak window definition, NS-only vs other operators.",
        tip: "Best when most weekday trips fall outside morning/evening peak.",
      },
      {
        topic: "Weekend Voordeel",
        whatToCheck: "Weekend validity hours, companion rules if any, monthly fee vs trip count.",
        tip: "Best for leisure rail days — deepen itineraries on Weekend travel.",
      },
      {
        topic: "Flex / season orientation",
        whatToCheck: "Corridor frequency, whether Flex already covers your pattern.",
        tip: "Open NS trains for Flex/season depth before stacking another product.",
      },
      {
        topic: "Mixing products",
        whatToCheck: "Whether two subscriptions overlap wastefully.",
        tip: "One primary product usually beats stacking untested plans.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Pattern first",
        body: "Off-peak commute and weekend leisure are different economics.",
      },
      {
        title: "Verify live sheets",
        body: "Indicative savings age quickly — confirm on official NS pages.",
      },
      {
        title: "Riding sibling",
        body: "NS trains owns how to buy, check in and commute calmly.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "How to ride, ticket types and commute orientation.",
      },
      {
        label: "Weekend travel",
        href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
        status: "live",
        description: "Leisure days out after you pick a weekend product.",
      },
      {
        label: "When it wins",
        href: "#decide",
        status: "live",
        description: "Break-even against pay-as-you-go.",
      },
    ] satisfies TransportLink[],
  },
  chipkaart: {
    heading: "Chipkaart vs OVpay with discounts",
    intro:
      "Ticket method decides whether a discount can apply. Many NS subscription products load onto a personal OV-chipkaart path. Contactless OVpay (bank card or phone) is excellent for pay-as-you-go — and often does not carry the same discount subscription.",
    paragraphs: [
      "If you plan Dal Voordeel or similar, expect to set up or keep a personal OV-chipkaart and link the product correctly — deepen setup on the OV-chipkaart sibling. If you mostly tap OVpay for occasional trips, stay pay-as-you-go until trip volume justifies switching method for a subscription.",
      "Missed check-outs, wrong card, and assuming OVpay “inherits” a chipkaart discount are common expensive mistakes. Confirm current linking steps on official NS and OV sources before you pay a monthly fee.",
    ],
    rows: [
      {
        topic: "Personal OV-chipkaart",
        whatToCheck: "Whether the discount product requires a personal card and account.",
        tip: "Open OV-chipkaart for setup, top-up and missed checkout habits.",
      },
      {
        topic: "OVpay contactless",
        whatToCheck: "Whether your intended discount applies on bank-card/phone taps.",
        tip: "Often best as PAYG — open OVpay for tap mechanics.",
      },
      {
        topic: "Switching methods",
        whatToCheck: "Notice periods, product transfer rules, leftover balance.",
        tip: "Change method off-peak after reading official steps — not on a Monday rush.",
      },
      {
        topic: "NS app + planner",
        whatToCheck: "Whether trip history and product status are visible in your account.",
        tip: "Keep NS trains open for app and ticket-buying depth.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Method before fee",
        body: "A discount that cannot load on your daily ticket method is wasted money.",
      },
      {
        title: "Two siblings",
        body: "OV-chipkaart and OVpay deepen mechanics — this page only orients the fork.",
      },
      {
        title: "Verify linking",
        body: "Screenshot confirmation that the subscription is active on the card you tap.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "OV-chipkaart",
        href: OV_CHIPKAART_NETHERLANDS_PATH,
        status: "live",
        description: "Personal travel card setup and products.",
      },
      {
        label: "OVpay",
        href: OVPAY_NETHERLANDS_PATH,
        status: "live",
        description: "Contactless bank-card and phone travel.",
      },
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "Buying tickets and first-week commute tips.",
      },
    ] satisfies TransportLink[],
  },
  decide: {
    heading: "When a discount beats pay-as-you-go",
    intro:
      "A discount subscription is a fit check, not a moral upgrade. Monthly fees only win when enough discounted trips clear the fee — and when those trips actually fall inside the product’s valid windows.",
    paragraphs: [
      "Sketch how many NS trips you take off-peak, in peak, and on weekends. Multiply by indicative full fares, then compare against the monthly fee plus discounted fares. If most trips are peak-hour full price, Dal-style products may underperform. If weekends dominate, Weekend Voordeel-style products often win sooner.",
      "This is orientation, not financial advice. Soft price hints age quickly — confirm live NS quotes. Short stays and visitors usually stay pay-as-you-go or singles.",
    ],
    rows: [
      {
        topic: "Off-peak heavy weeks",
        whatToCheck: "Trip count outside peak windows vs monthly fee.",
        tip: "Dal Voordeel-style products often win after a stable commute pattern.",
      },
      {
        topic: "Weekend leisure weeks",
        whatToCheck: "Number of Friday–Sunday rail days per month.",
        tip: "Weekend products + Weekend travel sibling for itineraries.",
      },
      {
        topic: "Peak-only commute",
        whatToCheck: "Whether any discount applies inside peak.",
        tip: "PAYG or Flex/season on NS trains may fit better than Dal.",
      },
      {
        topic: "Short stay / visitor",
        whatToCheck: "Contract length and trip certainty.",
        tip: "Skip monthly products — use singles or OVpay.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "History first",
        body: "Two to four weeks of real taps beat forum screenshots.",
      },
      {
        title: "Windows matter",
        body: "A discount outside your travel hours is not a discount.",
      },
      {
        title: "One primary product",
        body: "Stacking untested subscriptions usually wastes fees.",
      },
    ] satisfies TipCard[],
    costRows: [
      {
        category: "Dal-style monthly fee",
        range: "Indicative low tens of € / month",
        notes: "Confirm live NS price — orientation only",
      },
      {
        category: "Weekend-style monthly fee",
        range: "Indicative low tens of € / month",
        notes: "Compare against leisure trip count",
      },
      {
        category: "Pay-as-you-go trip",
        range: "Full NS fare",
        notes: "Baseline before discount math",
      },
      {
        category: "Break-even cue",
        range: "Fee ÷ saving per trip",
        notes: "Rough trip count needed — not advice",
      },
    ] satisfies CostRow[],
    crossLinks: [
      {
        label: "Products",
        href: "#products",
        status: "live",
        description: "Dal, Weekend and Flex/season map.",
      },
      {
        label: "Weekend travel",
        href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
        status: "live",
        description: "Leisure days that use weekend discounts.",
      },
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "Ticket types when Flex/season already fits.",
      },
    ] satisfies TransportLink[],
  },
  student: {
    heading: "Student and age products (high-level)",
    intro:
      "Student travel products and some age-related discounts exist in the Dutch rail and OV landscape, but they are eligibility-gated. This section orients only — it does not certify who qualifies.",
    paragraphs: [
      "Students may see campus or government-linked travel rights, NS student-oriented offers, or age bands that change fares. Rules depend on enrolment, age, and current NS/OV product sheets. Expats should verify eligibility on official pages and student portals — not on social media screenshots.",
      "If you are not clearly eligible, stay on the standard Dal / Weekend / Flex path above. Soft provider CTAs later are optional exploration only.",
    ],
    rows: [
      {
        topic: "Student travel rights",
        whatToCheck: "Enrolment proof, Dutch student status, official product name.",
        tip: "Confirm on student and NS official channels before budgeting savings.",
      },
      {
        topic: "Age-related products",
        whatToCheck: "Age band, proof required, NS vs regional operator scope.",
        tip: "Eligibility changes — re-check annually on official sheets.",
      },
      {
        topic: "Not eligible",
        whatToCheck: "Whether standard Dal/Weekend still beats PAYG.",
        tip: "Return to decide and products — do not force a student path.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Eligibility first",
        body: "A student label without proof is not a ticket product.",
      },
      {
        title: "Official sources only",
        body: "Use NS and student portals — not forwarded PDFs of unknown date.",
      },
      {
        title: "Fallback path",
        body: "Standard discount products still apply when student rights do not.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "General ticket types when student paths do not apply.",
      },
      {
        label: "OV-chipkaart",
        href: OV_CHIPKAART_NETHERLANDS_PATH,
        status: "live",
        description: "Personal card products that may carry subscriptions.",
      },
      {
        label: "Products",
        href: "#products",
        status: "live",
        description: "Standard Dal and Weekend map.",
      },
    ] satisfies TransportLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Train and mobility options to explore",
    subtitle:
      "Soft CTAs for established Dutch rail and mobility options when discount products fit your week. This block is not a ranking of NS products, apps or operators.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for a train-discount week — not pay-to-rank placement unless a link is explicitly labelled as sponsored. Prefer NS trains for riding depth and Weekend travel for leisure itineraries.",
    placementId: "nl-living-train-discounts-support-providers",
    analyticsPageContext: "train-discounts-netherlands-recommended-options",
    categoryLinks: [
      { href: NS_TRAINS_NETHERLANDS_PATH, label: "NS trains" },
      { href: WEEKEND_TRAVEL_NETHERLANDS_PATH, label: "Weekend travel" },
      { href: GETTING_AROUND_PATH, label: "Getting around" },
    ],
    browseLabel: "More mobility context: ",
  },
  scenarios: {
    heading: "Common expat train-discount scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "First month, still learning peak windows",
        approach: "Stay pay-as-you-go; collect trip history before any monthly fee.",
        firstStep: "Open decide and chipkaart, then NS trains for riding habits.",
      },
      {
        situation: "Stable off-peak commute Amsterdam–Utrecht style",
        approach: "Compare Dal Voordeel-style products once trip counts are clear.",
        firstStep: "Open products and decide; confirm chipkaart linking.",
      },
      {
        situation: "Bike-first weekdays, big weekend rail days",
        approach: "Weekend Voordeel-style products often beat weekday Dal.",
        firstStep: "Open products and Weekend travel for leisure planning.",
      },
      {
        situation: "Already on Flex / season for a heavy corridor",
        approach: "Discount add-ons may be secondary — deepen Flex on NS trains.",
        firstStep: "Skim decide, then open NS trains ticket types.",
      },
      {
        situation: "Visitor or short contract under two months",
        approach: "Skip monthly subscriptions; use singles or OVpay.",
        firstStep: "Open OVpay and NS trains; keep Getting around for multimodal.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Buying a discount in week one",
      body: "You pay a monthly fee before you know peak vs off-peak reality.",
      advice: "Collect 2–4 weeks of trip history first — then run decide.",
    },
    {
      title: "Ignoring peak windows",
      body: "Dal-style products often exclude busy morning and evening hours.",
      advice: "Read the live peak definition on NS pages before you subscribe.",
    },
    {
      title: "Assuming OVpay carries Dal",
      body: "Contactless PAYG and subscription-loaded chipkaarts are different methods.",
      advice: "Confirm ticket method on chipkaart vs OVpay siblings before paying.",
    },
    {
      title: "Stacking Weekend and Dal without math",
      body: "Two fees can erase savings if your pattern only fits one product.",
      advice: "Pick one primary product; reassess after a full month of data.",
    },
    {
      title: "Skipping the NS trains sibling",
      body: "Discount math does not teach check-in, platforms or Flex depth.",
      advice: "Open NS trains for how to ride; keep this page for product fit.",
    },
    {
      title: "Treating indicative prices as quotes",
      body: "Orientation ranges go stale — forum screenshots worse.",
      advice: "Always confirm live NS product sheets and your account fee.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Train discount readiness checklist",
    intro: "Use this before your first paid discount month in the Netherlands.",
    items: [
      "Two to four weeks of trip history written (peak / off-peak / weekend)",
      "Primary product chosen (Dal / Weekend / Flex-season path)",
      "Ticket method confirmed (personal chipkaart vs OVpay limits)",
      "Live NS fee and discount % checked today",
      "Peak window rules saved where you will see them",
      "Break-even sketch completed against expected trips",
      "Sibling guides opened: NS trains, Weekend travel, OV-chipkaart, OVpay",
      "Getting around opened if multimodal weeks still dominate",
    ],
  },
  howTo: {
    heading: "How to choose an NS train discount calmly as an expat",
    steps: [
      {
        name: "Collect trip history",
        text: "Ride pay-as-you-go for 2–4 weeks and note peak, off-peak and weekend trips.",
      },
      {
        name: "Map one primary product",
        text: "Choose Dal Voordeel-style, Weekend Voordeel-style, or Flex/season orientation — not all three at once.",
      },
      {
        name: "Confirm ticket method",
        text: "Check whether the product needs a personal OV-chipkaart path versus OVpay pay-as-you-go.",
      },
      {
        name: "Run a break-even",
        text: "Compare the monthly fee to expected discounted trips using live NS prices — orientation only.",
      },
      {
        name: "Keep riding and leisure siblings open",
        text: "Use NS trains for how to ride and Weekend travel for leisure days; reassess after one full month.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to choose train discounts in the Netherlands as an expat",
    description:
      "Orientation steps for expats collecting trip history, mapping Dal and Weekend products, confirming OV-chipkaart vs OVpay, and running a break-even against pay-as-you-go.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "What is Dal Voordeel?",
      a: "Dal Voordeel is an NS-oriented off-peak discount subscription: you typically pay a monthly fee for reduced fares outside peak windows. Exact percentages and peak hours change — confirm on official NS pages. Use the products and decide sections to see if your week fits.",
    },
    {
      q: "What is Weekend Voordeel?",
      a: "Weekend Voordeel-style products focus on discounted weekend (and often Friday) leisure rail travel for a monthly fee. Deepen itineraries on the Weekend travel sibling; use this page for product fit only.",
    },
    {
      q: "Does OVpay get NS discounts automatically?",
      a: "Usually not in the same way as a personal OV-chipkaart with a linked subscription. OVpay is excellent for pay-as-you-go. Confirm current rules on NS and OVpay official sources before you assume a discount applies.",
    },
    {
      q: "When should I skip a discount subscription?",
      a: "Short stays, unpredictable trip counts, and peak-only commutes often stay cheaper on pay-as-you-go or singles. Run the decide section with real history first.",
    },
    {
      q: "Where do I learn how to ride NS trains?",
      a: "Open the NS trains sibling guide for ticket buying, check-in/out, peak orientation and first-week commute tips. This page stays on discount products.",
    },
    {
      q: "Where do I plan weekend leisure trips?",
      a: "Open Weekend travel for leisure itineraries. Pair it with a Weekend Voordeel-style product only after your trip count supports the fee.",
    },
    {
      q: "Are provider cards rankings?",
      a: "No. Soft CTAs are optional exploration only. Ordering reflects page relevance, not a league table of products. Always confirm live prices and terms yourself.",
    },
    {
      q: "Is this financial advice?",
      a: "No. ExpatLife provides general orientation only. Follow official NS and OV terms for obligations and current prices.",
    },
  ],
  relatedGuidesTips: [
    "How to ride & ticket types → NS trains.",
    "Leisure days out → Weekend travel.",
    "Personal card products → OV-chipkaart.",
    "Contactless PAYG → OVpay.",
    "Wider mobility → Getting around.",
    "Active mobility peers → Cycling / Bike sharing.",
  ],
  relatedGuides: [
    {
      label: "NS trains",
      href: NS_TRAINS_NETHERLANDS_PATH,
      status: "live",
      description: "How to ride, ticket types and commute orientation.",
    },
    {
      label: "Weekend travel",
      href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
      status: "live",
      description: "Leisure days out that pair with weekend discounts.",
    },
    {
      label: "OV-chipkaart",
      href: OV_CHIPKAART_NETHERLANDS_PATH,
      status: "live",
      description: "Personal travel card setup for many discount products.",
    },
    {
      label: "OVpay",
      href: OVPAY_NETHERLANDS_PATH,
      status: "live",
      description: "Contactless bank-card and phone pay-as-you-go.",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "OV, bikes and everyday multimodal mobility.",
    },
    {
      label: "Trams",
      href: TRAMS_NETHERLANDS_PATH,
      status: "live",
      description: "City tram travel for expats.",
    },
    {
      label: "Metro",
      href: METRO_NETHERLANDS_PATH,
      status: "live",
      description: "Metro / rapid transit for expats.",
    },
    {
      label: "Regional buses",
      href: REGIONAL_BUSES_NETHERLANDS_PATH,
      status: "live",
      description: "Regional and city bus travel — sibling guide.",
    },
  ] satisfies TransportLink[],
  transportHubTips: [
    "Train discounts is the NS discount-product guide in the Public Transport fares continuation.",
    "NS trains deepens how to ride and ticket types.",
    "Weekend travel deepens leisure itineraries.",
    "OV-chipkaart and OVpay cover ticket methods.",
    "Getting around remains the wider mobility overview.",
  ],
  transportHubCards: [
    {
      label: "Train discounts",
      href: TRAIN_DISCOUNTS_NETHERLANDS_PATH,
      status: "live",
      description: "NS discount products — you are here.",
    },
    {
      label: "NS trains",
      href: NS_TRAINS_NETHERLANDS_PATH,
      status: "live",
      description: "National rail products and commute orientation.",
    },
    {
      label: "Weekend travel",
      href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
      status: "live",
      description: "Leisure rail days and weekend planning.",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Modes, bikes and multimodal commuting.",
    },
    {
      label: "OVpay",
      href: OVPAY_NETHERLANDS_PATH,
      status: "live",
      description: "Contactless bank-card and phone travel.",
    },
    {
      label: "OV-chipkaart",
      href: OV_CHIPKAART_NETHERLANDS_PATH,
      status: "live",
      description: "Personal travel card setup and products.",
    },
    {
      label: "Bike sharing",
      href: BIKE_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Subscription and shared bike fleets.",
    },
    {
      label: "Cycling",
      href: CYCLING_NETHERLANDS_PATH,
      status: "live",
      description: "Everyday personal cycling — ownership and rules.",
    },
  ] satisfies TransportLink[],
  exploreNextCards: [
    {
      label: "NS trains",
      href: NS_TRAINS_NETHERLANDS_PATH,
      status: "live",
      description: "Need how to ride and Flex/season depth?",
    },
    {
      label: "Weekend travel",
      href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
      status: "live",
      description: "Planning leisure days that use weekend discounts?",
    },
    {
      label: "OV-chipkaart",
      href: OV_CHIPKAART_NETHERLANDS_PATH,
      status: "live",
      description: "Need a personal card for a subscription product?",
    },
    {
      label: "OVpay",
      href: OVPAY_NETHERLANDS_PATH,
      status: "live",
      description: "Staying contactless pay-as-you-go for now?",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Widen the model to multimodal weeks.",
    },
    {
      label: "Bike sharing",
      href: BIKE_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Last-mile share bikes after train legs?",
    },
  ] satisfies TransportLink[],
  exploreNextTips: [
    "Riding depth → NS trains.",
    "Leisure itineraries → Weekend travel.",
    "Personal card → OV-chipkaart.",
    "Contactless PAYG → OVpay.",
    "Modes and apps → Getting around.",
    "Station last mile → Bike sharing.",
  ],
  officialSources: [
    {
      label: "NS — subscriptions & discounts",
      href: "https://www.ns.nl/en/season-tickets",
      description: "Official NS season tickets and discount product orientation",
    },
    {
      label: "NS — Dutch Railways",
      href: "https://www.ns.nl/en",
      description: "National rail orientation, planners and live product sheets",
    },
    {
      label: "NS — Dal Voordeel",
      href: "https://www.ns.nl/en/season-tickets/dal-voordeel",
      description: "Official Dal Voordeel off-peak discount product page",
    },
    {
      label: "Government.nl — mobility",
      href: "https://www.government.nl/topics/mobility-public-transport-and-road-safety",
      description: "Official orientation on mobility and public transport",
    },
    {
      label: "9292 — journey planner",
      href: LIVING_TRANSPORT_APP_DOWNLOADS["9292"].web,
      description: "Multimodal comparisons when discounts and other modes both matter",
    },
    {
      label: "OVpay — contactless travel",
      href: LIVING_TRANSPORT_APP_DOWNLOADS.ovpay.web,
      description: "Official contactless bank-card and phone travel information",
    },
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: [
        "Map products.",
        "Check chipkaart vs OVpay.",
        "Run a break-even.",
        "Pick weekend or off-peak fit.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Product map.",
        "Off-peak vs weekend.",
        "Flex and season.",
        "Chipkaart vs OVpay.",
        "Break-even.",
        "Mistakes to avoid.",
      ],
    },
    products: {
      title: "From the visual — product cues",
      items: [
        "Dal Voordeel off-peak.",
        "Weekend Voordeel leisure.",
        "Flex / season high-level.",
        "One primary product.",
      ],
    },
    chipkaart: {
      title: "From the visual — method cues",
      items: [
        "Personal chipkaart path.",
        "OVpay as PAYG.",
        "Confirm linking.",
        "Open sibling guides.",
      ],
    },
    decide: {
      title: "From the visual — decide cues",
      items: [
        "Trip history first.",
        "Peak windows matter.",
        "Fee vs savings.",
        "Short stays stay PAYG.",
      ],
    },
    student: {
      title: "From the visual — eligibility cues",
      items: [
        "Verify enrolment.",
        "Age bands change.",
        "Official sources only.",
        "Fallback to standard products.",
      ],
    },
    scenarios: {
      title: "From the visual — scenario cues",
      items: [
        "First month arrival.",
        "Off-peak commute.",
        "Weekend leisure.",
        "Short stay PAYG.",
      ],
    },
    mistakes: {
      title: "From the visual — mistake cues",
      items: [
        "Buying too soon.",
        "Ignoring peak windows.",
        "Assuming OVpay carries Dal.",
        "Treating indicative prices as quotes.",
      ],
    },
    checklist: {
      title: "From the visual — checklist cues",
      items: [
        "Trip history counted.",
        "Product chosen.",
        "Method confirmed.",
        "Siblings opened.",
      ],
    },
  },
  disclosure:
    "ExpatLife provides general train-discount and mobility orientation for newcomers. It is not financial, tax or product advice. NS product names, peak windows, fees and OV rules change — always confirm on official NS and OV pages before you subscribe. Some links may be affiliate links; if you use them, we may earn a commission at no extra cost to you.",
} as const;
