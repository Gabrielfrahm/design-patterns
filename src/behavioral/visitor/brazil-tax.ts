import { Drink } from "./drink";
import { Food } from "./food";
import { VisitorTaxProtocol } from "./visitor-tax-protocol";

export class BrazilTax implements VisitorTaxProtocol {
  taxesFood(food: Food): number {
    return food.getPrice() + food.getPrice() * 0.2;
  }
  taxesDrink(drink: Drink): number {
    return drink.getPrice() + drink.getPrice() * 0.7;
  }
}
