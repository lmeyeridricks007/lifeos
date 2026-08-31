import type {
  PrChecklistItem,
  PrEligibilityBand,
  PrEligibilityInput,
  PrEligibilityResult,
  PrNextStep,
} from "./types";

const IND_PR =
  "https://ind.nl/en/replace-extend-renew-and-change/permanent-residency/permanent-residence-permit";
const IND_INTEGRATION =
  "https://ind.nl/en/living-in-the-netherlands-with-a-residence-permit/civic-integration-for-more-secure-residence-permit";
const IND_EXCEPTIONS = "https://ind.nl/en/exceptions-to-the-5-year-term-for-permanent-residency";
const IND_EU_LTR =
  "https://ind.nl/en/residence-permits/long-term-eu-residency/apply-for-a-residence-permit-for-long-term-eu-residents";
const DUO = "https://www.inburgeren.nl/en";

function yearsSufficient(input: PrEligibilityInput): boolean {
  return input.residenceYears === "about_five" || input.residenceYears === "over_five";
}

function yearsEarly(input: PrEligibilityInput): boolean {
  return input.residenceYears === "under_3" || input.residenceYears === "three_to_four";
}

function integrationMet(input: PrEligibilityInput): boolean {
  return (
    input.integration === "diploma_a2_or_higher" ||
    input.integration === "wi2021_certificate" ||
    input.integration === "exemption"
  );
}

function buildChecklist(input: PrEligibilityInput): PrChecklistItem[] {
  const items: PrChecklistItem[] = [];

  if (input.permitType === "already_permanent") {
    items.push({
      id: "already-pr",
      label: "You already hold Dutch permanent residence",
      status: "info",
      detail: "This calculator is for planning a first permanent-residence application. Confirm renewals and travel rules on IND.",
    });
  } else if (input.permitType === "eu_long_term") {
    items.push({
      id: "already-eu-ltr",
      label: "You already hold EU long-term resident status",
      status: "info",
      detail: "That is a long-term stay status. Confirm document renewals and mobility rules on IND — you may not need a separate Dutch PR application.",
    });
  }

  if (input.residenceYears === "over_five") {
    items.push({
      id: "years-over-five",
      label: "More than five consecutive years (as you entered)",
      status: "strength",
      detail: "IND often allows applying when you already have more than five years — still confirm consecutive lawful stay and document your timeline.",
    });
  } else if (input.residenceYears === "about_five") {
    items.push({
      id: "years-about-five",
      label: "Around five consecutive years (as you entered)",
      status: "strength",
      detail: "IND commonly looks at at least five consecutive years with a valid residence permit. Verify exceptions and age rules on IND.",
    });
  } else if (input.residenceYears === "three_to_four") {
    items.push({
      id: "years-early",
      label: "Under five years of residence",
      status: "gap",
      detail: "Most applicants need about five consecutive years. Shorter paths are uncommon — check IND exceptions only if you think one applies.",
    });
  } else if (input.residenceYears === "under_3") {
    items.push({
      id: "years-very-early",
      label: "Early in the five-year horizon",
      status: "gap",
      detail: "Focus on keeping your permit lawful and starting integration if PR is a later goal.",
    });
  } else {
    items.push({
      id: "years-unsure",
      label: "Residence length unclear",
      status: "watch",
      detail: "Build a timeline of entry date, each permit type, and renewals before you apply.",
    });
  }

  if (input.continuity === "continuous_on_time") {
    items.push({
      id: "continuity-ok",
      label: "Renewals and continuity look orderly",
      status: "strength",
      detail: "Timely extensions and continuous lawful stay are core IND themes for permanent residence.",
    });
  } else if (input.continuity === "job_search_used") {
    items.push({
      id: "continuity-job-search",
      label: "Job-search / unemployment window used",
      status: "watch",
      detail: "A lawful HSM job-search period can keep stay continuous if rules were followed — keep employer and IND letters. It is not permanent residence itself.",
    });
  } else if (input.continuity === "gaps_or_late") {
    items.push({
      id: "continuity-gaps",
      label: "Gaps or late renewals flagged",
      status: "gap",
      detail: "Periods without a valid permit or late renewals can put the consecutive five-year story at risk. Review with IND guidance or an adviser.",
    });
  } else {
    items.push({
      id: "continuity-unsure",
      label: "Continuity not yet clear",
      status: "watch",
      detail: "Save decision letters, extension dates, and any unemployment notifications before applying.",
    });
  }

  if (input.absences === "none_or_short") {
    items.push({
      id: "absences-ok",
      label: "No long absences flagged",
      status: "strength",
      detail: "Short holidays are normal. Keep a travel log if you had longer trips.",
    });
  } else if (input.absences === "significant_months") {
    items.push({
      id: "absences-long",
      label: "Significant time outside the Netherlands",
      status: "gap",
      detail: "Long absences can affect consecutive residence. Check IND’s exceptions page and document travel dates.",
    });
  } else {
    items.push({
      id: "absences-unsure",
      label: "Absences not yet mapped",
      status: "watch",
      detail: "List trips of more than a few months before you open an IND application.",
    });
  }

  if (input.brpRegistered === "yes") {
    items.push({
      id: "brp-ok",
      label: "BRP registration",
      status: "strength",
      detail: "IND typically expects registration in the Personal Records Database (BRP).",
    });
  } else if (input.brpRegistered === "no") {
    items.push({
      id: "brp-missing",
      label: "Not registered in the BRP",
      status: "gap",
      detail: "Resolve address registration with your municipality before relying on a PR application timeline.",
    });
  } else {
    items.push({
      id: "brp-unsure",
      label: "BRP status unclear",
      status: "watch",
      detail: "Confirm your current BRP address with DigiD / gemeente records.",
    });
  }

  if (integrationMet(input)) {
    items.push({
      id: "integration-ok",
      label: "Integration evidence ready (as entered)",
      status: "strength",
      detail: "IND usually wants civic integration at least at A2, a Wi 2021 certificate, or an accepted exemption / dispensation for a more secure residence permit.",
    });
  } else if (input.integration === "in_progress") {
    items.push({
      id: "integration-progress",
      label: "Integration still in progress",
      status: "gap",
      detail: "Finish DUO exams or confirm an exemption before you treat PR as imminent. Passing exams does not by itself grant PR.",
    });
  } else if (input.integration === "not_started") {
    items.push({
      id: "integration-missing",
      label: "Integration not started",
      status: "gap",
      detail: "Start language / KNM planning early if PR is a goal — especially on HSM routes that may not have had inburgeringsplicht at arrival.",
    });
  } else {
    items.push({
      id: "integration-unsure",
      label: "Integration status unclear",
      status: "watch",
      detail: "Check your IND letter and DUO account; read IND’s civic integration page for secure residence.",
    });
  }

  if (input.permitValid === "yes") {
    items.push({
      id: "permit-valid",
      label: "Current permit still valid",
      status: "strength",
      detail: "IND states your residence permit must still be valid when you apply.",
    });
  } else if (input.permitValid === "expiring_soon") {
    items.push({
      id: "permit-expiring",
      label: "Permit expiring soon",
      status: "watch",
      detail: "IND often allows applying from three months before expiry. Do not let the card lapse without a plan for extension or PR timing.",
    });
  } else if (input.permitValid === "no") {
    items.push({
      id: "permit-invalid",
      label: "No valid permit right now",
      status: "gap",
      detail: "Restore lawful stay before treating permanent residence as the next step. See HSM / layoffs guidance if you lost a sponsor.",
    });
  } else {
    items.push({
      id: "permit-unsure",
      label: "Permit validity unclear",
      status: "watch",
      detail: "Check the end date on your residence document and decision letter.",
    });
  }

  if (input.age18Plus === "no") {
    items.push({
      id: "age-minor",
      label: "Under 18",
      status: "watch",
      detail: "Children follow additional age and residence rules on IND. Do not use adult five-year framing alone.",
    });
  }

  if (input.permitType === "hsm") {
    items.push({
      id: "hsm-note",
      label: "HSM is temporary — not automatic PR",
      status: "info",
      detail: "Lawful HSM years may count toward continuous residence when requirements align, but HSM does not become permanent after five years without a separate IND application.",
    });
  }

  return items;
}

