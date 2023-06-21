import { ComponentProtocol } from "./component-protocol";

export class Product extends ComponentProtocol {
  constructor(private readonly name: string, private readonly price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}
