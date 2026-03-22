"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Lightbulb,
  ListTodo,
  FileCheck,
  Stamp,
  Languages,
  MapPin,
  Users,
  CircleDollarSign,
  CalendarClock,
  BookOpen,
  HandHeart,
} from "lucide-react";
import type { ResolvedDocument } from "@/src/lib/tools/document-readiness/types";
import { TaskDetailSection } from "@/src/components/tools/shared/TaskDetailSection";
import { DocumentRequirementBadge } from "./DocumentRequirementBadge";
import { DocumentCountryInfoBlock } from "./DocumentCountryInfoBlock";

const SECTION_ICONS: Record<string, LucideIcon> = {
  "Why this matters": Lightbulb,
  "Common uses": ListTodo,
  "Typical requirements": FileCheck,
  "Apostille / legalization": Stamp,
  "Translation": Languages,
  "Where to get it": MapPin,
  "Who to contact": Users,
  "Typical cost": CircleDollarSign,
  "Typical timeline": CalendarClock,
  "Related guides": BookOpen,
  "Helpful services": HandHeart,
};

export function DocumentItemDetails({
  doc,
  renderHelpfulServices,
}: {
  doc: ResolvedDocument;
  renderHelpfulServices?: (categories: string[]) => React.ReactNode;
}) {
  const contacts = doc.resolvedWhoToContact ?? doc.whoToContact ?? [];
  const sections: Array<{ title: string; content: React.ReactNode; variant?: "default" | "sky" | "amber" }> = [];

  if (doc.whyItMatters) {
    sections.push({ title: "Why this matters", content: <p>{doc.whyItMatters}</p> });
  }
  if (doc.commonUses?.length) {
    sections.push({
      title: "Common uses",
      content: (
        <ul className="list-disc space-y-0.5 pl-4">
          {doc.commonUses.map((use, i) => (
            <li key={i}>{use}</li>
          ))}
        </ul>
      ),
      variant: "sky",
    });
  }
  if (doc.typicalRequirements?.length) {
    sections.push({
      title: "Typical requirements",
      content: (
        <ul className="list-disc space-y-0.5 pl-4">
          {doc.typicalRequirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      ),
      variant: "sky",
    });
  }
  if (doc.apostilleOrLegalization?.mayBeRelevant && doc.apostilleOrLegalization.summary) {
    sections.push({
      title: "Apostille / legalization",
      content: (
        <div className="space-y-1.5">
          <DocumentRequirementBadge type="apostille" />
          <p>{doc.apostilleOrLegalization.summary}</p>
        </div>
      ),
    });
  }
  if (doc.translation?.mayBeRelevant && doc.translation.summary) {
    sections.push({
      title: "Translation",
      content: (
        <div className="space-y-1.5">
          <DocumentRequirementBadge type="translation" />
          <p>{doc.translation.summary}</p>
        </div>
      ),
    });
  }
  if (doc.whereToGetIt?.summary) {
    sections.push({
      title: "Where to get it",
      content: <p>{doc.whereToGetIt.summary}</p>,
    });
  }
  if (contacts.length > 0) {
    sections.push({
      title: "Who to contact",
      content: (
        <ul className="space-y-2">
          {contacts.map((c, i) => (
            <li key={i} className="rounded-lg border border-slate-200 bg-white p-2.5 text-sm">
              <p className="font-medium text-slate-900">{c.name}</p>
              {c.contactSummary ? <p className="mt-0.5 text-slate-600">{c.contactSummary}</p> : null}
              {c.website ? (
                <a
                  href={c.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-brand-600 hover:underline"
                >
                  Official website →
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      ),
    });
  }
  if (doc.typicalCost?.summary) {
    sections.push({
      title: "Typical cost",
      content: <p>{doc.typicalCost.summary}</p>,
    });
  }
  if (doc.typicalTimeline?.summary) {
    sections.push({
      title: "Typical timeline",
      content: <p>{doc.typicalTimeline.summary}</p>,
    });
  }
  if (doc.relatedGuides?.length) {
    sections.push({
      title: "Related guides",
      content: (
        <ul className="space-y-1">
          {doc.relatedGuides.map((href) => (
            <li key={href}>
              <Link href={href} className="font-medium text-brand-600 hover:text-brand-700">
                {href.split("/").filter(Boolean).slice(-1)[0]?.replace(/-/g, " ") ?? href} →
              </Link>
            </li>
          ))}
        </ul>
      ),
    });
  }
  if (doc.affiliateCategories?.length) {
    sections.push({
      title: "Helpful services",
      content: renderHelpfulServices
        ? renderHelpfulServices(doc.affiliateCategories)
        : (
            <p className="text-slate-600">
              Relevant services may be shown in the recommendations below.
            </p>
          ),
    });
  }

  if (sections.length === 0 && !doc.countryNote) return null;

  return (
    <div className="mt-3 space-y-3 border-t border-slate-200 pt-3">
      {doc.countryNote ? (
        <DocumentCountryInfoBlock message={doc.countryNote} />
      ) : null}
      {sections.map((section, i) => {
        const Icon = SECTION_ICONS[section.title];
        if (!Icon) {
          return (
            <div key={i} className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
              <h4 className="font-semibold text-slate-800">{section.title}</h4>
              <div className="mt-2.5 text-sm text-slate-600">{section.content}</div>
            </div>
          );
        }
        return (
          <TaskDetailSection
            key={i}
            icon={Icon}
            title={section.title}
            variant={section.variant ?? "default"}
          >
            {section.content}
          </TaskDetailSection>
        );
      })}
    </div>
  );
}
