import styled from 'styled-components'

export const WrapperCards = styled.div`
  display: grid;
  gap: 16px 24px;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 24px 0;

  @media (width < 835px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (width < 572px) {
    grid-template-columns: 1fr;
  }
`
