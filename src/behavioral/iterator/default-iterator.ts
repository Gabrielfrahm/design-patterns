import { DataStruct } from "./data-struct";
import { IteratorInterface } from "./iterator-interface";

export class DefaultIterator<T> implements IteratorInterface<T> {
  private index: number = 0;
  constructor(private readonly dataStructure: DataStruct<T>) {}

  public reset(): void {
    this.index = 0;
  }

  public next(): IteratorResult<T, any> {
    const returnValue = this.makeValue(this.dataStructure.items[this.index]);
    returnValue.done = this.index >= this.dataStructure.size();
    this.index++;
    return returnValue;
  }

  private makeValue(value: T): IteratorResult<T> {
    return { value, done: false };
  }

  // return?(value?: any): IteratorResult<T, any> {
  //   throw new Error("Method not implemented.");
  // }

  // throw?(e?: any): IteratorResult<T, any> {
  //   throw new Error("Method not implemented.");
  // }
}
