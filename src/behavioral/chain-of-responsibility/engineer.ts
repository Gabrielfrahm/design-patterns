import { BaseSolicitationHandler } from "./base-solicitation-handler";
import { CustomerSolicitation } from "./customer-solicitation";

export class Engineer extends BaseSolicitationHandler {
  handle(customerSolicitation: CustomerSolicitation): CustomerSolicitation {
    if (customerSolicitation.type === "level 3") {
      customerSolicitation.resolved = true;
      customerSolicitation.resolutionBy = Engineer.name;
      return customerSolicitation;
    }
    return super.handle(customerSolicitation);
  }
}
