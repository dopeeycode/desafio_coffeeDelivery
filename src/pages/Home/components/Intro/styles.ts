import styled from "styled-components";
import { IntroBG } from "../../../../assets/directoryImage";

import { rgba } from 'polished'


export const IntroContainer = styled.section`
  margin-top: 13rem;
  display: flex;
  background: ${({ theme }) => `url(${IntroBG}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
)`};
  background-size: cover;
  gap: 3.5rem;
  justify-content: center;

  > div {

    h1 {
      color: ${({ theme }) => theme.colors["base-title"]};
      font-weight: 800;
      font-size: 3rem;
      line-height: 3.875rem;
      font-family: ${({ theme }) => theme.fonts.title};

    }

    p {
      color: ${({ theme }) => theme.colors["base-title"]};
      font-size: 1.25rem;
      line-height: 1.625rem;
      margin-top: 1rem;
    }
    
  }
`

export const IconsInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-top: 4.125rem;
 
`

export const CartIconWithInfo = styled.li`
    display: flex;
    align-items: center;
    gap: .75rem;
    margin-bottom: 1.25rem;

    > div{
      display: flex;
      align-items: center;
      padding: .5rem;
      background: ${({ theme }) => theme.colors["brand-yellow-dark"]};
      border-radius: 9999px;
    }
    
    svg {
      color: ${({ theme }) => theme.colors["base-white"]};

    }
`

export const TimerIconWithInfo = styled.li`
    display: flex;
    align-items: center;
    gap: .75rem;
    margin-bottom: 1.25rem;

    > div{
      display: flex;
      align-items: center;
      padding: .5rem;
      background: ${({ theme }) => theme.colors["brand-yellow"]};
      border-radius: 9999px;
    }
    
    svg {
      color: ${({ theme }) => theme.colors["base-white"]};

    }
`

export const PackageIconWithInfo = styled.li`
    display: flex;
    align-items: center;
    gap: .75rem;
    margin-bottom: 1.25rem;

    span {
      line-height: 21px;
    }

    > div{
      display: flex;
      align-items: center;
      padding: .5rem;
      background: ${({ theme }) => theme.colors["base-text"]};
      border-radius: 9999px;
    }
    
    svg {
      color: ${({ theme }) => theme.colors["base-white"]};

    }
`

export const CoffeeIconWithInfo = styled.li`
    display: flex;
    align-items: center;
    gap: .75rem;
    margin-bottom: 1.25rem;

    > div{
      display: flex;
      align-items: center;
      padding: .5rem;
      background: ${({ theme }) => theme.colors["brand-purple"]};
      border-radius: 9999px;
    }
    
    svg {
      color: ${({ theme }) => theme.colors["base-white"]};

    }
`
