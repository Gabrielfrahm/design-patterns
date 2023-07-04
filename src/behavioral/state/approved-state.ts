import { Order } from "./order";
import { OrderStateInterface } from "./order-state-interface";
import { PendingState } from "./pending-state";
import { RejectedState } from "./rejected-state";

export class ApproveState implements OrderStateInterface {
  private name = "order-rejected";

  constructor(private order: Order) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    throw new Error("O pedido já está no estado pagamento aprovado.");
  }

  rejectPayment(): void {
    this.order.setState(new RejectedState(this.order));
  }

  waitPayment(): void {
    this.order.setState(new PendingState(this.order));
  }

  shipOrder(): void {
    console.log("Enviando pedido para o cliente...");
  }
}
