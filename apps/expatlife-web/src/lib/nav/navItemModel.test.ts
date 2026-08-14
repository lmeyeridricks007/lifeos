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

describe("energy and water nav active state", () => {
  const ENERGY_WATER_PATH = "/netherlands/utilities/energy-and-water-netherlands/";
  const UTILITIES_HUB_PATH = "/netherlands/utilities/";

  it("treats the energy and water guide route as live", () => {
    expect(getRouteStatus(ENERGY_WATER_PATH)).toBe("live");
  });

  it("highlights Living for the energy and water guide path", () => {
    expect(getActiveNavKey(ENERGY_WATER_PATH)).toBe("living");
  });

  it("renders the Living energy and water menu row as an active link", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Utilities")
      ?.items.find((row) => row.label === "Energy and water");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(ENERGY_WATER_PATH, item!)).toBe(true);
  });

  it("renders the Move practical life energy and water row as active", () => {
    const item = MEGA_MENUS.moving.sections
      .find((section) => section.title === "Practical life")
      ?.items.find((row) => row.label === "Energy and water");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(ENERGY_WATER_PATH, item!)).toBe(true);
  });

  it("highlights energy and water for legacy living scaffold hrefs", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Utilities")
      ?.items.find((row) => row.label === "Energy and water");

    expect(item).toBeDefined();
    expect(isNavItemActive("/netherlands/living/energy-and-water/", item!)).toBe(true);
  });

  it("does not highlight the main utilities guide when on energy and water", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Utilities")
      ?.items.find((row) => row.label === "Utilities in the Netherlands");

    expect(item).toBeDefined();
    expect(isNavItemActive(ENERGY_WATER_PATH, item!)).toBe(false);
  });

  it("highlights the main utilities guide on the utilities hub path", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Utilities")
      ?.items.find((row) => row.label === "Utilities in the Netherlands");

    expect(item).toBeDefined();
    expect(isNavItemActive(UTILITIES_HUB_PATH, item!)).toBe(true);
  });
});

describe("internet and mobile nav active state", () => {
  const INTERNET_MOBILE_PATH = "/netherlands/utilities/internet-and-mobile-netherlands/";
  const UTILITIES_HUB_PATH = "/netherlands/utilities/";

  it("treats the internet and mobile guide route as live", () => {
    expect(getRouteStatus(INTERNET_MOBILE_PATH)).toBe("live");
  });

  it("highlights Living for the internet and mobile guide path", () => {
    expect(getActiveNavKey(INTERNET_MOBILE_PATH)).toBe("living");
  });

  it("renders the Living internet and mobile menu row as an active link", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Utilities")
      ?.items.find((row) => row.label === "Internet and mobile");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(INTERNET_MOBILE_PATH, item!)).toBe(true);
  });

  it("renders the Move practical life internet and mobile row as active", () => {
    const item = MEGA_MENUS.moving.sections
      .find((section) => section.title === "Practical life")
      ?.items.find((row) => row.label === "Internet and mobile");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(INTERNET_MOBILE_PATH, item!)).toBe(true);
  });

  it("highlights internet and mobile for legacy living scaffold hrefs", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Utilities")
      ?.items.find((row) => row.label === "Internet and mobile");

    expect(item).toBeDefined();
    expect(isNavItemActive("/netherlands/living/internet-and-mobile/", item!)).toBe(true);
  });

  it("does not highlight the main utilities guide when on internet and mobile", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Utilities")
      ?.items.find((row) => row.label === "Utilities in the Netherlands");

    expect(item).toBeDefined();
    expect(isNavItemActive(INTERNET_MOBILE_PATH, item!)).toBe(false);
  });

  it("highlights the main utilities guide on the utilities hub path", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Utilities")
      ?.items.find((row) => row.label === "Utilities in the Netherlands");

    expect(item).toBeDefined();
    expect(isNavItemActive(UTILITIES_HUB_PATH, item!)).toBe(true);
  });
});

describe("municipality services nav active state", () => {
  const MUNICIPALITY_SERVICES_PATH = "/netherlands/practical-life/municipality-services-netherlands/";

  it("treats the municipality services guide route as live", () => {
    expect(getRouteStatus(MUNICIPALITY_SERVICES_PATH)).toBe("live");
  });

  it("highlights Move for the municipality services guide path", () => {
    expect(getActiveNavKey(MUNICIPALITY_SERVICES_PATH)).toBe("moving");
  });

  it("renders the Living municipality services menu row as an active link", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Utilities")
      ?.items.find((row) => row.label === "Municipality services");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(MUNICIPALITY_SERVICES_PATH, item!)).toBe(true);
  });

  it("renders the Move practical life municipality services row as active", () => {
    const item = MEGA_MENUS.moving.sections
      .find((section) => section.title === "Practical life")
      ?.items.find((row) => row.label === "Municipality services");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(MUNICIPALITY_SERVICES_PATH, item!)).toBe(true);
  });

  it("highlights municipality services for legacy living scaffold hrefs", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Utilities")
      ?.items.find((row) => row.label === "Municipality services");

    expect(item).toBeDefined();
    expect(isNavItemActive("/netherlands/living/municipality-services/", item!)).toBe(true);
  });
});

describe("address registration nav active state", () => {
  const ADDRESS_REGISTRATION_PATH = "/netherlands/practical-life/registering-your-address-netherlands/";

  it("treats the address registration guide route as live", () => {
    expect(getRouteStatus(ADDRESS_REGISTRATION_PATH)).toBe("live");
  });

  it("highlights Move for the address registration guide path", () => {
    expect(getActiveNavKey(ADDRESS_REGISTRATION_PATH)).toBe("moving");
  });

  it("renders the Move early setup register address row as active", () => {
    const item = MEGA_MENUS.moving.sections
      .find((section) => section.title === "Early setup")
      ?.items.find((row) => row.label === "Register your address");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(ADDRESS_REGISTRATION_PATH, item!)).toBe(true);
  });

  it("renders the Living housing registration menu row as active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Housing")
      ?.items.find((row) => row.label === "Registering your address");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemActive(ADDRESS_REGISTRATION_PATH, item!)).toBe(true);
  });

  it("shows address registration only once in each mega menu", () => {
    for (const menuKey of ["moving", "living"] as const) {
      const rows = MEGA_MENUS[menuKey].sections.flatMap((section) =>
        section.items.filter((row) => row.href === ADDRESS_REGISTRATION_PATH)
      );
      expect(rows).toHaveLength(1);
    }
  });

  it("marks legacy living registering-your-address href active via alias", () => {
    const item = {
      label: "Registering your address",
      href: ADDRESS_REGISTRATION_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive("/netherlands/living/registering-your-address/", item)).toBe(true);
  });

  it("marks legacy register-address-netherlands href active via alias", () => {
    const item = {
      label: "Register your address",
      href: ADDRESS_REGISTRATION_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive("/netherlands/register-address-netherlands/", item)).toBe(true);
  });
});

describe("waste and recycling nav active state", () => {
  const WASTE_RECYCLING_PATH = "/netherlands/practical-life/waste-and-recycling-netherlands/";

  it("treats the waste and recycling guide route as live", () => {
    expect(getRouteStatus(WASTE_RECYCLING_PATH)).toBe("live");
  });

  it("highlights Living for the waste and recycling guide path", () => {
    expect(getActiveNavKey(WASTE_RECYCLING_PATH)).toBe("living");
  });

  it("highlights Living for the legacy living waste scaffold href", () => {
    expect(getActiveNavKey("/netherlands/living/waste-and-recycling/")).toBe("living");
  });

  it("renders the Move practical life waste menu row as active", () => {
    const item = MEGA_MENUS.moving.sections
      .find((section) => section.title === "Practical life")
      ?.items.find((row) => row.label === "Waste and recycling");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(WASTE_RECYCLING_PATH, item!)).toBe(true);
  });

  it("renders the Living daily life waste menu row as active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Daily life")
      ?.items.find((row) => row.label === "Waste and recycling");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(WASTE_RECYCLING_PATH, item!)).toBe(true);
  });

  it("marks both Move and Living menu rows active for the canonical waste href", () => {
    const rows = menuRowsForHref(WASTE_RECYCLING_PATH);
    expect(rows.some((row) => row.menuKey === "moving" && row.sectionTitle === "Practical life")).toBe(true);
    expect(rows.some((row) => row.menuKey === "living" && row.sectionTitle === "Daily life")).toBe(true);
    for (const row of rows) {
      expect(row.item.navStatus).toBe("live");
      expect(isNavItemActive(WASTE_RECYCLING_PATH, row.item)).toBe(true);
    }
  });

  it("marks legacy living waste-and-recycling href active via alias", () => {
    const item = {
      label: "Waste and recycling",
      href: WASTE_RECYCLING_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive("/netherlands/living/waste-and-recycling/", item)).toBe(true);
  });
});

describe("parking and local permits nav active state", () => {
  const PARKING_PATH = "/netherlands/practical-life/parking-and-local-permits-netherlands/";

  it("treats the parking guide route as live", () => {
    expect(getRouteStatus(PARKING_PATH)).toBe("live");
  });

  it("highlights Living for the parking guide path", () => {
    expect(getActiveNavKey(PARKING_PATH)).toBe("living");
  });

  it("renders the Move practical life parking menu row as active", () => {
    const item = MEGA_MENUS.moving.sections
      .find((section) => section.title === "Practical life")
      ?.items.find((row) => row.label === "Parking and local permits");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(PARKING_PATH, item!)).toBe(true);
  });

  it("renders the Living daily life parking menu row as active", () => {
    const items = MEGA_MENUS.living.sections
      .find((section) => section.title === "Daily life")
      ?.items.filter((row) => row.label === "Parking and local permits");

    expect(items).toHaveLength(1);
    const item = items![0];
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(PARKING_PATH, item!)).toBe(true);
  });

  it("marks legacy living parking href active via alias", () => {
    const item = {
      label: "Parking and local permits",
      href: PARKING_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive("/netherlands/living/parking-and-local-permits/", item)).toBe(true);
  });
});

describe("privacy and safety basics nav active state", () => {
  const PRIVACY_SAFETY_PATH = "/netherlands/practical-life/privacy-and-safety-basics-netherlands/";

  it("treats the privacy and safety guide route as live", () => {
    expect(getRouteStatus(PRIVACY_SAFETY_PATH)).toBe("live");
  });

  it("highlights Move for the privacy and safety guide path", () => {
    expect(getActiveNavKey(PRIVACY_SAFETY_PATH)).toBe("moving");
  });

  it("highlights Move for the legacy living privacy redirect source", () => {
    expect(getActiveNavKey("/netherlands/living/privacy-and-safety-basics/")).toBe("moving");
  });

  it("renders the Move practical life privacy menu row as active", () => {
    const item = MEGA_MENUS.moving.sections
      .find((section) => section.title === "Practical life")
      ?.items.find((row) => row.label === "Privacy and safety basics");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(PRIVACY_SAFETY_PATH, item!)).toBe(true);
  });

  it("renders the Living digital life privacy menu row as active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Digital life / admin-light")
      ?.items.find((row) => row.label === "Privacy and safety basics");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(PRIVACY_SAFETY_PATH, item!)).toBe(true);
  });

  it("marks both Move and Living menu rows active for the canonical privacy href", () => {
    const rows = menuRowsForHref(PRIVACY_SAFETY_PATH);
    expect(rows.some((row) => row.menuKey === "moving" && row.sectionTitle === "Practical life")).toBe(true);
    expect(rows.some((row) => row.menuKey === "living" && row.sectionTitle === "Digital life / admin-light")).toBe(
      true
    );
    for (const row of rows) {
      expect(row.item.navStatus).toBe("live");
      expect(isNavItemActive(PRIVACY_SAFETY_PATH, row.item)).toBe(true);
    }
  });

  it("marks legacy living privacy-and-safety-basics href active via alias", () => {
    const item = {
      label: "Privacy and safety basics",
      href: PRIVACY_SAFETY_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive("/netherlands/living/privacy-and-safety-basics/", item)).toBe(true);
  });
});

describe("subscriptions and cancellations nav active state", () => {
  const SUBSCRIPTIONS_PATH = "/netherlands/practical-life/subscriptions-and-cancellations-netherlands/";

  it("treats the subscriptions guide route as live", () => {
    expect(getRouteStatus(SUBSCRIPTIONS_PATH)).toBe("live");
  });

  it("highlights Living for the subscriptions guide path", () => {
    expect(getActiveNavKey(SUBSCRIPTIONS_PATH)).toBe("living");
  });

  it("highlights Living for the legacy living subscriptions redirect source", () => {
    expect(getActiveNavKey("/netherlands/living/subscriptions-and-cancellations/")).toBe("living");
  });

  it("renders the Move practical life subscriptions menu row as active", () => {
    const item = MEGA_MENUS.moving.sections
      .find((section) => section.title === "Practical life")
      ?.items.find((row) => row.label === "Subscriptions and cancellations");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(SUBSCRIPTIONS_PATH, item!)).toBe(true);
  });

  it("renders the Living digital life subscriptions menu row as active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Digital life / admin-light")
      ?.items.find((row) => row.label === "Subscriptions and cancellations");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(SUBSCRIPTIONS_PATH, item!)).toBe(true);
  });

  it("marks both Move and Living menu rows active for the canonical subscriptions href", () => {
    const rows = menuRowsForHref(SUBSCRIPTIONS_PATH);
    expect(rows.some((row) => row.menuKey === "moving" && row.sectionTitle === "Practical life")).toBe(true);
    expect(rows.some((row) => row.menuKey === "living" && row.sectionTitle === "Digital life / admin-light")).toBe(
      true
    );
    for (const row of rows) {
      expect(row.item.navStatus).toBe("live");
      expect(isNavItemActive(SUBSCRIPTIONS_PATH, row.item)).toBe(true);
    }
  });

  it("marks legacy living subscriptions-and-cancellations href active via alias", () => {
    const item = {
      label: "Subscriptions and cancellations",
      href: SUBSCRIPTIONS_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive("/netherlands/living/subscriptions-and-cancellations/", item)).toBe(true);
  });
});

describe("community basics nav active state", () => {
  const COMMUNITY_BASICS_PATH = "/netherlands/life/community-basics-netherlands/";

  it("treats the community basics guide route as live", () => {
    expect(getRouteStatus(COMMUNITY_BASICS_PATH)).toBe("live");
  });

  it("highlights Living for the community basics guide path", () => {
    expect(getActiveNavKey(COMMUNITY_BASICS_PATH)).toBe("living");
  });

  it("highlights Living for the life hub path", () => {
    expect(getActiveNavKey("/netherlands/life/")).toBe("living");
  });

  it("highlights Living for the legacy living community-basics redirect source", () => {
    expect(getActiveNavKey("/netherlands/living/community-basics/")).toBe("living");
  });

  it("renders the Living Life community basics menu row as active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Life in the Netherlands")
      ?.items.find((row) => row.label === "Community basics");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(COMMUNITY_BASICS_PATH, item!)).toBe(true);
  });

  it("marks legacy living community-basics href active via alias", () => {
    const item = {
      label: "Community basics",
      href: COMMUNITY_BASICS_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive("/netherlands/living/community-basics/", item)).toBe(true);
  });
});

describe("digid netherlands nav active state", () => {
  const DIGID_NETHERLANDS_PATH = "/netherlands/practical-life/digid-netherlands/";

  it("treats the DigiD Netherlands guide route as live", () => {
    expect(getRouteStatus(DIGID_NETHERLANDS_PATH)).toBe("live");
  });

  it("highlights Move for the canonical DigiD guide path", () => {
    expect(getActiveNavKey(DIGID_NETHERLANDS_PATH)).toBe("moving");
  });

  it("highlights Move for legacy digid-awareness redirect source", () => {
    expect(getActiveNavKey("/netherlands/digid-awareness/")).toBe("moving");
  });

  it("highlights Living for legacy living digid-awareness redirect source", () => {
    expect(getActiveNavKey("/netherlands/living/digid-awareness/")).toBe("living");
  });

  it("renders the Move Registration DigiD Netherlands menu row as active", () => {
    const item = MEGA_MENUS.moving.sections
      .find((section) => section.title === "Registration")
      ?.items.find((row) => row.label === "DigiD Netherlands");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(DIGID_NETHERLANDS_PATH, item!)).toBe(true);
  });

  it("renders the Living digital life DigiD awareness menu row as active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Digital life / admin-light")
      ?.items.find((row) => row.label === "DigiD awareness");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(DIGID_NETHERLANDS_PATH, item!)).toBe(true);
  });

  it("marks legacy digid-awareness href active via alias", () => {
    const item = {
      label: "DigiD guide",
      href: "/netherlands/digid-awareness/",
      navStatus: "live" as const,
    };
    expect(isNavItemActive(DIGID_NETHERLANDS_PATH, item)).toBe(true);
  });

  it("marks legacy living digid-awareness href active via alias", () => {
    const item = {
      label: "DigiD awareness",
      href: "/netherlands/living/digid-awareness/",
      navStatus: "live" as const,
    };
    expect(isNavItemActive(DIGID_NETHERLANDS_PATH, item)).toBe(true);
  });

  it("marks flat digid-netherlands pathname active via alias", () => {
    const item = {
      label: "DigiD Netherlands",
      href: DIGID_NETHERLANDS_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive("/netherlands/digid-netherlands/", item)).toBe(true);
  });
});

