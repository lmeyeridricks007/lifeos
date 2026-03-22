import Link from "next/link";
import { Section } from "@/components/ui/section";
import {
  ContentTable,
  ContentTableRow,
  ContentTableCell,
  TableBadge,
} from "@/components/ui/content-table";

const ROWS = [
  { step: "Documents", when: "Before move", needed: "Yes" },
  { step: "Address registration", when: "After arrival", needed: "Yes" },
  { step: "BSN", when: "After arrival", needed: "Yes" },
  { step: "Bank account", when: "After arrival", needed: "Usually" },
  { step: "Health insurance", when: "After arrival", needed: "Often" },
  { step: "DigiD", when: "First 90 days", needed: "Recommended" },
  { step: "GP registration", when: "First 90 days", needed: "Recommended" },
  { step: "Housing stability", when: "Before move / after arrival", needed: "Important" },
] as const;

export function ChecklistAtAGlanceSection({ contained = false }: { contained?: boolean } = {}) {
  return (
    <Section
      id="checklist-at-a-glance"
      contained={contained}
      className={!contained ? "pl-5" : undefined}
      title="Moving to the Netherlands: checklist at a glance"
      subtitle="Key steps, typical stage, and whether they are usually needed."
    >
      <ContentTable headers={["Step", "Typical stage", "Often needed"]} minWidth="360px">
        {ROWS.map((row) => (
          <ContentTableRow key={row.step}>
            <ContentTableCell emphasis>{row.step}</ContentTableCell>
            <ContentTableCell>{row.when}</ContentTableCell>
            <ContentTableCell>
              <TableBadge value={row.needed} />
            </ContentTableCell>
          </ContentTableRow>
        ))}
      </ContentTable>
      <p className="mt-4 text-sm text-slate-600">
        For a full moving to the Netherlands checklist you can work through, use our{" "}
        <Link href="/netherlands/moving-checklist-netherlands" className="font-medium text-brand-700 underline hover:text-brand-800">
          moving checklist guide
        </Link>{" "}
        and the{" "}
        <Link href="/netherlands/moving/tools/moving-checklist" className="font-medium text-brand-700 underline hover:text-brand-800">
          Moving Checklist Generator
        </Link>.
      </p>
    </Section>
  );
}
