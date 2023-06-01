import { ReactNode, createContext, useState } from "react";
import { Coffees } from "../@types/Coffes";
import { produce } from 'immer'

export interface CartItem extends Coffees {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addCoffeToCart: (coffee: CartItem) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export default function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addCoffeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(cartItem => cartItem.id === coffee.id)

    const newCart = produce(cartItems, (draft) => {
      if(coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
        alert('adicionado')
      }else{
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  return (
    <CartContext.Provider value={{ cartItems, addCoffeToCart }}>
      {children}
    </CartContext.Provider>
  )
}