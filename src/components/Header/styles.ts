import styled from 'styled-components'

export const HeaderStyleContainer = styled.header`
  width: 100%;
  max-width: 1080px;
  min-height: 88px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
`

export const HeaderStyleLogo = styled.h1`
  color: ${({ theme }) => theme.palette['white-100']};
  font-weight: bold;
  font-size: 1.25rem;
`