function pickBand(input: PrEligibilityInput, gaps: string[], escalate: boolean): PrEligibilityBand {
  if (input.permitType === "already_permanent" || input.permitType === "eu_long_term") {
    return "already_long_term";
  }
  if (yearsEarly(input)) return "early_planning";
  if (escalate || input.permitValid === "no" || input.continuity === "gaps_or_late") {
    return "needs_careful_review";
  }
  if (yearsSufficient(input) && gaps.length === 0 && input.residenceYears !== "unsure") {
    return "likely_ready_to_verify";
  }
  if (yearsSufficient(input) || input.residenceYears === "unsure") {
    return "close_with_gaps";
  }
  return "needs_careful_review";
}

function bandCopy(band: PrEligibilityBand): Pick<PrEligibilityResult, "headline" | "summary" | "confidenceNote"> {
  switch (band) {
    case "already_long_term":
      return {
        headline: "You already appear to hold long-term status",
        summary:
          "Based on your answers, you already selected Dutch permanent residence or EU long-term resident status. Use IND pages for renewals and travel rules rather than a first-time PR application checklist.",
        confidenceNote: "Orientation only — confirm the label on your residence document and IND letters.",
      };
    case "likely_ready_to_verify":
      return {
        headline: "Signals look strong — verify on IND before you apply",
        summary:
          "Your answers align with common IND themes for permanent residence (roughly five years, continuity, BRP, integration evidence, valid permit). This is not an IND decision. Confirm the full current checklist, fees, and forms on the IND permanent residence page.",
        confidenceNote: "Planning signal only. Complex history, mixed permit types, or family routes can still change the outcome.",
      };
    case "close_with_gaps":
      return {
        headline: "Close — close the gaps before you treat PR as imminent",
        summary:
          "You may be near a typical five-year horizon, but one or more planning gaps still stand out (integration, continuity, absences, BRP, or permit timing). Use the checklist below, then confirm on IND.",
        confidenceNote: "Orientation only — do not book travel or resign based on this tool.",
      };
    case "early_planning":
      return {
        headline: "Early planning — stay lawful and build evidence",
        summary:
          "You are still under a typical five-year continuous-residence horizon (as entered). Keep renewals on time, map absences, and start integration if permanent residence is a later goal — especially on HSM.",
        confidenceNote: "Exceptions to the five-year term exist but are narrow. Check IND’s exceptions page only if you believe one applies.",
      };
    case "needs_careful_review":
      return {
        headline: "Needs careful review — do not treat PR as an emergency bridge",
        summary:
          "Your answers show continuity risks, long absences, an invalid permit, or several unknowns. Permanent residence is a separate IND application — not a substitute for HSM unemployment / job-search rules. Stabilise lawful stay first, then reassess.",
        confidenceNote: "Escalate to IND guidance and, for complex cases, qualified immigration advice.",
      };
  }
}

