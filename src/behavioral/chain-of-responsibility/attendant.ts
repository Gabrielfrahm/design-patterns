import { BaseSolicitationHandler } from "./base-solicitation-handler";
import { CustomerSolicitation } from "./customer-solicitation";

export class Attendant extends BaseSolicitationHandler {
  handle(customerSolicitation: CustomerSolicitation): CustomerSolicitation {
    if (customerSolicitation.type === "level 1") {
      customerSolicitation.resolved = true;
      customerSolicitation.resolutionBy = Attendant.name;
      return customerSolicitation;
    }
    return super.handle(customerSolicitation);
  }
}
