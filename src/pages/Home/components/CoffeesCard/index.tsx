import { Coffees } from "../../../../@types/Coffes";

import { ShoppingCartSimple } from 'phosphor-react'
import { AddToCartButton, BuyCardContainer, BuyContent, CoffeesCardContainer, IncrementAndDescrement, TagsCoffees } from "./styles";
import { formatMoney } from "../../../../ultils/formatPrice";
import { useCart } from "../../../../hooks/useCart";
import { useState } from "react";

interface CoffeeProps {
  coffee: Coffees
}



export default function CoffeesCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeToCart } = useCart()

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }
  
  function handleAddToCart(){
    const coffeeToAdd = {
      ...coffee,
      quantity: 1
    }

    addCoffeToCart(coffeeToAdd)
  }
  
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
            <button onClick={handleDecrease} type="button">-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease} type="button">+</button>
          </div>

          <AddToCartButton onClick={handleAddToCart} type="button">
            <ShoppingCartSimple size={24} weight="fill" />
          </AddToCartButton>
        </IncrementAndDescrement>
      </BuyCardContainer>
    </CoffeesCardContainer>
  )
}
