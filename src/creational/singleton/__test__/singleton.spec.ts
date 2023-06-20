import { DatabaseModule } from "../db/database-module";
import { DatabaseClassic } from "../db/database-singleton-classic";
import { Log } from "../interface/log-interface";

describe("singleton module test", () => {
  let logModule: {
    add(log: Log): void;
    remove(index: number): void;
    show(): Log[];
  };

  beforeAll(() => {
    logModule = DatabaseModule;
  });

  it("add log", () => {
    const date = new Date();
    logModule.add({ prefix: "ERR", message: "add user", date: date });
  });

  it("show log", () => {
    const date = new Date();
    logModule.add({ prefix: "ERR", message: "show user", date: date });
    const logs = logModule.show();
    expect(logs).toHaveLength(2);
  });

  it("remove log", () => {
    const date = new Date();
    logModule.add({ prefix: "ERR", message: "remove user", date: date });
    logModule.remove(2);
    const logs = logModule.show();
    expect(logs).toHaveLength(2);
  });
});

describe("singleton classic", () => {
  let logClassic: DatabaseClassic;

  beforeAll(() => {
    logClassic = DatabaseClassic.instance;
  });

  it("test", () => {
    const date = new Date();
    logClassic.add({ prefix: "SUSS", message: "list user", date: date });
  });

  it("show log", () => {
    const date = new Date();
    logClassic.add({ prefix: "ERR", message: "show user", date: date });
    const logs = logClassic.show();
    expect(logs).toHaveLength(2);
  });

  it("remove log", () => {
    const date = new Date();
    logClassic.add({ prefix: "ERR", message: "remove user", date: date });
    logClassic.remove(2);
    const logs = logClassic.show();
    expect(logs).toHaveLength(2);
  });
});
