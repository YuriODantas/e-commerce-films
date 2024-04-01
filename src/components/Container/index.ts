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

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette['white-100']};
  padding: 24px;
  border-radius: 4px;
  margin-bottom: 20px;
`
