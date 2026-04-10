import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  Building2,
  CalendarDays,
  CheckCircle2,
  FileText,
  HeartPulse,
  MapPin,
  Phone,
  Pill,
  Shield,
  Stethoscope,
  Users,
} from "lucide-react";
import type { LivingHealthcareIconKey } from "./livingHealthcare.types";

export const LIVING_HEALTHCARE_ICON_MAP: Record<LivingHealthcareIconKey, LucideIcon> = {
  alertTriangle: AlertTriangle,
  building2: Building2,
  calendarDays: CalendarDays,
  checkCircle2: CheckCircle2,
  fileText: FileText,
  heartPulse: HeartPulse,
  mapPin: MapPin,
  phone: Phone,
  pill: Pill,
  shield: Shield,
  stethoscope: Stethoscope,
  users: Users,
};

export function resolveLivingHealthcareIcon(key: LivingHealthcareIconKey): LucideIcon {
  return LIVING_HEALTHCARE_ICON_MAP[key];
}
