import { LayoutContainer } from './styles'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'

export default function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet/>
    </LayoutContainer>
  )
}
