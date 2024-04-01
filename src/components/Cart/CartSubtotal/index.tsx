import { CartItemsType } from '../../../context/CartContext'
import { priceFormatter } from '../../../utils/formatter'
import { CartSubtotalContainer } from './styles'

interface IProps {
  cart: CartItemsType
}
export function CartSubtotal({ cart }: IProps) {
  return (
    <CartSubtotalContainer>
      <span>Subtotal</span>
      <p>{priceFormatter.format(cart.price * cart.quantity)}</p>
    </CartSubtotalContainer>
  )
}
