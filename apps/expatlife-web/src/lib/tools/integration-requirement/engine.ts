import type {
  IntegrationRequirementBand,
  IntegrationRequirementChecklistItem,
  IntegrationRequirementInput,
  IntegrationRequirementNextStep,
  IntegrationRequirementResult,
} from "./types";

const DUO = "https://www.inburgeren.nl/en";
const IND_SECURE =
  "https://ind.nl/en/living-in-the-netherlands-with-a-residence-permit/civic-integration-for-more-secure-residence-permit";
const GOV_INTEGRATION =
  "https://www.government.nl/themes/migration-and-travel/integration-in-the-netherlands/civic-integration-in-the-netherlands";

function wantsSecureResidence(input: IntegrationRequirementInput): boolean {
  return (
    input.goal === "permanent_residence" ||
    input.goal === "citizenship" ||
    input.goal === "both_pr_citizenship"
  );
}

function buildChecklist(input: IntegrationRequirementInput): IntegrationRequirementChecklistItem[] {
  const items: IntegrationRequirementChecklistItem[] = [];

  if (input.residenceBasis === "already_permanent") {
    items.push({
      id: "already-pr",
      label: "You already hold permanent / long-term status (as entered)",
      status: "info",
      detail:
        "Obligation rules for newcomers may not apply the same way. Confirm renewals and any remaining civic-integration evidence on IND / DUO letters.",
    });
  } else if (input.residenceBasis === "hsm") {
    items.push({
      id: "hsm-basis",
      label: "Highly Skilled Migrant / similar temporary work basis",
      status: "info",
      detail:
        "Many HSM holders are not under inburgeringsplicht on the temporary work permit — but that is not automatic for every person. Your IND decision letter is the source of truth.",
    });
  } else if (input.residenceBasis === "family") {
    items.push({
      id: "family-basis",
      label: "Family / partner residence basis",
      status: "watch",
      detail:
        "Family routes more often carry a civic integration obligation. Read your IND letter and follow DUO / gemeente steps if obligated.",
    });
  } else if (input.residenceBasis === "asylum_or_other") {
    items.push({
      id: "asylum-other",
      label: "Asylum or other obligated-leaning route (as entered)",
      status: "watch",
      detail: "Confirm obligation start date, cohort (Wi 2021 vs older), and PIP with your gemeente and DUO.",
    });
  } else {
    items.push({
      id: "basis-unsure",
      label: "Residence basis needs clarification",
      status: "watch",
      detail: "Obligation often depends on permit purpose. Start with your IND decision letter before assuming HSM-style rules.",
    });
  }

  if (input.obligationLetter === "yes_obligated") {
    items.push({
      id: "obligated",
      label: "IND letter indicates inburgeringsplicht",
      status: "gap",
      detail:
        "Follow Wet inburgering rules for your cohort: DUO account, gemeente PIP (Wi 2021), exam booking, and deadlines. Missing deadlines can have consequences.",
    });
  } else if (input.obligationLetter === "no_not_obligated") {
    items.push({
      id: "not-obligated",
      label: "No current civic integration obligation (as you understand it)",
      status: "strength",
      detail:
        "You may still need civic integration proof later for permanent residence or naturalisation. Treat obligation and secure-residence evidence as separate questions.",
    });
  } else {
    items.push({
      id: "obligation-unsure",
      label: "Obligation status unclear",
      status: "gap",
      detail: "Find the civic integration section of your IND decision letter or contact IND / DUO before planning exams as if obligated.",
    });
  }

  if (input.cohort === "wi2021") {
    items.push({
      id: "wi2021",
      label: "Wi 2021 cohort (obligation from 1 Jan 2022 onward)",
      status: "info",
      detail:
        "Gemeente + PIP are central. The common B1-route targets B1 language plus civic components; A2 step-down is not a free starting choice.",
    });
  } else if (input.cohort === "older_wi2013") {
    items.push({
      id: "older-cohort",
      label: "Older / Wi 2013-style cohort (as entered)",
      status: "watch",
      detail: "Exam packaging and A2-focused framing may differ from Wi 2021. Confirm on your DUO letters — do not mix cohort rules.",
    });
  } else if (input.obligationLetter === "yes_obligated") {
    items.push({
      id: "cohort-unsure",
      label: "Cohort (Wi 2021 vs older) not confirmed",
      status: "watch",
      detail: "Your obligation start date decides which Act and exam package apply. Check IND / DUO correspondence.",
    });
  }

  if (wantsSecureResidence(input)) {
    items.push({
      id: "secure-goal",
      label: "Planning permanent residence and/or citizenship",
      status: "info",
      detail:
        "IND usually requires civic integration evidence (often ≥ A2 diploma, Wi 2021 certificate, or recognised exemption) for a more secure residence permit — separate from inburgeringsplicht.",
    });
  }

  if (input.exemptionSignal === "exemption_exploring" || input.exemptionSignal === "dutch_diploma_possible") {
    items.push({
      id: "exemption",
      label: "Possible exemption / diploma pathway flagged",
      status: "watch",
      detail:
        "Exemptions and accepted diplomas are case-specific. Confirm on IND’s civic integration page and DUO — do not assume a forum list applies to you.",
    });
  } else if (input.exemptionSignal === "none_known" && wantsSecureResidence(input)) {
    items.push({
      id: "exams-likely",
      label: "No exemption identified — exams or diploma evidence likely",
      status: "watch",
      detail: "Plan DUO language + KNM (and any route modules) early enough that certificates exist before year-five IND applications.",
    });
  }

  if (input.yearsInNl === "three_plus" && wantsSecureResidence(input) && input.exemptionSignal !== "exemption_exploring") {
    items.push({
      id: "timing",
      label: "Three+ years in NL with a secure-residence goal",
      status: "watch",
      detail: "Start or finish civic integration evidence well before permanent residence or naturalisation booking windows.",
    });
  }

  return items;
}

