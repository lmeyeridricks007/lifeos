/**
 * Dutch home-buying cost reference — 2026 editorial figures.
 *
 * Sources: Belastingdienst overdrachtsbelasting, NHG.nl (2026 grens), Government.nl,
 * Kadaster, AFM consumer guidance. Re-verify annually — rates and exemptions change.
 *
 * Does NOT include mortgage interest rates (market-dependent).
 */

export const BUYING_HOUSE_REFERENCE_TAX_YEAR = 2026;

export const BUYING_HOUSE_REFERENCE_DISCLAIMER =
  "Figures track published Dutch buyer-cost parameters for planning orientation. Transfer tax rules, NHG limits, notary fees and mortgage terms change — confirm on Belastingdienst, nhg.nl and with licensed mortgage advisers before purchasing.";

export type BuyingHouseReferenceHighlight = {
  id: string;
  label: string;
  value: string;
  note: string;
};

export type BuyingHouseReferenceRow = {
  id: string;
  parameter: string;
  value2026: string;
  notes: string;
};

export type BuyingHouseWorkedExample = {
  id: string;
  tag: string;
  title: string;
  inputs: string;
  indicativeCosts: string;
  body: string;
};

export type BuyingHousePurchasePriceRow = {
  id: string;
  purchasePrice: string;
  transferTax: string;
  otherBuyerCosts: string;
  totalKostenKoper: string;
  ownFundsNote: string;
};

export type BuyingHouseOverbiddingRow = {
  id: string;
  scenario: string;
  askingPrice: string;
  winningBid: string;
  appraisal: string;
  gapFromSavings: string;
};

/** Published transfer tax rates — update when Belastingdienst publishes changes. */
export const BUYING_HOUSE_TRANSFER_TAX = {
  ownerOccupiedPercent: 2,
  nonOwnerOccupiedPercent: 10.4,
} as const;

/** NHG 2026 — update when nhg.nl publishes new grens. */
export const BUYING_HOUSE_NHG_2026 = {
  standardLimit: 470_000,
  withEnergyImprovementsLimit: 498_200,
  feePercent: 0.4,
  priorYearLimit: 450_000,
} as const;

const fmtEuro = (n: number) =>
  new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

const transferTaxOwner = (price: number) => Math.round(price * (BUYING_HOUSE_TRANSFER_TAX.ownerOccupiedPercent / 100));

/** Mid-range planning bundle: notary + valuation + inspection + mortgage advice (excl. buyer's agent, NHG fee). */
const midOtherBuyerCosts = (price: number) => {
  const notary = price >= 500_000 ? 2_250 : 2_000;
  const valuation = price >= 500_000 ? 850 : 750;
  const inspection = 500;
  const advice = price >= 500_000 ? 2_500 : 2_250;
  return notary + valuation + inspection + advice;
};

export const buyingHouseReference2026Highlights: readonly BuyingHouseReferenceHighlight[] = [
  {
    id: "transfer-tax",
    label: "Transfer tax (owner-occupied)",
    value: `${BUYING_HOUSE_TRANSFER_TAX.ownerOccupiedPercent}% of purchase price`,
    note: `€400,000 home → ${fmtEuro(transferTaxOwner(400_000))} overdrachtsbelasting. Investment/second home: ${BUYING_HOUSE_TRANSFER_TAX.nonOwnerOccupiedPercent}%.`,
  },
  {
    id: "kosten-koper-400k",
    label: "Kosten koper at €400,000",
    value: fmtEuro(transferTaxOwner(400_000) + midOtherBuyerCosts(400_000)),
    note: `≈ ${fmtEuro(transferTaxOwner(400_000))} transfer tax + ~${fmtEuro(midOtherBuyerCosts(400_000))} notary, valuation, inspection & advice — before buyer's agent or NHG fee.`,
  },
  {
    id: "nhg-limit",
    label: "NHG limit 2026",
    value: fmtEuro(BUYING_HOUSE_NHG_2026.standardLimit),
    note: `Up to ${fmtEuro(BUYING_HOUSE_NHG_2026.withEnergyImprovementsLimit)} with energy improvements (+6%). NHG fee ${BUYING_HOUSE_NHG_2026.feePercent}% of loan when used.`,
  },
  {
    id: "buyer-costs-pct",
    label: "Typical kosten koper range",
    value: "~4–6% of price",
    note: `€500,000 → roughly ${fmtEuro(transferTaxOwner(500_000) + midOtherBuyerCosts(500_000))}–${fmtEuro(Math.round(500_000 * 0.06))} planning range depending on agent & extras.`,
  },
  {
    id: "overbid-gap",
    label: "Overbid gap example",
    value: fmtEuro(15_000),
    note: "Offer €425,000 — appraisal €410,000 → €15,000 from savings before mortgage covers the rest.",
  },
  {
    id: "timeline",
    label: "Typical timeline",
    value: "6–12 weeks",
    note: "Accepted offer to notarial transfer — can move faster when mortgage and conditions are pre-aligned.",
  },
] as const;

