/**
 * Build a dynamic personalized summary for the moving checklist based on extended input.
 */

import type { MovingChecklistInputExtended } from "./types";

function originLabel(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function buildPersonalizedSummary(input: MovingChecklistInputExtended): string {
  const origin = originLabel(input.from || "your country");
  const parts: string[] = [];

  // Base by stage
  if (input.stage === "before-move") {
    const employment =
      input.employment === "job-offer"
        ? "job offer"
        : input.employment === "employed"
          ? "job secured"
          : "job search";
    parts.push(
      `Moving from ${origin} with a ${employment} usually means preparing documents early, confirming your employer-sponsored route if relevant, and planning your arrival address before departure.`
    );
  } else if (input.stage === "arriving-soon") {
    parts.push(
      "You're in the final stretch. Focus on travel logistics, hand luggage documents, and your short list of immediate after-arrival tasks. Use the Arrival Planner next for your first week and first month."
    );
  } else {
    parts.push(
      "You've arrived. This checklist keeps the pre-move and travel steps for reference; use the Arrival Planner for your first days and the First 90 Days Planner for the full settlement sequence."
    );
  }

  // Household
  if (input.household === "partner") {
    parts.push(
      "Because you're moving with a partner, document readiness and joint registration steps are included where relevant."
    );
  }
  if (input.household === "kids") {
    parts.push(
      "With children, family documents, school preparation, and childcare-related steps are highlighted."
    );
  }

  // Region
  if (input.region === "non-eu") {
    parts.push(
      "As a non-EU national, document readiness, funding access, and first-address planning are key before travel."
    );
  }

  // Employment
  if (input.employment === "searching") {
    parts.push(
      "Because you're still searching for work, we've included a stronger funding buffer and housing flexibility, plus education and CV readiness."
    );
  }

  // Housing
  if (input.housingReadiness === "no-place-yet" || input.needsTemporaryHousing) {
    parts.push(
      "With no fixed place yet, temporary housing and registration planning are prioritised."
    );
  }

  // Documents
  if (!input.hasCoreDocsReady) {
    parts.push("We've prioritised core document gathering and linked to the Document Readiness Checker for a full list.")
  }

  // Money transfer
  if (input.largeMoneyTransfer) {
    parts.push("International transfer and first-weeks' access to funds are emphasised.");
  }

  // Shipping
  if (input.shippingNeeds) {
    parts.push("Shipping and keeping essential documents out of shipment are included.");
  }

  return parts.join(" ");
}
