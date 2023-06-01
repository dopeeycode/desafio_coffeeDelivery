import { useContext } from "react";
import { CartContext } from "../contexts/useCart";

export function useCart(){
  const context = useContext(CartContext)

  return context
}