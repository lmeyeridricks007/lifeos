import type { LucideIcon } from "lucide-react";
import {
  Map,
  FileText,
  Home,
  CalendarCheck,
  Calendar,
  Smartphone,
  FileCheck,
  Briefcase,
  Users,
  Heart,
  CheckSquare,
  Plane,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Map,
  FileText,
  Home,
  CalendarCheck,
  Calendar,
  Smartphone,
  FileCheck,
  Briefcase,
  Users,
  Heart,
  CheckSquare,
  Plane,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? FileText;
}
