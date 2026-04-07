export const RENT_AFFORDABILITY_FAQ_ITEMS = [
  {
    id: "how-much-rent",
    question: "How much rent can I afford in the Netherlands?",
    answer:
      "There is no single legal or statutory affordable rent figure for everyone. In practice, people combine net cash left after tax and fixed costs, a personal comfort range for housing as a share of income, and landlord-style gross multiples. This tool turns that into planning bands (safer, balanced, stretch) using indicative non-rent lines, buffers you can tune, and common gross screening stories. Treat the output as a bracket to test against real listings and your actual payslip — not an approval promise.",
  },
  {
    id: "gross-or-net-landlords",
    question: "Do Dutch landlords use gross or net salary?",
    answer:
      "Day-to-day budgeting is usually net-first (what lands in your account). Many private landlords and rental agents screen applications using gross monthly income as a multiple of monthly rent — often discussed as roughly three to four times rent, but policies differ by operator, fund, and city. This calculator shows both: net-led affordability bands and a gross-versus-rent table for screening-style checks. Align what you enter with what you will actually declare on applications.",
  },
  {
    id: "when-net-when-gross",
    question: "When should I plan with net salary versus gross salary?",
    answer:
      "Use net when you are asking whether everyday life works after tax and premiums. Use gross when you are mirroring how agents and landlords often phrase requirements, or when your job offer is negotiated in gross contract terms. If you only know one side, the page can show an indicative conversion using the same simplified Dutch salary model family as our salary calculator — not your employer payroll engine.",
  },
  {
    id: "is-3x-enough",
    question: "Is the 3× rent rule always enough to pass landlord checks?",
    answer:
      "Not necessarily. A gross multiple is a common heuristic, not a guarantee. Some operators want higher income, longer contracts, no probation, guarantors, or extra savings proof. Freelancers and very new arrivals can face different documentation expectations even when cash flow looks fine. Clear the gross line in the tool, then confirm the actual policy on each listing or agency path.",
  },
  {
    id: "rejected-despite-affordable",
    question: "Why might I be rejected even if the rent looks affordable for me?",
    answer:
      "Affordability on a spreadsheet is only one part of the file. Landlords also weigh employment stability, contract type, employer sector, Dutch banking history, housemates, pets, and whether paperwork is complete. International hires sometimes underestimate how much proof is expected. Use the rental market guide on this site for behavioral context; use this tool for numeric planning — neither replaces a concrete application pack.",
  },
  {
    id: "amsterdam-vs-others",
    question: "Is Amsterdam much harder than Rotterdam, The Hague, or Utrecht for renters?",
    answer:
      "Often yes on headline rents and competition in segments expats search, but housing type, neighborhood band, commute, and household costs matter as much as the city name. Rotterdam and The Hague can still be expensive for certain sizes and locations; Utrecht is frequently tight in comparable segments. The calculator encodes city-style anchors and a scenario table so you can compare stories instead of relying on a single ranking.",
  },
  {
    id: "monthly-vs-move-in-cash",
    question: "What is the difference between monthly affordability and move-in cash?",
    answer:
      "Monthly affordability is whether recurring income can carry rent plus typical living lines after buffers. Move-in cash is whether you can fund deposit timing, first month, relocation, furniture, and surprises without wiping out your safety margin. Mixing them is a common planning mistake. The calculator separates recurring lines from setup toggles on purpose — both matter, but at different moments.",
  },
  {
    id: "first-month-costs-list",
    question: "What are common first-month rental costs in the Netherlands?",
    answer:
      "Many renters budget for a deposit (often discussed around one to two months rent on longer private leases), first month rent as a cash-flow timing item, possible agency or contract fees, utility and internet activation buffers, basic furniture if the home is unfurnished, local transport setup like an OV chip card and sometimes a bike deposit, and a contingency slice. Exact terms depend on your contract and landlord — use the setup section here as planning estimates until you have a draft lease.",
  },
  {
    id: "ruling-before-or-after",
    question: "How does the 30% ruling affect rent affordability planning?",
    answer:
      "If the facility applies to your payroll, the same gross can yield a higher net than without it, which changes how much rent feels sustainable after tax. This page does not determine eligibility; it only applies the planning toggle you select. For structured eligibility context, use the dedicated 30% ruling calculator. When gross is uncertain, compare with and without the ruling uplift to see how wide your planning band might be.",
  },
  {
    id: "utilities-insurance-included",
    question: "Does the calculator include utilities, health insurance, and service costs?",
    answer:
      "The non-rent baseline includes indicative utilities (energy, water, local-charge framing), a basic health-insurance-style line, transport, groceries, a municipality-style slice, communications, and lifestyle-dependent dining and miscellaneous lines. Optional toggles add further planning lines such as gym, streaming, or reserves. Service costs for rent are optional add-ons on the housing line when you enable them. Everything is labeled as planning estimates — not quotes from suppliers or insurers.",
  },
  {
    id: "service-costs-rent",
    question: "Are service costs the same as rent in the Netherlands?",
    answer:
      "Not always. Some listings split base rent and service charges. What is bundled varies by contract and building. In this tool, service costs are an optional planning bundle when you tick the toggle — useful for bracketing, not a substitute for reading your specific listing and lease.",
  },
  {
    id: "deposit-how-much",
    question: "How much deposit should I budget before moving in?",
    answer:
      "Practice varies. Many private renters still plan around one to two months rent as a deposit for longer leases, plus first month timing and any fees the contract mentions. International moves often add relocation and furniture on top. Enable the setup lines that match your story and treat totals as estimates until you have a signed path and bank details from the landlord or agent.",
  },
  {
    id: "couples-combine-income",
    question: "Can couples combine income for rent applications?",
    answer:
      "Many households declare combined household income, but requirements differ by landlord and operator. This calculator models a single net or gross stream unless you merge numbers manually into one household figure that matches what you will show on forms. Add childcare and other fixed lines so the residual available for rent reflects real outflows.",
  },
  {
    id: "childcare-impact",
    question: "Does childcare change the rent I can afford?",
    answer:
      "Often significantly. Childcare is frequently one of the largest monthly lines after housing. Enter an expected fee as a fixed obligation, or use the childcare placeholder when you are still pricing daycare. Either way, it reduces what the model treats as available for rent and makes family scenarios much more realistic.",
  },
  {
    id: "expat-budget-mistakes",
    question: "What do expats commonly forget when budgeting for Dutch rent?",
    answer:
      "Typical gaps include move-in cash separate from monthly flow, mandatory basic health insurance, commuting and parking totals, childcare or school-related costs, furniture for unfurnished homes, and the time it takes to open a Dutch bank account for rent payment. Cross-link this tool with the cost of moving guide and cost of living calculator so those lines do not disappear between spreadsheets.",
  },
  {
    id: "huurtoeslag-private",
    question: "Can I get huurtoeslag (rent benefit) on a typical expat rental?",
    answer:
      "Many market-rate rentals in major cities do not fall within huurtoeslag rules, and eligibility depends on income, age, rent level, and housing type. This calculator does not model rent benefit. If you think you might qualify, use official Belastingdienst information and professional advice — do not bake benefit into affordability until you have a determination.",
  },
  {
    id: "freelancer-zzp",
    question: "How should freelancers or ZZP plan rent with landlord checks?",
    answer:
      "Cash flow after tax can look healthy while gross contract income is harder to show in the format agents expect. Some paths ask for longer track records, accountant statements, or larger savings buffers. Enter the net or gross story that matches what you can document, and treat landlord multiples as one gate among several — not a full picture of self-employed risk.",
  },
  {
    id: "compare-cities-tool",
    question: "How do I compare cities beyond Amsterdam and Rotterdam?",
    answer:
      "Use the city hub pages (for example Utrecht, The Hague, Eindhoven, Groningen) for local context, then run this calculator with the same household and income story while changing city and neighborhood band. Pair that with the Netherlands cost of living calculator for full monthly bands side by side. The scenario comparison table on this page highlights commuter belt and smaller-housing variants.",
  },
  {
    id: "legal-guarantee",
    question: "Is this page legal, tax, or financial advice?",
    answer:
      "No. ExpatCopilot provides general planning information for orientation. Leases, tax, immigration, and personal finance decisions require qualified professionals and your own documents. No output here is an offer, approval, or promise from a landlord, agent, or lender. Always confirm figures against listings, contracts, and payroll.",
  },
] as const;
