import { CommandInterface } from "../interface/command-interface";
import { Tv } from "../receive/receiver-class";

export class PowerCommand implements CommandInterface {
  constructor(private readonly receive: Tv) {
    this.receive = receive;
  }

  execute(): void {
    this.receive.setPower();
  }
}
