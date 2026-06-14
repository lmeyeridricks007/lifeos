import { describe, expect, it } from "vitest";
import { getActiveNavKey, MEGA_MENUS } from "./config";
import { getRouteStatus } from "@/src/lib/routes/routeStatus";
import { isNavItemActive, isNavItemLinkable } from "./navItemModel";

const HOLIDAY_PATH = "/netherlands/jobs/holiday-allowance-netherlands/";
const FINDING_JOBS_PATH = "/netherlands/jobs/finding-jobs-netherlands/";
const EMPLOYMENT_CONTRACT_PATH = "/netherlands/jobs/employment-contract-netherlands/";
const BONUS_TAX_PATH = "/netherlands/taxes/bonus-tax-netherlands/";
const INSURANCE_PROVIDERS_PATH = "/netherlands/services/insurance-providers/";
const UTILITIES_PATH = "/netherlands/utilities/utilities-netherlands/";

function menuRowsForHref(href: string) {
  return Object.entries(MEGA_MENUS).flatMap(([menuKey, menu]) =>
    menu.sections.flatMap((section) =>
      section.items
        .filter((item) => item.href === href)
        .map((item) => ({ menuKey, sectionTitle: section.title, item }))
    )
  );
}

describe("insurance providers nav active state", () => {
  it("treats the insurance providers service route as live", () => {
    expect(getRouteStatus(INSURANCE_PROVIDERS_PATH)).toBe("live");
  });

  it("highlights Services for the insurance providers path", () => {
    expect(getActiveNavKey(INSURANCE_PROVIDERS_PATH)).toBe("services");
  });

  it("renders the Services menu row as an active link", () => {
    const item = MEGA_MENUS.services.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === INSURANCE_PROVIDERS_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(INSURANCE_PROVIDERS_PATH, item!)).toBe(true);
  });
});

describe("utilities nav active state", () => {
  it("treats the utilities guide route as live", () => {
    expect(getRouteStatus(UTILITIES_PATH)).toBe("live");
  });

  it("highlights Living for the utilities guide path", () => {
    expect(getActiveNavKey(UTILITIES_PATH)).toBe("living");
  });

  it("highlights Living for the legacy living utilities scaffold href", () => {
    expect(getActiveNavKey("/netherlands/living/utilities/")).toBe("living");
  });

  it("renders the Living utilities menu row as an active link", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Utilities")
      ?.items.find((row) => row.label === "Utilities in the Netherlands");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(UTILITIES_PATH, item!)).toBe(true);
  });

  it("renders the Move practical life menu row as an active link", () => {
    const rows = menuRowsForHref(UTILITIES_PATH);
    const moveRow = rows.find((row) => row.menuKey === "moving" && row.sectionTitle === "Practical life");

    expect(moveRow).toBeDefined();
    expect(moveRow?.item.navStatus).toBe("live");
    expect(isNavItemLinkable(moveRow!.item)).toBe(true);
    expect(isNavItemActive(UTILITIES_PATH, moveRow!.item)).toBe(true);
  });
});

describe("finding jobs nav active state", () => {
  it("treats the shipped finding jobs guide route as live", () => {
    expect(getRouteStatus(FINDING_JOBS_PATH)).toBe("live");
  });

  it("highlights Move (not Money) for the jobs guide path", () => {
    expect(getActiveNavKey(FINDING_JOBS_PATH)).toBe("moving");
  });

  it("highlights Move for the legacy work href before redirect", () => {
    expect(getActiveNavKey("/netherlands/work/finding-jobs-netherlands/")).toBe("moving");
  });

  it("marks Move and Money menu rows active for the canonical jobs href", () => {
    const item = {
      label: "Finding jobs in the Netherlands",
      href: FINDING_JOBS_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(FINDING_JOBS_PATH, item)).toBe(true);
  });

  it("marks legacy work href active via alias when on the jobs guide", () => {
    const item = {
      label: "Finding jobs Netherlands",
      href: "/netherlands/work/finding-jobs-netherlands/",
      navStatus: "live" as const,
    };
    expect(isNavItemActive(FINDING_JOBS_PATH, item)).toBe(true);
  });

  it("renders the Move menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.moving.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === FINDING_JOBS_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(FINDING_JOBS_PATH, item!)).toBe(true);
  });
});

