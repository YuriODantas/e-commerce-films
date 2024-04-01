import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../../context/CartContext'
import { useTotalPriceCart } from '../../../hook/useTotalPriceCart'
import { priceFormatter } from '../../../utils/formatter'
import { CartFooterContainer } from './styles'

export function CartFooter() {
  const { changeBuySuccess, clearCart } = useContext(CartContext)
  const total = useTotalPriceCart()
  const navigate = useNavigate()

  const handleCheckout = () => {
    changeBuySuccess(true)
    clearCart()
    navigate('/')
  }
  return (
    <CartFooterContainer>
      <button onClick={() => handleCheckout()}>Finalizar Pedido</button>
      <div>
        <span>Total</span>
        <p>{priceFormatter.format(total)}</p>
      </div>
    </CartFooterContainer>
  )
}
