import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CartContainerStyle = styled(Link)`
  color: ${({ theme }) => theme.palette['white-100']};
  text-decoration: none;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`
export const CartTextStyle = styled.div`
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
  @media (width <= 425px) {
    p {
      display: none;
    }
  }
`
