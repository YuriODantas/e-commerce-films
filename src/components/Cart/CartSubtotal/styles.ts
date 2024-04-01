import styled from 'styled-components'

export const CartSubtotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > p {
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.palette['blue-700']};
  }

  > span {
    display: none;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.palette['gray-300']};
  }

  @media (width < 550px) {
    align-items: flex-end;
    > span {
      display: block;
    }
  }
`
