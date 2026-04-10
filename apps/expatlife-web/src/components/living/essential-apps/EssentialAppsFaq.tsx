"use client";

import { Accordion } from "@/components/ui/accordion";
import { livingAppsFaq } from "./livingEssentialApps";

export function EssentialAppsFaq() {
  return (
    <Accordion
      items={livingAppsFaq.map((i) => ({
        id: i.id,
        title: i.question,
        content: i.answer,
      }))}
      tone="copilot"
      density="comfortable"
    />
  );
}
