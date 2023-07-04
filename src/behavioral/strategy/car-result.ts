import { CalcNavigation } from "./calc-navigation";
import { ResultNavigation } from "./result-navigation";

export class CarResult extends ResultNavigation {
  protected route: string[] = [];

  getResult(routes: CalcNavigation): string[] {
    return ["street J", "street h"];
  }
}
