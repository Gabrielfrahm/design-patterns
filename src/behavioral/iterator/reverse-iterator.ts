import { DataStruct } from "./data-struct";
import { IteratorInterface } from "./iterator-interface";

export class ReverseIterator<T> implements IteratorInterface<T> {
  private index: number = this.dataStructure.size();
  constructor(private readonly dataStructure: DataStruct<T>) {}

  public reset(): void {
    this.index = this.dataStructure.size();
  }

  public next(): IteratorResult<T, any> {
    this.index--;
    const returnValue = this.makeValue(this.dataStructure.items[this.index]);
    returnValue.done = this.index < 0;
    return returnValue;
  }

  private makeValue(value: T): IteratorResult<T> {
    return { value, done: false };
  }
}
