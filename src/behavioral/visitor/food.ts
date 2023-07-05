import { ProductProtocol } from "./product-protocol";
import { VisitorTaxProtocol } from "./visitor-tax-protocol";

export class Food extends ProductProtocol {
  constructor(protected price: number) {
    super("Food", price);
  }

  getPriceWithTaxes(visitor: VisitorTaxProtocol): number {
    return visitor.taxesFood(this);
  }
}
