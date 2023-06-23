import { deliveryContext } from "../delivery-context";
import { DeliveryFactory } from "../delivery-factory";

describe("flyweight test", () => {
  it("factory", () => {
    const factory = new DeliveryFactory();
    deliveryContext(factory, "client 1", "12", "av dale", "sp");
    deliveryContext(factory, "client 2", "44", "av salame", "sp");
    deliveryContext(factory, "client 3", "455535", "av dale", "pinda");
    deliveryContext(factory, "client 4", "546", "av dale", "sp");

    expect(factory.getLocations()).toMatchSnapshot({
      avdale_pinda: { intrinsicState: { city: "pinda", street: "av dale" } },
      avdale_sp: { intrinsicState: { city: "sp", street: "av dale" } },
      avsalame_sp: { intrinsicState: { city: "sp", street: "av salame" } },
    });
  });
});
