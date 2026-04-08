"use client";

import { cn } from "@/lib/cn";

export type ChecklistGroup = {
  title: string;
  bullets: string[];
};

type Props = {
  groups: ChecklistGroup[];
  className?: string;
};

export function EmploymentBeforeYouDecideChecklist({ groups, className }: Props) {
  return (
    <section
      id="before-you-decide-checklist"
      className={cn("scroll-mt-28 space-y-4 md:scroll-mt-32", className)}
      aria-labelledby="before-you-decide-heading"
    >
      <h3 id="before-you-decide-heading" className="text-base font-semibold tracking-tight text-copilot-text-primary">
        What to ask before choosing
      </h3>
      <p className="max-w-3xl text-sm text-copilot-text-secondary">
        Practical prompts for HR, payroll, or advisors — planning only, not a complete diligence list.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {groups.map((g) => (
          <article
            key={g.title}
            className="rounded-xl border border-copilot-primary/12 bg-copilot-surface p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.05]"
          >
            <p className="text-sm font-semibold text-copilot-text-primary">{g.title}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
              {g.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