export const buyingHouseReference2026Thresholds: readonly BuyingHouseReferenceRow[] = [
  {
    id: "transfer-tax-owner",
    parameter: "Transfer tax — owner-occupied home",
    value2026: `${BUYING_HOUSE_TRANSFER_TAX.ownerOccupiedPercent}% of purchase price`,
    notes: `Examples: €350,000 → ${fmtEuro(transferTaxOwner(350_000))}; €450,000 → ${fmtEuro(transferTaxOwner(450_000))}; €550,000 → ${fmtEuro(transferTaxOwner(550_000))}.`,
  },
  {
    id: "transfer-tax-other",
    parameter: "Transfer tax — non-owner-occupied / investment",
    value2026: `${BUYING_HOUSE_TRANSFER_TAX.nonOwnerOccupiedPercent}% of purchase price`,
    notes: `€400,000 investment purchase → ${fmtEuro(Math.round(400_000 * (BUYING_HOUSE_TRANSFER_TAX.nonOwnerOccupiedPercent / 100)))} vs ${fmtEuro(transferTaxOwner(400_000))} owner-occupied.`,
  },
  {
    id: "nhg-standard",
    parameter: "NHG purchase limit (2026)",
    value2026: fmtEuro(BUYING_HOUSE_NHG_2026.standardLimit),
    notes: `Raised from ${fmtEuro(BUYING_HOUSE_NHG_2026.priorYearLimit)} in 2025. One NHG limit for all dwelling types from 2026.`,
  },
  {
    id: "nhg-energy",
    parameter: "NHG limit with energy improvements",
    value2026: fmtEuro(BUYING_HOUSE_NHG_2026.withEnergyImprovementsLimit),
    notes: "+6% leenruimte when financing energy-saving measures (EBV) within NHG rules.",
  },
  {
    id: "nhg-fee",
    parameter: "NHG guarantee fee (2026)",
    value2026: `${BUYING_HOUSE_NHG_2026.feePercent}% of loan amount`,
    notes: `Example: €400,000 loan → ${fmtEuro(Math.round(400_000 * (BUYING_HOUSE_NHG_2026.feePercent / 100)))} one-off NHG fee when NHG applies.`,
  },
  {
    id: "notary",
    parameter: "Notary (notaris) — purchase deed",
    value2026: "Typically €1,500–€2,500",
    notes: "Planning mid-point ~€2,000 at €400,000 — scales slightly with purchase price.",
  },
  {
    id: "valuation",
    parameter: "Mortgage valuation (taxatierapport)",
    value2026: "Typically €600–€900",
    notes: "Planning figure ~€750 — lender-required; caps financeable amount if you overbid.",
  },
  {
    id: "technical-inspection",
    parameter: "Technical building inspection",
    value2026: "Typically €350–€650",
    notes: "Planning figure ~€500 — strongly recommended before waiving inspection conditions.",
  },
  {
    id: "mortgage-advice",
    parameter: "Mortgage advisor (hypotheekadviseur)",
    value2026: "Often €1,500–€3,000",
    notes: "Planning mid-point ~€2,250 — compare AFM-regulated adviser fee structures.",
  },
  {
    id: "agent-buyer",
    parameter: "Buyer's agent (aankoopmakelaar)",
    value2026: "Often ~1% of purchase price or €3,000–€5,000 fixed",
    notes: `Optional — €400,000 purchase ≈ €4,000 at 1%. Not included in base kosten koper tables below.`,
  },
  {
    id: "vve-apartment",
    parameter: "Apartment VvE (monthly)",
    value2026: "Often €100–€350+ / month",
    notes: "Varies widely — Amsterdam/Utrecht apartments can exceed €250/mo; check reserve fund and MJOP.",
  },
  {
    id: "municipal-ozb",
    parameter: "OZB property tax (annual)",
    value2026: "Often €300–€800+ / year",
    notes: "Municipal onroerendezaakbelasting — Amsterdam often higher than smaller cities; not kosten koper.",
  },
] as const;

