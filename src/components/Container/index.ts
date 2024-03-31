import styled from 'styled-components'

export const Container = styled.main`
  background-color: ${({ theme }) => theme.palette['blue-700']};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.section`
  width: 100%;
  max-width: 1080px;
  padding: 0 16px;
`
