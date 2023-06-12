import { DigitalProduct } from "../product/digital";
import { ProductInterface } from "../product/product-interface";
import { ProductFactory } from "./product-factory";

export class DigitalFactory extends ProductFactory {
  getProduct(name: string): ProductInterface {
    return new DigitalProduct(name);
  }
}
