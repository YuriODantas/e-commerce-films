import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../context/CartContext'
import { useTotalQuantityItems } from '../../hook/useTotalQuantityItems'
import { HeaderCartContainerStyle, HeaderCartTextStyle } from './styles'

export function HeaderCart() {
  const { changeBuySuccess } = useContext(CartContext)
  const navigate = useNavigate()
  const total = useTotalQuantityItems()

  const handleClick = () => {
    changeBuySuccess(false)
    navigate('/cart')
  }
  return (
    <HeaderCartContainerStyle onClick={() => handleClick()}>
      <HeaderCartTextStyle>
        <p>Meu Carrinho</p>
        <span>{total} itens</span>
      </HeaderCartTextStyle>
      <img src="/cart-icon.svg" alt="cart icon" />
    </HeaderCartContainerStyle>
  )
}
