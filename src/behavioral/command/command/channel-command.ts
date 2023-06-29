import { CommandInterface } from "../interface/command-interface";
import { Tv } from "../receive/receiver-class";

export class ChannelCommand implements CommandInterface {
  constructor(private readonly receive: Tv, private readonly channel: string) {
    this.receive = receive;
    this.channel = channel;
  }

  execute(): void {
    this.receive.setChannel(this.channel);
  }
}
