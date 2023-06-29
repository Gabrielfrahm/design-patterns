export class Tv {
  public power: boolean;
  public channel: string;
  public volume: number;

  constructor() {
    this.power = false;
    this.channel = "12";
    this.volume = 5;
  }

  public setPower(): void {
    this.power = !this.power;
  }

  public setChannel(channel: string): void {
    this.channel = channel;
  }

  public setVolume(volume: number): void {
    this.volume = volume;
  }
}
