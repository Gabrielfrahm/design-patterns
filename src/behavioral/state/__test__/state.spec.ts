import { ApproveState } from "../approved-state";
import { Order } from "../order";
import { PendingState } from "../pending-state";
import { RejectedState } from "../rejected-state";

describe("state test", () => {
  test("order", () => {
    const order = new Order();
    expect(order.getState()).toBeInstanceOf(PendingState);
    order.approvePayment();
    expect(order.getState()).toBeInstanceOf(ApproveState);
    order.rejectPayment();
    expect(order.getState()).toBeInstanceOf(RejectedState);
  });
});
