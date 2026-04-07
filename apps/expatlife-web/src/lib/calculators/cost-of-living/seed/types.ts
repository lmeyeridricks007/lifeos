/** Shared types for cost-of-living planning seed (editorial / planning only — not market data). */

export type RentBandEur = {
  /** Lower planning bound — tight budget, luck, or older stock. */
  low: number;
  /** Default for calculator deterministic output. */
  mid: number;
  /** Upper planning bound — prime stock or tight market timing. */
  high: number;
};

export type CityCostSeedRow = {
  /** Display label for editorial UI. */
  displayName: string;
  /**
   * Rent (€/month). **low/mid/high** = cautious planning band; **mid** feeds the calculator default.
   * Not sourced from listing APIs — revise periodically when market stories shift (no official claim).
   */
  rent: {
    roomShared: RentBandEur;
    oneBed: RentBandEur;
    twoBed: RentBandEur;
    threeBed: RentBandEur;
    /** Temporary / furnished / short-fuse housing — typically above long-term lease mid. */
    shortStayMonthly: RentBandEur;
  };
  /** ~2-person utilities mid (€/mo): energy + water + local slice; real bills vary by home and year. */
  utilitiesMonthlyMidTwoPerson: number;
  /** Groceries & household (€/mo per adult) before lifestyle discretionary multiplier. */
  groceriesPerAdultMid: number;
  /** Extra grocery €/mo per child (rough; ages and diets differ). */
  groceriesPerChildMid: number;
  /** Basic health insurance planning €/mo per adult (premiums change yearly — not a quote). */
  healthInsuranceAdultMid: number;
  /** Simplified child / youth policy placeholder €/mo. */
  healthInsuranceChildMid: number;
  /** Urban transport context €/mo before bike/OV/car profile in engine. */
  transportUrbanBaselineMid: number;
  /** Registered childcare full-time style placeholder €/mo per child (hours & waiting lists vary). */
  childcareFullTimeMidPerChild: number;
  /** Dining & leisure anchor €/mo per adult before dining/travel multipliers. */
  leisureBaselinePerAdultMid: number;
  /** Parking pressure €/mo when user opts into car parking (planning). */
  parkingPressureEur: number;
  /** Setup contingency sensitivity (≥1 = slightly higher friction markets). */
  setupFrictionMult: number;
  /** Versus Rotterdam reference (=1.0); used in formula scaling (e.g. car cost add-on). */
  groceryIndexVsNational: number;
};

export type PlanningProviderCategory =
  | "banks"
  | "insurers"
  | "relocationServices"
  | "rentalPlatforms"
  | "internetUtilities"
  | "taxAdvisory";

export type PlanningProviderAudience = "expats" | "students" | "families" | "professionals";

export type PlanningProviderSeed = {
  id: string;
  slug: string;
  name: string;
  category: PlanningProviderCategory;
  /** One-line factual description — no superlatives. */
  summary: string;
  /** Who often shortlists this when budgeting a move (editorial). */
  bestFor: string;
  pricingNote: string;
  ctaLabel: string;
  /** Internal route or https URL. */
  href: string;
  tags: string[];
  /** Higher surfaces first within the same category (editorial ordering, not pay-to-rank). */
  editorialWeight: number;
  isAffiliateReady: boolean;
  market: "NL";
  audience: PlanningProviderAudience[];
  /** True = off-site commercial or partner destination. */
  external: boolean;
};