function buildNextSteps(band: PrEligibilityBand, input: PrEligibilityInput): PrNextStep[] {
  const steps: PrNextStep[] = [
    {
      id: "ind-pr",
      label: "Read the IND permanent residence permit page",
      href: IND_PR,
      external: true,
    },
  ];

  if (!integrationMet(input) && band !== "already_long_term") {
    steps.push({
      id: "ind-integration",
      label: "Check IND civic integration for a more secure residence permit",
      href: IND_INTEGRATION,
      external: true,
    });
    steps.push({
      id: "duo",
      label: "Open DUO / inburgeren.nl for exams",
      href: DUO,
      external: true,
    });
    steps.push({
      id: "inburgering-guide",
      label: "ExpatLife inburgering guide",
      href: "/netherlands/integration/inburgering/",
    });
  }

  if (input.absences === "significant_months" || input.continuity === "gaps_or_late" || yearsEarly(input)) {
    steps.push({
      id: "ind-exceptions",
      label: "IND — Exceptions to the 5-year term",
      href: IND_EXCEPTIONS,
      external: true,
    });
  }

  if (input.permitType === "eu_long_term" || band === "already_long_term") {
    steps.push({
      id: "ind-eu-ltr",
      label: "IND — Long-term EU residents",
      href: IND_EU_LTR,
      external: true,
    });
  }

  steps.push({
    id: "pr-guide",
    label: "ExpatLife permanent residence guide",
    href: "/netherlands/citizenship/permanent-residence/",
  });

  if (input.permitType === "hsm" || input.continuity === "job_search_used" || input.permitValid === "no") {
    steps.push({
      id: "hsm-guide",
      label: "HSM visa guide (job loss / long-term stay)",
      href: "/netherlands/visa/highly-skilled-migrant/",
    });
  }

  steps.push({
    id: "citizenship-guide",
    label: "Dutch citizenship guide (separate from PR)",
    href: "/netherlands/citizenship/dutch-citizenship/",
  });

  return steps;
}

export function calculatePermanentResidenceEligibility(input: PrEligibilityInput): PrEligibilityResult {
  const checklist = buildChecklist(input);
  const strengths = checklist.filter((c) => c.status === "strength").map((c) => c.label);
  const gaps = checklist.filter((c) => c.status === "gap").map((c) => `${c.label}: ${c.detail}`);

  const escalateReasons: string[] = [];
  if (input.continuity === "gaps_or_late") escalateReasons.push("Gaps or late renewals can break consecutive residence.");
  if (input.absences === "significant_months") escalateReasons.push("Long absences need IND-oriented review.");
  if (input.permitValid === "no") escalateReasons.push("No valid permit — restore lawful stay before PR planning.");
  if (input.age18Plus === "no") escalateReasons.push("Minor applicants follow different IND age rules.");
  if (
    [input.residenceYears, input.continuity, input.absences, input.brpRegistered, input.integration, input.permitValid].filter(
      (v) => v === "unsure"
    ).length >= 3
  ) {
    escalateReasons.push("Several answers are unsure — build a document timeline before applying.");
  }

  const escalate = escalateReasons.length > 0;
  const band = pickBand(input, gaps, escalate);
  const copy = bandCopy(band);

  return {
    band,
    ...copy,
    checklist,
    strengths,
    gaps,
    nextSteps: buildNextSteps(band, input),
    escalate,
    escalateReasons,
  };
}
