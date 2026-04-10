import {
  AlertTriangle,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock,
  Coffee,
  Gift,
  Hand,
  HelpCircle,
  Languages,
  MapPinned,
  ShoppingBag,
  Sparkles,
  TrainFront,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import type { LivingCultureIconKey } from "./livingCulture.types";

export const LIVING_CULTURE_ICON_MAP: Record<LivingCultureIconKey, LucideIcon> = {
  alertTriangle: AlertTriangle,
  building2: Building2,
  calendarDays: CalendarDays,
  checkCircle2: CheckCircle2,
  clock: Clock,
  coffee: Coffee,
  gift: Gift,
  hand: Hand,
  helpCircle: HelpCircle,
  languages: Languages,
  mapPinned: MapPinned,
  shoppingBag: ShoppingBag,
  sparkles: Sparkles,
  trainFront: TrainFront,
  users: Users,
  wallet: Wallet,
};

export function resolveLivingCultureIcon(iconKey: LivingCultureIconKey): LucideIcon {
  return LIVING_CULTURE_ICON_MAP[iconKey];
}
