/**
 * Netherlands Health hub — cluster landing for healthcare guides.
 * Hub path already used as breadcrumb parent across health cornerstones.
 */

export const HEALTH_HUB_PATH = "/netherlands/health" as const;

export type HealthHubLink = {
  label: string;
  href: string;
  description: string;
};

export type HealthHubJourneySection = {
  id: string;
  title: string;
  intro: string;
  links: readonly HealthHubLink[];
};

/** Live cluster children + adjacent live orientation pages (no staged services directories). */
export const healthNetherlandsHubPage = {
  path: HEALTH_HUB_PATH,
  publishDate: "2026-09-06",
  seo: {
    title: "Healthcare in the Netherlands for Expats | Insurance, GP & Care Guides",
    description:
      "Start here for Dutch healthcare as an expat: health insurance, huisarts registration, pharmacies, emergencies, hospitals, mental healthcare, maternity care and children’s pathways — planning orientation only.",
    keywords: [
      "healthcare Netherlands expats",
      "Dutch health insurance",
      "huisarts Netherlands",
      "emergency healthcare Netherlands",
      "GP Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Healthcare",
    pageTitle: "Healthcare in the Netherlands",
    subtitle:
      "How Dutch care fits together for newcomers: get insured, register with a huisarts, know the urgent pathway, then deepen into dentists, hospitals, mental healthcare and family care.",
  },
  overview: [
    "Dutch healthcare is GP-first for most non-urgent needs. Almost everyone must take out basic health insurance (basisverzekering), then register with a huisarts (GP) who opens referrals, prescriptions and many follow-up pathways.",
    "Use this hub to pick the right guide for your stage — setup, everyday care, urgent situations or family care — instead of jumping between sibling articles without a map.",
    "Figures such as eigen risico and premium bands belong on Official figures and the insurance guides; this page organises the journey, not the statute table.",
  ],
  journeySections: [
    {
      id: "get-covered",
      title: "1. Get covered",
      intro:
        "Insurance is the gate to most paid care. Start with the insurance guide, then use the comparison framework and allowance context when money is the bottleneck.",
      links: [
        {
          label: "Health insurance guide",
          href: "/netherlands/health-insurance-netherlands",
          description: "Basic package, deadlines, deductible and how policies fit everyday care.",
        },
        {
          label: "Health insurance comparison",
          href: "/netherlands/health/health-insurance-comparison-netherlands",
          description: "Decision framework for comparing policies — not an insurer ranking.",
        },
        {
          label: "Healthcare allowance",
          href: "/netherlands/taxes/healthcare-allowance-netherlands",
          description: "Zorgtoeslag orientation when income may qualify for a contribution.",
        },
        {
          label: "Healthcare allowance estimator",
          href: "/netherlands/taxes/tools/healthcare-allowance-estimator",
          description: "Planning tool for allowance thresholds — verify on Belastingdienst.",
        },
      ],
    },
    {
      id: "everyday-care",
      title: "2. Everyday care",
      intro:
        "After insurance, register with a huisarts and learn how pharmacies and prescriptions work — that trio covers most routine needs.",
      links: [
        {
          label: "General practitioner (huisarts)",
          href: "/netherlands/health/gp-netherlands",
          description: "Registration, appointments, referrals, out-of-hours and prescriptions.",
        },
        {
          label: "Pharmacies",
          href: "/netherlands/health/pharmacies-netherlands",
          description: "Apotheek hours, OTC vs prescription pickup and emergency pharmacy.",
        },
        {
          label: "Prescriptions",
          href: "/netherlands/health/prescriptions-netherlands",
          description: "Recepten, repeats, medication lists and foreign prescriptions.",
        },
        {
          label: "Dentists",
          href: "/netherlands/health/dentists-netherlands",
          description: "Finding a dentist, dental cover, check-ups and dental urgency.",
        },
        {
          label: "Physiotherapy",
          href: "/netherlands/health/physiotherapy-netherlands",
          description: "Direct access, insurance limits and finding a therapist.",
        },
      ],
    },
    {
      id: "urgent-and-specialist",
      title: "3. Urgent care, hospitals & mental health",
      intro:
        "Know which door to use at night, how hospital referrals work, and how mental healthcare is stepped through the GP.",
      links: [
        {
          label: "Emergency healthcare",
          href: "/netherlands/health/emergency-healthcare-netherlands",
          description: "112, huisartsenpost, SEH, ambulance and urgent pathways.",
        },
        {
          label: "Hospitals",
          href: "/netherlands/health/hospitals-netherlands",
          description: "Referrals, specialists, outpatient clinics, admissions and UMCs.",
        },
        {
          label: "Mental healthcare",
          href: "/netherlands/health/mental-healthcare-netherlands",
          description: "GP first contact, POH-GGZ, GGZ specialist care and crisis routes.",
        },
        {
          label: "Emergencies & safety (living)",
          href: "/netherlands/living/emergencies-safety",
          description: "Broader emergency numbers and safety orientation for daily life.",
        },
      ],
    },
    {
      id: "family-care",
      title: "4. Pregnancy, birth & children’s healthcare",
      intro: "Family pathways sit beside the adult GP system — maternity first line, then children’s JGZ and paediatric routes.",
      links: [
        {
          label: "Maternity care",
          href: "/netherlands/health/maternity-care-netherlands",
          description: "Midwife-first pathways, obstetric care and kraamzorg awareness.",
        },
        {
          label: "Healthcare for children",
          href: "/netherlands/family/healthcare-for-children-netherlands",
          description: "GPs, Youth Healthcare (JGZ), vaccinations and paediatric care.",
        },
        {
          label: "Pregnancy",
          href: "/netherlands/family/pregnancy-netherlands",
          description: "Finding a midwife, trimester checkpoints and insurance timing.",
        },
        {
          label: "Giving birth",
          href: "/netherlands/family/giving-birth-netherlands",
          description: "Birth-day orientation for hospital and home pathways.",
        },
      ],
    },
    {
      id: "orientation",
      title: "5. System orientation",
      intro: "Read these when you want the map before the deep guides — or when culture and expectations feel unclear.",
      links: [
        {
          label: "Healthcare basics",
          href: "/netherlands/living/healthcare-basics",
          description: "Everyday system overview for newcomers.",
        },
        {
          label: "Health system culture basics",
          href: "/netherlands/culture/health-system-culture-basics",
          description: "How care conversations often feel in Dutch healthcare.",
        },
        {
          label: "Official figures",
          href: "/netherlands/official-figures",
          description: "Dated eigen risico, premium band and related statute mirrors.",
        },
        {
          label: "Health tools",
          href: "/netherlands/health/tools",
          description: "Healthcare-related tools category (live estimators linked where available).",
        },
        {
          label: "Health insurance providers (services)",
          href: "/netherlands/services/health-insurance",
          description: "Provider directory — confirm products on each insurer’s site.",
        },
      ],
    },
  ] satisfies HealthHubJourneySection[],
  faqs: [
    {
      q: "Where should I start if I just arrived?",
      a: "Get basic health insurance sorted first, then register with a huisarts. Use Emergency healthcare so you know the out-of-hours and 112 pathways before you need them.",
    },
    {
      q: "Is the huisarts the same as a hospital doctor?",
      a: "No. The huisarts is primary care. Most specialist and hospital routes start with a GP referral unless it is a true emergency.",
    },
    {
      q: "Does this hub replace official sources?",
      a: "No. It organises ExpatCopilot guides. Always verify coverage, fees and urgent instructions with your insurer, GP practice and government sources.",
    },
  ],
} as const;

export type HealthNetherlandsHubPage = typeof healthNetherlandsHubPage;