describe("government portals netherlands nav active state", () => {
  const GOVERNMENT_PORTALS_PATH = "/netherlands/practical-life/government-portals-netherlands/";
  const GOVERNMENT_SERVICES_HUB_PATH = "/netherlands/government-services/";

  it("treats the government portals guide route as live", () => {
    expect(getRouteStatus(GOVERNMENT_PORTALS_PATH)).toBe("live");
  });

  it("treats the government services hub route as live", () => {
    expect(getRouteStatus(GOVERNMENT_SERVICES_HUB_PATH)).toBe("live");
  });

  it("highlights Move for the canonical government portals guide path", () => {
    expect(getActiveNavKey(GOVERNMENT_PORTALS_PATH)).toBe("moving");
  });

  it("highlights Move for the government services hub path", () => {
    expect(getActiveNavKey(GOVERNMENT_SERVICES_HUB_PATH)).toBe("moving");
  });

  it("renders the Move Registration Government portals menu row as active", () => {
    const item = MEGA_MENUS.moving.sections
      .find((section) => section.title === "Registration")
      ?.items.find((row) => row.label === "Government portals");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(GOVERNMENT_PORTALS_PATH, item!)).toBe(true);
  });

  it("renders the Living digital life Government portals overview menu row as active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Digital life / admin-light")
      ?.items.find((row) => row.label === "Government portals overview");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(GOVERNMENT_PORTALS_PATH, item!)).toBe(true);
  });

  it("highlights Living for legacy living government-portals-overview redirect source", () => {
    expect(getActiveNavKey("/netherlands/living/government-portals-overview/")).toBe("living");
  });

  it("marks Move and Living menu rows active for the canonical government portals href", () => {
    const item = {
      label: "Government portals",
      href: GOVERNMENT_PORTALS_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(GOVERNMENT_PORTALS_PATH, item)).toBe(true);
  });

  it("marks flat government-portals-netherlands pathname active via alias", () => {
    const item = {
      label: "Government portals",
      href: GOVERNMENT_PORTALS_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive("/netherlands/government-portals-netherlands/", item)).toBe(true);
  });

  it("renders Move Registration and Living digital life rows as active", () => {
    const rows = menuRowsForHref(GOVERNMENT_PORTALS_PATH);
    const moveRow = rows.find((row) => row.menuKey === "moving" && row.sectionTitle === "Registration");
    const livingRow = rows.find(
      (row) => row.menuKey === "living" && row.sectionTitle === "Digital life / admin-light"
    );

    expect(moveRow).toBeDefined();
    expect(livingRow).toBeDefined();
    expect(isNavItemActive(GOVERNMENT_PORTALS_PATH, moveRow!.item)).toBe(true);
    expect(isNavItemActive(GOVERNMENT_PORTALS_PATH, livingRow!.item)).toBe(true);
  });

  it("marks legacy living government-portals-overview href active via alias", () => {
    const item = {
      label: "Government portals overview",
      href: "/netherlands/living/government-portals-overview/",
      navStatus: "live" as const,
    };
    expect(isNavItemActive(GOVERNMENT_PORTALS_PATH, item)).toBe(true);
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

describe("CV Netherlands nav active state", () => {
  const CV_NETHERLANDS_PATH = "/netherlands/jobs/cv-netherlands/";

  it("treats the CV Netherlands guide route as live in local/preview", () => {
    expect(getRouteStatus(CV_NETHERLANDS_PATH)).toBe("live");
  });

  it("highlights Move (not Money) for the jobs guide path", () => {
    expect(getActiveNavKey(CV_NETHERLANDS_PATH)).toBe("moving");
  });

  it("marks Move and Money menu rows active for the canonical jobs href", () => {
    const item = {
      label: "CV Netherlands",
      href: CV_NETHERLANDS_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(CV_NETHERLANDS_PATH, item)).toBe(true);
  });

  it("renders the Move Jobs & salaries menu row as an active link", () => {
    const item = MEGA_MENUS.moving.sections
      .find((section) => section.title === "Jobs & salaries")
      ?.items.find((navItem) => navItem.href === CV_NETHERLANDS_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(CV_NETHERLANDS_PATH, item!)).toBe(true);
  });

  it("renders the Money Jobs & salaries menu row as an active link", () => {
    const item = MEGA_MENUS.money.sections
      .find((section) => section.title === "Jobs & salaries")
      ?.items.find((navItem) => navItem.href === CV_NETHERLANDS_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(CV_NETHERLANDS_PATH, item!)).toBe(true);
  });

  it("has menu rows in Move > Jobs & salaries and Money > Jobs & salaries", () => {
    const rows = menuRowsForHref(CV_NETHERLANDS_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`).sort()).toEqual([
      "money:Jobs & salaries",
      "moving:Jobs & salaries",
    ]);
  });

  it("sits immediately after Finding jobs in Move > Jobs & salaries", () => {
    const labels =
      MEGA_MENUS.moving.sections
        .find((section) => section.title === "Jobs & salaries")
        ?.items.map((row) => row.label) ?? [];
    const finding = labels.indexOf("Finding jobs in the Netherlands");
    const cv = labels.indexOf("CV Netherlands");

    expect(finding).toBeGreaterThanOrEqual(0);
    expect(cv).toBe(finding + 1);
  });
});

describe("Interview tips Netherlands nav active state", () => {
  const INTERVIEW_TIPS_PATH = "/netherlands/jobs/interview-tips-netherlands/";

  it("treats the Interview tips guide route as live in local/preview", () => {
    expect(getRouteStatus(INTERVIEW_TIPS_PATH)).toBe("live");
  });

  it("highlights Move (not Money) for the jobs guide path", () => {
    expect(getActiveNavKey(INTERVIEW_TIPS_PATH)).toBe("moving");
  });

  it("marks Move and Money menu rows active for the canonical jobs href", () => {
    const item = {
      label: "Interview tips Netherlands",
      href: INTERVIEW_TIPS_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(INTERVIEW_TIPS_PATH, item)).toBe(true);
  });

  it("renders the Move Jobs & salaries menu row as an active link", () => {
    const item = MEGA_MENUS.moving.sections
      .find((section) => section.title === "Jobs & salaries")
      ?.items.find((navItem) => navItem.href === INTERVIEW_TIPS_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(INTERVIEW_TIPS_PATH, item!)).toBe(true);
  });

  it("renders the Money Jobs & salaries menu row as an active link", () => {
    const item = MEGA_MENUS.money.sections
      .find((section) => section.title === "Jobs & salaries")
      ?.items.find((navItem) => navItem.href === INTERVIEW_TIPS_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(INTERVIEW_TIPS_PATH, item!)).toBe(true);
  });

  it("has menu rows in Move > Jobs & salaries and Money > Jobs & salaries", () => {
    const rows = menuRowsForHref(INTERVIEW_TIPS_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`).sort()).toEqual([
      "money:Jobs & salaries",
      "moving:Jobs & salaries",
    ]);
  });

  it("sits immediately after CV Netherlands and before Salary negotiation in Move > Jobs & salaries", () => {
    const labels =
      MEGA_MENUS.moving.sections
        .find((section) => section.title === "Jobs & salaries")
        ?.items.map((row) => row.label) ?? [];
    const cv = labels.indexOf("CV Netherlands");
    const coverLetter = labels.indexOf("Cover letter Netherlands");
    const linkedIn = labels.indexOf("LinkedIn Netherlands");
    const interview = labels.indexOf("Interview tips Netherlands");
    const salary = labels.indexOf("Salary negotiation");

    expect(cv).toBeGreaterThanOrEqual(0);
    expect(coverLetter).toBe(cv + 1);
    expect(linkedIn).toBe(coverLetter + 1);
    expect(interview).toBe(linkedIn + 1);
    expect(salary).toBeGreaterThan(interview);
  });
});

describe("Cover letter Netherlands nav active state", () => {
  const COVER_LETTER_PATH = "/netherlands/jobs/cover-letter-netherlands/";

  it("treats the Cover letter guide route as live in local/preview", () => {
    expect(getRouteStatus(COVER_LETTER_PATH)).toBe("live");
  });

  it("highlights Move (not Money) for the jobs guide path", () => {
    expect(getActiveNavKey(COVER_LETTER_PATH)).toBe("moving");
  });

  it("marks Move and Money menu rows active for the canonical jobs href", () => {
    const item = {
      label: "Cover letter Netherlands",
      href: COVER_LETTER_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(COVER_LETTER_PATH, item)).toBe(true);
  });

  it("renders the Move Jobs & salaries menu row as an active link", () => {
    const item = MEGA_MENUS.moving.sections
      .find((section) => section.title === "Jobs & salaries")
      ?.items.find((navItem) => navItem.href === COVER_LETTER_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(COVER_LETTER_PATH, item!)).toBe(true);
  });

  it("renders the Money Jobs & salaries menu row as an active link", () => {
    const item = MEGA_MENUS.money.sections
      .find((section) => section.title === "Jobs & salaries")
      ?.items.find((navItem) => navItem.href === COVER_LETTER_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(COVER_LETTER_PATH, item!)).toBe(true);
  });

  it("has menu rows in Move > Jobs & salaries and Money > Jobs & salaries", () => {
    const rows = menuRowsForHref(COVER_LETTER_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`).sort()).toEqual([
      "money:Jobs & salaries",
      "moving:Jobs & salaries",
    ]);
  });

  it("sits immediately after CV Netherlands and before LinkedIn in Move > Jobs & salaries", () => {
    const labels =
      MEGA_MENUS.moving.sections
        .find((section) => section.title === "Jobs & salaries")
        ?.items.map((row) => row.label) ?? [];
    const cv = labels.indexOf("CV Netherlands");
    const coverLetter = labels.indexOf("Cover letter Netherlands");
    const linkedIn = labels.indexOf("LinkedIn Netherlands");
    const interview = labels.indexOf("Interview tips Netherlands");

    expect(cv).toBeGreaterThanOrEqual(0);
    expect(coverLetter).toBe(cv + 1);
    expect(linkedIn).toBe(coverLetter + 1);
    expect(interview).toBe(linkedIn + 1);
  });
});

describe("LinkedIn Netherlands nav active state", () => {
  const LINKEDIN_PATH = "/netherlands/jobs/linkedin-netherlands/";

  it("treats the LinkedIn guide route as live in local/preview", () => {
    expect(getRouteStatus(LINKEDIN_PATH)).toBe("live");
  });

  it("highlights Move (not Money) for the jobs guide path", () => {
    expect(getActiveNavKey(LINKEDIN_PATH)).toBe("moving");
  });

  it("marks Move and Money menu rows active for the canonical jobs href", () => {
    const item = {
      label: "LinkedIn Netherlands",
      href: LINKEDIN_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(LINKEDIN_PATH, item)).toBe(true);
  });

  it("renders the Move Jobs & salaries menu row as an active link", () => {
    const item = MEGA_MENUS.moving.sections
      .find((section) => section.title === "Jobs & salaries")
      ?.items.find((navItem) => navItem.href === LINKEDIN_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(LINKEDIN_PATH, item!)).toBe(true);
  });

  it("renders the Money Jobs & salaries menu row as an active link", () => {
    const item = MEGA_MENUS.money.sections
      .find((section) => section.title === "Jobs & salaries")
      ?.items.find((navItem) => navItem.href === LINKEDIN_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(LINKEDIN_PATH, item!)).toBe(true);
  });

  it("has menu rows in Move > Jobs & salaries and Money > Jobs & salaries", () => {
    const rows = menuRowsForHref(LINKEDIN_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`).sort()).toEqual([
      "money:Jobs & salaries",
      "moving:Jobs & salaries",
    ]);
  });

  it("sits immediately after Cover letter and before Interview tips in Move > Jobs & salaries", () => {
    const labels =
      MEGA_MENUS.moving.sections
        .find((section) => section.title === "Jobs & salaries")
        ?.items.map((row) => row.label) ?? [];
    const coverLetter = labels.indexOf("Cover letter Netherlands");
    const linkedIn = labels.indexOf("LinkedIn Netherlands");
    const interview = labels.indexOf("Interview tips Netherlands");

    expect(coverLetter).toBeGreaterThanOrEqual(0);
    expect(linkedIn).toBe(coverLetter + 1);
    expect(interview).toBe(linkedIn + 1);
  });

  it("keeps the LinkedIn jobs Netherlands stub as a separate Money menu href", () => {
    const stub = "/netherlands/work/linkedin-jobs-netherlands/";
    const moneyJobs =
      MEGA_MENUS.money.sections.find((section) => section.title === "Jobs & salaries")?.items ?? [];
    expect(moneyJobs.some((row) => row.href === stub)).toBe(true);
    expect(moneyJobs.some((row) => row.href === LINKEDIN_PATH)).toBe(true);
    expect(stub).not.toBe(LINKEDIN_PATH);
  });
});

describe("Networking Netherlands nav active state", () => {
  const NETWORKING_PATH = "/netherlands/jobs/networking-netherlands/";

  it("treats the Networking guide route as live in local/preview", () => {
    expect(getRouteStatus(NETWORKING_PATH)).toBe("live");
  });

  it("highlights Move (not Money) for the jobs guide path", () => {
    expect(getActiveNavKey(NETWORKING_PATH)).toBe("moving");
  });

  it("marks Move and Money menu rows active for the canonical jobs href", () => {
    const item = {
      label: "Networking Netherlands",
      href: NETWORKING_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(NETWORKING_PATH, item)).toBe(true);
  });

  it("renders the Move Jobs & salaries menu row as an active link", () => {
    const item = MEGA_MENUS.moving.sections
      .find((section) => section.title === "Jobs & salaries")
      ?.items.find((navItem) => navItem.href === NETWORKING_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(NETWORKING_PATH, item!)).toBe(true);
  });

  it("renders the Money Jobs & salaries menu row as an active link", () => {
    const item = MEGA_MENUS.money.sections
      .find((section) => section.title === "Jobs & salaries")
      ?.items.find((navItem) => navItem.href === NETWORKING_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(NETWORKING_PATH, item!)).toBe(true);
  });

  it("has menu rows in Move > Jobs & salaries and Money > Jobs & salaries", () => {
    const rows = menuRowsForHref(NETWORKING_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`).sort()).toEqual([
      "money:Jobs & salaries",
      "moving:Jobs & salaries",
    ]);
  });

  it("sits immediately after Interview tips and before Salary negotiation in Move > Jobs & salaries", () => {
    const labels =
      MEGA_MENUS.moving.sections
        .find((section) => section.title === "Jobs & salaries")
        ?.items.map((row) => row.label) ?? [];
    const interview = labels.indexOf("Interview tips Netherlands");
    const networking = labels.indexOf("Networking Netherlands");
    const salary = labels.indexOf("Salary negotiation");

    expect(interview).toBeGreaterThanOrEqual(0);
    expect(networking).toBe(interview + 1);
    expect(salary).toBe(networking + 1);
  });
});

describe("Recruitment agencies Netherlands nav active state", () => {
  const RECRUITMENT_PATH = "/netherlands/jobs/recruitment-agencies-netherlands/";

  it("treats the Recruitment agencies guide route as live in local/preview", () => {
    expect(getRouteStatus(RECRUITMENT_PATH)).toBe("live");
  });

  it("highlights Move (not Money) for the jobs guide path", () => {
    expect(getActiveNavKey(RECRUITMENT_PATH)).toBe("moving");
  });

  it("has menu rows in Move > Jobs & salaries and Money > Jobs & salaries", () => {
    const rows = menuRowsForHref(RECRUITMENT_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`).sort()).toEqual([
      "money:Jobs & salaries",
      "moving:Jobs & salaries",
    ]);
  });

  it("sits immediately after Finding jobs and before English speaking jobs in Move > Jobs & salaries", () => {
    const labels =
      MEGA_MENUS.moving.sections
        .find((section) => section.title === "Jobs & salaries")
        ?.items.map((row) => row.label) ?? [];
    const finding = labels.indexOf("Finding jobs in the Netherlands");
    const recruitment = labels.indexOf("Recruitment agencies Netherlands");
    const english = labels.indexOf("English speaking jobs Netherlands");
    const remote = labels.indexOf("Remote work Netherlands");
    const cv = labels.indexOf("CV Netherlands");

    expect(finding).toBeGreaterThanOrEqual(0);
    expect(recruitment).toBe(finding + 1);
    expect(english).toBe(recruitment + 1);
    expect(remote).toBe(english + 1);
    expect(cv).toBe(remote + 1);
  });
});

describe("English speaking jobs Netherlands nav active state", () => {
  const ENGLISH_PATH = "/netherlands/jobs/english-speaking-jobs-netherlands/";

  it("treats the English speaking jobs guide route as live in local/preview", () => {
    expect(getRouteStatus(ENGLISH_PATH)).toBe("live");
  });

  it("highlights Move (not Money) for the jobs guide path", () => {
    expect(getActiveNavKey(ENGLISH_PATH)).toBe("moving");
  });

  it("has menu rows in Move > Jobs & salaries and Money > Jobs & salaries", () => {
    const rows = menuRowsForHref(ENGLISH_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`).sort()).toEqual([
      "money:Jobs & salaries",
      "moving:Jobs & salaries",
    ]);
  });
});

describe("Remote work Netherlands nav active state", () => {
  const REMOTE_PATH = "/netherlands/jobs/remote-work-netherlands/";

  it("treats the Remote work guide route as live in local/preview", () => {
    expect(getRouteStatus(REMOTE_PATH)).toBe("live");
  });

  it("highlights Move (not Money) for the jobs guide path", () => {
    expect(getActiveNavKey(REMOTE_PATH)).toBe("moving");
  });

  it("has menu rows in Move > Jobs & salaries and Money > Jobs & salaries", () => {
    const rows = menuRowsForHref(REMOTE_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`).sort()).toEqual([
      "money:Jobs & salaries",
      "moving:Jobs & salaries",
    ]);
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

describe("dutch workplace culture nav active state", () => {
  const WORKPLACE_CULTURE_PATH = "/netherlands/jobs/dutch-workplace-culture/";

  it("treats the shipped workplace culture guide route as live", () => {
    expect(getRouteStatus(WORKPLACE_CULTURE_PATH)).toBe("live");
  });

  it("highlights Culture (not Move or Money) for the canonical jobs guide path", () => {
    expect(getActiveNavKey(WORKPLACE_CULTURE_PATH)).toBe("culture");
  });

  it("highlights Culture for the legacy work href before redirect", () => {
    expect(getActiveNavKey("/netherlands/work/work-culture-netherlands/")).toBe("culture");
  });

  it("highlights Culture for the culture cluster href alias", () => {
    expect(getActiveNavKey("/netherlands/culture/dutch-workplace-culture/")).toBe("culture");
  });

  it("marks the Culture menu row active for the canonical jobs href", () => {
    const item = {
      label: "Dutch workplace culture",
      href: WORKPLACE_CULTURE_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(WORKPLACE_CULTURE_PATH, item)).toBe(true);
  });

  it("renders the Culture menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.culture.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.label === "Dutch workplace culture");

    expect(item).toBeDefined();
    expect(item?.href).toBe(WORKPLACE_CULTURE_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(WORKPLACE_CULTURE_PATH, item!)).toBe(true);
  });

  it("does not duplicate the guide under Move > Jobs & salaries", () => {
    const moveRows = MEGA_MENUS.moving.sections
      .flatMap((section) => section.items)
      .filter((navItem) => navItem.href === WORKPLACE_CULTURE_PATH);
    expect(moveRows).toHaveLength(0);
  });

  it("has a single Culture > Workplace culture menu row", () => {
    const rows = menuRowsForHref(WORKPLACE_CULTURE_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`)).toEqual([
      "culture:Workplace culture",
    ]);
  });
});

describe("dutch directness at work nav active state", () => {
  const DIRECTNESS_PATH = "/netherlands/jobs/dutch-directness-at-work/";

  it("treats the shipped directness guide route as live", () => {
    expect(getRouteStatus(DIRECTNESS_PATH)).toBe("live");
  });

  it("highlights Culture for the canonical jobs guide path", () => {
    expect(getActiveNavKey(DIRECTNESS_PATH)).toBe("culture");
  });

  it("highlights Culture for the culture cluster href alias", () => {
    expect(getActiveNavKey("/netherlands/culture/dutch-directness-at-work/")).toBe("culture");
  });

  it("marks the Culture menu row active for the canonical jobs href", () => {
    const item = {
      label: "Dutch directness at work",
      href: DIRECTNESS_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(DIRECTNESS_PATH, item)).toBe(true);
  });

  it("renders the Culture menu row as an active link", () => {
    const item = MEGA_MENUS.culture.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === DIRECTNESS_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(DIRECTNESS_PATH, item!)).toBe(true);
  });

  it("does not duplicate the guide under Move > Jobs & salaries", () => {
    const moveRows = MEGA_MENUS.moving.sections
      .flatMap((section) => section.items)
      .filter((navItem) => navItem.href === DIRECTNESS_PATH);
    expect(moveRows).toHaveLength(0);
  });

  it("has Culture > Workplace culture menu row", () => {
    const rows = menuRowsForHref(DIRECTNESS_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`)).toEqual([
      "culture:Workplace culture",
    ]);
  });
});

describe("dutch social norms nav active state", () => {
  const SOCIAL_NORMS_PATH = "/netherlands/life/dutch-social-norms/";

  it("treats the shipped social norms guide route as live", () => {
    expect(getRouteStatus(SOCIAL_NORMS_PATH)).toBe("live");
  });

  it("highlights Culture for the canonical Life guide path", () => {
    expect(getActiveNavKey(SOCIAL_NORMS_PATH)).toBe("culture");
  });

  it("highlights Culture for the culture cluster href alias", () => {
    expect(getActiveNavKey("/netherlands/culture/dutch-social-norms/")).toBe("culture");
  });

  it("marks the Culture menu row active for the canonical Life href", () => {
    const item = {
      label: "Dutch social norms",
      href: SOCIAL_NORMS_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(SOCIAL_NORMS_PATH, item)).toBe(true);
  });

  it("renders the Culture menu row as an active link", () => {
    const item = MEGA_MENUS.culture.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === SOCIAL_NORMS_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(SOCIAL_NORMS_PATH, item!)).toBe(true);
  });

  it("has Culture > Social norms menu row", () => {
    const rows = menuRowsForHref(SOCIAL_NORMS_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`)).toContain("culture:Social norms");
  });

  it("still marks the Living Life row active via shared href", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Life in the Netherlands")
      ?.items.find((row) => row.href === SOCIAL_NORMS_PATH);

    expect(item).toBeDefined();
    expect(isNavItemActive(SOCIAL_NORMS_PATH, item!)).toBe(true);
  });
});

describe("dating in the netherlands nav active state", () => {
  const DATING_PATH = "/netherlands/life/dating-in-the-netherlands/";

  it("treats the shipped dating guide route as live", () => {
    expect(getRouteStatus(DATING_PATH)).toBe("live");
  });

  it("highlights Living for the canonical Life guide path", () => {
    expect(getActiveNavKey(DATING_PATH)).toBe("living");
  });

  it("highlights Living for the culture cluster href alias", () => {
    expect(getActiveNavKey("/netherlands/culture/dating-in-the-netherlands/")).toBe("living");
  });

  it("marks the Culture menu row active for the canonical Life href", () => {
    const item = {
      label: "Dating in the Netherlands",
      href: DATING_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(DATING_PATH, item)).toBe(true);
  });

  it("renders the Culture menu row as an active link", () => {
    const item = MEGA_MENUS.culture.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === DATING_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(DATING_PATH, item!)).toBe(true);
  });

  it("has Culture > Social norms menu row", () => {
    const rows = menuRowsForHref(DATING_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`)).toContain("culture:Social norms");
  });

  it("has Living > Life in the Netherlands menu row", () => {
    const rows = menuRowsForHref(DATING_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`)).toContain("living:Life in the Netherlands");
  });

  it("renders the Living Life menu row as active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Life in the Netherlands")
      ?.items.find((row) => row.href === DATING_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(DATING_PATH, item!)).toBe(true);
  });
});

describe("making dutch friends nav active state", () => {
  const MAKING_DUTCH_FRIENDS_PATH = "/netherlands/life/making-dutch-friends/";

  it("treats the shipped making dutch friends guide route as live", () => {
    expect(getRouteStatus(MAKING_DUTCH_FRIENDS_PATH)).toBe("live");
  });

  it("highlights Living for the canonical Life guide path", () => {
    expect(getActiveNavKey(MAKING_DUTCH_FRIENDS_PATH)).toBe("living");
  });

  it("highlights Living for the culture cluster href alias", () => {
    expect(getActiveNavKey("/netherlands/culture/making-dutch-friends/")).toBe("living");
  });

  it("marks the Culture menu row active for the canonical Life href", () => {
    const item = {
      label: "Making Dutch Friends",
      href: MAKING_DUTCH_FRIENDS_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(MAKING_DUTCH_FRIENDS_PATH, item)).toBe(true);
  });

  it("renders the Culture menu row as an active link", () => {
    const item = MEGA_MENUS.culture.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === MAKING_DUTCH_FRIENDS_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(MAKING_DUTCH_FRIENDS_PATH, item!)).toBe(true);
  });

  it("has Culture > Social norms menu row", () => {
    const rows = menuRowsForHref(MAKING_DUTCH_FRIENDS_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`)).toContain("culture:Social norms");
  });

  it("has Living > Life in the Netherlands menu row", () => {
    const rows = menuRowsForHref(MAKING_DUTCH_FRIENDS_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`)).toContain("living:Life in the Netherlands");
  });

  it("renders the Living Life menu row as active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Life in the Netherlands")
      ?.items.find((row) => row.href === MAKING_DUTCH_FRIENDS_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(MAKING_DUTCH_FRIENDS_PATH, item!)).toBe(true);
  });

  it("marks legacy culture making-dutch-friends href active via alias", () => {
    const item = {
      label: "Making Dutch Friends",
      href: "/netherlands/culture/making-dutch-friends/",
      navStatus: "live" as const,
    };
    expect(isNavItemActive(MAKING_DUTCH_FRIENDS_PATH, item)).toBe(true);
  });

  it("marks legacy living making-dutch-friends href active via alias", () => {
    const item = {
      label: "Making Dutch Friends",
      href: "/netherlands/living/making-dutch-friends/",
      navStatus: "live" as const,
    };
    expect(isNavItemActive(MAKING_DUTCH_FRIENDS_PATH, item)).toBe(true);
  });
});

describe("dutch holidays and traditions nav active state", () => {
  const HOLIDAYS_PATH = "/netherlands/life/dutch-holidays-and-traditions/";

  it("treats the shipped holidays guide route as live", () => {
    expect(getRouteStatus(HOLIDAYS_PATH)).toBe("live");
  });

  it("highlights Culture for the canonical Life guide path", () => {
    expect(getActiveNavKey(HOLIDAYS_PATH)).toBe("culture");
  });

  it("highlights Culture for the culture cluster href alias", () => {
    expect(getActiveNavKey("/netherlands/culture/dutch-holidays-and-traditions/")).toBe("culture");
  });

  it("marks the Culture menu row active for the canonical Life href", () => {
    const item = {
      label: "Dutch Holidays & Traditions",
      href: HOLIDAYS_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(HOLIDAYS_PATH, item)).toBe(true);
  });

  it("has Culture > Social norms menu row", () => {
    const rows = menuRowsForHref(HOLIDAYS_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`)).toContain("culture:Social norms");
  });

  it("does not duplicate the guide under Living", () => {
    const livingRows = menuRowsForHref(HOLIDAYS_PATH).filter((row) => row.menuKey === "living");
    expect(livingRows).toHaveLength(0);
  });

  it("renders the Culture mega menu row as an active link", () => {
    const item = MEGA_MENUS.culture.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === HOLIDAYS_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(HOLIDAYS_PATH, item!)).toBe(true);
  });
});

