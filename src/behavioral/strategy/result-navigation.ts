import { CalcNavigation } from "./calc-navigation";

export class ResultNavigation {
  protected result: string[] = [];

  getResult(routes: CalcNavigation): string[] {
    const result = routes.getDestined().concat(routes.getMatch());
    return result;
  }
}
