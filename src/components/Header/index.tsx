import { coffeLogo } from '../../assets/directoryImage'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { CartShoppingButton, GpsAndCartShopping, HeaderContainer } from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <img src={coffeLogo} alt="Coffe Delivery LogoTipo/Apresentação" />
      <GpsAndCartShopping>
        <span>
          <MapPin size={24} weight='fill' />
          Parnamirin RN
        </span>

        <CartShoppingButton type='button'>
          <ShoppingCart size={24} weight='fill' />
        </CartShoppingButton>
      </GpsAndCartShopping>
    </HeaderContainer>
  )
}
