import styled from "styled-components";

export const CoffeesCardContainer = styled.div `
  display: flex;
  flex-direction: column;
  border-radius: 6px 36px;
  padding: 1rem;
  align-items: center;
  background: ${({ theme }) => theme.colors["base-card"]};


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

  }
`

export const TagsCoffeeContainer = styled.div`
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