import type {
  CitizenshipNextStep,
  CitizenshipTimelineBand,
  CitizenshipTimelineInput,
  CitizenshipTimelineResult,
  TimelineMilestone,
} from "./types";

const IND_NAT =
  "https://ind.nl/en/dutch-citizenship/becoming-a-dutch-national-through-naturalisation";
const IND_OPTION = "https://ind.nl/en/dutch-citizenship/becoming-a-dutch-national-through-option";
const IND_INTEGRATION = "https://ind.nl/en/civic-integration-for-naturalisation";
const IND_EXCEPTIONS = "https://ind.nl/en/exceptions-to-the-5-year-term-for-naturalisation-in-the-netherlands";
const IND_RENOUNCE = "https://ind.nl/en/renouncing-your-nationality";
const GOV_DUAL = "https://www.government.nl/themes/migration-and-travel/dutch-citizenship/dual-citizenship";
const DUO = "https://www.inburgeren.nl/en";

function yearsSufficient(input: CitizenshipTimelineInput): boolean {
  return input.residenceYears === "about_five" || input.residenceYears === "over_five";
}

function yearsEarly(input: CitizenshipTimelineInput): boolean {
  return input.residenceYears === "under_3" || input.residenceYears === "three_to_four";
}

function integrationMet(input: CitizenshipTimelineInput): boolean {
  return (
    input.integration === "diploma_a2_or_higher" ||
    input.integration === "wi2021_certificate" ||
    input.integration === "exemption"
  );
}

function parseStartMonth(value: string): Date | null {
  const trimmed = value.trim();
  if (!/^\d{4}-\d{2}$/.test(trimmed)) return null;
  const [y, m] = trimmed.split("-").map(Number);
  if (!y || !m || m < 1 || m > 12) return null;
  return new Date(Date.UTC(y, m - 1, 1));
}

function monthsUntilFiveYears(start: Date, now = new Date()): number {
  const fiveYear = new Date(Date.UTC(start.getUTCFullYear() + 5, start.getUTCMonth(), 1));
  const months =
    (fiveYear.getUTCFullYear() - now.getUTCFullYear()) * 12 + (fiveYear.getUTCMonth() - now.getUTCMonth());
  return months;
}

function earliestApplyWindow(input: CitizenshipTimelineInput): string {
  if (input.routeFocus === "option_maybe") {
    return "If you qualify for option, timing is driven by that category — not the usual five-year naturalisation clock. Confirm on the IND option page first.";
  }
  if (input.residenceYears === "over_five") {
    return "Residence length (as entered) already looks past a typical five-year naturalisation horizon — confirm consecutive lawful stay on IND before booking the gemeente.";
  }
  if (input.residenceYears === "about_five") {
    return "You may be near a typical five-year naturalisation window. IND also publishes shorter-path exceptions — verify before assuming you must wait.";
  }

  const start = parseStartMonth(input.residenceStartMonth);
  if (start) {
    const months = monthsUntilFiveYears(start);
    if (months <= 0) {
      return "Based on your start month, a typical five-year horizon may already be reachable — still verify consecutive lawful stay and permit type on IND.";
    }
    if (months <= 6) {
      return `Rough orientation: about ${months} month${months === 1 ? "" : "s"} until a typical five-year mark from your start month (not an IND decision).`;
    }
    if (months <= 24) {
      return `Rough orientation: about ${months} months until a typical five-year mark from your start month. Use that time for integration and document prep.`;
    }
    return `Rough orientation: about ${Math.round(months / 12)} years until a typical five-year mark from your start month. Plan integration early if naturalisation is the goal.`;
  }

  if (input.residenceYears === "three_to_four") {
    return "Rough orientation: often about 1–2 years remaining on a typical five-year naturalisation horizon — confirm your exact dates.";
  }
  if (input.residenceYears === "under_3") {
    return "Rough orientation: usually several years remain before a typical five-year naturalisation horizon.";
  }
  return "Add a residence start month or clearer year band to refine the horizon — then confirm on IND.";
}

