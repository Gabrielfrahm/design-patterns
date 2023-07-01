import { Mediator } from "../mediator";
import { Seller } from "../seller";

describe("mediator test", () => {
  test("seller wanting to  sell and seller wanting to buy", () => {
    const mediator = new Mediator();
    const seller = new Seller();
    seller.addProducts({ id: "1", name: "sabonete", price: 4.0 });
    seller.addProducts({ id: "2", name: "papel higiênico", price: 6.0 });
    seller.addProducts({ id: "3", name: "barbeador", price: 8.0 });

    const seller2 = new Seller();
    seller2.addProducts({ id: "3", name: "Carro", price: 49000.9 });
    seller2.addProducts({ id: "4", name: "Lápis", price: 1.9 });

    mediator.addSeller(seller, seller2);
    seller.buy("3");
    expect(mediator.showProducts()).toHaveLength(4);
    seller2.buy("1");
    expect(mediator.showProducts()).toHaveLength(3);
  });
});
