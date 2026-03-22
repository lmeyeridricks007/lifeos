import {
  Shield,
  CirclePlus,
  Receipt,
  Banknote,
  Home,
  FileCheck,
  ClipboardList,
  Users,
  MapPin,
  Briefcase,
  BedDouble,
  GraduationCap,
  CalendarClock,
  Building2,
  Search,
  CalendarDays,
  MessageSquare,
  Globe,
  Landmark,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { CoverageCard } from "@/src/lib/service-category/types";

type CardStyle = {
  icon: LucideIcon;
  accent: string;
  iconBg: string;
  iconColor: string;
};

const CARD_STYLES: Record<string, CardStyle> = {
  // Insurance / health style (existing)
  basic: {
    icon: Shield,
    accent: "border-l-brand-500",
    iconBg: "bg-brand-50",
    iconColor: "text-brand-600",
  },
  additional: {
    icon: CirclePlus,
    accent: "border-l-emerald-500",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  excess: {
    icon: Receipt,
    accent: "border-l-amber-500",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  copay: {
    icon: Banknote,
    accent: "border-l-slate-500",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
  },
  // Relocation / service coverage (unique icon + color per card)
  housing: {
    icon: Home,
    accent: "border-l-brand-500",
    iconBg: "bg-brand-50",
    iconColor: "text-brand-600",
  },
  "housing-search": {
    icon: Home,
    accent: "border-l-brand-500",
    iconBg: "bg-brand-50",
    iconColor: "text-brand-600",
  },
  "immigration-coordination": {
    icon: FileCheck,
    accent: "border-l-violet-500",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  "registration-admin": {
    icon: ClipboardList,
    accent: "border-l-emerald-500",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  "family-school": {
    icon: Users,
    accent: "border-l-amber-500",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  "banking-utilities": {
    icon: Landmark,
    accent: "border-l-sky-500",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  "settling-in": {
    icon: Sparkles,
    accent: "border-l-rose-500",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  "local-settling-in": {
    icon: MapPin,
    accent: "border-l-sky-500",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  "corporate-relocation": {
    icon: Briefcase,
    accent: "border-l-slate-600",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-700",
  },
  // Housing platforms – types of platforms expats commonly use
  "long-term-rental": {
    icon: Home,
    accent: "border-l-brand-500",
    iconBg: "bg-brand-50",
    iconColor: "text-brand-600",
  },
  "furnished-mid-term": {
    icon: BedDouble,
    accent: "border-l-violet-500",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  "room-platforms": {
    icon: Users,
    accent: "border-l-sky-500",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  "student-housing": {
    icon: GraduationCap,
    accent: "border-l-amber-500",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  "temporary-accommodation": {
    icon: CalendarClock,
    accent: "border-l-emerald-500",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  "buying-sale": {
    icon: Building2,
    accent: "border-l-slate-600",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-700",
  },
  // Rental agencies – what agencies usually help with
  "search-support": {
    icon: Search,
    accent: "border-l-brand-500",
    iconBg: "bg-brand-50",
    iconColor: "text-brand-600",
  },
  "viewing-coordination": {
    icon: CalendarDays,
    accent: "border-l-emerald-500",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  "negotiation-communication": {
    icon: MessageSquare,
    accent: "border-l-violet-500",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  "furnished-long-term": {
    icon: BedDouble,
    accent: "border-l-amber-500",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  "family-housing": {
    icon: Users,
    accent: "border-l-sky-500",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  "expat-market-guidance": {
    icon: Globe,
    accent: "border-l-slate-600",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-700",
  },
};

const defaultStyle: CardStyle = {
  icon: Shield,
  accent: "border-l-slate-300",
  iconBg: "bg-slate-100",
  iconColor: "text-slate-600",
};

type CoverageExplainerCardsProps = {
  cards: CoverageCard[];
  /** When "2x2", grid stays 2 columns at all breakpoints (e.g. for 4-card sections). */
  layout?: "2x2" | "default";
};

export function CoverageExplainerCards({ cards, layout = "default" }: CoverageExplainerCardsProps) {
  const gridClass = layout === "2x2" ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid gap-4 ${gridClass}`}>
      {cards.map((card) => {
        const style = CARD_STYLES[card.id] ?? defaultStyle;
        const Icon = style.icon;
        return (
          <article
            key={card.id}
            className={`rounded-xl border border-slate-200 border-l-4 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-slate-300 ${style.accent}`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${style.iconBg} ${style.iconColor}`}
                aria-hidden
              >
                <Icon className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
