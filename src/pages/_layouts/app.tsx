import { Outlet } from 'react-router-dom'

import { Container, Content } from '../../components/Container'
import { Header } from '../../components/Header'

export function AppLayout() {
  return (
    <Container>
      <Header />

      <Content>
        <Outlet />
      </Content>
    </Container>
  )
}
