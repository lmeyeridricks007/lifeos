"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { InfoBox } from "@/components/ui/info-box";
import { Calendar, Clock, FileCheck, Lightbulb, Plane } from "lucide-react";
import { cn } from "@/lib/cn";
import { getRecommendedGuidesForRoute } from "@/src/data/tools/visa-timeline-estimator/related-links";
import type { TimelineEstimateResult } from "@/src/lib/visa-timeline-estimator/types";
import type { VisaTimelineEstimatorAnswers } from "@/src/lib/visa-timeline-estimator/types";

const BASE = "/netherlands";

/** Returns situation-based tips to streamline the timeline. */
function getStreamlineTips(
  answers: VisaTimelineEstimatorAnswers,
  result: TimelineEstimateResult
): { title: string; body: string }[] {
  const tips: { title: string; body: string }[] = [];
  const route = answers.primaryRoute;
  const workRoutes = ["highly-skilled-migrant", "eu-blue-card"];
  const isWork = workRoutes.includes(route);
  const isStudent = route === "student";
  const isPartner = route === "partner-family";
  const isSelfEmployedOrDaft = route === "self-employed" || route === "daft";
  const docsBarelyStarted = answers.documentReadinessLevel === "barely-started";
  const docsSomeReady = answers.documentReadinessLevel === "some-ready" || answers.documentReadinessLevel === "not-sure";
  const targetAggressive =
    answers.targetMoveWindow === "within-1-month" || answers.targetMoveWindow === "1-3-months";
  const bottleneckIds = result.keyBottlenecks.map((b) => b.id);
  const longHaul = answers.travelDistanceBand === "long-haul";
  const hasFamilySchool = answers.includedTimingAreas.includes("family-school");

  if (isWork && (answers.sponsorReadyStatus === "no" || answers.sponsorReadyStatus === "not-sure")) {
    tips.push({
      title: "Align with your employer first",
      body: "The IND decision period only starts when the IND receives a complete application. Confirm when your employer can submit and what they need from you so you can prepare documents in parallel.",
    });
  }
  if (isWork && answers.applicationStartedWithEmployer === "no") {
    tips.push({
      title: "Ask for the employer’s timeline",
      body: "Many delays come from internal checks or HR. Ask your employer for their typical timeline and submit as soon as the file is complete to avoid extending your wait.",
    });
  }
  if (isStudent) {
    tips.push({
      title: "Stay in sync with your institution",
      body: "Your institution usually submits the application. Confirm their deadline and exactly what they need from you (e.g. proof of funds, passport copy) so you don’t delay submission.",
    });
  }
  if (isPartner) {
    tips.push({
      title: "Get sponsor documents in order first",
      body: "Sponsor income, housing proof, and relationship documents are often the slowest part. Gather these early so your file is complete when you apply.",
    });
  }
  if (isSelfEmployedOrDaft) {
    tips.push({
      title: "Prepare business docs and add buffer",
      body: "The self-employed route can use the full decision period or longer. Prepare your business plan and supporting documents early, and build extra time into your move date.",
    });
  }
  if (route === "daft" && answers.stillDecidingDaftVsSelfEmployed === "yes") {
    tips.push({
      title: "Lock in your route choice",
      body: "If you’re US-based, confirm that DAFT applies to you. Once you’re sure, you can focus on one set of requirements and avoid rework.",
    });
  }
  if (docsBarelyStarted) {
    tips.push({
      title: "Start with one critical document",
      body: "Don’t try to do everything at once. Start with passport validity and one must-have (e.g. job contract or admission letter), then use the Document Readiness Checker to prioritise the rest.",
    });
  }
  if (docsSomeReady && !docsBarelyStarted) {
    tips.push({
      title: "Tackle the slowest items first",
      body: "List what’s still missing and do first the things that take longest—often civil documents or apostille/legalisation—so they’re ready when you’re ready to submit.",
    });
  }
  if (bottleneckIds.includes("translation-apostille")) {
    tips.push({
      title: "Book translation or apostille early",
      body: "Certified translation and apostille services can take several weeks. Send documents as soon as you have the originals so they’re back in time for submission.",
    });
  }
  if (bottleneckIds.includes("family-partner-docs") || answers.documentBottleneck === "civil-documents") {
    tips.push({
      title: "Order civil documents now",
      body: "Birth and marriage certificates often have long lead times. Request them from the issuing authority as soon as you know you’ll need them.",
    });
  }
  if (longHaul) {
    tips.push({
      title: "Keep travel and housing flexible",
      body: "Until you have approval, avoid non-refundable flights or long-term leases. Plan for temporary housing for the first few weeks so you can register and then search for something permanent.",
    });
  }
  if (targetAggressive && answers.currentStage !== "approved-planning-move") {
    tips.push({
      title: "Avoid locking in dates before approval",
      body: "Confirm current IND processing times with your sponsor or the IND. Don’t book critical travel or housing until you have a decision; otherwise a delay can become costly.",
    });
  }
  if (hasFamilySchool) {
    tips.push({
      title: "Line up school and housing with your timeline",
      body: "If you’re moving with family, align school applications and housing searches with your expected approval window so you’re not stuck without a place or a school spot.",
    });
  }
  if (answers.includedTimingAreas.includes("pet-logistics")) {
    tips.push({
      title: "Check pet entry rules and vets early",
      body: "Pet travel often needs vet visits, microchips, and paperwork. Check Netherlands entry requirements and book vet appointments well in advance of your move date.",
    });
  }
  tips.push({
    title: "Use the Document Readiness Checker",
    body: "See exactly which documents matter for your route and what you still need. It helps you prioritise and avoid last-minute gaps.",
  });
  return tips.slice(0, 8);
}

