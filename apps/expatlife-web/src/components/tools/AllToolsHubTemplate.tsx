import Link from "next/link";
import { Section } from "@/components/ui/section";
import type { ToolCategory, ToolRecord } from "@/src/lib/tools/loadToolRegistry";

type AllToolsHubTemplateProps = {
  categories: ToolCategory[];
  featuredTools: ToolRecord[];
};

export function AllToolsHubTemplate({ categories, featuredTools }: AllToolsHubTemplateProps) {
  return (
    <>
      <Section
        eyebrow="Netherlands tools"
        title="All Netherlands expat tools"
        subtitle="A data-driven catalog of calculators, planners, checkers and comparisons across moving, money, work and daily life."
      >
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          Start from a category hub, then open the tool that matches your current decision.
        </div>
      </Section>

      <Section title="Featured tools" subtitle="High-utility tools expats use first.">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.route}
              className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-semibold text-slate-900">{tool.title}</h3>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                    tool.status === "live" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {tool.status === "live" ? "Live" : "Coming soon"}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{tool.summary}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Browse by category" subtitle="Each category has its own tools hub with live + upcoming tools.">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.route}
              className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
            >
              <h3 className="text-base font-semibold text-slate-900">{category.label}</h3>
              <p className="mt-2 text-sm text-slate-600">{category.description}</p>
              <p className="mt-3 text-sm font-semibold text-brand-700">Open category tools →</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
