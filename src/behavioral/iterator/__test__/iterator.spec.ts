import { DataStruct } from "../data-struct";
import { ReverseIterator } from "../reverse-iterator";

describe("iterator test", () => {
  test("iterator string", () => {
    const dataStruct = new DataStruct<string>();
    dataStruct.addItems("A", "B", "C", "D", "E", "F");
    const [a, b] = dataStruct;
    expect([a, b]).toStrictEqual(["A", "B"]);
    const [c, ...rest] = dataStruct;
    expect(c).toBe("C");
    expect(rest).toStrictEqual(["D", "E", "F"]);
  });

  test("iterator number", () => {
    const dataStruct = new DataStruct<number>();
    dataStruct.addItems(1, 2, 3, 4, 5, 6, 7);
    const [a, b] = dataStruct;
    expect([a, b]).toStrictEqual([1, 2]);
    const [c, ...rest] = dataStruct;
    expect(c).toBe(3);
    expect(rest).toStrictEqual([4, 5, 6, 7]);
  });

  test("iterator number revert", () => {
    const dataStruct = new DataStruct<number>();
    dataStruct.addItems(1, 2, 3, 4, 5, 6, 7);
    expect(dataStruct.items).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
    dataStruct.resetIterator();
    dataStruct.changeIterator(new ReverseIterator<number>(dataStruct));
    let count = dataStruct.size();
    for (const data of dataStruct) {
      expect(data).toBe(count);
      count--;
    }
  });
});
