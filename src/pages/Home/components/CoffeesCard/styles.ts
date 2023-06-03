import styled from "styled-components";

export const CoffeesCardContainer = styled.div `
  display: flex;
  flex-direction: column;
  border-radius: 6px 36px;
  padding: 1rem;
  align-items: center;
  background: ${({ theme }) => theme.colors["base-card"]};


  img {
    margin-top: -35px;
    width: 7.5rem;
    height: 7.5rem;
  }


  h3 {
    font-size: 1.438rem;
    margin-top: 1rem;
    margin-bottom: .5rem;
    font-family: ${({ theme }) => theme.fonts.title};
  }

  p {
    font-size: .875rem;
    line-height: 1.125rem;
    text-align: center;
    color: ${({ theme }) => theme.colors["base-label"]};

    margin-bottom: 2.063rem;
  }
`

export const TagsCoffees = styled.div`
  margin-top: .75rem;
  display: flex;
  gap: .75rem;

  span {
    background: ${({ theme }) => theme.colors["brand-yellow-light"]};
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};

    font-weight: 700;
    font-size: .725rem;

    padding: .25rem .5rem;
    border-radius: 100px;
  }
`

export const BuyCardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-inline: 1rem;
  gap: 1.813rem;
  align-items: center;
`

export const BuyContent = styled.div `
  display: flex;
  align-items: center;
  gap: .2rem;

  .priceCoffee{
    font-weight: 800;
    font-size: 1.4rem;
    font-family: ${({ theme }) => theme.fonts.title};
  }
  > span{ 
    font-size: .875rem;
    font-weight: 400;
  }

`

export const IncrementAndDescrement = styled.div`
  display: flex;
  gap: .5rem;
  
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    width: 72px;
    height: 38px;
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
  }
`

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;

  padding: .5rem;
  border: 0;
  background: ${({ theme }) => theme.colors["brand-purple-dark"]};
  color: ${({ theme }) => theme.colors["base-white"]};

  border-radius: 6px;
`
