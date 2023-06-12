export interface ProductInterface {
  nameProduct(): string;
  price(value: number): number;
  available(): boolean;
}