describe("employment contract nav active state", () => {
  it("treats the shipped employment contract guide route as live", () => {
    expect(getRouteStatus(EMPLOYMENT_CONTRACT_PATH)).toBe("live");
  });

  it("highlights Move (not Money) for the jobs guide path", () => {
    expect(getActiveNavKey(EMPLOYMENT_CONTRACT_PATH)).toBe("moving");
  });

  it("highlights Move for the legacy work href before redirect", () => {
    expect(getActiveNavKey("/netherlands/work/employment-contract-netherlands/")).toBe("moving");
  });

  it("marks Move and Money menu rows active for the canonical jobs href", () => {
    const item = {
      label: "Employment contracts",
      href: EMPLOYMENT_CONTRACT_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(EMPLOYMENT_CONTRACT_PATH, item)).toBe(true);
  });

  it("marks legacy work href active via alias when on the jobs guide", () => {
    const item = {
      label: "Employment contract Netherlands",
      href: "/netherlands/work/employment-contract-netherlands/",
      navStatus: "live" as const,
    };
    expect(isNavItemActive(EMPLOYMENT_CONTRACT_PATH, item)).toBe(true);
  });

  it("renders the Move menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.moving.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === EMPLOYMENT_CONTRACT_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(EMPLOYMENT_CONTRACT_PATH, item!)).toBe(true);
  });

  it("renders the Money menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.money.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === EMPLOYMENT_CONTRACT_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(EMPLOYMENT_CONTRACT_PATH, item!)).toBe(true);
  });

  it("has menu rows in Move > Jobs & salaries and Money > Employment contracts & rights", () => {
    const rows = menuRowsForHref(EMPLOYMENT_CONTRACT_PATH);

    expect(rows).toHaveLength(2);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`).sort()).toEqual([
      "money:Employment contracts & rights",
      "moving:Jobs & salaries",
    ]);
  });
});

describe("probation period nav active state", () => {
  const PROBATION_PATH = "/netherlands/jobs/probation-period-netherlands/";

  it("treats the shipped probation period guide route as live", () => {
    expect(getRouteStatus(PROBATION_PATH)).toBe("live");
  });

  it("highlights Move (not Money) for the jobs guide path", () => {
    expect(getActiveNavKey(PROBATION_PATH)).toBe("moving");
  });

  it("highlights Move for the legacy work href before redirect", () => {
    expect(getActiveNavKey("/netherlands/work/probation-period-netherlands/")).toBe("moving");
  });

  it("marks Move and Money menu rows active for the canonical jobs href", () => {
    const item = {
      label: "Probation period",
      href: PROBATION_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(PROBATION_PATH, item)).toBe(true);
  });

  it("marks legacy work href active via alias when on the jobs guide", () => {
    const item = {
      label: "Probation period Netherlands",
      href: "/netherlands/work/probation-period-netherlands/",
      navStatus: "live" as const,
    };
    expect(isNavItemActive(PROBATION_PATH, item)).toBe(true);
  });

  it("renders the Move menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.moving.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === PROBATION_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(PROBATION_PATH, item!)).toBe(true);
  });

  it("renders the Money menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.money.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === PROBATION_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(PROBATION_PATH, item!)).toBe(true);
  });

  it("has menu rows in Move > Jobs & salaries and Money > Employment contracts & rights", () => {
    const rows = menuRowsForHref(PROBATION_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`).sort()).toEqual([
      "money:Employment contracts & rights",
      "moving:Jobs & salaries",
    ]);
  });
});

