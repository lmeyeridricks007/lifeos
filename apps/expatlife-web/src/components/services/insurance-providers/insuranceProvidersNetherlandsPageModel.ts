export const INSURANCE_PROVIDERS_NETHERLANDS_PATH = "/netherlands/services/insurance-providers/" as const;
export const SERVICES_HUB_PATH = "/netherlands/services/" as const;
export const HEALTH_INSURANCE_GUIDE_PATH = "/netherlands/health-insurance-netherlands/" as const;
export const HEALTH_INSURANCE_SERVICES_PATH = "/netherlands/services/health-insurance/" as const;
export const HOUSING_HUB_PATH = "/netherlands/housing/" as const;
export const BUYING_HOUSE_NETHERLANDS_PATH = "/netherlands/housing/buying-a-house-netherlands/" as const;
export const RENTING_NETHERLANDS_PATH = "/netherlands/renting-in-the-netherlands/" as const;
export const PROPERTY_TAX_NETHERLANDS_PATH = "/netherlands/taxes/property-tax-netherlands/" as const;
export const ZZP_NETHERLANDS_PATH = "/netherlands/business/zzp-netherlands/" as const;
export const STARTING_BUSINESS_NETHERLANDS_PATH = "/netherlands/business/starting-a-business-netherlands/" as const;
export const FREELANCING_NETHERLANDS_PATH = "/netherlands/jobs/freelancing-netherlands/" as const;
export const FINANCIAL_ADVISORS_PATH = "/netherlands/services/financial-advisors/" as const;

export type InsuranceProvider = {
  name: string;
  categories: string[];
  onlineServices: boolean;
  expatFriendly: boolean;
  summary: string;
  offers: string[];
  pricing: string;
  pros: string[];
  cons: string[];
  website: string;
  featured: boolean;
};

export type InsuranceLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type InsuranceComparisonRow = {
  provider: string;
  healthInsurance: boolean;
  homeInsurance: boolean;
  liabilityInsurance: boolean;
  travelInsurance: boolean;
  businessInsurance: boolean;
  onlineServices: boolean;
};

const categories = {
  health: "Health insurance",
  liability: "Liability insurance",
  home: "Home insurance",
  contents: "Contents insurance",
  travel: "Travel insurance",
  legal: "Legal insurance",
  car: "Car insurance",
  business: "Business insurance",
  income: "Income protection",
  life: "Life insurance",
};

