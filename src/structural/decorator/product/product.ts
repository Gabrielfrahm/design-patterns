import { ProductInterface } from "./interface/product-interface";

export class Product implements ProductInterface {
  constructor(private readonly name: string, private price: number) {
    this.name = name;
    this.price = price;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}
