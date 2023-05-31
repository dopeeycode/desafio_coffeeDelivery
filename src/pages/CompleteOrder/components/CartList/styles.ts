import styled from "styled-components"

export const SelectedCoffessContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: .75rem;

  h3 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 1.125rem;
    line-height: 1.438rem;
  }
`

export const OrderedContainer = styled.div`
  border-radius: 6px 44px;
  padding: 2.5rem;

  background: ${({ theme }) => theme.colors["base-card"]};

  

  .CoffeeCartItem{
    display: flex;
    align-items: flex-start;
    padding: 8px 4px;
    justify-content: space-between;
    gap: 1.25rem;

    & + .CoffeeCartItem {
      margin-bottom: 1.5rem;
    }

    & + .CoffeeCartItem:nth-last-child(3) {
      border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};
    }

    span {
      color: ${({ theme }) => theme.colors["base-subtitle"]};

    }

    strong {
      font-weight: 700;
      line-height: 21px;
      color: ${({ theme }) => theme.colors["base-text"]};
    }

    img {
      margin-top: -4px;
      width: 4rem;
      height: 4rem;
    }

  }


  .ContainerToolsItems {
    display: flex;
    gap: .5rem;
    align-items: center;
    margin-top: .5rem;
    margin-bottom: 1.5rem;

    .RemoveItemButton {
      background: ${({ theme }) => theme.colors["base-button"]};
      border: 0;
      gap: .25rem;
      border-radius: 6px;
      width: 92px;
      height: 32px;


      display: flex;
      align-items: center;
      justify-content: center;

      line-height: 19px;
      color: ${({ theme }) => theme.colors["base-text"]};
      
      padding: .5rem;
      font-size: .75rem;

      svg {
        color: ${({ theme }) => theme.colors["brand-purple"]};
      }
    }
  }
`

export const IncrementAndDescrement = styled.div`
  display: flex;
  gap: .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .5rem;
  width: 72px;
  height: 32px;
  gap: .5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors["base-button"]};

    > span {
      font-weight: 800;
    }

    button {
      background: transparent;
      border: 0;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors["brand-purple"]};

    }
`

export const AllPrices = styled.div`
  display: flex;
  flex-direction: column;
  gap: .844rem;
  width: 100%;


  > div {
    display: flex;
    justify-content: space-between;
    font-size: .875rem;

    .PriceAmountSpan {
      font-size: 1rem;
    }
  }
`

export const TotalPrice = styled.div`
  margin-bottom: 1.5rem;
  strong{
    font-weight: 700;
    line-height: 1.625rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }

`

export const ConfirmOrderButton = styled.button`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  justify-content: center;
  padding: .75rem .5rem;
  width: 100%;
  font-weight: 700;
  line-height: 1.375rem;
  font-size: .875rem;

  background: ${({ theme }) => theme.colors["brand-yellow"]};
  color: ${({ theme }) => theme.colors["base-white"]};
  border: 0;
  border-radius: 6px;


`