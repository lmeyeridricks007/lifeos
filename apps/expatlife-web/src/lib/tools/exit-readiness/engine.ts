import type {
  ExitChecklistItem,
  ExitItemStatus,
  ExitNextStep,
  ExitReadinessBand,
  ExitReadinessInput,
  ExitReadinessResult,
} from "./types";

const LEAVING_TAX = "/netherlands/taxes/leaving-netherlands-tax/";
const BELASTINGDIENST = "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals";
const TOESLAGEN = "https://www.belastingdienst.nl/wps/wcm/connect/en/benefits";

function statusTone(status: ExitItemStatus, critical: boolean): ExitChecklistItem["status"] {
  if (status === "done_or_planned") return "strength";
  if (status === "not_applicable") return "info";
  if (status === "not_started") return critical ? "gap" : "watch";
  return "watch";
}

function buildChecklist(input: ExitReadinessInput): ExitChecklistItem[] {
  return [
    {
      id: "timing",
      label: "Departure timing",
      status:
        input.departureTiming === "within_1_month"
          ? "watch"
          : input.departureTiming === "unsure"
            ? "watch"
            : "info",
      detail:
        input.departureTiming === "within_1_month"
          ? "Less than a month left — prioritise municipality deregistration, insurance, and tax records now."
          : input.departureTiming === "one_to_three_months"
            ? "1–3 months is a workable window if you sequence housing, municipality, and tax file early."
            : input.departureTiming === "later"
              ? "More time helps — still start leases, toeslagen, and payroll conversations early."
              : "Confirm a target departure month so deregistration and contract end dates can align.",
    },
    {
      id: "deregister",
      label: "Municipality deregistration (BRP)",
      status: statusTone(input.municipalityDeregistration, true),
      detail:
        "Many residents deregister when leaving. Keep confirmation of date and destination — it often becomes the official departure trail for tax, benefits, and healthcare.",
    },
    {
      id: "housing",
      label: "Housing / lease close-out",
      status: statusTone(input.housingLease, true),
      detail: "Align lease end, inspection, deposit return, and deregistration dates. Keep termination letters.",
    },
    {
      id: "health",
      label: "Dutch health insurance",
      status: statusTone(input.healthInsurance, true),
      detail: "Notify your insurer about leaving. Policy ending often ties to deregistration — arrange destination coverage before you travel.",
    },
    {
      id: "toeslagen",
      label: "Toeslagen / allowances",
      status: statusTone(input.toeslagen, false),
      detail: "Update or stop healthcare, rent, or childcare allowances when residence or income changes. Keep Toeslagen messages.",
    },
    {
      id: "payroll",
      label: "Employer / payroll exit",
      status: statusTone(input.employerPayroll, false),
      detail: "Plan final payslips, jaaropgaaf timing, and any bonus paid after you leave. Save contracts and withholding statements.",
    },
    {
      id: "tax",
      label: "Tax records / leaving-year file",
      status: statusTone(input.taxRecords, true),
      detail: "Build a file: payslips, jaaropgaaf, deregistration proof, foreign income records. Read the leaving-NL tax guide for M-form / residency orientation.",
    },
    {
      id: "bank",
      label: "Bank, subscriptions, contracts",
      status: statusTone(input.bankContracts, false),
      detail: "Close or keep accounts deliberately. Cancel or transfer phone, utilities, gym, and other recurring contracts.",
    },
    {
      id: "destination",
      label: "Destination registration / arrival admin",
      status: statusTone(input.destinationRegistration, false),
      detail: "Know what the next country needs (address, tax ID, insurance). Leaving NL cleanly is only half the move.",
    },
  ];
}

function countGaps(checklist: ExitChecklistItem[]): { gaps: number; watches: number; strengths: number } {
  return {
    gaps: checklist.filter((i) => i.status === "gap").length,
    watches: checklist.filter((i) => i.status === "watch").length,
    strengths: checklist.filter((i) => i.status === "strength").length,
  };
}

