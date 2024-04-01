import styled from 'styled-components'

export const CartQuantitySelectorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    text-align: center;
    width: 62px;
    height: 26px;
    border-radius: 4px;
    border: ${({ theme }) => `1px solid ${theme.palette['gray-100']}`};
    color: ${({ theme }) => theme.palette['blue-700']};
    font-size: 0.875rem;
    font-weight: 400;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }

  @media (width < 550px) {
    > input {
      width: 59px;
    }
  }
`
