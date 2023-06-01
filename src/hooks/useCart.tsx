import { ReactNode, createContext, useEffect, useState } from 'react'
import { Coffees } from '../@types/Coffes';
import { api } from '../services/api';

export const CartContext = createContext<Coffees[]>([]);

interface CartProviderProps {
  children: ReactNode
}

export default function CartProvider({ children }: CartProviderProps){

  const[coffees, setCoffees] = useState<Coffees[]>([])

  useEffect(() => {
    const loadData = async () => {
      const { data: coffees } = await api.get('/coffe')
      setCoffees(coffees[0].contents)
    }

    loadData()

  }, [])

  return (
    <CartContext.Provider value={coffees}>
      {children}
    </CartContext.Provider>
    
  )
}