import { ProductInterface } from "../interface/product-interface";

export class ProductDecorator implements ProductInterface {
  constructor(protected product: ProductInterface) {}

  getName(): string {
    return this.product.getName();
  }

  getPrice(): number {
    return this.product.getPrice();
  }
}
