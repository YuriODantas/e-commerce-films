import { CartContainerStyle, CartTextStyle } from './styles'

export function Cart() {
  return (
    <CartContainerStyle to="/cart">
      <CartTextStyle>
        <p>Meu Carrinho</p>
        <span>0 itens</span>
      </CartTextStyle>
      <img src="/cart-icon.svg" alt="cart icon" />
    </CartContainerStyle>
  )
}
