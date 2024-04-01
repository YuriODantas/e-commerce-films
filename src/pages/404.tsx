import { useNavigate } from 'react-router-dom'

import { CartContainer } from '../components/Container'
import { Message } from '../components/Message'

export function NotFound() {
  const navigate = useNavigate()
  return (
    <CartContainer>
      <Message
        text="Parece que não há nada por aqui :("
        image="/empty-cart.svg"
        buttonName="Recarregar página"
        handleClick={() => navigate('/')}
      />
    </CartContainer>
  )
}
