import { CenterTableInterface } from "./centerTable-interface";

export class VintageCenterTable implements CenterTableInterface {
  constructor(public name: string) {
    this.name = name;
  }
  material(): string {
    return "wood";
  }
  LegNumbers(): number {
    return 4;
  }
}
