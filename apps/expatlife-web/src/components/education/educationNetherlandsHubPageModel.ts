/**
 * Netherlands Education hub — cluster landing for schools and childcare guides.
 * Hub path already used as breadcrumb parent across education cornerstones.
 */

export const EDUCATION_HUB_PATH = "/netherlands/education" as const;

export type EducationHubLink = {
  label: string;
  href: string;
  description: string;
  status?: "live" | "comingSoon";
};

export type EducationHubJourneySection = {
  id: string;
  title: string;
  intro: string;
  links: readonly EducationHubLink[];
};

/**
 * Live education cluster children only for primary cards.
 * Staged services directories (international-schools, daycare-providers) are excluded until publish.
 */
export const educationNetherlandsHubPage = {
  path: EDUCATION_HUB_PATH,
  publishDate: "2026-09-06",
  seo: {
    title: "Education & Childcare in the Netherlands for Expats | Schools Hub",
    description:
      "Start here for Dutch and international schools, daycare, before- and after-school care, language and family setup — a planning map for expat families, not admissions advice.",
    keywords: [
      "education Netherlands expats",
      "international schools Netherlands",
      "Dutch schools expats",
      "daycare Netherlands",
      "childcare Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Education",
    pageTitle: "Education & childcare in the Netherlands",
    subtitle:
      "Choose a school track, plan early-years care, and connect language, benefits and housing — then open the deep guides for Dutch schools, international schools and kinderopvang.",
  },
  overview: [
    "Expat families usually decide between Dutch-medium schools (integration, no tuition for most public options) and international schools (English continuity, higher fees), while under-fours often need daycare or gastouder care before school starts.",
    "This hub answers the cluster-level question — which path fits your stay length, language and budget — then routes you into the live guides for schools and childcare.",
    "Provider directories under Services stay out of this hub until they are publicly live. Coming-soon university and system overview pages are labelled clearly and not treated as live children.",
  ],
  journeySections: [
    {
      id: "choose-school-track",
      title: "1. Choose a school track",
      intro:
        "Start with the decision frame: Dutch public/special schools vs international curricula. Many families read both guides before shortlisting cities and neighbourhoods.",
      links: [
        {
          label: "Dutch schools",
          href: "/netherlands/education/dutch-schools-netherlands",
          description: "Basisschool, secondary tracks, enrolment, NT2 support and how Dutch schools work for newcomers.",
          status: "live",
        },
        {
          label: "International schools",
          href: "/netherlands/education/international-schools-netherlands",
          description: "Curricula, admissions timing, fees orientation and how international schools differ from Dutch schools.",
          status: "live",
        },
        {
          label: "Dutch education system",
          href: "/netherlands/education/dutch-education-system",
          description: "Broader system overview — planned companion to the Dutch schools guide.",
          status: "comingSoon",
        },
        {
          label: "Universities & higher education",
          href: "/netherlands/education/universities-netherlands",
          description: "Higher education for international students — not live yet.",
          status: "comingSoon",
        },
      ],
    },
    {
      id: "early-years-childcare",
      title: "2. Early years & wraparound care",
      intro:
        "Before school age, and around the school day, Dutch childcare has its own types, waiting lists and allowance rules.",
      links: [
        {
          label: "Daycare (kinderopvang)",
          href: "/netherlands/education/daycare-netherlands",
          description: "KDV, gastouder, costs, waiting lists and how daycare fits before school.",
          status: "live",
        },
        {
          label: "After-school care (BSO)",
          href: "/netherlands/education/after-school-care-netherlands",
          description: "Buitenschoolse opvang hours, holiday care and allowance orientation.",
          status: "live",
        },
        {
          label: "Before-school care (VSO)",
          href: "/netherlands/education/before-school-care-netherlands",
          description: "Morning care and school drop-off pathways.",
          status: "live",
        },
        {
          label: "Childcare cost estimator",
          href: "/netherlands/family/tools/childcare-cost-estimator",
          description: "Planning tool for indicative childcare costs — not a toeslag decision.",
          status: "live",
        },
      ],
    },
    {
      id: "money-language-family",
      title: "3. Money, language & family setup",
      intro: "School choice sits next to benefits, Dutch language and broader family relocation planning.",
      links: [
        {
          label: "Childcare allowance",
          href: "/netherlands/taxes/childcare-allowance-netherlands",
          description: "Kinderopvangtoeslag orientation for registered opvang.",
          status: "live",
        },
        {
          label: "Child benefits",
          href: "/netherlands/family/child-benefits-netherlands",
          description: "Kinderbijslag and related family benefits orientation.",
          status: "live",
        },
        {
          label: "Learning Dutch",
          href: "/netherlands/living/language",
          description: "Practical Dutch for parents and children supporting school integration.",
          status: "live",
        },
        {
          label: "Moving with children",
          href: "/netherlands/moving-to-netherlands-with-kids",
          description: "Family relocation overview covering schools and registration timing.",
          status: "live",
        },
        {
          label: "Best cities for families",
          href: "/netherlands/cities/best-cities-for-families",
          description: "City shortlists where school access and family fit often matter.",
          status: "live",
        },
        {
          label: "Housing hub",
          href: "/netherlands/housing",
          description: "Rent near shortlisted schools and childcare — housing cluster hub.",
          status: "live",
        },
      ],
    },
  ] satisfies EducationHubJourneySection[],
  faqs: [
    {
      q: "Dutch school or international school?",
      a: "Dutch schools usually suit longer stays and integration without tuition for most public options. International schools suit English continuity and shorter postings at higher cost. Read both live guides before you decide.",
    },
    {
      q: "Where does daycare fit?",
      a: "Daycare covers under-school-age care. After- and before-school care wrap around primary school days. Allowance rules are separate from school fees — see the childcare allowance guide and cost estimator.",
    },
    {
      q: "Are university pages live?",
      a: "Not yet. Higher education and a broader Dutch education system overview are marked coming soon and are not treated as live hub children.",
    },
  ],
} as const;

export type EducationNetherlandsHubPage = typeof educationNetherlandsHubPage;
