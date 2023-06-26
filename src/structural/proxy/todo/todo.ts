import { TodoInterface } from "./todo-inteface";

export class Todo implements TodoInterface {
  public done: boolean;

  constructor(public message: string) {
    this.message = message;
  }

  setDone(value: boolean): void {
    this.done = value;
  }
}
