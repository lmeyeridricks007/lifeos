import test from "node:test";
import assert from "node:assert/strict";
import {
  findScheduledGuide,
  isScheduledGuidePubliclyVisible,
  SCHEDULED_GUIDES,
  scheduledPublishDateForPath,
} from "./scheduledGuides";

const JOINT = "/netherlands/money/banking/joint-accounts/";
const STUDENT = "/netherlands/money/banking/student-accounts/";
const COST_OF_LIVING = "/netherlands/money/cost-of-living-netherlands/";
const MONTHLY_BUDGET = "/netherlands/money/monthly-budget-netherlands/";
const SAVING_MONEY = "/netherlands/money/saving-money-netherlands/";
const HIDDEN_COSTS = "/netherlands/money/hidden-costs-netherlands/";
const FINANCIAL_CHECKLIST = "/netherlands/money/financial-checklist-netherlands/";
const FAMILY_ACTIVITIES = "/netherlands/family/family-activities-netherlands/";
const PREGNANCY = "/netherlands/family/pregnancy-netherlands/";
const GIVING_BIRTH = "/netherlands/family/giving-birth-netherlands/";
const PETS = "/netherlands/family/pets-netherlands/";
const DRIVING_LICENCE_EXCHANGE = "/netherlands/living/driving-licence-exchange-netherlands/";
const BUYING_A_CAR = "/netherlands/living/buying-a-car-netherlands/";
const ROAD_TAX = "/netherlands/living/road-tax-netherlands/";
const CAR_INSURANCE = "/netherlands/living/car-insurance-netherlands/";
const MOT_APK = "/netherlands/living/mot-apk-netherlands/";
const SPEED_CAMERAS = "/netherlands/living/speed-cameras-netherlands/";
const OV_CHIPKAART = "/netherlands/living/ov-chipkaart-netherlands/";
const OVPAY = "/netherlands/living/ovpay-netherlands/";
const NS_TRAINS = "/netherlands/living/ns-trains-netherlands/";
const TRAMS = "/netherlands/living/trams-netherlands/";
const METRO = "/netherlands/living/metro-netherlands/";
const REGIONAL_BUSES = "/netherlands/living/regional-buses-netherlands/";
const TRAIN_DISCOUNTS = "/netherlands/living/train-discounts-netherlands/";

test("scheduled guides register Joint and Student for 2026-08-14", () => {
  assert.equal(scheduledPublishDateForPath(JOINT), "2026-08-14");
  assert.equal(scheduledPublishDateForPath(STUDENT), "2026-08-14");
  assert.equal(findScheduledGuide(JOINT)?.title, "Joint bank accounts");
  assert.equal(findScheduledGuide(STUDENT)?.title, "Student bank accounts");
});

test("scheduled guides register Cost of living, Monthly budget and Saving money for 2026-08-15", () => {
  assert.equal(scheduledPublishDateForPath(COST_OF_LIVING), "2026-08-15");
  assert.equal(findScheduledGuide(COST_OF_LIVING)?.title, "Cost of living");
  assert.equal(scheduledPublishDateForPath(MONTHLY_BUDGET), "2026-08-15");
  assert.equal(findScheduledGuide(MONTHLY_BUDGET)?.title, "Monthly budget");
  assert.equal(scheduledPublishDateForPath(SAVING_MONEY), "2026-08-15");
  assert.equal(findScheduledGuide(SAVING_MONEY)?.title, "Saving money");
});

test("scheduled guides register Hidden costs and Financial checklist for 2026-08-18", () => {
  assert.ok(SCHEDULED_GUIDES.length >= 6);
  assert.equal(scheduledPublishDateForPath(HIDDEN_COSTS), "2026-08-18");
  assert.equal(findScheduledGuide(HIDDEN_COSTS)?.title, "Hidden costs of living");
  assert.equal(scheduledPublishDateForPath(FINANCIAL_CHECKLIST), "2026-08-18");
  assert.equal(findScheduledGuide(FINANCIAL_CHECKLIST)?.title, "Financial checklist for expats");
});

