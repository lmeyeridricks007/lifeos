import { BALANCED_PRIORITIES, defaultFormState, emptyOffer } from "./defaults";
import type { JobOfferComparisonFormState, JobOfferInput } from "./types";

function slot(
  id: "A" | "B" | "C",
  label: string,
  offer: JobOfferInput
): JobOfferComparisonFormState["offers"][typeof id] {
  return { id, label, expanded: true, offer };
}

/** Two-offer state from patches (merged onto empty offer). */
export function fixtureTwoOffers(a: Partial<JobOfferInput>, b: Partial<JobOfferInput>, labels?: { a?: string; b?: string }): JobOfferComparisonFormState {
  const base = emptyOffer();
  const d = defaultFormState();
  return {
    mode: "compare_two",
    includeOfferC: false,
    offers: {
      A: slot("A", labels?.a ?? "Offer A", { ...base, ...a }),
      B: slot("B", labels?.b ?? "Offer B", { ...base, ...b }),
      C: d.offers.C,
    },
    priorities: { ...BALANCED_PRIORITIES },
  };
}
