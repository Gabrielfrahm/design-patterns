import { DigitalFactory } from "../factories/digital-factory";
import { PhysicalFactory } from "../factories/physical-factory";
import { DigitalProduct } from "../product/digital";

import { PhysicalProduct } from "../product/physical";

describe("product factory method test", () => {
  test("product type physical", () => {
    const physicalProduct = new PhysicalFactory();
    expect(physicalProduct.getProduct("keyboard")).toBeInstanceOf(
      PhysicalProduct
    );
  });

  test("product type digital", () => {
    const digitalFactory = new DigitalFactory();
    expect(digitalFactory.getProduct("pdf")).toBeInstanceOf(DigitalProduct);
  });

  it("check physical product is available", () => {
    const physicalFactory = new PhysicalFactory();
    const product = physicalFactory.getProduct("keyboard");
    expect(product.available()).toBeTruthy();
  });

  it("check digital product is available", () => {
    const digitalFactory = new DigitalFactory();
    const product = digitalFactory.getProduct("keyboard");
    expect(product.available()).toBeFalsy();
  });

  it("sold product", () => {
    const physicalFactory = new PhysicalFactory();
    expect(physicalFactory.sold(20, "keyboard")).toBe(400);
  });

  it("get name product", () => {
    const physicalFactory = new PhysicalFactory();
    const product = physicalFactory.getProduct("keyboard");
    expect(product.nameProduct()).toBe("keyboard");
  });
});
