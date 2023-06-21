import { DeviceImplementation } from "./device-implementation";

export class Tv implements DeviceImplementation {
  private volume: number;
  private power: boolean;
  private name: string;

  constructor() {
    this.name = "tv";
    this.volume = 10;
    this.power = false;
  }

  getName(): string {
    return this.name;
  }
  getPower(): boolean {
    return this.power;
  }
  getVolume(): number {
    return this.volume;
  }
  setName(name: string): void {
    this.name = name;
  }

  setPower(power: boolean): void {
    this.power = power;
  }

  setVolume(volume: number): void {
    if (volume < 0) return;
    if (volume > 100) return;
    this.volume = volume;
  }
}
