/**
 * Editorial worked examples — not personalised advice.
 * Map to cards: title, whenUseful, demonstrate, tradeOffs, oftenWins, tryInTool.
 */

export type OfferComparisonWorkedExample = {
  readonly id: string;
  readonly title: string;
  readonly whenUseful: string;
  readonly demonstrate: string;
  readonly tradeOffs: string;
  readonly oftenWins: string;
  readonly tryInTool: string;
};

export const OFFER_COMPARISON_WORKED_EXAMPLES: readonly OfferComparisonWorkedExample[] = [
  {
    id: "ams-vs-rtd",
    title: "Higher salary in Amsterdam vs lower salary in Rotterdam",
    whenUseful: "Same seniority band, two metros, similar bonus story — the classic “more gross, more rent” trade-off.",
    demonstrate:
      "Try ~€75k–€85k gross in Amsterdam vs ~€62k–€70k in Rotterdam with holiday allowance set the same way on both, hybrid 2–3 office days, and typical city rent turned on. Watch affordability and commute, not only estimated net.",
    tradeOffs: "Shorter commute vs higher cultural density; partner job market; childcare waiting lists — not all are in the tool.",
    oftenWins:
      "Rotterdam can show more cash left after estimated rent when Amsterdam rent is high, even when Amsterdam gross leads on raw take-home.",
    tryInTool:
      "Match commute days and ruling support between offers first; then change only job city and gross to see how fast affordability flips.",
  },
  {
    id: "perm-vs-fixed",
    title: "Permanent vs fixed-term (same employer, different security)",
    whenUseful: "Startup scale-up, project funding, or “we start with one year” offers where cash looks similar.",
    demonstrate:
      "Enter identical gross and benefits, set one contract to permanent and the other to fixed-term; flag renewal as uncertain and add probation if the letter says so. Security and contract scores should move while take-home stays flat.",
    tradeOffs: "Mortgage readiness, landlord proof of income, and permit continuity — fixed-term can be fine in practice but painful on paper.",
    oftenWins: "Permanent usually wins when you weight stability; fixed-term can still look acceptable if you prioritise only net pay and the term is long enough.",
    tryInTool: "After the baseline, toggle fixed-term renewal to “likely” on one side to see how fast the risk story changes.",
  },
  {
    id: "ruling-support-gap",
    title: "Stronger 30% ruling support vs weaker support (similar gross)",
    whenUseful: "Two €70k-style offers where one employer commits to documentation help and the other is vague.",
    demonstrate:
      "Keep gross within a few thousand, set ruling support to “Yes” vs “Not mentioned” or “No”, and mirror visa needs. Estimated net and expat-support scores diverge even when the offer letters look “the same salary”.",
    tradeOffs: "Eligibility still depends on your history and rules in force — support in the letter is not a guarantee of qualification.",
    oftenWins:
      "A slightly lower gross with clear ruling and relocation support can rank above a higher gross with silence on the facility, especially when you weight expat friendliness.",
    tryInTool: "Use “Best efforts” as a middle scenario between yes and no to stress-test how much the ranking depends on that single field.",
  },
  {
    id: "office-vs-hybrid",
    title: "Office-heavy vs hybrid (same city)",
    whenUseful: "One role expects 4–5 days on site; the other allows 2 days with the same employer cluster.",
    demonstrate:
      "Equal gross in one city, set commute days to 5 vs 2 and public transport vs bike if realistic. Commute/lifestyle and affordability respond because cost bands scale with days in the office.",
    tradeOffs: "Career visibility, team norms, and future policy changes — mark hybrid as fixed vs discretionary if the letter hints at it.",
    oftenWins: "Hybrid often wins lifestyle and sometimes affordability even when gross matches, because full-week commuting carries more cost and time pressure in this tool.",
    tryInTool: "Slide office days from 0 to 5 on one offer only to see when commute overtakes cash.",
  },
  {
    id: "bonus-vs-benefits-package",
    title: "High bonus / weak benefits vs lower base / strong package",
    whenUseful: "Fintech or sales-style variable pay vs a steadier employer with pension text, training budget, and allowances.",
    demonstrate:
      "Offer A: higher base + high discretionary bonus %; Offer B: ~10–15% lower base but guaranteed bonus, richer pension description, travel/WFH allowances, and extra leave. Total cash can look higher on A while benefits and security favour B.",
    tradeOffs: "Your personal discount rate on variable pay; vesting cliffs; how much of bonus is contractually guaranteed vs “target”.",
    oftenWins:
      "When you weight benefits and stability, the lower-base offer can still win overall; when you weight only net and total package with aggressive bonus assumptions, the cash-heavy offer leads.",
    tryInTool: "Switch bonus from discretionary to guaranteed on the lower base offer to see how sensitive the ranking is to bonus certainty.",
  },
  {
    id: "dutch-vs-foreign-remote",
    title: "Dutch payroll vs foreign remote employer (payroll complexity)",
    whenUseful: "Local entity contract vs “we pay you from London/Berlin” with Dutch work.",
    demonstrate:
      "Set one offer as standard permanent Dutch payroll with sponsorship yes/no as appropriate; set the other as remote foreign employer. The tool applies conservative adjustments to net and scores expat clarity lower on the foreign path.",
    tradeOffs: "Employer of record, social security coordination, and where tax is ultimately due — often bigger than the gross line.",
    oftenWins: "Dutch payroll tends to win clarity and expat-style scores when you need a sponsor or predictable payslips; foreign remote can still win raw cash in some setups.",
    tryInTool: "Pair with the employment type scenario tool and double tax awareness tool when this scenario is real — the comparison here stays directional.",
  },
  {
    id: "payroll-vs-contractor",
    title: "Permanent payroll vs contractor / umbrella (headline rate trap)",
    whenUseful: "A day-rate or “all-in” contractor number next to a payroll package with holiday pay and pension.",
    demonstrate:
      "Model contractor/umbrella with the higher headline, then add payroll employer with lower gross but pension text, leave, and equipment. Contractor net is discounted for planning; benefits and stability scores usually fall.",
    tradeOffs: "IR35-style substance tests are out of scope; focus on what you can negotiate into payroll (perm or FTC) before accepting umbrella.",
    oftenWins: "Once you weight security and benefits, payroll often overtakes a superficially higher contractor gross.",
    tryInTool: "Copy the same gross into both sides, flip contract type, and read hidden costs — the narrative usually matters more than the table.",
  },
] as const satisfies readonly OfferComparisonWorkedExample[];
