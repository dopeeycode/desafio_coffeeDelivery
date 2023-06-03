import { Trash } from "phosphor-react"
import { useCart } from "../../../../hooks/useCart"
import { formatMoney } from "../../../../ultils/formatPrice"
import * as S from '../CartList/styles'


export default function CartItems() {
  const { removeCoffeToCart, cartItems } = useCart()

  function handleRemoveItemToCart(coffeeId: string) {
    removeCoffeToCart(coffeeId)
  }


  return (
    <>
      {cartItems.map((cartItem) => (
      <div key={cartItem._id} className='CoffeeCartItem'>
        <img src={`/coffees/${cartItem.photo}`} alt="" />
        <div className='Content_items'>
          <span>{cartItem.name}</span>
          <div className='ContainerToolsItems'>
            <S.IncrementAndDescrement>
              <button type="button">-</button>
              <span>{cartItem.quantity}</span>
              <button type="button">+</button>
            </S.IncrementAndDescrement>
            <button 
              onClick={() => handleRemoveItemToCart(cartItem._id)} 
              type='button' className='RemoveItemButton'
              >
              <Trash size={17} />
              REMOVER
            </button>
          </div>
        </div>
        <strong>R$ {formatMoney(cartItem.price)}</strong>
      </div>
    ))}
    <S.AllPrices>
      <div>
        <span>Total de itens</span>
        <span className='PriceAmountSpan'>R$ 29,70</span>
      </div>
      <div>
        <span>Entrega</span>
        <span className='PriceAmountSpan'>R$ 3,50</span>
      </div>
      <S.TotalPrice>
        <strong>Total</strong>
        <strong>R$ 33,20</strong>
      </S.TotalPrice>
    </S.AllPrices>
    <S.ConfirmOrderButton>
      confirmar pedido
    </S.ConfirmOrderButton>
    </>
  )
}
