import { PhysicalProduct } from "../product/physical";
import { ProductInterface } from "../product/product-interface";
import { ProductFactory } from "./product-factory";

export class PhysicalFactory extends ProductFactory {
  getProduct(name: string): ProductInterface {
    return new PhysicalProduct(name);
  }
}
