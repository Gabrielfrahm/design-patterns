import { ApproveState } from "./approved-state";
import { Order } from "./order";
import { OrderStateInterface } from "./order-state-interface";
import { RejectedState } from "./rejected-state";

export class PendingState implements OrderStateInterface {
  private name = "order-pending";

  constructor(private order: Order) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    this.order.setState(new ApproveState(this.order));
  }

  rejectPayment(): void {
    this.order.setState(new RejectedState(this.order));
  }

  waitPayment(): void {
    throw new Error("O pedido já está no estado pagamento pendente.");
  }

  shipOrder(): void {
    throw new Error("Não posso enviar o pedido com pagamento pendente.");
  }
}
