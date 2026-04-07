export const COST_OF_LIVING_FAQ_ITEMS = [
  {
    id: "not-advice",
    question: "Is this financial, tax, or legal advice?",
    answer:
      "No. This page is a planning estimator using simplified assumptions. It does not know your contract, visa, tax residency, benefits, debts, or eligibility for allowances. Confirm any big decision with qualified professionals and official sources.",
  },
  {
    id: "accuracy",
    question: "How accurate is a Netherlands cost of living calculator for expats?",
    answer:
      "Use it for ranges and trade-offs, not for signing a lease or accepting a salary. Rent, energy, childcare, and insurance move with markets and personal choices. Your real monthly expenses Netherlands total may be higher or lower than the estimate.",
  },
  {
    id: "amsterdam",
    question: "Why does Amsterdam cost of living for expats look high?",
    answer:
      "Amsterdam rent and temporary housing are usually among the highest in the country. The model applies a higher rent anchor and grocery index than many other cities. Compare Rotterdam, The Hague, Utrecht, and Eindhoven in the same lifestyle tier to see the spread.",
  },
  {
    id: "salary",
    question: "How much salary do I need in the Netherlands?",
    answer:
      "The tool shows a recommended monthly net as a planning band on top of your scenario. Visa routes and employers may have their own thresholds. For take-home detail, use the Dutch salary net calculator and, if relevant, the 30% ruling calculator — they address payroll and facility norms, not grocery receipts.",
  },
  {
    id: "short-stay",
    question: "What does short-stay initial setup mean?",
    answer:
      "It models a higher monthly housing cost typical of temporary furnished options, with different deposit timing and overlap risk while you search for a long-term rental. It is still an estimate — real serviced apartments and hotels vary sharply by season.",
  },
  {
    id: "childcare",
    question: "How should I read the childcare line?",
    answer:
      "Childcare is highly individual (hours, age, daycare vs childminder, waiting lists). When you enable it, the line is an indicative monthly placeholder. If your household has no children selected yet, we still show a one-child default so the budget is not silently zero — add children or a family preset to scale the fee to your headcount.",
  },
  {
    id: "usd",
    question: "What does the USD display represent?",
    answer:
      "It applies a static planning exchange rate for rough mental conversion only. It is not a live forex quote and should not be used for bank transfers — check your bank or broker for real rates and fees.",
  },
  {
    id: "share-url",
    question: "Can I share my scenario?",
    answer:
      "Yes. Core inputs sync to the URL query string after you change them, and your last scenario is saved locally in your browser. Anyone who opens the shared link sees the same parameters; they do not need an account.",
  },
  {
    id: "salary-amsterdam",
    question: "What salary do I need to live in Amsterdam?",
    answer:
      "There is no single number — rent, household size, and lifestyle swing the result. Use this tool with your housing mode and city, then cross-check the “salary targets” band with the Dutch salary net calculator. Visa routes may add separate minimums.",
  },
  {
    id: "budget-before-move",
    question: "How much should I budget before moving to the Netherlands?",
    answer:
      "Look at both one-time setup (deposit, furniture, travel, admin) and a recurring monthly total. The tool separates them on purpose: first-month cash is often setup plus roughly one month of recurring costs, plus an emergency buffer you can tune.",
  },
  {
    id: "childcare-big-cost",
    question: "Is childcare one of the biggest costs for families?",
    answer:
      "It can be — hours, age, and waiting lists vary. When you enable childcare, the line is an indicative placeholder so families do not forget a major budget item; replace it with real quotes from providers when you have them.",
  },
  {
    id: "rent-sensitivity",
    question: "How much does rent change the result?",
    answer:
      "Usually a lot. Model rent is often the largest monthly line; switching city, neighborhood band, or housing mode moves totals faster than small tweaks to groceries or subscriptions. Manual rent override is there when you already have a quote.",
  },
  {
    id: "ruling-affordability",
    question: "Can the 30% ruling improve affordability?",
    answer:
      "It can change take-home for the same gross, but eligibility and payroll setup are specific to you. Use the optional ruling assumption here as a coarse stress-test only, and the 30% ruling calculator for facility norms — not as tax advice.",
  },
  {
    id: "real-budget-vs-estimate",
    question: "Is this a real monthly budget or just a planning estimate?",
    answer:
      "A planning estimate. It uses simplified anchors for rent bands, utilities, insurance, transport, and setup — not your actual contracts. Treat outputs as ranges for trade-offs and conversations, not as promises of what you will spend.",
  },
  {
    id: "rotterdam-utrecht-hague-salary",
    question: "What salary is enough in Rotterdam, Utrecht, or The Hague compared to Amsterdam?",
    answer:
      "Rent anchors differ by city and neighborhood band; Amsterdam is usually the highest in this model. Run the same household and lifestyle in each city here, then cross-check the balanced net band with the Dutch salary net calculator. Visa routes may impose separate minimums.",
  },
  {
    id: "school-fees-included",
    question: "Does the calculator include international school tuition?",
    answer:
      "No exact tuition. The “international / private” schooling option adds a small monthly planning reserve only — you should replace it with real school fees and registration costs from the institutions you consider.",
  },
  {
    id: "first-month-vs-monthly",
    question: "What is the difference between monthly cost and first-month cash need?",
    answer:
      "Monthly cost is recurring rent, utilities, insurance, transport, and similar lines each month. First-month cash need is setup (deposit, overlap, travel, furniture slice, admin, contingency) plus roughly one month of those recurring costs — it answers “how much liquidity do I need around arrival,” not your steady-state burn.",
  },
  {
    id: "money-to-move-nl",
    question: "How much money do you need to move to the Netherlands?",
    answer:
      "Plan for both: one-time setup cash (often dominated by deposit, overlap, and relocation) and a few months of recurring costs as a buffer. The tool shows setup total, first-month cash, emergency buffer, and pre-move buffer as separate lines so you do not confuse lump sums with monthly rent.",
  },
] as const;
