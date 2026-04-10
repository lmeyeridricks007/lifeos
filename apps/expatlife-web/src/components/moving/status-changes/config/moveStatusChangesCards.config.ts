import { moveStatusChangesRoutes as R } from "./moveStatusChanges.routes";
import type { MoveStatusChangesStartHereCard, MoveStatusChangesSituationCard } from "./moveStatusChanges.types";

const HUB = R.hub;
const VISAS = R.visasResidency;
const PERMITS = R.residencePermits;

export const moveStatusChangesCards = {
  startHere: [
    {
      id: "basis",
      iconKey: "basis",
      visualKey: "basis",
      title: "Your reason for stay matters",
      intro: "A status change often means the **reason your stay rests on** may no longer be the same as before.",
      keyPoints: [
        "Study, work, family, and self-employment each create a different residence picture.",
        "This is usually about **why you are allowed to stay**, not just the card in your wallet.",
        "If that underlying reason changes, the next legal or admin step may change too.",
        "You do not need every rule today, but you do need to notice the shift early.",
      ],
    },
    {
      id: "life-shift",
      iconKey: "lifeShift",
      visualKey: "lifeShift",
      title: "Life changes can create status questions",
      intro:
        "People usually notice the life event first and the status question later: a new job, graduation, a family change, or a move into freelancing.",
      keyPoints: [
        "Study ending and work beginning",
        "Changing employer or contract setup",
        "Relationship or household changes",
        "Switching into self-employment or a different legal basis of stay",
      ],
    },
    {
      id: "practical",
      iconKey: "practical",
      visualKey: "practical",
      title: "Practical planning matters too",
      intro:
        "A status change is not only about official residence language. It can affect the practical systems around you at the same time.",
      keyPoints: [
        "Work and payroll planning",
        "Housing timing and landlord confidence",
        "Healthcare and insurance continuity",
        "Registration, BSN, tax, family, and routine admin",
      ],
    },
  ] satisfies readonly MoveStatusChangesStartHereCard[],
  situations: [
    {
      id: "study-to-work",
      iconKey: "studyToWork",
      title: "Study ends and work begins",
      intro: "One of the most common transitions: the life plan moves first, then the residence questions catch up.",
      whoItAffects: "Students graduating, finishing an exchange, or moving from study into employment.",
      whyItMatters:
        "What supported your stay as a student may not be the same as what supports it once work becomes the main reason you are here.",
      whatMattersNext:
        "Check the hand-off between study timing and work timing, then compare routes before contracts, insurance, and housing plans are fully locked in.",
      chips: ["Study -> Work", "Graduation"],
      nextStep: {
        label: "Compare visa routes",
        ctaLabel: "Compare visa routes",
        href: "/netherlands/visa/compare-visas/",
        description: "Route doorway page when study is ending and work may become the new basis of stay.",
      },
      relatedLinks: [
        { label: "Student visa guide", href: "/netherlands/visa/student-visa/" },
        { label: "Moving hub", href: HUB },
      ],
    },
    {
      id: "job-change",
      iconKey: "jobChange",
      title: "Job or employer changes",
      intro: "A job change can be simple on paper and complicated in residency terms.",
      whoItAffects: "People on work-linked stays, especially when an employer, sponsor, or contract setup is changing.",
      whyItMatters:
        "A work change can be more than a payroll update. Sponsorship, role setup, timing, and documentation may all matter.",
      whatMattersNext:
        "Clarify the employment context early, then use work and salary tools to test the real-life impact of the move.",
      chips: ["Employer", "Contract"],
      nextStep: {
        label: "Job offer comparison",
        ctaLabel: "Open job offer comparison",
        href: "/netherlands/work/tools/job-offer-comparison/",
        description: "Compare work options before making a status-sensitive move.",
      },
      relatedLinks: [{ label: "Working in the Netherlands", href: "/netherlands/moving/working-in-the-netherlands/" }],
    },
    {
      id: "family-change",
      iconKey: "familyChange",
      title: "Family / partner situation changes",
      intro: "When household or relationship facts move, the residence picture may need a fresh look too.",
      whoItAffects: "Partners, spouses, families, and people whose stay depends on a family-based setup.",
      whyItMatters:
        "Relationship and family changes can affect residence questions and practical household admin at the same time.",
      whatMattersNext:
        "Check both the family route itself and the practical systems around childcare, registration, housing, and insurance.",
      chips: ["Family", "Partner"],
      nextStep: {
        label: "Partner & family visa",
        ctaLabel: "Open partner & family guide",
        href: "/netherlands/visa/partner-family-visa/",
        description: "Start here when household or relationship facts are part of the status story.",
      },
    },
    {
      id: "self-employed",
      iconKey: "selfEmployed",
      title: "Moving into self-employment or business activity",
      intro: "A switch away from employment or study often turns into a deeper status rethink.",
      whoItAffects: "People moving toward ZZP, freelancing, business ownership, or founder activity.",
      whyItMatters: "Self-employment often means a different documentation and continuity story from salaried work.",
      whatMattersNext:
        "Compare route shape first, then assess the financial and admin load before you assume the switch is straightforward.",
      chips: ["ZZP", "Business"],
      nextStep: {
        label: "Self-employed visa guide",
        ctaLabel: "Open self-employed visa guide",
        href: "/netherlands/visa/self-employed-visa/",
        description: "Best first read when work is turning into business activity.",
      },
    },
    {
      id: "basis-switch",
      iconKey: "routeSwitch",
      title: "Moving from one legal basis of stay to another",
      intro: "This is often a real transition, not a routine extension.",
      whoItAffects: "Anyone going from study to work, partner to work, employee to business, or another basis shift.",
      whyItMatters:
        "A new basis can mean a different set of conditions, a different timeline, and different practical planning needs.",
      whatMattersNext:
        "Treat it like a route change: compare options, map timing, and then confirm the official requirements for the new basis.",
      chips: ["Route change", "New basis"],
      nextStep: {
        label: "Visas & residency orientation",
        ctaLabel: "Open visas & residency orientation",
        href: VISAS,
        description: "Broader route map when the old status story may no longer fit.",
      },
    },
    {
      id: "already-here",
      iconKey: "lifeShift",
      title: "Already in NL and unsure whether a life change matters",
      intro: "A very common scenario: life has moved on, but the status story has not been checked in a while.",
      whoItAffects: "People settled in the Netherlands who suspect their old setup may not fully match their current life anymore.",
      whyItMatters: "Already living in the Netherlands does not automatically make status-change questions disappear.",
      whatMattersNext:
        "Audit the basis of stay, the dates, and the changed facts. Then open the matching sibling guide instead of relying on vague internet summaries.",
      chips: ["Orientation", "Check-in"],
      nextStep: {
        label: "What to do next",
        ctaLabel: "See what to do next",
        href: "#what-next",
        description: "Use the simple next-step model when you know something changed but not how to frame it yet.",
      },
    },
    {
      id: "long-term",
      iconKey: "continuity",
      title: "Long-term stay / next-stage residence questions",
      intro: "Sometimes the question is not only “what changed?” but also “what does this mean for the next stage?”",
      whoItAffects: "People thinking about longer-term residence, stability, or the next chapter after an earlier permit basis.",
      whyItMatters:
        "A change now can shape what feels realistic later, especially if continuity and paperwork have already become patchy.",
      whatMattersNext: "Use the permits and extensions guides to understand the longer-view logic, then verify your official options.",
      chips: ["Long-term", "Next stage"],
      nextStep: {
        label: "Residence permits in the Netherlands",
        ctaLabel: "Open residence permits guide",
        href: PERMITS,
        description: "Best next guide when the question is about the next residence stage, not only this week.",
      },
    },
  ] satisfies readonly MoveStatusChangesSituationCard[],
};
