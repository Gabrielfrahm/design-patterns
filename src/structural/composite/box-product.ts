import { ComponentProtocol } from "./component-protocol";

export class BoxProduct extends ComponentProtocol {
  private children: ComponentProtocol[] = [];

  add(...items: ComponentProtocol[]): void {
    items.forEach((item) => this.children.push(item));
  }

  remove(item: ComponentProtocol): void {
    const itemIndex = this.children.indexOf(item);
    if (itemIndex !== -1) this.children.splice(itemIndex, 1);
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}
