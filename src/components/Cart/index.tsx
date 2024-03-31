import { useTotalQuantityItems } from '../../hook/useTotalQuantityItems'
import { CartContainerStyle, CartTextStyle } from './styles'

export function Cart() {
  const total = useTotalQuantityItems()
  return (
    <CartContainerStyle to="/cart">
      <CartTextStyle>
        <p>Meu Carrinho</p>
        <span>{total} itens</span>
      </CartTextStyle>
      <img src="/cart-icon.svg" alt="cart icon" />
    </CartContainerStyle>
  )
}
