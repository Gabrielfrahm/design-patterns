import { CenterTableInterface } from "../centerTable/centerTable-interface";
import { VintageCenterTable } from "../centerTable/vintage-centerTable";
import { ChairInterface } from "../chair/chair-interface";
import { VintageChair } from "../chair/vintage-chair";
import { FurnitureFactoryInterface } from "./furniture-factory-interface";

export class VintageFurnitureFactory implements FurnitureFactoryInterface {
  makeChair(name: string): ChairInterface {
    return new VintageChair(name);
  }
  makeCenterTable(name: string): CenterTableInterface {
    return new VintageCenterTable(name);
  }
}
