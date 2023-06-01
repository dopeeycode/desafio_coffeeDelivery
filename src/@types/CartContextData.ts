import { Coffees } from "./Coffes";


export interface UpdateProductAmount {
  coffeeId: string;
  price: number;
}

export interface CartContextData {
  cart: Coffees[]
  addProductToCart: (coffeeId: string) => Promise<void>
  removeProductToCart: (coffeeId: string) => void
  updateProductAmount: ({ coffeeId, price }: UpdateProductAmount ) => void
}