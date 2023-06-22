import { ProductDecorator } from "../decorator/product-decorator";
import { ProductDiscountDecorator } from "../decorator/product-discount-decorator";
import { Product } from "../product";

describe("decorator test", () => {
  test("decorator base ", () => {
    const product = new Product("cellphone", 1500.0);
    const decoratorProduct = new ProductDecorator(product);
    expect(product.getName()).toBe(decoratorProduct.getName());
    expect(product.getPrice()).toBe(decoratorProduct.getPrice());
  });

  it("should be able apply discount in a product", () => {
    const product = new Product("cellphone", 1500.0);
    const productDiscount = new ProductDiscountDecorator(product, 20);
    expect(productDiscount.getPrice()).toBe(1200);
  });
});
