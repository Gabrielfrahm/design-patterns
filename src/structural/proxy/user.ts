import { Todo } from "./todo/todo";
import { UserInterface } from "./user-interface";

export class User implements UserInterface {
  constructor(public name: string, public email: string) {
    this.name = name;
    this.email = email;
  }

  async getTodoDone(): Promise<Todo[]> {
    const todo1 = new Todo("study pattern");
    todo1.setDone(true);
    const todo2 = new Todo("study pattern");
    todo2.setDone(true);
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([todo1, todo2]);
      }, 2000);
    });
  }
}
