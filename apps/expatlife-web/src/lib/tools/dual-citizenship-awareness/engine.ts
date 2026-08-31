import type {
  DualChecklistItem,
  DualCitizenshipAwarenessInput,
  DualCitizenshipAwarenessResult,
  DualAwarenessBand,
  DualNextStep,
} from "./types";

const IND_NAT =
  "https://ind.nl/en/dutch-citizenship/becoming-a-dutch-national-through-naturalisation";
const IND_OPTION = "https://ind.nl/en/dutch-citizenship/becoming-a-dutch-national-through-option";
const IND_RENOUNCE = "https://ind.nl/en/renouncing-your-nationality";
const GOV_DUAL = "https://www.government.nl/themes/migration-and-travel/dutch-citizenship/dual-citizenship";
const GOV_LOSS =
  "https://www.government.nl/themes/migration-and-travel/dutch-citizenship/loss-of-dutch-citizenship/automatic-loss-of-dutch-citizenship";

function exceptionSignal(input: DualCitizenshipAwarenessInput): boolean {
  return (
    input.possibleException === "married_or_partner_dutch" ||
    input.possibleException === "recognised_refugee" ||
    input.possibleException === "cannot_renounce_home" ||
    input.possibleException === "auto_loss_home" ||
    input.possibleException === "other_listed"
  );
}

function buildChecklist(input: DualCitizenshipAwarenessInput): DualChecklistItem[] {
  const items: DualChecklistItem[] = [];

  if (input.alreadyDutchDual === "yes") {
    items.push({
      id: "already-dual",
      label: "You already hold Dutch + another nationality",
      status: "info",
      detail:
        "This tool is mainly for people considering naturalisation. Dual Dutch citizens still face loss-of-nationality rules when living outside the Kingdom / EU for long periods — check government.nl.",
    });
  }

  if (input.routeFocus === "option_maybe") {
    items.push({
      id: "option-route",
      label: "Option path selected",
      status: "strength",
      detail:
        "IND notes that option usually does not require renouncing your other nationality. Confirm for your specific option category before assuming naturalisation rules apply.",
    });
  } else if (input.routeFocus === "naturalisation") {
    items.push({
      id: "nat-route",
      label: "Naturalisation path (default renunciation rule)",
      status: "watch",
      detail:
        "The Netherlands generally requires renunciation after naturalisation if possible. Exceptions exist but are case-specific — document any ground on the application.",
    });
  } else {
    items.push({
      id: "route-unsure",
      label: "Route not chosen yet",
      status: "watch",
      detail: "Check IND option eligibility before you assume you must renounce under naturalisation rules.",
    });
  }

  if (input.homeCountryRenounce === "forbids_renounce") {
    items.push({
      id: "home-forbids",
      label: "Home country may forbid renunciation",
      status: "watch",
      detail:
        "Inability to renounce can be a Dutch-side exception theme — still verify with IND / government.nl and your home authorities. Do not rely on forum lists.",
    });
  } else if (input.homeCountryRenounce === "auto_loss_on_dutch") {
    items.push({
      id: "home-auto-loss",
      label: "Home nationality may drop automatically on becoming Dutch",
      status: "info",
      detail:
        "If home law strips citizenship when you naturalise elsewhere, you may not keep dual status even when the Netherlands would allow it. Confirm with your embassy.",
    });
  } else if (input.homeCountryRenounce === "allows_renounce") {
    items.push({
      id: "home-allows",
      label: "Home country appears to allow renunciation",
      status: "info",
      detail: "Under naturalisation, you may still be expected to renounce unless a Dutch exception applies. Confirm the process with your embassy after the ceremony if required.",
    });
  } else {
    items.push({
      id: "home-unsure",
      label: "Home-country renunciation rules unclear",
      status: "gap",
      detail: "Ask your embassy / nationality authority whether renunciation is allowed, automatic, or forbidden before you apply.",
    });
  }

  if (exceptionSignal(input)) {
    items.push({
      id: "possible-exception",
      label: "Possible Dutch renunciation exception to document",
      status: "watch",
      detail:
        "Government.nl and IND list specific situations where renunciation may not be required. Bring evidence to the gemeente — exceptions are not automatic from a self-assessment.",
    });
  } else if (input.possibleException === "none_known") {
    items.push({
      id: "no-exception",
      label: "No Dutch-side exception identified (as entered)",
      status: "watch",
      detail: "Plan on the default renunciation requirement for naturalisation unless official pages show otherwise for your facts.",
    });
  } else {
    items.push({
      id: "exception-unsure",
      label: "Exception grounds not yet checked",
      status: "watch",
      detail: "Read government.nl dual citizenship and IND renunciation pages before you book naturalisation.",
    });
  }

  if (input.willingToRenounce === "yes") {
    items.push({
      id: "willing",
      label: "Willing to renounce if required",
      status: "strength",
      detail: "Still complete renunciation after the ceremony when required — failing to try can risk revocation of Dutch nationality.",
    });
  } else if (input.willingToRenounce === "no") {
    items.push({
      id: "not-willing",
      label: "Not willing to renounce",
      status: "gap",
      detail:
        "Naturalisation may be a poor fit unless a recognised exception applies or option is available. Permanent residence can keep stay rights without changing nationality.",
    });
  } else {
    items.push({
      id: "willing-unsure",
      label: "Renunciation willingness undecided",
      status: "watch",
      detail: "Resolve this trade-off before fixing a naturalisation appointment date.",
    });
  }

  if (input.planLiveOutsideNlEuLong === "yes") {
    items.push({
      id: "abroad-long",
      label: "Long stay outside NL / EU planned after becoming Dutch",
      status: "watch",
      detail:
        "Adult dual nationals who live outside the Kingdom and the EU for a long period without renewing a Dutch passport / declaration can lose Dutch nationality automatically in some cases. Read government.nl loss-of-citizenship guidance.",
    });
  }

  if (input.homeMilitaryOrInheritanceConcern === "yes") {
    items.push({
      id: "home-side-effects",
      label: "Home-country military / inheritance / other duties concern",
      status: "watch",
      detail:
        "Even if Dutch law allows dual status in your case, home law may still impose duties or limit rights. Confirm with home authorities — not with this tool.",
    });
  }

  return items;
}

