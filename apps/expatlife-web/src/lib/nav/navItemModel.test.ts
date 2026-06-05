import { describe, expect, it } from "vitest";
import { getActiveNavKey, MEGA_MENUS } from "./config";
import { getRouteStatus } from "@/src/lib/routes/routeStatus";
import { isNavItemActive, isNavItemLinkable } from "./navItemModel";

const HOLIDAY_PATH = "/netherlands/jobs/holiday-allowance-netherlands/";
const BONUS_TAX_PATH = "/netherlands/taxes/bonus-tax-netherlands/";

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

  it("renders the Money menu row as an active link, not a Soon row", () => {
    const mortgageItem = MEGA_MENUS.money.sections
      .flatMap((section) => section.items)
      .find((item) => item.href === MORTGAGE_PATH);

    expect(mortgageItem).toBeDefined();
    expect(mortgageItem?.navStatus).toBe("live");
    expect(isNavItemLinkable(mortgageItem!)).toBe(true);
    expect(isNavItemActive(MORTGAGE_PATH, mortgageItem!)).toBe(true);
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

  it("renders the Money menu row as an active link, not a Soon row", () => {
    const propertyTaxItem = MEGA_MENUS.money.sections
      .flatMap((section) => section.items)
      .find((item) => item.href === PROPERTY_TAX_PATH);

    expect(propertyTaxItem).toBeDefined();
    expect(propertyTaxItem?.navStatus).toBe("live");
    expect(isNavItemLinkable(propertyTaxItem!)).toBe(true);
    expect(isNavItemActive(PROPERTY_TAX_PATH, propertyTaxItem!)).toBe(true);
  });

  it("renders the Move menu row as an active link, not a Soon row", () => {
    const propertyTaxItem = MEGA_MENUS.moving.sections
      .flatMap((section) => section.items)
      .find((item) => item.href === PROPERTY_TAX_PATH);

    expect(propertyTaxItem).toBeDefined();
    expect(propertyTaxItem?.navStatus).toBe("live");
    expect(isNavItemLinkable(propertyTaxItem!)).toBe(true);
    expect(isNavItemActive(PROPERTY_TAX_PATH, propertyTaxItem!)).toBe(true);
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

  it("renders the Money menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.money.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === BUY_VS_RENT_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(BUY_VS_RENT_PATH, item!)).toBe(true);
  });

  it("renders the Move menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.moving.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === BUY_VS_RENT_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(BUY_VS_RENT_PATH, item!)).toBe(true);
  });
});

describe("double taxation nav active state", () => {
  const DOUBLE_TAXATION_PATH = "/netherlands/taxes/double-taxation-netherlands/";

  it("treats the shipped double taxation guide route as live", () => {
    expect(getRouteStatus(DOUBLE_TAXATION_PATH)).toBe("live");
  });

  it("highlights Move for the double taxation guide surfaced in Move → More", () => {
    expect(getActiveNavKey(DOUBLE_TAXATION_PATH)).toBe("moving");
  });

  it("marks canonical href active when pathname is the legacy flat URL", () => {
    const item = {
      label: "Double taxation",
      href: DOUBLE_TAXATION_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive("/netherlands/double-taxation-netherlands/", item)).toBe(true);
  });

  it("renders the Move menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.moving.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === DOUBLE_TAXATION_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(DOUBLE_TAXATION_PATH, item!)).toBe(true);
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
});
