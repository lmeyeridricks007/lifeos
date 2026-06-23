import {
  HOUSING_COSTS_NETHERLANDS_PATH,
  HOUSING_HUB_PATH,
  RENTING_NETHERLANDS_PATH,
  TEMPORARY_ACCOMMODATION_NETHERLANDS_PATH,
  UTILITIES_NETHERLANDS_PATH,
  ENERGY_AND_WATER_NETHERLANDS_PATH,
  INTERNET_AND_MOBILE_NETHERLANDS_PATH,
  MOVING_TO_NETHERLANDS_PATH,
} from "./housingNetherlandsPageModel";
import { REGISTERING_YOUR_ADDRESS_NETHERLANDS_PATH } from "../practical-life/registeringYourAddressNetherlandsPageModel";
import { INSURANCE_PROVIDERS_NETHERLANDS_PATH } from "../services/insurance-providers/insuranceProvidersNetherlandsPageModel";
import { MUNICIPALITY_SERVICES_NETHERLANDS_PATH } from "../practical-life/municipalityServicesNetherlandsPageModel";

export const RENTAL_CONTRACTS_AND_DEPOSITS_NETHERLANDS_PATH =
  "/netherlands/housing/rental-contracts-and-deposits-netherlands/" as const;

export type RentalGuideLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type TipCard = {
  title: string;
  body: string;
};

export type ComparisonRow = {
  factor: string;
  furnished: string;
  semiFurnished: string;
  unfurnished: string;
};

export type TimelineStep = {
  phase: string;
  detail: string;
};

export type MistakeFixRow = {
  mistake: string;
  fix: string;
};

export type RentalScenario = {
  situation: string;
  practice: string;
  note: string;
};

export type ClauseRow = {
  clause: string;
  whatToCheck: string;
  whyItMatters: string;
};

export type ContractTypeRow = {
  type: string;
  typicalTerm: string;
  noticeOrientation: string;
};

export type SplitRow = {
  topic: string;
  tenant: string;
  landlord: string;
};

export type TaskDetailRow = {
  task: string;
  timing: string;
  detail: string;
};

export type InventoryExampleRow = {
  item: string;
  condition: string;
  note: string;
};

