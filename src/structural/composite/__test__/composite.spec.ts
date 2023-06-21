import { BoxProduct } from "../box-product";
import { Product } from "../product";

describe("composite test", () => {
  it("product", () => {
    const product = new Product("bottle water", 4);
    expect(product).toBeInstanceOf(Product);
    expect(product.getPrice()).toBe(4);
  });

  it("box product", () => {
    const product = new Product("bottle water", 4);
    const product1 = new Product("Yogurt", 2.25);
    const box = new BoxProduct();
    box.add(product, product1);
    expect(box.getPrice()).toBe(6.25);
    const box2 = new BoxProduct();
    box2.add(product);
    box.add(box2);
    expect(box2.getPrice()).toBe(4);
    expect(box.getPrice()).toBe(10.25);
  });
});
