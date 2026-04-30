import type { CitiesBestForExpatsScenarioConfig } from "../../best-cities-for-expats/config/citiesBestForExpats.types";
import { citiesBestForExpatsRoutes as R } from "../../best-cities-for-expats/config/citiesBestForExpats.routes";

export const citiesProfessionalsScenarios: CitiesBestForExpatsScenarioConfig[] = [
  {
    id: "tech",
    title: "Best for tech professionals",
    intro:
      "When product, platform, or hardware skills lead — you want enough employers, meetups, and real senior roles without pretending every city has the same startup scene.",
    tags: ["Tech", "SaaS", "Engineering"],
    picks: [
      {
        name: "Amsterdam",
        href: "/netherlands/amsterdam/",
        why: "Largest pool of software, data, and platform roles in the country — from big-brand product orgs to fast-growing scale-ups. Meetups and conferences are easiest here, so interviews and networking days add up faster.",
        highlights: [
          "Typical employers (examples): [Booking.com](https://www.booking.com), [Adyen](https://www.adyen.com), [Mollie](https://www.mollie.com), [Elastic](https://www.elastic.co), and [Backbase](https://www.backbase.com) — plus banks and marketplaces that run large in-house engineering teams.",
          "Reality check: Gross salaries can look high — still model rent and commute before you treat the offer as “done”.",
        ],
      },
      {
        name: "Eindhoven",
        href: "/netherlands/eindhoven/",
        why: "Strong for hardware, embedded systems, and deep tech tied to industry — fewer roles than Amsterdam overall, but very serious employers and a tight engineering culture around the Brainport campuses.",
        highlights: [
          "Typical employers (examples): [ASML](https://www.asml.com), [Philips](https://www.philips.com), [NXP](https://www.nxp.com), [Signify](https://www.signify.com), and [VDL Groep](https://www.vdlgroep.com) — with a long tail of campus suppliers and automotive tech firms.",
          "Reality check: If your role is truly local, you save a lot of Amsterdam-style travel — if your team is still Randstad-centric, count those train days honestly.",
        ],
      },
      {
        name: "Utrecht",
        href: "/netherlands/utrecht/",
        why: "Central for the country — good for SaaS, fintech, and product companies that sell nationally and want a single HQ. Trains make Amsterdam or Rotterdam client days workable without living in the biggest rent pressure zones.",
        highlights: [
          "Typical employers (examples): [Rabobank](https://www.rabobank.com), [bol.com](https://www.bol.com), [CM.com](https://www.cm.com), [ChipSoft](https://www.chipsoft.nl), and [OGD](https://www.ogd.nl) — alongside many smaller SaaS and platform scale-ups.",
          "Reality check: Housing competition is real — book viewings early and test peak-time trains if you split weeks between cities.",
        ],
      },
    ],
    tradeoffs: [
      "Depth vs pace: bigger markets bring more interviews — and more competition for the same flats.",
    ],
    toolHint: { href: R.cityComparison, label: "City comparison tool" },
  },
  {
    id: "finance-corporate",
    title: "Best for finance / corporate",
    intro:
      "When banking, trading, corporate HQ, or Big Four-style careers anchor you — where clients and head offices sit still beats picking a city on photos alone.",
    tags: ["Finance", "Corporate", "HQ"],
    picks: [
      {
        name: "Amsterdam",
        href: "/netherlands/amsterdam/",
        why: "Widest spread of banks, asset managers, trading technology, and corporate headquarters in one metro — English is common in many finance and corporate teams, and client meetings often default here.",
        highlights: [
          "Typical employers (examples): [ING](https://www.ing.com), [ABN AMRO](https://www.abnamro.com/en/home), [NN Group](https://www.nn-group.com), [Flow Traders](https://www.flowtraders.com), and [Optiver](https://www.optiver.com) — plus global banks, asset managers, and Big Four firms with large Dutch benches.",
          "Reality check: If your clients live here, a shorter commute can matter more than saving rent farther out.",
        ],
      },
      {
        name: "Rotterdam",
        href: "/netherlands/rotterdam/",
        why: "Major port and industrial backbone — strong for corporate finance, shipping, energy, and operations-heavy roles. Slightly less “everything in one square mile” than Amsterdam, but still a serious employer market.",
        highlights: [
          "Typical employers (examples): [Robeco](https://www.robeco.com), [Van Oord](https://www.vanoord.com), [APM Terminals](https://www.apmterminals.com), [Deloitte](https://www2.deloitte.com/nl/en.html), and [PwC](https://www.pwc.com/nl/en.html) — alongside port, trading, and industrial HQs tied to the [Port of Rotterdam](https://www.portofrotterdam.com) ecosystem.",
          "Reality check: If your week is mostly Amsterdam client dinners, add up train time before you bank on cheaper rent here.",
        ],
      },
    ],
    tradeoffs: [
      "Where your clients are matters — if they are mostly Amsterdam, Rotterdam savings can vanish in lost hours on the train.",
    ],
    toolHint: { href: R.dutchSalaryNetCalculator, label: "Dutch salary (net) calculator" },
  },
  {
    id: "international-orgs",
    title: "Best for international organisations",
    intro:
      "When international orgs, NGOs, diplomacy, and legal or policy work define your week — you usually want to be close to where those employers and their service firms actually sit.",
    tags: ["NGO", "Policy", "Legal"],
    picks: [
      {
        name: "The Hague",
        href: "/netherlands/the-hague/",
        why: "This is where the Netherlands concentrates courts, tribunals, embassies, and many EU and UN-linked organisations — daily work is often a short bike or tram ride between institutions, ministries, and law firms.",
        highlights: [
          "Typical employers (examples): [ICC](https://www.icc-cpi.int), [ICJ](https://www.icj-cij.org), [Europol](https://www.europol.europa.eu), [OPCW](https://www.opcw.org), and [Eurojust](https://www.eurojust.europa.eu) — plus embassies, NGOs, and law firms that support the same international orbit.",
          "Reality check: Partner careers may still pull toward Amsterdam or Rotterdam — map two realistic commutes before you sign a lease.",
        ],
      },
    ],
    tradeoffs: [
      "Partner jobs may pull toward other cities — model two commutes before you fixate on one neighbourhood look.",
    ],
    toolHint: { href: R.costOfLiving, label: "Cost of living calculator" },
  },
  {
    id: "balanced-career-lifestyle",
    title: "Best for balanced career + lifestyle",
    intro:
      "When you want solid careers without only chasing maximum chaos — these cities show up when pace, space, and trains need to work together.",
    tags: ["Balance", "Commute", "Pace"],
    picks: [
      {
        name: "Utrecht",
        href: "/netherlands/utrecht/",
        why: "Big enough for real career depth — banks, scale-ups, and public-sector HQs — but daily life can feel calmer than inner Amsterdam. Trains make hybrid weeks to other Randstad offices straightforward.",
        highlights: [
          "Typical employers (examples): [Rabobank](https://www.rabobank.com), [bol.com](https://www.bol.com), [CM.com](https://www.cm.com), [ChipSoft](https://www.chipsoft.nl), and [OGD](https://www.ogd.nl) — plus universities and national public-sector bodies with large Utrecht offices.",
          "Reality check: Housing is competitive — balance here is about rhythm, not automatically cheap rent.",
        ],
      },
      {
        name: "Haarlem",
        href: "/netherlands/haarlem/",
        why: "Historic town scale with Amsterdam a short train ride away — many people treat Haarlem as home and Amsterdam as the office. Good when you want quieter evenings but still need big-city employers a few times a week.",
        highlights: [
          "Typical employers (examples): Many Haarlem residents work in Amsterdam at names such as [ING](https://www.ing.com), [Booking.com](https://www.booking.com), [Adyen](https://www.adyen.com), and [Philips](https://www.philips.com); locally, [Spaarne Gasthuis](https://www.spaarnegasthuis.nl) is a large employer alongside regional HQs and professional services firms.",
          "Reality check: Treat the commute as part of the job — peak trains fill fast and parking near Amsterdam offices is costly.",
        ],
      },
      {
        name: "Leiden",
        href: "/netherlands/leiden/",
        why: "University city with a strong research and life-science corridor toward The Hague and Schiphol — appealing when you want academic or R&D-heavy work without living in the capital.",
        highlights: [
          "Typical employers (examples): [Leiden University](https://www.universiteitleiden.nl/en), [LUMC](https://www.lumc.nl/en), [Janssen](https://www.janssen.com/netherlands), [ProQR Therapeutics](https://www.proqr.com), and [Brill](https://brill.com) — clustered around the city and the [Leiden Bio Science Park](https://www.lbss.nl/en/).",
          "Reality check: Match housing to your real office — some teams sit in Leiden, others toward The Hague corridor or Schiphol-side sites.",
        ],
      },
    ],
    tradeoffs: [
      "Balance is not cheap — you are usually trading sheer city size for weeks that feel liveable.",
    ],
    toolHint: { href: R.rentAffordability, label: "Rent affordability calculator" },
  },
  {
    id: "affordability-career",
    title: "Best for affordability + career",
    intro:
      "When monthly breathing room leads but you still need real employers — you buy distance to some clients and thinner specialist circles in return.",
    tags: ["Budget", "Career", "Hybrid"],
    picks: [
      {
        name: "Eindhoven",
        href: "/netherlands/eindhoven/",
        why: "High-quality engineering and tech employers with rent that is often gentler than inner Amsterdam — strong if your household wants more space while keeping a specialist job locally.",
        highlights: [
          "Typical employers (examples): [ASML](https://www.asml.com), [Philips](https://www.philips.com), [NXP](https://www.nxp.com), [Signify](https://www.signify.com), and [VDL Groep](https://www.vdlgroep.com) — plus suppliers and deep-tech scale-ups that recruit internationally from the Brainport region.",
          "Reality check: Niche finance or NGO roles are thinner — confirm your partner’s sector before you assume everything travels well.",
        ],
      },
      {
        name: "Breda",
        href: "/netherlands/breda/",
        why: "Southern city with a practical mix of logistics, manufacturing, and services — attractive when Rotterdam or Antwerp client days exist but you want a smaller daily footprint.",
        highlights: [
          "Typical employers (examples): [Avans University of Applied Sciences](https://www.avans.nl), [Jumbo Supermarkten](https://www.jumbo.com), [FrieslandCampina](https://www.frieslandcampina.com), [Ordina](https://www.ordina.nl), and [CGI](https://www.cgi.com/nl/nl) — roles are often a mix of southern HQs, logistics, IT services, and public-sector employers serving Noord-Brabant.",
          "Reality check: Validate how many days per month you truly need in [Rotterdam](/netherlands/rotterdam/), [Eindhoven](/netherlands/eindhoven/), or across the border before you fix the commute story.",
        ],
      },
      {
        name: "Arnhem",
        href: "/netherlands/arnhem/",
        why: "Greener, slower daily rhythm with solid links west by train — works when your employer sits in Gelderland or you accept a hybrid split toward Randstad offices.",
        highlights: [
          "Typical employers (examples): [Alliander](https://www.alliander.com), [AkzoNobel](https://www.akzonobel.com), [HAN University of Applied Sciences](https://www.han.nl), [Gelre hospitals](https://www.gelreziekenhuizen.nl), and [WSP in the Netherlands](https://www.wsp.com/en-nl) — many vacancies sit in Arnhem, Apeldoorn, or Nijmegen; read each posting’s location line before you pick a neighbourhood.",
          "Reality check: Rush-hour trains toward Amsterdam or Utrecht deserve a trial week — seat availability and transfer time decide whether this stays “affordable” in hours, not just euros.",
        ],
      },
    ],
    tradeoffs: [
      "International school and niche specialist depth may be thinner — check what your household actually needs.",
    ],
    toolHint: { href: R.costOfLiving, label: "Cost of living calculator" },
  },
  {
    id: "startups-scaleups",
    title: "Best for startups / scaleups",
    intro:
      "When speed, investors, and hiring pools matter — you lean to busy startup cities, then check runway vs rent.",
    tags: ["Startups", "Scaleups", "VC"],
    picks: [
      {
        name: "Amsterdam",
        href: "/netherlands/amsterdam/",
        why: "Largest concentration of founders, early hires, and repeat investors — easiest place to line up coffee meetings, angel intros, and overlapping candidate pools when you are changing jobs often.",
        highlights: [
          "Typical employers (examples): [Adyen](https://www.adyen.com), [Mollie](https://www.mollie.com), [Elastic](https://www.elastic.co), [Backbase](https://www.backbase.com), and [TomTom](https://www.tomtom.com) — plus a dense field of venture-backed SaaS, fintech, and health-tech scale-ups in shared hubs.",
          "Reality check: Runway burns fast when rent and salaries both run hot — model twelve months, not three.",
        ],
      },
      {
        name: "Rotterdam",
        href: "/netherlands/rotterdam/",
        why: "Smaller than Amsterdam’s scene but growing — strong where logistics, climate tech, or creative industries meet software. Slightly more room to experiment on office cost than the tightest Amsterdam pockets.",
        highlights: [
          "Typical employers (examples): [Coolblue](https://www.coolblue.nl), [Van Oord](https://www.vanoord.com), [APM Terminals](https://www.apmterminals.com), [Simplicate](https://www.simplicate.nl), and [Robeco](https://www.robeco.com) — alongside port-linked scale-ups and creative-tech teams selling into European brands.",
          "Reality check: Investor and peer events still skew Amsterdam-heavy — budget weekly travel if fundraising is central to your role.",
        ],
      },
      {
        name: "Utrecht",
        href: "/netherlands/utrecht/",
        why: "Serious B2B SaaS and product hiring with a central train hub — good when your customers visit from all over the country and you want one home base for a national sales or success team.",
        highlights: [
          "Typical employers (examples): [bol.com](https://www.bol.com), [CM.com](https://www.cm.com), [ChipSoft](https://www.chipsoft.nl), [OGD](https://www.ogd.nl), and [Rabobank](https://www.rabobank.com) — many teams describe themselves as “Utrecht HQ + national travel” in job posts.",
          "Reality check: Competition for senior product and engineering roles is real — polish your story beyond “I want balance” because others do too.",
        ],
      },
    ],
    tradeoffs: [
      "Cash runway is lifestyle: intense cities reward momentum — but time to rest becomes a real problem by month nine.",
    ],
    toolHint: { href: R.thirtyPercentRulingCalculator, label: "30% ruling calculator" },
  },
];