const INFOGRAPHIC_VERSION = "premium-v3";
const HERO_IMAGE_VERSION = "v2";
const VISUAL_PREFIX = "netherlands-rental-contracts-deposits";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const rentalContractsAndDepositsNetherlandsPage = {
  slug: "rental-contracts-and-deposits-netherlands",
  path: RENTAL_CONTRACTS_AND_DEPOSITS_NETHERLANDS_PATH,
  hubPath: HOUSING_HUB_PATH,
  publish: true,
  publishDate: "2026-11-12",
  seo: {
    title: "Rental Contracts and Deposits in the Netherlands | Expat Guide",
    description:
      "Learn how rental contracts, deposits, inspections and tenant responsibilities work in the Netherlands before signing a lease.",
    keywords: [
      "rental contract netherlands",
      "rental agreement netherlands",
      "rental deposit netherlands",
      "renting netherlands contract",
      "expat rental contract netherlands",
      "lease agreement netherlands",
      "tenant rights netherlands",
      "security deposit netherlands",
      "furnished apartment netherlands",
      "rental inspection netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Housing · Renting",
    pageTitle: "Rental Contracts and Deposits in the Netherlands",
    subtitle:
      "Understand Dutch rental agreements, deposits, inspections and key responsibilities before signing a lease.",
    chips: ["Contracts", "Deposits", "Inspections", "Tenant duties"],
    disclaimer:
      "General orientation only — not legal advice. Review your specific agreement and verify rules through Government.nl, Juridisch Loket or Huurcommissie when needed.",
    primaryCta: { label: "Understand Rental Contracts", href: "#understanding-contracts" },
    secondaryCta: { label: "Explore Renting Guides", href: RENTING_NETHERLANDS_PATH },
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Photorealistic editorial photo: expat couple preparing to sign a Dutch huurcontract at a bright Amsterdam apartment table with keys, borg deposit envelope and inventarisatielijst clipboard, while one partner photographs the empty room for move-in documentation — canal houses visible through the window.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "At a glance" },
    { href: "#understanding-contracts", label: "Agreements" },
    { href: "#contract-types", label: "Contract types" },
    { href: "#deposits", label: "Deposits" },
    { href: "#furnished-vs-unfurnished", label: "Furnished" },
    { href: "#inventory-lists", label: "Inventory" },
    { href: "#move-in-inspection", label: "Move-in" },
    { href: "#utilities", label: "Utilities" },
    { href: "#tenant-responsibilities", label: "Tenant" },
    { href: "#landlord-responsibilities", label: "Landlord" },
    { href: "#rent-increases", label: "Rent changes" },
    { href: "#ending-lease", label: "Ending lease" },
    { href: "#move-out-checklist", label: "Move out" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#documents-checklist", label: "Before signing" },
    { href: "#timeline", label: "Process" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
    { href: "#related-guides", label: "Related" },
    { href: "#explore-next", label: "Explore next" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Orientation journey map: read huurcontract, document borg deposit, sign inventarisatielijst, set up utilities and plan move-out handover.",
      "Start with the full lease and deposit documentation — not after unpacking."
    ),
    snapshot: visual(
      "snapshot",
      "Six at-a-glance signals: deposits before keys, varying contract types, inventory plus photos, day-one inspections, separate utilities, keep all documents.",
      "Use these six signals as a pre-signing checklist before transferring borg."
    ),
    understandingContracts: visual(
      "understanding-contracts",
      "Huurcontract record file: €1,450 rent, 12-month term, 1-month notice, tenant vs landlord maintenance split and residential use only.",
      "Your lease defines rent, notice and maintenance — not just the monthly headline figure."
    ),
    contractTypes: visual(
      "contract-types",
      "Six contract cards: fixed-term, indefinite, student, temporary, corporate and shared room — with notice orientation hints.",
      "Match contract type to your stay length and flexibility needs."
    ),
    deposits: visual(
      "deposits",
      "Borg deposit board: €1,650 example, payment proof, move-in photos and return discussion at handover.",
      "Document condition at move-in — borg discussions reference your files."
    ),
    furnishedVsUnfurnished: visual(
      "furnished-vs-unfurnished",
      "Three-column comparison: furniture, appliances, setup costs €2,000–€8,000+ and monthly rent bands.",
      "Compare total first-year cost — not headline rent alone."
    ),
    inventoryLists: visual(
      "inventory-lists",
      "Inventarisatielijst record: sofa, washer, countertop mark, window latch and meter reading 18,452.",
      "Sign only when the list matches what you see on walkthrough."
    ),
    moveInInspection: visual(
      "move-in-inspection",
      "Eight-category move-in checklist with phone camera documenting walls, appliances and meters.",
      "Complete inspection before unpacking — mirror the same shots at move-out."
    ),
    utilities: visual(
      "utilities",
      "Utility responsibility map: electricity, gas, water, internet and gemeente waste — who contracts each.",
      "Confirm servicekosten and direct utilities before signing."
    ),
    tenantResponsibilities: visual(
      "tenant-responsibilities",
      "Premium tenant duty cards: property care, reporting issues, utilities, neighbourhood rules and contract compliance.",
      "Practical tenant duties — verify specifics in your lease."
    ),
    landlordResponsibilities: visual(
      "landlord-responsibilities",
      "Premium landlord duty cards: maintenance, major repairs, structural issues and building systems.",
      "High-level landlord obligations — disputes may involve Huurcommissie or advice services."
    ),
    rentIncreases: visual(
      "rent-increases",
      "Premium orientation on rent adjustment concepts and official reference resources.",
      "Rent change rules depend on contract type and sector — verify through official sources."
    ),
    endingLease: visual(
      "ending-lease",
      "Premium end-of-lease flow: notice periods, move-out inspection, handover and deposit discussion.",
      "Plan notice and inspection timing before your last month."
    ),
    moveOutChecklist: visual(
      "move-out-checklist",
      "Premium move-out preparation checklist for cleaning, utilities, keys and documentation.",
      "Structured move-out reduces deposit disputes and forgotten accounts."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board with eight common expat rental contract errors and practical fixes.",
      "Most disputes trace back to skipped documentation or unclear utilities."
    ),
    documentsChecklist: visual(
      "documents-checklist",
      "Premium pre-signing document checklist for rent, deposit, inventory and notice terms.",
      "Read the full agreement before transferring any deposit."
    ),
    timeline: visual(
      "timeline",
      "Premium rental journey timeline from search through move-out inspection.",
      "Typical rental flow — your agency or landlord process may add steps."
    ),
    faq: visual(
      "faq",
      "Premium FAQ panels on contracts, deposits, inventory, utilities and move-out in the Netherlands.",
      "Quick answers — verify live rules for your contract type and city."
    ),
    sources: visual(
      "sources",
      "Premium official source cards for Government.nl, Huurcommissie and Juridisch Loket.",
      "Regulations evolve — check publication dates on official sites."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium hub diagram linking renting, housing costs, utilities, registration and insurance guides.",
      "Suggested reading after understanding contracts and deposits."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium explore-next path for renting, housing costs, utilities, registration and insurance.",
      "Pick the guide that matches your next rental step."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "What this guide covers",
      items: [
        "Dutch rental agreement basics — not legal interpretation of your lease",
        "Deposit practices and move-in documentation",
        "Furnished vs unfurnished expectations",
        "Tenant and landlord responsibility orientation",
        "Move-in and move-out inspection preparation",
      ],
    },
    snapshot: {
      title: "Before you sign",
      items: [
        "Deposits are commonly requested before key handover",
        "Contract type affects notice and flexibility",
        "Inventory lists and photos protect at move-out",
        "Utilities may sit outside headline rent",
        "Keep copies of all correspondence and documents",
      ],
    },
    understandingContracts: {
      title: "Core agreement elements",
      items: [
        "Monthly rent and payment date",
        "Lease start date and duration or renewal rules",
        "Tenant and landlord maintenance split",
        "Notice periods for ending the lease",
        "Permitted use (residential, no subletting unless agreed)",
      ],
    },
    contractTypes: {
      title: "Match contract to situation",
      items: [
        "Fixed-term — common for initial expat assignments",
        "Indefinite — more flexibility after initial period in some cases",
        "Student housing — often shorter terms and shared rules",
        "Corporate housing — employer or agency may manage contract",
        "Shared accommodation — clarify which rooms and costs are yours",
      ],
    },
    deposits: {
      title: "Deposit orientation",
      items: [
        "Often one to two months rent as orientation — verify your lease",
        "Held against damage or outstanding charges — not a second rent payment",
        "Property condition at move-in strongly influences discussions",
        "Bank transfer records and signed inventory support fair outcomes",
        "No guarantee of timing or amount returned — document everything",
      ],
    },
    furnishedVsUnfurnished: {
      title: "Setup implications",
      items: [
        "Furnished — higher rent, lower immediate furniture spend",
        "Semi-furnished — confirm which items stay and which you supply",
        "Unfurnished — lower rent, significant setup and moving cash",
        "Compare total first-year cost, not headline rent alone",
      ],
    },
    inventoryLists: {
      title: "Why inventory matters",
      items: [
        "Records furniture, appliances and fixture condition",
        "Signed by both parties at move-in when possible",
        "Update if landlord replaces items during tenancy",
        "Pair with dated photos for high-value or damaged areas",
      ],
    },
    moveInInspection: {
      title: "Document on day one",
      items: [
        "Walls, floors, windows and doors",
        "Kitchen appliances and bathroom fittings",
        "Heating, ventilation and energy meter readings",
        "Outdoor areas, storage and parking if included",
        "Report new issues promptly in writing",
      ],
    },
    utilities: {
      title: "Confirm who pays",
      items: [
        "Electricity and gas often tenant-arranged",
        "Water may be via landlord or separate contract",
        "Internet and mobile rarely included in unfurnished leases",
        "Waste and municipal charges vary by gemeente and contract",
      ],
    },
    tenantResponsibilities: {
      title: "Typical tenant duties",
      items: [
        "Day-to-day property care and hygiene",
        "Reporting defects before they worsen",
        "Paying agreed utilities and service costs",
        "Following building and neighbourhood rules",
        "Giving proper notice when leaving",
      ],
    },
    landlordResponsibilities: {
      title: "Typical landlord duties",
      items: [
        "Major structural and building system repairs",
        "Maintaining rented equipment per contract",
        "Providing lease and inventory documentation",
        "Handling building-level issues outside tenant misuse",
        "Responding to urgent heating or leak reports in reasonable time",
      ],
    },
    rentIncreases: {
      title: "Stay informed",
      items: [
        "Rules differ for social, mid-market and free-sector housing",
        "Contracts may reference indexation or annual adjustment clauses",
        "Huurcommissie and Government.nl publish orientation material",
        "Do not assume verbal promises override written terms",
      ],
    },
    endingLease: {
      title: "Plan the exit",
      items: [
        "Check notice period and calendar deadline in your contract",
        "Schedule move-out inspection when offered",
        "Clean and remove belongings before handover",
        "Discuss deposit return timeline in writing",
      ],
    },
    moveOutChecklist: {
      title: "Move-out prep",
      items: [
        "Review contract notice and cleaning expectations",
        "Document final property condition with photos",
        "Close or transfer utility accounts",
        "Return keys and obtain handover confirmation",
        "Retain all deposit correspondence in one folder",
      ],
    },
    mistakes: {
      title: "Avoid these",
      items: [
        "Signing without reading utility and servicekosten clauses",
        "Skipping move-in photos and meter readings",
        "Losing inventory and email trails",
        "Assuming furniture is included without inventarisatielijst check",
        "Paying borg before reviewing the full huurcontract",
        "Missing notice deadline by one day",
      ],
    },
    documentsChecklist: {
      title: "Pre-signing files",
      items: [
        "Full huurcontract PDF or signed copy with appendices",
        "Borg deposit amount and return conditions in writing",
        "Inventarisatielijst draft or handover plan",
        "Identity and inschrijving correspondence if applicable",
        "Servicekosten breakdown if charged separately",
      ],
    },
    timeline: {
      title: "Typical rental flow",
      items: [
        "Search with total stack budget — rent, borg and utilities",
        "Review huurcontract before any deposit transfer",
        "Move-in inspection and signed inventarisatielijst on day one",
        "Plan notice and move-out inspection before last month",
      ],
    },
    faq: {
      title: "FAQ themes",
      items: [
        "How contracts and deposits work in practice",
        "Inventory lists and move-in photos",
        "Utilities inclusion and setup",
        "Notice periods and move-out inspections",
      ],
    },
    sources: {
      title: "Official orientation",
      items: [
        "Government.nl — consumer housing information",
        "Huurcommissie — rent tribunal orientation",
        "Juridisch Loket — free legal information service",
        "Municipality websites — local registration and waste rules",
      ],
    },
    relatedGuides: {
      title: "Continue setup",
      items: [
        "Renting guide for search and viewings",
        "Housing costs for total monthly stack",
        "Utilities setup after key handover",
        "Address registration at gemeente",
      ],
    },
    exploreNext: {
      title: "Next steps",
      items: [
        "Deepen into full renting pillar guide",
        "Budget utilities and insurance before move-in",
        "Register address after receiving keys",
        "Compare temporary housing if timing is tight",
      ],
    },
  },
  intro: {
    heading: "What Should You Know Before Signing?",
    paragraphs: [
      "Dutch rental agreements set the rules for rent, deposits, maintenance, utilities and how you end the lease. For expats, the contract is often the first long-form Dutch document you sign after arrival — and misunderstandings about deposits, inventory or utilities are among the most common sources of stress.",
      "This guide explains rental contracts, security deposits, furnished vs unfurnished setups, inventory lists, move-in inspections, tenant and landlord responsibilities, rent changes and move-out preparation. It is practical orientation for newcomers — not legal advice and not a review of your specific lease.",
      "Use the checklists and timeline to prepare questions before signing, then connect to renting, housing costs, utilities, municipality services and registration guides for the rest of your relocation setup.",
    ],
  },
  quickAnswer: {
    summary:
      "Before signing a Dutch rental agreement, understand the contract type, deposit expectations, inventory documentation, utility arrangements, notice requirements and who handles maintenance.",
    bullets: [
      "Deposits are commonly one to two months rent — orientation only; read your lease.",
      "Inventory lists and move-in photos help at move-out deposit discussions.",
      "Utilities, internet and waste charges are often separate from headline rent.",
      "Notice periods and inspection steps vary by contract type — confirm dates in writing.",
    ],
    note: "Take time to review the full agreement and ask questions before transferring a deposit.",
  },
  snapshotSignals: [
    { label: "Deposits", value: "Common", note: "Often before key handover" },
    { label: "Inventory", value: "High value", note: "Signed lists + photos" },
    { label: "Utilities", value: "Often separate", note: "Confirm in contract" },
    { label: "Documentation", value: "Keep copies", note: "Emails and photos" },
  ],
  snapshotCards: [
    { title: "Deposits are common", body: "Landlords often request a security deposit before move-in — amount and return timing should be in your contract." },
    { title: "Contract terms vary", body: "Fixed-term, indefinite, student and corporate arrangements use different notice and renewal patterns." },
    { title: "Inventory lists matter", body: "Furniture, appliances and condition notes reduce disputes when you leave." },
    { title: "Inspections are important", body: "Walk through the property on day one and photograph existing wear." },
    { title: "Utilities may be separate", body: "Electricity, gas, water, internet and waste are frequently tenant responsibilities." },
    { title: "Documentation is valuable", body: "Save signed contracts, payment proofs, inventories and email confirmations." },
  ],
  snapshotMilestones: [
    { label: "Before viewing", value: "Budget stack", note: "Rent + deposit + utilities" },
    { label: "Before signing", value: "Read full lease", note: "Inventory and notice" },
    { label: "Move-in day", value: "Inspect + photo", note: "Meter readings" },
    { label: "Before exit", value: "Notice + inspection", note: "Utilities closed" },
  ],
  snapshotUseTips: [
    "Read the full huurcontract before transferring any borg deposit.",
    "Pair signed inventarisatielijst with dated move-in photos on day one.",
    "Confirm utilities, service costs and waste charges line by line in the lease.",
    "Keep PDFs, payment proofs and email trails in one shared folder.",
    "Revisit notice deadlines two months before your planned move-out date.",
  ],
  orientationFlowSteps: [
    "Read the full contract — rent, deposit, utilities, notice and maintenance clauses.",
    "Complete inventory and move-in photos before unpacking fully.",
    "Set up utilities, insurance and address registration after key handover.",
  ],
  expatQuestions: [
    {
      q: "How much deposit is usually required?",
      a: "Orientation: often one to two months rent, but amounts vary by landlord, agency and contract. Your lease should state the exact figure and payment timing — verify before transferring money.",
    },
    {
      q: "What is an inventory list?",
      a: "A document listing furniture, appliances and property condition at move-in. Sign when accurate and add photos of existing marks or damage.",
    },
    {
      q: "Should I take photos before moving in?",
      a: "Yes — dated photos of walls, floors, appliances and meters complement the inventory and help if condition is questioned later.",
    },
    {
      q: "Are utilities included in rent?",
      a: "Often not. Confirm electricity, gas, water, internet, service costs and waste charges in the contract before signing.",
    },
    {
      q: "Are utilities included in rent?",
      a: "Often not. Confirm electricity, gas, water, internet, service costs and waste charges in the contract before signing.",
    },
    {
      q: "What are servicekosten (service costs)?",
      a: "A separate monthly charge in many leases for shared building services — cleaning, maintenance or utilities in the building. Ask for a breakdown of what is included versus what you still pay directly.",
    },
    {
      q: "How much notice do I need to give when leaving?",
      a: "Your huurcontract states the notice period — often one calendar month for many private rentals, but fixed-term and student contracts differ. Give notice in the format required (email, registered letter) before the deadline.",
    },
  ],
  contractClauseRows: [
    {
      clause: "Monthly rent (huur)",
      whatToCheck: "Exact amount, payment date and bank account name",
      whyItMatters: "Avoid paying the wrong party or missing a due date",
    },
    {
      clause: "Service costs (servicekosten)",
      whatToCheck: "What building services are included in this line",
      whyItMatters: "Surprise monthly charges if not budgeted",
    },
    {
      clause: "Borg (security deposit)",
      whatToCheck: "Amount, payment timing and return conditions",
      whyItMatters: "Deposit disputes are common without clear terms",
    },
    {
      clause: "Notice period (opzegtermijn)",
      whatToCheck: "Calendar deadline and required notice format",
      whyItMatters: "Missing a deadline can extend your lease",
    },
    {
      clause: "Maintenance split",
      whatToCheck: "Small repairs tenant vs major repairs landlord",
      whyItMatters: "Clarifies who pays for appliances and fixtures",
    },
    {
      clause: "Registration (inschrijving)",
      whatToCheck: "Landlord permission for gemeente address registration",
      whyItMatters: "Needed for BSN, DigiD and many contracts",
    },
    {
      clause: "Pets, guests and subletting",
      whatToCheck: "Explicit permission if relevant to your situation",
      whyItMatters: "Verbal OK may not match written contract",
    },
  ] satisfies ClauseRow[],
  contractTypeComparison: [
    {
      type: "Fixed-term",
      typicalTerm: "6–24 months common for expats",
      noticeOrientation: "Early exit only if break clause allows",
    },
    {
      type: "Indefinite",
      typicalTerm: "No fixed end date",
      noticeOrientation: "Notice period applies to both parties",
    },
    {
      type: "Student housing",
      typicalTerm: "Academic year or semester",
      noticeOrientation: "Housing office rules may add requirements",
    },
    {
      type: "Temporary rental",
      typicalTerm: "Short stay with max duration",
      noticeOrientation: "Confirm inschrijving eligibility",
    },
    {
      type: "Corporate housing",
      typicalTerm: "Employer or agency contract",
      noticeOrientation: "Clarify your deposit and notice duties",
    },
    {
      type: "Shared room",
      typicalTerm: "Room in shared flat",
      noticeOrientation: "Confirm shared costs and housemate rules",
    },
  ] satisfies ContractTypeRow[],
  contractTypes: [
    { title: "Fixed-term contracts", body: "Set end date — common for initial expat leases. Notice rules for early exit should be explicit." },
    { title: "Indefinite contracts", body: "No fixed end date — notice periods apply when either party wants to end the lease." },
    { title: "Student housing agreements", body: "Often shorter terms with shared facilities — check room vs apartment rights." },
    { title: "Temporary rental arrangements", body: "Short stays or transitional housing — confirm maximum duration and registration eligibility." },
    { title: "Corporate housing", body: "Employer or relocation agency may hold the contract — clarify your responsibilities." },
    { title: "Shared accommodation", body: "Room in a shared flat — confirm which spaces, costs and notice rules apply to you." },
  ],
  depositBullets: [
    "Deposits aim to cover damage or unpaid charges beyond normal wear — not prepaid rent.",
    "Transfer only after reviewing the contract and confirming the recipient details.",
    "Pair deposit payment proof with signed inventory and inspection records.",
    "Return timelines and deductions are contract-specific — keep correspondence.",
    "Huurcommissie and Juridisch Loket offer orientation if disputes arise — not case advice here.",
  ],
  rentalScenarios: [
    {
      situation: "Fixed-term expat lease at €1,450/month",
      practice: "Borg often €1,450–€2,900 orientation",
      note: "Verify exact amount and return conditions in contract",
    },
    {
      situation: "Furnished studio in Amsterdam",
      practice: "Higher headline rent, lower upfront furniture spend",
      note: "Confirm which items are included on inventarisatielijst",
    },
    {
      situation: "Unfurnished family home",
      practice: "Lower rent band, €2,000–€8,000+ setup orientation",
      note: "Budget IKEA and appliances before signing",
    },
    {
      situation: "Shared room in flat",
      practice: "Clarify notice period and shared utility split",
      note: "Inventory may cover your room and shared areas separately",
    },
  ] satisfies RentalScenario[],
  furnishedComparison: [
    {
      factor: "Furniture",
      furnished: "Sofa, bed, table often included",
      semiFurnished: "Some large items; confirm list",
      unfurnished: "You supply all furniture",
    },
    {
      factor: "Flooring & lighting",
      furnished: "Usually complete",
      semiFurnished: "Floors/lights often present",
      unfurnished: "May need lamps and rugs",
    },
    {
      factor: "Appliances",
      furnished: "Often washer, fridge included",
      semiFurnished: "Verify kitchen white goods",
      unfurnished: "Sometimes kitchen only",
    },
    {
      factor: "Typical setup costs",
      furnished: "Lower upfront cash",
      semiFurnished: "Moderate IKEA spend",
      unfurnished: "€2,000–€8,000+ orientation",
    },
    {
      factor: "Monthly rent",
      furnished: "Higher headline rent",
      semiFurnished: "Mid-range",
      unfurnished: "Lower rent band",
    },
  ] satisfies ComparisonRow[],
  furnishedSetupBullets: [
    "Compare furnished headline rent against IKEA and appliance spend for your stay length.",
    "Ask which décor items belong to the landlord versus prior tenant leftovers.",
    "Check mattress, sofa and table condition line by line on inventarisatielijst.",
    "Unfurnished often includes built-in kitchen but not washer, lamps or curtains.",
    "Semi-furnished varies widely — never assume appliances without written confirmation.",
  ],
  inventoryExampleRows: [
    { item: "Sofa — living room", condition: "Good, minor arm mark", note: "Note on inventarisatielijst before signing" },
    { item: "Bosch washing machine", condition: "Working", note: "Record model number; test on move-in day" },
    { item: "Kitchen countertop", condition: "Small stain noted", note: "Photograph before signing list" },
    { item: "Bedroom window latch", condition: "Secure", note: "Check locks, seals and condensation" },
    { item: "Electricity meter", condition: "Reading 18,452", note: "Photo with date visible on move-in" },
  ] satisfies InventoryExampleRow[],
  inventoryBullets: [
    "List every item the landlord claims is included — not just furniture.",
    "Note scratches, stains and appliance model numbers where relevant.",
    "Sign only when the list matches what you see on walkthrough.",
    "Email corrections if the landlord updates items during your stay.",
  ],
  inspectionChecklist: [
    "Walls — marks, holes, damp patches",
    "Floors — scratches, stains, loose tiles",
    "Windows — seals, locks, condensation",
    "Kitchen — appliances, cabinets, sink",
    "Bathrooms — leaks, grout, ventilation",
    "Heating — radiators, thermostat, meter readings",
    "Furniture — condition per inventory",
    "Outdoor — garden, shed, parking space",
  ],
  inspectionDetailRows: [
    { task: "Walk every room", timing: "Move-in day", detail: "Before unpacking; note walls, floors and doors in every space." },
    { task: "Record meter readings", timing: "Move-in day", detail: "Photograph electricity, gas and water dials with date visible." },
    { task: "Test appliances", timing: "Move-in day", detail: "Briefly run oven, washer, heating and ventilation." },
    { task: "Sign inventarisatielijst", timing: "Move-in day", detail: "Correct the list before signing if items or marks are missing." },
    { task: "Photograph existing damage", timing: "Move-in day", detail: "Date-stamp photos of scratches, stains and wear." },
    { task: "Email landlord issues", timing: "Within 48 hours", detail: "Send photos and request written confirmation of receipt." },
    { task: "Mirror at move-out", timing: "Last week", detail: "Repeat same rooms and meters for deposit discussions." },
  ] satisfies TaskDetailRow[],
  utilityRows: [
    { item: "Electricity", range: "Usually tenant contract", note: "Record meter reading at move-in" },
    { item: "Gas / heating", range: "Often tenant", note: "District heating may differ" },
    { item: "Water", range: "Varies", note: "Sometimes via landlord" },
    { item: "Internet & mobile", range: "Usually tenant", note: "Setup before work-from-home" },
    { item: "Waste / gemeente", range: "Varies", note: "Check lease and gemeente" },
  ],
  serviceCostBullets: [
    "Servicekosten are separate from headline rent in many Dutch leases.",
    "Ask what the monthly service charge covers — cleaning, garden, shared heating?",
    "Compare total rent plus servicekosten when comparing listings.",
    "Request annual settlement statements if advance charges apply.",
  ],
  tenantLandlordSplit: [
    { topic: "Day-to-day cleaning", tenant: "Tenant upkeep between visits", landlord: "Not routine tenant mess at move-out" },
    { topic: "Heating failure (winter)", tenant: "Report promptly", landlord: "Urgent repair typically landlord-side" },
    { topic: "Washer or fridge stops", tenant: "Report and stop using", landlord: "Depends on contract — check inventarisatielijst" },
    { topic: "Leaking roof or facade", tenant: "Report immediately", landlord: "Structural repair landlord-side" },
    { topic: "Interior wall damage", tenant: "Document pre-existing marks", landlord: "New damage may affect borg return" },
    { topic: "Utility contracts", tenant: "Usually tenant arranges", landlord: "Only if lease bundles utilities" },
    { topic: "Inventarisatielijst", tenant: "Sign and photograph", landlord: "Provide and update when items change" },
  ] satisfies SplitRow[],
  tenantResponsibilityCards: [
    { title: "Property care", body: "Keep the home clean and report issues before they worsen." },
    { title: "Reporting issues", body: "Notify landlord promptly for leaks, heating failure or security problems." },
    { title: "Utility management", body: "Pay agreed utilities and transfer accounts when moving in or out." },
    { title: "Neighbourhood rules", body: "Follow building quiet hours, waste sorting and gemeente parking rules." },
    { title: "Contract compliance", body: "Respect guest, pet and subletting clauses if listed." },
  ],
  landlordResponsibilityCards: [
    { title: "Property maintenance", body: "Major repairs to structure and building systems as defined in law and contract." },
    { title: "Major repairs", body: "Roof, central heating breakdowns and structural issues typically landlord-side." },
    { title: "Building systems", body: "Shared building elements in apartments may involve VvE or landlord." },
    { title: "Documentation", body: "Provide lease, inventory and required receipts where applicable." },
  ],
  landlordReportBullets: [
    "Central heating failure — report immediately, especially in winter months.",
    "Water leaks from ceilings or walls — photograph damage and email the same day.",
    "Broken locks or windows — treat security issues as urgent landlord reports.",
    "Appliances on inventarisatielijst — reference the list when reporting faults.",
  ],
  rentIncreaseBullets: [
    "Rent adjustment rules depend on property sector and contract clauses.",
    "Some contracts reference annual indexation — read the exact formula in your lease.",
    "Government.nl and Huurcommissie publish orientation on rent increases.",
    "Challenge or question increases through official channels if unsure — not legal advice here.",
  ],
  rentIncreaseOrientationRows: [
    { situation: "Annual indexation clause", practice: "Read formula in huurcontract", note: "Compare letter to contract terms" },
    { situation: "Free-sector rental", practice: "Rules differ from social housing", note: "Check Huurcommissie orientation" },
    { situation: "Mid-contract increase letter", practice: "Verify date and calculation shown", note: "Keep all correspondence" },
    { situation: "Verbal promise of fixed rent", practice: "Written contract overrides", note: "Ask for amendment in writing" },
  ] satisfies RentalScenario[],
  endingLeaseBullets: [
    "Give notice per contract — email plus registered letter may be required.",
    "Schedule move-out inspection when offered and attend if possible.",
    "Clean to contract standard and remove all personal belongings.",
    "Discuss deposit return timeline and preferred payment method in writing.",
  ],
  endingLeaseScenarios: [
    {
      situation: "Fixed-term end date approaching",
      practice: "Submit notice if contract requires before end",
      note: "Auto-renewal clauses vary — read your lease",
    },
    {
      situation: "Early exit mid fixed-term",
      practice: "Check break penalty or substitute tenant clause",
      note: "Written agreement may still be required",
    },
    {
      situation: "Indefinite lease — tenant leaves",
      practice: "Give full notice period in required format",
      note: "Calendar month deadlines are common",
    },
    {
      situation: "Landlord sells the property",
      practice: "Your notice rules still follow your contract",
      note: "New owner may continue existing lease terms",
    },
  ] satisfies RentalScenario[],
  moveOutChecklist: [
    "Review contract notice and cleaning expectations",
    "Schedule move-out inspection",
    "Clean property to agreed standard",
    "Remove personal belongings and storage items",
    "Document property condition with photos",
    "Return all keys and access cards",
    "Close or transfer utility accounts",
    "Retain correspondence about deposit return",
  ],
  moveOutDetailRows: [
    { task: "Give notice", timing: "Per contract deadline", detail: "Email plus registered letter if required." },
    { task: "Book move-out inspection", timing: "2–4 weeks before exit", detail: "Attend if landlord offers a walkthrough." },
    { task: "Deep clean property", timing: "Week before exit", detail: "Match cleaning standard stated in lease." },
    { task: "Document final condition", timing: "Day before exit", detail: "Photos mirroring move-in shots." },
    { task: "Return keys", timing: "Handover day", detail: "Get written confirmation of key return." },
    { task: "Close utilities", timing: "Day after handover", detail: "Avoid overlap bills with next tenant." },
    { task: "Follow up on borg", timing: "After handover", detail: "Reference move-in files in writing." },
  ] satisfies TaskDetailRow[],
  mistakeCards: [
    { title: "Not reading the contract", body: "Every clause matters — especially utilities, pets and notice." },
    { title: "Missing inventory details", body: "Unsigned or incomplete lists weaken your position at move-out." },
    { title: "Not photographing the property", body: "Pre-existing damage is hard to prove months later." },
    { title: "Ignoring utility arrangements", body: "Surprise bills if gas or internet were never discussed." },
    { title: "Assuming furniture is included", body: "Confirm furnished status line by line." },
    { title: "Not understanding notice requirements", body: "Missing a notice deadline can extend your lease unexpectedly." },
    { title: "Losing documentation", body: "Keep PDFs, photos and payment proofs in one folder." },
    { title: "Not asking questions before signing", body: "Clarify ambiguities while the landlord is still responsive." },
  ],
  mistakeFixRows: [
    { mistake: "Not reading the contract", fix: "Read every clause — utilities, pets, notice and indexation — before paying borg." },
    { mistake: "Missing inventory details", fix: "Walk through inventarisatielijst line by line and sign only when accurate." },
    { mistake: "Not photographing the property", fix: "Date-stamp photos of walls, floors, appliances and meters on move-in day." },
    { mistake: "Ignoring utility arrangements", fix: "Confirm who contracts electricity, gas, water, internet and waste in writing." },
    { mistake: "Assuming furniture is included", fix: "Match furnished status to inventarisatielijst — not the listing headline alone." },
    { mistake: "Not understanding notice requirements", fix: "Calendar notice deadline and required notice channel (email, letter)." },
    { mistake: "Losing documentation", fix: "Store lease PDFs, borg proof and inspection emails in one shared folder." },
    { mistake: "Not asking questions before signing", fix: "Email clarifications and keep replies with your signed contract file." },
  ] satisfies MistakeFixRow[],
  documentsChecklist: [
    "Read entire agreement including appendices",
    "Confirm monthly rent and payment date",
    "Confirm deposit amount and return conditions",
    "Understand utilities and service costs",
    "Review inventory list line by line",
    "Understand notice period for ending lease",
    "Save copies of all signed documents",
    "Clarify questions before signing or paying deposit",
  ],
  signingRedFlags: [
    "Pressure to pay borg before you receive the full huurcontract",
    "No inventarisatielijst offered at key handover",
    "Utilities described as included but no line item in lease",
    "Verbal promises that contradict written contract text",
    "Landlord unwilling to discuss gemeente inschrijving registration",
    "Deposit requested to personal account without company details",
  ],
  rentalTimeline: [
    { phase: "Search property", detail: "Budget total stack — rent, deposit, utilities and commute." },
    { phase: "Apply", detail: "Prepare ID, employment proof and references." },
    { phase: "Review contract", detail: "Read full lease; do not rush deposit transfer." },
    { phase: "Pay deposit", detail: "Only after contract review; keep payment proof." },
    { phase: "Move-in inspection", detail: "Walkthrough, inventory sign-off and photos." },
    { phase: "Move in", detail: "Register utilities, insurance and address where eligible." },
    { phase: "Manage utilities", detail: "Track bills and meter readings during tenancy." },
    { phase: "Move-out inspection", detail: "Document condition; discuss deposit in writing." },
  ] satisfies TimelineStep[],
  faq: [
    {
      q: "How do rental contracts work in the Netherlands?",
      a: "A rental agreement sets rent, duration, maintenance split, notice rules and permitted use. Contract type (fixed-term vs indefinite) affects flexibility. Read the full document before signing — this guide is orientation only.",
    },
    {
      q: "How much deposit is usually required?",
      a: "Orientation: often one to two months rent, but amounts vary. Your contract should state the figure, payment method and conditions for return. Never pay without verifying recipient details.",
    },
    {
      q: "What is an inventory list?",
      a: "A record of furniture, appliances and property condition at move-in. Sign when accurate and supplement with dated photographs.",
    },
    {
      q: "Should I take photos before moving in?",
      a: "Yes. Photograph walls, floors, appliances and meter readings on day one. Store images with dates alongside the signed inventory.",
    },
    {
      q: "Are utilities included in rent?",
      a: "Often not. Electricity, gas, water, internet and waste may be separate. The lease should state who arranges and pays each service.",
    },
    {
      q: "What happens when I move out?",
      a: "Follow notice rules, clean to contract standard, attend inspection if offered, return keys and close utilities. Deposit discussions should reference move-in documentation.",
    },
    {
      q: "What should I review before signing?",
      a: "Rent, deposit, utilities, maintenance duties, notice periods, inventory, pets, guests and indexation clauses. Ask questions before paying.",
    },
    {
      q: "How do inspections work?",
      a: "Move-in inspections document condition; move-out inspections compare against inventory and photos. Attend when possible and keep copies of any reports.",
    },
  ],
  officialSources: [
    {
      label: "Government.nl",
      href: "https://www.government.nl/",
      description: "Official Dutch government portal — housing and consumer orientation.",
    },
    {
      label: "Huurcommissie",
      href: "https://www.huurcommissie.nl/",
      description: "Rent Tribunal — information on rent disputes and sector rules.",
    },
    {
      label: "Juridisch Loket",
      href: "https://www.juridischloket.nl/",
      description: "Free legal information service for residents in the Netherlands.",
    },
  ],
  sourcesDisclaimer:
    "Rental regulations and housing requirements may change over time. Always verify information through official resources and your specific agreement.",
  sourceUsageTips: [
    "Use Government.nl for general consumer housing orientation.",
    "Huurcommissie handles rent-related disputes — check eligibility before filing.",
    "Juridisch Loket offers free information — not representation in this guide.",
    "Your municipality website covers registration, waste and local permits.",
  ],
  relatedGuides: [
    { label: "Renting in the Netherlands", href: RENTING_NETHERLANDS_PATH, description: "Search, viewings and tenant orientation.", status: "comingSoon" },
    { label: "Housing costs", href: HOUSING_COSTS_NETHERLANDS_PATH, description: "Rent, utilities and city comparisons.", status: "live" },
    { label: "Housing hub", href: HOUSING_HUB_PATH, description: "Central housing pillar for expats.", status: "live" },
    { label: "Utilities", href: UTILITIES_NETHERLANDS_PATH, description: "Energy, water and internet setup.", status: "live" },
    { label: "Registering your address", href: REGISTERING_YOUR_ADDRESS_NETHERLANDS_PATH, description: "Gemeente registration after move-in.", status: "live" },
    { label: "Insurance providers", href: INSURANCE_PROVIDERS_NETHERLANDS_PATH, description: "Contents and liability cover.", status: "live" },
    { label: "Municipality services", href: MUNICIPALITY_SERVICES_NETHERLANDS_PATH, description: "Local taxes, waste and permits.", status: "live" },
    { label: "Moving to the Netherlands", href: MOVING_TO_NETHERLANDS_PATH, description: "Relocation planning hub.", status: "live" },
  ] satisfies RentalGuideLink[],
  exploreNextCards: [
    { label: "Renting guide", href: RENTING_NETHERLANDS_PATH, description: "Full rental pillar for expats.", status: "comingSoon" },
    { label: "Housing costs", href: HOUSING_COSTS_NETHERLANDS_PATH, description: "Budget total monthly stack.", status: "live" },
    { label: "Utilities guide", href: UTILITIES_NETHERLANDS_PATH, description: "Set up after key handover.", status: "live" },
    { label: "Address registration", href: REGISTERING_YOUR_ADDRESS_NETHERLANDS_PATH, description: "Gemeente appointment steps.", status: "live" },
    { label: "Insurance providers", href: INSURANCE_PROVIDERS_NETHERLANDS_PATH, description: "Contents insurance orientation.", status: "live" },
  ] satisfies RentalGuideLink[],
  exploreNextTips: [
    "Do not transfer deposit until the contract and inventory are reviewed.",
    "Photograph meter readings on move-in and move-out days.",
    "Register your address at the gemeente when your lease allows inschrijving.",
    "Compare temporary accommodation if your contract start date shifts.",
  ],
  howToSchema: {
    name: "Move-in inspection checklist for Dutch rentals",
    description:
      "Practical steps to document property condition when moving into a rental in the Netherlands.",
    steps: [
      { name: "Walk through every room", text: "Check walls, floors, windows and doors before unpacking." },
      { name: "Record meter readings", text: "Photograph electricity, gas and water meters on arrival." },
      { name: "Test appliances", text: "Run kitchen and bathroom fixtures; note faults immediately." },
      { name: "Sign inventory accurately", text: "Correct the inventory list before signing if items or marks are missing." },
      { name: "Photograph existing damage", text: "Take dated photos of scratches, stains and wear." },
      { name: "Report issues in writing", text: "Email the landlord with photos and request confirmation." },
    ],
  },
};
