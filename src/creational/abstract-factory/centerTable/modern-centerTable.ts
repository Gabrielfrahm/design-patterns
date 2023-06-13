import { CenterTableInterface } from "./centerTable-interface";

export class ModernCenterTable implements CenterTableInterface {
  constructor(public name: string) {
    this.name = name;
  }
  material(): string {
    return "iron";
  }
  LegNumbers(): number {
    return 1;
  }
}
