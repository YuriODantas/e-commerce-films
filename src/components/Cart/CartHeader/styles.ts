import styled from 'styled-components'

export const CartHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-bottom: 28px;

  > p {
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.palette['gray-300']};
  }
  :last-child {
    text-align: center;
  }

  @media (width < 550px) {
    display: none;
  }
`
