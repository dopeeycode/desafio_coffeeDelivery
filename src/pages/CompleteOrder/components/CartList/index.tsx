import { Trash } from 'phosphor-react'
import * as S from './styles'
import { formatMoney } from '../../../../ultils/formatPrice'
import { useCart } from '../../../../hooks/useCart'

export default function CartList() {

  const { cartItems } = useCart()

  return (
    <S.SelectedCoffessContainer>
        <h3>Cafés selecionados</h3>
        <S.OrderedContainer>
          {cartItems.map((cartItem) => (
            <div key={cartItem.id} className='CoffeeCartItem'>
              <img src={`/coffees/${cartItem.photo}`} alt="" />
              <div className='Content_items'>
                <span>{cartItem.name}</span>
                <div className='ContainerToolsItems'>
                  <S.IncrementAndDescrement>
                    <button type="button">-</button>
                    <span>1</span>
                    <button type="button">+</button>
                  </S.IncrementAndDescrement>
                  <button type='button' className='RemoveItemButton'>
                    <Trash size={17} />
                    REMOVE
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
        </S.OrderedContainer>
      </S.SelectedCoffessContainer>
  )
}
