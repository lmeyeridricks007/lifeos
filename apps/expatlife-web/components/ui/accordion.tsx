"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

type AccordionItem = { id: string; title: string; content: ReactNode | string };

type AccordionProps = {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
};

export function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };
  return (
    <div className={cn("space-y-2", className)}>
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        return (
          <div key={item.id} className="rounded-xl border border-slate-200 bg-white">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-${item.id}`}
              id={`accordion-heading-${item.id}`}
              className="flex min-h-[44px] w-full items-center justify-between gap-2 px-4 py-3 text-left text-sm font-semibold text-slate-900"
            >
              {item.title}
              <ChevronDown className={cn("h-4 w-4 shrink-0 transition", isOpen && "rotate-180")} />
            </button>
            <div
              id={`accordion-${item.id}`}
              role="region"
              aria-labelledby={`accordion-heading-${item.id}`}
              hidden={!isOpen}
              className="border-t border-slate-100 px-4 pb-4 pt-3"
            >
              {typeof item.content === "string" ? (
                <p className="text-sm text-slate-700">{item.content}</p>
              ) : (
                item.content
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
