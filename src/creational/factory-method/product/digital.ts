import { ProductInterface } from "./product-interface";

export class DigitalProduct implements ProductInterface {
  constructor(private name: string) {}

  nameProduct(): string {
    return this.name;
  }

  price(value: number): number {
    return value;
  }

  available(): boolean {
    return false;
  }
}
