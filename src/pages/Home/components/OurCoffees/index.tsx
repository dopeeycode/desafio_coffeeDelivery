import { useContext, useEffect, useState } from "react";
import CoffeesCard from "../CoffeesCard";
import { CoffeesList, OurCoffeesContainer } from "./styles";
import { api } from "../../../../services/api";
import { Coffees } from "../../../../@types/Coffes";


export default function OurCoffees() {
  const[coffees, setCoffees] = useState<Coffees[]>([])

  useEffect(() => {
    async function loadData (){
      const { data } = await api.get('/coffe')
      
      setCoffees(data[0].contents)
    }

    loadData()
  }, [])

  
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
