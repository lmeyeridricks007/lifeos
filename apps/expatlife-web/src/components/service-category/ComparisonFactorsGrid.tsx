import {
  Banknote,
  Receipt,
  FileCheck,
  CirclePlus,
  Languages,
  Smartphone,
  ClipboardCheck,
  User,
  CreditCard,
  Building2,
  Clock,
  Globe,
  Coins,
  Award,
  Briefcase,
  Zap,
  Scale,
  Users,
  MapPin,
  Wallet,
  MonitorSmartphone,
  MessageCircle,
  FileText,
  Gavel,
  Target,
} from "lucide-react";
import type { ComparisonFactor } from "@/src/lib/service-category/types";

const FACTOR_ICONS: Record<
  string,
  { icon: typeof Banknote; accent: string; iconBg: string; iconColor: string }
> = {
  // Health insurance – each with a distinct icon
  premium: { icon: Banknote, accent: "border-l-emerald-500", iconBg: "bg-emerald-50", iconColor: "text-emerald-600" },
  excess: { icon: Receipt, accent: "border-l-amber-500", iconBg: "bg-amber-50", iconColor: "text-amber-600" },
  "policy-type": { icon: FileCheck, accent: "border-l-brand-500", iconBg: "bg-brand-50", iconColor: "text-brand-600" },
  supplementary: { icon: CirclePlus, accent: "border-l-violet-500", iconBg: "bg-violet-50", iconColor: "text-violet-600" },
  english: { icon: Languages, accent: "border-l-sky-500", iconBg: "bg-sky-50", iconColor: "text-sky-600" },
  digital: { icon: MonitorSmartphone, accent: "border-l-slate-600", iconBg: "bg-slate-100", iconColor: "text-slate-600" },
  claims: { icon: ClipboardCheck, accent: "border-l-teal-500", iconBg: "bg-teal-50", iconColor: "text-teal-600" },
  situation: { icon: User, accent: "border-l-rose-500", iconBg: "bg-rose-50", iconColor: "text-rose-600" },
  // Banks – each with a distinct icon
  "monthly-fees": { icon: Wallet, accent: "border-l-emerald-500", iconBg: "bg-emerald-50", iconColor: "text-emerald-600" },
  "debit-card": { icon: CreditCard, accent: "border-l-brand-500", iconBg: "bg-brand-50", iconColor: "text-brand-600" },
  "app-onboarding": { icon: Smartphone, accent: "border-l-violet-500", iconBg: "bg-violet-50", iconColor: "text-violet-600" },
  branch: { icon: Building2, accent: "border-l-amber-500", iconBg: "bg-amber-50", iconColor: "text-amber-600" },
  "bsn-timing": { icon: Clock, accent: "border-l-sky-500", iconBg: "bg-sky-50", iconColor: "text-sky-600" },
  international: { icon: Globe, accent: "border-l-teal-500", iconBg: "bg-teal-50", iconColor: "text-teal-600" },
  multicurrency: { icon: Coins, accent: "border-l-indigo-500", iconBg: "bg-indigo-50", iconColor: "text-indigo-600" },
  // Immigration lawyers – each with a distinct icon
  specialisation: { icon: Award, accent: "border-l-brand-500", iconBg: "bg-brand-50", iconColor: "text-brand-600" },
  experience: { icon: Briefcase, accent: "border-l-amber-500", iconBg: "bg-amber-50", iconColor: "text-amber-600" },
  fees: { icon: Banknote, accent: "border-l-emerald-500", iconBg: "bg-emerald-50", iconColor: "text-emerald-600" },
  responsiveness: { icon: Zap, accent: "border-l-orange-500", iconBg: "bg-orange-50", iconColor: "text-orange-600" },
  "document-support": { icon: FileText, accent: "border-l-teal-500", iconBg: "bg-teal-50", iconColor: "text-teal-600" },
  "objections-appeals": { icon: Gavel, accent: "border-l-violet-500", iconBg: "bg-violet-50", iconColor: "text-violet-600" },
  "employer-family-startup": { icon: Users, accent: "border-l-rose-500", iconBg: "bg-rose-50", iconColor: "text-rose-600" },
  "national-local": { icon: MapPin, accent: "border-l-sky-500", iconBg: "bg-sky-50", iconColor: "text-sky-600" },
};

// Fallback icons so unknown factor ids still get a unique icon by index
const FALLBACK_ICONS = [
  { icon: Target, accent: "border-l-slate-400", iconBg: "bg-slate-100", iconColor: "text-slate-600" },
  { icon: MessageCircle, accent: "border-l-sky-400", iconBg: "bg-sky-50", iconColor: "text-sky-600" },
  { icon: FileText, accent: "border-l-teal-400", iconBg: "bg-teal-50", iconColor: "text-teal-600" },
  { icon: Scale, accent: "border-l-violet-400", iconBg: "bg-violet-50", iconColor: "text-violet-600" },
  { icon: Coins, accent: "border-l-amber-400", iconBg: "bg-amber-50", iconColor: "text-amber-600" },
  { icon: Building2, accent: "border-l-emerald-400", iconBg: "bg-emerald-50", iconColor: "text-emerald-600" },
  { icon: Clock, accent: "border-l-rose-400", iconBg: "bg-rose-50", iconColor: "text-rose-600" },
  { icon: Globe, accent: "border-l-indigo-400", iconBg: "bg-indigo-50", iconColor: "text-indigo-600" },
] as const;

export function ComparisonFactorsGrid({ factors }: { factors: ComparisonFactor[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2" role="list">
      {factors.map((f, index) => {
        const style = FACTOR_ICONS[f.id] ?? FALLBACK_ICONS[index % FALLBACK_ICONS.length];
        const Icon = style.icon;
        return (
          <li
            key={f.id}
            className={`flex min-h-[4.5rem] gap-4 rounded-xl border border-slate-200 border-l-4 bg-white p-4 shadow-sm transition hover:shadow-md ${style.accent}`}
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${style.iconBg} ${style.iconColor}`}
              aria-hidden
            >
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                {f.description}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
