import type { ScenarioGuideContent } from "@/src/lib/scenario-guides/types";

export const movingToNetherlandsWithFamily: ScenarioGuideContent = {
  slug: "moving-to-netherlands-with-family",
  path: "/netherlands/moving-to-netherlands-with-family/",
  seo: {
    title: "Moving to the Netherlands With Family: Documents, Housing, and What to Prepare",
    description:
      "Relocating to the Netherlands with a partner or children? Plan documents, housing, school and childcare, and registration. Practical checklist and guides.",
    canonicalPath: "/netherlands/moving-to-netherlands-with-family/",
  },
  h1: "Moving to the Netherlands With Family",
  eyebrow: "Family relocation",
  intro: [
    "Moving to the Netherlands with a partner or children adds extra planning: more documents, housing that fits the whole family, and often school or childcare. This page summarises what usually changes when you move as a family and points you to detailed guides and tools.",
    "Whether one partner arrives first or you all move together, having a clear list of documents and steps helps avoid delays and stress.",
  ],
  quickAnswer:
    "When moving with family, you typically need passports and civil documents for everyone (birth certificates, marriage or partnership proof), housing where you can all register, and—if applicable—school or childcare research. Registration order and permit rules can depend on who is the main applicant; confirm with the IND and your municipality.",
  dependsOn: [
    "Who is the main permit holder (work, study, or family reunion).",
    "Whether the family moves together or in stages.",
    "Ages of children and need for school or childcare.",
    "Housing that allows registration for the whole household.",
  ],
  sections: [
    {
      id: "extra-planning-areas",
      title: "Extra planning areas for partner and children",
      body: [
        "Documents: each family member typically needs a valid passport; you may need birth certificates, marriage or partnership certificates, and proof of relationship for the IND or municipality.",
        "Housing: you need a place where everyone can be registered. Landlords may ask for higher deposits or proof of income for larger households. Temporary housing that allows registration can bridge the gap until you find a long-term rental.",
      ],
      bullets: [
        "Passports for all.",
        "Birth certificates (and apostilles/translations if required).",
        "Marriage certificate or partnership proof if relevant.",
        "School records or enrolment documents if relevant.",
        "Housing suited for registration for the whole family.",
        "Budget for larger deposits and setup.",
        "Childcare or school research.",
        "Healthcare awareness for the family.",
      ],
      cta: { label: "Moving with partner", href: "/netherlands/moving-to-netherlands-with-partner/" },
    },
    {
      id: "registration-sequencing",
      title: "Registration sequencing",
      body: [
        "Usually the main applicant registers first; dependants are then added to the same address. Some permit types require the sponsor to already be registered and to meet income or housing requirements. Check the IND and your gemeente for the order that applies to you.",
      ],
      scenarios: [
        {
          title: "Partner joining later",
          body: "You may need to show address, permit timing, and relationship proof. The partner’s application often depends on your registration and possibly income—confirm with the IND.",
        },
        {
          title: "Children moving now",
          body: "Plan for school or childcare, civil records (birth certificates), and registration at the same address. Some schools have waiting lists; research early.",
        },
        {
          title: "One-income move",
          body: "Budget and housing pressure can be higher. Landlords often want proof of income or a larger deposit. A clear document pack and timeline help.",
        },
      ],
      cta: { label: "Moving with kids", href: "/netherlands/moving-to-netherlands-with-kids/" },
    },
    {
      id: "family-documents",
      title: "Family documents to gather",
      body: [
        "Gather originals and copies: passports, birth certificates (with apostille/translation if required), marriage or partnership certificate, and any custody or adoption papers if relevant. The IND and municipality will specify exactly what they need for your situation.",
      ],
      cta: { label: "Document Readiness tool", href: "/netherlands/moving/tools/document-readiness/" },
    },
  ],
  comparisonTable: {
    caption: "Family situations and extra planning.",
    headers: ["Family situation", "Extra planning needed"],
    rows: [
      ["Partner joining later", "Address + permit timing + proof docs"],
      ["Children moving now", "School / childcare / civil records"],
      ["One-income move", "Budget + housing pressure"],
      ["Long-haul family move", "Travel + shipping + documentation lead time"],
    ],
  },
  checklist: [
    { label: "Passports and civil documents for all family members." },
    { label: "Marriage or partnership proof if applicable.", href: "/netherlands/documents-needed-to-move-netherlands/" },
    { label: "Housing where everyone can register." },
    { label: "School or childcare research if relevant.", href: "/netherlands/moving-to-netherlands-with-kids/" },
    { label: "Use the Document Readiness and Moving Checklist tools.", href: "/netherlands/moving/tools/moving-checklist/" },
  ],
  mistakes: [
    {
      title: "Assuming one document set is enough",
      body: "Each person may need their own documents (passport, birth certificate). Relationship proof is often required for partner and family routes.",
    },
    {
      title: "Leaving school or childcare to the last minute",
      body: "Some schools and childcare providers have waiting lists. Research options and enrolment requirements early.",
    },
  ],
  faq: [
    {
      q: "What documents do I need to move to the Netherlands with my family?",
      a: "Typically passports for everyone, birth certificates, and marriage or partnership certificate if applicable. The IND and your municipality may require apostilles or translations. Use the Document Readiness tool and confirm with official sources.",
    },
    {
      q: "Can my partner and children register at the same address?",
      a: "Yes, usually. The main applicant registers first; dependants are added to the same address. Permit and income rules depend on your route—check the IND and your gemeente.",
    },
    {
      q: "What if one partner arrives first?",
      a: "The first partner often secures the address and registers; the other follows under family reunion or dependant rules. You will need to show relationship, housing, and sometimes income. Confirm timing and documents with the IND.",
    },
  ],
  relatedGuides: [
    { label: "Moving to the Netherlands", href: "/netherlands/moving-to-the-netherlands/", description: "Full guide" },
    { label: "Moving with partner", href: "/netherlands/moving-to-netherlands-with-partner/", description: "Partner-specific planning" },
    { label: "Moving with kids", href: "/netherlands/moving-to-netherlands-with-kids/", description: "Children and school" },
    { label: "BSN registration", href: "/netherlands/bsn-registration/", description: "When you get your BSN" },
    { label: "First 90 days", href: "/netherlands/first-90-days-netherlands/", description: "After arrival" },
  ],
  relatedTools: ["moving-checklist", "document-readiness", "first-90-days"],
  relatedServices: [
    { name: "Temporary housing", description: "Family-friendly short-term rentals; confirm whether you can register your address." },
  ],
};
