import { Mediator } from "./mediator";
import { ProductType } from "./product-interface";

export class Seller {
  private products: ProductType[] = [];
  private mediator?: Mediator;

  showProducts(): ProductType[] {
    return this.products;
  }

  addProducts(...products: ProductType[]): void {
    products.forEach((prod) => this.products.push(prod));
  }

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  sell(id: string): ProductType | void {
    const productIndex = this.products.findIndex(
      (product) => product.id === id
    );
    if (productIndex === -1) return;
    const product = this.products.splice(productIndex, 1);
    return product[0];
  }

  viewProducts(): void {
    if (!this.mediator) return;
    this.mediator.showProducts();
  }

  buy(id: string): void {
    if (!this.mediator) return;
    this.mediator.buy(id);
  }
}
