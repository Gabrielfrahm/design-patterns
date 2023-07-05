import { VisitorTaxProtocol } from "./visitor-tax-protocol";

export abstract class ProductProtocol {
  constructor(protected name: string, protected price: number) {}

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  abstract getPriceWithTaxes(visitor: VisitorTaxProtocol): number;
}
