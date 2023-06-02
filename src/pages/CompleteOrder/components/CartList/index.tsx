import * as S from './styles'
import { useCart } from '../../../../hooks/useCart'
import CartItems from '../CartItems'
import EmptyCart from '../EmptyCart';

export default function CartList() {
  const { cartItems } = useCart()
  
  const emptyCart = cartItems.length === 0;

  return (
    <S.SelectedCoffessContainer>
        <h3>Cafés selecionados</h3>
        <S.OrderedContainer>
          {emptyCart ? (
            <EmptyCart />
          ): (
            <CartItems />
          )}
        </S.OrderedContainer>
      </S.SelectedCoffessContainer>
  )
}
