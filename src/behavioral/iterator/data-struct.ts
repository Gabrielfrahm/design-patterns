import { DefaultIterator } from "./default-iterator";
import { IteratorInterface } from "./iterator-interface";

export class DataStruct<T> {
  private _items: T[] = [];
  private iterator: IteratorInterface<T> = new DefaultIterator<T>(this);

  addItems(...items: T[]): void {
    items.forEach((item) => {
      this._items.push(item);
    });
  }

  get items(): T[] {
    return this._items;
  }

  size(): number {
    return this._items.length;
  }

  changeIterator(iterator: IteratorInterface<T>): void {
    this.iterator = iterator;
  }

  resetIterator(): void {
    this.iterator.reset();
  }

  [Symbol.iterator](): IteratorInterface<T> {
    return this.iterator;
  }
}
