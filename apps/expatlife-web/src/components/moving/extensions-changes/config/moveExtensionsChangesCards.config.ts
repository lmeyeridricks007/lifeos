import type { MoveExtensionsChangesSituationCard } from "./moveExtensionsChanges.contentTypes";
import { moveExtensionsChangesRoutes as R } from "./moveExtensionsChanges.routes";

const PERMITS = R.residencePermits;

/**
 * Change-situation cards — map to grid via assembly (`bestFor` / `chips` / `nextStep`).
 */
export const moveExtensionsChangesCards = [
  {
    id: "expiring",
    visualKey: "expiry",
    title: "Permit is nearing expiry",
    intro: "The useful window is usually **before** the date feels urgent.",
    whoItAffects: "Anyone with a **printed end date** or a **renewal** coming in the next months or year.",
    keyPoints: [],
    whatMattersNext:
      "Check **who applies** (you vs employer/sponsor), **which documents** apply to your permit type, and keep **address, insurance, and work** aligned while you plan.",
    routeTags: ["Renew", "Expiry"],
    primaryLink: { ctaLabel: "Residence permits · renewal & changes", href: `${PERMITS}#renewal-changes` },
  },
  {
    id: "job-change",
    visualKey: "work",
    title: "Changing jobs or employers",
    intro: "Sponsored and work-tied stays often assume a **specific employer and contract**.",
    whoItAffects: "**HSM**, **recognised sponsors**, and anyone whose stay is **named to a job or employer**.",
    keyPoints: [],
    whatMattersNext:
      "Ask HR **early** what your permit type implies for a move — then use **offer and contract** tools to compare options calmly.",
    routeTags: ["Job change", "Employer"],
    primaryLink: { ctaLabel: "Job offer comparison", href: "/netherlands/work/tools/job-offer-comparison/" },
  },
  {
    id: "study-change",
    visualKey: "study",
    title: "Finishing studies / changing study situation",
    intro: "Graduation, a break, or a new school can change **what your stay is based on**.",
    whoItAffects: "**Students** near **graduation**, **exchange end**, or **switching school/programme**.",
    keyPoints: [],
    whatMattersNext:
      "Sketch **what happens when study ends** and which **next route** might fit — then confirm with **official** pages for your nationality and permit.",
    routeTags: ["Study ends", "Graduation"],
    primaryLink: { ctaLabel: "Student visa guide", href: "/netherlands/visa/student-visa/" },
  },
  {
    id: "family-change",
    visualKey: "family",
    title: "Relationship or family situation changes",
    intro: "Family routes assume certain **household and relationship facts** — when those move, check what follows.",
    whoItAffects: "**Partners and families** on a **family-based** residence purpose.",
    keyPoints: [],
    whatMattersNext:
      "Gather **documentation** and clarity on **next steps** — often alongside **gemeente**, **housing**, and **schools / childcare**.",
    routeTags: ["Family", "Partner"],
    primaryLink: { ctaLabel: "Partner & family visa", href: "/netherlands/visa/partner-family-visa/" },
  },
  {
    id: "basis-switch",
    visualKey: "change",
    title: "Moving from one residence basis to another",
    intro: "Study → work, partner → work, employee → ZZP: often a **new chapter**, not a quiet tweak.",
    whoItAffects: "Anyone **changing the main reason** they’re allowed to live in the Netherlands.",
    keyPoints: [],
    whatMattersNext:
      "Use **Compare visa routes** for shape, then **confirm timing and eligibility** with **IND** or an adviser — rules for the next permit may differ from the last.",
    routeTags: ["Switch basis", "Route change"],
    primaryLink: { ctaLabel: "Compare visa routes", href: "/netherlands/visa/compare-visas/" },
  },
  {
    id: "zzp-change",
    visualKey: "zzp",
    title: "Self-employed / business situation changes",
    intro: "Self-employment routes often expect **ongoing activity** — gaps and pivots can matter sooner than expected.",
    whoItAffects: "**ZZP**, **founders**, and **small business** owners on an **entrepreneur / self-employment** basis.",
    keyPoints: [],
    whatMattersNext:
      "Review **continuity**, **admin load**, and how you **describe the business** officially — read our guide, then verify with **official** sources.",
    routeTags: ["ZZP", "Business"],
    primaryLink: { ctaLabel: "Self-employed visa guide", href: "/netherlands/visa/self-employed-visa/" },
  },
  {
    id: "unsure",
    visualKey: "in-nl",
    title: "Already in NL — not sure what needs updating",
    intro: "If life moved but you haven’t re-read conditions in a while, a **quick date + role audit** helps.",
    whoItAffects: "**Anyone settled** who hasn’t checked **permit purpose and end date** recently.",
    keyPoints: [],
    whatMattersNext:
      "Skim **What to do next** below, then open **Visas & residency**, **Residence permits**, or one **topic guide** that matches your situation.",
    routeTags: ["Orientation", "Check-in"],
    primaryLink: { ctaLabel: "What to do next", href: "#what-next" },
  },
] as readonly MoveExtensionsChangesSituationCard[];
