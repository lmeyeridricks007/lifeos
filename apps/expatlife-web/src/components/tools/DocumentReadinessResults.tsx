"use client";

import Link from "next/link";
import { BadgeAlert, CircleHelp, Sparkles } from "lucide-react";
import { ReadinessScore } from "./ReadinessScore";
import { DocumentPackOutline } from "./DocumentPackOutline";
import { DocumentChecklistGroup } from "./DocumentChecklistGroup";
import { DocumentRequirementBadge } from "./document-readiness/DocumentRequirementBadge";
import type { ChecklistStatus } from "./DocumentStatusToggle";
import type { DocumentChecklistItem } from "@/src/lib/tools/document-readiness/types";
import type { MissingDocumentItem } from "@/src/lib/tools/documentReadinessRules";

type ChecklistCategory = "identity" | "employment" | "housing" | "family" | "education" | "travel";

const CATEGORY_LABELS: Record<ChecklistCategory, string> = {
  identity: "Identity",
  employment: "Employment",
  housing: "Housing",
  family: "Family",
  education: "Education",
  travel: "Travel",
};

const COUNTRY_AWARE_COPY: Record<string, string> = {
  "south-africa":
    "Because you selected South Africa, civil records and official copies issued in South Africa may need extra preparation or validation before use in Dutch administrative processes.",
  "united-states":
    "Because you selected the United States, documents issued by U.S. authorities may need apostille or certified copies depending on the receiving body in the Netherlands.",
  india:
    "Because you selected India, documents issued in India may need legalization or apostille and sometimes translation before use in Dutch administrative processes.",
  "united-kingdom":
    "Because you selected the United Kingdom, post-Brexit document requirements may vary; check with the IND or your municipality for current rules.",
  germany: "Because you selected Germany, EU documents are often accepted more easily; some civil records may still need to be recent or certified.",
  france: "Because you selected France, EU-issued documents are often accepted; certification or translation may be required in specific cases.",
  spain: "Because you selected Spain, many Spanish documents can be used directly in the Netherlands; some need apostille per Netherlands Worldwide, and Spanish often needs no translation—confirm with the authority that requests each document.",
  italy: "Because you selected Italy, many Italian documents can be used directly in the Netherlands; some need apostille per Netherlands Worldwide, and Italian often needs no translation—confirm with the authority that requests each document.",
  switzerland:
    "Because you selected Switzerland, Netherlands Worldwide explains that some Swiss documents can be used in the Netherlands immediately while others require a Hague apostille from the Swiss authorities—it depends on document type and who requests it; confirm each document with the IND, your sponsor, or the gemeente.",
  sweden:
    "Because you selected Sweden, you are moving from an EU country: many official documents are straightforward for Dutch authorities, but unusual types or uses may still need legalisation or apostille per Netherlands Worldwide—confirm each document with the IND, your sponsor, or the gemeente.",
  denmark:
    "Because you selected Denmark, Netherlands Worldwide explains that some Danish documents can be used in the Netherlands immediately, while diplomas and certificates generally need a digital e-apostille; Danish-language documents often need sworn translation unless an accepted multilingual standard form is attached—confirm each document with the IND, your sponsor, or the gemeente.",
  norway:
    "Because you selected Norway, Netherlands Worldwide explains that some Norwegian documents can be used in the Netherlands immediately, while others must be legalised with an apostille issued by the Norwegian authorities. Requirements depend on document type and the receiving body—not every Norwegian document needs the same treatment—confirm each document with the IND, your sponsor, or the gemeente.",
  ireland:
    "Because you selected Ireland, Netherlands Worldwide explains that some Irish documents can be used in the Netherlands immediately, while others must be legalised with an apostille issued by the Irish Department of Foreign Affairs. Foreign qualifications for work may involve separate checks—confirm each document with the IND, your sponsor, or the gemeente.",
  canada: "Because you selected Canada, documents may need apostille or authentication depending on the province and intended use.",
  australia: "Because you selected Australia, documents may need apostille or authentication before use in the Netherlands.",
  brazil: "Because you selected Brazil, documents may need legalization or apostille and sometimes translation for use in Dutch procedures.",
  uae: "Because you selected the United Arab Emirates, UAE-issued documents often require MOFA attestation (not the same as every apostille workflow), while documents from your passport country may follow a different legalisation path—confirm what the IND or municipality requests for your nationality and route.",
  mexico:
    "Because you selected Mexico, many official documents need a Hague apostille (Apostilla de La Haya) from the competent Mexican authority for that document type, and sworn translation may be required—confirm each request with the IND, your sponsor, or the gemeente.",
  singapore:
    "Because you selected Singapore, many public documents need a Hague apostille through the Singapore Academy of Law (SAL) when Dutch authorities require legalisation; sworn translation may also be required—confirm each document with the IND, your sponsor, or the gemeente.",
  japan:
    "Because you selected Japan, many public documents need a Hague apostille through the Japanese Ministry of Foreign Affairs (MOFA) when Dutch authorities require legalisation; sworn translation may also be required—confirm each document with the IND, your sponsor, or the gemeente.",
  "south-korea":
    "Because you selected South Korea, many public documents need a Hague apostille through the competent South Korean authorities when Dutch authorities require legalisation; documents in Korean generally need translation into Dutch, English, French, or German—confirm each document with the IND, your sponsor, or the gemeente.",
  turkey:
    "Because you selected Türkiye, Netherlands Worldwide explains that some Turkish documents can be used in the Netherlands immediately while others need apostille; documents in Turkish generally need translation into Dutch, English, French, or German when required—confirm each document with the IND, your sponsor, or the gemeente.",
  argentina:
    "Because you selected Argentina, Netherlands Worldwide explains that documents from Argentina need a digital e-apostille from the Argentine Ministry of Foreign Affairs for use in the Netherlands; translation may be required depending on language—confirm each document with the IND, your sponsor, or the gemeente.",
  chile:
    "Because you selected Chile, Netherlands Worldwide explains that documents from Chile must be legalised by the Chilean authorities with a Hague apostille before use in the Netherlands; translation may be required depending on language—confirm each document with the IND, your sponsor, or the gemeente.",
};