describe("notice period nav active state", () => {
  const NOTICE_PATH = "/netherlands/jobs/notice-period-netherlands/";

  it("treats the shipped notice period guide route as live", () => {
    expect(getRouteStatus(NOTICE_PATH)).toBe("live");
  });

  it("highlights Move (not Money) for the jobs guide path", () => {
    expect(getActiveNavKey(NOTICE_PATH)).toBe("moving");
  });

  it("highlights Move for the legacy work href before redirect", () => {
    expect(getActiveNavKey("/netherlands/work/notice-period-netherlands/")).toBe("moving");
  });

  it("marks Move and Money menu rows active for the canonical jobs href", () => {
    const item = {
      label: "Notice period",
      href: NOTICE_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(NOTICE_PATH, item)).toBe(true);
  });

  it("marks legacy work href active via alias when on the jobs guide", () => {
    const item = {
      label: "Notice period Netherlands",
      href: "/netherlands/work/notice-period-netherlands/",
      navStatus: "live" as const,
    };
    expect(isNavItemActive(NOTICE_PATH, item)).toBe(true);
  });

  it("renders the Move menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.moving.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === NOTICE_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(NOTICE_PATH, item!)).toBe(true);
  });

  it("renders the Money menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.money.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === NOTICE_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(NOTICE_PATH, item!)).toBe(true);
  });

  it("has menu rows in Move > Jobs & salaries and Money > Employment contracts & rights", () => {
    const rows = menuRowsForHref(NOTICE_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`).sort()).toEqual([
      "money:Employment contracts & rights",
      "moving:Jobs & salaries",
    ]);
  });
});

describe("employee rights nav active state", () => {
  const RIGHTS_PATH = "/netherlands/jobs/employee-rights-netherlands/";

  it("treats the shipped employee rights guide route as live", () => {
    expect(getRouteStatus(RIGHTS_PATH)).toBe("live");
  });

  it("highlights Move (not Money) for the jobs guide path", () => {
    expect(getActiveNavKey(RIGHTS_PATH)).toBe("moving");
  });

  it("highlights Move for the legacy work href before redirect", () => {
    expect(getActiveNavKey("/netherlands/work/employee-rights-netherlands/")).toBe("moving");
  });

  it("marks Move and Money menu rows active for the canonical jobs href", () => {
    const item = {
      label: "Employee rights",
      href: RIGHTS_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(RIGHTS_PATH, item)).toBe(true);
  });

  it("renders the Move menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.moving.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === RIGHTS_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(RIGHTS_PATH, item!)).toBe(true);
  });

  it("renders the Money menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.money.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === RIGHTS_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(RIGHTS_PATH, item!)).toBe(true);
  });

  it("has menu rows in Move > Jobs & salaries and Money > Employment contracts & rights", () => {
    const rows = menuRowsForHref(RIGHTS_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`).sort()).toEqual([
      "money:Employment contracts & rights",
      "moving:Jobs & salaries",
    ]);
  });
});

describe("zzp nav active state", () => {
  const ZZP_PATH = "/netherlands/business/zzp-netherlands/";

  it("treats the shipped zzp guide route as live", () => {
    expect(getRouteStatus(ZZP_PATH)).toBe("live");
  });

  it("highlights Move (not Money) for the business guide path", () => {
    expect(getActiveNavKey(ZZP_PATH)).toBe("moving");
  });

  it("highlights Move for the legacy work href before redirect", () => {
    expect(getActiveNavKey("/netherlands/work/zzp-netherlands/")).toBe("moving");
  });

  it("marks Move and Money menu rows active for the canonical business href", () => {
    const item = {
      label: "ZZP in the Netherlands",
      href: ZZP_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(ZZP_PATH, item)).toBe(true);
  });

  it("renders the Move Business menu row as an active link", () => {
    const item = MEGA_MENUS.moving.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === ZZP_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(ZZP_PATH, item!)).toBe(true);
  });

  it("renders the Money menu row as an active link", () => {
    const item = MEGA_MENUS.money.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === ZZP_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(ZZP_PATH, item!)).toBe(true);
  });

  it("has menu rows in Move > Business and Money > Employment contracts & rights", () => {
    const rows = menuRowsForHref(ZZP_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`).sort()).toEqual([
      "money:Employment contracts & rights",
      "moving:Business",
    ]);
  });
});

describe("freelancing nav active state", () => {
  const FREELANCING_PATH = "/netherlands/jobs/freelancing-netherlands/";

  it("treats the shipped freelancing guide route as live", () => {
    expect(getRouteStatus(FREELANCING_PATH)).toBe("live");
  });

  it("highlights Move (not Money) for the jobs guide path", () => {
    expect(getActiveNavKey(FREELANCING_PATH)).toBe("moving");
  });

  it("highlights Move for the legacy work href before redirect", () => {
    expect(getActiveNavKey("/netherlands/work/freelancing-netherlands/")).toBe("moving");
  });

  it("marks Move and Money menu rows active for the canonical jobs href", () => {
    const item = {
      label: "Freelancing",
      href: FREELANCING_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(FREELANCING_PATH, item)).toBe(true);
  });

  it("renders the Move menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.moving.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === FREELANCING_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(FREELANCING_PATH, item!)).toBe(true);
  });

  it("renders the Money menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.money.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === FREELANCING_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(FREELANCING_PATH, item!)).toBe(true);
  });

  it("has menu rows in Move > Jobs & salaries and Money > Employment contracts & rights", () => {
    const rows = menuRowsForHref(FREELANCING_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`).sort()).toEqual([
      "money:Employment contracts & rights",
      "moving:Jobs & salaries",
    ]);
  });
});

