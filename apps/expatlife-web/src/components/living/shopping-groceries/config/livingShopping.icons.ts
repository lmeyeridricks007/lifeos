import type { LucideIcon } from "lucide-react";
import {
  BadgePercent,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Home,
  House,
  MapPin,
  Package,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  Truck,
  Wallet,
} from "lucide-react";
import type { LivingShoppingIconKey } from "./livingShopping.types";

export const LIVING_SHOPPING_ICON_MAP: Record<LivingShoppingIconKey, LucideIcon> = {
  badgePercent: BadgePercent,
  calendarDays: CalendarDays,
  checkCircle2: CheckCircle2,
  clock3: Clock3,
  home: Home,
  house: House,
  mapPin: MapPin,
  package: Package,
  shoppingBag: ShoppingBag,
  smartphone: Smartphone,
  sparkles: Sparkles,
  store: Store,
  truck: Truck,
  wallet: Wallet,
};

export function resolveLivingShoppingIcon(key: LivingShoppingIconKey): LucideIcon {
  return LIVING_SHOPPING_ICON_MAP[key];
}
