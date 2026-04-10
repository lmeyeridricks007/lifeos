export const CITY_COMPARISON_CANONICAL = "/netherlands/tools/city-comparison/";
export const NL_BASE = "/netherlands";

/** Short crawlable lead for “at a glance” (natural-language intents, no keyword stuffing). */
export const CITY_COMPARISON_SEO_LEAD =
  "If you are comparing the best city in the Netherlands for expats, international workers, or families, the honest answer is that it depends on office location, budget, schools, and pace. This page explains those trade-offs in plain language — then the calculator ranks Amsterdam vs Utrecht, Rotterdam vs The Hague, Eindhoven vs Utrecht, and other Dutch cities using the same monthly cost anchors as our cost-of-living tool, plus directional commute and lifestyle heuristics. It is planning guidance only: not live rental quotes, not tax or legal advice, and not an objective “best city” score for everyone.";

export const CITY_COMPARISON_TOC = [
  { id: "at-a-glance", label: "At a glance" },
  { id: "before-you-start", label: "Before you start" },
  { id: "tool-inputs", label: "Calculator" },
  { id: "tool-results", label: "Results" },
  { id: "best-match", label: "Best match" },
  { id: "comparison-table", label: "Comparison table" },
  { id: "tradeoffs", label: "Trade-off insights" },
  { id: "cost-breakdown", label: "Cost breakdown" },
  { id: "commute-view", label: "Commute view" },
  { id: "what-would-change", label: "What would change" },
  { id: "recommended-decision", label: "Recommended decision" },
  { id: "scenario-compare", label: "Scenario comparison" },
  { id: "download-summary", label: "Export / share" },
  { id: "recommended-services", label: "Recommended services" },
  { id: "how-the-tool-works", label: "Methodology" },
  { id: "city-comparison-guides", label: "Comparison guides" },
  { id: "example-scenarios", label: "Worked examples" },
  { id: "related-guides", label: "Related guides" },
  { id: "faq", label: "FAQ" },
  { id: "official-sources", label: "Official sources" },
] as const;

export const CITY_COMPARISON_QUICK_LINKS = [
  { label: "Start comparing", href: "#tool-inputs" },
  { label: "Comparison guides", href: "#city-comparison-guides" },
  { label: "Methodology", href: "#how-the-tool-works" },
  { label: "Worked examples", href: "#example-scenarios" },
  { label: "Export / share", href: "#download-summary" },
  { label: "Recommended services", href: "#recommended-services" },
] as const;

export const CITY_COMPARISON_RELATED_TOOLS = [
  { href: `${NL_BASE}/money/tools/cost-of-living-calculator/`, label: "Cost of living calculator →" },
  { href: `${NL_BASE}/housing/tools/rent-affordability-calculator/`, label: "Rent affordability calculator →" },
  { href: `${NL_BASE}/taxes/tools/dutch-salary-net-calculator/`, label: "Dutch salary net calculator →" },
  { href: `${NL_BASE}/taxes/tools/30-ruling-calculator/`, label: "30% ruling calculator →" },
  { href: `${NL_BASE}/work/tools/payslip-decoder/`, label: "Payslip decoder →" },
  { href: `${NL_BASE}/taxes/tools/double-tax-awareness-tool/`, label: "Double tax awareness tool →" },
] as const;

export const CITY_COMPARISON_RELATED_GUIDES = [
  {
    href: `${NL_BASE}/living/survival-guide/`,
    title: "Netherlands Survival Guide",
    description: "Daily-life basics after you pick a city: transport, apps, payments, and weather.",
  },
  {
    href: `${NL_BASE}/moving-to-the-netherlands/`,
    title: "Moving to the Netherlands",
    description: "Visas, first steps, and settling in — start here if the Netherlands is new.",
  },
  {
    href: `${NL_BASE}/cities/`,
    title: "Dutch cities hub",
    description: "City-by-city orientation pages across the Netherlands.",
  },
  {
    href: `${NL_BASE}/amsterdam/`,
    title: "Amsterdam expat hub",
    description: "Housing, transport, and local context when Amsterdam is on your list.",
  },
  {
    href: `${NL_BASE}/rotterdam/`,
    title: "Rotterdam expat hub",
    description: "Port city energy, neighborhoods, and practical setup notes.",
  },
  {
    href: `${NL_BASE}/utrecht/`,
    title: "Utrecht expat hub",
    description: "Central Netherlands connectivity and family-friendly narratives.",
  },
  {
    href: `${NL_BASE}/the-hague/`,
    title: "The Hague expat hub",
    description: "Institutions, coast proximity, and international-school-heavy stories.",
  },
  {
    href: `${NL_BASE}/eindhoven/`,
    title: "Eindhoven expat hub",
    description: "Tech and manufacturing depth in Brainport — compare to Randstad cores.",
  },
  {
    href: `${NL_BASE}/groningen/`,
    title: "Groningen expat hub",
    description: "Northern city — often lower rent anchors in planning models, farther from Randstad offices.",
  },
] as const;

