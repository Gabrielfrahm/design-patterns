import { FlightBookingFacade } from "../facade";

describe("facade test", () => {
  test("facade", () => {
    const facade = new FlightBookingFacade();
    const ticket = facade.bookFlight(
      "test@test.com",
      "123456",
      "origin",
      "destination",
      new Date(),
      "Gabriel"
    );
    expect(ticket).toBe("Ticket issued");
  });
});
