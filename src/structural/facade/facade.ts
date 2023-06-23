import { FlightSearch } from "./classes/flightSearch ";
import { Login } from "./classes/login";
import { SeatReservation } from "./classes/seatReservation";
import { Ticketing } from "./classes/ticketing";

export class FlightBookingFacade {
  private login: Login;
  private search: FlightSearch;
  private reservation: SeatReservation;
  private ticketing: Ticketing;

  constructor() {
    this.login = new Login();
    this.search = new FlightSearch();
    this.reservation = new SeatReservation();
    this.ticketing = new Ticketing();
  }

  bookFlight(
    email: string,
    password: string,
    origin: string,
    destination: string,
    date: Date,
    passenger: string
  ): string {
    const isAuthenticated = this.login.authenticate(email, password);

    if (!isAuthenticated) {
      throw new Error("Authentication failed");
    }

    const flights = this.search.search(origin, destination, date);

    if (flights.length === 0) {
      throw new Error("No flights available");
    }

    const reservation = this.reservation.reserve(flights[0], passenger);
    const ticket = this.ticketing.issueTicket(reservation);

    return ticket;
  }
}
