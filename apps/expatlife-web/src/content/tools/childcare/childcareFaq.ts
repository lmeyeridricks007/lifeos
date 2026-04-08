export const CHILDCARE_FAQ_ITEMS = [
  {
    id: "official-calculator",
    question: "Is this the same as the official childcare benefit calculator?",
    answer:
      "No. ExpatCopilot uses a transparent planning model with income bands and statutory hourly caps — not the live Belastingdienst kinderopvangtoeslag engine. Use this page to budget, compare scenarios, and prepare questions; use official tools and your final award letter for entitlement.",
  },
  {
    id: "net-vs-gross",
    question: "Should I focus on gross childcare invoices or net cost after benefit?",
    answer:
      "For household decisions, net out-of-pocket usually matters more than the headline invoice. The gross number helps you compare provider quotes, but the estimated benefit slice (when your income and hours inputs are realistic) is what hits your bank account alongside rent and salary.",
  },
  {
    id: "above-cap",
    question: "Why does it matter if my provider charges more per hour than the official cap?",
    answer:
      "The childcare benefit calculation uses a maximum hourly rate per care type. If your contract rate is higher, the extra hourly amount is typically not reimbursed in the same way — so out-of-pocket rises even when hours look unchanged. The tool flags this when cap-aware mode is on.",
  },
  {
    id: "230-hours",
    question: "What is the 230 hours per month limit?",
    answer:
      "Dutch rules cap reimbursable childcare hours per child per month (the tool follows the published figure for your tax year, e.g. 230). If your booked hours exceed that, the model treats the excess as less subsidised — check real contracts and invoices.",
  },
  {
    id: "bso-vs-daycare",
    question: "Is BSO cheaper than daycare — and is it still a big line item?",
    answer:
      "BSO often has a lower official hourly cap and fewer hours per day than full daycare, so gross bills can look smaller. School holidays, study days, and extra cover can still add meaningful cost. Treat BSO as a serious budget line, not a rounding error.",
  },
  {
    id: "first-month-higher",
    question: "Why can first-month cash feel higher than steady monthly childcare?",
    answer:
      "Registration fees, deposits, overlapping invoices, and partial first months stack on top of recurring care. Benefit payments can also lag. After onboarding, monthly net childcare is often smoother — the first-month section in results separates recurring from one-offs when you enable toggles.",
  },
  {
    id: "job-decisions",
    question: "Can childcare change job or hours decisions more than people expect?",
    answer:
      "Yes. Extra work days move contracted hours, gross invoices, and sometimes your tax band. At the same time, more income can shift the estimated benefit percentage. Modelling both sides beats guessing from gross salary alone — pair this tool with a net salary estimate for your contract.",
  },
  {
    id: "one-part-time-parent",
    question: "Can one parent work part-time and still receive childcare benefit?",
    answer:
      "Often both parents must meet work or study hour thresholds; part-time can still qualify depending on registration and hours. This tool applies a conservative eligibility weight when you indicate one working parent or an uncertain pattern — confirm against current DUO and Belastingdienst guidance.",
  },
  {
    id: "unknown-income",
    question: "What if I don’t know my exact household income yet?",
    answer:
      "Use a realistic band and re-run when you have a contract. If income is left empty, the engine uses a high default so the model assumes a lower subsidy rate — that is conservative for out-of-pocket planning but rough for the benefit line. Enter a plausible figure as soon as you can.",
  },
  {
    id: "gastouder-cheaper",
    question: "Is a gastouder usually cheaper than daycare?",
    answer:
      "Not always. Gastouder hourly rates are often lower, but hours, location, and availability vary. Compare the same days and hours in this tool rather than assuming one mode wins — and read agency or meldpunt rules alongside the quote.",
  },
  {
    id: "waiting-lists",
    question: "Does this include waiting lists, holiday gaps, or temporary nannies?",
    answer:
      "No. Those are family-specific. Use reserve toggles and your own notes as placeholders, then confirm availability, school calendars, and backup care with providers and schools.",
  },
  {
    id: "accuracy",
    question: "How accurate are the euro outputs?",
    answer:
      "They are directional planning figures. Real invoices depend on your contract, collective agreements, invoice timing, and official benefit outcomes. Use the per-child breakdown to see assumptions; validate anything material with providers and Belastingdienst tools.",
  },
] as const;
