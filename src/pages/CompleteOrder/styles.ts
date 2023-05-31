import styled from "styled-components";

export const CompletedOrder = styled.main`

  margin-top: 11rem;
  display: flex;
  gap: 2rem;
  justify-content: space-between;

  
`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: .75rem;
  width: 640px;
  background: #fff;

  h3 {

    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 1.125rem;
    line-height: 1.438rem;
  }



`

export const ContentAfterContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors["base-card"]};

`

export const AddressContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: .625rem;
  margin-bottom: 2rem;

  p {
    font-size: .875rem;
  }

  span {
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }

  svg {
      color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .625rem;
  input {
    display: flex;
    gap: 4px;
    padding: .75rem;
    border-radius: 4px;
    background: 1px solid ${({ theme }) => theme.colors["base-input"]};

    border: 1px solid ${({ theme }) => theme.colors["base-button"]};

    display: inline-block;

    &::placeholder {
      font-size: .875rem;
      color: 1px solid ${({ theme }) => theme.colors["base-label"]};
      line-height: 1.125rem;

    }

    &:first-child{
      width: 200px;
    }
  }
`

export const NumberAndComplement = styled.div`
  display: flex;
  gap: .75rem;
  position: relative;

  & input:nth-child(2) {
    flex: 1;
  }

  span {
    position: absolute;
    right: .75rem;
    font-style: italic;
    font-size:.75rem;
    color: ${({ theme }) => theme.colors["base-label"]};
    bottom: 15px;
  }

`

export const NeighborhoodCityAndUF = styled.div`
  display: flex;
  gap: 4px;

  & input:nth-child(1) {
    margin-inline-end: .6rem;
  }

  & input:nth-child(2) {
    flex: 1;
  }

  & input:last-child{
    width: 60px;
  }
`

export const ContainerMethodPayment = styled.div`
  padding: 2.5rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: .75rem;

  border-radius: 6px;
  background: ${({ theme }) => theme.colors["base-card"]};

  > div {
    display: flex;
    align-items: flex-start;
    gap: .75rem;

    p {
      font-size: .875rem;
    }
  }
  svg{
    color: ${({ theme }) => theme.colors["brand-purple"]};
  }
`

export const MethodPaymentButtons = styled.div`
  margin-top: 2rem; 
  display: flex;
  align-items: center;
  gap: .75rem;
  width: 100%;
  

  button {
    padding: 1rem;
    width: 100%;
    border: 0;
    display: flex;
    align-items: center;
    gap: .75rem;
    border-radius: 6px;
    font-size: .75rem;
    color: ${({ theme }) => theme.colors["base-text"]};
    line-height: 1.188rem;
    background: ${({ theme }) => theme.colors["base-button"]};

  }
`
