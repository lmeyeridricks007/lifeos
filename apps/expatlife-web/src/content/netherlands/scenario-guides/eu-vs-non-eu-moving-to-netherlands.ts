import type { ScenarioGuideContent } from "@/src/lib/scenario-guides/types";

export const euVsNonEuMovingToNetherlands: ScenarioGuideContent = {
  slug: "eu-vs-non-eu-moving-to-netherlands",
  path: "/netherlands/eu-vs-non-eu-moving-to-netherlands/",
  seo: {
    title: "EU vs Non-EU Moving to the Netherlands: The Main Differences to Know",
    description:
      "How does moving to the Netherlands differ for EU/EEA nationals and non-EU nationals? Compare rights, permits, documents, and timelines.",
    canonicalPath: "/netherlands/eu-vs-non-eu-moving-to-netherlands/",
  },
  h1: "EU vs Non-EU Moving to the Netherlands",
  eyebrow: "Comparison guide",
  intro: [
    "The main practical difference when moving to the Netherlands is whether you are an EU or EEA national or a non-EU national. EU/EEA citizens generally have the right to move, work, and register under EU rules; non-EU nationals usually need a specific permit (work, study, family, or other) and often a sponsor.",
    "This page summarises the main differences—not as legal advice, but to help you see what typically applies and where to confirm.",
  ],
  quickAnswer:
    "EU/EEA nationals generally have an easier path: they can move and work with fewer formalities and often face lower document and timeline pressure. Non-EU nationals typically need a residence purpose (work sponsor, study, partner/family) and face more document and timeline complexity. Always confirm with the IND or official sources.",
  dependsOn: [
    "Your nationality (EU/EEA vs rest of world).",
    "Your purpose (work, study, family, etc.).",
    "Whether you have a sponsor (employer, institution, or family).",
  ],
  sections: [
    {
      id: "biggest-differences",
      title: "Biggest practical differences",
      body: [
        "Right to move and work: EU/EEA nationals generally do not need a work permit to take up employment; non-EU nationals usually need a residence permit that ties them to a specific purpose (employer, study, family).",
        "Registration and permits: EU citizens register with the municipality; non-EU nationals typically need an IND permit (or visa) before or shortly after entry, and registration follows that. Document burden and processing times are often higher for non-EU.",
      ],
    },
    {
      id: "before-move-differences",
      title: "Before-move differences",
      body: [
        "EU nationals often only need a valid ID or passport and can plan travel and housing without a prior permit. Non-EU nationals usually need an authorisation or visa before travelling, which means securing a sponsor, admission, or family link and submitting documents in advance. Apostilles and translations are common for non-EU routes.",
      ],
      cta: { label: "Documents needed", href: "/netherlands/documents-needed-to-move-netherlands/" },
    },
    {
      id: "arrival-and-admin",
      title: "Arrival and admin differences",
      body: [
        "After arrival, EU nationals register with the municipality and receive a BSN; they can then access banking, insurance, and employment. Non-EU nationals may already have a permit or must complete permit steps; registration and BSN follow. Employer sponsorship often means the employer has a role in the process; study and family routes have their own sequences.",
      ],
      cta: { label: "BSN registration", href: "/netherlands/bsn-registration/" },
    },
    {
      id: "flexibility-without-job",
      title: "Flexibility without a job",
      body: [
        "EU nationals can often move first and look for work, subject to conditions after a period. Non-EU nationals generally cannot enter as job-seekers; they need a permit based on work (with sponsor), study, family, or another recognised purpose. See our move-without-job page for more.",
      ],
      cta: { label: "Move to the Netherlands without a job", href: "/netherlands/move-to-netherlands-without-job/" },
    },
  ],
  comparisonTable: {
    caption: "General comparison—confirm with official sources for your situation.",
    headers: ["Topic", "EU/EEA nationals", "Non-EU nationals"],
    rows: [
      ["Right to move/work", "Generally easier", "Depends on permit route"],
      ["Need for sponsorship", "Often no", "Often yes or specific route"],
      ["Document complexity", "Lower", "Often higher"],
      ["Timeline sensitivity", "Lower", "Often higher"],
      ["Flexibility without job", "Often higher", "Often lower"],
    ],
  },
  checklist: [
    { label: "Confirm which rules apply to your nationality and purpose." },
    { label: "If non-EU, identify your permit route and sponsor or institution." },
    { label: "Gather documents (passport, civil docs, proof of purpose).", href: "/netherlands/moving/tools/document-readiness/" },
    { label: "Use the Moving Checklist to plan steps and order.", href: "/netherlands/moving/tools/moving-checklist/" },
  ],
  mistakes: [
    {
      title: "Assuming EU and non-EU procedures are the same",
      body: "They are not. Always check the IND and your municipality for the rules that apply to you.",
    },
    {
      title: "Underestimating non-EU document and timeline pressure",
      body: "Permits, apostilles, and translations can take weeks or months. Start early.",
    },
  ],
  faq: [
    {
      q: "Do EU citizens need a visa to move to the Netherlands?",
      a: "EU and EEA nationals generally do not need a visa to enter and live in the Netherlands. They have the right to move and work under EU rules, but must register with the municipality. Confirm current rules with the IND or your gemeente.",
    },
    {
      q: "What are the main differences for non-EU nationals?",
      a: "Non-EU nationals typically need a residence permit (or entry visa) based on a specific purpose—work (often with employer sponsorship), study, family reunion, or other. Document requirements and processing times are usually higher than for EU nationals.",
    },
    {
      q: "Can I switch from a study or work permit later?",
      a: "Permit changes and extensions have their own rules and conditions. Check the IND website or a qualified adviser for your situation.",
    },
  ],
  relatedGuides: [
    { label: "Moving to the Netherlands", href: "/netherlands/moving-to-the-netherlands/", description: "Full relocation guide" },
    { label: "Move without a job", href: "/netherlands/move-to-netherlands-without-job/", description: "When a job is not required" },
    { label: "BSN registration", href: "/netherlands/bsn-registration/", description: "When you get your BSN" },
    { label: "Register address", href: "/netherlands/register-address-netherlands/", description: "Municipality registration" },
    { label: "Moving with family", href: "/netherlands/moving-to-netherlands-with-family/", description: "Family route" },
  ],
  relatedTools: ["moving-checklist", "document-readiness"],
  relatedServices: [],
};
