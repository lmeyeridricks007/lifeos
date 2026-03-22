/**
 * Housing Platforms category page data for /netherlands/services/housing-platforms/.
 * Directory built from trusted platform sources and expat-support references.
 * Not a complete market list; positioning: widely used housing platforms and trusted expat-relevant providers.
 */

import type { ServiceCategoryPageData } from "@/src/lib/service-category/types";
import { housingPlatformsOfficialSources } from "@/src/data/services/official-sources/housing-platforms";
import { housingPlatforms, housingPlatformsMetadata } from "@/src/data/services/providers/housing-platforms";

/* Hero image prompt for future asset:
   "Cinematic editorial image for a Dutch housing platforms page for expats, showing organized apartment-search materials, housing notes, laptop with listing-style interface, city map, and a subtle Dutch urban setting, natural daylight, premium relocation magazine aesthetic, wide 16:9 banner."
*/

export const housingPlatformsCategoryPage: ServiceCategoryPageData = {
  slug: "housing-platforms",
  parentSlug: "services",
  country: "netherlands",
  path: "/netherlands/services/housing-platforms/",

  seo: {
    title: "Housing Platforms in the Netherlands for Expats: Compare Rental, Room & Temporary Housing Sites",
    description:
      "Compare housing platforms for expats in the Netherlands, including rental sites, room platforms, furnished stays, temporary accommodation, and practical housing-search tips.",
    keywords: [
      "housing platforms netherlands expat",
      "best housing websites netherlands expat",
      "rental platforms netherlands expat",
      "housing websites netherlands",
      "apartment rental sites netherlands expat",
      "find housing netherlands expat",
      "housinganywhere netherlands expat",
      "funda rental netherlands",
      "furnished apartments netherlands expat",
      "temporary accommodation netherlands expat",
      "student housing platforms netherlands",
      "dutch rental websites expat",
    ],
  },

  hero: {
    eyebrow: "SERVICES",
    title: "Housing Platforms for Expats in the Netherlands",
    subtitle:
      "Compare rental, room, furnished, temporary, and home-search platforms used by expats in the Netherlands, and learn how to choose the right housing channel for your move.",
    image: {
      src: "/images/heroes/expat-housing-search-desk-netherlands.png",
      alt: "A well-organized wooden desk with a laptop displaying housing listings, a smartphone also showing property searches, paper printouts of apartment details, and a city map. In the background, a large window reveals a picturesque Dutch canal and urban street with bicycles. A coffee cup sits on the desk, creating a calm, focused atmosphere for expat housing search and relocation planning in the Netherlands.",
      imagePrompt:
        "Cinematic editorial image for a Dutch housing platforms page for expats, showing organized apartment-search materials, housing notes, laptop with listing-style interface, city map, and a subtle Dutch urban setting, natural daylight, premium relocation magazine aesthetic, wide 16:9 banner.",
    },
    ctas: [
      { label: "Compare Housing Platforms", href: "#compare-providers", primary: true },
      { label: "Read Housing Guides", href: "#related-guides", primary: false },
    ],
  },

  tocItems: [
    { id: "overview", label: "Overview" },
    { id: "what-platforms-are", label: "What Housing Platforms Are" },
    { id: "types-of-services", label: "Types of Housing Search Services" },
    { id: "compare-providers", label: "Compare Providers" },
    { id: "what-to-compare", label: "What to Compare Between Platforms" },
    { id: "typical-costs", label: "Typical Costs and Fees" },
    { id: "anti-scam", label: "Anti-Scam Tips" },
    { id: "scenarios", label: "Example Scenarios" },
    { id: "faq", label: "FAQs" },
    { id: "official-sources", label: "Official Sources" },
  ],

  intro: {
    heading: "How Housing Platforms Help Expats Find a Home in the Netherlands",
    paragraphs: [
      "This page helps you understand which housing platforms are commonly used by expats in the Netherlands. Different platforms serve different needs: long-term rental, rooms, furnished stays, temporary stays, or buying research. A housing platform is not always the same as a rental agency or broker—many are online marketplaces that connect you with landlords or agents.",
      "Many expats use multiple channels at once: for example, browsing Funda for long-term rentals while checking HousingAnywhere or Flatio for furnished mid-term options. Use the comparison section below to compare platforms by type and best-for use case.",
    ],
    links: [
      { label: "All services hub", href: "/netherlands/services/" },
      { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
      { label: "Relocation services", href: "/netherlands/services/relocation-services/" },
      { label: "Dutch cities overview", href: "/netherlands/cities/" },
    ],
  },

  requirementCards: [],

  coverageCards: [
    {
      id: "long-term-rental",
      title: "Long-term rental marketplaces",
      description:
        "Platforms that list apartments and houses for rent, often with listings from estate agents and landlords. Good for standard 12+ month rentals and unfurnished homes.",
    },
    {
      id: "furnished-mid-term",
      title: "Furnished / mid-term rental platforms",
      description:
        "Platforms focused on furnished stays and medium-length leases (e.g. a few months to a year). Often used by expats and students before or alongside a long-term search.",
    },
    {
      id: "room-platforms",
      title: "Room platforms",
      description:
        "Sites for room rentals and shared housing. Popular with students and young professionals looking for a single room rather than a full apartment.",
    },
    {
      id: "student-housing",
      title: "Student housing platforms",
      description:
        "Platforms and providers aimed at international students. May offer furnished rooms or apartments with shorter or academic-year leases.",
    },
    {
      id: "temporary-accommodation",
      title: "Temporary accommodation platforms",
      description:
        "Short-stay and serviced apartments, corporate housing, and temporary options. Useful for the first weeks or months while you search for something permanent.",
    },
    {
      id: "buying-sale",
      title: "Buying / sale research platforms",
      description:
        "Marketplaces for homes for sale. Used for research and connecting with agents when you are considering buying rather than renting.",
    },
  ],

  comparisonFactors: [
    {
      id: "listing-type",
      title: "Listing type",
      description: "Whether the platform shows direct landlord listings, agent listings, or both. Some are marketplaces; others connect you to one type of provider.",
    },
    {
      id: "city-coverage",
      title: "City coverage",
      description: "Some platforms focus on major cities (e.g. Amsterdam, Rotterdam); others cover the whole country. Match coverage to your target area.",
    },
    {
      id: "furnished-vs-unfurnished",
      title: "Furnished vs unfurnished",
      description: "Platforms differ in furnished vs unfurnished supply. Mid-term and expat-focused sites often emphasise furnished options.",
    },
    {
      id: "room-studio-apartment",
      title: "Room vs studio vs apartment",
      description: "Depending on your budget and needs, filter by property type. Room platforms suit single occupants; others focus on full apartments or houses.",
    },
    {
      id: "verification",
      title: "Landlord / agent verification",
      description: "Check how the platform verifies listings and landlords. No platform can guarantee every listing; use official sources and caution.",
    },
    {
      id: "booking-process",
      title: "Booking process",
      description: "Some platforms allow direct booking; others connect you to the landlord or agent. Understand fees and contract flow before committing.",
    },
    {
      id: "fee-transparency",
      title: "Fee transparency",
      description: "Browse fees, subscription fees, booking fees, and agent or landlord fees. Always confirm total cost and refund conditions.",
    },
    {
      id: "audience-fit",
      title: "Suitability for students, families, professionals",
      description: "Platforms often cater to different audiences (students, families, working professionals). Choose one that matches your profile and needs.",
    },
  ],

  providers: [],

  comparisonSection: {
    title: "Compare housing platforms",
    intro: "Add up to three platforms to your shortlist to compare them side by side. We do not rank or endorse; the right choice depends on whether you need long-term rental, rooms, furnished stays, or temporary accommodation. Confirm fees and listing terms directly with the platform.",
  },

  costCards: [
    {
      id: "browse-access",
      title: "Browse / search access",
      value: "Free to ~€30/mo",
      note: "Many platforms (e.g. Funda, Pararius) are free to browse; some room sites charge a subscription or per-inquiry fee. Check the site.",
      disclaimer: "Fees vary by platform.",
    },
    {
      id: "subscription-fee",
      title: "Subscription fee",
      value: "€0–€30/mo or one-off",
      note: "Some room or listing sites charge a monthly or one-off subscription to contact landlords or view full listings (e.g. Kamernet). Others are free.",
      disclaimer: "Check platform pricing.",
    },
    {
      id: "booking-service-fee",
      title: "Booking / service fee",
      value: "€0–€200+ per booking",
      note: "Furnished and mid-term platforms often charge a booking or service fee. Amount varies by platform and stay length. Confirm before completing a booking.",
      disclaimer: "Verify on the platform.",
    },
    {
      id: "agent-landlord-fees",
      title: "Agent or landlord fees",
      value: "Often ~1 month’s rent",
      note: "When a platform connects you to an agent or landlord, their own fees may apply (e.g. agency fee, admin fee). In the Netherlands, one month’s rent is a common agency fee. Always ask for a clear breakdown.",
      disclaimer: "Not set by the platform.",
    },
    {
      id: "furnished-short-stay-premium",
      title: "Furnished / short-stay premium",
      value: "Typically 20–40% more",
      note: "Furnished and short-term rentals typically command a premium compared to long-term unfurnished leases. Compare total cost over your stay.",
      disclaimer: "Rates vary by city and platform.",
    },
  ],

  whoNeedsExtraHelp: [],

  scenarios: [
    {
      id: "single-furnished-mid-term",
      title: "Single professional needing furnished mid-term rental",
      summary:
        "You are relocating for work and need a furnished place for 3–12 months before committing to a long-term lease.",
      whatToConfirm: [
        "Minimum stay and notice period",
        "What is included (utilities, internet, deposit)",
        "Whether the platform or landlord handles the contract",
      ],
      whatToCompare: [
        "Mid-term and furnished platforms (e.g. HousingAnywhere, Flatio, Holland2Stay)",
        "Fees and cancellation terms",
        "City coverage and availability",
      ],
      commonMistakes: [
        "Paying before verifying the listing and landlord",
        "Assuming all platforms have the same level of verification",
      ],
      links: [
        { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
        { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
      ],
    },
    {
      id: "family-long-term-hague",
      title: "Family searching for long-term apartment in The Hague",
      summary: "You are moving with a partner and children and need a long-term family-sized rental.",
      whatToConfirm: [
        "School catchment areas and registration requirements",
        "Whether listings are from agents or direct landlords",
        "Deposit, agency fees, and contract length",
      ],
      whatToCompare: [
        "Long-term rental marketplaces (e.g. Funda, Pararius)",
        "Agent vs direct-landlord listings",
        "Areas with good schools and transport",
      ],
      commonMistakes: [
        "Ignoring registration and BSN requirements for the municipality",
        "Not reading the contract carefully for break clauses and fees",
      ],
      links: [
        { label: "The Hague", href: "/netherlands/the-hague/" },
        { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
      ],
    },
    {
      id: "student-room",
      title: "Student looking for a room",
      summary: "You are an international student and need a room in a shared house or student accommodation.",
      whatToConfirm: [
        "Contract type (rental vs licence)",
        "Registration possibility (for residence and municipality)",
        "What the platform charges (subscription vs one-off)",
      ],
      whatToCompare: [
        "Room platforms (e.g. Kamernet) and student housing providers",
        "Subscription or per-contact costs",
        "Proximity to your university and transport",
      ],
      commonMistakes: [
        "Paying a deposit before viewing or verifying the landlord",
        "Assuming you can register at the address for your residence permit",
      ],
      links: [
        { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
        { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
      ],
    },
    {
      id: "new-arrival-temporary",
      title: "New arrival needing temporary accommodation first",
      summary: "You need a short-stay or serviced apartment for the first weeks or months while you look for a permanent home.",
      whatToConfirm: [
        "Minimum stay and cancellation policy",
        "Whether the address can be used for registration if required",
        "Total cost including fees and taxes",
      ],
      whatToCompare: [
        "Temporary and serviced apartment providers",
        "Mid-term platforms with short minimum stays",
        "Location and transport links",
      ],
      commonMistakes: [
        "Booking without checking registration eligibility",
        "Underestimating how long it takes to find permanent housing in tight markets",
      ],
      links: [
        { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
        { label: "Amsterdam", href: "/netherlands/amsterdam/" },
      ],
    },
    {
      id: "expat-research-purchase",
      title: "Expat researching purchase market before buying later",
      summary: "You plan to buy a home in the Netherlands and want to browse sale listings and understand the market.",
      whatToConfirm: [
        "Whether you need an agent to view or bid",
        "Mortgage and tax implications for non-residents",
        "How listings are updated and how to contact agents",
      ],
      whatToCompare: [
        "Buying/sale platforms (e.g. Funda)",
        "Agent quality and language support",
        "Areas and price ranges",
      ],
      commonMistakes: [
        "Assuming you can buy without a Dutch mortgage or legal advice",
        "Ignoring notary and transfer tax costs",
      ],
      links: [
        { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
        { label: "Cities", href: "/netherlands/cities/" },
      ],
    },
    {
      id: "amsterdam-limited-timeline",
      title: "Person moving to Amsterdam with limited timeline",
      summary: "You have a start date soon and need to secure housing quickly in a competitive market.",
      whatToConfirm: [
        "Realistic timeline for your budget and area",
        "Whether to combine temporary + long-term search",
        "Registration and BSN requirements for your situation",
      ],
      whatToCompare: [
        "Furnished mid-term options for immediate move",
        "Long-term platforms for follow-on search",
        "Relocation agencies if you want hands-on help",
      ],
      commonMistakes: [
        "Relying on a single platform or channel",
        "Paying large sums before contract and key handover",
      ],
      links: [
        { label: "Amsterdam", href: "/netherlands/amsterdam/" },
        { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
      ],
    },
  ],

  faqs: [
    {
      q: "What are the best housing platforms for expats in the Netherlands?",
      a: "There is no single best platform for everyone. Long-term rental marketplaces like Funda and Pararius are widely used for standard rentals. For furnished mid-term stays, expats often use HousingAnywhere, Flatio, Nestpick, or Holland2Stay. For rooms, Kamernet is popular. For temporary or serviced accommodation, various short-stay and corporate housing providers exist. Choose based on your needs: long-term vs mid-term, furnished vs unfurnished, room vs apartment, and city. This page’s directory lets you filter by type and best-for use case.",
    },
    {
      q: "Is Funda good for rentals?",
      a: "Funda is one of the largest Dutch platforms for both sale and rental. It lists properties from estate agents and some landlords across the Netherlands. It is good for browsing long-term rentals and understanding the market. Rental listings are also available; confirm whether you are dealing with an agent or direct landlord and what fees apply. Funda is free to browse.",
    },
    {
      q: "Is HousingAnywhere a real estate agency?",
      a: "No. HousingAnywhere describes itself as an online platform that connects people looking for a home with landlords—it is not a real estate agency. I amsterdam’s student and temporary accommodation guidance lists it as an online housing platform for mid- and long-term stays. Use it as a marketplace: verify listings and landlords yourself and check platform fees.",
    },
    {
      q: "Which platforms are best for furnished rentals?",
      a: "Furnished and mid-term platforms such as HousingAnywhere, Flatio, Nestpick, and Holland2Stay are commonly used by expats for furnished stays. I amsterdam’s temporary accommodation page references some of these. Compare minimum stay, fees, city coverage, and booking process. Always verify the listing and landlord before paying.",
    },
    {
      q: "Which platforms are best for student housing?",
      a: "Student accommodation guidance from I amsterdam lists HousingAnywhere as an option for mid- and long-term stays. Room platforms like Kamernet and dedicated student housing providers (e.g. Student Experience) are also used. Confirm contract type, registration possibility, and platform or landlord fees.",
    },
    {
      q: "Do housing platforms charge fees?",
      a: "It varies. Many listing sites are free to browse; some charge a subscription or per-inquiry fee to contact landlords (e.g. some room platforms). Furnished and mid-term platforms often charge a booking or service fee. When a platform connects you to an agent or landlord, their fees may apply separately. Always check the platform’s pricing and the landlord or agent’s terms before committing.",
    },
    {
      q: "What is the difference between a platform and a broker?",
      a: "A housing platform is typically an online marketplace or listing site that connects you with landlords or agents. A broker (makelaar) or rental agent usually represents one side in a transaction and may charge an agency fee. Some platforms list properties from brokers; others connect you directly to landlords. On platforms, confirm who you are dealing with (platform, agent, or landlord) and what fees each party charges.",
    },
    {
      q: "Are listings guaranteed to be legitimate?",
      a: "No. No platform can guarantee that every listing is legitimate or that every landlord is trustworthy. Scams exist. Always verify the listing, the identity of the landlord or agent, and the contract before sending money. Prefer viewing in person or a verified process where possible. Use the anti-scam tips on this page and official sources such as the Huurcommissie for tenant rights.",
    },
    {
      q: "What should I check before paying?",
      a: "Verify the platform’s payment and refund policy; confirm who you are paying (platform, agent, or landlord); ensure you have a clear contract and inventory if applicable; and never pay large sums before viewing or without a written agreement. Check that the landlord or agent is identifiable and that the listing matches the contract. If in doubt, seek advice or use official dispute bodies such as the Huurcommissie where applicable.",
    },
    {
      q: "What if I have a dispute about rent or service charges?",
      a: "The Huurcommissie (Rent Tribunal) is a national, independent body that can adjudicate certain disputes about rent levels, maintenance, and service charges in the Netherlands. Government.nl explains rented housing and tenant rights. For platform or booking disputes, check the platform’s dispute process. For serious fraud, contact the police and consider legal advice.",
    },
    {
      q: "Should I use a relocation agency instead?",
      a: "It depends. Relocation agencies often provide hands-on support: home-finding, registration, settling-in, and sometimes immigration coordination. If you want someone to coordinate viewings, contracts, and admin, a relocation agency may be useful. If you prefer to search and compare listings yourself, housing platforms are a good starting point. You can also use both: e.g. a platform for research and short-term stays, and an agency for long-term home-finding or full move coordination.",
    },
    {
      q: "What should I do if I need housing quickly?",
      a: "Consider temporary or furnished mid-term platforms for immediate availability, and use long-term platforms in parallel if you need a permanent place. In tight markets (e.g. Amsterdam), allow time and have a backup (e.g. short-stay) while you search. Relocation agencies can sometimes speed up home-finding. Always verify listings and avoid paying large sums before you have a contract and key handover.",
    },
  ],

  officialSources: housingPlatformsOfficialSources,

  relatedGuides: [
    {
      title: "Housing guides",
      links: [
        { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
        { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
        { label: "Moving with family", href: "/netherlands/moving-to-netherlands-with-family/" },
      ],
    },
    {
      title: "Arrival & setup",
      links: [
        { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
        { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
        { label: "Health insurance", href: "/netherlands/health-insurance-netherlands/" },
        { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" },
      ],
    },
    {
      title: "City pages",
      links: [
        { label: "Amsterdam", href: "/netherlands/amsterdam/" },
        { label: "Rotterdam", href: "/netherlands/rotterdam/" },
        { label: "Utrecht", href: "/netherlands/utrecht/" },
        { label: "The Hague", href: "/netherlands/the-hague/" },
        { label: "Eindhoven", href: "/netherlands/eindhoven/" },
      ],
    },
    {
      title: "Services hub",
      links: [
        { label: "All services", href: "/netherlands/services/" },
        { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
        { label: "Temporary accommodation (planned)", href: "/netherlands/services/temporary-accommodation/" },
      ],
    },
  ],

  relatedCategories: [
    { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
    { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
    { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/" },
  ],

  tools: [
    { label: "Relocation Checklist", href: "/netherlands/moving/tools/moving-checklist/", description: "Personalized checklist for your move", status: "live" },
    { label: "Document Readiness Checker", href: "/netherlands/document-readiness-checker/", description: "Check which documents you need", status: "live" },
    { label: "Visa Timeline Estimator", href: "/netherlands/visa-timeline-estimator/", description: "Estimate visa and move timing", status: "live" },
    { label: "Visa Cost Calculator", href: "/netherlands/visa-cost-calculator/", description: "Estimate visa and move costs", status: "live" },
    { label: "Visa Comparison Tool", href: "/netherlands/visa/compare-visas/", description: "Compare visa routes", status: "live" },
  ],

  disclosure: [
    "This page is for information only and does not constitute legal or financial advice.",
    "Provider inclusion is based on real platform data and trusted references. Inclusion does not imply endorsement or guarantee of listing quality or safety.",
    "Users should verify availability, fees, contract terms, and platform rules directly. The directory is not necessarily the complete market list of all housing providers in the Netherlands.",
  ],

  housingPlatformDirectoryMeta: {
    sourceModel: housingPlatformsMetadata.sourceModel,
    totalRecords: housingPlatformsMetadata.totalRecords,
    lastChecked: housingPlatformsMetadata.lastChecked,
  },

  antiScamTips: {
    heading: "How to Search More Safely for Housing in the Netherlands",
    paragraphs: [
      "Housing scams exist in every market. To reduce risk: verify the type of platform you are using, confirm whether you are dealing with a landlord, agent, or the platform itself, and never pay large sums before you have a signed contract and (where applicable) key handover or verified check-in.",
      "For disputes about rent levels, maintenance, or service charges in regulated rentals, the Huurcommissie (Rent Tribunal) is the national, independent body that can adjudicate certain tenant-landlord issues. Government.nl provides information on rented housing and tenant rights.",
    ],
    points: [
      "Verify the platform: use known, trusted sites and official app stores; avoid paying via obscure links or wire transfers to unknown parties.",
      "Confirm who you are dealing with: landlord, rental agent (makelaar), or platform. Check that the contact and contract match the listing.",
      "Read the contract carefully: deposit, rent, notice period, what is included (utilities, furniture), and any agency or platform fees.",
      "Understand fees: platform fees, agent fees, and landlord charges. Request a clear breakdown before committing.",
      "Prefer viewing in person or a verified process: be wary of listings that refuse viewings or pressure you to pay before you have seen the property or signed a contract.",
      "Know your rights: the Huurcommissie can help with certain rent and maintenance disputes. Government.nl and Huurcommissie.nl have official guidance.",
    ],
  },
};
