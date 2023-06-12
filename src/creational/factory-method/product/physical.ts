import { ProductInterface } from "./product-interface";

export class PhysicalProduct implements ProductInterface {
  constructor(private name: string) {}

  nameProduct(): string {
    return this.name;
  }

  price(value: number): number {
    return value;
  }

  available(): boolean {
    return true;
  }
}
