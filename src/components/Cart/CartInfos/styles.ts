import styled from 'styled-components'

export const CartInfosContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  > img {
    width: 91px;
  }

  > div > p {
    color: ${({ theme }) => theme.palette['blue-700']};
    font-weight: 700;
    font-size: 0.875rem;
    margin-bottom: 8px;
  }

  @media (width < 550px) {
    > img {
      display: none;
    }

    > div > span {
      display: none;
    }
  }
`
