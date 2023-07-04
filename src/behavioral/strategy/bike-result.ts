import { CalcNavigation } from "./calc-navigation";
import { ResultNavigation } from "./result-navigation";

export class BikeResult extends ResultNavigation {
  protected route: string[] = [];

  getResult(routes: CalcNavigation): string[] {
    return ["street A", "street C"];
  }
}
