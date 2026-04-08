import type { UtilitiesServicesInput } from "../types";

export type UtilitiesChecklistPhase = "before_move_in" | "move_in_day" | "first_month";

export type UtilitiesChecklistTemplate = {
  id: string;
  phase: UtilitiesChecklistPhase;
  /** Short heading for accordions or phase sub-lists */
  headline: string;
  text: string;
  /** Deterministic inclusion predicate — same logic as engine checklist builder. */
  when: (input: UtilitiesServicesInput) => boolean;
  /** Tag for dedup / analytics / “why did I see this?” */
  sourceRule: string;
};

/** Ordered templates — ids must stay unique; engine walks in array order. */
export const utilitiesChecklistTemplates: readonly UtilitiesChecklistTemplate[] = [
  {
    id: "landlord-included",
    phase: "before_move_in",
    headline: "Clarify inclusions",
    text: "Ask the landlord, agent, or VvE what is included: electricity, gas/district heat, water, internet, service charges, and bulk arrangements.",
    when: () => true,
    sourceRule: "core_always",
  },
  {
    id: "inclusions-unclear",
    phase: "before_move_in",
    headline: "Get written clarity",
    text: "If inclusions are unclear on paper, ask for written clarification before you sign — energy and internet are the usual surprise lines.",
    when: (i) => i.utilitiesIncludedInRent === "unsure" || i.landlordBuildingIncludesServices === "unsure",
    sourceRule: "inclusions_unsure",
  },
  {
    id: "district-heating-clarify",
    phase: "before_move_in",
    headline: "District / block heat",
    text: "With district or block heating, confirm how heat is metered, allocated, and whether you still choose an electricity supplier yourself.",
    when: (i) => i.heating === "district",
    sourceRule: "heating_district",
  },
  {
    id: "older-home-energy",
    phase: "before_move_in",
    headline: "Shell and bills",
    text: "Older or poorly insulated homes can make energy disproportionately expensive — budget a wider band until you have a year of readings.",
    when: (i) => i.energyQuality === "low" || i.energyQuality === "unknown",
    sourceRule: "shell_uncertainty",
  },
  {
    id: "internet-availability",
    phase: "before_move_in",
    headline: "Broadband at the address",
    text: "Check broadband availability at the exact address (fiber vs DSL/cable) and realistic installation lead times — especially if you work from home.",
    when: (i) => i.includeInternet,
    sourceRule: "internet_on",
  },
  {
    id: "wfh-internet",
    phase: "before_move_in",
    headline: "WFH go-live",
    text: "If you work from home, book installation early and confirm upload speeds and backup options (mobile hotspot) for go-live week.",
    when: (i) => i.includeInternet && i.wfhHeavy,
    sourceRule: "wfh_internet",
  },
  {
    id: "compare-energy",
    phase: "before_move_in",
    headline: "Energy retail (if yours)",
    text: "Shortlist energy suppliers if you contract yourself — compare tariff type (fixed vs variable), green mix, and contract length.",
    when: (i) =>
      i.utilitiesIncludedInRent !== "yes" &&
      (i.landlordBuildingIncludesServices !== "yes" || i.utilitiesIncludedInRent === "unsure"),
    sourceRule: "energy_self_contract_likely",
  },
  {
    id: "owner-meter",
    phase: "before_move_in",
    headline: "Owner handover",
    text: "As owner, align energy switch dates with transfer / meter handover so you do not pay for the seller’s consumption window.",
    when: (i) => i.renterOrOwner === "owner",
    sourceRule: "tenure_owner",
  },
  {
    id: "mobile-sim",
    phase: "before_move_in",
    headline: "Mobile lines",
    text: "Plan Dutch mobile lines (SIM-only vs handset) and whether you need overlap with a foreign number during the first weeks.",
    when: (i) => i.includeMobile,
    sourceRule: "mobile_on",
  },
  {
    id: "house-share-mobile",
    phase: "before_move_in",
    headline: "House share admin",
    text: "In a house share, agree whether internet and energy are split evenly or billed to one housemate before opening joint contracts.",
    when: (i) => i.householdType === "house_share",
    sourceRule: "house_share_admin",
  },
  {
    id: "student-bundled",
    phase: "before_move_in",
    headline: "Shared / student housing",
    text: "Student or shared rooms often bundle utilities — still confirm what happens if you exceed fair-use or if the room is sublet.",
    when: (i) => i.housingType === "student_room" || i.householdType === "house_share",
    sourceRule: "shared_housing_archetype",
  },
  {
    id: "move-soon-priority",
    phase: "before_move_in",
    headline: "Queues before keys",
    text: "Moving soon: prioritize anything with an installation queue (internet, sometimes meter validation) so services align with key handover.",
    when: (i) => i.moveStage === "moving_soon",
    sourceRule: "move_stage_soon",
  },
  {
    id: "researching-buffer",
    phase: "before_move_in",
    headline: "While still searching",
    text: "Still researching: model a higher first-month buffer — quotes and gemeente letters often arrive on different timelines.",
    when: (i) => i.moveStage === "researching",
    sourceRule: "move_stage_researching",
  },
  {
    id: "already-moved-catchup",
    phase: "before_move_in",
    headline: "Post-move reconciliation",
    text: "Already moved: reconcile what you thought was included vs first invoices — adjust contracts before intro pricing rolls off.",
    when: (i) => i.moveStage === "already_moved",
    sourceRule: "move_stage_post_move",
  },
  {
    id: "meter-readings",
    phase: "move_in_day",
    headline: "Meter evidence",
    text: "Record meter readings on handover with photos or PDFs and timestamps shared with the landlord or previous owner.",
    when: () => true,
    sourceRule: "core_move_in",
  },
  {
    id: "energy-active",
    phase: "move_in_day",
    headline: "Power on day one",
    text: "Confirm whether electricity is already active, needs a new contract, or is supplied via landlord bulk billing.",
    when: (i) => i.utilitiesIncludedInRent !== "yes",
    sourceRule: "energy_activation_check",
  },
  {
    id: "internet-appointment",
    phase: "move_in_day",
    headline: "Install visit",
    text: "Confirm internet installation appointment, whether a technician needs building access, and who provides modem/router.",
    when: (i) => i.includeInternet,
    sourceRule: "internet_install_day",
  },
  {
    id: "save-contracts",
    phase: "move_in_day",
    headline: "Paper trail",
    text: "Store contract IDs, customer numbers, IBANs for direct debit, and login details in one secure place you can share with housemates if needed.",
    when: () => true,
    sourceRule: "core_move_in",
  },
  {
    id: "gemeente-letters",
    phase: "first_month",
    headline: "Local post",
    text: "Watch for gemeente and water-authority post (waste, sewer, rioolheffing-style lines) — easy to miss if your mail is still forwarding.",
    when: () => true,
    sourceRule: "municipality_awareness",
  },
  {
    id: "first-invoices",
    phase: "first_month",
    headline: "First bills",
    text: "Review first invoices for energy, internet, and insurance — partial months and setup lines are normal in month one.",
    when: () => true,
    sourceRule: "core_first_month",
  },
  {
    id: "revisit-contracts",
    phase: "first_month",
    headline: "Promo endings",
    text: "Set a calendar reminder before intro tariffs or short promotions end so you are not surprised by renewal pricing.",
    when: () => true,
    sourceRule: "renewal_hygiene",
  },
  {
    id: "overlap-temp",
    phase: "first_month",
    headline: "Two addresses",
    text: "If temporary housing overlaps the new lease, track which address still pays which utility so you do not double-book direct debits.",
    when: (i) => i.shortTermOverlap,
    sourceRule: "overlap_flag",
  },
  {
    id: "insurance-docs",
    phase: "first_month",
    headline: "Contents evidence",
    text: "For contents cover, photograph high-value items and keep receipts where relevant — helpful if you ever claim.",
    when: (i) => i.includeContentsInsurance,
    sourceRule: "contents_on",
  },
];
