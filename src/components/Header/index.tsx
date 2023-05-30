import { coffeLogo } from '../../assets/directoryImage'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { CartShoppingButton, GpsAndCartShopping, HeaderContainer } from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img src={coffeLogo} alt="Coffe Delivery LogoTipo/Apresentação" />
      </NavLink>
      <GpsAndCartShopping>
        <span>
          <MapPin size={24} weight='fill' />
          Parnamirin RN
        </span>

        <NavLink to={'/completeOrder'}>
          <CartShoppingButton type='button'>
            <ShoppingCart size={24} weight='fill' color={'#C47F17'} />
          </CartShoppingButton>
        </NavLink>
      </GpsAndCartShopping>
    </HeaderContainer>
  )
}
