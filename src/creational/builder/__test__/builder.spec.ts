import { MainComboBuilder } from "../classes/main-combo-builder";

describe("builder test", () => {
  test("main combo test", () => {
    const mainCombo = new MainComboBuilder();
    const combo = mainCombo.makeBurger();
    expect(combo).toBeInstanceOf(MainComboBuilder);
    expect(combo.getPrice()).toBe(51);
    combo.makeVeganBurger();
    expect(combo.getPrice()).toBe(66);
  });
});