function buildMilestones(input: CitizenshipTimelineInput): TimelineMilestone[] {
  const milestones: TimelineMilestone[] = [];

  if (input.routeFocus === "option_maybe" || input.routeFocus === "unsure") {
    milestones.push({
      id: "check-option",
      label: "Check whether option applies",
      timingLabel: "Do this first",
      status: "next",
      detail:
        "Option is faster for specific legal categories and usually skips integration proof and renunciation. Do not assume years alone qualify you.",
    });
  }

  if (yearsEarly(input)) {
    milestones.push({
      id: "keep-lawful",
      label: "Keep residence continuous and lawful",
      timingLabel: "Ongoing",
      status: "next",
      detail: "Timely renewals and valid stay underpin both PR and naturalisation timelines.",
    });
  } else if (yearsSufficient(input)) {
    milestones.push({
      id: "residence-horizon",
      label: "Residence length near / past typical five-year mark",
      timingLabel: "As entered",
      status: "done",
      detail: "Still verify consecutive years, absences, and eligible residence purpose on IND.",
    });
  } else {
    milestones.push({
      id: "map-dates",
      label: "Map permit start / renewal dates",
      timingLabel: "This week",
      status: "next",
      detail: "Build a simple timeline before estimating any application month.",
    });
  }

  if (input.routeFocus !== "option_maybe") {
    if (integrationMet(input)) {
      milestones.push({
        id: "integration-ready",
        label: "Integration evidence ready (as entered)",
        timingLabel: "Ready",
        status: "done",
        detail: "Naturalisation usually needs civic integration at least at A2 or an IND-recognised exemption.",
      });
    } else if (input.integration === "in_progress") {
      milestones.push({
        id: "finish-integration",
        label: "Finish civic integration exams / exemption file",
        timingLabel: "Before gemeente appointment",
        status: "blocker",
        detail: "Book DUO exams early — waiting times can slip a naturalisation appointment.",
      });
    } else {
      milestones.push({
        id: "start-integration",
        label: "Start civic integration planning",
        timingLabel: "Soon",
        status: "blocker",
        detail: "Passing inburgering does not make you Dutch by itself, but it usually unlocks the naturalisation integration condition.",
      });
    }
  }

  if (input.longTermStatus === "dutch_pr" || input.longTermStatus === "eu_ltr") {
    milestones.push({
      id: "long-term-status",
      label: "Long-term residence status already held",
      timingLabel: "Helpful context",
      status: "done",
      detail: "PR / EU long-term resident status can support the residence-purpose picture for naturalisation — confirm on IND for your document type.",
    });
  } else if (input.longTermStatus === "none" && yearsSufficient(input)) {
    milestones.push({
      id: "consider-pr",
      label: "Consider permanent residence as a parallel track",
      timingLabel: "Optional stabiliser",
      status: "info",
      detail: "Many people secure PR first, then naturalise later. Citizenship is separate and optional.",
    });
  }

  if (input.routeFocus !== "option_maybe") {
    if (input.renunciation === "willing" || input.renunciation === "possible_exception") {
      milestones.push({
        id: "renunciation-stance",
        label:
          input.renunciation === "willing"
            ? "Prepared to renounce other nationality (if required)"
            : "Possible renunciation exception to verify",
        timingLabel: "Before you apply",
        status: input.renunciation === "willing" ? "done" : "next",
        detail: "Naturalisation usually requires renunciation unless an exception applies. Check Dutch and home-country rules.",
      });
    } else if (input.renunciation === "not_ready") {
      milestones.push({
        id: "renunciation-blocker",
        label: "Renunciation not resolved",
        timingLabel: "Decision gate",
        status: "blocker",
        detail: "Pause naturalisation planning until you understand renunciation / dual nationality trade-offs — or check option eligibility.",
      });
    } else {
      milestones.push({
        id: "renunciation-review",
        label: "Review dual nationality / renunciation",
        timingLabel: "Before gemeente booking",
        status: "next",
        detail: "Read government.nl dual citizenship and IND renunciation pages before you apply.",
      });
    }
  }

  milestones.push({
    id: "gemeente-apply",
    label: "Apply at your municipality (gemeente)",
    timingLabel: yearsSufficient(input) && integrationMet(input) ? "When documents ready" : "After prep milestones",
    status: yearsSufficient(input) && (input.routeFocus === "option_maybe" || integrationMet(input)) ? "next" : "later",
    detail: "Naturalisation and option applications start at the gemeente. IND assesses naturalisation after the file is forwarded.",
  });

  milestones.push({
    id: "ind-decision",
    label: "IND decision period (orientation)",
    timingLabel: "Often up to ~12 months after application (confirm on IND)",
    status: "later",
    detail: "A positive decision is not Dutch nationality yet — the King / Royal Decree and ceremony still follow.",
  });

  milestones.push({
    id: "ceremony",
    label: "Naturalisation ceremony + declaration of solidarity",
    timingLabel: "Within the deadline after a positive decision (often within 1 year)",
    status: "later",
    detail: "You become Dutch only after attending the ceremony. Then apply for a Dutch passport and complete renunciation if required.",
  });

  if (input.continuity === "gaps_or_late") {
    milestones.push({
      id: "continuity-risk",
      label: "Resolve continuity / gap questions",
      timingLabel: "Before estimating apply month",
      status: "blocker",
      detail: "Gaps or late renewals can put consecutive residence at risk for naturalisation.",
    });
  }

  if (input.age18Plus === "no") {
    milestones.push({
      id: "minor-rules",
      label: "Check minor / child rules",
      timingLabel: "Special case",
      status: "info",
      detail: "Children follow additional age and consent rules. Do not use adult five-year framing alone.",
    });
  }

  return milestones;
}

