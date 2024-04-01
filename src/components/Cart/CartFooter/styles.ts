import styled from 'styled-components'

export const CartFooterContainer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;

  > button {
    width: 173px;
    height: 34px;
    background-color: ${({ theme }) => theme.palette['blue-100']};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.palette['white-100']};
    text-transform: uppercase;
    cursor: pointer;
    transition: 100ms all ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.palette['blue-300']};
    }
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    font-weight: 700;
    text-transform: uppercase;

    > span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.palette['gray-300']};
    }

    > p {
      min-width: 130px;
      text-align: center;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.palette['blur-700']};
    }
  }

  @media (width < 550px) {
    flex-direction: column-reverse;
    gap: 16px;

    > div,
    > button {
      width: 100%;
    }

    > button {
      height: 40px;
    }
  }
`
