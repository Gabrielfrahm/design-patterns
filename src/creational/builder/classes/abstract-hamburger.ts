import { hamburgerCompositeProtocol } from "../interface/hamburger-composite-protocol";

export abstract class AbstractHamburger implements hamburgerCompositeProtocol {
  constructor(private price: number) {}

  getPrice(): number {
    return this.price;
  }
}