test("scheduled guides register Family activities and Pregnancy for 2026-08-20", () => {
  assert.equal(scheduledPublishDateForPath(FAMILY_ACTIVITIES), "2026-08-20");
  assert.equal(findScheduledGuide(FAMILY_ACTIVITIES)?.title, "Family activities");
  assert.equal(scheduledPublishDateForPath(PREGNANCY), "2026-08-20");
  assert.equal(findScheduledGuide(PREGNANCY)?.title, "Pregnancy");
});

test("scheduled guides register Giving birth and Pets for 2026-08-24", () => {
  assert.equal(scheduledPublishDateForPath(GIVING_BIRTH), "2026-08-24");
  assert.equal(findScheduledGuide(GIVING_BIRTH)?.title, "Giving birth");
  assert.equal(scheduledPublishDateForPath(PETS), "2026-08-24");
  assert.equal(findScheduledGuide(PETS)?.title, "Pets");
});

test("scheduled guides register Driving licence exchange and Buying a car for 2026-08-26", () => {
  assert.equal(scheduledPublishDateForPath(DRIVING_LICENCE_EXCHANGE), "2026-08-26");
  assert.equal(findScheduledGuide(DRIVING_LICENCE_EXCHANGE)?.title, "Driving licence exchange");
  assert.equal(scheduledPublishDateForPath(BUYING_A_CAR), "2026-08-26");
  assert.equal(findScheduledGuide(BUYING_A_CAR)?.title, "Buying a car");
});

test("scheduled guides register Road tax and Car insurance for 2026-08-29", () => {
  assert.equal(scheduledPublishDateForPath(ROAD_TAX), "2026-08-29");
  assert.equal(findScheduledGuide(ROAD_TAX)?.title, "Road tax");
  assert.equal(scheduledPublishDateForPath(CAR_INSURANCE), "2026-08-29");
  assert.equal(findScheduledGuide(CAR_INSURANCE)?.title, "Car insurance");
});

test("scheduled guides register MOT / APK and Speed cameras for 2026-09-01", () => {
  assert.equal(scheduledPublishDateForPath(MOT_APK), "2026-09-01");
  assert.equal(findScheduledGuide(MOT_APK)?.title, "MOT / APK");
  assert.equal(scheduledPublishDateForPath(SPEED_CAMERAS), "2026-09-01");
  assert.equal(findScheduledGuide(SPEED_CAMERAS)?.title, "Speed cameras");
});

