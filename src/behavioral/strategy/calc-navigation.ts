import { NavigationInterface } from "./navigation-interface";
import { ResultNavigation } from "./result-navigation";

export class CalcNavigation {
  private navigation: NavigationInterface;
  private _result: ResultNavigation = new ResultNavigation();

  setNavigation(navigation: NavigationInterface): void {
    this.navigation = navigation;
  }

  getDestined(): string[] {
    return this.navigation.destined;
  }

  getMatch(): string[] {
    return this.navigation.match;
  }

  getNavigation(): NavigationInterface {
    return this.navigation;
  }

  getResult(): string[] {
    return this._result.getResult(this);
  }

  set result(resultNavigation: ResultNavigation) {
    this._result = resultNavigation;
  }
}