export function DocumentReadinessResults({
  title = "Your document readiness",
  summary,
  readiness,
  packOutline,
  missingDocuments,
  checklist,
  localStatuses,
  onStatusChange,
  notes,
  onNotesChange,
  originCountry,
  renderHelpfulServices,
}: {
  title?: string;
  summary: string;
  readiness: { score: number; label: string; explanation: string };
  packOutline: Array<{ id: string; label: string; intro: string; count: number; readyCount: number; missingCount: number }>;
  missingDocuments: MissingDocumentItem[];
  checklist: Record<ChecklistCategory, DocumentChecklistItem[]>;
  localStatuses: Record<string, ChecklistStatus>;
  onStatusChange: (id: string, status: ChecklistStatus) => void;
  notes: string;
  onNotesChange: (value: string) => void;
  originCountry?: string;
  renderHelpfulServices?: (categories: string[]) => React.ReactNode;
}) {
  const countryCopy = originCountry ? COUNTRY_AWARE_COPY[originCountry.toLowerCase().trim().replace(/\s+/g, "-")] : null;

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
        <div className="mt-3 flex items-start gap-2 rounded-xl bg-slate-50 p-3">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
          <p className="text-sm text-slate-700">{summary}</p>
        </div>
        {countryCopy ? (
          <div className="mt-3 rounded-xl border border-slate-200 bg-amber-50/70 p-3 text-sm text-slate-700">
            {countryCopy}
          </div>
        ) : null}
      </section>

      <ReadinessScore
        title="Your readiness score"
        score={readiness.score}
        label={readiness.label}
        explanation={readiness.explanation}
      />

      <DocumentPackOutline groups={packOutline} />

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
        <h3 className="text-lg font-semibold text-slate-900">Documents to consider gathering</h3>
        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          {missingDocuments.map((doc) => {
            const contacts = doc.resolvedWhoToContact ?? doc.whoToContact ?? [];
            const contactSummary = contacts.length ? contacts.map((c) => c.name).join(", ") : null;
            return (
              <article key={doc.id} className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
                <div
                  className={`absolute left-0 top-0 h-1 w-full ${
                    doc.priority === "high"
                      ? "bg-gradient-to-r from-rose-500 to-red-500"
                      : doc.priority === "medium"
                        ? "bg-gradient-to-r from-amber-500 to-orange-500"
                        : "bg-gradient-to-r from-slate-400 to-slate-600"
                  }`}
                />
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50 text-slate-700 ring-1 ring-slate-200">
                      <BadgeAlert className="h-4 w-4" />
                    </span>
                    <p className="font-medium text-slate-900">{doc.title}</p>
                  </div>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase ${
                      doc.priority === "high"
                        ? "bg-rose-100 text-rose-700"
                        : doc.priority === "medium"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {doc.priority}
                  </span>
                </div>
                {doc.whyItMatters ? <p className="mt-1 text-sm text-slate-600">{doc.whyItMatters}</p> : null}
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {doc.apostilleOrLegalization?.mayBeRelevant ? <DocumentRequirementBadge type="apostille" /> : null}
                  {doc.translation?.mayBeRelevant ? <DocumentRequirementBadge type="translation" /> : null}
                </div>
                <div className="mt-2 inline-flex rounded-full bg-brand-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-brand-700">
                  {doc.status === "missing" ? "Missing now" : "Pending soon"}
                </div>
                {doc.commonUses?.length ? (
                  <>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Common uses</p>
                    <ul className="mt-1 list-disc pl-5 text-sm text-slate-600">
                      {doc.commonUses.map((use, index) => (
                        <li key={`${doc.id}-use-${index}`}>{use}</li>
                      ))}
                    </ul>
                  </>
                ) : null}
                <div className="mt-2 space-y-1 rounded-lg border border-slate-200 bg-slate-50/70 p-2.5 text-sm text-slate-700">
                  {doc.whereToGetIt?.summary ? (
                    <p>
                      <span className="font-semibold">Where to get it:</span> {doc.whereToGetIt.summary}
                    </p>
                  ) : null}
                  {contactSummary ? (
                    <p>
                      <span className="font-semibold">Who to contact:</span> {contactSummary}
                    </p>
                  ) : null}
                  {doc.typicalCost?.summary ? (
                    <p>
                      <span className="font-semibold">Cost:</span> {doc.typicalCost.summary}
                    </p>
                  ) : null}
                </div>
                {doc.relatedGuides?.length ? (
                  <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                    {doc.relatedGuides.slice(0, 3).map((href) => (
                      <Link key={href} href={href} className="text-sm font-medium text-brand-600 hover:text-brand-700">
                        Related guide →
                      </Link>
                    ))}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      {(Object.keys(checklist) as ChecklistCategory[]).map((category) =>
        checklist[category].length > 0 ? (
          <DocumentChecklistGroup
            key={category}
            title={CATEGORY_LABELS[category]}
            categoryId={category}
            items={checklist[category]}
            localStatuses={localStatuses}
            onStatusChange={onStatusChange}
            renderHelpfulServices={renderHelpfulServices}
          />
        ) : null
      )}

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
        <h3 className="text-lg font-semibold text-slate-900">Notes about your document situation</h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
          <CircleHelp className="h-3.5 w-3.5" />
          Stored locally on this browser for now.
        </p>
        <textarea
          value={notes}
          onChange={(event) => onNotesChange(event.target.value)}
          placeholder="Add notes about missing records, contacts, and follow-up tasks..."
          rows={5}
          className="mt-3 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-200"
        />
      </section>
    </div>
  );
}
