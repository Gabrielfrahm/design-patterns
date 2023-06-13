import { CenterTableInterface } from "../centerTable/centerTable-interface";
import { ChairInterface } from "../chair/chair-interface";

export interface FurnitureFactoryInterface {
  makeChair(name: string): ChairInterface;
  makeCenterTable(name: string): CenterTableInterface;
}
