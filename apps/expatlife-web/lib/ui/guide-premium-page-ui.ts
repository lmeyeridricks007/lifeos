import { cn } from "@/lib/cn";

/** Stack section title and first orientation copy before a full-width infographic. */
export const guidePremiumIntroStackClass = "flex flex-col gap-6";

/** Full-width infographic directly under the intro block (single-column pillar layout). */
export const guidePremiumVisualAfterIntroClass = "w-full max-w-none";

/** Standard vertical spacing between intro copy and the section infographic. */
export const guidePremiumVisualSpacingClass = cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8");

/** Checklists, tables, scenarios and affiliates below the section infographic. */
export const guidePremiumSectionDetailStackClass = cn(
  "mt-8 flex w-full flex-col gap-6 sm:mt-10 sm:gap-8"
);

/**
 * Responsive columns for tip/feature card grids — avoids a lone card on the last row
 * (e.g. four cards in a 3-column grid). Prefer 2×2 on md/lg; use 4×1 on xl for exactly four cards.
 */
export function guidePremiumCardGridClass(itemCount: number): string {
  const base = "grid gap-4 md:grid-cols-2";
  if (itemCount === 4) {
    return cn(base, "xl:grid-cols-4");
  }
  if (itemCount === 5 || itemCount === 6 || itemCount % 3 === 0) {
    return cn(base, "xl:grid-cols-3");
  }
  if (itemCount % 4 === 0) {
    return cn(base, "xl:grid-cols-4");
  }
  if (itemCount % 2 === 0) {
    return cn(base, "xl:grid-cols-2");
  }
  return cn(base, "xl:grid-cols-4");
}
