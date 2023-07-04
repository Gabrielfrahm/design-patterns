import { BikeResult } from "../bike-result";
import { CalcNavigation } from "../calc-navigation";
import { CarResult } from "../car-result";

describe("strategy test", () => {
  test("calc route", () => {
    const calcNavigation = new CalcNavigation();
    calcNavigation.result = new CarResult();
    calcNavigation.setNavigation({
      destined: ["10930304", "-213213213"],
      match: ["213892132", "-213213"],
    });
    expect(calcNavigation.getResult()).toStrictEqual(["street J", "street h"]);
    calcNavigation.result = new BikeResult();
    expect(calcNavigation.getResult()).toStrictEqual(["street A", "street C"]);
  });
});