function pickBand(input: DualCitizenshipAwarenessInput, escalate: boolean): DualAwarenessBand {
  if (input.routeFocus === "option_maybe") return "option_may_skip_renunciation";
  if (input.willingToRenounce === "no" && !exceptionSignal(input) && input.routeFocus === "naturalisation") {
    return "prefer_pr_for_now";
  }
  if (exceptionSignal(input)) return "possible_exception_to_document";
  if (
    input.homeCountryRenounce === "forbids_renounce" ||
    input.homeCountryRenounce === "auto_loss_on_dutch" ||
    input.homeMilitaryOrInheritanceConcern === "yes"
  ) {
    return "home_country_friction";
  }
  if (input.routeFocus === "naturalisation" && input.willingToRenounce === "yes" && input.possibleException === "none_known") {
    return "likely_must_renounce";
  }
  if (escalate) return "needs_careful_review";
  return "needs_careful_review";
}

function bandCopy(band: DualAwarenessBand): Pick<DualCitizenshipAwarenessResult, "headline" | "summary" | "confidenceNote"> {
  switch (band) {
    case "option_may_skip_renunciation":
      return {
        headline: "Option may change the dual-nationality picture",
        summary:
          "You indicated option might apply. IND notes option usually does not require renouncing your other nationality. Confirm whether you actually qualify for an option category before using naturalisation renunciation rules.",
        confidenceNote: "Orientation only — option categories are narrow and fact-specific.",
      };
    case "likely_must_renounce":
      return {
        headline: "Plan for renunciation under naturalisation (default rule)",
        summary:
          "Your answers point to the common naturalisation pattern: renounce the other nationality after becoming Dutch if possible. Read IND renunciation steps and government.nl dual citizenship guidance before you apply.",
        confidenceNote: "Not a legal determination. Exceptions and home-country rules can still change the outcome.",
      };
    case "possible_exception_to_document":
      return {
        headline: "Possible exception — document it; do not assume",
        summary:
          "You flagged a situation that sometimes supports keeping another nationality under Dutch rules. Bring evidence to the gemeente and confirm the exact ground on official pages. Self-labelling an exception is not enough.",
        confidenceNote: "Policy-sensitive topic — verify current government.nl / IND lists for your facts.",
      };
    case "home_country_friction":
      return {
        headline: "Home-country rules need equal attention",
        summary:
          "Dutch dual nationality policy is only half the story. Forbidden renunciation, automatic loss, military service, or inheritance rules abroad can still shape what you can keep — even when a Dutch exception exists.",
        confidenceNote: "Confirm with your embassy / home nationality authority as well as IND.",
      };
    case "prefer_pr_for_now":
      return {
        headline: "Naturalisation may not fit if you will not renounce",
        summary:
          "You are not willing to renounce and did not identify a Dutch exception. Permanent residence can stabilise stay rights without changing nationality. Revisit citizenship only if option applies or an exception is confirmed.",
        confidenceNote: "Orientation only — not advice to abandon or pursue citizenship.",
      };
    case "needs_careful_review":
      return {
        headline: "Needs careful dual-nationality review before you apply",
        summary:
          "Too many unknowns, mixed signals, or high-stakes trade-offs remain. Pause naturalisation booking until you have read official dual citizenship / renunciation pages and, for complex cases, spoken to qualified advisers in both countries.",
        confidenceNote: "This tool surfaces topics — it does not decide whether you may hold two passports.",
      };
  }
}

