import { CustomerSolicitation } from "./customer-solicitation";

export abstract class BaseSolicitationHandler {
  protected nextHandler: BaseSolicitationHandler | null = null;

  setNextHandler(handler: BaseSolicitationHandler): BaseSolicitationHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(solicitation: CustomerSolicitation): CustomerSolicitation {
    if (this.nextHandler) return this.nextHandler.handle(solicitation);
    return solicitation;
  }
}
