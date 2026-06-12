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