test("before go-live with enforcePublishDates → not publicly visible", () => {
  const before = new Date("2026-08-13T23:59:59.000Z");
  assert.equal(isScheduledGuidePubliclyVisible(JOINT, before, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(STUDENT, before, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(COST_OF_LIVING, before, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(MONTHLY_BUDGET, before, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(SAVING_MONEY, before, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(HIDDEN_COSTS, before, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(FINANCIAL_CHECKLIST, before, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(FAMILY_ACTIVITIES, before, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(PREGNANCY, before, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(GIVING_BIRTH, before, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(PETS, before, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(DRIVING_LICENCE_EXCHANGE, before, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(BUYING_A_CAR, before, { enforcePublishDates: true }), false);
});

test("from 00:00 UTC on 2026-08-14 with enforcePublishDates → Joint/Student visible; later guides still gated", () => {
  const goLive = new Date("2026-08-14T00:00:00.000Z");
  assert.equal(isScheduledGuidePubliclyVisible(JOINT, goLive, { enforcePublishDates: true }), true);
  assert.equal(isScheduledGuidePubliclyVisible(STUDENT, goLive, { enforcePublishDates: true }), true);
  assert.equal(isScheduledGuidePubliclyVisible(COST_OF_LIVING, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(MONTHLY_BUDGET, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(SAVING_MONEY, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(HIDDEN_COSTS, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(FINANCIAL_CHECKLIST, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(FAMILY_ACTIVITIES, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(PREGNANCY, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(GIVING_BIRTH, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(PETS, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(DRIVING_LICENCE_EXCHANGE, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(BUYING_A_CAR, goLive, { enforcePublishDates: true }), false);
});

test("from 00:00 UTC on 2026-08-15 with enforcePublishDates → Cost of living, Monthly budget and Saving money publicly visible; later guides still gated", () => {
  const goLive = new Date("2026-08-15T00:00:00.000Z");
  assert.equal(isScheduledGuidePubliclyVisible(COST_OF_LIVING, goLive, { enforcePublishDates: true }), true);
  assert.equal(isScheduledGuidePubliclyVisible(MONTHLY_BUDGET, goLive, { enforcePublishDates: true }), true);
  assert.equal(isScheduledGuidePubliclyVisible(SAVING_MONEY, goLive, { enforcePublishDates: true }), true);
  assert.equal(isScheduledGuidePubliclyVisible(HIDDEN_COSTS, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(FINANCIAL_CHECKLIST, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(FAMILY_ACTIVITIES, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(PREGNANCY, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(GIVING_BIRTH, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(PETS, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(DRIVING_LICENCE_EXCHANGE, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(BUYING_A_CAR, goLive, { enforcePublishDates: true }), false);
});

test("from 00:00 UTC on 2026-08-18 with enforcePublishDates → Hidden costs batch publicly visible; Family activities and Giving birth still gated", () => {
  const goLive = new Date("2026-08-18T00:00:00.000Z");
  assert.equal(isScheduledGuidePubliclyVisible(HIDDEN_COSTS, goLive, { enforcePublishDates: true }), true);
  assert.equal(isScheduledGuidePubliclyVisible(FINANCIAL_CHECKLIST, goLive, { enforcePublishDates: true }), true);
  assert.equal(isScheduledGuidePubliclyVisible(FAMILY_ACTIVITIES, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(PREGNANCY, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(GIVING_BIRTH, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(PETS, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(DRIVING_LICENCE_EXCHANGE, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(BUYING_A_CAR, goLive, { enforcePublishDates: true }), false);
});

test("from 00:00 UTC on 2026-08-20 with enforcePublishDates → Family activities and Pregnancy publicly visible; Giving birth and Pets still gated", () => {
  const goLive = new Date("2026-08-20T00:00:00.000Z");
  assert.equal(isScheduledGuidePubliclyVisible(FAMILY_ACTIVITIES, goLive, { enforcePublishDates: true }), true);
  assert.equal(isScheduledGuidePubliclyVisible(PREGNANCY, goLive, { enforcePublishDates: true }), true);
  assert.equal(isScheduledGuidePubliclyVisible(GIVING_BIRTH, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(PETS, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(DRIVING_LICENCE_EXCHANGE, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(BUYING_A_CAR, goLive, { enforcePublishDates: true }), false);
});

test("from 00:00 UTC on 2026-08-24 with enforcePublishDates → Giving birth and Pets publicly visible; Driving cluster still gated", () => {
  const goLive = new Date("2026-08-24T00:00:00.000Z");
  assert.equal(isScheduledGuidePubliclyVisible(GIVING_BIRTH, goLive, { enforcePublishDates: true }), true);
  assert.equal(isScheduledGuidePubliclyVisible(PETS, goLive, { enforcePublishDates: true }), true);
  assert.equal(isScheduledGuidePubliclyVisible(DRIVING_LICENCE_EXCHANGE, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(BUYING_A_CAR, goLive, { enforcePublishDates: true }), false);
});

test("from 00:00 UTC on 2026-08-26 with enforcePublishDates → Driving licence exchange and Buying a car publicly visible", () => {
  const goLive = new Date("2026-08-26T00:00:00.000Z");
  assert.equal(isScheduledGuidePubliclyVisible(DRIVING_LICENCE_EXCHANGE, goLive, { enforcePublishDates: true }), true);
  assert.equal(isScheduledGuidePubliclyVisible(BUYING_A_CAR, goLive, { enforcePublishDates: true }), true);
  assert.equal(isScheduledGuidePubliclyVisible(MOT_APK, goLive, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(SPEED_CAMERAS, goLive, { enforcePublishDates: true }), false);
});

test("from 00:00 UTC on 2026-09-01 with enforcePublishDates → MOT / APK and Speed cameras publicly visible", () => {
  const goLive = new Date("2026-09-01T00:00:00.000Z");
  assert.equal(isScheduledGuidePubliclyVisible(MOT_APK, goLive, { enforcePublishDates: true }), true);
  assert.equal(isScheduledGuidePubliclyVisible(SPEED_CAMERAS, goLive, { enforcePublishDates: true }), true);
});

test("scheduled guides register Public Transport cluster for 2026-09-07", () => {
  assert.equal(scheduledPublishDateForPath(OV_CHIPKAART), "2026-09-07");
  assert.equal(findScheduledGuide(OV_CHIPKAART)?.title, "OV-chipkaart");
  assert.equal(scheduledPublishDateForPath(OVPAY), "2026-09-07");
  assert.equal(findScheduledGuide(OVPAY)?.title, "OVpay");
  assert.equal(scheduledPublishDateForPath(NS_TRAINS), "2026-09-07");
  assert.equal(findScheduledGuide(NS_TRAINS)?.title, "NS trains");
});

test("scheduled guides register Trams, Metro and Regional buses for 2026-09-10", () => {
  assert.equal(scheduledPublishDateForPath(TRAMS), "2026-09-10");
  assert.equal(findScheduledGuide(TRAMS)?.title, "Trams");
  assert.equal(scheduledPublishDateForPath(METRO), "2026-09-10");
  assert.equal(findScheduledGuide(METRO)?.title, "Metro");
  assert.equal(scheduledPublishDateForPath(REGIONAL_BUSES), "2026-09-10");
  assert.equal(findScheduledGuide(REGIONAL_BUSES)?.title, "Regional buses");
});

test("from 00:00 UTC on 2026-09-07 with enforcePublishDates → Public Transport cluster publicly visible", () => {
  const before = new Date("2026-09-06T23:59:59.000Z");
  assert.equal(isScheduledGuidePubliclyVisible(OV_CHIPKAART, before, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(OVPAY, before, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(NS_TRAINS, before, { enforcePublishDates: true }), false);
  const goLive = new Date("2026-09-07T00:00:00.000Z");
  assert.equal(isScheduledGuidePubliclyVisible(OV_CHIPKAART, goLive, { enforcePublishDates: true }), true);
  assert.equal(isScheduledGuidePubliclyVisible(OVPAY, goLive, { enforcePublishDates: true }), true);
  assert.equal(isScheduledGuidePubliclyVisible(NS_TRAINS, goLive, { enforcePublishDates: true }), true);
});

test("from 00:00 UTC on 2026-09-10 with enforcePublishDates → Trams, Metro and Regional buses publicly visible", () => {
  const before = new Date("2026-09-09T23:59:59.000Z");
  assert.equal(isScheduledGuidePubliclyVisible(TRAMS, before, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(METRO, before, { enforcePublishDates: true }), false);
  assert.equal(isScheduledGuidePubliclyVisible(REGIONAL_BUSES, before, { enforcePublishDates: true }), false);
  const goLive = new Date("2026-09-10T00:00:00.000Z");
  assert.equal(isScheduledGuidePubliclyVisible(TRAMS, goLive, { enforcePublishDates: true }), true);
  assert.equal(isScheduledGuidePubliclyVisible(METRO, goLive, { enforcePublishDates: true }), true);
  assert.equal(isScheduledGuidePubliclyVisible(REGIONAL_BUSES, goLive, { enforcePublishDates: true }), true);
});

test("scheduled guides register Train discounts for 2026-09-16", () => {
  assert.equal(scheduledPublishDateForPath(TRAIN_DISCOUNTS), "2026-09-16");
  assert.equal(findScheduledGuide(TRAIN_DISCOUNTS)?.title, "Train discounts");
});

test("from 00:00 UTC on 2026-09-16 with enforcePublishDates → Train discounts publicly visible", () => {
  const before = new Date("2026-09-15T23:59:59.000Z");
  assert.equal(isScheduledGuidePubliclyVisible(TRAIN_DISCOUNTS, before, { enforcePublishDates: true }), false);
  const goLive = new Date("2026-09-16T00:00:00.000Z");
  assert.equal(isScheduledGuidePubliclyVisible(TRAIN_DISCOUNTS, goLive, { enforcePublishDates: true }), true);
});

test("unknown paths are not gated", () => {
  const before = new Date("2026-08-01T00:00:00.000Z");
  assert.equal(
    isScheduledGuidePubliclyVisible("/netherlands/money/banking/debit-cards/", before, {
      enforcePublishDates: true,
    }),
    true
  );
});
