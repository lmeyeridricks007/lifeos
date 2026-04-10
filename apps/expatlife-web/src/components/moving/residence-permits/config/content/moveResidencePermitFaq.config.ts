import type { PillarFaqItem } from "@expatlife/content";
import { RESIDENCE_PERMITS_CANONICAL, RESIDENCE_PERMITS_VISAS } from "../moveResidencePermitConstants";

export const moveResidencePermitFaq: PillarFaqItem[] = [
  {
    q: "What is a residence permit in the Netherlands in practical terms?",
    a: "Usually it means **permission to live here for a clear reason**—work, study, family, or self-employment—with **conditions**. It isn’t a blank cheque to do anything.",
  },
  {
    q: "How is a residence permit different from the “visa” conversation people often have?",
    a: "People say **visa** for everything. In real life you might deal with **entry**, **long-stay steps**, and **your residence document**—at different times. Follow **your nationality and route**, not only the word people use.",
    links: [{ label: "Visas & residency orientation", href: RESIDENCE_PERMITS_VISAS }],
  },
  {
    q: "Which residence permit situations are most common for expats?",
    a: "**Work**, **study**, and **family** are the common ones; **freelance (ZZP)** and **changes after you arrive** happen a lot too. Your own details still beat “most people.”",
  },
  {
    q: "What if I am staying for work?",
    a: "Clarify **who applies**, **when you start**, and what must line up between **contract, address, and permit**. Then use **work and salary tools** to check money—not to guess what IND will decide.",
    links: [{ label: "Work section on this page", href: `${RESIDENCE_PERMITS_CANONICAL}#work-permits` }],
  },
  {
    q: "What if I am staying through study or family?",
    a: "**Study:** keep school, insurance, and gemeente steps together on one timeline. **Family:** start with **sponsor and relationship proof**.",
    links: [
      { label: "Student visa", href: "/netherlands/visa/student-visa/" },
      { label: "Partner & family", href: "/netherlands/visa/partner-family-visa/" },
    ],
  },
  {
    q: "What happens if my situation changes after I arrive?",
    a: "It depends what changed. Some updates are small; others need a **new application**. Check **IND** for your permit type—don’t assume it rolls over by itself.",
    links: [{ label: "Compare visa routes", href: "/netherlands/visa/compare-visas/" }],
  },
  {
    q: "What should I think about before renewal or extension time?",
    a: "**End date, reason you’re here, and proof**—ideally with months to spare. If life changed, renewal may be **more than repeating last year’s form**.",
    links: [{ label: "Renewal section", href: `${RESIDENCE_PERMITS_CANONICAL}#renewal-changes` }],
  },
  {
    q: "Is this page legal advice?",
    a: "**No.** It’s orientation and next steps. Use **official sources** and advisers for decisions that really matter.",
  },
];
