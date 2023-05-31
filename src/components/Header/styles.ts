import styled from 'styled-components'


export const HeaderContainer = styled.header`
  position: fixed;
  background-color: rgb(255, 255, 255);
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 20;
  justify-content: space-between;
  height: 104px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  padding: 0 5rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`

export const GpsAndCartShopping = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;

  span {
    display: flex;
    align-items: center;
    gap: .25rem;

    color: ${({ theme }) => theme.colors['brand-purple-dark']};
    background: ${({ theme }) => theme.colors['brand-purple-light']};
    font-size: .875rem;

    line-height: 1.125rem;
    padding: .5rem;
    border-radius: 6px;

    svg {
      color: ${({ theme }) => theme.colors['brand-purple']};
    }
  }
`

export const CartShoppingButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5rem;

  border-radius: 6px;
  border: 0;
  background: ${({ theme }) => theme.colors['brand-yellow-light']};
  color: ${({ theme }) => theme.colors['brand-yellow-dark']};

`