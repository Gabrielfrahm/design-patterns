import { Todo } from "./todo/todo";

export interface UserInterface {
  name: string;
  email: string;

  getTodoDone(): Promise<Todo[]>;
}
