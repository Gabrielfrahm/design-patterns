import { Attendant } from "../attendant";
import { CustomerSolicitation } from "../customer-solicitation";
import { Engineer } from "../engineer";
import { Manager } from "../manager";

describe("CoR test", () => {
  it("solicitation level 1", () => {
    const solicitation = new CustomerSolicitation("level 1");
    const attendant = new Attendant();
    attendant.setNextHandler(new Manager()).setNextHandler(new Engineer());
    attendant.handle(solicitation);
    expect(solicitation.resolved).toBeTruthy();
    expect(solicitation.resolutionBy).toBe("Attendant");
  });
  it("solicitation level 2", () => {
    const solicitation = new CustomerSolicitation("level 2");
    const attendant = new Attendant();
    attendant.setNextHandler(new Manager()).setNextHandler(new Engineer());
    attendant.handle(solicitation);
    expect(solicitation.resolved).toBeTruthy();
    expect(solicitation.resolutionBy).toBe("Manager");
  });
  it("solicitation level 3", () => {
    const solicitation = new CustomerSolicitation("level 3");
    const attendant = new Attendant();
    attendant.setNextHandler(new Manager()).setNextHandler(new Engineer());
    attendant.handle(solicitation);
    expect(solicitation.resolved).toBeTruthy();
    expect(solicitation.resolutionBy).toBe("Engineer");
  });
});
