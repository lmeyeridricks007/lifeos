/**
 * Statutory maximum hourly rates used in Dutch childcare benefit (kinderopvangtoeslag) planning.
 * Source: Belastingdienst published maxima per care type — update annually.
 *
 * These values cap the reimbursable slice in this tool; they are not a guarantee of entitlement.
 */
import type { CareType, ChildcareTaxYear } from "@/src/types/tools/childcare";

/** Max hours per child per month that can count toward reimbursable care in this planning model. */
export const childcareReimbursableHoursCapByYear: Record<ChildcareTaxYear, number> = {
  2026: 230,
  2027: 230,
};

/**
 * Official maximum hourly rate (€) reimbursed per care type, by tax year.
 * 2026: daycare / dagopvang 11.23, BSO 9.98, gastouder 8.49.
 */
export const childcareRatesByYear: Record<ChildcareTaxYear, Record<CareType, number>> = {
  2026: {
    daycare: 11.23,
    bso: 9.98,
    gastouder: 8.49,
  },
  2027: {
    // TODO: replace when Belastingdienst publishes 2027 maxima.
    daycare: 11.5,
    bso: 10.2,
    gastouder: 8.7,
  },
};
