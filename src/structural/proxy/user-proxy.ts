import { Todo } from "./todo/todo";
import { TodoInterface } from "./todo/todo-inteface";
import { User } from "./user";
import { UserInterface } from "./user-interface";

export class UserProxy implements UserInterface {
  private realUser: UserInterface | null = null;
  private realUserWithTodoDone: TodoInterface[] | null = null;

  constructor(public name: string, public email: string) {
    this.name = name;
    this.email = email;
  }

  private createUser(): UserInterface {
    if (this.realUser === null) {
      this.realUser = new User(this.name, this.email);
    }
    return this.realUser;
  }

  async getTodoDone(): Promise<Todo[]> {
    this.realUser = this.createUser();

    if (this.realUserWithTodoDone === null) {
      this.realUserWithTodoDone = await this.realUser.getTodoDone();
    }

    return this.realUserWithTodoDone;
  }
}
