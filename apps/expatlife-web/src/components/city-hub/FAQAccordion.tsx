"use client";

import { Accordion } from "@/components/ui/accordion";
import type { CityHubPageData } from "@/src/lib/city-hub/types";

export function FAQAccordion({ data }: { data: CityHubPageData }) {
  const items =
    data.faqs?.map((item, i) => ({
      id: `faq-${i}`,
      title: item.q,
      content: item.a,
    })) ?? [];

  if (!items.length) return null;

  return (
    <Accordion items={items} allowMultiple={false} className="max-w-3xl" />
  );
}
