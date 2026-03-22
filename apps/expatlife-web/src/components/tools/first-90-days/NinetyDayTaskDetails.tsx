"use client";

import Link from "next/link";
import {
  ExternalLink,
  Lightbulb,
  ListTodo,
  CalendarClock,
  ListOrdered,
  Globe,
  BookOpen,
  Users,
  HandHeart,
} from "lucide-react";
import type { AffiliateProvider } from "@/src/lib/affiliates/types";
import type { NinetyDayTask } from "@/src/lib/tools/first-90-days/types";
import type { TaskContactRef } from "@/src/lib/tools/first-90-days/types";
import { ProviderLogo } from "@/src/components/affiliates/ProviderLogo";
import { TaskDetailSection } from "@/src/components/tools/shared/TaskDetailSection";
import { NinetyDayTaskDependencyPill } from "./NinetyDayTaskDependencyPill";

type AffiliateItem = { provider: AffiliateProvider; reason: string };

function getMatchingAffiliateItems(
  taskCategories: string[],
  affiliateItems: AffiliateItem[]
): AffiliateItem[] {
  if (!taskCategories?.length || !affiliateItems?.length) return [];
  const set = new Set<string>();
  for (const c of taskCategories) {
    set.add(c.toLowerCase());
    if (c.toLowerCase() === "housing-platforms") set.add("housing");
    if (c.toLowerCase() === "money-transfer") set.add("banking");
  }
  return affiliateItems.filter((item) =>
    item.provider.categoryIds?.some((id) => set.has(id.toLowerCase()))
  );
}

export type NinetyDayTaskDetailsProps = {
  task: NinetyDayTask;
  taskContacts: Record<string, TaskContactRef> | null;
  countryNote?: string;
  /** Affiliate providers to show as "Additional help" when task.affiliateCategories match */
  affiliateItems?: AffiliateItem[];
};

export function NinetyDayTaskDetails({
  task,
  taskContacts,
  countryNote,
  affiliateItems = [],
}: NinetyDayTaskDetailsProps) {
  const contacts = (task.whoToContact || [])
    .map((key) => taskContacts?.[key])
    .filter(Boolean) as TaskContactRef[];
  const matchingAffiliates = getMatchingAffiliateItems(
    task.affiliateCategories ?? [],
    affiliateItems
  );

  return (
    <div className="mt-3 space-y-3 border-t border-slate-200 pt-3 text-sm">
      <TaskDetailSection icon={Lightbulb} title="Why this matters">
        <p>{task.whyItMatters}</p>
      </TaskDetailSection>
      <TaskDetailSection icon={ListTodo} title="What this involves" variant="sky">
        <ul className="list-inside list-disc space-y-0.5">
          {(task.whatThisInvolves || []).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </TaskDetailSection>
      <TaskDetailSection icon={CalendarClock} title="When to do it">
        <p>{task.whenToDoIt}</p>
      </TaskDetailSection>
      {task.dependencies?.length > 0 && (
        <NinetyDayTaskDependencyPill dependencyIds={task.dependencies} />
      )}
      {(task.typicalSteps?.length ?? 0) > 0 && (
        <TaskDetailSection icon={ListOrdered} title="Typical steps" variant="sky">
          <ol className="list-inside list-decimal space-y-0.5">
            {task.typicalSteps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </TaskDetailSection>
      )}
      {countryNote && (
        <TaskDetailSection icon={Globe} title="Country-specific note" variant="amber">
          <p className="text-amber-800">{countryNote}</p>
        </TaskDetailSection>
      )}
      {(task.relatedGuides?.length ?? 0) > 0 && (
        <TaskDetailSection icon={BookOpen} title="Related guides">
          <ul className="space-y-1">
            {task.relatedGuides.map((href) => (
              <li key={href}>
                <Link href={href} className="font-medium text-brand-600 hover:text-brand-700">
                  {href.replace(/^\/netherlands\//, "").replace(/\/$/, "").replace(/-/g, " ")} →
                </Link>
              </li>
            ))}
          </ul>
        </TaskDetailSection>
      )}
      {contacts.length > 0 && (
        <TaskDetailSection icon={Users} title="Who to contact">
          <ul className="space-y-1.5">
            {contacts.map((c) => (
              <li key={c.name}>
                {c.website ? (
                  <a
                    href={c.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-brand-600 hover:text-brand-700"
                  >
                    {c.name}
                  </a>
                ) : (
                  <span className="font-medium text-slate-700">{c.name}</span>
                )}
                {c.contactSummary && (
                  <p className="mt-0.5 text-slate-600">{c.contactSummary}</p>
                )}
              </li>
            ))}
          </ul>
        </TaskDetailSection>
      )}
      {matchingAffiliates.length > 0 && (
        <TaskDetailSection icon={HandHeart} title="Additional help">
          <p className="text-slate-600">
            Companies that can help with this step:
          </p>
          <ul className="mt-2 space-y-2">
            {matchingAffiliates.map((item) => {
              const linkLabel =
                (item.provider.cta?.label ?? "").replace(/^\s*View\s+/i, "").trim() ||
                item.provider.name ||
                "Visit website";
              return (
                <li
                  key={item.provider.id}
                  className="flex gap-2 rounded-md border border-slate-100 bg-white p-2"
                >
                  <ProviderLogo provider={item.provider} size="sm" className="shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-slate-900">{item.provider.name}</p>
                    <p className="mt-0.5 text-xs text-slate-600">
                      {item.provider.tagline?.trim() || item.reason}
                    </p>
                    {item.provider.cta?.href ? (
                      <a
                        href={item.provider.cta.href}
                        target="_blank"
                        rel="sponsored noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700"
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
      )}
    </div>
  );
}
