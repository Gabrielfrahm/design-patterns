import { ChairInterface } from "./chair-interface";

export class ModernChair implements ChairInterface {
  constructor(public name: string) {
    this.name = name;
  }
  material(): string {
    return "iron";
  }
  LegNumbers(): number {
    return 3;
  }
}
