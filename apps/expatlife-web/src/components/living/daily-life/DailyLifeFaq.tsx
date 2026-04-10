"use client";

import { Accordion } from "@/components/ui/accordion";
import { livingDailyLifeFaq } from "./config/livingDailyLife.config";

export function DailyLifeFaq() {
  return (
    <Accordion
      items={livingDailyLifeFaq.map((i) => ({
        id: i.id,
        title: i.question,
        content: i.answer,
      }))}
      tone="copilot"
      density="comfortable"
    />
  );
}
