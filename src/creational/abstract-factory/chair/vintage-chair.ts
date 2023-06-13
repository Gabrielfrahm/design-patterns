import { ChairInterface } from "./chair-interface";

export class VintageChair implements ChairInterface {
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
