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
const VISUAL_PREFIX = "lease-cars-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const leaseCarsNetherlandsPage = {
  slug: "lease-cars-netherlands",
  path: LEASE_CARS_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: GETTING_AROUND_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(LEASE_CARS_NETHERLANDS_PATH) ?? "2026-09-04",
  seo: {
    title: "Lease Cars in the Netherlands | Complete Guide for Expats",
    description:
      "Private lease, operational lease and company cars for expats in the Netherlands: what lease means, bijtelling orientation, costs versus buying, and contract watch-outs — without tax advice.",
    keywords: [
      "lease cars Netherlands",
      "private lease Netherlands",
      "company car Netherlands",
      "operational lease Netherlands",
      "bijtelling Netherlands",
      "lease vs buy Netherlands",
      "car lease expats",
      "auto lease Nederland",
      "private lease contract Netherlands",
      "company lease car Netherlands",
      "lease mileage Netherlands",
      "expat lease car Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Driving",
    pageTitle: "Lease Cars in the Netherlands",
    subtitle:
      "Private lease, operational lease and company cars for expats: what leasing means here, high-level bijtelling orientation, costs versus buying, and the contract clauses that matter — without tax or purchase deep-dives.",
    primaryCta: { label: "Decide if leasing fits", href: "#decide" },
    secondaryCta: { label: "Lease checklist", href: "#checklist" },
    chips: ["What lease means", "Private vs company", "Bijtelling notes", "Costs vs buy", "Contract watch-outs"],
    disclaimer:
      "General orientation only — not legal, tax, financial or insurance advice and not a substitute for employer HR policies, lease-company contracts, Belastingdienst tools or insurer wording. Catalogues, rates and tax percentages change. Verify current quotes and written terms before you sign.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch canal-side office district: multicultural expat reviewing a lease contract folder beside a modern leased hatchback with temporary plates vibe, soft daylight brick and glass, reassuring mobility mood without brand or government logos.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#types", label: "Lease types" },
    { href: "#decide", label: "Decide" },
    { href: "#private", label: "Private lease" },
    { href: "#company", label: "Company & bijtelling" },
    { href: "#costs", label: "Costs vs buy" },
    { href: "#contracts", label: "Contracts" },
    { href: "#practical", label: "Licence & parking" },
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
    intro: visual(
      "intro",
      "Premium orientation board titled Lease Cars After Arrival — four building blocks: understand lease types, decide lease vs buy vs share, check bijtelling or private quotes, read contract watch-outs — Lease File Checklist rail on the right, Dutch canal skyline and ExpatLife brand footer.",
      "Four habits cover most lease questions: types, decide, quotes, and contracts."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of lease cars in the Netherlands — lease types, decide, private lease, company bijtelling, costs vs buy, contract watch-outs — Dutch mobility band and ExpatLife brand footer.",
      "Six building blocks explain almost every lease question for newcomers."
    ),
    types: visual(
      "types",
      "Premium lease-type map — private lease, operational lease, company / auto van de zaak — calm Dutch desk with contract folders and General information only rail.",
      "Private, operational and company paths feel different — match employment and cash-flow reality."
    ),
    decide: visual(
      "decide",
      "Premium decision board — lease vs buy vs car-share and OV — kilometres, assignment length and employer offer forks with a Verify before you sign rail, Dutch canal and bike lane props.",
      "Lease wins for predictable access without purchase admin — confirm stay length and mileage first."
    ),
    private: visual(
      "private",
      "Premium private-lease journey timeline — quote and credit check, contract term, monthly all-in stack, return inspection — Dutch living-room desk with lease brochure.",
      "Private lease is a consumer contract — read kilometres, excess and early-exit rules before you sign."
    ),
    company: visual(
      "company",
      "Premium company-car orientation desk — catalogue choice, bijtelling high-level card, salary-slip impact, private-use rules — Dutch HR consultation scene with documents.",
      "Company cars often add taxable benefit orientation — confirm HR and Belastingdienst tools, not forum percentages."
    ),
    costs: visual(
      "costs",
      "Premium cost comparison board — private lease monthly, company net effect orientation, buy stack of insurance road tax parking — euro planning bands as orientation only.",
      "Compare a full year of lease payments to ownership — not the headline catalogue price alone."
    ),
    contracts: visual(
      "contracts",
      "Premium contract watch-outs checklist board — mileage caps, damage excess, early termination, return condition, insurance named drivers — Dutch notary-style desk without fake logos.",
      "The expensive surprises live in small print — mileage, excess and exit fees."
    ),
    practical: visual(
      "practical",
      "Premium practical notes desk — valid licence, parking permits for lease plates, insurance who covers what, APK handled by lessor — Dutch curb and permit props.",
      "You still need drive rights and often a parking plan — leasing does not erase curb reality."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — employer company car, private lease for family, short assignment, EV lease temptation — first-step arrows.",
      "Match employment and stay length to a calm first lease path instead of copying a colleague."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — signing without mileage maths, ignoring bijtelling, treating lease as buy advice, skipping return inspection — Fix notes beside each card.",
      "Most friction is mileage, tax orientation and exit clauses — not finding a catalogue car."
    ),
    checklist: visual(
      "checklist",
      "Premium lease readiness checklist clipboard — types understood, quote compared, bijtelling noted, contract clauses checked, parking plan ready — Dutch kitchen table with canal light.",
      "Use this checklist so your first lease signature stays intentional, not improvised."
    ),
  },
  snapshotSignals: [
    { label: "Paths", value: "Private · ops · company", note: "Match your employment" },
    { label: "Tax note", value: "Bijtelling orientation", note: "Not personal advice" },
    { label: "Must check", value: "Km + exit fees", note: "Before you sign" },
    { label: "Compare", value: "Lease vs buy vs share", note: "Full year maths" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Lease cars in the Netherlands are a contracted-access journey — private consumer lease, operational lease, or a company car through work — not the same topic as buying a used car, occasional car sharing, or EV ownership charging deep-dives.",
    "Buying a car covers purchase and RDW transfer. Car sharing covers on-demand memberships. Electric vehicles deepen EV ownership. This page stays on lease orientation for expats who want predictable four wheels without (or before) owning.",
  ],
  introHighlights: [
    "Separate private lease, operational lease and company-car offers before you compare quotes.",
    "Company cars often involve bijtelling orientation — confirm HR and Belastingdienst tools, not social-media percentages.",
    "Mileage caps, excess and early-exit fees drive most expensive surprises.",
    "Do not treat this page as tax or legal advice — verify written contracts and official sources.",
  ],
  orientationFlowSteps: [
    "Name which lease path you are on: private, operational or company.",
    "Decide whether lease, buy or share fits your kilometres and stay length.",
    "Collect quotes and — for company cars — HR bijtelling orientation.",
    "Read contract watch-outs, then park and licence reality before you sign.",
  ],
  leaseFileChecklist: [
    "Lease path named (private / operational / company)",
    "Realistic annual kilometres sketched",
    "Assignment or stay length stress-tested",
    "Private quotes or HR catalogue offer collected",
    "Bijtelling / salary-slip impact noted when employment-related (orientation only)",
    "Mileage, excess and early-exit clauses highlighted",
    "Licence status clear (drive rights / exchange timing)",
    "Parking plan for home and work checked",
    "Year of lease costs compared to buy and share alternatives",
    "Getting around plan for days you barely need the car",
  ],
  introScenarios: [
    {
      situation: "Employer offers a company car or mobility budget",
      approach: "Start with HR catalogue rules and bijtelling orientation — not a private lease quote.",
      firstStep: "Ask HR for the written policy, catalogue and how private use is reported on the salary slip.",
    },
    {
      situation: "Want a car for 2–4 years without buying",
      approach: "Private lease can bundle insurance and maintenance — still read kilometres and exit fees.",
      firstStep: "Price your real annual kilometres across two private-lease quotes, then compare to Buying a car.",
    },
    {
      situation: "Only need a car occasionally",
      approach: "Lease monthly costs rarely beat share + OV — keep Car sharing and Getting around in the mix.",
      firstStep: "Run a month of occasional trips on Car sharing maths before you sign a multi-year lease.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "Lease is optional — many expats thrive on OV, bikes and occasional sharing.",
    "Purchase deepens on Buying a car; EV ownership on Electric vehicles.",
    "Occasional access deepens on Car sharing.",
    "Drive rights deepen on Driving licence exchange; curb reality on Parking.",
  ],
  quickAnswer: {
    heading: "Lease cars in one minute",
    summary:
      "Leasing in the Netherlands usually means paying for long-term use of a car under a contract — private consumer lease, operational lease (often business), or a company car (auto van de zaak) arranged through an employer. You get predictable access and often bundled insurance and maintenance, while the lessor or employer remains closer to ownership admin. Company cars can add bijtelling (taxable benefit) orientation on private use. Compare a full year of lease costs to buying and to car sharing before you sign, and read mileage, excess and early-exit clauses carefully.",
    bullets: [
      "Private lease is a consumer contract; company cars follow HR and tax-reporting rules.",
      "Bijtelling is high-level orientation only — confirm percentages and salary-slip impact with HR and Belastingdienst tools.",
      "Mileage overruns and early termination fees create many expensive surprises.",
      "Occasional drivers often stay calmer with car sharing; daily drivers compare lease to buy.",
    ],
    note: "Buying a car, Car sharing, Electric vehicles and Road tax are siblings — use them for purchase, share, EV and MRB deep-dives, not as substitutes for lease contracts or tax advice.",
  },
  snapshotCards: [
    {
      title: "Lease types",
      body: "Private, operational and company-car paths.",
    },
    {
      title: "Decide lease vs buy",
      body: "Kilometres, stay length and employer offers.",
    },
    {
      title: "Private lease",
      body: "Quotes, credit checks and all-in monthly stacks.",
    },
    {
      title: "Company & bijtelling",
      body: "Catalogue choice and taxable-benefit orientation.",
    },
    {
      title: "Costs vs buy",
      body: "Year maths versus ownership and sharing.",
    },
    {
      title: "Contract watch-outs",
      body: "Mileage, excess, exit and return inspection.",
    },
  ] satisfies TipCard[],
  types: {
    heading: "What lease means here: private, operational and company",
    intro:
      "Dutch conversations mix three ideas that are not interchangeable. Name your path before you compare monthly prices — private consumer lease, operational lease, and company cars through work.",
    paragraphs: [
      "Private lease (private lease / private lease contract) is typically a consumer agreement with a lease company: you pay a monthly amount for a defined term and kilometre package, often with insurance and maintenance included. Credit checks and BKR registration notes can apply — verify current consumer rules with the provider and official guidance.",
      "Operational lease is common in business contexts: the lessor provides the vehicle as a service while the organisation pays for use. Company cars (auto van de zaak) are often arranged via employer fleets or lease partners; private use can trigger bijtelling orientation on taxable benefit. Financial lease / hire-purchase style ownership paths blur into buying — deepen purchase on Buying a car if ownership is the real goal.",
    ],
    rows: [
      {
        topic: "Private lease",
        whatToCheck: "Consumer contract term, km package, excess, early exit, what is included monthly.",
        tip: "Treat it as a multi-year commitment — not a flexible month-to-month app.",
      },
      {
        topic: "Operational lease",
        whatToCheck: "Who the contracting party is (you vs employer/company) and service inclusions.",
        tip: "Business paperwork differs from private consumer lease — read who is liable.",
      },
      {
        topic: "Company car",
        whatToCheck: "HR catalogue, contribution rules, private-use reporting, fuel or charge cards.",
        tip: "Start with written HR policy before browsing glossy catalogues.",
      },
      {
        topic: "Not the same as sharing",
        whatToCheck: "Whether you need daily exclusive access or occasional trips.",
        tip: "Occasional needs → Car sharing; contracted exclusive use → this page.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Name the path",
        body: "Private vs company is the first fork — quotes and tax orientation diverge immediately.",
      },
      {
        title: "Ownership blur",
        body: "Some products aim at eventual ownership — if that is the goal, open Buying a car early.",
      },
      {
        title: "EV leases",
        body: "Leasing an EV still needs charging and parking plans — ownership charging deepens on Electric vehicles.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Buying a car",
        href: BUYING_A_CAR_NETHERLANDS_PATH,
        status: "live",
        description: "Purchase and RDW paths when ownership is the real goal.",
      },
      {
        label: "Car sharing",
        href: CAR_SHARING_NETHERLANDS_PATH,
        status: "live",
        description: "Occasional access without a multi-year lease.",
      },
      {
        label: "Electric vehicles",
        href: ELECTRIC_VEHICLES_NETHERLANDS_PATH,
        status: "live",
        description: "EV charging and ownership orientation if the lease is electric.",
      },
    ] satisfies DrivingLink[],
  },
  decide: {
    heading: "Decide whether leasing fits your life here",
    intro:
      "Lease is optional. In dense Dutch cities, bikes and OV cover many weeks. Leasing shines when you need exclusive daily or weekly access with predictable monthly costs — without (or before) buying — and when your stay length and kilometres match the contract.",
    paragraphs: [
      "Start with trip rhythm: daily commuting and family logistics push toward lease or buy; rare weekends push toward sharing. Then stay length: multi-year private leases punish early exits. Then employment: a company car offer can change the maths entirely via contribution and bijtelling orientation. Licence status still comes first — you must be allowed to drive.",
      "Buying a car deepens purchase, BPM and RDW. Car sharing deepens on-demand memberships. Electric vehicles deepen EV ownership. This section only decides whether a lease contract is worth exploring.",
    ],
    rows: [
      {
        topic: "Weekly car need",
        whatToCheck: "Exclusive access most days versus occasional trips.",
        tip: "If most weeks are zero car days, stress-test Car sharing first.",
      },
      {
        topic: "Stay / assignment length",
        whatToCheck: "Whether the lease term will finish before you leave.",
        tip: "Short stays often fail private-lease early-exit maths.",
      },
      {
        topic: "Employer offer",
        whatToCheck: "Company car, mobility budget or cash alternative.",
        tip: "Compare HR options in writing before signing a private lease.",
      },
      {
        topic: "Kilometre honesty",
        whatToCheck: "Realistic annual km including weekends and holidays.",
        tip: "Under-estimating km is the classic expensive surprise.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Lease usually wins",
        body: "Predictable daily use, multi-year stay, desire to avoid purchase admin, or a clear company-car offer.",
      },
      {
        title: "Buy may win",
        body: "Long stay, high kilometres where ownership total cost looks better, or you want asset control — see Buying a car.",
      },
      {
        title: "Share may win",
        body: "Occasional trips only — monthly lease payments rarely beat membership maths on Car sharing.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Car sharing",
        href: CAR_SHARING_NETHERLANDS_PATH,
        status: "live",
        description: "Occasional four wheels without a multi-year contract.",
      },
      {
        label: "Buying a car",
        href: BUYING_A_CAR_NETHERLANDS_PATH,
        status: "live",
        description: "If lease fails your stay or km test, learn purchase paths.",
      },
      {
        label: "Electric vehicles",
        href: ELECTRIC_VEHICLES_NETHERLANDS_PATH,
        status: "live",
        description: "Considering an EV lease or buy? Charging orientation first.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "OV and bikes as the baseline between car days.",
      },
    ] satisfies DrivingLink[],
  },
  private: {
    heading: "Private lease: how the consumer path usually works",
    intro:
      "Private lease is a consumer contract for long-term use of a car. Monthly prices often look all-in — then kilometres, excess and early exit decide whether the deal stays calm.",
    paragraphs: [
      "Typical flow: choose a model and term, pass a credit or affordability check, sign, take delivery, drive within the kilometre package, then return the car for inspection at the end. Insurance and maintenance are frequently bundled — still confirm what is in and out of the monthly amount.",
      "Providers advertise attractive monthly figures. Always rebuild the total: term × monthly + expected excess km + optional extras + any deposit or administration fees. Soft provider listings later are orientation — not rankings. Confirm live quotes yourself.",
    ],
    steps: [
      {
        phase: "Quote & check",
        timing: "Before signing",
        detail: "Collect written quotes, km packages and credit-check notes; compare at least two offers.",
      },
      {
        phase: "Contract term",
        timing: "Signing",
        detail: "Lock term, annual kilometres, excess rate, early-exit and damage rules in writing.",
      },
      {
        phase: "Drive within package",
        timing: "During lease",
        detail: "Track kilometres; follow service and tyre rules in the contract.",
      },
      {
        phase: "Return inspection",
        timing: "End of term",
        detail: "Document condition, understand fair-wear definitions and final invoices.",
      },
    ] satisfies TimelineStep[],
    cards: [
      {
        title: "Credit & registration notes",
        body: "Affordability checks and possible BKR notes can apply — ask the provider what they register.",
      },
      {
        title: "All-in is not automatic",
        body: "Confirm insurance level, maintenance, roadside help and what excess you still pay.",
      },
      {
        title: "Delivery day",
        body: "Photograph existing marks and confirm the handbook kilometre baseline.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Car insurance",
        href: CAR_INSURANCE_NETHERLANDS_PATH,
        status: "live",
        description: "If cover is not fully bundled — WA orientation for owned cars differs.",
      },
      {
        label: "Buying a car",
        href: BUYING_A_CAR_NETHERLANDS_PATH,
        status: "live",
        description: "Compare private lease totals to a purchase path.",
      },
      {
        label: "MOT / APK",
        href: MOT_APK_NETHERLANDS_PATH,
        status: "live",
        description: "Inspection timing is often lessor-managed — still useful context.",
      },
    ] satisfies DrivingLink[],
  },
  company: {
    heading: "Company cars and bijtelling orientation",
    intro:
      "A company car through your employer can feel simpler than private lease — catalogue, fuel or charge card, fleet support — while private use often adds taxable-benefit (bijtelling) orientation on your salary slip.",
    paragraphs: [
      "Start with HR: eligibility, catalogue bands, employee contribution, private-use rules, and whether a mobility budget or cash alternative exists. Catalogue photos are not the full cost — contribution plus tax orientation plus parking can change the net picture.",
      "Bijtelling is a Dutch taxable-benefit concept for private use of a company car. Percentages, catalogue values and exceptions change over time and by vehicle — this page only orients you to ask the right questions. Confirm current rules with Belastingdienst tools, your payroll provider and HR. This is not tax advice.",
    ],
    rows: [
      {
        topic: "HR eligibility",
        whatToCheck: "Who may choose a car, waiting periods, and grade or role rules.",
        tip: "Get the policy PDF before you fall in love with a catalogue model.",
      },
      {
        topic: "Bijtelling orientation",
        whatToCheck: "How private use is valued and shown on the salary slip.",
        tip: "Ask payroll for a worked example — do not rely on forum screenshots.",
      },
      {
        topic: "Contribution & fuel/charge",
        whatToCheck: "Monthly employee contribution, fuel cards, home-charging reimbursement.",
        tip: "EV company cars still need a home or workplace charging plan — see Electric vehicles.",
      },
      {
        topic: "Private-use rules",
        whatToCheck: "Abroad travel, named drivers, commuting definitions, logging requirements.",
        tip: "Violating private-use rules can be expensive — read HR, not Slack folklore.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Mobility budget alternative",
        body: "Some employers offer cash or multimodal budgets — compare calmly to a car.",
      },
      {
        title: "Not private lease maths",
        body: "Company-car net cost is contribution + tax orientation, not the private lease sticker.",
      },
      {
        title: "Leaving the employer",
        body: "Ask what happens to the car and any remaining obligations if you resign or relocate.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Electric vehicles",
        href: ELECTRIC_VEHICLES_NETHERLANDS_PATH,
        status: "live",
        description: "Company EV offers still need charging and parking orientation.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Mobility budgets often mix OV and bike — keep multimodal options open.",
      },
      {
        label: "Parking and local permits",
        href: PARKING_PATH,
        status: "live",
        description: "Company cars still need a curb or garage plan at home.",
      },
    ] satisfies DrivingLink[],
  },
  costs: {
    heading: "Cost orientation: lease versus buy versus share",
    intro:
      "Compare a realistic year — not the glossy monthly catalogue figure. Lease costs are payments plus excess kilometres and exit risk. Ownership stacks purchase, insurance, road tax, parking, APK and maintenance. Sharing stacks membership and trip fees.",
    paragraphs: [
      "For private lease, multiply monthly × term, then add likely excess km and a buffer for damage excess. For company cars, sketch contribution plus salary-slip impact using HR numbers. Against that, list purchase or used-car path costs from Buying a car, plus parking, insurance and road tax orientation.",
      "Break-even points vary by city, kilometres and stay length. Occasional users often stay cheaper on share; stable high-km users compare lease to buy. Soft rate hints go stale immediately — confirm live quotes. This is not financial advice.",
    ],
    rows: [
      {
        category: "Private lease monthly",
        range: "Model- and term-dependent",
        notes: "Confirm inclusions and km package live",
      },
      {
        category: "Excess km / exit fees",
        range: "Contract-specific",
        notes: "Often the surprise line items",
      },
      {
        category: "Company contribution + tax orientation",
        range: "HR / payroll-specific",
        notes: "Ask for a worked salary-slip example",
      },
      {
        category: "Ownership stack",
        range: "Purchase + recurring",
        notes: "Deepen on Buying a car, insurance, road tax, APK",
      },
      {
        category: "Car sharing alternative",
        range: "Fee + time + km",
        notes: "Better for occasional trips — see Car sharing",
      },
    ] satisfies CostRow[],
    cards: [
      {
        title: "Count real kilometres",
        body: "Holiday drives and weekend family visits belong in the annual total.",
      },
      {
        title: "Include parking",
        body: "Lease without a parking plan is incomplete maths in Dutch cities.",
      },
      {
        title: "Delay signing calmly",
        body: "Many expats share for months, then reopen lease or buy with better data.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Buying a car",
        href: BUYING_A_CAR_NETHERLANDS_PATH,
        status: "live",
        description: "Full ownership cost orientation when lease no longer fits.",
      },
      {
        label: "Car sharing",
        href: CAR_SHARING_NETHERLANDS_PATH,
        status: "live",
        description: "Occasional-access maths without a multi-year lease.",
      },
      {
        label: "Road tax",
        href: ROAD_TAX_NETHERLANDS_PATH,
        status: "live",
        description: "MRB appears when you become a registered keeper — often not in private lease.",
      },
      {
        label: "Car insurance",
        href: CAR_INSURANCE_NETHERLANDS_PATH,
        status: "live",
        description: "Get live premiums before you switch to owning.",
      },
    ] satisfies DrivingLink[],
  },
  contracts: {
    heading: "Contract watch-outs before you sign",
    intro:
      "Lease stress usually comes from small print, not from finding a car. Highlight mileage, damage excess, early termination, return condition and who may drive before you celebrate delivery day.",
    paragraphs: [
      "Ask for the full terms in a language you can actually read — marketing one-pagers omit the expensive clauses. Note how excess kilometres are priced, what fair wear and tear means at return, and whether moving abroad or changing employers triggers penalties.",
      "For company cars, also read HR attachments: private-use definitions, abroad rules, and what happens on resignation. Provider support chats cannot override written contracts.",
    ],
    rows: [
      {
        topic: "Mileage package",
        whatToCheck: "Annual km, excess rate, how holidays abroad count.",
        tip: "Pad your estimate — under-booking km is a classic costly habit.",
      },
      {
        topic: "Damage & excess",
        whatToCheck: "Eigen risico, glass, tyres, interior, who pays for what.",
        tip: "Photograph delivery condition and keep a damage log.",
      },
      {
        topic: "Early termination",
        whatToCheck: "Fees, takeover options, transferring the contract.",
        tip: "Short assignments need an exit story before signing.",
      },
      {
        topic: "Return inspection",
        whatToCheck: "Fair-wear definition, cleaning rules, final invoice timing.",
        tip: "Budget a calm end-of-lease week — do not rush the inspection.",
      },
      {
        topic: "Named drivers",
        whatToCheck: "Partner or household drivers, age rules, international travel.",
        tip: "Unlisted drivers can void cover — confirm in writing.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Highlight before you sign",
        body: "Print or PDF-comment the km, excess and exit pages — then sleep on it.",
      },
      {
        title: "Change-of-life clauses",
        body: "Ask about job loss, relocation and parental leave scenarios.",
      },
      {
        title: "No fake guarantees",
        body: "Ignore “risk-free lease” marketing — contracts allocate risk; read how.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Car insurance",
        href: CAR_INSURANCE_NETHERLANDS_PATH,
        status: "live",
        description: "Understand cover concepts if the lease bundle is incomplete.",
      },
      {
        label: "Speed cameras",
        href: SPEED_CAMERAS_NETHERLANDS_PATH,
        status: "live",
        description: "Fines still reach the driver — lease plates do not erase enforcement.",
      },
      {
        label: "Municipality services",
        href: MUNICIPALITY_PATH,
        status: "live",
        description: "Local admin context when permits and registration touch your address.",
      },
    ] satisfies DrivingLink[],
  },
  practical: {
    heading: "Licence, insurance notes and parking reality",
    intro:
      "Leasing does not create drive rights or erase Dutch curb rules. Confirm licence validity, understand who carries insurance, and plan parking before the car arrives.",
    paragraphs: [
      "If you recently arrived, check foreign-licence validity and exchange timing — Driving licence exchange is the deep guide. Lease companies and employers may require a Dutch rijbewijs or minimum holding period.",
      "Insurance is often bundled in private or company lease — still confirm cover level, excess and named drivers. Personal WA shopping for an owned car is a different product on Car insurance. Parking permits and paid zones remain your problem at home — see Parking and local permits.",
    ],
    rows: [
      {
        topic: "Drive rights",
        whatToCheck: "Foreign licence window, exchange status, categories on the card.",
        tip: "Do not schedule delivery until you may legally drive.",
      },
      {
        topic: "Insurance bundle",
        whatToCheck: "What is included, excess, exclusions, roadside help.",
        tip: "Screenshot the excess figure and keep the policy summary.",
      },
      {
        topic: "Parking at home",
        whatToCheck: "Resident permits, garage waitlists, visitor rules.",
        tip: "Hard parking can erase an attractive monthly lease figure.",
      },
      {
        topic: "APK / maintenance",
        whatToCheck: "Who books inspections and servicing under the contract.",
        tip: "Owners deepen on MOT / APK; lessees still show up on time.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Fines follow the driver",
        body: "Speed and parking fines still apply — see Speed cameras for enforcement orientation.",
      },
      {
        title: "EV charging plan",
        body: "Leased EVs need home or workplace charging reality — Electric vehicles covers ownership-side charging.",
      },
      {
        title: "Not ownership MRB",
        body: "Road tax for registered keepers deepens on Road tax — private lease often keeps that with the lessor.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Driving licence exchange",
        href: DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
        status: "live",
        description: "Foreign licence validity and Dutch rijbewijs exchange.",
      },
      {
        label: "Parking and local permits",
        href: PARKING_PATH,
        status: "live",
        description: "Resident parking and paid zones once a car has a home curb.",
      },
      {
        label: "Car insurance",
        href: CAR_INSURANCE_NETHERLANDS_PATH,
        status: "live",
        description: "WA timing and cover choices if you later own.",
      },
      {
        label: "MOT / APK",
        href: MOT_APK_NETHERLANDS_PATH,
        status: "live",
        description: "Inspection orientation when ownership or lessor rules require it.",
      },
    ] satisfies DrivingLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Lease and mobility orientation",
    subtitle:
      "Soft CTAs for established Dutch mobility and lease-related options when contracted four wheels fit your life. This block is not a ranking of lease companies, fleets or tax products.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for lease week — not pay-to-rank placement unless a link is explicitly labelled as sponsored.",
    placementId: "nl-living-lease-cars-support-providers",
    analyticsPageContext: "lease-cars-netherlands-recommended-options",
    categoryLinks: [
      { href: BUYING_A_CAR_NETHERLANDS_PATH, label: "Buying a car" },
      { href: CAR_SHARING_NETHERLANDS_PATH, label: "Car sharing" },
      { href: ELECTRIC_VEHICLES_NETHERLANDS_PATH, label: "Electric vehicles" },
    ],
    browseLabel: "More driving context: ",
  },
  scenarios: {
    heading: "Common expat lease scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "Employer offers a company car",
        approach: "Start with HR policy, catalogue bands and bijtelling orientation — not private lease ads.",
        firstStep: "Request a written net-cost example from payroll for two catalogue options.",
      },
      {
        situation: "Private lease for a family for 3 years",
        approach: "Honest annual kilometres and parking plan matter more than the glossy monthly price.",
        firstStep: "Collect two quotes with the same km package, then compare to Buying a car totals.",
      },
      {
        situation: "Short assignment under 18 months",
        approach: "Early-exit fees often punish private lease; share + OV may stay calmer.",
        firstStep: "Open Car sharing and Getting around before you sign a multi-year term.",
      },
      {
        situation: "Considering an EV lease",
        approach: "Charging access and parking still decide comfort — lease contract is only half the story.",
        firstStep: "Read Electric vehicles charging notes, then reopen lease quotes.",
      },
      {
        situation: "Only occasional car need",
        approach: "Monthly lease payments rarely beat membership maths.",
        firstStep: "Price a realistic month on Car sharing before any lease conversation.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Signing without kilometre honesty",
      body: "Optimistic annual packages create expensive excess invoices.",
      advice: "Pad real commuting plus weekend and holiday kilometres before you lock a package.",
    },
    {
      title: "Ignoring bijtelling orientation",
      body: "Catalogue excitement without salary-slip impact surprises many newcomers.",
      advice: "Ask HR/payroll for a worked example — confirm Belastingdienst tools yourself.",
    },
    {
      title: "Treating lease as buy advice",
      body: "Lease contracts do not teach BPM, RDW transfer or private insurance shopping.",
      advice: "Keep Buying a car for ownership; keep this page for contracted use.",
    },
    {
      title: "Skipping early-exit reading",
      body: "Relocation or job change mid-term can be costly if exit fees were unread.",
      advice: "Highlight termination clauses and ask about takeover options before signing.",
    },
    {
      title: "No parking plan",
      body: "An attractive monthly figure collapses under garage waitlists and permit stress.",
      advice: "Confirm Parking and local permits reality for your address first.",
    },
    {
      title: "Confusing lease with car sharing",
      body: "Multi-year exclusive use is a different product from on-demand apps.",
      advice: "If trips are rare, open Car sharing instead of forcing a lease.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Lease readiness checklist",
    intro: "Use this list so your first signature stays intentional — path named, maths done, clauses read.",
    items: [
      "Lease path named: private, operational or company",
      "Annual kilometres estimated with a buffer",
      "Stay / assignment length matches the term",
      "Private quotes or HR catalogue offer in writing",
      "Bijtelling / contribution orientation noted when employment-related",
      "Mileage, excess and early-exit clauses highlighted",
      "Named-driver and abroad rules confirmed",
      "Licence status clear for Dutch roads",
      "Home parking or permit plan confirmed",
      "Year maths compared to buy and share alternatives",
      "Return-inspection and fair-wear notes skimmed",
      "Official/HR sources bookmarked for verification",
    ],
  },
  howTo: {
    heading: "How to approach leasing calmly as an expat",
    steps: [
      {
        name: "Name your lease path",
        text: "Decide whether you are exploring private lease, operational lease or a company-car offer — the paperwork and tax orientation diverge immediately.",
      },
      {
        name: "Stress-test kilometres and stay length",
        text: "Sketch realistic annual kilometres and how long you expect to stay. If trips are rare, open Car sharing before any multi-year quote.",
      },
      {
        name: "Collect written numbers",
        text: "For private lease, gather comparable quotes. For company cars, request HR policy, catalogue rules and a payroll worked example for bijtelling orientation.",
      },
      {
        name: "Read the expensive clauses",
        text: "Highlight mileage excess, damage excess, early termination, named drivers and return inspection before you sign.",
      },
      {
        name: "Confirm licence and parking",
        text: "Clear drive rights and a curb or garage plan at home — then sign only if year maths still beats buy and share alternatives.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to approach leasing a car in the Netherlands as an expat",
    description:
      "Orientation steps for expats comparing private lease, operational lease and company cars in the Netherlands.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "What is private lease in the Netherlands?",
      a: "Private lease is typically a consumer contract with a lease company for long-term use of a car, often with insurance and maintenance bundled into a monthly payment for a set term and kilometre package. Always confirm inclusions, excess and early-exit rules in the written contract.",
    },
    {
      q: "What is bijtelling?",
      a: "Bijtelling is a Dutch taxable-benefit orientation for private use of a company car. How it appears on your salary slip depends on current rules, catalogue value and vehicle details. Confirm with HR, payroll and Belastingdienst tools — this page does not provide tax advice.",
    },
    {
      q: "Is leasing cheaper than buying?",
      a: "It depends on kilometres, stay length, parking and whether a company-car offer exists. Compare a full year of lease payments and exit risk to purchase plus insurance, road tax, parking and maintenance — and to car sharing if trips are occasional. This is not financial advice.",
    },
    {
      q: "Can I lease with a foreign driving licence?",
      a: "You need drive rights that are valid in the Netherlands, and providers or employers may add their own acceptance rules. Confirm foreign-licence windows and exchange timing on Driving licence exchange before delivery day.",
    },
    {
      q: "Is a company car the same as private lease?",
      a: "No. Company cars follow employer HR and often bijtelling orientation. Private lease is usually a consumer contract you sign yourself. Compare written HR offers to private quotes carefully — they are different maths.",
    },
    {
      q: "Should I lease an EV?",
      a: "An EV lease can fit if charging and parking work for your housing. Charging and ownership-side EV orientation deepen on Electric vehicles. Do not treat catalogue range claims as winter reality without a charging plan.",
    },
    {
      q: "When is car sharing better than leasing?",
      a: "When you only need a car occasionally. Monthly lease payments rarely beat membership and trip fees for rare weekends — see Car sharing and Getting around.",
    },
    {
      q: "What happens if I leave the Netherlands early?",
      a: "Early termination or relocation clauses can be expensive. Read exit, takeover and international-use rules before signing, and ask the provider or HR what happens if your assignment ends early.",
    },
    {
      q: "Do I pay road tax on a leased car?",
      a: "Private and company lease structures often keep registered-keeper tax with the lessor or employer, but confirm your contract. Road tax deepens on the Road tax guide for owners who become registered keepers.",
    },
    {
      q: "Is this legal or tax advice?",
      a: "No. ExpatLife provides general orientation only. Follow written lease contracts, HR policies, Belastingdienst tools and official sources for decisions.",
    },
  ],
  relatedGuidesTips: [
    "Purchase path → Buying a car.",
    "Occasional access → Car sharing.",
    "EV ownership / charging → Electric vehicles.",
    "OV and bikes → Getting around.",
    "Drive rights → Driving licence exchange.",
    "Curb reality → Parking and local permits.",
    "Cover if you buy → Car insurance.",
  ],
  relatedGuides: [
    {
      label: "Buying a car",
      href: BUYING_A_CAR_NETHERLANDS_PATH,
      status: "live",
      description: "Purchase paths, BPM orientation and RDW transfer when ownership wins.",
    },
    {
      label: "Car sharing",
      href: CAR_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Occasional shared cars when a multi-year lease is too heavy.",
    },
    {
      label: "Electric vehicles",
      href: ELECTRIC_VEHICLES_NETHERLANDS_PATH,
      status: "live",
      description: "EV purchase, charging and ownership — separate from lease-contract deep-dives.",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Trains, OVpay, bikes and everyday mobility when ownership is optional.",
    },
    {
      label: "Driving licence exchange",
      href: DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
      status: "live",
      description: "Foreign licence validity and Dutch rijbewijs exchange.",
    },
    {
      label: "Parking and local permits",
      href: PARKING_PATH,
      status: "live",
      description: "Resident parking, visitor permits and paid zones.",
    },
    {
      label: "Car insurance",
      href: CAR_INSURANCE_NETHERLANDS_PATH,
      status: "live",
      description: "WA cover when you later own a car.",
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
      description: "Speed enforcement orientation — fines still apply in leased cars.",
    },
  ] satisfies DrivingLink[],
  drivingHubTips: [
    "Lease cars is the contracted-access cornerstone of the Driving cluster.",
    "Buying a car remains the purchase sibling; Car sharing covers occasional access.",
    "Electric vehicles cover EV ownership and charging.",
    "Getting around remains the wider mobility guide for OV and bikes.",
  ],
  drivingHubCards: [
    {
      label: "Lease cars",
      href: LEASE_CARS_NETHERLANDS_PATH,
      status: "live",
      description: "Private lease, company cars and contract orientation — you are here.",
    },
    {
      label: "Buying a car",
      href: BUYING_A_CAR_NETHERLANDS_PATH,
      status: "live",
      description: "Purchase, registration and ownership orientation.",
    },
    {
      label: "Car sharing",
      href: CAR_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Membership models, trips and cost orientation.",
    },
    {
      label: "Electric vehicles",
      href: ELECTRIC_VEHICLES_NETHERLANDS_PATH,
      status: "live",
      description: "EV purchase, charging and ownership orientation.",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "OV, bikes and multimodal commuting.",
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
      label: "Parking and local permits",
      href: PARKING_PATH,
      status: "live",
      description: "Permits and paid parking after you have a vehicle.",
    },
  ] satisfies DrivingLink[],
  exploreNextCards: [
    {
      label: "Buying a car",
      href: BUYING_A_CAR_NETHERLANDS_PATH,
      status: "live",
      description: "Lease not a fit? Start the purchase and RDW plan.",
    },
    {
      label: "Car sharing",
      href: CAR_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Only occasional trips? Compare membership maths.",
    },
    {
      label: "Electric vehicles",
      href: ELECTRIC_VEHICLES_NETHERLANDS_PATH,
      status: "live",
      description: "Considering an EV lease or buy? Learn charging first.",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Build the OV and bike baseline between car days.",
    },
    {
      label: "Parking permits",
      href: PARKING_PATH,
      status: "live",
      description: "Car on the way? Learn resident parking early.",
    },
    {
      label: "Driving licence exchange",
      href: DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
      status: "live",
      description: "Need drive rights clarity before delivery?",
    },
  ] satisfies DrivingLink[],
  exploreNextTips: [
    "Ready to own → Buying a car.",
    "Occasional access → Car sharing.",
    "EV path → Electric vehicles.",
    "No car most days → Getting around.",
    "Curb admin → Parking permits.",
    "Licence unclear → Driving licence exchange.",
  ],
  officialSources: [
    {
      label: "Belastingdienst — company car / bijtelling orientation",
      href: "https://www.belastingdienst.nl/",
      description: "Official tax orientation for private use of a company car — confirm live rules",
    },
    {
      label: "RDW — driving licence and vehicle orientation",
      href: "https://www.rdw.nl/en",
      description: "Official orientation for licences and vehicle topics",
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
      label: "ANWB — mobility orientation",
      href: "https://www.anwb.nl/",
      description: "Consumer mobility orientation — verify current guidance yourself",
    },
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: [
        "Understand lease types.",
        "Decide lease vs buy vs share.",
        "Collect quotes / HR numbers.",
        "Read contract watch-outs.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Lease types.",
        "Decide.",
        "Private lease.",
        "Company & bijtelling.",
        "Costs vs buy.",
        "Contract watch-outs.",
      ],
    },
    types: {
      title: "From the visual — type cues",
      items: [
        "Private lease.",
        "Operational lease.",
        "Company car.",
        "Not car sharing.",
      ],
    },
    decide: {
      title: "From the visual — decision cues",
      items: [
        "Weekly car need.",
        "Stay length.",
        "Employer offer.",
        "Kilometre honesty.",
      ],
    },
    private: {
      title: "From the visual — private lease cues",
      items: [
        "Quote and checks.",
        "Term and km package.",
        "All-in inclusions.",
        "Return inspection.",
      ],
    },
    company: {
      title: "From the visual — company cues",
      items: [
        "HR eligibility.",
        "Bijtelling orientation.",
        "Contribution & fuel/charge.",
        "Private-use rules.",
      ],
    },
    costs: {
      title: "From the visual — cost cues",
      items: [
        "Year of lease payments.",
        "Excess km / exit buffer.",
        "Ownership stack.",
        "Share alternative.",
      ],
    },
    contracts: {
      title: "From the visual — contract cues",
      items: [
        "Mileage package.",
        "Damage excess.",
        "Early termination.",
        "Return inspection.",
      ],
    },
    practical: {
      title: "From the visual — practical cues",
      items: [
        "Valid drive rights.",
        "Insurance bundle notes.",
        "Parking plan.",
        "APK / service timing.",
      ],
    },
    scenarios: {
      title: "From the visual — scenario cues",
      items: [
        "Employer company car.",
        "Private lease family.",
        "Short assignment.",
        "EV lease temptation.",
      ],
    },
    mistakes: {
      title: "From the visual — mistake cues",
      items: [
        "No kilometre honesty.",
        "Ignored bijtelling.",
        "Lease as buy advice.",
        "Skipped exit clauses.",
      ],
    },
    checklist: {
      title: "From the visual — checklist cues",
      items: [
        "Path named.",
        "Quotes / HR done.",
        "Clauses highlighted.",
        "Parking and licence OK.",
      ],
    },
  },
  disclosure:
    "ExpatLife provides general information for orientation only. It is not legal, tax, financial, insurance or product advice. Verify current rates, bijtelling rules and contracts with lease providers, employers, Belastingdienst tools and official sources. Soft partner links, when shown, are labelled and never presented as official rankings.",
} as const;