describe("dutch birthday traditions nav active state", () => {
  const BIRTHDAY_PATH = "/netherlands/life/dutch-birthday-traditions/";

  it("treats the shipped birthday traditions guide route as live", () => {
    expect(getRouteStatus(BIRTHDAY_PATH)).toBe("live");
  });

  it("highlights Culture for the canonical Life guide path", () => {
    expect(getActiveNavKey(BIRTHDAY_PATH)).toBe("culture");
  });

  it("highlights Culture for the culture cluster href alias", () => {
    expect(getActiveNavKey("/netherlands/culture/dutch-birthday-traditions/")).toBe("culture");
  });

  it("marks the Culture menu row active for the canonical Life href", () => {
    const item = {
      label: "Dutch Birthday Traditions",
      href: BIRTHDAY_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(BIRTHDAY_PATH, item)).toBe(true);
  });

  it("has Culture > Social norms menu row", () => {
    const rows = menuRowsForHref(BIRTHDAY_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`)).toContain("culture:Social norms");
  });

  it("does not duplicate the guide under Living", () => {
    const livingRows = menuRowsForHref(BIRTHDAY_PATH).filter((row) => row.menuKey === "living");
    expect(livingRows).toHaveLength(0);
  });

  it("renders the Culture mega menu row as an active link", () => {
    const item = MEGA_MENUS.culture.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === BIRTHDAY_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(BIRTHDAY_PATH, item!)).toBe(true);
  });
});

describe("dutch etiquette nav active state", () => {
  const ETIQUETTE_PATH = "/netherlands/life/dutch-etiquette/";

  it("treats the shipped dutch etiquette guide route as live", () => {
    expect(getRouteStatus(ETIQUETTE_PATH)).toBe("live");
  });

  it("highlights Culture for the canonical Life guide path", () => {
    expect(getActiveNavKey(ETIQUETTE_PATH)).toBe("culture");
  });

  it("highlights Culture for the culture cluster href alias", () => {
    expect(getActiveNavKey("/netherlands/culture/dutch-etiquette/")).toBe("culture");
  });

  it("highlights Culture for the legacy Living culture-etiquette alias", () => {
    expect(getActiveNavKey("/netherlands/living/culture-etiquette/")).toBe("culture");
  });

  it("marks the Culture menu row active for the canonical Life href", () => {
    const item = {
      label: "Dutch Etiquette",
      href: ETIQUETTE_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(ETIQUETTE_PATH, item)).toBe(true);
  });

  it("has Culture > Social norms menu row", () => {
    const rows = menuRowsForHref(ETIQUETTE_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`)).toContain("culture:Social norms");
  });

  it("does not duplicate the guide under Living", () => {
    const livingRows = menuRowsForHref(ETIQUETTE_PATH).filter((row) => row.menuKey === "living");
    expect(livingRows).toHaveLength(0);
  });

  it("renders the Culture mega menu row as an active link", () => {
    const item = MEGA_MENUS.culture.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === ETIQUETTE_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(ETIQUETTE_PATH, item!)).toBe(true);
  });
});

