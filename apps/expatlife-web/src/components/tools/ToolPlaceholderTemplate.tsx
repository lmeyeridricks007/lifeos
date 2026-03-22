import Link from "next/link";
import { Section } from "@/components/ui/section";
import { SignupCTA } from "@/src/components/tools/SignupCTA";
import type { ToolRecord } from "@/src/lib/tools/loadToolRegistry";

type ToolPlaceholderTemplateProps = {
  tool: ToolRecord;
  relatedTools: ToolRecord[];
};

export function ToolPlaceholderTemplate({ tool, relatedTools }: ToolPlaceholderTemplateProps) {
  return (
    <>
      <Section eyebrow="Tool" title={tool.title} subtitle={tool.summary}>
        <div className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
          Coming soon
        </div>
      </Section>

      <Section title="What this tool will do">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
          This tool is designed to provide practical, structured outputs you can act on quickly. It will be fully data-driven and integrated with related guides and tool flows.
        </div>
      </Section>

      <Section title="Example inputs">
        <ul className="list-disc space-y-2 rounded-2xl border border-slate-200 bg-white p-5 pl-9 text-sm text-slate-700">
          {(tool.exampleInputs ?? ["Your profile details", "Timing and constraints", "Current status"]).map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </Section>

      <Section title="Example outputs">
        <ul className="list-disc space-y-2 rounded-2xl border border-slate-200 bg-white p-5 pl-9 text-sm text-slate-700">
          {(tool.exampleOutputs ?? ["Actionable recommendations", "Prioritized next steps", "Relevant links"]).map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </Section>

      <Section title="Why this tool is useful">
        <p className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
          {tool.mostUsefulFor ??
            "It helps reduce uncertainty by turning broad relocation questions into concrete and trackable steps."}
        </p>
      </Section>

      <Section title="Related guides">
        <ul className="grid gap-3 sm:grid-cols-2">
          {tool.relatedGuides.map((href) => (
            <li key={href}>
              <Link href={href} className="text-sm font-medium text-brand-700 hover:underline">
                {href}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Related tools">
        <div className="grid gap-4 md:grid-cols-2">
          {relatedTools.map((relatedTool) => (
            <Link
              key={relatedTool.id}
              href={relatedTool.route}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow"
            >
              <p className="text-sm font-semibold text-slate-900">{relatedTool.title}</p>
              <p className="mt-1 text-sm text-slate-600">{relatedTool.summary}</p>
            </Link>
          ))}
        </div>
      </Section>

      {tool.affiliateCategories && tool.affiliateCategories.length > 0 ? (
        <Section>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            Later, this tool may connect you to optional partner offers for: {tool.affiliateCategories.join(", ")}.
          </div>
        </Section>
      ) : null}

      <Section>
        <SignupCTA
          title="Get notified when this tool launches"
          subtitle="Create a free account to get launch access and save your planning context."
          bullets={["Early launch notification", "Save your preferences", "Access new tools faster"]}
          primaryCtaLabel="Create free account"
          primaryCtaHref="/signup"
          secondaryCtaLabel="Get notified"
          secondaryCtaHref="/signup"
          variant="panel"
        />
      </Section>
    </>
  );
}