export const CITY_COMPARISON_FAQ = [
  {
    id: "which-city-best-expats",
    question: "Which city in the Netherlands is best for expats?",
    answer:
      "There is no single best city for all expats. The right choice depends on where you work, your household, your monthly budget, and how you want to live day to day. This tool ranks a shortlist you choose (two to four cities) using shared cost-of-living anchors, commute practicality labels, and editorial city profiles — so you can see trade-offs in one place. Treat the output as directional planning fit, not a universal ranking or market truth.",
  },
  {
    id: "best-international-workers",
    question: "Which Dutch city is best for international workers?",
    answer:
      "Amsterdam, Rotterdam, Utrecht, and The Hague usually lead conversations about English-friendly services and employer depth, but Eindhoven is strong for many tech and manufacturing roles. “Best” still depends on your office, salary after tax, and commute tolerance. Pair this comparison with our Dutch salary net calculator and payslip decoder when you are validating take-home pay.",
  },
  {
    id: "amsterdam-worth-extra-rent",
    question: "Is Amsterdam worth the extra rent?",
    answer:
      "Sometimes yes: stronger international hiring narratives, nightlife, and services density. Sometimes no: tighter housing competition and higher rent pressure in our planning model. Use the affordability band and monthly outflow table to see whether your entered net salary leaves enough slack for your lifestyle tier — then confirm against real listings and viewing reality.",
  },
  {
    id: "utrecht-cheaper-amsterdam",
    question: "Is Utrecht cheaper than Amsterdam?",
    answer:
      "In ExpatCopilot’s planning model Utrecht is usually still expensive versus smaller cities, and not automatically “cheap” versus Amsterdam — both can show tight affordability at moderate net salaries. The calculator makes the gap visible in euros for your exact household toggles. Always verify with live rent listings; this tool does not scrape Funda or agents.",
  },
  {
    id: "rotterdam-good-expats",
    question: "Is Rotterdam a good city for expats?",
    answer:
      "Many expats thrive in Rotterdam: large international community, major employers, and strong urban energy. Trade-offs can include housing search effort and how your commute story looks if your office is elsewhere in the Randstad. Compare Rotterdam directly with The Hague or Utrecht in the tool and read the Rotterdam city hub for local texture.",
  },
  {
    id: "hague-better-families",
    question: "Is The Hague better for families?",
    answer:
      "The Hague often scores well on family- and schools-oriented planning heuristics in this model, especially when international education and institutions matter — but “better” is not universal. Utrecht, Haarlem, Amstelveen, and other cities can match or beat it depending on commute, budget, and school path. Use family priority sliders and verify schools and waitlists with official municipal and school sources.",
  },
  {
    id: "cheapest-city-expats",
    question: "What is the cheapest city in the Netherlands for expats?",
    answer:
      "In broad planning terms, smaller cores and cities like Groningen often show lower modelled monthly outflow than Amsterdam — but cheapest rent is meaningless if your job is a long commute away. The tool highlights euros and commute practicality together so you do not optimize budget in isolation.",
  },
  {
    id: "best-remote-workers",
    question: "Which Dutch city is best for remote workers?",
    answer:
      "If you are fully remote, commute weighting drops in the model, so lower-rent cities can climb the ranking while you keep lifestyle sliders honest. You still need registration, banking, and insurance wherever you live — use the cities hub and relocation guides for setup order. The tool does not know your visa or employer remote policy.",
  },
  {
    id: "commute-amsterdam-other-city",
    question: "Can I commute into Amsterdam from another city?",
    answer:
      "Yes — Utrecht, Haarlem, Amstelveen, Leiden, and many towns are common in real life. This tool uses deterministic city-pair commute classes (excellent → poor) for planning, not live NS timetables. Before you lease, check door-to-door time on NS or 9292 and test peak-hour reality.",
  },
  {
    id: "live-rental-listings",
    question: "Does this tool use live rental listings?",
    answer:
      "No. Rent lines reuse the same editorial mid-bands as our Netherlands cost-of-living calculator — useful for comparing cities on a consistent basis, not for quoting what you will pay next month on Funda or Pararius.",
  },
  {
    id: "includes-taxes",
    question: "Does this tool include taxes?",
    answer:
      "You enter monthly net salary as a planning input. The model does not run full Dutch payroll or Belastingdienst logic. Gross salary is optional context only. For tax detail use the Dutch salary net calculator, 30% ruling calculator, and professional tax advice when decisions matter.",
  },
  {
    id: "childcare-schools-detail",
    question: "Does this tool include childcare and schools?",
    answer:
      "Optional childcare and family lines follow the cost-of-living engine when you enable family effects and have children in the household. International schooling remains a coarse placeholder band, not a fee schedule from any school. Admissions, waitlists, and tax credits need official school and municipality sources.",
  },
  {
    id: "exact-neighborhood",
    question: "Can this tool tell me exactly where to live?",
    answer:
      "No. It compares whole cities (plus commuter-belt proxies) at a planning level. Neighborhood choice needs local listings, safety preferences, school catchments, and transport testing — none of which this aggregate model resolves.",
  },
  {
    id: "utrecht-vs-amsterdam-family-note",
    question: "Is Utrecht better than Amsterdam for families?",
    answer:
      "Many families like Utrecht’s scale and train hub, while others prefer Amsterdam’s service depth. Rent competition exists in both. Use family priority sliders here, then validate schools and commute with live data — the FAQ on Utrecht vs Amsterdam in the comparison guides section summarizes typical planning angles.",
  },
  {
    id: "compare-more-than-two",
    question: "Can I compare more than two cities?",
    answer:
      "Yes. Pick two, three, or four cities. Rankings, tables, and exports update deterministically from your inputs — same formula every time, no machine learning.",
  },
] as const;