function buildTopics(input: DualCitizenshipAwarenessInput, band: DualAwarenessBand): string[] {
  const topics = [
    "Whether your path is naturalisation or option",
    "Whether Dutch law requires renunciation in your case",
    "Whether your home country allows, forbids, or auto-strips nationality",
  ];
  if (band === "possible_exception_to_document" || exceptionSignal(input)) {
    topics.push("Evidence for any renunciation exception you claim");
  }
  if (input.planLiveOutsideNlEuLong === "yes" || input.alreadyDutchDual === "yes") {
    topics.push("Automatic loss of Dutch nationality after long residence outside NL/EU");
  }
  if (input.homeMilitaryOrInheritanceConcern === "yes") {
    topics.push("Home-country military, inheritance, or civic duties after dual status");
  }
  topics.push("Post-ceremony renunciation steps if you undertook to renounce");
  return topics;
}

function buildNextSteps(band: DualAwarenessBand, input: DualCitizenshipAwarenessInput): DualNextStep[] {
  const steps: DualNextStep[] = [
    { id: "gov-dual", label: "Government.nl — Dual citizenship", href: GOV_DUAL, external: true },
    { id: "ind-renounce", label: "IND — Renouncing your nationality", href: IND_RENOUNCE, external: true },
  ];

  if (band === "option_may_skip_renunciation" || input.routeFocus !== "naturalisation") {
    steps.push({ id: "ind-option", label: "IND — Becoming Dutch through option", href: IND_OPTION, external: true });
  }

  steps.push({ id: "ind-nat", label: "IND — Becoming Dutch through naturalisation", href: IND_NAT, external: true });

  if (input.planLiveOutsideNlEuLong === "yes" || input.alreadyDutchDual === "yes") {
    steps.push({ id: "gov-loss", label: "Government.nl — Automatic loss of Dutch citizenship", href: GOV_LOSS, external: true });
  }

  steps.push({
    id: "citizenship-guide",
    label: "ExpatLife Dutch citizenship guide",
    href: "/netherlands/citizenship/dutch-citizenship/",
  });
  steps.push({
    id: "timeline",
    label: "Citizenship timeline calculator",
    href: "/netherlands/citizenship/tools/dutch-citizenship-timeline-calculator/",
  });

  if (band === "prefer_pr_for_now") {
    steps.push({
      id: "pr-guide",
      label: "Permanent residence guide (stay without changing nationality)",
      href: "/netherlands/citizenship/permanent-residence/",
    });
    steps.push({
      id: "pr-calc",
      label: "PR eligibility calculator",
      href: "/netherlands/citizenship/tools/permanent-residence-eligibility-calculator/",
    });
  }

  return steps;
}

export function calculateDualCitizenshipAwareness(input: DualCitizenshipAwarenessInput): DualCitizenshipAwarenessResult {
  const checklist = buildChecklist(input);

  const escalateReasons: string[] = [];
  if (input.homeCountryRenounce === "unsure" && input.possibleException === "unsure" && input.willingToRenounce === "unsure") {
    escalateReasons.push("Core renunciation answers are all unsure — clarify before applying.");
  }
  if (input.willingToRenounce === "no" && exceptionSignal(input)) {
    escalateReasons.push("You hope to keep another nationality via an exception — document the ground with IND / gemeente.");
  }
  if (input.planLiveOutsideNlEuLong === "yes") {
    escalateReasons.push("Long residence outside NL/EU can interact with dual nationality loss rules.");
  }
  if (input.homeMilitaryOrInheritanceConcern === "yes") {
    escalateReasons.push("Home-country duties may continue even if Dutch law allows dual status.");
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
