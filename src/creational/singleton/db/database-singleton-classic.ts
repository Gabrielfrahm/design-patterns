import { log } from "console";
import { Log } from "../interface/log-interface";

export class DatabaseClassic {
  private static _instance: DatabaseClassic | null = null;
  private logs: Log[] = [];

  private constructor() {}

  static get instance(): DatabaseClassic {
    if (DatabaseClassic._instance === null) {
      DatabaseClassic._instance = new DatabaseClassic();
    }

    return DatabaseClassic._instance;
  }

  add(log: Log): void {
    this.logs.push(log);
  }

  remove(index: number): void {
    this.logs.splice(index, 1);
  }

  show(): Log[] {
    return this.logs;
  }
}