const visual = (name: string, version: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-insurance-providers-${name}-${version}.png`,
  alt,
  caption,
});

export const insuranceProvidersNetherlandsPage = {
  slug: "insurance-providers",
  path: INSURANCE_PROVIDERS_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-09-20",
  seo: {
    title: "Insurance Providers in the Netherlands for Expats",
    description:
      "Compare insurance providers in the Netherlands and learn about health insurance, liability insurance, home insurance, travel insurance and expat insurance options.",
    keywords: [
      "insurance providers netherlands",
      "expat insurance netherlands",
      "dutch insurance providers",
      "insurance netherlands expat",
      "best insurance netherlands",
      "health insurance netherlands",
      "liability insurance netherlands",
      "home insurance netherlands",
      "expat health insurance",
      "dutch insurers",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Services · Insurance providers",
    pageTitle: "Insurance Providers in the Netherlands",
    subtitle:
      "Understand Dutch insurance requirements and compare providers offering health, liability, home, travel and expat-focused insurance products.",
    primaryCta: { label: "Compare Insurance Providers", href: "#directory" },
    secondaryCta: { label: "Learn About Dutch Insurance", href: "#intro" },
    chips: ["Mandatory vs optional cover", "Real provider directory", "Healthcare, housing and business links", "No policy recommendations"],
    image: {
      src: "/images/heroes/netherlands-insurance-providers-hero-v2.png",
      alt: "Photorealistic editorial scene of an international couple in a modern Dutch apartment reviewing insurance provider options on a laptop with canal houses and bicycles visible through the window.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "At a glance" },
    { href: "#types", label: "Types" },
    { href: "#health", label: "Health" },
    { href: "#liability", label: "Liability" },
    { href: "#home-contents", label: "Home & contents" },
    { href: "#travel", label: "Travel" },
    { href: "#business", label: "Business" },
    { href: "#expats", label: "Expats" },
    { href: "#directory", label: "Directory" },
    { href: "#comparison", label: "Compare" },
    { href: "#costs", label: "Costs" },
    { href: "#questions", label: "Questions" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "premium-v1",
      "Premium infographic explaining Dutch insurance in three groups: mandatory, common optional and situation-dependent products.",
      "Start by separating legal requirements from household, travel and business risks, then verify details with providers."
    ),
    snapshot: visual(
      "snapshot",
      "premium-v2",
      "Premium infographic showing Dutch insurance at a glance with six cards for health, liability, homeowners, renters, travel and business insurance.",
      "Use this at-a-glance overview to separate mandatory health cover from common optional household, travel and business products."
    ),
    types: visual(
      "types",
      "premium-v1",
      "Premium infographic map of common Dutch insurance types including health, liability, home, contents, travel, legal, car, business, income protection and life insurance.",
      "This map helps you group insurance products by purpose before comparing providers."
    ),
    health: visual(
      "health",
      "premium-v3",
      "Premium infographic explaining Dutch health insurance with cards for basic coverage, supplementary coverage, monthly premiums, policy type and excess.",
      "Use this health-insurance flow to check whether Dutch basic insurance applies, then compare policy type, premium and supplementary cover."
    ),
    liability: visual(
      "liability",
      "premium-v3",
      "Premium infographic explaining liability insurance with household checklist items for personal liability, family members, claim limits, exclusions and business-liability separation.",
      "Liability cover is common, but the useful comparison points are household members, claim limits, exclusions and whether business activity is excluded."
    ),
    homeContents: visual(
      "home-contents",
      "premium-v1",
      "Premium infographic comparing home insurance and contents insurance for homeowners, renters, furnished rentals and temporary stays.",
      "Use this comparison to separate building cover from belongings cover before checking landlord, lender or mortgage requirements."
    ),
    travel: visual(
      "travel",
      "premium-v1",
      "Premium infographic explaining travel insurance for single trips, continuous cover, business travel, home-country visits, cancellation and medical costs abroad.",
      "Frequent travel makes policy details important: destination, trip duration, business use and existing health cover all change the comparison."
    ),
    business: visual(
      "business",
      "premium-v3",
      "Premium infographic for entrepreneurs and ZZP'ers showing professional liability, business liability, equipment insurance, income protection and a contract-risk workflow.",
      "Business insurance starts with your contracts and sector risks, then moves into limits, exclusions, proof of cover and income protection."
    ),
    expatConsiderations: visual(
      "expat-considerations",
      "premium-v1",
      "Premium infographic showing an expat insurance timeline from before arrival through first weeks, temporary housing, international moves, family members and frequent travel.",
      "Use this timeline to avoid coverage gaps while your housing, registration, work and travel situation is changing."
    ),
    directory: visual(
      "directory",
      "premium-v1",
      "Premium infographic showing a neutral insurance provider directory workflow: browse, shortlist, visit provider and verify current terms.",
      "The directory is for structured discovery, not rankings. Shortlist by category, then verify current terms directly with providers."
    ),
    comparison: visual(
      "comparison",
      "premium-v1",
      "Premium infographic showing an insurance provider comparison matrix and shortlist workflow for coverage needs, English support, exclusions, online claims and cancellation rules.",
      "Use the comparison workflow to shortlist providers by product fit, service model and exclusions rather than marketing claims."
    ),
    costs: visual(
      "costs",
      "premium-v1",
      "Premium infographic showing typical Dutch insurance cost ranges for health, liability, contents and travel insurance.",
      "These broad ranges are only for orientation; current quotes depend on provider, coverage and personal circumstances."
    ),
    questions: visual(
      "questions",
      "premium-v1",
      "Premium infographic checklist of questions to ask before choosing an insurance provider, including coverage, English support, exclusions, online management and cancellation rules.",
      "Ask these questions before buying so comparison happens around coverage, service and exclusions instead of headline price alone."
    ),
    expatMistakes: visual(
      "expat-mistakes",
      "premium-v1",
      "Premium infographic checklist of common expat insurance mistakes including delaying health insurance, assuming home-country cover applies and missing exclusions.",
      "Use this checklist before buying or renewing policies, especially during relocation, temporary housing or frequent travel periods."
    ),
    faq: visual(
      "faq",
      "premium-v2",
      "Premium infographic summarizing common insurance provider FAQ topics for mandatory health insurance, renters, liability, homeowners, freelancers and online policies.",
      "Use the FAQ visual to identify the question you still need to verify with official sources or the provider."
    ),
    officialSources: visual(
      "sources",
      "premium-v2",
      "Premium infographic showing official resource categories for Dutch government rules, healthcare system information, financial markets context and business guidance.",
      "Official resources help verify current rules, healthcare context, consumer-finance information and entrepreneur guidance."
    ),
    relatedGuides: visual(
      "related-guides",
      "premium-v1",
      "Premium infographic journey map connecting insurance research to healthcare insurance, buying a house, renting, ZZP, starting a business and financial advisors.",
      "Continue from insurance into the guide cluster that matches your next decision: healthcare, housing, business or financial planning."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "Text version of the insurance overview",
      items: [
        "Mandatory insurance usually starts with Dutch basic health insurance if you live or work in the Netherlands.",
        "Common optional insurance includes liability insurance, contents insurance, travel insurance and sometimes legal insurance.",
        "Situation-dependent cover includes home insurance for homeowners, business insurance for ZZP'ers and car insurance for vehicle owners.",
        "A useful comparison process is: check legal requirements, review household risks, add travel or business needs, then verify with the provider.",
      ],
    },
    snapshot: {
      title: "At-a-glance insurance facts",
      items: [
        "Health insurance is generally mandatory for residents and workers.",
        "Personal liability insurance is common in Dutch households, even when it is not legally required.",
        "Homeowners often compare building insurance, while renters usually compare contents insurance for belongings.",
        "Travel insurance is popular for holidays, home-country visits, business trips and frequent international travel.",
        "Entrepreneurs and ZZP'ers often compare business liability, professional liability, equipment cover and income protection.",
      ],
    },
    types: {
      title: "Insurance types shown in the visual",
      items: [
        "Health insurance covers the Dutch basic package and optional supplementary healthcare cover.",
        "Liability insurance may cover certain accidental damage or injury caused to another person, subject to policy conditions.",
        "Home insurance usually protects the building; contents insurance usually protects belongings inside the home.",
        "Travel insurance can include single-trip, continuous, cancellation, baggage and medical-abroad elements.",
        "Legal, car, business, income protection and life insurance depend strongly on your household, vehicle, work and family situation.",
      ],
    },
    health: {
      title: "Health insurance visual details",
      items: [
        "Basic health insurance is the central Dutch healthcare product and is generally mandatory for people who live or work in the Netherlands.",
        "Supplementary health insurance can add dental, physiotherapy, glasses or alternative-care coverage, but it is optional.",
        "Monthly premium, policy type, contracted care and the mandatory or voluntary excess affect how providers compare.",
        "The practical flow is: arrive or start work, check whether Dutch health insurance is required, choose an insurer and save your policy details.",
      ],
    },
    liability: {
      title: "Liability insurance visual details",
      items: [
        "Personal liability insurance is usually about accidental damage or injury caused to someone else, not your own healthcare costs.",
        "Check whether your partner, children or household members are covered under one policy.",
        "Compare claim limits, exclusions and whether rented-property situations, sports, vehicles or intentional damage are excluded.",
        "Business liability and professional liability are separate from personal liability insurance.",
      ],
    },
    homeContents: {
      title: "Home and contents visual details",
      items: [
        "Home insurance is mainly about the building structure, such as roof, walls, pipes, windows and storm, fire or water damage.",
        "Contents insurance is mainly about belongings, such as furniture, appliances, laptops, clothing and personal items.",
        "Homeowners may need both building and contents cover, while renters usually focus on contents and liability.",
        "Furnished rentals and temporary stays require extra care because the landlord, platform or relocation provider may already cover some items.",
      ],
    },
    travel: {
      title: "Travel insurance visual details",
      items: [
        "Single-trip travel insurance can suit one-off holidays or relocation trips.",
        "Continuous travel insurance may be useful for frequent travelers, home-country visits and multiple short trips each year.",
        "Business travel, remote work abroad, cancellation cover, baggage and medical costs abroad should be checked separately.",
        "Before travel, confirm destination coverage, trip duration limits, worldwide cover and how the policy works alongside Dutch health insurance.",
      ],
    },
    business: {
      title: "Business insurance visual details",
      items: [
        "Professional liability can matter when advice, consultancy, design, IT, legal or financial work could create client losses.",
        "Business liability can cover some third-party injury or property-damage claims connected to business activities.",
        "Equipment insurance can matter if your laptop, tools, camera or other work equipment is essential to earning income.",
        "Income protection is often considered by ZZP'ers because illness or injury can stop work without employer sick-pay protection.",
        "The practical workflow is: read the client contract, check sector risks, compare limits and keep proof of cover.",
      ],
    },
    expatConsiderations: {
      title: "Expat timeline details",
      items: [
        "Before arrival, research obligations and whether temporary international cover bridges your move.",
        "In the first weeks, arrange essential cover, save policy logins and confirm GP or healthcare setup where relevant.",
        "Temporary housing can create gaps around contents, landlord cover and travel or relocation insurance.",
        "International moves, family members and frequent travel can change start dates, exclusions and coverage territories.",
      ],
    },
    directory: {
      title: "Provider directory workflow",
      items: [
        "Browse providers by category, such as health insurers, broad consumer insurers, international insurers and business insurance support.",
        "Shortlist providers that match your coverage needs rather than treating the list as a ranking.",
        "Visit provider websites to confirm current products, underwriting rules, premiums, exclusions and service language.",
        "Verify current terms before sharing sensitive personal, medical, housing or business information.",
      ],
    },
    comparison: {
      title: "Provider comparison criteria",
      items: [
        "Compare providers by product availability: health insurance, home insurance, liability insurance, travel insurance and business insurance.",
        "Build a shortlist around coverage needs, English support, exclusions, online claims and cancellation rules.",
        "Online services can help with claims, documents, policy changes and cancellation, but service depth varies by provider.",
        "The comparison table is neutral and does not rank providers as best.",
      ],
    },
    costs: {
      title: "Cost ranges from the visual",
      items: [
        "Health insurance often costs about EUR 130-180 per adult per month for basic insurance, depending on policy type and excess.",
        "Liability insurance often costs about EUR 3-8 per month, with family policies usually costing more than single-person policies.",
        "Contents insurance often costs about EUR 5-20 per month, depending on postcode, insured value and cover choices.",
        "Continuous travel insurance often costs about EUR 3-15 per month, with worldwide cover or cancellation options changing the price.",
      ],
    },
    questions: {
      title: "Questions from the visual",
      items: [
        "What coverage do I actually need for my health, home, travel, family, vehicle or business situation?",
        "Are English-language policy documents, customer service or online tools available?",
        "What exclusions, claim limits, waiting periods, cancellation rules and family-member definitions apply?",
        "Can policies be managed online, including claims, document uploads, policy changes and cancellation?",
      ],
    },
    expatMistakes: {
      title: "Mistakes checklist from the visual",
      items: [
        "Delaying health insurance after becoming resident or starting work can create stress and possible retroactive premium issues.",
        "Home-country coverage may not apply once you live or work in the Netherlands.",
        "Ignoring liability insurance, underinsuring belongings and skipping provider comparison can leave practical gaps.",
        "Exclusions, travel coverage and unnecessary add-ons should be reviewed before buying or renewing.",
      ],
    },
    faq: {
      title: "FAQ topics covered",
      items: [
        "Whether Dutch health insurance is mandatory and which other insurance products may be required.",
        "Whether renters need contents insurance and why liability insurance is common.",
        "What homeowners, freelancers and ZZP'ers should consider before comparing policies.",
        "Whether major insurers support online policy management and how English support can vary.",
      ],
    },
    officialSources: {
      title: "Official source categories",
      items: [
        "Government.nl is useful for official rules and public guidance.",
        "Zorginstituut Nederland helps explain the Dutch healthcare system and basic health insurance context.",
        "AFM provides financial markets and consumer-information context.",
        "Business.gov.nl provides entrepreneur and business guidance relevant for self-employed insurance questions.",
      ],
    },
    relatedGuides: {
      title: "Next guide paths from the visual",
      items: [
        "Use the healthcare insurance guide when your next decision is mandatory Dutch health insurance.",
        "Use buying, renting and property guides when insurance connects to housing status.",
        "Use ZZP and starting-a-business guides when insurance connects to contracts, equipment or income protection.",
        "Use financial advisor content when insurance sits inside broader household planning, pensions, property or cross-border finances.",
      ],
    },
  },
  intro: {
    heading: "Understanding Insurance in the Netherlands",
    paragraphs: [
      "Most residents in the Netherlands interact with several forms of insurance. Health insurance is the best-known requirement, but many households also compare liability insurance, home insurance, contents insurance, travel insurance and, for entrepreneurs, business insurance.",
      "Some insurance types are mandatory while others are optional but common. This guide explains the major categories, shows real providers to compare and links you into healthcare, housing, business and relocation content so you can keep researching without treating this page as personal advice.",
      "Insurance products, premiums, exclusions and acceptance rules can change. Use this page as a high-trust starting point, then verify coverage, terms and prices directly with providers and official sources.",
    ],
    orientation: [
      "Dutch basic health insurance is generally mandatory for residents and workers.",
      "Liability, contents and travel insurance are usually optional but widely compared.",
      "Homeowners, renters, students, families and ZZP'ers often need different policy mixes.",
      "This directory does not rank providers or recommend specific policies.",
    ],
  },
  snapshotCards: [
    {
      title: "Health insurance is generally mandatory",
      body: "People who live or work in the Netherlands usually need Dutch basic health insurance within the applicable official timeline.",
    },
    {
      title: "Liability insurance is common",
      body: "Personal liability insurance is not usually mandatory, but many Dutch households choose it for everyday liability risks.",
    },
    {
      title: "Homeowners often insure property",
      body: "Mortgage lenders and homeowners commonly look at building insurance, contents insurance and related owner risks.",
    },
    {
      title: "Renters often insure contents",
      body: "Tenants commonly compare contents insurance for belongings, especially in furnished or temporary expat housing.",
    },
    {
      title: "Travel insurance is popular",
      body: "Many internationals compare single-trip or continuous travel cover because holidays, home-country visits and business trips are frequent.",
    },
    {
      title: "Businesses often need specialist coverage",
      body: "ZZP'ers and entrepreneurs may compare professional liability, business liability, equipment and income protection products.",
    },
  ],
  insuranceTypes: [
    {
      title: categories.health,
      body: "Dutch basic healthcare cover is government-defined and offered by licensed health insurers. Supplementary packages are optional.",
    },
    {
      title: categories.liability,
      body: "May help protect against certain personal liability situations, subject to policy conditions and exclusions.",
    },
    {
      title: categories.home,
      body: "Usually focused on the building itself and most relevant for homeowners, mortgage borrowers and owner-occupiers.",
    },
    {
      title: categories.contents,
      body: "Covers household belongings under policy conditions and is commonly compared by renters and homeowners.",
    },
    {
      title: categories.travel,
      body: "Can cover trips, baggage, cancellations or medical costs abroad depending on the selected product.",
    },
    {
      title: categories.legal,
      body: "Legal expenses cover may help with certain disputes, but scope and waiting periods vary.",
    },
    {
      title: categories.car,
      body: "Motor vehicle liability insurance is required if you own and use a car in the Netherlands.",
    },
    {
      title: categories.business,
      body: "Business liability, professional liability and sector-specific products matter for many entrepreneurs.",
    },
    {
      title: categories.income,
      body: "Income protection can be relevant for self-employed people who do not have employer sick-pay protection.",
    },
    {
      title: categories.life,
      body: "Life insurance is often considered alongside mortgages, family planning and long-term financial planning.",
    },
  ],
  healthcareInsurance: {
    heading: "Health Insurance (Zorgverzekering)",
    paragraphs: [
      "Health insurance is one of the most important insurance products for residents. The Dutch basic package is defined by the government, while insurers differ in premiums, policy type, contracted care, digital experience, service model and supplementary packages.",
      "Expats should pay close attention to the start date, residence or work status, whether supplementary coverage is useful and how the insurer handles English-language service. Students, cross-border workers and temporary residents should verify their situation with official sources.",
    ],
    links: [
      { label: "Healthcare Insurance page", href: HEALTH_INSURANCE_GUIDE_PATH, status: "live" },
      { label: "Compare health insurance providers", href: HEALTH_INSURANCE_SERVICES_PATH, status: "live" },
    ] satisfies InsuranceLink[],
    checkpoints: [
      {
        title: "Confirm whether it is mandatory",
        body: "Residents and workers generally need Dutch basic insurance, but students and short-term cases should verify their situation.",
      },
      {
        title: "Compare policy type and excess",
        body: "Premium, contracted care, reimbursement model and voluntary excess can matter as much as the insurer name.",
      },
      {
        title: "Decide on supplementary cover",
        body: "Dental, physiotherapy and other add-ons are optional. Compare limits and waiting periods before adding extras.",
      },
    ],
  },
  liabilityInsurance: {
    heading: "Liability Insurance",
    paragraphs: [
      "Liability insurance may help protect against certain personal liability situations, such as accidentally causing damage to someone else's property. It is different from health insurance, home insurance and business liability insurance.",
      "Many Dutch residents choose personal liability insurance because premiums can be relatively low and everyday risks are easy to underestimate. Coverage, family members, exclusions and claim limits differ by provider.",
    ],
    checkpoints: [
      {
        title: "Check who is covered",
        body: "Single, partner, family and household definitions can differ, so confirm whether children or housemates are included.",
      },
      {
        title: "Read exclusions",
        body: "Intentional damage, business activity, vehicles, sports or rented-property situations may be excluded or limited.",
      },
      {
        title: "Separate personal and business risk",
        body: "Personal liability insurance is not the same as professional or business liability insurance for ZZP work.",
      },
    ],
  },
  homeContentsInsurance: {
    heading: "Homeowners and Renters Insurance",
    comparison: [
      {
        title: "Home Insurance",
        body: "Usually focused on the structure of the home. Most relevant for homeowners and mortgage borrowers; renters normally do not insure the building itself.",
      },
      {
        title: "Contents Insurance",
        body: "Usually focused on belongings inside the home. Relevant for renters, homeowners and expats in furnished or temporary housing.",
      },
    ],
    paragraphs: [
      "Housing status matters. A homeowner, a tenant in a furnished apartment, a family in temporary accommodation and someone buying with a mortgage may all need different insurance conversations.",
      "Before signing, check what the landlord, owners' association, lender or relocation package already covers and what remains your responsibility.",
    ],
    links: [
      { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live" },
      { label: "Renting", href: RENTING_NETHERLANDS_PATH, status: "comingSoon" },
      { label: "Property Tax", href: PROPERTY_TAX_NETHERLANDS_PATH, status: "live" },
    ] satisfies InsuranceLink[],
    checkpoints: [
      {
        title: "Match cover to housing status",
        body: "Homeowners usually think about the building; renters usually start with belongings and liability.",
      },
      {
        title: "Ask what is already covered",
        body: "Landlords, owners' associations and mortgage lenders can affect what you need to arrange yourself.",
      },
      {
        title: "Document belongings",
        body: "Photos, receipts and a simple inventory can make contents cover easier to compare and use.",
      },
    ],
  },
  travelInsurance: {
    heading: "Travel Insurance",
    paragraphs: [
      "Many expats travel frequently for holidays, family visits, remote work, business trips or relocation periods. Travel insurance may cover issues such as trip cancellation, baggage, assistance and some medical costs abroad, depending on the product.",
      "Continuous annual travel insurance can be convenient for frequent travelers, while single-trip cover may suit occasional travel. Always check destination, duration, business-travel use, pre-existing conditions and whether Dutch health insurance already covers part of the situation.",
    ],
    checkpoints: [
      {
        title: "Choose trip model",
        body: "Single-trip cover can fit occasional holidays; continuous cover may suit frequent home-country visits.",
      },
      {
        title: "Check business use",
        body: "Work trips, remote work and conferences may need different wording than holiday travel.",
      },
      {
        title: "Compare medical abroad",
        body: "Dutch health insurance, travel cover and destination rules can overlap. Confirm what happens outside the Netherlands.",
      },
    ],
  },
  businessInsurance: {
    heading: "Insurance for Entrepreneurs and ZZP'ers",
    paragraphs: [
      "Entrepreneurs and ZZP'ers often need to think beyond personal insurance. Contracts, clients, industry rules and equipment can all influence which risks should be discussed with an insurer or qualified advisor.",
      "Common categories include professional liability, business liability, equipment insurance and income protection. Some clients may require specific cover before signing a contract.",
    ],
    categories: ["Professional liability", "Business liability", "Equipment insurance", "Income protection"],
    links: [
      { label: "ZZP", href: ZZP_NETHERLANDS_PATH, status: "live" },
      { label: "Starting a Business", href: STARTING_BUSINESS_NETHERLANDS_PATH, status: "live" },
      { label: "Freelancing", href: FREELANCING_NETHERLANDS_PATH, status: "live" },
    ] satisfies InsuranceLink[],
    checkpoints: [
      {
        title: "Start with contracts",
        body: "Client agreements may require professional liability, business liability or proof of cover before work starts.",
      },
      {
        title: "Protect income and equipment",
        body: "ZZP'ers often need to think about illness, laptop or tools, and whether work stops if equipment is lost.",
      },
      {
        title: "Review annually",
        body: "Insurance needs can change when you add clients, subcontractors, stock, equipment or new service lines.",
      },
    ],
  },
  expatConsiderations: [
    {
      title: "Arriving in the Netherlands",
      body: "Check the timing for health insurance and whether temporary cover bridges the period before Dutch policies start.",
    },
    {
      title: "Relocation periods",
      body: "Short leases, employer housing and moving shipments can create gaps between travel, contents and relocation cover.",
    },
    {
      title: "International moves",
      body: "Confirm whether home-country cover still applies after registration, work start or becoming Dutch resident.",
    },
    {
      title: "Temporary housing",
      body: "Ask what the landlord, platform or relocation provider covers and what personal belongings remain your responsibility.",
    },
    {
      title: "Global travel",
      body: "Frequent trips may require checking duration limits, business use, countries covered and medical treatment abroad.",
    },
    {
      title: "Family members",
      body: "Partners, children and housemates may not be covered automatically. Check policy holder and household definitions.",
    },
  ],
  providers: [
    {
      name: "Zilveren Kruis",
      categories: [categories.health],
      onlineServices: true,
      expatFriendly: true,
      summary:
        "Large Dutch health insurer often compared for basic and supplementary health insurance, online self-service and broad healthcare-provider network options.",
      offers: [
        "Basic Dutch health insurance with multiple policy types",
        "Supplementary health and dental packages",
        "Online account, app and care-provider search tools",
      ],
      pricing:
        "2026 basic health premiums are EUR 153.95, EUR 159.25 or EUR 176.45 per adult per month at the EUR 385 mandatory excess, depending on the selected policy.",
      pros: ["Large network and mature digital service model", "Useful English-language information is available for key health-insurance topics"],
      cons: ["Health-focused rather than a full household-insurance bundle", "Higher-choice policies cost more than entry-level basic cover"],
      website: "https://www.zilverenkruis.nl/",
      featured: true,
    },
    {
      name: "VGZ",
      categories: [categories.health],
      onlineServices: true,
      expatFriendly: true,
      summary:
        "Major Dutch health insurer offering basic and additional health insurance with digital policy management and care-finder tools.",
      offers: [
        "VGZ basic health insurance including Basis Keuze, Ruime Keuze and Eigen Keuze",
        "Supplementary and dental packages",
        "Contracted-care and reimbursement information for provider comparison",
      ],
      pricing:
        "2026 basic health premiums include EUR 149.90 for Basis Keuze, EUR 154.25 for Ruime Keuze and EUR 171.65 for Eigen Keuze per adult per month at EUR 385 excess.",
      pros: ["Strong national health-insurance presence", "Clear distinction between contracted-care and wider-choice policies"],
      cons: ["Not a broad provider for home, liability or travel on this directory", "Non-contracted care reimbursement differs by policy type"],
      website: "https://www.vgz.nl/",
      featured: true,
    },
    {
      name: "CZ",
      categories: [categories.health],
      onlineServices: true,
      expatFriendly: true,
      summary:
        "Large health insurer offering Dutch basic insurance, supplementary packages and online tools for managing policies and care choices.",
      offers: [
        "CZ Zorgbewustpolis, Zorg-op-maatpolis and Zorgvariatiepolis",
        "Supplementary health, dental and age-focused add-ons",
        "Online premium calculation and care-provider contract checks",
      ],
      pricing:
        "2026 basic health premiums are EUR 156.95, EUR 159.99 or EUR 177.50 per adult per month at EUR 385 excess, depending on policy type.",
      pros: ["Multiple policy choices for different care-access preferences", "Detailed public premium and excess tables"],
      cons: ["Premium depends strongly on policy type and voluntary excess", "Mostly relevant for healthcare rather than everyday household insurance"],
      website: "https://www.cz.nl/",
      featured: true,
    },
    {
      name: "Menzis",
      categories: [categories.health],
      onlineServices: true,
      expatFriendly: true,
      summary:
        "Dutch health insurer with basic and supplementary healthcare products, online account management and care guidance resources.",
      offers: [
        "Basis Voordelig, Basis and Basis Vrij health-insurance policies",
        "Supplementary healthcare and dental packages",
        "Online account, claims and healthcare-cost information",
      ],
      pricing:
        "2026 basic health premiums are EUR 151.25 for Basis Voordelig, EUR 156.25 for Basis and EUR 175.75 for Basis Vrij per adult per month at EUR 385 excess.",
      pros: ["Clear policy tiers for basic, wider and freer care choice", "Useful for expats comparing mainstream Dutch health insurers"],
      cons: ["Health-insurance scope only in this provider list", "Supplementary cover can change the total monthly cost substantially"],
      website: "https://www.menzis.nl/",
      featured: false,
    },
    {
      name: "FBTO",
      categories: [categories.health, categories.liability, categories.home, categories.contents, categories.travel, categories.car],
      onlineServices: true,
      expatFriendly: true,
      summary:
        "Consumer insurer offering modular online insurance products across health, liability, home, contents, travel and car categories.",
      offers: [
        "Health, liability, home, contents, travel and car insurance",
        "Modular add-ons for healthcare and household products",
        "Online-first policy setup and management",
      ],
      pricing:
        "2026 FBTO health premiums are EUR 148.75, EUR 159.25 or EUR 167.95 per adult per month at EUR 385 excess. Market examples show FBTO contents cover can start around EUR 2.44 per month for a specific comparison profile.",
      pros: ["Broad consumer bundle across several expat-relevant categories", "Modular setup can help avoid paying for add-ons you do not need"],
      cons: ["A low example price may rely on a specific profile, postcode, cover and excess", "Online-first service may not suit users who want advisory support"],
      website: "https://www.fbto.nl/",
      featured: true,
    },
    {
      name: "Nationale-Nederlanden",
      categories: [categories.home, categories.contents, categories.travel, categories.car, categories.business, categories.income, categories.life],
      onlineServices: true,
      expatFriendly: true,
      summary:
        "Large financial services and insurance provider offering personal, home, travel, income, life and business insurance products.",
      offers: [
        "Home, contents, travel, car, income, life and business insurance",
        "Opstal and household insurance options for homeowners",
        "Business and income-protection products for entrepreneurs",
      ],
      pricing:
        "Public 2026 travel-insurance examples for Nationale-Nederlanden show roughly EUR 5.74-EUR 7.53 per month for one-person continuous travel cover in sample profiles; home and business premiums require a personal quote.",
      pros: ["Broad product range across household, travel, income and business needs", "Useful when insurance is part of a larger mortgage or financial-planning picture"],
      cons: ["Exact home, life, income and business costs depend heavily on personal data", "Not a Dutch basic health insurer in this directory"],
      website: "https://www.nn.nl/",
      featured: true,
    },
    {
      name: "a.s.r.",
      categories: [categories.home, categories.contents, categories.travel, categories.car, categories.business, categories.income, categories.life],
      onlineServices: true,
      expatFriendly: true,
      summary:
        "Dutch insurer offering a broad mix of personal, property, mobility, income and business insurance products through several brands and channels.",
      offers: [
        "Contents, travel, car, income, life and business insurance",
        "Online a.s.r. Ik kies zelf products for contents and travel",
        "Business and income-protection options through a.s.r. channels",
      ],
      pricing:
        "a.s.r. lists contents insurance from EUR 4.16 per month and continuous travel insurance from EUR 3.40 per month. Liability examples are around EUR 2.88 per month for a single-person profile, depending on cover and excess.",
      pros: ["Transparent public starting prices for some online products", "Strong fit for contents, travel, business and income-protection research"],
      cons: ["Starting prices are not guaranteed quotes", "Some products may route through labels or adviser channels"],
      website: "https://www.asr.nl/",
      featured: true,
    },
    {
      name: "Univé",
      categories: [categories.health, categories.liability, categories.home, categories.contents, categories.travel, categories.car, categories.business],
      onlineServices: true,
      expatFriendly: true,
      summary:
        "Cooperative insurer offering health, personal liability, home, contents, travel, vehicle and business insurance options.",
      offers: [
        "Health, liability, home, contents, travel, car and business insurance",
        "Four basic health-insurance policy types",
        "Local and online service through a cooperative insurer model",
      ],
      pricing:
        "2026 Univé basic health premiums are EUR 147.40, EUR 149.90, EUR 155.00 or EUR 173.20 per adult per month at EUR 385 excess, depending on selected policy.",
      pros: ["Broad range across health and everyday household insurance", "Can suit users who want both online tools and local service options"],
      cons: ["Broad range means product terms vary by category", "Cheapest health premium may involve a more restricted policy type"],
      website: "https://www.unive.nl/",
      featured: false,
    },
    {
      name: "OHRA",
      categories: [categories.health, categories.liability, categories.home, categories.contents, categories.travel, categories.car],
      onlineServices: true,
      expatFriendly: true,
      summary:
        "Direct insurer offering online policy management across health and several everyday personal insurance categories.",
      offers: [
        "Health, liability, home, contents, travel and car insurance",
        "Direct online policy management",
        "Contents cover with Basis and All-Risk choices",
      ],
      pricing:
        "OHRA's 2026 basic health insurance is EUR 159.55 per adult per month at the EUR 385 excess. Public travel-insurance comparisons show OHRA examples from about EUR 2.53 per month for a specific one-person profile.",
      pros: ["Direct digital insurer with several everyday insurance categories", "Clear public health premium and voluntary-excess discount information"],
      cons: ["Exact home, contents, liability and travel premiums depend on profile and add-ons", "Direct model may be less suitable if you want an adviser-led comparison"],
      website: "https://www.ohra.nl/",
      featured: false,
    },
    {
      name: "DSW",
      categories: [categories.health],
      onlineServices: true,
      expatFriendly: false,
      summary:
        "Independent Dutch health insurer known for health insurance products and annual premium announcements; compare policy details directly.",
      offers: [
        "One Dutch basic health-insurance policy",
        "Supplementary and dental healthcare packages",
        "Clear annual premium communication",
      ],
      pricing:
        "DSW's 2026 basic health premium is EUR 158.50 per adult per month. Check DSW's current policy page for the exact excess, voluntary-excess discount and supplementary-package costs.",
      pros: ["Simple single basic-policy structure", "Known for publishing premiums early and clearly"],
      cons: ["Health-insurance only in this directory", "Limited fit if you want to bundle health with household or travel policies"],
      website: "https://www.dsw.nl/",
      featured: false,
    },
    {
      name: "Interpolis",
      categories: [categories.liability, categories.home, categories.contents, categories.travel, categories.car, categories.business],
      onlineServices: true,
      expatFriendly: true,
      summary:
        "Dutch insurer offering personal, home, travel, vehicle and business insurance, often accessed through Rabobank channels.",
      offers: [
        "Liability, home, contents, travel, car and business insurance",
        "Alles in een Polis bundle for multiple damage-insurance products",
        "Rabobank app and online premium calculation",
      ],
      pricing:
        "Interpolis calculates most premiums personally through Rabobank. A public student contents example starts from EUR 1.98 per month; other household and travel products depend on household, cover and bundle choices.",
      pros: ["Bundle structure can be convenient for households with several policies", "Rabobank integration may be useful for existing Rabobank customers"],
      cons: ["Exact prices generally require a quote flow", "Access and management are closely tied to Rabobank channels"],
      website: "https://www.interpolis.nl/",
      featured: false,
    },
    {
      name: "Allianz",
      categories: [categories.travel, categories.business, categories.liability, categories.home, categories.contents, categories.car],
      onlineServices: true,
      expatFriendly: true,
      summary:
        "International insurer with Dutch products across travel, mobility, property, liability and business insurance categories.",
      offers: [
        "Travel, home, contents, liability, car and business insurance",
        "Allianz Direct travel cover with Basic, Comfort and Premium options",
        "International insurance brand with Dutch online products",
      ],
      pricing:
        "Allianz Direct states continuous travel insurance can start around EUR 1.50 per month for a single person and around EUR 3.00 for a family; home and liability premiums are calculated from postcode, household and cover choices.",
      pros: ["Strong international brand recognition for expats", "Useful travel-insurance options for frequent trips"],
      cons: ["Actual household premiums require personal quote details", "International brand does not remove the need to check Dutch policy wording"],
      website: "https://www.allianz.nl/",
      featured: false,
    },
    {
      name: "Aon",
      categories: [categories.business, categories.travel, categories.health, categories.liability, categories.income],
      onlineServices: true,
      expatFriendly: true,
      summary:
        "Global risk and insurance services firm offering business insurance, employee benefits and international insurance support through Dutch operations.",
      offers: [
        "Business insurance, risk advice and employee benefits",
        "International student and expat insurance support through Aon channels",
        "Specialist cover for organizations rather than only standard consumer policies",
      ],
      pricing:
        "Aon international student-insurance materials show examples around EUR 15.90-EUR 53.70 per month depending on package and status. Business and employee-benefit pricing is quote-based.",
      pros: ["Strong fit for international students, employers and business risk cases", "Multilingual and international-insurance context can help newcomers"],
      cons: ["Not a simple consumer price-comparison flow for all products", "If Dutch basic health insurance is mandatory for your situation, student or expat cover may not replace it"],
      website: "https://www.aon.com/netherlands/",
      featured: false,
    },
  ] satisfies InsuranceProvider[],
  comparisonTable: [
    { provider: "Zilveren Kruis", healthInsurance: true, homeInsurance: false, liabilityInsurance: false, travelInsurance: false, businessInsurance: false, onlineServices: true },
    { provider: "VGZ", healthInsurance: true, homeInsurance: false, liabilityInsurance: false, travelInsurance: false, businessInsurance: false, onlineServices: true },
    { provider: "CZ", healthInsurance: true, homeInsurance: false, liabilityInsurance: false, travelInsurance: false, businessInsurance: false, onlineServices: true },
    { provider: "Menzis", healthInsurance: true, homeInsurance: false, liabilityInsurance: false, travelInsurance: false, businessInsurance: false, onlineServices: true },
    { provider: "FBTO", healthInsurance: true, homeInsurance: true, liabilityInsurance: true, travelInsurance: true, businessInsurance: false, onlineServices: true },
    { provider: "Nationale-Nederlanden", healthInsurance: false, homeInsurance: true, liabilityInsurance: false, travelInsurance: true, businessInsurance: true, onlineServices: true },
    { provider: "a.s.r.", healthInsurance: false, homeInsurance: true, liabilityInsurance: false, travelInsurance: true, businessInsurance: true, onlineServices: true },
    { provider: "Univé", healthInsurance: true, homeInsurance: true, liabilityInsurance: true, travelInsurance: true, businessInsurance: true, onlineServices: true },
    { provider: "OHRA", healthInsurance: true, homeInsurance: true, liabilityInsurance: true, travelInsurance: true, businessInsurance: false, onlineServices: true },
    { provider: "DSW", healthInsurance: true, homeInsurance: false, liabilityInsurance: false, travelInsurance: false, businessInsurance: false, onlineServices: true },
    { provider: "Interpolis", healthInsurance: false, homeInsurance: true, liabilityInsurance: true, travelInsurance: true, businessInsurance: true, onlineServices: true },
    { provider: "Allianz", healthInsurance: false, homeInsurance: true, liabilityInsurance: true, travelInsurance: true, businessInsurance: true, onlineServices: true },
    { provider: "Aon", healthInsurance: true, homeInsurance: false, liabilityInsurance: true, travelInsurance: true, businessInsurance: true, onlineServices: true },
  ] satisfies InsuranceComparisonRow[],
  costCards: [
    {
      title: "Health insurance",
      range: "About EUR 130-180 per adult per month for basic insurance",
      note: "Premiums vary by insurer, policy type and voluntary excess. Supplementary packages add cost.",
    },
    {
      title: "Liability insurance",
      range: "Often around EUR 3-8 per month",
      note: "Family policies usually cost more than single-person policies. Limits and exclusions matter.",
    },
    {
      title: "Contents insurance",
      range: "Often around EUR 5-20 per month",
      note: "Cost depends on postcode, insured value, building type, security and selected add-ons.",
    },
    {
      title: "Travel insurance",
      range: "Often around EUR 3-15 per month for continuous cover",
      note: "Worldwide cover, cancellation, winter sports and business travel can change the premium.",
    },
  ],
  choosingQuestions: [
    "What coverage do I need?",
    "Are English services available?",
    "What are the exclusions?",
    "How does customer support work?",
    "Can policies be managed online?",
    "Are family members covered?",
    "Is international coverage available?",
    "What are the cancellation rules?",
  ],
  commonMistakes: [
    "Delaying health insurance",
    "Assuming home-country coverage applies",
    "Ignoring liability insurance",
    "Underinsuring belongings",
    "Buying unnecessary products",
    "Not comparing providers",
    "Ignoring policy exclusions",
    "Forgetting travel coverage",
  ],
  relatedInsuranceGuides: [
    { label: "Healthcare Insurance", href: HEALTH_INSURANCE_GUIDE_PATH, status: "live", description: "Mandatory Dutch basic insurance, supplementary cover and timing rules." },
    { label: "Liability Insurance", href: "/netherlands/insurance/liability-insurance-netherlands/", status: "comingSoon", description: "Planned guide for personal liability cover." },
    { label: "Home Insurance", href: "/netherlands/insurance/home-insurance-netherlands/", status: "comingSoon", description: "Planned guide for building and contents insurance." },
    { label: "Travel Insurance", href: "/netherlands/insurance/travel-insurance-netherlands/", status: "comingSoon", description: "Planned guide for single-trip and continuous travel cover." },
    { label: "Business Insurance", href: "/netherlands/insurance/business-insurance-netherlands/", status: "comingSoon", description: "Planned guide for ZZP and company insurance needs." },
  ] satisfies InsuranceLink[],
  serviceCta: {
    heading: "Need Help Comparing Insurance Options?",
    body:
      "Use this page to compare providers, learn coverage basics and understand Dutch insurance requirements before requesting quotes or speaking with an insurer.",
    buttons: [
      { label: "Compare Providers", href: "#directory" },
      { label: "Explore Insurance Guides", href: "#related-insurance-guides" },
    ],
  },
  faqs: [
    {
      q: "Is health insurance mandatory?",
      a: "Dutch basic health insurance is generally mandatory if you live or work in the Netherlands. Timing and exceptions depend on your situation, so check Government.nl, Zorginstituut Nederland and the insurer before relying on home-country cover.",
    },
    {
      q: "Which insurance is required?",
      a: "Health insurance is the major requirement for most residents and workers. Car liability insurance is required if you own and use a car. Other products, such as personal liability, contents and travel insurance, are usually optional but commonly compared.",
    },
    {
      q: "Do renters need contents insurance?",
      a: "Contents insurance is usually optional for renters, but many tenants choose it to cover belongings under policy conditions. Check what the landlord or furnished-apartment provider covers before buying.",
    },
    {
      q: "Is liability insurance common?",
      a: "Yes. Personal liability insurance is common in Dutch households because it can cover certain everyday liability situations. It is not a substitute for business liability or professional liability cover.",
    },
    {
      q: "Which providers support expats?",
      a: "Many large Dutch insurers support online onboarding and some English-language information, but English service levels vary. Compare providers such as Zilveren Kruis, VGZ, CZ, FBTO, Nationale-Nederlanden, a.s.r., Univé, OHRA, Allianz and Aon based on your specific product needs.",
    },
    {
      q: "What insurance do homeowners need?",
      a: "Homeowners commonly compare building insurance, contents insurance, liability insurance and sometimes life insurance linked to mortgage planning. Mortgage lenders or owners' associations may influence what is required.",
    },
    {
      q: "What insurance do freelancers need?",
      a: "ZZP'ers often compare business liability, professional liability, equipment insurance and income protection. Requirements can depend on clients, contracts, sector rules and personal risk tolerance.",
    },
    {
      q: "Can policies be managed online?",
      a: "Most major Dutch insurers offer online portals or apps, but the level of English support, document upload, claims handling and cancellation controls varies by provider and product.",
    },
  ],
  officialSources: [
    {
      label: "Government.nl",
      url: "https://www.government.nl/",
      category: "Health insurance requirements, official government information and public-service guidance",
    },
    {
      label: "Zorginstituut Nederland",
      url: "https://www.zorginstituutnederland.nl/",
      category: "Dutch healthcare insurance system, basic package context and public healthcare information",
    },
    {
      label: "AFM",
      url: "https://www.afm.nl/en",
      category: "Financial markets supervision, consumer information and provider-checking context",
    },
    {
      label: "Business.gov.nl",
      url: "https://business.gov.nl/",
      category: "Entrepreneur and business-insurance context for companies and self-employed people",
    },
  ],
  relatedGuides: [
    { label: "Health Insurance in the Netherlands", href: HEALTH_INSURANCE_GUIDE_PATH, status: "live", description: "Understand mandatory Dutch basic health insurance and common expat situations." },
    { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "Connect homeowner insurance research to the Dutch home-buying process." },
    { label: "Renting", href: RENTING_NETHERLANDS_PATH, status: "comingSoon", description: "Useful for renters comparing contents insurance and temporary housing risks." },
    { label: "ZZP Guide", href: ZZP_NETHERLANDS_PATH, status: "live", description: "Business insurance context for self-employed professionals." },
    { label: "Starting a Business", href: STARTING_BUSINESS_NETHERLANDS_PATH, status: "live", description: "Company setup, contracts and operational risk planning." },
    { label: "Financial Advisors", href: FINANCIAL_ADVISORS_PATH, status: "live", description: "Long-term financial planning, pensions, property and cross-border considerations." },
  ] satisfies InsuranceLink[],
  exploreNextCards: [
    { label: "Healthcare Insurance", href: HEALTH_INSURANCE_GUIDE_PATH, status: "live", description: "Start with the mandatory health-insurance rules and provider comparison." },
    { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "Compare the insurance context around property ownership." },
    { label: "Renting", href: RENTING_NETHERLANDS_PATH, status: "comingSoon", description: "Rental context for contents cover and temporary accommodation." },
    { label: "ZZP Guide", href: ZZP_NETHERLANDS_PATH, status: "live", description: "Business cover and income-protection questions for freelancers." },
    { label: "Financial Advisors", href: FINANCIAL_ADVISORS_PATH, status: "live", description: "Plan insurance alongside long-term money decisions." },
  ] satisfies InsuranceLink[],
  futureExpansion: [
    "/netherlands/insurance/liability-insurance-netherlands/",
    "/netherlands/insurance/home-insurance-netherlands/",
    "/netherlands/insurance/travel-insurance-netherlands/",
    "/netherlands/insurance/business-insurance-netherlands/",
    "/netherlands/services/insurance-brokers/",
  ],
};
