import type { PillarFaqItem } from "@expatlife/content";
import { moveExtensionsChangesRoutes as R } from "./moveExtensionsChanges.routes";

const PERMITS = R.residencePermits;

export const moveExtensionsChangesFaq: readonly PillarFaqItem[] = [
  {
    q: "What should I do if my residence situation is about to change?",
    a: "Label it (**job, study end, family, business, expiry**), **write down dates**, open **one** official page for your permit type and **one** matching guide here. High stakes → add **professional help**. We’re **orientation**, not a verdict.",
  },
  {
    q: "What if my permit is nearing expiry?",
    a: "Read **official renewal** guidance for **your** category; confirm **who applies**. Book **time** for appointments and docs — aim for **months**, not days. Our **Residence permits** page has a **renewal & changes** anchor.",
    links: [{ label: "Residence permits", href: PERMITS }],
  },
  {
    q: "What if I change jobs while living in the Netherlands?",
    a: "Assume **immigration may care** — not only HR. Ask **early** what your permit type needs. Then use **offer** and **contract** tools; confirm decisions with **IND** or an adviser.",
    links: [
      { label: "Job offer comparison", href: "/netherlands/work/tools/job-offer-comparison/" },
      { label: "Working in the Netherlands", href: "/netherlands/work/working-in-netherlands/" },
    ],
  },
  {
    q: "What if my study or family situation changes?",
    a: "Both routes assume **specific facts**. When they move, check **official** “what’s next” for your case. Use our **student** or **partner & family** guides for plain-language context beside that.",
    links: [
      { label: "Student visa", href: "/netherlands/visa/student-visa/" },
      { label: "Partner & family", href: "/netherlands/visa/partner-family-visa/" },
    ],
  },
  {
    q: "What if I move from one residence basis to another?",
    a: "Treat it as a **new review**, not a background update. **Compare routes** for shape, then **confirm eligibility and timing** officially.",
    links: [{ label: "Compare visa routes", href: "/netherlands/visa/compare-visas/" }],
  },
  {
    q: "What practical life areas are affected by extensions or changes?",
    a: "Often **payroll**, **housing and registration**, **zorg**, **taxes / benefits**, and **family logistics**. See **Life impact** above for a compact pass.",
  },
  {
    q: "What should I track early?",
    a: "**Permit end**, **contract / study milestones**, **probation or project ends**, **moves**. If **income, address, or household** shift — **calendar it** even before you know every rule.",
  },
  {
    q: "Is this page legal advice?",
    a: "**No.** For binding answers use **IND**, **Government.nl**, **gemeente**, and **qualified advisers** when appropriate.",
  },
];