function pickBand(input: CitizenshipTimelineInput, gaps: string[], escalate: boolean): CitizenshipTimelineBand {
  if (input.routeFocus === "option_maybe") return "option_check_first";
  if (escalate || input.continuity === "gaps_or_late" || input.renunciation === "not_ready") {
    return "needs_careful_review";
  }
  if (yearsEarly(input)) return "early_planning";
  if (yearsSufficient(input) && gaps.length === 0 && input.residenceYears !== "unsure") {
    return "likely_ready_to_book_gemeente";
  }
  return "prep_milestones";
}

function bandCopy(band: CitizenshipTimelineBand): Pick<CitizenshipTimelineResult, "headline" | "summary" | "confidenceNote"> {
  switch (band) {
    case "option_check_first":
      return {
        headline: "Check option before you assume naturalisation timing",
        summary:
          "You indicated option might apply. Option timing and requirements differ from the usual five-year naturalisation path — and often skip integration proof and renunciation. Confirm eligibility on IND first.",
        confidenceNote: "Orientation only — option categories are narrow and fact-specific.",
      };
    case "early_planning":
      return {
        headline: "Early citizenship timeline — build evidence while you wait",
        summary:
          "You are still under a typical five-year naturalisation horizon (as entered). Keep stay lawful, finish or start integration, and decide renunciation trade-offs before you treat an application month as realistic.",
        confidenceNote: "Shorter naturalisation paths exist in listed IND exceptions — verify only if you think one applies.",
      };
    case "prep_milestones":
      return {
        headline: "Prep milestones before you book the gemeente",
        summary:
          "Residence length may be close, but integration, renunciation, continuity, or document gaps still shape the real timeline. Use the milestone list, then confirm on IND.",
        confidenceNote: "This is a planning sequence, not a promise of IND decision speed.",
      };
    case "likely_ready_to_book_gemeente":
      return {
        headline: "Signals look strong — book the gemeente only after IND checklist review",
        summary:
          "Your answers align with common naturalisation prep themes (residence horizon, integration evidence, renunciation stance). Still confirm residence purpose, documents, fees, and dual nationality rules on official pages before you apply.",
        confidenceNote: "Not an IND decision. Complex histories can change timing and outcomes.",
      };
    case "needs_careful_review":
      return {
        headline: "Needs careful review before you fix an application date",
        summary:
          "Continuity risks, unresolved renunciation, or several unknowns make a fixed citizenship timeline unreliable. Stabilise facts (and consider whether option or permanent residence fits better) before booking.",
        confidenceNote: "Escalate to IND guidance and qualified nationality advice for complex cases.",
      };
  }
}