function pickBand(input: IntegrationRequirementInput, escalate: boolean): IntegrationRequirementBand {
  if (input.residenceBasis === "already_permanent") return "already_secure_status";
  if (input.obligationLetter === "yes_obligated") return "follow_obligation_duo_gemeente";
  if (
    input.exemptionSignal === "exemption_exploring" ||
    input.exemptionSignal === "dutch_diploma_possible"
  ) {
    return "verify_exemption_path";
  }
  if (
    input.obligationLetter === "no_not_obligated" &&
    wantsSecureResidence(input) &&
    (input.residenceBasis === "hsm" || input.residenceBasis === "student_or_temp" || input.residenceBasis === "other")
  ) {
    return "likely_no_obligation_plan_secure";
  }
  if (input.obligationLetter === "no_not_obligated" && wantsSecureResidence(input)) {
    return "secure_residence_proof_needed";
  }
  if (escalate || input.obligationLetter === "unsure") return "needs_careful_review";
  return "needs_careful_review";
}

function bandCopy(
  band: IntegrationRequirementBand
): Pick<IntegrationRequirementResult, "headline" | "summary" | "confidenceNote"> {
  switch (band) {
    case "follow_obligation_duo_gemeente":
      return {
        headline: "Follow your obligation path with DUO and your gemeente",
        summary:
          "Your answers point to an active civic integration obligation. Use inburgeren.nl, your PIP (Wi 2021), and official deadlines — not forum shortcuts. Exam level and modules depend on your cohort and route.",
        confidenceNote: "Orientation only — your IND / DUO letters decide obligation and deadlines.",
      };
    case "likely_no_obligation_plan_secure":
      return {
        headline: "Often no obligation now — still plan secure-residence proof",
        summary:
          "Many HSM / temporary-work profiles are not under inburgeringsplicht today, yet IND usually wants civic integration evidence for permanent residence or naturalisation. Confirm your letter, then plan DUO exams or an exemption path early.",
        confidenceNote: "Not a determination that you are exempt from obligation.",
      };
    case "secure_residence_proof_needed":
      return {
        headline: "Secure-residence integration proof is the planning focus",
        summary:
          "You do not appear obligated under your answers, but your goals still need IND-recognised civic integration evidence. Treat language / KNM certificates (or exemption) as a project before PR or citizenship applications.",
        confidenceNote: "Verify IND’s current evidence list for your application type.",
      };
    case "verify_exemption_path":
      return {
        headline: "Verify diploma / exemption pathways on official pages",
        summary:
          "You flagged a possible exemption or Dutch diploma route. Confirm whether IND / DUO accept that evidence for obligation and/or secure residence — self-labelling an exemption is not enough.",
        confidenceNote: "Policy-sensitive — read IND civic integration and DUO guidance for your facts.",
      };
    case "already_secure_status":
      return {
        headline: "You already hold a long-term status (as entered)",
        summary:
          "Newcomer obligation tools may be less relevant. Confirm any remaining document renewals and whether citizenship still needs civic integration proof.",
        confidenceNote: "Orientation only — check IND for your specific permit.",
      };
    case "needs_careful_review":
      return {
        headline: "Clarify obligation and goals before you book exams",
        summary:
          "Too many unknowns remain (letter, cohort, or goal). Pause exam booking until you know whether you are obligated now and what IND will require later for permanent residence or citizenship.",
        confidenceNote: "This tool surfaces topics — it does not decide your legal duty.",
      };
  }
}

