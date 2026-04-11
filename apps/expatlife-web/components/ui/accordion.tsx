"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { transitionSurface, transitionTransform } from "@/lib/ui/interaction";

type AccordionItem = { id: string; title: ReactNode; content: ReactNode | string };

type AccordionProps = {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
  /** Larger tap targets + spacing for guide FAQ surfaces */
  density?: "default" | "comfortable";
  /** Premium: layered gradient items, calmer borders, stronger focus rings */
  /** Bold: borderless SaaS FAQ — white tiles, shadow-sm, hover slate wash */
  /** Copilot: ExpatOS — soft tiles, cyan focus, no hairline borders */
  tone?: "default" | "premium" | "bold" | "copilot";
};

export function Accordion({
  items,
  allowMultiple = false,
  className,
  density = "default",
  tone = "default",
}: AccordionProps) {
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
  const comfortable = density === "comfortable";
  const premium = tone === "premium";
  const bold = tone === "bold";
  const copilot = tone === "copilot";

  return (
    <div
      className={cn(
        comfortable ? "space-y-3" : "space-y-2",
        premium && comfortable && !bold && !copilot && "space-y-3.5",
        (bold || copilot) && "space-y-2.5",
        className
      )}
    >
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        return (
          <div
            key={item.id}
            className={cn(
              "overflow-hidden",
              bold && "rounded-lg border-0 bg-copilot-surface shadow-sm transition-shadow duration-200 hover:shadow-md",
              copilot &&
                "rounded-xl border-0 bg-slate-50/90 shadow-expatos-sm transition-[box-shadow,transform] duration-200 ease-out hover:shadow-expatos-md motion-reduce:transition-none",
              premium && !bold && !copilot
                ? "rounded-card border-0 bg-gradient-to-br from-surface-raised to-surface-muted/25 shadow-soft ring-1 ring-border/[0.14]"
                : !bold && !premium && !copilot && "rounded-card border border-border bg-surface-raised",
              comfortable && !premium && !bold && !copilot && "shadow-none ring-1 ring-border/12",
              !comfortable && !premium && !bold && !copilot && "shadow-card"
            )}
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-${item.id}`}
              id={`accordion-heading-${item.id}`}
              className={cn(
                transitionSurface,
                "flex w-full items-center justify-between gap-3 text-left text-sm font-semibold ease-out",
                bold &&
                  "text-slate-900 hover:bg-slate-50 active:bg-slate-100/80 motion-reduce:active:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-copilot-bg-light",
                copilot &&
                  "text-copilot-text-primary hover:bg-white/80 active:bg-white motion-reduce:active:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                premium &&
                  !bold &&
                  !copilot &&
                  "text-foreground hover:bg-brand-muted/[0.12] active:bg-brand-muted/20 motion-reduce:active:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/35 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
                !bold && !premium && !copilot && "text-foreground hover:bg-surface-muted/40 active:bg-surface-muted/60 motion-reduce:active:bg-transparent",
                comfortable ? "min-h-[48px] px-4 py-3.5" : "min-h-[44px] gap-2 px-4 py-3"
              )}
            >
              <span className={cn(comfortable && "pr-2 leading-snug")}>{item.title}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0",
                  bold || copilot ? "text-copilot-text-muted" : "text-foreground-muted",
                  transitionTransform,
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              id={`accordion-${item.id}`}
              role="region"
              aria-labelledby={`accordion-heading-${item.id}`}
              hidden={!isOpen}
              className={cn(
                bold && "border-0 bg-slate-50/60",
                copilot && "border-0 bg-white/70",
                premium && !bold && !copilot && "border-t border-border/50 bg-surface-muted/15",
                !bold && !premium && !copilot && "border-t border-border/80",
                comfortable ? "px-4 pb-4 pt-4" : "px-4 pb-4 pt-3"
              )}
            >
              {typeof item.content === "string" ? (
                <p
                  className={cn(
                    "text-sm",
                    bold || copilot ? "text-copilot-text-secondary" : "text-foreground-muted"
                  )}
                >
                  {item.content}
                </p>
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
