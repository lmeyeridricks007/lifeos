"use client";

import { useState } from "react";
import Link from "next/link";
import type { ComponentType } from "react";
import {
  Sparkles,
  ExternalLink,
  AlertCircle,
  FileSearch,
  MapPin,
  Briefcase,
  CheckCircle2,
  Lightbulb,
  CalendarClock,
  FileText,
  Banknote,
  CalendarCheck,
  StickyNote,
  Globe,
  Users,
  BookOpen,
  HandHeart,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { TaskDetailSection } from "@/src/components/tools/shared/TaskDetailSection";
import type { ArrivalTaskResolved, ArrivalPlannerCountry } from "@/src/lib/tools/arrival-planner";
import type { AffiliateProvider } from "@/src/lib/affiliates/types";
import { ProviderLogo } from "@/src/components/affiliates/ProviderLogo";

const GROUP_TITLES: Record<string, string> = {
  "must-do-early": "Must do early",
  "first-two-weeks": "Do in the first 2 weeks",
  "first-month": "Do in the first month",
  "country-follow-up": "Country-specific follow-up",
  "work-tax-mobility": "Work / tax / mobility follow-ups",
};

const GROUP_STYLES: Record<
  string,
  {
    icon: ComponentType<{ className?: string }>;
    accent: string;
    chip: string;
    iconWrap: string;
    barBg: string;
  }
> = {
  "must-do-early": {
    icon: AlertCircle,
    accent: "from-amber-500 to-orange-500",
    chip: "bg-amber-50 text-amber-700 ring-amber-100",
    iconWrap: "bg-amber-50 text-amber-700",
    barBg: "bg-amber-500",
  },
  "first-two-weeks": {
    icon: FileSearch,
    accent: "from-sky-500 to-blue-500",
    chip: "bg-sky-50 text-sky-700 ring-sky-100",
    iconWrap: "bg-sky-50 text-sky-700",
    barBg: "bg-sky-500",
  },
  "first-month": {
    icon: Briefcase,
    accent: "from-violet-500 to-indigo-500",
    chip: "bg-violet-50 text-violet-700 ring-violet-100",
    iconWrap: "bg-violet-50 text-violet-700",
    barBg: "bg-violet-500",
  },
  "country-follow-up": {
    icon: MapPin,
    accent: "from-emerald-500 to-teal-500",
    chip: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    iconWrap: "bg-emerald-50 text-emerald-700",
    barBg: "bg-emerald-500",
  },
  "work-tax-mobility": {
    icon: Briefcase,
    accent: "from-violet-500 to-indigo-500",
    chip: "bg-violet-50 text-violet-700 ring-violet-100",
    iconWrap: "bg-violet-50 text-violet-700",
    barBg: "bg-violet-500",
  },
};

const PRIORITY_LABELS: Record<string, string> = {
  high: "High",
  medium: "Medium",
  low: "Low",
};

export type OriginSummaryProps = {
  country: ArrivalPlannerCountry;
  regionGroup: string;
  distanceCategory: string;
};

function OriginSummaryCard({ country, regionGroup, distanceCategory }: OriginSummaryProps) {
  const regionLabel = regionGroup === "eu-eea-swiss" ? "EU/EEA/Swiss" : "Non-EU";
  return (
    <section className="rounded-2xl border border-sky-200/80 bg-gradient-to-br from-sky-50/70 to-white p-5 shadow-sm md:p-6">
      <h3 className="text-lg font-semibold text-slate-900">Moving from {country.label}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        <span className="inline-flex rounded-full bg-slate-200/80 px-3 py-1 text-xs font-medium text-slate-700">
          Region: {regionLabel}
        </span>
        <span className="inline-flex rounded-full bg-slate-200/80 px-3 py-1 text-xs font-medium text-slate-700">
          Distance: {distanceCategory}
        </span>
      </div>
      {country.countryGuideHref ? (
        <p className="mt-4">
          <Link
            href={country.countryGuideHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700"
          >
            Country guide: {country.label} → Netherlands
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </p>
      ) : null}
    </section>
  );
}

type AffiliateItem = { provider: AffiliateProvider; reason: string };

function getMatchingAffiliateItems(
  taskCategories: string[],
  affiliateItems: AffiliateItem[]
): AffiliateItem[] {
  if (!taskCategories.length || !affiliateItems.length) return [];
  const set = new Set(taskCategories.map((c) => c.toLowerCase()));
  return affiliateItems.filter((item) =>
    item.provider.categoryIds?.some((id) => set.has(id.toLowerCase()))
  );
}

const OPEN_COUNTRY_GUIDE_ID_PREFIX = "open-country-guide-";

function TaskCard({
  task,
  affiliateItems = [],
  originCountry,
}: {
  task: ArrivalTaskResolved;
  affiliateItems?: AffiliateItem[];
  originCountry?: ArrivalPlannerCountry | null;
}) {
  const [expanded, setExpanded] = useState(false);
  const priorityLabel = PRIORITY_LABELS[task.priority] ?? task.priority;
  const isOpenCountryGuideTask = task.id.startsWith(OPEN_COUNTRY_GUIDE_ID_PREFIX);
  const countryGuideHref = isOpenCountryGuideTask ? originCountry?.countryGuideHref : undefined;
  const matchingAffiliates =
    task.affiliateCategories?.length && affiliateItems.length
      ? getMatchingAffiliateItems(task.affiliateCategories, affiliateItems)
      : [];

  const isHighPriority = task.priority === "high";

  return (
    <article
      className={cn(
        "rounded-xl border border-slate-200 bg-slate-50/70 p-3.5",
        isHighPriority && "border-brand-200 bg-brand-50/40"
      )}
    >
      <div className="flex items-start gap-2">
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-medium text-slate-900">{task.title}</span>
            {isHighPriority ? (
              <span className="inline-flex rounded-full bg-brand-100 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-brand-800">
                High priority
              </span>
            ) : (
              <span className="text-xs text-slate-500">{priorityLabel}</span>
            )}
          </div>
          <p className="mt-0.5 text-sm text-slate-600">{task.what}</p>
          {countryGuideHref ? (
            <p className="mt-1">
              <Link
                href={countryGuideHref}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700"
              >
                Open guide: {originCountry?.label ?? "Country"} → Netherlands
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </p>
          ) : null}
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="mt-1 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
            aria-expanded={expanded}
          >
            {expanded ? "Show less" : "Read more →"}
          </button>
        </div>
      </div>

      {/* Extended: why, what, documents, where, cost, appointment, timing, contacts, guides, affiliate (only when expanded) */}
      {expanded ? (
        <div className="mt-4 space-y-3 border-t border-slate-200 pt-4">
          <TaskDetailSection icon={Lightbulb} title="Why it matters">
            <p>{task.why}</p>
          </TaskDetailSection>
          <TaskDetailSection icon={CalendarClock} title="Suggested timing" variant="sky">
            <p>{task.timeline}</p>
          </TaskDetailSection>

          {task.documentsNeeded && task.documentsNeeded.length > 0 ? (
            <TaskDetailSection icon={FileText} title="Documents you may need" variant="sky">
              <ul className="list-inside list-disc space-y-0.5">
                {task.documentsNeeded.map((doc, i) => (
                  <li key={i}>{doc}</li>
                ))}
              </ul>
            </TaskDetailSection>
          ) : null}

          {task.where ? (
            <TaskDetailSection icon={MapPin} title="Where">
              <p>{task.where}</p>
            </TaskDetailSection>
          ) : null}

          {task.cost ? (
            <TaskDetailSection icon={Banknote} title="Cost">
              <p>{task.cost}</p>
            </TaskDetailSection>
          ) : null}

          {task.appointmentNeeded != null ? (
            <TaskDetailSection icon={CalendarCheck} title="Appointment needed">
              <p>{task.appointmentNeeded === true ? "Yes" : task.appointmentNeeded === false ? "No" : "Depends"}</p>
            </TaskDetailSection>
          ) : null}

          {task.notes ? (
            <TaskDetailSection icon={StickyNote} title="Examples / notes">
              <p>{task.notes}</p>
            </TaskDetailSection>
          ) : null}

          {countryGuideHref ? (
            <TaskDetailSection icon={Globe} title="Country guide" variant="amber">
              <p>
                <Link
                  href={countryGuideHref}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-brand-200 bg-brand-50/80 px-4 py-2.5 text-sm font-medium text-brand-700 hover:bg-brand-100 hover:text-brand-800"
                >
                  {originCountry?.label ?? "Guide"} → Netherlands
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </Link>
              </p>
            </TaskDetailSection>
          ) : null}

          {task.contacts.length > 0 ? (
            <TaskDetailSection icon={Users} title="Who to contact">
              <ul className="space-y-2">
                {task.contacts.map((c, i) => (
                  <li key={i} className="rounded-lg border border-slate-100 bg-slate-50/80 p-3">
                    <p className="font-medium text-slate-900">{c.name}</p>
                    <p className="mt-0.5 text-xs text-slate-600">{c.contactSummary}</p>
                    {c.website ? (
                      <a
                        href={c.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-700"
                      >
                        Official website
                        <ExternalLink className="h-3 w-3" aria-hidden />
                      </a>
                    ) : null}
                  </li>
                ))}
              </ul>
            </TaskDetailSection>
          ) : null}

          {task.officialLinks && task.officialLinks.length > 0 ? (
            <TaskDetailSection icon={BookOpen} title="Related guides">
              <ul className="space-y-1">
                {task.officialLinks.map((href, i) => (
                  <li key={i}>
                    <Link href={href} className="font-medium text-brand-600 hover:text-brand-700">
                      {href.replace(/^\/netherlands\//, "").replace(/\/$/, "").replace(/-/g, " ")} →
                    </Link>
                  </li>
                ))}
              </ul>
            </TaskDetailSection>
          ) : null}

          {matchingAffiliates.length > 0 ? (
            <TaskDetailSection icon={HandHeart} title="Additional help">
              <p className="text-slate-600">Companies that may help with this step:</p>
              <ul className="mt-3 space-y-3">
                {matchingAffiliates.map((item) => {
                  const linkLabel =
                    (item.provider.cta?.label ?? "").replace(/^\s*View\s+/i, "").trim() ||
                    item.provider.name ||
                    "Visit website";
                  return (
                    <li key={item.provider.id} className="flex gap-3 rounded-lg border border-slate-100 bg-white p-3">
                      <ProviderLogo provider={item.provider} size="sm" className="shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-slate-900">{item.provider.name}</p>
                        <p className="mt-0.5 text-sm text-slate-600">
                          {item.provider.tagline?.trim() || item.reason}
                        </p>
                        {item.provider.cta?.href ? (
                          <a
                            href={item.provider.cta.href}
                            target="_blank"
                            rel="sponsored noopener noreferrer"
                            className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700"
                          >
                            {linkLabel}
                            <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
                          </a>
                        ) : null}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </TaskDetailSection>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

export type ArrivalReminderItem = { id: string; label: string };

export type ArrivalPlannerTaskResultsProps = {
  title?: string;
  summary: string;
  tasks: ArrivalTaskResolved[];
  originCountry?: ArrivalPlannerCountry | null;
  regionGroup?: string;
  distanceCategory?: string;
  /** When set, related tool links include ?from= for context */
  originSlug?: string;
  /** Affiliate providers + reason; shown per task as "Additional help" when category matches */
  affiliateItems?: Array<{ provider: AffiliateProvider; reason: string }>;
  /** Helpful reminders to show in a separate section (not mixed with primary tasks) */
  reminders?: ArrivalReminderItem[];
};

const RELATED_TOOLS = [
  { label: "Moving checklist", href: "/netherlands/moving/tools/moving-checklist/" },
  { label: "Document readiness", href: "/netherlands/moving/tools/document-readiness/" },
  { label: "First 90 days", href: "/netherlands/moving/tools/first-90-days/" },
];

export function ArrivalPlannerTaskResults({
  title = "Your personalized arrival plan",
  summary,
  tasks,
  originCountry,
  regionGroup,
  distanceCategory,
  originSlug,
  affiliateItems = [],
  reminders = [],
}: ArrivalPlannerTaskResultsProps) {
  const byGroup = tasks.reduce<Record<string, ArrivalTaskResolved[]>>((acc, t) => {
    const g = t.group ?? "first-two-weeks";
    if (!acc[g]) acc[g] = [];
    acc[g].push(t);
    return acc;
  }, {});

  const groupOrder = ["must-do-early", "first-two-weeks", "first-month", "country-follow-up", "work-tax-mobility"];

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
        <div className="mt-3 flex items-start gap-2 rounded-xl bg-slate-50 p-3">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
          <p className="text-sm text-slate-700">{summary}</p>
        </div>
      </section>

      {originCountry && regionGroup && distanceCategory ? (
        <OriginSummaryCard
          country={originCountry}
          regionGroup={regionGroup}
          distanceCategory={distanceCategory}
        />
      ) : null}

      <div className="space-y-5">
        {groupOrder.map((groupKey) => {
          const items = byGroup[groupKey];
          if (!items?.length) return null;
          const groupTitle = GROUP_TITLES[groupKey] ?? groupKey;
          const styles = GROUP_STYLES[groupKey] ?? {
            icon: FileSearch,
            accent: "from-brand-500 to-cyan-500",
            chip: "bg-brand-50 text-brand-700 ring-brand-100",
            iconWrap: "bg-brand-50 text-brand-700",
            barBg: "bg-brand-500",
          };
          const GroupIcon = styles.icon;
          return (
            <div
              key={groupKey}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5"
            >
              <div
                className={cn("absolute left-0 top-0 h-1 w-full bg-gradient-to-r", styles.accent)}
                aria-hidden
              />
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2 pt-1">
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "inline-flex h-8 w-8 items-center justify-center rounded-lg",
                      styles.iconWrap
                    )}
                  >
                    <GroupIcon className="h-4 w-4" />
                  </span>
                  <h3 className="text-base font-semibold text-slate-900 md:text-lg">{groupTitle}</h3>
                </div>
                <span
                  className={cn(
                    "inline-flex rounded-full px-2.5 py-1 text-xs font-medium ring-1",
                    styles.chip
                  )}
                >
                  {items.length} task{items.length !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div
                  className={cn("h-full rounded-full", styles.barBg)}
                  style={{ width: `${Math.min(100, items.length * 12.5)}%` }}
                />
              </div>
              <ul className="space-y-2.5">
                {items.map((task) => (
                  <li key={task.id}>
                    <TaskCard
                      task={task}
                      affiliateItems={affiliateItems}
                      originCountry={originCountry ?? undefined}
                    />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {reminders.length > 0 ? (
        <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-slate-400 to-slate-500" aria-hidden />
          <div className="mb-3 flex items-center gap-2 pt-1">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
              <CheckCircle2 className="h-4 w-4" />
            </span>
            <h3 className="text-base font-semibold text-slate-900 md:text-lg">Helpful reminders</h3>
          </div>
          <ul className="space-y-2">
            {reminders.map((r) => (
              <li key={r.id} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" aria-hidden />
                {r.label}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {originSlug ? (
        <section className="rounded-xl border border-slate-200 bg-slate-50/80 p-4">
          <h3 className="text-sm font-semibold text-slate-800">Related tools</h3>
          <ul className="mt-2 flex flex-wrap gap-3">
            {RELATED_TOOLS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={`${href}${href.includes("?") ? "&" : "?"}from=${encodeURIComponent(originSlug)}`}
                  className="text-sm font-medium text-brand-600 hover:text-brand-700"
                >
                  {label} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
