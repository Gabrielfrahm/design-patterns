import { ModernCenterTable } from "../centerTable/modern-centerTable";
import { VintageCenterTable } from "../centerTable/vintage-centerTable";
import { ModernChair } from "../chair/modern-chair";
import { VintageChair } from "../chair/vintage-chair";
import { ModernFurnitureFactor } from "../factories/modern-furniture-factory";
import { VintageFurnitureFactory } from "../factories/vintage-furniture-factory";

describe("abstract factory test", () => {
  test("vintage chair", () => {
    const chair = new VintageChair("xpto");
    expect(chair).toBeInstanceOf(VintageChair);
    expect(chair.name).toBe("xpto");
    expect(chair.material()).toBe("wood");
    expect(chair.LegNumbers()).toBe(4);
  });

  test("modern chair", () => {
    const chair = new ModernChair("xpto");
    expect(chair).toBeInstanceOf(ModernChair);
    expect(chair.name).toBe("xpto");
    expect(chair.material()).toBe("iron");
    expect(chair.LegNumbers()).toBe(3);
  });

  test("vintage center table", () => {
    const table = new VintageCenterTable("xpto");
    expect(table).toBeInstanceOf(VintageCenterTable);
    expect(table.name).toBe("xpto");
    expect(table.material()).toBe("wood");
    expect(table.LegNumbers()).toBe(4);
  });

  test("modern center table", () => {
    const table = new ModernCenterTable("xpto");
    expect(table).toBeInstanceOf(ModernCenterTable);
    expect(table.name).toBe("xpto");
    expect(table.material()).toBe("iron");
    expect(table.LegNumbers()).toBe(1);
  });

  test("vintage furniture", () => {
    const factory = new VintageFurnitureFactory();
    const chair = factory.makeChair("xpto");
    const table = factory.makeCenterTable("xpto");
    expect(factory).toBeInstanceOf(VintageFurnitureFactory);
    expect(chair).toBeInstanceOf(VintageChair);
    expect(table).toBeInstanceOf(VintageCenterTable);
  });

  test("modern furniture", () => {
    const factory = new ModernFurnitureFactor();
    const chair = factory.makeChair("xpto");
    const table = factory.makeCenterTable("xpto");
    expect(factory).toBeInstanceOf(ModernFurnitureFactor);
    expect(chair).toBeInstanceOf(ModernChair);
    expect(table).toBeInstanceOf(ModernCenterTable);
  });
});