function pickBand(input: ExitReadinessInput, checklist: ExitChecklistItem[], escalate: boolean): ExitReadinessBand {
  const { gaps, watches, strengths } = countGaps(checklist);
  if (escalate && input.departureTiming === "within_1_month" && gaps >= 2) return "needs_careful_review";
  if (gaps === 0 && watches <= 2 && strengths >= 4) return "largely_ready";
  if (gaps <= 2 && strengths >= 2) return "close_with_gaps";
  if (strengths <= 1 && gaps >= 3) return "early_planning";
  if (escalate) return "needs_careful_review";
  return "early_planning";
}

function bandCopy(band: ExitReadinessBand): Pick<ExitReadinessResult, "headline" | "summary" | "confidenceNote"> {
  switch (band) {
    case "largely_ready":
      return {
        headline: "Exit admin looks largely sequenced",
        summary:
          "Most critical leaving topics are done or planned. Finish remaining watches, keep deregistration and tax records, and confirm destination coverage before you travel.",
        confidenceNote: "Orientation checklist only — not legal, tax, or immigration advice.",
      };
    case "close_with_gaps":
      return {
        headline: "Close — prioritise the remaining gaps",
        summary:
          "You have a workable base, but a few items still need action. Focus on municipality deregistration, insurance, and your leaving-year tax file before departure week.",
        confidenceNote: "Use official portals for deadlines that apply to your case.",
      };
    case "early_planning":
      return {
        headline: "Early planning — build an exit sequence",
        summary:
          "Several closure steps are not started. Work backward from your target departure: housing notice, gemeente appointment, insurer, toeslagen, payroll, then tax records.",
        confidenceNote: "Start with the leaving-NL tax guide for residency and filing orientation.",
      };
    case "needs_careful_review":
      return {
        headline: "Needs careful exit review before you leave",
        summary:
          "Timing is tight or too many critical items are open/unclear. Pause non-essential packing tasks and lock deregistration, insurance, and tax evidence first — seek qualified help if facts overlap.",
        confidenceNote: "This tool surfaces topics — it does not clear you to leave.",
      };
  }
}

function pendingActions(checklist: ExitChecklistItem[]): string[] {
  return checklist.filter((i) => i.status === "gap" || i.status === "watch").map((i) => i.label);
}

function buildNextSteps(band: ExitReadinessBand): ExitNextStep[] {
  const steps: ExitNextStep[] = [
    { id: "leaving-tax", label: "ExpatLife — Taxes when leaving the Netherlands", href: LEAVING_TAX },
    { id: "belastingdienst", label: "Belastingdienst (individuals)", href: BELASTINGDIENST, external: true },
    { id: "toeslagen", label: "Belastingdienst — Benefits / toeslagen", href: TOESLAGEN, external: true },
    {
      id: "repatriation",
      label: "Repatriation cost calculator",
      href: "/netherlands/leaving/tools/repatriation-cost-calculator/",
    },
  ];
  if (band === "early_planning" || band === "needs_careful_review") {
    steps.push({
      id: "extensions",
      label: "Extensions and changes (if plans shift)",
      href: "/netherlands/moving/extensions-changes/",
    });
  }
  return steps;
}

export function calculateExitReadiness(input: ExitReadinessInput): ExitReadinessResult {
  const checklist = buildChecklist(input);
  const escalateReasons: string[] = [];

  if (input.departureTiming === "within_1_month") {
    escalateReasons.push("Departure within about a month — critical admin should already be booked.");
  }
  if (input.municipalityDeregistration === "not_started" || input.municipalityDeregistration === "unsure") {
    escalateReasons.push("Municipality deregistration is not confirmed.");
  }
  if (input.taxRecords === "not_started" || input.taxRecords === "unsure") {
    escalateReasons.push("Leaving-year tax records are not ready.");
  }
  if (
    [input.municipalityDeregistration, input.healthInsurance, input.taxRecords, input.housingLease].filter(
      (s) => s === "unsure"
    ).length >= 3
  ) {
    escalateReasons.push("Several critical answers are unsure — clarify before travel week.");
  }

  const escalate = escalateReasons.length > 0;
  const band = pickBand(input, checklist, escalate);
  const copy = bandCopy(band);

  return {
    band,
    ...copy,
    checklist,
    pendingActions: pendingActions(checklist),
    nextSteps: buildNextSteps(band),
    escalate,
    escalateReasons,
  };
}
