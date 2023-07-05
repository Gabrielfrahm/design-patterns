import { Drink } from "./drink";
import { Food } from "./food";

export interface VisitorTaxProtocol {
  taxesFood(food: Food): number;
  taxesDrink(drink: Drink): number;
}
