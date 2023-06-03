import styled from "styled-components";

export const EmptyCardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1.3em;

  img {
    width: 12rem;
    height: 12rem;
  }

  h1 {
    color: ${({ theme }) => theme.colors["brand-yellow"]};
    font-size: 2rem;
    line-height: 1rem;
    font-family: ${({ theme }) => theme.fonts.title};
    
    span {
      font-weight: 800;
      color: ${({ theme }) => theme.colors["brand-yellow-dark"]};

    }
  }

  p {
    text-align: center;
    margin-bottom: 1.2rem;
    line-height: .875rem;
    color: ${({ theme }) => theme.colors["base-label"]};
    font-weight: 600;

    }
`