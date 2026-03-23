/**
 * Immigration lawyers category page data for /netherlands/services/immigration-lawyers/.
 * IND is the decision-making authority; lawyers can represent clients. No invented legal rules.
 */

import type { ServiceCategoryPageData } from "@/src/lib/service-category/types";
import { immigrationLawyersProviders } from "@/src/data/companies-registry";
import { immigrationLawyersOfficialSources } from "@/src/data/services/official-sources/immigration-lawyers";

/* Hero image prompt for future asset/CMS:
   "Cinematic editorial image for a Dutch immigration lawyers category page for expats, showing organized legal and immigration planning materials, passport, residence-permit paperwork, document checklist, notebook, and a calm professional consultation setting, subtle Dutch context, natural daylight, premium magazine aesthetic, wide 16:9 banner."
*/

export const immigrationLawyersCategoryPage: ServiceCategoryPageData = {
  slug: "immigration-lawyers",
  parentSlug: "immigration-visas",
  country: "netherlands",
  path: "/netherlands/services/immigration-lawyers/",

  seo: {
    title: "Immigration Lawyers in the Netherlands for Expats: Permits, Appeals, Family & More",
    description:
      "Find out when expats may need an immigration lawyer in the Netherlands, what services firms offer, how to compare them, and which official sources to check first.",
    keywords: [
      "immigration lawyers netherlands",
      "immigration lawyer netherlands expat",
      "dutch immigration lawyer",
      "residence permit lawyer netherlands",
      "family reunification lawyer netherlands",
      "immigration legal help netherlands",
      "mvv lawyer netherlands",
      "ind appeal lawyer netherlands",
      "startup visa lawyer netherlands",
      "highly skilled migrant lawyer netherlands",
      "citizenship lawyer netherlands",
      "immigration law firm netherlands expat",
    ],
  },

  hero: {
    eyebrow: "SERVICES",
    title: "Immigration Lawyers for Expats in the Netherlands",
    subtitle:
      "Understand when Dutch immigration legal support may be useful, which cases often need specialist help, and how to compare firms for permits, family migration, appeals, and complex residence matters.",
    image: {
      src: "/images/heroes/netherlands-immigration-lawyer-consultation-hero.png",
      alt: "A professional immigration lawyer consultation in the Netherlands, with an expat and lawyer reviewing documents like residence permits, family reunification forms, and IND appeal papers on an organized desk with a laptop and passport, conveying detailed legal planning and trustworthy advice.",
      imagePrompt:
        "Cinematic editorial image for a Dutch immigration lawyers category page for expats, showing organized legal and immigration planning materials, passport, residence-permit paperwork, document checklist, notebook, and a calm professional consultation setting, subtle Dutch context, natural daylight, premium magazine aesthetic, wide 16:9 banner.",
    },
    ctas: [
      { label: "Explore Immigration Services", href: "/netherlands/services/immigration-visas/", primary: true },
      { label: "Read Immigration Guides", href: "#related-guides", primary: false },
    ],
  },

  tocItems: [
    { id: "overview", label: "Overview" },
    { id: "when-need-lawyer", label: "When You May Need an Immigration Lawyer" },
    { id: "common-matters", label: "Common Immigration Matters" },
    { id: "what-to-compare", label: "What to Compare Between Lawyers" },
    { id: "compare-providers", label: "Compare Providers" },
    { id: "typical-costs", label: "Typical Costs" },
    { id: "when-not-need", label: "When You May Not Need a Lawyer" },
    { id: "scenarios", label: "Example Scenarios" },
    { id: "faq", label: "FAQs" },
    { id: "official-sources", label: "Official Sources" },
  ],

  intro: {
    heading: "How Immigration Lawyers Help Expats in the Netherlands",
    paragraphs: [
      "This page helps you understand the immigration-lawyers category in the Netherlands. The IND (Immigration and Naturalisation Service) is the authority that assesses applications for residence and naturalisation. Lawyers can help with navigating applications, document strategy, objections, appeals, family migration, complex status changes, and difficult cases. The IND states that if the other person is your lawyer, an authorisation declaration is not necessary—reflecting that lawyers can formally represent clients in immigration procedures.",
      "Not every expat needs a lawyer. Straightforward employer-supported or clearly documented routes may be manageable with official IND guidance alone. Some people only need document translation, legalisation, or a relocation agency. Others benefit from specialist legal support. This hub helps you decide when a lawyer may be useful and how to compare firms.",
    ],
    links: [
      { label: "All services hub", href: "/netherlands/services/" },
      { label: "Apostille documents", href: "/netherlands/apostille-documents-netherlands/" },
      { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
      { label: "Dutch cities overview", href: "/netherlands/cities/" },
    ],
  },

  requirementCards: [
    {
      id: "straightforward-work",
      title: "Straightforward work permit with employer support",
      description: "Employer-sponsored highly skilled migrant or other work routes with clear documentation may not require a lawyer. IND guidance and your employer’s support can be enough.",
      whoItAppliesTo: "Employees with a recognised sponsor and clear eligibility",
      link: { label: "IND – Highly skilled migrant", href: "https://ind.nl/en/residence-permits/work/highly-skilled-migrant" },
    },
    {
      id: "complex-family",
      title: "Complex family migration case",
      description: "Partner or family reunification, EU-law residence rights, or cases involving children can become complex. Legal help is often sought when requirements are unclear or documents are disputed.",
      whoItAppliesTo: "Family reunification, partner migration, EU-law family situations",
      link: { label: "Juridisch Loket – Foreign partner or family", href: "https://www.juridischloket.nl/en/family-and-relationships/foreign-partner-or-family/how-do-i-go-about-the-application-for-bringing-my-foreign-partner-to-the-netherlands/" },
    },
    {
      id: "refusal-appeal",
      title: "Refusal / objection / appeal",
      description: "If you disagree with an IND decision, you may object or appeal. This is one of the clearest situations where legal representation is often recommended.",
      whoItAppliesTo: "Anyone considering objecting or appealing an IND decision",
      link: { label: "IND – Object or appeal a decision", href: "https://ind.nl/en/after-your-application/object-or-appeal-decision" },
    },
    {
      id: "startup-self-employed",
      title: "Startup or self-employed route",
      description: "Start-up and entrepreneur permits involve specific criteria and often formal document requirements (legalisation, translation). Lawyers can help with strategy and applications.",
      whoItAppliesTo: "Start-up founders, self-employed applicants",
      link: { label: "IND – Start-up", href: "https://ind.nl/en/residence-permits/work/start-up" },
    },
    {
      id: "citizenship-naturalization",
      title: "Citizenship / naturalisation questions",
      description: "Naturalisation and long-term residence have strict conditions. Legal advice can help you understand eligibility and prepare correctly.",
      whoItAppliesTo: "Long-term residents considering Dutch citizenship",
      link: { label: "Juridisch Loket – Becoming a Dutch citizen", href: "https://www.juridischloket.nl/en/family-and-relationships/foreign-partner-or-family/how-can-i-become-a-dutch-citizen/" },
    },
    {
      id: "unsure-route",
      title: "Unsure which route applies",
      description: "If your situation is unclear—e.g. status change between permit types, EU vs non-EU rights, or consequences of divorce—a lawyer can help clarify options.",
      whoItAppliesTo: "People with uncertain status or multiple possible routes",
      link: { label: "IND – Immigration", href: "https://ind.nl/en" },
    },
  ],

  legalMatters: [
    {
      id: "residence-permits",
      title: "Residence permits",
      description: "Applications and extensions for work, study, family, or other residence purposes. The IND assesses each application; lawyers can help prepare and represent.",
      whenComplex: "Refusals, unclear eligibility, or multiple permit types",
      link: { label: "Residence permit (planned guide)", href: "/netherlands/residence-permit-netherlands/" },
    },
    {
      id: "mvv-entry",
      title: "MVV / entry and residence procedures",
      description: "Procedures for authorisation for temporary stay (MVV) and first residence permits. Often require legalised and translated documents.",
      whenComplex: "Document disputes, urgency, or previous refusals",
      link: { label: "MVV (planned guide)", href: "/netherlands/mvv-netherlands/" },
    },
    {
      id: "family-reunification",
      title: "Family reunification",
      description: "Partner and family migration, including document requirements and income conditions. Can involve EU-law rights or Dutch national rules.",
      whenComplex: "EU-law issues, divorce consequences, or disputed documents",
      link: { label: "Family reunification (planned guide)", href: "/netherlands/family-reunification-netherlands/" },
    },
    {
      id: "highly-skilled-migrant",
      title: "Highly skilled migrant issues",
      description: "Work-based permits with employer as sponsor. Usually straightforward when employer is recognised; lawyers may help with disputes or status changes.",
      whenComplex: "Employer not recognised, change of employer, or refusal",
      link: { label: "Highly skilled migrant (planned guide)", href: "/netherlands/highly-skilled-migrant-netherlands/" },
    },
    {
      id: "startup-entrepreneur",
      title: "Startup / entrepreneur permits",
      description: "Permits for innovative start-ups and self-employed persons. Criteria and document requirements are specific; legal support is often used.",
      whenComplex: "Innovation assessment, business plan, or first application",
      link: { label: "Start-up visa (planned guide)", href: "/netherlands/startup-visa-netherlands/" },
    },
    {
      id: "eu-residence",
      title: "EU-law residence issues",
      description: "Rights of EU citizens and family members, including derived rights and Chavez-type situations. Can be legally complex.",
      whenComplex: "Disputes about residence rights, divorce, or long-term residence",
      link: { label: "Juridisch Loket – EU citizen", href: "https://www.juridischloket.nl/en/family-and-relationships/foreign-partner-or-family/can-i-live-in-the-netherlands-as-an-eu-citizen/" },
    },
    {
      id: "naturalization",
      title: "Naturalisation / Dutch citizenship",
      description: "Eligibility and procedure for becoming a Dutch citizen. Strict conditions and long processing; lawyers can advise and assist.",
      whenComplex: "Eligibility doubts, previous refusals, or dual nationality issues",
      link: { label: "Dutch citizenship (planned guide)", href: "/netherlands/dutch-citizenship-netherlands/" },
    },
    {
      id: "objections-appeals",
      title: "IND objections and appeals",
      description: "If you disagree with an IND decision, you can object or appeal. Legal representation is common and often recommended.",
      whenComplex: "Almost always; deadlines and procedure are strict",
      link: { label: "IND – Object or appeal", href: "https://ind.nl/en/after-your-application/object-or-appeal-decision" },
    },
  ],

  coverageCards: [],

  comparisonFactors: [
    { id: "specialisation", title: "Relevant immigration specialisation", description: "Check that the firm or lawyer regularly handles your type of case (e.g. family, work, startup, appeals)." },
    { id: "experience", title: "Experience with your case type", description: "Ask about experience with similar situations and success is not guaranteed; IND decides." },
    { id: "english", title: "English-language communication", description: "Not all firms offer full English. Confirm before engaging if this matters to you." },
    { id: "fees", title: "Transparent fee structure", description: "Fees vary by case and firm. Request written clarity on hourly rates, fixed fees, or packages before engaging." },
    { id: "responsiveness", title: "Responsiveness", description: "Immigration deadlines can be tight. Check how quickly the firm responds and whether they can meet your timeline." },
    { id: "document-support", title: "Document support / strategy", description: "Lawyers can help with document strategy, legalisation, and translation requirements. Confirm what they cover." },
    { id: "objections-appeals", title: "Objections and appeals", description: "If you may need to object or appeal, confirm the firm handles this and understands the procedure." },
    { id: "employer-family-startup", title: "Employer / family / startup matters", description: "Some firms focus on work permits, others on family or startup. Choose one that matches your case." },
    { id: "national-local", title: "National or local practice", description: "Many immigration lawyers work nationally; some are more local. Choose based on your preference and case." },
    { id: "situation", title: "Your situation", description: "The right firm depends on your type of application, complexity, language needs, urgency, and whether you need strategic advice or limited procedural help." },
  ],

  providers: immigrationLawyersProviders,

  comparisonSection: {
    title: "Compare immigration lawyers and services",
    intro: "The firms below are real providers expats often consider; each is shown with its main office locations. Add up to three to your shortlist to compare typical costs, pros and cons, and who each is best for. We do not rank or endorse; confirm fees and scope directly with the firm.",
  },

  costCards: [
    {
      id: "initial-consultation",
      title: "Initial consultation",
      value: "~€150–300 (fixed or hourly)",
      note: "Many firms offer a one-off fixed-fee first consultation; others charge by the hour. Confirm scope and price before booking.",
      disclaimer: "Check directly with the firm",
    },
    {
      id: "fixed-fee-application",
      title: "Fixed-fee application support",
      value: "~€500–2,500+ per application",
      note: "Typical range for standard applications (e.g. work permit, family reunification). Complex or corporate cases often higher; not all case types have fixed fees.",
    },
    {
      id: "hourly",
      title: "Hourly legal advice",
      value: "~€150–350/hr",
      note: "Complex or ongoing matters are often billed by the hour. Rates vary by firm and seniority; request an estimate in writing.",
    },
    {
      id: "objection-appeal",
      title: "Objection / appeal support",
      value: "~€1,500–5,000+ (case-dependent)",
      note: "Objections and appeals typically involve more work and higher costs than straightforward applications. Get a written quote for your case.",
    },
    {
      id: "document-review",
      title: "Document review only",
      value: "~€100–300",
      note: "Limited scope (e.g. checking your documents before you apply) may be available at lower cost than full representation. Confirm scope and fee with the firm.",
    },
  ],

  whoNeedsExtraHelp: [],

  whenNotNeed: {
    heading: "Cases That May Not Need a Lawyer",
    paragraphs: [
      "Some straightforward cases can be handled directly through official IND guidance or employer-supported processes. EU citizens may not need the same permit support as non-EU nationals for certain types of stay. Some users mainly need document translation, legalisation, or a relocation agency rather than a lawyer. Free legal information may also be available through sources like Juridisch Loket for some issues.",
    ],
    points: [
      "Employer-sponsored work permits with a recognised sponsor and clear eligibility.",
      "Simple short-term or exchange stays where IND information is sufficient.",
      "When you only need documents translated or legalised—use sworn translators and apostille/legalisation services.",
      "When you need relocation logistics (housing, registration) rather than legal representation—consider a relocation agency.",
      "General questions about eligibility—start with IND and Juridisch Loket before engaging a lawyer.",
    ],
  },

  scenarios: [
    {
      id: "foreign-partner",
      title: "Foreign partner moving to the Netherlands",
      summary: "You are a Dutch resident or citizen and want to bring your partner to the Netherlands. Family reunification has specific document and income requirements.",
      whatToConfirm: ["Eligibility (relationship, income, housing)", "Document list (legalisation, translation)", "Processing times"],
      whatToCompare: ["Whether you need a lawyer or can use IND + Juridisch Loket", "Firms that specialise in family migration if you do"],
      commonMistakes: ["Missing document legalisation or translation", "Underestimating income or housing requirements"],
      links: [
        { label: "Juridisch Loket – Bringing your foreign partner", href: "https://www.juridischloket.nl/en/family-and-relationships/foreign-partner-or-family/how-do-i-go-about-the-application-for-bringing-my-foreign-partner-to-the-netherlands/" },
        { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
        { label: "Apostille documents", href: "/netherlands/apostille-documents-netherlands/" },
      ],
    },
    {
      id: "startup-founder",
      title: "Startup founder exploring permit routes",
      summary: "You want to set up an innovative start-up in the Netherlands and need a residence permit. The start-up scheme has specific criteria.",
      whatToConfirm: ["Innovation and feasibility criteria", "Document and business plan requirements", "Whether a lawyer or facilitator is right for you"],
      whatToCompare: ["Firms with start-up visa experience", "Fee structure (fixed vs hourly)"],
      commonMistakes: ["Submitting an incomplete or weak business plan", "Missing legalisation or translation of documents"],
      links: [
        { label: "IND – Start-up", href: "https://ind.nl/en/residence-permits/work/start-up" },
        { label: "Start-up visa (planned guide)", href: "/netherlands/startup-visa-netherlands/" },
      ],
    },
    {
      id: "worker-status-change",
      title: "Worker whose permit situation is changing",
      summary: "You are on a work permit and your job is ending, or you want to change employer or status. Rules depend on permit type and timing.",
      whatToConfirm: ["Notice period and grace period", "Whether you can switch to another permit", "Document requirements for a new application"],
      whatToCompare: ["Lawyers who handle work-permit changes", "Speed of response if time-sensitive"],
      commonMistakes: ["Leaving too late to apply for a new permit", "Assuming you can switch employer without checking"],
      links: [
        { label: "IND – Highly skilled migrant", href: "https://ind.nl/en/residence-permits/work/highly-skilled-migrant" },
        { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      ],
    },
    {
      id: "object-to-ind-decision",
      title: "Person wanting to object to an IND decision",
      summary: "The IND has refused your application or taken a decision you disagree with. You are considering an objection or appeal.",
      whatToConfirm: ["Deadline for objection or appeal", "Grounds and required documents", "Whether you need a lawyer (strongly recommended for most)"],
      whatToCompare: ["Firms that regularly handle IND objections and appeals", "Fees and timeline"],
      commonMistakes: ["Missing the objection or appeal deadline", "Trying to do it alone when the case is complex"],
      links: [
        { label: "IND – Object or appeal a decision", href: "https://ind.nl/en/after-your-application/object-or-appeal-decision" },
      ],
    },
    {
      id: "eu-law-family",
      title: "Parent or family member in a complex EU-law case",
      summary: "Your residence may depend on EU-law rights (e.g. derived rights, Chavez-type situations) or the rights of a child. These cases can be legally complex.",
      whatToConfirm: ["Which EU or national rules apply", "Documentation of family relationship and dependency", "Whether you need specialist EU-law advice"],
      whatToCompare: ["Lawyers with EU free movement and family-law experience", "Juridisch Loket for initial information"],
      commonMistakes: ["Assuming EU citizenship alone is enough without checking conditions", "Missing evidence of dependency where required"],
      links: [
        { label: "Juridisch Loket – Non-EU citizen with Dutch child", href: "https://www.juridischloket.nl/en/family-and-relationships/foreign-partner-or-family/can-i-live-in-the-netherlands-as-a-non-eu-citizen-if-my-dutch-child-lives-here/" },
        { label: "Juridisch Loket – EU citizen", href: "https://www.juridischloket.nl/en/family-and-relationships/foreign-partner-or-family/can-i-live-in-the-netherlands-as-an-eu-citizen/" },
      ],
    },
    {
      id: "naturalization",
      title: "Long-term resident exploring naturalisation",
      summary: "You have lived in the Netherlands for several years and are considering Dutch citizenship. Naturalisation has strict conditions.",
      whatToConfirm: ["Eligibility (years of residence, integration, etc.)", "Document list and any exemptions", "Dual nationality rules"],
      whatToCompare: ["Lawyers who advise on naturalisation", "Cost of full support vs document check only"],
      commonMistakes: ["Applying before meeting the residence requirement", "Missing integration or language evidence"],
      links: [
        { label: "Juridisch Loket – Becoming a Dutch citizen", href: "https://www.juridischloket.nl/en/family-and-relationships/foreign-partner-or-family/how-can-i-become-a-dutch-citizen/" },
        { label: "Dutch citizenship (planned guide)", href: "/netherlands/dutch-citizenship-netherlands/" },
      ],
    },
  ],

  faqs: [
    { q: "Do I need an immigration lawyer to move to the Netherlands?", a: "No. Many people move using official IND guidance, employer support, and document preparation (translation, legalisation) without a lawyer. Lawyers are most useful for complex cases, refusals, objections and appeals, family migration, startup permits, or when you are unsure which route applies." },
    { q: "Can a lawyer represent me before the IND?", a: "Yes. The IND states that if the other person is your lawyer, an authorisation declaration is not necessary. Lawyers can formally represent clients in immigration procedures. The IND also has a Solicitor Portal for lawyers in certain cases (e.g. asylum); this reflects the formal role of lawyers in the system." },
    { q: "When is a lawyer most useful in an immigration case?", a: "When your case is complex, you have been refused and want to object or appeal, you are dealing with family reunification or EU-law issues, you are applying for a startup or entrepreneur permit, or you are unsure which permit or procedure applies. Straightforward employer-sponsored work permits often do not require a lawyer." },
    { q: "Do I need a lawyer for family reunification?", a: "Not always. Many applicants use IND and Juridisch Loket information and prepare documents (including translation and legalisation) themselves. A lawyer is often sought when requirements are unclear, documents are disputed, or the case involves EU-law or divorce consequences." },
    { q: "Do I need a lawyer to object to an IND decision?", a: "Not legally required, but objections and appeals have strict deadlines and procedures. Most people benefit from legal representation when objecting or appealing. The IND publishes information on how to object or appeal." },
    { q: "Can EU citizens need immigration legal support?", a: "Yes. EU citizens and their family members may have rights under EU law, but situations can be complex (e.g. divorce, derived rights, long-term residence). Juridisch Loket and lawyers can help clarify when legal support is useful." },
    { q: "Do startup founders need immigration lawyers?", a: "Not always, but the start-up permit has specific innovation and feasibility criteria. Many founders use a lawyer or recognised facilitator to prepare the application and documents. IND publishes the requirements." },
    { q: "Can a lawyer help with naturalisation?", a: "Yes. Lawyers can advise on eligibility, document preparation, and the procedure. Naturalisation has strict conditions; legal advice can help you prepare correctly." },
    { q: "How much do immigration lawyers cost in the Netherlands?", a: "Costs vary widely by case and firm. Some charge by the hour; others offer fixed-fee packages for standard applications. Objections, appeals, and complex family or startup cases typically cost more. Always request written fee clarity before engaging." },
    { q: "What documents should I prepare before speaking to a lawyer?", a: "Bring any IND correspondence, current permit (if any), passport, and a clear summary of your situation and goal. The lawyer can then tell you what else is needed. Foreign documents may need to be legalised and translated—our document guides explain this." },
    { q: "Can a lawyer also help with legalisation and translation issues?", a: "Lawyers often advise on which documents need legalisation or translation for IND. The actual legalisation (apostille) and sworn translation are usually done by notaries and sworn translators. Our document translation and apostille guides cover these services." },
    { q: "What if I only need general legal information?", a: "Start with official sources: the IND for procedures and Juridisch Loket for general legal information in English. If your situation is straightforward, you may not need to hire a lawyer. If you are unsure, an initial consultation with a lawyer can help you decide." },
  ],

  officialSources: immigrationLawyersOfficialSources,

  relatedGuides: [
    {
      title: "Immigration & residence guides",
      links: [
        { label: "Residence permit (planned)", href: "/netherlands/residence-permit-netherlands/" },
        { label: "MVV (planned)", href: "/netherlands/mvv-netherlands/" },
        { label: "Highly skilled migrant (planned)", href: "/netherlands/highly-skilled-migrant-netherlands/" },
        { label: "Start-up visa (planned)", href: "/netherlands/startup-visa-netherlands/" },
        { label: "Family reunification (planned)", href: "/netherlands/family-reunification-netherlands/" },
        { label: "Dutch citizenship (planned)", href: "/netherlands/dutch-citizenship-netherlands/" },
      ],
    },
    {
      title: "Documents",
      links: [
        { label: "Apostille documents", href: "/netherlands/apostille-documents-netherlands/" },
        { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
        { label: "Document legalization", href: "/netherlands/document-legalization-netherlands/" },
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
        { label: "Immigration & visas", href: "/netherlands/services/immigration-visas/" },
        { label: "Relocation agencies (planned)", href: "/netherlands/services/relocation-agencies/" },
        { label: "Document translation (planned)", href: "/netherlands/services/document-translation/" },
      ],
    },
  ],

  relatedCategories: [
    { label: "Immigration & visas", href: "/netherlands/services/immigration-visas/" },
    { label: "Documents & legal", href: "/netherlands/services/documents-legal/" },
    { label: "Relocation agencies (planned)", href: "/netherlands/services/relocation-agencies/" },
  ],

  tools: [
    { label: "Document Readiness Checker", href: "/netherlands/document-readiness-checker/", description: "Check which documents you need", status: "live" },
    { label: "Visa Timeline Estimator", href: "/netherlands/visa-timeline-estimator/", description: "Estimate visa processing and move timing", status: "live" },
    { label: "Visa Cost Calculator", href: "/netherlands/visa-cost-calculator/", description: "Estimate visa and move costs", status: "live" },
    { label: "Visa Comparison Tool", href: "/netherlands/visa/compare-visas/", description: "Compare visa routes", status: "live" },
    { label: "Relocation Checklist", href: "/netherlands/moving/tools/moving-checklist/", description: "Personalized checklist for your move", status: "live" },
  ],

  disclosure: [
    "This page is for information only and does not constitute legal advice.",
    "Provider comparisons are editorial guidance. We do not recommend a specific lawyer or firm; suitability depends on your case.",
    "Always verify current fees, availability, and case fit directly with the lawyer or firm.",
    "Immigration rules and procedures can change; check official IND and government sources.",
  ],
};
