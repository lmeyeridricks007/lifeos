import type { LinkRegistry, NlMovingPillarContent } from "./types";
import {
  applyMovingPillarHeroVoice,
  type MovingPillarHeroVoiceId,
} from "./moving-pillar-hero-voices";

const linkRegistry: LinkRegistry = {
  moving_checklist: {
    href: "/netherlands/moving/tools/moving-checklist",
    title: "Moving checklist",
  },
  document_readiness: {
    href: "/netherlands/moving/tools/document-readiness",
    title: "Document readiness checker",
  },
  arrival_planner: {
    href: "/netherlands/moving/tools/arrival-planner",
    title: "Arrival planner",
  },
  first_90_days: {
    href: "/netherlands/moving/tools/first-90-days",
    title: "First 90 days planner",
  },
  hub: { href: "/netherlands/moving-to-the-netherlands/", title: "Moving hub" },
  bsn: { href: "/netherlands/bsn-registration", title: "BSN registration" },
  pillar: { href: "/netherlands/moving-to-the-netherlands", title: "Moving pillar" },
  open_bank_account: {
    href: "/netherlands/open-bank-account-netherlands/",
    title: "our bank account guide",
  },
  services_banks: {
    href: "/netherlands/services/banks/",
    title: "our banking services directory",
  },
  municipality_registration: {
    href: "/netherlands/municipality-registration-netherlands/",
    title: "municipality registration & address guide",
  },
  services_housing_platforms: {
    href: "/netherlands/services/housing-platforms/",
    title: "housing platforms we compare",
  },
  services_rental_agencies: {
    href: "/netherlands/services/rental-agencies/",
    title: "rental agencies directory",
  },
  health_insurance: {
    href: "/netherlands/health-insurance-netherlands/",
    title: "Health insurance in the Netherlands",
  },
  digid_awareness: {
    href: "/netherlands/digid-awareness/",
    title: "DigiD awareness",
  },
  after_arriving: {
    href: "/netherlands/after-arriving-netherlands/",
    title: "After arriving in the Netherlands",
  },
  compare_visas: {
    href: "/netherlands/visa/compare-visas",
    title: "Compare visa routes",
  },
  visas_residency_orientation: {
    href: "/netherlands/moving/visas-residency/",
    title: "Visas & residency orientation",
  },
  residence_permits_guide: {
    href: "/netherlands/moving/residence-permits/",
    title: "Residence permits in the Netherlands",
  },
  working_in_netherlands_move_guide: {
    href: "/netherlands/moving/working-in-the-netherlands/",
    title: "Working in the Netherlands",
  },
  changing_jobs_netherlands_move_guide: {
    href: "/netherlands/moving/changing-jobs-netherlands/",
    title: "Changing jobs in the Netherlands",
  },
  resigning_job_netherlands_move_guide: {
    href: "/netherlands/moving/resigning-job-netherlands/",
    title: "Resigning a job in the Netherlands",
  },
  layoffs_netherlands_move_guide: {
    href: "/netherlands/moving/layoffs-netherlands/",
    title: "Layoffs in the Netherlands",
  },
  twv_work_permit_move_guide: {
    href: "/netherlands/moving/twv-work-permit/",
    title: "TWV work permit",
  },
  extensions_changes_guide: {
    href: "/netherlands/moving/extensions-changes/",
    title: "Extensions & changes in the Netherlands",
  },
  moving_requirements: {
    href: "/netherlands/moving-requirements-netherlands/",
    title: "Moving requirements overview",
  },
  living_survival_guide: {
    href: "/netherlands/living/survival-guide/",
    title: "Netherlands Survival Guide",
  },
};