export const buyingHousePurchasePriceTable2026: readonly BuyingHousePurchasePriceRow[] = [
  {
    id: "price-300k",
    purchasePrice: fmtEuro(300_000),
    transferTax: fmtEuro(transferTaxOwner(300_000)),
    otherBuyerCosts: `~${fmtEuro(midOtherBuyerCosts(300_000))}`,
    totalKostenKoper: `~${fmtEuro(transferTaxOwner(300_000) + midOtherBuyerCosts(300_000))}`,
    ownFundsNote: "≈ 3.8% of price — add overbid buffer & optional buyer's agent",
  },
  {
    id: "price-400k",
    purchasePrice: fmtEuro(400_000),
    transferTax: fmtEuro(transferTaxOwner(400_000)),
    otherBuyerCosts: `~${fmtEuro(midOtherBuyerCosts(400_000))}`,
    totalKostenKoper: `~${fmtEuro(transferTaxOwner(400_000) + midOtherBuyerCosts(400_000))}`,
    ownFundsNote: "≈ 3.4% of price — typical expat planning example",
  },
  {
    id: "price-450k",
    purchasePrice: fmtEuro(450_000),
    transferTax: fmtEuro(transferTaxOwner(450_000)),
    otherBuyerCosts: `~${fmtEuro(midOtherBuyerCosts(450_000))}`,
    totalKostenKoper: `~${fmtEuro(transferTaxOwner(450_000) + midOtherBuyerCosts(450_000))}`,
    ownFundsNote: "Just under 2025 NHG cap — verify 2026 NHG at €470,000",
  },
  {
    id: "price-500k",
    purchasePrice: fmtEuro(500_000),
    transferTax: fmtEuro(transferTaxOwner(500_000)),
    otherBuyerCosts: `~${fmtEuro(midOtherBuyerCosts(500_000))}`,
    totalKostenKoper: `~${fmtEuro(transferTaxOwner(500_000) + midOtherBuyerCosts(500_000))}`,
    ownFundsNote: "Above NHG standard limit — NHG may not apply",
  },
  {
    id: "price-600k",
    purchasePrice: fmtEuro(600_000),
    transferTax: fmtEuro(transferTaxOwner(600_000)),
    otherBuyerCosts: `~${fmtEuro(midOtherBuyerCosts(600_000))}`,
    totalKostenKoper: `~${fmtEuro(transferTaxOwner(600_000) + midOtherBuyerCosts(600_000))}`,
    ownFundsNote: "Randstad family home band — plan €18k+ own funds before overbid",
  },
] as const;

export const buyingHouseOverbiddingTable2026: readonly BuyingHouseOverbiddingRow[] = [
  {
    id: "moderate-5pct",
    scenario: "5% over asking",
    askingPrice: fmtEuro(400_000),
    winningBid: fmtEuro(420_000),
    appraisal: fmtEuro(410_000),
    gapFromSavings: fmtEuro(10_000),
  },
  {
    id: "competitive-6pct",
    scenario: "6% over — appraisal lags",
    askingPrice: fmtEuro(425_000),
    winningBid: fmtEuro(450_000),
    appraisal: fmtEuro(430_000),
    gapFromSavings: fmtEuro(20_000),
  },
  {
    id: "amsterdam-tight",
    scenario: "10% over in hot market",
    askingPrice: fmtEuro(550_000),
    winningBid: fmtEuro(605_000),
    appraisal: fmtEuro(575_000),
    gapFromSavings: fmtEuro(30_000),
  },
] as const;

