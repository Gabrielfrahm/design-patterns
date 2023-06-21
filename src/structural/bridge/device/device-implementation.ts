export interface DeviceImplementation {
  getName(): string;
  getPower(): boolean;
  getVolume(): number;
  setName(name: string): void;
  setPower(power: boolean): void;
  setVolume(volume: number): void;
}
