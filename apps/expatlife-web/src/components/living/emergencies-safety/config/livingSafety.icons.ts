import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  Bike,
  Building2,
  CheckCircle2,
  FileText,
  HeartPulse,
  Home,
  KeyRound,
  MapPin,
  Phone,
  Shield,
  Smartphone,
  TrainFront,
  Users,
  Wallet,
} from "lucide-react";
import type { LivingSafetyIconKey } from "./livingSafety.types";

export const LIVING_SAFETY_ICON_MAP: Record<LivingSafetyIconKey, LucideIcon> = {
  alertTriangle: AlertTriangle,
  bike: Bike,
  building2: Building2,
  checkCircle2: CheckCircle2,
  fileText: FileText,
  heartPulse: HeartPulse,
  home: Home,
  keyRound: KeyRound,
  mapPin: MapPin,
  phone: Phone,
  shield: Shield,
  smartphone: Smartphone,
  trainFront: TrainFront,
  users: Users,
  wallet: Wallet,
};

export function resolveLivingSafetyIcon(key: LivingSafetyIconKey): LucideIcon {
  return LIVING_SAFETY_ICON_MAP[key];
}
