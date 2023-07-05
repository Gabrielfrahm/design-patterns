import { BrazilTax } from "../brazil-tax";
import { Drink } from "../drink";
import { Food } from "../food";

describe("visitor test", () => {
  test("cart with tax", () => {
    const food = new Food(2);
    const drink = new Drink(2);
    const cart = [food, drink];
    const total = cart.reduce((sum, item) => item.getPrice() + sum, 0);
    expect(total).toBe(4);
    const brazilTax = new BrazilTax();
    const totalTax = cart.reduce(
      (sum, item) => item.getPriceWithTaxes(brazilTax) + sum,
      0
    );
    expect(totalTax).toBe(5.8);
  });
});
