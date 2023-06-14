import { hamburgerBuilder } from "../interface/hamburger-builder-protocol";
import { Combo } from "./combo";
import { ChessBurger, ChickenBurger, VeganBurger, XBacon } from "./hamburgers";

export class MainComboBuilder implements hamburgerBuilder {
  private _combo: Combo = new Combo();

  reset(): this {
    this._combo = new Combo();
    return this;
  }

  makeBurger(): this {
    const chessBurger = new ChessBurger(12);
    const xBacon = new XBacon(20);
    const chickenBurger = new ChickenBurger(19);
    this._combo.add(chessBurger, xBacon, chickenBurger);
    return this;
  }

  makeVeganBurger(): this {
    const veganBurger = new VeganBurger(15);
    this._combo.add(veganBurger);
    return this;
  }

  getCombo(): Combo {
    return this._combo;
  }

  getPrice(): number {
    return this._combo.getPrice();
  }
}
