import Link from "next/link";
import type { ServicesHubPageData } from "@/src/lib/services-hub/types";

export function EditorialDisclosureBlock({
  howItWorks,
}: {
  howItWorks: ServicesHubPageData["howItWorks"];
}) {
  return (
    <section id="how-it-works" className="scroll-mt-24 mt-8 space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        {howItWorks.heading}
      </h2>
      <div className="space-y-3">
        {howItWorks.paragraphs.map((p, i) => (
          <p key={i} className="text-slate-700 leading-relaxed">
            {p}
          </p>
        ))}
      </div>
      <div className="rounded-xl border border-slate-200 bg-amber-50/50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Editorial disclosure
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-700">
          {howItWorks.disclosure.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-slate-600">
          For full context, see our{" "}
          <Link href="/disclaimer/" className="font-medium text-slate-800 hover:text-slate-900 underline">
            Disclaimer
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
