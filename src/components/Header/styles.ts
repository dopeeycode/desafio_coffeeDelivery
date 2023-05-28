import styled from 'styled-components'


export const HeaderContainer = styled.header`
  /* position: sticky;
  top: 0; */
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
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