"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ReadinessScore } from "@/src/components/tools/ReadinessScore";
import { SignupCTA } from "@/src/components/tools/SignupCTA";
import type { ReadinessResult, ReadinessLevel } from "@/src/lib/document-readiness/readinessEngine";
import type { DocumentReadinessAnswers } from "@/src/lib/document-readiness/readinessEngine";
import type { MissingDocumentItem, ReadyCategoryItem } from "@/src/lib/document-readiness/readinessEngine";

export type DocumentDisplayStatus = "completed" | "in_progress" | "na";

const STORAGE_KEY = "expatlife-document-readiness-result-status";

type Props = {
  result: ReadinessResult;
  answers: DocumentReadinessAnswers;
  onStartOver: () => void;
};

function getInitialStatus(
  docId: string,
  result: ReadinessResult
): DocumentDisplayStatus {
  if (result.readyCategories.some((c) => c.id === docId)) return "completed";
  if (result.missingCategories.some((c) => c.id === docId)) return "in_progress";
  if (result.uncertainCategories.some((c) => c.id === docId)) return "na";
  return "in_progress";
}

export function DocumentReadinessCheckerResults({ result, answers, onStartOver }: Props) {
  const allDocs = useMemo(() => {
    const list: Array<{
      id: string;
      title: string;
      whyItMatters: string;
      suggestedAction: string;
      relatedGuideHref?: string;
      initialStatus: DocumentDisplayStatus;
    }> = [];
    result.readyCategories.forEach((c: ReadyCategoryItem) => {
      list.push({
        id: c.id,
        title: c.title,
        whyItMatters: "",
        suggestedAction: "",
        initialStatus: "completed",
      });
    });
    result.missingCategories.forEach((d: MissingDocumentItem) => {
      list.push({
        id: d.id,
        title: d.title,
        whyItMatters: d.whyItMatters,
        suggestedAction: d.suggestedAction,
        relatedGuideHref: d.relatedGuideHref,
        initialStatus: "in_progress",
      });
    });
    result.uncertainCategories.forEach((d: MissingDocumentItem) => {
      list.push({
        id: d.id,
        title: d.title,
        whyItMatters: d.whyItMatters,
        suggestedAction: d.suggestedAction,
        relatedGuideHref: d.relatedGuideHref,
        initialStatus: "na",
      });
    });
    return list;
  }, [result]);

  const [statusOverrides, setStatusOverrides] = useState<Record<string, DocumentDisplayStatus>>(() => {
    if (typeof window === "undefined") return {};
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw) as Record<string, DocumentDisplayStatus>;
    } catch {
      // ignore
    }
    return {};
  });

  const getStatus = useCallback(
    (docId: string, initialStatus: DocumentDisplayStatus): DocumentDisplayStatus =>
      statusOverrides[docId] ?? initialStatus,
    [statusOverrides]
  );

  const setStatus = useCallback((docId: string, status: DocumentDisplayStatus) => {
    setStatusOverrides((prev) => ({ ...prev, [docId]: status }));
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(statusOverrides));
    } catch {
      // ignore
    }
  }, [statusOverrides]);

  const { liveScore, liveLevel } = useMemo(() => {
    let completed = 0;
    for (const doc of allDocs) {
      const status = statusOverrides[doc.id] ?? doc.initialStatus;
      if (status === "completed") completed += 1;
    }
    const total = allDocs.length;
    const score =
      total === 0
        ? result.readinessScore
        : Math.min(100, Math.round((completed / total) * 100));
    const level: ReadinessLevel =
      score >= 70 ? "high" : score >= 40 ? "medium" : "low";
    return { liveScore: score, liveLevel: level };
  }, [allDocs, statusOverrides, result.readinessScore]);

  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);

  const handleDownloadPdf = useCallback(async () => {
    setIsDownloadingPdf(true);
    try {
      const res = await fetch("/api/document-readiness-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          result: {
            readinessScore: liveScore,
            readinessLevel: liveLevel,
            summaryText: result.summaryText,
            readyCategories: result.readyCategories,
            missingCategories: result.missingCategories,
            uncertainCategories: result.uncertainCategories,
            riskFlags: result.riskFlags,
            recommendedNextSteps: result.recommendedNextSteps,
          },
          statusOverrides,
          answers: {
            countryCode: answers.countryCode,
            primaryRoute: answers.primaryRoute,
            householdType: answers.householdType,
          },
        }),
      });
      if (!res.ok) throw new Error("PDF failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "netherlands-document-readiness-checklist.pdf";
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      // silent fail or could show toast
    } finally {
      setIsDownloadingPdf(false);
    }
  }, [result, statusOverrides, answers, liveScore, liveLevel]);

  const scoreLabel =
    liveLevel === "high"
      ? "High readiness"
      : liveLevel === "medium"
        ? "Medium readiness"
        : "Low readiness";

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Your document readiness</h2>
          {result.summaryText.length > 0 && (
            <ul className="mt-3 space-y-1.5 text-slate-700">
              {result.summaryText.map((text, i) => (
                <li key={i} className="text-sm">
                  {text}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-2">
          <Button
            variant="secondary"
            onClick={handleDownloadPdf}
            disabled={isDownloadingPdf}
          >
            {isDownloadingPdf ? "Generating…" : "Download list (PDF)"}
          </Button>
          <Button variant="secondary" onClick={onStartOver}>
            Start over
          </Button>
        </div>
      </div>

      <ReadinessScore
        title="Readiness score"
        score={liveScore}
        label={scoreLabel}
        explanation={
          liveLevel === "high"
            ? "You appear well prepared for document planning. A few supporting items may still help reduce delays."
            : liveLevel === "medium"
              ? "You look partly prepared, but several route-specific documents still need work before you rely on this route."
              : "You are in early prep mode. Prioritize core identity and route-specific documents first."
        }
      />

      <SignupCTA
        title="Save your progress"
        subtitle="Create a free account to save your document checklist and track what's done. Your status choices (Completed, In progress, N/A) will be stored so you can continue later."
        bullets={[
          "Save your document checklist and status",
          "Track Completed, In progress, and N/A per document",
          "Return anytime to update and see next steps",
        ]}
        primaryCtaLabel="Create free account"
        primaryCtaHref="/signup"
        secondaryCtaLabel="Maybe later"
        variant="panel"
        className="border-l-4 border-l-brand-500"
      />

      {allDocs.length > 0 && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Documents you may need to prepare</h3>
              <p className="mt-1 text-sm text-slate-600">
                Update status for each document: <strong>Completed</strong>, <strong>In progress</strong>, or <strong>N/A</strong>. Your choices are saved in this browser.
              </p>
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleDownloadPdf}
              disabled={isDownloadingPdf}
            >
              {isDownloadingPdf ? "Generating…" : "Download list (PDF)"}
            </Button>
          </div>
          <div className="mt-4 space-y-4">
            {allDocs.map((doc) => {
              const status = getStatus(doc.id, doc.initialStatus);
              const statusStyles = {
                completed: "bg-emerald-100 text-emerald-800 border-emerald-200",
                in_progress: "bg-amber-100 text-amber-800 border-amber-200",
                na: "bg-slate-100 text-slate-700 border-slate-200",
              };
              const cardBorder =
                status === "completed"
                  ? "border-emerald-200/80 bg-emerald-50/30"
                  : status === "in_progress"
                    ? "border-amber-200/80 bg-amber-50/30"
                    : "border-slate-200 bg-slate-50/50";
              return (
                <div
                  key={doc.id}
                  className={`rounded-xl border p-4 ${cardBorder}`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <span className="font-medium text-slate-800">{doc.title}</span>
                      {doc.whyItMatters ? (
                        <p className="mt-2 text-sm text-slate-600">{doc.whyItMatters}</p>
                      ) : null}
                      {doc.suggestedAction ? (
                        <p className="mt-1 text-sm font-medium text-slate-700">Next step: {doc.suggestedAction}</p>
                      ) : null}
                      {doc.relatedGuideHref ? (
                        <Link
                          href={doc.relatedGuideHref}
                          className="mt-2 inline-block text-sm font-medium text-brand-600 hover:underline"
                        >
                          Read the guide →
                        </Link>
                      ) : null}
                    </div>
                    <div className="flex shrink-0 gap-1.5" role="group" aria-label={`Status for ${doc.title}`}>
                      {(["completed", "in_progress", "na"] as const).map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setStatus(doc.id, s)}
                          className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${status === s ? statusStyles[s] : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"}`}
                        >
                          {s === "completed" ? "Completed" : s === "in_progress" ? "In progress" : "N/A"}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {result.riskFlags.length > 0 && (
        <section className="rounded-2xl border border-amber-200/80 bg-amber-50/30 p-5 md:p-6">
          <h3 className="text-lg font-semibold text-slate-900">Potential document bottlenecks</h3>
          <p className="mt-1 text-sm text-slate-600">These may add time or complexity; plan ahead where possible.</p>
          <ul className="mt-4 space-y-3">
            {result.riskFlags.map((flag) => (
              <li key={flag.id} className="flex gap-3 rounded-lg border border-amber-200/60 bg-white p-3">
                <span className="font-medium text-amber-800">{flag.label}</span>
                <span className="text-sm text-slate-600">— {flag.description}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
        <h3 className="text-lg font-semibold text-slate-900">Personalized next steps</h3>
        <ul className="mt-3 space-y-2">
          {result.recommendedNextSteps.map((step, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
              {step.href ? (
                <Link href={step.href} className="font-medium text-brand-600 hover:underline">
                  {step.label}
                </Link>
              ) : (
                <span>{step.label}</span>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/netherlands/moving/tools/relocation-cost-estimator/">
            <Button variant="secondary" size="sm">
              Estimate relocation cost
            </Button>
          </Link>
          <Link href="/netherlands/moving/tools/moving-checklist/">
            <Button variant="secondary" size="sm">
              Generate moving checklist
            </Button>
          </Link>
          <Link href="/netherlands/moving/tools/first-90-days/">
            <Button variant="secondary" size="sm">
              Plan your first 90 days
            </Button>
          </Link>
          {result.recommendedGuides[0] && (
            <Link href={result.recommendedGuides[0].href}>
              <Button variant="secondary" size="sm">
                View visa guide
              </Button>
            </Link>
          )}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 md:p-6">
        <h3 className="text-lg font-semibold text-slate-900">Related tools</h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {result.recommendedTools.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="rounded-xl border border-slate-200 bg-white p-3 text-sm font-medium text-slate-800 shadow-sm transition hover:border-brand-200 hover:bg-brand-50/50"
            >
              {t.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
