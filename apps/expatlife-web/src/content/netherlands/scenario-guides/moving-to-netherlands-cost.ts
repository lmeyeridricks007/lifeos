import type { ScenarioGuideContent } from "@/src/lib/scenario-guides/types";

export const movingToNetherlandsCost: ScenarioGuideContent = {
  slug: "moving-to-netherlands-cost",
  path: "/netherlands/moving-to-netherlands-cost/",
  seo: {
    title: "Cost of Moving to the Netherlands: What Expats Usually Need to Budget For",
    description:
      "What does it cost to move to the Netherlands? Budget for travel, documents, housing, shipping, and first-month setup. See typical cost areas and how to plan.",
    canonicalPath: "/netherlands/moving-to-netherlands-cost/",
  },
  h1: "Cost of Moving to the Netherlands",
  eyebrow: "Planning guide",
  intro: [
    "Moving to the Netherlands involves several cost areas: getting there, documents and visas, housing, shipping, and your first weeks of setup. Exact amounts depend on your origin, household size, and choices—this page outlines what to budget for and where costs often vary.",
    "We do not give specific price figures unless we have a vetted source; instead we focus on the categories that expats commonly need to plan for and how they tend to vary.",
  ],
  quickAnswer:
    "Costs typically include travel, visa/document preparation (apostilles, translations), temporary and first rental (deposit + rent), shipping or luggage, and first-month setup (transport, SIM, groceries, basics). Amounts vary widely by distance, household size, and city. Budget for an emergency buffer and confirm exact requirements with official sources.",
  dependsOn: [
    "Distance and how you travel (flights, train, car).",
    "Whether you need visas, apostilles, or translations.",
    "Household size and type of housing.",
    "Whether you ship goods or travel light.",
    "City and area (rent and deposits vary).",
  ],
  sections: [
    {
      id: "main-cost-categories",
      title: "Main cost categories to plan for",
      body: [
        "Flights and travel: one-way or relocation trips; cost depends on origin, timing, and luggage.",
        "Documents and visas: certificates, apostilles, translations, and any visa or permit fees. Non-EU moves often have higher document and application costs.",
        "Housing: deposit (often one to three months’ rent), first month’s rent, and possibly temporary accommodation before you secure a long-term place.",
        "Shipping and luggage: moving boxes, excess baggage, or international movers—high variability.",
        "First month setup: local transport, SIM, groceries, basic household items, and any one-off admin or setup fees.",
      ],
      bullets: [
        "Flights / travel",
        "Visa / document / apostille / translation",
        "Temporary housing",
        "Deposit and first rent",
        "Luggage / shipping",
        "First month living costs",
        "Transport / mobile / setup",
        "Emergency buffer",
      ],
      cta: { label: "Moving checklist", href: "/netherlands/moving-checklist-netherlands/" },
    },
    {
      id: "what-people-underestimate",
      title: "What people often underestimate",
      body: [
        "Deposits and advance rent can be two or three months’ rent; some landlords also ask for proof of income or a higher deposit for newcomers.",
        "Document legalisation and translations can take weeks and add up, especially if you need several certificates. Booking municipality and other appointments in advance can avoid last-minute costs or delays.",
      ],
      scenarios: [
        {
          title: "Solo EU move",
          body: "Typically lower document and visa costs; focus on travel, deposit, first rent, and first-month setup. A small buffer helps if registration or banking takes longer.",
        },
        {
          title: "Solo non-EU move",
          body: "Add visa/permit fees, possible apostilles and translations, and sometimes proof of funds. Timeline and cost both tend to be higher than for EU nationals.",
        },
        {
          title: "Family move",
          body: "Multiply travel and document costs, larger housing deposit and rent, and often more shipping. School and childcare may add to initial setup—see our family moving guide.",
        },
      ],
      cta: { label: "Moving with family", href: "/netherlands/moving-to-netherlands-with-family/" },
    },
    {
      id: "ways-to-reduce-costs",
      title: "Ways to reduce or manage costs",
      body: [
        "Start document preparation early to avoid rush fees. Compare temporary housing and check whether it allows registration. Use the Document Readiness and Moving Checklist tools to see what you need and when.",
      ],
      bullets: [
        "Book registration and essential appointments as soon as you know your address.",
        "Compare temporary housing and confirm registration eligibility.",
        "Use a checklist so you do not miss steps or pay for avoidable delays.",
      ],
    },
  ],
  comparisonTable: {
    caption: "Typical cost areas and variability.",
    headers: ["Cost area", "What it includes", "Typical variability"],
    rows: [
      ["Flights", "One-way or relocation travel", "Medium–high"],
      ["Documents", "Certificates / translations / apostille", "Medium"],
      ["Housing", "Deposit / first rent / temporary stay", "High"],
      ["Shipping", "Luggage / boxes / movers", "High"],
      ["First month setup", "Transport / SIM / groceries / basics", "Medium"],
    ],
  },
  checklist: [
    { label: "Estimate visa and document costs for your route.", href: "/netherlands/visa-cost-calculator/" },
    { label: "List all document and visa-related costs for your route." },
    { label: "Budget for deposit and at least first month’s rent.", href: "/netherlands/moving-to-the-netherlands/" },
    { label: "Plan travel and luggage or shipping.", href: "/netherlands/moving/tools/moving-checklist/" },
    { label: "Include a buffer for first-month setup and delays." },
    { label: "Use the First 90 Days planner to sequence post-arrival steps.", href: "/netherlands/moving/tools/first-90-days/" },
  ],
  mistakes: [
    {
      title: "Ignoring deposit and advance rent",
      body: "Many rentals require one to three months’ deposit plus the first month. Budget for the full amount before you sign.",
    },
    {
      title: "Leaving documents to the last minute",
      body: "Apostilles and translations can take weeks. Late applications may mean rush fees or missed deadlines.",
    },
  ],
  faq: [
    {
      q: "How much money do I need to move to the Netherlands?",
      a: "There is no single number; it depends on your route, household, and city. Plan for travel, documents, deposit and first rent, first-month living costs, and a buffer. Use the Moving Checklist and Document Readiness tools to list what applies to you.",
    },
    {
      q: "What are the main cost categories when relocating?",
      a: "Common categories are: travel, visa/document preparation, temporary and first housing (deposit + rent), shipping or luggage, and first-month setup (transport, SIM, groceries, basics). We describe these in more detail on this page.",
    },
    {
      q: "Do costs differ for EU vs non-EU moves?",
      a: "Often yes. Non-EU moves usually involve visa/permit fees and more document preparation (apostilles, translations). Housing and first-month costs depend on household and city rather than nationality.",
    },
  ],
  relatedGuides: [
    { label: "Moving to the Netherlands", href: "/netherlands/moving-to-the-netherlands/", description: "Timeline and full guide" },
    { label: "Documents needed", href: "/netherlands/documents-needed-to-move-netherlands/", description: "What to prepare" },
    { label: "Moving timeline", href: "/netherlands/moving-to-netherlands-timeline/", description: "When things happen" },
    { label: "First 90 days", href: "/netherlands/first-90-days-netherlands/", description: "After arrival" },
  ],
  relatedTools: ["moving-checklist", "document-readiness", "first-90-days"],
  relatedServices: [
    { name: "Wise", description: "Multi-currency and international transfers can help with moving funds and early expenses." },
    { name: "Temporary housing", description: "Short-term rentals; compare options and confirm whether you can register your address." },
  ],
};