describe("contractor vs employee nav active state", () => {
  const CONTRACTOR_PATH = "/netherlands/jobs/contractor-vs-employee-netherlands/";

  it("treats the shipped contractor vs employee guide route as live", () => {
    expect(getRouteStatus(CONTRACTOR_PATH)).toBe("live");
  });

  it("highlights Move (not Money) for the jobs guide path", () => {
    expect(getActiveNavKey(CONTRACTOR_PATH)).toBe("moving");
  });

  it("highlights Move for the legacy work href before redirect", () => {
    expect(getActiveNavKey("/netherlands/work/contractor-vs-employee-netherlands/")).toBe("moving");
  });

  it("marks Move and Money menu rows active for the canonical jobs href", () => {
    const item = {
      label: "Contractor vs employee",
      href: CONTRACTOR_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(CONTRACTOR_PATH, item)).toBe(true);
  });

  it("renders the Move Jobs & salaries menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.moving.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === CONTRACTOR_PATH && navItem.label === "Contractor vs employee");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(CONTRACTOR_PATH, item!)).toBe(true);
  });

  it("renders the Move Business menu row as an active link", () => {
    const item = MEGA_MENUS.moving.sections
      .find((section) => section.title === "Business")
      ?.items.find((navItem) => navItem.href === CONTRACTOR_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(CONTRACTOR_PATH, item!)).toBe(true);
  });

  it("renders the Money menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.money.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === CONTRACTOR_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(CONTRACTOR_PATH, item!)).toBe(true);
  });

  it("has menu rows in Move > Jobs & salaries, Move > Business and Money > Employment contracts & rights", () => {
    const rows = menuRowsForHref(CONTRACTOR_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`).sort()).toEqual([
      "money:Employment contracts & rights",
      "moving:Business",
      "moving:Jobs & salaries",
    ]);
  });
});

describe("starting a business nav active state", () => {
  const STARTING_BUSINESS_PATH = "/netherlands/business/starting-a-business-netherlands/";

  it("treats the shipped starting a business guide route as live", () => {
    expect(getRouteStatus(STARTING_BUSINESS_PATH)).toBe("live");
  });

  it("highlights Move (not Money) for the business guide path", () => {
    expect(getActiveNavKey(STARTING_BUSINESS_PATH)).toBe("moving");
  });

  it("marks Move and Money menu rows active for the canonical business href", () => {
    const item = {
      label: "Starting a business",
      href: STARTING_BUSINESS_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(STARTING_BUSINESS_PATH, item)).toBe(true);
  });

  it("renders the Move Business menu row as an active link", () => {
    const item = MEGA_MENUS.moving.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === STARTING_BUSINESS_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(STARTING_BUSINESS_PATH, item!)).toBe(true);
  });

  it("renders the Money menu row as an active link", () => {
    const item = MEGA_MENUS.money.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === STARTING_BUSINESS_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(STARTING_BUSINESS_PATH, item!)).toBe(true);
  });

  it("has menu rows in Move > Business and Money > Employment contracts & rights", () => {
    const rows = menuRowsForHref(STARTING_BUSINESS_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`).sort()).toEqual([
      "money:Employment contracts & rights",
      "moving:Business",
    ]);
  });
});

describe("holiday allowance nav active state", () => {
  it("highlights Move (not Money) for the jobs guide path", () => {
    expect(getActiveNavKey(HOLIDAY_PATH)).toBe("moving");
  });

  it("marks Move and Money menu rows active for the canonical jobs href", () => {
    const item = {
      label: "Holiday allowance",
      href: HOLIDAY_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(HOLIDAY_PATH, item)).toBe(true);
  });

  it("marks legacy work href active via alias when on the jobs guide", () => {
    const item = {
      label: "Holiday allowance Netherlands",
      href: "/netherlands/work/holiday-allowance-netherlands/",
      navStatus: "live" as const,
    };
    expect(isNavItemActive(HOLIDAY_PATH, item)).toBe(true);
  });
});

