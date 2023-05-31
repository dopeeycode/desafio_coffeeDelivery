import { Trash } from 'phosphor-react'
import * as S from './styles'

export default function CartList() {
  return (
    <S.SelectedCoffessContainer>
        <h3>Cafés selecionados</h3>
        <S.OrderedContainer>
          <div className='CoffeeCartItem'>
            <img src='/coffees/americano.png' alt="" />
            <div className='Content_items'>
              <span>Expresso Tradicional</span>
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
            <strong>R$ 9,90</strong>
          </div>
          <div className='CoffeeCartItem'>
            <img src='/coffees/latte.png' alt="" />
            <div className='Content_items'>
              <span>Latte</span>
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
            <strong>R$ 19,80</strong>
          </div>
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
