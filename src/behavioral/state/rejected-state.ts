import { Order } from "./order";
import { OrderStateInterface } from "./order-state-interface";

export class RejectedState implements OrderStateInterface {
  private name = "order-rejected";

  constructor(private order: Order) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    throw new Error(
      "o pedido não pode ser aprovado  porque o pedido foi recusado."
    );
  }

  rejectPayment(): void {
    throw new Error("o pedido ja esta recusado.");
  }

  waitPayment(): void {
    throw new Error(
      "não posso mover para pendendo porque o pedido foi recusado."
    );
  }

  shipOrder(): void {
    throw new Error("não posso enviar um pedido com pagamento recusado.");
  }
}
