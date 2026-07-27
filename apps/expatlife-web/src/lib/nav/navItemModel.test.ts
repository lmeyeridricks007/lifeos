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

  it("has Living > Community menu row", () => {
    const rows = menuRowsForHref(MAKING_DUTCH_FRIENDS_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`)).toContain("living:Community");
  });

  it("renders the Living Community menu row as active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Community")
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

  it("has Living > Culture menu row", () => {
    const rows = menuRowsForHref(HOLIDAYS_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`)).toContain("living:Culture");
  });

  it("has Culture > Social norms menu row", () => {
    const rows = menuRowsForHref(HOLIDAYS_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`)).toContain("culture:Social norms");
  });

  it("renders the Living Culture menu row as active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Culture")
      ?.items.find((row) => row.href === HOLIDAYS_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(HOLIDAYS_PATH, item!)).toBe(true);
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

  it("has Living > Culture menu row", () => {
    const rows = menuRowsForHref(BIRTHDAY_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`)).toContain("living:Culture");
  });

  it("has Culture > Social norms menu row", () => {
    const rows = menuRowsForHref(BIRTHDAY_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`)).toContain("culture:Social norms");
  });

  it("renders the Living Culture menu row as active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Culture")
      ?.items.find((row) => row.href === BIRTHDAY_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(BIRTHDAY_PATH, item!)).toBe(true);
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

  it("has Living > Culture menu row", () => {
    const rows = menuRowsForHref(ETIQUETTE_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`)).toContain("living:Culture");
  });

  it("has Culture > Social norms menu row", () => {
    const rows = menuRowsForHref(ETIQUETTE_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`)).toContain("culture:Social norms");
  });

  it("does not duplicate the guide under Living > Life in the Netherlands", () => {
    const rows = menuRowsForHref(ETIQUETTE_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`)).not.toContain(
      "living:Life in the Netherlands"
    );
  });

  it("renders the Living Culture menu row as active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Culture")
      ?.items.find((row) => row.href === ETIQUETTE_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(ETIQUETTE_PATH, item!)).toBe(true);
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

  it("has Living > Culture menu row", () => {
    const rows = menuRowsForHref(HUMOUR_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`)).toContain("living:Culture");
  });

  it("has Culture > Social norms menu row", () => {
    const rows = menuRowsForHref(HUMOUR_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`)).toContain("culture:Social norms");
  });

  it("does not duplicate the guide under Living > Life in the Netherlands", () => {
    const rows = menuRowsForHref(HUMOUR_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`)).not.toContain(
      "living:Life in the Netherlands"
    );
  });

  it("appears in exactly two mega menu sections (Living Culture + Culture Social norms)", () => {
    expect(menuRowsForHref(HUMOUR_PATH)).toHaveLength(2);
  });

  it("renders the Living Culture menu row as active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Culture")
      ?.items.find((row) => row.href === HUMOUR_PATH);

    expect(item).toBeDefined();
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(HUMOUR_PATH, item!)).toBe(true);
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

  it("has Living > Culture menu row", () => {
    const rows = menuRowsForHref(CULTURE_PATH);
    expect(rows.map((row) => `${row.menuKey}:${row.sectionTitle}`)).toContain("living:Culture");
  });

  it("does not duplicate Dutch Culture in a standalone Culture hub column", () => {
    const rows = menuRowsForHref(CULTURE_PATH).filter((row) => row.menuKey === "culture");
    expect(rows.map((row) => row.sectionTitle)).not.toContain("Culture hub");
  });

  it("features Dutch Culture as the Culture pillar entry", () => {
    expect(MEGA_MENUS.culture.featured?.href).toBe(CULTURE_PATH);
    expect(MEGA_MENUS.culture.featured?.navStatus).toBe("live");
    expect(isNavItemActive(CULTURE_PATH, MEGA_MENUS.culture.featured!)).toBe(true);
  });

  it("does not list Dutch Culture in a Culture mega menu section column", () => {
    const sectionRows = MEGA_MENUS.culture.sections
      .flatMap((section) => section.items)
      .filter((navItem) => navItem.href === CULTURE_PATH);
    expect(sectionRows).toHaveLength(0);
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

  it("renders the Living Benefits menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Benefits")
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

  it("has exactly one menu row, in Living > Benefits", () => {
    const rows = menuRowsForHref(CHILD_BENEFITS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Benefits");
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

describe("gp Netherlands nav active state", () => {
  const GP_NETHERLANDS_PATH = "/netherlands/health/gp-netherlands/";

  it("treats the gp Netherlands guide route as live", () => {
    expect(getRouteStatus(GP_NETHERLANDS_PATH)).toBe("live");
  });

  it("highlights Living for the gp Netherlands guide path", () => {
    expect(getActiveNavKey(GP_NETHERLANDS_PATH)).toBe("living");
  });

  it("renders the Living Daily life menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Daily life")
      ?.items.find((row) => row.label === "General Practitioner (GP)");

    expect(item).toBeDefined();
    expect(item?.href).toBe(GP_NETHERLANDS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(GP_NETHERLANDS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Daily life", () => {
    const rows = menuRowsForHref(GP_NETHERLANDS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Daily life");
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

  it("renders the Living Daily life menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Daily life")
      ?.items.find((row) => row.label === "Dentists");

    expect(item).toBeDefined();
    expect(item?.href).toBe(DENTISTS_NETHERLANDS_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(DENTISTS_NETHERLANDS_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Daily life", () => {
    const rows = menuRowsForHref(DENTISTS_NETHERLANDS_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Daily life");
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

  it("renders the Living Daily life menu row as live and active", () => {
    const item = MEGA_MENUS.living.sections
      .find((section) => section.title === "Daily life")
      ?.items.find((row) => row.label === "Emergency Healthcare");

    expect(item).toBeDefined();
    expect(item?.href).toBe(EMERGENCY_HEALTHCARE_PATH);
    expect(item?.navStatus).toBe("live");
    expect(isNavItemLinkable(item!)).toBe(true);
    expect(isNavItemActive(EMERGENCY_HEALTHCARE_PATH, item!)).toBe(true);
  });

  it("has exactly one menu row, in Living > Daily life", () => {
    const rows = menuRowsForHref(EMERGENCY_HEALTHCARE_PATH);

    expect(rows).toHaveLength(1);
    expect(rows[0].menuKey).toBe("living");
    expect(rows[0].sectionTitle).toBe("Daily life");
  });

  it("keeps Emergencies & safety as a separate Living Daily life item", () => {
    const safety = MEGA_MENUS.living.sections
      .find((section) => section.title === "Daily life")
      ?.items.find((row) => row.label === "Emergencies & safety");

    expect(safety).toBeDefined();
    expect(safety?.href).toBe("/netherlands/living/emergencies-safety/");
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