export const nlMovingPillarContent: NlMovingPillarContent = {
  meta: {
    breadcrumbs: [
      { label: "Netherlands", href: "/netherlands" },
      { label: "Moving to the Netherlands", href: "/netherlands/moving-to-the-netherlands" },
    ],
    canonicalPath: "/netherlands/moving-to-the-netherlands/",
    lastUpdated: new Date().toISOString().slice(0, 10),
    seo: {
      title: "Moving to the Netherlands",
      description: "Checklist, timeline, and practical guidance for moving to the Netherlands.",
    },
  },
  scenarios: [
    {
      id: "path-work",
      chips: ["work"],
      personaTitle: "Moving for work",
      whatMatters: ["Contract or offer timing", "Registrable housing for BSN", "Bank account and payroll"],
      readingOrder: [
        "visas_residency_orientation",
        "residence_permits_guide",
        "working_in_netherlands_move_guide",
        "twv_work_permit_move_guide",
        "extensions_changes_guide",
        "resigning_job_netherlands_move_guide",
        "layoffs_netherlands_move_guide",
        "hub",
        "document_readiness",
      ],
      startTool: { key: "moving_checklist" },
      unknownsToConfirm: ["Visa or work permit route", "Employer start date"],
    },
    {
      id: "path-family",
      chips: ["partner_family"],
      personaTitle: "Moving with partner or family",
      whatMatters: ["Schools or childcare", "Partner permits and work rights", "Larger housing search"],
      readingOrder: [
        "visas_residency_orientation",
        "residence_permits_guide",
        "extensions_changes_guide",
        "hub",
        "municipality_registration",
      ],
      startTool: { key: "moving_checklist" },
      unknownsToConfirm: ["Family reunification rules", "City catchment for schools"],
    },
    {
      id: "path-study",
      chips: ["study"],
      personaTitle: "Moving for study",
      whatMatters: ["Study residence permit", "Student housing early", "Insurance and BSN"],
      readingOrder: [
        "visas_residency_orientation",
        "residence_permits_guide",
        "extensions_changes_guide",
        "moving_requirements",
        "document_readiness",
      ],
      startTool: { key: "document_readiness" },
      unknownsToConfirm: ["Institution admissions", "Insurance obligation"],
    },
    {
      id: "path-unsure",
      chips: ["unsure"],
      personaTitle: "Not sure yet",
      whatMatters: ["Clarify visa or permit route", "Lock a rough timeline", "Narrow tasks with tools"],
      readingOrder: [
        "visas_residency_orientation",
        "residence_permits_guide",
        "working_in_netherlands_move_guide",
        "twv_work_permit_move_guide",
        "extensions_changes_guide",
        "resigning_job_netherlands_move_guide",
        "layoffs_netherlands_move_guide",
        "compare_visas",
        "hub",
        "document_readiness",
      ],
      startTool: { key: "moving_checklist" },
      unknownsToConfirm: ["EU vs non-EU path", "Job offer vs search"],
    },
  ],
  faq: [
    {
      q: "What is a BSN?",
      a: "The **burgerservicenummer (BSN)** is your personal citizen service number in the Netherlands. You receive it when you **register your address** with your municipality (ingeschreven in de BRP). Employers, banks, insurers, and the tax office use it to identify you; you will see it on payslips, letters from Belastingdienst, and many online forms. It is **not** the same as a DigiD or a bank account—you get the BSN from registration first in most standard relocation paths.",
      links: [{ label: "BSN registration guide", href: "/netherlands/bsn-registration" }],
    },
    {
      q: "When should I register with the municipality?",
      a: "Once you live at a **registrable address**, you normally must **register with your municipality (gemeente)** within a **short statutory window**—many official explanations use about **five working days** as the benchmark, but **always read your gemeente’s own page** for exact wording, exceptions, and how to book an appointment. Registration puts you in the **BRP** and is usually when you receive your **BSN**. You typically need **valid ID**, your **rental or ownership documents**, and sometimes your **birth/marriage certificates** depending on the desk. Plan this early if payroll or a lease depends on your BSN.",
      links: [
        { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" },
        { label: "After arrival overview", href: "/netherlands/after-arriving-netherlands/" },
      ],
    },
    {
      q: "Can I open a Dutch bank account before I have a BSN?",
      a: "It depends on the **bank and your situation**. Some providers onboard newcomers with **passport and proof of address** or a **pending registration**; others want **BSN and a stable Dutch address** before they complete KYC. Payroll and many contracts are smoother with a **Dutch IBAN**, so read bank-specific rules and timelines rather than assuming one path fits everyone.",
      links: [
        { label: "Open a bank account (full guide)", href: "/netherlands/open-bank-account-netherlands/" },
        { label: "Bank account before BSN?", href: "/netherlands/can-i-open-bank-account-before-bsn/" },
      ],
    },
    {
      q: "Why might my rental not be valid for BSN registration?",
      a: "The municipality checks that your address is a **real, registrable residence**—not every **short-stay, hotel, or informal sublet** can be used for BRP inschrijving. Landlords sometimes state whether **registration (inschrijving) is allowed**; if it is not, you may not get a BSN at that address. Always confirm **in writing** before you pay a large deposit, and cross-check with **gemeente** guidance if you are unsure.",
      links: [
        { label: "Municipality & address", href: "/netherlands/municipality-registration-netherlands/" },
        { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
      ],
    },
    {
      q: "Do I need Dutch health insurance after I move?",
      a: "If you **live and work** in the Netherlands, you normally need **Dutch basic health insurance (basisverzekering)** on time—there are **deadlines and fines** if you are required to insure and do not. Students, cross-border workers, and some temporary situations follow **different rules**, so verify against **official sources** for your status rather than copying a friend’s timeline.",
      links: [{ label: "Health insurance in the Netherlands", href: "/netherlands/health-insurance-netherlands/" }],
    },
    {
      q: "What is different for EU/EEA movers vs non-EU?",
      a: "**EU/EEA** nationals often focus on **housing, BSN, bank, and insurance** without a long residence permit process. **Non-EU** routes usually hinge on a **visa or residence permit** tied to work, study, or family—timing of travel, employer, and IND steps matter before you optimize for municipality registration. Use a visa-oriented guide if you are not sure which permit applies.",
      links: [
        { label: "Visas & residency orientation", href: "/netherlands/moving/visas-residency/" },
        { label: "Residence permits in the Netherlands", href: "/netherlands/moving/residence-permits/" },
        { label: "Extensions & changes in the Netherlands", href: "/netherlands/moving/extensions-changes/" },
        { label: "EU vs non-EU moving", href: "/netherlands/eu-vs-non-eu-moving-to-netherlands/" },
        { label: "Moving requirements overview", href: "/netherlands/moving-requirements-netherlands/" },
      ],
    },
    {
      q: "What is DigiD and when do I need it?",
      a: "**DigiD** is the Dutch digital identity used to log in to many **government and semi-government** services online (tax, benefits, some healthcare portals, municipalities). You usually need a **BSN** and sometimes a **Dutch phone number** to apply; activation can take **mail or appointment** steps. It is worth planning in your **first weeks** after you have BSN, so you are not stuck when a form asks for DigiD.",
      links: [{ label: "DigiD awareness", href: "/netherlands/digid-awareness" }],
    },
    {
      q: "What should I do in the first week after landing?",
      a: "A practical sequence is: **secure housing that allows registration** (if you have not already), **book municipality registration**, gather **IDs and rental documents** for that appointment, and **sketch banking and insurance** next steps so payroll and rent do not stall. Our **arrival** and **first 90 days** tools break this into smaller tasks you can tick off.",
      links: [
        { label: "Arrival planner", href: "/netherlands/moving/tools/arrival-planner" },
        { label: "First 90 days planner", href: "/netherlands/moving/tools/first-90-days" },
        { label: "First steps after arrival", href: "/netherlands/after-arriving-netherlands/" },
      ],
    },
  ],
  linkRegistry,
  checklistTabs: [
    {
      key: "before",
      label: "Before you move",
      items: [
        { label: "Documents pack", href: "/netherlands/moving/tools/document-readiness" },
        { label: "Moving checklist", href: "/netherlands/moving/tools/moving-checklist" },
      ],
    },
    {
      key: "after",
      label: "After arrival",
      items: [
        { label: "Arrival planner", href: "/netherlands/moving/tools/arrival-planner" },
        { label: "BSN registration", href: "/netherlands/bsn-registration" },
      ],
    },
    {
      key: "days90",
      label: "First 90 days",
      items: [
        { label: "First 90 days", href: "/netherlands/moving/tools/first-90-days" },
        { label: "DigiD awareness", href: "/netherlands/digid-awareness" },
      ],
    },
  ],
  timelineStages: [
    {
      id: "before",
      label: "Before you move",
      goal: "Prepare documents, housing, and travel.",
      actions: ["Gather IDs", "Plan address", "Book appointments"],
      links: [
        { href: "/netherlands/moving/tools/moving-checklist", label: "Moving checklist" },
        { href: "/netherlands/moving/tools/document-readiness", label: "Document readiness" },
      ],
    },
    {
      id: "arrival",
      label: "After arrival",
      goal: "Register and obtain BSN.",
      actions: ["Municipality appointment", "BSN letter", "Bank basics"],
      links: [{ href: "/netherlands/bsn-registration", label: "BSN registration" }],
    },
    {
      id: "ninety",
      label: "First 90 days",
      goal: "Settle banking, insurance, and routines.",
      actions: ["Health insurance", "DigiD", "Transport pass"],
      links: [{ href: "/netherlands/moving/tools/first-90-days", label: "First 90 days" }],
    },
  ],
  timelineIntro: "A practical sequence most expats follow.",
  timelineSectionCta: { label: "Open the moving hub", href: "/netherlands/moving-to-the-netherlands/" },
  toolsStrip: [
    {
      title: "Visas & residency orientation",
      href: "/netherlands/moving/visas-residency/",
      description: "Map work, study, family, and ZZP routes before you drown in paperwork.",
      timeToComplete: "12 min",
    },
    {
      title: "Residence permits in the Netherlands",
      href: "/netherlands/moving/residence-permits/",
      description: "How residence permits connect to your purpose, renewal, and local setup.",
      timeToComplete: "10 min",
    },
    {
      title: "Working in the Netherlands",
      href: "/netherlands/moving/working-in-the-netherlands/",
      description: "Work-led move guide linking offers, salary, permits, payroll, and first-month setup.",
      timeToComplete: "12 min",
    },
    {
      title: "Changing jobs in the Netherlands",
      href: "/netherlands/moving/changing-jobs-netherlands/",
      description: "Contracts, permits, salary timing, housing, and family admin when switching employers.",
      timeToComplete: "11 min",
    },
    {
      title: "Resigning a job in the Netherlands",
      href: "/netherlands/moving/resigning-job-netherlands/",
      description: "Notice, contract review, stay and salary continuity, and life admin before you resign.",
      timeToComplete: "11 min",
    },
    {
      title: "Layoffs in the Netherlands",
      href: "/netherlands/moving/layoffs-netherlands/",
      description: "Redundancy risk: employment ending next to permits, payroll, rent, family admin, and practical planning.",
      timeToComplete: "12 min",
    },
    {
      title: "TWV work permit",
      href: "/netherlands/moving/twv-work-permit/",
      description: "Practical route guide for TWV, employer action, route comparison, and timing questions.",
      timeToComplete: "9 min",
    },
    {
      title: "Extensions & changes in the Netherlands",
      href: "/netherlands/moving/extensions-changes/",
      description: "Already here? Renewals, job changes, study or family shifts—when to notice and what to open next.",
      timeToComplete: "12 min",
    },
    {
      title: "Moving checklist",
      href: "/netherlands/moving/tools/moving-checklist",
      description: "Tasks matched to your situation.",
      timeToComplete: "15 min",
    },
    {
      title: "Document readiness",
      href: "/netherlands/moving/tools/document-readiness",
      description: "What to gather before you go.",
      timeToComplete: "10 min",
    },
    {
      title: "Dutch payslip decoder",
      href: "/netherlands/work/tools/payslip-decoder",
      description: "Understand your loonstrook after payroll starts.",
      timeToComplete: "5 min",
    },
    {
      title: "Arrival planner",
      href: "/netherlands/moving/tools/arrival-planner",
      description: "First weeks after landing.",
      timeToComplete: "10 min",
    },
    {
      title: "First 90 days",
      href: "/netherlands/moving/tools/first-90-days",
      description: "Settling-in priorities.",
      timeToComplete: "12 minutes",
    },
    {
      title: "Utilities & household services",
      href: "/netherlands/living/tools/utilities-services-comparison",
      description: "Monthly bands, setup cash, and what to compare vs local charges after move-in.",
      timeToComplete: "12 min",
    },
    {
      title: "Netherlands Survival Guide",
      href: "/netherlands/living/survival-guide/",
      description: "Day-to-day transport, apps, payments, and routines once admin is moving.",
      timeToComplete: "8 min",
    },
  ],
  tocItems: [
    { id: "overview", label: "Overview" },
    { id: "scenarios", label: "Choose your situation" },
    { id: "timeline", label: "Timeline" },
    { id: "before-you-move", label: "Before you move" },
    { id: "after-arrival", label: "After arrival" },
    { id: "first-90-days", label: "First 90 days" },
    { id: "documents", label: "Documents" },
    { id: "banking", label: "Banking" },
    { id: "housing", label: "Housing" },
    { id: "gotchas", label: "Gotchas" },
    { id: "tools", label: "Tools" },
    { id: "related", label: "Related" },
    { id: "shareable", label: "Shareable checklist" },
    { id: "cost-of-moving", label: "Cost of moving" },
    { id: "faq", label: "FAQ" },
  ],
  sections: {
    pageHeader: {
      eyebrow: "Netherlands · Moving",
      title: "Moving to the Netherlands",
      subtitle: "A calm, practical guide: prepare before you move, settle after arrival, and stabilize in your first 90 days.",
      heroImage: "/images/heroes/moving-to-netherlands-canal-hero.png",
      heroImageAlt:
        "Arrival in Amsterdam at golden hour: suitcase, travel documents, map, and phone on a canal-side ledge, with a cyclist and traditional gabled houses along the water at sunset.",
    },
    intro: {
      segments: [
        { type: "text", value: "Start with " },
        { type: "link", key: "hub", label: "the moving hub" },
        { type: "text", value: ", then use tools like the " },
        { type: "link", key: "moving_checklist", label: "moving checklist" },
        { type: "text", value: "." },
      ],
    },
    overview: {
      sectionTitle: "Overview",
      overviewParagraph: "Three phases: prepare, register, then settle in.",
      collapsibleTitle: "Not legal advice",
      disclaimerItems: [
        "Rules change; always verify with official sources for your situation.",
        "This site provides orientation, not individualized legal advice.",
      ],
    },
    whoThisGuideFor: {
      sectionTitle: "Who this guide is for",
      paragraph: "New arrivals planning a move to the Netherlands for work, study, or family.",
      audiences: ["EU/EEA movers", "Non-EU with a job or sponsor", "Partners and families"],
    },
    beforeYouMove: {
      sectionTitle: "Before you move",
      prepareHeading: "Prepare early",
      prepareList: ["Valid ID", "Address plan", "Insurance awareness"],
      takesLongerHeading: "Things that often take longer",
      takesLongerList: ["Apostille or legalization", "Housing search in tight markets"],
      examples: [{ title: "Tip", body: "Keep scans of key documents in a secure folder." }],
      closingText: "Use the {0} and {1} before you travel.",
      closingLinkKeys: ["document_readiness", "moving_checklist"],
      toolCtaDescription: "Generate a checklist matched to your situation.",
    },
    afterArrival: {
      sectionTitle: "After arrival",
      itemBlocks: [
        {
          paragraph: "Register your address and obtain a {0}.",
          linkKeys: ["bsn"],
        },
      ],
      toolCtaDescription: "Plan your first appointments with the arrival planner.",
    },
    first90Days: {
      sectionTitle: "First 90 days",
      ctaParagraph: "Use the {0} to pace banking, insurance, and daily setup.",
      ctaLinkKey: "first_90_days",
      toolCtaDescription: "A simple week-by-week view of common priorities.",
    },
    documents: {
      sectionTitle: "Documents",
      introParagraph: "**Documents** are easier when you know what to gather early.",
      toolLinkKey: "document_readiness",
      toolLinkLabel: "document readiness checker",
      exampleTitle: "Example",
      exampleBody: "Passport, birth certificate (if applicable), and rental or address proof.",
      toolCtaDescription: "See a tailored list for your origin and situation.",
    },
    banking: {
      sectionTitle: "Banking",
      introParagraph:
        "Everyday money in the Netherlands usually runs through a **Dutch current account** (betaalrekening): **iDEAL** for online payments, **direct debit** (incasso) for rent and utilities, and a debit card for shops and public transport. Banks must verify who you are (AML/KYC); after you relocate, that typically means a **registrable address** and **BSN**, though a few **digital banks** still onboard some people with limited Dutch paperwork earlier. Salaries and many government letters expect a **local IBAN**.",
      paragraph:
        "For a full walkthrough—documents, timing, iDEAL, and common mistakes—read {0}. To compare **banks and accounts** we list for expats (fees, English support, onboarding), use {1}. The **provider cards below** link to official sites; always confirm **eligibility and pricing there** before you apply.",
      paragraphLinkKeys: ["open_bank_account", "services_banks"],
    },
    housing: {
      sectionTitle: "Housing",
      introParagraph:
        "The **Dutch rental market** is competitive in Amsterdam, Utrecht, Rotterdam, and many university cities: expect **queues at viewings**, **landlord references**, and **income or guarantor checks**. Contracts are often **indefinite (onbepaalde tijd)** or **fixed-term (bepaalde tijd)**; **registration at the municipality (BRP)** is only possible from an address the municipality accepts—not every short-stay or sublet qualifies. **Furnished**, **rooms**, and **student housing** follow different norms; **service costs** and **deposit rules** should be spelled out in writing.",
      registrationWarning:
        "BSN registration usually needs a registrable address—confirm inschrijving before you pay large deposits.",
      paragraph:
        "See {0} for how **your address**, **BSN**, and **appointments** fit together. To search listings and mid-term options, start with {1}; if you want **agency-assisted** search, browse {2}. The **platforms below** are practical entry points—always verify **scams, deposits, and registration eligibility** before you pay or sign.",
      paragraphLinkKeys: [
        "municipality_registration",
        "services_housing_platforms",
        "services_rental_agencies",
      ],
    },
    practicalEssentials: {
      intro: "Three things to line up early—each link opens a full guide when you need depth.",
      documents: {
        bullets: [
          "Know which IDs and civil documents you may need before you travel.",
          "Use the checker for a list tailored to your origin and situation.",
        ],
        primaryLinkKey: "document_readiness",
      },
      banking: {
        bullets: [
          "A Dutch current account (betaalrekening) is usually needed for salary, rent, and iDEAL.",
          "BSN and a registrable address often complete onboarding—compare providers in our directory.",
        ],
        primaryLinkKey: "open_bank_account",
      },
      housing: {
        bullets: [
          "Start early in competitive cities; viewings and references take time.",
          "Short-stay or informal lets may not count for municipality registration.",
        ],
        registrationNote:
          "You normally need an address the gemeente accepts for BSN registration—confirm before signing.",
        primaryLinkKey: "municipality_registration",
      },
    },
    scenarioPaths: {
      intro: "Pick the path that fits you—then follow the suggested reading order and open a tool when you are ready.",
    },
    gotchas: {
      sectionTitle: "Common gotchas",
      rows: [
        {
          gotcha: "Assuming you can register any short-stay address",
          fix: "Confirm registrable housing with your municipality before you pay large deposits.",
          fixLinkKey: "municipality_registration",
        },
        {
          gotcha: "Waiting too long to book municipality registration",
          fix: "Schedule as soon as you have a valid address; BSN and many admin steps depend on it.",
          fixLinkKey: "municipality_registration",
        },
        {
          gotcha: "Treating DigiD as instant once you apply",
          fix: "Expect postal activation and plan ahead for insurer and government logins.",
          fixLinkKey: "digid_awareness",
        },
        {
          gotcha: "Delaying Dutch health insurance when you are required to have it",
          fix: "Check national rules for your situation and arrange basic cover in time.",
          fixLinkKey: "health_insurance",
        },
        {
          gotcha: "Opening a bank account only after payroll or rent deadlines",
          fix: "Start once you know your ID/BSN timeline so iDEAL and direct debits are ready.",
          fixLinkKey: "open_bank_account",
        },
        {
          gotcha: "Assuming your foreign documents need no translation or legalization",
          fix: "Use the document readiness flow and verify what your gemeente or employer asks for.",
          fixLinkKey: "document_readiness",
        },
        {
          gotcha: "Rushing into housing without viewings or contract checks",
          fix: "Use reputable platforms or agencies and verify landlords before transferring money.",
          fixLinkKey: "services_housing_platforms",
        },
        {
          gotcha: "Treating the whole move as one big task list",
          fix: "Sequence before / arrival / first 90 days with the moving checklist and arrival tools.",
          fixLinkKey: "moving_checklist",
        },
        {
          gotcha: "Skipping a clear “first week” plan after landing",
          fix: "Use the after-arrival guide to line up registration, BSN, and next admin steps.",
          fixLinkKey: "after_arriving",
        },
        {
          gotcha: "Assuming renewals and life changes can wait until the last minute",
          fix: "Put permit end dates and big life shifts on your radar early—extensions and job changes often need runway.",
          fixLinkKey: "extensions_changes_guide",
        },
      ],
    },
    chooseYourSituation: {
      title: "Choose your situation",
      subtitle: "We use this to filter scenario cards.",
      inputs: [
        {
          key: "stage",
          label: "Stage",
          type: "segmented",
          options: [
            { value: "before", label: "Before move" },
            { value: "after", label: "After arrival" },
          ],
        },
        {
          key: "household",
          label: "Household",
          type: "segmented",
          options: [
            { value: "single", label: "Solo" },
            { value: "partner", label: "Partner" },
          ],
        },
        {
          key: "job",
          label: "Work",
          type: "segmented",
          options: [
            { value: "none", label: "No offer yet" },
            { value: "employed", label: "Employed" },
          ],
        },
        {
          key: "region",
          label: "Region",
          type: "segmented",
          options: [
            { value: "eu", label: "EU/EEA" },
            { value: "non_eu", label: "Non-EU" },
          ],
        },
      ],
    },
    sectionTitles: {
      scenarios: "Scenarios",
      timeline: "The moving timeline",
      tools: "Tools that speed things up",
      faq: "FAQ",
    },
    shareable: {
      sectionTitle: "Shareable checklist",
      introParagraph: "Share these essentials with co-movers.",
      items: [
        { label: "Documents — start with the readiness checker", linkKey: "document_readiness" },
        { label: "Tasks — use the moving checklist", linkKey: "moving_checklist" },
      ],
      footerParagraph: "Bookmark this page to revisit during your move.",
    },
    related: {
      sectionTitle: "Related pages",
      cards: [
        { linkKey: "working_in_netherlands_move_guide", description: "Move-pillar guide for job offers, salary, permits, payroll, and relocation trade-offs." },
        {
          linkKey: "changing_jobs_netherlands_move_guide",
          description: "Already in NL or switching roles: contracts, permits, salary timing, housing, and admin in one checklist.",
        },
        {
          linkKey: "resigning_job_netherlands_move_guide",
          description: "Leaving an employer: notice, contract checks, stay and permit continuity, payroll gaps, and what to line up first.",
        },
        {
          linkKey: "layoffs_netherlands_move_guide",
          description: "Redundancy or role-ending risk: employment, permits, salary continuity, housing, and calm next steps in one Move guide.",
        },
        { linkKey: "twv_work_permit_move_guide", description: "TWV route guide for employer-driven work authorization questions and route comparison." },
        { linkKey: "extensions_changes_guide", description: "After arrival: permit timing, renewals, and life changes—next to visas and residence permits." },
        { linkKey: "living_survival_guide", description: "Living pillar: daily routines, transport, apps, and payments." },
        { linkKey: "hub", description: "Central links for the moving cluster." },
        { linkKey: "bsn", description: "BSN registration walkthrough." },
        { linkKey: "moving_checklist", description: "Personalized checklist." },
      ],
    },
    sidebar: {
      startHereLabel: "Start here",
      links: [
        "moving_checklist",
        "document_readiness",
        "working_in_netherlands_move_guide",
        "changing_jobs_netherlands_move_guide",
        "resigning_job_netherlands_move_guide",
        "layoffs_netherlands_move_guide",
        "twv_work_permit_move_guide",
        "extensions_changes_guide",
        "hub",
      ],
      scenariosPrompt: "Not sure where to start? Pick a scenario:",
      scenariosJumpAnchor: "#scenarios",
      scenariosJumpLabel: "Jump to scenarios",
      ctaLabel: "Open moving checklist",
      ctaLinkKey: "moving_checklist",
    },
    stepByStepSummary: {
      sectionTitle: "Step-by-step summary",
      introParagraph: "If you only remember a few steps:",
      steps: [
        "Prepare documents and housing plan.",
        "Register and get your BSN.",
        "Set up banking, insurance, and DigiD in your first weeks.",
      ],
    },
  },
};

export type GetNlMovingPillarContentOptions = {
  /**
   * Hero copy flavor (English with destination-specific tone).
   * @default "nl-informal-en" — direct, informal-“you” voice echoing Dutch **jij** register.
   */
  heroVoiceId?: MovingPillarHeroVoiceId;
};

export async function getNlMovingPillarContent(
  options?: GetNlMovingPillarContentOptions
): Promise<NlMovingPillarContent> {
  const heroVoiceId = options?.heroVoiceId ?? "nl-informal-en";
  return {
    ...nlMovingPillarContent,
    sections: {
      ...nlMovingPillarContent.sections,
      pageHeader: applyMovingPillarHeroVoice(nlMovingPillarContent.sections.pageHeader, heroVoiceId),
    },
  };
}
