import Link from "next/link";
import { Section } from "@/components/ui/section";
import {
  ContentTable,
  ContentTableRow,
  ContentTableCell,
} from "@/components/ui/content-table";

const COST_ROWS = [
  { area: "Flights", what: "International travel to the Netherlands" },
  { area: "Temporary housing", what: "Short-term accommodation before long-term rental" },
  { area: "Documents", what: "Certificate copies, translation, apostille" },
  { area: "Housing setup", what: "Deposit, furniture, utilities" },
  { area: "First month", what: "Transport, groceries, insurance, admin setup" },
] as const;

export function CostOfMovingSection() {
  return (
    <Section
      id="cost-of-moving"
      title="Cost of moving to the Netherlands"
      subtitle="What to budget for when relocating."
    >
      <div className="prose prose-slate max-w-none text-slate-700">
        <p>
          Moving costs depend on your origin, visa route, and lifestyle. Common categories include <strong>flights</strong>, <strong>temporary housing</strong> (until you secure a long-term address), and <strong>deposits</strong> for rental and utilities. Budget for <strong>shipping or luggage</strong> if you are bringing belongings, and for <strong>visa, legalisation, and document costs</strong> (e.g. apostille, translations) if you are from outside the EU. Your <strong>first-month setup</strong> — transport, groceries, health insurance, and admin — adds up quickly, so having a buffer helps.
        </p>
        <p>
          Use our{" "}
          <Link href="/netherlands/moving/tools/moving-checklist" className="text-brand-700 underline hover:text-brand-800">
            moving checklist
          </Link>{" "}
          to plan by stage, and the{" "}
          <Link href="/netherlands/moving/tools/document-readiness" className="text-brand-700 underline hover:text-brand-800">
            document readiness tool
          </Link>{" "}
          to avoid last-minute document costs. See our{" "}
          <Link href="/netherlands/moving-to-netherlands-cost/" className="text-brand-700 underline hover:text-brand-800">
            moving costs guide
          </Link>{" "}
          for a detailed breakdown. Country-specific guides (e.g.{" "}
          <Link href="/netherlands/moving/moving-to-netherlands-from/south-africa/" className="text-brand-700 underline hover:text-brand-800">
            South Africa to Netherlands
          </Link>
          ) often include origin-specific cost cues.
        </p>
      </div>
      <ContentTable
        className="mt-6"
        headers={["Typical cost area", "What to budget for"]}
        minWidth="320px"
      >
        {COST_ROWS.map((row) => (
          <ContentTableRow key={row.area}>
            <ContentTableCell emphasis>{row.area}</ContentTableCell>
            <ContentTableCell>{row.what}</ContentTableCell>
          </ContentTableRow>
        ))}
      </ContentTable>
    </Section>
  );
}
