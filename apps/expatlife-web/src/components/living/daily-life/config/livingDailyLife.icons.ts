import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Baby,
  Banknote,
  Barcode,
  Building2,
  Calculator,
  CalendarDays,
  CheckCircle2,
  Clock,
  Coffee,
  CreditCard,
  MapPinned,
  Package,
  Recycle,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Stethoscope,
  TrainFront,
  Truck,
  Undo2,
  UtensilsCrossed,
  Wallet,
} from "lucide-react";
import type { DailyLifeIconKey } from "./livingDailyLife.types";

export const DAILY_LIFE_ICON_MAP: Record<DailyLifeIconKey, LucideIcon> = {
  arrowRight: ArrowRight,
  baby: Baby,
  banknote: Banknote,
  barcode: Barcode,
  building2: Building2,
  calculator: Calculator,
  calendarDays: CalendarDays,
  checkCircle2: CheckCircle2,
  clock: Clock,
  coffee: Coffee,
  creditCard: CreditCard,
  mapPinned: MapPinned,
  package: Package,
  recycle: Recycle,
  shoppingBag: ShoppingBag,
  smartphone: Smartphone,
  sparkles: Sparkles,
  stethoscope: Stethoscope,
  trainFront: TrainFront,
  truck: Truck,
  undo2: Undo2,
  utensilsCrossed: UtensilsCrossed,
  wallet: Wallet,
};

export function resolveDailyLifeIcon(key: DailyLifeIconKey): LucideIcon {
  return DAILY_LIFE_ICON_MAP[key];
}
