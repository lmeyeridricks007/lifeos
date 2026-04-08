/** Short help copy for the childcare estimator UI (planning context, not legal advice). */
export const CHILDCARE_TIPS = {
  careTypeDaycare:
    "Daycare (kinderdagverblijf / dagopvang): licensed centre care, typical for babies and toddlers before primary school. Model rates differ from BSO and gastouder.",
  careTypeBso:
    "BSO (buitenschoolse opvang): after-school care, often with holiday weeks. Hour patterns and invoices differ from full daycare — the tool uses your schedule style as a simple proxy.",
  careTypeGastouder:
    "Gastouder: small-scale registered home childcare (via an agency or meldpunt). Hourly anchors and caps differ from centre daycare; confirm your contract.",
  officialCap:
    "Official maximum hourly rate used in the childcare benefit calculation for reimbursable hours. Providers may charge more — the gap is usually not subsidised when “cap-aware” mode is on.",
  estimatedBenefit:
    "Estimated childcare benefit (kinderopvangtoeslag): a planning figure from income bands and eligibility — not Belastingdienst output. Use their tools for an official estimate.",
  firstMonthCash:
    "First-month cash: recurring out-of-pocket plus optional one-offs (registration, deposit) and timing buffers. Real invoices often stagger across your first weeks.",
  householdContext:
    "Tax year sets official hourly caps and reimbursable hours. City and tier drive model hourly rates when you are not using a manual quote.",
  registrationFee:
    "One-time enrollment or admin fees from the provider — added to first-month cash when that toggle is on.",
  firstInvoiceTiming:
    "Partial first month, overlapping invoices, or delayed benefit payments can spike early cash needs — this adds a simple buffer as a fraction of gross monthly bill.",
  advanceDeposit:
    "Many contracts ask for a deposit or prepayment. The placeholder uses one month of gross bill — replace with your real figure.",
  schoolHolidayReserve:
    "Optional planning line for extra care or camps in school holidays — not tied to a specific invoice.",
  emergencyBackup:
    "Optional buffer for sick days or backup care when regular care is closed.",
  pickupTransport:
    "Optional buffer for pickup costs or short trips — illustrative only.",
} as const;
