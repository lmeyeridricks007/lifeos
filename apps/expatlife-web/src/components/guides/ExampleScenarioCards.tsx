import Link from "next/link";
import type { GuideData } from "@/src/lib/guides/types";

type ExampleScenarioCardsProps = {
  items: NonNullable<GuideData["exampleScenarios"]>;
};

export function ExampleScenarioCards({ items }: ExampleScenarioCardsProps) {
  if (!items?.length) return null;

  return (
    <ul className="grid gap-4 sm:gap-gap-grid sm:grid-cols-2 lg:grid-cols-3">
      {items.map((scenario, i) => (
        <li key={`scenario-${i}`} className="h-full">
          <Link
            href={scenario.href}
            className="group flex h-full flex-col rounded-card border border-border bg-surface-raised p-5 shadow-card transition-[border-color,box-shadow] duration-150 hover:border-border-strong hover:shadow-card-hover"
          >
            <p className="text-sm font-semibold text-foreground">{scenario.title}</p>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted">{scenario.summary}</p>
            <span className="mt-5 text-sm font-semibold text-link transition-colors duration-150 group-hover:text-link-hover">
              {scenario.ctaLabel ?? "Use this scenario"}
              <span aria-hidden> →</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
