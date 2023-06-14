import { hamburgerCompositeProtocol } from "../interface/hamburger-composite-protocol";

export class Combo implements hamburgerCompositeProtocol {
  private readonly _children: hamburgerCompositeProtocol[] = [];

  getPrice(): number {
    return this._children.reduce((sum, burger) => sum + burger.getPrice(), 0);
  }

  add(...burger: hamburgerCompositeProtocol[]): void {
    burger.forEach((item) => this._children.push(item));
  }
}
