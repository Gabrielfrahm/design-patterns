import { OrderStateInterface } from "./order-state-interface";
import { PendingState } from "./pending-state";

export class Order {
  private state: OrderStateInterface = new PendingState(this);

  getState(): OrderStateInterface {
    return this.state;
  }

  setState(state: OrderStateInterface): void {
    this.state = state;
  }

  getStateName(): string {
    return this.state.getName();
  }

  approvePayment(): void {
    this.state.approvePayment();
  }

  rejectPayment(): void {
    this.state.rejectPayment();
  }

  waitPayment(): void {
    this.state.waitPayment();
  }

  shipOrder(): void {
    this.state.shipOrder();
  }
}