describe("bonus tax nav active state", () => {
  it("highlights Move (not Money) for the taxes guide path in Move → More", () => {
    expect(getActiveNavKey(BONUS_TAX_PATH)).toBe("moving");
  });

  it("marks Move and Money menu rows active for the canonical taxes href", () => {
    const item = {
      label: "Bonus tax Netherlands",
      href: BONUS_TAX_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(BONUS_TAX_PATH, item)).toBe(true);
  });

  it("marks legacy work href active via alias when on the taxes guide", () => {
    const item = {
      label: "Bonus tax Netherlands",
      href: "/netherlands/work/bonus-tax-netherlands/",
      navStatus: "live" as const,
    };
    expect(isNavItemActive(BONUS_TAX_PATH, item)).toBe(true);
  });
});

describe("healthcare allowance nav active state", () => {
  const HEALTHCARE_PATH = "/netherlands/taxes/healthcare-allowance-netherlands/";

  it("highlights Move for the taxes guide path in Move → More", () => {
    expect(getActiveNavKey(HEALTHCARE_PATH)).toBe("moving");
  });

  it("marks menu rows active for the canonical taxes href", () => {
    const item = {
      label: "Healthcare allowance Netherlands",
      href: HEALTHCARE_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(HEALTHCARE_PATH, item)).toBe(true);
  });

  it("marks legacy healthcare-allowance href active via alias", () => {
    const item = {
      label: "Healthcare allowance",
      href: "/netherlands/taxes/healthcare-allowance/",
      navStatus: "live" as const,
    };
    expect(isNavItemActive(HEALTHCARE_PATH, item)).toBe(true);
  });

  it("marks canonical href active when pathname is the legacy URL", () => {
    const item = {
      label: "Healthcare allowance Netherlands",
      href: HEALTHCARE_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive("/netherlands/taxes/healthcare-allowance/", item)).toBe(true);
  });

  it("does not mark the taxes hub active on a nested taxes guide", () => {
    const hub = {
      label: "Taxes hub (Netherlands)",
      href: "/netherlands/taxes/",
      navStatus: "live" as const,
    };
    expect(isNavItemActive(HEALTHCARE_PATH, hub)).toBe(false);
  });
});

describe("rent allowance nav active state", () => {
  const RENT_PATH = "/netherlands/taxes/rent-allowance-netherlands/";

  it("highlights Living for the housing guide path in Living → Housing", () => {
    expect(getActiveNavKey(RENT_PATH)).toBe("living");
  });

  it("marks menu rows active for the canonical taxes href", () => {
    const item = {
      label: "Rent allowance in the Netherlands",
      href: RENT_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(RENT_PATH, item)).toBe(true);
  });

  it("marks legacy rent-allowance href active via alias", () => {
    const item = {
      label: "Rent allowance",
      href: "/netherlands/taxes/rent-allowance/",
      navStatus: "live" as const,
    };
    expect(isNavItemActive(RENT_PATH, item)).toBe(true);
  });

  it("marks canonical href active when pathname is the legacy URL", () => {
    const item = {
      label: "Rent allowance in the Netherlands",
      href: RENT_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive("/netherlands/taxes/rent-allowance/", item)).toBe(true);
  });

  it("highlights Living for legacy pathname before redirect", () => {
    expect(getActiveNavKey("/netherlands/taxes/rent-allowance/")).toBe("living");
  });
});

describe("navItemModel — childcare allowance guide", () => {
  const CHILDCARE_PATH = "/netherlands/taxes/childcare-allowance-netherlands/";

  it("highlights Move for the taxes guide path in Move → More", () => {
    expect(getActiveNavKey(CHILDCARE_PATH)).toBe("moving");
  });

  it("marks canonical childcare allowance path active", () => {
    const item = {
      label: "Childcare allowance in the Netherlands",
      href: CHILDCARE_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(CHILDCARE_PATH, item)).toBe(true);
  });

  it("marks legacy childcare-allowance href active via alias", () => {
    const item = {
      label: "Childcare allowance",
      href: "/netherlands/taxes/childcare-allowance/",
      navStatus: "live" as const,
    };
    expect(isNavItemActive(CHILDCARE_PATH, item)).toBe(true);
  });

  it("marks canonical href active when pathname is the legacy URL", () => {
    const item = {
      label: "Childcare allowance in the Netherlands",
      href: CHILDCARE_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive("/netherlands/taxes/childcare-allowance/", item)).toBe(true);
  });

  it("does not mark the taxes hub active on a nested taxes guide", () => {
    const hub = {
      label: "Taxes hub (Netherlands)",
      href: "/netherlands/taxes/",
      navStatus: "live" as const,
    };
    expect(isNavItemActive(CHILDCARE_PATH, hub)).toBe(false);
  });

  it("highlights Move for legacy pathname before redirect", () => {
    expect(getActiveNavKey("/netherlands/taxes/childcare-allowance/")).toBe("moving");
  });
});

