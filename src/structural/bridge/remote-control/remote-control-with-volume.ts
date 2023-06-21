import { RemoteControl } from "./remote-control";

export class RemoveControlWithVolume extends RemoteControl {
  volumeUp(): number {
    this.device.setVolume(this.device.getVolume() + 10);
    return this.device.getVolume();
  }

  volumeDown(): number {
    this.device.setVolume(this.device.getVolume() - 10);
    return this.device.getVolume();
  }
}
