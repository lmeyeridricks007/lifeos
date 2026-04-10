"use client";

import { Accordion } from "@/components/ui/accordion";
import { SURVIVAL_GUIDE_FAQ_ITEMS } from "./survivalGuideFaqContent";

export function SurvivalGuideFaq() {
  return (
    <Accordion
      items={SURVIVAL_GUIDE_FAQ_ITEMS.map((i) => ({
        id: i.id,
        title: i.question,
        content: i.answer,
      }))}
      tone="copilot"
      density="comfortable"
    />
  );
}
