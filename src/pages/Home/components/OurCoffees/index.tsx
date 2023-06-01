import { useContext } from "react";
import CoffeesCard from "../CoffeesCard";
import { CoffeesList, OurCoffeesContainer } from "./styles";
import { CartContext } from "../../../../hooks/useCart";


export default function OurCoffees() {

  const coffees = useContext(CartContext)
  
  return (
    <OurCoffeesContainer>
      <h1>Nossos cafés</h1>

      <CoffeesList>
        {coffees.map(coffee => (
          <CoffeesCard key={crypto.randomUUID()} coffee={coffee} />
        ))}
      </CoffeesList>
    </OurCoffeesContainer>
  )
}
