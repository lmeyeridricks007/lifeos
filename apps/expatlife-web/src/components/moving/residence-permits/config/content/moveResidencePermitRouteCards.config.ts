import type { MoveResidencePermitRouteCard } from "../moveResidencePermits.types";

/** Scannable route-selector cards — “Pick a lane”. */
export const moveResidencePermitRouteCards: MoveResidencePermitRouteCard[] = [
  {
    id: "work",
    visualKey: "work",
    title: "Here for work",
    bestFor: "New job, transfer, or employer-sponsored role.",
    whatMattersNext: "Line up your start date, contract, and home address with what your permit asks for.",
    chips: ["Work", "Sponsor"],
    nextStep: { ctaLabel: "Work & permits", href: "#work-permits" },
  },
  {
    id: "study",
    visualKey: "study",
    title: "Here to study",
    bestFor: "Degree, exchange, or another approved course.",
    whatMattersNext: "Keep school paperwork, insurance, and gemeente (local council) steps on one simple timeline.",
    chips: ["Study"],
    nextStep: { ctaLabel: "Student route", href: "/netherlands/visa/student-visa/" },
  },
  {
    id: "family",
    visualKey: "family",
    title: "Partner / family",
    bestFor: "Spouse, partner, children, or other dependants.",
    whatMattersNext: "Focus on sponsor proof and relationship documents—not the same list as a work move.",
    chips: ["Family"],
    nextStep: { ctaLabel: "Family route", href: "/netherlands/visa/partner-family-visa/" },
  },
  {
    id: "zzp",
    visualKey: "zzp",
    title: "Freelance (ZZP) or business",
    bestFor: "Freelancers, founders, or running your own business here.",
    whatMattersNext: "Plan for **extra business proof** and more prep than a standard employer route.",
    chips: ["ZZP", "Startup"],
    nextStep: { ctaLabel: "Self-employed route", href: "/netherlands/visa/self-employed-visa/" },
  },
  {
    id: "renew",
    visualKey: "renew",
    title: "Renew or change your situation",
    bestFor: "Your permit has an end date, or your life is about to change a lot.",
    whatMattersNext: "Treat renewal or switching route as its own plan—dates and paperwork, not something to ignore.",
    chips: ["Renew", "Change"],
    nextStep: { ctaLabel: "Renewal & changes", href: "#renewal-changes" },
  },
  {
    id: "already-nl",
    visualKey: "in-nl",
    title: "Already in the Netherlands",
    bestFor: "Extending, changing route, or checking what applies to you.",
    whatMattersNext: "Be clear on **why you’re allowed to stay now**, then follow the official rules for that—not random blog advice.",
    chips: ["In NL"],
    nextStep: { ctaLabel: "Compare routes", href: "/netherlands/visa/compare-visas/" },
  },
];
