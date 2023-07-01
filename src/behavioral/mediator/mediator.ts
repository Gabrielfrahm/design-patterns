import { ProductType } from "./product-interface";
import { Seller } from "./seller";

export class Mediator {
  private sellers: Seller[] = [];

  addSeller(...seller: Seller[]): void {
    seller.forEach((seller) => {
      this.sellers.push(seller);
      seller.setMediator(this);
    });
  }

  buy(id: string): ProductType | void {
    let product;

    for (let i = 0; i < this.sellers.length; i++) {
      product = this.sellers[i].sell(id);

      if (product) {
        return {
          id: product.id,
          name: product.name,
          price: product.price,
        };
      }
    }
  }

  showProducts(): ProductType[] {
    let prods: ProductType[] = [];
    this.sellers.forEach((seller) => {
      for (const item of seller.showProducts()) {
        prods.push(item);
      }
    });
    return prods;
  }
}
