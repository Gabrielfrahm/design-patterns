import { CommandInterface } from "../interface/command-interface";
import { Tv } from "../receive/receiver-class";

export class VolumeCommand implements CommandInterface {
  constructor(private readonly receive: Tv, private readonly volume: number) {
    this.receive = receive;
    this.volume = volume;
  }

  execute(): void {
    this.receive.setVolume(this.volume);
  }
}
