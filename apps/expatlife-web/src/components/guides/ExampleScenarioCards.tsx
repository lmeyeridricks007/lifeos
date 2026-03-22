import Link from "next/link";
import type { GuideData } from "@/src/lib/guides/types";

type ExampleScenarioCardsProps = {
  items: NonNullable<GuideData["exampleScenarios"]>;
};

export function ExampleScenarioCards({ items }: ExampleScenarioCardsProps) {
  if (!items?.length) return null;

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((scenario, i) => (
        <li key={`scenario-${i}`} className="h-full">
          <Link
            href={scenario.href}
            className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:bg-slate-50/60"
          >
            <p className="text-sm font-semibold text-slate-900">{scenario.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{scenario.summary}</p>
            <span className="mt-4 text-sm font-medium text-brand-700">{scenario.ctaLabel ?? "Use this scenario"}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