describe("buying a house nav active state", () => {
  const BUYING_PATH = "/netherlands/housing/buying-a-house-netherlands/";

  it("treats the shipped buying guide route as live", () => {
    expect(getRouteStatus(BUYING_PATH)).toBe("live");
  });

  it("highlights Living for the housing buying guide path", () => {
    expect(getActiveNavKey(BUYING_PATH)).toBe("living");
  });

  it("marks menu rows active for the canonical housing href", () => {
    const item = {
      label: "Buying a house in the Netherlands",
      href: BUYING_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(BUYING_PATH, item)).toBe(true);
  });

  it("marks canonical href active when pathname is the legacy flat URL", () => {
    const item = {
      label: "Buying a house",
      href: BUYING_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive("/netherlands/buying-house-netherlands/", item)).toBe(true);
  });

  it("highlights Living for legacy flat pathname before redirect", () => {
    expect(getActiveNavKey("/netherlands/buying-house-netherlands/")).toBe("living");
  });

  it("renders the Living menu row as an active link, not a Soon row", () => {
    const buyingItem = MEGA_MENUS.living.sections
      .flatMap((section) => section.items)
      .find((item) => item.href === BUYING_PATH);

    expect(buyingItem).toBeDefined();
    expect(buyingItem?.navStatus).toBe("live");
    expect(isNavItemLinkable(buyingItem!)).toBe(true);
    expect(isNavItemActive(BUYING_PATH, buyingItem!)).toBe(true);
  });
});

