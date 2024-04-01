import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-bottom: 24px;

  @media (width < 550px) {
    display: none;
  }
`