function buildNextSteps(band: CitizenshipTimelineBand, input: CitizenshipTimelineInput): CitizenshipNextStep[] {
  const steps: CitizenshipNextStep[] = [];

  if (band === "option_check_first" || input.routeFocus === "unsure") {
    steps.push({ id: "ind-option", label: "IND — Becoming Dutch through option", href: IND_OPTION, external: true });
  }

  steps.push({ id: "ind-nat", label: "IND — Becoming Dutch through naturalisation", href: IND_NAT, external: true });

  if (!integrationMet(input) && input.routeFocus !== "option_maybe") {
    steps.push({ id: "ind-int", label: "IND — Civic integration for naturalisation", href: IND_INTEGRATION, external: true });
    steps.push({ id: "duo", label: "DUO — inburgeren.nl", href: DUO, external: true });
    steps.push({ id: "inburgering", label: "ExpatLife inburgering guide", href: "/netherlands/integration/inburgering/" });
  }

  if (input.renunciation !== "willing") {
    steps.push({ id: "gov-dual", label: "Government.nl — Dual citizenship", href: GOV_DUAL, external: true });
    steps.push({ id: "ind-renounce", label: "IND — Renouncing your nationality", href: IND_RENOUNCE, external: true });
    steps.push({
      id: "dual-tool",
      label: "Dual citizenship awareness tool",
      href: "/netherlands/citizenship/tools/dual-citizenship-awareness-tool/",
    });
  }

  if (yearsEarly(input) || input.continuity === "gaps_or_late") {
    steps.push({
      id: "ind-exceptions",
      label: "IND — Exceptions to the 5-year term (naturalisation)",
      href: IND_EXCEPTIONS,
      external: true,
    });
  }

  steps.push({
    id: "citizenship-guide",
    label: "ExpatLife Dutch citizenship guide",
    href: "/netherlands/citizenship/dutch-citizenship/",
  });
  steps.push({
    id: "pr-guide",
    label: "Permanent residence guide (separate status)",
    href: "/netherlands/citizenship/permanent-residence/",
  });
  steps.push({
    id: "pr-calc",
    label: "PR eligibility calculator",
    href: "/netherlands/citizenship/tools/permanent-residence-eligibility-calculator/",
  });

  return steps;
}

export function calculateDutchCitizenshipTimeline(input: CitizenshipTimelineInput): CitizenshipTimelineResult {
  const milestones = buildMilestones(input);
  const gaps = milestones.filter((m) => m.status === "blocker").map((m) => `${m.label}: ${m.detail}`);

  const escalateReasons: string[] = [];
  if (input.continuity === "gaps_or_late") escalateReasons.push("Gaps or late renewals can break consecutive residence.");
  if (input.renunciation === "not_ready") escalateReasons.push("Renunciation / dual nationality trade-offs are unresolved.");
  if (input.age18Plus === "no") escalateReasons.push("Minor applicants follow different IND rules.");
  if (
    [input.residenceYears, input.continuity, input.integration, input.renunciation, input.longTermStatus].filter((v) => v === "unsure")
      .length >= 3
  ) {
    escalateReasons.push("Several answers are unsure — clarify dates and documents before fixing an apply month.");
  }

  const escalate = escalateReasons.length > 0;
  const band = pickBand(input, gaps, escalate);
  const copy = bandCopy(band);

  return {
    band,
    ...copy,
    earliestApplyWindow: earliestApplyWindow(input),
    decisionPeriodNote:
      "After you apply, IND commonly describes a naturalisation decision period of up to 12 months (confirm current figures on IND). Ceremony timing comes after a positive decision.",
    milestones,
    gaps,
    nextSteps: buildNextSteps(band, input),
    escalate,
    escalateReasons,
  };
}