describe("mortgages for expats nav active state", () => {
  const MORTGAGE_PATH = "/netherlands/housing/mortgages-netherlands-expats/";

  it("treats the shipped mortgage guide route as live", () => {
    expect(getRouteStatus(MORTGAGE_PATH)).toBe("live");
  });

  it("highlights Living for the mortgage guide path", () => {
    expect(getActiveNavKey(MORTGAGE_PATH)).toBe("living");
  });

  it("marks menu rows active for the canonical mortgage href", () => {
    const item = {
      label: "Mortgages for expats",
      href: MORTGAGE_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(MORTGAGE_PATH, item)).toBe(true);
  });

  it("marks canonical href active when pathname is the legacy flat URL", () => {
    const item = {
      label: "Mortgage (expats)",
      href: MORTGAGE_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive("/netherlands/mortgage-netherlands-expats/", item)).toBe(true);
  });

  it("highlights Living for legacy flat pathname before redirect", () => {
    expect(getActiveNavKey("/netherlands/mortgage-netherlands-expats/")).toBe("living");
  });

  it("renders the Living menu row as an active link, not a Soon row", () => {
    const mortgageItem = MEGA_MENUS.living.sections
      .flatMap((section) => section.items)
      .find((item) => item.href === MORTGAGE_PATH);

    expect(mortgageItem).toBeDefined();
    expect(mortgageItem?.navStatus).toBe("live");
    expect(isNavItemLinkable(mortgageItem!)).toBe(true);
    expect(isNavItemActive(MORTGAGE_PATH, mortgageItem!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Housing", () => {
    const rows = menuRowsForHref(MORTGAGE_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Housing");
  });
});

describe("property tax nav active state", () => {
  const PROPERTY_TAX_PATH = "/netherlands/taxes/property-tax-netherlands/";

  it("treats the shipped property tax guide route as live", () => {
    expect(getRouteStatus(PROPERTY_TAX_PATH)).toBe("live");
  });

  it("highlights Living for the property tax guide path surfaced under Housing", () => {
    expect(getActiveNavKey(PROPERTY_TAX_PATH)).toBe("living");
  });

  it("marks menu rows active for the canonical property tax href", () => {
    const item = {
      label: "Property tax in the Netherlands",
      href: PROPERTY_TAX_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(PROPERTY_TAX_PATH, item)).toBe(true);
  });

  it("marks canonical href active when pathname is the legacy flat URL", () => {
    const item = {
      label: "Property tax",
      href: PROPERTY_TAX_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive("/netherlands/property-tax-netherlands/", item)).toBe(true);
  });

  it("highlights Living for legacy flat pathname before redirect", () => {
    expect(getActiveNavKey("/netherlands/property-tax-netherlands/")).toBe("living");
  });

  it("renders the Living menu row as an active link, not a Soon row", () => {
    const propertyTaxItem = MEGA_MENUS.living.sections
      .flatMap((section) => section.items)
      .find((item) => item.href === PROPERTY_TAX_PATH);

    expect(propertyTaxItem).toBeDefined();
    expect(propertyTaxItem?.navStatus).toBe("live");
    expect(isNavItemLinkable(propertyTaxItem!)).toBe(true);
    expect(isNavItemActive(PROPERTY_TAX_PATH, propertyTaxItem!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Housing", () => {
    const rows = menuRowsForHref(PROPERTY_TAX_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Housing");
  });
});

describe("buy vs rent nav active state", () => {
  const BUY_VS_RENT_PATH = "/netherlands/housing/buy-vs-rent-netherlands/";

  it("treats the shipped buy vs rent guide route as live", () => {
    expect(getRouteStatus(BUY_VS_RENT_PATH)).toBe("live");
  });

  it("highlights Living for the buy vs rent housing guide path", () => {
    expect(getActiveNavKey(BUY_VS_RENT_PATH)).toBe("living");
  });

  it("marks canonical href active when pathname is the legacy flat URL", () => {
    const item = {
      label: "Buy vs rent",
      href: BUY_VS_RENT_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive("/netherlands/buy-vs-rent-netherlands/", item)).toBe(true);
  });

  it("renders the Living menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.living.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === BUY_VS_RENT_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(BUY_VS_RENT_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Housing", () => {
    const rows = menuRowsForHref(BUY_VS_RENT_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Housing");
  });
});

describe("double taxation nav active state", () => {
  const DOUBLE_TAXATION_PATH = "/netherlands/taxes/double-taxation-netherlands/";

  it("treats the shipped double taxation guide route as live", () => {
    expect(getRouteStatus(DOUBLE_TAXATION_PATH)).toBe("live");
  });

  it("highlights Money for the double taxation guide in Money > Taxes", () => {
    expect(getActiveNavKey(DOUBLE_TAXATION_PATH)).toBe("money");
  });

  it("marks canonical href active when pathname is the legacy flat URL", () => {
    const item = {
      label: "Double taxation",
      href: DOUBLE_TAXATION_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive("/netherlands/double-taxation-netherlands/", item)).toBe(true);
  });

  it("renders the Money menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.money.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === DOUBLE_TAXATION_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(DOUBLE_TAXATION_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Money > Taxes", () => {
    const rows = menuRowsForHref(DOUBLE_TAXATION_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("money");
    expect(rows[0].sectionTitle).toBe("Taxes");
  });
});

describe("foreign income nav active state", () => {
  const FOREIGN_INCOME_PATH = "/netherlands/taxes/foreign-income-netherlands/";

  it("treats the shipped foreign income guide route as live", () => {
    expect(getRouteStatus(FOREIGN_INCOME_PATH)).toBe("live");
  });

  it("highlights Money for the foreign income guide in Money > Taxes", () => {
    expect(getActiveNavKey(FOREIGN_INCOME_PATH)).toBe("money");
  });

  it("renders the Money menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.money.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === FOREIGN_INCOME_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(FOREIGN_INCOME_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Money > Taxes", () => {
    const rows = menuRowsForHref(FOREIGN_INCOME_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("money");
    expect(rows[0].sectionTitle).toBe("Taxes");
  });
});

describe("taxes after moving nav active state", () => {
  const TAXES_AFTER_MOVING_PATH = "/netherlands/taxes/taxes-after-moving-netherlands/";

  it("treats the shipped taxes after moving guide route as live", () => {
    expect(getRouteStatus(TAXES_AFTER_MOVING_PATH)).toBe("live");
  });

  it("highlights Money for the taxes after moving guide in Money > Taxes", () => {
    expect(getActiveNavKey(TAXES_AFTER_MOVING_PATH)).toBe("money");
  });

  it("renders the Money menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.money.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === TAXES_AFTER_MOVING_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(TAXES_AFTER_MOVING_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Money > Taxes", () => {
    const rows = menuRowsForHref(TAXES_AFTER_MOVING_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("money");
    expect(rows[0].sectionTitle).toBe("Taxes");
  });
});

describe("leaving Netherlands tax nav active state", () => {
  const LEAVING_NETHERLANDS_TAX_PATH = "/netherlands/taxes/leaving-netherlands-tax/";

  it("treats the shipped leaving tax guide route as live", () => {
    expect(getRouteStatus(LEAVING_NETHERLANDS_TAX_PATH)).toBe("live");
  });

  it("highlights Money for the leaving tax guide in Money > Taxes", () => {
    expect(getActiveNavKey(LEAVING_NETHERLANDS_TAX_PATH)).toBe("money");
  });

  it("renders the Money menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.money.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === LEAVING_NETHERLANDS_TAX_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(LEAVING_NETHERLANDS_TAX_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Money > Taxes", () => {
    const rows = menuRowsForHref(LEAVING_NETHERLANDS_TAX_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("money");
    expect(rows[0].sectionTitle).toBe("Taxes");
  });
});

describe("mortgage advisors service nav active state", () => {
  const MORTGAGE_ADVISORS_PATH = "/netherlands/services/mortgage-advisors/";

  it("treats the shipped mortgage advisors service route as live", () => {
    expect(getRouteStatus(MORTGAGE_ADVISORS_PATH)).toBe("live");
  });

  it("highlights Services for the mortgage advisors route", () => {
    expect(getActiveNavKey(MORTGAGE_ADVISORS_PATH)).toBe("services");
  });

  it("renders the Services menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.services.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === MORTGAGE_ADVISORS_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(MORTGAGE_ADVISORS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Services > Banking & financial services", () => {
    const rows = menuRowsForHref(MORTGAGE_ADVISORS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("services");
    expect(rows[0].sectionTitle).toBe("Banking & financial services");
  });
});

describe("amsterdam vs rotterdam nav active state", () => {
  const AMSTERDAM_VS_ROTTERDAM_PATH = "/netherlands/cities/amsterdam-vs-rotterdam/";
  const CITIES_COMPARE_PATH = "/netherlands/cities/compare/";

  it("treats the shipped comparison guide route as live", () => {
    expect(getRouteStatus(AMSTERDAM_VS_ROTTERDAM_PATH)).toBe("live");
    expect(getRouteStatus(CITIES_COMPARE_PATH)).toBe("live");
  });

  it("highlights Cities for the comparison guide path", () => {
    expect(getActiveNavKey(AMSTERDAM_VS_ROTTERDAM_PATH)).toBe("cities");
    expect(getActiveNavKey(CITIES_COMPARE_PATH)).toBe("cities");
  });

  it("renders the Cities menu row as an active link for Amsterdam vs Rotterdam", () => {
    const item = MEGA_MENUS.cities.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === AMSTERDAM_VS_ROTTERDAM_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(AMSTERDAM_VS_ROTTERDAM_PATH, item!)).toBe(true);
  });

  it("has menu rows in Cities > Compare / discover", () => {
    const rows = menuRowsForHref(AMSTERDAM_VS_ROTTERDAM_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`)).toEqual(["cities:Compare / discover"]);
  });
});

describe("financial advisors service nav active state", () => {
  const FINANCIAL_ADVISORS_PATH = "/netherlands/services/financial-advisors/";

  it("treats the shipped financial advisors service route as live", () => {
    expect(getRouteStatus(FINANCIAL_ADVISORS_PATH)).toBe("live");
  });

  it("highlights Services for the financial advisors route", () => {
    expect(getActiveNavKey(FINANCIAL_ADVISORS_PATH)).toBe("services");
  });

  it("renders the Services menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.services.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === FINANCIAL_ADVISORS_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(FINANCIAL_ADVISORS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Services > Banking & financial services", () => {
    const rows = menuRowsForHref(FINANCIAL_ADVISORS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("services");
    expect(rows[0].sectionTitle).toBe("Banking & financial services");
  });
});
