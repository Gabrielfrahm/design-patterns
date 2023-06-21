import { DeviceImplementation } from "../device/device-implementation";

export class RemoteControl {
  constructor(protected device: DeviceImplementation) {}

  togglePower(): boolean {
    this.device.setPower(!this.device.getPower());
    return this.device.getPower();
  }
}