export const buyingHouseWorkedExamples2026: readonly BuyingHouseWorkedExample[] = [
  {
    id: "starter-300k",
    tag: "Starter · €300,000",
    title: "First Dutch home at €300,000",
    inputs: "Owner-occupied, 2% transfer tax, mid-range notary/valuation/advice",
    indicativeCosts: fmtEuro(transferTaxOwner(300_000) + midOtherBuyerCosts(300_000)),
    body: `${fmtEuro(transferTaxOwner(300_000))} transfer tax + ~${fmtEuro(midOtherBuyerCosts(300_000))} other buyer costs. Often within NHG 2026 limit (${fmtEuro(BUYING_HOUSE_NHG_2026.standardLimit)}).`,
  },
  {
    id: "mid-range-400k",
    tag: "Illustrative · €400,000",
    title: "Owner-occupied home at €400,000",
    inputs: "Primary residence, 2% transfer tax, typical notary, valuation and advice fees",
    indicativeCosts: fmtEuro(transferTaxOwner(400_000) + midOtherBuyerCosts(400_000)),
    body: `Transfer tax ${fmtEuro(transferTaxOwner(400_000))}. Total kosten koper ~${fmtEuro(transferTaxOwner(400_000) + midOtherBuyerCosts(400_000))} before buyer's agent — plan own funds beyond the mortgage.`,
  },
  {
    id: "overbid-gap",
    tag: "Overbidding risk",
    title: "Offer €425,000 — appraisal €410,000",
    inputs: "Mortgage based on appraisal value, not your winning bid",
    indicativeCosts: fmtEuro(15_000),
    body: "€15,000 gap from savings on top of kosten koper. Lenders typically finance up to the taxatierapport — a common expat surprise in Randstad markets.",
  },
  {
    id: "randstad-500k",
    tag: "Randstad · €500,000",
    title: "Family home at €500,000",
    inputs: "Owner-occupied Amsterdam/Utrecht band, above NHG standard cap",
    indicativeCosts: fmtEuro(transferTaxOwner(500_000) + midOtherBuyerCosts(500_000)),
    body: `Transfer tax ${fmtEuro(transferTaxOwner(500_000))}. Total kosten koper ~${fmtEuro(transferTaxOwner(500_000) + midOtherBuyerCosts(500_000))}. NHG standard limit is ${fmtEuro(BUYING_HOUSE_NHG_2026.standardLimit)} — verify eligibility with adviser.`,
  },
  {
    id: "investment-rate",
    tag: "Non-owner-occupied",
    title: "Second home or buy-to-let at €400,000",
    inputs: `${BUYING_HOUSE_TRANSFER_TAX.nonOwnerOccupiedPercent}% transfer tax rate`,
    indicativeCosts: fmtEuro(Math.round(400_000 * (BUYING_HOUSE_TRANSFER_TAX.nonOwnerOccupiedPercent / 100))),
    body: `Transfer tax alone ≈ ${fmtEuro(Math.round(400_000 * (BUYING_HOUSE_TRANSFER_TAX.nonOwnerOccupiedPercent / 100)))} vs ${fmtEuro(transferTaxOwner(400_000))} owner-occupied — confirm classification with a notary or tax adviser.`,
  },
  {
    id: "nhg-fee-example",
    tag: "NHG fee illustration",
    title: "€380,000 mortgage with NHG",
    inputs: `${BUYING_HOUSE_NHG_2026.feePercent}% NHG fee on loan amount, purchase under ${fmtEuro(BUYING_HOUSE_NHG_2026.standardLimit)} cap`,
    indicativeCosts: fmtEuro(Math.round(380_000 * (BUYING_HOUSE_NHG_2026.feePercent / 100))),
    body: `One-off NHG fee ≈ ${fmtEuro(Math.round(380_000 * (BUYING_HOUSE_NHG_2026.feePercent / 100)))} when NHG applies — can reduce lender risk and sometimes interest conditions. Verify on nhg.nl.`,
  },
] as const;

export const buyingHouseReference2026 = {
  taxYear: BUYING_HOUSE_REFERENCE_TAX_YEAR,
  sourceNote: "Belastingdienst overdrachtsbelasting, nhg.nl 2026 grens, Government.nl home ownership, Kadaster, AFM mortgage guidance.",
  disclaimer: BUYING_HOUSE_REFERENCE_DISCLAIMER,
  highlights: buyingHouseReference2026Highlights,
  thresholds: buyingHouseReference2026Thresholds,
  purchasePriceTable: buyingHousePurchasePriceTable2026,
  overbiddingTable: buyingHouseOverbiddingTable2026,
  workedExamples: buyingHouseWorkedExamples2026,
  transferTax: BUYING_HOUSE_TRANSFER_TAX,
  nhg: BUYING_HOUSE_NHG_2026,
} as const;
