import { Coffees } from "../../../../@types/Coffes";

import { ShoppingCartSimple } from 'phosphor-react'
import { AddToCartButton, BuyCardContainer, BuyContent, CoffeesCardContainer, IncrementAndDescrement, TagsCoffees } from "./styles";
import { formatMoney } from "../../../../ultils/formatPrice";

interface CoffeeProps {
  coffee: Coffees
}

export default function CoffeesCard({ coffee }: CoffeeProps) {

  return (
    <CoffeesCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />
      <TagsCoffees>
        {coffee.tags.map(tag => (
          <span key={tag}>{tag.toUpperCase()}</span>
        ))}
      </TagsCoffees>
      <h3>{coffee.name}</h3>
      <p>
        {coffee.description}
      </p>
      <BuyCardContainer>
        <BuyContent>
          <span>R$ </span>
          <span className="priceCoffee">{formatMoney(coffee.price)}</span>
        </BuyContent>
        <IncrementAndDescrement>
          <div>
            <button type="button">-</button>
            <span>1</span>
            <button type="button">+</button>
          </div>

          <AddToCartButton type="button">
            <ShoppingCartSimple size={24} weight="fill" />
          </AddToCartButton>
        </IncrementAndDescrement>
      </BuyCardContainer>
    </CoffeesCardContainer>
  )
}
