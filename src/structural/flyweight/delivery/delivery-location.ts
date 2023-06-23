import { DeliveryFlyWeight } from "./delivery-flyweight.interface";
import { DeliveryLocationData } from "./delivery-types";

export class DeliveryLocation implements DeliveryFlyWeight {
  constructor(private readonly intrinsicState: DeliveryLocationData) {}

  //estrícnico
  deliver(name: string, number: string): string {
    return `entrega para ${name}, em ${this.intrinsicState.street} ${this.intrinsicState.city} numero ${number}`;
  }
}
