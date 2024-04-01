import styled from 'styled-components'

export const HeaderCartContainerStyle = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.palette['white-100']};
  text-decoration: none;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const HeaderCartTextStyle = styled.div`
  display: flex;
  gap: 2px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  font-size: 0.875rem;
  font-weight: 600;
  > span {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.palette['gray-300']};
  }
  @media (width <= 550px) {
    p {
      display: none;
    }
  }
`
