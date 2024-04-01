import styled from 'styled-components'

export const CartItemMobileContainer = styled.div`
  width: 100%;
  display: none;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }

  @media (width < 550px) {
    display: flex;
  }
`

export const CartWrapperTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  p {
    max-width: 102px;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`

export const CartWrapperBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  :first-child {
    display: flex;
    justify-content: flex-end;
  }
`