type Props = {
  result: TimelineEstimateResult;
  answers: VisaTimelineEstimatorAnswers;
  onStartOver: () => void;
};

/** Format day range as week or month range for timeline display. */
function formatTimelineRange(startDay: number, endDay: number): string {
  if (startDay >= endDay) return "—";
  const startWeek = Math.floor(startDay / 7) + 1;
  const endWeek = Math.ceil(endDay / 7);
  if (endWeek <= 12) return `Week ${startWeek}–${endWeek}`;
  const startMonth = Math.floor(startDay / 30) + 1;
  const endMonth = Math.ceil(endDay / 30);
  return `Month ${startMonth}–${endMonth}`;
}

type TimelineSegment = {
  id: string;
  title: string;
  rangeLabel: string;
  startDay: number;
  endDay: number;
  actions: string[];
  color: string;
  learnMore?: { label: string; href: string };
};

/** Build timeline segments with when (range) and what should happen. */
function buildTimelineSegments(
  result: TimelineEstimateResult,
  answers: VisaTimelineEstimatorAnswers
): TimelineSegment[] {
  const prep = result.totalPrepEstimate;
  const decisionDays = result.officialDecisionPeriod.days;
  const post = result.postApprovalEstimate;
  const routeGuide = getRecommendedGuidesForRoute(answers.primaryRoute)[0];
  const segments: TimelineSegment[] = [];

  const route = answers.primaryRoute;
  const workRoutes = ["highly-skilled-migrant", "eu-blue-card"];
  const isWork = workRoutes.includes(route);
  const isStudent = route === "student";
  const isPartner = route === "partner-family";
  const isSelfEmployedOrDaft = route === "self-employed" || route === "daft";

  // 1. Document prep & route confirmation
  if (prep.lowDays > 0 || prep.highDays > 0) {
    const startDay = 0;
    const endDay = prep.highDays;
    segments.push({
      id: "prep",
      title: "Document prep & route confirmation",
      rangeLabel: formatTimelineRange(startDay, endDay),
      startDay,
      endDay,
      color: "amber",
      actions: [
        "Confirm your route and what documents you need.",
        isWork ? "Get employer/sponsor to confirm what they need and when they can submit." : null,
        isStudent ? "Provide your institution with what they need (e.g. proof of funds, passport)." : null,
        isPartner ? "Gather sponsor income, housing proof, and relationship documents." : null,
        isSelfEmployedOrDaft ? "Prepare business plan and supporting documents." : null,
        "Order or renew passport; request civil documents (birth, marriage) if required.",
        "Arrange certified translation or apostille if your country requires it.",
      ].filter(Boolean) as string[],
      learnMore: routeGuide
        ? { label: `${routeGuide.label} guide`, href: routeGuide.href }
        : { label: "Document Readiness Checker", href: `${BASE}/document-readiness-checker/` },
    });
  }

  // 2. Submission & IND decision period
  const submitStart = prep.highDays;
  const submitEnd = prep.highDays + decisionDays;
  segments.push({
    id: "decision",
    title: "Submission & IND decision period",
    rangeLabel: formatTimelineRange(submitStart, submitEnd) + ` (IND has up to ${decisionDays} days)`,
    startDay: submitStart,
    endDay: submitEnd,
    color: "sky",
    actions: [
      prep.highDays > 0 ? "Submit application (you or your sponsor/institution) once the file is complete." : "Application submitted or ready to submit; IND has received the file.",
      "IND reviews your application; they must decide within the statutory period.",
      "Respond promptly if the IND requests extra information.",
    ],
    learnMore: result.officialDecisionPeriod.sourceHref
      ? { label: "Official IND processing times", href: result.officialDecisionPeriod.sourceHref }
      : routeGuide
        ? { label: `${routeGuide.label} guide`, href: routeGuide.href }
        : undefined,
  });

  // 3. Post-approval move prep
  const postStart = submitEnd;
  const postEnd = submitEnd + post.highDays;
  if (post.highDays > 0) {
    segments.push({
      id: "post-approval",
      title: "Post-approval move prep",
      rangeLabel: formatTimelineRange(postStart, postEnd),
      startDay: postStart,
      endDay: postEnd,
      color: "emerald",
      actions: [
        "Plan travel and book flights (prefer flexible options if dates were uncertain).",
        "Arrange temporary housing for arrival and registration.",
        "Plan municipality registration and any MVV/entry steps if applicable.",
        "Notify bank, employer, or institution of your expected arrival date.",
      ],
      learnMore: { label: "Moving checklist", href: `${BASE}/moving/tools/moving-checklist/` },
    });
  }

  // 4. Arrival & first steps
  const arrivalStart = postEnd;
  const arrivalEnd = postEnd + 30;
  segments.push({
    id: "arrival",
    title: "Arrival & first 30 days",
    rangeLabel: formatTimelineRange(arrivalStart, arrivalEnd),
    startDay: arrivalStart,
    endDay: arrivalEnd,
    color: "slate",
    actions: [
      "Register at the municipality and get your BSN.",
      "Open a Dutch bank account and set up health insurance.",
      "Collect residence document and complete any biometrics if required.",
    ],
    learnMore: { label: "First 90 days planner", href: `${BASE}/moving/tools/first-90-days/` },
  });

  return segments;
}

