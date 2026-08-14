/**
 * App Router cornerstone guides with a calendar go-live date.
 *
 * Behaviour (via `isPubliclyVisible` + `getRouteStatus` + middleware):
 * - Local `next dev`: date bypassed → pages appear in menu, sitemap, and open normally.
 * - Vercel Preview / CONTENT_PREVIEW: same bypass as local.
 * - Production: before `publishDate` (UTC start of day) → nav shows “Coming soon”,
 *   omitted from XML sitemap, middleware returns 404; metadata is noindex via publishGate.
 * - Simulate production locally: append `?preview=true`.
 *
 * Add a row here when scheduling a new guide; keep page-model `publishDate` in sync
 * (prefer importing {@link scheduledPublishDateForPath}).
 */

import { normalizeSitePath } from "@/src/data/site/route-registry";
import { isPubliclyVisible } from "@/src/lib/publishing/isPubliclyVisible";

export type ScheduledGuide = {
  /** Canonical site path with trailing slash. */
  path: string;
  /** YYYY-MM-DD — public from 00:00 UTC that day. */
  publishDate: string;
  title: string;
  /** Explicit `false` keeps the guide hidden even after the date. */
  publish?: boolean;
};

export const SCHEDULED_GUIDES: readonly ScheduledGuide[] = [
  {
    path: "/netherlands/money/banking/joint-accounts/",
    publishDate: "2026-08-14",
    title: "Joint bank accounts",
  },
  {
    path: "/netherlands/money/banking/student-accounts/",
    publishDate: "2026-08-14",
    title: "Student bank accounts",
  },
  {
    path: "/netherlands/money/cost-of-living-netherlands/",
    publishDate: "2026-08-15",
    title: "Cost of living",
  },
  {
    path: "/netherlands/money/monthly-budget-netherlands/",
    publishDate: "2026-08-15",
    title: "Monthly budget",
  },
  {
    path: "/netherlands/money/saving-money-netherlands/",
    publishDate: "2026-08-15",
    title: "Saving money",
  },
  {
    path: "/netherlands/money/hidden-costs-netherlands/",
    publishDate: "2026-08-18",
    title: "Hidden costs of living",
  },
  {
    path: "/netherlands/money/financial-checklist-netherlands/",
    publishDate: "2026-08-18",
    title: "Financial checklist for expats",
  },
  {
    path: "/netherlands/family/family-activities-netherlands/",
    publishDate: "2026-08-20",
    title: "Family activities",
  },
  {
    path: "/netherlands/family/pregnancy-netherlands/",
    publishDate: "2026-08-20",
    title: "Pregnancy",
  },
  {
    path: "/netherlands/family/giving-birth-netherlands/",
    publishDate: "2026-08-24",
    title: "Giving birth",
  },
  {
    path: "/netherlands/family/pets-netherlands/",
    publishDate: "2026-08-24",
    title: "Pets",
  },
  {
    path: "/netherlands/living/driving-licence-exchange-netherlands/",
    publishDate: "2026-08-26",
    title: "Driving licence exchange",
  },
  {
    path: "/netherlands/living/buying-a-car-netherlands/",
    publishDate: "2026-08-26",
    title: "Buying a car",
  },
  {
    path: "/netherlands/living/road-tax-netherlands/",
    publishDate: "2026-08-29",
    title: "Road tax",
  },
  {
    path: "/netherlands/living/car-insurance-netherlands/",
    publishDate: "2026-08-29",
    title: "Car insurance",
  },
  {
    path: "/netherlands/living/mot-apk-netherlands/",
    publishDate: "2026-09-01",
    title: "MOT / APK",
  },
  {
    path: "/netherlands/living/speed-cameras-netherlands/",
    publishDate: "2026-09-01",
    title: "Speed cameras",
  },
  {
    path: "/netherlands/living/electric-vehicles-netherlands/",
    publishDate: "2026-09-04",
    title: "Electric vehicles",
  },
  {
    path: "/netherlands/living/car-sharing-netherlands/",
    publishDate: "2026-09-04",
    title: "Car sharing",
  },
  {
    path: "/netherlands/living/lease-cars-netherlands/",
    publishDate: "2026-09-04",
    title: "Lease cars",
  },
  {
    path: "/netherlands/living/ov-chipkaart-netherlands/",
    publishDate: "2026-09-07",
    title: "OV-chipkaart",
  },
  {
    path: "/netherlands/living/ovpay-netherlands/",
    publishDate: "2026-09-07",
    title: "OVpay",
  },
  {
    path: "/netherlands/living/ns-trains-netherlands/",
    publishDate: "2026-09-07",
    title: "NS trains",
  },
  {
    path: "/netherlands/living/trams-netherlands/",
    publishDate: "2026-09-10",
    title: "Trams",
  },
  {
    path: "/netherlands/living/metro-netherlands/",
    publishDate: "2026-09-10",
    title: "Metro",
  },
  {
    path: "/netherlands/living/regional-buses-netherlands/",
    publishDate: "2026-09-10",
    title: "Regional buses",
  },
  {
    path: "/netherlands/living/cycling-netherlands/",
    publishDate: "2026-09-13",
    title: "Cycling",
  },
  {
    path: "/netherlands/living/bike-sharing-netherlands/",
    publishDate: "2026-09-13",
    title: "Bike sharing",
  },
  {
    path: "/netherlands/living/train-discounts-netherlands/",
    publishDate: "2026-09-16",
    title: "Train discounts",
  },
  {
    path: "/netherlands/living/weekend-travel-netherlands/",
    publishDate: "2026-09-16",
    title: "Weekend travel",
  },
  {
    path: "/netherlands/living/dutch-supermarkets/",
    publishDate: "2026-09-18",
    title: "Dutch supermarkets",
  },
  {
    path: "/netherlands/living/best-supermarkets-netherlands/",
    publishDate: "2026-09-18",
    title: "Best supermarkets",
  },
  {
    path: "/netherlands/living/cheap-groceries-netherlands/",
    publishDate: "2026-09-21",
    title: "Cheap groceries",
  },
  {
    path: "/netherlands/living/international-supermarkets-netherlands/",
    publishDate: "2026-09-21",
    title: "International supermarkets",
  },
  {
    path: "/netherlands/living/asian-supermarkets-netherlands/",
    publishDate: "2026-09-21",
    title: "Asian supermarkets",
  },
  {
    path: "/netherlands/living/turkish-supermarkets-netherlands/",
    publishDate: "2026-09-24",
    title: "Turkish supermarkets",
  },
  {
    path: "/netherlands/living/indian-supermarkets-netherlands/",
    publishDate: "2026-09-24",
    title: "Indian supermarkets",
  },
  {
    path: "/netherlands/living/south-african-shops-netherlands/",
    publishDate: "2026-09-24",
    title: "South African shops",
  },
  {
    path: "/netherlands/living/meal-kits-netherlands/",
    publishDate: "2026-09-27",
    title: "Meal kits",
  },
  {
    path: "/netherlands/living/food-delivery-netherlands/",
    publishDate: "2026-09-27",
    title: "Food delivery",
  },
  {
    path: "/netherlands/living/restaurants-netherlands/",
    publishDate: "2026-09-30",
    title: "Restaurants",
  },
  {
    path: "/netherlands/living/tipping-netherlands/",
    publishDate: "2026-09-30",
    title: "Tipping",
  },
  {
    path: "/netherlands/jobs/cv-netherlands/",
    publishDate: "2026-10-01",
    title: "CV Netherlands",
  },
  {
    path: "/netherlands/jobs/interview-tips-netherlands/",
    publishDate: "2026-10-01",
    title: "Interview tips",
  },
  {
    path: "/netherlands/jobs/cover-letter-netherlands/",
    publishDate: "2026-10-04",
    title: "Cover letter",
  },
  {
    path: "/netherlands/jobs/linkedin-netherlands/",
    publishDate: "2026-10-04",
    title: "LinkedIn Netherlands",
  },
  {
    path: "/netherlands/jobs/networking-netherlands/",
    publishDate: "2026-10-04",
    title: "Networking Netherlands",
  },
  {
    path: "/netherlands/jobs/recruitment-agencies-netherlands/",
    publishDate: "2026-10-07",
    title: "Recruitment agencies",
  },
  {
    path: "/netherlands/jobs/english-speaking-jobs-netherlands/",
    publishDate: "2026-10-07",
    title: "English speaking jobs",
  },
  {
    path: "/netherlands/jobs/remote-work-netherlands/",
    publishDate: "2026-10-07",
    title: "Remote work",
  },
  {
    path: "/netherlands/jobs/starting-consultancy-netherlands/",
    publishDate: "2026-10-09",
    title: "Starting consultancy",
  },
  {
    path: "/netherlands/living/weekend-trips-netherlands/",
    publishDate: "2026-10-12",
    title: "Weekend trips",
  },
  {
    path: "/netherlands/living/national-parks-netherlands/",
    publishDate: "2026-10-12",
    title: "National parks",
  },
  {
    path: "/netherlands/living/hiking-netherlands/",
    publishDate: "2026-10-12",
    title: "Hiking",
  },
  {
    path: "/netherlands/living/museums-netherlands/",
    publishDate: "2026-10-15",
    title: "Museums",
  },
  {
    path: "/netherlands/living/hidden-gems-netherlands/",
    publishDate: "2026-10-15",
    title: "Hidden gems",
  },
  {
    path: "/netherlands/living/beach-towns-netherlands/",
    publishDate: "2026-10-17",
    title: "Beach towns",
  },
  {
    path: "/netherlands/living/castles-netherlands/",
    publishDate: "2026-10-17",
    title: "Castles",
  },
  {
    path: "/netherlands/living/road-trips-netherlands/",
    publishDate: "2026-10-19",
    title: "Road trips",
  },
  {
    path: "/netherlands/living/day-trips-netherlands/",
    publishDate: "2026-10-19",
    title: "Day trips",
  },
  {
    path: "/netherlands/services/recruitment-agencies/",
    publishDate: "2026-10-22",
    title: "Recruitment agencies",
  },
  {
    path: "/netherlands/services/moving-companies/",
    publishDate: "2026-10-25",
    title: "Moving companies",
  },
  {
    path: "/netherlands/services/removal-companies/",
    publishDate: "2026-10-25",
    title: "Removal companies",
  },
  {
    path: "/netherlands/services/storage-companies/",
    publishDate: "2026-10-28",
    title: "Storage companies",
  },
  {
    path: "/netherlands/services/estate-agents/",
    publishDate: "2026-10-28",
    title: "Estate agents",
  },
  {
    path: "/netherlands/services/notaries/",
    publishDate: "2026-11-01",
    title: "Notaries",
  },
  {
    path: "/netherlands/services/insurance-brokers/",
    publishDate: "2026-11-01",
    title: "Insurance brokers",
  },
  {
    path: "/netherlands/services/internet-providers/",
    publishDate: "2026-11-04",
    title: "Internet providers",
  },
  {
    path: "/netherlands/services/energy-providers/",
    publishDate: "2026-11-04",
    title: "Energy providers",
  },
  {
    path: "/netherlands/services/phone-providers/",
    publishDate: "2026-11-04",
    title: "Phone providers",
  },
  {
    path: "/netherlands/services/international-schools/",
    publishDate: "2026-11-07",
    title: "International schools",
  },
  {
    path: "/netherlands/services/daycare-providers/",
    publishDate: "2026-11-07",
    title: "Daycare providers",
  },
  {
    path: "/netherlands/services/pet-relocation-companies/",
    publishDate: "2026-11-10",
    title: "Pet relocation companies",
  },
  {
    path: "/netherlands/services/cleaning-companies/",
    publishDate: "2026-11-10",
    title: "Cleaning companies",
  },
  {
    path: "/netherlands/services/handymen/",
    publishDate: "2026-11-10",
    title: "Handymen",
  },
  {
    path: "/netherlands/services/accountants/",
    publishDate: "2026-11-13",
    title: "Accountants",
  },
  {
    path: "/netherlands/services/business-consultants/",
    publishDate: "2026-11-13",
    title: "Business consultants",
  },
] as const;

const byNormalizedPath = new Map(
  SCHEDULED_GUIDES.map((g) => [normalizeSitePath(g.path), g] as const)
);

export function findScheduledGuide(path: string): ScheduledGuide | undefined {
  return byNormalizedPath.get(normalizeSitePath(path));
}

export function scheduledPublishDateForPath(path: string): string | undefined {
  return findScheduledGuide(path)?.publishDate;
}

export function isScheduledGuidePubliclyVisible(
  path: string,
  now: Date = new Date(),
  options?: { enforcePublishDates?: boolean }
): boolean {
  const guide = findScheduledGuide(path);
  if (!guide) return true;
  return isPubliclyVisible(guide.publish, guide.publishDate, now, options);
}
