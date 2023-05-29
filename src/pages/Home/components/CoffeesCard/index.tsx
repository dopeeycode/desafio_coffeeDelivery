import { Coffees } from "../../../../@types/Coffes";

import { ShoppingCartSimple } from 'phosphor-react'
import { CoffeesCardContainer, TagsCoffeeContainer } from "./styles";

interface CoffeeProps {
  coffee: Coffees
}


export default function CoffeesCard({ coffee }: CoffeeProps) {

  return (
    <CoffeesCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />
      <TagsCoffeeContainer>
        {coffee.tags.map(tag => (
          <span>{tag.toUpperCase()}</span>
        ))}
      </TagsCoffeeContainer>
      <h3>{coffee.name}</h3>
      <p>
        {coffee.description}
      </p>
      <div>
        <span>{coffee.price}</span>
        <div>
          <span>1</span>
          <button type="button">
            <ShoppingCartSimple size={24} weight="fill" />
          </button>
        </div>
      </div>
    </CoffeesCardContainer>
  )
}
