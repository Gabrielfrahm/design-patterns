import { BaseSolicitationHandler } from "./base-solicitation-handler";
import { CustomerSolicitation } from "./customer-solicitation";

export class Manager extends BaseSolicitationHandler {
  handle(customerSolicitation: CustomerSolicitation): CustomerSolicitation {
    if (customerSolicitation.type === "level 2") {
      customerSolicitation.resolved = true;
      customerSolicitation.resolutionBy = Manager.name;
      return customerSolicitation;
    }
    return super.handle(customerSolicitation);
  }
}
