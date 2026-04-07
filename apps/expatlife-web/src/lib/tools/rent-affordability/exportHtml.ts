import type { RaComputation, RaInputs } from "@/src/types/tools/rent-affordability";

export type RaExportPayload = {
  siteName: string;
  generatedAtIso: string;
  disclaimer: string;
  calculatorCanonicalUrl: string;
  input: RaInputs;
  result: RaComputation;
  planningNotes?: string;
};

const DISCLAIMER_DEFAULT =
  "This summary is a planning estimator only. It is not legal, tax, or financial advice. Landlord rules, taxes, and listing terms vary. Confirm figures with employers, listings, and professionals before you commit.";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function eur(n: number): string {
  return `€${Math.round(n).toLocaleString("en-NL")}`;
}

const PRESET_LABEL: Record<RaInputs["householdPreset"], string> = {
  single: "Single",
  couple: "Couple",
  family1: "Family + 1 child",
  family2: "Family + 2 children",
  custom: "Custom",
};

function buildInputsSummaryLines(input: RaInputs): string[] {
  const tool =
    input.toolMode === "max_rent" ? "Rent I can afford (from income)" : "Salary needed for target rent";
  const basis = input.incomeBasis === "gross" ? "Income basis: gross (contract)" : "Income basis: net (take-home)";
  const ruling =
    input.rulingAssumption === "yes"
      ? "30% ruling planning: on (full uplift)"
      : input.rulingAssumption === "maybe"
        ? "30% ruling planning: blended (maybe)"
        : "30% ruling planning: off";
  const rent =
    input.rentMode === "target"
      ? `Target rent entered: ${eur(input.targetRentEur)}`
      : "Rent mode: model (city + housing anchors)";
  const hh =
    input.householdPreset === "custom"
      ? `Household: custom — ${input.adultsCount} adult(s), ${input.childrenCount} child(ren)`
      : `Household: ${PRESET_LABEL[input.householdPreset]}`;
  const city = `City: ${input.city.replace(/-/g, " ")} · Neighborhood band: ${input.neighborhoodTier}`;
  const housing = `Housing type: ${input.housingType.replace(/_/g, " ")}`;
  const landlord = `Landlord rule selected: ×${input.landlordRuleMultiplier} gross vs rent`;
  const incomeMode =
    input.incomeEntryMode === "combined_household_income"
      ? "Income logic: combined household income"
      : input.incomeEntryMode === "primary_plus_partial_partner"
        ? `Income logic: primary + ${Math.round(input.partnerContributionShare * 100)}% partner contribution`
        : "Income logic: single income";
  const landlordContext = `Landlord context: ${input.contractProfile.replace(/_/g, " ")} · foreign income acceptance ${Math.round(
    input.landlordForeignIncomeAcceptedShare * 100
  )}% · bonus counted ${input.landlordBonusCounts ? "yes" : "no"}`;
  const childcare = `Childcare mode: ${input.childcareMode} (${input.childcareIntensity.replace("_", "-")})`;
  return [tool, basis, incomeMode, ruling, rent, hh, city, housing, landlord, landlordContext, childcare];
}