describe("dutch humour nav active state", () => {
  const HUMOUR_PATH = "/netherlands/life/dutch-humour/";

  it("treats the shipped dutch humour guide route as live", () => {
    expect(getRouteStatus(HUMOUR_PATH)).toBe("live");
  });

  it("highlights Culture for the canonical Life guide path", () => {
    expect(getActiveNavKey(HUMOUR_PATH)).toBe("culture");
  });

  it("highlights Culture for the culture cluster href alias", () => {
    expect(getActiveNavKey("/netherlands/culture/dutch-humour/")).toBe("culture");
  });

  it("marks the Culture menu row active for the canonical Life href", () => {
    const item = {
      label: "Dutch Humour Explained",
      href: HUMOUR_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(HUMOUR_PATH, item)).toBe(true);
  });

  it("has Culture > Social norms menu row", () => {
    const rows = menuRowsForHref(HUMOUR_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`)).toContain("culture:Social norms");
  });

  it("does not duplicate the guide under Living", () => {
    const livingRows = menuRowsForHref(HUMOUR_PATH).filter((row) => row.menuKey === "living");
    expect(livingRows).toHaveLength(0);
  });

  it("appears in exactly one mega menu section (Culture Social norms)", () => {
    expect(menuRowsForHref(HUMOUR_PATH)).toHaveLength(1);
  });

  it("renders the Culture mega menu row as an active link", () => {
    const item = MEGA_MENUS.culture.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === HUMOUR_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(HUMOUR_PATH, item!)).toBe(true);
  });
});

describe("dutch culture nav active state", () => {
  const CULTURE_PATH = "/netherlands/life/dutch-culture/";

  it("treats the shipped culture hub route as live", () => {
    expect(getRouteStatus(CULTURE_PATH)).toBe("live");
  });

  it("highlights Culture for the canonical Life guide path", () => {
    expect(getActiveNavKey(CULTURE_PATH)).toBe("culture");
  });

  it("highlights Culture for the culture cluster href alias", () => {
    expect(getActiveNavKey("/netherlands/culture/dutch-culture/")).toBe("culture");
  });

  it("marks the Culture menu row active for the canonical Life href", () => {
    const item = {
      label: "Dutch Culture",
      href: CULTURE_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(CULTURE_PATH, item)).toBe(true);
  });

  it("has Culture > Social norms menu row", () => {
    const rows = menuRowsForHref(CULTURE_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`)).toContain("culture:Social norms");
  });

  it("does not duplicate the guide under Living", () => {
    const livingRows = menuRowsForHref(CULTURE_PATH).filter((row) => row.menuKey === "living");
    expect(livingRows).toHaveLength(0);
  });

  it("features Dutch Culture as the Culture pillar entry", () => {
    expect(MEGA_MENUS.culture.featured?.href).toBe(CULTURE_PATH);
    expect(MEGA_MENUS.culture.featured?.navStatus).toBe("live");
    expect(isNavItemActive(CULTURE_PATH, MEGA_MENUS.culture.featured!)).toBe(true);
  });

  it("lists Dutch Culture in Culture > Social norms", () => {
    const item = MEGA_MENUS.culture.sections
      .find((section) => section.title === "Social norms")
      ?.items.find((row) => row.href === CULTURE_PATH);
    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(CULTURE_PATH, item!)).toBe(true);
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

describe("starting consultancy nav active state", () => {
  const STARTING_CONSULTANCY_PATH = "/netherlands/jobs/starting-consultancy-netherlands/";

  it("treats the starting consultancy guide route as live in local/preview", () => {
    expect(getRouteStatus(STARTING_CONSULTANCY_PATH)).toBe("live");
  });

  it("highlights Move (not Money) for the jobs guide path", () => {
    expect(getActiveNavKey(STARTING_CONSULTANCY_PATH)).toBe("moving");
  });

  it("marks Move and Money menu rows active for the canonical jobs href", () => {
    const item = {
      label: "Starting consultancy",
      href: STARTING_CONSULTANCY_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(STARTING_CONSULTANCY_PATH, item)).toBe(true);
  });

  it("renders the Move menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.moving.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === STARTING_CONSULTANCY_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(STARTING_CONSULTANCY_PATH, item!)).toBe(true);
  });

  it("renders the Money menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.money.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === STARTING_CONSULTANCY_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(STARTING_CONSULTANCY_PATH, item!)).toBe(true);
  });

  it("has menu rows in Move > Jobs & salaries and Money > Employment contracts & rights", () => {
    const rows = menuRowsForHref(STARTING_CONSULTANCY_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`).sort()).toEqual([
      "money:Employment contracts & rights",
      "moving:Jobs & salaries",
    ]);
  });

  it("sits between Freelancing and Contractor vs employee in Move > Jobs & salaries", () => {
    const labels =
      MEGA_MENUS.moving.sections
        .find((section) => section.title === "Jobs & salaries")
        ?.items.map((row) => row.label) ?? [];
    const freelancing = labels.indexOf("Freelancing");
    const consultancy = labels.indexOf("Starting consultancy");
    const contractor = labels.indexOf("Contractor vs employee");

    expect(freelancing).toBeGreaterThanOrEqual(0);
    expect(consultancy).toBe(freelancing + 1);
    expect(contractor).toBe(consultancy + 1);
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

describe("housing hub nav active state", () => {
  const HOUSING_HUB_PATH = "/netherlands/housing/";

  it("treats the housing hub route as live", () => {
    expect(getRouteStatus(HOUSING_HUB_PATH)).toBe("live");
  });

  it("highlights Move for the housing hub path", () => {
    expect(getActiveNavKey(HOUSING_HUB_PATH)).toBe("moving");
  });

  it("renders the Move housing hub menu row as active", () => {
    const item = MEGA_MENUS.moving.sections
      .find((section) => section.title === "Housing")
      ?.items.find((row) => row.label === "Housing in the Netherlands");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(HOUSING_HUB_PATH, item!)).toBe(true);
  });

  it("renders the Living housing hub menu row as active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Housing")
      ?.items.find((row) => row.label === "Housing in the Netherlands");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(HOUSING_HUB_PATH, item!)).toBe(true);
  });

  it("highlights Move for legacy living housing scaffold hrefs", () => {
    expect(getActiveNavKey("/netherlands/living/housing/")).toBe("moving");
  });

  it("marks legacy living housing href active via alias", () => {
    const item = {
      label: "Housing in the Netherlands",
      href: HOUSING_HUB_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive("/netherlands/living/housing/", item)).toBe(true);
  });

  it("does not mark the hub row active on child housing guide paths", () => {
    const item = MEGA_MENUS.moving.sections
      .find((section) => section.title === "Housing")
      ?.items.find((row) => row.label === "Housing in the Netherlands");

    expect(item).toBeDefined();
    expect(isNavItemActive("/netherlands/housing/buying-a-house-netherlands/", item!)).toBe(false);
  });

  it("highlights Living for child housing guide paths", () => {
    expect(getActiveNavKey("/netherlands/housing/renting-in-the-netherlands/")).toBe("living");
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

describe("housing costs nav active state", () => {
  const HOUSING_COSTS_PATH = "/netherlands/housing/housing-costs-netherlands/";

  it("treats the housing costs guide route as live", () => {
    expect(getRouteStatus(HOUSING_COSTS_PATH)).toBe("live");
  });

  it("highlights Move for the housing costs guide path", () => {
    expect(getActiveNavKey(HOUSING_COSTS_PATH)).toBe("moving");
  });

  it("highlights Move for the legacy living housing-costs redirect source", () => {
    expect(getActiveNavKey("/netherlands/living/housing-costs/")).toBe("moving");
  });

  it("renders the Move housing menu row as active", () => {
    const item = MEGA_MENUS.moving.sections
      .find((section) => section.title === "Housing")
      ?.items.find((row) => row.label === "Housing costs in the Netherlands");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(HOUSING_COSTS_PATH, item!)).toBe(true);
  });

  it("renders the Living housing menu row as active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Housing")
      ?.items.find((row) => row.label === "Housing costs");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(HOUSING_COSTS_PATH, item!)).toBe(true);
  });

  it("marks both Move and Living menu rows active for the canonical href", () => {
    const rows = menuRowsForHref(HOUSING_COSTS_PATH);
    expect(rows.some((row) => row.menuKey === "moving" && row.sectionTitle === "Housing")).toBe(true);
    expect(rows.some((row) => row.menuKey === "living" && row.sectionTitle === "Housing")).toBe(true);
    for (const row of rows) {
      expect(row.item.navStatus).toBe("live");
      expect(isNavItemActive(HOUSING_COSTS_PATH, row.item)).toBe(true);
    }
  });

  it("marks legacy living housing-costs href active via alias", () => {
    const item = {
      label: "Housing costs",
      href: HOUSING_COSTS_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive("/netherlands/living/housing-costs/", item)).toBe(true);
  });
});

describe("rental contracts and deposits nav active state", () => {
  const RENTAL_CONTRACTS_PATH = "/netherlands/housing/rental-contracts-and-deposits-netherlands/";

  it("treats the rental contracts guide route as live", () => {
    expect(getRouteStatus(RENTAL_CONTRACTS_PATH)).toBe("live");
  });

  it("treats the legacy living rental-contracts redirect source as live", () => {
    expect(getRouteStatus("/netherlands/living/rental-contracts-and-deposits/")).toBe("live");
  });

  it("highlights Move for the rental contracts guide path", () => {
    expect(getActiveNavKey(RENTAL_CONTRACTS_PATH)).toBe("moving");
  });

  it("highlights Move for the legacy living rental-contracts redirect source", () => {
    expect(getActiveNavKey("/netherlands/living/rental-contracts-and-deposits/")).toBe("moving");
  });

  it("does not add a duplicate Move housing menu row", () => {
    const item = MEGA_MENUS.moving.sections
      .find((section) => section.title === "Housing")
      ?.items.find((row) => row.label === "Rental contracts and deposits");

    expect(item).toBeUndefined();
  });

  it("renders the Living housing menu row as active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Housing")
      ?.items.find((row) => row.label === "Rental contracts and deposits");

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(RENTAL_CONTRACTS_PATH, item!)).toBe(true);
  });

  it("marks only the existing Living menu row active for the canonical href", () => {
    const rows = menuRowsForHref(RENTAL_CONTRACTS_PATH);
    expect(rows.some((row) => row.menuKey === "moving" && row.sectionTitle === "Housing")).toBe(false);
    expect(rows.some((row) => row.menuKey === "living" && row.sectionTitle === "Housing")).toBe(true);
    expect(rows).toHaveLength(1);
    for (const row of rows) {
      expect(row.item.navStatus).toBe("live");
      expect(isNavItemActive(RENTAL_CONTRACTS_PATH, row.item)).toBe(true);
    }
  });

  it("marks legacy living rental-contracts href active via alias", () => {
    const item = {
      label: "Rental contracts and deposits",
      href: RENTAL_CONTRACTS_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive("/netherlands/living/rental-contracts-and-deposits/", item)).toBe(true);
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

describe("recruitment agencies services directory nav active state", () => {
  const RECRUITMENT_SERVICES_PATH = "/netherlands/services/recruitment-agencies/";

  it("treats the recruitment agencies services route as live in local/preview", () => {
    expect(getRouteStatus(RECRUITMENT_SERVICES_PATH)).toBe("live");
  });

  it("highlights Services for the recruitment agencies directory path", () => {
    expect(getActiveNavKey(RECRUITMENT_SERVICES_PATH)).toBe("services");
  });

  it("renders the Services menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.services.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === RECRUITMENT_SERVICES_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(RECRUITMENT_SERVICES_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Services > Work & career support", () => {
    const rows = menuRowsForHref(RECRUITMENT_SERVICES_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("services");
    expect(rows[0].sectionTitle).toBe("Work & career support");
  });
});

describe("moving companies services directory nav active state", () => {
  const MOVING_COMPANIES_PATH = "/netherlands/services/moving-companies/";

  it("treats the moving companies services route as live in local/preview", () => {
    expect(getRouteStatus(MOVING_COMPANIES_PATH)).toBe("live");
  });

  it("highlights Services for the moving companies directory path", () => {
    expect(getActiveNavKey(MOVING_COMPANIES_PATH)).toBe("services");
  });

  it("renders the Services menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.services.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === MOVING_COMPANIES_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(MOVING_COMPANIES_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Services > Housing & relocation", () => {
    const rows = menuRowsForHref(MOVING_COMPANIES_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("services");
    expect(rows[0].sectionTitle).toBe("Housing & relocation");
  });
});

describe("removal companies services directory nav active state", () => {
  const REMOVAL_COMPANIES_PATH = "/netherlands/services/removal-companies/";

  it("treats the removal companies services route as live in local/preview", () => {
    expect(getRouteStatus(REMOVAL_COMPANIES_PATH)).toBe("live");
  });

  it("highlights Services for the removal companies directory path", () => {
    expect(getActiveNavKey(REMOVAL_COMPANIES_PATH)).toBe("services");
  });

  it("renders the Services menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.services.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === REMOVAL_COMPANIES_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(REMOVAL_COMPANIES_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Services > Housing & relocation", () => {
    const rows = menuRowsForHref(REMOVAL_COMPANIES_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("services");
    expect(rows[0].sectionTitle).toBe("Housing & relocation");
  });
});

describe("storage companies services directory nav active state", () => {
  const STORAGE_COMPANIES_PATH = "/netherlands/services/storage-companies/";

  it("treats the storage companies services route as live in local/preview", () => {
    expect(getRouteStatus(STORAGE_COMPANIES_PATH)).toBe("live");
  });

  it("highlights Services for the storage companies directory path", () => {
    expect(getActiveNavKey(STORAGE_COMPANIES_PATH)).toBe("services");
  });

  it("renders the Services menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.services.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === STORAGE_COMPANIES_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(STORAGE_COMPANIES_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Services > Housing & relocation", () => {
    const rows = menuRowsForHref(STORAGE_COMPANIES_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("services");
    expect(rows[0].sectionTitle).toBe("Housing & relocation");
  });
});

describe("pet relocation companies services directory nav active state", () => {
  const PET_RELOCATION_COMPANIES_PATH = "/netherlands/services/pet-relocation-companies/";

  it("treats the pet relocation companies services route as live in local/preview", () => {
    expect(getRouteStatus(PET_RELOCATION_COMPANIES_PATH)).toBe("live");
  });

  it("highlights Services for the pet relocation companies directory path", () => {
    expect(getActiveNavKey(PET_RELOCATION_COMPANIES_PATH)).toBe("services");
  });

  it("renders the Services menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.services.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === PET_RELOCATION_COMPANIES_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(PET_RELOCATION_COMPANIES_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Services > Housing & relocation", () => {
    const rows = menuRowsForHref(PET_RELOCATION_COMPANIES_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("services");
    expect(rows[0].sectionTitle).toBe("Housing & relocation");
  });
});

describe("cleaning companies services directory nav active state", () => {
  const CLEANING_COMPANIES_PATH = "/netherlands/services/cleaning-companies/";

  it("treats the cleaning companies services route as live in local/preview", () => {
    expect(getRouteStatus(CLEANING_COMPANIES_PATH)).toBe("live");
  });

  it("highlights Services for the cleaning companies directory path", () => {
    expect(getActiveNavKey(CLEANING_COMPANIES_PATH)).toBe("services");
  });

  it("renders the Services menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.services.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === CLEANING_COMPANIES_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(CLEANING_COMPANIES_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Services > Housing & relocation", () => {
    const rows = menuRowsForHref(CLEANING_COMPANIES_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("services");
    expect(rows[0].sectionTitle).toBe("Housing & relocation");
  });
});

describe("handymen services directory nav active state", () => {
  const HANDYMEN_PATH = "/netherlands/services/handymen/";

  it("treats the handymen services route as live in local/preview", () => {
    expect(getRouteStatus(HANDYMEN_PATH)).toBe("live");
  });

  it("highlights Services for the handymen directory path", () => {
    expect(getActiveNavKey(HANDYMEN_PATH)).toBe("services");
  });

  it("renders the Services menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.services.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === HANDYMEN_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(HANDYMEN_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Services > Housing & relocation", () => {
    const rows = menuRowsForHref(HANDYMEN_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("services");
    expect(rows[0].sectionTitle).toBe("Housing & relocation");
  });
});

describe("estate agents services directory nav active state", () => {
  const ESTATE_AGENTS_PATH = "/netherlands/services/estate-agents/";

  it("treats the estate agents services route as live in local/preview", () => {
    expect(getRouteStatus(ESTATE_AGENTS_PATH)).toBe("live");
  });

  it("highlights Services for the estate agents directory path", () => {
    expect(getActiveNavKey(ESTATE_AGENTS_PATH)).toBe("services");
  });

  it("renders the Services menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.services.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === ESTATE_AGENTS_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(ESTATE_AGENTS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Services > Housing & relocation", () => {
    const rows = menuRowsForHref(ESTATE_AGENTS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("services");
    expect(rows[0].sectionTitle).toBe("Housing & relocation");
  });
});

describe("notaries services directory nav active state", () => {
  const NOTARIES_PATH = "/netherlands/services/notaries/";

  it("treats the notaries services route as live in local/preview", () => {
    expect(getRouteStatus(NOTARIES_PATH)).toBe("live");
  });

  it("highlights Services for the notaries directory path", () => {
    expect(getActiveNavKey(NOTARIES_PATH)).toBe("services");
  });

  it("renders the Services menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.services.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === NOTARIES_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(NOTARIES_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Services > Housing & relocation", () => {
    const rows = menuRowsForHref(NOTARIES_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("services");
    expect(rows[0].sectionTitle).toBe("Housing & relocation");
  });
});

describe("insurance brokers services directory nav active state", () => {
  const INSURANCE_BROKERS_PATH = "/netherlands/services/insurance-brokers/";

  it("treats the insurance brokers services route as live in local/preview", () => {
    expect(getRouteStatus(INSURANCE_BROKERS_PATH)).toBe("live");
  });

  it("highlights Services for the insurance brokers directory path", () => {
    expect(getActiveNavKey(INSURANCE_BROKERS_PATH)).toBe("services");
  });

  it("renders the Services menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.services.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === INSURANCE_BROKERS_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(INSURANCE_BROKERS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Services > Health & insurance", () => {
    const rows = menuRowsForHref(INSURANCE_BROKERS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("services");
    expect(rows[0].sectionTitle).toBe("Health & insurance");
  });
});

describe("accountants services directory nav active state", () => {
  const ACCOUNTANTS_PATH = "/netherlands/services/accountants/";

  it("treats the accountants services route as live in local/preview", () => {
    expect(getRouteStatus(ACCOUNTANTS_PATH)).toBe("live");
  });

  it("highlights Services for the accountants directory path", () => {
    expect(getActiveNavKey(ACCOUNTANTS_PATH)).toBe("services");
  });

  it("renders the Services menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.services.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === ACCOUNTANTS_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(ACCOUNTANTS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Services > Banking & financial services", () => {
    const rows = menuRowsForHref(ACCOUNTANTS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("services");
    expect(rows[0].sectionTitle).toBe("Banking & financial services");
  });
});

describe("business consultants services directory nav active state", () => {
  const BUSINESS_CONSULTANTS_PATH = "/netherlands/services/business-consultants/";

  it("treats the business consultants services route as live in local/preview", () => {
    expect(getRouteStatus(BUSINESS_CONSULTANTS_PATH)).toBe("live");
  });

  it("highlights Services for the business consultants directory path", () => {
    expect(getActiveNavKey(BUSINESS_CONSULTANTS_PATH)).toBe("services");
  });

  it("renders the Services menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.services.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === BUSINESS_CONSULTANTS_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(BUSINESS_CONSULTANTS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Services > Banking & financial services after Financial advisors", () => {
    const rows = menuRowsForHref(BUSINESS_CONSULTANTS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("services");
    expect(rows[0].sectionTitle).toBe("Banking & financial services");

    const bankingItems = MEGA_MENUS.services.sections
      .find((section) => section.title === "Banking & financial services")
      ?.items.map((navItem) => navItem.href);
    const financialIdx = bankingItems?.indexOf("/netherlands/services/financial-advisors/");
    const consultantsIdx = bankingItems?.indexOf(BUSINESS_CONSULTANTS_PATH);
    expect(financialIdx).toBeGreaterThanOrEqual(0);
    expect(consultantsIdx).toBe((financialIdx ?? -1) + 1);
  });
});

describe("internet providers services directory nav active state", () => {
  const INTERNET_PROVIDERS_PATH = "/netherlands/services/internet-providers/";

  it("treats the internet providers services route as live in local/preview", () => {
    expect(getRouteStatus(INTERNET_PROVIDERS_PATH)).toBe("live");
  });

  it("highlights Services for the internet providers directory path", () => {
    expect(getActiveNavKey(INTERNET_PROVIDERS_PATH)).toBe("services");
  });

  it("renders the Services menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.services.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === INTERNET_PROVIDERS_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(INTERNET_PROVIDERS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Services > Connectivity", () => {
    const rows = menuRowsForHref(INTERNET_PROVIDERS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("services");
    expect(rows[0].sectionTitle).toBe("Connectivity");
  });
});

describe("energy providers services directory nav active state", () => {
  const ENERGY_PROVIDERS_PATH = "/netherlands/services/energy-providers/";

  it("treats the energy providers services route as live in local/preview", () => {
    expect(getRouteStatus(ENERGY_PROVIDERS_PATH)).toBe("live");
  });

  it("highlights Services for the energy providers directory path", () => {
    expect(getActiveNavKey(ENERGY_PROVIDERS_PATH)).toBe("services");
  });

  it("renders the Services menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.services.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === ENERGY_PROVIDERS_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(ENERGY_PROVIDERS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Services > Connectivity", () => {
    const rows = menuRowsForHref(ENERGY_PROVIDERS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("services");
    expect(rows[0].sectionTitle).toBe("Connectivity");
  });
});

describe("phone providers services directory nav active state", () => {
  const PHONE_PROVIDERS_PATH = "/netherlands/services/phone-providers/";

  it("treats the phone providers services route as live in local/preview", () => {
    expect(getRouteStatus(PHONE_PROVIDERS_PATH)).toBe("live");
  });

  it("highlights Services for the phone providers directory path", () => {
    expect(getActiveNavKey(PHONE_PROVIDERS_PATH)).toBe("services");
  });

  it("renders the Services menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.services.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === PHONE_PROVIDERS_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(PHONE_PROVIDERS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Services > Connectivity", () => {
    const rows = menuRowsForHref(PHONE_PROVIDERS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("services");
    expect(rows[0].sectionTitle).toBe("Connectivity");
  });
});

describe("international schools services directory nav active state", () => {
  const INTERNATIONAL_SCHOOLS_SERVICES_PATH = "/netherlands/services/international-schools/";

  it("treats the international schools services route as live in local/preview", () => {
    expect(getRouteStatus(INTERNATIONAL_SCHOOLS_SERVICES_PATH)).toBe("live");
  });

  it("highlights Services for the international schools directory path", () => {
    expect(getActiveNavKey(INTERNATIONAL_SCHOOLS_SERVICES_PATH)).toBe("services");
  });

  it("renders the Services menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.services.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === INTERNATIONAL_SCHOOLS_SERVICES_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(INTERNATIONAL_SCHOOLS_SERVICES_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Services > Family & education", () => {
    const rows = menuRowsForHref(INTERNATIONAL_SCHOOLS_SERVICES_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("services");
    expect(rows[0].sectionTitle).toBe("Family & education");
  });
});

describe("daycare providers services directory nav active state", () => {
  const DAYCARE_PROVIDERS_SERVICES_PATH = "/netherlands/services/daycare-providers/";

  it("treats the daycare providers services route as live in local/preview", () => {
    expect(getRouteStatus(DAYCARE_PROVIDERS_SERVICES_PATH)).toBe("live");
  });

  it("highlights Services for the daycare providers directory path", () => {
    expect(getActiveNavKey(DAYCARE_PROVIDERS_SERVICES_PATH)).toBe("services");
  });

  it("renders the Services menu row as an active link, not a Soon row", () => {
    const item = MEGA_MENUS.services.sections
      .flatMap((section) => section.items)
      .find((navItem) => navItem.href === DAYCARE_PROVIDERS_SERVICES_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(DAYCARE_PROVIDERS_SERVICES_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Services > Family & education", () => {
    const rows = menuRowsForHref(DAYCARE_PROVIDERS_SERVICES_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("services");
    expect(rows[0].sectionTitle).toBe("Family & education");
  });
});

describe("daycare Netherlands nav active state", () => {
  const DAYCARE_PATH = "/netherlands/education/daycare-netherlands/";

  it("treats the daycare guide route as live", () => {
    expect(getRouteStatus(DAYCARE_PATH)).toBe("live");
  });

  it("highlights Living for the daycare guide path", () => {
    expect(getActiveNavKey(DAYCARE_PATH)).toBe("living");
  });

  it("renders the Living Childcare menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Childcare")
      ?.items.find((row) => row.label === "Daycare in the Netherlands");

    expect(item).toBeDefined();
    expect(item?.href).toBe(DAYCARE_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(DAYCARE_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Childcare", () => {
    const rows = menuRowsForHref(DAYCARE_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Childcare");
  });
});

describe("child benefits Netherlands nav active state", () => {
  const CHILD_BENEFITS_PATH = "/netherlands/family/child-benefits-netherlands/";
  const LEGACY_CHILD_BENEFIT_PATH = "/netherlands/family/child-benefit-netherlands/";

  it("treats the child benefits guide route as live", () => {
    expect(getRouteStatus(CHILD_BENEFITS_PATH)).toBe("live");
  });

  it("highlights Living for the child benefits guide path", () => {
    expect(getActiveNavKey(CHILD_BENEFITS_PATH)).toBe("living");
  });

  it("renders the Living Childcare menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Childcare")
      ?.items.find((row) => row.label === "Child Benefits");

    expect(item).toBeDefined();
    expect(item?.href).toBe(CHILD_BENEFITS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(CHILD_BENEFITS_PATH, item!)).toBe(true);
  });

  it("marks legacy child-benefit href active via alias", () => {
    const item = {
      label: "Child Benefits",
      href: CHILD_BENEFITS_PATH,
      navStatus: "live" as const,
    };
    expect(isNavItemActive(LEGACY_CHILD_BENEFIT_PATH, item)).toBe(true);
  });

  it("highlights Living for legacy pathname before redirect", () => {
    expect(getActiveNavKey(LEGACY_CHILD_BENEFIT_PATH)).toBe("living");
  });

  it("has exactly one menu row, in Living > Childcare", () => {
    const rows = menuRowsForHref(CHILD_BENEFITS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Childcare");
  });
});

describe("after-school care Netherlands nav active state", () => {
  const BSO_PATH = "/netherlands/education/after-school-care-netherlands/";

  it("treats the BSO guide route as live", () => {
    expect(getRouteStatus(BSO_PATH)).toBe("live");
  });

  it("highlights Living for the BSO guide path", () => {
    expect(getActiveNavKey(BSO_PATH)).toBe("living");
  });

  it("renders the Living Childcare menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Childcare")
      ?.items.find((row) => row.label === "After-School Care (BSO)");

    expect(item).toBeDefined();
    expect(item?.href).toBe(BSO_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(BSO_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Childcare", () => {
    const rows = menuRowsForHref(BSO_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Childcare");
  });
});

describe("before-school care Netherlands nav active state", () => {
  const VSO_PATH = "/netherlands/education/before-school-care-netherlands/";

  it("treats the VSO guide route as live", () => {
    expect(getRouteStatus(VSO_PATH)).toBe("live");
  });

  it("highlights Living for the VSO guide path", () => {
    expect(getActiveNavKey(VSO_PATH)).toBe("living");
  });

  it("renders the Living Childcare menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Childcare")
      ?.items.find((row) => row.label === "Before-School Care (VSO)");

    expect(item).toBeDefined();
    expect(item?.href).toBe(VSO_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(VSO_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Childcare", () => {
    const rows = menuRowsForHref(VSO_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Childcare");
  });
});

describe("parenting Netherlands nav active state", () => {
  const PARENTING_PATH = "/netherlands/family/parenting-netherlands/";

  it("treats the parenting guide route as live", () => {
    expect(getRouteStatus(PARENTING_PATH)).toBe("live");
  });

  it("highlights Culture for the parenting guide path", () => {
    expect(getActiveNavKey(PARENTING_PATH)).toBe("culture");
  });

  it("renders the Culture Family menu row as live and active", () => {
    const item = MEGA_MENUS.culture.sections
      .find((section) => section.title === "Family")
      ?.items.find((row) => row.label === "Parenting");

    expect(item).toBeDefined();
    expect(item?.href).toBe(PARENTING_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(PARENTING_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Culture > Family", () => {
    const rows = menuRowsForHref(PARENTING_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("culture");
    expect(rows[0].sectionTitle).toBe("Family");
  });
});

describe("healthcare for children Netherlands nav active state", () => {
  const HEALTHCARE_CHILDREN_PATH = "/netherlands/family/healthcare-for-children-netherlands/";

  it("treats the healthcare for children guide route as live", () => {
    expect(getRouteStatus(HEALTHCARE_CHILDREN_PATH)).toBe("live");
  });

  it("highlights Culture for the healthcare for children guide path", () => {
    expect(getActiveNavKey(HEALTHCARE_CHILDREN_PATH)).toBe("culture");
  });

  it("renders the Culture Family menu row as live and active", () => {
    const item = MEGA_MENUS.culture.sections
      .find((section) => section.title === "Family")
      ?.items.find((row) => row.label === "Healthcare for Children");

    expect(item).toBeDefined();
    expect(item?.href).toBe(HEALTHCARE_CHILDREN_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(HEALTHCARE_CHILDREN_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Culture > Family", () => {
    const rows = menuRowsForHref(HEALTHCARE_CHILDREN_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("culture");
    expect(rows[0].sectionTitle).toBe("Family");
  });
});

describe("family activities Netherlands nav active state", () => {
  const FAMILY_ACTIVITIES_PATH = "/netherlands/family/family-activities-netherlands/";

  it("treats the family activities guide route as live", () => {
    expect(getRouteStatus(FAMILY_ACTIVITIES_PATH)).toBe("live");
  });

  it("highlights Culture for the family activities guide path", () => {
    expect(getActiveNavKey(FAMILY_ACTIVITIES_PATH)).toBe("culture");
  });

  it("renders the Culture Family menu row as live and active", () => {
    const item = MEGA_MENUS.culture.sections
      .find((section) => section.title === "Family")
      ?.items.find((row) => row.label === "Family activities");

    expect(item).toBeDefined();
    expect(item?.href).toBe(FAMILY_ACTIVITIES_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(FAMILY_ACTIVITIES_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Culture > Family", () => {
    const rows = menuRowsForHref(FAMILY_ACTIVITIES_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("culture");
    expect(rows[0].sectionTitle).toBe("Family");
  });
});

describe("gp Netherlands nav active state", () => {
  const GP_NETHERLANDS_PATH = "/netherlands/health/gp-netherlands/";

  it("treats the gp Netherlands guide route as live", () => {
    expect(getRouteStatus(GP_NETHERLANDS_PATH)).toBe("live");
  });

  it("highlights Living for the gp Netherlands guide path", () => {
    expect(getActiveNavKey(GP_NETHERLANDS_PATH)).toBe("living");
  });

  it("renders the Living Healthcare menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Healthcare")
      ?.items.find((row) => row.label === "General Practitioner (GP)");

    expect(item).toBeDefined();
    expect(item?.href).toBe(GP_NETHERLANDS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(GP_NETHERLANDS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Healthcare", () => {
    const rows = menuRowsForHref(GP_NETHERLANDS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Healthcare");
  });
});

describe("dentists Netherlands nav active state", () => {
  const DENTISTS_NETHERLANDS_PATH = "/netherlands/health/dentists-netherlands/";

  it("treats the dentists Netherlands guide route as live", () => {
    expect(getRouteStatus(DENTISTS_NETHERLANDS_PATH)).toBe("live");
  });

  it("highlights Living for the dentists Netherlands guide path", () => {
    expect(getActiveNavKey(DENTISTS_NETHERLANDS_PATH)).toBe("living");
  });

  it("renders the Living Healthcare menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Healthcare")
      ?.items.find((row) => row.label === "Dentists");

    expect(item).toBeDefined();
    expect(item?.href).toBe(DENTISTS_NETHERLANDS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(DENTISTS_NETHERLANDS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Healthcare", () => {
    const rows = menuRowsForHref(DENTISTS_NETHERLANDS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Healthcare");
  });
});

describe("emergency healthcare Netherlands nav active state", () => {
  const EMERGENCY_HEALTHCARE_PATH = "/netherlands/health/emergency-healthcare-netherlands/";

  it("treats the emergency healthcare Netherlands guide route as live", () => {
    expect(getRouteStatus(EMERGENCY_HEALTHCARE_PATH)).toBe("live");
  });

  it("highlights Living for the emergency healthcare Netherlands guide path", () => {
    expect(getActiveNavKey(EMERGENCY_HEALTHCARE_PATH)).toBe("living");
  });

  it("renders the Living Healthcare menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Healthcare")
      ?.items.find((row) => row.label === "Emergency Healthcare");

    expect(item).toBeDefined();
    expect(item?.href).toBe(EMERGENCY_HEALTHCARE_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(EMERGENCY_HEALTHCARE_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Healthcare", () => {
    const rows = menuRowsForHref(EMERGENCY_HEALTHCARE_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Healthcare");
  });

  it("keeps Emergencies & safety as a separate Living Daily life item", () => {
    const safety = MEGA_MENUS.living.sections
      .find((section) => section.title === "Daily life")
      ?.items.find((row) => row.label === "Emergencies & safety");

    expect(safety).toBeDefined();
    expect(safety?.href).toBe("/netherlands/living/emergencies-safety/");
  });
});

describe("hospitals Netherlands nav active state", () => {
  const HOSPITALS_NETHERLANDS_PATH = "/netherlands/health/hospitals-netherlands/";

  it("treats the hospitals Netherlands guide route as live", () => {
    expect(getRouteStatus(HOSPITALS_NETHERLANDS_PATH)).toBe("live");
  });

  it("highlights Living for the hospitals Netherlands guide path", () => {
    expect(getActiveNavKey(HOSPITALS_NETHERLANDS_PATH)).toBe("living");
  });

  it("renders the Living Healthcare menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Healthcare")
      ?.items.find((row) => row.label === "Hospitals");

    expect(item).toBeDefined();
    expect(item?.href).toBe(HOSPITALS_NETHERLANDS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(HOSPITALS_NETHERLANDS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Healthcare", () => {
    const rows = menuRowsForHref(HOSPITALS_NETHERLANDS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Healthcare");
  });

  it("sits between Dentists and Emergency Healthcare in Healthcare", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Healthcare")
        ?.items.map((row) => row.label) ?? [];
    const dentists = labels.indexOf("Dentists");
    const hospitals = labels.indexOf("Hospitals");
    const emergency = labels.indexOf("Emergency Healthcare");

    expect(dentists).toBeGreaterThanOrEqual(0);
    expect(hospitals).toBe(dentists + 1);
    expect(emergency).toBe(hospitals + 1);
  });
});

describe("mental healthcare Netherlands nav active state", () => {
  const MENTAL_HEALTHCARE_PATH = "/netherlands/health/mental-healthcare-netherlands/";

  it("treats the mental healthcare Netherlands guide route as live", () => {
    expect(getRouteStatus(MENTAL_HEALTHCARE_PATH)).toBe("live");
  });

  it("highlights Living for the mental healthcare Netherlands guide path", () => {
    expect(getActiveNavKey(MENTAL_HEALTHCARE_PATH)).toBe("living");
  });

  it("renders the Living Healthcare menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Healthcare")
      ?.items.find((row) => row.label === "Mental Healthcare");

    expect(item).toBeDefined();
    expect(item?.href).toBe(MENTAL_HEALTHCARE_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(MENTAL_HEALTHCARE_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Healthcare", () => {
    const rows = menuRowsForHref(MENTAL_HEALTHCARE_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Healthcare");
  });

  it("sits between Emergency Healthcare and Pharmacies in Healthcare", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Healthcare")
        ?.items.map((row) => row.label) ?? [];
    const emergency = labels.indexOf("Emergency Healthcare");
    const mental = labels.indexOf("Mental Healthcare");
    const pharmacies = labels.indexOf("Pharmacies");

    expect(emergency).toBeGreaterThanOrEqual(0);
    expect(mental).toBe(emergency + 1);
    expect(pharmacies).toBe(mental + 1);
  });
});

describe("pharmacies Netherlands nav active state", () => {
  const PHARMACIES_PATH = "/netherlands/health/pharmacies-netherlands/";

  it("treats the pharmacies Netherlands guide route as live", () => {
    expect(getRouteStatus(PHARMACIES_PATH)).toBe("live");
  });

  it("highlights Living for the pharmacies Netherlands guide path", () => {
    expect(getActiveNavKey(PHARMACIES_PATH)).toBe("living");
  });

  it("renders the Living Healthcare menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Healthcare")
      ?.items.find((row) => row.label === "Pharmacies");

    expect(item).toBeDefined();
    expect(item?.href).toBe(PHARMACIES_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(PHARMACIES_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Healthcare", () => {
    const rows = menuRowsForHref(PHARMACIES_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Healthcare");
  });

  it("sits between Mental Healthcare and Prescriptions in Healthcare", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Healthcare")
        ?.items.map((row) => row.label) ?? [];
    const mental = labels.indexOf("Mental Healthcare");
    const pharmacies = labels.indexOf("Pharmacies");
    const prescriptions = labels.indexOf("Prescriptions");

    expect(mental).toBeGreaterThanOrEqual(0);
    expect(pharmacies).toBe(mental + 1);
    expect(prescriptions).toBe(pharmacies + 1);
    expect(labels.indexOf("Physiotherapy")).toBe(prescriptions + 1);
  });
});

describe("prescriptions Netherlands nav active state", () => {
  const PRESCRIPTIONS_PATH = "/netherlands/health/prescriptions-netherlands/";

  it("treats the prescriptions Netherlands guide route as live", () => {
    expect(getRouteStatus(PRESCRIPTIONS_PATH)).toBe("live");
  });

  it("highlights Living for the prescriptions Netherlands guide path", () => {
    expect(getActiveNavKey(PRESCRIPTIONS_PATH)).toBe("living");
  });

  it("renders the Living Healthcare menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Healthcare")
      ?.items.find((row) => row.label === "Prescriptions");

    expect(item).toBeDefined();
    expect(item?.href).toBe(PRESCRIPTIONS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(PRESCRIPTIONS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Healthcare", () => {
    const rows = menuRowsForHref(PRESCRIPTIONS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Healthcare");
  });

  it("sits between Pharmacies and Physiotherapy in Healthcare", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Healthcare")
        ?.items.map((row) => row.label) ?? [];
    const pharmacies = labels.indexOf("Pharmacies");
    const prescriptions = labels.indexOf("Prescriptions");
    const physiotherapy = labels.indexOf("Physiotherapy");

    expect(pharmacies).toBeGreaterThanOrEqual(0);
    expect(prescriptions).toBe(pharmacies + 1);
    expect(physiotherapy).toBe(prescriptions + 1);
  });
});

describe("physiotherapy Netherlands nav active state", () => {
  const PHYSIOTHERAPY_PATH = "/netherlands/health/physiotherapy-netherlands/";

  it("treats the physiotherapy Netherlands guide route as live", () => {
    expect(getRouteStatus(PHYSIOTHERAPY_PATH)).toBe("live");
  });

  it("highlights Living for the physiotherapy Netherlands guide path", () => {
    expect(getActiveNavKey(PHYSIOTHERAPY_PATH)).toBe("living");
  });

  it("renders the Living Healthcare menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Healthcare")
      ?.items.find((row) => row.label === "Physiotherapy");

    expect(item).toBeDefined();
    expect(item?.href).toBe(PHYSIOTHERAPY_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(PHYSIOTHERAPY_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Healthcare", () => {
    const rows = menuRowsForHref(PHYSIOTHERAPY_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Healthcare");
  });

  it("sits between Prescriptions and Maternity care in Healthcare", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Healthcare")
        ?.items.map((row) => row.label) ?? [];
    const prescriptions = labels.indexOf("Prescriptions");
    const physiotherapy = labels.indexOf("Physiotherapy");
    const maternity = labels.indexOf("Maternity care");

    expect(prescriptions).toBeGreaterThanOrEqual(0);
    expect(physiotherapy).toBe(prescriptions + 1);
    expect(maternity).toBe(physiotherapy + 1);
  });
});

describe("maternity care Netherlands nav active state", () => {
  const MATERNITY_PATH = "/netherlands/health/maternity-care-netherlands/";

  it("treats the maternity care Netherlands guide route as live", () => {
    expect(getRouteStatus(MATERNITY_PATH)).toBe("live");
  });

  it("highlights Living for the maternity care Netherlands guide path", () => {
    expect(getActiveNavKey(MATERNITY_PATH)).toBe("living");
  });

  it("renders the Living Healthcare menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Healthcare")
      ?.items.find((row) => row.label === "Maternity care");

    expect(item).toBeDefined();
    expect(item?.href).toBe(MATERNITY_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(MATERNITY_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Healthcare", () => {
    const rows = menuRowsForHref(MATERNITY_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Healthcare");
  });

  it("sits between Physiotherapy and Health insurance comparison in Healthcare", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Healthcare")
        ?.items.map((row) => row.label) ?? [];
    const physiotherapy = labels.indexOf("Physiotherapy");
    const maternity = labels.indexOf("Maternity care");
    const comparison = labels.indexOf("Health insurance comparison");

    expect(physiotherapy).toBeGreaterThanOrEqual(0);
    expect(maternity).toBe(physiotherapy + 1);
    expect(comparison).toBe(maternity + 1);
  });
});

describe("pregnancy Netherlands nav active state", () => {
  const PREGNANCY_PATH = "/netherlands/family/pregnancy-netherlands/";

  it("treats the pregnancy Netherlands guide route as live in local/preview", () => {
    expect(getRouteStatus(PREGNANCY_PATH)).toBe("live");
  });

  it("highlights Living for the pregnancy Netherlands guide path", () => {
    expect(getActiveNavKey(PREGNANCY_PATH)).toBe("living");
  });

  it("renders the Living Family & pets menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Family & pets")
      ?.items.find((row) => row.label === "Pregnancy");

    expect(item).toBeDefined();
    expect(item?.href).toBe(PREGNANCY_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(PREGNANCY_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Family & pets", () => {
    const rows = menuRowsForHref(PREGNANCY_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Family & pets");
  });

  it("sits first in Family & pets, before Giving birth", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Family & pets")
        ?.items.map((row) => row.label) ?? [];
    const pregnancy = labels.indexOf("Pregnancy");
    const givingBirth = labels.indexOf("Giving birth");
    const pets = labels.indexOf("Pets");

    expect(pregnancy).toBe(0);
    expect(givingBirth).toBe(pregnancy + 1);
    expect(pets).toBe(givingBirth + 1);
  });
});

describe("giving birth Netherlands nav active state", () => {
  const GIVING_BIRTH_PATH = "/netherlands/family/giving-birth-netherlands/";

  it("treats the giving birth Netherlands guide route as live in local/preview", () => {
    expect(getRouteStatus(GIVING_BIRTH_PATH)).toBe("live");
  });

  it("highlights Living for the giving birth Netherlands guide path", () => {
    expect(getActiveNavKey(GIVING_BIRTH_PATH)).toBe("living");
  });

  it("renders the Living Family & pets menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Family & pets")
      ?.items.find((row) => row.label === "Giving birth");

    expect(item).toBeDefined();
    expect(item?.href).toBe(GIVING_BIRTH_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(GIVING_BIRTH_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Family & pets", () => {
    const rows = menuRowsForHref(GIVING_BIRTH_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Family & pets");
  });

  it("sits between Pregnancy and Pets in Family & pets", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Family & pets")
        ?.items.map((row) => row.label) ?? [];
    const pregnancy = labels.indexOf("Pregnancy");
    const givingBirth = labels.indexOf("Giving birth");
    const pets = labels.indexOf("Pets");

    expect(pregnancy).toBeGreaterThanOrEqual(0);
    expect(givingBirth).toBe(pregnancy + 1);
    expect(pets).toBe(givingBirth + 1);
  });
});

describe("pets Netherlands nav active state", () => {
  const PETS_PATH = "/netherlands/family/pets-netherlands/";

  it("treats the pets Netherlands guide route as live in local/preview", () => {
    expect(getRouteStatus(PETS_PATH)).toBe("live");
  });

  it("highlights Living for the pets Netherlands guide path", () => {
    expect(getActiveNavKey(PETS_PATH)).toBe("living");
  });

  it("renders the Living Family & pets menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Family & pets")
      ?.items.find((row) => row.label === "Pets");

    expect(item).toBeDefined();
    expect(item?.href).toBe(PETS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(PETS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Family & pets", () => {
    const rows = menuRowsForHref(PETS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Family & pets");
  });

  it("does not duplicate or replace the Move Bringing pets item", () => {
    const bringing = MEGA_MENUS.moving.sections
      .flatMap((section) => section.items)
      .find((row) => row.label === "Bringing pets");
    const petsRows = menuRowsForHref(PETS_PATH);
    const bringingRows = menuRowsForHref("/netherlands/bringing-pets-to-netherlands/");

    expect(bringing).toBeDefined();
    expect(bringing?.href).toContain("bringing-pets-to-netherlands");
    expect(petsRows).toHaveLength(1);
    expect(bringingRows.some((row) => row.menuKey === "moving")).toBe(true);
  });

  it("sits after Giving birth as the last Family & pets item", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Family & pets")
        ?.items.map((row) => row.label) ?? [];
    const givingBirth = labels.indexOf("Giving birth");
    const pets = labels.indexOf("Pets");

    expect(givingBirth).toBeGreaterThanOrEqual(0);
    expect(pets).toBe(givingBirth + 1);
    expect(pets).toBe(labels.length - 1);
  });
});

describe("health insurance comparison Netherlands nav active state", () => {
  const COMPARISON_PATH = "/netherlands/health/health-insurance-comparison-netherlands/";

  it("treats the health insurance comparison Netherlands guide route as live", () => {
    expect(getRouteStatus(COMPARISON_PATH)).toBe("live");
  });

  it("highlights Living for the health insurance comparison Netherlands guide path", () => {
    expect(getActiveNavKey(COMPARISON_PATH)).toBe("living");
  });

  it("renders the Living Healthcare menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Healthcare")
      ?.items.find((row) => row.label === "Health insurance comparison");

    expect(item).toBeDefined();
    expect(item?.href).toBe(COMPARISON_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(COMPARISON_PATH, item!)).toBe(true);
  });

  it("updates Services Compare health insurance href to the new health route", () => {
    const item = MEGA_MENUS.services.sections
      .find((section) => section.title === "Health & insurance")
      ?.items.find((row) => row.label === "Compare health insurance");

    expect(item).toBeDefined();
    expect(item?.href).toBe(COMPARISON_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(COMPARISON_PATH, item!)).toBe(true);
  });

  it("has Living Healthcare and Services Health & insurance menu rows", () => {
    const rows = menuRowsForHref(COMPARISON_PATH);
    const keys = rows.map((row) => `${row.menuKey}:${row.sectionTitle}`);

    expect(keys).toContain("living:Healthcare");
    expect(keys).toContain("services:Health & insurance");
    expect(rows).toHaveLength(2);
  });

  it("sits after Maternity care as the last Healthcare item", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Healthcare")
        ?.items.map((row) => row.label) ?? [];
    const maternity = labels.indexOf("Maternity care");
    const comparison = labels.indexOf("Health insurance comparison");

    expect(maternity).toBeGreaterThanOrEqual(0);
    expect(comparison).toBe(maternity + 1);
    expect(comparison).toBe(labels.length - 1);
  });
});

describe("rental scams Netherlands nav active state", () => {
  const RENTAL_SCAMS_PATH = "/netherlands/housing/rental-scams-netherlands/";

  it("treats the rental scams guide route as live", () => {
    expect(getRouteStatus(RENTAL_SCAMS_PATH)).toBe("live");
  });

  it("highlights Move for the rental scams guide path", () => {
    expect(getActiveNavKey(RENTAL_SCAMS_PATH)).toBe("moving");
  });

  it("renders the Living Housing menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Housing")
      ?.items.find((row) => row.label === "Rental Scams");

    expect(item).toBeDefined();
    expect(item?.href).toBe(RENTAL_SCAMS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(RENTAL_SCAMS_PATH, item!)).toBe(true);
  });

  it("renders the Move Housing menu row as live and active", () => {
    const item = MEGA_MENUS.moving.sections
      .find((section) => section.title === "Housing")
      ?.items.find((row) => row.label === "Rental Scams");

    expect(item).toBeDefined();
    expect(item?.href).toBe(RENTAL_SCAMS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(RENTAL_SCAMS_PATH, item!)).toBe(true);
  });

  it("has Move Housing and Living Housing menu rows", () => {
    const rows = menuRowsForHref(RENTAL_SCAMS_PATH);
    const keys = rows.map((row) => `${row.menuKey}:${row.sectionTitle}`);

    expect(keys).toContain("moving:Housing");
    expect(keys).toContain("living:Housing");
    expect(rows).toHaveLength(2);
  });
});

describe("expat loneliness Netherlands nav active state", () => {
  const LONELINESS_PATH = "/netherlands/life/expat-loneliness-netherlands/";

  it("treats the expat loneliness guide route as live", () => {
    expect(getRouteStatus(LONELINESS_PATH)).toBe("live");
  });

  it("highlights Living for the loneliness guide path", () => {
    expect(getActiveNavKey(LONELINESS_PATH)).toBe("living");
  });

  it("renders the Living Life menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Life in the Netherlands")
      ?.items.find((row) => row.label === "Expat Loneliness");

    expect(item).toBeDefined();
    expect(item?.href).toBe(LONELINESS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(LONELINESS_PATH, item!)).toBe(true);
  });

  it("has Living Life and Culture Social norms menu rows", () => {
    const rows = menuRowsForHref(LONELINESS_PATH);
    const keys = rows.map((row) => `${row.menuKey}:${row.sectionTitle}`);

    expect(keys).toContain("living:Life in the Netherlands");
    expect(keys).toContain("culture:Social norms");
    expect(rows).toHaveLength(2);
  });
});

describe("cash vs card Netherlands nav active state", () => {
  const CASH_VS_CARD_PATH = "/netherlands/money/banking/cash-vs-card/";

  it("treats the cash vs card guide route as live", () => {
    expect(getRouteStatus(CASH_VS_CARD_PATH)).toBe("live");
  });

  it("highlights Money for the cash vs card guide path", () => {
    expect(getActiveNavKey(CASH_VS_CARD_PATH)).toBe("money");
  });

  it("renders the Money Banking menu row as live and active", () => {
    const item = MEGA_MENUS.money.sections
      .find((section) => section.title === "Banking")
      ?.items.find((row) => row.label === "Cash vs card");

    expect(item).toBeDefined();
    expect(item?.href).toBe(CASH_VS_CARD_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(CASH_VS_CARD_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Money > Banking", () => {
    const rows = menuRowsForHref(CASH_VS_CARD_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("money");
    expect(rows[0].sectionTitle).toBe("Banking");
  });

  it("sits between How payments work and Banking fees & costs", () => {
    const labels =
      MEGA_MENUS.money.sections
        .find((section) => section.title === "Banking")
        ?.items.map((row) => row.label) ?? [];
    const howPayments = labels.indexOf("How payments work");
    const cashVsCard = labels.indexOf("Cash vs card");
    const debitCards = labels.indexOf("Debit cards");
    const creditCards = labels.indexOf("Credit cards");
    const fees = labels.indexOf("Banking fees & costs");

    expect(howPayments).toBeGreaterThanOrEqual(0);
    expect(cashVsCard).toBe(howPayments + 1);
    expect(debitCards).toBe(cashVsCard + 1);
    expect(creditCards).toBe(debitCards + 1);
    expect(fees).toBe(creditCards + 1);
  });
});

describe("joint bank accounts Netherlands nav active state", () => {
  const JOINT_BANK_ACCOUNTS_PATH = "/netherlands/money/banking/joint-accounts/";

  it("treats the joint bank accounts guide route as live", () => {
    expect(getRouteStatus(JOINT_BANK_ACCOUNTS_PATH)).toBe("live");
  });

  it("highlights Money for the joint bank accounts guide path", () => {
    expect(getActiveNavKey(JOINT_BANK_ACCOUNTS_PATH)).toBe("money");
  });

  it("renders the Money Banking menu row as live and active", () => {
    const item = MEGA_MENUS.money.sections
      .find((section) => section.title === "Banking")
      ?.items.find((row) => row.label === "Joint bank accounts");

    expect(item).toBeDefined();
    expect(item?.href).toBe(JOINT_BANK_ACCOUNTS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(JOINT_BANK_ACCOUNTS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Money > Banking", () => {
    const rows = menuRowsForHref(JOINT_BANK_ACCOUNTS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("money");
    expect(rows[0].sectionTitle).toBe("Banking");
  });

  it("sits after Types of bank accounts and before Student bank accounts", () => {
    const labels =
      MEGA_MENUS.money.sections
        .find((section) => section.title === "Banking")
        ?.items.map((row) => row.label) ?? [];
    const typesOfAccounts = labels.indexOf("Types of bank accounts");
    const jointAccounts = labels.indexOf("Joint bank accounts");
    const studentAccounts = labels.indexOf("Student bank accounts");
    const howPayments = labels.indexOf("How payments work");

    expect(typesOfAccounts).toBeGreaterThanOrEqual(0);
    expect(jointAccounts).toBe(typesOfAccounts + 1);
    expect(studentAccounts).toBe(jointAccounts + 1);
    expect(howPayments).toBe(studentAccounts + 1);
  });
});

describe("student bank accounts Netherlands nav active state", () => {
  const STUDENT_BANK_ACCOUNTS_PATH = "/netherlands/money/banking/student-accounts/";

  it("treats the student bank accounts guide route as live", () => {
    expect(getRouteStatus(STUDENT_BANK_ACCOUNTS_PATH)).toBe("live");
  });

  it("highlights Money for the student bank accounts guide path", () => {
    expect(getActiveNavKey(STUDENT_BANK_ACCOUNTS_PATH)).toBe("money");
  });

  it("renders the Money Banking menu row as live and active", () => {
    const item = MEGA_MENUS.money.sections
      .find((section) => section.title === "Banking")
      ?.items.find((row) => row.label === "Student bank accounts");

    expect(item).toBeDefined();
    expect(item?.href).toBe(STUDENT_BANK_ACCOUNTS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(STUDENT_BANK_ACCOUNTS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Money > Banking", () => {
    const rows = menuRowsForHref(STUDENT_BANK_ACCOUNTS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("money");
    expect(rows[0].sectionTitle).toBe("Banking");
  });
});

describe("debit cards Netherlands nav active state", () => {
  const DEBIT_CARDS_PATH = "/netherlands/money/banking/debit-cards/";

  it("treats the debit cards guide route as live", () => {
    expect(getRouteStatus(DEBIT_CARDS_PATH)).toBe("live");
  });

  it("highlights Money for the debit cards guide path", () => {
    expect(getActiveNavKey(DEBIT_CARDS_PATH)).toBe("money");
  });

  it("renders the Money Banking menu row as live and active", () => {
    const item = MEGA_MENUS.money.sections
      .find((section) => section.title === "Banking")
      ?.items.find((row) => row.label === "Debit cards");

    expect(item).toBeDefined();
    expect(item?.href).toBe(DEBIT_CARDS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(DEBIT_CARDS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Money > Banking", () => {
    const rows = menuRowsForHref(DEBIT_CARDS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("money");
    expect(rows[0].sectionTitle).toBe("Banking");
  });

  it("sits between Cash vs card and Credit cards", () => {
    const labels =
      MEGA_MENUS.money.sections
        .find((section) => section.title === "Banking")
        ?.items.map((row) => row.label) ?? [];
    const cashVsCard = labels.indexOf("Cash vs card");
    const debitCards = labels.indexOf("Debit cards");
    const creditCards = labels.indexOf("Credit cards");

    expect(cashVsCard).toBeGreaterThanOrEqual(0);
    expect(debitCards).toBe(cashVsCard + 1);
    expect(creditCards).toBe(debitCards + 1);
  });
});

describe("credit cards Netherlands nav active state", () => {
  const CREDIT_CARDS_PATH = "/netherlands/money/banking/credit-cards/";

  it("treats the credit cards guide route as live", () => {
    expect(getRouteStatus(CREDIT_CARDS_PATH)).toBe("live");
  });

  it("highlights Money for the credit cards guide path", () => {
    expect(getActiveNavKey(CREDIT_CARDS_PATH)).toBe("money");
  });

  it("renders the Money Banking menu row as live and active", () => {
    const item = MEGA_MENUS.money.sections
      .find((section) => section.title === "Banking")
      ?.items.find((row) => row.label === "Credit cards");

    expect(item).toBeDefined();
    expect(item?.href).toBe(CREDIT_CARDS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(CREDIT_CARDS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Money > Banking", () => {
    const rows = menuRowsForHref(CREDIT_CARDS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("money");
    expect(rows[0].sectionTitle).toBe("Banking");
  });

  it("sits between Debit cards and Banking fees & costs", () => {
    const labels =
      MEGA_MENUS.money.sections
        .find((section) => section.title === "Banking")
        ?.items.map((row) => row.label) ?? [];
    const debitCards = labels.indexOf("Debit cards");
    const creditCards = labels.indexOf("Credit cards");
    const fees = labels.indexOf("Banking fees & costs");

    expect(debitCards).toBeGreaterThanOrEqual(0);
    expect(creditCards).toBe(debitCards + 1);
    expect(fees).toBe(creditCards + 1);
  });
});

describe("Wise vs Revolut Netherlands nav active state", () => {
  const WISE_VS_REVOLUT_PATH = "/netherlands/money/banking/wise-vs-revolut/";

  it("treats the Wise vs Revolut guide route as live", () => {
    expect(getRouteStatus(WISE_VS_REVOLUT_PATH)).toBe("live");
  });

  it("highlights Money for the Wise vs Revolut guide path", () => {
    expect(getActiveNavKey(WISE_VS_REVOLUT_PATH)).toBe("money");
  });

  it("renders the Money Banking menu row as live and active", () => {
    const item = MEGA_MENUS.money.sections
      .find((section) => section.title === "Banking")
      ?.items.find((row) => row.label === "Wise vs Revolut");

    expect(item).toBeDefined();
    expect(item?.href).toBe(WISE_VS_REVOLUT_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(WISE_VS_REVOLUT_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Money > Banking", () => {
    const rows = menuRowsForHref(WISE_VS_REVOLUT_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("money");
    expect(rows[0].sectionTitle).toBe("Banking");
  });

  it("sits after International transfers and leaves FX abroad as a separate roadmap row", () => {
    const labels =
      MEGA_MENUS.money.sections
        .find((section) => section.title === "Banking")
        ?.items.map((row) => row.label) ?? [];
    const internationalTransfers = labels.indexOf("International transfers");
    const wiseVsRevolut = labels.indexOf("Wise vs Revolut");
    const fxAbroad = labels.indexOf("FX abroad");

    expect(internationalTransfers).toBeGreaterThanOrEqual(0);
    expect(wiseVsRevolut).toBe(internationalTransfers + 1);
    expect(fxAbroad).toBeGreaterThan(wiseVsRevolut);
    expect(labels.filter((label) => label === "Wise vs Revolut")).toHaveLength(1);
  });
});

describe("best banks for expats Netherlands nav active state", () => {
  const BEST_BANKS_EXPATS_PATH = "/netherlands/money/banking/best-banks-expats/";

  it("treats the best banks for expats guide route as live", () => {
    expect(getRouteStatus(BEST_BANKS_EXPATS_PATH)).toBe("live");
  });

  it("highlights Money for the best banks for expats guide path", () => {
    expect(getActiveNavKey(BEST_BANKS_EXPATS_PATH)).toBe("money");
  });

  it("renders the Money Banking menu row as live and active", () => {
    const item = MEGA_MENUS.money.sections
      .find((section) => section.title === "Banking")
      ?.items.find((row) => row.label === "Best banks for expats");

    expect(item).toBeDefined();
    expect(item?.href).toBe(BEST_BANKS_EXPATS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(BEST_BANKS_EXPATS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Money > Banking", () => {
    const rows = menuRowsForHref(BEST_BANKS_EXPATS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("money");
    expect(rows[0].sectionTitle).toBe("Banking");
  });

  it("sits between Traditional vs digital banks and International transfers", () => {
    const labels =
      MEGA_MENUS.money.sections
        .find((section) => section.title === "Banking")
        ?.items.map((row) => row.label) ?? [];
    const tradDigital = labels.indexOf("Traditional vs digital banks");
    const bestBanks = labels.indexOf("Best banks for expats");
    const transfers = labels.indexOf("International transfers");

    expect(tradDigital).toBeGreaterThanOrEqual(0);
    expect(bestBanks).toBe(tradDigital + 1);
    expect(transfers).toBe(bestBanks + 1);
  });
});

describe("international transfers Netherlands nav active state", () => {
  const INTERNATIONAL_TRANSFERS_FROM_NL_PATH = "/netherlands/money/banking/international-transfers/";

  it("treats the international transfers guide route as live", () => {
    expect(getRouteStatus(INTERNATIONAL_TRANSFERS_FROM_NL_PATH)).toBe("live");
  });

  it("highlights Money for the international transfers guide path", () => {
    expect(getActiveNavKey(INTERNATIONAL_TRANSFERS_FROM_NL_PATH)).toBe("money");
  });

  it("renders the Money Banking menu row as live and active", () => {
    const item = MEGA_MENUS.money.sections
      .find((section) => section.title === "Banking")
      ?.items.find((row) => row.label === "International transfers");

    expect(item).toBeDefined();
    expect(item?.href).toBe(INTERNATIONAL_TRANSFERS_FROM_NL_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(INTERNATIONAL_TRANSFERS_FROM_NL_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Money > Banking", () => {
    const rows = menuRowsForHref(INTERNATIONAL_TRANSFERS_FROM_NL_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("money");
    expect(rows[0].sectionTitle).toBe("Banking");
  });

  it("sits between Best banks for expats and Wise vs Revolut", () => {
    const labels =
      MEGA_MENUS.money.sections
        .find((section) => section.title === "Banking")
        ?.items.map((row) => row.label) ?? [];
    const bestBanks = labels.indexOf("Best banks for expats");
    const transfers = labels.indexOf("International transfers");
    const wiseVsRevolut = labels.indexOf("Wise vs Revolut");
    const safety = labels.indexOf("Banking safety & fraud");

    expect(bestBanks).toBeGreaterThanOrEqual(0);
    expect(transfers).toBe(bestBanks + 1);
    expect(wiseVsRevolut).toBe(transfers + 1);
    expect(safety).toBe(wiseVsRevolut + 1);
  });
});

describe("open bank account Netherlands nav active state", () => {
  const OPEN_BANK_ACCOUNT_NETHERLANDS_PATH = "/netherlands/open-bank-account-netherlands/";
  /** Nav config authors this href without a trailing slash. */
  const OPEN_BANK_ACCOUNT_NAV_HREF = "/netherlands/open-bank-account-netherlands";

  it("treats the open bank account guide route as live", () => {
    expect(getRouteStatus(OPEN_BANK_ACCOUNT_NETHERLANDS_PATH)).toBe("live");
  });

  it("highlights Move for the open bank account guide path", () => {
    expect(getActiveNavKey(OPEN_BANK_ACCOUNT_NETHERLANDS_PATH)).toBe("moving");
  });

  it("renders the Move Early setup Open a bank account row as live and active", () => {
    const item = MEGA_MENUS.moving.sections
      .find((section) => section.title === "Early setup")
      ?.items.find((row) => row.label === "Open a bank account");

    expect(item).toBeDefined();
    expect(item?.href).toBe(OPEN_BANK_ACCOUNT_NAV_HREF);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(OPEN_BANK_ACCOUNT_NETHERLANDS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Move > Early setup", () => {
    const rows = menuRowsForHref(OPEN_BANK_ACCOUNT_NAV_HREF);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("moving");
    expect(rows[0].sectionTitle).toBe("Early setup");
  });

  it("does not duplicate Open a bank account under Money > Banking", () => {
    const moneyBankingRows =
      MEGA_MENUS.money.sections
        .find((section) => section.title === "Banking")
        ?.items.filter(
          (row) =>
            row.label === "Open a bank account" ||
            row.href === OPEN_BANK_ACCOUNT_NAV_HREF ||
            row.href === OPEN_BANK_ACCOUNT_NETHERLANDS_PATH
        ) ?? [];

    expect(moneyBankingRows).toHaveLength(0);
  });
});

describe("joint and student bank accounts nav rows", () => {
  const JOINT_PATH = "/netherlands/money/banking/joint-accounts/";
  const STUDENT_PATH = "/netherlands/money/banking/student-accounts/";

  it("authors both rows under Money > Banking after Types of bank accounts", () => {
    const labels =
      MEGA_MENUS.money.sections
        .find((section) => section.title === "Banking")
        ?.items.map((row) => row.label) ?? [];
    const types = labels.indexOf("Types of bank accounts");
    const joint = labels.indexOf("Joint bank accounts");
    const student = labels.indexOf("Student bank accounts");
    const payments = labels.indexOf("How payments work");

    expect(types).toBeGreaterThanOrEqual(0);
    expect(joint).toBe(types + 1);
    expect(student).toBe(joint + 1);
    expect(payments).toBe(student + 1);
  });

  it("has exactly one menu row each in Money > Banking", () => {
    expect(menuRowsForHref(JOINT_PATH)).toHaveLength(1);
    expect(menuRowsForHref(JOINT_PATH)[0].menuKey).toBe("money");
    expect(menuRowsForHref(STUDENT_PATH)).toHaveLength(1);
    expect(menuRowsForHref(STUDENT_PATH)[0].menuKey).toBe("money");
  });
});

describe("cost of living Netherlands nav row", () => {
  const COST_OF_LIVING_PATH = "/netherlands/money/cost-of-living-netherlands/";

  it("authors Cost of living under Money > Cost of living & everyday money before Insurance", () => {
    const sectionTitles = MEGA_MENUS.money.sections.map((section) => section.title);
    const costIdx = sectionTitles.indexOf("Cost of living & everyday money");
    const insuranceIdx = sectionTitles.indexOf("Insurance & expat tax topics");

    expect(costIdx).toBeGreaterThanOrEqual(0);
    expect(insuranceIdx).toBeGreaterThan(costIdx);

    const labels =
      MEGA_MENUS.money.sections
        .find((section) => section.title === "Cost of living & everyday money")
        ?.items.map((row) => row.label) ?? [];

    expect(labels[0]).toBe("Cost of living in the Netherlands");
    expect(labels).not.toContain("Cost of living calculator");
  });

  it("has exactly one menu row in Money and highlights Money", () => {
    const rows = menuRowsForHref(COST_OF_LIVING_PATH);
    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("money");
    expect(rows[0].sectionTitle).toBe("Cost of living & everyday money");
    expect(getActiveNavKey(COST_OF_LIVING_PATH)).toBe("money");
  });

  it("renders the Cost of living row as live and active", () => {
    const item = MEGA_MENUS.money.sections
      .find((section) => section.title === "Cost of living & everyday money")
      ?.items.find((row) => row.href === COST_OF_LIVING_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(COST_OF_LIVING_PATH, item!)).toBe(true);
  });
});

describe("monthly budget Netherlands nav row", () => {
  const MONTHLY_BUDGET_PATH = "/netherlands/money/monthly-budget-netherlands/";

  it("has exactly one menu row in Money > Cost of living & everyday money", () => {
    const rows = menuRowsForHref(MONTHLY_BUDGET_PATH);
    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("money");
    expect(rows[0].sectionTitle).toBe("Cost of living & everyday money");
    expect(getActiveNavKey(MONTHLY_BUDGET_PATH)).toBe("money");
  });

  it("renders the Monthly budget row as live and active", () => {
    const item = MEGA_MENUS.money.sections
      .find((section) => section.title === "Cost of living & everyday money")
      ?.items.find((row) => row.href === MONTHLY_BUDGET_PATH);

    expect(item).toBeDefined();
    expect(item?.label).toBe("Monthly budget for expats");
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(MONTHLY_BUDGET_PATH, item!)).toBe(true);
  });

  it("sits with Saving money under Cost of living & everyday money", () => {
    const labels =
      MEGA_MENUS.money.sections
        .find((section) => section.title === "Cost of living & everyday money")
        ?.items.map((row) => row.label) ?? [];
    const monthly = labels.indexOf("Monthly budget for expats");
    const saving = labels.indexOf("Saving money in the Netherlands");

    expect(monthly).toBeGreaterThanOrEqual(0);
    expect(saving).toBe(monthly + 1);
  });
});

describe("saving money Netherlands nav row", () => {
  const SAVING_MONEY_PATH = "/netherlands/money/saving-money-netherlands/";

  it("has exactly one menu row in Money > Cost of living & everyday money", () => {
    const rows = menuRowsForHref(SAVING_MONEY_PATH);
    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("money");
    expect(rows[0].sectionTitle).toBe("Cost of living & everyday money");
    expect(getActiveNavKey(SAVING_MONEY_PATH)).toBe("money");
  });

  it("renders the Saving money row as live and active", () => {
    const item = MEGA_MENUS.money.sections
      .find((section) => section.title === "Cost of living & everyday money")
      ?.items.find((row) => row.href === SAVING_MONEY_PATH);

    expect(item).toBeDefined();
    expect(item?.label).toBe("Saving money in the Netherlands");
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(SAVING_MONEY_PATH, item!)).toBe(true);
  });
});

describe("hidden costs Netherlands nav row", () => {
  const HIDDEN_COSTS_PATH = "/netherlands/money/hidden-costs-netherlands/";

  it("treats the hidden costs guide route as live", () => {
    expect(getRouteStatus(HIDDEN_COSTS_PATH)).toBe("live");
  });

  it("highlights Money for the hidden costs guide path", () => {
    expect(getActiveNavKey(HIDDEN_COSTS_PATH)).toBe("money");
  });

  it("renders the Money Cost of living & everyday money menu row as live and active", () => {
    const item = MEGA_MENUS.money.sections
      .find((section) => section.title === "Cost of living & everyday money")
      ?.items.find((row) => row.label === "Hidden costs of living");

    expect(item).toBeDefined();
    expect(item?.href).toBe(HIDDEN_COSTS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(HIDDEN_COSTS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Money > Cost of living & everyday money", () => {
    const rows = menuRowsForHref(HIDDEN_COSTS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("money");
    expect(rows[0].sectionTitle).toBe("Cost of living & everyday money");
  });

  it("sits after Cost of living and before Financial checklist", () => {
    const labels =
      MEGA_MENUS.money.sections
        .find((section) => section.title === "Cost of living & everyday money")
        ?.items.map((row) => row.label) ?? [];
    const col = labels.indexOf("Cost of living in the Netherlands");
    const hidden = labels.indexOf("Hidden costs of living");
    const financial = labels.indexOf("Financial checklist for expats");

    expect(col).toBeGreaterThanOrEqual(0);
    expect(hidden).toBe(col + 1);
    expect(financial).toBe(hidden + 1);
  });
});

describe("financial checklist Netherlands nav row", () => {
  const FINANCIAL_CHECKLIST_PATH = "/netherlands/money/financial-checklist-netherlands/";

  it("treats the financial checklist guide route as live", () => {
    expect(getRouteStatus(FINANCIAL_CHECKLIST_PATH)).toBe("live");
  });

  it("highlights Money for the financial checklist guide path", () => {
    expect(getActiveNavKey(FINANCIAL_CHECKLIST_PATH)).toBe("money");
  });

  it("renders the Money Cost of living & everyday money menu row as live and active", () => {
    const item = MEGA_MENUS.money.sections
      .find((section) => section.title === "Cost of living & everyday money")
      ?.items.find((row) => row.label === "Financial checklist for expats");

    expect(item).toBeDefined();
    expect(item?.href).toBe(FINANCIAL_CHECKLIST_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(FINANCIAL_CHECKLIST_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Money > Cost of living & everyday money", () => {
    const rows = menuRowsForHref(FINANCIAL_CHECKLIST_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("money");
    expect(rows[0].sectionTitle).toBe("Cost of living & everyday money");
  });
});

describe("driving licence exchange Netherlands nav active state", () => {
  const DRIVING_LICENCE_PATH = "/netherlands/living/driving-licence-exchange-netherlands/";

  it("treats the driving licence exchange guide route as live in local/preview", () => {
    expect(getRouteStatus(DRIVING_LICENCE_PATH)).toBe("live");
  });

  it("highlights Living for the driving licence exchange guide path", () => {
    expect(getActiveNavKey(DRIVING_LICENCE_PATH)).toBe("living");
  });

  it("renders the Living Driving & cars menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Driving & cars")
      ?.items.find((row) => row.label === "Driving licence exchange");

    expect(item).toBeDefined();
    expect(item?.href).toBe(DRIVING_LICENCE_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(DRIVING_LICENCE_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Driving & cars", () => {
    const rows = menuRowsForHref(DRIVING_LICENCE_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Driving & cars");
  });

  it("is first in Driving & cars, before Buying a car", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Driving & cars")
        ?.items.map((row) => row.label) ?? [];
    const drivingLicence = labels.indexOf("Driving licence exchange");
    const buyingACar = labels.indexOf("Buying a car");

    expect(drivingLicence).toBe(0);
    expect(buyingACar).toBe(drivingLicence + 1);
  });
});

describe("OV-chipkaart Netherlands nav active state", () => {
  const OV_CHIPKAART_PATH = "/netherlands/living/ov-chipkaart-netherlands/";

  it("treats the OV-chipkaart guide route as live in local/preview", () => {
    expect(getRouteStatus(OV_CHIPKAART_PATH)).toBe("live");
  });

  it("highlights Living for the OV-chipkaart guide path", () => {
    expect(getActiveNavKey(OV_CHIPKAART_PATH)).toBe("living");
  });

  it("renders the Living Public transport menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Public transport")
      ?.items.find((row) => row.label === "OV-chipkaart");

    expect(item).toBeDefined();
    expect(item?.href).toBe(OV_CHIPKAART_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(OV_CHIPKAART_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Public transport", () => {
    const rows = menuRowsForHref(OV_CHIPKAART_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Public transport");
  });

  it("is first in Public transport, before OVpay", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Public transport")
        ?.items.map((row) => row.label) ?? [];
    const ovChipkaart = labels.indexOf("OV-chipkaart");
    const ovpay = labels.indexOf("OVpay");

    expect(ovChipkaart).toBe(0);
    expect(ovpay).toBe(ovChipkaart + 1);
  });
});

describe("OVpay Netherlands nav active state", () => {
  const OVPAY_PATH = "/netherlands/living/ovpay-netherlands/";

  it("treats the OVpay guide route as live in local/preview", () => {
    expect(getRouteStatus(OVPAY_PATH)).toBe("live");
  });

  it("highlights Living for the OVpay guide path", () => {
    expect(getActiveNavKey(OVPAY_PATH)).toBe("living");
  });

  it("renders the Living Public transport menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Public transport")
      ?.items.find((row) => row.label === "OVpay");

    expect(item).toBeDefined();
    expect(item?.href).toBe(OVPAY_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(OVPAY_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Public transport", () => {
    const rows = menuRowsForHref(OVPAY_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Public transport");
  });

  it("sits immediately after OV-chipkaart and before NS trains in Public transport", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Public transport")
        ?.items.map((row) => row.label) ?? [];
    const ovChipkaart = labels.indexOf("OV-chipkaart");
    const ovpay = labels.indexOf("OVpay");
    const nsTrains = labels.indexOf("NS trains");

    expect(ovChipkaart).toBeGreaterThanOrEqual(0);
    expect(ovpay).toBe(ovChipkaart + 1);
    expect(nsTrains).toBe(ovpay + 1);
  });
});

describe("NS trains Netherlands nav active state", () => {
  const NS_TRAINS_PATH = "/netherlands/living/ns-trains-netherlands/";

  it("treats the NS trains guide route as live in local/preview", () => {
    expect(getRouteStatus(NS_TRAINS_PATH)).toBe("live");
  });

  it("highlights Living for the NS trains guide path", () => {
    expect(getActiveNavKey(NS_TRAINS_PATH)).toBe("living");
  });

  it("renders the Living Public transport menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Public transport")
      ?.items.find((row) => row.label === "NS trains");

    expect(item).toBeDefined();
    expect(item?.href).toBe(NS_TRAINS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(NS_TRAINS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Public transport", () => {
    const rows = menuRowsForHref(NS_TRAINS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Public transport");
  });

  it("sits immediately after OVpay and before Trams in Public transport", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Public transport")
        ?.items.map((row) => row.label) ?? [];
    const ovpay = labels.indexOf("OVpay");
    const nsTrains = labels.indexOf("NS trains");
    const trams = labels.indexOf("Trams");

    expect(ovpay).toBeGreaterThanOrEqual(0);
    expect(nsTrains).toBe(ovpay + 1);
    expect(trams).toBe(nsTrains + 1);
  });
});

describe("Trams Netherlands nav active state", () => {
  const TRAMS_PATH = "/netherlands/living/trams-netherlands/";

  it("treats the Trams guide route as live in local/preview", () => {
    expect(getRouteStatus(TRAMS_PATH)).toBe("live");
  });

  it("highlights Living for the Trams guide path", () => {
    expect(getActiveNavKey(TRAMS_PATH)).toBe("living");
  });

  it("renders the Living Public transport menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Public transport")
      ?.items.find((row) => row.label === "Trams");

    expect(item).toBeDefined();
    expect(item?.href).toBe(TRAMS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(TRAMS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Public transport", () => {
    const rows = menuRowsForHref(TRAMS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Public transport");
  });

  it("sits immediately after NS trains and before Metro in Public transport", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Public transport")
        ?.items.map((row) => row.label) ?? [];
    const nsTrains = labels.indexOf("NS trains");
    const trams = labels.indexOf("Trams");
    const metro = labels.indexOf("Metro");

    expect(nsTrains).toBeGreaterThanOrEqual(0);
    expect(trams).toBe(nsTrains + 1);
    expect(metro).toBe(trams + 1);
  });
});

describe("Metro Netherlands nav active state", () => {
  const METRO_PATH = "/netherlands/living/metro-netherlands/";

  it("treats the Metro guide route as live in local/preview", () => {
    expect(getRouteStatus(METRO_PATH)).toBe("live");
  });

  it("highlights Living for the Metro guide path", () => {
    expect(getActiveNavKey(METRO_PATH)).toBe("living");
  });

  it("renders the Living Public transport menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Public transport")
      ?.items.find((row) => row.label === "Metro");

    expect(item).toBeDefined();
    expect(item?.href).toBe(METRO_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(METRO_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Public transport", () => {
    const rows = menuRowsForHref(METRO_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Public transport");
  });

  it("sits immediately after Trams and before Regional buses in Public transport", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Public transport")
        ?.items.map((row) => row.label) ?? [];
    const trams = labels.indexOf("Trams");
    const metro = labels.indexOf("Metro");
    const regionalBuses = labels.indexOf("Regional buses");

    expect(trams).toBeGreaterThanOrEqual(0);
    expect(metro).toBe(trams + 1);
    expect(regionalBuses).toBe(metro + 1);
  });
});

describe("Regional buses Netherlands nav active state", () => {
  const REGIONAL_BUSES_PATH = "/netherlands/living/regional-buses-netherlands/";

  it("treats the Regional buses guide route as live in local/preview", () => {
    expect(getRouteStatus(REGIONAL_BUSES_PATH)).toBe("live");
  });

  it("highlights Living for the Regional buses guide path", () => {
    expect(getActiveNavKey(REGIONAL_BUSES_PATH)).toBe("living");
  });

  it("renders the Living Public transport menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Public transport")
      ?.items.find((row) => row.label === "Regional buses");

    expect(item).toBeDefined();
    expect(item?.href).toBe(REGIONAL_BUSES_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(REGIONAL_BUSES_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Public transport", () => {
    const rows = menuRowsForHref(REGIONAL_BUSES_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Public transport");
  });

  it("sits immediately after Metro and before Train discounts in Public transport", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Public transport")
        ?.items.map((row) => row.label) ?? [];
    const metro = labels.indexOf("Metro");
    const regionalBuses = labels.indexOf("Regional buses");
    const trainDiscounts = labels.indexOf("Train discounts");

    expect(metro).toBeGreaterThanOrEqual(0);
    expect(regionalBuses).toBe(metro + 1);
    expect(trainDiscounts).toBe(regionalBuses + 1);
  });
});

describe("Cycling Netherlands nav active state", () => {
  const CYCLING_PATH = "/netherlands/living/cycling-netherlands/";

  it("treats the Cycling guide route as live in local/preview", () => {
    expect(getRouteStatus(CYCLING_PATH)).toBe("live");
  });

  it("highlights Living for the Cycling guide path", () => {
    expect(getActiveNavKey(CYCLING_PATH)).toBe("living");
  });

  it("renders the Living Cycling menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Cycling")
      ?.items.find((row) => row.label === "Cycling");

    expect(item).toBeDefined();
    expect(item?.href).toBe(CYCLING_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(CYCLING_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Cycling", () => {
    const rows = menuRowsForHref(CYCLING_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Cycling");
  });

  it("is first in Cycling, before Bike sharing", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Cycling")
        ?.items.map((row) => row.label) ?? [];
    const cycling = labels.indexOf("Cycling");
    const bikeSharing = labels.indexOf("Bike sharing");

    expect(cycling).toBe(0);
    expect(bikeSharing).toBe(cycling + 1);
  });
});

describe("Bike sharing Netherlands nav active state", () => {
  const BIKE_SHARING_PATH = "/netherlands/living/bike-sharing-netherlands/";

  it("treats the Bike sharing guide route as live in local/preview", () => {
    expect(getRouteStatus(BIKE_SHARING_PATH)).toBe("live");
  });

  it("highlights Living for the Bike sharing guide path", () => {
    expect(getActiveNavKey(BIKE_SHARING_PATH)).toBe("living");
  });

  it("renders the Living Cycling menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Cycling")
      ?.items.find((row) => row.label === "Bike sharing");

    expect(item).toBeDefined();
    expect(item?.href).toBe(BIKE_SHARING_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(BIKE_SHARING_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Cycling", () => {
    const rows = menuRowsForHref(BIKE_SHARING_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Cycling");
  });

  it("sits immediately after Cycling as the last Cycling item", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Cycling")
        ?.items.map((row) => row.label) ?? [];
    const cycling = labels.indexOf("Cycling");
    const bikeSharing = labels.indexOf("Bike sharing");

    expect(cycling).toBeGreaterThanOrEqual(0);
    expect(bikeSharing).toBe(cycling + 1);
    expect(bikeSharing).toBe(labels.length - 1);
  });
});

describe("Train discounts Netherlands nav active state", () => {
  const TRAIN_DISCOUNTS_PATH = "/netherlands/living/train-discounts-netherlands/";

  it("treats the Train discounts guide route as live in local/preview", () => {
    expect(getRouteStatus(TRAIN_DISCOUNTS_PATH)).toBe("live");
  });

  it("highlights Living for the Train discounts guide path", () => {
    expect(getActiveNavKey(TRAIN_DISCOUNTS_PATH)).toBe("living");
  });

  it("renders the Living Public transport menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Public transport")
      ?.items.find((row) => row.label === "Train discounts");

    expect(item).toBeDefined();
    expect(item?.href).toBe(TRAIN_DISCOUNTS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(TRAIN_DISCOUNTS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Public transport", () => {
    const rows = menuRowsForHref(TRAIN_DISCOUNTS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Public transport");
  });

  it("sits immediately after Regional buses and before Weekend travel in Public transport", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Public transport")
        ?.items.map((row) => row.label) ?? [];
    const regionalBuses = labels.indexOf("Regional buses");
    const trainDiscounts = labels.indexOf("Train discounts");
    const weekendTravel = labels.indexOf("Weekend travel");

    expect(regionalBuses).toBeGreaterThanOrEqual(0);
    expect(trainDiscounts).toBe(regionalBuses + 1);
    expect(weekendTravel).toBe(trainDiscounts + 1);
  });
});

describe("Weekend travel Netherlands nav active state", () => {
  const WEEKEND_TRAVEL_PATH = "/netherlands/living/weekend-travel-netherlands/";

  it("treats the Weekend travel guide route as live in local/preview", () => {
    expect(getRouteStatus(WEEKEND_TRAVEL_PATH)).toBe("live");
  });

  it("highlights Living for the Weekend travel guide path", () => {
    expect(getActiveNavKey(WEEKEND_TRAVEL_PATH)).toBe("living");
  });

  it("renders the Living Public transport menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Public transport")
      ?.items.find((row) => row.label === "Weekend travel");

    expect(item).toBeDefined();
    expect(item?.href).toBe(WEEKEND_TRAVEL_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(WEEKEND_TRAVEL_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Public transport", () => {
    const rows = menuRowsForHref(WEEKEND_TRAVEL_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Public transport");
  });

  it("sits immediately after Train discounts as the last Public transport item", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Public transport")
        ?.items.map((row) => row.label) ?? [];
    const trainDiscounts = labels.indexOf("Train discounts");
    const weekendTravel = labels.indexOf("Weekend travel");

    expect(trainDiscounts).toBeGreaterThanOrEqual(0);
    expect(weekendTravel).toBe(trainDiscounts + 1);
    expect(weekendTravel).toBe(labels.length - 1);
  });
});

describe("Weekend trips Netherlands nav active state", () => {
  const WEEKEND_TRIPS_PATH = "/netherlands/living/weekend-trips-netherlands/";

  it("treats the Weekend trips guide route as live in local/preview", () => {
    expect(getRouteStatus(WEEKEND_TRIPS_PATH)).toBe("live");
  });

  it("highlights Living for the Weekend trips guide path", () => {
    expect(getActiveNavKey(WEEKEND_TRIPS_PATH)).toBe("living");
  });

  it("renders the Living Weekend & lifestyle menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Weekend & lifestyle")
      ?.items.find((row) => row.label === "Weekend trips");

    expect(item).toBeDefined();
    expect(item?.href).toBe(WEEKEND_TRIPS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(WEEKEND_TRIPS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Weekend & lifestyle", () => {
    const rows = menuRowsForHref(WEEKEND_TRIPS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Weekend & lifestyle");
  });

  it("sits first in Weekend & lifestyle before National parks and Hiking", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Weekend & lifestyle")
        ?.items.map((row) => row.label) ?? [];

    expect(labels.indexOf("Weekend trips")).toBe(0);
    expect(labels.indexOf("National parks")).toBe(1);
    expect(labels.indexOf("Hiking")).toBe(2);
  });

  it("keeps Weekend travel under Public transport (not Weekend & lifestyle)", () => {
    const weekendTravelRows = menuRowsForHref("/netherlands/living/weekend-travel-netherlands/");
    expect(weekendTravelRows).toHaveLength(1);
    expect(weekendTravelRows[0].sectionTitle).toBe("Public transport");

    const lifestyleLabels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Weekend & lifestyle")
        ?.items.map((row) => row.label) ?? [];
    expect(lifestyleLabels).not.toContain("Weekend travel");
  });
});

describe("National parks Netherlands nav active state", () => {
  const NATIONAL_PARKS_PATH = "/netherlands/living/national-parks-netherlands/";

  it("treats the National parks guide route as live in local/preview", () => {
    expect(getRouteStatus(NATIONAL_PARKS_PATH)).toBe("live");
  });

  it("highlights Living for the National parks guide path", () => {
    expect(getActiveNavKey(NATIONAL_PARKS_PATH)).toBe("living");
  });

  it("renders the Living Weekend & lifestyle menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Weekend & lifestyle")
      ?.items.find((row) => row.label === "National parks");

    expect(item).toBeDefined();
    expect(item?.href).toBe(NATIONAL_PARKS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(NATIONAL_PARKS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Weekend & lifestyle", () => {
    const rows = menuRowsForHref(NATIONAL_PARKS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Weekend & lifestyle");
  });

  it("sits second in Weekend & lifestyle between Weekend trips and Hiking", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Weekend & lifestyle")
        ?.items.map((row) => row.label) ?? [];

    expect(labels.indexOf("Weekend trips")).toBe(0);
    expect(labels.indexOf("National parks")).toBe(1);
    expect(labels.indexOf("Hiking")).toBe(2);
  });
});

describe("Hiking Netherlands nav active state", () => {
  const HIKING_PATH = "/netherlands/living/hiking-netherlands/";

  it("treats the Hiking guide route as live in local/preview", () => {
    expect(getRouteStatus(HIKING_PATH)).toBe("live");
  });

  it("highlights Living for the Hiking guide path", () => {
    expect(getActiveNavKey(HIKING_PATH)).toBe("living");
  });

  it("renders the Living Weekend & lifestyle menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Weekend & lifestyle")
      ?.items.find((row) => row.label === "Hiking");

    expect(item).toBeDefined();
    expect(item?.href).toBe(HIKING_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(HIKING_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Weekend & lifestyle", () => {
    const rows = menuRowsForHref(HIKING_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Weekend & lifestyle");
  });

  it("sits third in Weekend & lifestyle after Weekend trips and National parks", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Weekend & lifestyle")
        ?.items.map((row) => row.label) ?? [];

    expect(labels.indexOf("Weekend trips")).toBe(0);
    expect(labels.indexOf("National parks")).toBe(1);
    expect(labels.indexOf("Hiking")).toBe(2);
  });
});

describe("Museums Netherlands nav active state", () => {
  const MUSEUMS_PATH = "/netherlands/living/museums-netherlands/";

  it("treats the Museums guide route as live in local/preview", () => {
    expect(getRouteStatus(MUSEUMS_PATH)).toBe("live");
  });

  it("highlights Living for the Museums guide path", () => {
    expect(getActiveNavKey(MUSEUMS_PATH)).toBe("living");
  });

  it("renders the Living Weekend & lifestyle menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Weekend & lifestyle")
      ?.items.find((row) => row.label === "Museums");

    expect(item).toBeDefined();
    expect(item?.href).toBe(MUSEUMS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(MUSEUMS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Weekend & lifestyle", () => {
    const rows = menuRowsForHref(MUSEUMS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Weekend & lifestyle");
  });

  it("sits fourth in Weekend & lifestyle after Hiking", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Weekend & lifestyle")
        ?.items.map((row) => row.label) ?? [];

    expect(labels.indexOf("Weekend trips")).toBe(0);
    expect(labels.indexOf("National parks")).toBe(1);
    expect(labels.indexOf("Hiking")).toBe(2);
    expect(labels.indexOf("Museums")).toBe(3);
    expect(labels.indexOf("Hidden gems")).toBe(4);
  });
});

describe("Hidden gems Netherlands nav active state", () => {
  const HIDDEN_GEMS_PATH = "/netherlands/living/hidden-gems-netherlands/";

  it("treats the Hidden gems guide route as live in local/preview", () => {
    expect(getRouteStatus(HIDDEN_GEMS_PATH)).toBe("live");
  });

  it("highlights Living for the Hidden gems guide path", () => {
    expect(getActiveNavKey(HIDDEN_GEMS_PATH)).toBe("living");
  });

  it("renders the Living Weekend & lifestyle menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Weekend & lifestyle")
      ?.items.find((row) => row.label === "Hidden gems");

    expect(item).toBeDefined();
    expect(item?.href).toBe(HIDDEN_GEMS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(HIDDEN_GEMS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Weekend & lifestyle", () => {
    const rows = menuRowsForHref(HIDDEN_GEMS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Weekend & lifestyle");
  });

  it("sits fifth in Weekend & lifestyle after Museums", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Weekend & lifestyle")
        ?.items.map((row) => row.label) ?? [];

    expect(labels.indexOf("Weekend trips")).toBe(0);
    expect(labels.indexOf("National parks")).toBe(1);
    expect(labels.indexOf("Hiking")).toBe(2);
    expect(labels.indexOf("Museums")).toBe(3);
    expect(labels.indexOf("Hidden gems")).toBe(4);
    expect(labels.indexOf("Beach towns")).toBe(5);
    expect(labels.indexOf("Castles")).toBe(6);
  });
});

describe("Beach towns Netherlands nav active state", () => {
  const BEACH_TOWNS_PATH = "/netherlands/living/beach-towns-netherlands/";

  it("treats the Beach towns guide route as live in local/preview", () => {
    expect(getRouteStatus(BEACH_TOWNS_PATH)).toBe("live");
  });

  it("highlights Living for the Beach towns guide path", () => {
    expect(getActiveNavKey(BEACH_TOWNS_PATH)).toBe("living");
  });

  it("renders the Living Weekend & lifestyle menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Weekend & lifestyle")
      ?.items.find((row) => row.label === "Beach towns");

    expect(item).toBeDefined();
    expect(item?.href).toBe(BEACH_TOWNS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(BEACH_TOWNS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Weekend & lifestyle", () => {
    const rows = menuRowsForHref(BEACH_TOWNS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Weekend & lifestyle");
  });

  it("sits sixth in Weekend & lifestyle after Hidden gems", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Weekend & lifestyle")
        ?.items.map((row) => row.label) ?? [];

    expect(labels.indexOf("Weekend trips")).toBe(0);
    expect(labels.indexOf("National parks")).toBe(1);
    expect(labels.indexOf("Hiking")).toBe(2);
    expect(labels.indexOf("Museums")).toBe(3);
    expect(labels.indexOf("Hidden gems")).toBe(4);
    expect(labels.indexOf("Beach towns")).toBe(5);
    expect(labels.indexOf("Castles")).toBe(6);
  });
});

describe("Castles Netherlands nav active state", () => {
  const CASTLES_PATH = "/netherlands/living/castles-netherlands/";

  it("treats the Castles guide route as live in local/preview", () => {
    expect(getRouteStatus(CASTLES_PATH)).toBe("live");
  });

  it("highlights Living for the Castles guide path", () => {
    expect(getActiveNavKey(CASTLES_PATH)).toBe("living");
  });

  it("renders the Living Weekend & lifestyle menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Weekend & lifestyle")
      ?.items.find((row) => row.label === "Castles");

    expect(item).toBeDefined();
    expect(item?.href).toBe(CASTLES_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(CASTLES_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Weekend & lifestyle", () => {
    const rows = menuRowsForHref(CASTLES_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Weekend & lifestyle");
  });

  it("sits seventh in Weekend & lifestyle after Beach towns", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Weekend & lifestyle")
        ?.items.map((row) => row.label) ?? [];

    expect(labels.indexOf("Weekend trips")).toBe(0);
    expect(labels.indexOf("National parks")).toBe(1);
    expect(labels.indexOf("Hiking")).toBe(2);
    expect(labels.indexOf("Museums")).toBe(3);
    expect(labels.indexOf("Hidden gems")).toBe(4);
    expect(labels.indexOf("Beach towns")).toBe(5);
    expect(labels.indexOf("Castles")).toBe(6);
  });
});

describe("Road trips Netherlands nav active state", () => {
  const ROAD_TRIPS_PATH = "/netherlands/living/road-trips-netherlands/";

  it("treats the Road trips guide route as live in local/preview", () => {
    expect(getRouteStatus(ROAD_TRIPS_PATH)).toBe("live");
  });

  it("highlights Living for the Road trips guide path", () => {
    expect(getActiveNavKey(ROAD_TRIPS_PATH)).toBe("living");
  });

  it("renders the Living Weekend & lifestyle menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Weekend & lifestyle")
      ?.items.find((row) => row.label === "Road trips");

    expect(item).toBeDefined();
    expect(item?.href).toBe(ROAD_TRIPS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(ROAD_TRIPS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Weekend & lifestyle", () => {
    const rows = menuRowsForHref(ROAD_TRIPS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Weekend & lifestyle");
  });

  it("sits eighth in Weekend & lifestyle after Castles", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Weekend & lifestyle")
        ?.items.map((row) => row.label) ?? [];

    expect(labels.indexOf("Weekend trips")).toBe(0);
    expect(labels.indexOf("National parks")).toBe(1);
    expect(labels.indexOf("Hiking")).toBe(2);
    expect(labels.indexOf("Museums")).toBe(3);
    expect(labels.indexOf("Hidden gems")).toBe(4);
    expect(labels.indexOf("Beach towns")).toBe(5);
    expect(labels.indexOf("Castles")).toBe(6);
    expect(labels.indexOf("Road trips")).toBe(7);
  });
});

describe("Day trips Netherlands nav active state", () => {
  const DAY_TRIPS_PATH = "/netherlands/living/day-trips-netherlands/";

  it("treats the Day trips guide route as live in local/preview", () => {
    expect(getRouteStatus(DAY_TRIPS_PATH)).toBe("live");
  });

  it("highlights Living for the Day trips guide path", () => {
    expect(getActiveNavKey(DAY_TRIPS_PATH)).toBe("living");
  });

  it("renders the Living Weekend & lifestyle menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Weekend & lifestyle")
      ?.items.find((row) => row.label === "Day trips");

    expect(item).toBeDefined();
    expect(item?.href).toBe(DAY_TRIPS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(DAY_TRIPS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Weekend & lifestyle", () => {
    const rows = menuRowsForHref(DAY_TRIPS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Weekend & lifestyle");
  });

  it("sits ninth in Weekend & lifestyle after Road trips", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Weekend & lifestyle")
        ?.items.map((row) => row.label) ?? [];

    expect(labels.indexOf("Weekend trips")).toBe(0);
    expect(labels.indexOf("National parks")).toBe(1);
    expect(labels.indexOf("Hiking")).toBe(2);
    expect(labels.indexOf("Museums")).toBe(3);
    expect(labels.indexOf("Hidden gems")).toBe(4);
    expect(labels.indexOf("Beach towns")).toBe(5);
    expect(labels.indexOf("Castles")).toBe(6);
    expect(labels.indexOf("Road trips")).toBe(7);
    expect(labels.indexOf("Day trips")).toBe(8);
  });
});

describe("buying a car Netherlands nav active state", () => {
  const BUYING_A_CAR_PATH = "/netherlands/living/buying-a-car-netherlands/";

  it("treats the buying a car guide route as live in local/preview", () => {
    expect(getRouteStatus(BUYING_A_CAR_PATH)).toBe("live");
  });

  it("highlights Living for the buying a car guide path", () => {
    expect(getActiveNavKey(BUYING_A_CAR_PATH)).toBe("living");
  });

  it("renders the Living Driving & cars menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Driving & cars")
      ?.items.find((row) => row.label === "Buying a car");

    expect(item).toBeDefined();
    expect(item?.href).toBe(BUYING_A_CAR_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(BUYING_A_CAR_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Driving & cars", () => {
    const rows = menuRowsForHref(BUYING_A_CAR_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Driving & cars");
  });

  it("sits immediately after Driving licence exchange in Driving & cars", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Driving & cars")
        ?.items.map((row) => row.label) ?? [];
    const drivingLicence = labels.indexOf("Driving licence exchange");
    const buyingACar = labels.indexOf("Buying a car");

    expect(drivingLicence).toBeGreaterThanOrEqual(0);
    expect(buyingACar).toBe(drivingLicence + 1);
  });
});

describe("road tax Netherlands nav active state", () => {
  const ROAD_TAX_PATH = "/netherlands/living/road-tax-netherlands/";

  it("treats the road tax guide route as live in local/preview", () => {
    expect(getRouteStatus(ROAD_TAX_PATH)).toBe("live");
  });

  it("highlights Living for the road tax guide path", () => {
    expect(getActiveNavKey(ROAD_TAX_PATH)).toBe("living");
  });

  it("renders the Living Driving & cars menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Driving & cars")
      ?.items.find((row) => row.label === "Road tax");

    expect(item).toBeDefined();
    expect(item?.href).toBe(ROAD_TAX_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(ROAD_TAX_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Driving & cars", () => {
    const rows = menuRowsForHref(ROAD_TAX_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Driving & cars");
  });

  it("sits immediately after Buying a car in Driving & cars", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Driving & cars")
        ?.items.map((row) => row.label) ?? [];
    const buyingACar = labels.indexOf("Buying a car");
    const roadTax = labels.indexOf("Road tax");

    expect(buyingACar).toBeGreaterThanOrEqual(0);
    expect(roadTax).toBe(buyingACar + 1);
  });
});

describe("car insurance Netherlands nav active state", () => {
  const CAR_INSURANCE_PATH = "/netherlands/living/car-insurance-netherlands/";

  it("treats the car insurance guide route as live in local/preview", () => {
    expect(getRouteStatus(CAR_INSURANCE_PATH)).toBe("live");
  });

  it("highlights Living for the car insurance guide path", () => {
    expect(getActiveNavKey(CAR_INSURANCE_PATH)).toBe("living");
  });

  it("renders the Living Driving & cars menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Driving & cars")
      ?.items.find((row) => row.label === "Car insurance");

    expect(item).toBeDefined();
    expect(item?.href).toBe(CAR_INSURANCE_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(CAR_INSURANCE_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Driving & cars", () => {
    const rows = menuRowsForHref(CAR_INSURANCE_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Driving & cars");
  });

  it("sits immediately after Road tax in Driving & cars", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Driving & cars")
        ?.items.map((row) => row.label) ?? [];
    const roadTax = labels.indexOf("Road tax");
    const carInsurance = labels.indexOf("Car insurance");

    expect(roadTax).toBeGreaterThanOrEqual(0);
    expect(carInsurance).toBe(roadTax + 1);
  });
});

describe("MOT / APK Netherlands nav active state", () => {
  const MOT_APK_PATH = "/netherlands/living/mot-apk-netherlands/";

  it("treats the MOT / APK guide route as live in local/preview", () => {
    expect(getRouteStatus(MOT_APK_PATH)).toBe("live");
  });

  it("highlights Living for the MOT / APK guide path", () => {
    expect(getActiveNavKey(MOT_APK_PATH)).toBe("living");
  });

  it("renders the Living Driving & cars menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Driving & cars")
      ?.items.find((row) => row.label === "MOT / APK");

    expect(item).toBeDefined();
    expect(item?.href).toBe(MOT_APK_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(MOT_APK_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Driving & cars", () => {
    const rows = menuRowsForHref(MOT_APK_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Driving & cars");
  });

  it("sits immediately after Car insurance in Driving & cars", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Driving & cars")
        ?.items.map((row) => row.label) ?? [];
    const carInsurance = labels.indexOf("Car insurance");
    const motApk = labels.indexOf("MOT / APK");

    expect(carInsurance).toBeGreaterThanOrEqual(0);
    expect(motApk).toBe(carInsurance + 1);
  });
});

describe("Speed cameras Netherlands nav active state", () => {
  const SPEED_CAMERAS_PATH = "/netherlands/living/speed-cameras-netherlands/";

  it("treats the Speed cameras guide route as live in local/preview", () => {
    expect(getRouteStatus(SPEED_CAMERAS_PATH)).toBe("live");
  });

  it("highlights Living for the Speed cameras guide path", () => {
    expect(getActiveNavKey(SPEED_CAMERAS_PATH)).toBe("living");
  });

  it("renders the Living Driving & cars menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Driving & cars")
      ?.items.find((row) => row.label === "Speed cameras");

    expect(item).toBeDefined();
    expect(item?.href).toBe(SPEED_CAMERAS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(SPEED_CAMERAS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Driving & cars", () => {
    const rows = menuRowsForHref(SPEED_CAMERAS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Driving & cars");
  });

  it("sits immediately after MOT / APK in Driving & cars", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Driving & cars")
        ?.items.map((row) => row.label) ?? [];
    const motApk = labels.indexOf("MOT / APK");
    const speedCameras = labels.indexOf("Speed cameras");

    expect(motApk).toBeGreaterThanOrEqual(0);
    expect(speedCameras).toBe(motApk + 1);
  });
});

describe("Electric vehicles Netherlands nav active state", () => {
  const ELECTRIC_VEHICLES_PATH = "/netherlands/living/electric-vehicles-netherlands/";

  it("treats the Electric vehicles guide route as live in local/preview", () => {
    expect(getRouteStatus(ELECTRIC_VEHICLES_PATH)).toBe("live");
  });

  it("highlights Living for the Electric vehicles guide path", () => {
    expect(getActiveNavKey(ELECTRIC_VEHICLES_PATH)).toBe("living");
  });

  it("renders the Living Driving & cars menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Driving & cars")
      ?.items.find((row) => row.label === "Electric vehicles");

    expect(item).toBeDefined();
    expect(item?.href).toBe(ELECTRIC_VEHICLES_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(ELECTRIC_VEHICLES_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Driving & cars", () => {
    const rows = menuRowsForHref(ELECTRIC_VEHICLES_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Driving & cars");
  });

  it("sits immediately after Speed cameras and before Car sharing in Driving & cars", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Driving & cars")
        ?.items.map((row) => row.label) ?? [];
    const speedCameras = labels.indexOf("Speed cameras");
    const electricVehicles = labels.indexOf("Electric vehicles");
    const carSharing = labels.indexOf("Car sharing");

    expect(speedCameras).toBeGreaterThanOrEqual(0);
    expect(electricVehicles).toBe(speedCameras + 1);
    expect(carSharing).toBe(electricVehicles + 1);
  });
});

describe("Car sharing Netherlands nav active state", () => {
  const CAR_SHARING_PATH = "/netherlands/living/car-sharing-netherlands/";

  it("treats the Car sharing guide route as live in local/preview", () => {
    expect(getRouteStatus(CAR_SHARING_PATH)).toBe("live");
  });

  it("highlights Living for the Car sharing guide path", () => {
    expect(getActiveNavKey(CAR_SHARING_PATH)).toBe("living");
  });

  it("renders the Living Driving & cars menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Driving & cars")
      ?.items.find((row) => row.label === "Car sharing");

    expect(item).toBeDefined();
    expect(item?.href).toBe(CAR_SHARING_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(CAR_SHARING_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Driving & cars", () => {
    const rows = menuRowsForHref(CAR_SHARING_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Driving & cars");
  });

  it("sits immediately after Electric vehicles and before Lease cars in Driving & cars", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Driving & cars")
        ?.items.map((row) => row.label) ?? [];
    const electricVehicles = labels.indexOf("Electric vehicles");
    const carSharing = labels.indexOf("Car sharing");
    const leaseCars = labels.indexOf("Lease cars");

    expect(electricVehicles).toBeGreaterThanOrEqual(0);
    expect(carSharing).toBe(electricVehicles + 1);
    expect(leaseCars).toBe(carSharing + 1);
  });
});

describe("Lease cars Netherlands nav active state", () => {
  const LEASE_CARS_PATH = "/netherlands/living/lease-cars-netherlands/";

  it("treats the Lease cars guide route as live in local/preview", () => {
    expect(getRouteStatus(LEASE_CARS_PATH)).toBe("live");
  });

  it("highlights Living for the Lease cars guide path", () => {
    expect(getActiveNavKey(LEASE_CARS_PATH)).toBe("living");
  });

  it("renders the Living Driving & cars menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Driving & cars")
      ?.items.find((row) => row.label === "Lease cars");

    expect(item).toBeDefined();
    expect(item?.href).toBe(LEASE_CARS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(LEASE_CARS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Driving & cars", () => {
    const rows = menuRowsForHref(LEASE_CARS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Driving & cars");
  });

  it("sits immediately after Car sharing as the last Driving & cars item", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Driving & cars")
        ?.items.map((row) => row.label) ?? [];
    const carSharing = labels.indexOf("Car sharing");
    const leaseCars = labels.indexOf("Lease cars");

    expect(carSharing).toBeGreaterThanOrEqual(0);
    expect(leaseCars).toBe(carSharing + 1);
    expect(leaseCars).toBe(labels.length - 1);
  });
});

describe("Dutch supermarkets nav active state", () => {
  const DUTCH_SUPERMARKETS_PATH = "/netherlands/living/dutch-supermarkets/";

  it("treats the Dutch supermarkets guide route as live in local/preview", () => {
    expect(getRouteStatus(DUTCH_SUPERMARKETS_PATH)).toBe("live");
  });

  it("highlights Living for the Dutch supermarkets guide path", () => {
    expect(getActiveNavKey(DUTCH_SUPERMARKETS_PATH)).toBe("living");
  });

  it("renders the Living Daily life menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Daily life")
      ?.items.find((row) => row.label === "Dutch supermarkets");

    expect(item).toBeDefined();
    expect(item?.href).toBe(DUTCH_SUPERMARKETS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(DUTCH_SUPERMARKETS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Daily life", () => {
    const rows = menuRowsForHref(DUTCH_SUPERMARKETS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Daily life");
  });

  it("sits immediately after Shopping & groceries", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Daily life")
        ?.items.map((row) => row.label) ?? [];
    const shopping = labels.indexOf("Shopping & groceries");
    const dutchSupermarkets = labels.indexOf("Dutch supermarkets");

    expect(shopping).toBeGreaterThanOrEqual(0);
    expect(dutchSupermarkets).toBe(shopping + 1);
  });
});

describe("Best supermarkets Netherlands nav active state", () => {
  const BEST_SUPERMARKETS_NETHERLANDS_PATH = "/netherlands/living/best-supermarkets-netherlands/";

  it("treats the Best supermarkets guide route as live in local/preview", () => {
    expect(getRouteStatus(BEST_SUPERMARKETS_NETHERLANDS_PATH)).toBe("live");
  });

  it("highlights Living for the Best supermarkets guide path", () => {
    expect(getActiveNavKey(BEST_SUPERMARKETS_NETHERLANDS_PATH)).toBe("living");
  });

  it("renders the Living Daily life menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Daily life")
      ?.items.find((row) => row.label === "Best supermarkets");

    expect(item).toBeDefined();
    expect(item?.href).toBe(BEST_SUPERMARKETS_NETHERLANDS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(BEST_SUPERMARKETS_NETHERLANDS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Daily life", () => {
    const rows = menuRowsForHref(BEST_SUPERMARKETS_NETHERLANDS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Daily life");
  });

  it("sits immediately after Dutch supermarkets", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Daily life")
        ?.items.map((row) => row.label) ?? [];
    const dutchSupermarkets = labels.indexOf("Dutch supermarkets");
    const bestSupermarkets = labels.indexOf("Best supermarkets");

    expect(dutchSupermarkets).toBeGreaterThanOrEqual(0);
    expect(bestSupermarkets).toBe(dutchSupermarkets + 1);
  });
});

describe("Cheap groceries Netherlands nav active state", () => {
  const CHEAP_GROCERIES_NETHERLANDS_PATH = "/netherlands/living/cheap-groceries-netherlands/";

  it("treats the Cheap groceries guide route as live in local/preview", () => {
    expect(getRouteStatus(CHEAP_GROCERIES_NETHERLANDS_PATH)).toBe("live");
  });

  it("highlights Living for the Cheap groceries guide path", () => {
    expect(getActiveNavKey(CHEAP_GROCERIES_NETHERLANDS_PATH)).toBe("living");
  });

  it("renders the Living Daily life menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Daily life")
      ?.items.find((row) => row.label === "Cheap groceries");

    expect(item).toBeDefined();
    expect(item?.href).toBe(CHEAP_GROCERIES_NETHERLANDS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(CHEAP_GROCERIES_NETHERLANDS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Daily life", () => {
    const rows = menuRowsForHref(CHEAP_GROCERIES_NETHERLANDS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Daily life");
  });

  it("sits immediately after Best supermarkets and before International supermarkets", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Daily life")
        ?.items.map((row) => row.label) ?? [];
    const bestSupermarkets = labels.indexOf("Best supermarkets");
    const cheapGroceries = labels.indexOf("Cheap groceries");
    const internationalSupermarkets = labels.indexOf("International supermarkets");

    expect(bestSupermarkets).toBeGreaterThanOrEqual(0);
    expect(cheapGroceries).toBe(bestSupermarkets + 1);
    expect(internationalSupermarkets).toBe(cheapGroceries + 1);
  });
});

describe("International supermarkets Netherlands nav active state", () => {
  const INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH = "/netherlands/living/international-supermarkets-netherlands/";

  it("treats the International supermarkets guide route as live in local/preview", () => {
    expect(getRouteStatus(INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH)).toBe("live");
  });

  it("highlights Living for the International supermarkets guide path", () => {
    expect(getActiveNavKey(INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH)).toBe("living");
  });

  it("renders the Living Daily life menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Daily life")
      ?.items.find((row) => row.label === "International supermarkets");

    expect(item).toBeDefined();
    expect(item?.href).toBe(INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Daily life", () => {
    const rows = menuRowsForHref(INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Daily life");
  });

  it("sits immediately after Cheap groceries and before Asian supermarkets", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Daily life")
        ?.items.map((row) => row.label) ?? [];
    const cheapGroceries = labels.indexOf("Cheap groceries");
    const internationalSupermarkets = labels.indexOf("International supermarkets");
    const asianSupermarkets = labels.indexOf("Asian supermarkets");

    expect(cheapGroceries).toBeGreaterThanOrEqual(0);
    expect(internationalSupermarkets).toBe(cheapGroceries + 1);
    expect(asianSupermarkets).toBe(internationalSupermarkets + 1);
  });
});

describe("Asian supermarkets Netherlands nav active state", () => {
  const ASIAN_SUPERMARKETS_NETHERLANDS_PATH = "/netherlands/living/asian-supermarkets-netherlands/";

  it("treats the Asian supermarkets guide route as live in local/preview", () => {
    expect(getRouteStatus(ASIAN_SUPERMARKETS_NETHERLANDS_PATH)).toBe("live");
  });

  it("highlights Living for the Asian supermarkets guide path", () => {
    expect(getActiveNavKey(ASIAN_SUPERMARKETS_NETHERLANDS_PATH)).toBe("living");
  });

  it("renders the Living Daily life menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Daily life")
      ?.items.find((row) => row.label === "Asian supermarkets");

    expect(item).toBeDefined();
    expect(item?.href).toBe(ASIAN_SUPERMARKETS_NETHERLANDS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(ASIAN_SUPERMARKETS_NETHERLANDS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Daily life", () => {
    const rows = menuRowsForHref(ASIAN_SUPERMARKETS_NETHERLANDS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Daily life");
  });

  it("sits immediately after International supermarkets and before Turkish supermarkets", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Daily life")
        ?.items.map((row) => row.label) ?? [];
    const internationalSupermarkets = labels.indexOf("International supermarkets");
    const asianSupermarkets = labels.indexOf("Asian supermarkets");
    const turkishSupermarkets = labels.indexOf("Turkish supermarkets");

    expect(internationalSupermarkets).toBeGreaterThanOrEqual(0);
    expect(asianSupermarkets).toBe(internationalSupermarkets + 1);
    expect(turkishSupermarkets).toBe(asianSupermarkets + 1);
  });
});

describe("Turkish supermarkets Netherlands nav active state", () => {
  const TURKISH_SUPERMARKETS_NETHERLANDS_PATH = "/netherlands/living/turkish-supermarkets-netherlands/";

  it("treats the Turkish supermarkets guide route as live in local/preview", () => {
    expect(getRouteStatus(TURKISH_SUPERMARKETS_NETHERLANDS_PATH)).toBe("live");
  });

  it("highlights Living for the Turkish supermarkets guide path", () => {
    expect(getActiveNavKey(TURKISH_SUPERMARKETS_NETHERLANDS_PATH)).toBe("living");
  });

  it("renders the Living Daily life menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Daily life")
      ?.items.find((row) => row.label === "Turkish supermarkets");

    expect(item).toBeDefined();
    expect(item?.href).toBe(TURKISH_SUPERMARKETS_NETHERLANDS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(TURKISH_SUPERMARKETS_NETHERLANDS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Daily life", () => {
    const rows = menuRowsForHref(TURKISH_SUPERMARKETS_NETHERLANDS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Daily life");
  });

  it("sits immediately after Asian supermarkets and before Indian supermarkets", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Daily life")
        ?.items.map((row) => row.label) ?? [];
    const asianSupermarkets = labels.indexOf("Asian supermarkets");
    const turkishSupermarkets = labels.indexOf("Turkish supermarkets");
    const indianSupermarkets = labels.indexOf("Indian supermarkets");

    expect(asianSupermarkets).toBeGreaterThanOrEqual(0);
    expect(turkishSupermarkets).toBe(asianSupermarkets + 1);
    expect(indianSupermarkets).toBe(turkishSupermarkets + 1);
  });
});

describe("Indian supermarkets Netherlands nav active state", () => {
  const INDIAN_SUPERMARKETS_NETHERLANDS_PATH = "/netherlands/living/indian-supermarkets-netherlands/";

  it("treats the Indian supermarkets guide route as live in local/preview", () => {
    expect(getRouteStatus(INDIAN_SUPERMARKETS_NETHERLANDS_PATH)).toBe("live");
  });

  it("highlights Living for the Indian supermarkets guide path", () => {
    expect(getActiveNavKey(INDIAN_SUPERMARKETS_NETHERLANDS_PATH)).toBe("living");
  });

  it("renders the Living Daily life menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Daily life")
      ?.items.find((row) => row.label === "Indian supermarkets");

    expect(item).toBeDefined();
    expect(item?.href).toBe(INDIAN_SUPERMARKETS_NETHERLANDS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(INDIAN_SUPERMARKETS_NETHERLANDS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Daily life", () => {
    const rows = menuRowsForHref(INDIAN_SUPERMARKETS_NETHERLANDS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Daily life");
  });

  it("sits immediately after Turkish supermarkets and before South African shops", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Daily life")
        ?.items.map((row) => row.label) ?? [];
    const turkishSupermarkets = labels.indexOf("Turkish supermarkets");
    const indianSupermarkets = labels.indexOf("Indian supermarkets");
    const southAfricanShops = labels.indexOf("South African shops");

    expect(turkishSupermarkets).toBeGreaterThanOrEqual(0);
    expect(indianSupermarkets).toBe(turkishSupermarkets + 1);
    expect(southAfricanShops).toBe(indianSupermarkets + 1);
  });
});

describe("South African shops Netherlands nav active state", () => {
  const SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH = "/netherlands/living/south-african-shops-netherlands/";

  it("treats the South African shops guide route as live in local/preview", () => {
    expect(getRouteStatus(SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH)).toBe("live");
  });

  it("highlights Living for the South African shops guide path", () => {
    expect(getActiveNavKey(SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH)).toBe("living");
  });

  it("renders the Living Daily life menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Daily life")
      ?.items.find((row) => row.label === "South African shops");

    expect(item).toBeDefined();
    expect(item?.href).toBe(SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Daily life", () => {
    const rows = menuRowsForHref(SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Daily life");
  });

  it("sits immediately after Indian supermarkets and before Meal kits", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Daily life")
        ?.items.map((row) => row.label) ?? [];
    const indianSupermarkets = labels.indexOf("Indian supermarkets");
    const southAfricanShops = labels.indexOf("South African shops");
    const mealKits = labels.indexOf("Meal kits");
    const foodDelivery = labels.indexOf("Food delivery");

    expect(indianSupermarkets).toBeGreaterThanOrEqual(0);
    expect(southAfricanShops).toBe(indianSupermarkets + 1);
    expect(mealKits).toBe(southAfricanShops + 1);
    expect(foodDelivery).toBe(mealKits + 1);
  });
});

describe("Meal kits Netherlands nav active state", () => {
  const MEAL_KITS_NETHERLANDS_PATH = "/netherlands/living/meal-kits-netherlands/";

  it("treats the Meal kits guide route as live in local/preview", () => {
    expect(getRouteStatus(MEAL_KITS_NETHERLANDS_PATH)).toBe("live");
  });

  it("highlights Living for the Meal kits guide path", () => {
    expect(getActiveNavKey(MEAL_KITS_NETHERLANDS_PATH)).toBe("living");
  });

  it("renders the Living Daily life menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Daily life")
      ?.items.find((row) => row.label === "Meal kits");

    expect(item).toBeDefined();
    expect(item?.href).toBe(MEAL_KITS_NETHERLANDS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(MEAL_KITS_NETHERLANDS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Daily life", () => {
    const rows = menuRowsForHref(MEAL_KITS_NETHERLANDS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Daily life");
  });

  it("sits immediately after South African shops and before Food delivery", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Daily life")
        ?.items.map((row) => row.label) ?? [];
    const southAfricanShops = labels.indexOf("South African shops");
    const mealKits = labels.indexOf("Meal kits");
    const foodDelivery = labels.indexOf("Food delivery");

    expect(southAfricanShops).toBeGreaterThanOrEqual(0);
    expect(mealKits).toBe(southAfricanShops + 1);
    expect(foodDelivery).toBe(mealKits + 1);
  });
});

describe("Food delivery Netherlands nav active state", () => {
  const FOOD_DELIVERY_NETHERLANDS_PATH = "/netherlands/living/food-delivery-netherlands/";

  it("treats the Food delivery guide route as live in local/preview", () => {
    expect(getRouteStatus(FOOD_DELIVERY_NETHERLANDS_PATH)).toBe("live");
  });

  it("highlights Living for the Food delivery guide path", () => {
    expect(getActiveNavKey(FOOD_DELIVERY_NETHERLANDS_PATH)).toBe("living");
  });

  it("renders the Living Daily life menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Daily life")
      ?.items.find((row) => row.label === "Food delivery");

    expect(item).toBeDefined();
    expect(item?.href).toBe(FOOD_DELIVERY_NETHERLANDS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(FOOD_DELIVERY_NETHERLANDS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Daily life", () => {
    const rows = menuRowsForHref(FOOD_DELIVERY_NETHERLANDS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Daily life");
  });

  it("sits immediately after Meal kits and before Emergencies & safety", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Daily life")
        ?.items.map((row) => row.label) ?? [];
    const mealKits = labels.indexOf("Meal kits");
    const foodDelivery = labels.indexOf("Food delivery");
    const restaurants = labels.indexOf("Restaurants");
    const tipping = labels.indexOf("Tipping");
    const emergencies = labels.indexOf("Emergencies & safety");

    expect(mealKits).toBeGreaterThanOrEqual(0);
    expect(foodDelivery).toBe(mealKits + 1);
    expect(restaurants).toBe(foodDelivery + 1);
    expect(tipping).toBe(restaurants + 1);
    expect(emergencies).toBe(tipping + 1);
  });
});

describe("Restaurants Netherlands nav active state", () => {
  const RESTAURANTS_NETHERLANDS_PATH = "/netherlands/living/restaurants-netherlands/";

  it("treats the Restaurants guide route as live in local/preview", () => {
    expect(getRouteStatus(RESTAURANTS_NETHERLANDS_PATH)).toBe("live");
  });

  it("highlights Living for the Restaurants guide path", () => {
    expect(getActiveNavKey(RESTAURANTS_NETHERLANDS_PATH)).toBe("living");
  });

  it("renders the Living Daily life menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Daily life")
      ?.items.find((row) => row.label === "Restaurants");

    expect(item).toBeDefined();
    expect(item?.href).toBe(RESTAURANTS_NETHERLANDS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(RESTAURANTS_NETHERLANDS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Daily life", () => {
    const rows = menuRowsForHref(RESTAURANTS_NETHERLANDS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Daily life");
  });

  it("sits immediately after Food delivery and before Tipping", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Daily life")
        ?.items.map((row) => row.label) ?? [];
    const foodDelivery = labels.indexOf("Food delivery");
    const restaurants = labels.indexOf("Restaurants");
    const tipping = labels.indexOf("Tipping");
    const emergencies = labels.indexOf("Emergencies & safety");

    expect(foodDelivery).toBeGreaterThanOrEqual(0);
    expect(restaurants).toBe(foodDelivery + 1);
    expect(tipping).toBe(restaurants + 1);
    expect(emergencies).toBe(tipping + 1);
  });
});

describe("Tipping Netherlands nav active state", () => {
  const TIPPING_NETHERLANDS_PATH = "/netherlands/living/tipping-netherlands/";

  it("treats the Tipping guide route as live in local/preview", () => {
    expect(getRouteStatus(TIPPING_NETHERLANDS_PATH)).toBe("live");
  });

  it("highlights Living for the Tipping guide path", () => {
    expect(getActiveNavKey(TIPPING_NETHERLANDS_PATH)).toBe("living");
  });

  it("renders the Living Daily life menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Daily life")
      ?.items.find((row) => row.label === "Tipping");

    expect(item).toBeDefined();
    expect(item?.href).toBe(TIPPING_NETHERLANDS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(TIPPING_NETHERLANDS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Daily life", () => {
    const rows = menuRowsForHref(TIPPING_NETHERLANDS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Daily life");
  });

  it("sits immediately after Restaurants and before Emergencies & safety", () => {
    const labels =
      MEGA_MENUS.living.sections
        .find((section) => section.title === "Daily life")
        ?.items.map((row) => row.label) ?? [];
    const restaurants = labels.indexOf("Restaurants");
    const tipping = labels.indexOf("Tipping");
    const emergencies = labels.indexOf("Emergencies & safety");

    expect(restaurants).toBeGreaterThanOrEqual(0);
    expect(tipping).toBe(restaurants + 1);
    expect(emergencies).toBe(tipping + 1);
  });
});
