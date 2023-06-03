import { Coffees } from "../../../../@types/Coffes";

import { ShoppingCartSimple } from 'phosphor-react'
import { AddToCartButton, BuyCardContainer, BuyContent, CoffeesCardContainer, IncrementAndDescrement, TagsCoffees } from "./styles";
import { formatMoney } from "../../../../ultils/formatPrice";
import { useCart } from "../../../../hooks/useCart";
import { useState } from "react";
import { toast, Toaster } from 'react-hot-toast'


interface CoffeeProps {
  coffee: Coffees
}


interface NotifyMessageType{
  message: string
  type: 'success' | 'error' | 'promise'
}


export default function CoffeesCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeToCart } = useCart()

  
  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function notifyMessage({ message, type}: NotifyMessageType){
    if(type === 'success') {
      toast.success(message, {
        icon: '👏',
        style: {
          borderRadius: '9px',
          boxShadow: '0px 1px 8px -4px rgba(0, 0, 0, .05)'
        }
      })
    }
    else if(type === 'error') {
      toast.error(message)
    }
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }
  
  function handleAddToCart(){
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }

    addCoffeToCart(coffeeToAdd)
    notifyMessage({
      type: 'success',
      message: 'Adicionado ao carrinho com sucesso.'
    })

  }
  
  return (
    <CoffeesCardContainer>
      <Toaster />
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
            <button onClick={handleDecrease} disabled={quantity <= 1} type="button">-</button>
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
