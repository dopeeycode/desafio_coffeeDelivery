import styled from "styled-components";

export const OurCoffeesContainer = styled.section`
  margin-top: 9rem;

  > h1 {
    line-height: 2.625rem;
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 2rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors["base-title"]};
  }
`

export const CoffeesList = styled.div`
  width: 100%;
  
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3rem;
`