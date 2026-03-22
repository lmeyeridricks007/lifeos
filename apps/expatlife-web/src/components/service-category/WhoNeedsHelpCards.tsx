import Link from "next/link";
import {
  UserPlus,
  GraduationCap,
  Users,
  Activity,
  Globe,
  Package,
  Briefcase,
  ArrowRightLeft,
  Smartphone,
} from "lucide-react";
import type { WhoNeedsHelpCard } from "@/src/lib/service-category/types";

const ACCENTS = [
  { border: "border-l-brand-500", bg: "bg-brand-50/50", iconBg: "bg-brand-100", iconColor: "text-brand-600" },
  { border: "border-l-emerald-500", bg: "bg-emerald-50/50", iconBg: "bg-emerald-100", iconColor: "text-emerald-600" },
  { border: "border-l-amber-500", bg: "bg-amber-50/50", iconBg: "bg-amber-100", iconColor: "text-amber-600" },
  { border: "border-l-violet-500", bg: "bg-violet-50/50", iconBg: "bg-violet-100", iconColor: "text-violet-600" },
  { border: "border-l-sky-500", bg: "bg-sky-50/50", iconBg: "bg-sky-100", iconColor: "text-sky-600" },
] as const;

const CARD_ICONS = [
  UserPlus,
  GraduationCap,
  Users,
  Activity,
  Globe,
  Package,
  Briefcase,
  ArrowRightLeft,
  Smartphone,
] as const;

export function WhoNeedsHelpCards({ cards }: { cards: WhoNeedsHelpCard[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {cards.map((card, index) => {
        const accent = ACCENTS[index % ACCENTS.length];
        const Icon = CARD_ICONS[index % CARD_ICONS.length];
        return (
          <article
            key={card.id}
            className={`rounded-xl border border-slate-200 border-l-4 bg-white p-4 shadow-sm ${accent.border}`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${accent.iconBg} ${accent.iconColor}`}
                aria-hidden
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{card.description}</p>
                {card.link ? (
                  <Link
                    href={card.link.href}
                    className="mt-2 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
                  >
                    {card.link.label} →
                  </Link>
                ) : null}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
