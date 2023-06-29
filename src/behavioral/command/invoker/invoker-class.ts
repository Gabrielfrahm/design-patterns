import { CommandInterface } from "../interface/command-interface";

export class RemoteControl {
  private commands: { [k: string]: CommandInterface } = {};

  addCommand(key: string, command: CommandInterface): void {
    this.commands[key] = command;
  }

  executeCommand(key: string): void {
    this.commands[key].execute();
  }
}