export function buildRentAffordabilityExportHtml(payload: RaExportPayload): string {
  const groupedMonthly = [
    ["Housing", ["housing_rent"]],
    ["Utilities & connectivity", ["utilities", "internet_home", "mobile"]],
    ["Core living", ["groceries", "health", "transport", "municipal"]],
    ["Family & dependents", ["childcare", "school_reserve", "pet"]],
    ["Lifestyle & optional", ["dining_leisure", "misc_subs", "gym_sport", "supp_health", "streaming_extra", "travel_home_reserve"]],
    ["Admin & protection", ["tax_reserve", "home_insurance_reserve"]],
    ["Fixed obligations", ["fixed_debt", "fixed_alimony", "fixed_subscriptions", "fixed_car", "fixed_manual"]],
  ] as const;
  const groupedSetup = [
    ["Lease entry", ["deposit", "first_month", "short_stay_overlap"]],
    ["Move & arrival", ["move_travel", "local_transport_setup", "admin"]],
    ["Home setup", ["furniture", "utility_setup"]],
    ["Friction & safety", ["agency", "childcare_school_registration", "pet_relocation", "contingency"]],
  ] as const;
  const { siteName, generatedAtIso, disclaimer, calculatorCanonicalUrl, input, result, planningNotes } = payload;
  const r = result;
  const rows = (label: string, items: { label: string; amountEur: number; note?: string }[]) =>
    items
      .map((i) => {
        const note = i.note ? `<div class="muted" style="margin-top:4px">${esc(i.note)}</div>` : "";
        return `<tr><td>${esc(i.label)}${note}</td><td style="text-align:right;vertical-align:top">${esc(eur(i.amountEur))}</td></tr>`;
      })
      .join("");

  const scenarioRows = r.scenarios
    .map(
      (s) =>
        `<tr><td>${esc(s.label)}${s.whyItMatters ? `<div class="muted">${esc(s.whyItMatters)}</div>` : ""}</td><td style="text-align:right">${esc(eur(s.monthlyTotalEur))}</td><td style="text-align:right">${esc(eur(s.setupTotalEur))}</td><td style="text-align:right">${esc(eur(s.recommendedRentEur))}</td><td style="text-align:right">${esc(eur(s.balancedGrossSalaryMonthlyEur))}</td></tr>`
    )
    .join("");

  const landlordRows = r.landlordChecks
    .map(
      (c) =>
        `<tr><td>${esc(`×${c.multiplier} rule`)}</td><td>${esc(c.status)}</td><td style="text-align:right">${esc(eur(c.requiredGrossMonthlyEur))}</td><td>${c.passes ? "Likely pass" : "Likely fail"}</td></tr>`
    )
    .join("");

  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><title>Rent affordability summary</title>
<style>
body{font-family:system-ui,sans-serif;max-width:880px;margin:24px auto;padding:0 16px;color:#111}
h1{font-size:1.35rem}
h2{font-size:1.05rem;margin-top:1.5rem}
table{border-collapse:collapse;width:100%;margin:8px 0}
td,th{border:1px solid #ddd;padding:8px;font-size:0.9rem}
th{background:#f6f7f9;text-align:left}
.muted{color:#555;font-size:0.88rem}
</style></head><body>
<h1>${esc(siteName)} — Netherlands rent affordability (planning)</h1>
<p class="muted">Generated ${esc(generatedAtIso)} · <a href="${esc(calculatorCanonicalUrl)}">Back to calculator</a></p>
<p>${esc(disclaimer || DISCLAIMER_DEFAULT)}</p>
<h2>Your inputs (summary)</h2>
<ul>
${buildInputsSummaryLines(input)
  .map((line) => `<li>${esc(line)}</li>`)
  .join("")}
</ul>
<h2>Core result summary</h2>
<ul>
${input.toolMode === "salary_for_rent" ? `<li>Required gross for target rent: <strong>${esc(eur(r.reverse?.requiredGrossMonthlyEur ?? r.salaryGrossMonthlyTargets.balanced))}</strong>/mo</li>` : `<li>Recommended max rent (balanced): <strong>${esc(eur(r.maxRent.recommendedEur))}</strong>/mo</li>`}
<li>Safest max rent: <strong>${esc(eur(r.maxRent.comfortableEur))}</strong>/mo</li>
<li>Stretch max rent: <strong>${esc(eur(r.maxRent.stretchEur))}</strong>/mo</li>
<li>Monthly non-rent baseline: <strong>${esc(eur(r.nonRent.totalEur))}</strong>/mo</li>
<li>Fixed obligations: <strong>${esc(eur(r.fixedObligationsEur))}</strong>/mo</li>
<li>One-time setup (model): <strong>${esc(eur(r.setup.totalEur))}</strong></li>
<li>First month cash (setup + one recurring month): <strong>${esc(eur(r.setup.firstMonthCashEur))}</strong></li>
<li>Model rent (cold anchor): <strong>${esc(eur(r.modelRentColdEur))}</strong>/mo · Effective rent used in tables: <strong>${esc(eur(r.effectiveRentEur))}</strong>/mo</li>
</ul>
${
  r.meta.warnings.length
    ? `<h2>Planning notes</h2><ul>${r.meta.warnings.map((w) => `<li>${esc(w)}</li>`).join("")}</ul>`
    : ""
}
${r.reverse ? `<h2>Salary-needed details</h2><p>Required gross (planning): <strong>${esc(eur(r.reverse.requiredGrossMonthlyEur))}</strong>/mo · Landlord floor (gross): <strong>${esc(eur(r.reverse.landlordFloorGrossMonthlyEur))}</strong>/mo · Indicative net at that gross: <strong>${esc(eur(r.reverse.requiredNetMonthlyPlanningEur))}</strong>/mo · Net after rent &amp; non-rent (check): <strong>${esc(eur(r.reverse.comfortableNetAfterRentEur))}</strong>/mo</p>` : ""}
<p class="muted">Landlord table uses your <strong>gross</strong> figure (${esc(eur(r.income.grossMonthly))}/mo) against the rent reference. If gross is indicative from net, treat pass/fail as orientation only.</p>
<h2>Landlord screening (gross vs rent)</h2>
<table><thead><tr><th>Rule</th><th>Status</th><th>Required gross</th><th>Your gross check</th></tr></thead><tbody>${landlordRows}</tbody></table>
<h2>Grouped monthly breakdown</h2>
${groupedMonthly
  .map(([label, ids]) => {
    const lines = r.nonRent.lines.filter((l) => (ids as readonly string[]).includes(l.id));
    if (!lines.length) return "";
    const subtotal = lines.reduce((s, l) => s + l.amountEur, 0);
    return `<h3>${esc(label)} · ${esc(eur(subtotal))}/mo</h3><table><tbody>${rows(
      label,
      lines.map((l) => ({ label: l.label, amountEur: l.amountEur, note: l.note }))
    )}</tbody></table>`;
  })
  .join("")}
<h2>Grouped setup breakdown</h2>
${groupedSetup
  .map(([label, ids]) => {
    const lines = r.setup.lines.filter((l) => (ids as readonly string[]).includes(l.id));
    if (!lines.length) return "";
    const subtotal = lines.reduce((s, l) => s + l.amountEur, 0);
    return `<h3>${esc(label)} · ${esc(eur(subtotal))}</h3><table><tbody>${rows(
      label,
      lines.map((l) => ({ label: l.label, amountEur: l.amountEur, note: l.note }))
    )}</tbody></table>`;
  })
  .join("")}
<h2>Scenario comparison</h2>
<table><thead><tr><th>Scenario</th><th>Monthly total</th><th>Setup</th><th>Rec. rent</th><th>Bal. gross/mo</th></tr></thead><tbody>${scenarioRows}</tbody></table>
${planningNotes ? `<h2>Your notes</h2><p>${esc(planningNotes)}</p>` : ""}
<p class="muted">${esc(DISCLAIMER_DEFAULT)}</p>
</body></html>`;
}

export { DISCLAIMER_DEFAULT as RA_EXPORT_DISCLAIMER_DEFAULT };

export function downloadRentAffordabilityHtml(payload: RaExportPayload): void {
  const html = buildRentAffordabilityExportHtml(payload);
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `expatcopilot-nl-rent-affordability-${new Date().toISOString().slice(0, 10)}.html`;
  a.click();
  URL.revokeObjectURL(url);
}

export function openPrintRentAffordabilitySummary(payload: RaExportPayload): void {
  const html = buildRentAffordabilityExportHtml(payload);
  const w = window.open("", "_blank", "noopener,noreferrer");
  if (w) {
    w.document.write(html);
    w.document.close();
    w.focus();
    w.print();
  }
}

export function openRentAffordabilitySummaryTab(payload: RaExportPayload): void {
  const html = buildRentAffordabilityExportHtml(payload);
  const w = window.open("", "_blank", "noopener,noreferrer");
  if (w) {
    w.document.write(html);
    w.document.close();
    w.focus();
  }
}
