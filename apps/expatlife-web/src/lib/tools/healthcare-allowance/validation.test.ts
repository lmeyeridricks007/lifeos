import { describe, expect, it } from "vitest";
import { mergeHealthcareAllowanceInputs } from "./defaultInputs";
import { validateHealthcareAllowanceInputs } from "./validation";

describe("validateHealthcareAllowanceInputs", () => {
  it("rejects negative money fields", () => {
    const input = mergeHealthcareAllowanceInputs({ annualIncomeYou: -1 });
    const v = validateHealthcareAllowanceInputs(input);
    expect(v.isValid).toBe(false);
    expect(v.errors.some((e) => e.includes("negative"))).toBe(true);
  });

  it("rejects insurance start month out of range", () => {
    const input = mergeHealthcareAllowanceInputs({ insuranceStartMonth: 13 });
    const v = validateHealthcareAllowanceInputs(input);
    expect(v.isValid).toBe(false);
  });

  it("passes for default merged inputs", () => {
    const v = validateHealthcareAllowanceInputs(mergeHealthcareAllowanceInputs({}));
    expect(v.isValid).toBe(true);
  });
});
