export abstract class ComponentProtocol {
  abstract getPrice(): number;

  add(item: ComponentProtocol): void {}
  remove(item: ComponentProtocol): void {}
}
