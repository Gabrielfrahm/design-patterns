import { ProductInterface } from "../product/product-interface";

export abstract class ProductFactory {
  abstract getProduct(name: string): ProductInterface;

  sold(quantity: number, name: string): number {
    const product = this.getProduct(name);
    return product.price(20) * quantity;
  }
}
