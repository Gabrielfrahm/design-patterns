import { CenterTableInterface } from "../centerTable/centerTable-interface";
import { ModernCenterTable } from "../centerTable/modern-centerTable";
import { ChairInterface } from "../chair/chair-interface";
import { ModernChair } from "../chair/modern-chair";
import { FurnitureFactoryInterface } from "./furniture-factory-interface";

export class ModernFurnitureFactor implements FurnitureFactoryInterface {
  makeChair(name: string): ChairInterface {
    return new ModernChair(name);
  }
  makeCenterTable(name: string): CenterTableInterface {
    return new ModernCenterTable(name);
  }
}