const SUMMARY_CARD_STYLES = [
  { accent: "border-l-brand-500", bg: "bg-gradient-to-br from-white to-brand-50/20", icon: Calendar, iconColor: "text-brand-600" },
  { accent: "border-l-sky-500", bg: "bg-gradient-to-br from-white to-sky-50/20", icon: Clock, iconColor: "text-sky-600" },
  { accent: "border-l-amber-500", bg: "bg-gradient-to-br from-white to-amber-50/20", icon: FileCheck, iconColor: "text-amber-600" },
  { accent: "border-l-emerald-500", bg: "bg-gradient-to-br from-white to-emerald-50/20", icon: Plane, iconColor: "text-emerald-600" },
];

export function VisaTimelineEstimatorResults({ result, answers, onStartOver }: Props) {
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);

  const timelineSegments = buildTimelineSegments(result, answers);

  const handleDownloadPdf = useCallback(async () => {
    setIsDownloadingPdf(true);
    try {
      const res = await fetch("/api/visa-timeline-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          result: {
            overallTimelineLabel: result.overallTimelineLabel,
            lowEstimateDays: result.lowEstimateDays,
            highEstimateDays: result.highEstimateDays,
            officialDecisionPeriod: result.officialDecisionPeriod,
            totalPrepEstimate: result.totalPrepEstimate,
            postApprovalEstimate: result.postApprovalEstimate,
            phaseBreakdown: result.phaseBreakdown.map((p) => ({
              stepTitle: p.stepTitle,
              timingEstimate: p.timingEstimate,
              whyItMatters: p.whyItMatters,
              group: p.group,
            })),
            keyBottlenecks: result.keyBottlenecks,
            urgencyWarnings: result.urgencyWarnings,
            personalizedNextSteps: result.personalizedNextSteps,
            targetMoveRealistic: result.targetMoveRealistic,
          },
          answers: { primaryRoute: answers.primaryRoute, countryCode: answers.countryCode },
          timelineSegments: timelineSegments.map((s) => ({
            title: s.title,
            rangeLabel: s.rangeLabel,
            actions: s.actions,
          })),
        }),
      });
      if (!res.ok) throw new Error("PDF failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "netherlands-visa-timeline-estimate.pdf";
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      // silent
    } finally {
      setIsDownloadingPdf(false);
    }
  }, [result, answers, timelineSegments]);

  return (
    <div id="visa-timeline-results" className="scroll-mt-24 space-y-8">
      {/* Results header */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/40 to-brand-50/20 p-5 shadow-sm md:p-6">
        <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-full bg-brand-500/70" aria-hidden />
        <div className="flex flex-wrap items-center justify-between gap-4 pl-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">Your estimated visa timeline</h2>
            <p className="mt-1 text-sm text-slate-600">Planning ranges based on your route and stage</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <Button
              variant="secondary"
              onClick={handleDownloadPdf}
              disabled={isDownloadingPdf}
              aria-label={isDownloadingPdf ? "Generating PDF…" : "Download results as PDF"}
            >
              {isDownloadingPdf ? "Generating…" : "Download PDF"}
            </Button>
            <Button variant="secondary" onClick={onStartOver}>
              Start over
            </Button>
          </div>
        </div>
      </div>

      {/* Target move warning — at top when relevant */}
      {result.targetMoveRealistic !== "unknown" && result.targetMoveRealistic !== "realistic" && (
        <InfoBox
          title={result.targetMoveRealistic === "aggressive" ? "Target date may be ambitious" : "Target date is achievable but tight"}
          variant="warn"
          className="shadow-sm"
        >
          {result.urgencyWarnings[0]}
        </InfoBox>
      )}

      {/* Summary cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            label: "Total timeline",
            value: result.overallTimelineLabel,
            sub: `${Math.round(result.lowEstimateDays / 30)}–${Math.round(result.highEstimateDays / 30)} months (approx.)`,
            href: null,
            why: "This range adds up your document prep, the IND decision period, and post-approval move prep. Your current stage and document readiness stretch or shorten the total.",
          },
          {
            label: "Official decision period",
            value: `Up to ${result.officialDecisionPeriod.days} days`,
            sub: "IND source →",
            href: result.officialDecisionPeriod.sourceHref,
            why: "The legal period in which the IND must decide on your application. It starts when the IND receives a complete file and does not include time before submission or after approval.",
          },
          {
            label: "Prep before submission",
            value:
              result.totalPrepEstimate.lowDays === 0 && result.totalPrepEstimate.highDays === 0
                ? "—"
                : `${Math.round(result.totalPrepEstimate.lowDays / 7)}–${Math.round(result.totalPrepEstimate.highDays / 7)} weeks`,
            sub: null,
            href: null,
            why:
              result.totalPrepEstimate.lowDays === 0 && result.totalPrepEstimate.highDays === 0
                ? "You indicated you are already at or past submission; no prep time is included."
                : "Time to gather documents, get translations or apostille if needed, and have your sponsor or institution ready. The range reflects how ready you said your documents are.",
          },
          {
            label: "Post-approval move prep",
            value: `${result.postApprovalEstimate.lowDays}–${result.postApprovalEstimate.highDays} days`,
            sub: null,
            href: null,
            why: "Time to arrange housing, travel, and first-step admin after you receive approval. Can be longer for long-haul moves, families, or if you need temporary housing before a long-term rental.",
          },
        ].map((card, i) => {
          const style = SUMMARY_CARD_STYLES[i];
          const Icon = style.icon;
          return (
            <div
              key={card.label}
              className={cn(
                "relative overflow-hidden rounded-xl border border-l-4 border-slate-200 p-5 shadow-sm transition hover:shadow-md",
                style.accent,
                style.bg
              )}
            >
              <div className={cn("flex h-9 w-9 items-center justify-center rounded-lg bg-white/80", style.iconColor)}>
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">{card.label}</p>
              <p className="mt-1 text-xl font-semibold text-slate-900">{card.value}</p>
              {card.sub && (
                card.href ? (
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-block text-sm font-medium text-brand-600 hover:underline"
                  >
                    {card.sub}
                  </a>
                ) : (
                  <p className="mt-1.5 text-sm text-slate-500">{card.sub}</p>
                )
              )}
              {"why" in card && card.why && (
                <p className="mt-3 text-xs leading-relaxed text-slate-500" role="note">
                  {card.why}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Official decision period vs total */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50/80 to-sky-50/30 p-5 shadow-sm md:p-6">
        <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-full bg-sky-400/60" aria-hidden />
        <div className="pl-4">
          <h3 className="text-lg font-semibold text-slate-900">Official decision period vs total move time</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            The IND decision period ({result.officialDecisionPeriod.days} days for {result.officialDecisionPeriod.label}) is only one part of your timeline.
            Your total move time also includes document preparation, sponsor or institution steps, travel planning, and first-week setup.
          </p>
          <a
            href={result.officialDecisionPeriod.sourceHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:underline"
          >
            IND decision periods
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      {/* Tips to streamline */}
      {(() => {
        const tips = getStreamlineTips(answers, result);
        if (tips.length === 0) return null;
        return (
          <div className="relative overflow-hidden rounded-2xl border border-amber-200/90 bg-gradient-to-br from-amber-50/60 to-white p-5 shadow-sm md:p-6">
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-full bg-amber-400/70" aria-hidden />
            <div className="pl-4">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <Lightbulb className="h-5 w-5 text-amber-600" aria-hidden />
                Tips to streamline your timeline
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Based on your route and situation—small steps that can help you stay on track.
              </p>
              <ul className="mt-4 space-y-3" role="list">
                {tips.map((tip, idx) => (
                  <li key={idx} className="flex gap-3 rounded-lg border border-amber-100 bg-white/80 p-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-semibold text-amber-800" aria-hidden>
                      {idx + 1}
                    </span>
                    <div>
                      <p className="font-medium text-slate-800">{tip.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-slate-600">{tip.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                href={`${BASE}/document-readiness-checker/`}
                className="mt-4 inline-block text-sm font-medium text-brand-600 hover:underline"
              >
                Check your document readiness →
              </Link>
            </div>
          </div>
        );
      })()}

      {/* Visual timeline: when what happens */}
      <div>
        <h3 className="text-base font-semibold text-slate-800 md:text-lg">Your timeline: when what should happen</h3>
        <p className="mt-1 text-sm text-slate-600">
          Approximate sequence based on your situation. Use it to plan documents, submission, and move steps.
        </p>
        <div className="mt-6 flex flex-col">
          {timelineSegments.map((seg, idx) => {
            const isLast = idx === timelineSegments.length - 1;
            const colorMap = {
              amber: "bg-amber-500",
              sky: "bg-sky-500",
              emerald: "bg-emerald-500",
              slate: "bg-slate-500",
            };
            const borderMap = {
              amber: "border-l-amber-500 bg-amber-50/40",
              sky: "border-l-sky-500 bg-sky-50/40",
              emerald: "border-l-emerald-500 bg-emerald-50/40",
              slate: "border-l-slate-500 bg-slate-50/40",
            };
            const dotColor = colorMap[seg.color as keyof typeof colorMap] ?? "bg-slate-500";
            const cardBorder = borderMap[seg.color as keyof typeof borderMap] ?? "border-l-slate-500 bg-slate-50/40";
            return (
              <div key={seg.id} className="relative flex gap-4">
                {/* Vertical line and dot */}
                <div className="flex flex-col items-center">
                  <div className={cn("h-4 w-4 shrink-0 rounded-full border-2 border-white shadow", dotColor)} aria-hidden />
                  {!isLast && <div className="mt-0 w-0.5 flex-1 min-h-[24px] bg-slate-200" aria-hidden />}
                </div>
                {/* Segment card */}
                <div className={cn("flex-1 rounded-xl border border-slate-200 border-l-4 p-4 pb-6 shadow-sm", cardBorder)}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-semibold text-slate-900">{seg.title}</h4>
                    <span className="text-right text-xs font-medium text-slate-600">{seg.rangeLabel}</span>
                  </div>
                  <ul className="mt-3 space-y-1.5 pl-1">
                    {seg.actions.map((action, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" aria-hidden />
                        {action}
                      </li>
                    ))}
                  </ul>
                  {seg.learnMore && (
                    <Link
                      href={seg.learnMore.href}
                      className="mt-3 inline-block text-sm font-medium text-brand-600 hover:underline"
                    >
                      Learn more: {seg.learnMore.label} →
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Your actual dates will depend on when you submit and when the IND decides. If you start later or things take longer, shift the timeline accordingly.
        </p>
      </div>

      {/* Bottlenecks */}
      {result.keyBottlenecks.length > 0 && (
        <div>
          <h3 className="text-base font-semibold text-slate-800 md:text-lg">What could slow you down</h3>
          <div className="mt-3 space-y-3">
            {result.keyBottlenecks.map((b) => (
              <InfoBox key={b.id} title={b.label} variant="warn" className="shadow-sm">
                {b.description}
              </InfoBox>
            ))}
          </div>
        </div>
      )}

      {/* Next steps */}
      <div className="relative overflow-hidden rounded-2xl border-2 border-brand-200/90 bg-gradient-to-br from-brand-50/60 to-cyan-50/30 p-5 shadow-sm md:p-6">
        <div className="absolute right-0 top-0 h-24 w-24 translate-x-4 -translate-y-4 rounded-full bg-brand-400/10" aria-hidden />
        <h3 className="text-lg font-semibold text-slate-900">Personalized next steps</h3>
        <p className="mt-1 text-sm text-slate-600">Use these tools to move forward with your plan</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {result.personalizedNextSteps.map((s) =>
            s.href ? (
              <Link
                key={s.label}
                href={s.href}
                className={cn(
                  "inline-flex items-center rounded-xl border-2 border-brand-500/40 bg-white px-4 py-2.5 text-sm font-semibold shadow-sm transition",
                  "text-brand-700 hover:border-brand-500 hover:bg-brand-50 hover:shadow"
                )}
              >
                {s.label}
                <span className="ml-1.5" aria-hidden>→</span>
              </Link>
            ) : (
              <span key={s.label} className="text-sm text-slate-600">
                {s.label}
              </span>
            )
          )}
        </div>
      </div>

      {/* Recommended guides & tools */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-slate-50/40 p-4 shadow-sm">
          <h3 className="font-semibold text-slate-900">Related visa guides</h3>
          <ul className="mt-3 space-y-2">
            {result.recommendedGuides.slice(0, 5).map((g) => (
              <li key={g.href}>
                <Link href={g.href} className="text-sm font-medium text-brand-600 hover:underline">
                  {g.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/40 p-4 shadow-sm">
          <h3 className="font-semibold text-slate-900">Related tools</h3>
          <ul className="mt-3 space-y-2">
            {result.recommendedTools.slice(0, 5).map((t) => (
              <li key={t.href}>
                <Link href={t.href} className="text-sm font-medium text-brand-600 hover:underline">
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
