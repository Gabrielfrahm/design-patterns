import { ProductProtocol } from "./product-protocol";
import { VisitorTaxProtocol } from "./visitor-tax-protocol";

export class Drink extends ProductProtocol {
  constructor(protected price: number) {
    super("Drink", price);
  }

  getPriceWithTaxes(visitor: VisitorTaxProtocol): number {
    return visitor.taxesDrink(this);
  }
}