function buildTopics(input: IntegrationRequirementInput, band: IntegrationRequirementBand): string[] {
  const topics = [
    "Whether your IND letter creates inburgeringsplicht",
    "Whether Wi 2021 or an older cohort applies",
    "What civic integration evidence IND needs for PR / citizenship (if that is your goal)",
  ];
  if (band === "follow_obligation_duo_gemeente" || input.cohort === "wi2021") {
    topics.push("Gemeente PIP route (B1 / O-route / Z-route) and exam package");
  }
  if (input.exemptionSignal === "exemption_exploring" || input.exemptionSignal === "dutch_diploma_possible") {
    topics.push("Whether your diploma / exemption ground is accepted for your purpose");
  }
  topics.push("KNM materials current after the 1 July 2025 update (if you take KNM)");
  return topics;
}

function buildNextSteps(
  band: IntegrationRequirementBand,
  input: IntegrationRequirementInput
): IntegrationRequirementNextStep[] {
  const steps: IntegrationRequirementNextStep[] = [
    { id: "duo", label: "DUO — inburgeren.nl", href: DUO, external: true },
    {
      id: "ind-secure",
      label: "IND — Civic integration for a more secure residence permit",
      href: IND_SECURE,
      external: true,
    },
    { id: "gov", label: "Government.nl — Civic integration", href: GOV_INTEGRATION, external: true },
  ];

  steps.push({
    id: "inburgering-guide",
    label: "ExpatLife inburgering guide",
    href: "/netherlands/integration/inburgering/",
  });
  steps.push({
    id: "exam-readiness",
    label: "Inburgering exam readiness checker",
    href: "/netherlands/integration/tools/inburgering-exam-readiness-checker/",
  });

  if (wantsSecureResidence(input) || band === "likely_no_obligation_plan_secure" || band === "secure_residence_proof_needed") {
    steps.push({
      id: "pr-guide",
      label: "Permanent residence guide",
      href: "/netherlands/citizenship/permanent-residence/",
    });
    steps.push({
      id: "pr-calc",
      label: "PR eligibility calculator",
      href: "/netherlands/citizenship/tools/permanent-residence-eligibility-calculator/",
    });
  }

  if (input.goal === "citizenship" || input.goal === "both_pr_citizenship") {
    steps.push({
      id: "citizenship-guide",
      label: "Dutch citizenship guide",
      href: "/netherlands/citizenship/dutch-citizenship/",
    });
  }

  return steps;
}

export function calculateIntegrationRequirement(input: IntegrationRequirementInput): IntegrationRequirementResult {
  const checklist = buildChecklist(input);
  const escalateReasons: string[] = [];

  if (input.obligationLetter === "unsure") {
    escalateReasons.push("Obligation status is unsure — read your IND decision letter first.");
  }
  if (input.obligationLetter === "yes_obligated" && input.cohort === "unsure") {
    escalateReasons.push("You are obligated but the cohort (Wi 2021 vs older) is unclear.");
  }
  if (input.goal === "unsure" && input.obligationLetter === "no_not_obligated") {
    escalateReasons.push("Without a PR/citizenship goal, exam pacing is hard to prioritise.");
  }
  if (
    [input.residenceBasis, input.obligationLetter, input.cohort, input.goal, input.exemptionSignal].filter(
      (v) => v === "unsure"
    ).length >= 3
  ) {
    escalateReasons.push("Several core answers are unsure — clarify before booking a full exam package.");
  }

  const escalate = escalateReasons.length > 0;
  const band = pickBand(input, escalate);
  const copy = bandCopy(band);

  return {
    band,
    ...copy,
    checklist,
    topicsToVerify: buildTopics(input, band),
    nextSteps: buildNextSteps(band, input),
    escalate,
    escalateReasons,
  };
}
