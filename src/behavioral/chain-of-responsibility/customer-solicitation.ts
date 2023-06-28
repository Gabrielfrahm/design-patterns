export class CustomerSolicitation {
  public resolved: boolean;
  public resolutionBy: string;

  constructor(public type: "level 1" | "level 2" | "level 3") {
    this.type = type;
  }
}
