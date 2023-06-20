import { Log } from "../interface/log-interface";

const logs: Log[] = [];

export const DatabaseModule = {
  add(log: Log): void {
    logs.push(log);
  },

  remove(index: number): void {
    logs.splice(index, 1);
  },

  show(): Log[] {
    return logs;
  },
};
