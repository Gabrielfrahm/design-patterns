import { ProductInterface } from "../interface/product-interface";
import { ProductDecorator } from "./product-decorator";

export class ProductDiscountDecorator extends ProductDecorator {
  constructor(
    protected product: ProductInterface,
    private readonly percentDiscount: number
  ) {
    super(product);
    this.percentDiscount = percentDiscount;
  }

  getName(): string {
    return this.product.getName() + "discount";
  }

  getPrice(): number {
    const discount = this.product.getPrice() * (this.percentDiscount / 100);
    return this.product.getPrice() - discount;
  }
}
