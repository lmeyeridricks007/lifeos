import Link from "next/link";
import { Section } from "@/components/ui/section";
import { SignupCTA } from "@/src/components/tools/SignupCTA";
import type { ToolCategory, ToolRecord } from "@/src/lib/tools/loadToolRegistry";

type ToolHubTemplateProps = {
  category: ToolCategory;
  liveTools: ToolRecord[];
  comingSoonTools: ToolRecord[];
  relatedGuides: string[];
};

function ToolCard({ tool }: { tool: ToolRecord }) {
  const badgeClass =
    tool.status === "live"
      ? "bg-emerald-100 text-emerald-800"
      : "bg-amber-100 text-amber-800";

  return (
    <Link
      href={tool.route}
      className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
    >
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-semibold text-slate-900">{tool.title}</p>
        <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${badgeClass}`}>
          {tool.status === "live" ? "Live" : "Coming soon"}
        </span>
      </div>
      <p className="mt-2 text-sm text-slate-600">{tool.summary}</p>
      {tool.mostUsefulFor ? <p className="mt-3 text-xs text-slate-500">Most useful for: {tool.mostUsefulFor}</p> : null}
      <p className="mt-3 text-sm font-semibold text-brand-700">Open tool →</p>
    </Link>
  );
}

export function ToolHubTemplate({ category, liveTools, comingSoonTools, relatedGuides }: ToolHubTemplateProps) {
  const hasAffiliateCategories = [...liveTools, ...comingSoonTools].some((tool) => (tool.affiliateCategories?.length ?? 0) > 0);

  return (
    <>
      <Section eyebrow="Tools" title={category.label} subtitle={category.description}>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm text-slate-700">
            Browse practical tools in this category. Live tools are available now, and coming-soon tools already include useful scope so you can plan ahead.
          </p>
        </div>
      </Section>

      <Section title="Featured live tools" subtitle="Start with these ready-to-use tools.">
        {liveTools.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {liveTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-600">
            No live tools in this category yet. Join the waitlist to get notified first.
          </div>
        )}
      </Section>

      <Section title="All tools in this category" subtitle="Live and planned tools grouped in one place.">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...liveTools, ...comingSoonTools].map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </Section>

      <Section title="Related guides" subtitle="Use these guides together with the tools for deeper context.">
        <ul className="grid gap-3 sm:grid-cols-2">
          {relatedGuides.map((href) => (
            <li key={href}>
              <Link href={href} className="text-sm font-medium text-brand-700 hover:underline">
                {href}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {hasAffiliateCategories ? (
        <Section title="Planning support" subtitle="Some tools in this category may later include optional partner recommendations.">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            Affiliate-connected recommendations are optional and will be context-aware where relevant.
          </div>
        </Section>
      ) : null}

      <Section>
        <SignupCTA
          title="Get notified when new tools go live"
          subtitle="Create a free account to save your plan and receive new-tool updates for this category."
          bullets={[
            "Get launch notifications",
            "Save your tool history",
            "Unlock deeper planning experiences"
          ]}
          primaryCtaLabel="Create free account"
          primaryCtaHref="/signup"
          secondaryCtaLabel="Browse all tools"
          secondaryCtaHref="/netherlands/tools/"
          variant="panel"
        />
      </Section>
    </>
  );
}
