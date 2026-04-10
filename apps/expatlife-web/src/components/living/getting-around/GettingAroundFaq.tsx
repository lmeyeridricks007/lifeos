"use client";

import { Accordion } from "@/components/ui/accordion";
import { GETTING_AROUND_FAQ_ITEMS } from "./gettingAroundContent";

export function GettingAroundFaq() {
  return (
    <Accordion
      items={GETTING_AROUND_FAQ_ITEMS.map((i) => ({
        id: i.id,
        title: i.question,
        content: i.answer,
      }))}
      tone="copilot"
      density="comfortable"
    />
  );
}