export const CITY_COMPARISON_OFFICIAL_SOURCES = [
  {
    label: "CBS — Statistics Netherlands",
    href: "https://www.cbs.nl/en-gb/",
    note: "National statistics — useful context; not a source for this tool’s euro bands.",
  },
  {
    label: "Government.nl — Cost of living (orientation)",
    href: "https://www.government.nl/topics/asylum-migration-and-integration/immigration/dutch-society/cost-of-living",
    note: "High-level public information, not personalized budgets.",
  },
  {
    label: "Belastingdienst — Tax topics (orientation)",
    href: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontenten/belastingdienst/individuals/",
    note: "Authoritative for tax rules; this tool does not replicate payroll calculations.",
  },
  {
    label: "NS — Journey planner",
    href: "https://www.ns.nl/en/journey-advice",
    note: "Live train journeys — use alongside our city-pair commute labels.",
  },
  {
    label: "9292 — Door-to-door public transport",
    href: "https://9292.nl/en",
    note: "Multimodal planning (train, bus, tram, metro) for real commutes.",
  },
  {
    label: "Study in Holland — Living costs (indicative)",
    href: "https://www.studyinholland.nl/finances/cost-of-living",
    note: "Indicative student-oriented ranges; methodology differs from this tool.",
  },
] as const;

export const CITY_COMPARISON_WORKED_EXAMPLES = [
  {
    title: "Single professional: Amsterdam vs Utrecht (hybrid to Amsterdam office)",
    body:
      "Set office city to Amsterdam, hybrid work, and compare Amsterdam with Utrecht. Utrecht often gains on commute practicality while Amsterdam leads on nightlife and career-depth proxies in the editorial layer. Raising budget sensitivity usually punishes higher rent anchors unless net salary is strong. Cross-check with the rent affordability calculator for landlord-facing budgets.",
  },
  {
    title: "Couple: Rotterdam vs The Hague",
    body:
      "Similar monthly bands can appear in the model, but Rotterdam typically scores higher on nightlife energy while The Hague leans toward institutions and family-oriented heuristics. Toggle family-first vs lifestyle-first scenario lenses to see how weights reshuffle — then read each city hub for neighborhood reality.",
  },
  {
    title: "Family: Utrecht vs Eindhoven vs The Hague",
    body:
      "Enable children and family effects, then raise family-school importance. Utrecht and The Hague often rise on connectivity and schools proxies; Eindhoven can win on modelled monthly outflow and tech employers. This is still not a school admissions tool — confirm international schools separately.",
  },
  {
    title: "Remote worker: Amsterdam vs Groningen vs Leiden",
    body:
      "Select remote work so commute is down-weighted. Lower rent anchors in Groningen can improve ranking versus Amsterdam while Amsterdam keeps higher lifestyle energy scores. Leiden offers a middle path in many planning conversations — validate registration and social rhythm for your own case.",
  },
] as const;
