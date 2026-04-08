"use client";

import { Container } from "@/components/ui/container";
import { SectionBlock } from "@/components/page/pillar-template";
import { CHILDCARE_OFFICIAL_SOURCES } from "@/src/content/tools/childcare/childcareOfficialSources";
import { trackOutboundLink } from "@/lib/analytics/track";

export function ChildcareOfficialSources() {
  return (
    <Container>
      <SectionBlock id="official-sources" title="Official sources" compact className="scroll-mt-28 py-4 sm:py-5 md:scroll-mt-32">
        <p className="text-sm text-copilot-text-secondary">
          Use these for rules, applications, and entitlement — not as proof of this tool’s euro outputs. Dutch and English
          pages may differ; when in doubt, prefer the Belastingdienst wording.
        </p>
        <ul className="mt-4 grid list-none gap-3 p-0 sm:grid-cols-2">
          {CHILDCARE_OFFICIAL_SOURCES.map((s) => (
            <li
              key={s.href}
              className="rounded-xl border border-copilot-primary/12 bg-copilot-bg-soft/35 p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.06]"
            >
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-copilot-primary underline-offset-2 hover:underline"
                onClick={() =>
                  trackOutboundLink({
                    destination_url: s.href,
                    link_text: s.label,
                    link_type: "official_source",
                    page_context: "childcare_cost_estimator",
                  })
                }
              >
                {s.label} →
              </a>
              <p className="mt-2 text-xs leading-relaxed text-copilot-text-secondary">{s.note}</p>
            </li>
          ))}
        </ul>
      </SectionBlock>
    </Container>
  );
}
